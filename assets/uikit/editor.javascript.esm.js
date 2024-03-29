var Hf = Object.defineProperty;
var Jf = (n, e, t) => e in n ? Hf(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var xs = (n, e, t) => (Jf(n, typeof e != "symbol" ? e + "" : e, t), t);
function vi() {
}
function Xa(n) {
  return n();
}
function Ao() {
  return /* @__PURE__ */ Object.create(null);
}
function ls(n) {
  n.forEach(Xa);
}
function Ra(n) {
  return typeof n == "function";
}
function Kf(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function eu(n) {
  return Object.keys(n).length === 0;
}
function Ki(n, e) {
  n.appendChild(e);
}
function Gr(n, e, t) {
  n.insertBefore(e, t || null);
}
function as(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function wn(n) {
  return document.createElement(n);
}
function Fr(n) {
  return document.createTextNode(n);
}
function tu() {
  return Fr(" ");
}
function iu() {
  return Fr("");
}
function jt(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function nu(n) {
  return Array.from(n.childNodes);
}
function su(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function ru(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
let Pi;
function xi(n) {
  Pi = n;
}
function Hr() {
  if (!Pi)
    throw new Error("Function called outside component initialization");
  return Pi;
}
function ou(n) {
  Hr().$$.on_mount.push(n);
}
function lu(n) {
  Hr().$$.on_destroy.push(n);
}
function au() {
  const n = Hr();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const r = ru(
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
const Ut = [], Hs = [];
let Vt = [];
const Xo = [], hu = /* @__PURE__ */ Promise.resolve();
let Js = !1;
function cu() {
  Js || (Js = !0, hu.then(Ma));
}
function Ks(n) {
  Vt.push(n);
}
const ws = /* @__PURE__ */ new Set();
let _t = 0;
function Ma() {
  if (_t !== 0)
    return;
  const n = Pi;
  do {
    try {
      for (; _t < Ut.length; ) {
        const e = Ut[_t];
        _t++, xi(e), fu(e.$$);
      }
    } catch (e) {
      throw Ut.length = 0, _t = 0, e;
    }
    for (xi(null), Ut.length = 0, _t = 0; Hs.length; )
      Hs.pop()();
    for (let e = 0; e < Vt.length; e += 1) {
      const t = Vt[e];
      ws.has(t) || (ws.add(t), t());
    }
    Vt.length = 0;
  } while (Ut.length);
  for (; Xo.length; )
    Xo.pop()();
  Js = !1, ws.clear(), xi(n);
}
function fu(n) {
  if (n.fragment !== null) {
    n.update(), ls(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ks);
  }
}
function uu(n) {
  const e = [], t = [];
  Vt.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Vt = e;
}
const du = /* @__PURE__ */ new Set();
function Ou(n, e) {
  n && n.i && (du.delete(n), n.i(e));
}
function pu(n, e, t) {
  const { fragment: i, after_update: s } = n.$$;
  i && i.m(e, t), Ks(() => {
    const r = n.$$.on_mount.map(Xa).filter(Ra);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : ls(r), n.$$.on_mount = [];
  }), s.forEach(Ks);
}
function gu(n, e) {
  const t = n.$$;
  t.fragment !== null && (uu(t.after_update), ls(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function mu(n, e) {
  n.$$.dirty[0] === -1 && (Ut.push(n), cu(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Su(n, e, t, i, s, r, o, l = [-1]) {
  const a = Pi;
  xi(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: vi,
    not_equal: s,
    bound: Ao(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Ao(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(h.root);
  let c = !1;
  if (h.ctx = t ? t(n, e.props || {}, (f, u, ...d) => {
    const O = d.length ? d[0] : u;
    return h.ctx && s(h.ctx[f], h.ctx[f] = O) && (!h.skip_bound && h.bound[f] && h.bound[f](O), c && mu(n, f)), u;
  }) : [], h.update(), c = !0, ls(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = nu(e.target);
      h.fragment && h.fragment.l(f), f.forEach(as);
    } else
      h.fragment && h.fragment.c();
    e.intro && Ou(n.$$.fragment), pu(n, e.target, e.anchor), Ma();
  }
  xi(a);
}
class bu {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    xs(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    xs(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    gu(this, 1), this.$destroy = vi;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ra(t))
      return vi;
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
    this.$$set && !eu(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const yu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(yu);
class _ {
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
    ), Ne.from(s, this.length - (t - e) + i.length);
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
    return this.decompose(e, t, i, 0), Ne.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new wi(this), r = new wi(e);
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
    return new wi(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Wa(this, e, t);
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
    return new Da(i);
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
    return e.length == 1 && !e[0] ? _.empty : e.length <= 32 ? new H(e) : Ne.from(H.split(e, []));
  }
}
class H extends _ {
  constructor(e, t = xu(e)) {
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
        return new wu(s, l, i, o);
      s = l + 1, i++;
    }
  }
  decompose(e, t, i, s) {
    let r = e <= 0 && t >= this.length ? this : new H(Ro(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop(), l = Qn(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new H(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new H(l.slice(0, a)), new H(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof H))
      return super.replace(e, t, i);
    let s = Qn(this.text, Qn(i.text, Ro(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return s.length <= 32 ? new H(s, r) : Ne.from(H.split(s, []), r);
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
      i.push(r), s += r.length + 1, i.length == 32 && (t.push(new H(i, s)), i = [], s = -1);
    return s > -1 && t.push(new H(i, s)), t;
  }
}
class Ne extends _ {
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
            return c[s] = a, new Ne(c, this.length - (t - e) + i.length);
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
    if (!(e instanceof Ne))
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
      for (let O of e)
        O.flatten(d);
      return new H(d, t);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let O;
      if (d.lines > r && d instanceof Ne)
        for (let m of d.children)
          f(m);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof H && a && (O = c[c.length - 1]) instanceof H && d.lines + O.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new H(O.text.concat(d.text), O.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : Ne.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new Ne(l, t);
  }
}
_.empty = /* @__PURE__ */ new H([""], 0);
function xu(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function Qn(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
    let l = n[r], a = s + l.length;
    a >= t && (a > i && (l = l.slice(0, i - s)), s < t && (l = l.slice(t - s)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), s = a + 1;
  }
  return e;
}
function Ro(n, e, t) {
  return Qn(n, [""], e, t);
}
class wi {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof H ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, l = s instanceof H ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof H) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof H ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Wa {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new wi(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
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
class Da {
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
typeof Symbol < "u" && (_.prototype[Symbol.iterator] = function() {
  return this.iter();
}, wi.prototype[Symbol.iterator] = Wa.prototype[Symbol.iterator] = Da.prototype[Symbol.iterator] = function() {
  return this;
});
class wu {
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
let Nt = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((n) => n ? parseInt(n, 36) : 1);
for (let n = 1; n < Nt.length; n++)
  Nt[n] += Nt[n - 1];
function Qu(n) {
  for (let e = 1; e < Nt.length; e += 2)
    if (Nt[e] > n)
      return Nt[e - 1] <= n;
  return !1;
}
function Mo(n) {
  return n >= 127462 && n <= 127487;
}
const Wo = 8205;
function me(n, e, t = !0, i = !0) {
  return (t ? _a : ku)(n, e, i);
}
function _a(n, e, t) {
  if (e == n.length)
    return e;
  e && Ea(n.charCodeAt(e)) && Ua(n.charCodeAt(e - 1)) && e--;
  let i = ce(n, e);
  for (e += Ae(i); e < n.length; ) {
    let s = ce(n, e);
    if (i == Wo || s == Wo || t && Qu(s))
      e += Ae(s), i = s;
    else if (Mo(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && Mo(ce(n, o)); )
        r++, o -= 2;
      if (r % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function ku(n, e, t) {
  for (; e > 0; ) {
    let i = _a(n, e - 2, t);
    if (i < e)
      return i;
    e--;
  }
  return 0;
}
function Ea(n) {
  return n >= 56320 && n < 57344;
}
function Ua(n) {
  return n >= 55296 && n < 56320;
}
function ce(n, e) {
  let t = n.charCodeAt(e);
  if (!Ua(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return Ea(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Jr(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function Ae(n) {
  return n < 65536 ? 1 : 2;
}
const er = /\r\n?|\n/;
var ue = /* @__PURE__ */ function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
}(ue || (ue = {}));
class Ke {
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
    tr(this, e, t);
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
    return new Ke(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Ba(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `other` happened before the ones in `this`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : ir(this, e, t);
  }
  mapPos(e, t = -1, i = ue.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = s + l;
      if (a < 0) {
        if (h > e)
          return r + (e - s);
        r += l;
      } else {
        if (i != ue.Simple && h >= e && (i == ue.TrackDel && s < e && h > e || i == ue.TrackBefore && s < e || i == ue.TrackAfter && h > e))
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
    return new Ke(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new Ke(e);
  }
}
class ne extends Ke {
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
    return tr(this, (t, i, s, r, o) => e = e.replace(s, s + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return ir(this, e, t, !0);
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
          i.push(_.empty);
        i.push(o ? e.slice(r, r + o) : _.empty);
      }
      r += o;
    }
    return new ne(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Ba(this, e, !0);
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
    return e.empty ? this : ir(this, e, t, !0);
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
    tr(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Ke.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], s = [], r = new Zi(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let a = o == e.length ? 1e9 : e[o++];
        for (; l < a || l == a && r.len == 0; ) {
          if (r.done)
            break e;
          let c = Math.min(r.len, a - l);
          Oe(s, c, -1);
          let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
          Oe(t, c, f), f > 0 && Ot(i, t, r.text), r.forward(c), l += c;
        }
        let h = e[o++];
        for (; l < h; ) {
          if (r.done)
            break e;
          let c = Math.min(r.len, h - l);
          Oe(t, c, -1), Oe(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
        }
      }
    return {
      changes: new ne(t, i),
      filtered: Ke.create(s)
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
      o < t && Oe(s, t - o, -1);
      let f = new ne(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof ne) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let O = d ? typeof d == "string" ? _.of(d.split(i || er)) : d : _.empty, m = O.length;
        if (f == u && m == 0)
          return;
        f < o && a(), f > o && Oe(s, f - o, -1), Oe(s, u - f, m), Ot(r, s, O), o = u;
      }
    }
    return h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new ne(e ? [e, -1] : [], []);
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
            i.push(_.empty);
          i[s] = _.of(r.slice(1)), t.push(r[0], i[s].length);
        }
      }
    }
    return new ne(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new ne(e, t);
  }
}
function Oe(n, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let s = n.length - 2;
  s >= 0 && t <= 0 && t == n[s + 1] ? n[s] += e : e == 0 && n[s] == 0 ? n[s + 1] += t : i ? (n[s] += e, n[s + 1] += t) : n.push(e, t);
}
function Ot(n, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; )
      n.push(_.empty);
    n.push(t);
  }
}
function tr(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++], a = n.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let h = s, c = r, f = _.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(t || o == n.sections.length || n.sections[o + 1] < 0); )
        l = n.sections[o++], a = n.sections[o++];
      e(s, h, r, c, f), s = h, r = c;
    }
  }
}
function ir(n, e, t, i = !1) {
  let s = [], r = i ? [] : null, o = new Zi(n), l = new Zi(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      Oe(s, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (Oe(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (Oe(s, 0, o.ins), r && Ot(r, s, o.text), a = o.i), o.forward(c), h -= c;
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
      Oe(s, h, a < o.i ? o.ins : 0), r && a < o.i && Ot(r, s, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? ne.createSet(s, r) : Ke.create(s);
      throw new Error("Mismatched change set lengths");
    }
}
function Ba(n, e, t = !1) {
  let i = [], s = t ? [] : null, r = new Zi(n), o = new Zi(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? ne.createSet(i, s) : Ke.create(i);
    if (r.ins == 0)
      Oe(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      Oe(i, 0, o.ins, l), s && Ot(s, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Oe(i, a, c, l), s && c && Ot(s, i, o.text);
        } else
          o.ins == -1 ? (Oe(i, r.off ? 0 : r.len, a, l), s && Ot(s, i, r.textBit(a))) : (Oe(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && Ot(s, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Zi {
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
    return t >= e.length ? _.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? _.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Ct {
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
    return this.empty ? i = s = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new Ct(i, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return b.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return b.range(this.anchor, i);
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
    return b.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Ct(e, t, i);
  }
}
class b {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : b.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
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
    return this.ranges.length == 1 ? this : new b([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return b.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, b.create(i, this.mainIndex);
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
    return new b(e.ranges.map((t) => Ct.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new b([b.range(e, t)], 0);
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
        return b.normalized(e.slice(), t);
      i = r.to;
    }
    return new b(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, s) {
    return Ct.create(e, e, (t == 0 ? 0 : t < 0 ? 4 : 8) | (i == null ? 3 : Math.min(2, i)) | (s ?? 33554431) << 5);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, s) {
    let r = (i ?? 33554431) << 5 | (s == null ? 3 : Math.min(2, s));
    return t < e ? Ct.create(t, e, 24 | r) : Ct.create(e, t, (t > e ? 4 : 0) | r);
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
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? b.range(a, l) : b.range(l, a));
      }
    }
    return new b(e, t);
  }
}
function Ia(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Kr = 0;
class P {
  constructor(e, t, i, s, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = s, this.id = Kr++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new P(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : eo), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new kn([], this, 0, e);
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
    return new kn(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new kn(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function eo(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class kn {
  constructor(e, t, i, s) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = s, this.id = Kr++;
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
        if (a && u.docChanged || h && (u.docChanged || u.selection) || nr(f, c)) {
          let d = i(f);
          if (l ? !Do(d, f.values[o], s) : !s(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, O = u.config.address[r];
        if (O != null) {
          let m = Mn(u, O);
          if (this.dependencies.every((g) => g instanceof P ? u.facet(g) === f.facet(g) : g instanceof ae ? u.field(g, !1) == f.field(g, !1) : !0) || (l ? Do(d = i(f), m, s) : s(d = i(f), m)))
            return f.values[o] = m, 0;
        } else
          d = i(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function Do(n, e, t) {
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function nr(n, e) {
  let t = !1;
  for (let i of e)
    Qi(n, i) & 1 && (t = !0);
  return t;
}
function $u(n, e, t) {
  let i = t.map((a) => n[a.id]), s = t.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Mn(a, i[c]);
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
        Qi(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!nr(a, r))
        return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = nr(a, i), f = h.config.facets[e.id], u = h.facet(e);
      if (f && !c && eo(t, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const _o = /* @__PURE__ */ P.define({ static: !0 });
class ae {
  constructor(e, t, i, s, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ae(Kr++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(_o).find((i) => i.field == this);
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
    return [this, _o.of({ field: this, create: e })];
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
const Pt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function hi(n) {
  return (e) => new ja(e, n);
}
const Wt = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ hi(Pt.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ hi(Pt.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ hi(Pt.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ hi(Pt.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ hi(Pt.lowest)
};
class ja {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class hs {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new sr(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return hs.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class sr {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Rn {
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
    for (let u of vu(e, t, o))
      u instanceof ae ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of s)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], O = d[0].facet, m = c && c[u] || [];
      if (d.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[O.id] = a.length << 1 | 1, eo(m, d))
          a.push(i.facet(O));
        else {
          let g = O.combine(d.map((S) => S.value));
          a.push(i && O.compare(g, i.facet(O)) ? i.facet(O) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = h.length << 1, h.push((S) => g.dynamicSlot(S)));
        l[O.id] = h.length << 1, h.push((g) => $u(g, O, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Rn(e, o, f, l, a, r);
  }
}
function vu(n, e, t) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof sr && t.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof sr) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof ja)
      r(o.inner, o.prec);
    else if (o instanceof ae)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof kn)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, Pt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(n, Pt.default), i.reduce((o, l) => o.concat(l));
}
function Qi(n, e) {
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
function Mn(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const La = /* @__PURE__ */ P.define(), qa = /* @__PURE__ */ P.define({
  combine: (n) => n.some((e) => e),
  static: !0
}), za = /* @__PURE__ */ P.define({
  combine: (n) => n.length ? n[0] : void 0,
  static: !0
}), Va = /* @__PURE__ */ P.define(), Na = /* @__PURE__ */ P.define(), Ga = /* @__PURE__ */ P.define(), Fa = /* @__PURE__ */ P.define({
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
    return new Pu();
  }
}
class Pu {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new ht(this, e);
  }
}
class Zu {
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
    return new A(this, e);
  }
}
class A {
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
    return t === void 0 ? void 0 : t == this.value ? this : new A(this.type, t);
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
    return new Zu(e.map || ((t) => t));
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
A.reconfigure = /* @__PURE__ */ A.define();
A.appendConfig = /* @__PURE__ */ A.define();
class re {
  constructor(e, t, i, s, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Ia(i, t.newLength), r.some((l) => l.type == re.time) || (this.annotations = r.concat(re.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, s, r, o) {
    return new re(e, t, i, s, r, o);
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
    let t = this.annotation(re.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
re.time = /* @__PURE__ */ ht.define();
re.userEvent = /* @__PURE__ */ ht.define();
re.addToHistory = /* @__PURE__ */ ht.define();
re.remote = /* @__PURE__ */ ht.define();
function Cu(n, e) {
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
function Ha(n, e, t) {
  var i;
  let s, r, o;
  return t ? (s = e.changes, r = ne.empty(e.changes.length), o = n.changes.compose(e.changes)) : (s = e.changes.map(n.changes), r = n.changes.mapDesc(e.changes, !0), o = n.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: A.mapEffects(n.effects, s).concat(A.mapEffects(e.effects, r)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function rr(n, e, t) {
  let i = e.selection, s = Gt(e.annotations);
  return e.userEvent && (s = s.concat(re.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof ne ? e.changes : ne.of(e.changes || [], t, n.facet(za)),
    selection: i && (i instanceof b ? i : b.single(i.anchor, i.head)),
    effects: Gt(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Ja(n, e, t) {
  let i = rr(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = Ha(i, rr(n, e[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = re.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Yu(t ? Tu(s) : s);
}
function Tu(n) {
  let e = n.startState, t = !0;
  for (let s of e.facet(Va)) {
    let r = s(n);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : Cu(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = n.changes.invertedDesc, s = ne.empty(e.doc.length);
    else {
      let o = n.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = re.create(e, s, n.selection && n.selection.map(r), A.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Na);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof re ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof re ? n = r[0] : n = Ja(e, Gt(r), !1);
  }
  return n;
}
function Yu(n) {
  let e = n.startState, t = e.facet(Ga), i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    r && Object.keys(r).length && (i = Ha(i, rr(e, r, n.changes.newLength), !0));
  }
  return i == n ? n : re.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Au = [];
function Gt(n) {
  return n == null ? Au : Array.isArray(n) ? n : [n];
}
var V = /* @__PURE__ */ function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
}(V || (V = {}));
const Xu = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let or;
try {
  or = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Ru(n) {
  if (or)
    return or.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Xu.test(t)))
      return !0;
  }
  return !1;
}
function Mu(n) {
  return (e) => {
    if (!/\S/.test(e))
      return V.Space;
    if (Ru(e))
      return V.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return V.Word;
    return V.Other;
  };
}
class D {
  constructor(e, t, i, s, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Qi(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Qi(this, i), Mn(this, i);
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
    return Ja(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: s } = t;
    for (let o of e.effects)
      o.is(hs.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((l, a) => s.set(a, l)), t = null), s.set(o.value.compartment, o.value.extension)) : o.is(A.reconfigure) ? (t = null, i = o.value) : o.is(A.appendConfig) && (t = null, i = Gt(i).concat(o.value));
    let r;
    t ? r = e.startState.values.slice() : (t = Rn.resolve(i, s, this), r = new D(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values), new D(t, e.newDoc, e.newSelection, r, (o, l) => l.update(o, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: b.cursor(t.from + e.length)
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
      r.push(a.range.map(f)), s = s.compose(c), o = A.mapEffects(o, c).concat(A.mapEffects(Gt(a.effects), f));
    }
    return {
      changes: s,
      selection: b.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof ne ? e : ne.of(e, this.doc.length, this.facet(D.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return _.of(e.split(this.facet(D.lineSeparator) || er));
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
    return t == null ? e.default : (Qi(this, t), Mn(this, t));
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
        s instanceof ae && this.config.address[s.id] != null && (t[i] = s.spec.toJSON(this.field(e[i]), this));
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
    return D.create({
      doc: e.doc,
      selection: b.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = Rn.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof _ ? e.doc : _.of((e.doc || "").split(t.staticFacet(D.lineSeparator) || er)), s = e.selection ? e.selection instanceof b ? e.selection : b.single(e.selection.anchor, e.selection.head) : b.single(0);
    return Ia(s, i.length), t.staticFacet(qa) || (s = s.asSingle()), new D(t, i, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(D.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(D.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Fa);
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
    for (let i of this.facet(D.phrases))
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
    for (let r of this.facet(La))
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
    return Mu(this.languageDataAt("wordChars", e).join(""));
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
      let a = me(t, o, !1);
      if (r(t.slice(a, o)) != V.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = me(t, l);
      if (r(t.slice(l, a)) != V.Word)
        break;
      l = a;
    }
    return o == l ? null : b.range(o + i, l + i);
  }
}
D.allowMultipleSelections = qa;
D.tabSize = /* @__PURE__ */ P.define({
  combine: (n) => n.length ? n[0] : 4
});
D.lineSeparator = za;
D.readOnly = Fa;
D.phrases = /* @__PURE__ */ P.define({
  compare(n, e) {
    let t = Object.keys(n), i = Object.keys(e);
    return t.length == i.length && t.every((s) => n[s] == e[s]);
  }
});
D.languageData = La;
D.changeFilter = Va;
D.transactionFilter = Na;
D.transactionExtender = Ga;
hs.reconfigure = /* @__PURE__ */ A.define();
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
class Xt {
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
    return lr.create(e, t, this);
  }
}
Xt.prototype.startSide = Xt.prototype.endSide = 0;
Xt.prototype.point = !1;
Xt.prototype.mapMode = ue.TrackDel;
let lr = class Ka {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Ka(e, t, i);
  }
};
function ar(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class to {
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
        let O = t.mapPos(c, h.startSide, h.mapMode);
        if (O == null || (u = d = O, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(c, h.startSide), d = t.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), s.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new to(s, r, i, l) : null, pos: o };
  }
}
class U {
  constructor(e, t, i, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, i, s) {
    return new U(e, t, i, s);
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
    if (i && (t = t.slice().sort(ar)), this.isEmpty)
      return t.length ? U.of(t) : this;
    let l = new eh(this, null, -1).goto(0), a = 0, h = [], c = new yt();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(lr.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? U.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r }));
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
    return t.length == 0 ? r : new U(i, t, r || U.empty, s);
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
    return Ci.from([this]).goto(e);
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
    return Ci.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = Eo(o, l, i), h = new ci(o, a, r), c = new ci(l, a, r);
    i.iterGaps((f, u, d) => Uo(h, f, c, u, d, s)), i.empty && i.length == 0 && Uo(h, 0, c, 0, 0, s);
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
    let l = Eo(r, o), a = new ci(r, l, 0).goto(i), h = new ci(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !hr(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
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
    let o = new ci(e, null, r).goto(t), l = t, a = o.openStart;
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
    let i = new yt();
    for (let s of e instanceof lr ? [e] : t ? Wu(e) : e)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
}
U.empty = /* @__PURE__ */ new U([], [], null, -1);
function Wu(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (ar(e, i) > 0)
        return n.slice().sort(ar);
      e = i;
    }
  return n;
}
U.empty.nextLayer = U.empty;
class yt {
  finishChunk(e) {
    this.chunks.push(new to(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new yt())).add(e, t, i);
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
    return this.finishInner(U.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = U.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function Eo(n, e, t) {
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
class eh {
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
class Ci {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && s.push(new eh(o, t, i, r));
    return s.length == 1 ? s[0] : new Ci(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Qs(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Qs(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Qs(this.heap, 0);
    }
  }
}
function Qs(n, e) {
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
class ci {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ci.from(e, t, i);
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
    en(this.active, e), en(this.activeTo, e), en(this.activeRank, e), this.minActive = Bo(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && this.activeRank[t] <= r; )
      t++;
    tn(this.active, t, i), tn(this.activeTo, t, s), tn(this.activeRank, t, r), e && tn(e, t, this.cursor.from), this.minActive = Bo(this.active, this.activeTo);
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
        this.removeActive(s), i && en(i, s);
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
function Uo(n, e, t, i, s, r) {
  n.goto(e), t.goto(i);
  let o = i + s, l = i, a = i - e;
  for (; ; ) {
    let h = n.to + a - t.to || n.endSide - t.endSide, c = h < 0 ? n.to + a : t.to, f = Math.min(c, o);
    if (n.point || t.point ? n.point && t.point && (n.point == t.point || n.point.eq(t.point)) && hr(n.activeForPoint(n.to), t.activeForPoint(t.to)) || r.comparePoint(l, f, n.point, t.point) : f > l && !hr(n.active, t.active) && r.compareRange(l, f, n.active, t.active), c > o)
      break;
    l = c, h <= 0 && n.next(), h >= 0 && t.next();
  }
}
function hr(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !n[t].eq(e[t]))
      return !1;
  return !0;
}
function en(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function tn(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function Bo(n, e) {
  let t = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && (t = s, i = e[s]);
  return t;
}
function ri(n, e, t = n.length) {
  let i = 0;
  for (let s = 0; s < t; )
    n.charCodeAt(s) == 9 ? (i += e - i % e, s++) : (i++, s = me(n, s));
  return i;
}
function cr(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == n.length)
      break;
    r += n.charCodeAt(s) == 9 ? t - r % t : 1, s = me(n, s);
  }
  return i === !0 ? -1 : n.length;
}
const fr = "ͼ", Io = typeof Symbol > "u" ? "__" + fr : Symbol.for(fr), ur = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class xt {
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
        let O = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((m) => o.map((g) => m.replace(/&/, g))).reduce((m, g) => m.concat(g)),
            O,
            a
          );
        else if (O && typeof O == "object") {
          if (!f)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), O, c, u);
        } else
          O != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + O + ";");
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
    let e = jo[Io] || 1;
    return jo[Io] = e + 1, fr + e.toString(36);
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
    let s = e[ur], r = i && i.nonce;
    s ? r && s.setNonce(r) : s = new Du(e, r), s.mount(Array.isArray(t) ? t : [t]);
  }
}
let Lo = /* @__PURE__ */ new Map();
class Du {
  constructor(e, t) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = Lo.get(i);
      if (r)
        return e.adoptedStyleSheets = [r.sheet, ...e.adoptedStyleSheets], e[ur] = r;
      this.sheet = new s.CSSStyleSheet(), e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets], Lo.set(i, this);
    } else {
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
      let r = e.head || e;
      r.insertBefore(this.styleTag, r.firstChild);
    }
    this.modules = [], e[ur] = this;
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
var wt = {
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
}, Ti = {
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
}, _u = typeof navigator < "u" && /Mac/.test(navigator.platform), Eu = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var fe = 0; fe < 10; fe++)
  wt[48 + fe] = wt[96 + fe] = String(fe);
for (var fe = 1; fe <= 24; fe++)
  wt[fe + 111] = "F" + fe;
for (var fe = 65; fe <= 90; fe++)
  wt[fe] = String.fromCharCode(fe + 32), Ti[fe] = String.fromCharCode(fe);
for (var ks in wt)
  Ti.hasOwnProperty(ks) || (Ti[ks] = wt[ks]);
function Uu(n) {
  var e = _u && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Eu && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Ti : wt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function Wn(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function dr(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Bu(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function $n(n, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return dr(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function ei(n) {
  return n.nodeType == 3 ? Rt(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Dn(n, e, t, i) {
  return t ? qo(n, e, t, i, -1) || qo(n, e, t, i, 1) : !1;
}
function Yi(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function qo(n, e, t, i, s) {
  for (; ; ) {
    if (n == t && e == i)
      return !0;
    if (e == (s < 0 ? 0 : rt(n))) {
      if (n.nodeName == "DIV")
        return !1;
      let r = n.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = Yi(n) + (s < 0 ? 0 : 1), n = r;
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
function cs(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Iu(n) {
  return {
    left: 0,
    right: n.innerWidth,
    top: 0,
    bottom: n.innerHeight
  };
}
function ju(n, e, t, i, s, r, o, l) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, O = 1, m = 1;
      if (d)
        u = Iu(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let w = c.getBoundingClientRect();
        O = w.width / c.offsetWidth, m = w.height / c.offsetHeight, u = {
          left: w.left,
          right: w.left + c.clientWidth * O,
          top: w.top,
          bottom: w.top + c.clientHeight * m
        };
      }
      let g = 0, S = 0;
      if (s == "nearest")
        e.top < u.top ? (S = -(u.top - e.top + o), t > 0 && e.bottom > u.bottom + S && (S = e.bottom - u.bottom + S + o)) : e.bottom > u.bottom && (S = e.bottom - u.bottom + o, t < 0 && e.top - S < u.top && (S = -(u.top + S - e.top + o)));
      else {
        let w = e.bottom - e.top, $ = u.bottom - u.top;
        S = (s == "center" && w <= $ ? e.top + w / 2 - $ / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - $ + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left ? (g = -(u.left - e.left + r), t > 0 && e.right > u.right + g && (g = e.right - u.right + g + r)) : e.right > u.right && (g = e.right - u.right + r, t < 0 && e.left < u.left + g && (g = -(u.left + g - e.left + r))) : g = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, g || S)
        if (d)
          h.scrollBy(g, S);
        else {
          let w = 0, $ = 0;
          if (S) {
            let y = c.scrollTop;
            c.scrollTop += S / m, $ = (c.scrollTop - y) * m;
          }
          if (g) {
            let y = c.scrollLeft;
            c.scrollLeft += g / O, w = (c.scrollLeft - y) * O;
          }
          e = {
            left: e.left - w,
            top: e.top - $,
            right: e.right - w,
            bottom: e.bottom - $
          }, w && Math.abs(w - g) < 1 && (i = "nearest"), $ && Math.abs($ - S) < 1 && (s = "nearest");
        }
      if (d)
        break;
      c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function Lu(n) {
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
class qu {
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
let Et = null;
function th(n) {
  if (n.setActive)
    return n.setActive();
  if (Et)
    return n.focus(Et);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(Et == null ? {
    get preventScroll() {
      return Et = { preventScroll: !0 }, !0;
    }
  } : void 0), !Et) {
    Et = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], s = e[t++], r = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let zo;
function Rt(n, e, t = e) {
  let i = zo || (zo = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function Ft(n, e, t) {
  let i = { key: e, code: e, keyCode: t, which: t, cancelable: !0 }, s = new KeyboardEvent("keydown", i);
  s.synthetic = !0, n.dispatchEvent(s);
  let r = new KeyboardEvent("keyup", i);
  return r.synthetic = !0, n.dispatchEvent(r), s.defaultPrevented || r.defaultPrevented;
}
function zu(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function ih(n) {
  for (; n.attributes.length; )
    n.removeAttributeNode(n.attributes[0]);
}
function Vu(n, e) {
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
      i = Yi(t), t = t.parentNode;
    }
}
function nh(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
class pe {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new pe(e.parentNode, Yi(e), t);
  }
  static after(e, t) {
    return new pe(e.parentNode, Yi(e) + 1, t);
  }
}
const io = [];
class z {
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
            let l = z.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (r = s ? s.nextSibling : i.firstChild, t && !t.written && t.node == i && r != o.dom && (t.written = !0), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = Vo(r);
        else
          i.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : i.firstChild, r && t && t.node == i && (t.written = !0); r; )
        r = Vo(r);
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
    for (; i && !z.get(i); )
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
  replaceChildren(e, t, i = io) {
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
    return new sh(this.children, e, this.children.length);
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
z.prototype.breakAfter = 0;
function Vo(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class sh {
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
function rh(n, e, t, i, s, r, o, l, a) {
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
function oh(n, e, t, i, s, r) {
  let o = n.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: h, off: c } = o.findPos(e, -1), f = e - t;
  for (let u of i)
    f += u.length;
  n.length += f, rh(n, h, c, l, a, i, 0, s, r);
}
let Te = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Or = typeof document < "u" ? document : { documentElement: { style: {} } };
const pr = /* @__PURE__ */ /Edge\/(\d+)/.exec(Te.userAgent), lh = /* @__PURE__ */ /MSIE \d/.test(Te.userAgent), gr = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Te.userAgent), fs = !!(lh || gr || pr), No = !fs && /* @__PURE__ */ /gecko\/(\d+)/i.test(Te.userAgent), $s = !fs && /* @__PURE__ */ /Chrome\/(\d+)/.exec(Te.userAgent), Go = "webkitFontSmoothing" in Or.documentElement.style, ah = !fs && /* @__PURE__ */ /Apple Computer/.test(Te.vendor), Fo = ah && (/* @__PURE__ */ /Mobile\/\w+/.test(Te.userAgent) || Te.maxTouchPoints > 2);
var Z = {
  mac: Fo || /* @__PURE__ */ /Mac/.test(Te.platform),
  windows: /* @__PURE__ */ /Win/.test(Te.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(Te.platform),
  ie: fs,
  ie_version: lh ? Or.documentMode || 6 : gr ? +gr[1] : pr ? +pr[1] : 0,
  gecko: No,
  gecko_version: No ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(Te.userAgent) || [0, 0])[1] : 0,
  chrome: !!$s,
  chrome_version: $s ? +$s[1] : 0,
  ios: Fo,
  android: /* @__PURE__ */ /Android\b/.test(Te.userAgent),
  webkit: Go,
  safari: ah,
  webkit_version: Go ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
  tabSize: Or.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const Nu = 256;
class ot extends z {
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
    return this.flags & 8 || i && (!(i instanceof ot) || this.length - (t - e) + i.length > Nu || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new ot(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new pe(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Gu(this.dom, e, t);
  }
}
class lt extends z {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let s of t)
      s.setParent(this);
  }
  setAttrs(e) {
    if (ih(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
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
    return i && (!(i instanceof lt && i.mark.eq(this.mark)) || e && r <= 0 || t < this.length && o <= 0) ? !1 : (oh(this, e, t, i ? i.children : [], r - 1, o - 1), this.markDirty(), !0);
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
    return hh(this, e);
  }
  coordsAt(e, t) {
    return fh(this, e, t);
  }
}
function Gu(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let s = e, r = e, o = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? Z.chrome || Z.gecko || (e ? (s--, o = 1) : r < i && (r++, o = -1)) : t < 0 ? s-- : r < i && r++;
  let l = Rt(n, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return Z.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? cs(a, o < 0) : a || null;
}
class pt extends z {
  static create(e, t, i) {
    return new pt(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = pt.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof pt) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof pt && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return _.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : _.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? pe.before(this.dom) : pe.after(this.dom, e == this.length);
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
    return cs(r, !o);
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
class ti extends z {
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
    return e instanceof ti && e.side == this.side;
  }
  split() {
    return new ti(this.side);
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
    return this.side > 0 ? pe.before(this.dom) : pe.after(this.dom);
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
    return _.empty;
  }
  get isHidden() {
    return !0;
  }
}
ot.prototype.children = pt.prototype.children = ti.prototype.children = io;
function hh(n, e) {
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
  return new pe(t, 0);
}
function ch(n, e, t) {
  let i, { children: s } = n;
  t > 0 && e instanceof lt && s.length && (i = s[s.length - 1]) instanceof lt && i.mark.eq(e.mark) ? ch(i, e.children[0], t - 1) : (s.push(e), e.setParent(n)), n.length += e.length;
}
function fh(n, e, t) {
  let i = null, s = -1, r = null, o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f], O = u + d.length;
      O >= c && (d.children.length ? l(d, c - u) : (!r || r.isHidden && t > 0) && (O > c || u == O && d.getSide() > 0) ? (r = d, o = c - u) : (u < c || u == O && d.getSide() < 0 && !d.isHidden) && (i = d, s = c - u)), u = O;
    }
  }
  l(n, e);
  let a = (t < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? s : o), t) : Fu(n);
}
function Fu(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = ei(e);
  return t[t.length - 1] || null;
}
function mr(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const Ho = /* @__PURE__ */ Object.create(null);
function no(n, e, t) {
  if (n == e)
    return !0;
  n || (n = Ho), e || (e = Ho);
  let i = Object.keys(n), s = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != s.length - (t && s.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r]))
      return !1;
  return !0;
}
function Sr(n, e, t) {
  let i = !1;
  if (e)
    for (let s in e)
      t && s in t || (i = !0, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (i = !0, s == "style" ? n.style.cssText = t[s] : n.setAttribute(s, t[s]));
  return i;
}
function Hu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class ie extends z {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, i, s, r, o) {
    if (i) {
      if (!(i instanceof ie))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return s && this.setDeco(i ? i.attrs : null), oh(this, e, t, i ? i.children : [], r, o), !0;
  }
  split(e) {
    let t = new ie();
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
    no(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    ch(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = mr(t, this.attrs || {})), i && (this.attrs = mr({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return hh(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (ih(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Sr(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && z.get(s) instanceof lt; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((i = z.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!Z.ios || !this.children.some((r) => r instanceof ot))) {
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
      let s = ei(i.dom);
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
    let i = fh(this, e, t);
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
        if (r instanceof ie)
          return r;
        if (o > t)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class mt extends z {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof mt) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? pe.before(this.dom) : pe.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new mt(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return io;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.dom.contentEditable = "false");
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : _.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof mt && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
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
class it {
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
var be = /* @__PURE__ */ function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(be || (be = {}));
class Y extends Xt {
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
    return new ji(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Qt(e, t, t, i, e.widget || null, !1);
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
      let { start: r, end: o } = uh(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Qt(e, i, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Li(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return U.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
Y.none = U.empty;
class ji extends Y {
  constructor(e) {
    let { start: t, end: i } = uh(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof ji && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && no(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
ji.prototype.point = !1;
class Li extends Y {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Li && this.spec.class == e.spec.class && no(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Li.prototype.mapMode = ue.TrackBefore;
Li.prototype.point = !0;
class Qt extends Y {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? ue.TrackBefore : ue.TrackAfter : ue.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? be.WidgetRange : this.startSide <= 0 ? be.WidgetBefore : be.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Qt && Ju(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Qt.prototype.point = !0;
function uh(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function Ju(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function br(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? t[s] = Math.max(t[s], e) : t.push(n, e);
}
class ki {
  constructor(e, t, i, s) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof mt && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new ie()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(nn(new ti(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof mt) && this.getLine();
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
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(nn(new ot(this.text.slice(this.textOff, this.textOff + s)), t), i), this.atCursorPos = !0, this.textOff += s, e -= s, i = 0;
    }
  }
  span(e, t, i, s) {
    this.buildText(t - e, i, s), this.pos = t, this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, i, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof Qt) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof Qt)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new mt(i.widget || new Jo("div"), l, i));
      else {
        let a = pt.create(i.widget || new Jo("span"), l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && r <= s.length && (e < t || i.startSide > 0), c = !a.isEditable && (e < t || r > s.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), h && (f.append(nn(new ti(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(nn(a, s), r), this.atCursorPos = c, this.pendingBuffer = c ? e < t || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, i, s, r) {
    let o = new ki(e, t, i, r);
    return o.openEnd = U.spans(s, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function nn(n, e) {
  for (let t of e)
    n = new lt(t, [n], n.length);
  return n;
}
class Jo extends it {
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
const dh = /* @__PURE__ */ P.define(), Oh = /* @__PURE__ */ P.define(), ph = /* @__PURE__ */ P.define(), gh = /* @__PURE__ */ P.define(), yr = /* @__PURE__ */ P.define(), mh = /* @__PURE__ */ P.define(), Sh = /* @__PURE__ */ P.define(), bh = /* @__PURE__ */ P.define({
  combine: (n) => n.some((e) => e)
}), yh = /* @__PURE__ */ P.define({
  combine: (n) => n.some((e) => e)
});
class _n {
  constructor(e, t = "nearest", i = "nearest", s = 5, r = 5) {
    this.range = e, this.y = t, this.x = i, this.yMargin = s, this.xMargin = r;
  }
  map(e) {
    return e.empty ? this : new _n(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
  }
}
const Ko = /* @__PURE__ */ A.define({ map: (n, e) => n.map(e) });
function De(n, e, t) {
  let i = n.facet(gh);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const us = /* @__PURE__ */ P.define({ combine: (n) => n.length ? n[0] : !0 });
let Ku = 0;
const pi = /* @__PURE__ */ P.define();
class J {
  constructor(e, t, i, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = s, this.extension = r(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = t || {};
    return new J(Ku++, e, i, s, (l) => {
      let a = [pi.of(l)];
      return o && a.push(Ai.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : Y.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return J.define((i) => new e(i), t);
  }
}
class vs {
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
            if (De(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
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
        De(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        De(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const xh = /* @__PURE__ */ P.define(), so = /* @__PURE__ */ P.define(), Ai = /* @__PURE__ */ P.define(), ro = /* @__PURE__ */ P.define(), wh = /* @__PURE__ */ P.define();
function el(n, e, t) {
  let i = n.state.facet(wh);
  if (!i.length)
    return i;
  let s = i.map((o) => o instanceof Function ? o(n) : o), r = [];
  return U.spans(s, e, t, {
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
            let O = { from: o, to: l, direction: u, inner: [] };
            c.push(O), c = O.inner;
          }
      }
    }
  }), r;
}
const Qh = /* @__PURE__ */ P.define();
function kh(n) {
  let e = 0, t = 0, i = 0, s = 0;
  for (let r of n.state.facet(Qh)) {
    let o = r(n);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const gi = /* @__PURE__ */ P.define();
class Re {
  constructor(e, t, i, s) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new Re(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
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
        let f = t[r], u = t[r + 1], d = Math.max(l, f), O = Math.min(c, u);
        if (d <= O && new Re(d + h, O + h, d, O).addToSet(i), u > c)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new Re(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class En {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = ne.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Re(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new En(e, t, i);
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
var G = /* @__PURE__ */ function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(G || (G = {}));
const Xi = G.LTR, $h = G.RTL;
function vh(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const ed = /* @__PURE__ */ vh("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), td = /* @__PURE__ */ vh("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), xr = /* @__PURE__ */ Object.create(null), je = [];
for (let n of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ n.charCodeAt(0), t = /* @__PURE__ */ n.charCodeAt(1);
  xr[e] = t, xr[t] = -e;
}
function id(n) {
  return n <= 247 ? ed[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? td[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8203 ? 256 : 64336 <= n && n <= 65023 ? 4 : n == 8204 ? 256 : 1;
}
const nd = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class gt {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? $h : Xi;
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
function Ph(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !Ph(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const j = [];
function sd(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, l = r < i.length ? i[r].from : t, a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = id(n.charCodeAt(h));
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
        let O = h && c == 8 || d < t && j[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let m = h; m < d; m++)
          j[m] = O;
        h = d - 1;
      } else
        u == 8 && f == 1 && (j[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function rd(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, O; f < c; f++)
      if (d = xr[u = n.charCodeAt(f)])
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (je[m + 1] == -d) {
              let g = je[m + 2], S = g & 2 ? s : g & 4 ? g & 1 ? r : s : 0;
              S && (j[f] = j[je[m]] = S), l = m;
              break;
            }
        } else {
          if (je.length == 189)
            break;
          je[l++] = f, je[l++] = u, je[l++] = a;
        }
      else if ((O = j[f]) == 2 || O == 1) {
        let m = O == s;
        a = m ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let S = je[g + 2];
          if (S & 2)
            break;
          if (m)
            je[g + 2] |= 2;
          else {
            if (S & 4)
              break;
            je[g + 2] |= 4;
          }
        }
      }
  }
}
function od(n, e, t, i) {
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
        for (let O = c, m = s, g = m ? t[m - 1].to : n; O > a; )
          O == g && (O = t[--m].from, g = m ? t[m - 1].to : n), j[--O] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function wr(n, e, t, i, s, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let m = j[a];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, O = a;
      e:
        for (; ; )
          if (h < r.length && O == r[h].from) {
            if (f)
              break e;
            let m = r[h];
            if (!c)
              for (let g = m.to, S = h + 1; ; ) {
                if (g == t)
                  break e;
                if (S < r.length && r[S].from == g)
                  g = r[S++].to;
                else {
                  if (j[g] == l)
                    break e;
                  break;
                }
              }
            if (h++, u)
              u.push(m);
            else {
              m.from > a && o.push(new gt(a, m.from, d));
              let g = m.direction == Xi != !(d % 2);
              Qr(n, g ? i + 1 : i, s, m.inner, m.from, m.to, o), a = m.to;
            }
            O = m.to;
          } else {
            if (O == t || (c ? j[O] != l : j[O] == l))
              break;
            O++;
          }
      u ? wr(n, a, O, i + 1, s, u, o) : a < O && o.push(new gt(a, O, d)), a = O;
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let m = j[a - 1];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, O = a;
      e:
        for (; ; )
          if (h && O == r[h - 1].to) {
            if (f)
              break e;
            let m = r[--h];
            if (!c)
              for (let g = m.from, S = h; ; ) {
                if (g == e)
                  break e;
                if (S && r[S - 1].to == g)
                  g = r[--S].from;
                else {
                  if (j[g - 1] == l)
                    break e;
                  break;
                }
              }
            if (u)
              u.push(m);
            else {
              m.to < a && o.push(new gt(m.to, a, d));
              let g = m.direction == Xi != !(d % 2);
              Qr(n, g ? i + 1 : i, s, m.inner, m.from, m.to, o), a = m.from;
            }
            O = m.from;
          } else {
            if (O == e || (c ? j[O - 1] != l : j[O - 1] == l))
              break;
            O--;
          }
      u ? wr(n, O, a, i + 1, s, u, o) : O < a && o.push(new gt(O, a, d)), a = O;
    }
}
function Qr(n, e, t, i, s, r, o) {
  let l = e % 2 ? 2 : 1;
  sd(n, s, r, i, l), rd(n, s, r, i, l), od(s, r, i, l), wr(n, s, r, e, t, i, o);
}
function ld(n, e, t) {
  if (!n)
    return [new gt(0, 0, e == $h ? 1 : 0)];
  if (e == Xi && !t.length && !nd.test(n))
    return Zh(n.length);
  if (t.length)
    for (; n.length > j.length; )
      j[j.length] = 256;
  let i = [], s = e == Xi ? 0 : 1;
  return Qr(n, s, s, t, 0, n.length, i), i;
}
function Zh(n) {
  return [new gt(0, n, 0)];
}
let Ch = "";
function ad(n, e, t, i, s) {
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
  l < 0 && (l = gt.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc));
  let a = e[l];
  o == a.side(s, t) && (a = e[l += s ? 1 : -1], o = a.side(!s, t));
  let h = s == (a.dir == t), c = me(n.text, o, h);
  if (Ch = n.text.slice(Math.min(o, c), Math.max(o, c)), c != a.side(s, t))
    return b.cursor(c + n.from, h ? -1 : 1, a.level);
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return !f && a.level != t ? b.cursor(s ? n.to : n.from, s ? -1 : 1, t) : f && f.level < a.level ? b.cursor(f.side(!s, t) + n.from, s ? 1 : -1, f.level) : b.cursor(c + n.from, s ? -1 : 1, a.level);
}
class tl extends z {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new ie()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Re(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let s = -1;
    this.view.inputState.composing >= 0 && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !pd(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? cd(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      i = new Re(h, c, e.changes.mapPos(h, -1), e.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (Z.ie || Z.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = dd(o, l, e.changes);
    return i = Re.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = Z.chrome || Z.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof mt && o.widget instanceof il && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, i) {
    let s = i ? i.range.addToSet(e.slice()) : e, r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l, u, d, O, m;
      if (i && i.range.fromB < f && i.range.toB > c) {
        let y = ki.build(this.view.state.doc, c, i.range.fromB, this.decorations, this.dynamicDecorationMap), x = ki.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        d = y.breakAtStart, O = y.openStart, m = x.openEnd;
        let Q = this.compositionView(i);
        x.breakAtStart ? Q.breakAfter = 1 : x.content.length && Q.merge(Q.length, Q.length, x.content[0], !1, x.openStart, 0) && (Q.breakAfter = x.content[0].breakAfter, x.content.shift()), y.content.length && Q.merge(0, 0, y.content[y.content.length - 1], !0, 0, y.openEnd) && y.content.pop(), u = y.content.concat(Q).concat(x.content);
      } else
        ({ content: u, breakAtStart: d, openStart: O, openEnd: m } = ki.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: S } = r.findPos(h, 1), { i: w, off: $ } = r.findPos(a, -1);
      rh(this, w, $, g, S, u, d, O, m);
    }
    i && this.fixCompositionDOM(i);
  }
  compositionView(e) {
    let t = new ot(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks)
      t = new lt(s, [t], t.length);
    let i = new ie();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = z.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, i = this.childPos(e.range.fromB, 1), s = this.children[i.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      i = s.childPos(i.off, 1), s = s.children[i.i], t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, s = i == this.dom, r = !s && $n(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(s || t || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (Z.gecko && l.empty && !this.hasComposition && hd(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = h = new pe(f, 0), o = !0;
    }
    let c = this.view.observer.selectionRange;
    (o || !c.focusNode || !Dn(a.node, a.offset, c.anchorNode, c.anchorOffset) || !Dn(h.node, h.offset, c.focusNode, c.focusOffset)) && (this.view.observer.ignore(() => {
      Z.android && Z.chrome && this.dom.contains(c.focusNode) && Od(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let f = Wn(this.view.root);
      if (f)
        if (l.empty) {
          if (Z.gecko) {
            let u = fd(a.node, a.offset);
            if (u && u != 3) {
              let d = Yh(a.node, a.offset, u == 1 ? 1 : -1);
              d && (a = new pe(d.node, d.offset));
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
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new pe(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new pe(c.focusNode, c.focusOffset);
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = Wn(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = ie.find(this, t.head);
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
      let r = z.get(t.childNodes[s]);
      r instanceof ie && (i = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !i && s >= 0; s--) {
      let r = z.get(t.childNodes[s]);
      r instanceof ie && (i = r.domAtPos(r.length));
    }
    return i ? new pe(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = z.get(t);
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
      if (i < s.length || s instanceof ie)
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
      h <= e && (h < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof ie && !(i instanceof ie && t >= 0)) && (i = l, s = h), r = h;
    }
    return i ? i.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), s = this.children[t];
    if (!(s instanceof ie))
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
    let r = me(s.text, i);
    if (r == i)
      return null;
    let o = Rt(s.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == G.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c], u = h + f.length;
      if (u > s)
        break;
      if (h >= i) {
        let d = f.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let O = f.dom.lastChild, m = O ? ei(O) : [];
          if (m.length) {
            let g = m[m.length - 1], S = a ? g.right - d.left : d.right - g.left;
            S > l && (l = S, this.minWidth = r, this.minWidthFrom = h, this.minWidthTo = u);
          }
        }
      }
      h = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? G.RTL : G.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof ie) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, i, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = ei(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = r ? r.width / 27 : 7, s = r ? r.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: s };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new sh(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(Y.replace({
          widget: new il(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return Y.set(e);
  }
  updateDeco() {
    let e = this.view.state.facet(Ai).map((t, i) => (this.dynamicDecorationMap[i] = typeof t == "function") ? t(this.view) : t);
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
    let r = kh(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    };
    ju(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, e.xMargin, e.yMargin, this.view.textDirection == G.LTR);
  }
}
function hd(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
class il extends it {
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
function Th(n, e) {
  let t = n.observer.selectionRange, i = t.focusNode && Yh(t.focusNode, t.focusOffset, 0);
  if (!i)
    return null;
  let s = e - i.offset;
  return { from: s, to: s + i.node.nodeValue.length, node: i.node };
}
function cd(n, e, t) {
  let i = Th(n, t);
  if (!i)
    return null;
  let { node: s, from: r, to: o } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, h = new Re(a.mapPos(r), a.mapPos(o), r, o), c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = z.get(f);
    if (u instanceof lt)
      c.push({ node: f, deco: u.mark });
    else {
      if (u instanceof ie || f.nodeName == "DIV" && f.parentNode == n.contentDOM)
        return { range: h, text: s, marks: c, line: f };
      if (f != n.contentDOM)
        c.push({ node: f, deco: new ji({
          inclusive: !0,
          attributes: Hu(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function Yh(n, e, t) {
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
function fd(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let ud = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    br(e, t, this.changes);
  }
  comparePoint(e, t) {
    br(e, t, this.changes);
  }
};
function dd(n, e, t) {
  let i = new ud();
  return U.compare(n, e, t, i), i.changes;
}
function Od(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function pd(n, e) {
  let t = !1;
  return e && n.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (t = !0);
  }), t;
}
function gd(n, e, t = 1) {
  let i = n.charCategorizer(e), s = n.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return b.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = me(s.text, r, !1) : l = me(s.text, r);
  let a = i(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = me(s.text, o, !1);
    if (i(s.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = me(s.text, l);
    if (i(s.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return b.range(o + s.from, l + s.from);
}
function md(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function Sd(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function Ps(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function nl(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function sl(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function kr(n, e, t) {
  let i, s, r, o, l = !1, a, h, c, f;
  for (let O = n.firstChild; O; O = O.nextSibling) {
    let m = ei(O);
    for (let g = 0; g < m.length; g++) {
      let S = m[g];
      s && Ps(s, S) && (S = nl(sl(S, s.bottom), s.top));
      let w = md(e, S), $ = Sd(t, S);
      if (w == 0 && $ == 0)
        return O.nodeType == 3 ? rl(O, e, t) : kr(O, e, t);
      if (!i || o > $ || o == $ && r > w) {
        i = O, s = S, r = w, o = $;
        let y = $ ? t < S.top ? -1 : 1 : w ? e < S.left ? -1 : 1 : 0;
        l = !y || (y > 0 ? g < m.length - 1 : g > 0);
      }
      w == 0 ? t > S.bottom && (!c || c.bottom < S.bottom) ? (a = O, c = S) : t < S.top && (!f || f.top > S.top) && (h = O, f = S) : c && Ps(c, S) ? c = sl(c, S.bottom) : f && Ps(f, S) && (f = nl(f, S.top));
    }
  }
  if (c && c.bottom >= t ? (i = a, s = c) : f && f.top <= t && (i = h, s = f), !i)
    return { node: n, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (i.nodeType == 3)
    return rl(i, u, t);
  if (l && i.contentEditable != "false")
    return kr(i, u, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function rl(n, e, t) {
  let i = n.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = Rt(n, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      o || (o = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2, d = u;
        if ((Z.chrome || Z.gecko) && Rt(n, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
          return { node: n, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = f;
      }
    }
  }
  return { node: n, offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0 };
}
function Ah(n, e, t, i = -1) {
  var s, r;
  let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, a, { docHeight: h } = n.viewState, { x: c, y: f } = e, u = f - l;
  if (u < 0)
    return 0;
  if (u > h)
    return n.state.doc.length;
  for (let y = n.viewState.heightOracle.textHeight / 2, x = !1; a = n.elementAtHeight(u), a.type != be.Text; )
    for (; u = i > 0 ? a.bottom + y : a.top - y, !(u >= 0 && u <= h); ) {
      if (x)
        return t ? null : 0;
      x = !0, i = -i;
    }
  f = l + u;
  let d = a.from;
  if (d < n.viewport.from)
    return n.viewport.from == 0 ? 0 : t ? null : ol(n, o, a, c, f);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : ol(n, o, a, c, f);
  let O = n.dom.ownerDocument, m = n.root.elementFromPoint ? n.root : O, g = m.elementFromPoint(c, f);
  g && !n.contentDOM.contains(g) && (g = null), g || (c = Math.max(o.left + 1, Math.min(o.right - 1, c)), g = m.elementFromPoint(c, f), g && !n.contentDOM.contains(g) && (g = null));
  let S, w = -1;
  if (g && ((s = n.docView.nearest(g)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (O.caretPositionFromPoint) {
      let y = O.caretPositionFromPoint(c, f);
      y && ({ offsetNode: S, offset: w } = y);
    } else if (O.caretRangeFromPoint) {
      let y = O.caretRangeFromPoint(c, f);
      y && ({ startContainer: S, startOffset: w } = y, (!n.contentDOM.contains(S) || Z.safari && bd(S, w, c) || Z.chrome && yd(S, w, c)) && (S = void 0));
    }
  }
  if (!S || !n.docView.dom.contains(S)) {
    let y = ie.find(n.docView, d);
    if (!y)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: S, offset: w } = kr(y.dom, c, f));
  }
  let $ = n.docView.nearest(S);
  if (!$)
    return null;
  if ($.isWidget && ((r = $.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let y = $.dom.getBoundingClientRect();
    return e.y < y.top || e.y <= y.bottom && e.x <= (y.left + y.right) / 2 ? $.posAtStart : $.posAtEnd;
  } else
    return $.localPosFromDOM(S, w) + $.posAtStart;
}
function ol(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    r += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + cr(o, r, n.state.tabSize);
}
function bd(n, e, t) {
  let i;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length))
    return !1;
  for (let s = n.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return !1;
  return Rt(n, i - 1, i).getBoundingClientRect().left > t;
}
function yd(n, e, t) {
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
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : Rt(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function $r(n, e) {
  let t = n.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || i.to == e && (i.to == t.to || i.type == be.Text))
        return i;
  }
  return t;
}
function xd(n, e, t, i) {
  let s = $r(n, e.head), r = !i || s.type != be.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({
      x: t == (l == G.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return b.cursor(a, t ? -1 : 1);
  }
  return b.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function ll(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = ad(s, r, o, l, t), c = Ch;
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1))
        return l;
      c = `
`, s = n.state.doc.line(s.number + (t ? 1 : -1)), r = n.bidiSpans(s), h = b.cursor(t ? s.from : s.to);
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
function wd(n, e, t) {
  let i = n.state.charCategorizer(e), s = i(t);
  return (r) => {
    let o = i(r);
    return s == V.Space && (s = o), s == o;
  };
}
function Qd(n, e, t, i) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0))
    return b.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(s, e.assoc || -1), c = n.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let d = n.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + c;
  }
  let f = a.left + o, u = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let O = l + (u + d) * r, m = Ah(n, { x: f, y: O }, !1, r);
    if (O < a.top || O > a.bottom || (r < 0 ? m < s : m > s)) {
      let g = n.docView.coordsForChar(m), S = !g || O < g.top ? -1 : 1;
      return b.cursor(m, S, void 0, o);
    }
  }
}
function vn(n, e, t) {
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
function Zs(n, e, t) {
  let i = vn(n.state.facet(ro).map((s) => s(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : b.cursor(i, i < t.from ? 1 : -1);
}
class kd {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, Z.safari && e.contentDOM.addEventListener("input", () => null), Z.gecko && Ud(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Ad(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || this.runHandlers(e.type, e);
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
    let t = $d(e), i = this.handlers, s = this.view.contentDOM;
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
    if (e.keyCode != 27 && Rh.indexOf(e.keyCode) < 0 && (this.view.inputState.lastEscPress = 0), Z.android && Z.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return Z.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = Xh.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || vd.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey() {
    let e = this.pendingIOSKey;
    return e ? (this.pendingIOSKey = void 0, Ft(this.view.contentDOM, e.key, e.keyCode)) : !1;
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : Z.safari && !Z.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
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
function al(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      De(t.state, s);
    }
  };
}
function $d(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && t(r).handlers.push(al(i.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && t(r).observers.push(al(i.value, o));
      }
  }
  for (let i in et)
    t(i).handlers.push(et[i]);
  for (let i in _e)
    t(i).observers.push(_e[i]);
  return e;
}
const Xh = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], vd = "dthko", Rh = [16, 17, 18, 20, 91, 92, 224, 225], sn = 6;
function rn(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Pd(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Zd {
  constructor(e, t, i, s) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParent = Lu(e.contentDOM), this.atoms = e.state.facet(ro).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(D.allowMultipleSelections) && Cd(e, t), this.dragging = Yd(e, t) && _h(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    var t;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Pd(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let i = 0, s = 0, r = ((t = this.scrollParent) === null || t === void 0 ? void 0 : t.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, o = kh(this.view);
    e.clientX - o.left <= r.left + sn ? i = -rn(r.left - e.clientX) : e.clientX + o.right >= r.right - sn && (i = rn(e.clientX - r.right)), e.clientY - o.top <= r.top + sn ? s = -rn(r.top - e.clientY) : e.clientY + o.bottom >= r.bottom - sn && (s = rn(e.clientY - r.bottom)), this.setScrollSpeed(i, s);
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
        let o = vn(this.atoms, s.from, 0);
        o != s.from && (r = b.cursor(o, -1));
      } else {
        let o = vn(this.atoms, s.from, -1), l = vn(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = b.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), t[i] = r);
    }
    return t ? b.create(t, e.mainIndex) : e;
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
function Cd(n, e) {
  let t = n.state.facet(dh);
  return t.length ? t[0](e) : Z.mac ? e.metaKey : e.ctrlKey;
}
function Td(n, e) {
  let t = n.state.facet(Oh);
  return t.length ? t[0](e) : Z.mac ? !e.altKey : !e.ctrlKey;
}
function Yd(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return !1;
  let i = Wn(n.root);
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
function Ad(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = z.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const et = /* @__PURE__ */ Object.create(null), _e = /* @__PURE__ */ Object.create(null), Mh = Z.ie && Z.ie_version < 15 || Z.ios && Z.webkit_version < 604;
function Xd(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), Wh(n, t.value);
  }, 50);
}
function Wh(n, e) {
  let { state: t } = n, i, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (vr != null && t.selection.ranges.every((a) => a.empty) && vr == r.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: b.cursor(h.from + f.length)
      };
    });
  } else
    o ? i = t.changeByRange((a) => {
      let h = r.line(s++);
      return {
        changes: { from: a.from, to: a.to, insert: h.text },
        range: b.cursor(a.from + h.length)
      };
    }) : i = t.replaceSelection(r);
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
_e.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
et.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (n.inputState.lastEscPress = Date.now()), !1);
_e.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
_e.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
et.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of n.state.facet(ph))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = Wd(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Zd(n, e, t, i)), i && n.observer.ignore(() => th(n.contentDOM));
    let s = n.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  }
  return !1;
};
function hl(n, e, t, i) {
  if (i == 1)
    return b.cursor(e, t);
  if (i == 2)
    return gd(n.state, e, t);
  {
    let s = ie.find(n.docView, e), r = n.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < n.state.doc.length && l == r.to && l++, b.range(o, l);
  }
}
let Dh = (n, e) => n >= e.top && n <= e.bottom, cl = (n, e, t) => Dh(e, t) && n >= t.left && n <= t.right;
function Rd(n, e, t, i) {
  let s = ie.find(n.docView, e);
  if (!s)
    return 1;
  let r = e - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && cl(t, i, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && cl(t, i, l) ? 1 : o && Dh(i, o) ? -1 : 1;
}
function fl(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Rd(n, t, e.clientX, e.clientY) };
}
const Md = Z.ie && Z.ie_version <= 11;
let ul = null, dl = 0, Ol = 0;
function _h(n) {
  if (!Md)
    return n.detail;
  let e = ul, t = Ol;
  return ul = n, Ol = Date.now(), dl = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (dl + 1) % 3 : 1;
}
function Wd(n, e) {
  let t = fl(n, e), i = _h(e), s = n.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = fl(n, r), h, c = hl(n, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let f = hl(n, t.pos, t.bias, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
        c = u < c.from ? b.range(u, d) : b.range(d, u);
      }
      return o ? s.replaceRange(s.main.extend(c.from, c.to)) : l && i == 1 && s.ranges.length > 1 && (h = Dd(s, a.pos)) ? h : l ? s.addRange(c) : b.create([c]);
    }
  };
}
function Dd(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: s } = n.ranges[t];
    if (i <= e && s >= e)
      return b.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
et.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state, { mouseSelection: i } = n.inputState;
  return i && (i.dragging = t), e.dataTransfer && (e.dataTransfer.setData("Text", n.state.sliceDoc(t.from, t.to)), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
function pl(n, e, t, i) {
  if (!t)
    return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { mouseSelection: r } = n.inputState, o = i && r && r.dragging && Td(n, e) ? { from: r.dragging.from, to: r.dragging.to } : null, l = { from: s, insert: t }, a = n.state.changes(o ? [o, l] : l);
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
      ++s == t.length && pl(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
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
      return pl(n, e, i, !0), !0;
  }
  return !1;
};
et.paste = (n, e) => {
  if (n.state.readOnly)
    return !0;
  n.observer.flush();
  let t = Mh ? null : e.clipboardData;
  return t ? (Wh(n, t.getData("text/plain") || t.getData("text/uri-text")), !0) : (Xd(n), !1);
};
function _d(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function Ed(n) {
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
let vr = null;
et.copy = et.cut = (n, e) => {
  let { text: t, ranges: i, linewise: s } = Ed(n.state);
  if (!t && !s)
    return !1;
  vr = s ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = Mh ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (_d(n, t), !1);
};
const Eh = /* @__PURE__ */ ht.define();
function Uh(n, e) {
  let t = [];
  for (let i of n.facet(Sh)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t ? n.update({ effects: t, annotations: Eh.of(!0) }) : null;
}
function Bh(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Uh(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
_e.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Bh(n);
};
_e.blur = (n) => {
  n.observer.clearSelectionRange(), Bh(n);
};
_e.compositionstart = _e.compositionupdate = (n) => {
  n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0);
};
_e.compositionend = (n) => {
  n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, Z.chrome && Z.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50);
};
_e.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
et.beforeinput = (n, e) => {
  var t;
  let i;
  if (Z.chrome && Z.android && (i = Xh.find((s) => s.inputType == e.inputType)) && (n.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
    let s = ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return !1;
};
const gl = /* @__PURE__ */ new Set();
function Ud(n) {
  gl.has(n) || (gl.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const ml = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class Bd {
  constructor(e) {
    this.lineWrapping = e, this.doc = _.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
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
    return ml.indexOf(e) > -1 != this.lineWrapping;
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
    let l = ml.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
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
class Id {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Ge {
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
    return typeof this._content == "number" ? be.Text : Array.isArray(this._content) ? this._content : this._content.type;
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
    return this._content instanceof Qt ? this._content.widget : null;
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
    return new Ge(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var q = /* @__PURE__ */ function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(q || (q = {}));
const Pn = 1e-3;
class ye {
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
    this.height != t && (Math.abs(this.height - t) > Pn && (e.heightChanged = !0), this.height = t);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return ye.of(i);
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
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = r.lineAt(a, q.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : r.lineAt(h, q.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, q.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let O = oo.build(i.setDoc(o), e, c, f);
      r = r.replace(a, h, O);
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Ze(0, 0);
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
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new jd(ye.of(e.slice(0, t)), o, ye.of(e.slice(i)));
  }
}
ye.prototype.size = 1;
class Ih extends ye {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, s) {
    return new Ge(s, this.length, i, this.height, this.deco || 0);
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
class Ze extends Ih {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, s) {
    return new Ge(s, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof Ze || s instanceof he && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof he ? s = new Ze(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : ye.of(i);
  }
  updateHeight(e, t = 0, i = !1, s) {
    return s && s.from <= t && s.more ? this.setHeight(e, s.heights[s.index++]) : (i || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class he extends ye {
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
      return new Ge(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(r + h);
      return new Ge(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == q.ByHeight)
      return this.blockAt(e, i, s, r);
    if (t == q.ByPosNoHeight) {
      let { from: d, to: O } = i.doc.lineAt(e);
      return new Ge(d, O - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - o, u = s + l * f + a * (h.from - r - f);
    return new Ge(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, s, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = s; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let O = u.number - l;
        f += a * O + h * (e - r - O);
      }
      let d = a + h * u.length;
      o(new Ge(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof he ? i[i.length - 1] = new he(r.length + s) : i.push(null, new he(s - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof he ? i[0] = new he(e + r.length) : i.unshift(new he(e - 1), null);
    }
    return ye.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new he(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new he(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [], l = Math.max(t, s.from), a = -1;
      for (s.from > t && o.push(new he(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= Pn && (a = -2);
        let u = new Ze(c, f);
        u.outdated = !1, o.push(u), l += c + 1;
      }
      l <= r && o.push(null, new he(r - l).updateHeight(e, l));
      let h = ye.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Pn || Math.abs(a - this.heightMetrics(e, t).perLine) >= Pn) && (e.heightChanged = !0), h;
    } else
      (i || this.outdated) && (this.setHeight(e, e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class jd extends ye {
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
    let o = s + this.left.height, l = r + this.left.length + this.break, a = t == q.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == q.ByPosNoHeight ? q.ByPosNoHeight : q.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h);
  }
  forEachLine(e, t, i, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, s, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, q.ByPos, i, s, r);
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
    if (e > 0 && Sl(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), Sl(r, l);
    }
    return ye.of(r);
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
    return e.size > 2 * t.size || t.size > 2 * e.size ? ye.of(this.break ? [e, null, t] : [e, t]) : (this.left = e, this.right = t, this.height = e.height + t.height, this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, s) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return s && s.from <= t + r.length && s.more ? a = r = r.updateHeight(e, t, i, s) : r.updateHeight(e, t, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, i, s) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Sl(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof he && (i = n[e + 1]) instanceof he && n.splice(e - 1, 3, new he(t.length + 1 + i.length));
}
const Ld = 5;
class oo {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof Ze ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Ze(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Ih(o, s, i)) : (o || r || s >= Ld) && this.addLineDeco(s, r, o);
    } else
      t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Ze(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new he(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Ze)
      return e;
    let t = new Ze(0, -1);
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
    this.lineStart > -1 && !(t instanceof Ze) && !this.isCovered ? this.nodes.push(new Ze(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof Ze && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, s) {
    let r = new oo(i, e);
    return U.spans(t, i, s, r, 0), r.finish(i);
  }
}
function qd(n, e, t) {
  let i = new zd();
  return U.compare(n, e, t, i, 0), i.changes;
}
class zd {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, s) {
    (e < t || i && i.heightRelevant || s && s.heightRelevant) && br(e, t, this.changes, 5);
  }
}
function Vd(n, e) {
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
function Nd(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Cs {
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
    return Y.replace({
      widget: new Gd(this.size * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Gd extends it {
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
class bl {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !0, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = yl, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = G.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(so).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Bd(t), this.stateDeco = e.facet(Ai).filter((i) => typeof i != "function"), this.heightMap = ye.empty().applyChanges(this.stateDeco, _.empty, this.heightOracle.setDoc(e.doc), [new Re(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Y.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new on(r, o));
      }
    }
    this.viewports = e.sort((i, s) => i.from - s.from), this.scaler = this.heightMap.height <= 7e6 ? yl : new Jd(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : mi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Ai).filter((c) => typeof c != "function");
    let s = e.changedRanges, r = Re.extendWithRanges(s, qd(i, this.stateDeco, e ? e.changes : ne.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != o && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = !e.changes.empty || e.flags & 2 || a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, this.updateForViewport(), h && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(yh) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? G.RTL : G.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let y = l.width / t.offsetWidth, x = l.height / t.offsetHeight;
      (y > 0.995 && y < 1.005 || !isFinite(y) || Math.abs(l.width - t.offsetWidth) < 1) && (y = 1), (x > 0.995 && x < 1.005 || !isFinite(x) || Math.abs(l.height - t.offsetHeight) < 1) && (x = 1), (this.scaleX != y || this.scaleY != x) && (this.scaleX = y, this.scaleY = x, h |= 8, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 10), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 8);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = nh(e.scrollDOM);
    let O = (this.printing ? Nd : Vd)(t, this.paddingTop), m = O.top - this.pixelViewport.top, g = O.bottom - this.pixelViewport.bottom;
    this.pixelViewport = O;
    let S = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (S != this.inView && (this.inView = S, S && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let w = l.width;
    if ((this.contentDOMWidth != w || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 8), a) {
      let y = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(y) && (o = !0), o || s.lineWrapping && Math.abs(w - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: x, charWidth: Q, textHeight: C } = e.docView.measureTextSize();
        o = x > 0 && s.refresh(r, x, Q, C, w / Q, y), o && (e.docView.minWidth = 0, h |= 8);
      }
      m > 0 && g > 0 ? c = Math.max(m, g) : m < 0 && g < 0 && (c = Math.min(m, g)), s.heightChanged = !1;
      for (let x of this.viewports) {
        let Q = x.from == this.viewport.from ? y : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (o ? ye.empty().applyChanges(this.stateDeco, _.empty, this.heightOracle, [new Re(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new Id(x.from, Q));
      }
      s.heightChanged && (h |= 2);
    }
    let $ = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return $ && (this.viewport = this.getViewport(c, this.scrollTarget)), this.updateForViewport(), (h & 2 || $) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new on(s.lineAt(o - i * 1e3, q.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, q.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, q.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new on(s.lineAt(u - 1e3 / 2, q.ByHeight, r, 0, 0).from, s.lineAt(u + c + 1e3 / 2, q.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new on(this.heightMap.lineAt(i, q.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, q.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, q.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, q.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
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
      t.touchesRange(s.from, s.to) || i.push(new Cs(t.mapPos(s.from), t.mapPos(s.to), s.size));
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
    if (this.defaultTextDirection != G.LTR && !i)
      return [];
    let l = [], a = (h, c, f, u) => {
      if (c - h < r)
        return;
      let d = this.state.selection.main, O = [d.from];
      d.empty || O.push(d.to);
      for (let g of O)
        if (g > h && g < c) {
          a(h, g - 10, f, u), a(g + 10, c, f, u);
          return;
        }
      let m = Hd(e, (g) => g.from >= f.from && g.to <= f.to && Math.abs(g.from - h) < r && Math.abs(g.to - c) < r && !O.some((S) => g.from < S && g.to > S));
      if (!m) {
        if (c < f.to && t && i && t.visibleRanges.some((g) => g.from <= c && g.to >= c)) {
          let g = t.moveToLineBoundary(b.cursor(c), !1, !0).head;
          g > h && (c = g);
        }
        m = new Cs(h, c, this.gapSize(f, h, c, u));
      }
      l.push(m);
    };
    for (let h of this.viewportLines) {
      if (h.length < o)
        continue;
      let c = Fd(h.from, h.to, this.stateDeco);
      if (c.total < o)
        continue;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, u, d;
      if (i) {
        let O = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, g;
        if (f != null) {
          let S = an(c, f), w = ((this.visibleBottom - this.visibleTop) / 2 + O) / h.height;
          m = S - w, g = S + w;
        } else
          m = (this.visibleTop - h.top - O) / h.height, g = (this.visibleBottom - h.top + O) / h.height;
        u = ln(c, m), d = ln(c, g);
      } else {
        let O = c.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, g, S;
        if (f != null) {
          let w = an(c, f), $ = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + m) / O;
          g = w - $, S = w + $;
        } else
          g = (this.pixelViewport.left - m) / O, S = (this.pixelViewport.right + m) / O;
        u = ln(c, g), d = ln(c, S);
      }
      u > h.from && a(h.from, u, h, c), d < h.to && a(d, h.to, h, c);
    }
    return l;
  }
  gapSize(e, t, i, s) {
    let r = an(s, i) - an(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Cs.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = Y.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    U.spans(e, this.viewport.from, this.viewport.to, {
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
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || mi(this.heightMap.lineAt(e, q.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return mi(this.heightMap.lineAt(this.scaler.fromDOM(e), q.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return mi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class on {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Fd(n, e, t) {
  let i = [], s = n, r = 0;
  return U.spans(t, n, e, {
    span() {
    },
    point(o, l) {
      o > s && (i.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < e && (i.push({ from: s, to: e }), r += e - s), { total: r, ranges: i };
}
function ln({ total: n, ranges: e }, t) {
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
function an(n, e) {
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
function Hd(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const yl = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1
};
class Jd {
  constructor(e, t, i) {
    let s = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, q.ByPos, e, 0, 0).top, c = t.lineAt(a, q.ByPos, e, 0, 0).bottom;
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
function mi(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new Ge(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((s) => mi(s, e)) : n._content);
}
const hn = /* @__PURE__ */ P.define({ combine: (n) => n.join(" ") }), Pr = /* @__PURE__ */ P.define({ combine: (n) => n.indexOf(!0) > -1 }), Zr = /* @__PURE__ */ xt.newName(), jh = /* @__PURE__ */ xt.newName(), Lh = /* @__PURE__ */ xt.newName(), qh = { "&light": "." + jh, "&dark": "." + Lh };
function Cr(n, e, t) {
  return new xt(e, {
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
const Kd = /* @__PURE__ */ Cr("." + Zr, {
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
}, qh), Si = "￿";
class eO {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(D.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Si;
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
      let l = z.get(s), a = z.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : xl(s)) || xl(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
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
    let t = z.get(e), i = t && t.overrideDOMText;
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
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (tO(e, i.node, i.offset) ? t : 0));
  }
}
function tO(n, e, t) {
  for (; ; ) {
    if (!e || t < rt(e))
      return !1;
    if (e == n)
      return !0;
    t = Yi(e) + 1, e = e.parentNode;
  }
}
function xl(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
class wl {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class iO {
  constructor(e, t, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "";
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = r || o ? [] : rO(e), a = new eO(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = oO(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !dr(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !dr(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
      this.newSel = b.single(h, a);
    }
  }
}
function zh(n, e) {
  let t, { newSel: i } = e, s = n.state.selection.main, r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = s.from, h = null;
    (r === 8 || Z.android && e.text.length < l - o) && (a = s.to, h = "end");
    let c = sO(n.state.doc.sliceString(o, l, Si), e.text, a - o, h);
    c && (Z.chrome && r == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == Si + Si && c.toB--, t = {
      from: o + c.from,
      to: o + c.toA,
      insert: _.of(e.text.slice(c.from, c.toB).split(Si))
    });
  } else
    i && (!n.hasFocus && n.state.facet(us) || i.main.eq(s)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !s.empty && i && i.main.empty ? t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) } : t && t.from >= s.from && t.to <= s.to && (t.from != s.from || t.to != s.to) && s.to - s.from - (t.to - t.from) <= 4 ? t = {
    from: s.from,
    to: s.to,
    insert: n.state.doc.slice(s.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, s.to))
  } : (Z.mac || Z.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = b.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: _.of([" "]) }) : Z.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = b.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: _.of([" "]) }), t) {
    if (Z.ios && n.inputState.flushIOSKey() || Z.android && (t.from == s.from && t.to == s.to && t.insert.length == 1 && t.insert.lines == 2 && Ft(n.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || r == 8 && t.insert.length < t.to - t.from && t.to > s.head) && Ft(n.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && Ft(n.contentDOM, "Delete", 46)))
      return !0;
    let o = t.insert.toString();
    n.inputState.composing >= 0 && n.inputState.composing++;
    let l, a = () => l || (l = nO(n, t, i));
    return n.state.facet(mh).some((h) => h(n, t.from, t.to, o, a)) || n.dispatch(a()), !0;
  } else if (i && !i.main.eq(s)) {
    let o = !1, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = !0), l = n.inputState.lastSelectionOrigin), n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function nO(n, e, t) {
  let i, s = n.state, r = s.selection.main;
  if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : "", a = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    i = s.replaceSelection(n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + a));
  } else {
    let l = s.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), c, f = t && Th(n, t.main.head);
      if (f) {
        let O = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - O };
      } else
        c = n.state.doc.lineAt(r.head);
      let u = r.to - e.to, d = r.to - r.from;
      i = s.changeByRange((O) => {
        if (O.from == r.from && O.to == r.to)
          return { changes: l, range: a || O.map(l) };
        let m = O.to - u, g = m - h.length;
        if (O.to - O.from != d || n.state.sliceDoc(g, m) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        O.to >= c.from && O.from <= c.to)
          return { range: O };
        let S = s.changes({ from: g, to: m, insert: e.insert }), w = O.to - r.to;
        return {
          changes: S,
          range: a ? b.range(Math.max(0, a.anchor + w), Math.max(0, a.head + w)) : O.map(S)
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
function sO(n, e, t, i) {
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
function rO(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return t && (e.push(new wl(t, i)), (s != t || r != i) && e.push(new wl(s, r))), e;
}
function oO(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? b.single(t + e, i + e) : null;
}
const lO = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Ts = Z.ie && Z.ie_version <= 11;
class aO {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new qu(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (Z.ie && Z.ie_version <= 11 || Z.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Ts && (this.onCharData = (t) => {
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
    if (i.state.facet(us) ? i.root.activeElement != this.dom : !$n(i.dom, s))
      return;
    let r = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (Z.ie && Z.ie_version <= 11 || Z.android && Z.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && Dn(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = Z.safari && e.root.nodeType == 11 && Bu(this.dom.ownerDocument) == this.dom && hO(this.view) || Wn(e.root);
    if (!t || this.selectionRange.eq(t))
      return !1;
    let i = $n(this.dom, t);
    return i && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Vu(this.dom, t) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(t), i && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, lO), Ts && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Ts && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Ft(this.dom, r.key, r.keyCode));
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
    let { from: e, to: t, typeOver: i } = this.processRecords(), s = this.selectionChanged && $n(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new iO(this.view, e, t, i);
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
    let i = this.view.state, s = zh(this.view, t);
    return this.view.state == i && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = Ql(t, e.previousSibling || e.target.previousSibling, -1), s = Ql(t, e.nextSibling || e.target.nextSibling, 1);
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
function Ql(n, e, t) {
  for (; e; ) {
    let i = z.get(e);
    if (i && i.parent == n)
      return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function hO(n) {
  let e = null;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  if (n.contentDOM.addEventListener("beforeinput", t, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", t, !0), !e)
    return null;
  let i = e.startContainer, s = e.startOffset, r = e.endContainer, o = e.endOffset, l = n.docView.domAtPos(n.state.selection.main.anchor);
  return Dn(l.node, l.offset, r, o) && ([i, s, r, o] = [r, o, i, s]), { anchorNode: i, anchorOffset: s, focusNode: r, focusOffset: o };
}
class v {
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
    this.dispatchTransactions = e.dispatchTransactions || t && ((i) => i.forEach((s) => t(s, this))) || ((i) => this.update(i)), this.dispatch = this.dispatch.bind(this), this._root = e.root || zu(e.parent) || document, this.viewState = new bl(e.state || D.create(e)), this.plugins = this.state.facet(pi).map((i) => new vs(i));
    for (let i of this.plugins)
      i.update(this);
    this.observer = new aO(this), this.inputState = new kd(this), this.inputState.ensureHandlers(this.plugins), this.docView = new tl(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), e.parent && e.parent.appendChild(this.dom);
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof re ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
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
    e.some((u) => u.annotation(Eh)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Uh(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(D.phrases) != this.state.facet(D.phrases))
      return this.setState(r);
    s = En.create(this, r, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new _n(d.empty ? d : b.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Ko) && (f = d.value);
      }
      this.viewState.update(s, f), this.bidiCache = Un.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(gi) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(hn) != s.state.facet(hn) && (this.viewState.mustMeasureContent = !0), (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !s.empty)
      for (let u of this.state.facet(yr))
        u(s);
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !zh(this, c) && h.force && Ft(this.contentDOM, h.key, h.keyCode);
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
      this.viewState = new bl(e), this.plugins = e.facet(pi).map((i) => new vs(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView = new tl(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(pi), i = e.state.facet(pi);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          s.push(new vs(r));
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
          if (nh(i))
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
          } catch (O) {
            return De(this.state, O), kl;
          }
        }), f = En.create(this, this.state, []), u = !1;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f));
        for (let d = 0; d < h.length; d++)
          if (c[d] != kl)
            try {
              let O = h[d];
              O.write && O.write(c[d], this);
            } catch (O) {
              De(this.state, O);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null;
              continue;
            } else {
              let O = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (O > 1 || O < -1) {
                s = s + O, i.scrollTop = s / this.scaleY, o = -1;
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
      for (let l of this.state.facet(yr))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Zr + " " + (this.state.facet(Pr) ? Lh : jh) + " " + this.state.facet(hn);
  }
  updateAttrs() {
    let e = $l(this, xh, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(us) ? "true" : "false",
      class: "cm-content",
      style: `${Z.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), $l(this, so, t);
    let i = this.observer.ignore(() => {
      let s = Sr(this.contentDOM, this.contentAttrs, t), r = Sr(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(v.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(gi);
    let e = this.state.facet(v.cspNonce);
    xt.mount(this.root, this.styleModules.concat(Kd).reverse(), e ? { nonce: e } : void 0);
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
    return Zs(this, e, ll(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Zs(this, e, ll(this, e, t, (i) => wd(this, e.head, i)));
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return xd(this, e, t, i);
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
    return Zs(this, e, Qd(this, e, t, i));
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
    return this.readMeasured(), Ah(this, e, t);
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
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[gt.find(r, e - s.from, -1, t)];
    return cs(i, o.dir == G.LTR == t > 0);
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
    return !this.state.facet(bh) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > cO)
      return Zh(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Ph(r.isolates, i = el(this, e.from, e.to))))
        return r.order;
    i || (i = el(this, e.from, e.to));
    let s = ld(e.text, t, i);
    return this.bidiCache.push(new Un(e.from, e.to, t, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || Z.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      th(this.contentDOM), this.docView.updateSelection();
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
    return Ko.of(new _n(typeof e == "number" ? b.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
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
    return J.define(() => ({}), { eventHandlers: e });
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
    return J.define(() => ({}), { eventObservers: e });
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
    let i = xt.newName(), s = [hn.of(i), gi.of(Cr(`.${i}`, e))];
    return t && t.dark && s.push(Pr.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Wt.lowest(gi.of(Cr("." + Zr, e, qh)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), s = i && z.get(i) || z.get(e);
    return ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
v.styleModule = gi;
v.inputHandler = mh;
v.focusChangeEffect = Sh;
v.perLineTextDirection = bh;
v.exceptionSink = gh;
v.updateListener = yr;
v.editable = us;
v.mouseSelectionStyle = ph;
v.dragMovesSelection = Oh;
v.clickAddsSelectionRange = dh;
v.decorations = Ai;
v.atomicRanges = ro;
v.bidiIsolatedRanges = wh;
v.scrollMargins = Qh;
v.darkTheme = Pr;
v.cspNonce = /* @__PURE__ */ P.define({ combine: (n) => n.length ? n[0] : "" });
v.contentAttributes = so;
v.editorAttributes = xh;
v.lineWrapping = /* @__PURE__ */ v.contentAttributes.of({ class: "cm-lineWrapping" });
v.announce = /* @__PURE__ */ A.define();
const cO = 4096, kl = {};
class Un {
  constructor(e, t, i, s, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : G.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && i.push(new Un(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function $l(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s], o = typeof r == "function" ? r(n) : r;
    o && mr(o, t);
  }
  return t;
}
const fO = Z.mac ? "mac" : Z.windows ? "win" : Z.linux ? "linux" : "key";
function uO(n, e) {
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
function cn(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
const dO = /* @__PURE__ */ Wt.default(/* @__PURE__ */ v.domEventHandlers({
  keydown(n, e) {
    return Nh(Vh(e.state), n, e, "editor");
  }
})), qi = /* @__PURE__ */ P.define({ enables: dO }), vl = /* @__PURE__ */ new WeakMap();
function Vh(n) {
  let e = n.facet(qi), t = vl.get(e);
  return t || vl.set(e, t = gO(e.reduce((i, s) => i.concat(s), []))), t;
}
function OO(n, e, t) {
  return Nh(Vh(n.state), e, n, t);
}
let dt = null;
const pO = 4e3;
function gO(n, e = fO) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), O = l.split(/ (?!$)/).map((S) => uO(S, e));
    for (let S = 1; S < O.length; S++) {
      let w = O.slice(0, S).join(" ");
      s(w, !0), d[w] || (d[w] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [($) => {
          let y = dt = { view: $, prefix: w, scope: o };
          return setTimeout(() => {
            dt == y && (dt = null);
          }, pO), !0;
        }]
      });
    }
    let m = O.join(" ");
    s(m, !1);
    let g = d[m] || (d[m] = {
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
function Nh(n, e, t, i) {
  let s = Uu(e), r = ce(s, 0), o = Ae(r) == s.length && s != " ", l = "", a = !1, h = !1, c = !1;
  dt && dt.view == t && dt.scope == i && (l = dt.prefix + " ", Rh.indexOf(e.keyCode) < 0 && (h = !0, dt = null));
  let f = /* @__PURE__ */ new Set(), u = (g) => {
    if (g) {
      for (let S of g.run)
        if (!f.has(S) && (f.add(S), S(t, e)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = n[i], O, m;
  return d && (u(d[l + cn(s, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(Z.windows && e.ctrlKey && e.altKey) && (O = wt[e.keyCode]) && O != s ? (u(d[l + cn(O, e, !0)]) || e.shiftKey && (m = Ti[e.keyCode]) != s && m != O && u(d[l + cn(m, e, !1)])) && (a = !0) : o && e.shiftKey && u(d[l + cn(s, e, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), a;
}
class zi {
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
      let r = Gh(e);
      return [new zi(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return mO(e, t, i);
  }
}
function Gh(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == G.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function Pl(n, e, t) {
  let i = b.cursor(e);
  return {
    from: Math.max(t.from, n.moveToLineBoundary(i, !1, !0).from),
    to: Math.min(t.to, n.moveToLineBoundary(i, !0, !0).from),
    type: be.Text
  };
}
function mO(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), s = Math.min(t.to, n.viewport.to), r = n.textDirection == G.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = Gh(n), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = $r(n, i), O = $r(n, s), m = d.type == be.Text ? d : null, g = O.type == be.Text ? O : null;
  if (m && (n.lineWrapping || d.widgetLineBreaks) && (m = Pl(n, i, m)), g && (n.lineWrapping || O.widgetLineBreaks) && (g = Pl(n, s, g)), m && g && m.from == g.from)
    return w($(t.from, t.to, m));
  {
    let x = m ? $(t.from, null, m) : y(d, !1), Q = g ? $(null, t.to, g) : y(O, !0), C = [];
    return (m || d).to < (g || O).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && x.bottom + n.defaultLineHeight / 2 < Q.top ? C.push(S(f, x.bottom, u, Q.top)) : x.bottom < Q.top && n.elementAtHeight((x.bottom + Q.top) / 2).type == be.Text && (x.bottom = Q.top = (x.bottom + Q.top) / 2), w(x).concat(C).concat(w(Q));
  }
  function S(x, Q, C, M) {
    return new zi(
      e,
      x - a.left,
      Q - a.top - 0.01,
      C - x,
      M - Q + 0.01
      /* C.Epsilon */
    );
  }
  function w({ top: x, bottom: Q, horizontal: C }) {
    let M = [];
    for (let X = 0; X < C.length; X += 2)
      M.push(S(C[X], x, C[X + 1], Q));
    return M;
  }
  function $(x, Q, C) {
    let M = 1e9, X = -1e9, R = [];
    function B(de, te, le, T, N) {
      let E = n.coordsAtPos(de, de == C.to ? -2 : 2), I = n.coordsAtPos(le, le == C.from ? 2 : -2);
      !E || !I || (M = Math.min(E.top, I.top, M), X = Math.max(E.bottom, I.bottom, X), N == G.LTR ? R.push(r && te ? f : E.left, r && T ? u : I.right) : R.push(!r && T ? f : I.left, !r && te ? u : E.right));
    }
    let F = x ?? C.from, ee = Q ?? C.to;
    for (let de of n.visibleRanges)
      if (de.to > F && de.from < ee)
        for (let te = Math.max(de.from, F), le = Math.min(de.to, ee); ; ) {
          let T = n.state.doc.lineAt(te);
          for (let N of n.bidiSpans(T)) {
            let E = N.from + T.from, I = N.to + T.from;
            if (E >= le)
              break;
            I > te && B(Math.max(E, te), x == null && E <= F, Math.min(I, le), Q == null && I >= ee, N.dir);
          }
          if (te = T.to + 1, te >= le)
            break;
        }
    return R.length == 0 && B(F, x == null, ee, Q == null, n.textDirection), { top: M, bottom: X, horizontal: R };
  }
  function y(x, Q) {
    let C = l.top + (Q ? x.top : x.bottom);
    return { top: C, bottom: C, horizontal: [] };
  }
}
function SO(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class bO {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Zn) != e.state.facet(Zn) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  setOrder(e) {
    let t = 0, i = e.facet(Zn);
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
    if (e.length != this.drawn.length || e.some((t, i) => !SO(t, this.drawn[i]))) {
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
const Zn = /* @__PURE__ */ P.define();
function Fh(n) {
  return [
    J.define((e) => new bO(e, n)),
    Zn.of(n)
  ];
}
const Hh = !Z.ios, Ri = /* @__PURE__ */ P.define({
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
function yO(n = {}) {
  return [
    Ri.of(n),
    xO,
    wO,
    QO,
    yh.of(!0)
  ];
}
function Jh(n) {
  return n.startState.facet(Ri) != n.state.facet(Ri);
}
const xO = /* @__PURE__ */ Fh({
  above: !0,
  markers(n) {
    let { state: e } = n, t = e.facet(Ri), i = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty ? !r || Hh : t.drawRangeCursor) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : b.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of zi.forRange(n, o, l))
          i.push(a);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Jh(n);
    return t && Zl(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    Zl(e.state, n);
  },
  class: "cm-cursorLayer"
});
function Zl(n, e) {
  e.style.animationDuration = n.facet(Ri).cursorBlinkRate + "ms";
}
const wO = /* @__PURE__ */ Fh({
  above: !1,
  markers(n) {
    return n.state.selection.ranges.map((e) => e.empty ? [] : zi.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || Jh(n);
  },
  class: "cm-selectionLayer"
}), Kh = {
  ".cm-line": {
    "& ::selection": { backgroundColor: "transparent !important" },
    "&::selection": { backgroundColor: "transparent !important" }
  }
};
Hh && (Kh[".cm-line"].caretColor = "transparent !important");
const QO = /* @__PURE__ */ Wt.highest(/* @__PURE__ */ v.theme(Kh)), ec = /* @__PURE__ */ A.define({
  map(n, e) {
    return n == null ? null : e.mapPos(n);
  }
}), bi = /* @__PURE__ */ ae.define({
  create() {
    return null;
  },
  update(n, e) {
    return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(ec) ? i.value : t, n);
  }
}), kO = /* @__PURE__ */ J.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(bi);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(bi) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(bi), t = e != null && n.coordsAtPos(e);
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
    this.view.state.field(bi) != n && this.view.dispatch({ effects: ec.of(n) });
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
function $O() {
  return [bi, kO];
}
function Cl(n, e, t, i, s) {
  e.lastIndex = 0;
  for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = e.exec(r.value); )
        s(o + l.index, l);
}
function vO(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to)
    return t;
  let i = [];
  for (let { from: s, to: r } of t)
    s = Math.max(n.state.doc.lineAt(s).from, s - e), r = Math.min(n.state.doc.lineAt(r).to, r + e), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({ from: s, to: r });
  return i;
}
class PO {
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
    let t = new yt(), i = t.add.bind(t);
    for (let { from: s, to: r } of vO(e, this.maxLength))
      Cl(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i));
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
        let u = [], d, O = (m, g, S) => u.push(S.range(m, g));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, e, d.index + a.from, O);
        else
          Cl(e.state.doc, this.regexp, c, f, (m, g) => this.addMatch(g, e, m, O));
        t = t.update({ filterFrom: c, filterTo: f, filter: (m, g) => m < c || g > f, add: u });
      }
    }
    return t;
  }
}
const Tr = /x/.unicode != null ? "gu" : "g", ZO = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Tr), CO = {
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
let Ys = null;
function TO() {
  var n;
  if (Ys == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Ys = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return Ys || !1;
}
const Cn = /* @__PURE__ */ P.define({
  combine(n) {
    let e = tt(n, {
      render: null,
      specialChars: ZO,
      addSpecialChars: null
    });
    return (e.replaceTabs = !TO()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Tr)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Tr)), e;
  }
});
function YO(n = {}) {
  return [Cn.of(n), AO()];
}
let Tl = null;
function AO() {
  return Tl || (Tl = J.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = Y.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(Cn)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new PO({
        regexp: n.specialChars,
        decoration: (e, t, i) => {
          let { doc: s } = t.state, r = ce(e[0], 0);
          if (r == 9) {
            let o = s.lineAt(i), l = t.state.tabSize, a = ri(o.text, l, i - o.from);
            return Y.replace({
              widget: new WO((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = Y.replace({ widget: new MO(n, r) }));
        },
        boundary: n.replaceTabs ? void 0 : /[^]/
      });
    }
    update(n) {
      let e = n.state.facet(Cn);
      n.startState.facet(Cn) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, {
    decorations: (n) => n.decorations
  }));
}
const XO = "•";
function RO(n) {
  return n >= 32 ? XO : n == 10 ? "␤" : String.fromCharCode(9216 + n);
}
class MO extends it {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = RO(this.code), i = e.state.phrase("Control character") + " " + (CO[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, t);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = t, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class WO extends it {
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
function DO() {
  return EO;
}
const _O = /* @__PURE__ */ Y.line({ class: "cm-activeLine" }), EO = /* @__PURE__ */ J.fromClass(class {
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
      s.from > e && (t.push(_O.range(s.from)), e = s.from);
    }
    return Y.set(t);
  }
}, {
  decorations: (n) => n.decorations
});
class UO extends it {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content), typeof this.content == "string" ? e.setAttribute("aria-label", "placeholder " + this.content) : e.setAttribute("aria-hidden", "true"), e;
  }
  coordsAt(e) {
    let t = e.firstChild ? ei(e.firstChild) : [];
    if (!t.length)
      return null;
    let i = window.getComputedStyle(e.parentNode), s = cs(t[0], i.direction != "rtl"), r = parseInt(i.lineHeight);
    return s.bottom - s.top > r * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + r } : s;
  }
  ignoreEvent() {
    return !1;
  }
}
function BO(n) {
  return J.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = n ? Y.set([Y.widget({ widget: new UO(n), side: 1 }).range(0)]) : Y.none;
    }
    get decorations() {
      return this.view.state.doc.length ? Y.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
}
const Yr = 2e3;
function IO(n, e, t) {
  let i = Math.min(e.line, t.line), s = Math.max(e.line, t.line), r = [];
  if (e.off > Yr || t.off > Yr || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && r.push(b.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a), c = cr(h.text, o, n.tabSize, !0);
      if (c < 0)
        r.push(b.cursor(h.to));
      else {
        let f = cr(h.text, l, n.tabSize);
        r.push(b.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function jO(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function Yl(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), i = n.state.doc.lineAt(t), s = t - i.from, r = s > Yr ? -1 : s == i.length ? jO(n, e.clientX) : ri(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: r, off: s };
}
function LO(n, e) {
  let t = Yl(n, e), i = n.state.selection;
  return t ? {
    update(s) {
      if (s.docChanged) {
        let r = s.changes.mapPos(s.startState.doc.line(t.line).from), o = s.state.doc.lineAt(r);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, i = i.map(s.changes);
      }
    },
    get(s, r, o) {
      let l = Yl(n, s);
      if (!l)
        return i;
      let a = IO(n.state, t, l);
      return a.length ? o ? b.create(a.concat(i.ranges)) : b.create(a) : i;
    }
  } : null;
}
function qO(n) {
  let e = (n == null ? void 0 : n.eventFilter) || ((t) => t.altKey && t.button == 0);
  return v.mouseSelectionStyle.of((t, i) => e(i) ? LO(t, i) : null);
}
const zO = {
  Alt: [18, (n) => !!n.altKey],
  Control: [17, (n) => !!n.ctrlKey],
  Shift: [16, (n) => !!n.shiftKey],
  Meta: [91, (n) => !!n.metaKey]
}, VO = { style: "cursor: crosshair" };
function NO(n = {}) {
  let [e, t] = zO[n.key || "Alt"], i = J.fromClass(class {
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
    v.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? VO : null;
    })
  ];
}
const fn = "-10000px";
class tc {
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
function GO(n) {
  let { win: e } = n;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const As = /* @__PURE__ */ P.define({
  combine: (n) => {
    var e, t, i;
    return {
      position: Z.ios ? "absolute" : ((e = n.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = n.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || GO
    };
  }
}), Al = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ J.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(As);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.manager = new tc(n, lo, (t) => this.createTooltip(t)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
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
    return e.dom.style.position = this.position, e.dom.style.top = fn, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e;
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
        c.style.top = fn;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, O = d ? 7 : 0, m = u.right - u.left, g = (e = Al.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top, S = h.offset || HO, w = this.view.textDirection == G.LTR, $ = u.width > i.right - i.left ? w ? i.left : i.right - u.width : w ? Math.min(f.left - (d ? 14 : 0) + S.x, i.right - m) : Math.max(i.left, f.left - m + (d ? 14 : 0) - S.x), y = this.above[l];
      !a.strictSide && (y ? f.top - (u.bottom - u.top) - S.y < i.top : f.bottom + (u.bottom - u.top) + S.y > i.bottom) && y == i.bottom - f.bottom > f.top - i.top && (y = this.above[l] = !y);
      let x = (y ? f.top - i.top : i.bottom - f.bottom) - O;
      if (x < g && h.resize !== !1) {
        if (x < this.view.defaultLineHeight) {
          c.style.top = fn;
          continue;
        }
        Al.set(h, g), c.style.height = (g = x) / r + "px";
      } else
        c.style.height && (c.style.height = "");
      let Q = y ? f.top - g - O - S.y : f.bottom + O + S.y, C = $ + m;
      if (h.overlap !== !0)
        for (let M of o)
          M.left < C && M.right > $ && M.top < Q + g && M.bottom > Q && (Q = y ? M.top - g - 2 - O : M.bottom + O + 2);
      if (this.position == "absolute" ? (c.style.top = (Q - n.parent.top) / r + "px", c.style.left = ($ - n.parent.left) / s + "px") : (c.style.top = Q / r + "px", c.style.left = $ / s + "px"), d) {
        let M = f.left + (w ? S.x : -S.x) - ($ + 14 - 7);
        d.style.left = M / s + "px";
      }
      h.overlap !== !0 && o.push({ left: $, top: Q, right: C, bottom: Q + g }), c.classList.toggle("cm-tooltip-above", y), c.classList.toggle("cm-tooltip-below", !y), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = fn;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), FO = /* @__PURE__ */ v.baseTheme({
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
}), HO = { x: 0, y: 0 }, lo = /* @__PURE__ */ P.define({
  enables: [ic, FO]
}), Bn = /* @__PURE__ */ P.define();
class ao {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new ao(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new tc(e, Bn, (t) => this.createHostedView(t));
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
const JO = /* @__PURE__ */ lo.compute([Bn], (n) => {
  let e = n.facet(Bn).filter((t) => t);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.filter((t) => t.end != null).map((t) => t.end)),
    create: ao.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class KO {
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
    if (i instanceof pt)
      s = i.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null)
        return;
      let l = e.coordsAtPos(s);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == G.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && e.dispatch({ effects: this.setHover.of(a) }));
      }, (a) => De(e.state, a, "hover tooltip"));
    } else
      o && e.dispatch({ effects: this.setHover.of(o) });
  }
  mousemove(e) {
    var t;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let i = this.active;
    if (i && !Xl(this.lastMove.target) || this.pending) {
      let { pos: s } = i || this.pending, r = (t = i == null ? void 0 : i.end) !== null && t !== void 0 ? t : s;
      (s == r ? this.view.posAtCoords(this.lastMove) != s : !ep(this.view, s, r, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of(null) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && !Xl(e.relatedTarget) && this.view.dispatch({ effects: this.setHover.of(null) });
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
function Xl(n) {
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
  let t = A.define(), i = ae.define({
    create() {
      return null;
    },
    update(s, r) {
      if (s && (e.hideOnChange && (r.docChanged || r.selection) || e.hideOn && e.hideOn(r, s)))
        return null;
      if (s && r.docChanged) {
        let o = r.changes.mapPos(s.pos, -1, ue.TrackDel);
        if (o == null)
          return null;
        let l = Object.assign(/* @__PURE__ */ Object.create(null), s);
        l.pos = o, s.end != null && (l.end = r.changes.mapPos(s.end)), s = l;
      }
      for (let o of r.effects)
        o.is(t) && (s = o.value), o.is(ip) && (s = null);
      return s;
    },
    provide: (s) => Bn.from(s)
  });
  return [
    i,
    J.define((s) => new KO(
      s,
      n,
      i,
      t,
      e.hoverTime || 300
      /* Hover.Time */
    )),
    JO
  ];
}
function nc(n, e) {
  let t = n.plugin(ic);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const ip = /* @__PURE__ */ A.define(), Rl = /* @__PURE__ */ P.define({
  combine(n) {
    let e, t;
    for (let i of n)
      e = e || i.topContainer, t = t || i.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function Mi(n, e) {
  let t = n.plugin(sc), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const sc = /* @__PURE__ */ J.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(Wi), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(Rl);
    this.top = new un(n, !0, e.topContainer), this.bottom = new un(n, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(Rl);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new un(n.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new un(n.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(Wi);
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
  provide: (n) => v.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class un {
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
          e = Ml(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = Ml(e);
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
function Ml(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Wi = /* @__PURE__ */ P.define({
  enables: sc
});
class at extends Xt {
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
at.prototype.mapMode = ue.TrackBefore;
at.prototype.startSide = at.prototype.endSide = -1;
at.prototype.point = !0;
const Tn = /* @__PURE__ */ P.define(), np = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => U.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, $i = /* @__PURE__ */ P.define();
function sp(n) {
  return [rc(), $i.of(Object.assign(Object.assign({}, np), n))];
}
const Ar = /* @__PURE__ */ P.define({
  combine: (n) => n.some((e) => e)
});
function rc(n) {
  let e = [
    rp
  ];
  return n && n.fixed === !1 && e.push(Ar.of(!0)), e;
}
const rp = /* @__PURE__ */ J.fromClass(class {
  constructor(n) {
    this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet($i).map((e) => new Dl(n, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !n.state.facet(Ar), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(Ar) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && this.dom.remove();
    let t = U.iter(this.view.state.facet(Tn), this.view.viewport.from), i = [], s = this.gutters.map((r) => new op(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == be.Text && o) {
            Xr(t, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == be.Text) {
        Xr(t, i, r.from);
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
    let e = n.startState.facet($i), t = n.state.facet($i), i = n.docChanged || n.heightChanged || n.viewportChanged || !U.eq(n.startState.facet(Tn), n.state.facet(Tn), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(n) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new Dl(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]));
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
  provide: (n) => v.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == G.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
  })
});
function Wl(n) {
  return Array.isArray(n) ? n : [n];
}
function Xr(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class op {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = U.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new oc(e, o, r, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let s = [];
    Xr(this.cursor, s, t.from), i.length && (s = s.concat(i));
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
class Dl {
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
    this.markers = Wl(t.markers(e)), t.initialSpacer && (this.spacer = new oc(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Wl(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !U.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class oc {
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
const ap = /* @__PURE__ */ P.define(), Lt = /* @__PURE__ */ P.define({
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
class Xs extends at {
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
function Rs(n, e) {
  return n.state.facet(Lt).formatNumber(e, n.state);
}
const hp = /* @__PURE__ */ $i.compute([Lt], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(ap);
  },
  lineMarker(e, t, i) {
    return i.some((s) => s.toDOM) ? null : new Xs(Rs(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet(Lt) != e.state.facet(Lt),
  initialSpacer(e) {
    return new Xs(Rs(e, _l(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = Rs(t.view, _l(t.view.state.doc.lines));
    return i == e.number ? e : new Xs(i);
  },
  domEventHandlers: n.facet(Lt).domEventHandlers
}));
function cp(n = {}) {
  return [
    Lt.of(n),
    rc(),
    hp
  ];
}
function _l(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const fp = /* @__PURE__ */ new class extends at {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), up = /* @__PURE__ */ Tn.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    s > t && (t = s, e.push(fp.range(s)));
  }
  return U.of(e);
});
function dp() {
  return up;
}
const lc = 1024;
let Op = 0;
class Ms {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class W {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = Op++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
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
    return typeof e != "function" && (e = $e.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
W.closedBy = new W({ deserialize: (n) => n.split(" ") });
W.openedBy = new W({ deserialize: (n) => n.split(" ") });
W.group = new W({ deserialize: (n) => n.split(" ") });
W.contextHash = new W({ perNode: !0 });
W.lookAhead = new W({ perNode: !0 });
W.mounted = new W({ perNode: !0 });
class In {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[W.mounted.id];
  }
}
const pp = /* @__PURE__ */ Object.create(null);
class $e {
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
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : pp, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new $e(e.name || "", t, e.id, i);
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
      let t = this.prop(W.group);
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
      for (let s = i.prop(W.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? i.name : s[r]];
        if (o)
          return o;
      }
    };
  }
}
$e.none = new $e(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class ho {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let s = null;
      for (let r of e) {
        let o = r(i);
        o && (s || (s = Object.assign({}, i.props)), s[o[0].id] = o[1]);
      }
      t.push(s ? new $e(i.name, s, i.id, i.flags) : i);
    }
    return new ho(t);
  }
}
const dn = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap();
var se;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(se || (se = {}));
class K {
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
    let e = In.get(this);
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
    return new Mr(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, i = 0) {
    let s = dn.get(this) || this.topNode, r = new Mr(s);
    return r.moveTo(e, t), dn.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new ke(this, 0, 0, null);
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
    let i = Di(dn.get(this) || this.topNode, e, t, !1);
    return dn.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = Di(El.get(this) || this.topNode, e, t, !0);
    return El.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return Sp(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: i, from: s = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & se.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | se.IncludeAnonymous); ; ) {
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
    return this.children.length <= 8 ? this : uo($e.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, s) => new K(this.type, t, i, s, this.propValues), e.makeTree || ((t, i, s) => new K($e.none, t, i, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return bp(e);
  }
}
K.empty = new K($e.none, [], [], 0);
class co {
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
    return new co(this.buffer, this.index);
  }
}
class Dt {
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
    return $e.none;
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
    for (let a = e; a != t && !(ac(r, s, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
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
    return new Dt(r, o, this.set);
  }
}
function ac(n, e, t, i) {
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
function Di(n, e, t, i) {
  for (var s; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let o = !i && n instanceof ke && n.index < 0 ? null : n.parent;
    if (!o)
      return n;
    n = o;
  }
  let r = i ? 0 : se.IgnoreOverlays;
  if (i)
    for (let o = n, l = o.parent; l; o = l, l = o.parent)
      o instanceof ke && o.index < 0 && ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (n = l);
  for (; ; ) {
    let o = n.enter(e, t, r);
    if (!o)
      return n;
    n = o;
  }
}
class hc {
  cursor(e = 0) {
    return new Mr(this, e);
  }
  getChild(e, t = null, i = null) {
    let s = Ul(this, e, t, i);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Ul(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Di(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Di(this, e, t, !0);
  }
  matchContext(e) {
    return Rr(this, e);
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
class ke extends hc {
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
        if (ac(s, i, f, f + c.length)) {
          if (c instanceof Dt) {
            if (r & se.ExcludeBuffers)
              continue;
            let u = c.findChild(0, c.buffer.length, t, i - f, s);
            if (u > -1)
              return new Fe(new gp(o, c, e, f), null, u);
          } else if (r & se.IncludeAnonymous || !c.type.isAnonymous || fo(c)) {
            let u;
            if (!(r & se.IgnoreMounts) && (u = In.get(c)) && !u.overlay)
              return new ke(u.tree, f, e, o);
            let d = new ke(c, f, e, o);
            return r & se.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s);
          }
        }
      }
      if (r & se.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
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
    if (!(i & se.IgnoreOverlays) && (s = In.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new ke(s.tree, s.overlay[0].from + this.from, -1, this);
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
function Ul(n, e, t, i) {
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
function Rr(n, e, t = e.length - 1) {
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
class gp {
  constructor(e, t, i, s) {
    this.parent = e, this.buffer = t, this.index = i, this.start = s;
  }
}
class Fe extends hc {
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
    return r < 0 ? null : new Fe(this.context, this, r);
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
    if (i & se.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new Fe(this.context, this, r);
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
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Fe(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Fe(this.context, this._parent, e.findChild(
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
    return new K(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function cc(n) {
  if (!n.length)
    return null;
  if (n.length == 1)
    return n[0];
  let e = 0, t = n[0];
  for (let r = 1; r < n.length; r++) {
    let o = n[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let i = t instanceof ke && t.index < 0 ? null : t.parent, s = n.slice();
  return i ? s[e] = i : s.splice(e, 1), new mp(s, t);
}
class mp {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return cc(this.heads);
  }
}
function Sp(n, e, t) {
  let i = n.resolveInner(e, t), s = null;
  for (let r = i instanceof ke ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [i])).push(o.resolve(e, t)), r = o;
    } else {
      let o = In.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new ke(o.tree, o.overlay[0].from + r.from, 0, null);
        (s || (s = [i])).push(Di(l, e, t, !1));
      }
    }
  return s ? cc(s) : i;
}
class Mr {
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
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof ke)
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
    return e ? e instanceof ke ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
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
    return this.buffer ? i & se.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & se.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & se.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
          if (this.mode & se.IncludeAnonymous || l instanceof Dt || !l.type.isAnonymous || fo(l))
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
      t = new Fe(this.buffer, t, this.stack[s]);
    return this.bufferNode = new Fe(this.buffer, t, this.index);
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
      return Rr(this.node, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0)
        return Rr(this.node, e, s);
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
function fo(n) {
  return n.children.some((e) => e instanceof Dt || !e.type.isAnonymous || fo(e));
}
function bp(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: s = lc, reused: r = [], minRepeatType: o = i.types.length } = n, l = Array.isArray(t) ? new co(t, t.length) : t, a = i.types, h = 0, c = 0;
  function f(y, x, Q, C, M) {
    let { id: X, start: R, end: B, size: F } = l, ee = c;
    for (; F < 0; )
      if (l.next(), F == -1) {
        let N = r[X];
        Q.push(N), C.push(R - y);
        return;
      } else if (F == -3) {
        h = X;
        return;
      } else if (F == -4) {
        c = X;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${F}`);
    let de = a[X], te, le, T = R - y;
    if (B - R <= s && (le = m(l.pos - x, M))) {
      let N = new Uint16Array(le.size - le.skip), E = l.pos - le.size, I = N.length;
      for (; l.pos > E; )
        I = g(le.start, N, I);
      te = new Dt(N, B - le.start, i), T = le.start - y;
    } else {
      let N = l.pos - F;
      l.next();
      let E = [], I = [], Ue = X >= o ? X : -1, Be = 0, ct = B;
      for (; l.pos > N; )
        Ue >= 0 && l.id == Ue && l.size >= 0 ? (l.end <= ct - s && (d(E, I, R, Be, l.end, ct, Ue, ee), Be = E.length, ct = l.end), l.next()) : f(R, N, E, I, Ue);
      if (Ue >= 0 && Be > 0 && Be < E.length && d(E, I, R, Be, R, ct, Ue, ee), E.reverse(), I.reverse(), Ue > -1 && Be > 0) {
        let Ie = u(de);
        te = uo(de, E, I, 0, E.length, 0, B - R, Ie, Ie);
      } else
        te = O(de, E, I, B - R, ee - B);
    }
    Q.push(te), C.push(T);
  }
  function u(y) {
    return (x, Q, C) => {
      let M = 0, X = x.length - 1, R, B;
      if (X >= 0 && (R = x[X]) instanceof K) {
        if (!X && R.type == y && R.length == C)
          return R;
        (B = R.prop(W.lookAhead)) && (M = Q[X] + R.length + B);
      }
      return O(y, x, Q, C, M);
    };
  }
  function d(y, x, Q, C, M, X, R, B) {
    let F = [], ee = [];
    for (; y.length > C; )
      F.push(y.pop()), ee.push(x.pop() + Q - M);
    y.push(O(i.types[R], F, ee, X - M, B - X)), x.push(M - Q);
  }
  function O(y, x, Q, C, M = 0, X) {
    if (h) {
      let R = [W.contextHash, h];
      X = X ? [R].concat(X) : [R];
    }
    if (M > 25) {
      let R = [W.lookAhead, M];
      X = X ? [R].concat(X) : [R];
    }
    return new K(y, x, Q, C, X);
  }
  function m(y, x) {
    let Q = l.fork(), C = 0, M = 0, X = 0, R = Q.end - s, B = { size: 0, start: 0, skip: 0 };
    e:
      for (let F = Q.pos - y; Q.pos > F; ) {
        let ee = Q.size;
        if (Q.id == x && ee >= 0) {
          B.size = C, B.start = M, B.skip = X, X += 4, C += 4, Q.next();
          continue;
        }
        let de = Q.pos - ee;
        if (ee < 0 || de < F || Q.start < R)
          break;
        let te = Q.id >= o ? 4 : 0, le = Q.start;
        for (Q.next(); Q.pos > de; ) {
          if (Q.size < 0)
            if (Q.size == -3)
              te += 4;
            else
              break e;
          else
            Q.id >= o && (te += 4);
          Q.next();
        }
        M = le, C += ee, X += te;
      }
    return (x < 0 || C == y) && (B.size = C, B.start = M, B.skip = X), B.size > 4 ? B : void 0;
  }
  function g(y, x, Q) {
    let { id: C, start: M, end: X, size: R } = l;
    if (l.next(), R >= 0 && C < o) {
      let B = Q;
      if (R > 4) {
        let F = l.pos - (R - 4);
        for (; l.pos > F; )
          Q = g(y, x, Q);
      }
      x[--Q] = B, x[--Q] = X - y, x[--Q] = M - y, x[--Q] = C;
    } else
      R == -3 ? h = C : R == -4 && (c = C);
    return Q;
  }
  let S = [], w = [];
  for (; l.pos > 0; )
    f(n.start || 0, n.bufferStart || 0, S, w, -1);
  let $ = (e = n.length) !== null && e !== void 0 ? e : S.length ? w[0] + S[0].length : 0;
  return new K(a[n.topID], S.reverse(), w.reverse(), $);
}
const Bl = /* @__PURE__ */ new WeakMap();
function Yn(n, e) {
  if (!n.isAnonymous || e instanceof Dt || e.type != n)
    return 1;
  let t = Bl.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof K)) {
        t = 1;
        break;
      }
      t += Yn(n, i);
    }
    Bl.set(e, t);
  }
  return t;
}
function uo(n, e, t, i, s, r, o, l, a) {
  let h = 0;
  for (let O = i; O < s; O++)
    h += Yn(n, e[O]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(O, m, g, S, w) {
    for (let $ = g; $ < S; ) {
      let y = $, x = m[$], Q = Yn(n, O[$]);
      for ($++; $ < S; $++) {
        let C = Yn(n, O[$]);
        if (Q + C >= c)
          break;
        Q += C;
      }
      if ($ == y + 1) {
        if (Q > c) {
          let C = O[y];
          d(C.children, C.positions, 0, C.children.length, m[y] + w);
          continue;
        }
        f.push(O[y]);
      } else {
        let C = m[$ - 1] + O[$ - 1].length - x;
        f.push(uo(n, O, m, y, $, x, C, null, a));
      }
      u.push(x + w - r);
    }
  }
  return d(e, t, i, s, 0), (l || a)(f, u, o);
}
class yp {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, i) {
    let s = this.map.get(e);
    s || this.map.set(e, s = /* @__PURE__ */ new Map()), s.set(t, i);
  }
  getBuffer(e, t) {
    let i = this.map.get(e);
    return i && i.get(t);
  }
  /**
  Set the value for this syntax node.
  */
  set(e, t) {
    e instanceof Fe ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof ke && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof Fe ? this.getBuffer(e.context.buffer, e.index) : e instanceof ke ? this.map.get(e.tree) : void 0;
  }
  /**
  Set the value for the node that a cursor currently points to.
  */
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  /**
  Retrieve the value for the node that a cursor currently points
  to.
  */
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
class Yt {
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
    let s = [new Yt(0, e.length, e, 0, !1, i)];
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
            let d = Math.max(u.from, a) - h, O = Math.min(u.to, f) - h;
            u = d >= O ? null : new Yt(d, O, u.tree, u.offset + h, l > 0, !!c);
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
class fc {
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
    return typeof e == "string" && (e = new xp(e)), i = i ? i.length ? i.map((s) => new Ms(s.from, s.to)) : [new Ms(0, 0)] : [new Ms(0, e.length)], this.createParse(e, t || [], i);
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
class xp {
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
new W({ perNode: !0 });
let wp = 0;
class Ve {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.set = e, this.base = t, this.modified = i, this.id = wp++;
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
    let t = new Ve([], null, []);
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
    let e = new jn();
    return (t) => t.modified.indexOf(e) > -1 ? t : jn.get(t.base || t, t.modified.concat(e).sort((i, s) => i.id - s.id));
  }
}
let Qp = 0;
class jn {
  constructor() {
    this.instances = [], this.id = Qp++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && kp(t, l.modified));
    if (i)
      return i;
    let s = [], r = new Ve(s, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = $p(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          s.push(jn.get(l, a));
    return r;
  }
}
function kp(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function $p(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, s = e.length; i < s; i++)
      e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function uc(n) {
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
        let c = new Ln(i, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return dc.add(e);
}
const dc = new W();
class Ln {
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
Ln.empty = new Ln([], 2, null);
function Oc(n, e) {
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
function vp(n, e) {
  let t = null;
  for (let i of n) {
    let s = i.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function Pp(n, e, t, i = 0, s = n.length) {
  let r = new Zp(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(n.cursor(), i, s, "", r.highlighters), r.flush(s);
}
class Zp {
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
    let h = s, c = Cp(e) || Ln.empty, f = vp(r, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(t, l), h), c.opaque)
      return;
    let u = e.tree && e.tree.prop(W.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), O = this.highlighters.filter((g) => !g.scope || g.scope(u.tree.type)), m = e.firstChild();
      for (let g = 0, S = l; ; g++) {
        let w = g < u.overlay.length ? u.overlay[g] : null, $ = w ? w.from + l : a, y = Math.max(t, S), x = Math.min(i, $);
        if (y < x && m)
          for (; e.from < x && (this.highlightRange(e, y, x, s, r), this.startSpan(Math.min(x, e.to), h), !(e.to >= $ || !e.nextSibling())); )
            ;
        if (!w || $ > i)
          break;
        S = w.to + l, S > t && (this.highlightRange(d.cursor(), Math.max(t, w.from + l), Math.min(i, S), "", O), this.startSpan(Math.min(i, S), h));
      }
      m && e.parent();
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
function Cp(n) {
  let e = n.type.prop(dc);
  for (; e && e.context && !n.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const k = Ve.define, On = k(), ft = k(), Il = k(ft), jl = k(ft), ut = k(), pn = k(ut), Ws = k(ut), ze = k(), vt = k(ze), Le = k(), qe = k(), Wr = k(), fi = k(Wr), gn = k(), p = {
  /**
  A comment.
  */
  comment: On,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: k(On),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: k(On),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: k(On),
  /**
  Any kind of identifier.
  */
  name: ft,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: k(ft),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Il,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: k(Il),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: jl,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: k(jl),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: k(ft),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: k(ft),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: k(ft),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: k(ft),
  /**
  A literal value.
  */
  literal: ut,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: pn,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: k(pn),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: k(pn),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: k(pn),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Ws,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: k(Ws),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: k(Ws),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: k(ut),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: k(ut),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: k(ut),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: k(ut),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: k(ut),
  /**
  A language keyword.
  */
  keyword: Le,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: k(Le),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: k(Le),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: k(Le),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: k(Le),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: k(Le),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: k(Le),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: k(Le),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: k(Le),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: k(Le),
  /**
  An operator.
  */
  operator: qe,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: k(qe),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: k(qe),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: k(qe),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: k(qe),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: k(qe),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: k(qe),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: k(qe),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: k(qe),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: k(qe),
  /**
  Program or markup punctuation.
  */
  punctuation: Wr,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: k(Wr),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: fi,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: k(fi),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: k(fi),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: k(fi),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: k(fi),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: ze,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: vt,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: k(vt),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: k(vt),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: k(vt),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: k(vt),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: k(vt),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: k(vt),
  /**
  A prose separator (such as a horizontal rule).
  */
  contentSeparator: k(ze),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: k(ze),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: k(ze),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: k(ze),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: k(ze),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: k(ze),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: k(ze),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: k(ze),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: k(),
  /**
  Deleted text.
  */
  deleted: k(),
  /**
  Changed text.
  */
  changed: k(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: k(),
  /**
  Metadata or meta-instruction.
  */
  meta: gn,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: k(gn),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: k(gn),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: k(gn),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Ve.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Ve.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Ve.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Ve.defineModifier(),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Ve.defineModifier(),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Ve.defineModifier()
};
Oc([
  { tag: p.link, class: "tok-link" },
  { tag: p.heading, class: "tok-heading" },
  { tag: p.emphasis, class: "tok-emphasis" },
  { tag: p.strong, class: "tok-strong" },
  { tag: p.keyword, class: "tok-keyword" },
  { tag: p.atom, class: "tok-atom" },
  { tag: p.bool, class: "tok-bool" },
  { tag: p.url, class: "tok-url" },
  { tag: p.labelName, class: "tok-labelName" },
  { tag: p.inserted, class: "tok-inserted" },
  { tag: p.deleted, class: "tok-deleted" },
  { tag: p.literal, class: "tok-literal" },
  { tag: p.string, class: "tok-string" },
  { tag: p.number, class: "tok-number" },
  { tag: [p.regexp, p.escape, p.special(p.string)], class: "tok-string2" },
  { tag: p.variableName, class: "tok-variableName" },
  { tag: p.local(p.variableName), class: "tok-variableName tok-local" },
  { tag: p.definition(p.variableName), class: "tok-variableName tok-definition" },
  { tag: p.special(p.variableName), class: "tok-variableName2" },
  { tag: p.definition(p.propertyName), class: "tok-propertyName tok-definition" },
  { tag: p.typeName, class: "tok-typeName" },
  { tag: p.namespace, class: "tok-namespace" },
  { tag: p.className, class: "tok-className" },
  { tag: p.macroName, class: "tok-macroName" },
  { tag: p.propertyName, class: "tok-propertyName" },
  { tag: p.operator, class: "tok-operator" },
  { tag: p.comment, class: "tok-comment" },
  { tag: p.meta, class: "tok-meta" },
  { tag: p.invalid, class: "tok-invalid" },
  { tag: p.punctuation, class: "tok-punctuation" }
]);
var Ds;
const qt = /* @__PURE__ */ new W();
function pc(n) {
  return P.define({
    combine: n ? (e) => e.concat(n) : void 0
  });
}
const Oo = /* @__PURE__ */ new W();
class We {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], s = "") {
    this.data = e, this.name = s, D.prototype.hasOwnProperty("tree") || Object.defineProperty(D.prototype, "tree", { get() {
      return oe(this);
    } }), this.parser = t, this.extension = [
      kt.of(this),
      D.languageData.of((r, o, l) => {
        let a = Ll(r, o, l), h = a.type.prop(qt);
        if (!h)
          return [];
        let c = r.facet(h), f = a.type.prop(Oo);
        if (f) {
          let u = a.resolve(o - a.from, l);
          for (let d of f)
            if (d.test(u, r)) {
              let O = r.facet(d.facet);
              return d.type == "replace" ? O : O.concat(c);
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
    return Ll(e, t, i).type.prop(qt) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(kt);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], s = (r, o) => {
      if (r.prop(qt) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(W.mounted);
      if (l) {
        if (l.tree.prop(qt) == this.data) {
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
        h instanceof K && s(h, r.positions[a] + o);
      }
    };
    return s(oe(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
We.setState = /* @__PURE__ */ A.define();
function Ll(n, e, t) {
  let i = n.facet(kt), s = oe(n).topNode;
  if (!i || i.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, se.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
class qn extends We {
  constructor(e, t, i) {
    super(e, t, [], i), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = pc(e.languageData);
    return new qn(t, e.parser.configure({
      props: [qt.add((i) => i.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new qn(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function oe(n) {
  let e = n.field(We.state, !1);
  return e ? e.tree : K.empty;
}
class Tp {
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
let ui = null;
class zn {
  constructor(e, t, i = [], s, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new zn(e, t, [], K.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Tp(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != K.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Yt.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
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
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Yt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = ui;
    ui = this;
    try {
      return e();
    } finally {
      ui = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = ql(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = Yt.applyChanges(i, a), s = K.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new zn(this.parser, t, i, s, r, o, l, this.scheduleOn);
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
      s < e.to && r > e.from && (this.fragments = ql(this.fragments, s, r), this.skipped.splice(i--, 1));
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
    return new class extends fc {
      createParse(t, i, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = ui;
            if (a) {
              for (let h of s)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new K($e.none, [], [], o - r);
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
    return ui;
  }
}
function ql(n, e, t) {
  return Yt.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class ii {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new ii(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = zn.create(e.facet(kt).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new ii(i);
  }
}
We.state = /* @__PURE__ */ ae.define({
  create: ii.init,
  update(n, e) {
    for (let t of e.effects)
      if (t.is(We.setState))
        return t.value;
    return e.startState.facet(kt) != e.state.facet(kt) ? ii.init(e.state) : n.apply(e);
  }
});
let gc = (n) => {
  let e = setTimeout(
    () => n(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (gc = (n) => {
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
const _s = typeof navigator < "u" && (!((Ds = navigator.scheduling) === null || Ds === void 0) && Ds.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Yp = /* @__PURE__ */ J.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(We.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(We.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = gc(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, r = i.field(We.state);
    if (r.tree == r.context.tree && r.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !_s ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && i.doc.length > s + 1e3, a = r.context.work(() => _s && _s() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: We.setState.of(new ii(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => De(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), kt = /* @__PURE__ */ P.define({
  combine(n) {
    return n.length ? n[0] : null;
  },
  enables: (n) => [
    We.state,
    Yp,
    v.contentAttributes.compute([n], (e) => {
      let t = e.facet(n);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class Ap {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const Xp = /* @__PURE__ */ P.define(), Vi = /* @__PURE__ */ P.define({
  combine: (n) => {
    if (!n.length)
      return "  ";
    let e = n[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
    return e;
  }
});
function Vn(n) {
  let e = n.facet(Vi);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function _i(n, e) {
  let t = "", i = n.tabSize, s = n.facet(Vi)[0];
  if (s == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    s = " ";
  }
  for (let r = 0; r < e; r++)
    t += s;
  return t;
}
function po(n, e) {
  n instanceof D && (n = new ds(n));
  for (let i of n.state.facet(Xp)) {
    let s = i(n, e);
    if (s !== void 0)
      return s;
  }
  let t = oe(n.state);
  return t.length >= e ? Rp(n, t, e) : null;
}
class ds {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Vn(e);
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
    return ri(e, this.state.tabSize, t);
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
const mc = /* @__PURE__ */ new W();
function Rp(n, e, t) {
  let i = e.resolveStack(t), s = i.node.enterUnfinishedNodesBefore(t);
  if (s != i.node) {
    let r = [];
    for (let o = s; o != i.node; o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return Sc(i, n, t);
}
function Sc(n, e, t) {
  for (let i = n; i; i = i.next) {
    let s = Wp(i.node);
    if (s)
      return s(go.create(e, t, i));
  }
  return 0;
}
function Mp(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Wp(n) {
  let e = n.type.prop(mc);
  if (e)
    return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(W.closedBy))) {
    let s = n.lastChild, r = s && i.indexOf(s.name) > -1;
    return (o) => bc(o, !0, 1, void 0, r && !Mp(o) ? s.from : void 0);
  }
  return n.parent == null ? Dp : null;
}
function Dp() {
  return 0;
}
class go extends ds {
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
    return new go(e, t, i);
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
      if (_p(i, e))
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
    return Sc(this.context.next, this.base, this.pos);
  }
}
function _p(n, e) {
  for (let t = e; t; t = t.parent)
    if (n == t)
      return !0;
  return !1;
}
function Ep(n) {
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
function Up({ closing: n, align: e = !0, units: t = 1 }) {
  return (i) => bc(i, e, t, n);
}
function bc(n, e, t, i, s) {
  let r = n.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || s == n.pos + o, a = e ? Ep(n) : null;
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const Bp = (n) => n.baseIndent;
function Es({ except: n, units: e = 1 } = {}) {
  return (t) => {
    let i = n && n.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
const Ip = 200;
function jp() {
  return D.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length)
      return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, s = t.lineAt(i);
    if (i > s.from + Ip)
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
      let f = po(o, c.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(c.text)[0], d = _i(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n;
  });
}
const Lp = /* @__PURE__ */ P.define(), yc = /* @__PURE__ */ new W();
function qp(n) {
  let e = n.firstChild, t = n.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? n.to : t.from } : null;
}
function zp(n, e, t) {
  let i = oe(n);
  if (i.length < t)
    return null;
  let s = i.resolveStack(t, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t)
      continue;
    if (r && l.from < e)
      break;
    let a = l.type.prop(yc);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !Vp(l))) {
      let h = a(l, n);
      h && h.from <= t && h.from >= e && h.to > t && (r = h);
    }
  }
  return r;
}
function Vp(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Nn(n, e, t) {
  for (let i of n.facet(Lp)) {
    let s = i(n, e, t);
    if (s)
      return s;
  }
  return zp(n, e, t);
}
function xc(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const Os = /* @__PURE__ */ A.define({ map: xc }), Ni = /* @__PURE__ */ A.define({ map: xc });
function wc(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const Mt = /* @__PURE__ */ ae.define({
  create() {
    return Y.none;
  },
  update(n, e) {
    n = n.map(e.changes);
    for (let t of e.effects)
      if (t.is(Os) && !Np(n, t.value.from, t.value.to)) {
        let { preparePlaceholder: i } = e.state.facet(mo), s = i ? Y.replace({ widget: new tg(i(e.state, t.value)) }) : zl;
        n = n.update({ add: [s.range(t.value.from, t.value.to)] });
      } else
        t.is(Ni) && (n = n.update({
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
  provide: (n) => v.decorations.from(n),
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
      e.push(zl.range(i, s));
    }
    return Y.set(e, !0);
  }
});
function Gn(n, e, t) {
  var i;
  let s = null;
  return (i = n.field(Mt, !1)) === null || i === void 0 || i.between(e, t, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function Np(n, e, t) {
  let i = !1;
  return n.between(e, e, (s, r) => {
    s == e && r == t && (i = !0);
  }), i;
}
function Qc(n, e) {
  return n.field(Mt, !1) ? e : e.concat(A.appendConfig.of($c()));
}
const Gp = (n) => {
  for (let e of wc(n)) {
    let t = Nn(n.state, e.from, e.to);
    if (t)
      return n.dispatch({ effects: Qc(n.state, [Os.of(t), kc(n, t)]) }), !0;
  }
  return !1;
}, Fp = (n) => {
  if (!n.state.field(Mt, !1))
    return !1;
  let e = [];
  for (let t of wc(n)) {
    let i = Gn(n.state, t.from, t.to);
    i && e.push(Ni.of(i), kc(n, i, !1));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function kc(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number, s = n.state.doc.lineAt(e.to).number;
  return v.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
}
const Hp = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let s = n.lineBlockAt(i), r = Nn(e, s.from, s.to);
    r && t.push(Os.of(r)), i = (r ? n.lineBlockAt(r.to) : s).to + 1;
  }
  return t.length && n.dispatch({ effects: Qc(n.state, t) }), !!t.length;
}, Jp = (n) => {
  let e = n.state.field(Mt, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, n.state.doc.length, (i, s) => {
    t.push(Ni.of({ from: i, to: s }));
  }), n.dispatch({ effects: t }), !0;
}, Kp = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Gp },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Fp },
  { key: "Ctrl-Alt-[", run: Hp },
  { key: "Ctrl-Alt-]", run: Jp }
], eg = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, mo = /* @__PURE__ */ P.define({
  combine(n) {
    return tt(n, eg);
  }
});
function $c(n) {
  let e = [Mt, sg];
  return n && e.push(mo.of(n)), e;
}
function vc(n, e) {
  let { state: t } = n, i = t.facet(mo), s = (o) => {
    let l = n.lineBlockAt(n.posAtDOM(o.target)), a = Gn(n.state, l.from, l.to);
    a && n.dispatch({ effects: Ni.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(n, s, e);
  let r = document.createElement("span");
  return r.textContent = i.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const zl = /* @__PURE__ */ Y.replace({ widget: /* @__PURE__ */ new class extends it {
  toDOM(n) {
    return vc(n, null);
  }
}() });
class tg extends it {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return vc(e, this.value);
  }
}
const ig = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Us extends at {
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
function ng(n = {}) {
  let e = Object.assign(Object.assign({}, ig), n), t = new Us(e, !0), i = new Us(e, !1), s = J.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(kt) != o.state.facet(kt) || o.startState.field(Mt, !1) != o.state.field(Mt, !1) || oe(o.startState) != oe(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new yt();
      for (let a of o.viewportLineBlocks) {
        let h = Gn(o.state, a.from, a.to) ? i : Nn(o.state, a.from, a.to) ? t : null;
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
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || U.empty;
      },
      initialSpacer() {
        return new Us(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
        if (r.click && r.click(o, l, a))
          return !0;
        let h = Gn(o.state, l.from, l.to);
        if (h)
          return o.dispatch({ effects: Ni.of(h) }), !0;
        let c = Nn(o.state, l.from, l.to);
        return c ? (o.dispatch({ effects: Os.of(c) }), !0) : !1;
      } })
    }),
    $c()
  ];
}
const sg = /* @__PURE__ */ v.baseTheme({
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
class Gi {
  constructor(e, t) {
    this.specs = e;
    let i;
    function s(l) {
      let a = xt.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, o = t.scope;
    this.scope = o instanceof We ? (l) => l.prop(qt) == o.data : o ? (l) => l == o : void 0, this.style = Oc(e.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = i ? new xt(i) : null, this.themeType = t.themeType;
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
    return new Gi(e, t || {});
  }
}
const Dr = /* @__PURE__ */ P.define(), Pc = /* @__PURE__ */ P.define({
  combine(n) {
    return n.length ? [n[0]] : null;
  }
});
function Bs(n) {
  let e = n.facet(Dr);
  return e.length ? e : n.facet(Pc);
}
function Zc(n, e) {
  let t = [og], i;
  return n instanceof Gi && (n.module && t.push(v.styleModule.of(n.module)), i = n.themeType), e != null && e.fallback ? t.push(Pc.of(n)) : i ? t.push(Dr.computeN([v.darkTheme], (s) => s.facet(v.darkTheme) == (i == "dark") ? [n] : [])) : t.push(Dr.of(n)), t;
}
class rg {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = oe(e.state), this.decorations = this.buildDeco(e, Bs(e.state));
  }
  update(e) {
    let t = oe(e.state), i = Bs(e.state), s = i != Bs(e.startState);
    t.length < e.view.viewport.to && !s && t.type == this.tree.type ? this.decorations = this.decorations.map(e.changes) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, i));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return Y.none;
    let i = new yt();
    for (let { from: s, to: r } of e.visibleRanges)
      Pp(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = Y.mark({ class: a })));
      }, s, r);
    return i.finish();
  }
}
const og = /* @__PURE__ */ Wt.high(/* @__PURE__ */ J.fromClass(rg, {
  decorations: (n) => n.decorations
})), lg = /* @__PURE__ */ Gi.define([
  {
    tag: p.meta,
    color: "#404740"
  },
  {
    tag: p.link,
    textDecoration: "underline"
  },
  {
    tag: p.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: p.emphasis,
    fontStyle: "italic"
  },
  {
    tag: p.strong,
    fontWeight: "bold"
  },
  {
    tag: p.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: p.keyword,
    color: "#708"
  },
  {
    tag: [p.atom, p.bool, p.url, p.contentSeparator, p.labelName],
    color: "#219"
  },
  {
    tag: [p.literal, p.inserted],
    color: "#164"
  },
  {
    tag: [p.string, p.deleted],
    color: "#a11"
  },
  {
    tag: [p.regexp, p.escape, /* @__PURE__ */ p.special(p.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ p.definition(p.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ p.local(p.variableName),
    color: "#30a"
  },
  {
    tag: [p.typeName, p.namespace],
    color: "#085"
  },
  {
    tag: p.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ p.special(p.variableName), p.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ p.definition(p.propertyName),
    color: "#00c"
  },
  {
    tag: p.comment,
    color: "#940"
  },
  {
    tag: p.invalid,
    color: "#f00"
  }
]), ag = /* @__PURE__ */ v.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), Cc = 1e4, Tc = "()[]{}", Yc = /* @__PURE__ */ P.define({
  combine(n) {
    return tt(n, {
      afterCursor: !0,
      brackets: Tc,
      maxScanDistance: Cc,
      renderMatch: fg
    });
  }
}), hg = /* @__PURE__ */ Y.mark({ class: "cm-matchingBracket" }), cg = /* @__PURE__ */ Y.mark({ class: "cm-nonmatchingBracket" });
function fg(n) {
  let e = [], t = n.matched ? hg : cg;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const ug = /* @__PURE__ */ ae.define({
  create() {
    return Y.none;
  },
  update(n, e) {
    if (!e.docChanged && !e.selection)
      return n;
    let t = [], i = e.state.facet(Yc);
    for (let s of e.state.selection.ranges) {
      if (!s.empty)
        continue;
      let r = He(e.state, s.head, -1, i) || s.head > 0 && He(e.state, s.head - 1, 1, i) || i.afterCursor && (He(e.state, s.head, 1, i) || s.head < e.state.doc.length && He(e.state, s.head + 1, -1, i));
      r && (t = t.concat(i.renderMatch(r, e.state)));
    }
    return Y.set(t, !0);
  },
  provide: (n) => v.decorations.from(n)
}), dg = [
  ug,
  ag
];
function Og(n = {}) {
  return [Yc.of(n), dg];
}
const pg = /* @__PURE__ */ new W();
function _r(n, e, t) {
  let i = n.prop(e < 0 ? W.openedBy : W.closedBy);
  if (i)
    return i;
  if (n.name.length == 1) {
    let s = t.indexOf(n.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [t[s + e]];
  }
  return null;
}
function Er(n) {
  let e = n.type.prop(pg);
  return e ? e(n.node) : n;
}
function He(n, e, t, i = {}) {
  let s = i.maxScanDistance || Cc, r = i.brackets || Tc, o = oe(n), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = _r(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Er(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return gg(n, e, t, a, c, h, r);
    }
  }
  return mg(n, e, t, o, l.type, s, r);
}
function gg(n, e, t, i, s, r, o) {
  let l = i.parent, a = { from: s.from, to: s.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Er(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (_r(c.type, t, o))
          h++;
        else if (_r(c.type, -t, o)) {
          if (h == 0) {
            let f = Er(c);
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
function mg(n, e, t, i, s, r, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let O = e + u * t;
    for (let m = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; m != g; m += t) {
      let S = o.indexOf(d[m]);
      if (!(S < 0 || i.resolveInner(O + m, 1).type != s))
        if (S % 2 == 0 == t > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: O + m, to: O + m + 1 }, matched: S >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const Sg = /* @__PURE__ */ Object.create(null), Vl = [$e.none], Nl = [], bg = /* @__PURE__ */ Object.create(null);
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
  bg[n] = /* @__PURE__ */ yg(Sg, e);
function Is(n, e) {
  Nl.indexOf(n) > -1 || (Nl.push(n), console.warn(e));
}
function yg(n, e) {
  let t = null;
  for (let r of e.split(".")) {
    let o = n[r] || p[r];
    o ? typeof o == "function" ? t ? t = o(t) : Is(r, `Modifier ${r} used at start of tag`) : t ? Is(r, `Tag ${r} used as modifier`) : t = o : Is(r, `Unknown highlighting tag ${r}`);
  }
  if (!t)
    return 0;
  let i = e.replace(/ /g, "_"), s = $e.define({
    id: Vl.length,
    name: i,
    props: [uc({ [i]: t })]
  });
  return Vl.push(s), s.id;
}
const xg = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = bo(n.state, t.from);
  return i.line ? wg(n) : i.block ? kg(n) : !1;
};
function So(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let s = n(e, t);
    return s ? (i(t.update(s)), !0) : !1;
  };
}
const wg = /* @__PURE__ */ So(
  Pg,
  0
  /* CommentOption.Toggle */
), Qg = /* @__PURE__ */ So(
  Ac,
  0
  /* CommentOption.Toggle */
), kg = /* @__PURE__ */ So(
  (n, e) => Ac(n, e, vg(e)),
  0
  /* CommentOption.Toggle */
);
function bo(n, e) {
  let t = n.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const di = 50;
function $g(n, { open: e, close: t }, i, s) {
  let r = n.sliceDoc(i - di, i), o = n.sliceDoc(s, s + di), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let c, f;
  s - i <= 2 * di ? c = f = n.sliceDoc(i, s) : (c = n.sliceDoc(i, i + di), f = n.sliceDoc(s - di, s));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, O = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(O, O + t.length) == t ? {
    open: {
      pos: i + u + e.length,
      margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0
    },
    close: {
      pos: s - d - t.length,
      margin: /\s/.test(f.charAt(O - 1)) ? 1 : 0
    }
  } : null;
}
function vg(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), s = t.to <= i.to ? i : n.doc.lineAt(t.to), r = e.length - 1;
    r >= 0 && e[r].to > i.from ? e[r].to = s.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return e;
}
function Ac(n, e, t = e.selection.ranges) {
  let i = t.map((r) => bo(e, r.from).block);
  if (!i.every((r) => r))
    return null;
  let s = t.map((r, o) => $g(e, i[o], r.from, r.to));
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
function Pg(n, e, t = e.selection.ranges) {
  let i = [], s = -1;
  for (let { from: r, to: o } of t) {
    let l = i.length, a = 1e9, h = bo(e, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = e.doc.lineAt(c);
        if (f.from > s && (r == o || o > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, O = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u), i.push({ line: f, comment: O, token: h, indent: u, empty: d, single: !1 });
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
const Ur = /* @__PURE__ */ ht.define(), Zg = /* @__PURE__ */ ht.define(), Cg = /* @__PURE__ */ P.define(), Xc = /* @__PURE__ */ P.define({
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
function Tg(n) {
  let e = 0;
  return n.iterChangedRanges((t, i) => e = i), e;
}
const Rc = /* @__PURE__ */ ae.define({
  create() {
    return Je.empty;
  },
  update(n, e) {
    let t = e.state.facet(Xc), i = e.annotation(Ur);
    if (i) {
      let a = e.docChanged ? b.single(Tg(e.changes)) : void 0, h = Qe.fromTransaction(e, a), c = i.side, f = c == 0 ? n.undone : n.done;
      return h ? f = Fn(f, f.length, t.minDepth, h) : f = Dc(f, e.startState.selection), new Je(c == 0 ? i.rest : f, c == 0 ? f : i.rest);
    }
    let s = e.annotation(Zg);
    if ((s == "full" || s == "before") && (n = n.isolate()), e.annotation(re.addToHistory) === !1)
      return e.changes.empty ? n : n.addMapping(e.changes.desc);
    let r = Qe.fromTransaction(e), o = e.annotation(re.time), l = e.annotation(re.userEvent);
    return r ? n = n.addChanges(r, o, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (s == "full" || s == "after") && (n = n.isolate()), n;
  },
  toJSON(n) {
    return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
  },
  fromJSON(n) {
    return new Je(n.done.map(Qe.fromJSON), n.undone.map(Qe.fromJSON));
  }
});
function Yg(n = {}) {
  return [
    Rc,
    Xc.of(n),
    v.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Mc : e.inputType == "historyRedo" ? Br : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
function ps(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let s = t.field(Rc, !1);
    if (!s)
      return !1;
    let r = s.pop(n, t, e);
    return r ? (i(r), !0) : !1;
  };
}
const Mc = /* @__PURE__ */ ps(0, !1), Br = /* @__PURE__ */ ps(1, !1), Ag = /* @__PURE__ */ ps(0, !0), Xg = /* @__PURE__ */ ps(1, !0);
class Qe {
  constructor(e, t, i, s, r) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new Qe(this.changes, this.effects, this.mapped, this.startSelection, e);
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
    return new Qe(e.changes && ne.fromJSON(e.changes), [], e.mapped && Ke.fromJSON(e.mapped), e.startSelection && b.fromJSON(e.startSelection), e.selectionsAfter.map(b.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let i = Xe;
    for (let s of e.startState.facet(Cg)) {
      let r = s(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty ? null : new Qe(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Xe);
  }
  static selection(e) {
    return new Qe(void 0, Xe, void 0, void 0, e);
  }
}
function Fn(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, r = n.slice(s, e);
  return r.push(i), r;
}
function Rg(n, e) {
  let t = [], i = !1;
  return n.iterChangedRanges((s, r) => t.push(s, r)), e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && o <= c && (i = !0);
    }
  }), i;
}
function Mg(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Wc(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const Xe = [], Wg = 200;
function Dc(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Wg));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), Fn(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [Qe.selection([e])];
}
function Dg(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function js(n, e) {
  if (!n.length)
    return n;
  let t = n.length, i = Xe;
  for (; t; ) {
    let s = _g(n[t - 1], e, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = n.slice(0, t);
      return r[t - 1] = s, r;
    } else
      e = s.mapped, t--, i = s.selectionsAfter;
  }
  return i.length ? [Qe.selection(i)] : Xe;
}
function _g(n, e, t) {
  let i = Wc(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : Xe, t);
  if (!n.changes)
    return Qe.selection(i);
  let s = n.changes.map(e), r = e.mapDesc(n.changes, !0), o = n.mapped ? n.mapped.composeDesc(r) : r;
  return new Qe(s, A.mapEffects(n.effects, e), o, n.startSelection.map(r), i);
}
const Eg = /^(input\.type|delete)($|\.)/;
class Je {
  constructor(e, t, i = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Je(this.done, this.undone) : this;
  }
  addChanges(e, t, i, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || Eg.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, Rg(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = Fn(o, o.length - 1, s.minDepth, new Qe(e.changes.compose(l.changes), Wc(e.effects, l.effects), l.mapped, l.startSelection, Xe)) : o = Fn(o, o.length, s.minDepth, e), new Je(o, Xe, t, i);
  }
  addSelection(e, t, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Xe;
    return r.length > 0 && t - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Mg(r[r.length - 1], e) ? this : new Je(Dc(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new Je(js(this.done, e), js(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1];
    if (i && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Ur.of({ side: e, rest: Dg(s) }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let o = s.length == 1 ? Xe : s.slice(0, s.length - 1);
      return r.mapped && (o = js(o, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: Ur.of({ side: e, rest: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Je.empty = /* @__PURE__ */ new Je(Xe, Xe);
const Ug = [
  { key: "Mod-z", run: Mc, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Br, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Br, preventDefault: !0 },
  { key: "Mod-u", run: Ag, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Xg, preventDefault: !0 }
];
function oi(n, e) {
  return b.create(n.ranges.map(e), n.mainIndex);
}
function nt(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Ee({ state: n, dispatch: e }, t) {
  let i = oi(n.selection, t);
  return i.eq(n.selection) ? !1 : (e(nt(n, i)), !0);
}
function gs(n, e) {
  return b.cursor(e ? n.to : n.from);
}
function _c(n, e) {
  return Ee(n, (t) => t.empty ? n.moveByChar(t, e) : gs(t, e));
}
function Se(n) {
  return n.textDirectionAt(n.state.selection.main.head) == G.LTR;
}
const Ec = (n) => _c(n, !Se(n)), Uc = (n) => _c(n, Se(n));
function Bc(n, e) {
  return Ee(n, (t) => t.empty ? n.moveByGroup(t, e) : gs(t, e));
}
const Bg = (n) => Bc(n, !Se(n)), Ig = (n) => Bc(n, Se(n));
function jg(n, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function ms(n, e, t) {
  let i = oe(n).resolveInner(e.head), s = t ? W.closedBy : W.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    jg(n, h, s) ? i = h : a = t ? h.to : h.from;
  }
  let r = i.type.prop(s), o, l;
  return r && (o = t ? He(n, i.from, 1) : He(n, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, b.cursor(l, t ? -1 : 1);
}
const Lg = (n) => Ee(n, (e) => ms(n.state, e, !Se(n))), qg = (n) => Ee(n, (e) => ms(n.state, e, Se(n)));
function Ic(n, e) {
  return Ee(n, (t) => {
    if (!t.empty)
      return gs(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const jc = (n) => Ic(n, !1), Lc = (n) => Ic(n, !0);
function qc(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, s;
  if (e) {
    for (let r of n.state.facet(v.scrollMargins)) {
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
function zc(n, e) {
  let t = qc(n), { state: i } = n, s = oi(i.selection, (o) => o.empty ? n.moveVertically(o, e, t.height) : gs(o, e));
  if (s.eq(i.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (r = v.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(nt(i, s), { effects: r }), !0;
}
const Gl = (n) => zc(n, !1), Ir = (n) => zc(n, !0);
function $t(n, e, t) {
  let i = n.lineBlockAt(e.head), s = n.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? i.to : i.from) && (s = n.moveToLineBoundary(e, t, !1)), !t && s.head == i.from && i.length) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (s = b.cursor(i.from + r));
  }
  return s;
}
const zg = (n) => Ee(n, (e) => $t(n, e, !0)), Vg = (n) => Ee(n, (e) => $t(n, e, !1)), Ng = (n) => Ee(n, (e) => $t(n, e, !Se(n))), Gg = (n) => Ee(n, (e) => $t(n, e, Se(n))), Fg = (n) => Ee(n, (e) => b.cursor(n.lineBlockAt(e.head).from, 1)), Hg = (n) => Ee(n, (e) => b.cursor(n.lineBlockAt(e.head).to, -1));
function Jg(n, e, t) {
  let i = !1, s = oi(n.selection, (r) => {
    let o = He(n, r.head, -1) || He(n, r.head, 1) || r.head > 0 && He(n, r.head - 1, 1) || r.head < n.doc.length && He(n, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return t ? b.range(r.anchor, l) : b.cursor(l);
  });
  return i ? (e(nt(n, s)), !0) : !1;
}
const Kg = ({ state: n, dispatch: e }) => Jg(n, e, !1);
function Me(n, e) {
  let t = oi(n.state.selection, (i) => {
    let s = e(i);
    return b.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? !1 : (n.dispatch(nt(n.state, t)), !0);
}
function Vc(n, e) {
  return Me(n, (t) => n.moveByChar(t, e));
}
const Nc = (n) => Vc(n, !Se(n)), Gc = (n) => Vc(n, Se(n));
function Fc(n, e) {
  return Me(n, (t) => n.moveByGroup(t, e));
}
const em = (n) => Fc(n, !Se(n)), tm = (n) => Fc(n, Se(n)), im = (n) => Me(n, (e) => ms(n.state, e, !Se(n))), nm = (n) => Me(n, (e) => ms(n.state, e, Se(n)));
function Hc(n, e) {
  return Me(n, (t) => n.moveVertically(t, e));
}
const Jc = (n) => Hc(n, !1), Kc = (n) => Hc(n, !0);
function ef(n, e) {
  return Me(n, (t) => n.moveVertically(t, e, qc(n).height));
}
const Fl = (n) => ef(n, !1), Hl = (n) => ef(n, !0), sm = (n) => Me(n, (e) => $t(n, e, !0)), rm = (n) => Me(n, (e) => $t(n, e, !1)), om = (n) => Me(n, (e) => $t(n, e, !Se(n))), lm = (n) => Me(n, (e) => $t(n, e, Se(n))), am = (n) => Me(n, (e) => b.cursor(n.lineBlockAt(e.head).from)), hm = (n) => Me(n, (e) => b.cursor(n.lineBlockAt(e.head).to)), Jl = ({ state: n, dispatch: e }) => (e(nt(n, { anchor: 0 })), !0), Kl = ({ state: n, dispatch: e }) => (e(nt(n, { anchor: n.doc.length })), !0), ea = ({ state: n, dispatch: e }) => (e(nt(n, { anchor: n.selection.main.anchor, head: 0 })), !0), ta = ({ state: n, dispatch: e }) => (e(nt(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0), cm = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), !0), fm = ({ state: n, dispatch: e }) => {
  let t = Ss(n).map(({ from: i, to: s }) => b.range(i, Math.min(s + 1, n.doc.length)));
  return e(n.update({ selection: b.create(t), userEvent: "select" })), !0;
}, um = ({ state: n, dispatch: e }) => {
  let t = oi(n.selection, (i) => {
    var s;
    let r = oe(n).resolveStack(i.from, 1);
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && (!((s = l.parent) === null || s === void 0) && s.parent))
        return b.range(l.to, l.from);
    }
    return i;
  });
  return e(nt(n, t)), !0;
}, dm = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = b.create([t.main]) : t.main.empty || (i = b.create([b.cursor(t.main.head)])), i ? (e(nt(n, i)), !0) : !1;
};
function Fi(n, e) {
  if (n.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = n, s = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = mn(n, a, !1)) : a > o && (t = "delete.forward", a = mn(n, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = mn(n, o, !1), l = mn(n, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: b.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (n.dispatch(i.update(s, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? v.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function mn(n, e, t) {
  if (n instanceof v)
    for (let i of n.state.facet(v.atomicRanges).map((s) => s(n)))
      i.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const tf = (n, e) => Fi(n, (t) => {
  let i = t.from, { state: s } = n, r = s.doc.lineAt(i), o, l;
  if (!e && i > r.from && i < r.from + 200 && !/[^ \t]/.test(o = r.text.slice(0, i - r.from))) {
    if (o[o.length - 1] == "	")
      return i - 1;
    let a = ri(o, s.tabSize), h = a % Vn(s) || Vn(s);
    for (let c = 0; c < h && o[o.length - 1 - c] == " "; c++)
      i--;
    l = i;
  } else
    l = me(r.text, i - r.from, e, e) + r.from, l == i && r.number != (e ? s.doc.lines : 1) && (l += e ? 1 : -1);
  return l;
}), jr = (n) => tf(n, !1), nf = (n) => tf(n, !0), sf = (n, e) => Fi(n, (t) => {
  let i = t.head, { state: s } = n, r = s.doc.lineAt(i), o = s.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? r.to : r.from)) {
      i == t.head && r.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = me(r.text, i - r.from, e) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || i != t.head) && (l = c), i = a;
  }
  return i;
}), rf = (n) => sf(n, !1), Om = (n) => sf(n, !0), pm = (n) => Fi(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), gm = (n) => Fi(n, (e) => {
  let t = n.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), mm = (n) => Fi(n, (e) => {
  let t = n.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), Sm = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: _.of(["", ""]) },
    range: b.cursor(i.from)
  }));
  return e(n.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, bm = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length)
      return { range: i };
    let s = i.from, r = n.doc.lineAt(s), o = s == r.from ? s - 1 : me(r.text, s - r.from, !1) + r.from, l = s == r.to ? s + 1 : me(r.text, s - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(o, s)) },
      range: b.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(n.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function Ss(n) {
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
function of(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [], s = [];
  for (let r of Ss(n)) {
    if (t ? r.to == n.doc.length : r.from == 0)
      continue;
    let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + n.lineBreak });
      for (let a of r.ranges)
        s.push(b.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: n.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(b.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(n.update({
    changes: i,
    scrollIntoView: !0,
    selection: b.create(s, n.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const ym = ({ state: n, dispatch: e }) => of(n, e, !1), xm = ({ state: n, dispatch: e }) => of(n, e, !0);
function lf(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [];
  for (let s of Ss(n))
    t ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak }) : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const wm = ({ state: n, dispatch: e }) => lf(n, e, !1), Qm = ({ state: n, dispatch: e }) => lf(n, e, !0), km = (n) => {
  if (n.state.readOnly)
    return !1;
  let { state: e } = n, t = e.changes(Ss(e).map(({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }))), i = oi(e.selection, (s) => n.moveVertically(s, !0)).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function $m(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = oe(n).resolveInner(e), i = t.childBefore(e), s = t.childAfter(e), r;
  return i && s && i.to <= e && s.from >= e && (r = i.type.prop(W.closedBy)) && r.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const vm = /* @__PURE__ */ af(!1), Pm = /* @__PURE__ */ af(!0);
function af(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((s) => {
      let { from: r, to: o } = s, l = e.doc.lineAt(r), a = !n && r == o && $m(e, r);
      n && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new ds(e, { simulateBreak: r, simulateDoubleBreak: !!a }), c = po(h, r);
      for (c == null && (c = ri(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", _i(e, c)];
      return a && f.push(_i(e, h.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: _.of(f) },
        range: b.cursor(r + 1 + f[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function yo(n, e) {
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
      range: b.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const Zm = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new ds(n, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), s = yo(n, (r, o, l) => {
    let a = po(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = _i(n, a);
    (h != c || l.from < r.from + h.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return s.changes.empty || e(n.update(s, { userEvent: "indent" })), !0;
}, hf = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(yo(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(Vi) });
}), { userEvent: "input.indent" })), !0), cf = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(yo(n, (t, i) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s)
    return;
  let r = ri(s, n.tabSize), o = 0, l = _i(n, Math.max(0, r - Vn(n)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Cm = [
  { key: "Ctrl-b", run: Ec, shift: Nc, preventDefault: !0 },
  { key: "Ctrl-f", run: Uc, shift: Gc },
  { key: "Ctrl-p", run: jc, shift: Jc },
  { key: "Ctrl-n", run: Lc, shift: Kc },
  { key: "Ctrl-a", run: Fg, shift: am },
  { key: "Ctrl-e", run: Hg, shift: hm },
  { key: "Ctrl-d", run: nf },
  { key: "Ctrl-h", run: jr },
  { key: "Ctrl-k", run: pm },
  { key: "Ctrl-Alt-h", run: rf },
  { key: "Ctrl-o", run: Sm },
  { key: "Ctrl-t", run: bm },
  { key: "Ctrl-v", run: Ir }
], Tm = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Ec, shift: Nc, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Bg, shift: em, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Ng, shift: om, preventDefault: !0 },
  { key: "ArrowRight", run: Uc, shift: Gc, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Ig, shift: tm, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Gg, shift: lm, preventDefault: !0 },
  { key: "ArrowUp", run: jc, shift: Jc, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Jl, shift: ea },
  { mac: "Ctrl-ArrowUp", run: Gl, shift: Fl },
  { key: "ArrowDown", run: Lc, shift: Kc, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Kl, shift: ta },
  { mac: "Ctrl-ArrowDown", run: Ir, shift: Hl },
  { key: "PageUp", run: Gl, shift: Fl },
  { key: "PageDown", run: Ir, shift: Hl },
  { key: "Home", run: Vg, shift: rm, preventDefault: !0 },
  { key: "Mod-Home", run: Jl, shift: ea },
  { key: "End", run: zg, shift: sm, preventDefault: !0 },
  { key: "Mod-End", run: Kl, shift: ta },
  { key: "Enter", run: vm },
  { key: "Mod-a", run: cm },
  { key: "Backspace", run: jr, shift: jr },
  { key: "Delete", run: nf },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: rf },
  { key: "Mod-Delete", mac: "Alt-Delete", run: Om },
  { mac: "Mod-Backspace", run: gm },
  { mac: "Mod-Delete", run: mm }
].concat(/* @__PURE__ */ Cm.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), Ym = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Lg, shift: im },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: qg, shift: nm },
  { key: "Alt-ArrowUp", run: ym },
  { key: "Shift-Alt-ArrowUp", run: wm },
  { key: "Alt-ArrowDown", run: xm },
  { key: "Shift-Alt-ArrowDown", run: Qm },
  { key: "Escape", run: dm },
  { key: "Mod-Enter", run: Pm },
  { key: "Alt-l", mac: "Ctrl-l", run: fm },
  { key: "Mod-i", run: um, preventDefault: !0 },
  { key: "Mod-[", run: cf },
  { key: "Mod-]", run: hf },
  { key: "Mod-Alt-\\", run: Zm },
  { key: "Shift-Mod-k", run: km },
  { key: "Shift-Mod-\\", run: Kg },
  { key: "Mod-/", run: xg },
  { key: "Alt-A", run: Qg }
].concat(Tm), Am = { key: "Tab", run: hf, shift: cf };
function L() {
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
    ff(n, arguments[e]);
  return n;
}
function ff(n, e) {
  if (typeof e == "string")
    n.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      n.appendChild(e);
    else if (Array.isArray(e))
      for (var t = 0; t < e.length; t++)
        ff(n, e[t]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const ia = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class ni {
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
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, s), this.bufferStart = i, this.normalize = r ? (l) => r(ia(l)) : ia, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return ce(this.buffer, this.bufferPos);
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
      let t = Jr(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Ae(e);
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
typeof Symbol < "u" && (ni.prototype[Symbol.iterator] = function() {
  return this;
});
const uf = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, xo = "gm" + (/x/.unicode == null ? "" : "u");
class df {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, i, s = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = !1, this.value = uf, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new Of(e, t, i, s, r);
    this.re = new RegExp(t, xo + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from, this.matchPos = Hn(e, s), this.getLine(this.curLineStart);
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
        if (this.matchPos = Hn(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, t)))
          return this.value = { from: i, to: s, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Ls = /* @__PURE__ */ new WeakMap();
class Ht {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let s = Ls.get(e);
    if (!s || s.from >= i || s.to <= t) {
      let l = new Ht(t, e.sliceString(t, i));
      return Ls.set(e, l), l;
    }
    if (s.from == t && s.to == i)
      return s;
    let { text: r, from: o } = s;
    return o > t && (r = e.sliceString(t, o) + r, o = t), s.to < i && (r += e.sliceString(s.to, i)), Ls.set(e, new Ht(o, r)), new Ht(t, r.slice(t - o, i - o));
  }
}
class Of {
  constructor(e, t, i, s, r) {
    this.text = e, this.to = r, this.done = !1, this.value = uf, this.matchPos = Hn(e, s), this.re = new RegExp(t, xo + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = Ht.get(e, s, this.chunkEnd(
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
          return this.value = { from: i, to: s, match: t }, this.matchPos = Hn(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Ht.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (df.prototype[Symbol.iterator] = Of.prototype[Symbol.iterator] = function() {
  return this;
});
function Xm(n) {
  try {
    return new RegExp(n, xo), !0;
  } catch {
    return !1;
  }
}
function Hn(n, e) {
  if (e >= n.length)
    return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; )
    e++;
  return e;
}
function Lr(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number), t = L("input", { class: "cm-textfield", name: "line", value: e }), i = L("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), n.dispatch({ effects: Jn.of(!1) }), n.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
    },
    onsubmit: (r) => {
      r.preventDefault(), s();
    }
  }, L("label", n.state.phrase("Go to line"), ": ", t), " ", L("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")));
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
    let O = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), m = b.cursor(O.from + Math.max(0, Math.min(u, O.length)));
    n.dispatch({
      effects: [Jn.of(!1), v.scrollIntoView(m.from, { y: "center" })],
      selection: m
    }), n.focus();
  }
  return { dom: i };
}
const Jn = /* @__PURE__ */ A.define(), na = /* @__PURE__ */ ae.define({
  create() {
    return !0;
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(Jn) && (n = t.value);
    return n;
  },
  provide: (n) => Wi.from(n, (e) => e ? Lr : null)
}), Rm = (n) => {
  let e = Mi(n, Lr);
  if (!e) {
    let t = [Jn.of(!0)];
    n.state.field(na, !1) == null && t.push(A.appendConfig.of([na, Mm])), n.dispatch({ effects: t }), e = Mi(n, Lr);
  }
  return e && e.dom.querySelector("input").select(), !0;
}, Mm = /* @__PURE__ */ v.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), Wm = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, pf = /* @__PURE__ */ P.define({
  combine(n) {
    return tt(n, Wm, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Dm(n) {
  let e = [Im, Bm];
  return n && e.push(pf.of(n)), e;
}
const _m = /* @__PURE__ */ Y.mark({ class: "cm-selectionMatch" }), Em = /* @__PURE__ */ Y.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function sa(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != V.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != V.Word);
}
function Um(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == V.Word && n(e.sliceDoc(i - 1, i)) == V.Word;
}
const Bm = /* @__PURE__ */ J.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(pf), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1)
      return Y.none;
    let s = i.main, r, o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor)
        return Y.none;
      let a = t.wordAt(s.head);
      if (!a)
        return Y.none;
      o = t.charCategorizer(s.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200)
        return Y.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(s.from, s.to), o = t.charCategorizer(s.head), !(sa(o, t, s.from, s.to) && Um(o, t, s.from, s.to)))
          return Y.none;
      } else if (r = t.sliceDoc(s.from, s.to).trim(), !r)
        return Y.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let h = new ni(t.doc, r, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || sa(o, t, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(Em.range(c, f)) : (c >= s.to || f <= s.from) && l.push(_m.range(c, f)), l.length > e.maxMatches))
          return Y.none;
      }
    }
    return Y.set(l);
  }
}, {
  decorations: (n) => n.decorations
}), Im = /* @__PURE__ */ v.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), jm = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = b.create(t.ranges.map((s) => n.wordAt(s.head) || b.cursor(s.head)), t.mainIndex);
  return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
};
function Lm(n, e) {
  let { main: t, ranges: i } = n.selection, s = n.wordAt(t.head), r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new ni(n.doc, e, i[i.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new ni(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), o = !0;
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
const qm = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((r) => r.from === r.to))
    return jm({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((r) => n.sliceDoc(r.from, r.to) != i))
    return !1;
  let s = Lm(n, i);
  return s ? (e(n.update({
    selection: n.selection.addRange(b.range(s.from, s.to), !1),
    effects: v.scrollIntoView(s.to)
  })), !0) : !1;
}, li = /* @__PURE__ */ P.define({
  combine(n) {
    return tt(n, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new n0(e),
      scrollToMatch: (e) => v.scrollIntoView(e)
    });
  }
});
class gf {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Xm(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
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
    return this.regexp ? new Gm(this) : new Vm(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : D.create({ doc: e });
    return i == null && (i = s.doc.length), this.regexp ? It(this, s, t, i) : Bt(this, s, t, i);
  }
}
class mf {
  constructor(e) {
    this.spec = e;
  }
}
function Bt(n, e, t, i) {
  return new ni(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (s) => s.toLowerCase(), n.wholeWord ? zm(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function zm(n, e) {
  return (t, i, s, r) => ((r > t || r + s.length < i) && (r = Math.max(0, t - 2), s = n.sliceString(r, Math.min(n.length, i + 2))), (e(Kn(s, t - r)) != V.Word || e(es(s, t - r)) != V.Word) && (e(es(s, i - r)) != V.Word || e(Kn(s, i - r)) != V.Word));
}
class Vm extends mf {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let s = Bt(this.spec, e, i, e.doc.length).nextOverlapping();
    return s.done && (s = Bt(this.spec, e, 0, t).nextOverlapping()), s.done ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, i) {
    for (let s = i; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length), o = Bt(this.spec, e, r, s), l = null;
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
    let i = Bt(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = Bt(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function It(n, e, t, i) {
  return new df(e.doc, n.search, {
    ignoreCase: !n.caseSensitive,
    test: n.wholeWord ? Nm(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, i);
}
function Kn(n, e) {
  return n.slice(me(n, e, !1), e);
}
function es(n, e) {
  return n.slice(e, me(n, e));
}
function Nm(n) {
  return (e, t, i) => !i[0].length || (n(Kn(i.input, i.index)) != V.Word || n(es(i.input, i.index)) != V.Word) && (n(es(i.input, i.index + i[0].length)) != V.Word || n(Kn(i.input, i.index + i[0].length)) != V.Word);
}
class Gm extends mf {
  nextMatch(e, t, i) {
    let s = It(this.spec, e, i, e.doc.length).next();
    return s.done && (s = It(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1; ; s++) {
      let r = Math.max(
        t,
        i - s * 1e4
        /* FindPrev.ChunkSize */
      ), o = It(this.spec, e, r, i), l = null;
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
    let i = It(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = It(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(i + 250, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const Ei = /* @__PURE__ */ A.define(), wo = /* @__PURE__ */ A.define(), St = /* @__PURE__ */ ae.define({
  create(n) {
    return new qs(qr(n).create(), null);
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(Ei) ? n = new qs(t.value.create(), n.panel) : t.is(wo) && (n = new qs(n.query, t.value ? Qo : null));
    return n;
  },
  provide: (n) => Wi.from(n, (e) => e.panel)
});
class qs {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const Fm = /* @__PURE__ */ Y.mark({ class: "cm-searchMatch" }), Hm = /* @__PURE__ */ Y.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Jm = /* @__PURE__ */ J.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(St));
  }
  update(n) {
    let e = n.state.field(St);
    (e != n.startState.field(St) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid)
      return Y.none;
    let { view: t } = this, i = new yt();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      n.highlight(t.state, l, a, (h, c) => {
        let f = t.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? Hm : Fm);
      });
    }
    return i.finish();
  }
}, {
  decorations: (n) => n.decorations
});
function Hi(n) {
  return (e) => {
    let t = e.state.field(St, !1);
    return t && t.query.spec.valid ? n(e, t) : yf(e);
  };
}
const ts = /* @__PURE__ */ Hi((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i)
    return !1;
  let s = b.single(i.from, i.to), r = n.state.facet(li);
  return n.dispatch({
    selection: s,
    effects: [ko(n, i), r.scrollToMatch(s.main, n)],
    userEvent: "select.search"
  }), bf(n), !0;
}), is = /* @__PURE__ */ Hi((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, s = e.prevMatch(t, i, i);
  if (!s)
    return !1;
  let r = b.single(s.from, s.to), o = n.state.facet(li);
  return n.dispatch({
    selection: r,
    effects: [ko(n, s), o.scrollToMatch(r.main, n)],
    userEvent: "select.search"
  }), bf(n), !0;
}), Km = /* @__PURE__ */ Hi((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? !1 : (n.dispatch({
    selection: b.create(t.map((i) => b.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), e0 = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: i, to: s } = t.main, r = [], o = 0;
  for (let l = new ni(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == i && (o = r.length), r.push(b.range(l.value.from, l.value.to));
  }
  return e(n.update({
    selection: b.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, ra = /* @__PURE__ */ Hi((n, { query: e }) => {
  let { state: t } = n, { from: i, to: s } = t.selection.main;
  if (t.readOnly)
    return !1;
  let r = e.nextMatch(t, i, i);
  if (!r)
    return !1;
  let o = [], l, a, h = [];
  if (r.from == i && r.to == s && (a = t.toText(e.getReplacement(r)), o.push({ from: r.from, to: r.to, insert: a }), r = e.nextMatch(t, r.from, r.to), h.push(v.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + "."))), r) {
    let c = o.length == 0 || o[0].from >= r.to ? 0 : r.to - r.from - a.length;
    l = b.single(r.from - c, r.to - c), h.push(ko(n, r)), h.push(t.facet(li).scrollToMatch(l.main, n));
  }
  return n.dispatch({
    changes: o,
    selection: l,
    effects: h,
    userEvent: "input.replace"
  }), !0;
}), t0 = /* @__PURE__ */ Hi((n, { query: e }) => {
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
    effects: v.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function Qo(n) {
  return n.state.facet(li).createPanel(n);
}
function qr(n, e) {
  var t, i, s, r, o;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let h = n.facet(li);
  return new gf({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : h.literal,
    regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : h.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : h.wholeWord
  });
}
function Sf(n) {
  let e = Mi(n, Qo);
  return e && e.dom.querySelector("[main-field]");
}
function bf(n) {
  let e = Sf(n);
  e && e == n.root.activeElement && e.select();
}
const yf = (n) => {
  let e = n.state.field(St, !1);
  if (e && e.panel) {
    let t = Sf(n);
    if (t && t != n.root.activeElement) {
      let i = qr(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: Ei.of(i) }), t.focus(), t.select();
    }
  } else
    n.dispatch({ effects: [
      wo.of(!0),
      e ? Ei.of(qr(n.state, e.query.spec)) : A.appendConfig.of(r0)
    ] });
  return !0;
}, xf = (n) => {
  let e = n.state.field(St, !1);
  if (!e || !e.panel)
    return !1;
  let t = Mi(n, Qo);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: wo.of(!1) }), !0;
}, i0 = [
  { key: "Mod-f", run: yf, scope: "editor search-panel" },
  { key: "F3", run: ts, shift: is, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: ts, shift: is, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: xf, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: e0 },
  { key: "Alt-g", run: Rm },
  { key: "Mod-d", run: qm, preventDefault: !0 }
];
class n0 {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(St).query.spec;
    this.commit = this.commit.bind(this), this.searchField = L("input", {
      value: t.search,
      placeholder: ve(e, "Find"),
      "aria-label": ve(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = L("input", {
      value: t.replace,
      placeholder: ve(e, "Replace"),
      "aria-label": ve(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = L("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = L("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = L("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function i(s, r, o) {
      return L("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = L("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      i("next", () => ts(e), [ve(e, "next")]),
      i("prev", () => is(e), [ve(e, "previous")]),
      i("select", () => Km(e), [ve(e, "all")]),
      L("label", null, [this.caseField, ve(e, "match case")]),
      L("label", null, [this.reField, ve(e, "regexp")]),
      L("label", null, [this.wordField, ve(e, "by word")]),
      ...e.state.readOnly ? [] : [
        L("br"),
        this.replaceField,
        i("replace", () => ra(e), [ve(e, "replace")]),
        i("replaceAll", () => t0(e), [ve(e, "replace all")])
      ],
      L("button", {
        name: "close",
        onclick: () => xf(e),
        "aria-label": ve(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new gf({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: Ei.of(e) }));
  }
  keydown(e) {
    OO(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? is : ts)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), ra(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Ei) && !i.value.eq(this.query) && this.setQuery(i.value);
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
    return this.view.state.facet(li).top;
  }
}
function ve(n, e) {
  return n.state.phrase(e);
}
const Sn = 30, bn = /[\s\.,:;?!]/;
function ko(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), s = n.state.doc.lineAt(t).to, r = Math.max(i.from, e - Sn), o = Math.min(s, t + Sn), l = n.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < Sn; a++)
      if (!bn.test(l[a + 1]) && bn.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - Sn; a--)
      if (!bn.test(l[a - 1]) && bn.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return v.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const s0 = /* @__PURE__ */ v.baseTheme({
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
}), r0 = [
  St,
  /* @__PURE__ */ Wt.low(Jm),
  s0
];
class wf {
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
    let t = oe(this.state).resolveInner(this.pos, -1);
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
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), s = t.text.slice(i - t.from, this.pos - t.from), r = s.search(kf(e, !1));
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
function oa(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function o0(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of n) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++)
      t[s[r]] = !0;
  }
  let i = oa(e) + oa(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function Qf(n) {
  let e = n.map((s) => typeof s == "string" ? { label: s } : s), [t, i] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : o0(e);
  return (s) => {
    let r = s.matchBefore(i);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
function l0(n, e) {
  return (t) => {
    for (let i = oe(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
      if (n.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return e(t);
  };
}
class la {
  constructor(e, t, i, s) {
    this.completion = e, this.source = t, this.match = i, this.score = s;
  }
}
function bt(n) {
  return n.selection.main.from;
}
function kf(n, e) {
  var t;
  let { source: i } = n, s = e && i[0] != "^", r = i[i.length - 1] != "$";
  return !s && !r ? n : new RegExp(`${s ? "^" : ""}(?:${i})${r ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const $f = /* @__PURE__ */ ht.define();
function a0(n, e, t, i) {
  let { main: s } = n.selection, r = t - s.from, o = i - s.from;
  return Object.assign(Object.assign({}, n.changeByRange((l) => l != s && t != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(t, i) ? { range: l } : {
    changes: { from: l.from + r, to: i == s.from ? l.to : l.from + o, insert: e },
    range: b.cursor(l.from + r + e.length)
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const aa = /* @__PURE__ */ new WeakMap();
function h0(n) {
  if (!Array.isArray(n))
    return n;
  let e = aa.get(n);
  return e || aa.set(n, e = Qf(n)), e;
}
const $o = /* @__PURE__ */ A.define(), Ui = /* @__PURE__ */ A.define();
class c0 {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = ce(e, t), s = Ae(i);
      this.chars.push(i);
      let r = e.slice(t, t + s), o = r.toUpperCase();
      this.folded.push(ce(o == r ? r.toLowerCase() : o, 0)), t += s;
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
      let w = ce(e, 0), $ = Ae(w), y = $ == e.length ? 0 : -100;
      if (w != t[0])
        if (w == i[0])
          y += -200;
        else
          return !1;
      return this.ret(y, [0, $]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let w = 0, $ = Math.min(e.length, 200); w < $ && h < a; ) {
        let y = ce(e, w);
        (y == t[h] || y == i[h]) && (s[h++] = w), w += Ae(y);
      }
      if (h < a)
        return !1;
    }
    let c = 0, f = 0, u = !1, d = 0, O = -1, m = -1, g = /[a-z]/.test(e), S = !0;
    for (let w = 0, $ = Math.min(e.length, 200), y = 0; w < $ && f < a; ) {
      let x = ce(e, w);
      l < 0 && (c < a && x == t[c] && (r[c++] = w), d < a && (x == t[d] || x == i[d] ? (d == 0 && (O = w), m = w + 1, d++) : d = 0));
      let Q, C = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (Q = Jr(x)) != Q.toLowerCase() ? 1 : Q != Q.toUpperCase() ? 2 : 0;
      (!w || C == 1 && g || y == 0 && C != 0) && (t[f] == x || i[f] == x && (u = !0) ? o[f++] = w : o.length && (S = !1)), y = C, w += Ae(x);
    }
    return f == a && o[0] == 0 && S ? this.result(-100 + (u ? -200 : 0), o, e) : d == a && O == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - e.length, [O, m]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (S ? 0 : -1100), o, e) : t.length == 2 ? !1 : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, i) {
    let s = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? Ae(ce(i, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(e - i.length, s);
  }
}
const ge = /* @__PURE__ */ P.define({
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
      positionInfo: f0,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (i) => ha(e(i), t(i)),
      optionClass: (e, t) => (i) => ha(e(i), t(i)),
      addToOptions: (e, t) => e.concat(t)
    });
  }
});
function ha(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function f0(n, e, t, i, s, r) {
  let o = n.textDirection == G.RTL, l = o, a = !1, h = "top", c, f, u = e.left - s.left, d = s.right - e.right, O = i.right - i.left, m = i.bottom - i.top;
  if (l && u < Math.min(O, d) ? l = !1 : !l && d < Math.min(O, u) && (l = !0), O <= (l ? u : d))
    c = Math.max(s.top, Math.min(t.top, s.bottom - m)) - e.top, f = Math.min(400, l ? u : d);
  else {
    a = !0, f = Math.min(
      400,
      (o ? e.right : s.right - e.left) - 30
      /* Info.Margin */
    );
    let w = s.bottom - e.bottom;
    w >= m || w > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let g = (e.bottom - e.top) / r.offsetHeight, S = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${f / S}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function u0(n) {
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
function zs(n, e, t) {
  if (n <= t)
    return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class d0 {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: r, selected: o } = s.open, l = e.state.facet(ge);
    this.optionContent = u0(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = zs(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(e, h[+f[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(ge).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: Ui.of(null) });
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
      (!s.open || s.open.options != r) && (this.range = zs(r.length, o, e.state.facet(ge).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
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
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = zs(t.options.length, t.selected, this.view.state.facet(ge).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: s } = i;
      if (!s)
        return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
      }).catch((o) => De(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
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
    return t && p0(this.list, t), t;
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
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(ge).positionInfo(this.view, t, s, i, r, this.dom);
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
function O0(n, e) {
  return (t) => new d0(t, n, e);
}
function p0(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), s = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / s : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / s);
}
function ca(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function g0(n, e) {
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
          s(new la(c, a.source, h ? h(c) : [], 1e9 - t.length));
      else {
        let c = new c0(e.sliceDoc(a.from, a.to));
        for (let f of a.result.options)
          if (c.match(f.label)) {
            let u = f.displayLabel ? h ? h(f, c.matched) : [] : c.matched;
            s(new la(f, a.source, u, c.score + (f.boost || 0)));
          }
      }
    }
  if (i) {
    let a = /* @__PURE__ */ Object.create(null), h = 0, c = (f, u) => {
      var d, O;
      return ((d = f.rank) !== null && d !== void 0 ? d : 1e9) - ((O = u.rank) !== null && O !== void 0 ? O : 1e9) || (f.name < u.name ? -1 : 1);
    };
    for (let f of i.sort(c))
      h -= 1e5, a[f.name] = h;
    for (let f of t) {
      let { section: u } = f.completion;
      u && (f.score += a[typeof u == "string" ? u : u.name]);
    }
  }
  let r = [], o = null, l = e.facet(ge).compareCompletions;
  for (let a of t.sort((h, c) => c.score - h.score || l(h.completion, c.completion))) {
    let h = a.completion;
    !o || o.label != h.label || o.detail != h.detail || o.type != null && h.type != null && o.type != h.type || o.apply != h.apply || o.boost != h.boost ? r.push(a) : ca(a.completion) > ca(o) && (r[r.length - 1] = a), o = a.completion;
  }
  return r;
}
class zt {
  constructor(e, t, i, s, r, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new zt(this.options, fa(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, s, r) {
    let o = g0(e, t);
    if (!o.length)
      return s && e.some(
        (a) => a.state == 1
        /* State.Pending */
      ) ? new zt(s.options, s.attrs, s.tooltip, s.timestamp, s.selected, !0) : null;
    let l = t.facet(ge).selectOnOpen ? 0 : -1;
    if (s && s.selected != l && s.selected != -1) {
      let a = s.options[s.selected].completion;
      for (let h = 0; h < o.length; h++)
        if (o[h].completion == a) {
          l = h;
          break;
        }
    }
    return new zt(o, fa(i, l), {
      pos: e.reduce((a, h) => h.hasResult() ? Math.min(a, h.from) : a, 1e8),
      create: x0,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), l, !1);
  }
  map(e) {
    return new zt(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
}
class ns {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new ns(b0, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(ge), r = (i.override || t.languageDataAt("autocomplete", bt(t)).map(h0)).map((l) => (this.active.find((h) => h.source == l) || new we(
      l,
      this.active.some(
        (h) => h.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, i));
    r.length == this.active.length && r.every((l, a) => l == this.active[a]) && (r = this.active);
    let o = this.open;
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) || !m0(r, this.active) ? o = zt.build(r, t, this.id, o, i) : o && o.disabled && !r.some(
      (l) => l.state == 1
      /* State.Pending */
    ) && (o = null), !o && r.every(
      (l) => l.state != 1
      /* State.Pending */
    ) && r.some((l) => l.hasResult()) && (r = r.map((l) => l.hasResult() ? new we(
      l.source,
      0
      /* State.Inactive */
    ) : l));
    for (let l of e.effects)
      l.is(Pf) && (o = o && o.setSelected(l.value, this.id));
    return r == this.active && o == this.open ? this : new ns(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : S0;
  }
}
function m0(n, e) {
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
const S0 = {
  "aria-autocomplete": "list"
};
function fa(n, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": n
  };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const b0 = [];
function zr(n) {
  return n.isUserEvent("input.type") ? "input" : n.isUserEvent("delete.backward") ? "delete" : null;
}
class we {
  constructor(e, t, i = -1) {
    this.source = e, this.state = t, this.explicitPos = i;
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let i = zr(e), s = this;
    i ? s = s.handleUserEvent(e, i, t) : e.docChanged ? s = s.handleChange(e) : e.selection && s.state != 0 && (s = new we(
      s.source,
      0
      /* State.Inactive */
    ));
    for (let r of e.effects)
      if (r.is($o))
        s = new we(s.source, 1, r.value ? bt(e.state) : -1);
      else if (r.is(Ui))
        s = new we(
          s.source,
          0
          /* State.Inactive */
        );
      else if (r.is(vf))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  handleUserEvent(e, t, i) {
    return t == "delete" || !i.activateOnTyping ? this.map(e.changes) : new we(
      this.source,
      1
      /* State.Pending */
    );
  }
  handleChange(e) {
    return e.changes.touchesRange(bt(e.startState)) ? new we(
      this.source,
      0
      /* State.Inactive */
    ) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new we(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class Jt extends we {
  constructor(e, t, i, s, r) {
    super(e, 2, t), this.result = i, this.from = s, this.to = r;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, t, i) {
    var s;
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = bt(e.state);
    if ((this.explicitPos < 0 ? l <= r : l < this.from) || l > o || t == "delete" && bt(e.startState) == this.from)
      return new we(
        this.source,
        t == "input" && i.activateOnTyping ? 1 : 0
        /* State.Inactive */
      );
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), h;
    return y0(this.result.validFor, e.state, r, o) ? new Jt(this.source, a, this.result, r, o) : this.result.update && (h = this.result.update(this.result, r, o, new wf(e.state, l, a >= 0))) ? new Jt(this.source, a, h, h.from, (s = h.to) !== null && s !== void 0 ? s : bt(e.state)) : new we(this.source, 1, a);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new we(
      this.source,
      0
      /* State.Inactive */
    ) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : new Jt(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
  }
}
function y0(n, e, t, i) {
  if (!n)
    return !1;
  let s = e.sliceDoc(t, i);
  return typeof n == "function" ? n(s, t, i, e) : kf(n, !0).test(s);
}
const vf = /* @__PURE__ */ A.define({
  map(n, e) {
    return n.map((t) => t.map(e));
  }
}), Pf = /* @__PURE__ */ A.define(), Ce = /* @__PURE__ */ ae.define({
  create() {
    return ns.start();
  },
  update(n, e) {
    return n.update(e);
  },
  provide: (n) => [
    lo.from(n, (e) => e.tooltip),
    v.contentAttributes.from(n, (e) => e.attrs)
  ]
});
function Zf(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Ce).active.find((s) => s.source == e.source);
  return i instanceof Jt ? (typeof t == "string" ? n.dispatch(Object.assign(Object.assign({}, a0(n.state, t, i.from, i.to)), { annotations: $f.of(e.completion) })) : t(n, e.completion, i.from, i.to), !0) : !1;
}
const x0 = /* @__PURE__ */ O0(Ce, Zf);
function yn(n, e = "option") {
  return (t) => {
    let i = t.state.field(Ce, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(ge).interactionDelay)
      return !1;
    let s = 1, r;
    e == "page" && (r = nc(t, i.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: Pf.of(l) }), !0;
  };
}
const w0 = (n) => {
  let e = n.state.field(Ce, !1);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(ge).interactionDelay ? !1 : Zf(n, e.open.options[e.open.selected]);
}, Q0 = (n) => n.state.field(Ce, !1) ? (n.dispatch({ effects: $o.of(!0) }), !0) : !1, k0 = (n) => {
  let e = n.state.field(Ce, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (n.dispatch({ effects: Ui.of(null) }), !0);
};
class $0 {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const v0 = 50, P0 = 1e3, Z0 = /* @__PURE__ */ J.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
    for (let e of n.state.field(Ce).active)
      e.state == 1 && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(Ce);
    if (!n.selectionSet && !n.docChanged && n.startState.field(Ce) == e)
      return;
    let t = n.transactions.some((i) => (i.selection || i.docChanged) && !zr(i));
    for (let i = 0; i < this.running.length; i++) {
      let s = this.running[i];
      if (t || s.updates.length + n.transactions.length > v0 && Date.now() - s.time > P0) {
        for (let r of s.context.abortListeners)
          try {
            r();
          } catch (o) {
            De(this.view.state, o);
          }
        s.context.abortListeners = null, this.running.splice(i--, 1);
      } else
        s.updates.push(...n.transactions);
    }
    if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((i) => i.state == 1 && !this.running.some((s) => s.active.source == i.source)) ? setTimeout(() => this.startUpdate(), 50) : -1, this.composing != 0)
      for (let i of n.transactions)
        zr(i) == "input" ? this.composing = 2 : this.composing == 2 && i.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    let { state: n } = this.view, e = n.field(Ce);
    for (let t of e.active)
      t.state == 1 && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
  }
  startQuery(n) {
    let { state: e } = this.view, t = bt(e), i = new wf(e, t, n.explicitPos == t), s = new $0(n, i);
    this.running.push(s), Promise.resolve(n.source(i)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: Ui.of(null) }), De(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ge).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(ge);
    for (let i = 0; i < this.running.length; i++) {
      let s = this.running[i];
      if (s.done === void 0)
        continue;
      if (this.running.splice(i--, 1), s.done) {
        let o = new Jt(s.active.source, s.active.explicitPos, s.done, s.done.from, (n = s.done.to) !== null && n !== void 0 ? n : bt(s.updates.length ? s.updates[0].startState : this.view.state));
        for (let l of s.updates)
          o = o.update(l, t);
        if (o.hasResult()) {
          e.push(o);
          continue;
        }
      }
      let r = this.view.state.field(Ce).active.find((o) => o.source == s.active.source);
      if (r && r.state == 1)
        if (s.done == null) {
          let o = new we(
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
    e.length && this.view.dispatch({ effects: vf.of(e) });
  }
}, {
  eventHandlers: {
    blur(n) {
      let e = this.view.state.field(Ce, !1);
      if (e && e.tooltip && this.view.state.facet(ge).closeOnBlur) {
        let t = e.open && nc(this.view, e.open.tooltip);
        (!t || !t.dom.contains(n.relatedTarget)) && this.view.dispatch({ effects: Ui.of(null) });
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: $o.of(!1) }), 20), this.composing = 0;
    }
  }
}), Cf = /* @__PURE__ */ v.baseTheme({
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
});
class C0 {
  constructor(e, t, i, s) {
    this.field = e, this.line = t, this.from = i, this.to = s;
  }
}
class vo {
  constructor(e, t, i) {
    this.field = e, this.from = t, this.to = i;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, ue.TrackDel), i = e.mapPos(this.to, 1, ue.TrackDel);
    return t == null || i == null ? null : new vo(this.field, t, i);
  }
}
class Po {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let i = [], s = [t], r = e.doc.lineAt(t), o = /^\s*/.exec(r.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let h = o, c = /^\t*/.exec(a)[0].length;
        for (let f = 0; f < c; f++)
          h += e.facet(Vi);
        s.push(t + h.length - c), a = h + a.slice(c);
      }
      i.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new vo(a.field, s[a.line] + a.from, s[a.line] + a.to));
    return { text: i, ranges: l };
  }
  static parse(e) {
    let t = [], i = [], s = [], r;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; r = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(o); ) {
        let l = r[1] ? +r[1] : null, a = r[2] || r[3] || "", h = -1;
        for (let c = 0; c < t.length; c++)
          (l != null ? t[c].seq == l : a && t[c].name == a) && (h = c);
        if (h < 0) {
          let c = 0;
          for (; c < t.length && (l == null || t[c].seq != null && t[c].seq < l); )
            c++;
          t.splice(c, 0, { seq: l, name: a }), h = c;
          for (let f of s)
            f.field >= h && f.field++;
        }
        s.push(new C0(h, i.length, r.index, r.index + a.length)), o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length);
      }
      for (let l; l = /\\([{}])/.exec(o); ) {
        o = o.slice(0, l.index) + l[1] + o.slice(l.index + l[0].length);
        for (let a of s)
          a.line == i.length && a.from > l.index && (a.from--, a.to--);
      }
      i.push(o);
    }
    return new Po(i, s);
  }
}
let T0 = /* @__PURE__ */ Y.widget({ widget: /* @__PURE__ */ new class extends it {
  toDOM() {
    let n = document.createElement("span");
    return n.className = "cm-snippetFieldPosition", n;
  }
  ignoreEvent() {
    return !1;
  }
}() }), Y0 = /* @__PURE__ */ Y.mark({ class: "cm-snippetField" });
class ai {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = Y.set(e.map((i) => (i.from == i.to ? T0 : Y0).range(i.from, i.to)));
  }
  map(e) {
    let t = [];
    for (let i of this.ranges) {
      let s = i.map(e);
      if (!s)
        return null;
      t.push(s);
    }
    return new ai(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((i) => i.field == this.active && i.from <= t.from && i.to >= t.to));
  }
}
const Ji = /* @__PURE__ */ A.define({
  map(n, e) {
    return n && n.map(e);
  }
}), A0 = /* @__PURE__ */ A.define(), Bi = /* @__PURE__ */ ae.define({
  create() {
    return null;
  },
  update(n, e) {
    for (let t of e.effects) {
      if (t.is(Ji))
        return t.value;
      if (t.is(A0) && n)
        return new ai(n.ranges, t.value);
    }
    return n && e.docChanged && (n = n.map(e.changes)), n && e.selection && !n.selectionInsideField(e.selection) && (n = null), n;
  },
  provide: (n) => v.decorations.from(n, (e) => e ? e.deco : Y.none)
});
function Zo(n, e) {
  return b.create(n.filter((t) => t.field == e).map((t) => b.range(t.from, t.to)));
}
function X0(n) {
  let e = Po.parse(n);
  return (t, i, s, r) => {
    let { text: o, ranges: l } = e.instantiate(t.state, s), a = {
      changes: { from: s, to: r, insert: _.of(o) },
      scrollIntoView: !0,
      annotations: i ? $f.of(i) : void 0
    };
    if (l.length && (a.selection = Zo(l, 0)), l.length > 1) {
      let h = new ai(l, 0), c = a.effects = [Ji.of(h)];
      t.state.field(Bi, !1) === void 0 && c.push(A.appendConfig.of([Bi, _0, E0, Cf]));
    }
    t.dispatch(t.state.update(a));
  };
}
function Tf(n) {
  return ({ state: e, dispatch: t }) => {
    let i = e.field(Bi, !1);
    if (!i || n < 0 && i.active == 0)
      return !1;
    let s = i.active + n, r = n > 0 && !i.ranges.some((o) => o.field == s + n);
    return t(e.update({
      selection: Zo(i.ranges, s),
      effects: Ji.of(r ? null : new ai(i.ranges, s)),
      scrollIntoView: !0
    })), !0;
  };
}
const R0 = ({ state: n, dispatch: e }) => n.field(Bi, !1) ? (e(n.update({ effects: Ji.of(null) })), !0) : !1, M0 = /* @__PURE__ */ Tf(1), W0 = /* @__PURE__ */ Tf(-1), D0 = [
  { key: "Tab", run: M0, shift: W0 },
  { key: "Escape", run: R0 }
], ua = /* @__PURE__ */ P.define({
  combine(n) {
    return n.length ? n[0] : D0;
  }
}), _0 = /* @__PURE__ */ Wt.highest(/* @__PURE__ */ qi.compute([ua], (n) => n.facet(ua)));
function xe(n, e) {
  return Object.assign(Object.assign({}, e), { apply: X0(n) });
}
const E0 = /* @__PURE__ */ v.domEventHandlers({
  mousedown(n, e) {
    let t = e.state.field(Bi, !1), i;
    if (!t || (i = e.posAtCoords({ x: n.clientX, y: n.clientY })) == null)
      return !1;
    let s = t.ranges.find((r) => r.from <= i && r.to >= i);
    return !s || s.field == t.active ? !1 : (e.dispatch({
      selection: Zo(t.ranges, s.field),
      effects: Ji.of(t.ranges.some((r) => r.field > s.field) ? new ai(t.ranges, s.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), Ii = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Tt = /* @__PURE__ */ A.define({
  map(n, e) {
    let t = e.mapPos(n, -1, ue.TrackAfter);
    return t ?? void 0;
  }
}), Co = /* @__PURE__ */ new class extends Xt {
}();
Co.startSide = 1;
Co.endSide = -1;
const Yf = /* @__PURE__ */ ae.define({
  create() {
    return U.empty;
  },
  update(n, e) {
    if (e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head).from, i = e.startState.doc.lineAt(e.startState.selection.main.head).from;
      t != e.changes.mapPos(i, -1) && (n = U.empty);
    }
    n = n.map(e.changes);
    for (let t of e.effects)
      t.is(Tt) && (n = n.update({ add: [Co.range(t.value, t.value + 1)] }));
    return n;
  }
});
function U0() {
  return [I0, Yf];
}
const Vs = "()[]{}<>";
function Af(n) {
  for (let e = 0; e < Vs.length; e += 2)
    if (Vs.charCodeAt(e) == n)
      return Vs.charAt(e + 1);
  return Jr(n < 128 ? n : n + 1);
}
function Xf(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || Ii;
}
const B0 = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), I0 = /* @__PURE__ */ v.inputHandler.of((n, e, t, i) => {
  if ((B0 ? n.composing : n.compositionStarted) || n.state.readOnly)
    return !1;
  let s = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && Ae(ce(i, 0)) == 1 || e != s.from || t != s.to)
    return !1;
  let r = q0(n.state, i);
  return r ? (n.dispatch(r), !0) : !1;
}), j0 = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let i = Xf(n, n.selection.main.head).brackets || Ii.brackets, s = null, r = n.changeByRange((o) => {
    if (o.empty) {
      let l = z0(n.doc, o.head);
      for (let a of i)
        if (a == l && bs(n.doc, o.head) == Af(ce(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: b.cursor(o.head - a.length)
          };
    }
    return { range: s = o };
  });
  return s || e(n.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, L0 = [
  { key: "Backspace", run: j0 }
];
function q0(n, e) {
  let t = Xf(n, n.selection.main.head), i = t.brackets || Ii.brackets;
  for (let s of i) {
    let r = Af(ce(s, 0));
    if (e == s)
      return r == s ? G0(n, s, i.indexOf(s + s + s) > -1, t) : V0(n, s, r, t.before || Ii.before);
    if (e == r && Rf(n, n.selection.main.from))
      return N0(n, s, r);
  }
  return null;
}
function Rf(n, e) {
  let t = !1;
  return n.field(Yf).between(0, n.doc.length, (i) => {
    i == e && (t = !0);
  }), t;
}
function bs(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, Ae(ce(t, 0)));
}
function z0(n, e) {
  let t = n.sliceString(e - 2, e);
  return Ae(ce(t, 0)) == t.length ? t : t.slice(1);
}
function V0(n, e, t, i) {
  let s = null, r = n.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: Tt.of(o.to + e.length),
        range: b.range(o.anchor + e.length, o.head + e.length)
      };
    let l = bs(n.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: Tt.of(o.head + e.length),
      range: b.cursor(o.head + e.length)
    } : { range: s = o };
  });
  return s ? null : n.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function N0(n, e, t) {
  let i = null, s = n.changeByRange((r) => r.empty && bs(n.doc, r.head) == t ? {
    changes: { from: r.head, to: r.head + t.length, insert: t },
    range: b.cursor(r.head + t.length)
  } : i = { range: r });
  return i ? null : n.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function G0(n, e, t, i) {
  let s = i.stringPrefixes || Ii.stringPrefixes, r = null, o = n.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Tt.of(l.to + e.length),
        range: b.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, h = bs(n.doc, a), c;
    if (h == e) {
      if (da(n, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Tt.of(a + e.length),
          range: b.cursor(a + e.length)
        };
      if (Rf(n, a)) {
        let u = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: b.cursor(a + u.length)
        };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (c = Oa(n, a - 2 * e.length, s)) > -1 && da(n, c))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Tt.of(a + e.length),
          range: b.cursor(a + e.length)
        };
      if (n.charCategorizer(a)(h) != V.Word && Oa(n, a, s) > -1 && !F0(n, a, e, s))
        return {
          changes: { insert: e + e, from: a },
          effects: Tt.of(a + e.length),
          range: b.cursor(a + e.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : n.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function da(n, e) {
  let t = oe(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function F0(n, e, t, i) {
  let s = oe(n).resolveInner(e, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
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
function Oa(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != V.Word)
    return e;
  for (let s of t) {
    let r = e - s.length;
    if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != V.Word)
      return r;
  }
  return -1;
}
function H0(n = {}) {
  return [
    Ce,
    ge.of(n),
    Z0,
    J0,
    Cf
  ];
}
const Mf = [
  { key: "Ctrl-Space", run: Q0 },
  { key: "Escape", run: k0 },
  { key: "ArrowDown", run: /* @__PURE__ */ yn(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ yn(!1) },
  { key: "PageDown", run: /* @__PURE__ */ yn(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ yn(!1, "page") },
  { key: "Enter", run: w0 }
], J0 = /* @__PURE__ */ Wt.highest(/* @__PURE__ */ qi.computeN([ge], (n) => n.facet(ge).defaultKeymap ? [Mf] : []));
class K0 {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class Zt {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let s = e, r = i.facet(_f).markerFilter;
    r && (s = r(s));
    let o = Y.set(s.map((l) => l.from == l.to || l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from ? Y.widget({
      widget: new aS(l),
      diagnostic: l
    }).range(l.from) : Y.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new Zt(o, t, si(o));
  }
}
function si(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (s, r, { spec: o }) => {
    if (!(e && o.diagnostic != e))
      return i = new K0(s, r, o.diagnostic), !1;
  }), i;
}
function eS(n, e) {
  let t = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((i) => i.is(Wf)) || n.changes.touchesRange(t.from, t.to));
}
function tS(n, e) {
  return n.field(Ye, !1) ? e : e.concat(A.appendConfig.of(fS));
}
const Wf = /* @__PURE__ */ A.define(), To = /* @__PURE__ */ A.define(), Df = /* @__PURE__ */ A.define(), Ye = /* @__PURE__ */ ae.define({
  create() {
    return new Zt(Y.none, null, null);
  },
  update(n, e) {
    if (e.docChanged) {
      let t = n.diagnostics.map(e.changes), i = null;
      if (n.selected) {
        let s = e.changes.mapPos(n.selected.from, 1);
        i = si(t, n.selected.diagnostic, s) || si(t, null, s);
      }
      n = new Zt(t, n.panel, i);
    }
    for (let t of e.effects)
      t.is(Wf) ? n = Zt.init(t.value, n.panel, e.state) : t.is(To) ? n = new Zt(n.diagnostics, t.value ? ys.open : null, n.selected) : t.is(Df) && (n = new Zt(n.diagnostics, n.panel, t.value));
    return n;
  },
  provide: (n) => [
    Wi.from(n, (e) => e.panel),
    v.decorations.from(n, (e) => e.diagnostics)
  ]
}), iS = /* @__PURE__ */ Y.mark({ class: "cm-lintRange cm-lintRange-active" });
function nS(n, e, t) {
  let { diagnostics: i } = n.state.field(Ye), s = [], r = 2e8, o = 0;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0)) && (s.push(c.diagnostic), r = Math.min(a, r), o = Math.max(h, o));
  });
  let l = n.state.facet(_f).tooltipFilter;
  return l && (s = l(s)), s.length ? {
    pos: r,
    end: o,
    above: n.state.doc.lineAt(r).to < o,
    create() {
      return { dom: sS(n, s) };
    }
  } : null;
}
function sS(n, e) {
  return L("ul", { class: "cm-tooltip-lint" }, e.map((t) => Uf(n, t, !1)));
}
const rS = (n) => {
  let e = n.state.field(Ye, !1);
  (!e || !e.panel) && n.dispatch({ effects: tS(n.state, [To.of(!0)]) });
  let t = Mi(n, ys.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, pa = (n) => {
  let e = n.state.field(Ye, !1);
  return !e || !e.panel ? !1 : (n.dispatch({ effects: To.of(!1) }), !0);
}, oS = (n) => {
  let e = n.state.field(Ye, !1);
  if (!e)
    return !1;
  let t = n.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to) ? !1 : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, lS = [
  { key: "Mod-Shift-m", run: rS, preventDefault: !0 },
  { key: "F8", run: oS }
], _f = /* @__PURE__ */ P.define({
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
function Ef(n) {
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
function Uf(n, e, t) {
  var i;
  let s = t ? Ef(e.actions) : [];
  return L("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, L("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage() : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = !1, a = (u) => {
      if (u.preventDefault(), l)
        return;
      l = !0;
      let d = si(n.state.field(Ye).diagnostics, e);
      d && r.apply(n, d.from, d.to);
    }, { name: h } = r, c = s[o] ? h.indexOf(s[o]) : -1, f = c < 0 ? h : [
      h.slice(0, c),
      L("u", h.slice(c, c + 1)),
      h.slice(c + 1)
    ];
    return L("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, f);
  }), e.source && L("div", { class: "cm-diagnosticSource" }, e.source));
}
class aS extends it {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return L("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class ga {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Uf(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class ys {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (s.keyCode == 27)
        pa(this.view), this.view.focus();
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
        let { diagnostic: r } = this.items[this.selectedIndex], o = Ef(r.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = si(this.view.state.field(Ye).diagnostics, r);
            a && r.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, i = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = L("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i
    }), this.dom = L("div", { class: "cm-panel-lint" }, this.list, L("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => pa(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Ye).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Ye), i = 0, s = !1, r = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
      let h = -1, c;
      for (let f = i; f < this.items.length; f++)
        if (this.items[f].diagnostic == a.diagnostic) {
          h = f;
          break;
        }
      h < 0 ? (c = new ga(this.view, a.diagnostic), this.items.splice(i, 0, c), s = !0) : (c = this.items[h], h > i && (this.items.splice(i, h - i), s = !0)), t && c.diagnostic == t.diagnostic ? c.dom.hasAttribute("aria-selected") || (c.dom.setAttribute("aria-selected", "true"), r = c) : c.dom.hasAttribute("aria-selected") && c.dom.removeAttribute("aria-selected"), i++;
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new ga(this.view, {
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
    let t = this.view.state.field(Ye), i = si(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: Df.of(i)
    });
  }
  static open(e) {
    return new ys(e);
  }
}
function hS(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function xn(n) {
  return hS(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const cS = /* @__PURE__ */ v.baseTheme({
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
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ xn("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ xn("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ xn("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ xn("#66d") },
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
}), fS = [
  Ye,
  /* @__PURE__ */ v.decorations.compute([Ye], (n) => {
    let { selected: e, panel: t } = n.field(Ye);
    return !e || !t || e.from == e.to ? Y.none : Y.set([
      iS.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ tp(nS, { hideOn: eS }),
  cS
], uS = /* @__PURE__ */ (() => [
  cp(),
  dp(),
  YO(),
  Yg(),
  ng(),
  yO(),
  $O(),
  D.allowMultipleSelections.of(!0),
  jp(),
  Zc(lg, { fallback: !0 }),
  Og(),
  U0(),
  H0(),
  qO(),
  NO(),
  DO(),
  Dm(),
  qi.of([
    ...L0,
    ...Ym,
    ...i0,
    ...Ug,
    ...Kp,
    ...Mf,
    ...lS
  ])
])();
class ss {
  /**
  @internal
  */
  constructor(e, t, i, s, r, o, l, a, h, c = 0, f) {
    this.p = e, this.stack = t, this.state = i, this.reducePos = s, this.pos = r, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = h, this.lookAhead = c, this.parent = f;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(e, t, i = 0) {
    let s = e.parser.context;
    return new ss(e, [], t, i, i, 0, [], 0, s ? new ma(s, s.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(e) {
    var t;
    let i = e >> 19, s = e & 65535, { parser: r } = this.p, o = r.dynamicPrecedence(s);
    if (o && (this.score += o), i == 0) {
      this.pushState(r.getGoto(this.state, s, !0), this.reducePos), s < r.minRepeatTerm && this.storeNode(s, this.reducePos, this.reducePos, 4, !0), this.reduceContext(s, this.reducePos);
      return;
    }
    let l = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0), a = l ? this.stack[l - 2] : this.p.ranges[0].from, h = this.reducePos - a;
    h >= 2e3 && !(!((t = this.p.parser.nodeSet.types[s]) === null || t === void 0) && t.isAnonymous) && (a == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = h) : this.p.lastBigReductionSize < h && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = a, this.p.lastBigReductionSize = h));
    let c = l ? this.stack[l - 1] : 0, f = this.bufferBase + this.buffer.length - c;
    if (s < r.minRepeatTerm || e & 131072) {
      let u = r.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(s, a, u, f + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[l];
    else {
      let u = this.stack[l - 3];
      this.state = r.getGoto(u, s, !0);
    }
    for (; this.stack.length > l; )
      this.stack.pop();
    this.reduceContext(s, a);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, i, s = 4, r = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (t == i)
          return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = i;
          return;
        }
      }
    }
    if (!r || this.pos == i)
      this.buffer.push(e, t, i, s);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0)
        for (; o > 0 && this.buffer[o - 2] > i; )
          this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, s > 4 && (s -= 4);
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = i, this.buffer[o + 3] = s;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, i, s) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      this.pos = s, this.shiftContext(t, i), t <= this.p.parser.maxNode && this.buffer.push(t, i, s, 4);
    else {
      let r = e, { parser: o } = this.p;
      (s > this.pos || t <= o.maxNode) && (this.pos = s, o.stateFlag(
        r,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = s)), this.pushState(r, i), this.shiftContext(t, i), t <= o.maxNode && this.buffer.push(t, i, s, 4);
    }
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, i, s) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, i, s);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++);
    let s = this.pos;
    this.reducePos = this.pos = s + e.length, this.pushState(t, s), this.buffer.push(
      i,
      s,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let i = e.buffer.slice(t), s = e.bufferBase + t;
    for (; e && s == e.bufferBase; )
      e = e.parent;
    return new ss(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, s, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let i = e <= this.p.parser.maxNode;
    i && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, i ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new dS(this); ; ) {
      let i = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (i == 0)
        return !1;
      if (!(i & 65536))
        return !0;
      t.reduce(i);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let s = [];
      for (let r = 0, o; r < t.length; r += 2)
        (o = t[r + 1]) != this.state && this.p.parser.hasAction(o, e) && s.push(t[r], o);
      if (this.stack.length < 120)
        for (let r = 0; s.length < 8 && r < t.length; r += 2) {
          let o = t[r + 1];
          s.some((l, a) => a & 1 && l == o) || s.push(t[r], o);
        }
      t = s;
    }
    let i = [];
    for (let s = 0; s < t.length && i.length < 4; s += 2) {
      let r = t[s + 1];
      if (r == this.state)
        continue;
      let o = this.split();
      o.pushState(r, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[s], this.pos), o.reducePos = this.pos, o.score -= 200, i.push(o);
    }
    return i;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if (!(t & 65536))
      return !1;
    if (!e.validAction(this.state, t)) {
      let i = t >> 19, s = t & 65535, r = this.stack.length - i * 3;
      if (r < 0 || e.getGoto(this.stack[r], s, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: e } = this.p, t = [], i = (s, r) => {
      if (!t.includes(s))
        return t.push(s), e.allActions(s, (o) => {
          if (!(o & 393216))
            if (o & 65536) {
              let l = (o >> 19) - r;
              if (l > 1) {
                let a = o & 65535, h = this.stack.length - l * 3;
                if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                  return l << 19 | 65536 | a;
              }
            } else {
              let l = i(o, r + 1);
              if (l != null)
                return l;
            }
        });
    };
    return i(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /**
  @internal
  */
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new ma(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /**
  @internal
  */
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class ma {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class dS {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, i = e >> 19;
    i == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (i - 1) * 3;
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = s;
  }
}
class rs {
  constructor(e, t, i) {
    this.stack = e, this.pos = t, this.index = i, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new rs(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
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
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new rs(this.stack, this.pos, this.index);
  }
}
function yi(n, e = Uint16Array) {
  if (typeof n != "string")
    return n;
  let t = null;
  for (let i = 0, s = 0; i < n.length; ) {
    let r = 0;
    for (; ; ) {
      let o = n.charCodeAt(i++), l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), r += a, l)
        break;
      r *= 46;
    }
    t ? t[s++] = r : t = new e(r);
  }
  return t;
}
class An {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const Sa = new An();
class OS {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Sa, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let i = this.range, s = this.rangeIndex, r = this.pos + e;
    for (; r < i.from; ) {
      if (!s)
        return null;
      let o = this.ranges[--s];
      r -= i.from - o.to, i = o;
    }
    for (; t < 0 ? r > i.to : r >= i.to; ) {
      if (s == this.ranges.length - 1)
        return null;
      let o = this.ranges[++s];
      r += o.from - i.to, i = o;
    }
    return r;
  }
  /**
  @internal
  */
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(e) {
    let t = this.chunkOff + e, i, s;
    if (t >= 0 && t < this.chunk.length)
      i = this.pos + e, s = this.chunk.charCodeAt(t);
    else {
      let r = this.resolveOffset(e, 1);
      if (r == null)
        return -1;
      if (i = r, i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length)
        s = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= i; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i), i + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - i)), s = this.chunk2.charCodeAt(0);
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), s;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let i = t ? this.resolveOffset(t, -1) : this.pos;
    if (i == null || i < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = i;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Sa, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let i = "";
    for (let s of this.ranges) {
      if (s.from >= t)
        break;
      s.to > e && (i += this.input.read(Math.max(s.from, e), Math.min(s.to, t)));
    }
    return i;
  }
}
class Kt {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: i } = t.p;
    Bf(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
}
Kt.prototype.contextual = Kt.prototype.fallback = Kt.prototype.extend = !1;
class Vr {
  constructor(e, t, i) {
    this.precTable = t, this.elseToken = i, this.data = typeof e == "string" ? yi(e) : e;
  }
  token(e, t) {
    let i = e.pos, s = 0;
    for (; ; ) {
      let r = e.next < 0, o = e.resolveOffset(1, 1);
      if (Bf(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (r || s++, o == null)
        break;
      e.reset(o, e.token);
    }
    s && (e.reset(i, e.token), e.acceptToken(this.elseToken, s));
  }
}
Vr.prototype.contextual = Kt.prototype.fallback = Kt.prototype.extend = !1;
class Yo {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function Bf(n, e, t, i, s, r) {
  let o = 0, l = 1 << i, { dialect: a } = t.p.parser;
  e:
    for (; l & n[o]; ) {
      let h = n[o + 1];
      for (let d = o + 3; d < h; d += 2)
        if ((n[d + 1] & l) > 0) {
          let O = n[d];
          if (a.allows(O) && (e.token.value == -1 || e.token.value == O || pS(O, e.token.value, s, r))) {
            e.acceptToken(O);
            break;
          }
        }
      let c = e.next, f = 0, u = n[o + 2];
      if (e.next < 0 && u > f && n[h + u * 3 - 3] == 65535 && n[h + u * 3 - 3] == 65535) {
        o = n[h + u * 3 - 1];
        continue e;
      }
      for (; f < u; ) {
        let d = f + u >> 1, O = h + d + (d << 1), m = n[O], g = n[O + 1] || 65536;
        if (c < m)
          u = d;
        else if (c >= g)
          f = d + 1;
        else {
          o = n[O + 2], e.advance();
          continue e;
        }
      }
      break;
    }
}
function ba(n, e, t) {
  for (let i = e, s; (s = n[i]) != 65535; i++)
    if (s == t)
      return i - e;
  return -1;
}
function pS(n, e, t, i) {
  let s = ba(t, i, e);
  return s < 0 || ba(t, i, n) < s;
}
const Pe = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let Ns = null;
function ya(n, e, t) {
  let i = n.cursor(se.IncludeAnonymous);
  for (i.moveTo(e); ; )
    if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            i.to - 1,
            e - 25
            /* Safety.Margin */
          )) : Math.min(n.length, Math.max(
            i.from + 1,
            e + 25
            /* Safety.Margin */
          ));
        if (t < 0 ? i.prevSibling() : i.nextSibling())
          break;
        if (!i.parent())
          return t < 0 ? 0 : n.length;
      }
}
class gS {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? ya(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? ya(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let i = this.trees[t], s = this.index[t];
      if (s == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = i.children[s], o = this.start[t] + i.positions[s];
      if (o > e)
        return this.nextStart = o, null;
      if (r instanceof K) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(W.lookAhead);
            if (!a || l + a < this.fragment.to)
              return r;
          }
        }
        this.index[t]++, o + r.length >= Math.max(this.safeFrom, e) && (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + r.length;
    }
  }
}
class mS {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((i) => new An());
  }
  getActions(e) {
    let t = 0, i = null, { parser: s } = e.p, { tokenizers: r } = s, o = s.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let h = 0; h < r.length; h++) {
      if (!(1 << h & o))
        continue;
      let c = r[h], f = this.tokens[h];
      if (!(i && !c.fallback) && ((c.contextual || f.start != e.pos || f.mask != o || f.context != l) && (this.updateCachedToken(f, c, e), f.mask = o, f.context = l), f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)), f.value != 0)) {
        let u = t;
        if (f.extended > -1 && (t = this.addActions(e, f.extended, f.end, t)), t = this.addActions(e, f.value, f.end, t), !c.extend && (i = f, t > u))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !i && e.pos == this.stream.end && (i = new An(), i.value = e.p.parser.eofTerm, i.start = i.end = e.pos, t = this.addActions(e, i.value, i.end, t)), this.mainToken = i, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new An(), { pos: i, p: s } = e;
    return t.start = i, t.end = Math.min(i + 1, s.stream.end), t.value = i == s.stream.end ? s.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, i) {
    let s = this.stream.clipPos(i.pos);
    if (t.token(this.stream.reset(s, e), i), e.value > -1) {
      let { parser: r } = i.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == e.value) {
          let l = r.specializers[o](this.stream.read(e.start, e.end), i);
          if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? e.extended = l >> 1 : e.value = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(s + 1);
  }
  putAction(e, t, i, s) {
    for (let r = 0; r < s; r += 3)
      if (this.actions[r] == e)
        return s;
    return this.actions[s++] = e, this.actions[s++] = t, this.actions[s++] = i, s;
  }
  addActions(e, t, i, s) {
    let { state: r } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(
        r,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1)
            h = st(l, h + 2);
          else {
            s == 0 && l[h + 1] == 2 && (s = this.putAction(st(l, h + 2), t, i, s));
            break;
          }
        l[h] == t && (s = this.putAction(st(l, h + 1), t, i, s));
      }
    return s;
  }
}
class SS {
  constructor(e, t, i, s) {
    this.parser = e, this.input = t, this.ranges = s, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new OS(t, s), this.tokens = new mS(e, this.stream), this.topTerm = e.top[1];
    let { from: r } = s[0];
    this.stacks = [ss.start(this, e.top[0], r)], this.fragments = i.length && this.stream.end - r > e.bufferLength * 4 ? new gS(i, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, i = this.stacks = [], s, r;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > t)
          i.push(l);
        else {
          if (this.advanceStack(l, i, e))
            continue;
          {
            s || (s = [], r = []), s.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let o = s && xS(s);
      if (o)
        return Pe && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw Pe && s && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let o = this.stoppedAt != null && s[0].pos > this.stoppedAt ? s[0] : this.runRecovery(s, r, i);
      if (o)
        return Pe && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > o)
        for (i.sort((l, a) => a.score - l.score); i.length > o; )
          i.pop();
      i.some((l) => l.reducePos > t) && this.recovering--;
    } else if (i.length > 1) {
      e:
        for (let o = 0; o < i.length - 1; o++) {
          let l = i[o];
          for (let a = o + 1; a < i.length; a++) {
            let h = i[a];
            if (l.sameState(h) || l.buffer.length > 500 && h.buffer.length > 500)
              if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
                i.splice(a--, 1);
              else {
                i.splice(o--, 1);
                continue e;
              }
          }
        }
      i.length > 12 && i.splice(
        12,
        i.length - 12
        /* Rec.MaxStackCount */
      );
    }
    this.minStackPos = i[0].pos;
    for (let o = 1; o < i.length; o++)
      i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, i) {
    let s = e.pos, { parser: r } = this, o = Pe ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict, c = h ? e.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(s); f; ) {
        let u = this.parser.nodeSet.types[f.type.id] == f.type ? r.getGoto(e.state, f.type.id) : -1;
        if (u > -1 && f.length && (!h || (f.prop(W.contextHash) || 0) == c))
          return e.useNode(f, u), Pe && console.log(o + this.stackID(e) + ` (via reuse of ${r.getName(f.type.id)})`), !0;
        if (!(f instanceof K) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let d = f.children[0];
        if (d instanceof K && f.positions[0] == 0)
          f = d;
        else
          break;
      }
    }
    let l = r.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return e.reduce(l), Pe && console.log(o + this.stackID(e) + ` (via always-reduce ${r.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 9e3)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length; ) {
      let c = a[h++], f = a[h++], u = a[h++], d = h == a.length || !i, O = d ? e : e.split(), m = this.tokens.mainToken;
      if (O.apply(c, f, m ? m.start : O.pos, u), Pe && console.log(o + this.stackID(O) + ` (via ${c & 65536 ? `reduce of ${r.getName(
        c & 65535
        /* Action.ValueMask */
      )}` : "shift"} for ${r.getName(f)} @ ${s}${O == e ? "" : ", split"})`), d)
        return !0;
      O.pos > s ? t.push(O) : i.push(O);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let i = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > i)
        return xa(e, t), !0;
    }
  }
  runRecovery(e, t, i) {
    let s = null, r = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], h = t[(o << 1) + 1], c = Pe ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), Pe && console.log(c + this.stackID(l) + " (restarted)"), this.advanceFully(l, i))))
        continue;
      let f = l.split(), u = c;
      for (let d = 0; f.forceReduce() && d < 10 && (Pe && console.log(u + this.stackID(f) + " (via force-reduce)"), !this.advanceFully(f, i)); d++)
        Pe && (u = this.stackID(f) + " -> ");
      for (let d of l.recoverByInsert(a))
        Pe && console.log(c + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, i);
      this.stream.end > l.pos ? (h == l.pos && (h++, a = 0), l.recoverByDelete(a, h), Pe && console.log(c + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), xa(l, i)) : (!s || s.score < l.score) && (s = l);
    }
    return s;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), K.build({
      buffer: rs.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (Ns || (Ns = /* @__PURE__ */ new WeakMap())).get(e);
    return t || Ns.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function xa(n, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == n.pos && i.sameState(n)) {
      e[t].score < n.score && (e[t] = n);
      return;
    }
  }
  e.push(n);
}
class bS {
  constructor(e, t, i) {
    this.source = e, this.flags = t, this.disabled = i;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const Gs = (n) => n;
class yS {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || Gs, this.reduce = e.reduce || Gs, this.reuse = e.reuse || Gs, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class os extends fc {
  /**
  @internal
  */
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++)
      t.push("");
    let i = Object.keys(e.topRules).map((l) => e.topRules[l][1]), s = [];
    for (let l = 0; l < t.length; l++)
      s.push([]);
    function r(l, a, h) {
      s[l].push([a, a.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = W[a]);
        for (let h = 1; h < l.length; ) {
          let c = l[h++];
          if (c >= 0)
            r(c, a, l[h++]);
          else {
            let f = l[h + -c];
            for (let u = -c; u > 0; u--)
              r(l[h++], a, f);
            h++;
          }
        }
      }
    this.nodeSet = new ho(t.map((l, a) => $e.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: s[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = lc;
    let o = yi(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(wa), this.states = yi(e.states, Uint32Array), this.data = yi(e.stateData), this.goto = yi(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new Kt(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, i) {
    let s = new SS(this, e, t, i);
    for (let r of this.wrappers)
      s = r(s, e, t, i);
    return s;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, i = !1) {
    let s = this.goto;
    if (t >= s[0])
      return -1;
    for (let r = s[t + 1]; ; ) {
      let o = s[r++], l = o & 1, a = s[r++];
      if (l && i)
        return a;
      for (let h = r + (o >> 1); r < h; r++)
        if (s[r] == e)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let i = this.data;
    for (let s = 0; s < 2; s++)
      for (let r = this.stateSlot(
        e,
        s ? 2 : 1
        /* ParseState.Actions */
      ), o; ; r += 3) {
        if ((o = i[r]) == 65535)
          if (i[r + 1] == 1)
            o = i[r = st(i, r + 2)];
          else {
            if (i[r + 1] == 2)
              return st(i, r + 2);
            break;
          }
        if (o == t || o == 0)
          return st(i, r + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /**
  @internal
  */
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /**
  @internal
  */
  validAction(e, t) {
    return !!this.allActions(e, (i) => i == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let i = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), s = i ? t(i) : void 0;
    for (let r = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); s == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = st(this.data, r + 2);
        else
          break;
      s = t(st(this.data, r + 1));
    }
    return s;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let i = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1)
          i = st(this.data, i + 2);
        else
          break;
      if (!(this.data[i + 2] & 1)) {
        let s = this.data[i + 1];
        t.some((r, o) => o & 1 && r == s) || t.push(this.data[i], s);
      }
    }
    return t;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(e) {
    let t = Object.assign(Object.create(os.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let i = this.topRules[e.top];
      if (!i)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = i;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((i) => {
      let s = e.tokenizers.find((r) => r.from == i);
      return s ? s.to : i;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((i, s) => {
      let r = e.specializers.find((l) => l.from == i.external);
      if (!r)
        return i;
      let o = Object.assign(Object.assign({}, i), { external: r.to });
      return t.specializers[s] = wa(o), o;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /**
  @internal
  */
  parseDialect(e) {
    let t = Object.keys(this.dialects), i = t.map(() => !1);
    if (e)
      for (let r of e.split(" ")) {
        let o = t.indexOf(r);
        o >= 0 && (i[o] = !0);
      }
    let s = null;
    for (let r = 0; r < t.length; r++)
      if (!i[r])
        for (let o = this.dialects[t[r]], l; (l = this.data[o++]) != 65535; )
          (s || (s = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new bS(e, i, s);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new os(e);
  }
}
function st(n, e) {
  return n[e] | n[e + 1] << 16;
}
function xS(n) {
  let e = null;
  for (let t of n) {
    let i = t.p.stoppedAt;
    (t.pos == t.p.stream.end || i != null && t.pos > i) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function wa(n) {
  if (n.external) {
    let e = n.extend ? 1 : 0;
    return (t, i) => n.external(t, i) << 1 | e;
  }
  return n.get;
}
const wS = 304, Qa = 1, QS = 2, kS = 305, $S = 307, vS = 308, PS = 3, ZS = 4, CS = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], If = 125, TS = 59, ka = 47, YS = 42, AS = 43, XS = 45, RS = new yS({
  start: !1,
  shift(n, e) {
    return e == PS || e == ZS || e == $S ? n : e == vS;
  },
  strict: !1
}), MS = new Yo((n, e) => {
  let { next: t } = n;
  (t == If || t == -1 || e.context) && n.acceptToken(kS);
}, { contextual: !0, fallback: !0 }), WS = new Yo((n, e) => {
  let { next: t } = n, i;
  CS.indexOf(t) > -1 || t == ka && ((i = n.peek(1)) == ka || i == YS) || t != If && t != TS && t != -1 && !e.context && n.acceptToken(wS);
}, { contextual: !0 }), DS = new Yo((n, e) => {
  let { next: t } = n;
  if ((t == AS || t == XS) && (n.advance(), t == n.next)) {
    n.advance();
    let i = !e.context && e.canShift(Qa);
    n.acceptToken(i ? Qa : QS);
  }
}, { contextual: !0 }), _S = uc({
  "get set async static": p.modifier,
  "for while do if else switch try catch finally return throw break continue default case": p.controlKeyword,
  "in of await yield void typeof delete instanceof": p.operatorKeyword,
  "let var const using function class extends": p.definitionKeyword,
  "import export from": p.moduleKeyword,
  "with debugger as new": p.keyword,
  TemplateString: p.special(p.string),
  super: p.atom,
  BooleanLiteral: p.bool,
  this: p.self,
  null: p.null,
  Star: p.modifier,
  VariableName: p.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": p.function(p.variableName),
  VariableDefinition: p.definition(p.variableName),
  Label: p.labelName,
  PropertyName: p.propertyName,
  PrivatePropertyName: p.special(p.propertyName),
  "CallExpression/MemberExpression/PropertyName": p.function(p.propertyName),
  "FunctionDeclaration/VariableDefinition": p.function(p.definition(p.variableName)),
  "ClassDeclaration/VariableDefinition": p.definition(p.className),
  PropertyDefinition: p.definition(p.propertyName),
  PrivatePropertyDefinition: p.definition(p.special(p.propertyName)),
  UpdateOp: p.updateOperator,
  "LineComment Hashbang": p.lineComment,
  BlockComment: p.blockComment,
  Number: p.number,
  String: p.string,
  Escape: p.escape,
  ArithOp: p.arithmeticOperator,
  LogicOp: p.logicOperator,
  BitOp: p.bitwiseOperator,
  CompareOp: p.compareOperator,
  RegExp: p.regexp,
  Equals: p.definitionOperator,
  Arrow: p.function(p.punctuation),
  ": Spread": p.punctuation,
  "( )": p.paren,
  "[ ]": p.squareBracket,
  "{ }": p.brace,
  "InterpolationStart InterpolationEnd": p.special(p.brace),
  ".": p.derefOperator,
  ", ;": p.separator,
  "@": p.meta,
  TypeName: p.typeName,
  TypeDefinition: p.definition(p.typeName),
  "type enum interface implements namespace module declare": p.definitionKeyword,
  "abstract global Privacy readonly override": p.modifier,
  "is keyof unique infer": p.operatorKeyword,
  JSXAttributeValue: p.attributeValue,
  JSXText: p.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": p.angleBracket,
  "JSXIdentifier JSXNameSpacedName": p.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": p.attributeName,
  "JSXBuiltin/JSXIdentifier": p.standard(p.tagName)
}), ES = { __proto__: null, export: 16, as: 21, from: 29, default: 32, async: 37, function: 38, extends: 48, this: 52, true: 60, false: 60, null: 72, void: 76, typeof: 80, super: 98, new: 132, delete: 148, yield: 157, await: 161, class: 166, public: 223, private: 223, protected: 223, readonly: 225, instanceof: 244, satisfies: 247, in: 248, const: 250, import: 282, keyof: 337, unique: 341, infer: 347, is: 383, abstract: 403, implements: 405, type: 407, let: 410, var: 412, using: 415, interface: 421, enum: 425, namespace: 431, module: 433, declare: 437, global: 441, for: 460, of: 469, while: 472, with: 476, do: 480, if: 484, else: 486, switch: 490, case: 496, try: 502, catch: 506, finally: 510, return: 514, throw: 518, break: 522, continue: 526, debugger: 530 }, US = { __proto__: null, async: 119, get: 121, set: 123, declare: 183, public: 185, private: 185, protected: 185, static: 187, abstract: 189, override: 191, readonly: 197, accessor: 199, new: 387 }, BS = { __proto__: null, "<": 139 }, IS = os.deserialize({
  version: 14,
  states: "$6zO%TQUOOO%[QUOOO'_QWOOP(lOSOOO*zQ(CjO'#CgO+ROpO'#ChO+aO!bO'#ChO+oO07`O'#D[O.QQUO'#DbO.bQUO'#DmO%[QUO'#DwO0fQUO'#EPOOQ(CY'#EX'#EXO1PQSO'#EUOOQO'#Ej'#EjOOQO'#Id'#IdO1XQSO'#GlO1dQSO'#EiO1iQSO'#EiO3kQ(CjO'#JeO6[Q(CjO'#JfO6xQSO'#FXO6}Q#tO'#FpOOQ(CY'#Fa'#FaO7YO&jO'#FaO7hQ,UO'#FwO9OQSO'#FvOOQ(CY'#Jf'#JfOOQ(CW'#Je'#JeO9TQSO'#GpOOQQ'#KQ'#KQO9`QSO'#IQO9eQ(C[O'#IROOQQ'#JR'#JROOQQ'#IV'#IVQ`QUOOO`QUOOO%[QUO'#DoO9mQUO'#D{O9tQUO'#D}O9ZQSO'#GlO9{Q,UO'#CmO:ZQSO'#EhO:fQSO'#EsO:kQ,UO'#F`O;YQSO'#GlOOQO'#KR'#KRO;_QSO'#KRO;mQSO'#GtO;mQSO'#GuO;mQSO'#GwO9ZQSO'#GzO<dQSO'#G}O={QSO'#CcO>]QSO'#HZO>eQSO'#HaO>eQSO'#HcO`QUO'#HeO>eQSO'#HgO>eQSO'#HjO>jQSO'#HpO>oQ(C]O'#HvO%[QUO'#HxO>zQ(C]O'#HzO?VQ(C]O'#H|O9eQ(C[O'#IOO?bQ(CjO'#CgO@dQWO'#DgQOQSOOO%[QUO'#D}O@zQSO'#EQO9{Q,UO'#EhOAVQSO'#EhOAbQ`O'#F`OOQQ'#Ce'#CeOOQ(CW'#Dl'#DlOOQ(CW'#Ji'#JiO%[QUO'#JiOOQO'#Jm'#JmOOQO'#Ia'#IaOBbQWO'#EaOOQ(CW'#E`'#E`OC^Q(C`O'#EaOChQWO'#ETOOQO'#Jl'#JlOC|QWO'#JmOEZQWO'#ETOChQWO'#EaPEhO?MpO'#C`POOO)CDp)CDpOOOO'#IW'#IWOEsOpO,59SOOQ(CY,59S,59SOOOO'#IX'#IXOFRO!bO,59SO%[QUO'#D^OOOO'#IZ'#IZOFaO07`O,59vOOQ(CY,59v,59vOFoQUO'#I[OGSQSO'#JgOIUQbO'#JgO+}QUO'#JgOI]QSO,59|OIsQSO'#EjOJQQSO'#JuOJ]QSO'#JtOJ]QSO'#JtOJeQSO,5;WOJjQSO'#JsOOQ(CY,5:X,5:XOJqQUO,5:XOLrQ(CjO,5:cOMcQSO,5:kOM|Q(C[O'#JrONTQSO'#JqO9TQSO'#JqONiQSO'#JqONqQSO,5;VONvQSO'#JqO!#OQbO'#JfOOQ(CY'#Cg'#CgO%[QUO'#EPO!#nQ`O,5:pOOQO'#Jn'#JnOOQO-E<b-E<bO9ZQSO,5=WO!$UQSO,5=WO!$ZQUO,5;TO!&^Q,UO'#EeO!'qQSO,5;TO!)ZQ,UO'#DqO!)bQUO'#DvO!)lQWO,5;^O!)tQWO,5;^O%[QUO,5;^OOQQ'#FP'#FPOOQQ'#FR'#FRO%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_O%[QUO,5;_OOQQ'#FV'#FVO!*SQUO,5;pOOQ(CY,5;u,5;uOOQ(CY,5;v,5;vO!,VQSO,5;vOOQ(CY,5;w,5;wO%[QUO'#IhO!,_Q(C[O,5<dO!&^Q,UO,5;_O!,|Q,UO,5;_O%[QUO,5;sO!-TQ#tO'#FfO!.QQ#tO'#JyO!-lQ#tO'#JyO!.XQ#tO'#JyOOQO'#Jy'#JyO!.mQ#tO,5<OOOOO,5<[,5<[O!/OQUO'#FrOOOO'#Ig'#IgO7YO&jO,5;{O!/VQ#tO'#FtOOQ(CY,5;{,5;{O!/vQ7[O'#CsOOQ(CY'#Cw'#CwO!0ZQSO'#CwO!0`O07`O'#C{O!0|Q,UO,5<aO!1TQSO,5<cO!2jQMhO'#GRO!2wQSO'#GSO!2|QSO'#GSO!3RQMhO'#GWO!4QQWO'#G[O!4sQ7[O'#J`OOQ(CY'#J`'#J`O!4}QSO'#J_O!5]QSO'#J^O!5eQSO'#CrOOQ(CY'#Cu'#CuOOQ(CY'#DP'#DPOOQ(CY'#DR'#DRO1SQSO'#DTO!'vQ,UO'#FyO!'vQ,UO'#F{O!5mQSO'#F}O!5rQSO'#GOO!2|QSO'#GUO!'vQ,UO'#GZO!5wQSO'#EkO!6fQSO,5<bOOQ(CW'#Cp'#CpO!6nQSO'#ElO!7hQWO'#EmOOQ(CW'#Js'#JsO!7oQ(C[O'#KSO9eQ(C[O,5=[O`QUO,5>lOOQQ'#JZ'#JZOOQQ,5>m,5>mOOQQ-E<T-E<TO!9qQ(CjO,5:ZO!<_Q(CjO,5:gO%[QUO,5:gO!>xQ(CjO,5:iOOQO,5@m,5@mO!?iQ,UO,5=WO!?wQ(C[O'#J[O9OQSO'#J[O!@YQ(C[O,59XO!@eQWO,59XO!@mQ,UO,59XO9{Q,UO,59XO!@xQSO,5;TO!AQQSO'#HYO!AcQSO'#KVO%[QUO,5;xO!7cQWO,5;zO!AkQSO,5=sO!ApQSO,5=sO!AuQSO,5=sO9eQ(C[O,5=sO;mQSO,5=cOOQO'#Cs'#CsO!BTQWO,5=`O!B]Q,UO,5=aO!BhQSO,5=cO!BmQ`O,5=fO!BuQSO'#KRO>jQSO'#HPO9ZQSO'#HRO!BzQSO'#HRO9{Q,UO'#HTO!CPQSO'#HTOOQQ,5=i,5=iO!CUQSO'#HUO!C^QSO'#CmO!CcQSO,58}O!CmQSO,58}O!ErQUO,58}OOQQ,58},58}O!FSQ(C[O,58}O%[QUO,58}O!H_QUO'#H]OOQQ'#H^'#H^OOQQ'#H_'#H_O`QUO,5=uO!HuQSO,5=uO`QUO,5={O`QUO,5=}O!HzQSO,5>PO`QUO,5>RO!IPQSO,5>UO!IUQUO,5>[OOQQ,5>b,5>bO%[QUO,5>bO9eQ(C[O,5>dOOQQ,5>f,5>fO!M`QSO,5>fOOQQ,5>h,5>hO!M`QSO,5>hOOQQ,5>j,5>jO!MeQWO'#DYO%[QUO'#JiO!NSQWO'#JiO!NqQWO'#DhO# SQWO'#DhO##eQUO'#DhO##lQSO'#JhO##tQSO,5:RO##yQSO'#EnO#$XQSO'#JvO#$aQSO,5;XO#$fQWO'#DhO#$sQWO'#ESOOQ(CY,5:l,5:lO%[QUO,5:lO#$zQSO,5:lO>jQSO,5;SO!@eQWO,5;SO!@mQ,UO,5;SO9{Q,UO,5;SO#%SQSO,5@TO#%XQ!LQO,5:pOOQO-E<_-E<_O#&_Q(C`O,5:{OChQWO,5:oO#&iQWO,5:oOChQWO,5:{O!@YQ(C[O,5:oOOQ(CW'#Ed'#EdOOQO,5:{,5:{O%[QUO,5:{O#&vQ(C[O,5:{O#'RQ(C[O,5:{O!@eQWO,5:oOOQO,5;R,5;RO#'aQ(C[O,5:{POOO'#IU'#IUP#'uO?MpO,58zPOOO,58z,58zOOOO-E<U-E<UOOQ(CY1G.n1G.nOOOO-E<V-E<VO#(QQ`O,59xOOOO-E<X-E<XOOQ(CY1G/b1G/bO#(VQbO,5>vO+}QUO,5>vOOQO,5>|,5>|O#(aQUO'#I[OOQO-E<Y-E<YO#(nQSO,5@RO#(vQbO,5@RO#(}QSO,5@`OOQ(CY1G/h1G/hO%[QUO,5@aO#)VQSO'#IbOOQO-E<`-E<`O#(}QSO,5@`OOQ(CW1G0r1G0rOOQ(CY1G/s1G/sOOQ(CY1G0V1G0VO%[QUO,5@^O#)kQ(C[O,5@^O#)|Q(C[O,5@^O#*TQSO,5@]O9TQSO,5@]O#*]QSO,5@]O#*kQSO'#IeO#*TQSO,5@]OOQ(CW1G0q1G0qO!)lQWO,5:rO!)wQWO,5:rOOQO,5:t,5:tO#+]QSO,5:tO#+eQ,UO1G2rO9ZQSO1G2rOOQ(CY1G0o1G0oO#+sQ(CjO1G0oO#,xQ(ChO,5;POOQ(CY'#GQ'#GQO#-fQ(CjO'#J`O!$ZQUO1G0oO#/nQ,UO'#JjO#/xQSO,5:]O#/}QbO'#JkO%[QUO'#JkO#0XQSO,5:bOOQ(CY'#DY'#DYOOQ(CY1G0x1G0xO%[QUO1G0xOOQ(CY1G1b1G1bO#0^QSO1G0xO#2uQ(CjO1G0yO#2|Q(CjO1G0yO#5gQ(CjO1G0yO#5nQ(CjO1G0yO#7xQ(CjO1G0yO#8`Q(CjO1G0yO#;YQ(CjO1G0yO#;aQ(CjO1G0yO#=zQ(CjO1G0yO#>RQ(CjO1G0yO#?yQ(CjO1G0yO#ByQ$IUO'#CgO#DwQ$IUO1G1[O#EOQ$IUO'#JfO!,YQSO1G1bO#E`Q(CjO,5?SOOQ(CW-E<f-E<fO#FSQ(CjO1G0yOOQ(CY1G0y1G0yO#H_Q(CjO1G1_O#IRQ#tO,5<SO#IZQ#tO,5<TO#IcQ#tO'#FkO#IzQSO'#FjOOQO'#Jz'#JzOOQO'#If'#IfO#JPQ#tO1G1jOOQ(CY1G1j1G1jOOOO1G1u1G1uO#JbQ$IUO'#JeO#JlQSO,5<^O!*SQUO,5<^OOOO-E<e-E<eOOQ(CY1G1g1G1gO#JqQWO'#JyOOQ(CY,5<`,5<`O#JyQWO,5<`OOQ(CY,59c,59cO!&^Q,UO'#C}OOOO'#IY'#IYO#KOO07`O,59gOOQ(CY,59g,59gO%[QUO1G1{O!5rQSO'#IjO#KZQ,UO,5<tOOQ(CY,5<q,5<qOOQO'#Gg'#GgO!'vQ,UO,5=QOOQO'#Gi'#GiO!'vQ,UO,5=SO!&^Q,UO,5=UOOQO1G1}1G1}O#KbQ`O'#CpO#KuQ`O,5<mO#K|QSO'#J}O9ZQSO'#J}O#L[QSO,5<oO!'vQ,UO,5<nO#LaQSO'#GTO#LlQSO,5<nO#LqQ`O'#GQO#MOQ`O'#KOO#MYQSO'#KOO!&^Q,UO'#KOO#M_QSO,5<rO#MdQWO'#G]O!3{QWO'#G]O#MuQSO'#G_O#MzQSO'#GaO!2|QSO'#GdO#NPQ(C[O'#IlO#N[QWO,5<vOOQ(CY,5<v,5<vO#NcQWO'#G]O#NqQWO'#G^O#NyQWO'#G^OOQ(CY,5=V,5=VO!'vQ,UO,5?yO!'vQ,UO,5?yO$ OQSO'#ImO$ ZQSO,5?xO$ cQSO,59^O$!SQ,UO,59oOOQ(CY,59o,59oO$!uQ,UO,5<eO$#hQ,UO,5<gO@[QSO,5<iOOQ(CY,5<j,5<jO$#rQSO,5<pO$#wQ,UO,5<uO$$XQSO'#JqO!$ZQUO1G1|O$$^QSO1G1|O9TQSO'#JtO9TQSO'#EnO%[QUO'#EnO9TQSO'#IoO$$cQ(C[O,5@nOOQQ1G2v1G2vOOQQ1G4W1G4WOOQ(CY1G/u1G/uO!,VQSO1G/uO$&hQ(CjO1G0ROOQQ1G2r1G2rO!&^Q,UO1G2rO%[QUO1G2rO$'XQSO1G2rO$'dQ,UO'#EeOOQ(CW,5?v,5?vO$'nQ(C[O,5?vOOQQ1G.s1G.sO!@YQ(C[O1G.sO!@eQWO1G.sO!@mQ,UO1G.sO$(PQSO1G0oO$(UQSO'#CgO$(aQSO'#KWO$(iQSO,5=tO$(nQSO'#KWO$(sQSO'#KWO$)OQSO'#IuO$)^QSO,5@qO$)fQbO1G1dOOQ(CY1G1f1G1fO9ZQSO1G3_O@[QSO1G3_O$)mQSO1G3_O$)rQSO1G3_OOQQ1G3_1G3_O!BhQSO1G2}O!&^Q,UO1G2zO$)wQSO1G2zOOQQ1G2{1G2{O!&^Q,UO1G2{O$)|QSO1G2{O$*UQWO'#GyOOQQ1G2}1G2}O!3{QWO'#IqO!BmQ`O1G3QOOQQ1G3Q1G3QOOQQ,5=k,5=kO$*^Q,UO,5=mO9ZQSO,5=mO#MzQSO,5=oO9OQSO,5=oO!@eQWO,5=oO!@mQ,UO,5=oO9{Q,UO,5=oO$*lQSO'#KUO$*wQSO,5=pOOQQ1G.i1G.iO$*|Q(C[O1G.iO@[QSO1G.iO$+XQSO1G.iO9eQ(C[O1G.iO$-^QbO,5@sO$-nQSO,5@sO9TQSO,5@sO$-yQUO,5=wO$.QQSO,5=wOOQQ1G3a1G3aO`QUO1G3aOOQQ1G3g1G3gOOQQ1G3i1G3iO>eQSO1G3kO$.VQUO1G3mO$2ZQUO'#HlOOQQ1G3p1G3pO$2hQSO'#HrO>jQSO'#HtOOQQ1G3v1G3vO$2pQUO1G3vO9eQ(C[O1G3|OOQQ1G4O1G4OOOQ(CW'#GX'#GXO9eQ(C[O1G4QO9eQ(C[O1G4SO$6wQSO,5@TO!*SQUO,5;YO9TQSO,5;YO>jQSO,5:SO!*SQUO,5:SO!@eQWO,5:SO$6|Q$IUO,5:SOOQO,5;Y,5;YO$7WQWO'#I]O$7nQSO,5@SOOQ(CY1G/m1G/mO$7vQWO'#IcO$8QQSO,5@bOOQ(CW1G0s1G0sO# SQWO,5:SOOQO'#I`'#I`O$8YQWO,5:nOOQ(CY,5:n,5:nO#$}QSO1G0WOOQ(CY1G0W1G0WO%[QUO1G0WOOQ(CY1G0n1G0nO>jQSO1G0nO!@eQWO1G0nO!@mQ,UO1G0nOOQ(CW1G5o1G5oO!@YQ(C[O1G0ZOOQO1G0g1G0gO%[QUO1G0gO$8aQ(C[O1G0gO$8lQ(C[O1G0gO!@eQWO1G0ZOChQWO1G0ZO$8zQ(C[O1G0gOOQO1G0Z1G0ZO$9`Q(CjO1G0gPOOO-E<S-E<SPOOO1G.f1G.fOOOO1G/d1G/dO$9jQ`O,5<dO$9rQbO1G4bOOQO1G4h1G4hO%[QUO,5>vO$9|QSO1G5mO$:UQSO1G5zO$:^QbO1G5{O9TQSO,5>|O$:hQ(CjO1G5xO%[QUO1G5xO$:xQ(C[O1G5xO$;ZQSO1G5wO$;ZQSO1G5wO9TQSO1G5wO$;cQSO,5?PO9TQSO,5?POOQO,5?P,5?PO$;wQSO,5?PO$$XQSO,5?POOQO-E<c-E<cOOQO1G0^1G0^OOQO1G0`1G0`O!,YQSO1G0`OOQQ7+(^7+(^O!&^Q,UO7+(^O%[QUO7+(^O$<VQSO7+(^O$<bQ,UO7+(^O$<pQ(CjO,59oO$>xQ(CjO,5<eO$ATQ(CjO,5<gO$C`Q(CjO,5<uOOQ(CY7+&Z7+&ZO$EqQ(CjO7+&ZO$FeQ,UO'#I^O$FoQSO,5@UOOQ(CY1G/w1G/wO$FwQUO'#I_O$GUQSO,5@VO$G^QbO,5@VOOQ(CY1G/|1G/|O$GhQSO7+&dOOQ(CY7+&d7+&dO$GmQ$IUO,5:cO%[QUO7+&vO$GwQ$IUO,5:ZO$HUQ$IUO,5:gO$H`Q$IUO,5:iOOQ(CY7+&|7+&|OOQO1G1n1G1nOOQO1G1o1G1oO$HjQ#tO,5<VO!*SQUO,5<UOOQO-E<d-E<dOOQ(CY7+'U7+'UOOOO7+'a7+'aOOOO1G1x1G1xO$HuQSO1G1xOOQ(CY1G1z1G1zO$HzQ`O,59iOOOO-E<W-E<WOOQ(CY1G/R1G/RO$IRQ(CjO7+'gOOQ(CY,5?U,5?UO$IuQ`O,5?UOOQ(CY1G2`1G2`P!&^Q,UO'#IjPOQ(CY-E<h-E<hO$JeQ,UO1G2lO$KWQ,UO1G2nO$KbQ`O1G2pOOQ(CY1G2X1G2XO$KiQSO'#IiO$KwQSO,5@iO$KwQSO,5@iO$LPQSO,5@iO$L[QSO,5@iOOQO1G2Z1G2ZO$LjQ,UO1G2YO!'vQ,UO1G2YO$LzQMhO'#IkO$M[QSO,5@jO!&^Q,UO,5@jO$MdQ`O,5@jOOQ(CY1G2^1G2^OOQ(CW,5<w,5<wOOQ(CW,5<x,5<xO$$XQSO,5<xOCXQSO,5<xO!@eQWO,5<wOOQO'#G`'#G`O$MnQSO,5<yOOQ(CW,5<{,5<{O$$XQSO,5=OOOQO,5?W,5?WOOQO-E<j-E<jOOQ(CY1G2b1G2bO!3{QWO,5<wO$MvQSO,5<xO#MuQSO,5<yO!3{QWO,5<xO$NRQ,UO1G5eO$N]Q,UO1G5eOOQO,5?X,5?XOOQO-E<k-E<kOOQO1G.x1G.xO!7cQWO,59qO%[QUO,59qO$NjQSO1G2TO!'vQ,UO1G2[O$NoQ(CjO7+'hOOQ(CY7+'h7+'hO!$ZQUO7+'hO% cQSO,5;YOOQ(CW,5?Z,5?ZOOQ(CW-E<m-E<mOOQ(CY7+%a7+%aO% hQ`O'#KPO#$}QSO7+(^O% rQbO7+(^O$<YQSO7+(^O% yQ(ChO'#CgO%!^Q(ChO,5<|O%#OQSO,5<|OOQ(CW1G5b1G5bOOQQ7+$_7+$_O!@YQ(C[O7+$_O!@eQWO7+$_O!$ZQUO7+&ZO%#TQSO'#ItO%#iQSO,5@rOOQO1G3`1G3`O9ZQSO,5@rO%#iQSO,5@rO%#qQSO,5@rOOQO,5?a,5?aOOQO-E<s-E<sOOQ(CY7+'O7+'OO%#vQSO7+(yO9eQ(C[O7+(yO9ZQSO7+(yO@[QSO7+(yOOQQ7+(i7+(iO%#{Q(ChO7+(fO!&^Q,UO7+(fO%$VQ`O7+(gOOQQ7+(g7+(gO!&^Q,UO7+(gO%$^QSO'#KTO%$iQSO,5=eOOQO,5?],5?]OOQO-E<o-E<oOOQQ7+(l7+(lO%%xQWO'#HSOOQQ1G3X1G3XO!&^Q,UO1G3XO%[QUO1G3XO%&PQSO1G3XO%&[Q,UO1G3XO9eQ(C[O1G3ZO#MzQSO1G3ZO9OQSO1G3ZO!@eQWO1G3ZO!@mQ,UO1G3ZO%&jQSO'#IsO%&uQSO,5@pO%&}QWO,5@pOOQ(CW1G3[1G3[OOQQ7+$T7+$TO@[QSO7+$TO9eQ(C[O7+$TO%'YQSO7+$TO%[QUO1G6_O%[QUO1G6`O%'_Q(C[O1G6_O%'iQUO1G3cO%'pQSO1G3cO%'uQUO1G3cOOQQ7+({7+({O9eQ(C[O7+)VO`QUO7+)XOOQQ'#KZ'#KZOOQQ'#Iv'#IvO%'|QUO,5>WOOQQ,5>W,5>WO%[QUO'#HmO%(ZQSO'#HoOOQQ,5>^,5>^O9TQSO,5>^OOQQ,5>`,5>`OOQQ7+)b7+)bOOQQ7+)h7+)hOOQQ7+)l7+)lOOQQ7+)n7+)nO%(`QWO1G5oO%(tQ$IUO1G0tO%)OQSO1G0tOOQO1G/n1G/nO%)ZQ$IUO1G/nO>jQSO1G/nO!*SQUO'#DhOOQO,5>w,5>wOOQO-E<Z-E<ZOOQO,5>},5>}OOQO-E<a-E<aO!@eQWO1G/nOOQO-E<^-E<^OOQ(CY1G0Y1G0YOOQ(CY7+%r7+%rO#$}QSO7+%rOOQ(CY7+&Y7+&YO>jQSO7+&YO!@eQWO7+&YOOQO7+%u7+%uO$9`Q(CjO7+&ROOQO7+&R7+&RO%[QUO7+&RO%)eQ(C[O7+&RO!@YQ(C[O7+%uO!@eQWO7+%uO%)pQ(C[O7+&RO%*OQ(CjO7++dO%[QUO7++dO%*`QSO7++cO%*`QSO7++cOOQO1G4k1G4kO9TQSO1G4kO%*hQSO1G4kOOQO7+%z7+%zO#$}QSO<<KxO% rQbO<<KxO%*vQSO<<KxOOQQ<<Kx<<KxO!&^Q,UO<<KxO%[QUO<<KxO%+OQSO<<KxO%+ZQ(CjO1G2lO%-fQ(CjO1G2nO%/qQ(CjO1G2YO%2SQ,UO,5>xOOQO-E<[-E<[O%2^QbO,5>yO%[QUO,5>yOOQO-E<]-E<]O%2hQSO1G5qOOQ(CY<<JO<<JOO%2pQ$IUO1G0oO%4zQ$IUO1G0yO%5RQ$IUO1G0yO%7VQ$IUO1G0yO%7^Q$IUO1G0yO%9RQ$IUO1G0yO%9iQ$IUO1G0yO%;|Q$IUO1G0yO%<TQ$IUO1G0yO%>XQ$IUO1G0yO%>`Q$IUO1G0yO%@WQ$IUO1G0yO%@kQ(CjO<<JbO%ApQ$IUO1G0yO%CfQ$IUO'#J`O%EiQ$IUO1G1_O%EvQ$IUO1G0RO!*SQUO'#FmOOQO'#J{'#J{OOQO1G1q1G1qO%FQQSO1G1pO%FVQ$IUO,5?SOOOO7+'d7+'dOOOO1G/T1G/TOOQ(CY1G4p1G4pO!'vQ,UO7+([O%FaQSO,5?TO9ZQSO,5?TOOQO-E<g-E<gO%FoQSO1G6TO%FoQSO1G6TO%FwQSO1G6TO%GSQ,UO7+'tO%GdQ`O,5?VO%GnQSO,5?VO!&^Q,UO,5?VOOQO-E<i-E<iO%GsQ`O1G6UO%G}QSO1G6UOOQ(CW1G2d1G2dO$$XQSO1G2dOOQ(CW1G2c1G2cO%HVQSO1G2eO!&^Q,UO1G2eOOQ(CW1G2j1G2jO!@eQWO1G2cOCXQSO1G2dO%H[QSO1G2eO%HdQSO1G2dO!'vQ,UO7++POOQ(CY1G/]1G/]O%HoQSO1G/]OOQ(CY7+'o7+'oO%HtQ,UO7+'vO%IUQ(CjO<<KSOOQ(CY<<KS<<KSO%IxQSO1G0tO!&^Q,UO'#InO%I}QSO,5@kO!&^Q,UO1G2hOOQQ<<Gy<<GyO!@YQ(C[O<<GyO%JVQ(CjO<<IuOOQ(CY<<Iu<<IuOOQO,5?`,5?`O%JyQSO,5?`O$(sQSO,5?`OOQO-E<r-E<rO%KOQSO1G6^O%KOQSO1G6^O9ZQSO1G6^O@[QSO<<LeOOQQ<<Le<<LeO%KWQSO<<LeO9eQ(C[O<<LeOOQQ<<LQ<<LQO%#{Q(ChO<<LQOOQQ<<LR<<LRO%$VQ`O<<LRO%K]QWO'#IpO%KhQSO,5@oO!*SQUO,5@oOOQQ1G3P1G3PO%KpQUO'#JiOOQO'#Ir'#IrO9eQ(C[O'#IrO%KzQWO,5=nOOQQ,5=n,5=nO%LRQWO'#EaO%LgQSO7+(sO%LlQSO7+(sOOQQ7+(s7+(sO!&^Q,UO7+(sO%[QUO7+(sO%LtQSO7+(sOOQQ7+(u7+(uO9eQ(C[O7+(uO#MzQSO7+(uO9OQSO7+(uO!@eQWO7+(uO%MPQSO,5?_OOQO-E<q-E<qOOQO'#HV'#HVO%M[QSO1G6[O9eQ(C[O<<GoOOQQ<<Go<<GoO@[QSO<<GoO%MdQSO7++yO%MiQSO7++zO%[QUO7++yO%[QUO7++zOOQQ7+(}7+(}O%MnQSO7+(}O%MsQUO7+(}O%MzQSO7+(}OOQQ<<Lq<<LqOOQQ<<Ls<<LsOOQQ-E<t-E<tOOQQ1G3r1G3rO%NPQSO,5>XOOQQ,5>Z,5>ZO%NUQSO1G3xO9TQSO7+&`O!*SQUO7+&`OOQO7+%Y7+%YO%NZQ$IUO1G5{O>jQSO7+%YOOQ(CY<<I^<<I^OOQ(CY<<It<<ItO>jQSO<<ItOOQO<<Im<<ImO$9`Q(CjO<<ImO%[QUO<<ImOOQO<<Ia<<IaO!@YQ(C[O<<IaO%NeQ(C[O<<ImO%NpQ(CjO<= OO& QQSO<<N}OOQO7+*V7+*VO9TQSO7+*VOOQQANAdANAdO& YQSOANAdO!&^Q,UOANAdO#$}QSOANAdO% rQbOANAdO%[QUOANAdO& bQ(CjO7+'tO&#sQ(CjO7+'vO&&UQbO1G4eO&&`Q$IUO7+&ZO&&mQ$IUO,59oO&(pQ$IUO,5<eO&*sQ$IUO,5<gO&,vQ$IUO,5<uO&.lQ$IUO7+'gO&.yQ$IUO7+'hO&/WQSO,5<XOOQO7+'[7+'[O&/]Q,UO<<KvOOQO1G4o1G4oO&/dQSO1G4oO&/oQSO1G4oO&/}QSO7++oO&/}QSO7++oO!&^Q,UO1G4qO&0VQ`O1G4qO&0aQSO7++pOOQ(CW7+(O7+(OO$$XQSO7+(PO&0iQ`O7+(POOQ(CW7+'}7+'}O$$XQSO7+(OO&0pQSO7+(PO!&^Q,UO7+(POCXQSO7+(OO&0uQ,UO<<NkOOQ(CY7+$w7+$wO&1PQ`O,5?YOOQO-E<l-E<lO&1ZQ(ChO7+(SOOQQAN=eAN=eO9ZQSO1G4zOOQO1G4z1G4zO&1kQSO1G4zO&1pQSO7++xO&1pQSO7++xO9eQ(C[OANBPO@[QSOANBPOOQQANBPANBPOOQQANAlANAlOOQQANAmANAmO&1xQSO,5?[OOQO-E<n-E<nO&2TQ$IUO1G6ZO&4eQbO'#CgOOQO,5?^,5?^OOQO-E<p-E<pOOQQ1G3Y1G3YO%KpQUO,5<yOOQQ<<L_<<L_O!&^Q,UO<<L_O%LgQSO<<L_O&4oQSO<<L_O%[QUO<<L_OOQQ<<La<<LaO9eQ(C[O<<LaO#MzQSO<<LaO9OQSO<<LaO&4wQWO1G4yO&5SQSO7++vOOQQAN=ZAN=ZO9eQ(C[OAN=ZOOQQ<= e<= eOOQQ<= f<= fO&5[QSO<= eO&5aQSO<= fOOQQ<<Li<<LiO&5fQSO<<LiO&5kQUO<<LiOOQQ1G3s1G3sO>jQSO7+)dO&5rQSO<<IzO&5}Q$IUO<<IzOOQO<<Ht<<HtOOQ(CYAN?`AN?`OOQOAN?XAN?XO$9`Q(CjOAN?XOOQOAN>{AN>{O%[QUOAN?XOOQO<<Mq<<MqOOQQG27OG27OO!&^Q,UOG27OO#$}QSOG27OO&6XQSOG27OO% rQbOG27OO&6aQ$IUO<<JbO&6nQ$IUO1G2YO&8dQ$IUO1G2lO&:gQ$IUO1G2nO&<jQ$IUO<<KSO&<wQ$IUO<<IuOOQO1G1s1G1sO!'vQ,UOANAbOOQO7+*Z7+*ZO&=UQSO7+*ZO&=aQSO<= ZO&=iQ`O7+*]OOQ(CW<<Kk<<KkO$$XQSO<<KkOOQ(CW<<Kj<<KjO&=sQ`O<<KkO$$XQSO<<KjOOQO7+*f7+*fO9ZQSO7+*fO&=zQSO<= dOOQQG27kG27kO9eQ(C[OG27kO!*SQUO1G4vO&>SQSO7++uO%LgQSOANAyOOQQANAyANAyO!&^Q,UOANAyO&>[QSOANAyOOQQANA{ANA{O9eQ(C[OANA{O#MzQSOANA{OOQO'#HW'#HWOOQO7+*e7+*eOOQQG22uG22uOOQQANEPANEPOOQQANEQANEQOOQQANBTANBTO&>dQSOANBTOOQQ<<MO<<MOO!*SQUOAN?fOOQOG24sG24sO$9`Q(CjOG24sO#$}QSOLD,jOOQQLD,jLD,jO!&^Q,UOLD,jO&>iQSOLD,jO&>qQ$IUO7+'tO&@gQ$IUO7+'vO&B]Q,UOG26|OOQO<<Mu<<MuOOQ(CWANAVANAVO$$XQSOANAVOOQ(CWANAUANAUOOQO<<NQ<<NQOOQQLD-VLD-VO&BmQ$IUO7+*bOOQQG27eG27eO%LgQSOG27eO!&^Q,UOG27eOOQQG27gG27gO9eQ(C[OG27gOOQQG27oG27oO&BwQ$IUOG25QOOQOLD*_LD*_OOQQ!$(!U!$(!UO#$}QSO!$(!UO!&^Q,UO!$(!UO&CRQ(CjOG26|OOQ(CWG26qG26qOOQQLD-PLD-PO%LgQSOLD-POOQQLD-RLD-ROOQQ!)9Ep!)9EpO#$}QSO!)9EpOOQQ!$(!k!$(!kOOQQ!.K;[!.K;[O&EdQ$IUOG26|O!*SQUO'#DwO1PQSO'#EUO&GYQbO'#JeO!*SQUO'#DoO&GaQUO'#D{O&GhQbO'#CgO&JOQbO'#CgO!*SQUO'#D}O&J`QUO,5;TO!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO,5;_O!*SQUO'#IhO&LcQSO,5<dO&LkQ,UO,5;_O&NOQ,UO,5;_O!*SQUO,5;sO1SQSO'#DTO1SQSO'#DTO!&^Q,UO'#FyO&LkQ,UO'#FyO!&^Q,UO'#F{O&LkQ,UO'#F{O!&^Q,UO'#GZO&LkQ,UO'#GZO!*SQUO,5:gO!*SQUO,5@aO&J`QUO1G0oO&NVQ$IUO'#CgO!*SQUO1G1{O!&^Q,UO,5=QO&LkQ,UO,5=QO!&^Q,UO,5=SO&LkQ,UO,5=SO!&^Q,UO,5<nO&LkQ,UO,5<nO&J`QUO1G1|O!*SQUO7+&vO!&^Q,UO1G2YO&LkQ,UO1G2YO!&^Q,UO1G2[O&LkQ,UO1G2[O&J`QUO7+'hO&J`QUO7+&ZO!&^Q,UOANAbO&LkQ,UOANAbO&NaQSO'#EiO&NfQSO'#EiO&NnQSO'#FXO&NsQSO'#EsO&NxQSO'#JuO' TQSO'#JsO' `QSO,5;TO' eQ,UO,5<aO' lQSO'#GSO' qQSO'#GSO' vQSO,5<bO'!OQSO,5;TO'!WQ$IUO1G1[O'!_QSO,5<nO'!dQSO,5<nO'!iQSO,5<pO'!nQSO,5<pO'!sQSO1G1|O'!xQSO1G0oO'!}Q,UO<<KvO'#UQ,UO<<KvO7hQ,UO'#FwO9OQSO'#FvOAVQSO'#EhO!*SQUO,5;pO!2|QSO'#GSO!2|QSO'#GSO!2|QSO'#GUO!2|QSO'#GUO!'vQ,UO7+([O!'vQ,UO7+([O$KbQ`O1G2pO$KbQ`O1G2pO!&^Q,UO,5=UO!&^Q,UO,5=U",
  stateData: "'$_~O'oOS'pOSROS'qRQ~OPYOQYOW!VO_qObzOcyOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!YXO!duO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#q!PO$R|O$VfO%a}O%c!QO%e!OO%f!OO%g!OO%j!RO%l!SO%o!TO%p!TO%r!UO&O!WO&U!XO&W!YO&Y!ZO&[![O&_!]O&e!^O&k!_O&m!`O&o!aO&q!bO&s!cO'vSO'xTO'{UO(TVO(c[O(piO~OUtO~P`OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'v!dO'xTO'{UO(TVO(c[O(piO~O_!vOm!nO}!oO!]!xO!^!uO!_!uO!y9rO!}!pO#O!pO#P!wO#Q!pO#R!pO#U!yO#V!yO'w!lO'xTO'{UO(W!mO(c!sO~O'q!zO~OPZXYZX_ZXlZXzZX{ZX}ZX!WZX!fZX!gZX!iZX!mZX#YZX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX'mZX(TZX(dZX(kZX(lZX~O!b${X~P(qO]!|O'x#OO'y!|O'z#OO~O]#PO'z#OO'{#OO'|#PO~Or#RO!P#SO(U#SO(V#UO~OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'v9vO'xTO'{UO(TVO(c[O(piO~O!V#YO!W#VO!T(ZP!T(hP~P+}O!X#bO~P`OPYOQYOb!jOc!iOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'xTO'{UO(TVO(c[O(piO~Oj#lO!V#hO!y]O#c#kO#d#hO'v9wO!h(eP~P.iO!i#nO'v#mO~O!u#rO!y]O%a#sO~O#e#tO~O!b#uO#e#tO~OP$]OY$dOl$QOz#yO{#zO}#{O!W$aO!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO#w$YO(TVO(d$ZO(k#|O(l#}O~O_(XX'm(XX'k(XX!h(XX!T(XX!Y(XX%b(XX!b(XX~P1qO#Y$eO#|$eOP(YXY(YXl(YXz(YX{(YX}(YX!W(YX!f(YX!i(YX!m(YX#h(YX#i(YX#j(YX#k(YX#l(YX#m(YX#n(YX#o(YX#p(YX#r(YX#t(YX#v(YX#w(YX(T(YX(d(YX(k(YX(l(YX!Y(YX%b(YX~O_(YX!g(YX'm(YX'k(YX!T(YX!h(YXp(YX!b(YX~P4XO#Y$eO~O$X$gO$Z$fO$b$lO~O!Y$mO$VfO$e$nO$g$pO~Oj%SOl$tOm$sOn$sOt%TOv%UOx%VO}${O!Y$|O!d%[O!i$xO#d%]O$R%YO$n%WO$p%XO$s%ZO'v$rO'xTO'{UO(P%RO(T$uOe(QP~O!i%^O~O}%aO!Y%bO'v%`O~O!b%fO~O_%gO'm%gO~O'w!lO~P%[O%g%nO~P%[O!i%^O'v%`O'w!lO(P%RO~Oc%uO!i%^O'v%`O~O#p$SO~Oz%zO!Y%wO!i%yO%c%}O'v%`O'w!lO'xTO'{UO^(yP~O!u#rO~O%l&PO}(uX!Y(uX'v(uX~O'v&QO~O!r&VO#q!PO%c!QO%e!OO%f!OO%g!OO%j!RO%l!SO%o!TO%p!TO~Ob&[Oc&ZO!u&XO%a&YO%t&WO~P;rOb&_OcyO!Y&^O!r&VO!uxO!y]O#q!PO%a}O%e!OO%f!OO%g!OO%j!RO%l!SO%o!TO%p!TO%r!UO~O`&bO#Y&eO%c&`O'w!lO~P<wO!i&fO!r&jO~O!i#nO~O!YXO~O_%gO'l&rO'm%gO~O_%gO'l&uO'm%gO~O_%gO'l&wO'm%gO~O'kZX!TZXpZX!hZX&SZX!YZX%bZX!bZX~P(qO!]'UO!^&}O!_&}O'w!lO'xTO'{UO~Om&{O}&zO!V'OO(W&yO!X([P!X(jP~P@OOh'XO!Y'VO'v%`O~Oc'^O!i%^O'v%`O~Oz%zO!i%yO~Om!nO}!oO!y9rO!}!pO#O!pO#Q!pO#R!pO'w!lO'xTO'{UO(W!mO(c!sO~O!]'dO!^'cO!_'cO#P!pO#U'eO#V'eO~PAjO_%gO!b#uO!i%^O'm%gO(P%RO(d'gO~O!m'kO#Y'iO~PBxOm!nO}!oO'xTO'{UO(W!mO(c!sO~O!YXOm(aX}(aX!](aX!^(aX!_(aX!y(aX!}(aX#O(aX#P(aX#Q(aX#R(aX#U(aX#V(aX'w(aX'x(aX'{(aX(W(aX(c(aX~O!^'cO!_'cO'w!lO~PChO'r'oO's'oO't'qO~O]!|O'x'sO'y!|O'z'sO~O]#PO'z'sO'{'sO'|#PO~Or#RO!P#SO(U#SO(V'wO~O!V'yO!T'OX!T'UX!W'OX!W'UX~P+}O!W'{O!T(ZX~OP$]OY$dOl$QOz#yO{#zO}#{O!W'{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO#w$YO(TVO(d$ZO(k#|O(l#}O~O!T(ZX~PG[O!T(QO~O!T(gX!W(gX!b(gX!h(gX(d(gX~O#Y(gX#e#^X!X(gX~PIbO#Y(RO!T(iX!W(iX~O!W(SO!T(hX~O!T(VO~O#Y$eO~PIbO!X(WO~P`Oz#yO{#zO}#{O!g#wO!i#xO(TVOP!kaY!kal!ka!W!ka!f!ka!m!ka#h!ka#i!ka#j!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#r!ka#t!ka#v!ka#w!ka(d!ka(k!ka(l!ka~O_!ka'm!ka'k!ka!T!ka!h!kap!ka!Y!ka%b!ka!b!ka~PJxO!h(XO~O!b#uO#Y(YO(d'gO!W(fX_(fX'm(fX~O!h(fX~PMhO}%aO!Y%bO!y]O#c(_O#d(^O'v%`O~O!W(`O!h(eX~O!h(bO~O}%aO!Y%bO#d(^O'v%`O~OP(YXY(YXl(YXz(YX{(YX}(YX!W(YX!f(YX!g(YX!i(YX!m(YX#h(YX#i(YX#j(YX#k(YX#l(YX#m(YX#n(YX#o(YX#p(YX#r(YX#t(YX#v(YX#w(YX(T(YX(d(YX(k(YX(l(YX~O!b#uO!h(YX~P! UOz(cO{(dO!g#wO!i#xO!y!xa}!xa~O!u!xa%a!xa!Y!xa#c!xa#d!xa'v!xa~P!#YO!u(hO~OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!YXO!duO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$R!kO$VfO'v!dO'xTO'{UO(TVO(c[O(piO~Oj%SOl$tOm$sOn$sOt%TOv%UOx:[O}${O!Y$|O!d;fO!i$xO#d:bO$R%YO$n:^O$p:`O$s%ZO'v(lO'xTO'{UO(P%RO(T$uO~O#e(nO~Oj%SOl$tOm$sOn$sOt%TOv%UOx%VO}${O!Y$|O!d%[O!i$xO#d%]O$R%YO$n%WO$p%XO$s%ZO'v(lO'xTO'{UO(P%RO(T$uO~Oe(^P~P!'vO!V(rO!h(_P~P%[O(W(tO(c[O~O}(vO!i#xO(W(tO(c[O~OP9qOQ9qOb;bOc!iOjkOl9qOmkOnkOtkOv9qOx9qO}WO!RkO!SkO!Y!eO!d9tO!iZO!l9qO!m9qO!n9qO!p9uO!r9xO!u!hO$R!kO$VfO'v)UO'xTO'{UO(TVO(c[O(p;`O~O{)XO!i#xO~O!W$aO_$la'm$la'k$la!h$la!T$la!Y$la%b$la!b$la~O#q)]O~P!&^Oz)`O!b)_O!Y$YX$U$YX$X$YX$Z$YX$b$YX~O!b)_O!Y(mX$U(mX$X(mX$Z(mX$b(mX~Oz)`O~P!-lOz)`O!Y(mX$U(mX$X(mX$Z(mX$b(mX~O!Y)bO$U)fO$X)aO$Z)aO$b)gO~O!V)jO~P!*SO$X$gO$Z$fO$b)nO~Oh$tXz$tX}$tX!g$tX(k$tX(l$tX~OegXe$tXhgX!WgX#YgX~P!/bOm)pO~Or)qO(U)rO(V)tO~Oh)}Oz)vO})wO(k)yO(l){O~Oe)uO~P!0kOe*OO~Oj%SOl$tOm$sOn$sOt%TOv%UOx:[O}${O!Y$|O!d;fO!i$xO#d:bO$R%YO$n:^O$p:`O$s%ZO'xTO'{UO(P%RO(T$uO~O!V*SO'v*PO!h(qP~P!1YO#e*UO~O!i*VO~O!V*[O'v*XO!T(rP~P!1YOl*hO}*`O!]*fO!^*_O!_*_O!i*VO#U*gO%X*bO'w!lO(W!mO~O!X*eO~P!3`O!g#wOh(SXz(SX}(SX(k(SX(l(SX!W(SX#Y(SX~Oe(SX#z(SX~P!4XOh*kO#Y*jOe(RX!W(RX~O!W*lOe(QX~O'v&QOe(QP~O!i*sO~O'v(lO~Oj*wO}%aO!V#hO!Y%bO!y]O#c#kO#d#hO'v%`O!h(eP~O!b#uO#e*xO~O}%aO!V*zO!W(SO!Y%bO'v%`O!T(hP~Om'RO}*|O!V*{O'xTO'{UO(W(tO~O!X(jP~P!7SO!W*}O_(vX'm(vX~OP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO#w$YO(TVO(d$ZO(k#|O(l#}O~O_!ca!W!ca'm!ca'k!ca!T!ca!h!cap!ca!Y!ca%b!ca!b!ca~P!7zOz#yO{#zO}#{O!g#wO!i#xO(TVOP!oaY!oal!oa!W!oa!f!oa!m!oa#h!oa#i!oa#j!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#r!oa#t!oa#v!oa#w!oa(d!oa(k!oa(l!oa~O_!oa'm!oa'k!oa!T!oa!h!oap!oa!Y!oa%b!oa!b!oa~P!:eOz#yO{#zO}#{O!g#wO!i#xO(TVOP!qaY!qal!qa!W!qa!f!qa!m!qa#h!qa#i!qa#j!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#r!qa#t!qa#v!qa#w!qa(d!qa(k!qa(l!qa~O_!qa'm!qa'k!qa!T!qa!h!qap!qa!Y!qa%b!qa!b!qa~P!=OOh+WO!Y'VO%b+VO(P%RO~O!b+YO_(OX!Y(OX'm(OX!W(OX~O_%gO!YXO'm%gO~O!i%^O(P%RO~O!i%^O'v%`O(P%RO~O!b#uO#e(nO~O%c+fO'v+bO'xTO'{UO!X(zP~O!W+gO^(yX~OY+kO~O^+lO~O!Y%wO'v%`O'w!lO^(yP~O#Y+qO(P%RO~Oh+tO!Y$|O(P%RO~O!Y+vO~Oz+xO!YXO~O%g%nO~O!u+}O~Oc,SO~O'v#mO!X(xP~Oc%uO~O%c!QO'v&QO~P<wOY,YO^,XO~OPYOQYObzOcyOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!duO!iZO!lYO!mYO!nYO!pvO!uxO!y]O$VfO%a}O'xTO'{UO(TVO(c[O(piO~O!Y!eO!r!gO$R!kO'v!dO~P!CuO^,XO_%gO'm%gO~OPYOQYOb!jOc!iOjkOlYOmkOnkOtkOvYOxYO}WO!RkO!SkO!Y!eO!duO!iZO!lYO!mYO!nYO!pvO!u!hO$R!kO$VfO'v!dO'xTO'{UO(TVO(c[O(piO~O_,_O!rwO#q!OO%e!OO%f!OO%g!OO~P!F_O!i&fO~O&U,eO~O!Y,gO~O&g,iO&i,jOP&daQ&daW&da_&dab&dac&daj&dal&dam&dan&dat&dav&dax&da}&da!R&da!S&da!Y&da!d&da!i&da!l&da!m&da!n&da!p&da!r&da!u&da!y&da#q&da$R&da$V&da%a&da%c&da%e&da%f&da%g&da%j&da%l&da%o&da%p&da%r&da&O&da&U&da&W&da&Y&da&[&da&_&da&e&da&k&da&m&da&o&da&q&da&s&da'k&da'v&da'x&da'{&da(T&da(c&da(p&da!X&da&]&da`&da&b&da~O'v,oO~O!W|X!W!`X!X|X!X!`X!b|X!b!`X!i!`X#Y|X(P!`X~O!b,tO#Y,sO!W#bX!W(]X!X#bX!X(]X!b(]X!i(]X(P(]X~O!b,vO!i%^O(P%RO!W![X!X![X~Om!nO}!oO'xTO'{UO(W!mO~OP9qOQ9qOb;bOc!iOjkOl9qOmkOnkOtkOv9qOx9qO}WO!RkO!SkO!Y!eO!d9tO!iZO!l9qO!m9qO!n9qO!p9uO!r9xO!u!hO$R!kO$VfO'xTO'{UO(TVO(c[O(p;`O~O'v:gO~P# eO!W,zO!X([X~O!X,|O~O!b,tO#Y,sO!W#bX!X#bX~O!W,}O!X(jX~O!X-PO~O!^-QO!_-QO'w!lO~P# SO!X-TO~P'_Oh-WO!Y'VO~O!T-]O~Om!xa!]!xa!^!xa!_!xa!}!xa#O!xa#P!xa#Q!xa#R!xa#U!xa#V!xa'w!xa'x!xa'{!xa(W!xa(c!xa~P!#YO!m-bO#Y-`O~PBxO!^-dO!_-dO'w!lO~PChO_%gO#Y-`O'm%gO~O_%gO!b#uO#Y-`O'm%gO~O_%gO!b#uO!m-bO#Y-`O'm%gO(d'gO~O'r'oO's'oO't-iO~Op-jO~O!T'Oa!W'Oa~P!7zO!V-nO!T'OX!W'OX~P%[O!W'{O!T(Za~O!T(Za~PG[O!W(SO!T(ha~O}%aO!V-rO!Y%bO'v%`O!T'UX!W'UX~O#Y-tO!W(fa!h(fa_(fa'm(fa~O!b#uO~P#)kO!W(`O!h(ea~O}%aO!Y%bO#d-xO'v%`O~Oj-}O}%aO!V-zO!Y%bO!y]O#c-|O#d-zO'v%`O!W'XX!h'XX~O{.RO!i#xO~Oh.UO!Y'VO%b.TO(P%RO~O_#]i!W#]i'm#]i'k#]i!T#]i!h#]ip#]i!Y#]i%b#]i!b#]i~P!7zOh;lOz)vO})wO(k)yO(l){O~O#e#Xa_#Xa#Y#Xa'm#Xa!W#Xa!h#Xa!Y#Xa!T#Xa~P#,gO#e(SXP(SXY(SX_(SXl(SX{(SX!f(SX!i(SX!m(SX#h(SX#i(SX#j(SX#k(SX#l(SX#m(SX#n(SX#o(SX#p(SX#r(SX#t(SX#v(SX#w(SX'm(SX(T(SX(d(SX!h(SX!T(SX'k(SXp(SX!Y(SX%b(SX!b(SX~P!4XO!W._Oe(^X~P!0kOe.aO~O!W.bO!h(_X~P!7zO!h.eO~O!T.gO~OP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O(TVOY#gi_#gil#gi!W#gi!f#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi'm#gi(d#gi(k#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~O#h#gi~P#0cO#h$OO~P#0cOP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO(TVOY#gi_#gi!W#gi!f#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi'm#gi(d#gi(k#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~Ol#gi~P#3TOl$QO~P#3TOP$]Ol$QOz#yO{#zO}#{O!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO(TVO_#gi!W#gi#r#gi#t#gi#v#gi#w#gi'm#gi(d#gi(k#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~OY#gi!f#gi#m#gi#n#gi#o#gi#p#gi~P#5uOY$dO!f$SO#m$SO#n$SO#o$cO#p$SO~P#5uOP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO(TVO_#gi!W#gi#t#gi#v#gi#w#gi'm#gi(d#gi(l#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~O(k#gi~P#8vO(k#|O~P#8vOP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO(TVO(k#|O_#gi!W#gi#v#gi#w#gi'm#gi(d#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~O(l#gi~P#;hO(l#}O~P#;hOP$]OY$dOl$QOz#yO{#zO}#{O!f$SO!g#wO!i#xO!m$]O#h$OO#i$PO#j$PO#k$PO#l$RO#m$SO#n$SO#o$cO#p$SO#r$TO#t$VO#v$XO(TVO(k#|O(l#}O~O_#gi!W#gi#w#gi'm#gi(d#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~P#>YOPZXYZXlZXzZX{ZX}ZX!fZX!gZX!iZX!mZX#YZX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX(TZX(dZX(kZX(lZX!WZX!XZX~O#zZX~P#@sOP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO#t:RO#v:TO#w:UO(TVO(d$ZO(k#|O(l#}O~O#z.iO~P#CQO#Y:ZO#|:ZO#z(YX!X(YX~P! UO_'[a!W'[a'm'[a'k'[a!h'[a!T'[ap'[a!Y'[a%b'[a!b'[a~P!7zOP#giY#gi_#gil#gi{#gi!W#gi!f#gi!g#gi!i#gi!m#gi#h#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi'm#gi(T#gi(d#gi'k#gi!T#gi!h#gip#gi!Y#gi%b#gi!b#gi~P#,gO_#{i!W#{i'm#{i'k#{i!T#{i!h#{ip#{i!Y#{i%b#{i!b#{i~P!7zO$X.nO$Z.nO~O$X.oO$Z.oO~O!b)_O#Y.pO!Y$_X$U$_X$X$_X$Z$_X$b$_X~O!V.qO~O!Y)bO$U.sO$X)aO$Z)aO$b.tO~O!W:VO!X(XX~P#CQO!X.uO~O!b)_O$b(mX~O$b.wO~Or)qO(U)rO(V.zO~O!T/OO~P!&^O!WdX!bdX!hdX!h$tX(ddX~P!/bO!h/UO~P#,gO!W/VO!b#uO(d'gO!h(qX~O!h/[O~O!V*SO'v%`O!h(qP~O#e/^O~O!T$tX!W$tX!b${X~P!/bO!W/_O!T(rX~P#,gO!b/aO~O!T/cO~Ol/gO!b#uO!i%^O(P%RO(d'gO~O'v/iO~O!b+YO~O_%gO!W/mO'm%gO~O!X/oO~P!3`O!^/pO!_/pO'w!lO(W!mO~O}/rO(W!mO~O#U/sO~O'v&QOe'aX!W'aX~O!W*lOe(Qa~Oe/xO~Oz/yO{/yO}/zOhwa(kwa(lwa!Wwa#Ywa~Oewa#zwa~P$ hOz)vO})wOh$ma(k$ma(l$ma!W$ma#Y$ma~Oe$ma#z$ma~P$!^Oz)vO})wOh$oa(k$oa(l$oa!W$oa#Y$oa~Oe$oa#z$oa~P$#PO#e/|O~Oe$}a!W$}a#Y$}a#z$}a~P!0kO!b#uO~O#e0PO~O!W*}O_(va'm(va~Oz#yO{#zO}#{O!g#wO!i#xO(TVOP!oiY!oil!oi!W!oi!f!oi!m!oi#h!oi#i!oi#j!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#r!oi#t!oi#v!oi#w!oi(d!oi(k!oi(l!oi~O_!oi'm!oi'k!oi!T!oi!h!oip!oi!Y!oi%b!oi!b!oi~P$$nOh.UO!Y'VO%b.TO~Oj0ZO'v0YO~P!1]O!b+YO_(Oa!Y(Oa'm(Oa!W(Oa~O#e0aO~OYZX!WdX!XdX~O!W0bO!X(zX~O!X0dO~OY0eO~O'v+bO'xTO'{UO~O!Y%wO'v%`O^'iX!W'iX~O!W+gO^(ya~O!h0jO~P!7zOY0mO~O^0nO~O#Y0qO~Oh0tO!Y$|O~O(W(tO!X(wP~Oh0}O!Y0zO%b0|O(P%RO~OY1XO!W1VO!X(xX~O!X1YO~O^1[O_%gO'm%gO~O'v#mO'xTO'{UO~O#Y$eO#|$eOP(YXY(YXl(YXz(YX{(YX}(YX!W(YX!f(YX!i(YX!m(YX#h(YX#i(YX#j(YX#k(YX#l(YX#m(YX#n(YX#o(YX#r(YX#t(YX#v(YX#w(YX(T(YX(d(YX(k(YX(l(YX~O#p1_O&S1`O_(YX!g(YX~P$+dO#Y$eO#p1_O&S1`O~O_1bO~P%[O_1dO~O&]1gOP&ZiQ&ZiW&Zi_&Zib&Zic&Zij&Zil&Zim&Zin&Zit&Ziv&Zix&Zi}&Zi!R&Zi!S&Zi!Y&Zi!d&Zi!i&Zi!l&Zi!m&Zi!n&Zi!p&Zi!r&Zi!u&Zi!y&Zi#q&Zi$R&Zi$V&Zi%a&Zi%c&Zi%e&Zi%f&Zi%g&Zi%j&Zi%l&Zi%o&Zi%p&Zi%r&Zi&O&Zi&U&Zi&W&Zi&Y&Zi&[&Zi&_&Zi&e&Zi&k&Zi&m&Zi&o&Zi&q&Zi&s&Zi'k&Zi'v&Zi'x&Zi'{&Zi(T&Zi(c&Zi(p&Zi!X&Zi`&Zi&b&Zi~O`1mO!X1kO&b1lO~P`O!YXO!i1oO~O&i,jOP&diQ&diW&di_&dib&dic&dij&dil&dim&din&dit&div&dix&di}&di!R&di!S&di!Y&di!d&di!i&di!l&di!m&di!n&di!p&di!r&di!u&di!y&di#q&di$R&di$V&di%a&di%c&di%e&di%f&di%g&di%j&di%l&di%o&di%p&di%r&di&O&di&U&di&W&di&Y&di&[&di&_&di&e&di&k&di&m&di&o&di&q&di&s&di'k&di'v&di'x&di'{&di(T&di(c&di(p&di!X&di&]&di`&di&b&di~O!T1uO~O!W![a!X![a~P#CQOm!nO}!oO!V1{O(W!mO!W'PX!X'PX~P@OO!W,zO!X([a~O!W'VX!X'VX~P!7SO!W,}O!X(ja~O!X2SO~P'_O_%gO#Y2]O'm%gO~O_%gO!b#uO#Y2]O'm%gO~O_%gO!b#uO!m2aO#Y2]O'm%gO(d'gO~O_%gO'm%gO~P!7zO!W$aOp$la~O!T'Oi!W'Oi~P!7zO!W'{O!T(Zi~O!W(SO!T(hi~O!T(ii!W(ii~P!7zO!W(fi!h(fi_(fi'm(fi~P!7zO#Y2cO!W(fi!h(fi_(fi'm(fi~O!W(`O!h(ei~O}%aO!Y%bO!y]O#c2hO#d2gO'v%`O~O}%aO!Y%bO#d2gO'v%`O~Oh2oO!Y'VO%b2nO~Oh2oO!Y'VO%b2nO(P%RO~O#ewaPwaYwa_walwa!fwa!gwa!iwa!mwa#hwa#iwa#jwa#kwa#lwa#mwa#nwa#owa#pwa#rwa#twa#vwa#wwa'mwa(Twa(dwa!hwa!Twa'kwapwa!Ywa%bwa!bwa~P$ hO#e$maP$maY$ma_$mal$ma{$ma!f$ma!g$ma!i$ma!m$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#o$ma#p$ma#r$ma#t$ma#v$ma#w$ma'm$ma(T$ma(d$ma!h$ma!T$ma'k$map$ma!Y$ma%b$ma!b$ma~P$!^O#e$oaP$oaY$oa_$oal$oa{$oa!f$oa!g$oa!i$oa!m$oa#h$oa#i$oa#j$oa#k$oa#l$oa#m$oa#n$oa#o$oa#p$oa#r$oa#t$oa#v$oa#w$oa'm$oa(T$oa(d$oa!h$oa!T$oa'k$oap$oa!Y$oa%b$oa!b$oa~P$#PO#e$}aP$}aY$}a_$}al$}a{$}a!W$}a!f$}a!g$}a!i$}a!m$}a#h$}a#i$}a#j$}a#k$}a#l$}a#m$}a#n$}a#o$}a#p$}a#r$}a#t$}a#v$}a#w$}a'm$}a(T$}a(d$}a!h$}a!T$}a'k$}a#Y$}ap$}a!Y$}a%b$}a!b$}a~P#,gO_#]q!W#]q'm#]q'k#]q!T#]q!h#]qp#]q!Y#]q%b#]q!b#]q~P!7zOe'QX!W'QX~P!'vO!W._Oe(^a~O!V2wO!W'RX!h'RX~P%[O!W.bO!h(_a~O!W.bO!h(_a~P!7zO!T2zO~O#z!ka!X!ka~PJxO#z!ca!W!ca!X!ca~P#CQO#z!oa!X!oa~P!:eO#z!qa!X!qa~P!=OO!Y3^O$VfO$`3_O~O!X3cO~Op3dO~P#,gO_$iq!W$iq'm$iq'k$iq!T$iq!h$iqp$iq!Y$iq%b$iq!b$iq~P!7zO!T3eO~P#,gOz)vO})wO(l){Oh%Yi(k%Yi!W%Yi#Y%Yi~Oe%Yi#z%Yi~P$I|Oz)vO})wOh%[i(k%[i(l%[i!W%[i#Y%[i~Oe%[i#z%[i~P$JoO(d$ZO~P#,gO!V3hO'v%`O!W']X!h']X~O!W/VO!h(qa~O!W/VO!b#uO!h(qa~O!W/VO!b#uO(d'gO!h(qa~Oe$vi!W$vi#Y$vi#z$vi~P!0kO!V3pO'v*XO!T'_X!W'_X~P!1YO!W/_O!T(ra~O!W/_O!T(ra~P#,gO!b#uO#p3xO~Ol3{O!b#uO(d'gO~Oe(Ri!W(Ri~P!0kO#Y4OOe(Ri!W(Ri~P!0kO!h4RO~O_$jq!W$jq'm$jq'k$jq!T$jq!h$jqp$jq!Y$jq%b$jq!b$jq~P!7zO!T4VO~O!W4WO!Y(sX~P#,gO!g#wO~P4XO_$tX!Y$tX%VZX'm$tX!W$tX~P!/bO%V4YO_iXhiXziX}iX!YiX'miX(kiX(liX!WiX~O%V4YO~O%c4aO'v+bO'xTO'{UO!W'hX!X'hX~O!W0bO!X(za~OY4eO~O^4fO~O_%gO'm%gO~P#,gO!Y$|O~P#,gO!W4nO#Y4pO!X(wX~O!X4qO~Om!nO}4rO!]!xO!^!uO!_!uO!y9rO!}!pO#O!pO#P!pO#Q!pO#R!pO#U4wO#V!yO'w!lO'xTO'{UO(W!mO(c!sO~O!X4vO~P%$nOh4|O!Y0zO%b4{O~Oh4|O!Y0zO%b4{O(P%RO~O'v#mO!W'gX!X'gX~O!W1VO!X(xa~O'xTO'{UO(W5VO~O^5ZO~O#p5^O&S5_O~PMhO!h5`O~P%[O_5bO~O_5bO~P%[O`1mO!X5gO&b1lO~P`O!b5iO~O!b5kO!W(]i!X(]i!b(]i!i(]i(P(]i~O!W#bi!X#bi~P#CQO#Y5lO!W#bi!X#bi~O!W![i!X![i~P#CQO_%gO#Y5uO'm%gO~O_%gO!b#uO#Y5uO'm%gO~O!W(fq!h(fq_(fq'm(fq~P!7zO!W(`O!h(eq~O}%aO!Y%bO#d5|O'v%`O~O!Y'VO%b6PO~Oh6SO!Y'VO%b6PO~O#e%YiP%YiY%Yi_%Yil%Yi{%Yi!f%Yi!g%Yi!i%Yi!m%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#o%Yi#p%Yi#r%Yi#t%Yi#v%Yi#w%Yi'm%Yi(T%Yi(d%Yi!h%Yi!T%Yi'k%Yip%Yi!Y%Yi%b%Yi!b%Yi~P$I|O#e%[iP%[iY%[i_%[il%[i{%[i!f%[i!g%[i!i%[i!m%[i#h%[i#i%[i#j%[i#k%[i#l%[i#m%[i#n%[i#o%[i#p%[i#r%[i#t%[i#v%[i#w%[i'm%[i(T%[i(d%[i!h%[i!T%[i'k%[ip%[i!Y%[i%b%[i!b%[i~P$JoO#e$viP$viY$vi_$vil$vi{$vi!W$vi!f$vi!g$vi!i$vi!m$vi#h$vi#i$vi#j$vi#k$vi#l$vi#m$vi#n$vi#o$vi#p$vi#r$vi#t$vi#v$vi#w$vi'm$vi(T$vi(d$vi!h$vi!T$vi'k$vi#Y$vip$vi!Y$vi%b$vi!b$vi~P#,gOe'Qa!W'Qa~P!0kO!W'Ra!h'Ra~P!7zO!W.bO!h(_i~O#z#]i!W#]i!X#]i~P#CQOP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O(TVOY#gil#gi!f#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi#z#gi(d#gi(k#gi(l#gi!W#gi!X#gi~O#h#gi~P%2}O#h9zO~P%2}OP$]Oz#yO{#zO}#{O!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O(TVOY#gi!f#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi#z#gi(d#gi(k#gi(l#gi!W#gi!X#gi~Ol#gi~P%5YOl9|O~P%5YOP$]Ol9|Oz#yO{#zO}#{O!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O(TVO#r#gi#t#gi#v#gi#w#gi#z#gi(d#gi(k#gi(l#gi!W#gi!X#gi~OY#gi!f#gi#m#gi#n#gi#o#gi#p#gi~P%7eOY:YO!f:OO#m:OO#n:OO#o:XO#p:OO~P%7eOP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO(TVO#t#gi#v#gi#w#gi#z#gi(d#gi(l#gi!W#gi!X#gi~O(k#gi~P%:PO(k#|O~P%:POP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO#t:RO(TVO(k#|O#v#gi#w#gi#z#gi(d#gi!W#gi!X#gi~O(l#gi~P%<[O(l#}O~P%<[OP$]OY:YOl9|Oz#yO{#zO}#{O!f:OO!g#wO!i#xO!m$]O#h9zO#i9{O#j9{O#k9{O#l9}O#m:OO#n:OO#o:XO#p:OO#r:PO#t:RO#v:TO(TVO(k#|O(l#}O~O#w#gi#z#gi(d#gi!W#gi!X#gi~P%>gO_#xy!W#xy'm#xy'k#xy!T#xy!h#xyp#xy!Y#xy%b#xy!b#xy~P!7zOh;mOz)vO})wO(k)yO(l){O~OP#giY#gil#gi{#gi!f#gi!g#gi!i#gi!m#gi#h#gi#i#gi#j#gi#k#gi#l#gi#m#gi#n#gi#o#gi#p#gi#r#gi#t#gi#v#gi#w#gi#z#gi(T#gi(d#gi!W#gi!X#gi~P%A_O!g#wOP(SXY(SXh(SXl(SXz(SX{(SX}(SX!f(SX!i(SX!m(SX#h(SX#i(SX#j(SX#k(SX#l(SX#m(SX#n(SX#o(SX#p(SX#r(SX#t(SX#v(SX#w(SX#z(SX(T(SX(d(SX(k(SX(l(SX!W(SX!X(SX~O#z#{i!W#{i!X#{i~P#CQO#z!oi!X!oi~P$$nO!X6`O~O!W'[a!X'[a~P#CQO!b#uO(d'gO!W']a!h']a~O!W/VO!h(qi~O!W/VO!b#uO!h(qi~Oe$vq!W$vq#Y$vq#z$vq~P!0kO!T'_a!W'_a~P#,gO!b6gO~O!W/_O!T(ri~P#,gO!W/_O!T(ri~O!T6kO~O!b#uO#p6pO~Ol6qO!b#uO(d'gO~O!T6sO~Oe$xq!W$xq#Y$xq#z$xq~P!0kO_$jy!W$jy'm$jy'k$jy!T$jy!h$jyp$jy!Y$jy%b$jy!b$jy~P!7zO!b5kO~O!W4WO!Y(sa~O_#]y!W#]y'm#]y'k#]y!T#]y!h#]yp#]y!Y#]y%b#]y!b#]y~P!7zOY6xO~O!W0bO!X(zi~O^7OO~O(W(tO!W'dX!X'dX~O!W4nO!X(wa~OjkO'v7VO~P.iO!X7YO~P%$nOm!nO}7ZO'xTO'{UO(W!mO(c!sO~O!Y0zO~O!Y0zO%b7]O~Oh7`O!Y0zO%b7]O~OY7eO!W'ga!X'ga~O!W1VO!X(xi~O!h7iO~O!h7jO~O!h7mO~O!h7mO~P%[O_7oO~O!b7pO~O!h7qO~O!W(ii!X(ii~P#CQO_%gO#Y7yO'm%gO~O!W(fy!h(fy_(fy'm(fy~P!7zO!W(`O!h(ey~O!Y'VO%b7|O~O#e$vqP$vqY$vq_$vql$vq{$vq!W$vq!f$vq!g$vq!i$vq!m$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#o$vq#p$vq#r$vq#t$vq#v$vq#w$vq'm$vq(T$vq(d$vq!h$vq!T$vq'k$vq#Y$vqp$vq!Y$vq%b$vq!b$vq~P#,gO#e$xqP$xqY$xq_$xql$xq{$xq!W$xq!f$xq!g$xq!i$xq!m$xq#h$xq#i$xq#j$xq#k$xq#l$xq#m$xq#n$xq#o$xq#p$xq#r$xq#t$xq#v$xq#w$xq'm$xq(T$xq(d$xq!h$xq!T$xq'k$xq#Y$xqp$xq!Y$xq%b$xq!b$xq~P#,gO!W'Ri!h'Ri~P!7zO#z#]q!W#]q!X#]q~P#CQOz/yO{/yO}/zOPwaYwahwalwa!fwa!gwa!iwa!mwa#hwa#iwa#jwa#kwa#lwa#mwa#nwa#owa#pwa#rwa#twa#vwa#wwa#zwa(Twa(dwa(kwa(lwa!Wwa!Xwa~Oz)vO})wOP$maY$mah$mal$ma{$ma!f$ma!g$ma!i$ma!m$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#o$ma#p$ma#r$ma#t$ma#v$ma#w$ma#z$ma(T$ma(d$ma(k$ma(l$ma!W$ma!X$ma~Oz)vO})wOP$oaY$oah$oal$oa{$oa!f$oa!g$oa!i$oa!m$oa#h$oa#i$oa#j$oa#k$oa#l$oa#m$oa#n$oa#o$oa#p$oa#r$oa#t$oa#v$oa#w$oa#z$oa(T$oa(d$oa(k$oa(l$oa!W$oa!X$oa~OP$}aY$}al$}a{$}a!f$}a!g$}a!i$}a!m$}a#h$}a#i$}a#j$}a#k$}a#l$}a#m$}a#n$}a#o$}a#p$}a#r$}a#t$}a#v$}a#w$}a#z$}a(T$}a(d$}a!W$}a!X$}a~P%A_O#z$iq!W$iq!X$iq~P#CQO#z$jq!W$jq!X$jq~P#CQO!X8WO~O#z8XO~P!0kO!b#uO!W']i!h']i~O!b#uO(d'gO!W']i!h']i~O!W/VO!h(qq~O!T'_i!W'_i~P#,gO!W/_O!T(rq~O!T8_O~P#,gO!T8_O~Oe(Ry!W(Ry~P!0kO!W'ba!Y'ba~P#,gO_%Uq!Y%Uq'm%Uq!W%Uq~P#,gOY8dO~O!W0bO!X(zq~O#Y8hO!W'da!X'da~O!W4nO!X(wi~P#CQOPZXYZXlZXzZX{ZX}ZX!TZX!WZX!fZX!gZX!iZX!mZX#YZX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX(TZX(dZX(kZX(lZX~O!b%SX#p%SX~P&2_O!Y0zO%b8lO~O'xTO'{UO(W8qO~O!W1VO!X(xq~O!h8tO~O!h8uO~O!h8vO~O!h8vO~P%[O#Y8yO!W#by!X#by~O!W#by!X#by~P#CQO!Y'VO%b9OO~O#z#xy!W#xy!X#xy~P#CQOP$viY$vil$vi{$vi!f$vi!g$vi!i$vi!m$vi#h$vi#i$vi#j$vi#k$vi#l$vi#m$vi#n$vi#o$vi#p$vi#r$vi#t$vi#v$vi#w$vi#z$vi(T$vi(d$vi!W$vi!X$vi~P%A_Oz)vO})wO(l){OP%YiY%Yih%Yil%Yi{%Yi!f%Yi!g%Yi!i%Yi!m%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#o%Yi#p%Yi#r%Yi#t%Yi#v%Yi#w%Yi#z%Yi(T%Yi(d%Yi(k%Yi!W%Yi!X%Yi~Oz)vO})wOP%[iY%[ih%[il%[i{%[i!f%[i!g%[i!i%[i!m%[i#h%[i#i%[i#j%[i#k%[i#l%[i#m%[i#n%[i#o%[i#p%[i#r%[i#t%[i#v%[i#w%[i#z%[i(T%[i(d%[i(k%[i(l%[i!W%[i!X%[i~O#z$jy!W$jy!X$jy~P#CQO#z#]y!W#]y!X#]y~P#CQO!b#uO!W']q!h']q~O!W/VO!h(qy~O!T'_q!W'_q~P#,gO!T9VO~P#,gO!W0bO!X(zy~O!W4nO!X(wq~O!Y0zO%b9^O~O!h9aO~O!Y'VO%b9fO~OP$vqY$vql$vq{$vq!f$vq!g$vq!i$vq!m$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#o$vq#p$vq#r$vq#t$vq#v$vq#w$vq#z$vq(T$vq(d$vq!W$vq!X$vq~P%A_OP$xqY$xql$xq{$xq!f$xq!g$xq!i$xq!m$xq#h$xq#i$xq#j$xq#k$xq#l$xq#m$xq#n$xq#o$xq#p$xq#r$xq#t$xq#v$xq#w$xq#z$xq(T$xq(d$xq!W$xq!X$xq~P%A_Oe%^!Z!W%^!Z#Y%^!Z#z%^!Z~P!0kO!W'dq!X'dq~P#CQO!W#b!Z!X#b!Z~P#CQO#e%^!ZP%^!ZY%^!Z_%^!Zl%^!Z{%^!Z!W%^!Z!f%^!Z!g%^!Z!i%^!Z!m%^!Z#h%^!Z#i%^!Z#j%^!Z#k%^!Z#l%^!Z#m%^!Z#n%^!Z#o%^!Z#p%^!Z#r%^!Z#t%^!Z#v%^!Z#w%^!Z'm%^!Z(T%^!Z(d%^!Z!h%^!Z!T%^!Z'k%^!Z#Y%^!Zp%^!Z!Y%^!Z%b%^!Z!b%^!Z~P#,gOP%^!ZY%^!Zl%^!Z{%^!Z!f%^!Z!g%^!Z!i%^!Z!m%^!Z#h%^!Z#i%^!Z#j%^!Z#k%^!Z#l%^!Z#m%^!Z#n%^!Z#o%^!Z#p%^!Z#r%^!Z#t%^!Z#v%^!Z#w%^!Z#z%^!Z(T%^!Z(d%^!Z!W%^!Z!X%^!Z~P%A_Op(XX~P1qO'w!lO~P!*SO!TdX!WdX#YdX~P&2_OPZXYZXlZXzZX{ZX}ZX!WZX!WdX!fZX!gZX!iZX!mZX#YZX#YdX#edX#hZX#iZX#jZX#kZX#lZX#mZX#nZX#oZX#pZX#rZX#tZX#vZX#wZX#|ZX(TZX(dZX(kZX(lZX~O!bdX!hZX!hdX(ddX~P&GuOP9qOQ9qOb;bOc!iOjkOl9qOmkOnkOtkOv9qOx9qO}WO!RkO!SkO!YXO!d9tO!iZO!l9qO!m9qO!n9qO!p9uO!r9xO!u!hO$R!kO$VfO'v)UO'xTO'{UO(TVO(c[O(p;`O~O!W:VO!X$la~Oj%SOl$tOm$sOn$sOt%TOv%UOx:]O}${O!Y$|O!d;gO!i$xO#d:cO$R%YO$n:_O$p:aO$s%ZO'v(lO'xTO'{UO(P%RO(T$uO~O#q)]O~P&LkO!XZX!XdX~P&GuO#e9yO~O!b#uO#e9yO~O#Y:ZO~O#p:OO~O#Y:eO!W(iX!X(iX~O#Y:ZO!W(gX!X(gX~O#e:fO~Oe:hO~P!0kO#e:mO~O#e:nO~O!b#uO#e:oO~O!b#uO#e:fO~O#z:pO~P#CQO#e:qO~O#e:rO~O#e:sO~O#e:tO~O#e:uO~O#e:vO~O#z:wO~P!0kO#z:xO~P!0kO$V~!g!}#O#Q#R#U#c#d#o(p$n$p$s%V%a%b%c%j%l%o%p%r%t~'qR$V(p#i!S'o'w#jm#h#klz'p(W'p'v$X$Z$X~",
  goto: "$'R)OPPPP)PPP)SP)eP*t.xPPPP5YPP5pP;l>sP?WP?WPPP?WP@xP?WP?WP?WP@|PPARPAlPFdPPPFhPPPPFhIiPPPIoJjPFhPLxPPPP! WFhPPPFhPFhP!#fFhP!&z!'|!(VP!(y!(}!(yPPPPP!,Y!'|PP!,v!-pP!0dFhFh!0i!3s!8Y!8Y!<OPPP!<VFhPPPPPPPPPPP!?dP!@uPPFh!BSPFhPFhFhFhFhPFh!CfPP!FnP!IrP!Iv!JQ!JU!JUP!FkP!JY!JYP!M^P!MbFhFh!Mh#!k?WP?WP?W?WP##v?W?W#%r?W#(R?W#)w?W?W#*f#,d#,d#,h#,p#,d#,xP#,dP?W#-b?W#.k?W?W5YPPP#/wPPP#0b#0bP#0bP#0x#0bPP#1OP#0uP#0u#1c#0u#1}#2T5V)S#2W)SP#2_#2_#2_P)SP)SP)SP)SPP)SP#2e#2hP#2h)SP#2lP#2oP)SP)SP)SP)SP)SP)S)SPP#2u#2{#3W#3^#3d#3j#3p#4O#4U#4[#4f#4l#4v#5V#5]#5}#6a#6g#6m#6{#7b#8s#9R#9X#9_#9e#9k#9u#9{#:R#:]#:o#:uPPPPPPPPPP#:{PPPPPPP#;p#>wP#@W#@_#@gPPPP#Du#Gl#NT#NW#NZ$ S$ V$ Y$ a$ iPP$ o$ s$!k$#j$#n$$SPP$$W$$^$$bP$$e$$i$$l$%b$%y$&b$&f$&i$&l$&r$&u$&y$&}R!{RoqOXst!Z#c%f&i&k&l&n,b,g1g1jY!uQ'V-S0z4uQ%lvQ%tyQ%{|Q&a!VS&}!e,zQ']!iS'c!r!xS*_$|*dQ+`%uQ+m%}Q,R&ZQ-Q'UQ-['^Q-d'dQ/p*fQ1U,SR:d9u%OdOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|,_,b,g-W-`-n-t.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2w4r4|5^5_5b5u7Z7`7o7yS#p]9r!r)W$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ*o%VQ+e%wQ,T&^Q,[&fQ.X:[Q0W+WQ0[+YQ0g+fQ1^,YQ2k.UQ4`0bQ5T1VQ6R2oQ6X:]Q6z4aR8P6S&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;ct!nQ!r!u!x!y&}'U'V'c'd'e,z-Q-S-d0z4u4w$^$si#u#w$c$d$x${%W%X%])q)w)z)|)}*U*[*j*k+V+Y+q+t.T._/P/^/_/a/|0q0t0|2n3f3p3x4O4W4Y4{6P6g6p7]7|8X8l9O9^9f:X:Y:^:_:`:a:b:c:i:j:k:l:m:n:q:r:s:t:w:x;`;h;i;l;mQ&O|Q&{!eS'R%b,}Q+e%wQ/{*sQ0g+fQ0l+lQ1],XQ1^,YQ4`0bQ4i0nQ5W1XQ5X1[Q6z4aQ6}4fQ7h5ZQ8g7OR8r7ernOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jR,V&b&v^OPXYstuvwz!Z!`!g!j!o#R#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'X'i'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;b;c[#[WZ#V#Y'O'y!S%cm#g#h#k%^%a(S(^(_(`*z*{*},^,t-r-x-y-z-|1o2g2h5k5|Q%oxQ%syS%x|%}Q&U!TQ'Y!hQ'[!iQ(g#rS*R$x*VS+_%t%uQ+c%wQ+|&XQ,Q&ZS-Z']'^Q.W(hQ/Z*SQ0`+`Q0f+fQ0h+gQ0k+kQ1P+}S1T,R,SQ2X-[Q3g/VQ4_0bQ4c0eQ4h0mQ5S1UQ6d3hQ6y4aQ6|4eQ8c6xR9X8dv$zi#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;i!S%qy!i!t%s%t%u&|'[']'^'b'l*^+_+`,w-Z-[-c/h0`2Q2X2`3zQ+X%oQ+r&RQ+u&SQ,P&ZQ.V(gQ1O+|U1S,Q,R,SQ2p.WQ4}1PS5R1T1UQ7d5S#O;d#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mg;e:X:Y:_:a:c:j:l:n:r:t:xW%Pi%R*l;`S&R!Q&`Q&S!RQ&T!SR+p&P$_%Oi#u#w$c$d$x${%W%X%])q)w)z)|)}*U*[*j*k+V+Y+q+t.T._/P/^/_/a/|0q0t0|2n3f3p3x4O4W4Y4{6P6g6p7]7|8X8l9O9^9f:X:Y:^:_:`:a:b:c:i:j:k:l:m:n:q:r:s:t:w:x;`;h;i;l;mT)r$u)sV*p%V:[:]U'R!e%b,}S(u#y#zQ+j%zS.P(c(dQ0u+vQ4P/yR7S4n&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;c$i$`c#X#d%j%k%m'x(O(j(q(y(z({(|(})O)P)Q)R)S)T)V)Y)^)h+T+i,x-g-l-q-s.^.d.h.j.k.l.{/}1v1y2Z2b2v2{2|2}3O3P3Q3R3S3T3U3V3W3X3[3]3b4T4]5n5t5y6V6W6]6^7U7s7w8Q8U8V8{9Z9b9s;VT#SV#T&}kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ'P!eR1|,zv!nQ!e!r!u!x!y&}'U'V'c'd'e,z-Q-S-d0z4u4wS*^$|*dS/h*_*fQ/q*gQ0w+xQ3z/pR3}/snqOXst!Z#c%f&i&k&l&n,b,g1g1jQ&p!^Q'm!wS(i#t9yQ+]%rQ+z&UQ+{&WQ-X'ZQ-f'fS.](n:fS0O*x:oQ0^+^Q0y+yQ1n,iQ1p,jQ1x,uQ2V-YQ2Y-^S4U0P:uQ4Z0_S4^0a:vQ5m1zQ5q2WQ5v2_Q6w4[Q7t5oQ7u5rQ7x5wR8x7q$d$_c#X#d%k%m'x(O(j(q(y(z({(|(})O)P)Q)R)S)T)V)Y)^)h+T+i,x-g-l-q-s.^.d.h.k.l.{/}1v1y2Z2b2v2{2|2}3O3P3Q3R3S3T3U3V3W3X3[3]3b4T4]5n5t5y6V6W6]6^7U7s7w8Q8U8V8{9Z9b9s;VS(f#o'`U*i$}(m3ZS+S%j.jQ2l0WQ6O2kQ8O6RR9P8P$d$^c#X#d%k%m'x(O(j(q(y(z({(|(})O)P)Q)R)S)T)V)Y)^)h+T+i,x-g-l-q-s.^.d.h.k.l.{/}1v1y2Z2b2v2{2|2}3O3P3Q3R3S3T3U3V3W3X3[3]3b4T4]5n5t5y6V6W6]6^7U7s7w8Q8U8V8{9Z9b9s;VS(e#o'`S(w#z$_S+R%j.jS.Q(d(fQ.m)XQ0T+SR2i.R&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cS#p]9rQ&k!XQ&l!YQ&n![Q&o!]R1f,eQ'W!hQ+U%oQ-V'YS.S(g+XQ2T-UW2m.V.W0V0XQ5p2UU5}2j2l2pS7{6O6QS8}7}8OS9d8|9PQ9l9eR9o9mU!vQ'V-ST4s0z4u!Q_OXZ`st!V!Z#c#g%^%f&`&b&i&k&l&n(`,b,g-y1g1j]!pQ!r'V-S0z4uT#p]9r%Y{OPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yS(u#y#zS.P(c(d!s:|$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cY!tQ'V-S0z4uQ'b!rS'l!u!xS'n!y4wS-c'c'dQ-e'eR2`-dQ'k!tS([#f1aS-b'b'nQ/Y*RQ/f*^Q2a-eQ3l/ZS3u/g/qQ6c3gS6n3{3}Q8Z6dR8b6qQ#vbQ'j!tS(Z#f1aS(]#l*wQ*y%_Q+Z%pQ+a%vU-a'b'k'nQ-u([Q/X*RQ/e*^Q/k*aQ0]+[Q1Q,OS2^-b-eQ2f-}S3k/Y/ZS3t/f/qQ3w/jQ3y/lQ5P1RQ5x2aQ6b3gQ6f3lS6j3u3}Q6o3|Q7b5QS8Y6c6dQ8^6kQ8`6nQ8o7cQ9T8ZQ9U8_Q9W8bQ9`8pQ9h9VQ;P:zQ;[;TR;];UV!vQ'V-S%YaOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yS#vz!j!r:y$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cR;P;b%YbOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yQ%_j!S%py!i!t%s%t%u&|'[']'^'b'l*^+_+`,w-Z-[-c/h0`2Q2X2`3zS%vz!jQ+[%qQ,O&ZW1R,P,Q,R,SU5Q1S1T1US7c5R5SQ8p7d!r:z$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ;T;aR;U;b$|eOPXYstuvw!Z!`!g!o#R#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&i&k&l&n&r&z'X'i'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7yY#aWZ#V#Y'y!S%cm#g#h#k%^%a(S(^(_(`*z*{*},^,t-r-x-y-z-|1o2g2h5k5|Q,]&f!p:{$[$m)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cR;O'OS'S!e%bR2O,}%OdOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|,_,b,g-W-`-n-t.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2w4r4|5^5_5b5u7Z7`7o7y!r)W$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cQ,[&fQ0W+WQ2k.UQ6R2oR8P6S!f$Uc#X%j'x(O(j(q)Q)R)S)T)Y)^+i-g-l-q-s.^.d.{/}2Z2b2v3X4T4]5t5y6V7w8{9s!T:Q)V)h,x.j1v1y2{3T3U3V3W3[3b5n6W6]6^7U7s8Q8U8V9Z9b;V!b$Wc#X%j'x(O(j(q)S)T)Y)^+i-g-l-q-s.^.d.{/}2Z2b2v3X4T4]5t5y6V7w8{9s!P:S)V)h,x.j1v1y2{3V3W3[3b5n6W6]6^7U7s8Q8U8V9Z9b;V!^$[c#X%j'x(O(j(q)Y)^+i-g-l-q-s.^.d.{/}2Z2b2v3X4T4]5t5y6V7w8{9sQ3f/Tz;c)V)h,x.j1v1y2{3[3b5n6W6]6^7U7s8Q8U8V9Z9b;VQ;h;jR;i;k&|kOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cS$nh$oR3_.p'TgOPWXYZhstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m$o%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.p.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cT$jf$pQ$hfS)a$k)eR)m$pT$if$pT)c$k)e'ThOPWXYZhstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$[$a$e$m$o%f%l%y&b&e&f&i&k&l&n&r&z'O'X'i'y'{(R(Y(n(r(v)j)u*x*|+W,_,b,g,s,v-W-`-n-t.U.b.i.p.q/z0P0a0}1_1`1b1d1g1j1l1{2]2c2o2w3^4p4r4|5^5_5b5l5u6S7Z7`7o7y8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;cT$nh$oQ$qhR)l$o%YjOPWXYZstuvw!Z!`!g!o#R#V#Y#c#n#t#x#{$O$P$Q$R$S$T$U$V$W$X$Y$a$e%f%l%y&b&e&f&i&k&l&n&r&z'X'i'y'{(R(Y(n(r(v)u*x*|+W,_,b,g-W-`-n-t.U.b.i/z0P0a0}1_1`1b1d1g1j1l2]2c2o2w4r4|5^5_5b5u6S7Z7`7o7y!s;a$[$m'O)j,s,v.q1{3^4p5l8h8y9q9t9u9x9y9z9{9|9}:O:P:Q:R:S:T:U:V:Z:d:e:f:h:o:p:u:v;c#clOPXZst!Z!`!o#R#c#n#{$m%f&b&e&f&i&k&l&n&r&z'X(v)j*|+W,_,b,g-W.U.q/z0}1_1`1b1d1g1j1l2o3^4r4|5^5_5b6S7Z7`7ov$}i#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;i#O(m#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mQ*t%ZQ.|)vg3Z:X:Y:_:a:c:j:l:n:r:t:xv$yi#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;iQ*W$zS*a$|*dQ*u%[Q/l*b#O;R#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mf;S:X:Y:_:a:c:j:l:n:r:t:xQ;W;dQ;X;eQ;Y;fR;Z;gv$}i#w%W%X%])z)|*U*j*k._/^/|3f4O8X;`;h;i#O(m#u$c$d$x${)q)w)}*[+V+Y+q+t.T/P/_/a0q0t0|2n3p3x4W4Y4{6P6g6p7]7|8l9O9^9f:^:`:b:i:k:m:q:s:w;l;mg3Z:X:Y:_:a:c:j:l:n:r:t:xnoOXst!Z#c%f&i&k&l&n,b,g1g1jQ*Z${Q,p&uQ,q&wR3o/_$^%Oi#u#w$c$d$x${%W%X%])q)w)z)|)}*U*[*j*k+V+Y+q+t.T._/P/^/_/a/|0q0t0|2n3f3p3x4O4W4Y4{6P6g6p7]7|8X8l9O9^9f:X:Y:^:_:`:a:b:c:i:j:k:l:m:n:q:r:s:t:w:x;`;h;i;l;mQ+s&SQ0s+uQ4l0rR7R4mT*c$|*dS*c$|*dT4t0z4uS/j*`4rT3|/r7ZQ+Z%pQ/k*aQ0]+[Q1Q,OQ5P1RQ7b5QQ8o7cR9`8pn)z$v(o*v/]/t/u2t3m4S6a6r9S;Q;^;_!Y:i(k)[*Q*Y.[.x.}/T/b0U0p0r2s3n3r4k4m6T6U6h6l6t6v8]8a9g;j;k]:j3Y6[8R9Q9R9pp)|$v(o*v/R/]/t/u2t3m4S6a6r9S;Q;^;_![:k(k)[*Q*Y.[.x.}/T/b0U0p0r2q2s3n3r4k4m6T6U6h6l6t6v8]8a9g;j;k_:l3Y6[8R8S9Q9R9prnOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jQ&]!UR,_&frnOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jR&]!UQ+w&TR0o+psnOXst!V!Z#c%f&`&i&k&l&n,b,g1g1jQ0{+|S4z1O1PU7[4x4y4}S8k7^7_S9[8j8mQ9i9]R9n9jQ&d!VR,W&`R5W1XS%x|%}R0h+gQ&i!WR,b&jR,h&oT1h,g1jR,l&pQ,k&pR1q,lQ'p!zR-h'pSsOtQ#cXT%is#cQ!}TR'r!}Q#QUR't#QQ)s$uR.y)sQ#TVR'v#TQ#WWU'|#W'}-oQ'}#XR-o(OQ,{'PR1},{Q.`(oR2u.`Q.c(qS2x.c2yR2y.dQ-S'VR2R-SY!rQ'V-S0z4uR'a!rS#^W%aU(T#^(U-pQ(U#_R-p(PQ-O'SR2P-Ot`OXst!V!Z#c%f&`&b&i&k&l&n,b,g1g1jS#gZ%^U#q`#g-yR-y(`Q(a#iQ-v(]W.O(a-v2d5zQ2d-wR5z2eQ)e$kR.r)eQ$ohR)k$oQ$bcU)Z$b-k:WQ-k9sR:W)hQ/W*RW3i/W3j6e8[U3j/X/Y/ZS6e3k3lR8[6f#o)x$v(k(o)[*Q*Y*q*r*v.Y.Z.[.x.}/R/S/T/]/b/t/u0U0p0r2q2r2s2t3Y3m3n3r4S4k4m6T6U6Y6Z6[6a6h6l6r6t6v8R8S8T8]8a9Q9R9S9g9p;Q;^;_;j;kQ/`*YU3q/`3s6iQ3s/bR6i3rQ*d$|R/n*dQ*m%QR/w*mQ4X0UR6u4XQ+O%dR0S+OQ4o0uS7T4o8iR8i7UQ+y&UR0x+yQ4u0zR7X4uQ1W,TS5U1W7fR7f5WQ0c+cW4b0c4d6{8eQ4d0fQ6{4cR8e6|Q+h%xR0i+hQ1j,gR5f1jYrOXst#cQ&m!ZQ+Q%fQ,a&iQ,c&kQ,d&lQ,f&nQ1e,bS1h,g1jR5e1gQ%hpQ&q!_Q&t!aQ&v!bQ&x!cQ'h!tQ+P%eQ+]%rQ+o&OQ,V&dQ,n&sW-_'b'j'k'nQ-f'fQ/m*cQ0^+^S1Z,W,ZQ1r,mQ1s,pQ1t,qQ2Y-^W2[-a-b-e-gQ4Z0_Q4g0lQ4j0pQ5O1QQ5Y1]Q5d1fU5s2Z2^2aQ5v2_Q6w4[Q7P4iQ7Q4kQ7W4tQ7a5PQ7g5XS7v5t5xQ7x5wQ8f6}Q8n7bQ8s7hQ8z7wQ9Y8gQ9_8oQ9c8{R9k9`Q%ryQ'Z!iQ'f!tU+^%s%t%uQ,u&|U-Y'[']'^S-^'b'lQ/d*^S0_+_+`Q1z,wS2W-Z-[Q2_-cQ3v/hQ4[0`Q5o2QQ5r2XQ5w2`R6m3zS$wi;`R*n%RU%Qi%R;`R/v*lQ$viS(k#u+YQ(o#wS)[$c$dQ*Q$xQ*Y${Q*q%WQ*r%XQ*v%]Q.Y:^Q.Z:`Q.[:bQ.x)qS.})w/PQ/R)zQ/S)|Q/T)}Q/]*UQ/b*[Q/t*jQ/u*kh0U+V.T0|2n4{6P7]7|8l9O9^9fQ0p+qQ0r+tQ2q:iQ2r:kQ2s:mQ2t._S3Y:X:YQ3m/^Q3n/_Q3r/aQ4S/|Q4k0qQ4m0tQ6T:qQ6U:sQ6Y:_Q6Z:aQ6[:cQ6a3fQ6h3pQ6l3xQ6r4OQ6t4WQ6v4YQ8R:nQ8S:jQ8T:lQ8]6gQ8a6pQ9Q:rQ9R:tQ9S8XQ9g:wQ9p:xQ;Q;`Q;^;hQ;_;iQ;j;lR;k;mnpOXst!Z#c%f&i&k&l&n,b,g1g1jQ!fPS#eZ#nQ&s!`U'_!o4r7ZQ'u#RQ(x#{Q)i$mS,Z&b&eQ,`&fQ,m&rQ,r&zQ-U'XQ.f(vQ.v)jQ0Q*|Q0X+WQ1c,_Q2U-WQ2l.UQ3a.qQ4Q/zQ4y0}Q5[1_Q5]1`Q5a1bQ5c1dQ5h1lQ6O2oQ6_3^Q7_4|Q7k5^Q7l5_Q7n5bQ8O6SQ8m7`R8w7o#WcOPXZst!Z!`!o#c#n#{%f&b&e&f&i&k&l&n&r&z'X(v*|+W,_,b,g-W.U/z0}1_1`1b1d1g1j1l2o4r4|5^5_5b6S7Z7`7oQ#XWQ#dYQ%juQ%kvS%mw!gS'x#V'{Q(O#YQ(j#tQ(q#xQ(y$OQ(z$PQ({$QQ(|$RQ(}$SQ)O$TQ)P$UQ)Q$VQ)R$WQ)S$XQ)T$YQ)V$[Q)Y$aQ)^$eW)h$m)j.q3^Q+T%lQ+i%yS,x'O1{Q-g'iS-l'y-nQ-q(RQ-s(YQ.^(nQ.d(rQ.h9qQ.j9tQ.k9uQ.l9xQ.{)uQ/}*xQ1v,sQ1y,vQ2Z-`Q2b-tQ2v.bQ2{9yQ2|9zQ2}9{Q3O9|Q3P9}Q3Q:OQ3R:PQ3S:QQ3T:RQ3U:SQ3V:TQ3W:UQ3X.iQ3[:ZQ3]:dQ3b:VQ4T0PQ4]0aQ5n:eQ5t2]Q5y2cQ6V2wQ6W:fQ6]:hQ6^:oQ7U4pQ7s5lQ7w5uQ8Q:pQ8U:uQ8V:vQ8{7yQ9Z8hQ9b8yQ9s#RR;V;cR#ZWR'Q!eY!tQ'V-S0z4uS&|!e,zQ'b!rS'l!u!xS'n!y4wS,w&}'US-c'c'dQ-e'eQ2Q-QR2`-dR(p#wR(s#xQ!fQT-R'V-S]!qQ!r'V-S0z4uQ#o]R'`9rT#jZ%^S#iZ%^S%dm,^U(]#g#h#kS-w(^(_Q-{(`Q0R*}Q2e-xU2f-y-z-|S5{2g2hR7z5|`#]W#V#Y%a'y(S*z-rr#fZm#g#h#k%^(^(_(`*}-x-y-z-|2g2h5|Q1a,^Q1w,tQ5j1oQ7r5kT:}'O*{T#`W%aS#_W%aS'z#V(SS(P#Y*zS,y'O*{T-m'y-rT'T!e%bQ$kfR)o$pT)d$k)eR3`.pT*T$x*VR*]${Q0V+VQ2j.TQ4x0|Q6Q2nQ7^4{Q7}6PQ8j7]Q8|7|Q9]8lQ9e9OQ9j9^R9m9fnqOXst!Z#c%f&i&k&l&n,b,g1g1jQ&c!VR,V&`tmOXst!U!V!Z#c%f&`&i&k&l&n,b,g1g1jR,^&fT%em,^R0v+vR,U&^Q%||R+n%}R+d%wT&g!W&jT&h!W&jT1i,g1j",
  nodeNames: "⚠ ArithOp ArithOp LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 367,
  context: RS,
  nodeProps: [
    ["group", -26, 7, 15, 17, 63, 200, 204, 208, 209, 211, 214, 217, 227, 229, 235, 237, 239, 241, 244, 250, 256, 258, 260, 262, 264, 266, 267, "Statement", -32, 11, 12, 26, 29, 30, 36, 46, 49, 50, 52, 57, 65, 73, 77, 79, 81, 82, 104, 105, 114, 115, 132, 135, 137, 138, 139, 140, 142, 143, 163, 164, 166, "Expression", -23, 25, 27, 31, 35, 37, 39, 167, 169, 171, 172, 174, 175, 176, 178, 179, 180, 182, 183, 184, 194, 196, 198, 199, "Type", -3, 85, 97, 103, "ClassItem"],
    ["openedBy", 32, "InterpolationStart", 51, "[", 55, "{", 70, "(", 144, "JSXStartTag", 156, "JSXStartTag JSXStartCloseTag"],
    ["closedBy", 34, "InterpolationEnd", 45, "]", 56, "}", 71, ")", 145, "JSXSelfCloseEndTag JSXEndTag", 161, "JSXEndTag"]
  ],
  propSources: [_S],
  skippedNodes: [0, 3, 4, 270],
  repeatNodeCount: 33,
  tokenData: "$Fl(CSR!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#8g!R![#:v![!]#Gv!]!^#IS!^!_#J^!_!`#Nu!`!a$#a!a!b$(n!b!c$,m!c!}Er!}#O$-w#O#P$/R#P#Q$4j#Q#R$5t#R#SEr#S#T$7R#T#o$8]#o#p$<m#p#q$=c#q#r$>s#r#s$@P#s$f%Z$f$g+g$g#BYEr#BY#BZ$AZ#BZ$ISEr$IS$I_$AZ$I_$I|Er$I|$I}$Df$I}$JO$Df$JO$JTEr$JT$JU$AZ$JU$KVEr$KV$KW$AZ$KW&FUEr&FU&FV$AZ&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$AZ?HUOEr(n%d_$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$e&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$e&j'|!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU'|!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$e&j'ypOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU'ypOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z(CS+rq$e&j'yp'|!b'o(;dOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z(CS.ST'z#S$e&j'p(;dO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c(CS.n_$e&j'yp'|!b'p(;dOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`/x`$e&j!m$Ip'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S1V`#r$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S2d_#r$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b3l_'x$(n$e&j'|!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k*r4r_$e&j'|!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k)`5vX$e&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q)`6jT$`#t$e&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#t6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y#t7bO$`#t#t7eP;=`<%l6y)`7kP;=`<%l5q*r7w]$`#t$e&j'|!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}%W8uZ'|!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p%W9oU$`#t'|!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}%W:UP;=`<%l8p*r:[P;=`<%l4k#%|:hh$e&j'yp'|!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__US$e&j'yp'|!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]US$e&j'|!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXUS$e&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSUSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWUS'|!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]US$e&j'ypOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWUS'ypOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYUS'yp'|!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S#%|C}i$e&j(c!L^'yp'|!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr#%|EoP;=`<%lCr(CSFRk$e&j'yp'|!b(W!LY'v&;d$X#tOY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$e&j'yp'|!b$X#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv(CSJPP;=`<%lEr%#SJ_`$e&j'yp'|!b#j$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SKl_$e&j#|$Id'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%DfLva(l%<v$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SNW`$e&j#v$Id'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b! c_'{$)`$e&j'ypOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b*Q!!i_$e&j'ypOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b)`!#mX$e&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h#t!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y#t!$oP;=`<%l!$Y)`!$uP;=`<%l!#h*Q!%R]$`#t$e&j'ypOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r$f!&PZ'ypOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z$f!&yU$`#t'ypOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r$f!'`P;=`<%l!%z*Q!'fP;=`<%l!!b(*Q!'t_!i(!b$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'l!)O_!hM|$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h!*[b$e&j'yp'|!b'w#)d#k$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S!+o`$e&j'yp'|!b#h$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&-O!,|`$e&j'yp'|!bl&%`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&C[!.Z_!W&;l$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!/ec$e&j'yp'|!bz'<nOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!0ya$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!2Z_!VMt$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!3eg$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!5Vg$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!6wc$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!8_c$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!9uf$e&j'yp'|!b#i$IdOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpxz!;Zz{#,f{!P!;Z!P!Q#-{!Q!^!;Z!^!_#'Z!_!`#5k!`!a#7Q!a!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z(r!;fb$e&j'yp'|!b!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z(Q!<w`$e&j'|!b!SSOY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eb!Q!^!<n!^!_!GY!_!}!<n!}#O!Ja#O#P!Dj#P#o!<n#o#p!GY#p;'S!<n;'S;=`!Kj<%lO!<n&n!>Q^$e&j!SSOY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@Y!_!}!=y!}#O!Bw#O#P!Dj#P#o!=y#o#p!@Y#p;'S!=y;'S;=`!E[<%lO!=y&n!?Ta$e&j!SSO!^&c!_#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&cS!@_X!SSOY!@YZ!P!@Y!P!Q!@z!Q!}!@Y!}#O!Ac#O#P!Bb#P;'S!@Y;'S;=`!Bq<%lO!@YS!APU!SS#Z#[!@z#]#^!@z#a#b!@z#g#h!@z#i#j!@z#m#n!@zS!AfVOY!AcZ#O!Ac#O#P!A{#P#Q!@Y#Q;'S!Ac;'S;=`!B[<%lO!AcS!BOSOY!AcZ;'S!Ac;'S;=`!B[<%lO!AcS!B_P;=`<%l!AcS!BeSOY!@YZ;'S!@Y;'S;=`!Bq<%lO!@YS!BtP;=`<%l!@Y&n!B|[$e&jOY!BwYZ&cZ!^!Bw!^!_!Ac!_#O!Bw#O#P!Cr#P#Q!=y#Q#o!Bw#o#p!Ac#p;'S!Bw;'S;=`!Dd<%lO!Bw&n!CwX$e&jOY!BwYZ&cZ!^!Bw!^!_!Ac!_#o!Bw#o#p!Ac#p;'S!Bw;'S;=`!Dd<%lO!Bw&n!DgP;=`<%l!Bw&n!DoX$e&jOY!=yYZ&cZ!^!=y!^!_!@Y!_#o!=y#o#p!@Y#p;'S!=y;'S;=`!E[<%lO!=y&n!E_P;=`<%l!=y(Q!Eki$e&j'|!b!SSOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#Z&}#Z#[!Eb#[#]&}#]#^!Eb#^#a&}#a#b!Eb#b#g&}#g#h!Eb#h#i&}#i#j!Eb#j#m&}#m#n!Eb#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!f!GaZ'|!b!SSOY!GYZw!GYwx!@Yx!P!GY!P!Q!HS!Q!}!GY!}#O!Ic#O#P!Bb#P;'S!GY;'S;=`!JZ<%lO!GY!f!HZb'|!b!SSOY'}Zw'}x#O'}#P#Z'}#Z#[!HS#[#]'}#]#^!HS#^#a'}#a#b!HS#b#g'}#g#h!HS#h#i'}#i#j!HS#j#m'}#m#n!HS#n;'S'};'S;=`(f<%lO'}!f!IhX'|!bOY!IcZw!Icwx!Acx#O!Ic#O#P!A{#P#Q!GY#Q;'S!Ic;'S;=`!JT<%lO!Ic!f!JWP;=`<%l!Ic!f!J^P;=`<%l!GY(Q!Jh^$e&j'|!bOY!JaYZ&cZw!Jawx!Bwx!^!Ja!^!_!Ic!_#O!Ja#O#P!Cr#P#Q!<n#Q#o!Ja#o#p!Ic#p;'S!Ja;'S;=`!Kd<%lO!Ja(Q!KgP;=`<%l!Ja(Q!KmP;=`<%l!<n'`!Ky`$e&j'yp!SSOY!KpYZ&cZr!Kprs!=ys!P!Kp!P!Q!L{!Q!^!Kp!^!_!Ns!_!}!Kp!}#O##z#O#P!Dj#P#o!Kp#o#p!Ns#p;'S!Kp;'S;=`#%T<%lO!Kp'`!MUi$e&j'yp!SSOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#Z(r#Z#[!L{#[#](r#]#^!L{#^#a(r#a#b!L{#b#g(r#g#h!L{#h#i(r#i#j!L{#j#m(r#m#n!L{#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rt!NzZ'yp!SSOY!NsZr!Nsrs!@Ys!P!Ns!P!Q# m!Q!}!Ns!}#O#!|#O#P!Bb#P;'S!Ns;'S;=`##t<%lO!Nst# tb'yp!SSOY)rZr)rs#O)r#P#Z)r#Z#[# m#[#])r#]#^# m#^#a)r#a#b# m#b#g)r#g#h# m#h#i)r#i#j# m#j#m)r#m#n# m#n;'S)r;'S;=`*Z<%lO)rt##RX'ypOY#!|Zr#!|rs!Acs#O#!|#O#P!A{#P#Q!Ns#Q;'S#!|;'S;=`##n<%lO#!|t##qP;=`<%l#!|t##wP;=`<%l!Ns'`#$R^$e&j'ypOY##zYZ&cZr##zrs!Bws!^##z!^!_#!|!_#O##z#O#P!Cr#P#Q!Kp#Q#o##z#o#p#!|#p;'S##z;'S;=`#$}<%lO##z'`#%QP;=`<%l##z'`#%WP;=`<%l!Kp(r#%fk$e&j'yp'|!b!SSOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#Z%Z#Z#[#%Z#[#]%Z#]#^#%Z#^#a%Z#a#b#%Z#b#g%Z#g#h#%Z#h#i%Z#i#j#%Z#j#m%Z#m#n#%Z#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#W#'d]'yp'|!b!SSOY#'ZZr#'Zrs!GYsw#'Zwx!Nsx!P#'Z!P!Q#(]!Q!}#'Z!}#O#)w#O#P!Bb#P;'S#'Z;'S;=`#*w<%lO#'Z#W#(fe'yp'|!b!SSOY*gZr*grs'}sw*gwx)rx#O*g#P#Z*g#Z#[#(]#[#]*g#]#^#(]#^#a*g#a#b#(]#b#g*g#g#h#(]#h#i*g#i#j#(]#j#m*g#m#n#(]#n;'S*g;'S;=`+Z<%lO*g#W#*OZ'yp'|!bOY#)wZr#)wrs!Icsw#)wwx#!|x#O#)w#O#P!A{#P#Q#'Z#Q;'S#)w;'S;=`#*q<%lO#)w#W#*tP;=`<%l#)w#W#*zP;=`<%l#'Z(r#+W`$e&j'yp'|!bOY#*}YZ&cZr#*}rs!Jasw#*}wx##zx!^#*}!^!_#)w!_#O#*}#O#P!Cr#P#Q!;Z#Q#o#*}#o#p#)w#p;'S#*};'S;=`#,Y<%lO#*}(r#,]P;=`<%l#*}(r#,cP;=`<%l!;Z(CS#,sb$e&j'yp'|!b'q(;d!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z(CS#.W_$e&j'yp'|!bR(;dOY#-{YZ&cZr#-{rs#/Vsw#-{wx#2gx!^#-{!^!_#4f!_#O#-{#O#P#0X#P#o#-{#o#p#4f#p;'S#-{;'S;=`#5e<%lO#-{(Bb#/`]$e&j'|!bR(;dOY#/VYZ&cZw#/Vwx#0Xx!^#/V!^!_#1j!_#O#/V#O#P#0X#P#o#/V#o#p#1j#p;'S#/V;'S;=`#2a<%lO#/V(AO#0`X$e&jR(;dOY#0XYZ&cZ!^#0X!^!_#0{!_#o#0X#o#p#0{#p;'S#0X;'S;=`#1d<%lO#0X(;d#1QSR(;dOY#0{Z;'S#0{;'S;=`#1^<%lO#0{(;d#1aP;=`<%l#0{(AO#1gP;=`<%l#0X(<v#1qW'|!bR(;dOY#1jZw#1jwx#0{x#O#1j#O#P#0{#P;'S#1j;'S;=`#2Z<%lO#1j(<v#2^P;=`<%l#1j(Bb#2dP;=`<%l#/V(Ap#2p]$e&j'ypR(;dOY#2gYZ&cZr#2grs#0Xs!^#2g!^!_#3i!_#O#2g#O#P#0X#P#o#2g#o#p#3i#p;'S#2g;'S;=`#4`<%lO#2g(<U#3pW'ypR(;dOY#3iZr#3irs#0{s#O#3i#O#P#0{#P;'S#3i;'S;=`#4Y<%lO#3i(<U#4]P;=`<%l#3i(Ap#4cP;=`<%l#2g(=h#4oY'yp'|!bR(;dOY#4fZr#4frs#1jsw#4fwx#3ix#O#4f#O#P#0{#P;'S#4f;'S;=`#5_<%lO#4f(=h#5bP;=`<%l#4f(CS#5hP;=`<%l#-{%#W#5xb$e&j#|$Id'yp'|!b!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z+h#7_b$U#t$e&j'yp'|!b!SSOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Kpx!P!;Z!P!Q#%Z!Q!^!;Z!^!_#'Z!_!}!;Z!}#O#*}#O#P!Dj#P#o!;Z#o#p#'Z#p;'S!;Z;'S;=`#,`<%lO!;Z$/l#8rp$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#:v![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#:v#S#U%Z#U#V#>Q#V#X%Z#X#Y!4|#Y#b%Z#b#c#<v#c#d#AY#d#l%Z#l#m#D[#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#;Rk$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#:v![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#:v#S#X%Z#X#Y!4|#Y#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#=R_$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#>Zd$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#?i!R!S#?i!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#?i#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#?tf$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#?i!R!S#?i!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#?i#S#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#Acc$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#Bn!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#Bn#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#Bye$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#Bn!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#Bn#S#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#Deg$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#E|![!^%Z!^!_*g!_!c%Z!c!i#E|!i#O%Z#O#P&c#P#R%Z#R#S#E|#S#T%Z#T#Z#E|#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#FXi$e&j'yp'|!bm$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#E|![!^%Z!^!_*g!_!c%Z!c!i#E|!i#O%Z#O#P&c#P#R%Z#R#S#E|#S#T%Z#T#Z#E|#Z#b%Z#b#c#<v#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#HT_!b$b$e&j#z%<f'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#I___l$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS#Jm^(P!*v!f'.r'yp'|!b$V)d(pSOY*gZr*grs'}sw*gwx)rx!P*g!P!Q#Ki!Q!^*g!^!_#L_!_!`#NP!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#KrX$g&j'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#LhZ#l$Id'yp'|!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#MZ!`#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#MdX#|$Id'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#NYX#m$Id'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Gh$ Qa#Y%?x$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$!V!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#W$!b_#e$Ih$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh$#paeBf#m$Id$b#|$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$$u!`!a$&P!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$%Q_#m$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$&[a#l$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$'a!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$'l`#l$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h$(yc(d$Ip$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P$*U!P!^%Z!^!_*g!_!a%Z!a!b$+`!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+`$*a_{'#p$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$+k`$e&j#w$Id'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&^$,x_!y!Ln$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(@^$.S_}(8n$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/WZ$e&jO!^$/y!^!_$0a!_#i$/y#i#j$0f#j#l$/y#l#m$2X#m#o$/y#o#p$0a#p;'S$/y;'S;=`$4d<%lO$/y(n$0QT]#S$e&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0fO]#S(n$0k[$e&jO!Q&c!Q![$1a![!^&c!_!c&c!c!i$1a!i#T&c#T#Z$1a#Z#o&c#o#p$3w#p;'S&c;'S;=`&w<%lO&c(n$1fZ$e&jO!Q&c!Q![$2X![!^&c!_!c&c!c!i$2X!i#T&c#T#Z$2X#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2^Z$e&jO!Q&c!Q![$3P![!^&c!_!c&c!c!i$3P!i#T&c#T#Z$3P#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3UZ$e&jO!Q&c!Q![$/y![!^&c!_!c&c!c!i$/y!i#T&c#T#Z$/y#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$3zR!Q![$4T!c!i$4T#T#Z$4T#S$4WS!Q![$4T!c!i$4T#T#Z$4T#q#r$0a(n$4gP;=`<%l$/y!2r$4u_!T!+S$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$6P`#t$Id$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&,v$7^_$e&j'yp'|!b(T&%WOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$8lk$e&j'yp'|!b(W!LY'v&;d$Z#tOY%ZYZ&cZr%Zrs&}st%Ztu$8]uw%Zwx(rx}%Z}!O$:a!O!Q%Z!Q![$8]![!^%Z!^!_*g!_!c%Z!c!}$8]!}#O%Z#O#P&c#P#R%Z#R#S$8]#S#T%Z#T#o$8]#o#p*g#p$g%Z$g;'S$8];'S;=`$<g<%lO$8]+d$:lk$e&j'yp'|!b$Z#tOY%ZYZ&cZr%Zrs&}st%Ztu$:auw%Zwx(rx}%Z}!O$:a!O!Q%Z!Q![$:a![!^%Z!^!_*g!_!c%Z!c!}$:a!}#O%Z#O#P&c#P#R%Z#R#S$:a#S#T%Z#T#o$:a#o#p*g#p$g%Z$g;'S$:a;'S;=`$<a<%lO$:a+d$<dP;=`<%l$:a(CS$<jP;=`<%l$8]!5p$<vX!Y!3l'yp'|!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Df$=na(k%<v$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+`#q;'S%Z;'S;=`+a<%lO%Z%#`$?Q_!X$I`p`$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(r$@[_!nS$e&j'yp'|!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$Al|$e&j'yp'|!b'o(;d(W!LY'v&;d$X#tOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$AZ#BZ$ISEr$IS$I_$AZ$I_$JTEr$JT$JU$AZ$JU$KVEr$KV$KW$AZ$KW&FUEr&FU&FV$AZ&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$AZ?HUOEr(CS$Dwk$e&j'yp'|!b'p(;d(W!LY'v&;d$X#tOY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [WS, DS, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, MS, new Vr("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOr~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!P~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(V~~", 141, 328), new Vr("j~RQYZXz{^~^O's~~aP!P!Qd~iO't~~", 25, 310)],
  topRules: { Script: [0, 5], SingleExpression: [1, 268], SingleClassItem: [2, 269] },
  dialects: { jsx: 12801, ts: 12803 },
  dynamicPrecedences: { 67: 1, 77: 1, 79: 1, 164: 1, 192: 1 },
  specialized: [{ term: 314, get: (n) => ES[n] || -1 }, { term: 330, get: (n) => US[n] || -1 }, { term: 68, get: (n) => BS[n] || -1 }],
  tokenPrec: 12827
}), jf = [
  /* @__PURE__ */ xe("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ xe("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ xe("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ xe("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ xe("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ xe(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ xe("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ xe(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ xe(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ xe('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ xe('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], jS = /* @__PURE__ */ jf.concat([
  /* @__PURE__ */ xe("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ xe("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ xe("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), $a = /* @__PURE__ */ new yp(), Lf = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function Oi(n) {
  return (e, t) => {
    let i = e.node.getChild("VariableDefinition");
    return i && t(i, n), !0;
  };
}
const LS = ["FunctionDeclaration"], qS = {
  FunctionDeclaration: /* @__PURE__ */ Oi("function"),
  ClassDeclaration: /* @__PURE__ */ Oi("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Oi("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Oi("type"),
  NamespaceDeclaration: /* @__PURE__ */ Oi("namespace"),
  VariableDefinition(n, e) {
    n.matchContext(LS) || e(n, "variable");
  },
  TypeDefinition(n, e) {
    e(n, "type");
  },
  __proto__: null
};
function qf(n, e) {
  let t = $a.get(e);
  if (t)
    return t;
  let i = [], s = !0;
  function r(o, l) {
    let a = n.sliceString(o.from, o.to);
    i.push({ label: a, type: l });
  }
  return e.cursor(se.IncludeAnonymous).iterate((o) => {
    if (s)
      s = !1;
    else if (o.name) {
      let l = qS[o.name];
      if (l && l(o, r) || Lf.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of qf(n, o.node))
        i.push(l);
      return !1;
    }
  }), $a.set(e, i), i;
}
const va = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, zf = [
  "TemplateString",
  "String",
  "RegExp",
  "LineComment",
  "BlockComment",
  "VariableDefinition",
  "TypeDefinition",
  "Label",
  "PropertyDefinition",
  "PropertyName",
  "PrivatePropertyDefinition",
  "PrivatePropertyName",
  ".",
  "?."
];
function zS(n) {
  let e = oe(n.state).resolveInner(n.pos, -1);
  if (zf.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && va.test(n.state.sliceDoc(e.from, e.to));
  if (!t && !n.explicit)
    return null;
  let i = [];
  for (let s = e; s; s = s.parent)
    Lf.has(s.name) && (i = i.concat(qf(n.state.doc, s)));
  return {
    options: i,
    from: t ? e.from : n.pos,
    validFor: va
  };
}
const At = /* @__PURE__ */ qn.define({
  name: "javascript",
  parser: /* @__PURE__ */ IS.configure({
    props: [
      /* @__PURE__ */ mc.add({
        IfStatement: /* @__PURE__ */ Es({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Es({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: Bp,
        SwitchBody: (n) => {
          let e = n.textAfter, t = /^\s*\}/.test(e), i = /^\s*(case|default)\b/.test(e);
          return n.baseIndent + (t ? 0 : i ? 1 : 2) * n.unit;
        },
        Block: /* @__PURE__ */ Up({ closing: "}" }),
        ArrowFunction: (n) => n.baseIndent + n.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ Es({ except: /^{/ }),
        JSXElement(n) {
          let e = /^\s*<\//.test(n.textAfter);
          return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
        },
        JSXEscape(n) {
          let e = /\s*\}/.test(n.textAfter);
          return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(n) {
          return n.column(n.node.from) + n.unit;
        }
      }),
      /* @__PURE__ */ yc.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": qp,
        BlockComment(n) {
          return { from: n.from + 2, to: n.to - 2 };
        }
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
}), Vf = {
  test: (n) => /^JSX/.test(n.name),
  facet: /* @__PURE__ */ pc({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, VS = /* @__PURE__ */ At.configure({ dialect: "ts" }, "typescript"), NS = /* @__PURE__ */ At.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ Oo.add((n) => n.isTop ? [Vf] : void 0)]
}), GS = /* @__PURE__ */ At.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ Oo.add((n) => n.isTop ? [Vf] : void 0)]
}, "typescript");
let Nf = (n) => ({ label: n, type: "keyword" });
const Gf = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Nf), FS = /* @__PURE__ */ Gf.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(Nf));
function HS(n = {}) {
  let e = n.jsx ? n.typescript ? GS : NS : n.typescript ? VS : At, t = n.typescript ? jS.concat(FS) : jf.concat(Gf);
  return new Ap(e, [
    At.data.of({
      autocomplete: l0(zf, Qf(t))
    }),
    At.data.of({
      autocomplete: zS
    }),
    n.jsx ? e1 : []
  ]);
}
function JS(n) {
  for (; ; ) {
    if (n.name == "JSXOpenTag" || n.name == "JSXSelfClosingTag" || n.name == "JSXFragmentTag")
      return n;
    if (n.name == "JSXEscape" || !n.parent)
      return null;
    n = n.parent;
  }
}
function Pa(n, e, t = n.length) {
  for (let i = e == null ? void 0 : e.firstChild; i; i = i.nextSibling)
    if (i.name == "JSXIdentifier" || i.name == "JSXBuiltin" || i.name == "JSXNamespacedName" || i.name == "JSXMemberExpression")
      return n.sliceString(i.from, Math.min(i.to, t));
  return "";
}
const KS = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), e1 = /* @__PURE__ */ v.inputHandler.of((n, e, t, i, s) => {
  if ((KS ? n.composing : n.compositionStarted) || n.state.readOnly || e != t || i != ">" && i != "/" || !At.isActiveAt(n.state, e, -1))
    return !1;
  let r = s(), { state: o } = r, l = o.changeByRange((a) => {
    var h;
    let { head: c } = a, f = oe(o).resolveInner(c - 1, -1), u;
    if (f.name == "JSXStartTag" && (f = f.parent), !(o.doc.sliceString(c - 1, c) != i || f.name == "JSXAttributeValue" && f.to > c)) {
      if (i == ">" && f.name == "JSXFragmentTag")
        return { range: a, changes: { from: c, insert: "</>" } };
      if (i == "/" && f.name == "JSXStartCloseTag") {
        let d = f.parent, O = d.parent;
        if (O && d.from == c - 2 && ((u = Pa(o.doc, O.firstChild, c)) || ((h = O.firstChild) === null || h === void 0 ? void 0 : h.name) == "JSXFragmentTag")) {
          let m = `${u}>`;
          return { range: b.cursor(c + m.length, -1), changes: { from: c, insert: m } };
        }
      } else if (i == ">") {
        let d = JS(f);
        if (d && !/^\/?>|^<\//.test(o.doc.sliceString(c, c + 2)) && (u = Pa(o.doc, d, c)))
          return { range: a, changes: { from: c, insert: `</${u}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (n.dispatch([
    r,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), t1 = "#e5c07b", Za = "#e06c75", i1 = "#56b6c2", n1 = "#ffffff", Xn = "#abb2bf", Nr = "#7d8799", s1 = "#61afef", r1 = "#98c379", Ca = "#d19a66", o1 = "#c678dd", l1 = "#21252b", Ta = "#2c313a", Ya = "#282c34", Fs = "#353a42", a1 = "#3E4451", Aa = "#528bff", h1 = /* @__PURE__ */ v.theme({
  "&": {
    color: Xn,
    backgroundColor: Ya
  },
  ".cm-content": {
    caretColor: Aa
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: Aa },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: a1 },
  ".cm-panels": { backgroundColor: l1, color: Xn },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: Ya,
    color: Nr,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: Ta
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: Fs
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: Fs,
    borderBottomColor: Fs
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: Ta,
      color: Xn
    }
  }
}, { dark: !0 }), c1 = /* @__PURE__ */ Gi.define([
  {
    tag: p.keyword,
    color: o1
  },
  {
    tag: [p.name, p.deleted, p.character, p.propertyName, p.macroName],
    color: Za
  },
  {
    tag: [/* @__PURE__ */ p.function(p.variableName), p.labelName],
    color: s1
  },
  {
    tag: [p.color, /* @__PURE__ */ p.constant(p.name), /* @__PURE__ */ p.standard(p.name)],
    color: Ca
  },
  {
    tag: [/* @__PURE__ */ p.definition(p.name), p.separator],
    color: Xn
  },
  {
    tag: [p.typeName, p.className, p.number, p.changed, p.annotation, p.modifier, p.self, p.namespace],
    color: t1
  },
  {
    tag: [p.operator, p.operatorKeyword, p.url, p.escape, p.regexp, p.link, /* @__PURE__ */ p.special(p.string)],
    color: i1
  },
  {
    tag: [p.meta, p.comment],
    color: Nr
  },
  {
    tag: p.strong,
    fontWeight: "bold"
  },
  {
    tag: p.emphasis,
    fontStyle: "italic"
  },
  {
    tag: p.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: p.link,
    color: Nr,
    textDecoration: "underline"
  },
  {
    tag: p.heading,
    fontWeight: "bold",
    color: Za
  },
  {
    tag: [p.atom, p.bool, /* @__PURE__ */ p.special(p.variableName)],
    color: Ca
  },
  {
    tag: [p.processingInstruction, p.string, p.inserted],
    color: r1
  },
  {
    tag: p.invalid,
    color: n1
  }
]), f1 = [h1, /* @__PURE__ */ Zc(c1)];
function u1(n) {
  let e, t, i, s, r, o;
  return {
    c() {
      e = wn("div"), t = wn("div"), t.innerHTML = '<div class="scm-loading__spinner svelte-1pprwg0"></div> <p class="scm-loading__text svelte-1pprwg0">Loading editor...</p>', i = tu(), s = wn("pre"), r = Fr(
        /*value*/
        n[0]
      ), jt(t, "class", "scm-waiting__loading scm-loading svelte-1pprwg0"), jt(s, "class", "scm-pre cm-editor svelte-1pprwg0"), jt(e, "class", o = "scm-waiting " + /*classes*/
      n[1] + " svelte-1pprwg0");
    },
    m(l, a) {
      Gr(l, e, a), Ki(e, t), Ki(e, i), Ki(e, s), Ki(s, r);
    },
    p(l, a) {
      a & /*value*/
      1 && su(
        r,
        /*value*/
        l[0]
      ), a & /*classes*/
      2 && o !== (o = "scm-waiting " + /*classes*/
      l[1] + " svelte-1pprwg0") && jt(e, "class", o);
    },
    d(l) {
      l && as(e);
    }
  };
}
function d1(n) {
  let e, t;
  return {
    c() {
      e = wn("div"), jt(e, "class", t = "uikit-w-full uikit-h-full uikit-min-h-[300px] codemirror-wrapper uikit-shadow-lg uikit-p-3 " + /*classes*/
      n[1] + " svelte-1pprwg0");
    },
    m(i, s) {
      Gr(i, e, s), n[16](e);
    },
    p(i, s) {
      s & /*classes*/
      2 && t !== (t = "uikit-w-full uikit-h-full uikit-min-h-[300px] codemirror-wrapper uikit-shadow-lg uikit-p-3 " + /*classes*/
      i[1] + " svelte-1pprwg0") && jt(e, "class", t);
    },
    d(i) {
      i && as(e), n[16](null);
    }
  };
}
function O1(n) {
  let e;
  function t(r, o) {
    return (
      /*is_browser*/
      r[3] ? d1 : u1
    );
  }
  let s = t(n)(n);
  return {
    c() {
      s.c(), e = iu();
    },
    m(r, o) {
      s.m(r, o), Gr(r, e, o);
    },
    p(r, [o]) {
      s.p(r, o);
    },
    i: vi,
    o: vi,
    d(r) {
      r && as(e), s.d(r);
    }
  };
}
function p1(n, e, t) {
  let i, { class: s = "" } = e, { value: r = "" } = e, { theme: o = void 0 } = e, { extensions: l = [] } = e, { useTab: a = !0 } = e, { tabSize: h = 2 } = e, { styles: c = void 0 } = e, { lineWrapping: f = !1 } = e, { editable: u = !0 } = e, { readonly: d = !1 } = e, { placeholder: O = void 0 } = e;
  function m() {
    return r;
  }
  const g = (T, N, E) => {
    let I;
    return function(Be, ...ct) {
      const Ie = Be;
      I ? clearTimeout(I) : E && T.apply(Ie, ct), I = setTimeout(Ff, N || 100);
      function Ff() {
        E || T.apply(Ie, ct), I = null;
      }
    };
  }, S = typeof window < "u", w = au();
  let $, y, x = !1, Q = !1, C = !0, M = !0;
  ou(() => t(14, y = X())), lu(() => y == null ? void 0 : y.destroy());
  function X() {
    const T = g(F, 300);
    return new v({
      parent: $ || document.body,
      state: ee(r),
      dispatch(N) {
        y.update([N]), !x && N.docChanged && T();
      }
    });
  }
  function R() {
    if (C) {
      C = !1;
      return;
    }
    y.dispatch({
      effects: A.reconfigure.of(i)
    });
  }
  function B(T) {
    if (M) {
      M = !1;
      return;
    }
    if (Q) {
      Q = !1;
      return;
    }
    x = !0, y.setState(ee(T)), x = !1;
  }
  function F() {
    const T = y.state.doc.toString();
    T !== r && (Q = !0, t(0, r = T), w("change", r));
  }
  function ee(T) {
    return D.create({
      doc: T ?? void 0,
      extensions: [...i]
    });
  }
  function de(T, N, E, I, Ue, Be, ct) {
    const Ie = [
      Vi.of(" ".repeat(N)),
      v.editable.of(Ue),
      D.readOnly.of(Be),
      HS()
    ];
    return T && Ie.push(qi.of([Am])), I && Ie.push(BO(I)), E && Ie.push(v.lineWrapping), Ie;
  }
  function te(T, N) {
    const E = [
      v.theme({
        "cm-editor": { height: "100%" },
        ...N || {}
      })
    ];
    switch (T) {
      case "one-dark":
        E.push(f1);
        break;
      default:
        T && typeof lang != "string" && E.push(T);
    }
    return E;
  }
  function le(T) {
    Hs[T ? "unshift" : "push"](() => {
      $ = T, t(2, $);
    });
  }
  return n.$$set = (T) => {
    "class" in T && t(1, s = T.class), "value" in T && t(0, r = T.value), "theme" in T && t(4, o = T.theme), "extensions" in T && t(5, l = T.extensions), "useTab" in T && t(6, a = T.useTab), "tabSize" in T && t(7, h = T.tabSize), "styles" in T && t(8, c = T.styles), "lineWrapping" in T && t(9, f = T.lineWrapping), "editable" in T && t(10, u = T.editable), "readonly" in T && t(11, d = T.readonly), "placeholder" in T && t(12, O = T.placeholder);
  }, n.$$.update = () => {
    n.$$.dirty & /*useTab, tabSize, lineWrapping, placeholder, editable, readonly, theme, styles, extensions*/
    8176 && t(15, i = [
      uS,
      ...de(
        // basic,
        a,
        h,
        f,
        O,
        u,
        d
      ),
      ...te(o, c),
      ...l
    ]), n.$$.dirty & /*view, value*/
    16385 && y && B(r), n.$$.dirty & /*view, state_extensions*/
    49152 && y && i && R();
  }, [
    r,
    s,
    $,
    S,
    o,
    l,
    a,
    h,
    c,
    f,
    u,
    d,
    O,
    m,
    y,
    i,
    le
  ];
}
class b1 extends bu {
  constructor(e) {
    super(), Su(this, e, p1, O1, Kf, {
      class: 1,
      value: 0,
      theme: 4,
      extensions: 5,
      useTab: 6,
      tabSize: 7,
      styles: 8,
      lineWrapping: 9,
      editable: 10,
      readonly: 11,
      placeholder: 12,
      getvalue: 13
    });
  }
  get getvalue() {
    return this.$$.ctx[13];
  }
}
export {
  b1 as CodeEditor
};
