var Qc = Object.defineProperty;
var ef = (n, e, t) => e in n ? Qc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ps = (n, e, t) => (ef(n, typeof e != "symbol" ? e + "" : e, t), t);
function Rt() {
}
function Zl(n) {
  return n();
}
function uo() {
  return /* @__PURE__ */ Object.create(null);
}
function Yn(n) {
  n.forEach(Zl);
}
function Ql(n) {
  return typeof n == "function";
}
function ea(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function tf(n) {
  return Object.keys(n).length === 0;
}
function pi(n, e) {
  n.appendChild(e);
}
function Jn(n, e, t) {
  n.insertBefore(e, t || null);
}
function zi(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Kt(n) {
  return document.createElement(n);
}
function Nr(n) {
  return document.createTextNode(n);
}
function nf() {
  return Nr(" ");
}
function sf() {
  return Nr("");
}
function st(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function rf(n) {
  return Array.from(n.childNodes);
}
function of(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function lf(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
let Mi;
function vi(n) {
  Mi = n;
}
function Fr() {
  if (!Mi)
    throw new Error("Function called outside component initialization");
  return Mi;
}
function af(n) {
  Fr().$$.on_mount.push(n);
}
function hf(n) {
  Fr().$$.on_destroy.push(n);
}
function cf() {
  const n = Fr();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const r = lf(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return s.slice().forEach((o) => {
        o.call(n, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const Vt = [], Vs = [];
let $t = [];
const po = [], ff = /* @__PURE__ */ Promise.resolve();
let zs = !1;
function uf() {
  zs || (zs = !0, ff.then(ta));
}
function _s(n) {
  $t.push(n);
}
const gs = /* @__PURE__ */ new Set();
let Ht = 0;
function ta() {
  if (Ht !== 0)
    return;
  const n = Mi;
  do {
    try {
      for (; Ht < Vt.length; ) {
        const e = Vt[Ht];
        Ht++, vi(e), df(e.$$);
      }
    } catch (e) {
      throw Vt.length = 0, Ht = 0, e;
    }
    for (vi(null), Vt.length = 0, Ht = 0; Vs.length; )
      Vs.pop()();
    for (let e = 0; e < $t.length; e += 1) {
      const t = $t[e];
      gs.has(t) || (gs.add(t), t());
    }
    $t.length = 0;
  } while (Vt.length);
  for (; po.length; )
    po.pop()();
  zs = !1, gs.clear(), vi(n);
}
function df(n) {
  if (n.fragment !== null) {
    n.update(), Yn(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(_s);
  }
}
function pf(n) {
  const e = [], t = [];
  $t.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), $t = e;
}
const gf = /* @__PURE__ */ new Set();
function mf(n, e) {
  n && n.i && (gf.delete(n), n.i(e));
}
function yf(n, e, t) {
  const { fragment: i, after_update: s } = n.$$;
  i && i.m(e, t), _s(() => {
    const r = n.$$.on_mount.map(Zl).filter(Ql);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : Yn(r), n.$$.on_mount = [];
  }), s.forEach(_s);
}
function bf(n, e) {
  const t = n.$$;
  t.fragment !== null && (pf(t.after_update), Yn(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function wf(n, e) {
  n.$$.dirty[0] === -1 && (Vt.push(n), uf(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ia(n, e, t, i, s, r, o, l = [-1]) {
  const a = Mi;
  vi(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Rt,
    not_equal: s,
    bound: uo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: uo(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(h.root);
  let c = !1;
  if (h.ctx = t ? t(n, e.props || {}, (f, u, ...d) => {
    const p = d.length ? d[0] : u;
    return h.ctx && s(h.ctx[f], h.ctx[f] = p) && (!h.skip_bound && h.bound[f] && h.bound[f](p), c && wf(n, f)), u;
  }) : [], h.update(), c = !0, Yn(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = rf(e.target);
      h.fragment && h.fragment.l(f), f.forEach(zi);
    } else
      h.fragment && h.fragment.c();
    e.intro && mf(n.$$.fragment), yf(n, e.target, e.anchor), ta();
  }
  vi(a);
}
class na {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ps(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ps(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    bf(this, 1), this.$destroy = Rt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ql(t))
      return Rt;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !tf(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const xf = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xf);
class z {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    let s = [];
    return this.decompose(
      0,
      e,
      s,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      s,
      1
      /* Open.From */
    ), Ge.from(s, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    let i = [];
    return this.decompose(e, t, i, 0), Ge.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new ki(this), r = new ki(e);
    for (let o = t, l = t; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (l += s.value.length, s.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new ki(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new sa(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new ra(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? z.empty : e.length <= 32 ? new te(e) : Ge.from(te.split(e, []));
  }
}
class te extends z {
  constructor(e, t = vf(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((t ? i : l) >= e)
        return new kf(s, l, i, o);
      s = l + 1, i++;
    }
  }
  decompose(e, t, i, s) {
    let r = e <= 0 && t >= this.length ? this : new te(go(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop(), l = yn(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new te(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new te(l.slice(0, a)), new te(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof te))
      return super.replace(e, t, i);
    let s = yn(this.text, yn(i.text, go(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return s.length <= 32 ? new te(s, r) : Ge.from(te.split(s, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (s += i), e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], s = -1;
    for (let r of e)
      i.push(r), s += r.length + 1, i.length == 32 && (t.push(new te(i, s)), i = [], s = -1);
    return s > -1 && t.push(new te(i, s)), t;
  }
}
class Ge extends z {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, i, s);
      s = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if (i.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 5 - 1 && a.lines > h >> 5 + 1) {
            let c = this.children.slice();
            return c[s] = a, new Ge(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (s += i), e < a && t > o && (s += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Ge))
      return 0;
    let i = 0, [s, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l)
        return i;
      let a = this.children[s], h = e.children[r];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new te(d, t);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof Ge)
        for (let y of d.children)
          f(y);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof te && a && (p = c[c.length - 1]) instanceof te && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new te(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : Ge.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new Ge(l, t);
  }
}
z.empty = /* @__PURE__ */ new te([""], 0);
function vf(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function yn(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
    let l = n[r], a = s + l.length;
    a >= t && (a > i && (l = l.slice(0, i - s)), s < t && (l = l.slice(t - s)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), s = a + 1;
  }
  return e;
}
function go(n, e, t) {
  return yn(n, [""], e, t);
}
class ki {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof te ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, l = s instanceof te ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof te) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof te ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class sa {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new ki(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * t, this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class ra {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: s } = this.inner.next(e);
    return t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (z.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ki.prototype[Symbol.iterator] = sa.prototype[Symbol.iterator] = ra.prototype[Symbol.iterator] = function() {
  return this;
});
class kf {
  /**
  @internal
  */
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.number = i, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
let Ut = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((n) => n ? parseInt(n, 36) : 1);
for (let n = 1; n < Ut.length; n++)
  Ut[n] += Ut[n - 1];
function Sf(n) {
  for (let e = 1; e < Ut.length; e += 2)
    if (Ut[e] > n)
      return Ut[e - 1] <= n;
  return !1;
}
function mo(n) {
  return n >= 127462 && n <= 127487;
}
const yo = 8205;
function ge(n, e, t = !0, i = !0) {
  return (t ? oa : Cf)(n, e, i);
}
function oa(n, e, t) {
  if (e == n.length)
    return e;
  e && la(n.charCodeAt(e)) && aa(n.charCodeAt(e - 1)) && e--;
  let i = ae(n, e);
  for (e += Re(i); e < n.length; ) {
    let s = ae(n, e);
    if (i == yo || s == yo || t && Sf(s))
      e += Re(s), i = s;
    else if (mo(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && mo(ae(n, o)); )
        r++, o -= 2;
      if (r % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function Cf(n, e, t) {
  for (; e > 0; ) {
    let i = oa(n, e - 2, t);
    if (i < e)
      return i;
    e--;
  }
  return 0;
}
function la(n) {
  return n >= 56320 && n < 57344;
}
function aa(n) {
  return n >= 55296 && n < 56320;
}
function ae(n, e) {
  let t = n.charCodeAt(e);
  if (!aa(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return la(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Hr(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function Re(n) {
  return n < 65536 ? 1 : 2;
}
const qs = /\r\n?|\n/;
var xe = /* @__PURE__ */ function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
}(xe || (xe = {}));
class Qe {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, s, r), s += r) : s += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    js(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new Qe(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : ha(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `other` happened before the ones in `this`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Ks(this, e, t);
  }
  mapPos(e, t = -1, i = xe.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = s + l;
      if (a < 0) {
        if (h > e)
          return r + (e - s);
        r += l;
      } else {
        if (i != xe.Simple && h >= e && (i == xe.TrackDel && s < e && h > e || i == xe.TrackBefore && s < e || i == xe.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
      let r = this.sections[i++], o = this.sections[i++], l = s + r;
      if (o >= 0 && s <= t && l >= e)
        return s < e && l > t ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Qe(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new Qe(e);
  }
}
class re extends Qe {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return js(this, (t, i, s, r, o) => e = e.replace(s, s + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return Ks(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s], l = t[s + 1];
      if (l >= 0) {
        t[s] = l, t[s + 1] = o;
        let a = s >> 1;
        for (; i.length < a; )
          i.push(z.empty);
        i.push(o ? e.slice(r, r + o) : z.empty);
      }
      r += o;
    }
    return new re(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : ha(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : Ks(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    js(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Qe.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], s = [], r = new Di(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let a = o == e.length ? 1e9 : e[o++];
        for (; l < a || l == a && r.len == 0; ) {
          if (r.done)
            break e;
          let c = Math.min(r.len, a - l);
          ue(s, c, -1);
          let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
          ue(t, c, f), f > 0 && pt(i, t, r.text), r.forward(c), l += c;
        }
        let h = e[o++];
        for (; l < h; ) {
          if (r.done)
            break e;
          let c = Math.min(r.len, h - l);
          ue(t, c, -1), ue(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
        }
      }
    return {
      changes: new re(t, i),
      filtered: Qe.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], s = this.sections[t + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let s = [], r = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !s.length)
        return;
      o < t && ue(s, t - o, -1);
      let f = new re(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof re) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? z.of(d.split(i || qs)) : d : z.empty, y = p.length;
        if (f == u && y == 0)
          return;
        f < o && a(), f > o && ue(s, f - o, -1), ue(s, u - f, y), pt(r, s, p), o = u;
      }
    }
    return h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new re(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < s; )
            i.push(z.empty);
          i[s] = z.of(r.slice(1)), t.push(r[0], i[s].length);
        }
      }
    }
    return new re(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new re(e, t);
  }
}
function ue(n, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let s = n.length - 2;
  s >= 0 && t <= 0 && t == n[s + 1] ? n[s] += e : e == 0 && n[s] == 0 ? n[s + 1] += t : i ? (n[s] += e, n[s + 1] += t) : n.push(e, t);
}
function pt(n, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; )
      n.push(z.empty);
    n.push(t);
  }
}
function js(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++], a = n.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let h = s, c = r, f = z.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(t || o == n.sections.length || n.sections[o + 1] < 0); )
        l = n.sections[o++], a = n.sections[o++];
      e(s, h, r, c, f), s = h, r = c;
    }
  }
}
function Ks(n, e, t, i = !1) {
  let s = [], r = i ? [] : null, o = new Di(n), l = new Di(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ue(s, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (ue(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (ue(s, 0, o.ins), r && pt(r, s, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      ue(s, h, a < o.i ? o.ins : 0), r && a < o.i && pt(r, s, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? re.createSet(s, r) : Qe.create(s);
      throw new Error("Mismatched change set lengths");
    }
}
function ha(n, e, t = !1) {
  let i = [], s = t ? [] : null, r = new Di(n), o = new Di(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? re.createSet(i, s) : Qe.create(i);
    if (r.ins == 0)
      ue(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      ue(i, 0, o.ins, l), s && pt(s, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ue(i, a, c, l), s && c && pt(s, i, o.text);
        } else
          o.ins == -1 ? (ue(i, r.off ? 0 : r.len, a, l), s && pt(s, i, r.textBit(a))) : (ue(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && pt(s, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Di {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? z.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? z.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Et {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 16 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 16 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 3;
    return e == 3 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 5;
    return e == 33554431 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Et(i, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return S.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return S.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e) {
    return this.anchor == e.anchor && this.head == e.head;
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return S.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Et(e, t, i);
  }
}
class S {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : S.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection.
  */
  eq(e) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let t = 0; t < this.ranges.length; t++)
      if (!this.ranges[t].eq(e.ranges[t]))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new S([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return S.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, S.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new S(e.ranges.map((t) => Et.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new S([S.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= i : r.from < i)
        return S.normalized(e.slice(), t);
      i = r.to;
    }
    return new S(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, s) {
    return Et.create(e, e, (t == 0 ? 0 : t < 0 ? 4 : 8) | (i == null ? 3 : Math.min(2, i)) | (s ?? 33554431) << 5);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, s) {
    let r = (i ?? 33554431) << 5 | (s == null ? 3 : Math.min(2, s));
    return t < e ? Et.create(t, e, 24 | r) : Et.create(e, t, (t > e ? 4 : 0) | r);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, r) => s.from - r.from), t = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? S.range(a, l) : S.range(l, a));
      }
    }
    return new S(e, t);
  }
}
function ca(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Wr = 0;
class L {
  constructor(e, t, i, s, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = s, this.id = Wr++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new L(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Vr), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new bn([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new bn(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new bn(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Vr(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class bn {
  constructor(e, t, i, s) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = s, this.id = Wr++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, s = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? h = !0 : ((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1 || c.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = i(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || $s(f, c)) {
          let d = i(f);
          if (l ? !bo(d, f.values[o], s) : !s(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let y = Dn(u, p);
          if (this.dependencies.every((g) => g instanceof L ? u.facet(g) === f.facet(g) : g instanceof fe ? u.field(g, !1) == f.field(g, !1) : !0) || (l ? bo(d = i(f), y, s) : s(d = i(f), y)))
            return f.values[o] = y, 0;
        } else
          d = i(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function bo(n, e, t) {
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function $s(n, e) {
  let t = !1;
  for (let i of e)
    Si(n, i) & 1 && (t = !0);
  return t;
}
function Af(n, e, t) {
  let i = t.map((a) => n[a.id]), s = t.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Dn(a, i[c]);
      if (s[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i)
        Si(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!$s(a, r))
        return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = $s(a, i), f = h.config.facets[e.id], u = h.facet(e);
      if (f && !c && Vr(t, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const wo = /* @__PURE__ */ L.define({ static: !0 });
class fe {
  constructor(e, t, i, s, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new fe(Wr++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(wo).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, s) => {
        let r = i.values[t], o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
      },
      reconfigure: (i, s) => s.config.address[this.id] != null ? (i.values[t] = s.field(this), 0) : (i.values[t] = this.create(i), 1)
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, wo.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const Tt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function ai(n) {
  return (e) => new fa(e, n);
}
const ni = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ ai(Tt.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ ai(Tt.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ ai(Tt.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ ai(Tt.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ ai(Tt.lowest)
};
class fa {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class Xn {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Us(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Xn.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Us {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Mn {
  constructor(e, t, i, s, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of Mf(e, t, o))
      u instanceof fe ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of s)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, y = c && c[u] || [];
      if (d.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, Vr(y, d))
          a.push(i.facet(p));
        else {
          let g = p.combine(d.map((k) => k.value));
          a.push(i && p.compare(g, i.facet(p)) ? i.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = h.length << 1, h.push((k) => g.dynamicSlot(k)));
        l[p.id] = h.length << 1, h.push((g) => Af(g, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Mn(e, o, f, l, a, r);
  }
}
function Mf(n, e, t) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof Us && t.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof Us) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof fa)
      r(o.inner, o.prec);
    else if (o instanceof fe)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof bn)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, Tt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(n, Tt.default), i.reduce((o, l) => o.concat(l));
}
function Si(n, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  n.status[t] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | s;
}
function Dn(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const ua = /* @__PURE__ */ L.define(), da = /* @__PURE__ */ L.define({
  combine: (n) => n.some((e) => e),
  static: !0
}), pa = /* @__PURE__ */ L.define({
  combine: (n) => n.length ? n[0] : void 0,
  static: !0
}), ga = /* @__PURE__ */ L.define(), ma = /* @__PURE__ */ L.define(), ya = /* @__PURE__ */ L.define(), ba = /* @__PURE__ */ L.define({
  combine: (n) => n.length ? n[0] : !1
});
class ht {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new Df();
  }
}
class Df {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new ht(this, e);
  }
}
class Tf {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new N(this, e);
  }
}
class N {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new N(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new Tf(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let s of e) {
      let r = s.map(t);
      r && i.push(r);
    }
    return i;
  }
}
N.reconfigure = /* @__PURE__ */ N.define();
N.appendConfig = /* @__PURE__ */ N.define();
class oe {
  constructor(e, t, i, s, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && ca(i, t.newLength), r.some((l) => l.type == oe.time) || (this.annotations = r.concat(oe.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, s, r, o) {
    return new oe(e, t, i, s, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(oe.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
oe.time = /* @__PURE__ */ ht.define();
oe.userEvent = /* @__PURE__ */ ht.define();
oe.addToHistory = /* @__PURE__ */ ht.define();
oe.remote = /* @__PURE__ */ ht.define();
function Of(n, e) {
  let t = [];
  for (let i = 0, s = 0; ; ) {
    let r, o;
    if (i < n.length && (s == e.length || e[s] >= n[i]))
      r = n[i++], o = n[i++];
    else if (s < e.length)
      r = e[s++], o = e[s++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function wa(n, e, t) {
  var i;
  let s, r, o;
  return t ? (s = e.changes, r = re.empty(e.changes.length), o = n.changes.compose(e.changes)) : (s = e.changes.map(n.changes), r = n.changes.mapDesc(e.changes, !0), o = n.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: N.mapEffects(n.effects, s).concat(N.mapEffects(e.effects, r)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function Gs(n, e, t) {
  let i = e.selection, s = Gt(e.annotations);
  return e.userEvent && (s = s.concat(oe.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof re ? e.changes : re.of(e.changes || [], t, n.facet(pa)),
    selection: i && (i instanceof S ? i : S.single(i.anchor, i.head)),
    effects: Gt(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function xa(n, e, t) {
  let i = Gs(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = wa(i, Gs(n, e[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = oe.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Bf(t ? Ef(s) : s);
}
function Ef(n) {
  let e = n.startState, t = !0;
  for (let s of e.facet(ga)) {
    let r = s(n);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : Of(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = n.changes.invertedDesc, s = re.empty(e.doc.length);
    else {
      let o = n.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = oe.create(e, s, n.selection && n.selection.map(r), N.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(ma);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof oe ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof oe ? n = r[0] : n = xa(e, Gt(r), !1);
  }
  return n;
}
function Bf(n) {
  let e = n.startState, t = e.facet(ya), i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    r && Object.keys(r).length && (i = wa(i, Gs(e, r, n.changes.newLength), !0));
  }
  return i == n ? n : oe.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Lf = [];
function Gt(n) {
  return n == null ? Lf : Array.isArray(n) ? n : [n];
}
var J = /* @__PURE__ */ function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
}(J || (J = {}));
const Rf = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Ys;
try {
  Ys = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Pf(n) {
  if (Ys)
    return Ys.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Rf.test(t)))
      return !0;
  }
  return !1;
}
function If(n) {
  return (e) => {
    if (!/\S/.test(e))
      return J.Space;
    if (Pf(e))
      return J.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return J.Word;
    return J.Other;
  };
}
class H {
  constructor(e, t, i, s, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Si(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Si(this, i), Dn(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return xa(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: s } = t;
    for (let o of e.effects)
      o.is(Xn.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((l, a) => s.set(a, l)), t = null), s.set(o.value.compartment, o.value.extension)) : o.is(N.reconfigure) ? (t = null, i = o.value) : o.is(N.appendConfig) && (t = null, i = Gt(i).concat(o.value));
    let r;
    t ? r = e.startState.values.slice() : (t = Mn.resolve(i, s, this), r = new H(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values), new H(t, e.newDoc, e.newSelection, r, (o, l) => l.update(o, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: S.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), s = this.changes(i.changes), r = [i.range], o = Gt(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(s);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = s.mapDesc(h, !0);
      r.push(a.range.map(f)), s = s.compose(c), o = N.mapEffects(o, c).concat(N.mapEffects(Gt(a.effects), f));
    }
    return {
      changes: s,
      selection: S.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof re ? e : re.of(e, this.doc.length, this.facet(H.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return z.of(e.split(this.facet(H.lineSeparator) || qs));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Si(this, t), Dn(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let s = e[i];
        s instanceof fe && this.config.address[s.id] != null && (t[i] = s.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return H.create({
      doc: e.doc,
      selection: S.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = Mn.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof z ? e.doc : z.of((e.doc || "").split(t.staticFacet(H.lineSeparator) || qs)), s = e.selection ? e.selection instanceof S ? e.selection : S.single(e.selection.anchor, e.selection.head) : S.single(0);
    return ca(s, i.length), t.staticFacet(da) || (s = s.asSingle()), new H(t, i, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(H.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(H.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(ba);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(H.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let s = [];
    for (let r of this.facet(ua))
      for (let o of r(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return If(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = ge(t, o, !1);
      if (r(t.slice(a, o)) != J.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = ge(t, l);
      if (r(t.slice(l, a)) != J.Word)
        break;
      l = a;
    }
    return o == l ? null : S.range(o + i, l + i);
  }
}
H.allowMultipleSelections = da;
H.tabSize = /* @__PURE__ */ L.define({
  combine: (n) => n.length ? n[0] : 4
});
H.lineSeparator = pa;
H.readOnly = ba;
H.phrases = /* @__PURE__ */ L.define({
  compare(n, e) {
    let t = Object.keys(n), i = Object.keys(e);
    return t.length == i.length && t.every((s) => n[s] == e[s]);
  }
});
H.languageData = ua;
H.changeFilter = ga;
H.transactionFilter = ma;
H.transactionExtender = ya;
Xn.reconfigure = /* @__PURE__ */ N.define();
function tt(n, e, t = {}) {
  let i = {};
  for (let s of n)
    for (let r of Object.keys(s)) {
      let o = s[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, r))
          i[r] = t[r](l, o);
        else
          throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e)
    i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class Pt {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return Js.create(e, t, this);
  }
}
Pt.prototype.startSide = Pt.prototype.endSide = 0;
Pt.prototype.point = !1;
Pt.prototype.mapMode = xe.TrackDel;
let Js = class va {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new va(e, t, i);
  }
};
function Xs(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class zr {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, f = this.to[a] + e, u, d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(c, h.startSide), d = t.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), s.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new zr(s, r, i, l) : null, pos: o };
  }
}
class q {
  constructor(e, t, i, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, i, s) {
    return new q(e, t, i, s);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: s = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(Xs)), this.isEmpty)
      return t.length ? q.of(t) : this;
    let l = new ka(this, null, -1).goto(0), a = 0, h = [], c = new vt();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(Js.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? q.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === !1)
        s = Math.max(s, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && (s = Math.max(s, c.maxPoint), t.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new q(i, t, r || q.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return Ti.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return Ti.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = xo(o, l, i), h = new hi(o, a, r), c = new hi(l, a, r);
    i.iterGaps((f, u, d) => vo(h, f, c, u, d, s)), i.empty && i.length == 0 && vo(h, 0, c, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, s) {
    s == null && (s = 1e9 - 1);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = xo(r, o), a = new hi(r, l, 0).goto(i), h = new hi(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !Zs(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > s)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, s, r = -1) {
    let o = new hi(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < t ? c.length + 1 : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else
        h > l && (s.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new vt();
    for (let s of e instanceof Js ? [e] : t ? Nf(e) : e)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
}
q.empty = /* @__PURE__ */ new q([], [], null, -1);
function Nf(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (Xs(e, i) > 0)
        return n.slice().sort(Xs);
      e = i;
    }
  return n;
}
q.empty.nextLayer = q.empty;
class vt {
  finishChunk(e) {
    this.chunks.push(new zr(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new vt())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(q.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = q.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function xo(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of n)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !(t != null && t.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
    }
  return s;
}
class ka {
  constructor(e, t, i, s = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Ti {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && s.push(new ka(o, t, i, r));
    return s.length == 1 ? s[0] : new Ti(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ms(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ms(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ms(this.heap, 0);
    }
  }
}
function ms(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length)
      break;
    let s = n[i];
    if (i + 1 < n.length && s.compare(n[i + 1]) >= 0 && (s = n[i + 1], i++), t.compare(s) < 0)
      break;
    n[i] = t, n[e] = s, e = i;
  }
}
class hi {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ti.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Yi(this.active, e), Yi(this.activeTo, e), Yi(this.activeRank, e), this.minActive = ko(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && this.activeRank[t] <= r; )
      t++;
    Ji(this.active, t, i), Ji(this.activeTo, t, s), Ji(this.activeRank, t, r), e && Ji(e, t, this.cursor.from), this.minActive = ko(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && Yi(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function vo(n, e, t, i, s, r) {
  n.goto(e), t.goto(i);
  let o = i + s, l = i, a = i - e;
  for (; ; ) {
    let h = n.to + a - t.to || n.endSide - t.endSide, c = h < 0 ? n.to + a : t.to, f = Math.min(c, o);
    if (n.point || t.point ? n.point && t.point && (n.point == t.point || n.point.eq(t.point)) && Zs(n.activeForPoint(n.to), t.activeForPoint(t.to)) || r.comparePoint(l, f, n.point, t.point) : f > l && !Zs(n.active, t.active) && r.compareRange(l, f, n.active, t.active), c > o)
      break;
    l = c, h <= 0 && n.next(), h >= 0 && t.next();
  }
}
function Zs(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !n[t].eq(e[t]))
      return !1;
  return !0;
}
function Yi(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function Ji(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function ko(n, e) {
  let t = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && (t = s, i = e[s]);
  return t;
}
function si(n, e, t = n.length) {
  let i = 0;
  for (let s = 0; s < t; )
    n.charCodeAt(s) == 9 ? (i += e - i % e, s++) : (i++, s = ge(n, s));
  return i;
}
function Qs(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == n.length)
      break;
    r += n.charCodeAt(s) == 9 ? t - r % t : 1, s = ge(n, s);
  }
  return i === !0 ? -1 : n.length;
}
const er = "ͼ", So = typeof Symbol > "u" ? "__" + er : Symbol.for(er), tr = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class kt {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null)
        return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((y) => o.map((g) => y.replace(/&/, g))).reduce((y, g) => y.concat(g)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, c, u);
        } else
          p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (y) => "-" + y.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e)
      r(s(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = Co[So] || 1;
    return Co[So] = e + 1, er + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let s = e[tr], r = i && i.nonce;
    s ? r && s.setNonce(r) : s = new Ff(e, r), s.mount(Array.isArray(t) ? t : [t]);
  }
}
let Ao = /* @__PURE__ */ new Map();
class Ff {
  constructor(e, t) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = Ao.get(i);
      if (r)
        return e.adoptedStyleSheets = [r.sheet, ...e.adoptedStyleSheets], e[tr] = r;
      this.sheet = new s.CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], Ao.set(i, this);
    } else {
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
      let r = e.head || e;
      r.insertBefore(this.styleTag, r.firstChild);
    }
    this.modules = [], e[tr] = this;
  }
  mount(e) {
    let t = this.sheet, i = 0, s = 0;
    for (let r = 0; r < e.length; r++) {
      let o = e[r], l = this.modules.indexOf(o);
      if (l < s && l > -1 && (this.modules.splice(l, 1), s--, l = -1), l == -1) {
        if (this.modules.splice(s++, 0, o), t)
          for (let a = 0; a < o.rules.length; a++)
            t.insertRule(o.rules[a], i++);
      } else {
        for (; s < l; )
          i += this.modules[s++].rules.length;
        i += o.rules.length, s++;
      }
    }
    if (!t) {
      let r = "";
      for (let o = 0; o < this.modules.length; o++)
        r += this.modules[o].getRules() + `
`;
      this.styleTag.textContent = r;
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var St = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Oi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Hf = typeof navigator < "u" && /Mac/.test(navigator.platform), Wf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var he = 0; he < 10; he++)
  St[48 + he] = St[96 + he] = String(he);
for (var he = 1; he <= 24; he++)
  St[he + 111] = "F" + he;
for (var he = 65; he <= 90; he++)
  St[he] = String.fromCharCode(he + 32), Oi[he] = String.fromCharCode(he);
for (var ys in St)
  Oi.hasOwnProperty(ys) || (Oi[ys] = St[ys]);
function Vf(n) {
  var e = Hf && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Wf && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Oi : St)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function Tn(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function ir(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function zf(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function wn(n, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return ir(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function Zt(n) {
  return n.nodeType == 3 ? It(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function On(n, e, t, i) {
  return t ? Mo(n, e, t, i, -1) || Mo(n, e, t, i, 1) : !1;
}
function Ei(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function Mo(n, e, t, i, s) {
  for (; ; ) {
    if (n == t && e == i)
      return !0;
    if (e == (s < 0 ? 0 : rt(n))) {
      if (n.nodeName == "DIV")
        return !1;
      let r = n.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = Ei(n) + (s < 0 ? 0 : 1), n = r;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return !1;
      e = s < 0 ? rt(n) : 0;
    } else
      return !1;
  }
}
function rt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Zn(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function _f(n) {
  return {
    left: 0,
    right: n.innerWidth,
    top: 0,
    bottom: n.innerHeight
  };
}
function qf(n, e, t, i, s, r, o, l) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, y = 1;
      if (d)
        u = _f(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let m = c.getBoundingClientRect();
        p = m.width / c.offsetWidth, y = m.height / c.offsetHeight, u = {
          left: m.left,
          right: m.left + c.clientWidth * p,
          top: m.top,
          bottom: m.top + c.clientHeight * y
        };
      }
      let g = 0, k = 0;
      if (s == "nearest")
        e.top < u.top ? (k = -(u.top - e.top + o), t > 0 && e.bottom > u.bottom + k && (k = e.bottom - u.bottom + k + o)) : e.bottom > u.bottom && (k = e.bottom - u.bottom + o, t < 0 && e.top - k < u.top && (k = -(u.top + k - e.top + o)));
      else {
        let m = e.bottom - e.top, b = u.bottom - u.top;
        k = (s == "center" && m <= b ? e.top + m / 2 - b / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - b + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left ? (g = -(u.left - e.left + r), t > 0 && e.right > u.right + g && (g = e.right - u.right + g + r)) : e.right > u.right && (g = e.right - u.right + r, t < 0 && e.left < u.left + g && (g = -(u.left + g - e.left + r))) : g = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, g || k)
        if (d)
          h.scrollBy(g, k);
        else {
          let m = 0, b = 0;
          if (k) {
            let w = c.scrollTop;
            c.scrollTop += k / y, b = (c.scrollTop - w) * y;
          }
          if (g) {
            let w = c.scrollLeft;
            c.scrollLeft += g / p, m = (c.scrollLeft - w) * p;
          }
          e = {
            left: e.left - m,
            top: e.top - b,
            right: e.right - m,
            bottom: e.bottom - b
          }, m && Math.abs(m - g) < 1 && (i = "nearest"), b && Math.abs(b - k) < 1 && (s = "nearest");
        }
      if (d)
        break;
      c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function jf(n) {
  let e = n.ownerDocument;
  for (let t = n.parentNode; t && t != e.body; )
    if (t.nodeType == 1) {
      if (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth)
        return t;
      t = t.assignedSlot || t.parentNode;
    } else if (t.nodeType == 11)
      t = t.host;
    else
      break;
  return null;
}
class Kf {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? rt(t) : 0), i, Math.min(e.focusOffset, i ? rt(i) : 0));
  }
  set(e, t, i, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = s;
  }
}
let Wt = null;
function Sa(n) {
  if (n.setActive)
    return n.setActive();
  if (Wt)
    return n.focus(Wt);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(Wt == null ? {
    get preventScroll() {
      return Wt = { preventScroll: !0 }, !0;
    }
  } : void 0), !Wt) {
    Wt = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], s = e[t++], r = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let Do;
function It(n, e, t = e) {
  let i = Do || (Do = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function Yt(n, e, t) {
  let i = { key: e, code: e, keyCode: t, which: t, cancelable: !0 }, s = new KeyboardEvent("keydown", i);
  s.synthetic = !0, n.dispatchEvent(s);
  let r = new KeyboardEvent("keyup", i);
  return r.synthetic = !0, n.dispatchEvent(r), s.defaultPrevented || r.defaultPrevented;
}
function $f(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function Ca(n) {
  for (; n.attributes.length; )
    n.removeAttributeNode(n.attributes[0]);
}
function Uf(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, rt(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let s = t.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (t = s, i = rt(t));
    } else {
      if (t == n)
        return !0;
      i = Ei(t), t = t.parentNode;
    }
}
function Aa(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
class de {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new de(e.parentNode, Ei(e), t);
  }
  static after(e, t) {
    return new de(e.parentNode, Ei(e) + 1, t);
  }
}
const _r = [];
class Y {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, s = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : i.firstChild)) {
            let l = Y.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (r = s ? s.nextSibling : i.firstChild, t && !t.written && t.node == i && r != o.dom && (t.written = !0), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = To(r);
        else
          i.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : i.firstChild, r && t && t.node == i && (t.written = !0); r; )
        r = To(r);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let s = rt(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let r = e.parentNode;
        if (r == this.dom)
          break;
        s == 0 && r.firstChild != r.lastChild && (e == r.firstChild ? s = -1 : s = 1), e = r;
      }
      s < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !Y.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let f = this.children[a], u = h + f.length;
      if (h < e && u > t)
        return f.domBoundsAround(e, t, h);
      if (u >= e && s == -1 && (s = a, r = h), h > t && f.dom.parentNode == this.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = _r) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let r = this.children[s];
      r.parent == this && r.destroy();
    }
    this.children.splice(e, t - e, ...i);
    for (let s = 0; s < i.length; s++)
      i[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new Ma(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, i, s, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    this.parent = null;
  }
}
Y.prototype.breakAfter = 0;
function To(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Ma {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function Da(n, e, t, i, s, r, o, l, a) {
  let { children: h } = n, c = h.length ? h[e] : null, f = r.length ? r[r.length - 1] : null, u = f ? f.breakAfter : o;
  if (!(e == i && c && !o && !u && r.length < 2 && c.merge(t, s, r.length ? f : null, t == 0, l, a))) {
    if (i < h.length) {
      let d = h[i];
      d && (s < d.length || d.breakAfter && (f != null && f.breakAfter)) ? (e == i && (d = d.split(s), s = 0), !u && f && d.merge(0, s, f, !0, 0, a) ? r[r.length - 1] = d : ((s || d.children.length && !d.children[0].length) && d.merge(0, s, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (f ? f.breakAfter = 1 : o = 1), i++;
    }
    for (c && (c.breakAfter = o, t > 0 && (!o && r.length && c.merge(t, c.length, r[0], !1, l, 0) ? c.breakAfter = r.shift().breakAfter : (t < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(t, c.length, null, !1, l, 0), e++)); e < i && r.length; )
      if (h[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else if (h[e].become(r[0]))
        e++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && e && i < h.length && !h[e - 1].breakAfter && h[i].merge(0, 0, h[e - 1], !1, l, a) && e--, (e < i || r.length) && n.replaceChildren(e, i, r);
  }
}
function Ta(n, e, t, i, s, r) {
  let o = n.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: h, off: c } = o.findPos(e, -1), f = e - t;
  for (let u of i)
    f += u.length;
  n.length += f, Da(n, h, c, l, a, i, 0, s, r);
}
let Be = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, nr = typeof document < "u" ? document : { documentElement: { style: {} } };
const sr = /* @__PURE__ */ /Edge\/(\d+)/.exec(Be.userAgent), Oa = /* @__PURE__ */ /MSIE \d/.test(Be.userAgent), rr = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Be.userAgent), Qn = !!(Oa || rr || sr), Oo = !Qn && /* @__PURE__ */ /gecko\/(\d+)/i.test(Be.userAgent), bs = !Qn && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Be.userAgent), Eo = "webkitFontSmoothing" in nr.documentElement.style, Ea = !Qn && /* @__PURE__ */ /Apple Computer/.test(Be.vendor), Bo = Ea && (/* @__PURE__ */ /Mobile\/\w+/.test(Be.userAgent) || Be.maxTouchPoints > 2);
var R = {
  mac: Bo || /* @__PURE__ */ /Mac/.test(Be.platform),
  windows: /* @__PURE__ */ /Win/.test(Be.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Be.platform),
  ie: Qn,
  ie_version: Oa ? nr.documentMode || 6 : rr ? +rr[1] : sr ? +sr[1] : 0,
  gecko: Oo,
  gecko_version: Oo ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Be.userAgent) || [0, 0])[1] : 0,
  chrome: !!bs,
  chrome_version: bs ? +bs[1] : 0,
  ios: Bo,
  android: /* @__PURE__ */ /Android\b/.test(Be.userAgent),
  webkit: Eo,
  safari: Ea,
  webkit_version: Eo ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: nr.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const Gf = 256;
class ot extends Y {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof ot) || this.length - (t - e) + i.length > Gf || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new ot(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new de(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Yf(this.dom, e, t);
  }
}
class lt extends Y {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let s of t)
      s.setParent(this);
  }
  setAttrs(e) {
    if (Ca(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof lt && i.mark.eq(this.mark)) || e && r <= 0 || t < this.length && o <= 0) ? !1 : (Ta(this, e, t, i ? i.children : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], i = 0, s = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), s < 0 && i >= e && (s = r), i = a, r++;
    }
    let o = this.length - e;
    return this.length = e, s > -1 && (this.children.length = s, this.markDirty()), new lt(this.mark, t, o);
  }
  domAtPos(e) {
    return Ba(this, e);
  }
  coordsAt(e, t) {
    return Ra(this, e, t);
  }
}
function Yf(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let s = e, r = e, o = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? R.chrome || R.gecko || (e ? (s--, o = 1) : r < i && (r++, o = -1)) : t < 0 ? s-- : r < i && r++;
  let l = It(n, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return R.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? Zn(a, o < 0) : a || null;
}
class gt extends Y {
  static create(e, t, i) {
    return new gt(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = gt.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof gt) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof gt && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return z.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : z.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? de.before(this.dom) : de.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let s = this.dom.getClientRects(), r = null;
    if (!s.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? s.length - 1 : 0; r = s[l], !(e > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Zn(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Qt extends Y {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Qt && e.side == this.side;
  }
  split() {
    return new Qt(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? de.before(this.dom) : de.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return z.empty;
  }
  get isHidden() {
    return !0;
  }
}
ot.prototype.children = gt.prototype.children = Qt.prototype.children = _r;
function Ba(n, e) {
  let t = n.dom, { children: i } = n, s = 0;
  for (let r = 0; s < i.length; s++) {
    let o = i[s], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - r);
      if (e <= r)
        break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let r = s; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new de(t, 0);
}
function La(n, e, t) {
  let i, { children: s } = n;
  t > 0 && e instanceof lt && s.length && (i = s[s.length - 1]) instanceof lt && i.mark.eq(e.mark) ? La(i, e.children[0], t - 1) : (s.push(e), e.setParent(n)), n.length += e.length;
}
function Ra(n, e, t) {
  let i = null, s = -1, r = null, o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f], p = u + d.length;
      p >= c && (d.children.length ? l(d, c - u) : (!r || r.isHidden && t > 0) && (p > c || u == p && d.getSide() > 0) ? (r = d, o = c - u) : (u < c || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, s = c - u)), u = p;
    }
  }
  l(n, e);
  let a = (t < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? s : o), t) : Jf(n);
}
function Jf(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = Zt(e);
  return t[t.length - 1] || null;
}
function or(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const Lo = /* @__PURE__ */ Object.create(null);
function qr(n, e, t) {
  if (n == e)
    return !0;
  n || (n = Lo), e || (e = Lo);
  let i = Object.keys(n), s = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != s.length - (t && s.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r]))
      return !1;
  return !0;
}
function lr(n, e, t) {
  let i = !1;
  if (e)
    for (let s in e)
      t && s in t || (i = !0, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (i = !0, s == "style" ? n.style.cssText = t[s] : n.setAttribute(s, t[s]));
  return i;
}
function Xf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class se extends Y {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, i, s, r, o) {
    if (i) {
      if (!(i instanceof se))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return s && this.setDeco(i ? i.attrs : null), Ta(this, e, t, i ? i.children : [], r, o), !0;
  }
  split(e) {
    let t = new se();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: s } = this.childPos(e);
    s && (t.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
    for (let r = i; r < this.children.length; r++)
      t.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    qr(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    La(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = or(t, this.attrs || {})), i && (this.attrs = or({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return Ba(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (Ca(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (lr(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && Y.get(s) instanceof lt; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((i = Y.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!R.ios || !this.children.some((r) => r instanceof ot))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof ot) || /[^ -~]/.test(i.text))
        return null;
      let s = Zt(i.dom);
      if (s.length != 1)
        return null;
      e += s[0].width, t = s[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let i = Ra(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return !1;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, s = 0; i < e.children.length; i++) {
      let r = e.children[i], o = s + r.length;
      if (o >= t) {
        if (r instanceof se)
          return r;
        if (o > t)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class bt extends Y {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof bt) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? de.before(this.dom) : de.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new bt(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return _r;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : z.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof bt && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    return this.widget.coordsAt(this.dom, e, t);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
}
class ct {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var ve = /* @__PURE__ */ function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(ve || (ve = {}));
class P extends Pt {
  constructor(e, t, i, s) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new _i(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Ct(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, s;
    if (e.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = Pa(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Ct(e, i, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new qi(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return q.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
P.none = q.empty;
class _i extends P {
  constructor(e) {
    let { start: t, end: i } = Pa(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof _i && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && qr(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
_i.prototype.point = !1;
class qi extends P {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof qi && this.spec.class == e.spec.class && qr(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
qi.prototype.mapMode = xe.TrackBefore;
qi.prototype.point = !0;
class Ct extends P {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? xe.TrackBefore : xe.TrackAfter : xe.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? ve.WidgetRange : this.startSide <= 0 ? ve.WidgetBefore : ve.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Ct && Zf(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Ct.prototype.point = !0;
function Pa(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function Zf(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function ar(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? t[s] = Math.max(t[s], e) : t.push(n, e);
}
class Ci {
  constructor(e, t, i, s) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof bt && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new se()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Xi(new Qt(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof bt) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let s = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Xi(new ot(this.text.slice(this.textOff, this.textOff + s)), t), i), this.atCursorPos = !0, this.textOff += s, e -= s, i = 0;
    }
  }
  span(e, t, i, s) {
    this.buildText(t - e, i, s), this.pos = t, this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, i, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof Ct) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof Ct)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new bt(i.widget || new Ro("div"), l, i));
      else {
        let a = gt.create(i.widget || new Ro("span"), l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && r <= s.length && (e < t || i.startSide > 0), c = !a.isEditable && (e < t || r > s.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), h && (f.append(Xi(new Qt(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(Xi(a, s), r), this.atCursorPos = c, this.pendingBuffer = c ? e < t || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, i, s, r) {
    let o = new Ci(e, t, i, r);
    return o.openEnd = q.spans(s, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Xi(n, e) {
  for (let t of e)
    n = new lt(t, [n], n.length);
  return n;
}
class Ro extends ct {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
const Ia = /* @__PURE__ */ L.define(), Na = /* @__PURE__ */ L.define(), Fa = /* @__PURE__ */ L.define(), Ha = /* @__PURE__ */ L.define(), hr = /* @__PURE__ */ L.define(), Wa = /* @__PURE__ */ L.define(), Va = /* @__PURE__ */ L.define(), za = /* @__PURE__ */ L.define({
  combine: (n) => n.some((e) => e)
}), _a = /* @__PURE__ */ L.define({
  combine: (n) => n.some((e) => e)
});
class En {
  constructor(e, t = "nearest", i = "nearest", s = 5, r = 5) {
    this.range = e, this.y = t, this.x = i, this.yMargin = s, this.xMargin = r;
  }
  map(e) {
    return e.empty ? this : new En(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const Po = /* @__PURE__ */ N.define({ map: (n, e) => n.map(e) });
function We(n, e, t) {
  let i = n.facet(Ha);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const es = /* @__PURE__ */ L.define({ combine: (n) => n.length ? n[0] : !0 });
let Qf = 0;
const gi = /* @__PURE__ */ L.define();
class ie {
  constructor(e, t, i, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = s, this.extension = r(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = t || {};
    return new ie(Qf++, e, i, s, (l) => {
      let a = [gi.of(l)];
      return o && a.push(Bi.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : P.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return ie.define((i) => new e(i), t);
  }
}
class ws {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (We(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        We(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        We(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const qa = /* @__PURE__ */ L.define(), jr = /* @__PURE__ */ L.define(), Bi = /* @__PURE__ */ L.define(), Kr = /* @__PURE__ */ L.define(), ja = /* @__PURE__ */ L.define();
function Io(n, e, t) {
  let i = n.state.facet(ja);
  if (!i.length)
    return i;
  let s = i.map((o) => o instanceof Function ? o(n) : o), r = [];
  return q.spans(s, e, t, {
    point() {
    },
    span(o, l, a, h) {
      let c = r;
      for (let f = a.length - 1; f >= 0; f--, h--) {
        let u = a[f].spec.bidiIsolate, d;
        if (u != null)
          if (h > 0 && c.length && (d = c[c.length - 1]).to == o && d.direction == u)
            d.to = l, c = d.inner;
          else {
            let p = { from: o, to: l, direction: u, inner: [] };
            c.push(p), c = p.inner;
          }
      }
    }
  }), r;
}
const Ka = /* @__PURE__ */ L.define();
function $a(n) {
  let e = 0, t = 0, i = 0, s = 0;
  for (let r of n.state.facet(Ka)) {
    let o = r(n);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const mi = /* @__PURE__ */ L.define();
class Ie {
  constructor(e, t, i, s) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new Ie(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s], h = o - l, c = a ? a.fromB : 1e9;
      for (; r < t.length && t[r] < c; ) {
        let f = t[r], u = t[r + 1], d = Math.max(l, f), p = Math.min(c, u);
        if (d <= p && new Ie(d + h, p + h, d, p).addToSet(i), u > c)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new Ie(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class Bn {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = re.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Ie(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Bn(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
var X = /* @__PURE__ */ function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(X || (X = {}));
const Li = X.LTR, Ua = X.RTL;
function Ga(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const eu = /* @__PURE__ */ Ga("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), tu = /* @__PURE__ */ Ga("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), cr = /* @__PURE__ */ Object.create(null), qe = [];
for (let n of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ n.charCodeAt(0), t = /* @__PURE__ */ n.charCodeAt(1);
  cr[e] = t, cr[t] = -e;
}
function iu(n) {
  return n <= 247 ? eu[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? tu[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8203 ? 256 : 64336 <= n && n <= 65023 ? 4 : n == 8204 ? 256 : 1;
}
const nu = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class mt {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Ua : Li;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  static find(e, t, i, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Ya(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !Ya(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const j = [];
function su(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, l = r < i.length ? i[r].from : t, a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = iu(n.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), j[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = j[h];
      if (u == 128)
        h < l - 1 && c == j[h + 1] && c & 24 ? u = j[h] = c : j[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && j[d] == 64; )
          d++;
        let p = h && c == 8 || d < t && j[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let y = h; y < d; y++)
          j[y] = p;
        h = d - 1;
      } else
        u == 8 && f == 1 && (j[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function ru(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if (d = cr[u = n.charCodeAt(f)])
        if (d < 0) {
          for (let y = l - 3; y >= 0; y -= 3)
            if (qe[y + 1] == -d) {
              let g = qe[y + 2], k = g & 2 ? s : g & 4 ? g & 1 ? r : s : 0;
              k && (j[f] = j[qe[y]] = k), l = y;
              break;
            }
        } else {
          if (qe.length == 189)
            break;
          qe[l++] = f, qe[l++] = u, qe[l++] = a;
        }
      else if ((p = j[f]) == 2 || p == 1) {
        let y = p == s;
        a = y ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let k = qe[g + 2];
          if (k & 2)
            break;
          if (y)
            qe[g + 2] |= 2;
          else {
            if (k & 4)
              break;
            qe[g + 2] |= 4;
          }
        }
      }
  }
}
function ou(n, e, t, i) {
  for (let s = 0, r = i; s <= t.length; s++) {
    let o = s ? t[s - 1].to : n, l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let h = j[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (s == t.length)
              break;
            c = t[s++].to, l = s < t.length ? t[s].from : e;
          } else if (j[c] == 256)
            c++;
          else
            break;
        let f = r == 1, u = (c < e ? j[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, y = s, g = y ? t[y - 1].to : n; p > a; )
          p == g && (p = t[--y].from, g = y ? t[y - 1].to : n), j[--p] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function fr(n, e, t, i, s, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let y = j[a];
        y != l && (c = !1, f = y == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e:
        for (; ; )
          if (h < r.length && p == r[h].from) {
            if (f)
              break e;
            let y = r[h];
            if (!c)
              for (let g = y.to, k = h + 1; ; ) {
                if (g == t)
                  break e;
                if (k < r.length && r[k].from == g)
                  g = r[k++].to;
                else {
                  if (j[g] == l)
                    break e;
                  break;
                }
              }
            if (h++, u)
              u.push(y);
            else {
              y.from > a && o.push(new mt(a, y.from, d));
              let g = y.direction == Li != !(d % 2);
              ur(n, g ? i + 1 : i, s, y.inner, y.from, y.to, o), a = y.to;
            }
            p = y.to;
          } else {
            if (p == t || (c ? j[p] != l : j[p] == l))
              break;
            p++;
          }
      u ? fr(n, a, p, i + 1, s, u, o) : a < p && o.push(new mt(a, p, d)), a = p;
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let y = j[a - 1];
        y != l && (c = !1, f = y == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e:
        for (; ; )
          if (h && p == r[h - 1].to) {
            if (f)
              break e;
            let y = r[--h];
            if (!c)
              for (let g = y.from, k = h; ; ) {
                if (g == e)
                  break e;
                if (k && r[k - 1].to == g)
                  g = r[--k].from;
                else {
                  if (j[g - 1] == l)
                    break e;
                  break;
                }
              }
            if (u)
              u.push(y);
            else {
              y.to < a && o.push(new mt(y.to, a, d));
              let g = y.direction == Li != !(d % 2);
              ur(n, g ? i + 1 : i, s, y.inner, y.from, y.to, o), a = y.from;
            }
            p = y.from;
          } else {
            if (p == e || (c ? j[p - 1] != l : j[p - 1] == l))
              break;
            p--;
          }
      u ? fr(n, p, a, i + 1, s, u, o) : p < a && o.push(new mt(p, a, d)), a = p;
    }
}
function ur(n, e, t, i, s, r, o) {
  let l = e % 2 ? 2 : 1;
  su(n, s, r, i, l), ru(n, s, r, i, l), ou(s, r, i, l), fr(n, s, r, e, t, i, o);
}
function lu(n, e, t) {
  if (!n)
    return [new mt(0, 0, e == Ua ? 1 : 0)];
  if (e == Li && !t.length && !nu.test(n))
    return Ja(n.length);
  if (t.length)
    for (; n.length > j.length; )
      j[j.length] = 256;
  let i = [], s = e == Li ? 0 : 1;
  return ur(n, s, s, t, 0, n.length, i), i;
}
function Ja(n) {
  return [new mt(0, n, 0)];
}
let Xa = "";
function au(n, e, t, i, s) {
  var r;
  let o = i.head - n.from, l = -1;
  if (o == 0) {
    if (!s || !n.length)
      return null;
    e[0].level != t && (o = e[0].side(!1, t), l = 0);
  } else if (o == n.length) {
    if (s)
      return null;
    let u = e[e.length - 1];
    u.level != t && (o = u.side(!0, t), l = e.length - 1);
  }
  l < 0 && (l = mt.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc));
  let a = e[l];
  o == a.side(s, t) && (a = e[l += s ? 1 : -1], o = a.side(!s, t));
  let h = s == (a.dir == t), c = ge(n.text, o, h);
  if (Xa = n.text.slice(Math.min(o, c), Math.max(o, c)), c != a.side(s, t))
    return S.cursor(c + n.from, h ? -1 : 1, a.level);
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return !f && a.level != t ? S.cursor(s ? n.to : n.from, s ? -1 : 1, t) : f && f.level < a.level ? S.cursor(f.side(!s, t) + n.from, s ? 1 : -1, f.level) : S.cursor(c + n.from, s ? -1 : 1, a.level);
}
class No extends Y {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new se()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Ie(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let s = -1;
    this.view.inputState.composing >= 0 && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !gu(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? cu(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      i = new Ie(h, c, e.changes.mapPos(h, -1), e.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (R.ie || R.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = du(o, l, e.changes);
    return i = Ie.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = R.chrome || R.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof bt && o.widget instanceof Fo && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, i) {
    let s = i ? i.range.addToSet(e.slice()) : e, r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l, u, d, p, y;
      if (i && i.range.fromB < f && i.range.toB > c) {
        let w = Ci.build(this.view.state.doc, c, i.range.fromB, this.decorations, this.dynamicDecorationMap), x = Ci.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        d = w.breakAtStart, p = w.openStart, y = x.openEnd;
        let v = this.compositionView(i);
        x.breakAtStart ? v.breakAfter = 1 : x.content.length && v.merge(v.length, v.length, x.content[0], !1, x.openStart, 0) && (v.breakAfter = x.content[0].breakAfter, x.content.shift()), w.content.length && v.merge(0, 0, w.content[w.content.length - 1], !0, 0, w.openEnd) && w.content.pop(), u = w.content.concat(v).concat(x.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: y } = Ci.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: k } = r.findPos(h, 1), { i: m, off: b } = r.findPos(a, -1);
      Da(this, m, b, g, k, u, d, p, y);
    }
    i && this.fixCompositionDOM(i);
  }
  compositionView(e) {
    let t = new ot(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks)
      t = new lt(s, [t], t.length);
    let i = new se();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = Y.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, i = this.childPos(e.range.fromB, 1), s = this.children[i.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      i = s.childPos(i.off, 1), s = s.children[i.i], t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, s = i == this.dom, r = !s && wn(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(s || t || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (R.gecko && l.empty && !this.hasComposition && hu(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = h = new de(f, 0), o = !0;
    }
    let c = this.view.observer.selectionRange;
    (o || !c.focusNode || !On(a.node, a.offset, c.anchorNode, c.anchorOffset) || !On(h.node, h.offset, c.focusNode, c.focusOffset)) && (this.view.observer.ignore(() => {
      R.android && R.chrome && this.dom.contains(c.focusNode) && pu(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let f = Tn(this.view.root);
      if (f)
        if (l.empty) {
          if (R.gecko) {
            let u = fu(a.node, a.offset);
            if (u && u != 3) {
              let d = Qa(a.node, a.offset, u == 1 ? 1 : -1);
              d && (a = new de(d.node, d.offset));
            }
          }
          f.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel);
        } else if (f.extend) {
          f.collapse(a.node, a.offset);
          try {
            f.extend(h.node, h.offset);
          } catch {
          }
        } else {
          let u = document.createRange();
          l.anchor > l.head && ([a, h] = [h, a]), u.setEnd(h.node, h.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u);
        }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new de(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new de(c.focusNode, c.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = Tn(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = se.find(this, t.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(s, r);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let t = this.dom, i;
    if (e.node != t)
      return e;
    for (let s = e.offset; !i && s < t.childNodes.length; s++) {
      let r = Y.get(t.childNodes[s]);
      r instanceof se && (i = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !i && s >= 0; s--) {
      let r = Y.get(t.childNodes[s]);
      r instanceof se && (i = r.domAtPos(r.length));
    }
    return i ? new de(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = Y.get(t);
      if (i && i.rootView == this)
        return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (i < s.length || s instanceof se)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, h = a - l.length;
      if (a < e)
        break;
      h <= e && (h < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof se && !(i instanceof se && t >= 0)) && (i = l, s = h), r = h;
    }
    return i ? i.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), s = this.children[t];
    if (!(s instanceof se))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(i, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(s instanceof ot))
      return null;
    let r = ge(s.text, i);
    if (r == i)
      return null;
    let o = It(s.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == X.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c], u = h + f.length;
      if (u > s)
        break;
      if (h >= i) {
        let d = f.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = f.dom.lastChild, y = p ? Zt(p) : [];
          if (y.length) {
            let g = y[y.length - 1], k = a ? g.right - d.left : d.right - g.left;
            k > l && (l = k, this.minWidth = r, this.minWidthFrom = h, this.minWidthTo = u);
          }
        }
      }
      h = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? X.RTL : X.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof se) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, i, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = Zt(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = r ? r.width / 27 : 7, s = r ? r.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: s };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new Ma(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(P.replace({
          widget: new Fo(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return P.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(Bi).map((t, i) => (this.dynamicDecorationMap[i] = typeof t == "function") ? t(this.view) : t);
    for (let t = e.length; t < e.length + 3; t++)
      this.dynamicDecorationMap[t] = !1;
    return this.decorations = [
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ];
  }
  scrollIntoView(e) {
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), s;
    if (!i)
      return;
    !t.empty && (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, s.left),
      top: Math.min(i.top, s.top),
      right: Math.max(i.right, s.right),
      bottom: Math.max(i.bottom, s.bottom)
    });
    let r = $a(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    };
    qf(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == X.LTR);
  }
}
function hu(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
class Fo extends ct {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get estimatedHeight() {
    return this.height;
  }
}
function Za(n, e) {
  let t = n.observer.selectionRange, i = t.focusNode && Qa(t.focusNode, t.focusOffset, 0);
  if (!i)
    return null;
  let s = e - i.offset;
  return { from: s, to: s + i.node.nodeValue.length, node: i.node };
}
function cu(n, e, t) {
  let i = Za(n, t);
  if (!i)
    return null;
  let { node: s, from: r, to: o } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, h = new Ie(a.mapPos(r), a.mapPos(o), r, o), c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = Y.get(f);
    if (u instanceof lt)
      c.push({ node: f, deco: u.mark });
    else {
      if (u instanceof se || f.nodeName == "DIV" && f.parentNode == n.contentDOM)
        return { range: h, text: s, marks: c, line: f };
      if (f != n.contentDOM)
        c.push({ node: f, deco: new _i({
          inclusive: !0,
          attributes: Xf(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function Qa(n, e, t) {
  if (t <= 0)
    for (let i = n, s = e; ; ) {
      if (i.nodeType == 3)
        return { node: i, offset: s };
      if (i.nodeType == 1 && s > 0)
        i = i.childNodes[s - 1], s = rt(i);
      else
        break;
    }
  if (t >= 0)
    for (let i = n, s = e; ; ) {
      if (i.nodeType == 3)
        return { node: i, offset: s };
      if (i.nodeType == 1 && s < i.childNodes.length && t >= 0)
        i = i.childNodes[s], s = 0;
      else
        break;
    }
  return null;
}
function fu(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let uu = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    ar(e, t, this.changes);
  }
  comparePoint(e, t) {
    ar(e, t, this.changes);
  }
};
function du(n, e, t) {
  let i = new uu();
  return q.compare(n, e, t, i), i.changes;
}
function pu(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function gu(n, e) {
  let t = !1;
  return e && n.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (t = !0);
  }), t;
}
function mu(n, e, t = 1) {
  let i = n.charCategorizer(e), s = n.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return S.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = ge(s.text, r, !1) : l = ge(s.text, r);
  let a = i(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = ge(s.text, o, !1);
    if (i(s.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = ge(s.text, l);
    if (i(s.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return S.range(o + s.from, l + s.from);
}
function yu(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function bu(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function xs(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Ho(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Wo(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function dr(n, e, t) {
  let i, s, r, o, l = !1, a, h, c, f;
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let y = Zt(p);
    for (let g = 0; g < y.length; g++) {
      let k = y[g];
      s && xs(s, k) && (k = Ho(Wo(k, s.bottom), s.top));
      let m = yu(e, k), b = bu(t, k);
      if (m == 0 && b == 0)
        return p.nodeType == 3 ? Vo(p, e, t) : dr(p, e, t);
      if (!i || o > b || o == b && r > m) {
        i = p, s = k, r = m, o = b;
        let w = b ? t < k.top ? -1 : 1 : m ? e < k.left ? -1 : 1 : 0;
        l = !w || (w > 0 ? g < y.length - 1 : g > 0);
      }
      m == 0 ? t > k.bottom && (!c || c.bottom < k.bottom) ? (a = p, c = k) : t < k.top && (!f || f.top > k.top) && (h = p, f = k) : c && xs(c, k) ? c = Wo(c, k.bottom) : f && xs(f, k) && (f = Ho(f, k.top));
    }
  }
  if (c && c.bottom >= t ? (i = a, s = c) : f && f.top <= t && (i = h, s = f), !i)
    return { node: n, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (i.nodeType == 3)
    return Vo(i, u, t);
  if (l && i.contentEditable != "false")
    return dr(i, u, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function Vo(n, e, t) {
  let i = n.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = It(n, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      o || (o = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2, d = u;
        if ((R.chrome || R.gecko) && It(n, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
          return { node: n, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = f;
      }
    }
  }
  return { node: n, offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0 };
}
function eh(n, e, t, i = -1) {
  var s, r;
  let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, a, { docHeight: h } = n.viewState, { x: c, y: f } = e, u = f - l;
  if (u < 0)
    return 0;
  if (u > h)
    return n.state.doc.length;
  for (let w = n.viewState.heightOracle.textHeight / 2, x = !1; a = n.elementAtHeight(u), a.type != ve.Text; )
    for (; u = i > 0 ? a.bottom + w : a.top - w, !(u >= 0 && u <= h); ) {
      if (x)
        return t ? null : 0;
      x = !0, i = -i;
    }
  f = l + u;
  let d = a.from;
  if (d < n.viewport.from)
    return n.viewport.from == 0 ? 0 : t ? null : zo(n, o, a, c, f);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : zo(n, o, a, c, f);
  let p = n.dom.ownerDocument, y = n.root.elementFromPoint ? n.root : p, g = y.elementFromPoint(c, f);
  g && !n.contentDOM.contains(g) && (g = null), g || (c = Math.max(o.left + 1, Math.min(o.right - 1, c)), g = y.elementFromPoint(c, f), g && !n.contentDOM.contains(g) && (g = null));
  let k, m = -1;
  if (g && ((s = n.docView.nearest(g)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let w = p.caretPositionFromPoint(c, f);
      w && ({ offsetNode: k, offset: m } = w);
    } else if (p.caretRangeFromPoint) {
      let w = p.caretRangeFromPoint(c, f);
      w && ({ startContainer: k, startOffset: m } = w, (!n.contentDOM.contains(k) || R.safari && wu(k, m, c) || R.chrome && xu(k, m, c)) && (k = void 0));
    }
  }
  if (!k || !n.docView.dom.contains(k)) {
    let w = se.find(n.docView, d);
    if (!w)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: k, offset: m } = dr(w.dom, c, f));
  }
  let b = n.docView.nearest(k);
  if (!b)
    return null;
  if (b.isWidget && ((r = b.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let w = b.dom.getBoundingClientRect();
    return e.y < w.top || e.y <= w.bottom && e.x <= (w.left + w.right) / 2 ? b.posAtStart : b.posAtEnd;
  } else
    return b.localPosFromDOM(k, m) + b.posAtStart;
}
function zo(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    r += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + Qs(o, r, n.state.tabSize);
}
function wu(n, e, t) {
  let i;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length))
    return !1;
  for (let s = n.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return !1;
  return It(n, i - 1, i).getBoundingClientRect().left > t;
}
function xu(n, e, t) {
  if (e != 0)
    return !1;
  for (let s = n; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    s = r;
  }
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : It(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function pr(n, e) {
  let t = n.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || i.to == e && (i.to == t.to || i.type == ve.Text))
        return i;
  }
  return t;
}
function vu(n, e, t, i) {
  let s = pr(n, e.head), r = !i || s.type != ve.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({
      x: t == (l == X.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return S.cursor(a, t ? -1 : 1);
  }
  return S.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function _o(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = au(s, r, o, l, t), c = Xa;
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1))
        return l;
      c = `
`, s = n.state.doc.line(s.number + (t ? 1 : -1)), r = n.bidiSpans(s), h = S.cursor(t ? s.from : s.to);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function ku(n, e, t) {
  let i = n.state.charCategorizer(e), s = i(t);
  return (r) => {
    let o = i(r);
    return s == J.Space && (s = o), s == o;
  };
}
function Su(n, e, t, i) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0))
    return S.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(s, e.assoc || -1), c = n.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let d = n.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + c;
  }
  let f = a.left + o, u = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, y = eh(n, { x: f, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? y < s : y > s)) {
      let g = n.docView.coordsForChar(y), k = !g || p < g.top ? -1 : 1;
      return S.cursor(y, k, void 0, o);
    }
  }
}
function xn(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let s of n)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function vs(n, e, t) {
  let i = xn(n.state.facet(Kr).map((s) => s(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : S.cursor(i, i < t.from ? 1 : -1);
}
class Cu {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, R.safari && e.contentDOM.addEventListener("input", () => null), R.gecko && Vu(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Lu(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || this.runHandlers(e.type, e);
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers)
        s(this.view, t);
      for (let s of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Au(e), i = this.handlers, s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (e.keyCode != 27 && ih.indexOf(e.keyCode) < 0 && (this.view.inputState.lastEscPress = 0), R.android && R.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return R.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = th.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || Mu.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey() {
    let e = this.pendingIOSKey;
    return e ? (this.pendingIOSKey = void 0, Yt(this.view.contentDOM, e.key, e.keyCode)) : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : R.safari && !R.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function qo(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      We(t.state, s);
    }
  };
}
function Au(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && t(r).handlers.push(qo(i.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && t(r).observers.push(qo(i.value, o));
      }
  }
  for (let i in et)
    t(i).handlers.push(et[i]);
  for (let i in Ve)
    t(i).observers.push(Ve[i]);
  return e;
}
const th = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Mu = "dthko", ih = [16, 17, 18, 20, 91, 92, 224, 225], Zi = 6;
function Qi(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Du(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Tu {
  constructor(e, t, i, s) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParent = jf(e.contentDOM), this.atoms = e.state.facet(Kr).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(H.allowMultipleSelections) && Ou(e, t), this.dragging = Bu(e, t) && oh(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    var t;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Du(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let i = 0, s = 0, r = ((t = this.scrollParent) === null || t === void 0 ? void 0 : t.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, o = $a(this.view);
    e.clientX - o.left <= r.left + Zi ? i = -Qi(r.left - e.clientX) : e.clientX + o.right >= r.right - Zi && (i = Qi(e.clientX - r.right)), e.clientY - o.top <= r.top + Zi ? s = -Qi(r.top - e.clientY) : e.clientY + o.bottom >= r.bottom - Zi && (s = Qi(e.clientY - r.bottom)), this.setScrollSpeed(i, s);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let s = e.ranges[i], r = null;
      if (s.empty) {
        let o = xn(this.atoms, s.from, 0);
        o != s.from && (r = S.cursor(o, -1));
      } else {
        let o = xn(this.atoms, s.from, -1), l = xn(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = S.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), t[i] = r);
    }
    return t ? S.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection) || i.main.assoc != t.state.selection.main.assoc && this.dragging === !1) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.docChanged && this.dragging && (this.dragging = this.dragging.map(e.changes)), this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Ou(n, e) {
  let t = n.state.facet(Ia);
  return t.length ? t[0](e) : R.mac ? e.metaKey : e.ctrlKey;
}
function Eu(n, e) {
  let t = n.state.facet(Na);
  return t.length ? t[0](e) : R.mac ? !e.altKey : !e.ctrlKey;
}
function Bu(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return !1;
  let i = Tn(n.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Lu(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = Y.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const et = /* @__PURE__ */ Object.create(null), Ve = /* @__PURE__ */ Object.create(null), nh = R.ie && R.ie_version < 15 || R.ios && R.webkit_version < 604;
function Ru(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), sh(n, t.value);
  }, 50);
}
function sh(n, e) {
  let { state: t } = n, i, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (gr != null && t.selection.ranges.every((a) => a.empty) && gr == r.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: S.cursor(h.from + f.length)
      };
    });
  } else
    o ? i = t.changeByRange((a) => {
      let h = r.line(s++);
      return {
        changes: { from: a.from, to: a.to, insert: h.text },
        range: S.cursor(a.from + h.length)
      };
    }) : i = t.replaceSelection(r);
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Ve.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
et.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (n.inputState.lastEscPress = Date.now()), !1);
Ve.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
Ve.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
et.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of n.state.facet(Fa))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = Nu(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Tu(n, e, t, i)), i && n.observer.ignore(() => Sa(n.contentDOM));
    let s = n.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  }
  return !1;
};
function jo(n, e, t, i) {
  if (i == 1)
    return S.cursor(e, t);
  if (i == 2)
    return mu(n.state, e, t);
  {
    let s = se.find(n.docView, e), r = n.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < n.state.doc.length && l == r.to && l++, S.range(o, l);
  }
}
let rh = (n, e) => n >= e.top && n <= e.bottom, Ko = (n, e, t) => rh(e, t) && n >= t.left && n <= t.right;
function Pu(n, e, t, i) {
  let s = se.find(n.docView, e);
  if (!s)
    return 1;
  let r = e - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && Ko(t, i, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && Ko(t, i, l) ? 1 : o && rh(i, o) ? -1 : 1;
}
function $o(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Pu(n, t, e.clientX, e.clientY) };
}
const Iu = R.ie && R.ie_version <= 11;
let Uo = null, Go = 0, Yo = 0;
function oh(n) {
  if (!Iu)
    return n.detail;
  let e = Uo, t = Yo;
  return Uo = n, Yo = Date.now(), Go = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (Go + 1) % 3 : 1;
}
function Nu(n, e) {
  let t = $o(n, e), i = oh(e), s = n.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = $o(n, r), h, c = jo(n, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let f = jo(n, t.pos, t.bias, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
        c = u < c.from ? S.range(u, d) : S.range(d, u);
      }
      return o ? s.replaceRange(s.main.extend(c.from, c.to)) : l && i == 1 && s.ranges.length > 1 && (h = Fu(s, a.pos)) ? h : l ? s.addRange(c) : S.create([c]);
    }
  };
}
function Fu(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: s } = n.ranges[t];
    if (i <= e && s >= e)
      return S.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
et.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state, { mouseSelection: i } = n.inputState;
  return i && (i.dragging = t), e.dataTransfer && (e.dataTransfer.setData("Text", n.state.sliceDoc(t.from, t.to)), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
function Jo(n, e, t, i) {
  if (!t)
    return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { mouseSelection: r } = n.inputState, o = i && r && r.dragging && Eu(n, e) ? { from: r.dragging.from, to: r.dragging.to } : null, l = { from: s, insert: t }, a = n.state.changes(o ? [o, l] : l);
  n.focus(), n.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  });
}
et.drop = (n, e) => {
  if (!e.dataTransfer)
    return !1;
  if (n.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), s = 0, r = () => {
      ++s == t.length && Jo(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return Jo(n, e, i, !0), !0;
  }
  return !1;
};
et.paste = (n, e) => {
  if (n.state.readOnly)
    return !0;
  n.observer.flush();
  let t = nh ? null : e.clipboardData;
  return t ? (sh(n, t.getData("text/plain") || t.getData("text/uri-text")), !0) : (Ru(n), !1);
};
function Hu(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function Wu(n) {
  let e = [], t = [], i = !1;
  for (let s of n.selection.ranges)
    s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of n.selection.ranges) {
      let o = n.doc.lineAt(r);
      o.number > s && (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })), s = o.number;
    }
    i = !0;
  }
  return { text: e.join(n.lineBreak), ranges: t, linewise: i };
}
let gr = null;
et.copy = et.cut = (n, e) => {
  let { text: t, ranges: i, linewise: s } = Wu(n.state);
  if (!t && !s)
    return !1;
  gr = s ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = nh ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (Hu(n, t), !1);
};
const lh = /* @__PURE__ */ ht.define();
function ah(n, e) {
  let t = [];
  for (let i of n.facet(Va)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t ? n.update({ effects: t, annotations: lh.of(!0) }) : null;
}
function hh(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = ah(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
Ve.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), hh(n);
};
Ve.blur = (n) => {
  n.observer.clearSelectionRange(), hh(n);
};
Ve.compositionstart = Ve.compositionupdate = (n) => {
  n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0);
};
Ve.compositionend = (n) => {
  n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, R.chrome && R.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50);
};
Ve.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
et.beforeinput = (n, e) => {
  var t;
  let i;
  if (R.chrome && R.android && (i = th.find((s) => s.inputType == e.inputType)) && (n.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
    let s = ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return !1;
};
const Xo = /* @__PURE__ */ new Set();
function Vu(n) {
  Xo.has(n) || (Xo.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const Zo = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class zu {
  constructor(e) {
    this.lineWrapping = e, this.doc = z.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Zo.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (t = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, s, r, o) {
    let l = Zo.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class _u {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ye {
  /**
  @internal
  */
  constructor(e, t, i, s, r) {
    this.from = e, this.length = t, this.top = i, this.height = s, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? ve.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof Ct ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Ye(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var G = /* @__PURE__ */ function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(G || (G = {}));
const vn = 1e-3;
class ke {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e, t) {
    this.height != t && (Math.abs(this.height - t) > vn && (e.heightChanged = !0), this.height = t);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return ke.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, s) {
    let r = this, o = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = r.lineAt(a, G.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : r.lineAt(h, G.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, G.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = $r.build(i.setDoc(o), e, c, f);
      r = r.replace(a, h, p);
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Oe(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, s = 0, r = 0;
    for (; ; )
      if (t == i)
        if (s > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (s < r) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new qu(ke.of(e.slice(0, t)), o, ke.of(e.slice(i)));
  }
}
ke.prototype.size = 1;
class ch extends ke {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, s) {
    return new Ye(s, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, s, r) {
    return this.blockAt(0, i, s, r);
  }
  forEachLine(e, t, i, s, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, i, s, r));
  }
  updateHeight(e, t = 0, i = !1, s) {
    return s && s.from <= t && s.more && this.setHeight(e, s.heights[s.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Oe extends ch {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, s) {
    return new Ye(s, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof Oe || s instanceof le && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof le ? s = new Oe(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : ke.of(i);
  }
  updateHeight(e, t = 0, i = !1, s) {
    return s && s.from <= t && s.more ? this.setHeight(e, s.heights[s.index++]) : (i || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class le extends ke {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, r = s - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, i, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h = s + Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length), c = t.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, e - f / 2);
      return new Ye(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(r + h);
      return new Ye(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == G.ByHeight)
      return this.blockAt(e, i, s, r);
    if (t == G.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Ye(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - o, u = s + l * f + a * (h.from - r - f);
    return new Ye(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, s, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = s; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Ye(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof le ? i[i.length - 1] = new le(r.length + s) : i.push(null, new le(s - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof le ? i[0] = new le(e + r.length) : i.unshift(new le(e - 1), null);
    }
    return ke.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new le(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new le(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [], l = Math.max(t, s.from), a = -1;
      for (s.from > t && o.push(new le(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= vn && (a = -2);
        let u = new Oe(c, f);
        u.outdated = !1, o.push(u), l += c + 1;
      }
      l <= r && o.push(null, new le(r - l).updateHeight(e, l));
      let h = ke.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= vn || Math.abs(a - this.heightMetrics(e, t).perLine) >= vn) && (e.heightChanged = !0), h;
    } else
      (i || this.outdated) && (this.setHeight(e, e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class qu extends ke {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, s) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, s) : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, i, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = t == G.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == G.ByPosNoHeight ? G.ByPosNoHeight : G.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h);
  }
  forEachLine(e, t, i, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, s, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, G.ByPos, i, s, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, s, r, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break;
    if (t < s)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (e > 0 && Qo(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), Qo(r, l);
    }
    return ke.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, s = i + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? ke.of(this.break ? [e, null, t] : [e, t]) : (this.left = e, this.right = t, this.height = e.height + t.height, this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, s) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return s && s.from <= t + r.length && s.more ? a = r = r.updateHeight(e, t, i, s) : r.updateHeight(e, t, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, i, s) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Qo(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof le && (i = n[e + 1]) instanceof le && n.splice(e - 1, 3, new le(t.length + 1 + i.length));
}
const ju = 5;
class $r {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof Oe ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Oe(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new ch(o, s, i)) : (o || r || s >= ju) && this.addLineDeco(s, r, o);
    } else
      t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Oe(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new le(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Oe)
      return e;
    let t = new Oe(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Oe) && !this.isCovered ? this.nodes.push(new Oe(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof Oe && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, s) {
    let r = new $r(i, e);
    return q.spans(t, i, s, r, 0), r.finish(i);
  }
}
function Ku(n, e, t) {
  let i = new $u();
  return q.compare(n, e, t, i, 0), i.changes;
}
class $u {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, s) {
    (e < t || i && i.heightRelevant || s && s.heightRelevant) && ar(e, t, this.changes, 5);
  }
}
function Uu(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(s.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(s.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = h == n.parentNode ? u.bottom : Math.min(a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function Gu(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class ks {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.size = i;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i], r = t[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return P.replace({
      widget: new Yu(this.size * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Yu extends ct {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class el {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = tl, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = X.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(jr).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new zu(t), this.stateDeco = e.facet(Bi).filter((i) => typeof i != "function"), this.heightMap = ke.empty().applyChanges(this.stateDeco, z.empty, this.heightOracle.setDoc(e.doc), [new Ie(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = P.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new en(r, o));
      }
    }
    this.viewports = e.sort((i, s) => i.from - s.from), this.scaler = this.heightMap.height <= 7e6 ? tl : new Zu(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : yi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Bi).filter((c) => typeof c != "function");
    let s = e.changedRanges, r = Ie.extendWithRanges(s, Ku(i, this.stateDeco, e ? e.changes : re.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != o && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = !e.changes.empty || e.flags & 2 || a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, this.updateForViewport(), h && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(_a) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? X.RTL : X.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let w = l.width / t.offsetWidth, x = l.height / t.offsetHeight;
      (w > 0.995 && w < 1.005 || !isFinite(w) || Math.abs(l.width - t.offsetWidth) < 1) && (w = 1), (x > 0.995 && x < 1.005 || !isFinite(x) || Math.abs(l.height - t.offsetHeight) < 1) && (x = 1), (this.scaleX != w || this.scaleY != x) && (this.scaleX = w, this.scaleY = x, h |= 8, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 10), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 8);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Aa(e.scrollDOM);
    let p = (this.printing ? Gu : Uu)(t, this.paddingTop), y = p.top - this.pixelViewport.top, g = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let k = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (k != this.inView && (this.inView = k, k && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let m = l.width;
    if ((this.contentDOMWidth != m || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 8), a) {
      let w = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(w) && (o = !0), o || s.lineWrapping && Math.abs(m - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: x, charWidth: v, textHeight: C } = e.docView.measureTextSize();
        o = x > 0 && s.refresh(r, x, v, C, m / v, w), o && (e.docView.minWidth = 0, h |= 8);
      }
      y > 0 && g > 0 ? c = Math.max(y, g) : y < 0 && g < 0 && (c = Math.min(y, g)), s.heightChanged = !1;
      for (let x of this.viewports) {
        let v = x.from == this.viewport.from ? w : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (o ? ke.empty().applyChanges(this.stateDeco, z.empty, this.heightOracle, [new Ie(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new _u(x.from, v));
      }
      s.heightChanged && (h |= 2);
    }
    let b = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return b && (this.viewport = this.getViewport(c, this.scrollTarget)), this.updateForViewport(), (h & 2 || b) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new en(s.lineAt(o - i * 1e3, G.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, G.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, G.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new en(s.lineAt(u - 1e3 / 2, G.ByHeight, r, 0, 0).from, s.lineAt(u + c + 1e3 / 2, G.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new en(this.heightMap.lineAt(i, G.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, G.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, G.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, G.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) || i.push(new ks(t.mapPos(s.from), t.mapPos(s.to), s.size));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != X.LTR && !i)
      return [];
    let l = [], a = (h, c, f, u) => {
      if (c - h < r)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let g of p)
        if (g > h && g < c) {
          a(h, g - 10, f, u), a(g + 10, c, f, u);
          return;
        }
      let y = Xu(e, (g) => g.from >= f.from && g.to <= f.to && Math.abs(g.from - h) < r && Math.abs(g.to - c) < r && !p.some((k) => g.from < k && g.to > k));
      if (!y) {
        if (c < f.to && t && i && t.visibleRanges.some((g) => g.from <= c && g.to >= c)) {
          let g = t.moveToLineBoundary(S.cursor(c), !1, !0).head;
          g > h && (c = g);
        }
        y = new ks(h, c, this.gapSize(f, h, c, u));
      }
      l.push(y);
    };
    for (let h of this.viewportLines) {
      if (h.length < o)
        continue;
      let c = Ju(h.from, h.to, this.stateDeco);
      if (c.total < o)
        continue;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, u, d;
      if (i) {
        let p = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, y, g;
        if (f != null) {
          let k = nn(c, f), m = ((this.visibleBottom - this.visibleTop) / 2 + p) / h.height;
          y = k - m, g = k + m;
        } else
          y = (this.visibleTop - h.top - p) / h.height, g = (this.visibleBottom - h.top + p) / h.height;
        u = tn(c, y), d = tn(c, g);
      } else {
        let p = c.total * this.heightOracle.charWidth, y = s * this.heightOracle.charWidth, g, k;
        if (f != null) {
          let m = nn(c, f), b = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + y) / p;
          g = m - b, k = m + b;
        } else
          g = (this.pixelViewport.left - y) / p, k = (this.pixelViewport.right + y) / p;
        u = tn(c, g), d = tn(c, k);
      }
      u > h.from && a(h.from, u, h, c), d < h.to && a(d, h.to, h, c);
    }
    return l;
  }
  gapSize(e, t, i, s) {
    let r = nn(s, i) - nn(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    ks.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = P.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    q.spans(e, this.viewport.from, this.viewport.to, {
      span(s, r) {
        t.push({ from: s, to: r });
      },
      point() {
      }
    }, 20);
    let i = t.length != this.visibleRanges.length || this.visibleRanges.some((s, r) => s.from != t[r].from || s.to != t[r].to);
    return this.visibleRanges = t, i ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || yi(this.heightMap.lineAt(e, G.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return yi(this.heightMap.lineAt(this.scaler.fromDOM(e), G.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return yi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class en {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Ju(n, e, t) {
  let i = [], s = n, r = 0;
  return q.spans(t, n, e, {
    span() {
    },
    point(o, l) {
      o > s && (i.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < e && (i.push({ from: s, to: e }), r += e - s), { total: r, ranges: i };
}
function tn({ total: n, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function nn(n, e) {
  let t = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (e <= s) {
      t += e - i;
      break;
    }
    t += s - i;
  }
  return t / n.total;
}
function Xu(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const tl = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1
};
class Zu {
  constructor(e, t, i) {
    let s = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, G.ByPos, e, 0, 0).top, c = t.lineAt(a, G.ByPos, e, 0, 0).bottom;
      return s += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return s + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - s) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, s = r.domBottom;
    }
  }
}
function yi(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new Ye(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((s) => yi(s, e)) : n._content);
}
const sn = /* @__PURE__ */ L.define({ combine: (n) => n.join(" ") }), mr = /* @__PURE__ */ L.define({ combine: (n) => n.indexOf(!0) > -1 }), yr = /* @__PURE__ */ kt.newName(), fh = /* @__PURE__ */ kt.newName(), uh = /* @__PURE__ */ kt.newName(), dh = { "&light": "." + fh, "&dark": "." + uh };
function br(n, e, t) {
  return new kt(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (s) => {
        if (s == "&")
          return n;
        if (!t || !t[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return t[s];
      }) : n + " " + i;
    }
  });
}
const Qu = /* @__PURE__ */ br("." + yr, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace:before": {
    content: "attr(data-display)",
    position: "absolute",
    pointerEvents: "none",
    color: "#888"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, dh), bi = "￿";
class ed {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(H.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += bi;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == t)
        break;
      let l = Y.get(s), a = Y.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : il(s)) || il(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = s.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = Y.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (td(e, i.node, i.offset) ? t : 0));
  }
}
function td(n, e, t) {
  for (; ; ) {
    if (!e || t < rt(e))
      return !1;
    if (e == n)
      return !0;
    t = Ei(e) + 1, e = e.parentNode;
  }
}
function il(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
class nl {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class id {
  constructor(e, t, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "";
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = r || o ? [] : rd(e), a = new ed(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = od(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !ir(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !ir(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = S.single(h, a);
    }
  }
}
function ph(n, e) {
  let t, { newSel: i } = e, s = n.state.selection.main, r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = s.from, h = null;
    (r === 8 || R.android && e.text.length < l - o) && (a = s.to, h = "end");
    let c = sd(n.state.doc.sliceString(o, l, bi), e.text, a - o, h);
    c && (R.chrome && r == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == bi + bi && c.toB--, t = {
      from: o + c.from,
      to: o + c.toA,
      insert: z.of(e.text.slice(c.from, c.toB).split(bi))
    });
  } else
    i && (!n.hasFocus && n.state.facet(es) || i.main.eq(s)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !s.empty && i && i.main.empty ? t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) } : t && t.from >= s.from && t.to <= s.to && (t.from != s.from || t.to != s.to) && s.to - s.from - (t.to - t.from) <= 4 ? t = {
    from: s.from,
    to: s.to,
    insert: n.state.doc.slice(s.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, s.to))
  } : (R.mac || R.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = S.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: z.of([" "]) }) : R.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = S.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: z.of([" "]) }), t) {
    if (R.ios && n.inputState.flushIOSKey() || R.android && (t.from == s.from && t.to == s.to && t.insert.length == 1 && t.insert.lines == 2 && Yt(n.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || r == 8 && t.insert.length < t.to - t.from && t.to > s.head) && Yt(n.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && Yt(n.contentDOM, "Delete", 46)))
      return !0;
    let o = t.insert.toString();
    n.inputState.composing >= 0 && n.inputState.composing++;
    let l, a = () => l || (l = nd(n, t, i));
    return n.state.facet(Wa).some((h) => h(n, t.from, t.to, o, a)) || n.dispatch(a()), !0;
  } else if (i && !i.main.eq(s)) {
    let o = !1, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = !0), l = n.inputState.lastSelectionOrigin), n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function nd(n, e, t) {
  let i, s = n.state, r = s.selection.main;
  if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : "", a = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    i = s.replaceSelection(n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + a));
  } else {
    let l = s.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), c, f = t && Za(n, t.main.head);
      if (f) {
        let p = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - p };
      } else
        c = n.state.doc.lineAt(r.head);
      let u = r.to - e.to, d = r.to - r.from;
      i = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let y = p.to - u, g = y - h.length;
        if (p.to - p.from != d || n.state.sliceDoc(g, y) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= c.from && p.from <= c.to)
          return { range: p };
        let k = s.changes({ from: g, to: y, insert: e.insert }), m = p.to - r.to;
        return {
          changes: k,
          range: a ? S.range(Math.max(0, a.anchor + m), Math.max(0, a.head + m)) : p.map(k)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && s.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, o += ".compose", n.inputState.compositionFirstChange && (o += ".start", n.inputState.compositionFirstChange = !1)), s.update(i, { userEvent: o, scrollIntoView: !0 });
}
function sd(n, e, t, i) {
  let s = Math.min(n.length, e.length), r = 0;
  for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == s && n.length == e.length)
    return null;
  let o = n.length, l = e.length;
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && n.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function rd(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return t && (e.push(new nl(t, i)), (s != t || r != i) && e.push(new nl(s, r))), e;
}
function od(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? S.single(t + e, i + e) : null;
}
const ld = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Ss = R.ie && R.ie_version <= 11;
class ad {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new Kf(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (R.ie && R.ie_version <= 11 || R.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Ss && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM), this.resizeContent = new ResizeObserver(() => this.view.requestMeasure()), this.resizeContent.observe(e.contentDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint() {
    this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500);
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(es) ? i.root.activeElement != this.dom : !wn(i.dom, s))
      return;
    let r = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (R.ie && R.ie_version <= 11 || R.android && R.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && On(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = R.safari && e.root.nodeType == 11 && zf(this.dom.ownerDocument) == this.dom && hd(this.view) || Tn(e.root);
    if (!t || this.selectionRange.eq(t))
      return !1;
    let i = wn(this.dom, t);
    return i && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Uf(this.dom, t) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(t), i && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, ld), Ss && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Ss && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Yt(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), s = this.selectionChanged && wn(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new id(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, s = ph(this.view, t);
    return this.view.state == i && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = sl(t, e.previousSibling || e.target.previousSibling, -1), s = sl(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1
      };
    } else
      return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var e, t, i, s;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect(), (s = this.resizeContent) === null || s === void 0 || s.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function sl(n, e, t) {
  for (; e; ) {
    let i = Y.get(e);
    if (i && i.parent == n)
      return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function hd(n) {
  let e = null;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  if (n.contentDOM.addEventListener("beforeinput", t, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", t, !0), !e)
    return null;
  let i = e.startContainer, s = e.startOffset, r = e.endContainer, o = e.endOffset, l = n.docView.domAtPos(n.state.selection.main.anchor);
  return On(l.node, l.offset, r, o) && ([i, s, r, o] = [r, o, i, s]), { anchorNode: i, anchorOffset: s, focusNode: r, focusOffset: o };
}
class E {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM);
    let { dispatch: t } = e;
    this.dispatchTransactions = e.dispatchTransactions || t && ((i) => i.forEach((s) => t(s, this))) || ((i) => this.update(i)), this.dispatch = this.dispatch.bind(this), this._root = e.root || $f(e.parent) || document, this.viewState = new el(e.state || H.create(e)), this.plugins = this.state.facet(gi).map((i) => new ws(i));
    for (let i of this.plugins)
      i.update(this);
    this.observer = new ad(this), this.inputState = new Cu(this), this.inputState.ensureHandlers(this.plugins), this.docView = new No(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof oe ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, s, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(lh)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = ah(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(H.phrases) != this.state.facet(H.phrases))
      return this.setState(r);
    s = Bn.create(this, r, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new En(d.empty ? d : S.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Po) && (f = d.value);
      }
      this.viewState.update(s, f), this.bidiCache = Ln.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(mi) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(sn) != s.state.facet(sn) && (this.viewState.mustMeasureContent = !0), (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !s.empty)
      for (let u of this.state.facet(hr))
        u(s);
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !ph(this, c) && h.force && Yt(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new el(e), this.plugins = e.facet(gi).map((i) => new ws(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView = new No(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(gi), i = e.state.facet(gi);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          s.push(new ws(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, s = i.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Aa(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return We(this.state, p), rl;
          }
        }), f = Bn.create(this, this.state, []), u = !1;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f));
        for (let d = 0; d < h.length; d++)
          if (c[d] != rl)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              We(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                s = s + p, i.scrollTop = s / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(hr))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return yr + " " + (this.state.facet(mr) ? uh : fh) + " " + this.state.facet(sn);
  }
  updateAttrs() {
    let e = ol(this, qa, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(es) ? "true" : "false",
      class: "cm-content",
      style: `${R.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), ol(this, jr, t);
    let i = this.observer.ignore(() => {
      let s = lr(this.contentDOM, this.contentAttrs, t), r = lr(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(E.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(mi);
    let e = this.state.facet(E.cspNonce);
    kt.mount(this.root, this.styleModules.concat(Qu).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.spec != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.spec == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line breaks, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return vs(this, e, _o(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return vs(this, e, _o(this, e, t, (i) => ku(this, e.head, i)));
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return vu(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return vs(this, e, Su(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), eh(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[mt.find(r, e - s.from, -1, t)];
    return Zn(i, o.dir == X.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(za) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > cd)
      return Ja(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Ya(r.isolates, i = Io(this, e.from, e.to))))
        return r.order;
    i || (i = Io(this, e.from, e.to));
    let s = lu(e.text, t, i);
    return this.bidiCache.push(new Ln(e.from, e.to, t, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || R.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Sa(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return Po.of(new En(typeof e == "number" ? S.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return ie.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return ie.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = kt.newName(), s = [sn.of(i), mi.of(br(`.${i}`, e))];
    return t && t.dark && s.push(mr.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return ni.lowest(mi.of(br("." + yr, e, dh)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), s = i && Y.get(i) || Y.get(e);
    return ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
E.styleModule = mi;
E.inputHandler = Wa;
E.focusChangeEffect = Va;
E.perLineTextDirection = za;
E.exceptionSink = Ha;
E.updateListener = hr;
E.editable = es;
E.mouseSelectionStyle = Fa;
E.dragMovesSelection = Na;
E.clickAddsSelectionRange = Ia;
E.decorations = Bi;
E.atomicRanges = Kr;
E.bidiIsolatedRanges = ja;
E.scrollMargins = Ka;
E.darkTheme = mr;
E.cspNonce = /* @__PURE__ */ L.define({ combine: (n) => n.length ? n[0] : "" });
E.contentAttributes = jr;
E.editorAttributes = qa;
E.lineWrapping = /* @__PURE__ */ E.contentAttributes.of({ class: "cm-lineWrapping" });
E.announce = /* @__PURE__ */ N.define();
const cd = 4096, rl = {};
class Ln {
  constructor(e, t, i, s, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : X.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && i.push(new Ln(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function ol(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s], o = typeof r == "function" ? r(n) : r;
    o && or(o, t);
  }
  return t;
}
const fd = R.mac ? "mac" : R.windows ? "win" : R.linux ? "linux" : "key";
function ud(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function rn(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
const dd = /* @__PURE__ */ ni.default(/* @__PURE__ */ E.domEventHandlers({
  keydown(n, e) {
    return mh(gh(e.state), n, e, "editor");
  }
})), ts = /* @__PURE__ */ L.define({ enables: dd }), ll = /* @__PURE__ */ new WeakMap();
function gh(n) {
  let e = n.facet(ts), t = ll.get(e);
  return t || ll.set(e, t = md(e.reduce((i, s) => i.concat(s), []))), t;
}
function pd(n, e, t) {
  return mh(gh(n.state), e, n, t);
}
let dt = null;
const gd = 4e3;
function md(n, e = fd) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((k) => ud(k, e));
    for (let k = 1; k < p.length; k++) {
      let m = p.slice(0, k).join(" ");
      s(m, !0), d[m] || (d[m] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(b) => {
          let w = dt = { view: b, prefix: m, scope: o };
          return setTimeout(() => {
            dt == w && (dt = null);
          }, gd), !0;
        }]
      });
    }
    let y = p.join(" ");
    s(y, !1);
    let g = d[y] || (d[y] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && g.run.push(a), h && (g.preventDefault = !0), c && (g.stopPropagation = !0);
  };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        for (let f in c)
          c[f].run.push(o.any);
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
function mh(n, e, t, i) {
  let s = Vf(e), r = ae(s, 0), o = Re(r) == s.length && s != " ", l = "", a = !1, h = !1, c = !1;
  dt && dt.view == t && dt.scope == i && (l = dt.prefix + " ", ih.indexOf(e.keyCode) < 0 && (h = !0, dt = null));
  let f = /* @__PURE__ */ new Set(), u = (g) => {
    if (g) {
      for (let k of g.run)
        if (!f.has(k) && (f.add(k), k(t, e)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = n[i], p, y;
  return d && (u(d[l + rn(s, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(R.windows && e.ctrlKey && e.altKey) && (p = St[e.keyCode]) && p != s ? (u(d[l + rn(p, e, !0)]) || e.shiftKey && (y = Oi[e.keyCode]) != s && y != p && u(d[l + rn(y, e, !1)])) && (a = !0) : o && e.shiftKey && u(d[l + rn(s, e, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), a;
}
class ji {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, i, s, r) {
    this.className = e, this.left = t, this.top = i, this.width = s, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, i) {
    if (i.empty) {
      let s = e.coordsAtPos(i.head, i.assoc || 1);
      if (!s)
        return [];
      let r = yh(e);
      return [new ji(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return yd(e, t, i);
  }
}
function yh(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == X.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function al(n, e, t) {
  let i = S.cursor(e);
  return {
    from: Math.max(t.from, n.moveToLineBoundary(i, !1, !0).from),
    to: Math.min(t.to, n.moveToLineBoundary(i, !0, !0).from),
    type: ve.Text
  };
}
function yd(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), s = Math.min(t.to, n.viewport.to), r = n.textDirection == X.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = yh(n), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = pr(n, i), p = pr(n, s), y = d.type == ve.Text ? d : null, g = p.type == ve.Text ? p : null;
  if (y && (n.lineWrapping || d.widgetLineBreaks) && (y = al(n, i, y)), g && (n.lineWrapping || p.widgetLineBreaks) && (g = al(n, s, g)), y && g && y.from == g.from)
    return m(b(t.from, t.to, y));
  {
    let x = y ? b(t.from, null, y) : w(d, !1), v = g ? b(null, t.to, g) : w(p, !0), C = [];
    return (y || d).to < (g || p).from - (y && g ? 1 : 0) || d.widgetLineBreaks > 1 && x.bottom + n.defaultLineHeight / 2 < v.top ? C.push(k(f, x.bottom, u, v.top)) : x.bottom < v.top && n.elementAtHeight((x.bottom + v.top) / 2).type == ve.Text && (x.bottom = v.top = (x.bottom + v.top) / 2), m(x).concat(C).concat(m(v));
  }
  function k(x, v, C, T) {
    return new ji(
      e,
      x - a.left,
      v - a.top - 0.01,
      C - x,
      T - v + 0.01
      /* C.Epsilon */
    );
  }
  function m({ top: x, bottom: v, horizontal: C }) {
    let T = [];
    for (let A = 0; A < C.length; A += 2)
      T.push(k(C[A], x, C[A + 1], v));
    return T;
  }
  function b(x, v, C) {
    let T = 1e9, A = -1e9, B = [];
    function I(ne, Q, ee, we, W) {
      let F = n.coordsAtPos(ne, ne == C.to ? -2 : 2), M = n.coordsAtPos(ee, ee == C.from ? 2 : -2);
      !F || !M || (T = Math.min(F.top, M.top, T), A = Math.max(F.bottom, M.bottom, A), W == X.LTR ? B.push(r && Q ? f : F.left, r && we ? u : M.right) : B.push(!r && we ? f : M.left, !r && Q ? u : F.right));
    }
    let _ = x ?? C.from, Z = v ?? C.to;
    for (let ne of n.visibleRanges)
      if (ne.to > _ && ne.from < Z)
        for (let Q = Math.max(ne.from, _), ee = Math.min(ne.to, Z); ; ) {
          let we = n.state.doc.lineAt(Q);
          for (let W of n.bidiSpans(we)) {
            let F = W.from + we.from, M = W.to + we.from;
            if (F >= ee)
              break;
            M > Q && I(Math.max(F, Q), x == null && F <= _, Math.min(M, ee), v == null && M >= Z, W.dir);
          }
          if (Q = we.to + 1, Q >= ee)
            break;
        }
    return B.length == 0 && I(_, x == null, Z, v == null, n.textDirection), { top: T, bottom: A, horizontal: B };
  }
  function w(x, v) {
    let C = l.top + (v ? x.top : x.bottom);
    return { top: C, bottom: C, horizontal: [] };
  }
}
function bd(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class wd {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(kn) != e.state.facet(kn) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  setOrder(e) {
    let t = 0, i = e.facet(kn);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !bd(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let s of e)
        s.update && t && s.constructor && this.drawn[i].constructor && s.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), t = s;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const kn = /* @__PURE__ */ L.define();
function bh(n) {
  return [
    ie.define((e) => new wd(e, n)),
    kn.of(n)
  ];
}
const wh = !R.ios, Ri = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function xd(n = {}) {
  return [
    Ri.of(n),
    vd,
    kd,
    Sd,
    _a.of(!0)
  ];
}
function xh(n) {
  return n.startState.facet(Ri) != n.state.facet(Ri);
}
const vd = /* @__PURE__ */ bh({
  above: !0,
  markers(n) {
    let { state: e } = n, t = e.facet(Ri), i = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty ? !r || wh : t.drawRangeCursor) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : S.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of ji.forRange(n, o, l))
          i.push(a);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = xh(n);
    return t && hl(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    hl(e.state, n);
  },
  class: "cm-cursorLayer"
});
function hl(n, e) {
  e.style.animationDuration = n.facet(Ri).cursorBlinkRate + "ms";
}
const kd = /* @__PURE__ */ bh({
  above: !1,
  markers(n) {
    return n.state.selection.ranges.map((e) => e.empty ? [] : ji.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || xh(n);
  },
  class: "cm-selectionLayer"
}), vh = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
wh && (vh[".cm-line"].caretColor = "transparent !important");
const Sd = /* @__PURE__ */ ni.highest(/* @__PURE__ */ E.theme(vh)), kh = /* @__PURE__ */ N.define({
  map(n, e) {
    return n == null ? null : e.mapPos(n);
  }
}), wi = /* @__PURE__ */ fe.define({
  create() {
    return null;
  },
  update(n, e) {
    return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(kh) ? i.value : t, n);
  }
}), Cd = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(wi);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(wi) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(wi), t = e != null && n.coordsAtPos(e);
    if (!t)
      return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
      top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
      height: t.bottom - t.top
    };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      n ? (this.cursor.style.left = n.left / e + "px", this.cursor.style.top = n.top / t + "px", this.cursor.style.height = n.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(wi) != n && this.view.dispatch({ effects: kh.of(n) });
  }
}, {
  eventObservers: {
    dragover(n) {
      this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
    },
    dragleave(n) {
      (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Ad() {
  return [wi, Cd];
}
function cl(n, e, t, i, s) {
  e.lastIndex = 0;
  for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = e.exec(r.value); )
        s(o + l.index, l);
}
function Md(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to)
    return t;
  let i = [];
  for (let { from: s, to: r } of t)
    s = Math.max(n.state.doc.lineAt(s).from, s - e), r = Math.min(n.state.doc.lineAt(r).to, r + e), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({ from: s, to: r });
  return i;
}
class Dd {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: i, decorate: s, boundary: r, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, s)
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (i)
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new vt(), i = t.add.bind(t);
    for (let { from: s, to: r } of Md(e, this.maxLength))
      cl(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let i = 1e9, s = -1;
    return e.docChanged && e.changes.iterChanges((r, o, l, a) => {
      a > e.view.viewport.from && l < e.view.viewport.to && (i = Math.min(l, i), s = Math.max(a, s));
    }), e.viewportChanged || s - i > 1e3 ? this.createDeco(e.view) : s > -1 ? this.updateRange(e.view, t.map(e.changes), i, s) : t;
  }
  updateRange(e, t, i, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, i), l = Math.min(r.to, s);
      if (l > o) {
        let a = e.state.doc.lineAt(o), h = a.to < l ? e.state.doc.lineAt(l) : a, c = Math.max(r.from, a.from), f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, p = (y, g, k) => u.push(k.range(y, g));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          cl(e.state.doc, this.regexp, c, f, (y, g) => this.addMatch(g, e, y, p));
        t = t.update({ filterFrom: c, filterTo: f, filter: (y, g) => y < c || g > f, add: u });
      }
    }
    return t;
  }
}
const wr = /x/.unicode != null ? "gu" : "g", Td = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, wr), Od = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let Cs = null;
function Ed() {
  var n;
  if (Cs == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Cs = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return Cs || !1;
}
const Sn = /* @__PURE__ */ L.define({
  combine(n) {
    let e = tt(n, {
      render: null,
      specialChars: Td,
      addSpecialChars: null
    });
    return (e.replaceTabs = !Ed()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, wr)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, wr)), e;
  }
});
function Bd(n = {}) {
  return [Sn.of(n), Ld()];
}
let fl = null;
function Ld() {
  return fl || (fl = ie.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = P.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(Sn)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new Dd({
        regexp: n.specialChars,
        decoration: (e, t, i) => {
          let { doc: s } = t.state, r = ae(e[0], 0);
          if (r == 9) {
            let o = s.lineAt(i), l = t.state.tabSize, a = si(o.text, l, i - o.from);
            return P.replace({
              widget: new Nd((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = P.replace({ widget: new Id(n, r) }));
        },
        boundary: n.replaceTabs ? void 0 : /[^]/
      });
    }
    update(n) {
      let e = n.state.facet(Sn);
      n.startState.facet(Sn) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, {
    decorations: (n) => n.decorations
  }));
}
const Rd = "•";
function Pd(n) {
  return n >= 32 ? Rd : n == 10 ? "␤" : String.fromCharCode(9216 + n);
}
class Id extends ct {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Pd(this.code), i = e.state.phrase("Control character") + " " + (Od[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, t);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = t, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class Nd extends ct {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return !1;
  }
}
function Fd() {
  return Wd;
}
const Hd = /* @__PURE__ */ P.line({ class: "cm-activeLine" }), Wd = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = -1, t = [];
    for (let i of n.state.selection.ranges) {
      let s = n.lineBlockAt(i.head);
      s.from > e && (t.push(Hd.range(s.from)), e = s.from);
    }
    return P.set(t);
  }
}, {
  decorations: (n) => n.decorations
});
class Vd extends ct {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content), typeof this.content == "string" ? e.setAttribute("aria-label", "placeholder " + this.content) : e.setAttribute("aria-hidden", "true"), e;
  }
  coordsAt(e) {
    let t = e.firstChild ? Zt(e.firstChild) : [];
    if (!t.length)
      return null;
    let i = window.getComputedStyle(e.parentNode), s = Zn(t[0], i.direction != "rtl"), r = parseInt(i.lineHeight);
    return s.bottom - s.top > r * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + r } : s;
  }
  ignoreEvent() {
    return !1;
  }
}
function zd(n) {
  return ie.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = n ? P.set([P.widget({ widget: new Vd(n), side: 1 }).range(0)]) : P.none;
    }
    get decorations() {
      return this.view.state.doc.length ? P.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
}
const xr = 2e3;
function _d(n, e, t) {
  let i = Math.min(e.line, t.line), s = Math.max(e.line, t.line), r = [];
  if (e.off > xr || t.off > xr || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && r.push(S.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a), c = Qs(h.text, o, n.tabSize, !0);
      if (c < 0)
        r.push(S.cursor(h.to));
      else {
        let f = Qs(h.text, l, n.tabSize);
        r.push(S.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function qd(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function ul(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), i = n.state.doc.lineAt(t), s = t - i.from, r = s > xr ? -1 : s == i.length ? qd(n, e.clientX) : si(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: r, off: s };
}
function jd(n, e) {
  let t = ul(n, e), i = n.state.selection;
  return t ? {
    update(s) {
      if (s.docChanged) {
        let r = s.changes.mapPos(s.startState.doc.line(t.line).from), o = s.state.doc.lineAt(r);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, i = i.map(s.changes);
      }
    },
    get(s, r, o) {
      let l = ul(n, s);
      if (!l)
        return i;
      let a = _d(n.state, t, l);
      return a.length ? o ? S.create(a.concat(i.ranges)) : S.create(a) : i;
    }
  } : null;
}
function Kd(n) {
  let e = (n == null ? void 0 : n.eventFilter) || ((t) => t.altKey && t.button == 0);
  return E.mouseSelectionStyle.of((t, i) => e(i) ? jd(t, i) : null);
}
const $d = {
  Alt: [18, (n) => !!n.altKey],
  Control: [17, (n) => !!n.ctrlKey],
  Shift: [16, (n) => !!n.shiftKey],
  Meta: [91, (n) => !!n.metaKey]
}, Ud = { style: "cursor: crosshair" };
function Gd(n = {}) {
  let [e, t] = $d[n.key || "Alt"], i = ie.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = !1;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == e || t(s));
      },
      keyup(s) {
        (s.keyCode == e || !t(s)) && this.set(!1);
      },
      mousemove(s) {
        this.set(t(s));
      }
    }
  });
  return [
    i,
    E.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? Ud : null;
    })
  ];
}
const on = "-10000px";
class Sh {
  constructor(e, t, i) {
    this.facet = t, this.createTooltipView = i, this.input = e.state.facet(t), this.tooltips = this.input.filter((s) => s), this.tooltipViews = this.tooltips.map(i);
  }
  update(e, t) {
    var i;
    let s = e.state.facet(this.facet), r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          o[a] = this.createTooltipView(h), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (a.dom.remove(), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function Yd(n) {
  let { win: e } = n;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const As = /* @__PURE__ */ L.define({
  combine: (n) => {
    var e, t, i;
    return {
      position: R.ios ? "absolute" : ((e = n.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = n.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Yd
    };
  }
}), dl = /* @__PURE__ */ new WeakMap(), Ch = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(As);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new Sh(n, Ur, (t) => this.createTooltip(t)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews)
        this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(n, this.above);
    e && this.observeIntersection();
    let t = e || n.geometryChanged, i = n.state.facet(As);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      t = !0;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(n) {
    let e = n.create(this.view);
    if (e.dom.classList.add("cm-tooltip"), n.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let t = document.createElement("div");
      t.className = "cm-tooltip-arrow", e.dom.appendChild(t);
    }
    return e.dom.style.position = this.position, e.dom.style.top = on, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e;
  }
  destroy() {
    var n, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let t of this.manager.tooltipViews)
      t.dom.remove(), (n = t.destroy) === null || n === void 0 || n.call(t);
    this.parent && this.container.remove(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = this.view.dom.getBoundingClientRect(), e = 1, t = 1, i = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { offsetParent: s } = this.manager.tooltipViews[0].dom;
      i = !!(s && s != this.container.ownerDocument.body);
    }
    if (i || this.position == "absolute")
      if (this.parent) {
        let s = this.parent.getBoundingClientRect();
        s.width && s.height && (e = s.width / this.parent.offsetWidth, t = s.height / this.parent.offsetHeight);
      } else
        ({ scaleX: e, scaleY: t } = this.view.viewState);
    return {
      editor: n,
      parent: this.parent ? this.container.getBoundingClientRect() : n,
      pos: this.manager.tooltips.map((s, r) => {
        let o = this.manager.tooltipViews[r];
        return o.getCoords ? o.getCoords(s.pos) : this.view.coordsAtPos(s.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: s }) => s.getBoundingClientRect()),
      space: this.view.state.facet(As).tooltipSpace(this.view),
      scaleX: e,
      scaleY: t,
      makeAbsolute: i
    };
  }
  writeMeasure(n) {
    var e;
    if (n.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { editor: t, space: i, scaleX: s, scaleY: r } = n, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = n.pos[l], u = n.size[l];
      if (!f || f.bottom <= Math.max(t.top, i.top) || f.top >= Math.min(t.bottom, i.bottom) || f.right < Math.max(t.left, i.left) - 0.1 || f.left > Math.min(t.right, i.right) + 0.1) {
        c.style.top = on;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, y = u.right - u.left, g = (e = dl.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top, k = h.offset || Xd, m = this.view.textDirection == X.LTR, b = u.width > i.right - i.left ? m ? i.left : i.right - u.width : m ? Math.min(f.left - (d ? 14 : 0) + k.x, i.right - y) : Math.max(i.left, f.left - y + (d ? 14 : 0) - k.x), w = this.above[l];
      !a.strictSide && (w ? f.top - (u.bottom - u.top) - k.y < i.top : f.bottom + (u.bottom - u.top) + k.y > i.bottom) && w == i.bottom - f.bottom > f.top - i.top && (w = this.above[l] = !w);
      let x = (w ? f.top - i.top : i.bottom - f.bottom) - p;
      if (x < g && h.resize !== !1) {
        if (x < this.view.defaultLineHeight) {
          c.style.top = on;
          continue;
        }
        dl.set(h, g), c.style.height = (g = x) / r + "px";
      } else
        c.style.height && (c.style.height = "");
      let v = w ? f.top - g - p - k.y : f.bottom + p + k.y, C = b + y;
      if (h.overlap !== !0)
        for (let T of o)
          T.left < C && T.right > b && T.top < v + g && T.bottom > v && (v = w ? T.top - g - 2 - p : T.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (v - n.parent.top) / r + "px", c.style.left = (b - n.parent.left) / s + "px") : (c.style.top = v / r + "px", c.style.left = b / s + "px"), d) {
        let T = f.left + (m ? k.x : -k.x) - (b + 14 - 7);
        d.style.left = T / s + "px";
      }
      h.overlap !== !0 && o.push({ left: b, top: v, right: C, bottom: v + g }), c.classList.toggle("cm-tooltip-above", w), c.classList.toggle("cm-tooltip-below", !w), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = on;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), Jd = /* @__PURE__ */ E.baseTheme({
  ".cm-tooltip": {
    zIndex: 100,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), Xd = { x: 0, y: 0 }, Ur = /* @__PURE__ */ L.define({
  enables: [Ch, Jd]
}), Rn = /* @__PURE__ */ L.define();
class Gr {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new Gr(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Sh(e, Rn, (t) => this.createHostedView(t));
  }
  createHostedView(e) {
    let t = e.create(this.view);
    return t.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(t.dom), this.mounted && t.mount && t.mount(this.view), t;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
}
const Zd = /* @__PURE__ */ Ur.compute([Rn], (n) => {
  let e = n.facet(Rn).filter((t) => t);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.filter((t) => t.end != null).map((t) => t.end)),
    create: Gr.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class Qd {
  constructor(e, t, i, s, r) {
    this.view = e, this.source = t, this.field = i, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.nearest(t.target);
    if (!i)
      return;
    let s, r = 1;
    if (i instanceof gt)
      s = i.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null)
        return;
      let l = e.coordsAtPos(s);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == X.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && e.dispatch({ effects: this.setHover.of(a) }));
      }, (a) => We(e.state, a, "hover tooltip"));
    } else
      o && e.dispatch({ effects: this.setHover.of(o) });
  }
  mousemove(e) {
    var t;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let i = this.active;
    if (i && !pl(this.lastMove.target) || this.pending) {
      let { pos: s } = i || this.pending, r = (t = i == null ? void 0 : i.end) !== null && t !== void 0 ? t : s;
      (s == r ? this.view.posAtCoords(this.lastMove) != s : !ep(this.view, s, r, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !pl(e.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function pl(n) {
  for (let e = n; e; e = e.parentNode)
    if (e.nodeType == 1 && e.classList.contains("cm-tooltip"))
      return !0;
  return !1;
}
function ep(n, e, t, i, s, r) {
  let o = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = n.posAtCoords({ x: i, y: s }, !1);
  return a >= e && a <= t;
}
function tp(n, e = {}) {
  let t = N.define(), i = fe.define({
    create() {
      return null;
    },
    update(s, r) {
      if (s && (e.hideOnChange && (r.docChanged || r.selection) || e.hideOn && e.hideOn(r, s)))
        return null;
      if (s && r.docChanged) {
        let o = r.changes.mapPos(s.pos, -1, xe.TrackDel);
        if (o == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), s);
        l.pos = o, s.end != null && (l.end = r.changes.mapPos(s.end)), s = l;
      }
      for (let o of r.effects)
        o.is(t) && (s = o.value), o.is(ip) && (s = null);
      return s;
    },
    provide: (s) => Rn.from(s)
  });
  return [
    i,
    ie.define((s) => new Qd(
      s,
      n,
      i,
      t,
      e.hoverTime || 300
      /* Hover.Time */
    )),
    Zd
  ];
}
function Ah(n, e) {
  let t = n.plugin(Ch);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const ip = /* @__PURE__ */ N.define(), gl = /* @__PURE__ */ L.define({
  combine(n) {
    let e, t;
    for (let i of n)
      e = e || i.topContainer, t = t || i.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function Pi(n, e) {
  let t = n.plugin(Mh), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const Mh = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(Ii), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(gl);
    this.top = new ln(n, !0, e.topContainer), this.bottom = new ln(n, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(gl);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new ln(n.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new ln(n.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(Ii);
    if (t != this.input) {
      let i = t.filter((a) => a), s = [], r = [], o = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(n.view), l.push(c)) : (c = this.panels[h], c.update && c.update(n)), s.push(c), (c.top ? r : o).push(c);
      }
      this.specs = i, this.panels = s, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (n) => E.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class ln {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = ml(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = ml(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function ml(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Ii = /* @__PURE__ */ L.define({
  enables: Mh
});
class at extends Pt {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
at.prototype.elementClass = "";
at.prototype.toDOM = void 0;
at.prototype.mapMode = xe.TrackBefore;
at.prototype.startSide = at.prototype.endSide = -1;
at.prototype.point = !0;
const Cn = /* @__PURE__ */ L.define(), np = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => q.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, Ai = /* @__PURE__ */ L.define();
function sp(n) {
  return [Dh(), Ai.of(Object.assign(Object.assign({}, np), n))];
}
const vr = /* @__PURE__ */ L.define({
  combine: (n) => n.some((e) => e)
});
function Dh(n) {
  let e = [
    rp
  ];
  return n && n.fixed === !1 && e.push(vr.of(!0)), e;
}
const rp = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(Ai).map((e) => new bl(n, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !n.state.facet(vr), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(vr) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && this.dom.remove();
    let t = q.iter(this.view.state.facet(Cn), this.view.viewport.from), i = [], s = this.gutters.map((r) => new op(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == ve.Text && o) {
            kr(t, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == ve.Text) {
        kr(t, i, r.from);
        for (let o of s)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of s)
          o.widget(this.view, r);
    for (let r of s)
      r.finish();
    n && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(n) {
    let e = n.startState.facet(Ai), t = n.state.facet(Ai), i = n.docChanged || n.heightChanged || n.viewportChanged || !q.eq(n.startState.facet(Cn), n.state.facet(Cn), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(n) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new bl(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove();
  }
}, {
  provide: (n) => E.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == X.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
  })
});
function yl(n) {
  return Array.isArray(n) ? n : [n];
}
function kr(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class op {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = q.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new Th(e, o, r, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let s = [];
    kr(this.cursor, s, t.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t);
    i && this.addElement(e, t, [i]);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class bl {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, l, s) && s.preventDefault();
      });
    this.markers = yl(t.markers(e)), t.initialSpacer && (this.spacer = new Th(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = yl(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !q.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Th {
  constructor(e, t, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), lp(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < t.length ? t[r++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), h && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function lp(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].compare(e[t]))
      return !1;
  return !0;
}
const ap = /* @__PURE__ */ L.define(), qt = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let s in t) {
          let r = i[s], o = t[s];
          i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
        }
        return i;
      }
    });
  }
});
class Ms extends at {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Ds(n, e) {
  return n.state.facet(qt).formatNumber(e, n.state);
}
const hp = /* @__PURE__ */ Ai.compute([qt], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(ap);
  },
  lineMarker(e, t, i) {
    return i.some((s) => s.toDOM) ? null : new Ms(Ds(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet(qt) != e.state.facet(qt),
  initialSpacer(e) {
    return new Ms(Ds(e, wl(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = Ds(t.view, wl(t.view.state.doc.lines));
    return i == e.number ? e : new Ms(i);
  },
  domEventHandlers: n.facet(qt).domEventHandlers
}));
function cp(n = {}) {
  return [
    qt.of(n),
    Dh(),
    hp
  ];
}
function wl(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const fp = /* @__PURE__ */ new class extends at {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), up = /* @__PURE__ */ Cn.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    s > t && (t = s, e.push(fp.range(s)));
  }
  return q.of(e);
});
function dp() {
  return up;
}
const pp = 1024;
let gp = 0;
class Ts {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class V {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = gp++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = Fe.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
V.closedBy = new V({ deserialize: (n) => n.split(" ") });
V.openedBy = new V({ deserialize: (n) => n.split(" ") });
V.group = new V({ deserialize: (n) => n.split(" ") });
V.contextHash = new V({ perNode: !0 });
V.lookAhead = new V({ perNode: !0 });
V.mounted = new V({ perNode: !0 });
class Pn {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[V.mounted.id];
  }
}
const mp = /* @__PURE__ */ Object.create(null);
class Fe {
  /**
  @internal
  */
  constructor(e, t, i, s = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = s;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : mp, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new Fe(e.name || "", t, e.id, i);
    if (e.props) {
      for (let r of e.props)
        if (Array.isArray(r) || (r = r(s)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return s;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(V.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let s of i.split(" "))
        t[s] = e[i];
    return (i) => {
      for (let s = i.prop(V.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? i.name : s[r]];
        if (o)
          return o;
      }
    };
  }
}
Fe.none = new Fe(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const an = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap();
var ce;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(ce || (ce = {}));
class me {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, i, s, r) {
    if (this.type = e, this.children = t, this.positions = i, this.length = s, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = Pn.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let s = i.toString();
      s && (t && (t += ","), t += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new Cr(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, i = 0) {
    let s = an.get(this) || this.topNode, r = new Cr(s);
    return r.moveTo(e, t), an.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new Ne(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let i = Ni(an.get(this) || this.topNode, e, t, !1);
    return an.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = Ni(xl.get(this) || this.topNode, e, t, !0);
    return xl.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return wp(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: i, from: s = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & ce.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | ce.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : Xr(Fe.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, s) => new me(this.type, t, i, s, this.propValues), e.makeTree || ((t, i, s) => new me(Fe.none, t, i, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return xp(e);
  }
}
me.empty = new me(Fe.none, [], [], 0);
class Yr {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Yr(this.buffer, this.index);
  }
}
class Ft {
  /**
  Create a tree buffer.
  */
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return Fe.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], s = this.set.types[t], r = s.name;
    if (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), e += 4, i == e)
      return r;
    let o = [];
    for (; e < i; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, i, s, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(Oh(r, s, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, i) {
    let s = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = s[l++], r[a++] = s[l++] - i;
      let h = r[a++] = s[l++] - i;
      r[a++] = s[l++] - e, o = Math.max(o, h);
    }
    return new Ft(r, o, this.set);
  }
}
function Oh(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function Ni(n, e, t, i) {
  for (var s; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let o = !i && n instanceof Ne && n.index < 0 ? null : n.parent;
    if (!o)
      return n;
    n = o;
  }
  let r = i ? 0 : ce.IgnoreOverlays;
  if (i)
    for (let o = n, l = o.parent; l; o = l, l = o.parent)
      o instanceof Ne && o.index < 0 && ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (n = l);
  for (; ; ) {
    let o = n.enter(e, t, r);
    if (!o)
      return n;
    n = o;
  }
}
class Eh {
  cursor(e = 0) {
    return new Cr(this, e);
  }
  getChild(e, t = null, i = null) {
    let s = vl(this, e, t, i);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return vl(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Ni(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Ni(this, e, t, !0);
  }
  matchContext(e) {
    return Sr(this, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to)
        break;
      s.type.isError && s.from == s.to ? (i = t, t = s.prevSibling) : t = s;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Ne extends Eh {
  constructor(e, t, i, s) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, s, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], f = a[e] + o.from;
        if (Oh(s, i, f, f + c.length)) {
          if (c instanceof Ft) {
            if (r & ce.ExcludeBuffers)
              continue;
            let u = c.findChild(0, c.buffer.length, t, i - f, s);
            if (u > -1)
              return new yt(new yp(o, c, e, f), null, u);
          } else if (r & ce.IncludeAnonymous || !c.type.isAnonymous || Jr(c)) {
            let u;
            if (!(r & ce.IgnoreMounts) && (u = Pn.get(c)) && !u.overlay)
              return new Ne(u.tree, f, e, o);
            let d = new Ne(c, f, e, o);
            return r & ce.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s);
          }
        }
      }
      if (r & ce.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    let s;
    if (!(i & ce.IgnoreOverlays) && (s = Pn.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new Ne(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function vl(n, e, t, i) {
  let s = n.cursor(), r = [];
  if (!s.firstChild())
    return r;
  if (t != null) {
    for (; !s.type.is(t); )
      if (!s.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && s.type.is(i))
      return r;
    if (s.type.is(e) && r.push(s.node), !s.nextSibling())
      return i == null ? r : [];
  }
}
function Sr(n, e, t = e.length - 1) {
  for (let i = n.parent; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class yp {
  constructor(e, t, i, s) {
    this.parent = e, this.buffer = t, this.index = i, this.start = s;
  }
}
class yt extends Eh {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, i);
    return r < 0 ? null : new yt(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    if (i & ce.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new yt(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new yt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new yt(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, s = this.index + 4, r = i.buffer[this.index + 3];
    if (r > s) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(s, r, o)), t.push(0);
    }
    return new me(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Bh(n) {
  if (!n.length)
    return null;
  if (n.length == 1)
    return n[0];
  let e = 0, t = n[0];
  for (let r = 1; r < n.length; r++) {
    let o = n[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let i = t instanceof Ne && t.index < 0 ? null : t.parent, s = n.slice();
  return i ? s[e] = i : s.splice(e, 1), new bp(s, t);
}
class bp {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Bh(this.heads);
  }
}
function wp(n, e, t) {
  let i = n.resolveInner(e, t), s = null;
  for (let r = i instanceof Ne ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [i])).push(o.resolve(e, t)), r = o;
    } else {
      let o = Pn.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new Ne(o.tree, o.overlay[0].from + r.from, 0, null);
        (s || (s = [i])).push(Ni(l, e, t, !1));
      }
    }
  return s ? Bh(s) : i;
}
class Cr {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Ne)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: s } = this.buffer;
    return this.type = t || s.set.types[s.buffer[e]], this.from = i + s.buffer[e + 1], this.to = i + s.buffer[e + 2], !0;
  }
  yield(e) {
    return e ? e instanceof Ne ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: s } = this.buffer, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, i = this.mode) {
    return this.buffer ? i & ce.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & ce.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & ce.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s)
        return this.yieldBuf(t.findChild(
          s,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(s);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (s.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = s);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
          let l = i._tree.children[r];
          if (this.mode & ce.IncludeAnonymous || l instanceof Ft || !l.type.isAnonymous || Jr(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traveral. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e:
        for (let s = this.index, r = this.stack.length; r >= 0; ) {
          for (let o = e; o; o = o._parent)
            if (o.index == s) {
              if (s == this.index)
                return o;
              t = o, i = r + 1;
              break e;
            }
          s = this.stack[--r];
        }
    for (let s = i; s < this.stack.length; s++)
      t = new yt(this.buffer, t, this.stack[s]);
    return this.bufferNode = new yt(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let i = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (; s && t && t(this), s = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!i)
          return;
        this.parent(), i--, s = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return Sr(this.node, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0)
        return Sr(this.node, e, s);
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function Jr(n) {
  return n.children.some((e) => e instanceof Ft || !e.type.isAnonymous || Jr(e));
}
function xp(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: s = pp, reused: r = [], minRepeatType: o = i.types.length } = n, l = Array.isArray(t) ? new Yr(t, t.length) : t, a = i.types, h = 0, c = 0;
  function f(w, x, v, C, T) {
    let { id: A, start: B, end: I, size: _ } = l, Z = c;
    for (; _ < 0; )
      if (l.next(), _ == -1) {
        let W = r[A];
        v.push(W), C.push(B - w);
        return;
      } else if (_ == -3) {
        h = A;
        return;
      } else if (_ == -4) {
        c = A;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${_}`);
    let ne = a[A], Q, ee, we = B - w;
    if (I - B <= s && (ee = y(l.pos - x, T))) {
      let W = new Uint16Array(ee.size - ee.skip), F = l.pos - ee.size, M = W.length;
      for (; l.pos > F; )
        M = g(ee.start, W, M);
      Q = new Ft(W, I - ee.start, i), we = ee.start - w;
    } else {
      let W = l.pos - _;
      l.next();
      let F = [], M = [], U = A >= o ? A : -1, K = 0, Se = I;
      for (; l.pos > W; )
        U >= 0 && l.id == U && l.size >= 0 ? (l.end <= Se - s && (d(F, M, B, K, l.end, Se, U, Z), K = F.length, Se = l.end), l.next()) : f(B, W, F, M, U);
      if (U >= 0 && K > 0 && K < F.length && d(F, M, B, K, B, Se, U, Z), F.reverse(), M.reverse(), U > -1 && K > 0) {
        let Ce = u(ne);
        Q = Xr(ne, F, M, 0, F.length, 0, I - B, Ce, Ce);
      } else
        Q = p(ne, F, M, I - B, Z - I);
    }
    v.push(Q), C.push(we);
  }
  function u(w) {
    return (x, v, C) => {
      let T = 0, A = x.length - 1, B, I;
      if (A >= 0 && (B = x[A]) instanceof me) {
        if (!A && B.type == w && B.length == C)
          return B;
        (I = B.prop(V.lookAhead)) && (T = v[A] + B.length + I);
      }
      return p(w, x, v, C, T);
    };
  }
  function d(w, x, v, C, T, A, B, I) {
    let _ = [], Z = [];
    for (; w.length > C; )
      _.push(w.pop()), Z.push(x.pop() + v - T);
    w.push(p(i.types[B], _, Z, A - T, I - A)), x.push(T - v);
  }
  function p(w, x, v, C, T = 0, A) {
    if (h) {
      let B = [V.contextHash, h];
      A = A ? [B].concat(A) : [B];
    }
    if (T > 25) {
      let B = [V.lookAhead, T];
      A = A ? [B].concat(A) : [B];
    }
    return new me(w, x, v, C, A);
  }
  function y(w, x) {
    let v = l.fork(), C = 0, T = 0, A = 0, B = v.end - s, I = { size: 0, start: 0, skip: 0 };
    e:
      for (let _ = v.pos - w; v.pos > _; ) {
        let Z = v.size;
        if (v.id == x && Z >= 0) {
          I.size = C, I.start = T, I.skip = A, A += 4, C += 4, v.next();
          continue;
        }
        let ne = v.pos - Z;
        if (Z < 0 || ne < _ || v.start < B)
          break;
        let Q = v.id >= o ? 4 : 0, ee = v.start;
        for (v.next(); v.pos > ne; ) {
          if (v.size < 0)
            if (v.size == -3)
              Q += 4;
            else
              break e;
          else
            v.id >= o && (Q += 4);
          v.next();
        }
        T = ee, C += Z, A += Q;
      }
    return (x < 0 || C == w) && (I.size = C, I.start = T, I.skip = A), I.size > 4 ? I : void 0;
  }
  function g(w, x, v) {
    let { id: C, start: T, end: A, size: B } = l;
    if (l.next(), B >= 0 && C < o) {
      let I = v;
      if (B > 4) {
        let _ = l.pos - (B - 4);
        for (; l.pos > _; )
          v = g(w, x, v);
      }
      x[--v] = I, x[--v] = A - w, x[--v] = T - w, x[--v] = C;
    } else
      B == -3 ? h = C : B == -4 && (c = C);
    return v;
  }
  let k = [], m = [];
  for (; l.pos > 0; )
    f(n.start || 0, n.bufferStart || 0, k, m, -1);
  let b = (e = n.length) !== null && e !== void 0 ? e : k.length ? m[0] + k[0].length : 0;
  return new me(a[n.topID], k.reverse(), m.reverse(), b);
}
const kl = /* @__PURE__ */ new WeakMap();
function An(n, e) {
  if (!n.isAnonymous || e instanceof Ft || e.type != n)
    return 1;
  let t = kl.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof me)) {
        t = 1;
        break;
      }
      t += An(n, i);
    }
    kl.set(e, t);
  }
  return t;
}
function Xr(n, e, t, i, s, r, o, l, a) {
  let h = 0;
  for (let p = i; p < s; p++)
    h += An(n, e[p]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(p, y, g, k, m) {
    for (let b = g; b < k; ) {
      let w = b, x = y[b], v = An(n, p[b]);
      for (b++; b < k; b++) {
        let C = An(n, p[b]);
        if (v + C >= c)
          break;
        v += C;
      }
      if (b == w + 1) {
        if (v > c) {
          let C = p[w];
          d(C.children, C.positions, 0, C.children.length, y[w] + m);
          continue;
        }
        f.push(p[w]);
      } else {
        let C = y[b - 1] + p[b - 1].length - x;
        f.push(Xr(n, p, y, w, b, x, C, null, a));
      }
      u.push(x + m - r);
    }
  }
  return d(e, t, i, s, 0), (l || a)(f, u, o);
}
class Lt {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, i, s, r = !1, o = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = s, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], i = !1) {
    let s = [new Lt(0, e.length, e, 0, !1, i)];
    for (let r of t)
      r.to > e.length && s.push(r);
    return s;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let s = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= i)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
            u = d >= p ? null : new Lt(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u && s.push(u), o.to > f)
            break;
          o = r < e.length ? e[r++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return s;
  }
}
class vp {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, i) {
    return typeof e == "string" && (e = new kp(e)), i = i ? i.length ? i.map((s) => new Ts(s.from, s.to)) : [new Ts(0, 0)] : [new Ts(0, e.length)], this.createParse(e, t || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, i) {
    let s = this.startParse(e, t, i);
    for (; ; ) {
      let r = s.advance();
      if (r)
        return r;
    }
  }
}
class kp {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new V({ perNode: !0 });
let Sp = 0;
class Ue {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.set = e, this.base = t, this.modified = i, this.id = Sp++;
  }
  /**
  Define a new tag. If `parent` is given, the tag is treated as a
  sub-tag of that parent, and
  [highlighters](#highlight.tagHighlighter) that don't mention
  this tag will try to fall back to the parent tag (or grandparent
  tag, etc).
  */
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let t = new Ue([], null, []);
    if (t.set.push(t), e)
      for (let i of e.set)
        t.set.push(i);
    return t;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier() {
    let e = new In();
    return (t) => t.modified.indexOf(e) > -1 ? t : In.get(t.base || t, t.modified.concat(e).sort((i, s) => i.id - s.id));
  }
}
let Cp = 0;
class In {
  constructor() {
    this.instances = [], this.id = Cp++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && Ap(t, l.modified));
    if (i)
      return i;
    let s = [], r = new Ue(s, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = Mp(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          s.push(In.get(l, a));
    return r;
  }
}
function Ap(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function Mp(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, s = e.length; i < s; i++)
      e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function Dp(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let s of t.split(" "))
      if (s) {
        let r = [], o = 2, l = s;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + s);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == s.length)
            break;
          let d = s[f++];
          if (f == s.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + s);
          l = s.slice(f);
        }
        let a = r.length - 1, h = r[a];
        if (!h)
          throw new RangeError("Invalid path: " + s);
        let c = new Nn(i, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return Lh.add(e);
}
const Lh = new V();
class Nn {
  constructor(e, t, i, s) {
    this.tags = e, this.mode = t, this.context = i, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Nn.empty = new Nn([], 2, null);
function Rh(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of n)
    if (!Array.isArray(r.tag))
      t[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        t[o.id] = r.class;
  let { scope: i, all: s = null } = e || {};
  return {
    style: (r) => {
      let o = s;
      for (let l of r)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
function Tp(n, e) {
  let t = null;
  for (let i of n) {
    let s = i.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function Op(n, e, t, i = 0, s = n.length) {
  let r = new Ep(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(n.cursor(), i, s, "", r.highlighters), r.flush(s);
}
class Ep {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, s, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = s, c = Bp(e) || Nn.empty, f = Tp(r, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(t, l), h), c.opaque)
      return;
    let u = e.tree && e.tree.prop(V.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((g) => !g.scope || g.scope(u.tree.type)), y = e.firstChild();
      for (let g = 0, k = l; ; g++) {
        let m = g < u.overlay.length ? u.overlay[g] : null, b = m ? m.from + l : a, w = Math.max(t, k), x = Math.min(i, b);
        if (w < x && y)
          for (; e.from < x && (this.highlightRange(e, w, x, s, r), this.startSpan(Math.min(x, e.to), h), !(e.to >= b || !e.nextSibling())); )
            ;
        if (!m || b > i)
          break;
        k = m.to + l, k > t && (this.highlightRange(d.cursor(), Math.max(t, m.from + l), Math.min(i, k), "", p), this.startSpan(Math.min(i, k), h));
      }
      y && e.parent();
    } else if (e.firstChild()) {
      u && (s = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, s, r), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Bp(n) {
  let e = n.type.prop(Lh);
  for (; e && e.context && !n.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const D = Ue.define, hn = D(), ft = D(), Sl = D(ft), Cl = D(ft), ut = D(), cn = D(ut), Os = D(ut), $e = D(), Dt = D($e), je = D(), Ke = D(), Ar = D(), ci = D(Ar), fn = D(), O = {
  /**
  A comment.
  */
  comment: hn,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: D(hn),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: D(hn),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: D(hn),
  /**
  Any kind of identifier.
  */
  name: ft,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: D(ft),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Sl,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: D(Sl),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Cl,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: D(Cl),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: D(ft),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: D(ft),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: D(ft),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: D(ft),
  /**
  A literal value.
  */
  literal: ut,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: cn,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: D(cn),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: D(cn),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: D(cn),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Os,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: D(Os),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: D(Os),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: D(ut),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: D(ut),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: D(ut),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: D(ut),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: D(ut),
  /**
  A language keyword.
  */
  keyword: je,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: D(je),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: D(je),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: D(je),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: D(je),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: D(je),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: D(je),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: D(je),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: D(je),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: D(je),
  /**
  An operator.
  */
  operator: Ke,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: D(Ke),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: D(Ke),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: D(Ke),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: D(Ke),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: D(Ke),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: D(Ke),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: D(Ke),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: D(Ke),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: D(Ke),
  /**
  Program or markup punctuation.
  */
  punctuation: Ar,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: D(Ar),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: ci,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: D(ci),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: D(ci),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: D(ci),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: D(ci),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: $e,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: Dt,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: D(Dt),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: D(Dt),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: D(Dt),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: D(Dt),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: D(Dt),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: D(Dt),
  /**
  A prose separator (such as a horizontal rule).
  */
  contentSeparator: D($e),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: D($e),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: D($e),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: D($e),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: D($e),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: D($e),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: D($e),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: D($e),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: D(),
  /**
  Deleted text.
  */
  deleted: D(),
  /**
  Changed text.
  */
  changed: D(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: D(),
  /**
  Metadata or meta-instruction.
  */
  meta: fn,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: D(fn),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: D(fn),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: D(fn),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Ue.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Ue.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Ue.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Ue.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Ue.defineModifier(),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Ue.defineModifier()
};
Rh([
  { tag: O.link, class: "tok-link" },
  { tag: O.heading, class: "tok-heading" },
  { tag: O.emphasis, class: "tok-emphasis" },
  { tag: O.strong, class: "tok-strong" },
  { tag: O.keyword, class: "tok-keyword" },
  { tag: O.atom, class: "tok-atom" },
  { tag: O.bool, class: "tok-bool" },
  { tag: O.url, class: "tok-url" },
  { tag: O.labelName, class: "tok-labelName" },
  { tag: O.inserted, class: "tok-inserted" },
  { tag: O.deleted, class: "tok-deleted" },
  { tag: O.literal, class: "tok-literal" },
  { tag: O.string, class: "tok-string" },
  { tag: O.number, class: "tok-number" },
  { tag: [O.regexp, O.escape, O.special(O.string)], class: "tok-string2" },
  { tag: O.variableName, class: "tok-variableName" },
  { tag: O.local(O.variableName), class: "tok-variableName tok-local" },
  { tag: O.definition(O.variableName), class: "tok-variableName tok-definition" },
  { tag: O.special(O.variableName), class: "tok-variableName2" },
  { tag: O.definition(O.propertyName), class: "tok-propertyName tok-definition" },
  { tag: O.typeName, class: "tok-typeName" },
  { tag: O.namespace, class: "tok-namespace" },
  { tag: O.className, class: "tok-className" },
  { tag: O.macroName, class: "tok-macroName" },
  { tag: O.propertyName, class: "tok-propertyName" },
  { tag: O.operator, class: "tok-operator" },
  { tag: O.comment, class: "tok-comment" },
  { tag: O.meta, class: "tok-meta" },
  { tag: O.invalid, class: "tok-invalid" },
  { tag: O.punctuation, class: "tok-punctuation" }
]);
var Es;
const xi = /* @__PURE__ */ new V(), Lp = /* @__PURE__ */ new V();
class Je {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], s = "") {
    this.data = e, this.name = s, H.prototype.hasOwnProperty("tree") || Object.defineProperty(H.prototype, "tree", { get() {
      return ye(this);
    } }), this.parser = t, this.extension = [
      At.of(this),
      H.languageData.of((r, o, l) => {
        let a = Al(r, o, l), h = a.type.prop(xi);
        if (!h)
          return [];
        let c = r.facet(h), f = a.type.prop(Lp);
        if (f) {
          let u = a.resolve(o - a.from, l);
          for (let d of f)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(c);
            }
        }
        return c;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, i = -1) {
    return Al(e, t, i).type.prop(xi) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(At);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], s = (r, o) => {
      if (r.prop(xi) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(V.mounted);
      if (l) {
        if (l.tree.prop(xi) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (s(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof me && s(h, r.positions[a] + o);
      }
    };
    return s(ye(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Je.setState = /* @__PURE__ */ N.define();
function Al(n, e, t) {
  let i = n.facet(At), s = ye(n).topNode;
  if (!i || i.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, ce.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
function ye(n) {
  let e = n.field(Je.state, !1);
  return e ? e.tree : me.empty;
}
class Rp {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let fi = null;
class Fn {
  constructor(e, t, i = [], s, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Fn(e, t, [], me.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Rp(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != me.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Lt.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Lt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = fi;
    fi = this;
    try {
      return e();
    } finally {
      fi = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Ml(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = Lt.applyChanges(i, a), s = me.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new Fn(this.parser, t, i, s, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: r } = this.skipped[i];
      s < e.to && r > e.from && (this.fragments = Ml(this.fragments, s, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends vp {
      createParse(t, i, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = fi;
            if (a) {
              for (let h of s)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new me(Fe.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return fi;
  }
}
function Ml(n, e, t) {
  return Lt.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class ei {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new ei(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = Fn.create(e.facet(At).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new ei(i);
  }
}
Je.state = /* @__PURE__ */ fe.define({
  create: ei.init,
  update(n, e) {
    for (let t of e.effects)
      if (t.is(Je.setState))
        return t.value;
    return e.startState.facet(At) != e.state.facet(At) ? ei.init(e.state) : n.apply(e);
  }
});
let Ph = (n) => {
  let e = setTimeout(
    () => n(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Ph = (n) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(n, {
        timeout: 500 - 100
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const Bs = typeof navigator < "u" && (!((Es = navigator.scheduling) === null || Es === void 0) && Es.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Pp = /* @__PURE__ */ ie.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Je.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Je.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Ph(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, r = i.field(Je.state);
    if (r.tree == r.context.tree && r.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Bs ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && i.doc.length > s + 1e3, a = r.context.work(() => Bs && Bs() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Je.setState.of(new ei(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => We(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), At = /* @__PURE__ */ L.define({
  combine(n) {
    return n.length ? n[0] : null;
  },
  enables: (n) => [
    Je.state,
    Pp,
    E.contentAttributes.compute([n], (e) => {
      let t = e.facet(n);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
}), Ip = /* @__PURE__ */ L.define(), is = /* @__PURE__ */ L.define({
  combine: (n) => {
    if (!n.length)
      return "  ";
    let e = n[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
    return e;
  }
});
function Hn(n) {
  let e = n.facet(is);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Fi(n, e) {
  let t = "", i = n.tabSize, s = n.facet(is)[0];
  if (s == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    s = " ";
  }
  for (let r = 0; r < e; r++)
    t += s;
  return t;
}
function Zr(n, e) {
  n instanceof H && (n = new ns(n));
  for (let i of n.state.facet(Ip)) {
    let s = i(n, e);
    if (s !== void 0)
      return s;
  }
  let t = ye(n.state);
  return t.length >= e ? Fp(n, t, e) : null;
}
class ns {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Hn(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= i.from && s <= i.to ? r && s == e ? { text: "", from: e } : (t < 0 ? s < e : s <= e) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: s } = this.lineAt(e, t);
    return i.slice(e - s, Math.min(i.length, e + 100 - s));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), r = this.countColumn(i, e - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return si(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Np = /* @__PURE__ */ new V();
function Fp(n, e, t) {
  let i = e.resolveStack(t), s = i.node.enterUnfinishedNodesBefore(t);
  if (s != i.node) {
    let r = [];
    for (let o = s; o != i.node; o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return Ih(i, n, t);
}
function Ih(n, e, t) {
  for (let i = n; i; i = i.next) {
    let s = Wp(i.node);
    if (s)
      return s(Qr.create(e, t, i));
  }
  return 0;
}
function Hp(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Wp(n) {
  let e = n.type.prop(Np);
  if (e)
    return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(V.closedBy))) {
    let s = n.lastChild, r = s && i.indexOf(s.name) > -1;
    return (o) => qp(o, !0, 1, void 0, r && !Hp(o) ? s.from : void 0);
  }
  return n.parent == null ? Vp : null;
}
function Vp() {
  return 0;
}
class Qr extends ns {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Qr(e, t, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (zp(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return Ih(this.context.next, this.base, this.pos);
  }
}
function zp(n, e) {
  for (let t = e; t; t = t.parent)
    if (n == t)
      return !0;
  return !1;
}
function _p(n) {
  let e = n.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let s = n.options.simulateBreak, r = n.state.doc.lineAt(t.from), o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped)
      return a.from < o ? t : null;
    l = a.to;
  }
}
function qp(n, e, t, i, s) {
  let r = n.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || s == n.pos + o, a = e ? _p(n) : null;
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const jp = 200;
function Kp() {
  return H.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length)
      return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, s = t.lineAt(i);
    if (i > s.from + jp)
      return n;
    let r = t.sliceString(s.from, i);
    if (!e.some((h) => h.test(r)))
      return n;
    let { state: o } = n, l = -1, a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l)
        continue;
      l = c.from;
      let f = Zr(o, c.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(c.text)[0], d = Fi(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n;
  });
}
const $p = /* @__PURE__ */ L.define(), Up = /* @__PURE__ */ new V();
function Gp(n, e, t) {
  let i = ye(n);
  if (i.length < t)
    return null;
  let s = i.resolveStack(t, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t)
      continue;
    if (r && l.from < e)
      break;
    let a = l.type.prop(Up);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !Yp(l))) {
      let h = a(l, n);
      h && h.from <= t && h.from >= e && h.to > t && (r = h);
    }
  }
  return r;
}
function Yp(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Wn(n, e, t) {
  for (let i of n.facet($p)) {
    let s = i(n, e, t);
    if (s)
      return s;
  }
  return Gp(n, e, t);
}
function Nh(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const ss = /* @__PURE__ */ N.define({ map: Nh }), Ki = /* @__PURE__ */ N.define({ map: Nh });
function Fh(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const Nt = /* @__PURE__ */ fe.define({
  create() {
    return P.none;
  },
  update(n, e) {
    n = n.map(e.changes);
    for (let t of e.effects)
      if (t.is(ss) && !Jp(n, t.value.from, t.value.to)) {
        let { preparePlaceholder: i } = e.state.facet(eo), s = i ? P.replace({ widget: new ng(i(e.state, t.value)) }) : Dl;
        n = n.update({ add: [s.range(t.value.from, t.value.to)] });
      } else
        t.is(Ki) && (n = n.update({
          filter: (i, s) => t.value.from != i || t.value.to != s,
          filterFrom: t.value.from,
          filterTo: t.value.to
        }));
    if (e.selection) {
      let t = !1, { head: i } = e.selection.main;
      n.between(i, i, (s, r) => {
        s < i && r > i && (t = !0);
      }), t && (n = n.update({
        filterFrom: i,
        filterTo: i,
        filter: (s, r) => r <= i || s >= i
      }));
    }
    return n;
  },
  provide: (n) => E.decorations.from(n),
  toJSON(n, e) {
    let t = [];
    return n.between(0, e.doc.length, (i, s) => {
      t.push(i, s);
    }), t;
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < n.length; ) {
      let i = n[t++], s = n[t++];
      if (typeof i != "number" || typeof s != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(Dl.range(i, s));
    }
    return P.set(e, !0);
  }
});
function Vn(n, e, t) {
  var i;
  let s = null;
  return (i = n.field(Nt, !1)) === null || i === void 0 || i.between(e, t, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function Jp(n, e, t) {
  let i = !1;
  return n.between(e, e, (s, r) => {
    s == e && r == t && (i = !0);
  }), i;
}
function Hh(n, e) {
  return n.field(Nt, !1) ? e : e.concat(N.appendConfig.of(Vh()));
}
const Xp = (n) => {
  for (let e of Fh(n)) {
    let t = Wn(n.state, e.from, e.to);
    if (t)
      return n.dispatch({ effects: Hh(n.state, [ss.of(t), Wh(n, t)]) }), !0;
  }
  return !1;
}, Zp = (n) => {
  if (!n.state.field(Nt, !1))
    return !1;
  let e = [];
  for (let t of Fh(n)) {
    let i = Vn(n.state, t.from, t.to);
    i && e.push(Ki.of(i), Wh(n, i, !1));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function Wh(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number, s = n.state.doc.lineAt(e.to).number;
  return E.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
}
const Qp = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let s = n.lineBlockAt(i), r = Wn(e, s.from, s.to);
    r && t.push(ss.of(r)), i = (r ? n.lineBlockAt(r.to) : s).to + 1;
  }
  return t.length && n.dispatch({ effects: Hh(n.state, t) }), !!t.length;
}, eg = (n) => {
  let e = n.state.field(Nt, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, n.state.doc.length, (i, s) => {
    t.push(Ki.of({ from: i, to: s }));
  }), n.dispatch({ effects: t }), !0;
}, tg = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Xp },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Zp },
  { key: "Ctrl-Alt-[", run: Qp },
  { key: "Ctrl-Alt-]", run: eg }
], ig = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, eo = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, ig);
  }
});
function Vh(n) {
  let e = [Nt, og];
  return n && e.push(eo.of(n)), e;
}
function zh(n, e) {
  let { state: t } = n, i = t.facet(eo), s = (o) => {
    let l = n.lineBlockAt(n.posAtDOM(o.target)), a = Vn(n.state, l.from, l.to);
    a && n.dispatch({ effects: Ki.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(n, s, e);
  let r = document.createElement("span");
  return r.textContent = i.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const Dl = /* @__PURE__ */ P.replace({ widget: /* @__PURE__ */ new class extends ct {
  toDOM(n) {
    return zh(n, null);
  }
}() });
class ng extends ct {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return zh(e, this.value);
  }
}
const sg = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Ls extends at {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function rg(n = {}) {
  let e = Object.assign(Object.assign({}, sg), n), t = new Ls(e, !0), i = new Ls(e, !1), s = ie.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(At) != o.state.facet(At) || o.startState.field(Nt, !1) != o.state.field(Nt, !1) || ye(o.startState) != ye(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new vt();
      for (let a of o.viewportLineBlocks) {
        let h = Vn(o.state, a.from, a.to) ? i : Wn(o.state, a.from, a.to) ? t : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = e;
  return [
    s,
    sp({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || q.empty;
      },
      initialSpacer() {
        return new Ls(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
        if (r.click && r.click(o, l, a))
          return !0;
        let h = Vn(o.state, l.from, l.to);
        if (h)
          return o.dispatch({ effects: Ki.of(h) }), !0;
        let c = Wn(o.state, l.from, l.to);
        return c ? (o.dispatch({ effects: ss.of(c) }), !0) : !1;
      } })
    }),
    Vh()
  ];
}
const og = /* @__PURE__ */ E.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class rs {
  constructor(e, t) {
    this.specs = e;
    let i;
    function s(l) {
      let a = kt.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Je ? (l) => l.prop(xi) == o.data : o ? (l) => l == o : void 0, this.style = Rh(e.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = i ? new kt(i) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new rs(e, t || {});
  }
}
const Mr = /* @__PURE__ */ L.define(), _h = /* @__PURE__ */ L.define({
  combine(n) {
    return n.length ? [n[0]] : null;
  }
});
function Rs(n) {
  let e = n.facet(Mr);
  return e.length ? e : n.facet(_h);
}
function lg(n, e) {
  let t = [hg], i;
  return n instanceof rs && (n.module && t.push(E.styleModule.of(n.module)), i = n.themeType), e != null && e.fallback ? t.push(_h.of(n)) : i ? t.push(Mr.computeN([E.darkTheme], (s) => s.facet(E.darkTheme) == (i == "dark") ? [n] : [])) : t.push(Mr.of(n)), t;
}
class ag {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = ye(e.state), this.decorations = this.buildDeco(e, Rs(e.state));
  }
  update(e) {
    let t = ye(e.state), i = Rs(e.state), s = i != Rs(e.startState);
    t.length < e.view.viewport.to && !s && t.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, i));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return P.none;
    let i = new vt();
    for (let { from: s, to: r } of e.visibleRanges)
      Op(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = P.mark({ class: a })));
      }, s, r);
    return i.finish();
  }
}
const hg = /* @__PURE__ */ ni.high(/* @__PURE__ */ ie.fromClass(ag, {
  decorations: (n) => n.decorations
})), cg = /* @__PURE__ */ rs.define([
  {
    tag: O.meta,
    color: "#404740"
  },
  {
    tag: O.link,
    textDecoration: "underline"
  },
  {
    tag: O.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: O.emphasis,
    fontStyle: "italic"
  },
  {
    tag: O.strong,
    fontWeight: "bold"
  },
  {
    tag: O.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: O.keyword,
    color: "#708"
  },
  {
    tag: [O.atom, O.bool, O.url, O.contentSeparator, O.labelName],
    color: "#219"
  },
  {
    tag: [O.literal, O.inserted],
    color: "#164"
  },
  {
    tag: [O.string, O.deleted],
    color: "#a11"
  },
  {
    tag: [O.regexp, O.escape, /* @__PURE__ */ O.special(O.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ O.definition(O.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ O.local(O.variableName),
    color: "#30a"
  },
  {
    tag: [O.typeName, O.namespace],
    color: "#085"
  },
  {
    tag: O.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ O.special(O.variableName), O.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ O.definition(O.propertyName),
    color: "#00c"
  },
  {
    tag: O.comment,
    color: "#940"
  },
  {
    tag: O.invalid,
    color: "#f00"
  }
]), fg = /* @__PURE__ */ E.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), qh = 1e4, jh = "()[]{}", Kh = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, {
      afterCursor: !0,
      brackets: jh,
      maxScanDistance: qh,
      renderMatch: pg
    });
  }
}), ug = /* @__PURE__ */ P.mark({ class: "cm-matchingBracket" }), dg = /* @__PURE__ */ P.mark({ class: "cm-nonmatchingBracket" });
function pg(n) {
  let e = [], t = n.matched ? ug : dg;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const gg = /* @__PURE__ */ fe.define({
  create() {
    return P.none;
  },
  update(n, e) {
    if (!e.docChanged && !e.selection)
      return n;
    let t = [], i = e.state.facet(Kh);
    for (let s of e.state.selection.ranges) {
      if (!s.empty)
        continue;
      let r = Xe(e.state, s.head, -1, i) || s.head > 0 && Xe(e.state, s.head - 1, 1, i) || i.afterCursor && (Xe(e.state, s.head, 1, i) || s.head < e.state.doc.length && Xe(e.state, s.head + 1, -1, i));
      r && (t = t.concat(i.renderMatch(r, e.state)));
    }
    return P.set(t, !0);
  },
  provide: (n) => E.decorations.from(n)
}), mg = [
  gg,
  fg
];
function yg(n = {}) {
  return [Kh.of(n), mg];
}
const bg = /* @__PURE__ */ new V();
function Dr(n, e, t) {
  let i = n.prop(e < 0 ? V.openedBy : V.closedBy);
  if (i)
    return i;
  if (n.name.length == 1) {
    let s = t.indexOf(n.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [t[s + e]];
  }
  return null;
}
function Tr(n) {
  let e = n.type.prop(bg);
  return e ? e(n.node) : n;
}
function Xe(n, e, t, i = {}) {
  let s = i.maxScanDistance || qh, r = i.brackets || jh, o = ye(n), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Dr(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Tr(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return wg(n, e, t, a, c, h, r);
    }
  }
  return xg(n, e, t, o, l.type, s, r);
}
function wg(n, e, t, i, s, r, o) {
  let l = i.parent, a = { from: s.from, to: s.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Tr(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (Dr(c.type, t, o))
          h++;
        else if (Dr(c.type, -t, o)) {
          if (h == 0) {
            let f = Tr(c);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function xg(n, e, t, i, s, r, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let y = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; y != g; y += t) {
      let k = o.indexOf(d[y]);
      if (!(k < 0 || i.resolveInner(p + y, 1).type != s))
        if (k % 2 == 0 == t > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + y, to: p + y + 1 }, matched: k >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const vg = /* @__PURE__ */ Object.create(null), Tl = [Fe.none], Ol = [], kg = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  kg[n] = /* @__PURE__ */ Sg(vg, e);
function Ps(n, e) {
  Ol.indexOf(n) > -1 || (Ol.push(n), console.warn(e));
}
function Sg(n, e) {
  let t = null;
  for (let r of e.split(".")) {
    let o = n[r] || O[r];
    o ? typeof o == "function" ? t ? t = o(t) : Ps(r, `Modifier ${r} used at start of tag`) : t ? Ps(r, `Tag ${r} used as modifier`) : t = o : Ps(r, `Unknown highlighting tag ${r}`);
  }
  if (!t)
    return 0;
  let i = e.replace(/ /g, "_"), s = Fe.define({
    id: Tl.length,
    name: i,
    props: [Dp({ [i]: t })]
  });
  return Tl.push(s), s.id;
}
const Cg = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = io(n.state, t.from);
  return i.line ? Ag(n) : i.block ? Dg(n) : !1;
};
function to(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let s = n(e, t);
    return s ? (i(t.update(s)), !0) : !1;
  };
}
const Ag = /* @__PURE__ */ to(
  Eg,
  0
  /* CommentOption.Toggle */
), Mg = /* @__PURE__ */ to(
  $h,
  0
  /* CommentOption.Toggle */
), Dg = /* @__PURE__ */ to(
  (n, e) => $h(n, e, Og(e)),
  0
  /* CommentOption.Toggle */
);
function io(n, e) {
  let t = n.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const ui = 50;
function Tg(n, { open: e, close: t }, i, s) {
  let r = n.sliceDoc(i - ui, i), o = n.sliceDoc(s, s + ui), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let c, f;
  s - i <= 2 * ui ? c = f = n.sliceDoc(i, s) : (c = n.sliceDoc(i, i + ui), f = n.sliceDoc(s - ui, s));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t ? {
    open: {
      pos: i + u + e.length,
      margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0
    },
    close: {
      pos: s - d - t.length,
      margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function Og(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), s = t.to <= i.to ? i : n.doc.lineAt(t.to), r = e.length - 1;
    r >= 0 && e[r].to > i.from ? e[r].to = s.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return e;
}
function $h(n, e, t = e.selection.ranges) {
  let i = t.map((r) => io(e, r.from).block);
  if (!i.every((r) => r))
    return null;
  let s = t.map((r, o) => Tg(e, i[o], r.from, r.to));
  if (n != 2 && !s.every((r) => r))
    return { changes: e.changes(t.map((r, o) => s[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (n != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if (l = s[o]) {
        let a = i[o], { open: h, close: c } = l;
        r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function Eg(n, e, t = e.selection.ranges) {
  let i = [], s = -1;
  for (let { from: r, to: o } of t) {
    let l = i.length, a = 1e9, h = io(e, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = e.doc.lineAt(c);
        if (f.from > s && (r == o || o > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u), i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: !1 });
        }
        c = f.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < i.length; c++)
          i[c].indent < i[c].line.text.length && (i[c].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (n != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (n != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const Or = /* @__PURE__ */ ht.define(), Bg = /* @__PURE__ */ ht.define(), Lg = /* @__PURE__ */ L.define(), Uh = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (i, s) => e(i, s) || t(i, s)
    });
  }
});
function Rg(n) {
  let e = 0;
  return n.iterChangedRanges((t, i) => e = i), e;
}
const Gh = /* @__PURE__ */ fe.define({
  create() {
    return Ze.empty;
  },
  update(n, e) {
    let t = e.state.facet(Uh), i = e.annotation(Or);
    if (i) {
      let a = e.docChanged ? S.single(Rg(e.changes)) : void 0, h = Me.fromTransaction(e, a), c = i.side, f = c == 0 ? n.undone : n.done;
      return h ? f = zn(f, f.length, t.minDepth, h) : f = Xh(f, e.startState.selection), new Ze(c == 0 ? i.rest : f, c == 0 ? f : i.rest);
    }
    let s = e.annotation(Bg);
    if ((s == "full" || s == "before") && (n = n.isolate()), e.annotation(oe.addToHistory) === !1)
      return e.changes.empty ? n : n.addMapping(e.changes.desc);
    let r = Me.fromTransaction(e), o = e.annotation(oe.time), l = e.annotation(oe.userEvent);
    return r ? n = n.addChanges(r, o, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (s == "full" || s == "after") && (n = n.isolate()), n;
  },
  toJSON(n) {
    return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
  },
  fromJSON(n) {
    return new Ze(n.done.map(Me.fromJSON), n.undone.map(Me.fromJSON));
  }
});
function Pg(n = {}) {
  return [
    Gh,
    Uh.of(n),
    E.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Yh : e.inputType == "historyRedo" ? Er : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
function os(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let s = t.field(Gh, !1);
    if (!s)
      return !1;
    let r = s.pop(n, t, e);
    return r ? (i(r), !0) : !1;
  };
}
const Yh = /* @__PURE__ */ os(0, !1), Er = /* @__PURE__ */ os(1, !1), Ig = /* @__PURE__ */ os(0, !0), Ng = /* @__PURE__ */ os(1, !0);
class Me {
  constructor(e, t, i, s, r) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new Me(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
    };
  }
  static fromJSON(e) {
    return new Me(e.changes && re.fromJSON(e.changes), [], e.mapped && Qe.fromJSON(e.mapped), e.startSelection && S.fromJSON(e.startSelection), e.selectionsAfter.map(S.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let i = Pe;
    for (let s of e.startState.facet(Lg)) {
      let r = s(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty ? null : new Me(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Pe);
  }
  static selection(e) {
    return new Me(void 0, Pe, void 0, void 0, e);
  }
}
function zn(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, r = n.slice(s, e);
  return r.push(i), r;
}
function Fg(n, e) {
  let t = [], i = !1;
  return n.iterChangedRanges((s, r) => t.push(s, r)), e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && o <= c && (i = !0);
    }
  }), i;
}
function Hg(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Jh(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const Pe = [], Wg = 200;
function Xh(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Wg));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), zn(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [Me.selection([e])];
}
function Vg(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Is(n, e) {
  if (!n.length)
    return n;
  let t = n.length, i = Pe;
  for (; t; ) {
    let s = zg(n[t - 1], e, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = n.slice(0, t);
      return r[t - 1] = s, r;
    } else
      e = s.mapped, t--, i = s.selectionsAfter;
  }
  return i.length ? [Me.selection(i)] : Pe;
}
function zg(n, e, t) {
  let i = Jh(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : Pe, t);
  if (!n.changes)
    return Me.selection(i);
  let s = n.changes.map(e), r = e.mapDesc(n.changes, !0), o = n.mapped ? n.mapped.composeDesc(r) : r;
  return new Me(s, N.mapEffects(n.effects, e), o, n.startSelection.map(r), i);
}
const _g = /^(input\.type|delete)($|\.)/;
class Ze {
  constructor(e, t, i = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Ze(this.done, this.undone) : this;
  }
  addChanges(e, t, i, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || _g.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, Fg(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = zn(o, o.length - 1, s.minDepth, new Me(e.changes.compose(l.changes), Jh(e.effects, l.effects), l.mapped, l.startSelection, Pe)) : o = zn(o, o.length, s.minDepth, e), new Ze(o, Pe, t, i);
  }
  addSelection(e, t, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Pe;
    return r.length > 0 && t - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Hg(r[r.length - 1], e) ? this : new Ze(Xh(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new Ze(Is(this.done, e), Is(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1];
    if (i && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Or.of({ side: e, rest: Vg(s) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let o = s.length == 1 ? Pe : s.slice(0, s.length - 1);
      return r.mapped && (o = Is(o, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: Or.of({ side: e, rest: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Ze.empty = /* @__PURE__ */ new Ze(Pe, Pe);
const qg = [
  { key: "Mod-z", run: Yh, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Er, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Er, preventDefault: !0 },
  { key: "Mod-u", run: Ig, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Ng, preventDefault: !0 }
];
function ri(n, e) {
  return S.create(n.ranges.map(e), n.mainIndex);
}
function it(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function ze({ state: n, dispatch: e }, t) {
  let i = ri(n.selection, t);
  return i.eq(n.selection) ? !1 : (e(it(n, i)), !0);
}
function ls(n, e) {
  return S.cursor(e ? n.to : n.from);
}
function Zh(n, e) {
  return ze(n, (t) => t.empty ? n.moveByChar(t, e) : ls(t, e));
}
function be(n) {
  return n.textDirectionAt(n.state.selection.main.head) == X.LTR;
}
const Qh = (n) => Zh(n, !be(n)), ec = (n) => Zh(n, be(n));
function tc(n, e) {
  return ze(n, (t) => t.empty ? n.moveByGroup(t, e) : ls(t, e));
}
const jg = (n) => tc(n, !be(n)), Kg = (n) => tc(n, be(n));
function $g(n, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function as(n, e, t) {
  let i = ye(n).resolveInner(e.head), s = t ? V.closedBy : V.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    $g(n, h, s) ? i = h : a = t ? h.to : h.from;
  }
  let r = i.type.prop(s), o, l;
  return r && (o = t ? Xe(n, i.from, 1) : Xe(n, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, S.cursor(l, t ? -1 : 1);
}
const Ug = (n) => ze(n, (e) => as(n.state, e, !be(n))), Gg = (n) => ze(n, (e) => as(n.state, e, be(n)));
function ic(n, e) {
  return ze(n, (t) => {
    if (!t.empty)
      return ls(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const nc = (n) => ic(n, !1), sc = (n) => ic(n, !0);
function rc(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, s;
  if (e) {
    for (let r of n.state.facet(E.scrollMargins)) {
      let o = r(n);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    s = n.scrollDOM.clientHeight - t - i;
  } else
    s = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(n.defaultLineHeight, s - 5)
  };
}
function oc(n, e) {
  let t = rc(n), { state: i } = n, s = ri(i.selection, (o) => o.empty ? n.moveVertically(o, e, t.height) : ls(o, e));
  if (s.eq(i.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (r = E.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(it(i, s), { effects: r }), !0;
}
const El = (n) => oc(n, !1), Br = (n) => oc(n, !0);
function Mt(n, e, t) {
  let i = n.lineBlockAt(e.head), s = n.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? i.to : i.from) && (s = n.moveToLineBoundary(e, t, !1)), !t && s.head == i.from && i.length) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (s = S.cursor(i.from + r));
  }
  return s;
}
const Yg = (n) => ze(n, (e) => Mt(n, e, !0)), Jg = (n) => ze(n, (e) => Mt(n, e, !1)), Xg = (n) => ze(n, (e) => Mt(n, e, !be(n))), Zg = (n) => ze(n, (e) => Mt(n, e, be(n))), Qg = (n) => ze(n, (e) => S.cursor(n.lineBlockAt(e.head).from, 1)), em = (n) => ze(n, (e) => S.cursor(n.lineBlockAt(e.head).to, -1));
function tm(n, e, t) {
  let i = !1, s = ri(n.selection, (r) => {
    let o = Xe(n, r.head, -1) || Xe(n, r.head, 1) || r.head > 0 && Xe(n, r.head - 1, 1) || r.head < n.doc.length && Xe(n, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return t ? S.range(r.anchor, l) : S.cursor(l);
  });
  return i ? (e(it(n, s)), !0) : !1;
}
const im = ({ state: n, dispatch: e }) => tm(n, e, !1);
function He(n, e) {
  let t = ri(n.state.selection, (i) => {
    let s = e(i);
    return S.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? !1 : (n.dispatch(it(n.state, t)), !0);
}
function lc(n, e) {
  return He(n, (t) => n.moveByChar(t, e));
}
const ac = (n) => lc(n, !be(n)), hc = (n) => lc(n, be(n));
function cc(n, e) {
  return He(n, (t) => n.moveByGroup(t, e));
}
const nm = (n) => cc(n, !be(n)), sm = (n) => cc(n, be(n)), rm = (n) => He(n, (e) => as(n.state, e, !be(n))), om = (n) => He(n, (e) => as(n.state, e, be(n)));
function fc(n, e) {
  return He(n, (t) => n.moveVertically(t, e));
}
const uc = (n) => fc(n, !1), dc = (n) => fc(n, !0);
function pc(n, e) {
  return He(n, (t) => n.moveVertically(t, e, rc(n).height));
}
const Bl = (n) => pc(n, !1), Ll = (n) => pc(n, !0), lm = (n) => He(n, (e) => Mt(n, e, !0)), am = (n) => He(n, (e) => Mt(n, e, !1)), hm = (n) => He(n, (e) => Mt(n, e, !be(n))), cm = (n) => He(n, (e) => Mt(n, e, be(n))), fm = (n) => He(n, (e) => S.cursor(n.lineBlockAt(e.head).from)), um = (n) => He(n, (e) => S.cursor(n.lineBlockAt(e.head).to)), Rl = ({ state: n, dispatch: e }) => (e(it(n, { anchor: 0 })), !0), Pl = ({ state: n, dispatch: e }) => (e(it(n, { anchor: n.doc.length })), !0), Il = ({ state: n, dispatch: e }) => (e(it(n, { anchor: n.selection.main.anchor, head: 0 })), !0), Nl = ({ state: n, dispatch: e }) => (e(it(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0), dm = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), !0), pm = ({ state: n, dispatch: e }) => {
  let t = hs(n).map(({ from: i, to: s }) => S.range(i, Math.min(s + 1, n.doc.length)));
  return e(n.update({ selection: S.create(t), userEvent: "select" })), !0;
}, gm = ({ state: n, dispatch: e }) => {
  let t = ri(n.selection, (i) => {
    var s;
    let r = ye(n).resolveStack(i.from, 1);
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && (!((s = l.parent) === null || s === void 0) && s.parent))
        return S.range(l.to, l.from);
    }
    return i;
  });
  return e(it(n, t)), !0;
}, mm = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = S.create([t.main]) : t.main.empty || (i = S.create([S.cursor(t.main.head)])), i ? (e(it(n, i)), !0) : !1;
};
function $i(n, e) {
  if (n.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = n, s = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = un(n, a, !1)) : a > o && (t = "delete.forward", a = un(n, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = un(n, o, !1), l = un(n, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: S.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (n.dispatch(i.update(s, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? E.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function un(n, e, t) {
  if (n instanceof E)
    for (let i of n.state.facet(E.atomicRanges).map((s) => s(n)))
      i.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const gc = (n, e) => $i(n, (t) => {
  let i = t.from, { state: s } = n, r = s.doc.lineAt(i), o, l;
  if (!e && i > r.from && i < r.from + 200 && !/[^ \t]/.test(o = r.text.slice(0, i - r.from))) {
    if (o[o.length - 1] == "	")
      return i - 1;
    let a = si(o, s.tabSize), h = a % Hn(s) || Hn(s);
    for (let c = 0; c < h && o[o.length - 1 - c] == " "; c++)
      i--;
    l = i;
  } else
    l = ge(r.text, i - r.from, e, e) + r.from, l == i && r.number != (e ? s.doc.lines : 1) && (l += e ? 1 : -1);
  return l;
}), Lr = (n) => gc(n, !1), mc = (n) => gc(n, !0), yc = (n, e) => $i(n, (t) => {
  let i = t.head, { state: s } = n, r = s.doc.lineAt(i), o = s.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? r.to : r.from)) {
      i == t.head && r.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = ge(r.text, i - r.from, e) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || i != t.head) && (l = c), i = a;
  }
  return i;
}), bc = (n) => yc(n, !1), ym = (n) => yc(n, !0), bm = (n) => $i(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), wm = (n) => $i(n, (e) => {
  let t = n.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), xm = (n) => $i(n, (e) => {
  let t = n.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), vm = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: z.of(["", ""]) },
    range: S.cursor(i.from)
  }));
  return e(n.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, km = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length)
      return { range: i };
    let s = i.from, r = n.doc.lineAt(s), o = s == r.from ? s - 1 : ge(r.text, s - r.from, !1) + r.from, l = s == r.to ? s + 1 : ge(r.text, s - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(o, s)) },
      range: S.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(n.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function hs(n) {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from), r = n.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)), t >= s.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      e.push({ from: s.from, to: r.to, ranges: [i] });
    t = r.number + 1;
  }
  return e;
}
function wc(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [], s = [];
  for (let r of hs(n)) {
    if (t ? r.to == n.doc.length : r.from == 0)
      continue;
    let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + n.lineBreak });
      for (let a of r.ranges)
        s.push(S.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: n.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(S.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(n.update({
    changes: i,
    scrollIntoView: !0,
    selection: S.create(s, n.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const Sm = ({ state: n, dispatch: e }) => wc(n, e, !1), Cm = ({ state: n, dispatch: e }) => wc(n, e, !0);
function xc(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [];
  for (let s of hs(n))
    t ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak }) : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Am = ({ state: n, dispatch: e }) => xc(n, e, !1), Mm = ({ state: n, dispatch: e }) => xc(n, e, !0), Dm = (n) => {
  if (n.state.readOnly)
    return !1;
  let { state: e } = n, t = e.changes(hs(e).map(({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }))), i = ri(e.selection, (s) => n.moveVertically(s, !0)).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Tm(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = ye(n).resolveInner(e), i = t.childBefore(e), s = t.childAfter(e), r;
  return i && s && i.to <= e && s.from >= e && (r = i.type.prop(V.closedBy)) && r.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const Om = /* @__PURE__ */ vc(!1), Em = /* @__PURE__ */ vc(!0);
function vc(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((s) => {
      let { from: r, to: o } = s, l = e.doc.lineAt(r), a = !n && r == o && Tm(e, r);
      n && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new ns(e, { simulateBreak: r, simulateDoubleBreak: !!a }), c = Zr(h, r);
      for (c == null && (c = si(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", Fi(e, c)];
      return a && f.push(Fi(e, h.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: z.of(f) },
        range: S.cursor(r + 1 + f[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function no(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let s = [];
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, s, i), t = l.number), o = l.to + 1;
    }
    let r = n.changes(s);
    return {
      changes: s,
      range: S.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const Bm = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new ns(n, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), s = no(n, (r, o, l) => {
    let a = Zr(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = Fi(n, a);
    (h != c || l.from < r.from + h.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return s.changes.empty || e(n.update(s, { userEvent: "indent" })), !0;
}, kc = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(no(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(is) });
}), { userEvent: "input.indent" })), !0), Sc = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(no(n, (t, i) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s)
    return;
  let r = si(s, n.tabSize), o = 0, l = Fi(n, Math.max(0, r - Hn(n)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Lm = [
  { key: "Ctrl-b", run: Qh, shift: ac, preventDefault: !0 },
  { key: "Ctrl-f", run: ec, shift: hc },
  { key: "Ctrl-p", run: nc, shift: uc },
  { key: "Ctrl-n", run: sc, shift: dc },
  { key: "Ctrl-a", run: Qg, shift: fm },
  { key: "Ctrl-e", run: em, shift: um },
  { key: "Ctrl-d", run: mc },
  { key: "Ctrl-h", run: Lr },
  { key: "Ctrl-k", run: bm },
  { key: "Ctrl-Alt-h", run: bc },
  { key: "Ctrl-o", run: vm },
  { key: "Ctrl-t", run: km },
  { key: "Ctrl-v", run: Br }
], Rm = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Qh, shift: ac, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: jg, shift: nm, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Xg, shift: hm, preventDefault: !0 },
  { key: "ArrowRight", run: ec, shift: hc, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Kg, shift: sm, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Zg, shift: cm, preventDefault: !0 },
  { key: "ArrowUp", run: nc, shift: uc, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Rl, shift: Il },
  { mac: "Ctrl-ArrowUp", run: El, shift: Bl },
  { key: "ArrowDown", run: sc, shift: dc, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Pl, shift: Nl },
  { mac: "Ctrl-ArrowDown", run: Br, shift: Ll },
  { key: "PageUp", run: El, shift: Bl },
  { key: "PageDown", run: Br, shift: Ll },
  { key: "Home", run: Jg, shift: am, preventDefault: !0 },
  { key: "Mod-Home", run: Rl, shift: Il },
  { key: "End", run: Yg, shift: lm, preventDefault: !0 },
  { key: "Mod-End", run: Pl, shift: Nl },
  { key: "Enter", run: Om },
  { key: "Mod-a", run: dm },
  { key: "Backspace", run: Lr, shift: Lr },
  { key: "Delete", run: mc },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: bc },
  { key: "Mod-Delete", mac: "Alt-Delete", run: ym },
  { mac: "Mod-Backspace", run: wm },
  { mac: "Mod-Delete", run: xm }
].concat(/* @__PURE__ */ Lm.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), Pm = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Ug, shift: rm },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Gg, shift: om },
  { key: "Alt-ArrowUp", run: Sm },
  { key: "Shift-Alt-ArrowUp", run: Am },
  { key: "Alt-ArrowDown", run: Cm },
  { key: "Shift-Alt-ArrowDown", run: Mm },
  { key: "Escape", run: mm },
  { key: "Mod-Enter", run: Em },
  { key: "Alt-l", mac: "Ctrl-l", run: pm },
  { key: "Mod-i", run: gm, preventDefault: !0 },
  { key: "Mod-[", run: Sc },
  { key: "Mod-]", run: kc },
  { key: "Mod-Alt-\\", run: Bm },
  { key: "Shift-Mod-k", run: Dm },
  { key: "Shift-Mod-\\", run: im },
  { key: "Mod-/", run: Cg },
  { key: "Alt-A", run: Mg }
].concat(Rm), Im = { key: "Tab", run: kc, shift: Sc };
function $() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var s = t[i];
        typeof s == "string" ? n.setAttribute(i, s) : s != null && (n[i] = s);
      }
    e++;
  }
  for (; e < arguments.length; e++)
    Cc(n, arguments[e]);
  return n;
}
function Cc(n, e) {
  if (typeof e == "string")
    n.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      n.appendChild(e);
    else if (Array.isArray(e))
      for (var t = 0; t < e.length; t++)
        Cc(n, e[t]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const Fl = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class ti {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, t, i = 0, s = e.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, s), this.bufferStart = i, this.normalize = r ? (l) => r(Fl(l)) : Fl, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return ae(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = Hr(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Re(e);
      let s = this.normalize(t);
      for (let r = 0, o = i; ; r++) {
        let l = s.charCodeAt(r), a = this.match(l, o);
        if (r == s.length - 1) {
          if (a)
            return this.value = a, this;
          break;
        }
        o == i && r < t.length && t.charCodeAt(r) == l && o++;
      }
    }
  }
  match(e, t) {
    let i = null;
    for (let s = 0; s < this.matches.length; s += 2) {
      let r = this.matches[s], o = !1;
      this.query.charCodeAt(r) == e && (r == this.query.length - 1 ? i = { from: this.matches[s + 1], to: t + 1 } : (this.matches[s]++, o = !0)), o || (this.matches.splice(s, 2), s -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? i = { from: t, to: t + 1 } : this.matches.push(1, t)), i && this.test && !this.test(i.from, i.to, this.buffer, this.bufferStart) && (i = null), i;
  }
}
typeof Symbol < "u" && (ti.prototype[Symbol.iterator] = function() {
  return this;
});
const Ac = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, so = "gm" + (/x/.unicode == null ? "" : "u");
class Mc {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, i, s = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = !1, this.value = Ac, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new Dc(e, t, i, s, r);
    this.re = new RegExp(t, so + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from, this.matchPos = _n(e, s), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, s = i + t[0].length;
        if (this.matchPos = _n(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, t)))
          return this.value = { from: i, to: s, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Ns = /* @__PURE__ */ new WeakMap();
class Jt {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let s = Ns.get(e);
    if (!s || s.from >= i || s.to <= t) {
      let l = new Jt(t, e.sliceString(t, i));
      return Ns.set(e, l), l;
    }
    if (s.from == t && s.to == i)
      return s;
    let { text: r, from: o } = s;
    return o > t && (r = e.sliceString(t, o) + r, o = t), s.to < i && (r += e.sliceString(s.to, i)), Ns.set(e, new Jt(o, r)), new Jt(t, r.slice(t - o, i - o));
  }
}
class Dc {
  constructor(e, t, i, s, r) {
    this.text = e, this.to = r, this.done = !1, this.value = Ac, this.matchPos = _n(e, s), this.re = new RegExp(t, so + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = Jt.get(e, s, this.chunkEnd(
      s + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, s = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, s, t)))
          return this.value = { from: i, to: s, match: t }, this.matchPos = _n(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Jt.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Mc.prototype[Symbol.iterator] = Dc.prototype[Symbol.iterator] = function() {
  return this;
});
function Nm(n) {
  try {
    return new RegExp(n, so), !0;
  } catch {
    return !1;
  }
}
function _n(n, e) {
  if (e >= n.length)
    return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; )
    e++;
  return e;
}
function Rr(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number), t = $("input", { class: "cm-textfield", name: "line", value: e }), i = $("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), n.dispatch({ effects: qn.of(!1) }), n.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
    },
    onsubmit: (r) => {
      r.preventDefault(), s();
    }
  }, $("label", n.state.phrase("Go to line"), ": ", t), " ", $("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")));
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!r)
      return;
    let { state: o } = n, l = o.doc.lineAt(o.selection.main.head), [, a, h, c, f] = r, u = c ? +c.slice(1) : 0, d = h ? +h : l.number;
    if (h && f) {
      let g = d / 100;
      a && (g = g * (a == "-" ? -1 : 1) + l.number / o.doc.lines), d = Math.round(o.doc.lines * g);
    } else
      h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), y = S.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    n.dispatch({
      effects: [qn.of(!1), E.scrollIntoView(y.from, { y: "center" })],
      selection: y
    }), n.focus();
  }
  return { dom: i };
}
const qn = /* @__PURE__ */ N.define(), Hl = /* @__PURE__ */ fe.define({
  create() {
    return !0;
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(qn) && (n = t.value);
    return n;
  },
  provide: (n) => Ii.from(n, (e) => e ? Rr : null)
}), Fm = (n) => {
  let e = Pi(n, Rr);
  if (!e) {
    let t = [qn.of(!0)];
    n.state.field(Hl, !1) == null && t.push(N.appendConfig.of([Hl, Hm])), n.dispatch({ effects: t }), e = Pi(n, Rr);
  }
  return e && e.dom.querySelector("input").select(), !0;
}, Hm = /* @__PURE__ */ E.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), Wm = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Tc = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, Wm, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Vm(n) {
  let e = [Km, jm];
  return n && e.push(Tc.of(n)), e;
}
const zm = /* @__PURE__ */ P.mark({ class: "cm-selectionMatch" }), _m = /* @__PURE__ */ P.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Wl(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != J.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != J.Word);
}
function qm(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == J.Word && n(e.sliceDoc(i - 1, i)) == J.Word;
}
const jm = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(Tc), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1)
      return P.none;
    let s = i.main, r, o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor)
        return P.none;
      let a = t.wordAt(s.head);
      if (!a)
        return P.none;
      o = t.charCategorizer(s.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200)
        return P.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(s.from, s.to), o = t.charCategorizer(s.head), !(Wl(o, t, s.from, s.to) && qm(o, t, s.from, s.to)))
          return P.none;
      } else if (r = t.sliceDoc(s.from, s.to).trim(), !r)
        return P.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let h = new ti(t.doc, r, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || Wl(o, t, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(_m.range(c, f)) : (c >= s.to || f <= s.from) && l.push(zm.range(c, f)), l.length > e.maxMatches))
          return P.none;
      }
    }
    return P.set(l);
  }
}, {
  decorations: (n) => n.decorations
}), Km = /* @__PURE__ */ E.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), $m = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = S.create(t.ranges.map((s) => n.wordAt(s.head) || S.cursor(s.head)), t.mainIndex);
  return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
};
function Um(n, e) {
  let { main: t, ranges: i } = n.selection, s = n.wordAt(t.head), r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new ti(n.doc, e, i[i.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new ti(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), o = !0;
    } else {
      if (o && i.some((a) => a.from == l.value.from))
        continue;
      if (r) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const Gm = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((r) => r.from === r.to))
    return $m({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((r) => n.sliceDoc(r.from, r.to) != i))
    return !1;
  let s = Um(n, i);
  return s ? (e(n.update({
    selection: n.selection.addRange(S.range(s.from, s.to), !1),
    effects: E.scrollIntoView(s.to)
  })), !0) : !1;
}, oi = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new o0(e),
      scrollToMatch: (e) => E.scrollIntoView(e)
    });
  }
});
class Oc {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Nm(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new Zm(this) : new Jm(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : H.create({ doc: e });
    return i == null && (i = s.doc.length), this.regexp ? _t(this, s, t, i) : zt(this, s, t, i);
  }
}
class Ec {
  constructor(e) {
    this.spec = e;
  }
}
function zt(n, e, t, i) {
  return new ti(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (s) => s.toLowerCase(), n.wholeWord ? Ym(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function Ym(n, e) {
  return (t, i, s, r) => ((r > t || r + s.length < i) && (r = Math.max(0, t - 2), s = n.sliceString(r, Math.min(n.length, i + 2))), (e(jn(s, t - r)) != J.Word || e(Kn(s, t - r)) != J.Word) && (e(Kn(s, i - r)) != J.Word || e(jn(s, i - r)) != J.Word));
}
class Jm extends Ec {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let s = zt(this.spec, e, i, e.doc.length).nextOverlapping();
    return s.done && (s = zt(this.spec, e, 0, t).nextOverlapping()), s.done ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, i) {
    for (let s = i; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length), o = zt(this.spec, e, r, s), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == t)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = zt(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = zt(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function _t(n, e, t, i) {
  return new Mc(e.doc, n.search, {
    ignoreCase: !n.caseSensitive,
    test: n.wholeWord ? Xm(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, i);
}
function jn(n, e) {
  return n.slice(ge(n, e, !1), e);
}
function Kn(n, e) {
  return n.slice(e, ge(n, e));
}
function Xm(n) {
  return (e, t, i) => !i[0].length || (n(jn(i.input, i.index)) != J.Word || n(Kn(i.input, i.index)) != J.Word) && (n(Kn(i.input, i.index + i[0].length)) != J.Word || n(jn(i.input, i.index + i[0].length)) != J.Word);
}
class Zm extends Ec {
  nextMatch(e, t, i) {
    let s = _t(this.spec, e, i, e.doc.length).next();
    return s.done && (s = _t(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1; ; s++) {
      let r = Math.max(
        t,
        i - s * 1e4
        /* FindPrev.ChunkSize */
      ), o = _t(this.spec, e, r, i), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (r == t || l.from > r + 10))
        return l;
      if (r == t)
        return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (t, i) => i == "$" ? "$" : i == "&" ? e.match[0] : i != "0" && +i < e.match.length ? e.match[i] : t));
  }
  matchAll(e, t) {
    let i = _t(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = _t(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(i + 250, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const Hi = /* @__PURE__ */ N.define(), ro = /* @__PURE__ */ N.define(), wt = /* @__PURE__ */ fe.define({
  create(n) {
    return new Fs(Pr(n).create(), null);
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(Hi) ? n = new Fs(t.value.create(), n.panel) : t.is(ro) && (n = new Fs(n.query, t.value ? oo : null));
    return n;
  },
  provide: (n) => Ii.from(n, (e) => e.panel)
});
class Fs {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const Qm = /* @__PURE__ */ P.mark({ class: "cm-searchMatch" }), e0 = /* @__PURE__ */ P.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), t0 = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(wt));
  }
  update(n) {
    let e = n.state.field(wt);
    (e != n.startState.field(wt) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid)
      return P.none;
    let { view: t } = this, i = new vt();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      n.highlight(t.state, l, a, (h, c) => {
        let f = t.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? e0 : Qm);
      });
    }
    return i.finish();
  }
}, {
  decorations: (n) => n.decorations
});
function Ui(n) {
  return (e) => {
    let t = e.state.field(wt, !1);
    return t && t.query.spec.valid ? n(e, t) : Rc(e);
  };
}
const $n = /* @__PURE__ */ Ui((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i)
    return !1;
  let s = S.single(i.from, i.to), r = n.state.facet(oi);
  return n.dispatch({
    selection: s,
    effects: [lo(n, i), r.scrollToMatch(s.main, n)],
    userEvent: "select.search"
  }), Lc(n), !0;
}), Un = /* @__PURE__ */ Ui((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, s = e.prevMatch(t, i, i);
  if (!s)
    return !1;
  let r = S.single(s.from, s.to), o = n.state.facet(oi);
  return n.dispatch({
    selection: r,
    effects: [lo(n, s), o.scrollToMatch(r.main, n)],
    userEvent: "select.search"
  }), Lc(n), !0;
}), i0 = /* @__PURE__ */ Ui((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? !1 : (n.dispatch({
    selection: S.create(t.map((i) => S.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), n0 = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: i, to: s } = t.main, r = [], o = 0;
  for (let l = new ti(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == i && (o = r.length), r.push(S.range(l.value.from, l.value.to));
  }
  return e(n.update({
    selection: S.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, Vl = /* @__PURE__ */ Ui((n, { query: e }) => {
  let { state: t } = n, { from: i, to: s } = t.selection.main;
  if (t.readOnly)
    return !1;
  let r = e.nextMatch(t, i, i);
  if (!r)
    return !1;
  let o = [], l, a, h = [];
  if (r.from == i && r.to == s && (a = t.toText(e.getReplacement(r)), o.push({ from: r.from, to: r.to, insert: a }), r = e.nextMatch(t, r.from, r.to), h.push(E.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + "."))), r) {
    let c = o.length == 0 || o[0].from >= r.to ? 0 : r.to - r.from - a.length;
    l = S.single(r.from - c, r.to - c), h.push(lo(n, r)), h.push(t.facet(oi).scrollToMatch(l.main, n));
  }
  return n.dispatch({
    changes: o,
    selection: l,
    effects: h,
    userEvent: "input.replace"
  }), !0;
}), s0 = /* @__PURE__ */ Ui((n, { query: e }) => {
  if (n.state.readOnly)
    return !1;
  let t = e.matchAll(n.state, 1e9).map((s) => {
    let { from: r, to: o } = s;
    return { from: r, to: o, insert: e.getReplacement(s) };
  });
  if (!t.length)
    return !1;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({
    changes: t,
    effects: E.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function oo(n) {
  return n.state.facet(oi).createPanel(n);
}
function Pr(n, e) {
  var t, i, s, r, o;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let h = n.facet(oi);
  return new Oc({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : h.literal,
    regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : h.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : h.wholeWord
  });
}
function Bc(n) {
  let e = Pi(n, oo);
  return e && e.dom.querySelector("[main-field]");
}
function Lc(n) {
  let e = Bc(n);
  e && e == n.root.activeElement && e.select();
}
const Rc = (n) => {
  let e = n.state.field(wt, !1);
  if (e && e.panel) {
    let t = Bc(n);
    if (t && t != n.root.activeElement) {
      let i = Pr(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: Hi.of(i) }), t.focus(), t.select();
    }
  } else
    n.dispatch({ effects: [
      ro.of(!0),
      e ? Hi.of(Pr(n.state, e.query.spec)) : N.appendConfig.of(a0)
    ] });
  return !0;
}, Pc = (n) => {
  let e = n.state.field(wt, !1);
  if (!e || !e.panel)
    return !1;
  let t = Pi(n, oo);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: ro.of(!1) }), !0;
}, r0 = [
  { key: "Mod-f", run: Rc, scope: "editor search-panel" },
  { key: "F3", run: $n, shift: Un, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: $n, shift: Un, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: Pc, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: n0 },
  { key: "Alt-g", run: Fm },
  { key: "Mod-d", run: Gm, preventDefault: !0 }
];
class o0 {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(wt).query.spec;
    this.commit = this.commit.bind(this), this.searchField = $("input", {
      value: t.search,
      placeholder: Te(e, "Find"),
      "aria-label": Te(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = $("input", {
      value: t.replace,
      placeholder: Te(e, "Replace"),
      "aria-label": Te(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = $("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = $("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = $("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function i(s, r, o) {
      return $("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = $("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      i("next", () => $n(e), [Te(e, "next")]),
      i("prev", () => Un(e), [Te(e, "previous")]),
      i("select", () => i0(e), [Te(e, "all")]),
      $("label", null, [this.caseField, Te(e, "match case")]),
      $("label", null, [this.reField, Te(e, "regexp")]),
      $("label", null, [this.wordField, Te(e, "by word")]),
      ...e.state.readOnly ? [] : [
        $("br"),
        this.replaceField,
        i("replace", () => Vl(e), [Te(e, "replace")]),
        i("replaceAll", () => s0(e), [Te(e, "replace all")])
      ],
      $("button", {
        name: "close",
        onclick: () => Pc(e),
        "aria-label": Te(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new Oc({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: Hi.of(e) }));
  }
  keydown(e) {
    pd(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Un : $n)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Vl(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Hi) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(oi).top;
  }
}
function Te(n, e) {
  return n.state.phrase(e);
}
const dn = 30, pn = /[\s\.,:;?!]/;
function lo(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), s = n.state.doc.lineAt(t).to, r = Math.max(i.from, e - dn), o = Math.min(s, t + dn), l = n.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < dn; a++)
      if (!pn.test(l[a + 1]) && pn.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - dn; a--)
      if (!pn.test(l[a - 1]) && pn.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return E.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const l0 = /* @__PURE__ */ E.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), a0 = [
  wt,
  /* @__PURE__ */ ni.low(t0),
  l0
];
class Ic {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, i) {
    this.state = e, this.pos = t, this.explicit = i, this.abortListeners = [];
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = ye(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), s = t.text.slice(i - t.from, this.pos - t.from), r = s.search(Nc(e, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: s.slice(r) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  */
  addEventListener(e, t) {
    e == "abort" && this.abortListeners && this.abortListeners.push(t);
  }
}
function zl(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function h0(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of n) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++)
      t[s[r]] = !0;
  }
  let i = zl(e) + zl(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function c0(n) {
  let e = n.map((s) => typeof s == "string" ? { label: s } : s), [t, i] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : h0(e);
  return (s) => {
    let r = s.matchBefore(i);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
class _l {
  constructor(e, t, i, s) {
    this.completion = e, this.source = t, this.match = i, this.score = s;
  }
}
function xt(n) {
  return n.selection.main.from;
}
function Nc(n, e) {
  var t;
  let { source: i } = n, s = e && i[0] != "^", r = i[i.length - 1] != "$";
  return !s && !r ? n : new RegExp(`${s ? "^" : ""}(?:${i})${r ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const f0 = /* @__PURE__ */ ht.define();
function u0(n, e, t, i) {
  let { main: s } = n.selection, r = t - s.from, o = i - s.from;
  return Object.assign(Object.assign({}, n.changeByRange((l) => l != s && t != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(t, i) ? { range: l } : {
    changes: { from: l.from + r, to: i == s.from ? l.to : l.from + o, insert: e },
    range: S.cursor(l.from + r + e.length)
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const ql = /* @__PURE__ */ new WeakMap();
function d0(n) {
  if (!Array.isArray(n))
    return n;
  let e = ql.get(n);
  return e || ql.set(n, e = c0(n)), e;
}
const ao = /* @__PURE__ */ N.define(), Wi = /* @__PURE__ */ N.define();
class p0 {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = ae(e, t), s = Re(i);
      this.chars.push(i);
      let r = e.slice(t, t + s), o = r.toUpperCase();
      this.folded.push(ae(o == r ? r.toLowerCase() : o, 0)), t += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, !0;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return !1;
    let { chars: t, folded: i, any: s, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let m = ae(e, 0), b = Re(m), w = b == e.length ? 0 : -100;
      if (m != t[0])
        if (m == i[0])
          w += -200;
        else
          return !1;
      return this.ret(w, [0, b]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let m = 0, b = Math.min(e.length, 200); m < b && h < a; ) {
        let w = ae(e, m);
        (w == t[h] || w == i[h]) && (s[h++] = m), m += Re(w);
      }
      if (h < a)
        return !1;
    }
    let c = 0, f = 0, u = !1, d = 0, p = -1, y = -1, g = /[a-z]/.test(e), k = !0;
    for (let m = 0, b = Math.min(e.length, 200), w = 0; m < b && f < a; ) {
      let x = ae(e, m);
      l < 0 && (c < a && x == t[c] && (r[c++] = m), d < a && (x == t[d] || x == i[d] ? (d == 0 && (p = m), y = m + 1, d++) : d = 0));
      let v, C = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (v = Hr(x)) != v.toLowerCase() ? 1 : v != v.toUpperCase() ? 2 : 0;
      (!m || C == 1 && g || w == 0 && C != 0) && (t[f] == x || i[f] == x && (u = !0) ? o[f++] = m : o.length && (k = !1)), w = C, m += Re(x);
    }
    return f == a && o[0] == 0 && k ? this.result(-100 + (u ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (y == e.length ? 0 : -100), [0, y]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - e.length, [p, y]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (k ? 0 : -1100), o, e) : t.length == 2 ? !1 : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, i) {
    let s = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? Re(ae(i, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(e - i.length, s);
  }
}
const pe = /* @__PURE__ */ L.define({
  combine(n) {
    return tt(n, {
      activateOnTyping: !0,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: g0,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (i) => jl(e(i), t(i)),
      optionClass: (e, t) => (i) => jl(e(i), t(i)),
      addToOptions: (e, t) => e.concat(t)
    });
  }
});
function jl(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function g0(n, e, t, i, s, r) {
  let o = n.textDirection == X.RTL, l = o, a = !1, h = "top", c, f, u = e.left - s.left, d = s.right - e.right, p = i.right - i.left, y = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d))
    c = Math.max(s.top, Math.min(t.top, s.bottom - y)) - e.top, f = Math.min(400, l ? u : d);
  else {
    a = !0, f = Math.min(
      400,
      (o ? e.right : s.right - e.left) - 30
      /* Info.Margin */
    );
    let m = s.bottom - e.bottom;
    m >= y || m > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let g = (e.bottom - e.top) / r.offsetHeight, k = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${f / k}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function m0(n) {
  let e = n.addToOptions.slice();
  return n.icons && e.push({
    render(t) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), e.push({
    render(t, i, s) {
      let r = document.createElement("span");
      r.className = "cm-completionLabel";
      let o = t.displayLabel || t.label, l = 0;
      for (let a = 0; a < s.length; ) {
        let h = s[a++], c = s[a++];
        h > l && r.appendChild(document.createTextNode(o.slice(l, h)));
        let f = r.appendChild(document.createElement("span"));
        f.appendChild(document.createTextNode(o.slice(h, c))), f.className = "cm-completionMatchedText", l = c;
      }
      return l < o.length && r.appendChild(document.createTextNode(o.slice(l))), r;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = t.detail, i;
    },
    position: 80
  }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function Hs(n, e, t) {
  if (n <= t)
    return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class y0 {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: r, selected: o } = s.open, l = e.state.facet(pe);
    this.optionContent = m0(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Hs(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(e, h[+f[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(pe).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: Wi.of(null) });
    }), this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != s) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!s.open || s.open.options != r) && (this.range = Hs(r.length, o, e.state.facet(pe).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of t.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Hs(t.options.length, t.selected, this.view.state.facet(pe).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: s } = i;
      if (!s)
        return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
      }).catch((o) => We(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: s, destroy: r } = e;
      i.appendChild(s), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      i.nodeName != "LI" || !i.id ? s-- : s == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && w0(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = e.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.defaultView || window;
      r = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(pe).positionInfo(this.view, t, s, i, r, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const s = document.createElement("ul");
    s.id = t, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > i.from || i.from == 0))
          if (r = u, typeof h != "string" && h.header)
            s.appendChild(h.header(h));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const c = s.appendChild(document.createElement("li"));
      c.id = t + "-" + o, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, a);
        d && c.appendChild(d);
      }
    }
    return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function b0(n, e) {
  return (t) => new y0(t, n, e);
}
function w0(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), s = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / s : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / s);
}
function Kl(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function x0(n, e) {
  let t = [], i = null, s = (a) => {
    t.push(a);
    let { section: h } = a.completion;
    if (h) {
      i || (i = []);
      let c = typeof h == "string" ? h : h.name;
      i.some((f) => f.name == c) || i.push(typeof h == "string" ? { name: c } : h);
    }
  };
  for (let a of n)
    if (a.hasResult()) {
      let h = a.result.getMatch;
      if (a.result.filter === !1)
        for (let c of a.result.options)
          s(new _l(c, a.source, h ? h(c) : [], 1e9 - t.length));
      else {
        let c = new p0(e.sliceDoc(a.from, a.to));
        for (let f of a.result.options)
          if (c.match(f.label)) {
            let u = f.displayLabel ? h ? h(f, c.matched) : [] : c.matched;
            s(new _l(f, a.source, u, c.score + (f.boost || 0)));
          }
      }
    }
  if (i) {
    let a = /* @__PURE__ */ Object.create(null), h = 0, c = (f, u) => {
      var d, p;
      return ((d = f.rank) !== null && d !== void 0 ? d : 1e9) - ((p = u.rank) !== null && p !== void 0 ? p : 1e9) || (f.name < u.name ? -1 : 1);
    };
    for (let f of i.sort(c))
      h -= 1e5, a[f.name] = h;
    for (let f of t) {
      let { section: u } = f.completion;
      u && (f.score += a[typeof u == "string" ? u : u.name]);
    }
  }
  let r = [], o = null, l = e.facet(pe).compareCompletions;
  for (let a of t.sort((h, c) => c.score - h.score || l(h.completion, c.completion))) {
    let h = a.completion;
    !o || o.label != h.label || o.detail != h.detail || o.type != null && h.type != null && o.type != h.type || o.apply != h.apply || o.boost != h.boost ? r.push(a) : Kl(a.completion) > Kl(o) && (r[r.length - 1] = a), o = a.completion;
  }
  return r;
}
class jt {
  constructor(e, t, i, s, r, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new jt(this.options, $l(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, s, r) {
    let o = x0(e, t);
    if (!o.length)
      return s && e.some(
        (a) => a.state == 1
        /* State.Pending */
      ) ? new jt(s.options, s.attrs, s.tooltip, s.timestamp, s.selected, !0) : null;
    let l = t.facet(pe).selectOnOpen ? 0 : -1;
    if (s && s.selected != l && s.selected != -1) {
      let a = s.options[s.selected].completion;
      for (let h = 0; h < o.length; h++)
        if (o[h].completion == a) {
          l = h;
          break;
        }
    }
    return new jt(o, $l(i, l), {
      pos: e.reduce((a, h) => h.hasResult() ? Math.min(a, h.from) : a, 1e8),
      create: A0,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), l, !1);
  }
  map(e) {
    return new jt(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class Gn {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Gn(S0, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(pe), r = (i.override || t.languageDataAt("autocomplete", xt(t)).map(d0)).map((l) => (this.active.find((h) => h.source == l) || new Ae(
      l,
      this.active.some(
        (h) => h.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, i));
    r.length == this.active.length && r.every((l, a) => l == this.active[a]) && (r = this.active);
    let o = this.open;
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) || !v0(r, this.active) ? o = jt.build(r, t, this.id, o, i) : o && o.disabled && !r.some(
      (l) => l.state == 1
      /* State.Pending */
    ) && (o = null), !o && r.every(
      (l) => l.state != 1
      /* State.Pending */
    ) && r.some((l) => l.hasResult()) && (r = r.map((l) => l.hasResult() ? new Ae(
      l.source,
      0
      /* State.Inactive */
    ) : l));
    for (let l of e.effects)
      l.is(Hc) && (o = o && o.setSelected(l.value, this.id));
    return r == this.active && o == this.open ? this : new Gn(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : k0;
  }
}
function v0(n, e) {
  if (n == e)
    return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult; )
      t++;
    for (; i < e.length && !e[i].hasResult; )
      i++;
    let s = t == n.length, r = i == e.length;
    if (s || r)
      return s == r;
    if (n[t++].result != e[i++].result)
      return !1;
  }
}
const k0 = {
  "aria-autocomplete": "list"
};
function $l(n, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": n
  };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const S0 = [];
function Ir(n) {
  return n.isUserEvent("input.type") ? "input" : n.isUserEvent("delete.backward") ? "delete" : null;
}
class Ae {
  constructor(e, t, i = -1) {
    this.source = e, this.state = t, this.explicitPos = i;
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let i = Ir(e), s = this;
    i ? s = s.handleUserEvent(e, i, t) : e.docChanged ? s = s.handleChange(e) : e.selection && s.state != 0 && (s = new Ae(
      s.source,
      0
      /* State.Inactive */
    ));
    for (let r of e.effects)
      if (r.is(ao))
        s = new Ae(s.source, 1, r.value ? xt(e.state) : -1);
      else if (r.is(Wi))
        s = new Ae(
          s.source,
          0
          /* State.Inactive */
        );
      else if (r.is(Fc))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  handleUserEvent(e, t, i) {
    return t == "delete" || !i.activateOnTyping ? this.map(e.changes) : new Ae(
      this.source,
      1
      /* State.Pending */
    );
  }
  handleChange(e) {
    return e.changes.touchesRange(xt(e.startState)) ? new Ae(
      this.source,
      0
      /* State.Inactive */
    ) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new Ae(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class Xt extends Ae {
  constructor(e, t, i, s, r) {
    super(e, 2, t), this.result = i, this.from = s, this.to = r;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, t, i) {
    var s;
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = xt(e.state);
    if ((this.explicitPos < 0 ? l <= r : l < this.from) || l > o || t == "delete" && xt(e.startState) == this.from)
      return new Ae(
        this.source,
        t == "input" && i.activateOnTyping ? 1 : 0
        /* State.Inactive */
      );
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), h;
    return C0(this.result.validFor, e.state, r, o) ? new Xt(this.source, a, this.result, r, o) : this.result.update && (h = this.result.update(this.result, r, o, new Ic(e.state, l, a >= 0))) ? new Xt(this.source, a, h, h.from, (s = h.to) !== null && s !== void 0 ? s : xt(e.state)) : new Ae(this.source, 1, a);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new Ae(
      this.source,
      0
      /* State.Inactive */
    ) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : new Xt(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
  }
}
function C0(n, e, t, i) {
  if (!n)
    return !1;
  let s = e.sliceDoc(t, i);
  return typeof n == "function" ? n(s, t, i, e) : Nc(n, !0).test(s);
}
const Fc = /* @__PURE__ */ N.define({
  map(n, e) {
    return n.map((t) => t.map(e));
  }
}), Hc = /* @__PURE__ */ N.define(), Ee = /* @__PURE__ */ fe.define({
  create() {
    return Gn.start();
  },
  update(n, e) {
    return n.update(e);
  },
  provide: (n) => [
    Ur.from(n, (e) => e.tooltip),
    E.contentAttributes.from(n, (e) => e.attrs)
  ]
});
function Wc(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Ee).active.find((s) => s.source == e.source);
  return i instanceof Xt ? (typeof t == "string" ? n.dispatch(Object.assign(Object.assign({}, u0(n.state, t, i.from, i.to)), { annotations: f0.of(e.completion) })) : t(n, e.completion, i.from, i.to), !0) : !1;
}
const A0 = /* @__PURE__ */ b0(Ee, Wc);
function gn(n, e = "option") {
  return (t) => {
    let i = t.state.field(Ee, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(pe).interactionDelay)
      return !1;
    let s = 1, r;
    e == "page" && (r = Ah(t, i.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: Hc.of(l) }), !0;
  };
}
const M0 = (n) => {
  let e = n.state.field(Ee, !1);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(pe).interactionDelay ? !1 : Wc(n, e.open.options[e.open.selected]);
}, D0 = (n) => n.state.field(Ee, !1) ? (n.dispatch({ effects: ao.of(!0) }), !0) : !1, T0 = (n) => {
  let e = n.state.field(Ee, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (n.dispatch({ effects: Wi.of(null) }), !0);
};
class O0 {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const E0 = 50, B0 = 1e3, L0 = /* @__PURE__ */ ie.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let e of n.state.field(Ee).active)
      e.state == 1 && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(Ee);
    if (!n.selectionSet && !n.docChanged && n.startState.field(Ee) == e)
      return;
    let t = n.transactions.some((i) => (i.selection || i.docChanged) && !Ir(i));
    for (let i = 0; i < this.running.length; i++) {
      let s = this.running[i];
      if (t || s.updates.length + n.transactions.length > E0 && Date.now() - s.time > B0) {
        for (let r of s.context.abortListeners)
          try {
            r();
          } catch (o) {
            We(this.view.state, o);
          }
        s.context.abortListeners = null, this.running.splice(i--, 1);
      } else
        s.updates.push(...n.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((i) => i.state == 1 && !this.running.some((s) => s.active.source == i.source)) ? setTimeout(() => this.startUpdate(), 50) : -1, this.composing != 0)
      for (let i of n.transactions)
        Ir(i) == "input" ? this.composing = 2 : this.composing == 2 && i.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: n } = this.view, e = n.field(Ee);
    for (let t of e.active)
      t.state == 1 && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
  }
  startQuery(n) {
    let { state: e } = this.view, t = xt(e), i = new Ic(e, t, n.explicitPos == t), s = new O0(n, i);
    this.running.push(s), Promise.resolve(n.source(i)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: Wi.of(null) }), We(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(pe).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(pe);
    for (let i = 0; i < this.running.length; i++) {
      let s = this.running[i];
      if (s.done === void 0)
        continue;
      if (this.running.splice(i--, 1), s.done) {
        let o = new Xt(s.active.source, s.active.explicitPos, s.done, s.done.from, (n = s.done.to) !== null && n !== void 0 ? n : xt(s.updates.length ? s.updates[0].startState : this.view.state));
        for (let l of s.updates)
          o = o.update(l, t);
        if (o.hasResult()) {
          e.push(o);
          continue;
        }
      }
      let r = this.view.state.field(Ee).active.find((o) => o.source == s.active.source);
      if (r && r.state == 1)
        if (s.done == null) {
          let o = new Ae(
            s.active.source,
            0
            /* State.Inactive */
          );
          for (let l of s.updates)
            o = o.update(l, t);
          o.state != 1 && e.push(o);
        } else
          this.startQuery(r);
    }
    e.length && this.view.dispatch({ effects: Fc.of(e) });
  }
}, {
  eventHandlers: {
    blur(n) {
      let e = this.view.state.field(Ee, !1);
      if (e && e.tooltip && this.view.state.facet(pe).closeOnBlur) {
        let t = e.open && Ah(this.view, e.open.tooltip);
        (!t || !t.dom.contains(n.relatedTarget)) && this.view.dispatch({ effects: Wi.of(null) });
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: ao.of(!1) }), 20), this.composing = 0;
    }
  }
}), R0 = /* @__PURE__ */ E.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), Vi = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Bt = /* @__PURE__ */ N.define({
  map(n, e) {
    let t = e.mapPos(n, -1, xe.TrackAfter);
    return t ?? void 0;
  }
}), ho = /* @__PURE__ */ new class extends Pt {
}();
ho.startSide = 1;
ho.endSide = -1;
const Vc = /* @__PURE__ */ fe.define({
  create() {
    return q.empty;
  },
  update(n, e) {
    if (e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head).from, i = e.startState.doc.lineAt(e.startState.selection.main.head).from;
      t != e.changes.mapPos(i, -1) && (n = q.empty);
    }
    n = n.map(e.changes);
    for (let t of e.effects)
      t.is(Bt) && (n = n.update({ add: [ho.range(t.value, t.value + 1)] }));
    return n;
  }
});
function P0() {
  return [N0, Vc];
}
const Ws = "()[]{}<>";
function zc(n) {
  for (let e = 0; e < Ws.length; e += 2)
    if (Ws.charCodeAt(e) == n)
      return Ws.charAt(e + 1);
  return Hr(n < 128 ? n : n + 1);
}
function _c(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || Vi;
}
const I0 = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), N0 = /* @__PURE__ */ E.inputHandler.of((n, e, t, i) => {
  if ((I0 ? n.composing : n.compositionStarted) || n.state.readOnly)
    return !1;
  let s = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && Re(ae(i, 0)) == 1 || e != s.from || t != s.to)
    return !1;
  let r = W0(n.state, i);
  return r ? (n.dispatch(r), !0) : !1;
}), F0 = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let i = _c(n, n.selection.main.head).brackets || Vi.brackets, s = null, r = n.changeByRange((o) => {
    if (o.empty) {
      let l = V0(n.doc, o.head);
      for (let a of i)
        if (a == l && cs(n.doc, o.head) == zc(ae(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: S.cursor(o.head - a.length)
          };
    }
    return { range: s = o };
  });
  return s || e(n.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, H0 = [
  { key: "Backspace", run: F0 }
];
function W0(n, e) {
  let t = _c(n, n.selection.main.head), i = t.brackets || Vi.brackets;
  for (let s of i) {
    let r = zc(ae(s, 0));
    if (e == s)
      return r == s ? q0(n, s, i.indexOf(s + s + s) > -1, t) : z0(n, s, r, t.before || Vi.before);
    if (e == r && qc(n, n.selection.main.from))
      return _0(n, s, r);
  }
  return null;
}
function qc(n, e) {
  let t = !1;
  return n.field(Vc).between(0, n.doc.length, (i) => {
    i == e && (t = !0);
  }), t;
}
function cs(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, Re(ae(t, 0)));
}
function V0(n, e) {
  let t = n.sliceString(e - 2, e);
  return Re(ae(t, 0)) == t.length ? t : t.slice(1);
}
function z0(n, e, t, i) {
  let s = null, r = n.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: Bt.of(o.to + e.length),
        range: S.range(o.anchor + e.length, o.head + e.length)
      };
    let l = cs(n.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: Bt.of(o.head + e.length),
      range: S.cursor(o.head + e.length)
    } : { range: s = o };
  });
  return s ? null : n.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function _0(n, e, t) {
  let i = null, s = n.changeByRange((r) => r.empty && cs(n.doc, r.head) == t ? {
    changes: { from: r.head, to: r.head + t.length, insert: t },
    range: S.cursor(r.head + t.length)
  } : i = { range: r });
  return i ? null : n.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function q0(n, e, t, i) {
  let s = i.stringPrefixes || Vi.stringPrefixes, r = null, o = n.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Bt.of(l.to + e.length),
        range: S.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, h = cs(n.doc, a), c;
    if (h == e) {
      if (Ul(n, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Bt.of(a + e.length),
          range: S.cursor(a + e.length)
        };
      if (qc(n, a)) {
        let u = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: S.cursor(a + u.length)
        };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (c = Gl(n, a - 2 * e.length, s)) > -1 && Ul(n, c))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Bt.of(a + e.length),
          range: S.cursor(a + e.length)
        };
      if (n.charCategorizer(a)(h) != J.Word && Gl(n, a, s) > -1 && !j0(n, a, e, s))
        return {
          changes: { insert: e + e, from: a },
          effects: Bt.of(a + e.length),
          range: S.cursor(a + e.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : n.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Ul(n, e) {
  let t = ye(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function j0(n, e, t, i) {
  let s = ye(n).resolveInner(e, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)), a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
        if (n.sliceDoc(c.to - t.length, c.to) == t)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = s.to == e && s.parent;
    if (!h)
      break;
    s = h;
  }
  return !1;
}
function Gl(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != J.Word)
    return e;
  for (let s of t) {
    let r = e - s.length;
    if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != J.Word)
      return r;
  }
  return -1;
}
function jc(n = {}) {
  return [
    Ee,
    pe.of(n),
    L0,
    K0,
    R0
  ];
}
const Kc = [
  { key: "Ctrl-Space", run: D0 },
  { key: "Escape", run: T0 },
  { key: "ArrowDown", run: /* @__PURE__ */ gn(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ gn(!1) },
  { key: "PageDown", run: /* @__PURE__ */ gn(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ gn(!1, "page") },
  { key: "Enter", run: M0 }
], K0 = /* @__PURE__ */ ni.highest(/* @__PURE__ */ ts.computeN([pe], (n) => n.facet(pe).defaultKeymap ? [Kc] : []));
class $0 {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class Ot {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let s = e, r = i.facet(Gc).markerFilter;
    r && (s = r(s));
    let o = P.set(s.map((l) => l.from == l.to || l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from ? P.widget({
      widget: new ty(l),
      diagnostic: l
    }).range(l.from) : P.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new Ot(o, t, ii(o));
  }
}
function ii(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (s, r, { spec: o }) => {
    if (!(e && o.diagnostic != e))
      return i = new $0(s, r, o.diagnostic), !1;
  }), i;
}
function U0(n, e) {
  let t = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((i) => i.is($c)) || n.changes.touchesRange(t.from, t.to));
}
function G0(n, e) {
  return n.field(Le, !1) ? e : e.concat(N.appendConfig.of(sy));
}
const $c = /* @__PURE__ */ N.define(), co = /* @__PURE__ */ N.define(), Uc = /* @__PURE__ */ N.define(), Le = /* @__PURE__ */ fe.define({
  create() {
    return new Ot(P.none, null, null);
  },
  update(n, e) {
    if (e.docChanged) {
      let t = n.diagnostics.map(e.changes), i = null;
      if (n.selected) {
        let s = e.changes.mapPos(n.selected.from, 1);
        i = ii(t, n.selected.diagnostic, s) || ii(t, null, s);
      }
      n = new Ot(t, n.panel, i);
    }
    for (let t of e.effects)
      t.is($c) ? n = Ot.init(t.value, n.panel, e.state) : t.is(co) ? n = new Ot(n.diagnostics, t.value ? fs.open : null, n.selected) : t.is(Uc) && (n = new Ot(n.diagnostics, n.panel, t.value));
    return n;
  },
  provide: (n) => [
    Ii.from(n, (e) => e.panel),
    E.decorations.from(n, (e) => e.diagnostics)
  ]
}), Y0 = /* @__PURE__ */ P.mark({ class: "cm-lintRange cm-lintRange-active" });
function J0(n, e, t) {
  let { diagnostics: i } = n.state.field(Le), s = [], r = 2e8, o = 0;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0)) && (s.push(c.diagnostic), r = Math.min(a, r), o = Math.max(h, o));
  });
  let l = n.state.facet(Gc).tooltipFilter;
  return l && (s = l(s)), s.length ? {
    pos: r,
    end: o,
    above: n.state.doc.lineAt(r).to < o,
    create() {
      return { dom: X0(n, s) };
    }
  } : null;
}
function X0(n, e) {
  return $("ul", { class: "cm-tooltip-lint" }, e.map((t) => Jc(n, t, !1)));
}
const Z0 = (n) => {
  let e = n.state.field(Le, !1);
  (!e || !e.panel) && n.dispatch({ effects: G0(n.state, [co.of(!0)]) });
  let t = Pi(n, fs.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Yl = (n) => {
  let e = n.state.field(Le, !1);
  return !e || !e.panel ? !1 : (n.dispatch({ effects: co.of(!1) }), !0);
}, Q0 = (n) => {
  let e = n.state.field(Le, !1);
  if (!e)
    return !1;
  let t = n.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to) ? !1 : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, ey = [
  { key: "Mod-Shift-m", run: Z0, preventDefault: !0 },
  { key: "F8", run: Q0 }
], Gc = /* @__PURE__ */ L.define({
  combine(n) {
    return Object.assign({ sources: n.map((e) => e.source) }, tt(n.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null
    }, {
      needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t
    }));
  }
});
function Yc(n) {
  let e = [];
  if (n)
    e:
      for (let { name: t } of n) {
        for (let i = 0; i < t.length; i++) {
          let s = t[i];
          if (/[a-zA-Z]/.test(s) && !e.some((r) => r.toLowerCase() == s.toLowerCase())) {
            e.push(s);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function Jc(n, e, t) {
  var i;
  let s = t ? Yc(e.actions) : [];
  return $("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, $("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = !1, a = (u) => {
      if (u.preventDefault(), l)
        return;
      l = !0;
      let d = ii(n.state.field(Le).diagnostics, e);
      d && r.apply(n, d.from, d.to);
    }, { name: h } = r, c = s[o] ? h.indexOf(s[o]) : -1, f = c < 0 ? h : [
      h.slice(0, c),
      $("u", h.slice(c, c + 1)),
      h.slice(c + 1)
    ];
    return $("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, f);
  }), e.source && $("div", { class: "cm-diagnosticSource" }, e.source));
}
class ty extends ct {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return $("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class Jl {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Jc(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class fs {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (s.keyCode == 27)
        Yl(this.view), this.view.focus();
      else if (s.keyCode == 38 || s.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (s.keyCode == 40 || s.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (s.keyCode == 36)
        this.moveSelection(0);
      else if (s.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (s.keyCode == 13)
        this.view.focus();
      else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: r } = this.items[this.selectedIndex], o = Yc(r.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = ii(this.view.state.field(Le).diagnostics, r);
            a && r.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, i = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = $("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i
    }), this.dom = $("div", { class: "cm-panel-lint" }, this.list, $("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Yl(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Le).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Le), i = 0, s = !1, r = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
      let h = -1, c;
      for (let f = i; f < this.items.length; f++)
        if (this.items[f].diagnostic == a.diagnostic) {
          h = f;
          break;
        }
      h < 0 ? (c = new Jl(this.view, a.diagnostic), this.items.splice(i, 0, c), s = !0) : (c = this.items[h], h > i && (this.items.splice(i, h - i), s = !0)), t && c.diagnostic == t.diagnostic ? c.dom.hasAttribute("aria-selected") || (c.dom.setAttribute("aria-selected", "true"), r = c) : c.dom.hasAttribute("aria-selected") && c.dom.removeAttribute("aria-selected"), i++;
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Jl(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: o, panel: l }) => {
        let a = l.height / this.list.offsetHeight;
        o.top < l.top ? this.list.scrollTop -= (l.top - o.top) / a : o.bottom > l.bottom && (this.list.scrollTop += (o.bottom - l.bottom) / a);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; )
          t();
        e = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(Le), i = ii(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: Uc.of(i)
    });
  }
  static open(e) {
    return new fs(e);
  }
}
function iy(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function mn(n) {
  return iy(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const ny = /* @__PURE__ */ E.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ mn("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ mn("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ mn("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ mn("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
}), sy = [
  Le,
  /* @__PURE__ */ E.decorations.compute([Le], (n) => {
    let { selected: e, panel: t } = n.field(Le);
    return !e || !t || e.from == e.to ? P.none : P.set([
      Y0.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ tp(J0, { hideOn: U0 }),
  ny
], ry = /* @__PURE__ */ (() => [
  cp(),
  dp(),
  Bd(),
  Pg(),
  rg(),
  xd(),
  Ad(),
  H.allowMultipleSelections.of(!0),
  Kp(),
  lg(cg, { fallback: !0 }),
  yg(),
  P0(),
  jc(),
  Kd(),
  Gd(),
  Fd(),
  Vm(),
  ts.of([
    ...H0,
    ...Pm,
    ...r0,
    ...qg,
    ...tg,
    ...Kc,
    ...ey
  ])
])();
function oy(n) {
  let e, t, i, s, r, o;
  return {
    c() {
      e = Kt("div"), t = Kt("div"), t.innerHTML = '<div class="scm-loading__spinner svelte-1pprwg0"></div> <p class="scm-loading__text svelte-1pprwg0">Loading editor...</p>', i = nf(), s = Kt("pre"), r = Nr(
        /*value*/
        n[0]
      ), st(t, "class", "scm-waiting__loading scm-loading svelte-1pprwg0"), st(s, "class", "scm-pre cm-editor svelte-1pprwg0"), st(e, "class", o = "scm-waiting " + /*classes*/
      n[1] + " svelte-1pprwg0");
    },
    m(l, a) {
      Jn(l, e, a), pi(e, t), pi(e, i), pi(e, s), pi(s, r);
    },
    p(l, a) {
      a[0] & /*value*/
      1 && of(
        r,
        /*value*/
        l[0]
      ), a[0] & /*classes*/
      2 && o !== (o = "scm-waiting " + /*classes*/
      l[1] + " svelte-1pprwg0") && st(e, "class", o);
    },
    d(l) {
      l && zi(e);
    }
  };
}
function ly(n) {
  let e, t;
  return {
    c() {
      e = Kt("div"), st(e, "class", t = "uikit-w-full uikit-h-full uikit-min-h-[300px] codemirror-wrapper uikit-shadow-lg uikit-p-3 " + /*classes*/
      n[1] + " svelte-1pprwg0");
    },
    m(i, s) {
      Jn(i, e, s), n[18](e);
    },
    p(i, s) {
      s[0] & /*classes*/
      2 && t !== (t = "uikit-w-full uikit-h-full uikit-min-h-[300px] codemirror-wrapper uikit-shadow-lg uikit-p-3 " + /*classes*/
      i[1] + " svelte-1pprwg0") && st(e, "class", t);
    },
    d(i) {
      i && zi(e), n[18](null);
    }
  };
}
function ay(n) {
  let e;
  function t(r, o) {
    return (
      /*is_browser*/
      r[3] ? ly : oy
    );
  }
  let s = t(n)(n);
  return {
    c() {
      s.c(), e = sf();
    },
    m(r, o) {
      s.m(r, o), Jn(r, e, o);
    },
    p(r, o) {
      s.p(r, o);
    },
    i: Rt,
    o: Rt,
    d(r) {
      r && zi(e), s.d(r);
    }
  };
}
function hy(n, e, t) {
  let i, { class: s = "" } = e, { value: r = "" } = e, { lang: o = void 0 } = e, { theme: l = void 0 } = e, { extensions: a = [] } = e, { useTab: h = !0 } = e, { tabSize: c = 2 } = e, { styles: f = void 0 } = e, { lineWrapping: u = !1 } = e, { editable: d = !0 } = e, { readonly: p = !1 } = e, { placeholder: y = void 0 } = e, { competions: g = [
    { label: "match", type: "keyword" },
    {
      label: "hello",
      type: "variable",
      info: "(World)"
    },
    {
      label: "magic",
      type: "text",
      apply: "⠁⭒*.✩.*⭒⠁",
      detail: "macro"
    }
  ] } = e;
  function k() {
    return r;
  }
  const m = (M, U, K) => {
    let Se;
    return function(nt, ..._e) {
      const De = nt;
      Se ? clearTimeout(Se) : K && M.apply(De, _e), Se = setTimeout(li, U || 100);
      function li() {
        K || M.apply(De, _e), Se = null;
      }
    };
  }, b = typeof window < "u", w = cf();
  let x, v, C = !1, T = !1, A = !0, B = !0;
  af(() => t(16, v = I())), hf(() => v == null ? void 0 : v.destroy());
  function I() {
    const M = m(ne, 300);
    return new E({
      parent: x || document.body,
      state: ee(r),
      dispatch(U) {
        v.update([U]), !C && U.docChanged && M();
      }
    });
  }
  function _() {
    if (A) {
      A = !1;
      return;
    }
    v.dispatch({
      effects: N.reconfigure.of(i)
    });
  }
  function Z(M) {
    if (B) {
      B = !1;
      return;
    }
    if (T) {
      T = !1;
      return;
    }
    C = !0, v.setState(ee(M)), C = !1;
  }
  function ne() {
    const M = v.state.doc.toString();
    M !== r && (T = !0, t(0, r = M), w("change", r));
  }
  function Q(M) {
    let U = M.matchBefore(/^(\S+( +\S+)*)?$/);
    return M.state.sliceDoc(0, M.to), U.from == U.to && !M.explicit ? null : { from: U.from, options: g };
  }
  function ee(M) {
    return H.create({
      doc: M ?? void 0,
      extensions: [...i, jc({ override: [Q] })]
    });
  }
  function we(M, U, K, Se, Ce, nt, _e) {
    const De = [
      is.of(" ".repeat(U)),
      E.editable.of(Ce),
      H.readOnly.of(nt)
    ];
    return M && De.push(ts.of([Im])), Se && De.push(zd(Se)), K && De.push(E.lineWrapping), _e && De.push(_e), De;
  }
  function W(M, U) {
    const K = [
      E.theme({
        "cm-editor": { height: "100%" },
        ...U || {}
      })
    ];
    return M && K.push(M), K;
  }
  function F(M) {
    Vs[M ? "unshift" : "push"](() => {
      x = M, t(2, x);
    });
  }
  return n.$$set = (M) => {
    "class" in M && t(1, s = M.class), "value" in M && t(0, r = M.value), "lang" in M && t(4, o = M.lang), "theme" in M && t(5, l = M.theme), "extensions" in M && t(6, a = M.extensions), "useTab" in M && t(7, h = M.useTab), "tabSize" in M && t(8, c = M.tabSize), "styles" in M && t(9, f = M.styles), "lineWrapping" in M && t(10, u = M.lineWrapping), "editable" in M && t(11, d = M.editable), "readonly" in M && t(12, p = M.readonly), "placeholder" in M && t(13, y = M.placeholder), "competions" in M && t(14, g = M.competions);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*useTab, tabSize, lineWrapping, placeholder, editable, readonly, lang, theme, styles, extensions*/
    16368 && t(17, i = [
      ry,
      ...we(
        // basic,
        h,
        c,
        u,
        y,
        d,
        p,
        o
      ),
      ...W(l, f),
      ...a
    ]), n.$$.dirty[0] & /*view, value*/
    65537 && v && Z(r), n.$$.dirty[0] & /*view, state_extensions*/
    196608 && v && i && _();
  }, [
    r,
    s,
    x,
    b,
    o,
    l,
    a,
    h,
    c,
    f,
    u,
    d,
    p,
    y,
    g,
    k,
    v,
    i,
    F
  ];
}
class by extends na {
  constructor(e) {
    super(), ia(
      this,
      e,
      hy,
      ay,
      ea,
      {
        class: 1,
        value: 0,
        lang: 4,
        theme: 5,
        extensions: 6,
        useTab: 7,
        tabSize: 8,
        styles: 9,
        lineWrapping: 10,
        editable: 11,
        readonly: 12,
        placeholder: 13,
        competions: 14,
        getvalue: 15
      },
      null,
      [-1, -1]
    );
  }
  get getvalue() {
    return this.$$.ctx[15];
  }
}
var Xl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xc = { exports: {} };
(function(n) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(i) {
    var s = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r = 0, o = {}, l = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: i.Prism && i.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function m(b) {
          return b instanceof a ? new a(b.type, m(b.content), b.alias) : Array.isArray(b) ? b.map(m) : b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(m) {
          return Object.prototype.toString.call(m).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(m) {
          return m.__id || Object.defineProperty(m, "__id", { value: ++r }), m.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function m(b, w) {
          w = w || {};
          var x, v;
          switch (l.util.type(b)) {
            case "Object":
              if (v = l.util.objId(b), w[v])
                return w[v];
              x = /** @type {Record<string, any>} */
              {}, w[v] = x;
              for (var C in b)
                b.hasOwnProperty(C) && (x[C] = m(b[C], w));
              return (
                /** @type {any} */
                x
              );
            case "Array":
              return v = l.util.objId(b), w[v] ? w[v] : (x = [], w[v] = x, /** @type {Array} */
              /** @type {any} */
              b.forEach(function(T, A) {
                x[A] = m(T, w);
              }), /** @type {any} */
              x);
            default:
              return b;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(m) {
          for (; m; ) {
            var b = s.exec(m.className);
            if (b)
              return b[1].toLowerCase();
            m = m.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(m, b) {
          m.className = m.className.replace(RegExp(s, "gi"), ""), m.classList.add("language-" + b);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (x) {
            var m = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack) || [])[1];
            if (m) {
              var b = document.getElementsByTagName("script");
              for (var w in b)
                if (b[w].src == m)
                  return b[w];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(m, b, w) {
          for (var x = "no-" + b; m; ) {
            var v = m.classList;
            if (v.contains(b))
              return !0;
            if (v.contains(x))
              return !1;
            m = m.parentElement;
          }
          return !!w;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: o,
        plaintext: o,
        text: o,
        txt: o,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(m, b) {
          var w = l.util.clone(l.languages[m]);
          for (var x in b)
            w[x] = b[x];
          return w;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(m, b, w, x) {
          x = x || /** @type {any} */
          l.languages;
          var v = x[m], C = {};
          for (var T in v)
            if (v.hasOwnProperty(T)) {
              if (T == b)
                for (var A in w)
                  w.hasOwnProperty(A) && (C[A] = w[A]);
              w.hasOwnProperty(T) || (C[T] = v[T]);
            }
          var B = x[m];
          return x[m] = C, l.languages.DFS(l.languages, function(I, _) {
            _ === B && I != m && (this[I] = C);
          }), C;
        },
        // Traverse a language definition with Depth First Search
        DFS: function m(b, w, x, v) {
          v = v || {};
          var C = l.util.objId;
          for (var T in b)
            if (b.hasOwnProperty(T)) {
              w.call(b, T, b[T], x || T);
              var A = b[T], B = l.util.type(A);
              B === "Object" && !v[C(A)] ? (v[C(A)] = !0, m(A, w, null, v)) : B === "Array" && !v[C(A)] && (v[C(A)] = !0, m(A, w, T, v));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(m, b) {
        l.highlightAllUnder(document, m, b);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(m, b, w) {
        var x = {
          callback: w,
          container: m,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        l.hooks.run("before-highlightall", x), x.elements = Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)), l.hooks.run("before-all-elements-highlight", x);
        for (var v = 0, C; C = x.elements[v++]; )
          l.highlightElement(C, b === !0, x.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(m, b, w) {
        var x = l.util.getLanguage(m), v = l.languages[x];
        l.util.setLanguage(m, x);
        var C = m.parentElement;
        C && C.nodeName.toLowerCase() === "pre" && l.util.setLanguage(C, x);
        var T = m.textContent, A = {
          element: m,
          language: x,
          grammar: v,
          code: T
        };
        function B(_) {
          A.highlightedCode = _, l.hooks.run("before-insert", A), A.element.innerHTML = A.highlightedCode, l.hooks.run("after-highlight", A), l.hooks.run("complete", A), w && w.call(A.element);
        }
        if (l.hooks.run("before-sanity-check", A), C = A.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !A.code) {
          l.hooks.run("complete", A), w && w.call(A.element);
          return;
        }
        if (l.hooks.run("before-highlight", A), !A.grammar) {
          B(l.util.encode(A.code));
          return;
        }
        if (b && i.Worker) {
          var I = new Worker(l.filename);
          I.onmessage = function(_) {
            B(_.data);
          }, I.postMessage(JSON.stringify({
            language: A.language,
            code: A.code,
            immediateClose: !0
          }));
        } else
          B(l.highlight(A.code, A.grammar, A.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(m, b, w) {
        var x = {
          code: m,
          grammar: b,
          language: w
        };
        if (l.hooks.run("before-tokenize", x), !x.grammar)
          throw new Error('The language "' + x.language + '" has no grammar.');
        return x.tokens = l.tokenize(x.code, x.grammar), l.hooks.run("after-tokenize", x), a.stringify(l.util.encode(x.tokens), x.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(m, b) {
        var w = b.rest;
        if (w) {
          for (var x in w)
            b[x] = w[x];
          delete b.rest;
        }
        var v = new f();
        return u(v, v.head, m), c(m, v, b, v.head, 0), p(v);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(m, b) {
          var w = l.hooks.all;
          w[m] = w[m] || [], w[m].push(b);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(m, b) {
          var w = l.hooks.all[m];
          if (!(!w || !w.length))
            for (var x = 0, v; v = w[x++]; )
              v(b);
        }
      },
      Token: a
    };
    i.Prism = l;
    function a(m, b, w, x) {
      this.type = m, this.content = b, this.alias = w, this.length = (x || "").length | 0;
    }
    a.stringify = function m(b, w) {
      if (typeof b == "string")
        return b;
      if (Array.isArray(b)) {
        var x = "";
        return b.forEach(function(B) {
          x += m(B, w);
        }), x;
      }
      var v = {
        type: b.type,
        content: m(b.content, w),
        tag: "span",
        classes: ["token", b.type],
        attributes: {},
        language: w
      }, C = b.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(v.classes, C) : v.classes.push(C)), l.hooks.run("wrap", v);
      var T = "";
      for (var A in v.attributes)
        T += " " + A + '="' + (v.attributes[A] || "").replace(/"/g, "&quot;") + '"';
      return "<" + v.tag + ' class="' + v.classes.join(" ") + '"' + T + ">" + v.content + "</" + v.tag + ">";
    };
    function h(m, b, w, x) {
      m.lastIndex = b;
      var v = m.exec(w);
      if (v && x && v[1]) {
        var C = v[1].length;
        v.index += C, v[0] = v[0].slice(C);
      }
      return v;
    }
    function c(m, b, w, x, v, C) {
      for (var T in w)
        if (!(!w.hasOwnProperty(T) || !w[T])) {
          var A = w[T];
          A = Array.isArray(A) ? A : [A];
          for (var B = 0; B < A.length; ++B) {
            if (C && C.cause == T + "," + B)
              return;
            var I = A[B], _ = I.inside, Z = !!I.lookbehind, ne = !!I.greedy, Q = I.alias;
            if (ne && !I.pattern.global) {
              var ee = I.pattern.toString().match(/[imsuy]*$/)[0];
              I.pattern = RegExp(I.pattern.source, ee + "g");
            }
            for (var we = I.pattern || I, W = x.next, F = v; W !== b.tail && !(C && F >= C.reach); F += W.value.length, W = W.next) {
              var M = W.value;
              if (b.length > m.length)
                return;
              if (!(M instanceof a)) {
                var U = 1, K;
                if (ne) {
                  if (K = h(we, F, m, Z), !K || K.index >= m.length)
                    break;
                  var _e = K.index, Se = K.index + K[0].length, Ce = F;
                  for (Ce += W.value.length; _e >= Ce; )
                    W = W.next, Ce += W.value.length;
                  if (Ce -= W.value.length, F = Ce, W.value instanceof a)
                    continue;
                  for (var nt = W; nt !== b.tail && (Ce < Se || typeof nt.value == "string"); nt = nt.next)
                    U++, Ce += nt.value.length;
                  U--, M = m.slice(F, Ce), K.index -= F;
                } else if (K = h(we, 0, M, Z), !K)
                  continue;
                var _e = K.index, De = K[0], li = M.slice(0, _e), fo = M.slice(_e + De.length), us = F + M.length;
                C && us > C.reach && (C.reach = us);
                var Gi = W.prev;
                li && (Gi = u(b, Gi, li), F += li.length), d(b, Gi, U);
                var Zc = new a(T, _ ? l.tokenize(De, _) : De, Q, De);
                if (W = u(b, Gi, Zc), fo && u(b, W, fo), U > 1) {
                  var ds = {
                    cause: T + "," + B,
                    reach: us
                  };
                  c(m, b, w, W.prev, F, ds), C && ds.reach > C.reach && (C.reach = ds.reach);
                }
              }
            }
          }
        }
    }
    function f() {
      var m = { value: null, prev: null, next: null }, b = { value: null, prev: m, next: null };
      m.next = b, this.head = m, this.tail = b, this.length = 0;
    }
    function u(m, b, w) {
      var x = b.next, v = { value: w, prev: b, next: x };
      return b.next = v, x.prev = v, m.length++, v;
    }
    function d(m, b, w) {
      for (var x = b.next, v = 0; v < w && x !== m.tail; v++)
        x = x.next;
      b.next = x, x.prev = b, m.length -= v;
    }
    function p(m) {
      for (var b = [], w = m.head.next; w !== m.tail; )
        b.push(w.value), w = w.next;
      return b;
    }
    if (!i.document)
      return i.addEventListener && (l.disableWorkerMessageHandler || i.addEventListener("message", function(m) {
        var b = JSON.parse(m.data), w = b.language, x = b.code, v = b.immediateClose;
        i.postMessage(l.highlight(x, l.languages[w], w)), v && i.close();
      }, !1)), l;
    var y = l.util.currentScript();
    y && (l.filename = y.src, y.hasAttribute("data-manual") && (l.manual = !0));
    function g() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var k = document.readyState;
      k === "loading" || k === "interactive" && y && y.defer ? document.addEventListener("DOMContentLoaded", g) : window.requestAnimationFrame ? window.requestAnimationFrame(g) : window.setTimeout(g, 16);
    }
    return l;
  }(e);
  n.exports && (n.exports = t), typeof Xl < "u" && (Xl.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(i) {
    i.type === "entity" && (i.attributes.title = i.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(s, r) {
      var o = {};
      o["language-" + r] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[r]
      }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var l = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: o
        }
      };
      l["language-" + r] = {
        pattern: /[\s\S]+/,
        inside: t.languages[r]
      };
      var a = {};
      a[s] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return s;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: l
      }, t.languages.insertBefore("markup", "cdata", a);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(i, s) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + i + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [s, "language-" + s],
                inside: t.languages[s]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(i) {
    var s = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    i.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + s.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + s.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + s.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + s.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: s,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, i.languages.css.atrule.inside.rest = i.languages.css;
    var r = i.languages.markup;
    r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var i = "Loading…", s = function(y, g) {
      return "✖ Error " + y + " while fetching file: " + g;
    }, r = "✖ Error: File does not exist or is empty", o = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, l = "data-src-status", a = "loading", h = "loaded", c = "failed", f = "pre[data-src]:not([" + l + '="' + h + '"]):not([' + l + '="' + a + '"])';
    function u(y, g, k) {
      var m = new XMLHttpRequest();
      m.open("GET", y, !0), m.onreadystatechange = function() {
        m.readyState == 4 && (m.status < 400 && m.responseText ? g(m.responseText) : m.status >= 400 ? k(s(m.status, m.statusText)) : k(r));
      }, m.send(null);
    }
    function d(y) {
      var g = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y || "");
      if (g) {
        var k = Number(g[1]), m = g[2], b = g[3];
        return m ? b ? [k, Number(b)] : [k, void 0] : [k, k];
      }
    }
    t.hooks.add("before-highlightall", function(y) {
      y.selector += ", " + f;
    }), t.hooks.add("before-sanity-check", function(y) {
      var g = (
        /** @type {HTMLPreElement} */
        y.element
      );
      if (g.matches(f)) {
        y.code = "", g.setAttribute(l, a);
        var k = g.appendChild(document.createElement("CODE"));
        k.textContent = i;
        var m = g.getAttribute("data-src"), b = y.language;
        if (b === "none") {
          var w = (/\.(\w+)$/.exec(m) || [, "none"])[1];
          b = o[w] || w;
        }
        t.util.setLanguage(k, b), t.util.setLanguage(g, b);
        var x = t.plugins.autoloader;
        x && x.loadLanguages(b), u(
          m,
          function(v) {
            g.setAttribute(l, h);
            var C = d(g.getAttribute("data-range"));
            if (C) {
              var T = v.split(/\r\n?|\n/g), A = C[0], B = C[1] == null ? T.length : C[1];
              A < 0 && (A += T.length), A = Math.max(0, Math.min(A - 1, T.length)), B < 0 && (B += T.length), B = Math.max(0, Math.min(B, T.length)), v = T.slice(A, B).join(`
`), g.hasAttribute("data-start") || g.setAttribute("data-start", String(A + 1));
            }
            k.textContent = v, t.highlightElement(k);
          },
          function(v) {
            g.setAttribute(l, c), k.textContent = v;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(g) {
        for (var k = (g || document).querySelectorAll(f), m = 0, b; b = k[m++]; )
          t.highlightElement(b);
      }
    };
    var p = !1;
    t.fileHighlight = function() {
      p || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), p = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Xc);
var fy = Xc.exports;
const di = /* @__PURE__ */ cy(fy);
var uy = { exports: {} };
(function(n) {
  (function() {
    if (typeof Prism > "u")
      return;
    var e = Object.assign || function(o, l) {
      for (var a in l)
        l.hasOwnProperty(a) && (o[a] = l[a]);
      return o;
    };
    function t(o) {
      this.defaults = e({}, o);
    }
    function i(o) {
      return o.replace(/-(\w)/g, function(l, a) {
        return a.toUpperCase();
      });
    }
    function s(o) {
      for (var l = 0, a = 0; a < o.length; ++a)
        o.charCodeAt(a) == "	".charCodeAt(0) && (l += 3);
      return o.length + l;
    }
    var r = {
      "remove-trailing": "boolean",
      "remove-indent": "boolean",
      "left-trim": "boolean",
      "right-trim": "boolean",
      "break-lines": "number",
      indent: "number",
      "remove-initial-line-feed": "boolean",
      "tabs-to-spaces": "number",
      "spaces-to-tabs": "number"
    };
    t.prototype = {
      setDefaults: function(o) {
        this.defaults = e(this.defaults, o);
      },
      normalize: function(o, l) {
        l = e(this.defaults, l);
        for (var a in l) {
          var h = i(a);
          a !== "normalize" && h !== "setDefaults" && l[a] && this[h] && (o = this[h].call(this, o, l[a]));
        }
        return o;
      },
      /*
       * Normalization methods
       */
      leftTrim: function(o) {
        return o.replace(/^\s+/, "");
      },
      rightTrim: function(o) {
        return o.replace(/\s+$/, "");
      },
      tabsToSpaces: function(o, l) {
        return l = l | 0 || 4, o.replace(/\t/g, new Array(++l).join(" "));
      },
      spacesToTabs: function(o, l) {
        return l = l | 0 || 4, o.replace(RegExp(" {" + l + "}", "g"), "	");
      },
      removeTrailing: function(o) {
        return o.replace(/\s*?$/gm, "");
      },
      // Support for deprecated plugin remove-initial-line-feed
      removeInitialLineFeed: function(o) {
        return o.replace(/^(?:\r?\n|\r)/, "");
      },
      removeIndent: function(o) {
        var l = o.match(/^[^\S\n\r]*(?=\S)/gm);
        return !l || !l[0].length || (l.sort(function(a, h) {
          return a.length - h.length;
        }), !l[0].length) ? o : o.replace(RegExp("^" + l[0], "gm"), "");
      },
      indent: function(o, l) {
        return o.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++l).join("	") + "$&");
      },
      breakLines: function(o, l) {
        l = l === !0 ? 80 : l | 0 || 80;
        for (var a = o.split(`
`), h = 0; h < a.length; ++h)
          if (!(s(a[h]) <= l)) {
            for (var c = a[h].split(/(\s+)/g), f = 0, u = 0; u < c.length; ++u) {
              var d = s(c[u]);
              f += d, f > l && (c[u] = `
` + c[u], f = d);
            }
            a[h] = c.join("");
          }
        return a.join(`
`);
      }
    }, n.exports && (n.exports = t), Prism.plugins.NormalizeWhitespace = new t({
      "remove-trailing": !0,
      "remove-indent": !0,
      "left-trim": !0,
      "right-trim": !0
      /*'break-lines': 80,
      'indent': 2,
      'remove-initial-line-feed': false,
      'tabs-to-spaces': 4,
      'spaces-to-tabs': 4*/
    }), Prism.hooks.add("before-sanity-check", function(o) {
      var l = Prism.plugins.NormalizeWhitespace;
      if (!(o.settings && o.settings["whitespace-normalization"] === !1) && Prism.util.isActive(o.element, "whitespace-normalization", !0)) {
        if ((!o.element || !o.element.parentNode) && o.code) {
          o.code = l.normalize(o.code, o.settings);
          return;
        }
        var a = o.element.parentNode;
        if (!(!o.code || !a || a.nodeName.toLowerCase() !== "pre")) {
          o.settings == null && (o.settings = {});
          for (var h in r)
            if (Object.hasOwnProperty.call(r, h)) {
              var c = r[h];
              if (a.hasAttribute("data-" + h))
                try {
                  var f = JSON.parse(a.getAttribute("data-" + h) || "true");
                  typeof f === c && (o.settings[h] = f);
                } catch {
                }
            }
          for (var u = a.childNodes, d = "", p = "", y = !1, g = 0; g < u.length; ++g) {
            var k = u[g];
            k == o.element ? y = !0 : k.nodeName === "#text" && (y ? p += k.nodeValue : d += k.nodeValue, a.removeChild(k), --g);
          }
          if (!o.element.children.length || !Prism.plugins.KeepMarkup)
            o.code = d + o.code + p, o.code = l.normalize(o.code, o.settings);
          else {
            var m = d + o.element.innerHTML + p;
            o.element.innerHTML = l.normalize(m, o.settings), o.code = o.element.textContent;
          }
        }
      }
    });
  })();
})(uy);
(function(n) {
  var e = [
    /\b(?:async|sync|yield)\*/,
    /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/
  ], t = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, i = {
    pattern: RegExp(t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      }
    }
  };
  n.languages.dart = n.languages.extend("clike", {
    "class-name": [
      i,
      {
        // variables and parameters
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(t + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
        lookbehind: !0,
        inside: i.inside
      }
    ],
    keyword: e,
    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
  }), n.languages.insertBefore("dart", "string", {
    "string-literal": {
      pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
          lookbehind: !0,
          inside: {
            punctuation: /^\$\{?|\}$/,
            expression: {
              pattern: /[\s\S]+/,
              inside: n.languages.dart
            }
          }
        },
        string: /[\s\S]+/
      }
    },
    string: void 0
  }), n.languages.insertBefore("dart", "class-name", {
    metadata: {
      pattern: /@\w+/,
      alias: "function"
    }
  }), n.languages.insertBefore("dart", "class-name", {
    generics: {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {
        "class-name": i,
        keyword: e,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    }
  });
})(Prism);
function dy(n) {
  let e, t, i;
  return {
    c() {
      e = Kt("div"), t = Kt("code"), st(t, "class", "svelte-1p4o0ak"), st(e, "class", i = "code-wrapper prism-light " + /*classes*/
      n[0]);
    },
    m(s, r) {
      Jn(s, e, r), pi(e, t), t.innerHTML = /*formattedContent*/
      n[1];
    },
    p(s, [r]) {
      r & /*formattedContent*/
      2 && (t.innerHTML = /*formattedContent*/
      s[1]), r & /*classes*/
      1 && i !== (i = "code-wrapper prism-light " + /*classes*/
      s[0]) && st(e, "class", i);
    },
    i: Rt,
    o: Rt,
    d(s) {
      s && zi(e);
    }
  };
}
function py(n, e, t) {
  let { class: i = "" } = e, { content: s = "" } = e, { language: r = "javascript" } = e, o = "";
  function l(a) {
    return a = typeof a == "string" ? a : "", a = di.plugins.NormalizeWhitespace.normalize(a, {
      "remove-trailing": !0,
      "remove-indent": !0,
      "left-trim": !0,
      "right-trim": !0
    }), di.highlight(a, di.languages[r] || di.languages.javascript, r);
  }
  return n.$$set = (a) => {
    "class" in a && t(0, i = a.class), "content" in a && t(2, s = a.content), "language" in a && t(3, r = a.language);
  }, n.$$.update = () => {
    n.$$.dirty & /*content*/
    4 && typeof di < "u" && s && t(1, o = l(s));
  }, [i, o, s, r];
}
class wy extends na {
  constructor(e) {
    super(), ia(this, e, py, dy, ea, { class: 0, content: 2, language: 3 });
  }
}
export {
  wy as CodeBlock,
  by as CodeEditor
};
