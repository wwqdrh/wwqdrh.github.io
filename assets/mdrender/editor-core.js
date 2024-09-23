class q {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = Zt(this, e, t);
    let n = [];
    return this.decompose(0, e, n, 2), i.length && i.decompose(0, i.length, n, 3), this.decompose(t, this.length, n, 1), Xe.from(n, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = Zt(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), Xe.from(i, t - e);
  }
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new vi(this), r = new vi(e);
    for (let o = t, l = t; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  iter(e = 1) {
    return new vi(this, e);
  }
  iterRange(e, t = this.length) {
    return new fa(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let n = this.line(e).from;
      i = this.iterRange(n, Math.max(n, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new ua(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {
  }
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length != 1 || e[0] ? e.length <= 32 ? new Z(e) : Xe.from(Z.split(e, [])) : q.empty;
  }
}
class Z extends q {
  constructor(e, t = function(i) {
    let n = -1;
    for (let r of i)
      n += r.length + 1;
    return n;
  }(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = n + o.length;
      if ((t ? i : l) >= e)
        return new Ic(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let r = e <= 0 && t >= this.length ? this : new Z(ro(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (1 & n) {
      let o = i.pop(), l = mn(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new Z(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new Z(l.slice(0, a)), new Z(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof Z))
      return super.replace(e, t, i);
    [e, t] = Zt(this, e, t);
    let n = mn(this.text, mn(i.text, ro(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return n.length <= 32 ? new Z(n, r) : Xe.from(Z.split(n, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Zt(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (n += i), e < a && t > r && (n += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], n = -1;
    for (let r of e)
      i.push(r), n += r.length + 1, i.length == 32 && (t.push(new Z(i, n)), i = [], n = -1);
    return n > -1 && t.push(new Z(i, n)), t;
  }
}
class Xe extends q {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = n + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, n) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let h = n & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Zt(this, e, t), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[n] = a, new Xe(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Zt(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (n += i), e < a && t > o && (n += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Xe))
      return 0;
    let i = 0, [n, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, r += t) {
      if (n == o || r == l)
        return i;
      let a = this.children[n], h = e.children[r];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new Z(d, t);
    }
    let n = Math.max(32, i >> 5), r = n << 1, o = n >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof Xe)
        for (let g of d.children)
          f(g);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof Z && a && (p = c[c.length - 1]) instanceof Z && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new Z(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : Xe.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new Xe(l, t);
  }
}
function mn(s, e, t = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let l = s[r], a = n + l.length;
    a >= t && (a > i && (l = l.slice(0, i - n)), n < t && (l = l.slice(t - n)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), n = a + 1;
  }
  return e;
}
function ro(s, e, t) {
  return mn(s, [""], e, t);
}
q.empty = new Z([""], 0);
class vi {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Z ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, l = n instanceof Z ? n.text.length : n.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((1 & r) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof Z) {
        let a = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = n.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Z ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class fa {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new vi(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: n } = this.cursor.next(e);
    return this.pos += (n.length + e) * t, this.value = n.length <= i ? n : t < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class ua {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: n } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (q.prototype[Symbol.iterator] = function() {
  return this.iter();
}, vi.prototype[Symbol.iterator] = fa.prototype[Symbol.iterator] = ua.prototype[Symbol.iterator] = function() {
  return this;
});
class Ic {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.number = i, this.text = n;
  }
  get length() {
    return this.to - this.from;
  }
}
function Zt(s, e, t) {
  return [e = Math.max(0, Math.min(s.length, e)), Math.max(e, Math.min(s.length, t))];
}
let Kt = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((s) => s ? parseInt(s, 36) : 1);
for (let s = 1; s < Kt.length; s++)
  Kt[s] += Kt[s - 1];
function Vc(s) {
  for (let e = 1; e < Kt.length; e += 2)
    if (Kt[e] > s)
      return Kt[e - 1] <= s;
  return !1;
}
function oo(s) {
  return s >= 127462 && s <= 127487;
}
const lo = 8205;
function de(s, e, t = !0, i = !0) {
  return (t ? da : Hc)(s, e, i);
}
function da(s, e, t) {
  if (e == s.length)
    return e;
  e && pa(s.charCodeAt(e)) && ma(s.charCodeAt(e - 1)) && e--;
  let i = he(s, e);
  for (e += Ne(i); e < s.length; ) {
    let n = he(s, e);
    if (i == lo || n == lo || t && Vc(n))
      e += Ne(n), i = n;
    else {
      if (!oo(n))
        break;
      {
        let r = 0, o = e - 2;
        for (; o >= 0 && oo(he(s, o)); )
          r++, o -= 2;
        if (r % 2 == 0)
          break;
        e += 2;
      }
    }
  }
  return e;
}
function Hc(s, e, t) {
  for (; e > 0; ) {
    let i = da(s, e - 2, t);
    if (i < e)
      return i;
    e--;
  }
  return 0;
}
function pa(s) {
  return s >= 56320 && s < 57344;
}
function ma(s) {
  return s >= 55296 && s < 56320;
}
function he(s, e) {
  let t = s.charCodeAt(e);
  if (!ma(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return pa(i) ? i - 56320 + (t - 55296 << 10) + 65536 : t;
}
function Dr(s) {
  return s <= 65535 ? String.fromCharCode(s) : (s -= 65536, String.fromCharCode(55296 + (s >> 10), 56320 + (1023 & s)));
}
function Ne(s) {
  return s < 65536 ? 1 : 2;
}
const Ps = /\r\n?|\n/;
var fe = ((s) => (s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s))(fe || (fe = {}));
class et {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let t = 0, i = 0, n = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, n, r), n += r) : n += o, i += r;
    }
  }
  iterChangedRanges(e, t = !1) {
    Ns(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      n < 0 ? e.push(i, n) : e.push(n, i);
    }
    return new et(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : ga(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : Is(this, e, t);
  }
  mapPos(e, t = -1, i = fe.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > e)
          return r + (e - n);
        r += l;
      } else {
        if (i != fe.Simple && h >= e && (i == fe.TrackDel && n < e && h > e || i == fe.TrackBefore && n < e || i == fe.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == n || t < 0 ? r : r + a;
        r += a;
      }
      n = h;
    }
    if (e > n)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);
    return r;
  }
  touchesRange(e, t = e) {
    for (let i = 0, n = 0; i < this.sections.length && n <= t; ) {
      let r = n + this.sections[i++];
      if (this.sections[i++] >= 0 && n <= t && r >= e)
        return !(n < e && r > t) || "cover";
      n = r;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      e += (e ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new et(e);
  }
  static create(e) {
    return new et(e);
  }
}
class se extends et {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Ns(this, (t, i, n, r, o) => e = e.replace(n, n + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return Is(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < t.length; n += 2) {
      let o = t[n], l = t[n + 1];
      if (l >= 0) {
        t[n] = l, t[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(q.empty);
        i.push(o ? e.slice(r, r + o) : q.empty);
      }
      r += o;
    }
    return new se(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : ga(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : Is(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    Ns(this, e, t);
  }
  get desc() {
    return et.create(this.sections);
  }
  filter(e) {
    let t = [], i = [], n = [], r = new Ci(this);
    e:
      for (let o = 0, l = 0; ; ) {
        let a = o == e.length ? 1e9 : e[o++];
        for (; l < a || l == a && r.len == 0; ) {
          if (r.done)
            break e;
          let c = Math.min(r.len, a - l);
          ve(n, c, -1);
          let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
          ve(t, c, f), f > 0 && ut(i, t, r.text), r.forward(c), l += c;
        }
        let h = e[o++];
        for (; l < h; ) {
          if (r.done)
            break e;
          let c = Math.min(r.len, h - l);
          ve(t, c, -1), ve(n, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
        }
      }
    return { changes: new se(t, i), filtered: et.create(n) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], n = this.sections[t + 1];
      n < 0 ? e.push(i) : n == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let n = [], r = [], o = 0, l = null;
    function a(h = !1) {
      if (!h && !n.length)
        return;
      o < t && ve(n, t - o, -1);
      let c = new se(n, r);
      l = l ? l.compose(c.map(l)) : c, n = [], r = [], o = 0;
    }
    return function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof se) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? q.of(d.split(i || Ps)) : d : q.empty, g = p.length;
        if (f == u && g == 0)
          return;
        f < o && a(), f > o && ve(n, f - o, -1), ve(n, u - f, g), ut(r, n, p), o = u;
      }
    }(e), a(!l), l;
  }
  static empty(e) {
    return new se(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(q.empty);
          i[n] = q.of(r.slice(1)), t.push(r[0], i[n].length);
        }
      }
    }
    return new se(t, i);
  }
  static createSet(e, t) {
    return new se(e, t);
  }
}
function ve(s, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && t <= 0 && t == s[n + 1] ? s[n] += e : e == 0 && s[n] == 0 ? s[n + 1] += t : i ? (s[n] += e, s[n + 1] += t) : s.push(e, t);
}
function ut(s, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(t);
  else {
    for (; s.length < i; )
      s.push(q.empty);
    s.push(t);
  }
}
function Ns(s, e, t) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let l = s.sections[o++], a = s.sections[o++];
    if (a < 0)
      n += l, r += l;
    else {
      let h = n, c = r, f = q.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(t || o == s.sections.length || s.sections[o + 1] < 0); )
        l = s.sections[o++], a = s.sections[o++];
      e(n, h, r, c, f), n = h, r = c;
    }
  }
}
function Is(s, e, t, i = !1) {
  let n = [], r = i ? [] : null, o = new Ci(s), l = new Ci(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ve(n, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (ve(n, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (ve(n, 0, o.ins), r && ut(r, n, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else {
      if (!(o.ins >= 0)) {
        if (o.done && l.done)
          return r ? se.createSet(n, r) : et.create(n);
        throw new Error("Mismatched change set lengths");
      }
      {
        let h = 0, c = o.len;
        for (; c; )
          if (l.ins == -1) {
            let f = Math.min(c, l.len);
            h += f, c -= f, l.forward(f);
          } else {
            if (!(l.ins == 0 && l.len < c))
              break;
            c -= l.len, l.next();
          }
        ve(n, h, a < o.i ? o.ins : 0), r && a < o.i && ut(r, n, o.text), a = o.i, o.forward(o.len - c);
      }
    }
}
function ga(s, e, t = !1) {
  let i = [], n = t ? [] : null, r = new Ci(s), o = new Ci(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return n ? se.createSet(i, n) : et.create(i);
    if (r.ins == 0)
      ve(i, r.len, 0, l), r.next();
    else if (o.len != 0 || o.done) {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ve(i, a, c, l), n && c && ut(n, i, o.text);
        } else
          o.ins == -1 ? (ve(i, r.off ? 0 : r.len, a, l), n && ut(n, i, r.textBit(a))) : (ve(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), n && !o.off && ut(n, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    } else
      ve(i, 0, o.ins, l), n && ut(n, i, o.text), o.next();
  }
}
class Ci {
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
    return t >= e.length ? q.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? q.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Dt {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  get anchor() {
    return 32 & this.flags ? this.to : this.from;
  }
  get head() {
    return 32 & this.flags ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0;
  }
  get bidiLevel() {
    let e = 7 & this.flags;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let i, n;
    return this.empty ? i = n = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new Dt(i, n, this.flags);
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return k.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return k.range(this.anchor, i);
  }
  eq(e, t = !1) {
    return !(this.anchor != e.anchor || this.head != e.head || t && this.empty && this.assoc != e.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return k.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new Dt(e, t, i);
  }
}
class k {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  map(e, t = -1) {
    return e.empty ? this : k.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new k([this.main], 0);
  }
  addRange(e, t = !0) {
    return k.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, k.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new k(e.ranges.map((t) => Dt.fromJSON(t)), e.main);
  }
  static single(e, t = e) {
    return new k([k.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < e.length; n++) {
      let r = e[n];
      if (r.empty ? r.from <= i : r.from < i)
        return k.normalized(e.slice(), t);
      i = r.to;
    }
    return new k(e, t);
  }
  static cursor(e, t = 0, i, n) {
    return Dt.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n ?? 16777215) << 6);
  }
  static range(e, t, i, n) {
    let r = (i ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return t < e ? Dt.create(t, e, 48 | r) : Dt.create(e, t, (t > e ? 8 : 0) | r);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((n, r) => n.from - r.from), t = e.indexOf(i);
    for (let n = 1; n < e.length; n++) {
      let r = e[n], o = e[n - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        n <= t && t--, e.splice(--n, 2, r.anchor > r.head ? k.range(a, l) : k.range(l, a));
      }
    }
    return new k(e, t);
  }
}
function va(s, e) {
  for (let t of s.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Tr = 0;
class R {
  constructor(e, t, i, n, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = Tr++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new R(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Er), !!e.static, e.enables);
  }
  of(e) {
    return new gn([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new gn(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new gn(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Er(s, e) {
  return s == e || s.length == e.length && s.every((t, i) => t === e[i]);
}
class gn {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = Tr++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? h = !0 : 1 & ((t = e[f.id]) !== null && t !== void 0 ? t : 1) || c.push(e[f.id]);
    return { create: (f) => (f.values[o] = i(f), 1), update(f, u) {
      if (a && u.docChanged || h && (u.docChanged || u.selection) || Vs(f, c)) {
        let d = i(f);
        if (l ? !ao(d, f.values[o], n) : !n(d, f.values[o]))
          return f.values[o] = d, 1;
      }
      return 0;
    }, reconfigure: (f, u) => {
      let d, p = u.config.address[r];
      if (p != null) {
        let g = Cn(u, p);
        if (this.dependencies.every((m) => m instanceof R ? u.facet(m) === f.facet(m) : !(m instanceof oe) || u.field(m, !1) == f.field(m, !1)) || (l ? ao(d = i(f), g, n) : n(d = i(f), g)))
          return f.values[o] = g, 0;
      } else
        d = i(f);
      return f.values[o] = d, 1;
    } };
  }
}
function ao(s, e, t) {
  if (s.length != e.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!t(s[i], e[i]))
      return !1;
  return !0;
}
function Vs(s, e) {
  let t = !1;
  for (let i of e)
    1 & wi(s, i) && (t = !0);
  return t;
}
function Wc(s, e, t) {
  let i = t.map((a) => s[a.id]), n = t.map((a) => a.type), r = i.filter((a) => !(1 & a)), o = s[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Cn(a, i[c]);
      if (n[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return e.combine(h);
  }
  return { create(a) {
    for (let h of i)
      wi(a, h);
    return a.values[o] = l(a), 1;
  }, update(a, h) {
    if (!Vs(a, r))
      return 0;
    let c = l(a);
    return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
  }, reconfigure(a, h) {
    let c = Vs(a, i), f = h.config.facets[e.id], u = h.facet(e);
    if (f && !c && Er(t, f))
      return a.values[o] = u, 0;
    let d = l(a);
    return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
  } };
}
const ho = R.define({ static: !0 });
class oe {
  constructor(e, t, i, n, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  static define(e) {
    let t = new oe(Tr++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(ho).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return { create: (i) => (i.values[t] = this.create(i), 1), update: (i, n) => {
      let r = i.values[t], o = this.updateF(r, n);
      return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
    }, reconfigure: (i, n) => n.config.address[this.id] != null ? (i.values[t] = n.field(this), 0) : (i.values[t] = this.create(i), 1) };
  }
  init(e) {
    return [this, ho.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Fc = 4, zc = 3, Hs = 2, qc = 1;
function oi(s) {
  return (e) => new wa(e, s);
}
const Ct = { highest: oi(0), high: oi(qc), default: oi(Hs), low: oi(zc), lowest: oi(Fc) };
class wa {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class Yn {
  of(e) {
    return new Ws(this, e);
  }
  reconfigure(e) {
    return Yn.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Ws {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Sn {
  constructor(e, t, i, n, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let n = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of function(d, p, g) {
      let m = [[], [], [], [], []], v = /* @__PURE__ */ new Map();
      function w(y, b) {
        let x = v.get(y);
        if (x != null) {
          if (x <= b)
            return;
          let A = m[x].indexOf(y);
          A > -1 && m[x].splice(A, 1), y instanceof Ws && g.delete(y.compartment);
        }
        if (v.set(y, b), Array.isArray(y))
          for (let A of y)
            w(A, b);
        else if (y instanceof Ws) {
          if (g.has(y.compartment))
            throw new RangeError("Duplicate use of compartment in extensions");
          let A = p.get(y.compartment) || y.inner;
          g.set(y.compartment, A), w(A, b);
        } else if (y instanceof wa)
          w(y.inner, y.prec);
        else if (y instanceof oe)
          m[b].push(y), y.provides && w(y.provides, b);
        else if (y instanceof gn)
          m[b].push(y), y.facet.extensions && w(y.facet.extensions, Hs);
        else {
          let A = y.extension;
          if (!A)
            throw new Error(`Unrecognized extension value in extension set (${y}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
          w(A, b);
        }
      }
      return w(d, Hs), m.reduce((y, b) => y.concat(b));
    }(e, t, o))
      u instanceof oe ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of n)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, g = c && c[u] || [];
      if (d.every((m) => m.type == 0))
        if (l[p.id] = a.length << 1 | 1, Er(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((v) => v.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = h.length << 1, h.push((v) => m.dynamicSlot(v)));
        l[p.id] = h.length << 1, h.push((m) => Wc(m, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Sn(e, o, f, l, a, r);
  }
}
function wi(s, e) {
  if (1 & e)
    return 2;
  let t = e >> 1, i = s.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (2 & i)
    return i;
  s.status[t] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[t]);
  return s.status[t] = 2 | n;
}
function Cn(s, e) {
  return 1 & e ? s.config.staticValues[e >> 1] : s.values[e >> 1];
}
const ya = R.define(), Fs = R.define({ combine: (s) => s.some((e) => e), static: !0 }), ba = R.define({ combine: (s) => s.length ? s[0] : void 0, static: !0 }), xa = R.define(), ka = R.define(), Sa = R.define(), Ca = R.define({ combine: (s) => !!s.length && s[0] });
class rt {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static define() {
    return new jc();
  }
}
class jc {
  of(e) {
    return new rt(this, e);
  }
}
class Kc {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new H(this, e);
  }
}
class H {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new H(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new Kc(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let n of e) {
      let r = n.map(t);
      r && i.push(r);
    }
    return i;
  }
}
H.reconfigure = H.define(), H.appendConfig = H.define();
class te {
  constructor(e, t, i, n, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && va(i, t.newLength), r.some((l) => l.type == te.time) || (this.annotations = r.concat(te.time.of(Date.now())));
  }
  static create(e, t, i, n, r, o) {
    return new te(e, t, i, n, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(te.userEvent);
    return !(!t || !(t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
function $c(s, e) {
  let t = [];
  for (let i = 0, n = 0; ; ) {
    let r, o;
    if (i < s.length && (n == e.length || e[n] >= s[i]))
      r = s[i++], o = s[i++];
    else {
      if (!(n < e.length))
        return t;
      r = e[n++], o = e[n++];
    }
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function co(s, e, t) {
  var i;
  let n, r, o;
  return t ? (n = e.changes, r = se.empty(e.changes.length), o = s.changes.compose(e.changes)) : (n = e.changes.map(s.changes), r = s.changes.mapDesc(e.changes, !0), o = s.changes.compose(n)), { changes: o, selection: e.selection ? e.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n), effects: H.mapEffects(s.effects, n).concat(H.mapEffects(e.effects, r)), annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations, scrollIntoView: s.scrollIntoView || e.scrollIntoView };
}
function os(s, e, t) {
  let i = e.selection, n = $t(e.annotations);
  return e.userEvent && (n = n.concat(te.userEvent.of(e.userEvent))), { changes: e.changes instanceof se ? e.changes : se.of(e.changes || [], t, s.facet(ba)), selection: i && (i instanceof k ? i : k.single(i.anchor, i.head)), effects: $t(e.effects), annotations: n, scrollIntoView: !!e.scrollIntoView };
}
function Aa(s, e, t) {
  let i = os(s, e.length ? e[0] : {}, s.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = co(i, os(s, e[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = te.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return function(r) {
    let o = r.startState, l = o.facet(Sa), a = r;
    for (let h = l.length - 1; h >= 0; h--) {
      let c = l[h](r);
      c && Object.keys(c).length && (a = co(a, os(o, c, r.changes.newLength), !0));
    }
    return a == r ? r : te.create(o, r.changes, r.selection, a.effects, a.annotations, a.scrollIntoView);
  }(t ? function(r) {
    let o = r.startState, l = !0;
    for (let h of o.facet(xa)) {
      let c = h(r);
      if (c === !1) {
        l = !1;
        break;
      }
      Array.isArray(c) && (l = l === !0 ? c : $c(l, c));
    }
    if (l !== !0) {
      let h, c;
      if (l === !1)
        c = r.changes.invertedDesc, h = se.empty(o.doc.length);
      else {
        let f = r.changes.filter(l);
        h = f.changes, c = f.filtered.mapDesc(f.changes).invertedDesc;
      }
      r = te.create(o, h, r.selection && r.selection.map(c), H.mapEffects(r.effects, c), r.annotations, r.scrollIntoView);
    }
    let a = o.facet(ka);
    for (let h = a.length - 1; h >= 0; h--) {
      let c = a[h](r);
      r = c instanceof te ? c : Array.isArray(c) && c.length == 1 && c[0] instanceof te ? c[0] : Aa(o, $t(c), !1);
    }
    return r;
  }(n) : n);
}
te.time = rt.define(), te.userEvent = rt.define(), te.addToHistory = rt.define(), te.remote = rt.define();
const Uc = [];
function $t(s) {
  return s == null ? Uc : Array.isArray(s) ? s : [s];
}
var J = ((s) => (s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s))(J || (J = {}));
const Gc = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let zs;
try {
  zs = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Yc(s) {
  return (e) => {
    if (!/\S/.test(e))
      return J.Space;
    if (function(t) {
      if (zs)
        return zs.test(t);
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if (/\w/.test(n) || n > "" && (n.toUpperCase() != n.toLowerCase() || Gc.test(n)))
          return !0;
      }
      return !1;
    }(e))
      return J.Word;
    for (let t = 0; t < s.length; t++)
      if (e.indexOf(s[t]) > -1)
        return J.Word;
    return J.Other;
  };
}
class z {
  constructor(e, t, i, n, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      wi(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i != null)
      return wi(this, i), Cn(this, i);
    if (t)
      throw new RangeError("Field is not present in this state");
  }
  update(...e) {
    return Aa(this, e, !0);
  }
  applyTransaction(e) {
    let t, i = this.config, { base: n, compartments: r } = i;
    for (let l of e.effects)
      l.is(Yn.reconfigure) ? (i && (r = /* @__PURE__ */ new Map(), i.compartments.forEach((a, h) => r.set(h, a)), i = null), r.set(l.value.compartment, l.value.extension)) : l.is(H.reconfigure) ? (i = null, n = l.value) : l.is(H.appendConfig) && (i = null, n = $t(n).concat(l.value));
    i ? t = e.startState.values.slice() : (i = Sn.resolve(n, r, this), t = new z(i, this.doc, this.selection, i.dynamicSlots.map(() => null), (l, a) => a.reconfigure(l, this), null).values);
    let o = e.startState.facet(Fs) ? e.newSelection : e.newSelection.asSingle();
    new z(i, e.newDoc, o, t, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({ changes: { from: t.from, to: t.to, insert: e }, range: k.cursor(t.from + e.length) }));
  }
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), r = [i.range], o = $t(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(n);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = n.mapDesc(h, !0);
      r.push(a.range.map(f)), n = n.compose(c), o = H.mapEffects(o, c).concat(H.mapEffects($t(a.effects), f));
    }
    return { changes: n, selection: k.create(r, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof se ? e : se.of(e, this.doc.length, this.facet(z.lineSeparator));
  }
  toText(e) {
    return q.of(e.split(this.facet(z.lineSeparator) || Ps));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (wi(this, t), Cn(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e)
      for (let i in e) {
        let n = e[i];
        n instanceof oe && this.config.address[n.id] != null && (t[i] = n.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], l = e[r];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return z.create({ doc: e.doc, selection: k.fromJSON(e.selection), extensions: t.extensions ? n.concat([t.extensions]) : n });
  }
  static create(e = {}) {
    let t = Sn.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof q ? e.doc : q.of((e.doc || "").split(t.staticFacet(z.lineSeparator) || Ps)), n = e.selection ? e.selection instanceof k ? e.selection : k.single(e.selection.anchor, e.selection.head) : k.single(0);
    return va(n, i.length), t.staticFacet(Fs) || (n = n.asSingle()), new z(t, i, n, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  get tabSize() {
    return this.facet(z.tabSize);
  }
  get lineBreak() {
    return this.facet(z.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Ca);
  }
  phrase(e, ...t) {
    for (let i of this.facet(z.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  languageDataAt(e, t, i = -1) {
    let n = [];
    for (let r of this.facet(ya))
      for (let o of r(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && n.push(o[e]);
    return n;
  }
  charCategorizer(e) {
    return Yc(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: i, length: n } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = de(t, o, !1);
      if (r(t.slice(a, o)) != J.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = de(t, l);
      if (r(t.slice(l, a)) != J.Word)
        break;
      l = a;
    }
    return o == l ? null : k.range(o + i, l + i);
  }
}
function it(s, e, t = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0)) {
        if (!Object.hasOwnProperty.call(t, r))
          throw new Error("Config merge conflict for field " + r);
        i[r] = t[r](l, o);
      }
    }
  for (let n in e)
    i[n] === void 0 && (i[n] = e[n]);
  return i;
}
z.allowMultipleSelections = Fs, z.tabSize = R.define({ combine: (s) => s.length ? s[0] : 4 }), z.lineSeparator = ba, z.readOnly = Ca, z.phrases = R.define({ compare(s, e) {
  let t = Object.keys(s), i = Object.keys(e);
  return t.length == i.length && t.every((n) => s[n] == e[n]);
} }), z.languageData = ya, z.changeFilter = xa, z.transactionFilter = ka, z.transactionExtender = Sa, Yn.reconfigure = H.define();
class Tt {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return qs.create(e, t, this);
  }
}
Tt.prototype.startSide = Tt.prototype.endSide = 0, Tt.prototype.point = !1, Tt.prototype.mapMode = fe.TrackDel;
let qs = class Ma {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  static create(e, t, i) {
    return new Ma(e, t, i);
  }
};
function ls(s, e) {
  return s.from - e.from || s.value.startSide - e.value.startSide;
}
class Rr {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let o = n, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, n) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], n = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h, c, f = this.value[a], u = this.from[a] + e, d = this.to[a] + e;
      if (u == d) {
        let p = t.mapPos(u, f.startSide, f.mapMode);
        if (p == null || (h = c = p, f.startSide != f.endSide && (c = t.mapPos(u, f.endSide), c < h)))
          continue;
      } else if (h = t.mapPos(u, f.startSide), c = t.mapPos(d, f.endSide), h > c || h == c && f.startSide > 0 && f.endSide <= 0)
        continue;
      (c - h || f.endSide - f.startSide) < 0 || (o < 0 && (o = h), f.point && (l = Math.max(l, c - h)), i.push(f), n.push(h - o), r.push(c - o));
    }
    return { mapped: i.length ? new Rr(n, r, i, l) : null, pos: o };
  }
}
class F {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  static create(e, t, i, n) {
    return new F(e, t, i, n);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(ls)), this.isEmpty)
      return t.length ? F.of(t) : this;
    let l = new Oa(this, null, -1).goto(0), a = 0, h = [], c = new wt();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(qs.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? F.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: r }));
  }
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === !1)
        n = Math.max(n, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && (n = Math.max(n, c.maxPoint), t.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new F(i, t, r || F.empty, n);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], o = this.chunk[n];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return Ai.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Ai.from(e).goto(t);
  }
  static compare(e, t, i, n, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = fo(o, l, i), h = new li(o, a, r), c = new li(l, a, r);
    i.iterGaps((f, u, d) => uo(h, f, c, u, d, n)), i.empty && i.length == 0 && uo(h, 0, c, 0, 0, n);
  }
  static eq(e, t, i = 0, n) {
    n == null && (n = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = fo(r, o), a = new li(r, l, 0).goto(i), h = new li(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !js(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), h.next();
    }
  }
  static spans(e, t, i, n, r = -1) {
    let o = new li(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        n.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else
        h > l && (n.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  static of(e, t = !1) {
    let i = new wt();
    for (let n of e instanceof qs ? [e] : t ? function(r) {
      if (r.length > 1)
        for (let o = r[0], l = 1; l < r.length; l++) {
          let a = r[l];
          if (ls(o, a) > 0)
            return r.slice().sort(ls);
          o = a;
        }
      return r;
    }(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length)
      return F.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != F.empty; n = n.nextLayer)
        t = new F(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
}
F.empty = new F([], [], null, -1), F.empty.nextLayer = F.empty;
class wt {
  finishChunk(e) {
    this.chunks.push(new Rr(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new wt())).add(e, t, i);
  }
  addInner(e, t, i) {
    let n = e - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return !(n < 0) && (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  finish() {
    return this.finishInner(F.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = F.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function fo(s, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l == null || (t ? t.mapPos(l) : l) != r.chunkPos[o] || t != null && t.touchesRange(l, l + r.chunk[o].length) || n.add(r.chunk[o]);
    }
  return n;
}
class Oa {
  constructor(e, t, i, n = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = n;
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
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < e || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; ) {
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      }
      {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
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
class Ai {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new Oa(o, t, i, r));
    return n.length == 1 ? n[0] : new Ai(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      as(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      as(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), as(this.heap, 0);
    }
  }
}
function as(s, e) {
  for (let t = s[e]; ; ) {
    let i = 1 + (e << 1);
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), t.compare(n) < 0)
      break;
    s[i] = t, s[e] = n, e = i;
  }
}
class li {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ai.from(e, t, i);
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
    $i(this.active, e), $i(this.activeTo, e), $i(this.activeRank, e), this.minActive = po(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    Ui(this.active, t, i), Ui(this.activeTo, t, n), Ui(this.activeRank, t, r), e && Ui(e, t, this.cursor.from), this.minActive = po(this.active, this.activeTo);
  }
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > e) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && $i(i, n);
      } else {
        if (!this.cursor.value) {
          this.to = this.endSide = 1e9;
          break;
        }
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        }
        {
          let r = this.cursor.value;
          if (r.point) {
            if (!(t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
              this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
              break;
            }
            this.cursor.next();
          } else
            this.addActive(i), this.cursor.next();
        }
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < e; n--)
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
function uo(s, e, t, i, n, r) {
  s.goto(e), t.goto(i);
  let o = i + n, l = i, a = i - e;
  for (; ; ) {
    let h = s.to + a - t.to || s.endSide - t.endSide, c = h < 0 ? s.to + a : t.to, f = Math.min(c, o);
    if (s.point || t.point ? s.point && t.point && (s.point == t.point || s.point.eq(t.point)) && js(s.activeForPoint(s.to), t.activeForPoint(t.to)) || r.comparePoint(l, f, s.point, t.point) : f > l && !js(s.active, t.active) && r.compareRange(l, f, s.active, t.active), c > o)
      break;
    l = c, h <= 0 && s.next(), h >= 0 && t.next();
  }
}
function js(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (s[t] != e[t] && !s[t].eq(e[t]))
      return !1;
  return !0;
}
function $i(s, e) {
  for (let t = e, i = s.length - 1; t < i; t++)
    s[t] = s[t + 1];
  s.pop();
}
function Ui(s, e, t) {
  for (let i = s.length - 1; i >= e; i--)
    s[i + 1] = s[i];
  s[e] = t;
}
function po(s, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || s[n].endSide - s[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
function ni(s, e, t = s.length) {
  let i = 0;
  for (let n = 0; n < t; )
    s.charCodeAt(n) == 9 ? (i += e - i % e, n++) : (i++, n = de(s, n));
  return i;
}
function Ks(s, e, t, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= e)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? t - r % t : 1, n = de(s, n);
  }
  return i === !0 ? -1 : s.length;
}
const mo = typeof Symbol > "u" ? "__ͼ" : Symbol.for("ͼ"), $s = typeof Symbol > "u" ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"), go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class yt {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null)
        return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)), p, a);
        else if (p && typeof p == "object") {
          if (!f)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(n(d), p, c, u);
        } else
          p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((!i || f || h ? o : o.map(i)).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e)
      r(n(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = go[mo] || 1;
    return go[mo] = e + 1, "ͼ" + e.toString(36);
  }
  static mount(e, t, i) {
    let n = e[$s], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new Xc(e, r), n.mount(Array.isArray(t) ? t : [t], e);
  }
}
let vo = /* @__PURE__ */ new Map();
class Xc {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = vo.get(i);
      if (r)
        return e[$s] = r;
      this.sheet = new n.CSSStyleSheet(), vo.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[$s] = this;
  }
  mount(e, t) {
    let i = this.sheet, n = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i)
          for (let h = 0; h < l.rules.length; h++)
            i.insertRule(l.rules[h], n++);
      } else {
        for (; r < a; )
          n += this.modules[r++].rules.length;
        n += l.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
for (var bt = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, Mi = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, Jc = typeof navigator < "u" && /Mac/.test(navigator.platform), Qc = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), ae = 0; ae < 10; ae++)
  bt[48 + ae] = bt[96 + ae] = String(ae);
for (ae = 1; ae <= 24; ae++)
  bt[ae + 111] = "F" + ae;
for (ae = 65; ae <= 90; ae++)
  bt[ae] = String.fromCharCode(ae + 32), Mi[ae] = String.fromCharCode(ae);
for (var hs in bt)
  Mi.hasOwnProperty(hs) || (Mi[hs] = bt[hs]);
function An(s) {
  let e;
  return e = s.nodeType == 11 ? s.getSelection ? s : s.ownerDocument : s, e.getSelection();
}
function Us(s, e) {
  return !!e && (s == e || s.contains(e.nodeType != 1 ? e.parentNode : e));
}
function vn(s, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Us(s, e.anchorNode);
  } catch {
    return !1;
  }
}
function _t(s) {
  return s.nodeType == 3 ? Lt(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function yi(s, e, t, i) {
  return !!t && (wo(s, e, t, i, -1) || wo(s, e, t, i, 1));
}
function Bt(s) {
  for (var e = 0; ; e++)
    if (!(s = s.previousSibling))
      return e;
}
function Mn(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function wo(s, e, t, i, n) {
  for (; ; ) {
    if (s == t && e == i)
      return !0;
    if (e == (n < 0 ? 0 : ot(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = Bt(s) + (n < 0 ? 0 : 1), s = r;
    } else {
      if (s.nodeType != 1 || (s = s.childNodes[e + (n < 0 ? -1 : 0)]).nodeType == 1 && s.contentEditable == "false")
        return !1;
      e = n < 0 ? ot(s) : 0;
    }
  }
}
function ot(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function Xn(s, e) {
  let t = e ? s.left : s.right;
  return { left: t, right: t, top: s.top, bottom: s.bottom };
}
function Zc(s) {
  let e = s.visualViewport;
  return e ? { left: 0, right: e.width, top: 0, bottom: e.height } : { left: 0, right: s.innerWidth, top: 0, bottom: s.innerHeight };
}
function Da(s, e) {
  let t = e.width / s.offsetWidth, i = e.height / s.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - s.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - s.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
class _c {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? ot(t) : 0), i, Math.min(e.focusOffset, i ? ot(i) : 0));
  }
  set(e, t, i, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = n;
  }
}
let yo, Vt = null;
function Ta(s) {
  if (s.setActive)
    return s.setActive();
  if (Vt)
    return s.focus(Vt);
  let e = [];
  for (let t = s; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (s.focus(Vt == null ? { get preventScroll() {
    return Vt = { preventScroll: !0 }, !0;
  } } : void 0), !Vt) {
    Vt = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], n = e[t++], r = e[t++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
function Lt(s, e, t = e) {
  let i = yo || (yo = document.createRange());
  return i.setEnd(s, t), i.setStart(s, e), i;
}
function Ut(s, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, s.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function Ea(s) {
  for (; s.attributes.length; )
    s.removeAttributeNode(s.attributes[0]);
}
function Ra(s) {
  return s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function Ba(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = ot(t);
    } else {
      if (!t.parentNode || Mn(t))
        return null;
      i = Bt(t), t = t.parentNode;
    }
  }
}
function La(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else {
      if (!t.parentNode || Mn(t))
        return null;
      i = Bt(t) + 1, t = t.parentNode;
    }
  }
}
class we {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new we(e.parentNode, Bt(e), t);
  }
  static after(e, t) {
    return new we(e.parentNode, Bt(e) + 1, t);
  }
}
const Br = [];
class $ {
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
    if (2 & this.flags) {
      let i, n = this.dom, r = null;
      for (let o of this.children) {
        if (7 & o.flags) {
          if (!o.dom && (i = r ? r.nextSibling : n.firstChild)) {
            let l = $.get(i);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(i);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (i = r ? r.nextSibling : n.firstChild, t && !t.written && t.node == n && i != o.dom && (t.written = !0), o.dom.parentNode == n)
          for (; i && i != o.dom; )
            i = bo(i);
        else
          n.insertBefore(o.dom, i);
        r = o.dom;
      }
      for (i = r ? r.nextSibling : n.firstChild, i && t && t.node == n && (t.written = !0); i; )
        i = bo(i);
    } else if (1 & this.flags)
      for (let i of this.children)
        7 & i.flags && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let n = ot(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let r = e.parentNode;
        if (r == this.dom)
          break;
        n == 0 && r.firstChild != r.lastChild && (n = e == r.firstChild ? -1 : 1), e = r;
      }
      i = n < 0 ? e : e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !$.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let n = 0, r = 0; ; n++) {
      let o = this.children[n];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let n = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let f = this.children[a], u = h + f.length;
      if (h < e && u > t)
        return f.domBoundsAround(e, t, h);
      if (u >= e && n == -1 && (n = a, r = h), h > t && f.dom.parentNode == this.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return { from: r, to: l < 0 ? i + this.length : l, startDOM: (n ? this.children[n - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), 1 & t.flags)
        return;
      t.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, 7 & this.flags && this.markParentsDirty(!0));
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
  replaceChildren(e, t, i = Br) {
    this.markDirty();
    for (let n = e; n < t; n++) {
      let r = this.children[n];
      r.parent == this && i.indexOf(r) < 0 && r.destroy();
    }
    this.children.splice(e, t - e, ...i);
    for (let n = 0; n < i.length; n++)
      i[n].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new Pa(this.children, e, this.children.length);
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
  merge(e, t, i, n, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !(8 & (this.flags | e.flags));
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
}
function bo(s) {
  let e = s.nextSibling;
  return s.parentNode.removeChild(s), e;
}
$.prototype.breakAfter = 0;
class Pa {
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
function Na(s, e, t, i, n, r, o, l, a) {
  let { children: h } = s, c = h.length ? h[e] : null, f = r.length ? r[r.length - 1] : null, u = f ? f.breakAfter : o;
  if (!(e == i && c && !o && !u && r.length < 2 && c.merge(t, n, r.length ? f : null, t == 0, l, a))) {
    if (i < h.length) {
      let d = h[i];
      d && (n < d.length || d.breakAfter && (f != null && f.breakAfter)) ? (e == i && (d = d.split(n), n = 0), !u && f && d.merge(0, n, f, !0, 0, a) ? r[r.length - 1] = d : ((n || d.children.length && !d.children[0].length) && d.merge(0, n, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (f ? f.breakAfter = 1 : o = 1), i++;
    }
    for (c && (c.breakAfter = o, t > 0 && (!o && r.length && c.merge(t, c.length, r[0], !1, l, 0) ? c.breakAfter = r.shift().breakAfter : (t < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(t, c.length, null, !1, l, 0), e++)); e < i && r.length; )
      if (h[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else {
        if (!h[e].become(r[0]))
          break;
        e++, r.shift(), l = r.length ? 0 : a;
      }
    !r.length && e && i < h.length && !h[e - 1].breakAfter && h[i].merge(0, 0, h[e - 1], !1, l, a) && e--, (e < i || r.length) && s.replaceChildren(e, i, r);
  }
}
function Ia(s, e, t, i, n, r) {
  let o = s.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: h, off: c } = o.findPos(e, -1), f = e - t;
  for (let u of i)
    f += u.length;
  s.length += f, Na(s, h, c, l, a, i, 0, n, r);
}
let Ee = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Gs = typeof document < "u" ? document : { documentElement: { style: {} } };
const Ys = /Edge\/(\d+)/.exec(Ee.userAgent), Va = /MSIE \d/.test(Ee.userAgent), Xs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ee.userAgent), Jn = !!(Va || Xs || Ys), xo = !Jn && /gecko\/(\d+)/i.test(Ee.userAgent), cs = !Jn && /Chrome\/(\d+)/.exec(Ee.userAgent), ko = "webkitFontSmoothing" in Gs.documentElement.style, Ha = !Jn && /Apple Computer/.test(Ee.vendor), So = Ha && (/Mobile\/\w+/.test(Ee.userAgent) || Ee.maxTouchPoints > 2);
var B = { mac: So || /Mac/.test(Ee.platform), windows: /Win/.test(Ee.platform), linux: /Linux|X11/.test(Ee.platform), ie: Jn, ie_version: Va ? Gs.documentMode || 6 : Xs ? +Xs[1] : Ys ? +Ys[1] : 0, gecko: xo, gecko_version: xo ? +(/Firefox\/(\d+)/.exec(Ee.userAgent) || [0, 0])[1] : 0, chrome: !!cs, chrome_version: cs ? +cs[1] : 0, ios: So, android: /Android\b/.test(Ee.userAgent), webkit: ko, safari: Ha, webkit_version: ko ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0, tabSize: Gs.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
class ze extends $ {
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
    return !(8 & this.flags || i && (!(i instanceof ze) || this.length - (t - e) + i.length > 256 || 8 & i.flags)) && (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new ze(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= 8 & this.flags, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new we(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return function(i, n, r) {
      let o = i.nodeValue.length;
      n > o && (n = o);
      let l = n, a = n, h = 0;
      n == 0 && r < 0 || n == o && r >= 0 ? B.chrome || B.gecko || (n ? (l--, h = 1) : a < o && (a++, h = -1)) : r < 0 ? l-- : a < o && a++;
      let c = Lt(i, l, a).getClientRects();
      if (!c.length)
        return null;
      let f = c[(h ? h < 0 : r >= 0) ? 0 : c.length - 1];
      return B.safari && !h && f.width == 0 && (f = Array.prototype.find.call(c, (u) => u.width) || f), h ? Xn(f, h < 0) : f || null;
    }(this.dom, e, t);
  }
}
class lt extends $ {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let n of t)
      n.setParent(this);
  }
  setAttrs(e) {
    if (Ea(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !(8 & (this.flags | e.flags));
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, n, r, o) {
    return (!i || !(!(i instanceof lt && i.mark.eq(this.mark)) || e && r <= 0 || t < this.length && o <= 0)) && (Ia(this, e, t, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], i = 0, n = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), n < 0 && i >= e && (n = r), i = a, r++;
    }
    let o = this.length - e;
    return this.length = e, n > -1 && (this.children.length = n, this.markDirty()), new lt(this.mark, t, o);
  }
  domAtPos(e) {
    return Wa(this, e);
  }
  coordsAt(e, t) {
    return za(this, e, t);
  }
}
class dt extends $ {
  static create(e, t, i) {
    return new dt(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = dt.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    this.dom && this.widget.updateDOM(this.dom, e) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, n, r, o) {
    return !(i && (!(i instanceof dt && this.widget.compare(i.widget)) || e > 0 && r <= 0 || t < this.length && o <= 0)) && (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof dt && e.side == this.side && this.widget.constructor == e.widget.constructor && (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0);
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return q.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, n = this.posAtStart;
    return i ? i.slice(n, n + this.length) : q.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? we.before(this.dom) : we.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let n = this.dom.getClientRects(), r = null;
    if (!n.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? n.length - 1 : 0; r = n[l], !(e > 0 ? l == 0 : l == n.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Xn(r, !o);
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
class ei extends $ {
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
    return e instanceof ei && e.side == this.side;
  }
  split() {
    return new ei(this.side);
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
    return this.side > 0 ? we.before(this.dom) : we.after(this.dom);
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
    return q.empty;
  }
  get isHidden() {
    return !0;
  }
}
function Wa(s, e) {
  let t = s.dom, { children: i } = s, n = 0;
  for (let r = 0; n < i.length; n++) {
    let o = i[n], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - r);
      if (e <= r)
        break;
      r = l;
    }
  }
  for (let r = n; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let r = n; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new we(t, 0);
}
function Fa(s, e, t) {
  let i, { children: n } = s;
  t > 0 && e instanceof lt && n.length && (i = n[n.length - 1]) instanceof lt && i.mark.eq(e.mark) ? Fa(i, e.children[0], t - 1) : (n.push(e), e.setParent(s)), s.length += e.length;
}
function za(s, e, t) {
  let i = null, n = -1, r = null, o = -1;
  (function a(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f], p = u + d.length;
      p >= c && (d.children.length ? a(d, c - u) : (!r || r.isHidden && t > 0) && (p > c || u == p && d.getSide() > 0) ? (r = d, o = c - u) : (u < c || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, n = c - u)), u = p;
    }
  })(s, e);
  let l = (t < 0 ? i : r) || i || r;
  return l ? l.coordsAt(Math.max(0, l == i ? n : o), t) : function(a) {
    let h = a.dom.lastChild;
    if (!h)
      return a.dom.getBoundingClientRect();
    let c = _t(h);
    return c[c.length - 1] || null;
  }(s);
}
function Js(s, e) {
  for (let t in s)
    t == "class" && e.class ? e.class += " " + s.class : t == "style" && e.style ? e.style += ";" + s.style : e[t] = s[t];
  return e;
}
ze.prototype.children = dt.prototype.children = ei.prototype.children = Br;
const Co = /* @__PURE__ */ Object.create(null);
function Lr(s, e, t) {
  if (s == e)
    return !0;
  s || (s = Co), e || (e = Co);
  let i = Object.keys(s), n = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != n.length - (t && n.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != t && (n.indexOf(r) == -1 || s[r] !== e[r]))
      return !1;
  return !0;
}
function Qs(s, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? s.style.cssText = t[n] : s.setAttribute(n, t[n]));
  return i;
}
function ef(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < s.attributes.length; t++) {
    let i = s.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class ne extends $ {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, t, i, n, r, o) {
    if (i) {
      if (!(i instanceof ne))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return n && this.setDeco(i ? i.attrs : null), Ia(this, e, t, i ? i.children.slice() : [], r, o), !0;
  }
  split(e) {
    let t = new ne();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: n } = this.childPos(e);
    n && (t.append(this.children[i].split(n), 0), this.children[i].merge(n, this.children[i].length, null, !1, 0, 0), i++);
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
    Lr(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    Fa(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = Js(t, this.attrs || {})), i && (this.attrs = Js({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return Wa(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? 4 & this.flags && (Ea(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Qs(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let n = this.dom.lastChild;
    for (; n && $.get(n) instanceof lt; )
      n = n.lastChild;
    if (!(n && this.length && (n.nodeName == "BR" || ((i = $.get(n)) === null || i === void 0 ? void 0 : i.isEditable) != 0 || B.ios && this.children.some((r) => r instanceof ze)))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e, t = 0;
    for (let i of this.children) {
      if (!(i instanceof ze) || /[^ -~]/.test(i.text))
        return null;
      let n = _t(i.dom);
      if (n.length != 1)
        return null;
      t += n[0].width, e = n[0].height;
    }
    return t ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t / this.length, textHeight: e } : null;
  }
  coordsAt(e, t) {
    let i = za(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: n } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - n.lineHeight) < 2 && n.textHeight < r) {
        let o = (r - n.textHeight) / 2;
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
    for (let i = 0, n = 0; i < e.children.length; i++) {
      let r = e.children[i], o = n + r.length;
      if (o >= t) {
        if (r instanceof ne)
          return r;
        if (o > t)
          break;
      }
      n = o + r.breakAfter;
    }
    return null;
  }
}
class mt extends $ {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, n, r, o) {
    return !(i && (!(i instanceof mt && this.widget.compare(i.widget)) || e > 0 && r <= 0 || t < this.length && o <= 0)) && (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? we.before(this.dom) : we.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new mt(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return Br;
  }
  sync(e) {
    this.dom && this.widget.updateDOM(this.dom, e) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : q.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof mt && e.widget.constructor == this.widget.constructor && (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0);
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
    return t != i && (e < 0 ? t < 0 : i > 0);
  }
}
class nt {
  eq(e) {
    return !1;
  }
  updateDOM(e, t) {
    return !1;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(e) {
  }
}
var ke = ((s) => (s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s))(ke || (ke = {}));
class N extends Tt {
  constructor(e, t, i, n) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = n;
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new zi(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new xt(e, t, t, i, e.widget || null, !1);
  }
  static replace(e) {
    let t, i, n = !!e.block;
    if (e.isBlockGap)
      t = -5e8, i = 4e8;
    else {
      let { start: r, end: o } = qa(e, n);
      t = (r ? n ? -3e8 : -1 : 5e8) - 1, i = 1 + (o ? n ? 2e8 : 1 : -6e8);
    }
    return new xt(e, t, i, n, e.widget || null, !0);
  }
  static line(e) {
    return new Oi(e);
  }
  static set(e, t = !1) {
    return F.of(e, t);
  }
  hasHeight() {
    return !!this.widget && this.widget.estimatedHeight > -1;
  }
}
N.none = F.empty;
class zi extends N {
  constructor(e) {
    let { start: t, end: i } = qa(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof zi && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && Lr(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
zi.prototype.point = !1;
class Oi extends N {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Oi && this.spec.class == e.spec.class && Lr(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Oi.prototype.mapMode = fe.TrackBefore, Oi.prototype.point = !0;
class xt extends N {
  constructor(e, t, i, n, r, o) {
    super(t, i, r, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? fe.TrackBefore : fe.TrackAfter : fe.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? ke.WidgetRange : this.startSide <= 0 ? ke.WidgetBefore : ke.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof xt && (t = this.widget, i = e.widget, t == i || !!(t && i && t.compare(i))) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
    var t, i;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
function qa(s, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = s;
  return t == null && (t = s.inclusive), i == null && (i = s.inclusive), { start: t ?? e, end: i ?? e };
}
function Zs(s, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= s ? t[n] = Math.max(t[n], e) : t.push(s, e);
}
xt.prototype.point = !0;
class bi {
  constructor(e, t, i, n) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = n, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof mt && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new ne()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Gi(new ei(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || e && this.content.length && this.content[this.content.length - 1] instanceof mt || this.getLine();
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
        }
        this.text = r, this.textOff = 0;
      }
      let n = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Gi(new ze(this.text.slice(this.textOff, this.textOff + n)), t), i), this.atCursorPos = !0, this.textOff += n, e -= n, i = 0;
    }
  }
  span(e, t, i, n) {
    this.buildText(t - e, i, n), this.pos = t, this.openStart < 0 && (this.openStart = n);
  }
  point(e, t, i, n, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof xt) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof xt)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new mt(i.widget || Ft.block, l, i));
      else {
        let a = dt.create(i.widget || Ft.inline, l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && r <= n.length && (e < t || i.startSide > 0), c = !a.isEditable && (e < t || r > n.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer != 2 || h || a.isEditable || (this.pendingBuffer = 0), this.flushBuffer(n), h && (f.append(Gi(new ei(1), n), r), r = n.length + Math.max(0, r - n.length)), f.append(Gi(a, n), r), this.atCursorPos = c, this.pendingBuffer = c ? e < t || r > n.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, i, n, r) {
    let o = new bi(e, t, i, r);
    return o.openEnd = F.spans(n, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Gi(s, e) {
  for (let t of e)
    s = new lt(t, [s], s.length);
  return s;
}
class Ft extends nt {
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
Ft.inline = new Ft("span"), Ft.block = new Ft("div");
var X = ((s) => (s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s))(X || (X = {}));
const Pt = X.LTR, Pr = X.RTL;
function ja(s) {
  let e = [];
  for (let t = 0; t < s.length; t++)
    e.push(1 << +s[t]);
  return e;
}
const tf = ja("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), nf = ja("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), _s = /* @__PURE__ */ Object.create(null), Ke = [];
for (let s of ["()", "[]", "{}"]) {
  let e = s.charCodeAt(0), t = s.charCodeAt(1);
  _s[e] = t, _s[t] = -e;
}
function Ka(s) {
  return s <= 247 ? tf[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? nf[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const sf = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class pt {
  get dir() {
    return this.level % 2 ? Pr : Pt;
  }
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, n) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function $a(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    let i = s[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !$a(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const K = [];
function er(s, e, t, i, n, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let g = K[a];
        g != l && (c = !1, f = g == 16);
      }
      let u = c || l != 1 ? null : [], d = c ? i : i + 1, p = a;
      e:
        for (; ; )
          if (h < r.length && p == r[h].from) {
            if (f)
              break e;
            let g = r[h];
            if (!c)
              for (let m = g.to, v = h + 1; ; ) {
                if (m == t)
                  break e;
                if (!(v < r.length && r[v].from == m)) {
                  if (K[m] == l)
                    break e;
                  break;
                }
                m = r[v++].to;
              }
            h++, u ? u.push(g) : (g.from > a && o.push(new pt(a, g.from, d)), tr(s, g.direction == Pt != !(d % 2) ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.to), p = g.to;
          } else {
            if (p == t || (c ? K[p] != l : K[p] == l))
              break;
            p++;
          }
      u ? er(s, a, p, i + 1, n, u, o) : a < p && o.push(new pt(a, p, d)), a = p;
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let g = K[a - 1];
        g != l && (c = !1, f = g == 16);
      }
      let u = c || l != 1 ? null : [], d = c ? i : i + 1, p = a;
      e:
        for (; ; )
          if (h && p == r[h - 1].to) {
            if (f)
              break e;
            let g = r[--h];
            if (!c)
              for (let m = g.from, v = h; ; ) {
                if (m == e)
                  break e;
                if (!v || r[v - 1].to != m) {
                  if (K[m - 1] == l)
                    break e;
                  break;
                }
                m = r[--v].from;
              }
            u ? u.push(g) : (g.to < a && o.push(new pt(g.to, a, d)), tr(s, g.direction == Pt != !(d % 2) ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.from), p = g.from;
          } else {
            if (p == e || (c ? K[p - 1] != l : K[p - 1] == l))
              break;
            p--;
          }
      u ? er(s, p, a, i + 1, n, u, o) : p < a && o.push(new pt(p, a, d)), a = p;
    }
}
function tr(s, e, t, i, n, r, o) {
  let l = e % 2 ? 2 : 1;
  (function(a, h, c, f, u) {
    for (let d = 0; d <= f.length; d++) {
      let p = d ? f[d - 1].to : h, g = d < f.length ? f[d].from : c, m = d ? 256 : u;
      for (let v = p, w = m, y = m; v < g; v++) {
        let b = Ka(a.charCodeAt(v));
        b == 512 ? b = w : b == 8 && y == 4 && (b = 16), K[v] = b == 4 ? 2 : b, 7 & b && (y = b), w = b;
      }
      for (let v = p, w = m, y = m; v < g; v++) {
        let b = K[v];
        if (b == 128)
          v < g - 1 && w == K[v + 1] && 24 & w ? b = K[v] = w : K[v] = 256;
        else if (b == 64) {
          let x = v + 1;
          for (; x < g && K[x] == 64; )
            x++;
          let A = v && w == 8 || x < c && K[x] == 8 ? y == 1 ? 1 : 8 : 256;
          for (let S = v; S < x; S++)
            K[S] = A;
          v = x - 1;
        } else
          b == 8 && y == 1 && (K[v] = 1);
        w = b, 7 & b && (y = b);
      }
    }
  })(s, n, r, i, l), function(a, h, c, f, u) {
    let d = u == 1 ? 2 : 1;
    for (let p = 0, g = 0, m = 0; p <= f.length; p++) {
      let v = p ? f[p - 1].to : h, w = p < f.length ? f[p].from : c;
      for (let y, b, x, A = v; A < w; A++)
        if (b = _s[y = a.charCodeAt(A)])
          if (b < 0) {
            for (let S = g - 3; S >= 0; S -= 3)
              if (Ke[S + 1] == -b) {
                let L = Ke[S + 2], C = 2 & L ? u : 4 & L ? 1 & L ? d : u : 0;
                C && (K[A] = K[Ke[S]] = C), g = S;
                break;
              }
          } else {
            if (Ke.length == 189)
              break;
            Ke[g++] = A, Ke[g++] = y, Ke[g++] = m;
          }
        else if ((x = K[A]) == 2 || x == 1) {
          let S = x == u;
          m = S ? 0 : 1;
          for (let L = g - 3; L >= 0; L -= 3) {
            let C = Ke[L + 2];
            if (2 & C)
              break;
            if (S)
              Ke[L + 2] |= 2;
            else {
              if (4 & C)
                break;
              Ke[L + 2] |= 4;
            }
          }
        }
    }
  }(s, n, r, i, l), function(a, h, c, f) {
    for (let u = 0, d = f; u <= c.length; u++) {
      let p = u ? c[u - 1].to : a, g = u < c.length ? c[u].from : h;
      for (let m = p; m < g; ) {
        let v = K[m];
        if (v == 256) {
          let w = m + 1;
          for (; ; )
            if (w == g) {
              if (u == c.length)
                break;
              w = c[u++].to, g = u < c.length ? c[u].from : h;
            } else {
              if (K[w] != 256)
                break;
              w++;
            }
          let y = d == 1, b = y == ((w < h ? K[w] : f) == 1) ? y ? 1 : 2 : f;
          for (let x = w, A = u, S = A ? c[A - 1].to : a; x > m; )
            x == S && (x = c[--A].from, S = A ? c[A - 1].to : a), K[--x] = b;
          m = w;
        } else
          d = v, m++;
      }
    }
  }(n, r, i, l), er(s, n, r, e, t, i, o);
}
function Ao(s) {
  return [new pt(0, s, 0)];
}
let Ua = "";
function rf(s, e, t, i, n) {
  var r;
  let o = i.head - s.from, l = pt.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = e[l], h = a.side(n, t);
  if (o == h) {
    let u = l += n ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    a = e[l = u], o = a.side(!n, t), h = a.side(n, t);
  }
  let c = de(s.text, o, a.forward(n, t));
  (c < a.from || c > a.to) && (c = h), Ua = s.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (n ? e.length - 1 : 0) ? null : e[l + (n ? 1 : -1)];
  return f && c == h && f.level + (n ? 0 : 1) < a.level ? k.cursor(f.side(!n, t) + s.from, f.forward(n, t) ? 1 : -1, f.level) : k.cursor(c + s.from, a.forward(n, t) ? -1 : 1, a.level);
}
function of(s, e, t) {
  for (let i = e; i < t; i++) {
    let n = Ka(s.charCodeAt(i));
    if (n == 1)
      return Pt;
    if (n == 2 || n == 4)
      return Pr;
  }
  return Pt;
}
const Ga = R.define(), Ya = R.define(), Xa = R.define(), Ja = R.define(), ir = R.define(), Qa = R.define(), Za = R.define(), _a = R.define({ combine: (s) => s.some((e) => e) }), eh = R.define({ combine: (s) => s.some((e) => e) }), th = R.define();
class Gt {
  constructor(e, t = "nearest", i = "nearest", n = 5, r = 5, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new Gt(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Gt(k.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Yi = H.define({ map: (s, e) => s.map(e) });
function Ae(s, e, t) {
  let i = s.facet(Ja);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e);
}
const Qn = R.define({ combine: (s) => !s.length || s[0] });
let lf = 0;
const ui = R.define();
class _ {
  constructor(e, t, i, n, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = n, this.extension = r(this);
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: n, provide: r, decorations: o } = t || {};
    return new _(lf++, e, i, n, (l) => {
      let a = [ui.of(l)];
      return o && a.push(Di.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : N.none;
      })), r && a.push(r(l)), a;
    });
  }
  static fromClass(e, t) {
    return _.define((i) => new e(i), t);
  }
}
class fs {
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
            if (Ae(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
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
        Ae(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Ae(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const ih = R.define(), Nr = R.define(), Di = R.define(), nh = R.define(), Ir = R.define(), sh = R.define();
function Mo(s, e) {
  let t = s.state.facet(sh);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(s) : r), n = [];
  return F.spans(i, e.from, e.to, { point() {
  }, span(r, o, l, a) {
    let h = r - e.from, c = o - e.from, f = n;
    for (let u = l.length - 1; u >= 0; u--, a--) {
      let d, p = l[u].spec.bidiIsolate;
      if (p == null && (p = of(e.text, h, c)), a > 0 && f.length && (d = f[f.length - 1]).to == h && d.direction == p)
        d.to = c, f = d.inner;
      else {
        let g = { from: h, to: c, direction: p, inner: [] };
        f.push(g), f = g.inner;
      }
    }
  } }), n;
}
const rh = R.define();
function oh(s) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let r of s.state.facet(rh)) {
    let o = r(s);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
const di = R.define();
class Ie {
  constructor(e, t, i, n) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = n;
  }
  join(e) {
    return new Ie(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let n = e[t - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let n = 0, r = 0, o = 0, l = 0; ; n++) {
      let a = n == e.length ? null : e[n], h = o - l, c = a ? a.fromB : 1e9;
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
class On {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = se.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, l, a) => n.push(new Ie(r, o, l, a))), this.changedRanges = n;
  }
  static create(e, t, i) {
    return new On(e, t, i);
  }
  get viewportChanged() {
    return (4 & this.flags) > 0;
  }
  get heightChanged() {
    return (2 & this.flags) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (10 & this.flags) > 0;
  }
  get focusChanged() {
    return (1 & this.flags) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Oo extends $ {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new ne()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Ie(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: l, toA: a }) => a < this.minWidthFrom || l > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
    let n = -1;
    this.view.inputState.composing >= 0 && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : function(l, a) {
      let h = !1;
      return a && l.iterChangedRanges((c, f) => {
        c < a.to && f > a.from && (h = !0);
      }), h;
    }(e.changes, this.hasComposition) || e.selectionSet || (n = e.state.selection.main.head));
    let r = n > -1 ? function(l, a, h) {
      let c = lh(l, h);
      if (!c)
        return null;
      let { node: f, from: u, to: d } = c, p = f.nodeValue;
      if (/[\n\r]/.test(p) || l.state.doc.sliceString(c.from, c.to) != p)
        return null;
      let g = a.invertedDesc, m = new Ie(g.mapPos(u), g.mapPos(d), u, d), v = [];
      for (let w = f.parentNode; ; w = w.parentNode) {
        let y = $.get(w);
        if (y instanceof lt)
          v.push({ node: w, deco: y.mark });
        else {
          if (y instanceof ne || w.nodeName == "DIV" && w.parentNode == l.contentDOM)
            return { range: m, text: f, marks: v, line: w };
          if (w == l.contentDOM)
            return null;
          v.push({ node: w, deco: new zi({ inclusive: !0, attributes: ef(w), tagName: w.tagName.toLowerCase() }) });
        }
      }
    }(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: l, to: a } = this.hasComposition;
      i = new Ie(l, a, e.changes.mapPos(l, -1), e.changes.mapPos(a, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (B.ie || B.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = function(l, a, h) {
      let c = new af();
      return F.compare(l, a, h, c), c.changes;
    }(this.decorations, this.updateDeco(), e.changes);
    return i = Ie.extendWithRanges(i, o), !!(7 & this.flags || i.length != 0) && (this.updateInner(i, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: n } = this.view;
    n.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = B.chrome || B.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || n.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach((o) => o.flags &= -9);
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof mt && o.widget instanceof Do && r.push(o.dom);
    n.updateGaps(r);
  }
  updateChildren(e, t, i) {
    let n = i ? i.range.addToSet(e.slice()) : e, r = this.childCursor(t);
    for (let o = n.length - 1; ; o--) {
      let l = o >= 0 ? n[o] : null;
      if (!l)
        break;
      let a, h, c, f, { fromA: u, toA: d, fromB: p, toB: g } = l;
      if (i && i.range.fromB < g && i.range.toB > p) {
        let b = bi.build(this.view.state.doc, p, i.range.fromB, this.decorations, this.dynamicDecorationMap), x = bi.build(this.view.state.doc, i.range.toB, g, this.decorations, this.dynamicDecorationMap);
        h = b.breakAtStart, c = b.openStart, f = x.openEnd;
        let A = this.compositionView(i);
        x.breakAtStart ? A.breakAfter = 1 : x.content.length && A.merge(A.length, A.length, x.content[0], !1, x.openStart, 0) && (A.breakAfter = x.content[0].breakAfter, x.content.shift()), b.content.length && A.merge(0, 0, b.content[b.content.length - 1], !0, 0, b.openEnd) && b.content.pop(), a = b.content.concat(A).concat(x.content);
      } else
        ({ content: a, breakAtStart: h, openStart: c, openEnd: f } = bi.build(this.view.state.doc, p, g, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: v } = r.findPos(d, 1), { i: w, off: y } = r.findPos(u, -1);
      Na(this, w, y, m, v, a, h, c, f);
    }
    i && this.fixCompositionDOM(i);
  }
  compositionView(e) {
    let t = new ze(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: n } of e.marks)
      t = new lt(n, [t], t.length);
    let i = new ne();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
      o.flags |= 8 | (o.children.some((a) => 7 & a.flags) ? 1 : 0), this.markedForComposition.add(o);
      let l = $.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, i = this.childPos(e.range.fromB, 1), n = this.children[i.i];
    t(e.line, n);
    for (let r = e.marks.length - 1; r >= -1; r--)
      i = n.childPos(i.off, 1), n = n.children[i.i], t(r >= 0 ? e.marks[r].node : e.text, n);
  }
  updateSelection(e = !1, t = !1) {
    !e && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, n = i == this.dom, r = !n && vn(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(n || t || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (B.gecko && l.empty && !this.hasComposition && (c = a).node.nodeType == 1 && c.node.firstChild && (c.offset == 0 || c.node.childNodes[c.offset - 1].contentEditable == "false") && (c.offset == c.node.childNodes.length || c.node.childNodes[c.offset].contentEditable == "false")) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(u, a.node.childNodes[a.offset] || null)), a = h = new we(u, 0), o = !0;
    }
    var c;
    let f = this.view.observer.selectionRange;
    !o && f.focusNode && (yi(a.node, a.offset, f.anchorNode, f.anchorOffset) && yi(h.node, h.offset, f.focusNode, f.focusOffset) || this.suppressWidgetCursorChange(f, l)) || (this.view.observer.ignore(() => {
      B.android && B.chrome && this.dom.contains(f.focusNode) && function(g, m) {
        for (let v = g; v && v != m; v = v.assignedSlot || v.parentNode)
          if (v.nodeType == 1 && v.contentEditable == "false")
            return !0;
        return !1;
      }(f.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = An(this.view.root);
      if (u)
        if (l.empty) {
          if (B.gecko) {
            let g = (d = a.node, p = a.offset, d.nodeType != 1 ? 0 : (p && d.childNodes[p - 1].contentEditable == "false" ? 1 : 0) | (p < d.childNodes.length && d.childNodes[p].contentEditable == "false" ? 2 : 0));
            if (g && g != 3) {
              let m = (g == 1 ? Ba : La)(a.node, a.offset);
              m && (a = new we(m.node, m.offset));
            }
          }
          u.collapse(a.node, a.offset), l.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = l.bidiLevel);
        } else if (u.extend) {
          u.collapse(a.node, a.offset);
          try {
            u.extend(h.node, h.offset);
          } catch {
          }
        } else {
          let g = document.createRange();
          l.anchor > l.head && ([a, h] = [h, a]), g.setEnd(h.node, h.offset), g.setStart(a.node, a.offset), u.removeAllRanges(), u.addRange(g);
        }
      var d, p;
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new we(f.anchorNode, f.anchorOffset), this.impreciseHead = h.precise ? null : new we(f.focusNode, f.focusOffset);
  }
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && yi(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = An(e.root), { anchorNode: n, anchorOffset: r } = e.observer.selectionRange;
    if (!(i && t.empty && t.assoc && i.modify))
      return;
    let o = ne.find(this, t.head);
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
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(n, r);
  }
  moveToLine(e) {
    let t, i = this.dom;
    if (e.node != i)
      return e;
    for (let n = e.offset; !t && n < i.childNodes.length; n++) {
      let r = $.get(i.childNodes[n]);
      r instanceof ne && (t = r.domAtPos(0));
    }
    for (let n = e.offset - 1; !t && n >= 0; n--) {
      let r = $.get(i.childNodes[n]);
      r instanceof ne && (t = r.domAtPos(r.length));
    }
    return t ? new we(t.node, t.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = $.get(t);
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
      let n = this.children[t];
      if (i < n.length || n instanceof ne)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, n = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, h = a - l.length;
      if (a < e)
        break;
      h <= e && (h < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof ne && !(i instanceof ne && t >= 0)) && (i = l, n = h), r = h;
    }
    return i ? i.coordsAt(e - n, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), n = this.children[t];
    if (!(n instanceof ne))
      return null;
    for (; n.children.length; ) {
      let { i: l, off: a } = n.childPos(i, 1);
      for (; ; l++) {
        if (l == n.children.length)
          return null;
        if ((n = n.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(n instanceof ze))
      return null;
    let r = de(n.text, i);
    if (r == i)
      return null;
    let o = Lt(n.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: n } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == X.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c], u = h + f.length;
      if (u > n)
        break;
      if (h >= i) {
        let d = f.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = f.dom.lastChild, g = p ? _t(p) : [];
          if (g.length) {
            let m = g[g.length - 1], v = a ? m.right - d.left : d.right - m.left;
            v > l && (l = v, this.minWidth = r, this.minWidthFrom = h, this.minWidthTo = u);
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
      if (r instanceof ne) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e, t, i, n = document.createElement("div");
    return n.className = "cm-line", n.style.width = "99999px", n.style.position = "absolute", n.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(n);
      let r = _t(n.firstChild)[0];
      e = n.getBoundingClientRect().height, t = r ? r.width / 27 : 7, i = r ? r.height : e, n.remove();
    }), { lineHeight: e, charWidth: t, textHeight: i };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new Pa(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == t.viewports.length ? null : t.viewports[n], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(N.replace({ widget: new Do(l), block: !0, inclusive: !0, isBlockGap: !0 }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return N.set(e);
  }
  updateDeco() {
    let e = 0, t = this.view.state.facet(Di).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(nh).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = !0), l ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = i, t.push(F.join(n))), this.decorations = [...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      return this.view.scrollDOM.scrollTop = h.top - e.yMargin, void (this.view.scrollDOM.scrollLeft = e.xMargin);
    }
    for (let h of this.view.state.facet(th))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (c) {
        Ae(this.view.state, c, "scroll handler");
      }
    let t, { range: i } = e, n = this.coordsAt(i.head, i.empty ? i.assoc : i.head > i.anchor ? -1 : 1);
    if (!n)
      return;
    !i.empty && (t = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (n = { left: Math.min(n.left, t.left), top: Math.min(n.top, t.top), right: Math.max(n.right, t.right), bottom: Math.max(n.bottom, t.bottom) });
    let r = oh(this.view), o = { left: n.left - r.left, top: n.top - r.top, right: n.right + r.right, bottom: n.bottom + r.bottom }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    (function(h, c, f, u, d, p, g, m) {
      let v = h.ownerDocument, w = v.defaultView || window;
      for (let y = h, b = !1; y && !b; )
        if (y.nodeType == 1) {
          let x, A = y == v.body, S = 1, L = 1;
          if (A)
            x = Zc(w);
          else {
            if (/^(fixed|sticky)$/.test(getComputedStyle(y).position) && (b = !0), y.scrollHeight <= y.clientHeight && y.scrollWidth <= y.clientWidth) {
              y = y.assignedSlot || y.parentNode;
              continue;
            }
            let T = y.getBoundingClientRect();
            ({ scaleX: S, scaleY: L } = Da(y, T)), x = { left: T.left, right: T.left + y.clientWidth * S, top: T.top, bottom: T.top + y.clientHeight * L };
          }
          let C = 0, D = 0;
          if (d == "nearest")
            c.top < x.top ? (D = -(x.top - c.top + g), f > 0 && c.bottom > x.bottom + D && (D = c.bottom - x.bottom + D + g)) : c.bottom > x.bottom && (D = c.bottom - x.bottom + g, f < 0 && c.top - D < x.top && (D = -(x.top + D - c.top + g)));
          else {
            let T = c.bottom - c.top, P = x.bottom - x.top;
            D = (d == "center" && T <= P ? c.top + T / 2 - P / 2 : d == "start" || d == "center" && f < 0 ? c.top - g : c.bottom - P + g) - x.top;
          }
          if (u == "nearest" ? c.left < x.left ? (C = -(x.left - c.left + p), f > 0 && c.right > x.right + C && (C = c.right - x.right + C + p)) : c.right > x.right && (C = c.right - x.right + p, f < 0 && c.left < x.left + C && (C = -(x.left + C - c.left + p))) : C = (u == "center" ? c.left + (c.right - c.left) / 2 - (x.right - x.left) / 2 : u == "start" == m ? c.left - p : c.right - (x.right - x.left) + p) - x.left, C || D)
            if (A)
              w.scrollBy(C, D);
            else {
              let T = 0, P = 0;
              if (D) {
                let V = y.scrollTop;
                y.scrollTop += D / L, P = (y.scrollTop - V) * L;
              }
              if (C) {
                let V = y.scrollLeft;
                y.scrollLeft += C / S, T = (y.scrollLeft - V) * S;
              }
              c = { left: c.left - T, top: c.top - P, right: c.right - T, bottom: c.bottom - P }, T && Math.abs(T - C) < 1 && (u = "nearest"), P && Math.abs(P - D) < 1 && (d = "nearest");
            }
          if (A)
            break;
          y = y.assignedSlot || y.parentNode;
        } else {
          if (y.nodeType != 11)
            break;
          y = y.host;
        }
    })(this.view.scrollDOM, o, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == X.LTR);
  }
}
class Do extends nt {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function lh(s, e) {
  let t = s.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = Ba(t.focusNode, t.focusOffset), n = La(t.focusNode, t.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let l = $.get(n.node);
    if (!l || l instanceof ze && l.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let a = $.get(i.node);
      !a || a instanceof ze && a.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
let af = class {
  constructor() {
    this.changes = [];
  }
  compareRange(s, e) {
    Zs(s, e, this.changes);
  }
  comparePoint(s, e) {
    Zs(s, e, this.changes);
  }
};
function hf(s, e) {
  return e.left > s ? e.left - s : Math.max(0, s - e.right);
}
function cf(s, e) {
  return e.top > s ? e.top - s : Math.max(0, s - e.bottom);
}
function us(s, e) {
  return s.top < e.bottom - 1 && s.bottom > e.top + 1;
}
function To(s, e) {
  return e < s.top ? { top: e, left: s.left, right: s.right, bottom: s.bottom } : s;
}
function Eo(s, e) {
  return e > s.bottom ? { top: s.top, left: s.left, right: s.right, bottom: e } : s;
}
function nr(s, e, t) {
  let i, n, r, o, l, a, h, c, f = !1;
  for (let d = s.firstChild; d; d = d.nextSibling) {
    let p = _t(d);
    for (let g = 0; g < p.length; g++) {
      let m = p[g];
      n && us(n, m) && (m = To(Eo(m, n.bottom), n.top));
      let v = hf(e, m), w = cf(t, m);
      if (v == 0 && w == 0)
        return d.nodeType == 3 ? Ro(d, e, t) : nr(d, e, t);
      if (!i || o > w || o == w && r > v) {
        i = d, n = m, r = v, o = w;
        let y = w ? t < m.top ? -1 : 1 : v ? e < m.left ? -1 : 1 : 0;
        f = !y || (y > 0 ? g < p.length - 1 : g > 0);
      }
      v == 0 ? t > m.bottom && (!h || h.bottom < m.bottom) ? (l = d, h = m) : t < m.top && (!c || c.top > m.top) && (a = d, c = m) : h && us(h, m) ? h = Eo(h, m.bottom) : c && us(c, m) && (c = To(c, m.top));
    }
  }
  if (h && h.bottom >= t ? (i = l, n = h) : c && c.top <= t && (i = a, n = c), !i)
    return { node: s, offset: 0 };
  let u = Math.max(n.left, Math.min(n.right, e));
  return i.nodeType == 3 ? Ro(i, u, t) : f && i.contentEditable != "false" ? nr(i, u, t) : { node: s, offset: Array.prototype.indexOf.call(s.childNodes, i) + (e >= (n.left + n.right) / 2 ? 1 : 0) };
}
function Ro(s, e, t) {
  let i = s.nodeValue.length, n = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = Lt(s, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      o || (o = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2, d = u;
        if ((B.chrome || B.gecko) && Lt(s, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
          return { node: s, offset: l + (d ? 1 : 0) };
        n = l + (d ? 1 : 0), r = f;
      }
    }
  }
  return { node: s, offset: n > -1 ? n : o > 0 ? s.nodeValue.length : 0 };
}
function Bo(s, e, t, i = -1) {
  var n, r;
  let o, l = s.contentDOM.getBoundingClientRect(), a = l.top + s.viewState.paddingTop, { docHeight: h } = s.viewState, { x: c, y: f } = e, u = f - a;
  if (u < 0)
    return 0;
  if (u > h)
    return s.state.doc.length;
  for (let b = s.viewState.heightOracle.textHeight / 2, x = !1; o = s.elementAtHeight(u), o.type != ke.Text; )
    for (; u = i > 0 ? o.bottom + b : o.top - b, !(u >= 0 && u <= h); ) {
      if (x)
        return t ? null : 0;
      x = !0, i = -i;
    }
  f = a + u;
  let d = o.from;
  if (d < s.viewport.from)
    return s.viewport.from == 0 ? 0 : t ? null : Lo(s, l, o, c, f);
  if (d > s.viewport.to)
    return s.viewport.to == s.state.doc.length ? s.state.doc.length : t ? null : Lo(s, l, o, c, f);
  let p = s.dom.ownerDocument, g = s.root.elementFromPoint ? s.root : p, m = g.elementFromPoint(c, f);
  m && !s.contentDOM.contains(m) && (m = null), m || (c = Math.max(l.left + 1, Math.min(l.right - 1, c)), m = g.elementFromPoint(c, f), m && !s.contentDOM.contains(m) && (m = null));
  let v, w = -1;
  if (m && ((n = s.docView.nearest(m)) === null || n === void 0 ? void 0 : n.isEditable) != 0) {
    if (p.caretPositionFromPoint) {
      let b = p.caretPositionFromPoint(c, f);
      b && ({ offsetNode: v, offset: w } = b);
    } else if (p.caretRangeFromPoint) {
      let b = p.caretRangeFromPoint(c, f);
      b && ({ startContainer: v, startOffset: w } = b, (!s.contentDOM.contains(v) || B.safari && function(x, A, S) {
        let L;
        if (x.nodeType != 3 || A != (L = x.nodeValue.length))
          return !1;
        for (let C = x.nextSibling; C; C = C.nextSibling)
          if (C.nodeType != 1 || C.nodeName != "BR")
            return !1;
        return Lt(x, L - 1, L).getBoundingClientRect().left > S;
      }(v, w, c) || B.chrome && function(x, A, S) {
        if (A != 0)
          return !1;
        for (let C = x; ; ) {
          let D = C.parentNode;
          if (!D || D.nodeType != 1 || D.firstChild != C)
            return !1;
          if (D.classList.contains("cm-line"))
            break;
          C = D;
        }
        let L = x.nodeType == 1 ? x.getBoundingClientRect() : Lt(x, 0, Math.max(x.nodeValue.length, 1)).getBoundingClientRect();
        return S - L.left > 5;
      }(v, w, c)) && (v = void 0));
    }
  }
  if (!v || !s.docView.dom.contains(v)) {
    let b = ne.find(s.docView, d);
    if (!b)
      return u > o.top + o.height / 2 ? o.to : o.from;
    ({ node: v, offset: w } = nr(b.dom, c, f));
  }
  let y = s.docView.nearest(v);
  if (!y)
    return null;
  if (y.isWidget && ((r = y.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let b = y.dom.getBoundingClientRect();
    return e.y < b.top || e.y <= b.bottom && e.x <= (b.left + b.right) / 2 ? y.posAtStart : y.posAtEnd;
  }
  return y.localPosFromDOM(v, w) + y.posAtStart;
}
function Lo(s, e, t, i, n) {
  let r = Math.round((i - e.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && t.height > 1.5 * s.defaultLineHeight) {
    let l = s.viewState.heightOracle.textHeight;
    r += Math.floor((n - t.top - 0.5 * (s.defaultLineHeight - l)) / l) * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(t.from, t.to);
  return t.from + Ks(o, r, s.state.tabSize);
}
function sr(s, e) {
  let t = s.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || i.to == e && (i.to == t.to || i.type == ke.Text))
        return i;
  }
  return t;
}
function Po(s, e, t, i) {
  let n = s.state.doc.lineAt(e.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let l = e, a = null; ; ) {
    let h = rf(n, r, o, l, t), c = Ua;
    if (!h) {
      if (n.number == (t ? s.state.doc.lines : 1))
        return l;
      c = `
`, n = s.state.doc.line(n.number + (t ? 1 : -1)), r = s.bidiSpans(n), h = s.visualLineSide(n, !t);
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
function wn(s, e, t) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function ds(s, e, t) {
  let i = wn(s.state.facet(Ir).map((n) => n(s)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : k.cursor(i, i < t.from ? 1 : -1);
}
class ff {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, B.safari && e.contentDOM.addEventListener("input", () => null), B.gecko && function(t) {
      $o.has(t) || ($o.add(t), t.addEventListener("copy", () => {
      }), t.addEventListener("cut", () => {
      }));
    }(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    (function(t, i) {
      if (!i.bubbles)
        return !0;
      if (i.defaultPrevented)
        return !1;
      for (let n, r = i.target; r != t.contentDOM; r = r.parentNode)
        if (!r || r.nodeType == 11 || (n = $.get(r)) && n.ignoreEvent(i))
          return !1;
      return !0;
    })(this.view, e) && !this.ignoreDuringComposition(e) && (e.type == "keydown" && this.keydown(e) || this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let n of i.observers)
        n(this.view, t);
      for (let n of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (n(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = uf(e), i = this.handlers, n = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (n.removeEventListener(r, this.handleEvent), l = null), l || n.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r == "scroll" || t[r] || n.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
      return !0;
    if (e.keyCode != 27 && hh.indexOf(e.keyCode) < 0 && (this.view.inputState.lastEscPress = 0), B.android && B.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return !B.ios || e.synthetic || e.altKey || e.metaKey || !((t = ah.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || df.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (e.keyCode != 229 && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !!t && !(t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString())) && (this.pendingIOSKey = void 0, Ut(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !!/^key/.test(e.type) && (this.composing > 0 || !!(B.safari && !B.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0));
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function No(s, e) {
  return (t, i) => {
    try {
      return e.call(s, i, t);
    } catch (n) {
      Ae(t.state, n);
    }
  };
}
function uf(s) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec;
    if (n && n.domEventHandlers)
      for (let r in n.domEventHandlers) {
        let o = n.domEventHandlers[r];
        o && t(r).handlers.push(No(i.value, o));
      }
    if (n && n.domEventObservers)
      for (let r in n.domEventObservers) {
        let o = n.domEventObservers[r];
        o && t(r).observers.push(No(i.value, o));
      }
  }
  for (let i in We)
    t(i).handlers.push(We[i]);
  for (let i in Pe)
    t(i).observers.push(Pe[i]);
  return e;
}
const ah = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], df = "dthko", hh = [16, 17, 18, 20, 91, 92, 224, 225];
function Xi(s) {
  return 0.7 * Math.max(0, s) + 8;
}
class pf {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParent = function(o) {
      let l = o.ownerDocument;
      for (let a = o.parentNode; a && a != l.body; )
        if (a.nodeType == 1) {
          if (a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth)
            return a;
          a = a.assignedSlot || a.parentNode;
        } else {
          if (a.nodeType != 11)
            break;
          a = a.host;
        }
      return null;
    }(e.contentDOM), this.atoms = e.state.facet(Ir).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(z.allowMultipleSelections) && function(o, l) {
      let a = o.state.facet(Ga);
      return a.length ? a[0](l) : B.mac ? l.metaKey : l.ctrlKey;
    }(e, t), this.dragging = !(!function(o, l) {
      let { main: a } = o.state.selection;
      if (a.empty)
        return !1;
      let h = An(o.root);
      if (!h || h.rangeCount == 0)
        return !0;
      let c = h.getRangeAt(0).getClientRects();
      for (let f = 0; f < c.length; f++) {
        let u = c[f];
        if (u.left <= l.clientX && u.right >= l.clientX && u.top <= l.clientY && u.bottom >= l.clientY)
          return !0;
      }
      return !1;
    }(e, t) || uh(t) != 1) && null;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    var t, i, n;
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && (i = this.startEvent, n = e, Math.max(Math.abs(i.clientX - n.clientX), Math.abs(i.clientY - n.clientY)) < 10))
      return;
    this.select(this.lastEvent = e);
    let r = 0, o = 0, l = ((t = this.scrollParent) === null || t === void 0 ? void 0 : t.getBoundingClientRect()) || { left: 0, top: 0, right: this.view.win.innerWidth, bottom: this.view.win.innerHeight }, a = oh(this.view);
    e.clientX - a.left <= l.left + 6 ? r = -Xi(l.left - e.clientX) : e.clientX + a.right >= l.right - 6 && (r = Xi(e.clientX - l.right)), e.clientY - a.top <= l.top + 6 ? o = -Xi(l.top - e.clientY) : e.clientY + a.bottom >= l.bottom - 6 && (o = Xi(e.clientY - l.bottom)), this.setScrollSpeed(r, o);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
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
      let n = e.ranges[i], r = null;
      if (n.empty) {
        let o = wn(this.atoms, n.from, 0);
        o != n.from && (r = k.cursor(o, -1));
      } else {
        let o = wn(this.atoms, n.from, -1), l = wn(this.atoms, n.to, 1);
        o == n.from && l == n.to || (r = k.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), t[i] = r);
    }
    return t ? k.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    !this.mustSelect && i.eq(t.state.selection, this.dragging === !1) || this.view.dispatch({ selection: i, userEvent: "select.pointer" }), this.mustSelect = !1;
  }
  update(e) {
    this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
const We = /* @__PURE__ */ Object.create(null), Pe = /* @__PURE__ */ Object.create(null), ch = B.ie && B.ie_version < 15 || B.ios && B.webkit_version < 604;
function Io(s, e) {
  let t, { state: i } = s, n = 1, r = i.toText(e), o = r.lines == i.selection.ranges.length;
  if (rr != null && i.selection.ranges.every((l) => l.empty) && rr == r.toString()) {
    let l = -1;
    t = i.changeByRange((a) => {
      let h = i.doc.lineAt(a.from);
      if (h.from == l)
        return { range: a };
      l = h.from;
      let c = i.toText((o ? r.line(n++).text : e) + i.lineBreak);
      return { changes: { from: h.from, insert: c }, range: k.cursor(a.from + c.length) };
    });
  } else
    t = o ? i.changeByRange((l) => {
      let a = r.line(n++);
      return { changes: { from: l.from, to: l.to, insert: a.text }, range: k.cursor(l.from + a.length) };
    }) : i.replaceSelection(r);
  s.dispatch(t, { userEvent: "input.paste", scrollIntoView: !0 });
}
function Vo(s, e, t, i) {
  if (i == 1)
    return k.cursor(e, t);
  if (i == 2)
    return function(n, r, o = 1) {
      let l = n.charCategorizer(r), a = n.doc.lineAt(r), h = r - a.from;
      if (a.length == 0)
        return k.cursor(r);
      h == 0 ? o = 1 : h == a.length && (o = -1);
      let c = h, f = h;
      o < 0 ? c = de(a.text, h, !1) : f = de(a.text, h);
      let u = l(a.text.slice(c, f));
      for (; c > 0; ) {
        let d = de(a.text, c, !1);
        if (l(a.text.slice(d, c)) != u)
          break;
        c = d;
      }
      for (; f < a.length; ) {
        let d = de(a.text, f);
        if (l(a.text.slice(f, d)) != u)
          break;
        f = d;
      }
      return k.range(c + a.from, f + a.from);
    }(s.state, e, t);
  {
    let n = ne.find(s.docView, e), r = s.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : r.from, l = n ? n.posAtEnd : r.to;
    return l < s.state.doc.length && l == r.to && l++, k.range(o, l);
  }
}
Pe.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
}, We.keydown = (s, e) => (s.inputState.setSelectionOrigin("select"), e.keyCode == 27 && (s.inputState.lastEscPress = Date.now()), !1), Pe.touchstart = (s, e) => {
  s.inputState.lastTouchTime = Date.now(), s.inputState.setSelectionOrigin("select.pointer");
}, Pe.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
}, We.mousedown = (s, e) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of s.state.facet(Xa))
    if (t = i(s, e), t)
      break;
  if (t || e.button != 0 || (t = function(i, n) {
    let r = Wo(i, n), o = uh(n), l = i.state.selection;
    return { update(a) {
      a.docChanged && (r.pos = a.changes.mapPos(r.pos), l = l.map(a.changes));
    }, get(a, h, c) {
      let f, u = Wo(i, a), d = Vo(i, u.pos, u.bias, o);
      if (r.pos != u.pos && !h) {
        let p = Vo(i, r.pos, r.bias, o), g = Math.min(p.from, d.from), m = Math.max(p.to, d.to);
        d = g < d.from ? k.range(g, m) : k.range(m, g);
      }
      return h ? l.replaceRange(l.main.extend(d.from, d.to)) : c && o == 1 && l.ranges.length > 1 && (f = function(p, g) {
        for (let m = 0; m < p.ranges.length; m++) {
          let { from: v, to: w } = p.ranges[m];
          if (v <= g && w >= g)
            return k.create(p.ranges.slice(0, m).concat(p.ranges.slice(m + 1)), p.mainIndex == m ? 0 : p.mainIndex - (p.mainIndex > m ? 1 : 0));
        }
        return null;
      }(l, u.pos)) ? f : c ? l.addRange(d) : k.create([d]);
    } };
  }(s, e)), t) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new pf(s, e, t, i)), i && s.observer.ignore(() => Ta(s.contentDOM));
    let n = s.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  }
  return !1;
};
let fh = (s, e) => s >= e.top && s <= e.bottom, Ho = (s, e, t) => fh(e, t) && s >= t.left && s <= t.right;
function mf(s, e, t, i) {
  let n = ne.find(s.docView, e);
  if (!n)
    return 1;
  let r = e - n.posAtStart;
  if (r == 0)
    return 1;
  if (r == n.length)
    return -1;
  let o = n.coordsAt(r, -1);
  if (o && Ho(t, i, o))
    return -1;
  let l = n.coordsAt(r, 1);
  return l && Ho(t, i, l) ? 1 : o && fh(i, o) ? -1 : 1;
}
function Wo(s, e) {
  let t = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: mf(s, t, e.clientX, e.clientY) };
}
const gf = B.ie && B.ie_version <= 11;
let Fo = null, zo = 0, qo = 0;
function uh(s) {
  if (!gf)
    return s.detail;
  let e = Fo, t = qo;
  return Fo = s, qo = Date.now(), zo = !e || t > Date.now() - 400 && Math.abs(e.clientX - s.clientX) < 2 && Math.abs(e.clientY - s.clientY) < 2 ? (zo + 1) % 3 : 1;
}
function jo(s, e, t, i) {
  if (!t)
    return;
  let n = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = s.inputState, o = i && r && function(h, c) {
    let f = h.state.facet(Ya);
    return f.length ? f[0](c) : B.mac ? !c.altKey : !c.ctrlKey;
  }(s, e) ? { from: r.from, to: r.to } : null, l = { from: n, insert: t }, a = s.state.changes(o ? [o, l] : l);
  s.focus(), s.dispatch({ changes: a, selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) }, userEvent: o ? "move.drop" : "input.drop" }), s.inputState.draggedContent = null;
}
We.dragstart = (s, e) => {
  let { selection: { main: t } } = s.state;
  if (e.target.draggable) {
    let n = s.docView.nearest(e.target);
    if (n && n.isWidget) {
      let r = n.posAtStart, o = r + n.length;
      (r >= t.to || o <= t.from) && (t = k.range(r, o));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", s.state.sliceDoc(t.from, t.to)), e.dataTransfer.effectAllowed = "copyMove"), !1;
}, We.dragend = (s) => (s.inputState.draggedContent = null, !1), We.drop = (s, e) => {
  if (!e.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), n = 0, r = () => {
      ++n == t.length && jo(s, e, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  }
  {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return jo(s, e, i, !0), !0;
  }
  return !1;
}, We.paste = (s, e) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let t = ch ? null : e.clipboardData;
  return t ? (Io(s, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (function(i) {
    let n = i.dom.parentNode;
    if (!n)
      return;
    let r = n.appendChild(document.createElement("textarea"));
    r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus(), setTimeout(() => {
      i.focus(), r.remove(), Io(i, r.value);
    }, 50);
  }(s), !1);
};
let rr = null;
We.copy = We.cut = (s, e) => {
  let { text: t, ranges: i, linewise: n } = function(o) {
    let l = [], a = [], h = !1;
    for (let c of o.selection.ranges)
      c.empty || (l.push(o.sliceDoc(c.from, c.to)), a.push(c));
    if (!l.length) {
      let c = -1;
      for (let { from: f } of o.selection.ranges) {
        let u = o.doc.lineAt(f);
        u.number > c && (l.push(u.text), a.push({ from: u.from, to: Math.min(o.doc.length, u.to + 1) })), c = u.number;
      }
      h = !0;
    }
    return { text: l.join(o.lineBreak), ranges: a, linewise: h };
  }(s.state);
  if (!t && !n)
    return !1;
  rr = n ? t : null, e.type != "cut" || s.state.readOnly || s.dispatch({ changes: i, scrollIntoView: !0, userEvent: "delete.cut" });
  let r = ch ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (function(o, l) {
    let a = o.dom.parentNode;
    if (!a)
      return;
    let h = a.appendChild(document.createElement("textarea"));
    h.style.cssText = "position: fixed; left: -10000px; top: 10px", h.value = l, h.focus(), h.selectionEnd = l.length, h.selectionStart = 0, setTimeout(() => {
      h.remove(), o.focus();
    }, 50);
  }(s, t), !1);
};
const dh = rt.define();
function ph(s, e) {
  let t = [];
  for (let i of s.facet(Za)) {
    let n = i(s, e);
    n && t.push(n);
  }
  return t ? s.update({ effects: t, annotations: dh.of(!0) }) : null;
}
function Ko(s) {
  setTimeout(() => {
    let e = s.hasFocus;
    if (e != s.inputState.notifiedFocused) {
      let t = ph(s.state, e);
      t ? s.dispatch(t) : s.update([]);
    }
  }, 10);
}
Pe.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), s.scrollDOM.scrollTop || !s.inputState.lastScrollTop && !s.inputState.lastScrollLeft || (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), Ko(s);
}, Pe.blur = (s) => {
  s.observer.clearSelectionRange(), Ko(s);
}, Pe.compositionstart = Pe.compositionupdate = (s) => {
  s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0);
}, Pe.compositionend = (s) => {
  s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, B.chrome && B.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50);
}, Pe.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
}, We.beforeinput = (s, e) => {
  var t;
  let i;
  if (B.chrome && B.android && (i = ah.find((n) => n.inputType == e.inputType)) && (s.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
    let n = ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > n + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return B.ios && e.inputType == "deleteContentForward" && s.observer.flushSoon(), B.safari && e.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => Pe.compositionend(s, e), 20), !1;
};
const $o = /* @__PURE__ */ new Set(), Uo = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class vf {
  constructor(e) {
    this.lineWrapping = e, this.doc = q.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
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
    return Uo.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(10 * n)] || (t = !0, this.heightSamples[Math.floor(10 * n)] = !0);
    }
    return t;
  }
  refresh(e, t, i, n, r, o) {
    let l = Uo.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = n, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(10 * c)] = !0;
      }
    }
    return a;
  }
}
class wf {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Je {
  constructor(e, t, i, n, r) {
    this.from = e, this.length = t, this.top = i, this.height = n, this._content = r;
  }
  get type() {
    return typeof this._content == "number" ? ke.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof xt ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Je(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var Y = ((s) => (s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s))(Y || (Y = {}));
const yn = 1e-3;
class Se {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (2 & this.flags) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | -3 & this.flags;
  }
  setHeight(e, t) {
    this.height != t && (Math.abs(this.height - t) > yn && (e.heightChanged = !0), this.height = t);
  }
  replace(e, t, i) {
    return Se.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, n) {
    let r = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = n[l], u = r.lineAt(a, Y.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : r.lineAt(h, Y.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, c = n[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, Y.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = Vr.build(i.setDoc(o), e, c, f);
      r = r.replace(a, h, p);
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Te(0, 0);
  }
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, n = 0, r = 0;
    for (; ; )
      if (t == i)
        if (n > 2 * r) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else {
          if (!(r > 2 * n))
            break;
          {
            let l = e[i];
            l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
          }
        }
      else if (n < r) {
        let l = e[t++];
        l && (n += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new yf(Se.of(e.slice(0, t)), o, Se.of(e.slice(i)));
  }
}
Se.prototype.size = 1;
class mh extends Se {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, n) {
    return new Je(n, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, n, r) {
    return this.blockAt(0, i, n, r);
  }
  forEachLine(e, t, i, n, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, i, n, r));
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more && this.setHeight(e, n.heights[n.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Te extends mh {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, n) {
    return new Je(n, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof Te || n instanceof le && 4 & n.flags) && Math.abs(this.length - n.length) < 10 ? (n instanceof le ? n = new Te(n.length, this.height) : n.height = this.height, this.outdated || (n.outdated = !1), n) : Se.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setHeight(e, n.heights[n.index++]) : (i || this.outdated) && this.setHeight(e, Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class le extends Se {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i, n = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, o = r - n + 1, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * o);
      i = a / o, this.length > o + 1 && (l = (this.height - a) / (this.length - o - 1));
    } else
      i = this.height / o;
    return { firstLine: n, lastLine: r, perLine: i, perChar: l };
  }
  blockAt(e, t, i, n) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let h = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, e - f / 2);
      return new Je(c.from, c.length, u, f, 0);
    }
    {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(r + h);
      return new Je(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, n, r) {
    if (t == Y.ByHeight)
      return this.blockAt(e, i, n, r);
    if (t == Y.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Je(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - o, u = n + l * f + a * (h.from - r - f);
    return new Je(h.from, h.length, Math.max(n, Math.min(u, n + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, n, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = n; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Je(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let n = this.length - t;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof le ? i[i.length - 1] = new le(r.length + n) : i.push(null, new le(n - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof le ? i[0] = new le(e + r.length) : i.unshift(new le(e - 1), null);
    }
    return Se.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new le(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new le(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, n) {
    let r = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let o = [], l = Math.max(t, n.from), a = -1;
      for (n.from > t && o.push(new le(n.from - t - 1).updateHeight(e, t)); l <= r && n.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = n.heights[n.index++];
        a == -1 ? a = f : Math.abs(f - a) >= yn && (a = -2);
        let u = new Te(c, f);
        u.outdated = !1, o.push(u), l += c + 1;
      }
      l <= r && o.push(null, new le(r - l).updateHeight(e, l));
      let h = Se.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= yn || Math.abs(a - this.heightMetrics(e, t).perLine) >= yn) && (e.heightChanged = !0), h;
    }
    return (i || this.outdated) && (this.setHeight(e, e.heightForGap(t, t + this.length)), this.outdated = !1), this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class yf extends Se {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return 1 & this.flags;
  }
  blockAt(e, t, i, n) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, n) : this.right.blockAt(e, t, r, n + this.left.length + this.break);
  }
  lineAt(e, t, i, n, r) {
    let o = n + this.left.height, l = r + this.left.length + this.break, a = t == Y.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, n, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == Y.ByPosNoHeight ? Y.ByPosNoHeight : Y.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, n, r).join(h);
  }
  forEachLine(e, t, i, n, r, o) {
    let l = n + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, n, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, Y.ByPos, i, n, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, n, r, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let n = this.left.length + this.break;
    if (t < n)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - n, t - n, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (e > 0 && Go(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), Go(r, l);
    }
    return Se.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, n = i + this.break;
    if (e >= n)
      return this.right.decomposeRight(e - n, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < n && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Se.of(this.break ? [e, null, t] : [e, t]) : (this.left = e, this.right = t, this.height = e.height + t.height, this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return n && n.from <= t + r.length && n.more ? a = r = r.updateHeight(e, t, i, n) : r.updateHeight(e, t, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(e, l, i, n) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Go(s, e) {
  let t, i;
  s[e] == null && (t = s[e - 1]) instanceof le && (i = s[e + 1]) instanceof le && s.splice(e - 1, 3, new le(t.length + 1 + i.length));
}
class Vr {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof Te ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Te(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new mh(o, n, i)) : (o || r || n >= 5) && this.addLineDeco(n, r, o);
    } else
      t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Te(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new le(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Te)
      return e;
    let t = new Te(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, e), n.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    !(this.lineStart > -1) || t instanceof Te || this.isCovered ? (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Te(0, -1));
    let i = e;
    for (let n of this.nodes)
      n instanceof Te && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  static build(e, t, i, n) {
    let r = new Vr(i, e);
    return F.spans(t, i, n, r, 0), r.finish(i);
  }
}
class bf {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && Zs(e, t, this.changes, 5);
  }
}
function xf(s, e) {
  let t = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(n.innerHeight, t.bottom);
  for (let h = s.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = h == s.parentNode ? u.bottom : Math.min(a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else {
      if (h.nodeType != 11)
        break;
      h = h.host;
    }
  return { left: r - t.left, right: Math.max(r, o) - t.left, top: l - (t.top + e), bottom: Math.max(l, a) - (t.top + e) };
}
function kf(s, e) {
  let t = s.getBoundingClientRect();
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) };
}
class ps {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.size = i;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i], r = t[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return N.replace({ widget: new Sf(this.size * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to);
  }
}
class Sf extends nt {
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
class Yo {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Xo, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = X.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(Nr).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new vf(t), this.stateDeco = e.facet(Di).filter((i) => typeof i != "function"), this.heightMap = Se.empty().applyChanges(this.stateDeco, q.empty, this.heightOracle.setDoc(e.doc), [new Ie(0, 0, 0, e.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = N.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        e.push(new Ji(r, o));
      }
    }
    this.viewports = e.sort((i, n) => i.from - n.from), this.scaler = this.heightMap.height <= 7e6 ? Xo : new Af(this.heightOracle, this.heightMap, this.viewports);
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(this.scaler.scale == 1 ? e : pi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Di).filter((c) => typeof c != "function");
    let n = e.changedRanges, r = Ie.extendWithRanges(n, function(c, f, u) {
      let d = new bf();
      return F.compare(c, f, u, d, 0), d.changes;
    }(i, this.stateDeco, e ? e.changes : se.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != o && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = !e.changes.empty || 2 & e.flags || a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, this.updateForViewport(), h && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(eh) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? X.RTL : X.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: b, scaleY: x } = Da(t, l);
      (b > 5e-3 && Math.abs(this.scaleX - b) > 5e-3 || x > 5e-3 && Math.abs(this.scaleY - x) > 5e-3) && (this.scaleX = b, this.scaleY = x, h |= 8, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    this.paddingTop == f && this.paddingBottom == u || (this.paddingTop = f, this.paddingBottom = u, h |= 10), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 8);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Ra(e.scrollDOM);
    let p = (this.printing ? kf : xf)(t, this.paddingTop), g = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let v = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (v != this.inView && (this.inView = v, v && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let w = l.width;
    if (this.contentDOMWidth == w && this.editorHeight == e.scrollDOM.clientHeight || (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 8), a) {
      let b = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(b) && (o = !0), o || n.lineWrapping && Math.abs(w - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: x, charWidth: A, textHeight: S } = e.docView.measureTextSize();
        o = x > 0 && n.refresh(r, x, A, S, w / A, b), o && (e.docView.minWidth = 0, h |= 8);
      }
      g > 0 && m > 0 ? c = Math.max(g, m) : g < 0 && m < 0 && (c = Math.min(g, m)), n.heightChanged = !1;
      for (let x of this.viewports) {
        let A = x.from == this.viewport.from ? b : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (o ? Se.empty().applyChanges(this.stateDeco, q.empty, this.heightOracle, [new Ie(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new wf(x.from, A));
      }
      n.heightChanged && (h |= 2);
    }
    let y = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return y && (this.viewport = this.getViewport(c, this.scrollTarget)), this.updateForViewport(), (2 & h || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Ji(n.lineAt(o - 1e3 * i, Y.ByHeight, r, 0, 0).from, n.lineAt(l + 1e3 * (1 - i), Y.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c, f = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = n.lineAt(h, Y.ByPos, r, 0, 0);
        c = t.y == "center" ? (u.top + u.bottom) / 2 - f / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u.top : u.bottom - f, a = new Ji(n.lineAt(c - 500, Y.ByHeight, r, 0, 0).from, n.lineAt(c + f + 500, Y.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new Ji(this.heightMap.lineAt(i, Y.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, Y.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, Y.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, Y.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || n <= o - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && n > o - 2e3 && r < l + 2e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || i.push(new ps(t.mapPos(n.from), t.mapPos(n.to), n.size));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, o = n << 1;
    if (this.defaultTextDirection != X.LTR && !i)
      return [];
    let l = [], a = (h, c, f, u) => {
      if (c - h < r)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let m of p)
        if (m > h && m < c)
          return a(h, m - 10, f, u), void a(m + 10, c, f, u);
      let g = function(m, v) {
        for (let w of m)
          if (v(w))
            return w;
      }(e, (m) => m.from >= f.from && m.to <= f.to && Math.abs(m.from - h) < r && Math.abs(m.to - c) < r && !p.some((v) => m.from < v && m.to > v));
      if (!g) {
        if (c < f.to && t && i && t.visibleRanges.some((m) => m.from <= c && m.to >= c)) {
          let m = t.moveToLineBoundary(k.cursor(c), !1, !0).head;
          m > h && (c = m);
        }
        g = new ps(h, c, this.gapSize(f, h, c, u));
      }
      l.push(g);
    };
    for (let h of this.viewportLines) {
      if (h.length < o)
        continue;
      let c = Cf(h.from, h.to, this.stateDeco);
      if (c.total < o)
        continue;
      let f, u, d = this.scrollTarget ? this.scrollTarget.range.head : null;
      if (i) {
        let p, g, m = n / this.heightOracle.lineLength * this.heightOracle.lineHeight;
        if (d != null) {
          let v = Zi(c, d), w = ((this.visibleBottom - this.visibleTop) / 2 + m) / h.height;
          p = v - w, g = v + w;
        } else
          p = (this.visibleTop - h.top - m) / h.height, g = (this.visibleBottom - h.top + m) / h.height;
        f = Qi(c, p), u = Qi(c, g);
      } else {
        let p, g, m = c.total * this.heightOracle.charWidth, v = n * this.heightOracle.charWidth;
        if (d != null) {
          let w = Zi(c, d), y = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + v) / m;
          p = w - y, g = w + y;
        } else
          p = (this.pixelViewport.left - v) / m, g = (this.pixelViewport.right + v) / m;
        f = Qi(c, p), u = Qi(c, g);
      }
      f > h.from && a(h.from, f, h, c), u < h.to && a(u, h.to, h, c);
    }
    return l;
  }
  gapSize(e, t, i, n) {
    let r = Zi(n, i) - Zi(n, t);
    return this.heightOracle.lineWrapping ? e.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    ps.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = N.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    F.spans(e, this.viewport.from, this.viewport.to, { span(n, r) {
      t.push({ from: n, to: r });
    }, point() {
    } }, 20);
    let i = t.length != this.visibleRanges.length || this.visibleRanges.some((n, r) => n.from != t[r].from || n.to != t[r].to);
    return this.visibleRanges = t, i ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || pi(this.heightMap.lineAt(e, Y.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return pi(this.heightMap.lineAt(this.scaler.fromDOM(e), Y.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return pi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Ji {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Cf(s, e, t) {
  let i = [], n = s, r = 0;
  return F.spans(t, s, e, { span() {
  }, point(o, l) {
    o > n && (i.push({ from: n, to: o }), r += o - n), n = l;
  } }, 20), n < e && (i.push({ from: n, to: e }), r += e - n), { total: r, ranges: i };
}
function Qi({ total: s, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(s * t);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = e[n], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function Zi(s, e) {
  let t = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (e <= n) {
      t += e - i;
      break;
    }
    t += n - i;
  }
  return t / s.total;
}
const Xo = { toDOM: (s) => s, fromDOM: (s) => s, scale: 1 };
class Af {
  constructor(e, t, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, Y.ByPos, e, 0, 0).top, c = t.lineAt(a, Y.ByPos, e, 0, 0).bottom;
      return n += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return n + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - n) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
}
function pi(s, e) {
  if (e.scale == 1)
    return s;
  let t = e.toDOM(s.top), i = e.toDOM(s.bottom);
  return new Je(s.from, s.length, t, i - t, Array.isArray(s._content) ? s._content.map((n) => pi(n, e)) : s._content);
}
const _i = R.define({ combine: (s) => s.join(" ") }), or = R.define({ combine: (s) => s.indexOf(!0) > -1 }), lr = yt.newName(), gh = yt.newName(), vh = yt.newName(), wh = { "&light": "." + gh, "&dark": "." + vh };
function ar(s, e, t) {
  return new yt(e, { finish: (i) => /&/.test(i) ? i.replace(/&\w*/, (n) => {
    if (n == "&")
      return s;
    if (!t || !t[n])
      throw new RangeError(`Unsupported selector: ${n}`);
    return t[n];
  }) : s + " " + i });
}
const Mf = ar("." + lr, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0 }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#444" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" }, ".cm-highlightSpace:before": { content: "attr(data-display)", position: "absolute", pointerEvents: "none", color: "#888" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, wh), mi = "￿";
class Of {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(z.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += mi;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = n.nextSibling;
      if (o == t)
        break;
      let l = $.get(n), a = $.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : Mn(n)) || Mn(o) && (n.nodeName != "BR" || n.cmIgnore) && this.text.length > r) && this.lineBreak(), n = o;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r, o = -1, l = 1;
      if (this.lineSeparator ? (o = t.indexOf(this.lineSeparator, i), l = this.lineSeparator.length) : (r = n.exec(t)) && (o = r.index, l = r[0].length), this.append(t.slice(i, o < 0 ? t.length : o)), o < 0)
        break;
      if (this.lineBreak(), l > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= l - 1);
      i = o + l;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = $.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (Df(e, i.node, i.offset) ? t : 0));
  }
}
function Df(s, e, t) {
  for (; ; ) {
    if (!e || t < ot(e))
      return !1;
    if (e == s)
      return !0;
    t = Bt(e) + 1, e = e.parentNode;
  }
}
class Jo {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Tf {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "";
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = r || o ? [] : function(h) {
        let c = [];
        if (h.root.activeElement != h.contentDOM)
          return c;
        let { anchorNode: f, anchorOffset: u, focusNode: d, focusOffset: p } = h.observer.selectionRange;
        return f && (c.push(new Jo(f, u)), d == f && p == u || c.push(new Jo(d, p))), c;
      }(e), a = new Of(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = function(h, c) {
        if (h.length == 0)
          return null;
        let f = h[0].pos, u = h.length == 2 ? h[1].pos : f;
        return f > -1 && u > -1 ? k.single(f + c, u + c) : null;
      }(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !Us(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Us(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = e.viewport;
      if ((B.ios || B.chrome) && e.state.selection.main.empty && a != h && (c.from > 0 || c.to < e.state.doc.length)) {
        let f = Math.min(a, h), u = Math.max(a, h), d = c.from - f, p = c.to - u;
        d != 0 && d != 1 && f != 0 || p != 0 && p != -1 && u != e.state.doc.length || (a = 0, h = e.state.doc.length);
      }
      this.newSel = k.single(h, a);
    }
  }
}
function yh(s, e) {
  let t, { newSel: i } = e, n = s.state.selection.main, r = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = n.from, h = null;
    (r === 8 || B.android && e.text.length < l - o) && (a = n.to, h = "end");
    let c = function(f, u, d, p) {
      let g = Math.min(f.length, u.length), m = 0;
      for (; m < g && f.charCodeAt(m) == u.charCodeAt(m); )
        m++;
      if (m == g && f.length == u.length)
        return null;
      let v = f.length, w = u.length;
      for (; v > 0 && w > 0 && f.charCodeAt(v - 1) == u.charCodeAt(w - 1); )
        v--, w--;
      return p == "end" && (d -= v + Math.max(0, m - Math.min(v, w)) - m), v < m && f.length < u.length ? (m -= d <= m && d >= v ? m - d : 0, w = m + (w - v), v = m) : w < m && (m -= d <= m && d >= w ? m - d : 0, v = m + (v - w), w = m), { from: m, toA: v, toB: w };
    }(s.state.doc.sliceString(o, l, mi), e.text, a - o, h);
    c && (B.chrome && r == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == mi + mi && c.toB--, t = { from: o + c.from, to: o + c.toA, insert: q.of(e.text.slice(c.from, c.toB).split(mi)) });
  } else
    i && (!s.hasFocus && s.state.facet(Qn) || i.main.eq(n)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !n.empty && i && i.main.empty ? t = { from: n.from, to: n.to, insert: s.state.doc.slice(n.from, n.to) } : t && t.from >= n.from && t.to <= n.to && (t.from != n.from || t.to != n.to) && n.to - n.from - (t.to - t.from) <= 4 ? t = { from: n.from, to: n.to, insert: s.state.doc.slice(n.from, t.from).append(t.insert).append(s.state.doc.slice(t.to, n.to)) } : (B.mac || B.android) && t && t.from == t.to && t.from == n.head - 1 && /^\. ?$/.test(t.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: n.from, to: n.to, insert: q.of([" "]) }) : B.chrome && t && t.from == t.to && t.from == n.head && t.insert.toString() == `
 ` && s.lineWrapping && (i && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: n.from, to: n.to, insert: q.of([" "]) }), t) {
    if (B.ios && s.inputState.flushIOSKey(t) || B.android && (t.to == n.to && (t.from == n.from || t.from == n.from - 1 && s.state.sliceDoc(t.from, n.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && Ut(s.contentDOM, "Enter", 13) || (t.from == n.from - 1 && t.to == n.to && t.insert.length == 0 || r == 8 && t.insert.length < t.to - t.from && t.to > n.head) && Ut(s.contentDOM, "Backspace", 8) || t.from == n.from && t.to == n.to + 1 && t.insert.length == 0 && Ut(s.contentDOM, "Delete", 46)))
      return !0;
    let o, l = t.insert.toString();
    s.inputState.composing >= 0 && s.inputState.composing++;
    let a = () => o || (o = function(h, c, f) {
      let u, d = h.state, p = d.selection.main;
      if (c.from >= p.from && c.to <= p.to && c.to - c.from >= (p.to - p.from) / 3 && (!f || f.main.empty && f.main.from == c.from + c.insert.length) && h.inputState.composing < 0) {
        let m = p.from < c.from ? d.sliceDoc(p.from, c.from) : "", v = p.to > c.to ? d.sliceDoc(c.to, p.to) : "";
        u = d.replaceSelection(h.state.toText(m + c.insert.sliceString(0, void 0, h.state.lineBreak) + v));
      } else {
        let m = d.changes(c), v = f && f.main.to <= m.newLength ? f.main : void 0;
        if (d.selection.ranges.length > 1 && h.inputState.composing >= 0 && c.to <= p.to && c.to >= p.to - 10) {
          let w, y = h.state.sliceDoc(c.from, c.to), b = f && lh(h, f.main.head);
          if (b) {
            let S = c.insert.length - (c.to - c.from);
            w = { from: b.from, to: b.to - S };
          } else
            w = h.state.doc.lineAt(p.head);
          let x = p.to - c.to, A = p.to - p.from;
          u = d.changeByRange((S) => {
            if (S.from == p.from && S.to == p.to)
              return { changes: m, range: v || S.map(m) };
            let L = S.to - x, C = L - y.length;
            if (S.to - S.from != A || h.state.sliceDoc(C, L) != y || S.to >= w.from && S.from <= w.to)
              return { range: S };
            let D = d.changes({ from: C, to: L, insert: c.insert }), T = S.to - p.to;
            return { changes: D, range: v ? k.range(Math.max(0, v.anchor + T), Math.max(0, v.head + T)) : S.map(D) };
          });
        } else
          u = { changes: m, selection: v && d.selection.replaceRange(v) };
      }
      let g = "input.type";
      return (h.composing || h.inputState.compositionPendingChange && h.inputState.compositionEndedAt > Date.now() - 50) && (h.inputState.compositionPendingChange = !1, g += ".compose", h.inputState.compositionFirstChange && (g += ".start", h.inputState.compositionFirstChange = !1)), d.update(u, { userEvent: g, scrollIntoView: !0 });
    }(s, t, i));
    return s.state.facet(Qa).some((h) => h(s, t.from, t.to, l, a)) || s.dispatch(a()), !0;
  }
  if (i && !i.main.eq(n)) {
    let o = !1, l = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (o = !0), l = s.inputState.lastSelectionOrigin), s.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  }
  return !1;
}
const Ef = { childList: !0, characterData: !0, subtree: !0, attributes: !0, characterDataOldValue: !0 }, ms = B.ie && B.ie_version <= 11;
class Rf {
  constructor(e) {
    this.view = e, this.active = !1, this.selectionRange = new _c(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (B.ie && B.ie_version <= 11 || B.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), ms && (this.onCharData = (t) => {
      this.queue.push({ target: t.target, type: "characterData", oldValue: t.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
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
  onPrint(e) {
    (e.type != "change" || e.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
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
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(Qn) ? i.root.activeElement != this.dom : !vn(i.dom, n))
      return;
    let r = n.anchorNode && i.docView.nearest(n.anchorNode);
    r && r.ignoreEvent(e) ? t || (this.selectionChanged = !1) : (B.ie && B.ie_version <= 11 || B.android && B.chrome) && !i.state.selection.main.empty && n.focusNode && yi(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = An(e.root);
    if (!t)
      return !1;
    let i = B.safari && e.root.nodeType == 11 && function(r) {
      let o = r.activeElement;
      for (; o && o.shadowRoot; )
        o = o.shadowRoot.activeElement;
      return o;
    }(this.dom.ownerDocument) == this.dom && function(r, o) {
      if (o.getComposedRanges) {
        let h = o.getComposedRanges(r.root)[0];
        if (h)
          return Zo(r, h);
      }
      let l = null;
      function a(h) {
        h.preventDefault(), h.stopImmediatePropagation(), l = h.getTargetRanges()[0];
      }
      return r.contentDOM.addEventListener("beforeinput", a, !0), r.dom.ownerDocument.execCommand("indent"), r.contentDOM.removeEventListener("beforeinput", a, !0), l ? Zo(r, l) : null;
    }(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = vn(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && function(r, o) {
      let l = o.focusNode, a = o.focusOffset;
      if (!l || o.anchorNode != l || o.anchorOffset != a)
        return !1;
      for (a = Math.min(a, ot(l)); ; )
        if (a) {
          if (l.nodeType != 1)
            return !1;
          let h = l.childNodes[a - 1];
          h.contentEditable == "false" ? a-- : (l = h, a = ot(l));
        } else {
          if (l == r)
            return !0;
          a = Bt(l), l = l.parentNode;
        }
    }(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
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
      else {
        if (i.nodeType != 11)
          break;
        i = i.host;
      }
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
    this.active || (this.observer.observe(this.dom, Ef), ms && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), ms && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Ut(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    this.delayedAndroidKey && e != "Enter" || (this.delayedAndroidKey = { key: e, keyCode: t, force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force) });
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
    let t = -1, i = -1, n = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (n = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: n };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && vn(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new Tf(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, n = yh(this.view, t);
    return this.view.state == i && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = Qo(t, e.previousSibling || e.target.previousSibling, -1), n = Qo(t, e.nextSibling || e.target.nextSibling, 1);
      return { from: i ? t.posAfter(i) : t.posAtStart, to: n ? t.posBefore(n) : t.posAtEnd, typeOver: !1 };
    }
    return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener("change", this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener("change", this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function Qo(s, e, t) {
  for (; e; ) {
    let i = $.get(e);
    if (i && i.parent == s)
      return i;
    let n = e.parentNode;
    e = n != s.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Zo(s, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, r = e.endOffset, o = s.docView.domAtPos(s.state.selection.main.anchor);
  return yi(o.node, o.offset, n, r) && ([t, i, n, r] = [n, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r };
}
class E {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: t } = e;
    this.dispatchTransactions = e.dispatchTransactions || t && ((i) => i.forEach((n) => t(n, this))) || ((i) => this.update(i)), this.dispatch = this.dispatch.bind(this), this._root = e.root || function(i) {
      for (; i; ) {
        if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
          return i;
        i = i.assignedSlot || i.parentNode;
      }
      return null;
    }(e.parent) || document, this.viewState = new Yo(e.state || z.create(e)), e.scrollTo && e.scrollTo.is(Yi) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ui).map((i) => new fs(i));
    for (let i of this.plugins)
      i.update(this);
    this.observer = new Rf(this), this.inputState = new ff(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Oo(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure();
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof te ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t, i = !1, n = !1, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed)
      return void (this.viewState.state = r);
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(dh)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = ph(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(z.phrases) != this.state.facet(z.phrases))
      return this.setState(r);
    t = On.create(this, r, e), t.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new Gt(d.empty ? d : k.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Yi) && (f = d.value.clip(this.state));
      }
      this.viewState.update(t, f), this.bidiCache = Dn.update(this.bidiCache, t.changes), t.empty || (this.updatePlugins(t), this.inputState.update(t)), i = this.docView.update(t), this.state.facet(di) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(i, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (t.startState.facet(_i) != t.state.facet(_i) && (this.viewState.mustMeasureContent = !0), (i || n || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), i && this.docViewUpdate(), !t.empty)
      for (let u of this.state.facet(ir))
        try {
          u(t);
        } catch (d) {
          Ae(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !yh(this, c) && h.force && Ut(this.contentDOM, h.key, h.keyCode);
    });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed)
      return void (this.viewState.state = e);
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Yo(e), this.plugins = e.facet(ui).map((i) => new fs(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Oo(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(ui), i = e.state.facet(ui);
    if (t != i) {
      let n = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          n.push(new fs(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, n.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = e;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          Ae(this.state, i, "doc view update listener");
        }
    }
  }
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey)
      return this.measureScheduled = -1, void this.requestMeasure();
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, n = i.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(n - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Ra(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(n);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null || l > 5)
          break;
        let h = [];
        4 & a || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Ae(this.state, p), _o;
          }
        }), f = On.create(this, this.state, []), u = !1;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != _o)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              Ae(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) {
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            }
            {
              let d = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (d > 1 || d < -1) {
                n += d, i.scrollTop = n / this.scaleY, o = -1;
                continue;
              }
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(ir))
        l(t);
  }
  get themeClasses() {
    return lr + " " + (this.state.facet(or) ? vh : gh) + " " + this.state.facet(_i);
  }
  updateAttrs() {
    let e = el(this, ih, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), t = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", translate: "no", contenteditable: this.state.facet(Qn) ? "true" : "false", class: "cm-content", style: `${B.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (t["aria-readonly"] = "true"), el(this, Nr, t);
    let i = this.observer.ignore(() => {
      let n = Qs(this.contentDOM, this.contentAttrs, t), r = Qs(this.dom, this.editorAttrs, e);
      return n || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let n of i.effects)
        n.is(E.announce) && (t && (this.announceDOM.textContent = ""), t = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = n.value);
  }
  mountStyles() {
    this.styleModules = this.state.facet(di);
    let e = this.state.facet(E.cspNonce);
    yt.mount(this.root, this.styleModules.concat(Mf).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key)
            return void (this.measureRequests[t] = e);
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.spec != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.spec == e) || null), t && t.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return ds(this, e, Po(this, e, t, i));
  }
  moveByGroup(e, t) {
    return ds(this, e, Po(this, e, t, (i) => function(n, r, o) {
      let l = n.state.charCategorizer(r), a = l(o);
      return (h) => {
        let c = l(h);
        return a == J.Space && (a = c), a == c;
      };
    }(this, e.head, i)));
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), n = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return k.cursor(r.side(t, n) + e.from, r.forward(!t, n) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = !0) {
    return function(n, r, o, l) {
      let a = sr(n, r.head), h = l && a.type == ke.Text && (n.lineWrapping || a.widgetLineBreaks) ? n.coordsAtPos(r.assoc < 0 && r.head > a.from ? r.head - 1 : r.head) : null;
      if (h) {
        let c = n.dom.getBoundingClientRect(), f = n.textDirectionAt(a.from), u = n.posAtCoords({ x: o == (f == X.LTR) ? c.right - 1 : c.left + 1, y: (h.top + h.bottom) / 2 });
        if (u != null)
          return k.cursor(u, o ? -1 : 1);
      }
      return k.cursor(o ? a.to : a.from, o ? -1 : 1);
    }(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return ds(this, e, function(n, r, o, l) {
      let a = r.head, h = o ? 1 : -1;
      if (a == (o ? n.state.doc.length : 0))
        return k.cursor(a, r.assoc);
      let c, f = r.goalColumn, u = n.contentDOM.getBoundingClientRect(), d = n.coordsAtPos(a, r.assoc || -1), p = n.documentTop;
      if (d)
        f == null && (f = d.left - u.left), c = h < 0 ? d.top : d.bottom;
      else {
        let v = n.viewState.lineBlockAt(a);
        f == null && (f = Math.min(u.right - u.left, n.defaultCharacterWidth * (a - v.from))), c = (h < 0 ? v.top : v.bottom) + p;
      }
      let g = u.left + f, m = l ?? n.viewState.heightOracle.textHeight >> 1;
      for (let v = 0; ; v += 10) {
        let w = c + (m + v) * h, y = Bo(n, { x: g, y: w }, !1, h);
        if (w < u.top || w > u.bottom || (h < 0 ? y < a : y > a)) {
          let b = n.docView.coordsForChar(y), x = !b || w < b.top ? -1 : 1;
          return k.cursor(y, x, void 0, f);
        }
      }
    }(this, e, t, i));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), Bo(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let n = this.state.doc.lineAt(e), r = this.bidiSpans(n);
    return Xn(i, r[pt.find(r, e - n.from, -1, t)].dir == X.LTR == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(_a) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Bf)
      return Ao(e.length);
    let t, i = this.textDirectionAt(e.from);
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == i && (r.fresh || $a(r.isolates, t = Mo(this, e))))
        return r.order;
    t || (t = Mo(this, e));
    let n = function(r, o, l) {
      if (!r)
        return [new pt(0, 0, o == Pr ? 1 : 0)];
      if (o == Pt && !l.length && !sf.test(r))
        return Ao(r.length);
      if (l.length)
        for (; r.length > K.length; )
          K[K.length] = 256;
      let a = [], h = o == Pt ? 0 : 1;
      return tr(r, h, h, l, 0, r.length, a), a;
    }(e.text, i, t);
    return this.bidiCache.push(new Dn(e.from, e.to, i, t, !0, n)), n;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || B.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      Ta(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  static scrollIntoView(e, t = {}) {
    return Yi.of(new Gt(typeof e == "number" ? k.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Yi.of(new Gt(k.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  static domEventHandlers(e) {
    return _.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return _.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = yt.newName(), n = [_i.of(i), di.of(ar(`.${i}`, e))];
    return t && t.dark && n.push(or.of(!0)), n;
  }
  static baseTheme(e) {
    return Ct.lowest(di.of(ar("." + lr, e, wh)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), n = i && $.get(i) || $.get(e);
    return ((t = n == null ? void 0 : n.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
E.styleModule = di, E.inputHandler = Qa, E.scrollHandler = th, E.focusChangeEffect = Za, E.perLineTextDirection = _a, E.exceptionSink = Ja, E.updateListener = ir, E.editable = Qn, E.mouseSelectionStyle = Xa, E.dragMovesSelection = Ya, E.clickAddsSelectionRange = Ga, E.decorations = Di, E.outerDecorations = nh, E.atomicRanges = Ir, E.bidiIsolatedRanges = sh, E.scrollMargins = rh, E.darkTheme = or, E.cspNonce = R.define({ combine: (s) => s.length ? s[0] : "" }), E.contentAttributes = Nr, E.editorAttributes = ih, E.lineWrapping = E.contentAttributes.of({ class: "cm-lineWrapping" }), E.announce = H.define();
const Bf = 4096, _o = {};
class Dn {
  constructor(e, t, i, n, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : X.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir != n || t.touchesRange(o.from, o.to) || i.push(new Dn(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function el(s, e, t) {
  for (let i = s.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && Js(o, t);
  }
  return t;
}
const Lf = B.mac ? "mac" : B.windows ? "win" : B.linux ? "linux" : "key";
function en(s, e, t) {
  return e.altKey && (s = "Alt-" + s), e.ctrlKey && (s = "Ctrl-" + s), e.metaKey && (s = "Meta-" + s), t !== !1 && e.shiftKey && (s = "Shift-" + s), s;
}
const Pf = Ct.default(E.domEventHandlers({ keydown: (s, e) => xh(bh(e.state), s, e, "editor") })), Zn = R.define({ enables: Pf }), tl = /* @__PURE__ */ new WeakMap();
function bh(s) {
  let e = s.facet(Zn), t = tl.get(e);
  return t || tl.set(e, t = function(i, n = Lf) {
    let r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null), l = (h, c) => {
      let f = o[h];
      if (f == null)
        o[h] = c;
      else if (f != c)
        throw new Error("Key binding " + h + " is used both as a regular binding and as a multi-stroke prefix");
    }, a = (h, c, f, u, d) => {
      var p, g;
      let m = r[h] || (r[h] = /* @__PURE__ */ Object.create(null)), v = c.split(/ (?!$)/).map((b) => function(x, A) {
        const S = x.split(/-(?!$)/);
        let L, C, D, T, P = S[S.length - 1];
        P == "Space" && (P = " ");
        for (let V = 0; V < S.length - 1; ++V) {
          const I = S[V];
          if (/^(cmd|meta|m)$/i.test(I))
            T = !0;
          else if (/^a(lt)?$/i.test(I))
            L = !0;
          else if (/^(c|ctrl|control)$/i.test(I))
            C = !0;
          else if (/^s(hift)?$/i.test(I))
            D = !0;
          else {
            if (!/^mod$/i.test(I))
              throw new Error("Unrecognized modifier name: " + I);
            A == "mac" ? T = !0 : C = !0;
          }
        }
        return L && (P = "Alt-" + P), C && (P = "Ctrl-" + P), T && (P = "Meta-" + P), D && (P = "Shift-" + P), P;
      }(b, n));
      for (let b = 1; b < v.length; b++) {
        let x = v.slice(0, b).join(" ");
        l(x, !0), m[x] || (m[x] = { preventDefault: !0, stopPropagation: !1, run: [(A) => {
          let S = ft = { view: A, prefix: x, scope: h };
          return setTimeout(() => {
            ft == S && (ft = null);
          }, Nf), !0;
        }] });
      }
      let w = v.join(" ");
      l(w, !1);
      let y = m[w] || (m[w] = { preventDefault: !1, stopPropagation: !1, run: ((g = (p = m._any) === null || p === void 0 ? void 0 : p.run) === null || g === void 0 ? void 0 : g.slice()) || [] });
      f && y.run.push(f), u && (y.preventDefault = !0), d && (y.stopPropagation = !0);
    };
    for (let h of i) {
      let c = h.scope ? h.scope.split(" ") : ["editor"];
      if (h.any)
        for (let u of c) {
          let d = r[u] || (r[u] = /* @__PURE__ */ Object.create(null));
          d._any || (d._any = { preventDefault: !1, stopPropagation: !1, run: [] });
          for (let p in d)
            d[p].run.push(h.any);
        }
      let f = h[n] || h.key;
      if (f)
        for (let u of c)
          a(u, f, h.run, h.preventDefault, h.stopPropagation), h.shift && a(u, "Shift-" + f, h.shift, h.preventDefault, h.stopPropagation);
    }
    return r;
  }(e.reduce((i, n) => i.concat(n), []))), t;
}
let ft = null;
const Nf = 4e3;
function xh(s, e, t, i) {
  let n = function(g) {
    var m = !(Jc && g.metaKey && g.shiftKey && !g.ctrlKey && !g.altKey || Qc && g.shiftKey && g.key && g.key.length == 1 || g.key == "Unidentified") && g.key || (g.shiftKey ? Mi : bt)[g.keyCode] || g.key || "Unidentified";
    return m == "Esc" && (m = "Escape"), m == "Del" && (m = "Delete"), m == "Left" && (m = "ArrowLeft"), m == "Up" && (m = "ArrowUp"), m == "Right" && (m = "ArrowRight"), m == "Down" && (m = "ArrowDown"), m;
  }(e), r = Ne(he(n, 0)) == n.length && n != " ", o = "", l = !1, a = !1, h = !1;
  ft && ft.view == t && ft.scope == i && (o = ft.prefix + " ", hh.indexOf(e.keyCode) < 0 && (a = !0, ft = null));
  let c, f, u = /* @__PURE__ */ new Set(), d = (g) => {
    if (g) {
      for (let m of g.run)
        if (!u.has(m) && (u.add(m), m(t, e)))
          return g.stopPropagation && (h = !0), !0;
      g.preventDefault && (g.stopPropagation && (h = !0), a = !0);
    }
    return !1;
  }, p = s[i];
  return p && (d(p[o + en(n, e, !r)]) ? l = !0 : r && (e.altKey || e.metaKey || e.ctrlKey) && !(B.windows && e.ctrlKey && e.altKey) && (c = bt[e.keyCode]) && c != n ? (d(p[o + en(c, e, !0)]) || e.shiftKey && (f = Mi[e.keyCode]) != n && f != c && d(p[o + en(f, e, !1)])) && (l = !0) : r && e.shiftKey && d(p[o + en(n, e, !0)]) && (l = !0), !l && d(p._any) && (l = !0)), a && (l = !0), l && h && e.stopPropagation(), l;
}
class Ti {
  constructor(e, t, i, n, r) {
    this.className = e, this.left = t, this.top = i, this.width = n, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className == this.className && (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let n = e.coordsAtPos(i.head, i.assoc || 1);
      if (!n)
        return [];
      let r = il(e);
      return [new Ti(t, n.left - r.left, n.top - r.top, null, n.bottom - n.top)];
    }
    return function(n, r, o) {
      if (o.to <= n.viewport.from || o.from >= n.viewport.to)
        return [];
      let l = Math.max(o.from, n.viewport.from), a = Math.min(o.to, n.viewport.to), h = n.textDirection == X.LTR, c = n.contentDOM, f = c.getBoundingClientRect(), u = il(n), d = c.querySelector(".cm-line"), p = d && window.getComputedStyle(d), g = f.left + (p ? parseInt(p.paddingLeft) + Math.min(0, parseInt(p.textIndent)) : 0), m = f.right - (p ? parseInt(p.paddingRight) : 0), v = sr(n, l), w = sr(n, a), y = v.type == ke.Text ? v : null, b = w.type == ke.Text ? w : null;
      if (y && (n.lineWrapping || v.widgetLineBreaks) && (y = nl(n, l, y)), b && (n.lineWrapping || w.widgetLineBreaks) && (b = nl(n, a, b)), y && b && y.from == b.from)
        return A(S(o.from, o.to, y));
      {
        let C = y ? S(o.from, null, y) : L(v, !1), D = b ? S(null, o.to, b) : L(w, !0), T = [];
        return (y || v).to < (b || w).from - (y && b ? 1 : 0) || v.widgetLineBreaks > 1 && C.bottom + n.defaultLineHeight / 2 < D.top ? T.push(x(g, C.bottom, m, D.top)) : C.bottom < D.top && n.elementAtHeight((C.bottom + D.top) / 2).type == ke.Text && (C.bottom = D.top = (C.bottom + D.top) / 2), A(C).concat(T).concat(A(D));
      }
      function x(C, D, T, P) {
        return new Ti(r, C - u.left, D - u.top - 0.01, T - C, P - D + 0.01);
      }
      function A({ top: C, bottom: D, horizontal: T }) {
        let P = [];
        for (let V = 0; V < T.length; V += 2)
          P.push(x(T[V], C, T[V + 1], D));
        return P;
      }
      function S(C, D, T) {
        let P = 1e9, V = -1e9, I = [];
        function G(me, re, qe, je, be) {
          let Q = n.coordsAtPos(me, me == T.to ? -2 : 2), ee = n.coordsAtPos(qe, qe == T.from ? 2 : -2);
          Q && ee && (P = Math.min(Q.top, ee.top, P), V = Math.max(Q.bottom, ee.bottom, V), be == X.LTR ? I.push(h && re ? g : Q.left, h && je ? m : ee.right) : I.push(!h && je ? g : ee.left, !h && re ? m : Q.right));
        }
        let j = C ?? T.from, ie = D ?? T.to;
        for (let me of n.visibleRanges)
          if (me.to > j && me.from < ie)
            for (let re = Math.max(me.from, j), qe = Math.min(me.to, ie); ; ) {
              let je = n.state.doc.lineAt(re);
              for (let be of n.bidiSpans(je)) {
                let Q = be.from + je.from, ee = be.to + je.from;
                if (Q >= qe)
                  break;
                ee > re && G(Math.max(Q, re), C == null && Q <= j, Math.min(ee, qe), D == null && ee >= ie, be.dir);
              }
              if (re = je.to + 1, re >= qe)
                break;
            }
        return I.length == 0 && G(j, C == null, ie, D == null, n.textDirection), { top: P, bottom: V, horizontal: I };
      }
      function L(C, D) {
        let T = f.top + (D ? C.top : C.bottom);
        return { top: T, bottom: T, horizontal: [] };
      }
    }(e, t, i);
  }
}
function il(s) {
  let e = s.scrollDOM.getBoundingClientRect();
  return { left: (s.textDirection == X.LTR ? e.left : e.right - s.scrollDOM.clientWidth * s.scaleX) - s.scrollDOM.scrollLeft * s.scaleX, top: e.top - s.scrollDOM.scrollTop * s.scaleY };
}
function nl(s, e, t) {
  let i = k.cursor(e);
  return { from: Math.max(t.from, s.moveToLineBoundary(i, !1, !0).from), to: Math.min(t.to, s.moveToLineBoundary(i, !0, !0).from), type: ke.Text };
}
class If {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(bn) != e.state.facet(bn) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(bn);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    e == this.scaleX && t == this.scaleY || (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => {
      return n = t, r = this.drawn[i], !(n.constructor == r.constructor && n.eq(r));
      var n, r;
    })) {
      let t = this.dom.firstChild, i = 0;
      for (let n of e)
        n.update && t && n.constructor && this.drawn[i].constructor && n.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(n.draw(), t);
      for (; t; ) {
        let n = t.nextSibling;
        t.remove(), t = n;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const bn = R.define();
function kh(s) {
  return [_.define((e) => new If(e, s)), bn.of(s)];
}
const Sh = !B.ios, Ei = R.define({ combine: (s) => it(s, { cursorBlinkRate: 1200, drawRangeCursor: !0 }, { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t }) });
function Vf(s = {}) {
  return [Ei.of(s), Hf, Wf, Ff, eh.of(!0)];
}
function Ch(s) {
  return s.startState.facet(Ei) != s.state.facet(Ei);
}
const Hf = kh({ above: !0, markers(s) {
  let { state: e } = s, t = e.facet(Ei), i = [];
  for (let n of e.selection.ranges) {
    let r = n == e.selection.main;
    if (n.empty ? !r || Sh : t.drawRangeCursor) {
      let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = n.empty ? n : k.cursor(n.head, n.head > n.anchor ? -1 : 1);
      for (let a of Ti.forRange(s, o, l))
        i.push(a);
    }
  }
  return i;
}, update(s, e) {
  s.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let t = Ch(s);
  return t && sl(s.state, e), s.docChanged || s.selectionSet || t;
}, mount(s, e) {
  sl(e.state, s);
}, class: "cm-cursorLayer" });
function sl(s, e) {
  e.style.animationDuration = s.facet(Ei).cursorBlinkRate + "ms";
}
const Wf = kh({ above: !1, markers: (s) => s.state.selection.ranges.map((e) => e.empty ? [] : Ti.forRange(s, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t)), update: (s, e) => s.docChanged || s.selectionSet || s.viewportChanged || Ch(s), class: "cm-selectionLayer" }), hr = { ".cm-line": { "& ::selection": { backgroundColor: "transparent !important" }, "&::selection": { backgroundColor: "transparent !important" } } };
Sh && (hr[".cm-line"].caretColor = "transparent !important", hr[".cm-content"] = { caretColor: "transparent !important" });
const Ff = Ct.highest(E.theme(hr)), Ah = H.define({ map: (s, e) => s == null ? null : e.mapPos(s) }), gi = oe.define({ create: () => null, update: (s, e) => (s != null && (s = e.changes.mapPos(s)), e.effects.reduce((t, i) => i.is(Ah) ? i.value : t, s)) }), zf = _.fromClass(class {
  constructor(s) {
    this.view = s, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(s) {
    var e;
    let t = s.state.field(gi);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (s.startState.field(gi) != t || s.docChanged || s.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: s } = this, e = s.state.field(gi), t = e != null && s.coordsAtPos(e);
    if (!t)
      return null;
    let i = s.scrollDOM.getBoundingClientRect();
    return { left: t.left - i.left + s.scrollDOM.scrollLeft * s.scaleX, top: t.top - i.top + s.scrollDOM.scrollTop * s.scaleY, height: t.bottom - t.top };
  }
  drawCursor(s) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      s ? (this.cursor.style.left = s.left / e + "px", this.cursor.style.top = s.top / t + "px", this.cursor.style.height = s.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(s) {
    this.view.state.field(gi) != s && this.view.dispatch({ effects: Ah.of(s) });
  }
}, { eventObservers: { dragover(s) {
  this.setDropPos(this.view.posAtCoords({ x: s.clientX, y: s.clientY }));
}, dragleave(s) {
  s.target != this.view.contentDOM && this.view.contentDOM.contains(s.relatedTarget) || this.setDropPos(null);
}, dragend() {
  this.setDropPos(null);
}, drop() {
  this.setDropPos(null);
} } });
function rl(s, e, t, i, n) {
  e.lastIndex = 0;
  for (let r, o = s.iterRange(t, i), l = t; !o.next().done; l += o.value.length)
    if (!o.lineBreak)
      for (; r = e.exec(o.value); )
        n(l + r.index, r);
}
class qf {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: n, boundary: r, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, n)
      this.addMatch = (l, a, h, c) => n(c, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else {
      if (!i)
        throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    }
    this.boundary = r, this.maxLength = o;
  }
  createDeco(e) {
    let t = new wt(), i = t.add.bind(t);
    for (let { from: n, to: r } of function(o, l) {
      let a = o.visibleRanges;
      if (a.length == 1 && a[0].from == o.viewport.from && a[0].to == o.viewport.to)
        return a;
      let h = [];
      for (let { from: c, to: f } of a)
        c = Math.max(o.state.doc.lineAt(c).from, c - l), f = Math.min(o.state.doc.lineAt(f).to, f + l), h.length && h[h.length - 1].to >= c ? h[h.length - 1].to = f : h.push({ from: c, to: f });
      return h;
    }(e, this.maxLength))
      rl(e.state.doc, this.regexp, n, r, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1e9, n = -1;
    return e.docChanged && e.changes.iterChanges((r, o, l, a) => {
      a > e.view.viewport.from && l < e.view.viewport.to && (i = Math.min(l, i), n = Math.max(a, n));
    }), e.viewportChanged || n - i > 1e3 ? this.createDeco(e.view) : n > -1 ? this.updateRange(e.view, t.map(e.changes), i, n) : t;
  }
  updateRange(e, t, i, n) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, i), l = Math.min(r.to, n);
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
        let u, d = [], p = (g, m, v) => d.push(v.range(g, m));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (u = this.regexp.exec(a.text)) && u.index < f - a.from; )
            this.addMatch(u, e, u.index + a.from, p);
        else
          rl(e.state.doc, this.regexp, c, f, (g, m) => this.addMatch(m, e, g, p));
        t = t.update({ filterFrom: c, filterTo: f, filter: (g, m) => g < c || m > f, add: d });
      }
    }
    return t;
  }
}
const cr = /x/.unicode != null ? "gu" : "g", jf = new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, cr), Kf = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" };
let gs = null;
const tn = R.define({ combine(s) {
  let e = it(s, { render: null, specialChars: jf, addSpecialChars: null });
  return (e.replaceTabs = !function() {
    var t;
    if (gs == null && typeof document < "u" && document.body) {
      let i = document.body.style;
      gs = ((t = i.tabSize) !== null && t !== void 0 ? t : i.MozTabSize) != null;
    }
    return gs || !1;
  }()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, cr)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, cr)), e;
} });
function $f(s = {}) {
  return [tn.of(s), ol || (ol = _.fromClass(class {
    constructor(e) {
      this.view = e, this.decorations = N.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(e.state.facet(tn)), this.decorations = this.decorator.createDeco(e);
    }
    makeDecorator(e) {
      return new qf({ regexp: e.specialChars, decoration: (t, i, n) => {
        let { doc: r } = i.state, o = he(t[0], 0);
        if (o == 9) {
          let l = r.lineAt(n), a = i.state.tabSize, h = ni(l.text, a, n - l.from);
          return N.replace({ widget: new Gf((a - h % a) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[o] || (this.decorationCache[o] = N.replace({ widget: new Uf(e, o) }));
      }, boundary: e.replaceTabs ? void 0 : /[^]/ });
    }
    update(e) {
      let t = e.state.facet(tn);
      e.startState.facet(tn) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(e.view)) : this.decorations = this.decorator.updateDeco(e, this.decorations);
    }
  }, { decorations: (e) => e.decorations }))];
}
let ol = null;
class Uf extends nt {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = function(o) {
      return o >= 32 ? "•" : o == 10 ? "␤" : String.fromCharCode(9216 + o);
    }(this.code), i = e.state.phrase("Control character") + " " + (Kf[this.code] || "0x" + this.code.toString(16)), n = this.options.render && this.options.render(this.code, i, t);
    if (n)
      return n;
    let r = document.createElement("span");
    return r.textContent = t, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class Gf extends nt {
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
const Yf = N.line({ class: "cm-activeLine" }), Xf = _.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.docChanged || s.selectionSet) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let e = -1, t = [];
    for (let i of s.state.selection.ranges) {
      let n = s.lineBlockAt(i.head);
      n.from > e && (t.push(Yf.range(n.from)), e = n.from);
    }
    return N.set(t);
  }
}, { decorations: (s) => s.decorations });
class Jf extends nt {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content), typeof this.content == "string" ? e.setAttribute("aria-label", "placeholder " + this.content) : e.setAttribute("aria-hidden", "true"), e;
  }
  coordsAt(e) {
    let t = e.firstChild ? _t(e.firstChild) : [];
    if (!t.length)
      return null;
    let i = window.getComputedStyle(e.parentNode), n = Xn(t[0], i.direction != "rtl"), r = parseInt(i.lineHeight);
    return n.bottom - n.top > 1.5 * r ? { left: n.left, right: n.right, top: n.top, bottom: n.top + r } : n;
  }
  ignoreEvent() {
    return !1;
  }
}
function Ep(s) {
  return _.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = s ? N.set([N.widget({ widget: new Jf(s), side: 1 }).range(0)]) : N.none;
    }
    get decorations() {
      return this.view.state.doc.length ? N.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
}
const fr = 2e3;
function ll(s, e) {
  let t = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), i = s.state.doc.lineAt(t), n = t - i.from, r = n > fr ? -1 : n == i.length ? function(o, l) {
    let a = o.coordsAtPos(o.viewport.from);
    return a ? Math.round(Math.abs((a.left - l) / o.defaultCharacterWidth)) : -1;
  }(s, e.clientX) : ni(i.text, s.state.tabSize, t - i.from);
  return { line: i.number, col: r, off: n };
}
function Qf(s, e) {
  let t = ll(s, e), i = s.state.selection;
  return t ? { update(n) {
    if (n.docChanged) {
      let r = n.changes.mapPos(n.startState.doc.line(t.line).from), o = n.state.doc.lineAt(r);
      t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, i = i.map(n.changes);
    }
  }, get(n, r, o) {
    let l = ll(s, n);
    if (!l)
      return i;
    let a = function(h, c, f) {
      let u = Math.min(c.line, f.line), d = Math.max(c.line, f.line), p = [];
      if (c.off > fr || f.off > fr || c.col < 0 || f.col < 0) {
        let g = Math.min(c.off, f.off), m = Math.max(c.off, f.off);
        for (let v = u; v <= d; v++) {
          let w = h.doc.line(v);
          w.length <= m && p.push(k.range(w.from + g, w.to + m));
        }
      } else {
        let g = Math.min(c.col, f.col), m = Math.max(c.col, f.col);
        for (let v = u; v <= d; v++) {
          let w = h.doc.line(v), y = Ks(w.text, g, h.tabSize, !0);
          if (y < 0)
            p.push(k.cursor(w.to));
          else {
            let b = Ks(w.text, m, h.tabSize);
            p.push(k.range(w.from + y, w.from + b));
          }
        }
      }
      return p;
    }(s.state, t, l);
    return a.length ? o ? k.create(a.concat(i.ranges)) : k.create(a) : i;
  } } : null;
}
function Zf(s) {
  let e = (s == null ? void 0 : s.eventFilter) || ((t) => t.altKey && t.button == 0);
  return E.mouseSelectionStyle.of((t, i) => e(i) ? Qf(t, i) : null);
}
const _f = { Alt: [18, (s) => !!s.altKey], Control: [17, (s) => !!s.ctrlKey], Shift: [16, (s) => !!s.shiftKey], Meta: [91, (s) => !!s.metaKey] }, eu = { style: "cursor: crosshair" };
function tu(s = {}) {
  let [e, t] = _f[s.key || "Alt"], i = _.fromClass(class {
    constructor(n) {
      this.view = n, this.isDown = !1;
    }
    set(n) {
      this.isDown != n && (this.isDown = n, this.view.update([]));
    }
  }, { eventObservers: { keydown(n) {
    this.set(n.keyCode == e || t(n));
  }, keyup(n) {
    n.keyCode != e && t(n) || this.set(!1);
  }, mousemove(n) {
    this.set(t(n));
  } } });
  return [i, E.contentAttributes.of((n) => {
    var r;
    return !((r = n.plugin(i)) === null || r === void 0) && r.isDown ? eu : null;
  })];
}
const ai = "-10000px";
class Mh {
  constructor(e, t, i, n) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = n, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(e, t) {
    var i;
    let n = e.state.facet(this.facet), r = n.filter((a) => a);
    if (n === this.input) {
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
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = n, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function iu(s) {
  let { win: e } = s;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const vs = R.define({ combine: (s) => {
  var e, t, i;
  return { position: B.ios ? "absolute" : ((e = s.find((n) => n.position)) === null || e === void 0 ? void 0 : e.position) || "fixed", parent: ((t = s.find((n) => n.parent)) === null || t === void 0 ? void 0 : t.parent) || null, tooltipSpace: ((i = s.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || iu };
} }), al = /* @__PURE__ */ new WeakMap(), Hr = _.fromClass(class {
  constructor(s) {
    this.view = s, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = s.state.facet(vs);
    this.position = e.position, this.parent = e.parent, this.classes = s.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Mh(s, Wr, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), s.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let s of this.manager.tooltipViews)
        this.intersectionObserver.observe(s.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(s) {
    s.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(s, this.above);
    e && this.observeIntersection();
    let t = e || s.geometryChanged, i = s.state.facet(vs);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      t = !0;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(s, e) {
    let t = s.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), s.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", t.dom.appendChild(n);
    }
    return t.dom.style.position = this.position, t.dom.style.top = ai, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var s, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (s = i.destroy) === null || s === void 0 || s.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let s = this.view.dom.getBoundingClientRect(), e = 1, t = 1, i = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: n } = this.manager.tooltipViews[0];
      if (B.gecko)
        i = n.offsetParent != this.container.ownerDocument.body;
      else if (n.style.top == ai && n.style.left == "0px") {
        let r = n.getBoundingClientRect();
        i = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1;
      }
    }
    if (i || this.position == "absolute")
      if (this.parent) {
        let n = this.parent.getBoundingClientRect();
        n.width && n.height && (e = n.width / this.parent.offsetWidth, t = n.height / this.parent.offsetHeight);
      } else
        ({ scaleX: e, scaleY: t } = this.view.viewState);
    return { editor: s, parent: this.parent ? this.container.getBoundingClientRect() : s, pos: this.manager.tooltips.map((n, r) => {
      let o = this.manager.tooltipViews[r];
      return o.getCoords ? o.getCoords(n.pos) : this.view.coordsAtPos(n.pos);
    }), size: this.manager.tooltipViews.map(({ dom: n }) => n.getBoundingClientRect()), space: this.view.state.facet(vs).tooltipSpace(this.view), scaleX: e, scaleY: t, makeAbsolute: i };
  }
  writeMeasure(s) {
    var e;
    if (s.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { editor: t, space: i, scaleX: n, scaleY: r } = s, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = s.pos[l], u = s.size[l];
      if (!f || f.bottom <= Math.max(t.top, i.top) || f.top >= Math.min(t.bottom, i.bottom) || f.right < Math.max(t.left, i.left) - 0.1 || f.left > Math.min(t.right, i.right) + 0.1) {
        c.style.top = ai;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = u.right - u.left, m = (e = al.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top, v = h.offset || su, w = this.view.textDirection == X.LTR, y = u.width > i.right - i.left ? w ? i.left : i.right - u.width : w ? Math.min(f.left - (d ? 14 : 0) + v.x, i.right - g) : Math.max(i.left, f.left - g + (d ? 14 : 0) - v.x), b = this.above[l];
      !a.strictSide && (b ? f.top - (u.bottom - u.top) - v.y < i.top : f.bottom + (u.bottom - u.top) + v.y > i.bottom) && b == i.bottom - f.bottom > f.top - i.top && (b = this.above[l] = !b);
      let x = (b ? f.top - i.top : i.bottom - f.bottom) - p;
      if (x < m && h.resize !== !1) {
        if (x < this.view.defaultLineHeight) {
          c.style.top = ai;
          continue;
        }
        al.set(h, m), c.style.height = (m = x) / r + "px";
      } else
        c.style.height && (c.style.height = "");
      let A = b ? f.top - m - p - v.y : f.bottom + p + v.y, S = y + g;
      if (h.overlap !== !0)
        for (let L of o)
          L.left < S && L.right > y && L.top < A + m && L.bottom > A && (A = b ? L.top - m - 2 - p : L.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (A - s.parent.top) / r + "px", c.style.left = (y - s.parent.left) / n + "px") : (c.style.top = A / r + "px", c.style.left = y / n + "px"), d) {
        let L = f.left + (w ? v.x : -v.x) - (y + 14 - 7);
        d.style.left = L / n + "px";
      }
      h.overlap !== !0 && o.push({ left: y, top: A, right: S, bottom: A + m }), c.classList.toggle("cm-tooltip-above", b), c.classList.toggle("cm-tooltip-below", !b), h.positioned && h.positioned(s.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let s of this.manager.tooltipViews)
        s.dom.style.top = ai;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } }), nu = E.baseTheme({ ".cm-tooltip": { zIndex: 100, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), su = { x: 0, y: 0 }, Wr = R.define({ enables: [Hr, nu] }), Tn = R.define({ combine: (s) => s.reduce((e, t) => e.concat(t), []) });
class _n {
  static create(e) {
    return new _n(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Mh(e, Tn, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
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
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let n = i[e];
      if (n !== void 0) {
        if (t === void 0)
          t = n;
        else if (t !== n)
          return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const ru = Wr.compute([Tn], (s) => {
  let e = s.facet(Tn);
  return e.length === 0 ? null : { pos: Math.min(...e.map((t) => t.pos)), end: Math.max(...e.map((t) => {
    var i;
    return (i = t.end) !== null && i !== void 0 ? i : t.pos;
  })), create: _n.create, above: e[0].above, arrow: e.some((t) => t.arrow) };
});
class ou {
  constructor(e, t, i, n, r) {
    this.view = e, this.source = t, this.field = i, this.setHover = n, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.nearest(t.target);
    if (!i)
      return;
    let n, r = 1;
    if (i instanceof dt)
      n = i.posAtStart;
    else {
      if (n = e.posAtCoords(t), n == null)
        return;
      let l = e.coordsAtPos(n);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(n)).find((c) => c.from <= n && c.to >= n), h = a && a.dir == X.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, n, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: n };
      o.then((a) => {
        this.pending == l && (this.pending = null, !a || Array.isArray(a) && !a.length || e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Ae(e.state, a, "hover tooltip"));
    } else
      !o || Array.isArray(o) && !o.length || e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(Hr), t = e ? e.manager.tooltips.findIndex((i) => i.create == _n.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: n, tooltip: r } = this;
    if (n.length && r && !function(o, l) {
      let a = o.getBoundingClientRect();
      return l.clientX >= a.left - nn && l.clientX <= a.right + nn && l.clientY >= a.top - nn && l.clientY <= a.bottom + nn;
    }(r.dom, e) || this.pending) {
      let { pos: o } = n[0] || this.pending, l = (i = (t = n[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) == o : function(a, h, c, f, u, d) {
        let p = a.scrollDOM.getBoundingClientRect(), g = a.documentTop + a.documentPadding.top + a.contentHeight;
        if (p.left > f || p.right < f || p.top > u || Math.min(p.bottom, g) < u)
          return !1;
        let m = a.posAtCoords({ x: f, y: u }, !1);
        return m >= h && m <= c;
      }(this.view, o, l, e.clientX, e.clientY)) || (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const nn = 4;
function lu(s, e = {}) {
  let t = H.define(), i = oe.define({ create: () => [], update(n, r) {
    if (n.length && (e.hideOnChange && (r.docChanged || r.selection) ? n = [] : e.hideOn && (n = n.filter((o) => !e.hideOn(r, o))), r.docChanged)) {
      let o = [];
      for (let l of n) {
        let a = r.changes.mapPos(l.pos, -1, fe.TrackDel);
        if (a != null) {
          let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
          h.pos = a, h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
        }
      }
      n = o;
    }
    for (let o of r.effects)
      o.is(t) && (n = o.value), o.is(au) && (n = []);
    return n;
  }, provide: (n) => Tn.from(n) });
  return [i, _.define((n) => new ou(n, s, i, t, e.hoverTime || 300)), ru];
}
function Oh(s, e) {
  let t = s.plugin(Hr);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const au = H.define(), hl = R.define({ combine(s) {
  let e, t;
  for (let i of s)
    e = e || i.topContainer, t = t || i.bottomContainer;
  return { topContainer: e, bottomContainer: t };
} });
function Ri(s, e) {
  let t = s.plugin(Dh), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const Dh = _.fromClass(class {
  constructor(s) {
    this.input = s.state.facet(Bi), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(s));
    let e = s.state.facet(hl);
    this.top = new sn(s, !0, e.topContainer), this.bottom = new sn(s, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(s) {
    let e = s.state.facet(hl);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new sn(s.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new sn(s.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = s.state.facet(Bi);
    if (t != this.input) {
      let i = t.filter((a) => a), n = [], r = [], o = [], l = [];
      for (let a of i) {
        let h, c = this.specs.indexOf(a);
        c < 0 ? (h = a(s.view), l.push(h)) : (h = this.panels[c], h.update && h.update(s)), n.push(h), (h.top ? r : o).push(h);
      }
      this.specs = i, this.panels = n, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(s);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (s) => E.scrollMargins.of((e) => {
  let t = e.plugin(s);
  return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
}) });
class sn {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0)
      return void (this.dom && (this.dom.remove(), this.dom = void 0));
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = cl(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = cl(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (this.container && this.classes != this.view.themeClasses) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function cl(s) {
  let e = s.nextSibling;
  return s.remove(), e;
}
const Bi = R.define({ enables: Dh });
class st extends Tt {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {
  }
}
st.prototype.elementClass = "", st.prototype.toDOM = void 0, st.prototype.mapMode = fe.TrackBefore, st.prototype.startSide = st.prototype.endSide = -1, st.prototype.point = !0;
const xn = R.define(), hu = { class: "", renderEmptyElements: !1, elementStyle: "", markers: () => F.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {} }, xi = R.define();
function cu(s) {
  return [Th(), xi.of(Object.assign(Object.assign({}, hu), s))];
}
const ur = R.define({ combine: (s) => s.some((e) => e) });
function Th(s) {
  let e = [fu];
  return s && s.fixed === !1 && e.push(ur.of(!0)), e;
}
const fu = _.fromClass(class {
  constructor(s) {
    this.view = s, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s.state.facet(xi).map((e) => new ul(s, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !s.state.facet(ur), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  update(s) {
    if (this.updateGutters(s)) {
      let e = this.prevViewport, t = s.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < 0.8 * (t.to - t.from));
    }
    s.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(ur) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let e = this.dom.nextSibling;
    s && this.dom.remove();
    let t = F.iter(this.view.state.facet(xn), this.view.viewport.from), i = [], n = this.gutters.map((r) => new uu(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == ke.Text && o) {
            dr(t, i, l.from);
            for (let a of n)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of n)
              a.widget(this.view, l);
      } else if (r.type == ke.Text) {
        dr(t, i, r.from);
        for (let o of n)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of n)
          o.widget(this.view, r);
    for (let r of n)
      r.finish();
    s && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(s) {
    let e = s.startState.facet(xi), t = s.state.facet(xi), i = s.docChanged || s.heightChanged || s.viewportChanged || !F.eq(s.startState.facet(xn), s.state.facet(xn), s.view.viewport.from, s.view.viewport.to);
    if (e == t)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? n.push(new ul(this.view, r)) : (this.gutters[o].update(s), n.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove();
  }
}, { provide: (s) => E.scrollMargins.of((e) => {
  let t = e.plugin(s);
  return t && t.gutters.length != 0 && t.fixed ? e.textDirection == X.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX } : null;
}) });
function fl(s) {
  return Array.isArray(s) ? s : [s];
}
function dr(s, e, t) {
  for (; s.value && s.from <= t; )
    s.from == t && e.push(s.value), s.next();
}
class uu {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = F.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: n } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == n.elements.length) {
      let l = new Eh(e, o, r, i);
      n.elements.push(l), n.dom.appendChild(l.dom);
    } else
      n.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let n = [];
    dr(this.cursor, n, t.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(e, t, n);
    r && n.unshift(r);
    let o = this.gutter;
    (n.length != 0 || o.config.renderEmptyElements) && this.addElement(e, t, n);
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
class ul {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r, o = n.target;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; )
            o = o.parentNode;
          let a = o.getBoundingClientRect();
          r = (a.top + a.bottom) / 2;
        } else
          r = n.clientY;
        let l = e.lineBlockAtHeight(r - e.documentTop);
        t.domEventHandlers[i](e, l, n) && n.preventDefault();
      });
    this.markers = fl(t.markers(e)), t.initialSpacer && (this.spacer = new Eh(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = fl(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], e);
      n != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [n]);
    }
    let i = e.view.viewport;
    return !F.eq(this.markers, t, i.from, i.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(e);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Eh {
  constructor(e, t, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, n);
  }
  update(e, t, i, n) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), function(r, o) {
      if (r.length != o.length)
        return !1;
      for (let l = 0; l < r.length; l++)
        if (!r[l].compare(o[l]))
          return !1;
      return !0;
    }(this.markers, n) || this.setMarkers(e, n);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
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
          c.destroy(n);
          let f = n.nextSibling;
          n.remove(), n = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? n = n.nextSibling : this.dom.insertBefore(a.toDOM(e), n)), h && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
const du = R.define(), zt = R.define({ combine: (s) => it(s, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(e, t) {
  let i = Object.assign({}, e);
  for (let n in t) {
    let r = i[n], o = t[n];
    i[n] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
  }
  return i;
} }) });
class ws extends st {
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
function ys(s, e) {
  return s.state.facet(zt).formatNumber(e, s.state);
}
const pu = xi.compute([zt], (s) => ({ class: "cm-lineNumbers", renderEmptyElements: !1, markers: (e) => e.state.facet(du), lineMarker: (e, t, i) => i.some((n) => n.toDOM) ? null : new ws(ys(e, e.state.doc.lineAt(t.from).number)), widgetMarker: () => null, lineMarkerChange: (e) => e.startState.facet(zt) != e.state.facet(zt), initialSpacer: (e) => new ws(ys(e, dl(e.state.doc.lines))), updateSpacer(e, t) {
  let i = ys(t.view, dl(t.view.state.doc.lines));
  return i == e.number ? e : new ws(i);
}, domEventHandlers: s.facet(zt).domEventHandlers }));
function mu(s = {}) {
  return [zt.of(s), Th(), pu];
}
function dl(s) {
  let e = 9;
  for (; e < s; )
    e = 10 * e + 9;
  return e;
}
const gu = new class extends st {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), vu = xn.compute(["selection"], (s) => {
  let e = [], t = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.head).from;
    n > t && (t = n, e.push(gu.range(n)));
  }
  return F.of(e);
}), wu = 1024;
let yu = 0;
class bs {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class W {
  constructor(e = {}) {
    this.id = yu++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = Be.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
W.closedBy = new W({ deserialize: (s) => s.split(" ") }), W.openedBy = new W({ deserialize: (s) => s.split(" ") }), W.group = new W({ deserialize: (s) => s.split(" ") }), W.isolate = new W({ deserialize: (s) => {
  if (s && s != "rtl" && s != "ltr" && s != "auto")
    throw new RangeError("Invalid value for isolate: " + s);
  return s || "auto";
} }), W.contextHash = new W({ perNode: !0 }), W.lookAhead = new W({ perNode: !0 }), W.mounted = new W({ perNode: !0 });
class En {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  static get(e) {
    return e && e.props && e.props[W.mounted.id];
  }
}
const bu = /* @__PURE__ */ Object.create(null);
class Be {
  constructor(e, t, i, n = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = n;
  }
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : bu, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), n = new Be(e.name || "", t, e.id, i);
    if (e.props) {
      for (let r of e.props)
        if (Array.isArray(r) || (r = r(n)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return n;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (1 & this.flags) > 0;
  }
  get isSkipped() {
    return (2 & this.flags) > 0;
  }
  get isError() {
    return (4 & this.flags) > 0;
  }
  get isAnonymous() {
    return (8 & this.flags) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(W.group);
      return !!t && t.indexOf(e) > -1;
    }
    return this.id == e;
  }
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let n of i.split(" "))
        t[n] = e[i];
    return (i) => {
      for (let n = i.prop(W.group), r = -1; r < (n ? n.length : 0); r++) {
        let o = t[r < 0 ? i.name : n[r]];
        if (o)
          return o;
      }
    };
  }
}
Be.none = new Be("", /* @__PURE__ */ Object.create(null), 0, 8);
class Rh {
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let n = null;
      for (let r of e) {
        let o = r(i);
        o && (n || (n = Object.assign({}, i.props)), n[o[0].id] = o[1]);
      }
      t.push(n ? new Be(i.name, n, i.id, i.flags) : i);
    }
    return new Rh(t);
  }
}
const rn = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap();
var ce;
((s) => {
  s[s.ExcludeBuffers = 1] = "ExcludeBuffers", s[s.IncludeAnonymous = 2] = "IncludeAnonymous", s[s.IgnoreMounts = 4] = "IgnoreMounts", s[s.IgnoreOverlays = 8] = "IgnoreOverlays";
})(ce || (ce = {}));
class ye {
  constructor(e, t, i, n, r) {
    if (this.type = e, this.children = t, this.positions = i, this.length = n, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = En.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let n = i.toString();
      n && (t && (t += ","), t += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  cursor(e = 0) {
    return new mr(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let n = rn.get(this) || this.topNode, r = new mr(n);
    return r.moveTo(e, t), rn.set(this, r._tree), r;
  }
  get topNode() {
    return new Oe(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = ki(rn.get(this) || this.topNode, e, t, !1);
    return rn.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = ki(pl.get(this) || this.topNode, e, t, !0);
    return pl.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return function(i, n, r) {
      let o = i.resolveInner(n, r), l = null;
      for (let a = o instanceof Oe ? o : o.context.parent; a; a = a.parent)
        if (a.index < 0) {
          let h = a.parent;
          (l || (l = [o])).push(h.resolve(n, r)), a = h;
        } else {
          let h = En.get(a.tree);
          if (h && h.overlay && h.overlay[0].from <= n && h.overlay[h.overlay.length - 1].to >= n) {
            let c = new Oe(h.tree, h.overlay[0].from + a.from, -1, a);
            (l || (l = [o])).push(ki(c, n, r, !1));
          }
        }
      return l ? Ph(l) : o;
    }(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: n = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & ce.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | ce.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= n && (!l && a.type.isAnonymous || t(a) !== !1)) {
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
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : gr(Be.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, n) => new ye(this.type, t, i, n, this.propValues), e.makeTree || ((t, i, n) => new ye(Be.none, t, i, n)));
  }
  static build(e) {
    return function(t) {
      var i;
      let { buffer: n, nodeSet: r, maxBufferLength: o = wu, reused: l = [], minRepeatType: a = r.types.length } = t, h = Array.isArray(n) ? new Fr(n, n.length) : n, c = r.types, f = 0, u = 0;
      function d(S, L, C, D, T, P) {
        let { id: V, start: I, end: G, size: j } = h, ie = u;
        for (; j < 0; ) {
          if (h.next(), j == -1) {
            let be = l[V];
            return C.push(be), void D.push(I - S);
          }
          if (j == -3)
            return void (f = V);
          if (j == -4)
            return void (u = V);
          throw new RangeError(`Unrecognized record size: ${j}`);
        }
        let me, re, qe = c[V], je = I - S;
        if (G - I <= o && (re = w(h.pos - L, T))) {
          let be = new Uint16Array(re.size - re.skip), Q = h.pos - re.size, ee = be.length;
          for (; h.pos > Q; )
            ee = y(re.start, be, ee);
          me = new kt(be, G - re.start, r), je = re.start - S;
        } else {
          let be = h.pos - j;
          h.next();
          let Q = [], ee = [], At = V >= a ? V : -1, It = 0, Ki = G;
          for (; h.pos > be; )
            At >= 0 && h.id == At && h.size >= 0 ? (h.end <= Ki - o && (m(Q, ee, I, It, h.end, Ki, At, ie), It = Q.length, Ki = h.end), h.next()) : P > 2500 ? p(I, be, Q, ee) : d(I, be, Q, ee, At, P + 1);
          if (At >= 0 && It > 0 && It < Q.length && m(Q, ee, I, It, I, Ki, At, ie), Q.reverse(), ee.reverse(), At > -1 && It > 0) {
            let so = g(qe);
            me = gr(qe, Q, ee, 0, Q.length, 0, G - I, so, so);
          } else
            me = v(qe, Q, ee, G - I, ie - G);
        }
        C.push(me), D.push(je);
      }
      function p(S, L, C, D) {
        let T = [], P = 0, V = -1;
        for (; h.pos > L; ) {
          let { id: I, start: G, end: j, size: ie } = h;
          if (ie > 4)
            h.next();
          else {
            if (V > -1 && G < V)
              break;
            V < 0 && (V = j - o), T.push(I, G, j), P++, h.next();
          }
        }
        if (P) {
          let I = new Uint16Array(4 * P), G = T[T.length - 2];
          for (let j = T.length - 3, ie = 0; j >= 0; j -= 3)
            I[ie++] = T[j], I[ie++] = T[j + 1] - G, I[ie++] = T[j + 2] - G, I[ie++] = ie;
          C.push(new kt(I, T[2] - G, r)), D.push(G - S);
        }
      }
      function g(S) {
        return (L, C, D) => {
          let T, P, V = 0, I = L.length - 1;
          if (I >= 0 && (T = L[I]) instanceof ye) {
            if (!I && T.type == S && T.length == D)
              return T;
            (P = T.prop(W.lookAhead)) && (V = C[I] + T.length + P);
          }
          return v(S, L, C, D, V);
        };
      }
      function m(S, L, C, D, T, P, V, I) {
        let G = [], j = [];
        for (; S.length > D; )
          G.push(S.pop()), j.push(L.pop() + C - T);
        S.push(v(r.types[V], G, j, P - T, I - P)), L.push(T - C);
      }
      function v(S, L, C, D, T = 0, P) {
        if (f) {
          let V = [W.contextHash, f];
          P = P ? [V].concat(P) : [V];
        }
        if (T > 25) {
          let V = [W.lookAhead, T];
          P = P ? [V].concat(P) : [V];
        }
        return new ye(S, L, C, D, P);
      }
      function w(S, L) {
        let C = h.fork(), D = 0, T = 0, P = 0, V = C.end - o, I = { size: 0, start: 0, skip: 0 };
        e:
          for (let G = C.pos - S; C.pos > G; ) {
            let j = C.size;
            if (C.id == L && j >= 0) {
              I.size = D, I.start = T, I.skip = P, P += 4, D += 4, C.next();
              continue;
            }
            let ie = C.pos - j;
            if (j < 0 || ie < G || C.start < V)
              break;
            let me = C.id >= a ? 4 : 0, re = C.start;
            for (C.next(); C.pos > ie; ) {
              if (C.size < 0) {
                if (C.size != -3)
                  break e;
                me += 4;
              } else
                C.id >= a && (me += 4);
              C.next();
            }
            T = re, D += j, P += me;
          }
        return (L < 0 || D == S) && (I.size = D, I.start = T, I.skip = P), I.size > 4 ? I : void 0;
      }
      function y(S, L, C) {
        let { id: D, start: T, end: P, size: V } = h;
        if (h.next(), V >= 0 && D < a) {
          let I = C;
          if (V > 4) {
            let G = h.pos - (V - 4);
            for (; h.pos > G; )
              C = y(S, L, C);
          }
          L[--C] = I, L[--C] = P - S, L[--C] = T - S, L[--C] = D;
        } else
          V == -3 ? f = D : V == -4 && (u = D);
        return C;
      }
      let b = [], x = [];
      for (; h.pos > 0; )
        d(t.start || 0, t.bufferStart || 0, b, x, -1, 0);
      let A = (i = t.length) !== null && i !== void 0 ? i : b.length ? x[0] + b[0].length : 0;
      return new ye(c[t.topID], b.reverse(), x.reverse(), A);
    }(e);
  }
}
ye.empty = new ye(Be.none, [], [], 0);
class Fr {
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
    return new Fr(this.buffer, this.index);
  }
}
class kt {
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  get type() {
    return Be.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], n = this.set.types[t], r = n.name;
    if (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), i == (e += 4))
      return r;
    let o = [];
    for (; e < i; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  findChild(e, t, i, n, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(Bh(r, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  slice(e, t, i) {
    let n = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = n[l++], r[a++] = n[l++] - i;
      let h = r[a++] = n[l++] - i;
      r[a++] = n[l++] - e, o = Math.max(o, h);
    }
    return new kt(r, o, this.set);
  }
}
function Bh(s, e, t, i) {
  switch (s) {
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
function ki(s, e, t, i) {
  for (var n; s.from == s.to || (t < 1 ? s.from >= e : s.from > e) || (t > -1 ? s.to <= e : s.to < e); ) {
    let o = !i && s instanceof Oe && s.index < 0 ? null : s.parent;
    if (!o)
      return s;
    s = o;
  }
  let r = i ? 0 : ce.IgnoreOverlays;
  if (i)
    for (let o = s, l = o.parent; l; o = l, l = o.parent)
      o instanceof Oe && o.index < 0 && ((n = l.enter(e, t, r)) === null || n === void 0 ? void 0 : n.from) != o.from && (s = l);
  for (; ; ) {
    let o = s.enter(e, t, r);
    if (!o)
      return s;
    s = o;
  }
}
class Lh {
  cursor(e = 0) {
    return new mr(this, e);
  }
  getChild(e, t = null, i = null) {
    let n = ml(this, e, t, i);
    return n.length ? n[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return ml(this, e, t, i);
  }
  resolve(e, t = 0) {
    return ki(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return ki(this, e, t, !0);
  }
  matchContext(e) {
    return pr(this, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let n = t.lastChild;
      if (!n || n.to != t.to)
        break;
      n.type.isError && n.from == n.to ? (i = t, t = n.prevSibling) : t = n;
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
class Oe extends Lh {
  constructor(e, t, i, n) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = n;
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
  nextChild(e, t, i, n, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], f = a[e] + o.from;
        if (Bh(n, i, f, f + c.length)) {
          if (c instanceof kt) {
            if (r & ce.ExcludeBuffers)
              continue;
            let u = c.findChild(0, c.buffer.length, t, i - f, n);
            if (u > -1)
              return new Qe(new xu(o, c, e, f), null, u);
          } else if (r & ce.IncludeAnonymous || !c.type.isAnonymous || zr(c)) {
            let u;
            if (!(r & ce.IgnoreMounts) && (u = En.get(c)) && !u.overlay)
              return new Oe(u.tree, f, e, o);
            let d = new Oe(c, f, e, o);
            return r & ce.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, n);
          }
        }
      }
      if (r & ce.IncludeAnonymous || !o.type.isAnonymous || (e = o.index >= 0 ? o.index + t : t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, t, i = 0) {
    let n;
    if (!(i & ce.IgnoreOverlays) && (n = En.get(this._tree)) && n.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of n.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new Oe(n.tree, n.overlay[0].from + this.from, -1, this);
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
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function ml(s, e, t, i) {
  let n = s.cursor(), r = [];
  if (!n.firstChild())
    return r;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = n.type.is(t), !n.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && n.type.is(i))
      return r;
    if (n.type.is(e) && r.push(n.node), !n.nextSibling())
      return i == null ? r : [];
  }
}
function pr(s, e, t = e.length - 1) {
  for (let i = s.parent; t >= 0; i = i.parent) {
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
class xu {
  constructor(e, t, i, n) {
    this.parent = e, this.buffer = t, this.index = i, this.start = n;
  }
}
class Qe extends Lh {
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
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.context.start, i);
    return r < 0 ? null : new Qe(this.context, this, r);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, t, i = 0) {
    if (i & ce.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new Qe(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Qe(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Qe(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, n = this.index + 4, r = i.buffer[this.index + 3];
    if (r > n) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(n, r, o)), t.push(0);
    }
    return new ye(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Ph(s) {
  if (!s.length)
    return null;
  let e = 0, t = s[0];
  for (let r = 1; r < s.length; r++) {
    let o = s[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let i = t instanceof Oe && t.index < 0 ? null : t.parent, n = s.slice();
  return i ? n[e] = i : n.splice(e, 1), new ku(n, t);
}
class ku {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Ph(this.heads);
  }
}
class mr {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Oe)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return !!e && (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0);
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: n } = this.buffer;
    return this.type = t || n.set.types[n.buffer[e]], this.from = i + n.buffer[e + 1], this.to = i + n.buffer[e + 2], !0;
  }
  yield(e) {
    return !!e && (e instanceof Oe ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)));
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: n } = this.buffer, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.buffer.start, i);
    return !(r < 0) && (this.stack.push(this.index), this.yieldBuf(r));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    return this.buffer ? !(i & ce.ExcludeBuffers) && this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & ce.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & ce.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode));
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let n = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != n)
        return this.yieldBuf(t.findChild(n, this.index, -1, 0, 4));
    } else {
      let n = t.buffer[this.index + 3];
      if (n < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(n);
    }
    return i < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode));
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: n } = this;
    if (n) {
      if (e > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (n.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = n);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
          let l = i._tree.children[r];
          if (this.mode & ce.IncludeAnonymous || l instanceof kt || !l.type.isAnonymous || zr(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e:
        for (let n = this.index, r = this.stack.length; r >= 0; ) {
          for (let o = e; o; o = o._parent)
            if (o.index == n) {
              if (n == this.index)
                return o;
              t = o, i = r + 1;
              break e;
            }
          n = this.stack[--r];
        }
    for (let n = i; n < this.stack.length; n++)
      t = new Qe(this.buffer, t, this.stack[n]);
    return this.bufferNode = new Qe(this.buffer, t, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; n && t && t(this), n = this.type.isAnonymous, !this.nextSibling(); ) {
        if (!i)
          return;
        this.parent(), i--, n = !0;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer)
      return pr(this.node, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let n = e.length - 1, r = this.stack.length - 1; n >= 0; r--) {
      if (r < 0)
        return pr(this.node, e, n);
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[n] && e[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function zr(s) {
  return s.children.some((e) => e instanceof kt || !e.type.isAnonymous || zr(e));
}
const gl = /* @__PURE__ */ new WeakMap();
function kn(s, e) {
  if (!s.isAnonymous || e instanceof kt || e.type != s)
    return 1;
  let t = gl.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != s || !(i instanceof ye)) {
        t = 1;
        break;
      }
      t += kn(s, i);
    }
    gl.set(e, t);
  }
  return t;
}
function gr(s, e, t, i, n, r, o, l, a) {
  let h = 0;
  for (let d = i; d < n; d++)
    h += kn(s, e[d]);
  let c = Math.ceil(1.5 * h / 8), f = [], u = [];
  return function d(p, g, m, v, w) {
    for (let y = m; y < v; ) {
      let b = y, x = g[y], A = kn(s, p[y]);
      for (y++; y < v; y++) {
        let S = kn(s, p[y]);
        if (A + S >= c)
          break;
        A += S;
      }
      if (y == b + 1) {
        if (A > c) {
          let S = p[b];
          d(S.children, S.positions, 0, S.children.length, g[b] + w);
          continue;
        }
        f.push(p[b]);
      } else {
        let S = g[y - 1] + p[y - 1].length - x;
        f.push(gr(s, p, g, b, y, x, S, null, a));
      }
      u.push(x + w - r);
    }
  }(e, t, i, n, 0), (l || a)(f, u, o);
}
class Rp {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, i) {
    let n = this.map.get(e);
    n || this.map.set(e, n = /* @__PURE__ */ new Map()), n.set(t, i);
  }
  getBuffer(e, t) {
    let i = this.map.get(e);
    return i && i.get(t);
  }
  set(e, t) {
    e instanceof Qe ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof Oe && this.map.set(e.tree, t);
  }
  get(e) {
    return e instanceof Qe ? this.getBuffer(e.context.buffer, e.index) : e instanceof Oe ? this.map.get(e.tree) : void 0;
  }
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
class Rt {
  constructor(e, t, i, n, r = !1, o = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = n, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (1 & this.open) > 0;
  }
  get openEnd() {
    return (2 & this.open) > 0;
  }
  static addTree(e, t = [], i = !1) {
    let n = [new Rt(0, e.length, e, 0, !1, i)];
    for (let r of t)
      r.to > e.length && n.push(r);
    return n;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let n = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= i)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
            u = d >= p ? null : new Rt(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u && n.push(u), o.to > f)
            break;
          o = r < e.length ? e[r++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return n;
  }
}
class Su {
  startParse(e, t, i) {
    return typeof e == "string" && (e = new Cu(e)), i = i ? i.length ? i.map((n) => new bs(n.from, n.to)) : [new bs(0, 0)] : [new bs(0, e.length)], this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let n = this.startParse(e, t, i);
    for (; ; ) {
      let r = n.advance();
      if (r)
        return r;
    }
  }
}
class Cu {
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
let Au = 0;
class Ye {
  constructor(e, t, i) {
    this.set = e, this.base = t, this.modified = i, this.id = Au++;
  }
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let t = new Ye([], null, []);
    if (t.set.push(t), e)
      for (let i of e.set)
        t.set.push(i);
    return t;
  }
  static defineModifier() {
    let e = new Rn();
    return (t) => t.modified.indexOf(e) > -1 ? t : Rn.get(t.base || t, t.modified.concat(e).sort((i, n) => i.id - n.id));
  }
}
let Mu = 0;
class Rn {
  constructor() {
    this.instances = [], this.id = Mu++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => {
      return l.base == e && (a = t, h = l.modified, a.length == h.length && a.every((c, f) => c == h[f]));
      var a, h;
    });
    if (i)
      return i;
    let n = [], r = new Ye(n, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = function(l) {
      let a = [[]];
      for (let h = 0; h < l.length; h++)
        for (let c = 0, f = a.length; c < f; c++)
          a.push(a[c].concat(l[h]));
      return a.sort((h, c) => c.length - h.length);
    }(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(Rn.get(l, a));
    return r;
  }
}
function Ou(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in s) {
    let i = s[t];
    Array.isArray(i) || (i = [i]);
    for (let n of t.split(" "))
      if (n) {
        let r = [], o = 2, l = n;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == n.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + n);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == n.length)
            break;
          let d = n[f++];
          if (f == n.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(f);
        }
        let a = r.length - 1, h = r[a];
        if (!h)
          throw new RangeError("Invalid path: " + n);
        let c = new Bn(i, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return Nh.add(e);
}
const Nh = new W();
class Bn {
  constructor(e, t, i, n) {
    this.tags = e, this.mode = t, this.context = i, this.next = n;
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
function Ih(s, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of s)
    if (Array.isArray(r.tag))
      for (let o of r.tag)
        t[o.id] = r.class;
    else
      t[r.tag.id] = r.class;
  let { scope: i, all: n = null } = e || {};
  return { style: (r) => {
    let o = n;
    for (let l of r)
      for (let a of l.set) {
        let h = t[a.id];
        if (h) {
          o = o ? o + " " + h : h;
          break;
        }
      }
    return o;
  }, scope: i };
}
function Du(s, e, t, i = 0, n = s.length) {
  let r = new Tu(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(s.cursor(), i, n, "", r.highlighters), r.flush(n);
}
Bn.empty = new Bn([], 2, null);
class Tu {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, n, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = n, c = function(d) {
      let p = d.type.prop(Nh);
      for (; p && p.context && !d.matchContext(p.context); )
        p = p.next;
      return p || null;
    }(e) || Bn.empty, f = function(d, p) {
      let g = null;
      for (let m of d) {
        let v = m.style(p);
        v && (g = g ? g + " " + v : v);
      }
      return g;
    }(r, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (n += (n ? " " : "") + f)), this.startSpan(Math.max(t, l), h), c.opaque)
      return;
    let u = e.tree && e.tree.prop(W.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(u.tree.type)), g = e.firstChild();
      for (let m = 0, v = l; ; m++) {
        let w = m < u.overlay.length ? u.overlay[m] : null, y = w ? w.from + l : a, b = Math.max(t, v), x = Math.min(i, y);
        if (b < x && g)
          for (; e.from < x && (this.highlightRange(e, b, x, n, r), this.startSpan(Math.min(x, e.to), h), !(e.to >= y) && e.nextSibling()); )
            ;
        if (!w || y > i)
          break;
        v = w.to + l, v > t && (this.highlightRange(d.cursor(), Math.max(t, w.from + l), Math.min(i, v), "", p), this.startSpan(Math.min(i, v), h));
      }
      g && e.parent();
    } else if (e.firstChild()) {
      u && (n = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, n, r), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
const M = Ye.define, on = M(), ht = M(), vl = M(ht), wl = M(ht), ct = M(), ln = M(ct), xs = M(ct), Ge = M(), Mt = M(Ge), $e = M(), Ue = M(), vr = M(), hi = M(vr), an = M(), O = { comment: on, lineComment: M(on), blockComment: M(on), docComment: M(on), name: ht, variableName: M(ht), typeName: vl, tagName: M(vl), propertyName: wl, attributeName: M(wl), className: M(ht), labelName: M(ht), namespace: M(ht), macroName: M(ht), literal: ct, string: ln, docString: M(ln), character: M(ln), attributeValue: M(ln), number: xs, integer: M(xs), float: M(xs), bool: M(ct), regexp: M(ct), escape: M(ct), color: M(ct), url: M(ct), keyword: $e, self: M($e), null: M($e), atom: M($e), unit: M($e), modifier: M($e), operatorKeyword: M($e), controlKeyword: M($e), definitionKeyword: M($e), moduleKeyword: M($e), operator: Ue, derefOperator: M(Ue), arithmeticOperator: M(Ue), logicOperator: M(Ue), bitwiseOperator: M(Ue), compareOperator: M(Ue), updateOperator: M(Ue), definitionOperator: M(Ue), typeOperator: M(Ue), controlOperator: M(Ue), punctuation: vr, separator: M(vr), bracket: hi, angleBracket: M(hi), squareBracket: M(hi), paren: M(hi), brace: M(hi), content: Ge, heading: Mt, heading1: M(Mt), heading2: M(Mt), heading3: M(Mt), heading4: M(Mt), heading5: M(Mt), heading6: M(Mt), contentSeparator: M(Ge), list: M(Ge), quote: M(Ge), emphasis: M(Ge), strong: M(Ge), link: M(Ge), monospace: M(Ge), strikethrough: M(Ge), inserted: M(), deleted: M(), changed: M(), invalid: M(), meta: an, documentMeta: M(an), annotation: M(an), processingInstruction: M(an), definition: Ye.defineModifier(), constant: Ye.defineModifier(), function: Ye.defineModifier(), standard: Ye.defineModifier(), local: Ye.defineModifier(), special: Ye.defineModifier() };
var ks;
Ih([{ tag: O.link, class: "tok-link" }, { tag: O.heading, class: "tok-heading" }, { tag: O.emphasis, class: "tok-emphasis" }, { tag: O.strong, class: "tok-strong" }, { tag: O.keyword, class: "tok-keyword" }, { tag: O.atom, class: "tok-atom" }, { tag: O.bool, class: "tok-bool" }, { tag: O.url, class: "tok-url" }, { tag: O.labelName, class: "tok-labelName" }, { tag: O.inserted, class: "tok-inserted" }, { tag: O.deleted, class: "tok-deleted" }, { tag: O.literal, class: "tok-literal" }, { tag: O.string, class: "tok-string" }, { tag: O.number, class: "tok-number" }, { tag: [O.regexp, O.escape, O.special(O.string)], class: "tok-string2" }, { tag: O.variableName, class: "tok-variableName" }, { tag: O.local(O.variableName), class: "tok-variableName tok-local" }, { tag: O.definition(O.variableName), class: "tok-variableName tok-definition" }, { tag: O.special(O.variableName), class: "tok-variableName2" }, { tag: O.definition(O.propertyName), class: "tok-propertyName tok-definition" }, { tag: O.typeName, class: "tok-typeName" }, { tag: O.namespace, class: "tok-namespace" }, { tag: O.className, class: "tok-className" }, { tag: O.macroName, class: "tok-macroName" }, { tag: O.propertyName, class: "tok-propertyName" }, { tag: O.operator, class: "tok-operator" }, { tag: O.comment, class: "tok-comment" }, { tag: O.meta, class: "tok-meta" }, { tag: O.invalid, class: "tok-invalid" }, { tag: O.punctuation, class: "tok-punctuation" }]);
const qt = new W();
function Eu(s) {
  return R.define({ combine: s ? (e) => e.concat(s) : void 0 });
}
const Ru = new W();
class Fe {
  constructor(e, t, i = [], n = "") {
    this.data = e, this.name = n, z.prototype.hasOwnProperty("tree") || Object.defineProperty(z.prototype, "tree", { get() {
      return pe(this);
    } }), this.parser = t, this.extension = [St.of(this), z.languageData.of((r, o, l) => {
      let a = yl(r, o, l), h = a.type.prop(qt);
      if (!h)
        return [];
      let c = r.facet(h), f = a.type.prop(Ru);
      if (f) {
        let u = a.resolve(o - a.from, l);
        for (let d of f)
          if (d.test(u, r)) {
            let p = r.facet(d.facet);
            return d.type == "replace" ? p : p.concat(c);
          }
      }
      return c;
    })].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return yl(e, t, i).type.prop(qt) == this.data;
  }
  findRegions(e) {
    let t = e.facet(St);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], n = (r, o) => {
      if (r.prop(qt) == this.data)
        return void i.push({ from: o, to: o + r.length });
      let l = r.prop(W.mounted);
      if (l) {
        if (l.tree.prop(qt) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        }
        if (l.overlay) {
          let a = i.length;
          if (n(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof ye && n(h, r.positions[a] + o);
      }
    };
    return n(pe(e), 0), i;
  }
  get allowsNesting() {
    return !0;
  }
}
function yl(s, e, t) {
  let i = s.facet(St), n = pe(s).topNode;
  if (!i || i.allowsNesting)
    for (let r = n; r; r = r.enter(e, t, ce.ExcludeBuffers))
      r.type.isTop && (n = r);
  return n;
}
Fe.setState = H.define();
class wr extends Fe {
  constructor(e, t, i) {
    super(e, t, [], i), this.parser = t;
  }
  static define(e) {
    let t = Eu(e.languageData);
    return new wr(t, e.parser.configure({ props: [qt.add((i) => i.isTop ? t : void 0)] }), e.name);
  }
  configure(e, t) {
    return new wr(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function pe(s) {
  let e = s.field(Fe.state, !1);
  return e ? e.tree : ye.empty;
}
class Bu {
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
let ci = null;
class Ln {
  constructor(e, t, i = [], n, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = n, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new Ln(e, t, [], ye.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Bu(this.state.doc), this.fragments);
  }
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != ye.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let n = Date.now() + e;
        e = () => Date.now() > n;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let n = this.parse.advance();
        if (n) {
          if (this.fragments = this.withoutTempSkipped(Rt.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = n, this.parse = null, !(this.treeLen < (t ?? this.state.doc.length)))
            return !0;
          this.parse = this.startParse();
        }
        if (e())
          return !1;
      }
    });
  }
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Rt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = ci;
    ci = this;
    try {
      return e();
    } finally {
      ci = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = bl(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: n, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = Rt.applyChanges(i, a), n = ye.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new Ln(this.parser, t, i, n, r, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: n, to: r } = this.skipped[i];
      n < e.to && r > e.from && (this.fragments = bl(this.fragments, n, r), this.skipped.splice(i--, 1));
    }
    return !(this.skipped.length >= t) && (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new class extends Su {
      createParse(t, i, n) {
        let r = n[0].from, o = n[n.length - 1].to;
        return { parsedPos: r, advance() {
          let l = ci;
          if (l) {
            for (let a of n)
              l.tempSkipped.push(a);
            e && (l.scheduleOn = l.scheduleOn ? Promise.all([l.scheduleOn, e]) : e);
          }
          return this.parsedPos = o, new ye(Be.none, [], [], o - r);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return ci;
  }
}
function bl(s, e, t) {
  return Rt.applyChanges(s, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class ti {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new ti(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = Ln.create(e.facet(St).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new ti(i);
  }
}
Fe.state = oe.define({ create: ti.init, update(s, e) {
  for (let t of e.effects)
    if (t.is(Fe.setState))
      return t.value;
  return e.startState.facet(St) != e.state.facet(St) ? ti.init(e.state) : s.apply(e);
} });
let Vh = (s) => {
  let e = setTimeout(() => s(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Vh = (s) => {
  let e = -1, t = setTimeout(() => {
    e = requestIdleCallback(s, { timeout: 400 });
  }, 100);
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const Ss = typeof navigator < "u" && (!((ks = navigator.scheduling) === null || ks === void 0) && ks.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Lu = _.fromClass(class {
  constructor(s) {
    this.view = s, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(s) {
    let e = this.view.state.field(Fe.state).context;
    (e.updateViewport(s.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (s.docChanged || s.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: s } = this.view, e = s.field(Fe.state);
    e.tree == e.context.tree && e.context.isDone(s.doc.length) || (this.working = Vh(this.work));
  }
  work(s) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: t, viewport: { to: i } } = this.view, n = t.field(Fe.state);
    if (n.tree == n.context.tree && n.context.isDone(i + 1e5))
      return;
    let r = Date.now() + Math.min(this.chunkBudget, 100, s && !Ss ? Math.max(25, s.timeRemaining() - 5) : 1e9), o = n.context.treeLen < i && t.doc.length > i + 1e3, l = n.context.work(() => Ss && Ss() || Date.now() > r, i + (o ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (l || this.chunkBudget <= 0) && (n.context.takeTree(), this.view.dispatch({ effects: Fe.setState.of(new ti(n.context)) })), this.chunkBudget > 0 && (!l || o) && this.scheduleWork(), this.checkAsyncSchedule(n.context);
  }
  checkAsyncSchedule(s) {
    s.scheduleOn && (this.workScheduled++, s.scheduleOn.then(() => this.scheduleWork()).catch((e) => Ae(this.view.state, e)).then(() => this.workScheduled--), s.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), St = R.define({ combine: (s) => s.length ? s[0] : null, enables: (s) => [Fe.state, Lu, E.contentAttributes.compute([s], (e) => {
  let t = e.facet(s);
  return t && t.name ? { "data-language": t.name } : {};
})] });
class Bp {
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const Pu = R.define(), es = R.define({ combine: (s) => {
  if (!s.length)
    return "  ";
  let e = s[0];
  if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
    throw new Error("Invalid indent unit: " + JSON.stringify(s[0]));
  return e;
} });
function Pn(s) {
  let e = s.facet(es);
  return e.charCodeAt(0) == 9 ? s.tabSize * e.length : e.length;
}
function Li(s, e) {
  let t = "", i = s.tabSize, n = s.facet(es)[0];
  if (n == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    n = " ";
  }
  for (let r = 0; r < e; r++)
    t += n;
  return t;
}
function qr(s, e) {
  s instanceof z && (s = new ts(s));
  for (let i of s.state.facet(Pu)) {
    let n = i(s, e);
    if (n !== void 0)
      return n;
  }
  let t = pe(s.state);
  return t.length >= e ? function(i, n, r) {
    let o = n.resolveStack(r), l = o.node.enterUnfinishedNodesBefore(r);
    if (l != o.node) {
      let a = [];
      for (let h = l; h != o.node; h = h.parent)
        a.push(h);
      for (let h = a.length - 1; h >= 0; h--)
        o = { node: a[h], next: o };
    }
    return Hh(o, i, r);
  }(s, t, e) : null;
}
class ts {
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Pn(e);
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: n, simulateDoubleBreak: r } = this.options;
    return n != null && n >= i.from && n <= i.to ? r && n == e ? { text: "", from: e } : (t < 0 ? n < e : n <= e) ? { text: i.text.slice(n - i.from), from: n } : { text: i.text.slice(0, n - i.from), from: i.from } : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: n } = this.lineAt(e, t);
    return i.slice(e - n, Math.min(i.length, e + 100 - n));
  }
  column(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), r = this.countColumn(i, e - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  countColumn(e, t = e.length) {
    return ni(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Nu = new W();
function Hh(s, e, t) {
  for (let i = s; i; i = i.next) {
    let n = Iu(i.node);
    if (n)
      return n(jr.create(e, t, i));
  }
  return 0;
}
function Iu(s) {
  let e = s.type.prop(Nu);
  if (e)
    return e;
  let t, i = s.firstChild;
  if (i && (t = i.type.prop(W.closedBy))) {
    let n = s.lastChild, r = n && t.indexOf(n.name) > -1;
    return (o) => Wh(o, !0, 1, void 0, r && !function(l) {
      return l.pos == l.options.simulateBreak && l.options.simulateDoubleBreak;
    }(o) ? n.from : void 0);
  }
  return s.parent == null ? Vu : null;
}
function Vu() {
  return 0;
}
class jr extends ts {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new jr(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Hu(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return Hh(this.context.next, this.base, this.pos);
  }
}
function Hu(s, e) {
  for (let t = e; t; t = t.parent)
    if (s == t)
      return !0;
  return !1;
}
function Lp({ closing: s, align: e = !0, units: t = 1 }) {
  return (i) => Wh(i, e, t, s);
}
function Wh(s, e, t, i, n) {
  let r = s.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || n == s.pos + o, a = e ? function(h) {
    let c = h.node, f = c.childAfter(c.from), u = c.lastChild;
    if (!f)
      return null;
    let d = h.options.simulateBreak, p = h.state.doc.lineAt(f.from), g = d == null || d <= p.from ? p.to : Math.min(p.to, d);
    for (let m = f.to; ; ) {
      let v = c.childAfter(m);
      if (!v || v == u)
        return null;
      if (!v.type.isSkipped)
        return v.from < g ? f : null;
      m = v.to;
    }
  }(s) : null;
  return a ? l ? s.column(a.from) : s.column(a.to) : s.baseIndent + (l ? 0 : s.unit * t);
}
const Pp = (s) => s.baseIndent;
function Np({ except: s, units: e = 1 } = {}) {
  return (t) => {
    let i = s && s.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
const Wu = R.define(), Fu = new W();
function Ip(s) {
  let e = s.firstChild, t = s.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? s.to : t.from } : null;
}
function zu(s) {
  let e = s.lastChild;
  return e && e.to == s.to && e.type.isError;
}
function Nn(s, e, t) {
  for (let i of s.facet(Wu)) {
    let n = i(s, e, t);
    if (n)
      return n;
  }
  return function(i, n, r) {
    let o = pe(i);
    if (o.length < r)
      return null;
    let l = null;
    for (let a = o.resolveStack(r, 1); a; a = a.next) {
      let h = a.node;
      if (h.to <= r || h.from > r)
        continue;
      if (l && h.from < n)
        break;
      let c = h.type.prop(Fu);
      if (c && (h.to < o.length - 50 || o.length == i.doc.length || !zu(h))) {
        let f = c(h, i);
        f && f.from <= r && f.from >= n && f.to > r && (l = f);
      }
    }
    return l;
  }(s, e, t);
}
function Fh(s, e) {
  let t = e.mapPos(s.from, 1), i = e.mapPos(s.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const In = H.define({ map: Fh }), Pi = H.define({ map: Fh });
function xl(s) {
  let e = [];
  for (let { head: t } of s.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(s.lineBlockAt(t));
  return e;
}
const Nt = oe.define({ create: () => N.none, update(s, e) {
  s = s.map(e.changes);
  for (let t of e.effects)
    if (t.is(In) && !qu(s, t.value.from, t.value.to)) {
      let { preparePlaceholder: i } = e.state.facet(Kr), n = i ? N.replace({ widget: new $u(i(e.state, t.value)) }) : Cl;
      s = s.update({ add: [n.range(t.value.from, t.value.to)] });
    } else
      t.is(Pi) && (s = s.update({ filter: (i, n) => t.value.from != i || t.value.to != n, filterFrom: t.value.from, filterTo: t.value.to }));
  if (e.selection) {
    let t = !1, { head: i } = e.selection.main;
    s.between(i, i, (n, r) => {
      n < i && r > i && (t = !0);
    }), t && (s = s.update({ filterFrom: i, filterTo: i, filter: (n, r) => r <= i || n >= i }));
  }
  return s;
}, provide: (s) => E.decorations.from(s), toJSON(s, e) {
  let t = [];
  return s.between(0, e.doc.length, (i, n) => {
    t.push(i, n);
  }), t;
}, fromJSON(s) {
  if (!Array.isArray(s) || s.length % 2)
    throw new RangeError("Invalid JSON for fold state");
  let e = [];
  for (let t = 0; t < s.length; ) {
    let i = s[t++], n = s[t++];
    if (typeof i != "number" || typeof n != "number")
      throw new RangeError("Invalid JSON for fold state");
    e.push(Cl.range(i, n));
  }
  return N.set(e, !0);
} });
function Vn(s, e, t) {
  var i;
  let n = null;
  return (i = s.field(Nt, !1)) === null || i === void 0 || i.between(e, t, (r, o) => {
    (!n || n.from > r) && (n = { from: r, to: o });
  }), n;
}
function qu(s, e, t) {
  let i = !1;
  return s.between(e, e, (n, r) => {
    n == e && r == t && (i = !0);
  }), i;
}
function kl(s, e) {
  return s.field(Nt, !1) ? e : e.concat(H.appendConfig.of(zh()));
}
function Sl(s, e, t = !0) {
  let i = s.state.doc.lineAt(e.from).number, n = s.state.doc.lineAt(e.to).number;
  return E.announce.of(`${s.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${s.state.phrase("to")} ${n}.`);
}
const ju = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: (s) => {
  for (let e of xl(s)) {
    let t = Nn(s.state, e.from, e.to);
    if (t)
      return s.dispatch({ effects: kl(s.state, [In.of(t), Sl(s, t)]) }), !0;
  }
  return !1;
} }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: (s) => {
  if (!s.state.field(Nt, !1))
    return !1;
  let e = [];
  for (let t of xl(s)) {
    let i = Vn(s.state, t.from, t.to);
    i && e.push(Pi.of(i), Sl(s, i, !1));
  }
  return e.length && s.dispatch({ effects: e }), e.length > 0;
} }, { key: "Ctrl-Alt-[", run: (s) => {
  let { state: e } = s, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let n = s.lineBlockAt(i), r = Nn(e, n.from, n.to);
    r && t.push(In.of(r)), i = (r ? s.lineBlockAt(r.to) : n).to + 1;
  }
  return t.length && s.dispatch({ effects: kl(s.state, t) }), !!t.length;
} }, { key: "Ctrl-Alt-]", run: (s) => {
  let e = s.state.field(Nt, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, s.state.doc.length, (i, n) => {
    t.push(Pi.of({ from: i, to: n }));
  }), s.dispatch({ effects: t }), !0;
} }], Ku = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "…" }, Kr = R.define({ combine: (s) => it(s, Ku) });
function zh(s) {
  let e = [Nt, Yu];
  return s && e.push(Kr.of(s)), e;
}
function qh(s, e) {
  let { state: t } = s, i = t.facet(Kr), n = (o) => {
    let l = s.lineBlockAt(s.posAtDOM(o.target)), a = Vn(s.state, l.from, l.to);
    a && s.dispatch({ effects: Pi.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(s, n, e);
  let r = document.createElement("span");
  return r.textContent = i.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = n, r;
}
const Cl = N.replace({ widget: new class extends nt {
  toDOM(s) {
    return qh(s, null);
  }
}() });
class $u extends nt {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return qh(e, this.value);
  }
}
const Uu = { openText: "⌄", closedText: "›", markerDOM: null, domEventHandlers: {}, foldingChanged: () => !1 };
class Cs extends st {
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
function Gu(s = {}) {
  let e = Object.assign(Object.assign({}, Uu), s), t = new Cs(e, !0), i = new Cs(e, !1), n = _.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(St) != o.state.facet(St) || o.startState.field(Nt, !1) != o.state.field(Nt, !1) || pe(o.startState) != pe(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new wt();
      for (let a of o.viewportLineBlocks) {
        let h = Vn(o.state, a.from, a.to) ? i : Nn(o.state, a.from, a.to) ? t : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = e;
  return [n, cu({ class: "cm-foldGutter", markers(o) {
    var l;
    return ((l = o.plugin(n)) === null || l === void 0 ? void 0 : l.markers) || F.empty;
  }, initialSpacer: () => new Cs(e, !1), domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
    if (r.click && r.click(o, l, a))
      return !0;
    let h = Vn(o.state, l.from, l.to);
    if (h)
      return o.dispatch({ effects: Pi.of(h) }), !0;
    let c = Nn(o.state, l.from, l.to);
    return !!c && (o.dispatch({ effects: In.of(c) }), !0);
  } }) }), zh()];
}
const Yu = E.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class is {
  constructor(e, t) {
    let i;
    function n(l) {
      let a = yt.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    this.specs = e;
    const r = typeof t.all == "string" ? t.all : t.all ? n(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Fe ? (l) => l.prop(qt) == o.data : o ? (l) => l == o : void 0, this.style = Ih(e.map((l) => ({ tag: l.tag, class: l.class || n(Object.assign({}, l, { tag: null })) })), { all: r }).style, this.module = i ? new yt(i) : null, this.themeType = t.themeType;
  }
  static define(e, t) {
    return new is(e, t || {});
  }
}
const yr = R.define(), jh = R.define({ combine: (s) => s.length ? [s[0]] : null });
function As(s) {
  let e = s.facet(yr);
  return e.length ? e : s.facet(jh);
}
function Xu(s, e) {
  let t, i = [Qu];
  return s instanceof is && (s.module && i.push(E.styleModule.of(s.module)), t = s.themeType), e != null && e.fallback ? i.push(jh.of(s)) : t ? i.push(yr.computeN([E.darkTheme], (n) => n.facet(E.darkTheme) == (t == "dark") ? [s] : [])) : i.push(yr.of(s)), i;
}
class Ju {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = pe(e.state), this.decorations = this.buildDeco(e, As(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = pe(e.state), i = As(e.state), n = i != As(e.startState), { viewport: r } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !n && t.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || n) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = r.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return N.none;
    let i = new wt();
    for (let { from: n, to: r } of e.visibleRanges)
      Du(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = N.mark({ class: a })));
      }, n, r);
    return i.finish();
  }
}
const Qu = Ct.high(_.fromClass(Ju, { decorations: (s) => s.decorations })), Zu = is.define([{ tag: O.meta, color: "#404740" }, { tag: O.link, textDecoration: "underline" }, { tag: O.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: O.emphasis, fontStyle: "italic" }, { tag: O.strong, fontWeight: "bold" }, { tag: O.strikethrough, textDecoration: "line-through" }, { tag: O.keyword, color: "#708" }, { tag: [O.atom, O.bool, O.url, O.contentSeparator, O.labelName], color: "#219" }, { tag: [O.literal, O.inserted], color: "#164" }, { tag: [O.string, O.deleted], color: "#a11" }, { tag: [O.regexp, O.escape, O.special(O.string)], color: "#e40" }, { tag: O.definition(O.variableName), color: "#00f" }, { tag: O.local(O.variableName), color: "#30a" }, { tag: [O.typeName, O.namespace], color: "#085" }, { tag: O.className, color: "#167" }, { tag: [O.special(O.variableName), O.macroName], color: "#256" }, { tag: O.definition(O.propertyName), color: "#00c" }, { tag: O.comment, color: "#940" }, { tag: O.invalid, color: "#f00" }]), _u = E.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), Kh = 1e4, $h = "()[]{}", Uh = R.define({ combine: (s) => it(s, { afterCursor: !0, brackets: $h, maxScanDistance: Kh, renderMatch: id }) }), ed = N.mark({ class: "cm-matchingBracket" }), td = N.mark({ class: "cm-nonmatchingBracket" });
function id(s) {
  let e = [], t = s.matched ? ed : td;
  return e.push(t.range(s.start.from, s.start.to)), s.end && e.push(t.range(s.end.from, s.end.to)), e;
}
const nd = oe.define({ create: () => N.none, update(s, e) {
  if (!e.docChanged && !e.selection)
    return s;
  let t = [], i = e.state.facet(Uh);
  for (let n of e.state.selection.ranges) {
    if (!n.empty)
      continue;
    let r = Ze(e.state, n.head, -1, i) || n.head > 0 && Ze(e.state, n.head - 1, 1, i) || i.afterCursor && (Ze(e.state, n.head, 1, i) || n.head < e.state.doc.length && Ze(e.state, n.head + 1, -1, i));
    r && (t = t.concat(i.renderMatch(r, e.state)));
  }
  return N.set(t, !0);
}, provide: (s) => E.decorations.from(s) }), sd = [nd, _u];
function rd(s = {}) {
  return [Uh.of(s), sd];
}
const od = new W();
function br(s, e, t) {
  let i = s.prop(e < 0 ? W.openedBy : W.closedBy);
  if (i)
    return i;
  if (s.name.length == 1) {
    let n = t.indexOf(s.name);
    if (n > -1 && n % 2 == (e < 0 ? 1 : 0))
      return [t[n + e]];
  }
  return null;
}
function xr(s) {
  let e = s.type.prop(od);
  return e ? e(s.node) : s;
}
function Ze(s, e, t, i = {}) {
  let n = i.maxScanDistance || Kh, r = i.brackets || $h, o = pe(s), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = br(a.type, t, r);
    if (h && a.from < a.to) {
      let c = xr(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return ld(s, e, t, a, c, h, r);
    }
  }
  return function(a, h, c, f, u, d, p) {
    let g = c < 0 ? a.sliceDoc(h - 1, h) : a.sliceDoc(h, h + 1), m = p.indexOf(g);
    if (m < 0 || m % 2 == 0 != c > 0)
      return null;
    let v = { from: c < 0 ? h - 1 : h, to: c > 0 ? h + 1 : h }, w = a.doc.iterRange(h, c > 0 ? a.doc.length : 0), y = 0;
    for (let b = 0; !w.next().done && b <= d; ) {
      let x = w.value;
      c < 0 && (b += x.length);
      let A = h + b * c;
      for (let S = c > 0 ? 0 : x.length - 1, L = c > 0 ? x.length : -1; S != L; S += c) {
        let C = p.indexOf(x[S]);
        if (!(C < 0 || f.resolveInner(A + S, 1).type != u))
          if (C % 2 == 0 == c > 0)
            y++;
          else {
            if (y == 1)
              return { start: v, end: { from: A + S, to: A + S + 1 }, matched: C >> 1 == m >> 1 };
            y--;
          }
      }
      c > 0 && (b += x.length);
    }
    return w.done ? { start: v, matched: !1 } : null;
  }(s, e, t, o, l.type, n, r);
}
function ld(s, e, t, i, n, r, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = xr(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        }
        if (br(c.type, t, o))
          h++;
        else if (br(c.type, -t, o)) {
          if (h == 0) {
            let f = xr(c);
            return { start: a, end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0, matched: !1 };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
const ad = /* @__PURE__ */ Object.create(null), Al = [Be.none], Ml = [], Ol = /* @__PURE__ */ Object.create(null), hd = /* @__PURE__ */ Object.create(null);
for (let [s, e] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]])
  hd[s] = cd(ad, e);
function Ms(s, e) {
  Ml.indexOf(s) > -1 || Ml.push(s);
}
function cd(s, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = s[h] || O[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : Ms(h) : a.length ? Ms(h) : a = Array.isArray(c) ? c : [c] : Ms(h);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), n = i + " " + t.map((l) => l.id), r = Ol[n];
  if (r)
    return r.id;
  let o = Ol[n] = Be.define({ id: Al.length, name: i, props: [Ou({ [i]: t })] });
  return Al.push(o), o.id;
}
X.RTL, X.LTR;
function $r(s, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let n = s(e, t);
    return !!n && (i(t.update(n)), !0);
  };
}
const fd = $r(pd, 0), ud = $r(Gh, 0), dd = $r((s, e) => Gh(s, e, function(t) {
  let i = [];
  for (let n of t.selection.ranges) {
    let r = t.doc.lineAt(n.from), o = n.to <= r.to ? r : t.doc.lineAt(n.to), l = i.length - 1;
    l >= 0 && i[l].to > r.from ? i[l].to = o.to : i.push({ from: r.from + /^\s*/.exec(r.text)[0].length, to: o.to });
  }
  return i;
}(e)), 0);
function Ur(s, e) {
  let t = s.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const fi = 50;
function Gh(s, e, t = e.selection.ranges) {
  let i = t.map((r) => Ur(e, r.from).block);
  if (!i.every((r) => r))
    return null;
  let n = t.map((r, o) => function(l, { open: a, close: h }, c, f) {
    let u, d, p = l.sliceDoc(c - fi, c), g = l.sliceDoc(f, f + fi), m = /\s*$/.exec(p)[0].length, v = /^\s*/.exec(g)[0].length, w = p.length - m;
    if (p.slice(w - a.length, w) == a && g.slice(v, v + h.length) == h)
      return { open: { pos: c - m, margin: m && 1 }, close: { pos: f + v, margin: v && 1 } };
    f - c <= 2 * fi ? u = d = l.sliceDoc(c, f) : (u = l.sliceDoc(c, c + fi), d = l.sliceDoc(f - fi, f));
    let y = /^\s*/.exec(u)[0].length, b = /\s*$/.exec(d)[0].length, x = d.length - b - h.length;
    return u.slice(y, y + a.length) == a && d.slice(x, x + h.length) == h ? { open: { pos: c + y + a.length, margin: /\s/.test(u.charAt(y + a.length)) ? 1 : 0 }, close: { pos: f - b - h.length, margin: /\s/.test(d.charAt(x - 1)) ? 1 : 0 } } : null;
  }(e, i[o], r.from, r.to));
  if (s != 2 && !n.every((r) => r))
    return { changes: e.changes(t.map((r, o) => n[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (s != 1 && n.some((r) => r)) {
    let r = [];
    for (let o, l = 0; l < n.length; l++)
      if (o = n[l]) {
        let a = i[l], { open: h, close: c } = o;
        r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function pd(s, e, t = e.selection.ranges) {
  let i = [], n = -1;
  for (let { from: r, to: o } of t) {
    let l = i.length, a = 1e9, h = Ur(e, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = e.doc.lineAt(c);
        if (f.from > n && (r == o || o > f.from)) {
          n = f.from;
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
  if (s != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      !f && c || r.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  }
  if (s != 1 && i.some((r) => r.comment >= 0)) {
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
const kr = rt.define(), md = rt.define(), gd = R.define(), Yh = R.define({ combine: (s) => it(s, { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (e, t) => (i, n) => e(i, n) || t(i, n) }) }), Xh = oe.define({ create: () => _e.empty, update(s, e) {
  let t = e.state.facet(Yh), i = e.annotation(kr);
  if (i) {
    let a = Me.fromTransaction(e, i.selection), h = i.side, c = h == 0 ? s.undone : s.done;
    return c = a ? Hn(c, c.length, t.minDepth, a) : Zh(c, e.startState.selection), new _e(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
  }
  let n = e.annotation(md);
  if (n != "full" && n != "before" || (s = s.isolate()), e.annotation(te.addToHistory) === !1)
    return e.changes.empty ? s : s.addMapping(e.changes.desc);
  let r = Me.fromTransaction(e), o = e.annotation(te.time), l = e.annotation(te.userEvent);
  return r ? s = s.addChanges(r, o, l, t, e) : e.selection && (s = s.addSelection(e.startState.selection, o, l, t.newGroupDelay)), n != "full" && n != "after" || (s = s.isolate()), s;
}, toJSON: (s) => ({ done: s.done.map((e) => e.toJSON()), undone: s.undone.map((e) => e.toJSON()) }), fromJSON: (s) => new _e(s.done.map(Me.fromJSON), s.undone.map(Me.fromJSON)) });
function vd(s = {}) {
  return [Xh, Yh.of(s), E.domEventHandlers({ beforeinput(e, t) {
    let i = e.inputType == "historyUndo" ? Jh : e.inputType == "historyRedo" ? Sr : null;
    return !!i && (e.preventDefault(), i(t));
  } })];
}
function ns(s, e) {
  return ({ state: t, dispatch: i }) => {
    if (!e && t.readOnly)
      return !1;
    let n = t.field(Xh, !1);
    if (!n)
      return !1;
    let r = n.pop(s, t, e);
    return !!r && (i(r), !0);
  };
}
const Jh = ns(0, !1), Sr = ns(1, !1), wd = ns(0, !0), yd = ns(1, !0);
class Me {
  constructor(e, t, i, n, r) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = n, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new Me(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return { changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(), mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(), startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(), selectionsAfter: this.selectionsAfter.map((n) => n.toJSON()) };
  }
  static fromJSON(e) {
    return new Me(e.changes && se.fromJSON(e.changes), [], e.mapped && et.fromJSON(e.mapped), e.startSelection && k.fromJSON(e.startSelection), e.selectionsAfter.map(k.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = Ve;
    for (let n of e.startState.facet(gd)) {
      let r = n(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty ? null : new Me(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Ve);
  }
  static selection(e) {
    return new Me(void 0, Ve, void 0, void 0, e);
  }
}
function Hn(s, e, t, i) {
  let n = e + 1 > t + 20 ? e - t - 1 : 0, r = s.slice(n, e);
  return r.push(i), r;
}
function Qh(s, e) {
  return s.length ? e.length ? s.concat(e) : s : e;
}
const Ve = [], bd = 200;
function Zh(s, e) {
  if (s.length) {
    let t = s[s.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - bd));
    return i.length && i[i.length - 1].eq(e) ? s : (i.push(e), Hn(s, s.length - 1, 1e9, t.setSelAfter(i)));
  }
  return [Me.selection([e])];
}
function xd(s) {
  let e = s[s.length - 1], t = s.slice();
  return t[s.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Os(s, e) {
  if (!s.length)
    return s;
  let t = s.length, i = Ve;
  for (; t; ) {
    let n = kd(s[t - 1], e, i);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let r = s.slice(0, t);
      return r[t - 1] = n, r;
    }
    e = n.mapped, t--, i = n.selectionsAfter;
  }
  return i.length ? [Me.selection(i)] : Ve;
}
function kd(s, e, t) {
  let i = Qh(s.selectionsAfter.length ? s.selectionsAfter.map((l) => l.map(e)) : Ve, t);
  if (!s.changes)
    return Me.selection(i);
  let n = s.changes.map(e), r = e.mapDesc(s.changes, !0), o = s.mapped ? s.mapped.composeDesc(r) : r;
  return new Me(n, H.mapEffects(s.effects, e), o, s.startSelection.map(r), i);
}
const Sd = /^(input\.type|delete)($|\.)/;
class _e {
  constructor(e, t, i = 0, n = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new _e(this.done, this.undone) : this;
  }
  addChanges(e, t, i, n, r) {
    let o = this.done, l = o[o.length - 1];
    return o = l && l.changes && !l.changes.empty && e.changes && (!i || Sd.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < n.newGroupDelay && n.joinToEvent(r, function(a, h) {
      let c = [], f = !1;
      return a.iterChangedRanges((u, d) => c.push(u, d)), h.iterChangedRanges((u, d, p, g) => {
        for (let m = 0; m < c.length; ) {
          let v = c[m++], w = c[m++];
          g >= v && p <= w && (f = !0);
        }
      }), f;
    }(l.changes, e.changes)) || i == "input.type.compose") ? Hn(o, o.length - 1, n.minDepth, new Me(e.changes.compose(l.changes), Qh(e.effects, l.effects), l.mapped, l.startSelection, Ve)) : Hn(o, o.length, n.minDepth, e), new _e(o, Ve, t, i);
  }
  addSelection(e, t, i, n) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ve;
    return r.length > 0 && t - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && (o = r[r.length - 1], l = e, o.ranges.length == l.ranges.length && o.ranges.filter((a, h) => a.empty != l.ranges[h].empty).length === 0) ? this : new _e(Zh(this.done, e), this.undone, t, i);
    var o, l;
  }
  addMapping(e) {
    return new _e(Os(this.done, e), Os(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let n = e == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let r = n[n.length - 1], o = r.selectionsAfter[0] || t.selection;
    if (i && r.selectionsAfter.length)
      return t.update({ selection: r.selectionsAfter[r.selectionsAfter.length - 1], annotations: kr.of({ side: e, rest: xd(n), selection: o }), userEvent: e == 0 ? "select.undo" : "select.redo", scrollIntoView: !0 });
    if (r.changes) {
      let l = n.length == 1 ? Ve : n.slice(0, n.length - 1);
      return r.mapped && (l = Os(l, r.mapped)), t.update({ changes: r.changes, selection: r.startSelection, effects: r.effects, annotations: kr.of({ side: e, rest: l, selection: o }), filter: !1, userEvent: e == 0 ? "undo" : "redo", scrollIntoView: !0 });
    }
    return null;
  }
}
_e.empty = new _e(Ve, Ve);
const Cd = [{ key: "Mod-z", run: Jh, preventDefault: !0 }, { key: "Mod-y", mac: "Mod-Shift-z", run: Sr, preventDefault: !0 }, { linux: "Ctrl-Shift-z", run: Sr, preventDefault: !0 }, { key: "Mod-u", run: wd, preventDefault: !0 }, { key: "Alt-u", mac: "Mod-Shift-u", run: yd, preventDefault: !0 }];
function Yt(s, e) {
  return k.create(s.ranges.map(e), s.mainIndex);
}
function tt(s, e) {
  return s.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function He({ state: s, dispatch: e }, t) {
  let i = Yt(s.selection, t);
  return !i.eq(s.selection, !0) && (e(tt(s, i)), !0);
}
function ss(s, e) {
  return k.cursor(e ? s.to : s.from);
}
function _h(s, e) {
  return He(s, (t) => t.empty ? s.moveByChar(t, e) : ss(t, e));
}
function ge(s) {
  return s.textDirectionAt(s.state.selection.main.head) == X.LTR;
}
const Dl = (s) => _h(s, !ge(s)), Tl = (s) => _h(s, ge(s));
function El(s, e) {
  return He(s, (t) => t.empty ? s.moveByGroup(t, e) : ss(t, e));
}
function Ad(s, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(s.sliceDoc(e.from, e.to))) || e.firstChild;
}
function hn(s, e, t) {
  let i, n, r = pe(s).resolveInner(e.head), o = t ? W.closedBy : W.openedBy;
  for (let l = e.head; ; ) {
    let a = t ? r.childAfter(l) : r.childBefore(l);
    if (!a)
      break;
    Ad(s, a, o) ? r = a : l = t ? a.to : a.from;
  }
  return n = r.type.prop(o) && (i = t ? Ze(s, r.from, 1) : Ze(s, r.to, -1)) && i.matched ? t ? i.end.to : i.end.from : t ? r.to : r.from, k.cursor(n, t ? -1 : 1);
}
function ec(s, e) {
  return He(s, (t) => {
    if (!t.empty)
      return ss(t, e);
    let i = s.moveVertically(t, e);
    return i.head != t.head ? i : s.moveToLineBoundary(t, e);
  });
}
const Rl = (s) => ec(s, !1), Bl = (s) => ec(s, !0);
function tc(s) {
  let e, t = s.scrollDOM.clientHeight < s.scrollDOM.scrollHeight - 2, i = 0, n = 0;
  if (t) {
    for (let r of s.state.facet(E.scrollMargins)) {
      let o = r(s);
      o != null && o.top && (i = Math.max(o == null ? void 0 : o.top, i)), o != null && o.bottom && (n = Math.max(o == null ? void 0 : o.bottom, n));
    }
    e = s.scrollDOM.clientHeight - i - n;
  } else
    e = (s.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: i, marginBottom: n, selfScroll: t, height: Math.max(s.defaultLineHeight, e - 5) };
}
function ic(s, e) {
  let t, i = tc(s), { state: n } = s, r = Yt(n.selection, (o) => o.empty ? s.moveVertically(o, e, i.height) : ss(o, e));
  if (r.eq(n.selection))
    return !1;
  if (i.selfScroll) {
    let o = s.coordsAtPos(n.selection.main.head), l = s.scrollDOM.getBoundingClientRect(), a = l.top + i.marginTop, h = l.bottom - i.marginBottom;
    o && o.top > a && o.bottom < h && (t = E.scrollIntoView(r.main.head, { y: "start", yMargin: o.top - a }));
  }
  return s.dispatch(tt(n, r), { effects: t }), !0;
}
const Ll = (s) => ic(s, !1), Ds = (s) => ic(s, !0);
function at(s, e, t) {
  let i = s.lineBlockAt(e.head), n = s.moveToLineBoundary(e, t);
  if (n.head == e.head && n.head != (t ? i.to : i.from) && (n = s.moveToLineBoundary(e, t, !1)), !t && n.head == i.from && i.length) {
    let r = /^\s*/.exec(s.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (n = k.cursor(i.from + r));
  }
  return n;
}
function Le(s, e) {
  let t = Yt(s.state.selection, (i) => {
    let n = e(i);
    return k.range(i.anchor, n.head, n.goalColumn, n.bidiLevel || void 0);
  });
  return !t.eq(s.state.selection) && (s.dispatch(tt(s.state, t)), !0);
}
function nc(s, e) {
  return Le(s, (t) => s.moveByChar(t, e));
}
const Pl = (s) => nc(s, !ge(s)), Nl = (s) => nc(s, ge(s));
function Il(s, e) {
  return Le(s, (t) => s.moveByGroup(t, e));
}
function sc(s, e) {
  return Le(s, (t) => s.moveVertically(t, e));
}
const Vl = (s) => sc(s, !1), Hl = (s) => sc(s, !0);
function rc(s, e) {
  return Le(s, (t) => s.moveVertically(t, e, tc(s).height));
}
const Wl = (s) => rc(s, !1), Fl = (s) => rc(s, !0), zl = ({ state: s, dispatch: e }) => (e(tt(s, { anchor: 0 })), !0), ql = ({ state: s, dispatch: e }) => (e(tt(s, { anchor: s.doc.length })), !0), jl = ({ state: s, dispatch: e }) => (e(tt(s, { anchor: s.selection.main.anchor, head: 0 })), !0), Kl = ({ state: s, dispatch: e }) => (e(tt(s, { anchor: s.selection.main.anchor, head: s.doc.length })), !0);
function Si(s, e) {
  if (s.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = s, n = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = cn(s, a, !1)) : a > o && (t = "delete.forward", a = cn(s, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = cn(s, o, !1), l = cn(s, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: k.cursor(o, o < r.head ? -1 : 1) };
  });
  return !n.changes.empty && (s.dispatch(i.update(n, { scrollIntoView: !0, userEvent: t, effects: t == "delete.selection" ? E.announce.of(i.phrase("Selection deleted")) : void 0 })), !0);
}
function cn(s, e, t) {
  if (s instanceof E)
    for (let i of s.state.facet(E.atomicRanges).map((n) => n(s)))
      i.between(e, e, (n, r) => {
        n < e && r > e && (e = t ? r : n);
      });
  return e;
}
const oc = (s, e, t) => Si(s, (i) => {
  let n, r, o = i.from, { state: l } = s, a = l.doc.lineAt(o);
  if (t && !e && o > a.from && o < a.from + 200 && !/[^ \t]/.test(n = a.text.slice(0, o - a.from))) {
    if (n[n.length - 1] == "	")
      return o - 1;
    let h = ni(n, l.tabSize) % Pn(l) || Pn(l);
    for (let c = 0; c < h && n[n.length - 1 - c] == " "; c++)
      o--;
    r = o;
  } else
    r = de(a.text, o - a.from, e, e) + a.from, r == o && a.number != (e ? l.doc.lines : 1) ? r += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(a.text.slice(r - a.from, o - a.from)) && (r = de(a.text, r - a.from, !1, !1) + a.from);
  return r;
}), Ts = (s) => oc(s, !1, !0), $l = (s) => oc(s, !0, !1), lc = (s, e) => Si(s, (t) => {
  let i = t.head, { state: n } = s, r = n.doc.lineAt(i), o = n.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? r.to : r.from)) {
      i == t.head && r.number != (e ? n.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = de(r.text, i - r.from, e) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    h == " " && i == t.head || (l = c), i = a;
  }
  return i;
}), Ul = (s) => lc(s, !1);
function Wn(s) {
  let e = [], t = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.from), r = s.doc.lineAt(i.to);
    if (i.empty || i.to != r.from || (r = s.doc.lineAt(i.to - 1)), t >= n.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      e.push({ from: n.from, to: r.to, ranges: [i] });
    t = r.number + 1;
  }
  return e;
}
function Gl(s, e, t) {
  if (s.readOnly)
    return !1;
  let i = [], n = [];
  for (let r of Wn(s)) {
    if (t ? r.to == s.doc.length : r.from == 0)
      continue;
    let o = s.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + s.lineBreak });
      for (let a of r.ranges)
        n.push(k.range(Math.min(s.doc.length, a.anchor + l), Math.min(s.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: s.lineBreak + o.text });
      for (let a of r.ranges)
        n.push(k.range(a.anchor - l, a.head - l));
    }
  }
  return !!i.length && (e(s.update({ changes: i, scrollIntoView: !0, selection: k.create(n, s.selection.mainIndex), userEvent: "move.line" })), !0);
}
function Yl(s, e, t) {
  if (s.readOnly)
    return !1;
  let i = [];
  for (let n of Wn(s))
    t ? i.push({ from: n.from, insert: s.doc.slice(n.from, n.to) + s.lineBreak }) : i.push({ from: n.to, insert: s.lineBreak + s.doc.slice(n.from, n.to) });
  return e(s.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Md = ac(!1);
function ac(s) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((n) => {
      let { from: r, to: o } = n, l = e.doc.lineAt(r), a = !s && r == o && function(u, d) {
        if (/\(\)|\[\]|\{\}/.test(u.sliceDoc(d - 1, d + 1)))
          return { from: d, to: d };
        let p, g = pe(u).resolveInner(d), m = g.childBefore(d), v = g.childAfter(d);
        return m && v && m.to <= d && v.from >= d && (p = m.type.prop(W.closedBy)) && p.indexOf(v.name) > -1 && u.doc.lineAt(m.to).from == u.doc.lineAt(v.from).from && !/\S/.test(u.sliceDoc(m.to, v.from)) ? { from: m.to, to: v.from } : null;
      }(e, r);
      s && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new ts(e, { simulateBreak: r, simulateDoubleBreak: !!a }), c = qr(h, r);
      for (c == null && (c = ni(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", Li(e, c)];
      return a && f.push(Li(e, h.lineIndent(l.from, -1))), { changes: { from: r, to: o, insert: q.of(f) }, range: k.cursor(r + 1 + f[1].length) };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Gr(s, e) {
  let t = -1;
  return s.changeByRange((i) => {
    let n = [];
    for (let o = i.from; o <= i.to; ) {
      let l = s.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, n, i), t = l.number), o = l.to + 1;
    }
    let r = s.changes(n);
    return { changes: n, range: k.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1)) };
  });
}
const hc = ({ state: s, dispatch: e }) => !s.readOnly && (e(s.update(Gr(s, (t, i) => {
  i.push({ from: t.from, insert: s.facet(es) });
}), { userEvent: "input.indent" })), !0), cc = ({ state: s, dispatch: e }) => !s.readOnly && (e(s.update(Gr(s, (t, i) => {
  let n = /^\s*/.exec(t.text)[0];
  if (!n)
    return;
  let r = ni(n, s.tabSize), o = 0, l = Li(s, Math.max(0, r - Pn(s)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Od = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: (s) => He(s, (e) => hn(s.state, e, !ge(s))), shift: (s) => Le(s, (e) => hn(s.state, e, !ge(s))) }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: (s) => He(s, (e) => hn(s.state, e, ge(s))), shift: (s) => Le(s, (e) => hn(s.state, e, ge(s))) }, { key: "Alt-ArrowUp", run: ({ state: s, dispatch: e }) => Gl(s, e, !1) }, { key: "Shift-Alt-ArrowUp", run: ({ state: s, dispatch: e }) => Yl(s, e, !1) }, { key: "Alt-ArrowDown", run: ({ state: s, dispatch: e }) => Gl(s, e, !0) }, { key: "Shift-Alt-ArrowDown", run: ({ state: s, dispatch: e }) => Yl(s, e, !0) }, { key: "Escape", run: ({ state: s, dispatch: e }) => {
  let t = s.selection, i = null;
  return t.ranges.length > 1 ? i = k.create([t.main]) : t.main.empty || (i = k.create([k.cursor(t.main.head)])), !!i && (e(tt(s, i)), !0);
} }, { key: "Mod-Enter", run: ac(!0) }, { key: "Alt-l", mac: "Ctrl-l", run: ({ state: s, dispatch: e }) => {
  let t = Wn(s).map(({ from: i, to: n }) => k.range(i, Math.min(n + 1, s.doc.length)));
  return e(s.update({ selection: k.create(t), userEvent: "select" })), !0;
} }, { key: "Mod-i", run: ({ state: s, dispatch: e }) => {
  let t = Yt(s.selection, (i) => {
    var n;
    for (let r = pe(s).resolveStack(i.from, 1); r; r = r.next) {
      let { node: o } = r;
      if ((o.from < i.from && o.to >= i.to || o.to > i.to && o.from <= i.from) && (!((n = o.parent) === null || n === void 0) && n.parent))
        return k.range(o.to, o.from);
    }
    return i;
  });
  return e(tt(s, t)), !0;
}, preventDefault: !0 }, { key: "Mod-[", run: cc }, { key: "Mod-]", run: hc }, { key: "Mod-Alt-\\", run: ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new ts(s, { overrideIndentation: (r) => t[r] ?? -1 }), n = Gr(s, (r, o, l) => {
    let a = qr(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = Li(s, a);
    (h != c || l.from < r.from + h.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return n.changes.empty || e(s.update(n, { userEvent: "indent" })), !0;
} }, { key: "Shift-Mod-k", run: (s) => {
  if (s.state.readOnly)
    return !1;
  let { state: e } = s, t = e.changes(Wn(e).map(({ from: n, to: r }) => (n > 0 ? n-- : r < e.doc.length && r++, { from: n, to: r }))), i = Yt(e.selection, (n) => {
    let r;
    if (s.lineWrapping) {
      let o = s.lineBlockAt(n.head), l = s.coordsAtPos(n.head, n.assoc || 1);
      l && (r = o.bottom + s.documentTop - l.bottom + s.defaultLineHeight / 2);
    }
    return s.moveVertically(n, !0, r);
  }).map(t);
  return s.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
} }, { key: "Shift-Mod-\\", run: ({ state: s, dispatch: e }) => function(t, i, n) {
  let r = !1, o = Yt(t.selection, (l) => {
    let a = Ze(t, l.head, -1) || Ze(t, l.head, 1) || l.head > 0 && Ze(t, l.head - 1, 1) || l.head < t.doc.length && Ze(t, l.head + 1, -1);
    if (!a || !a.end)
      return l;
    r = !0;
    let h = a.start.from == l.head ? a.end.to : a.end.from;
    return n ? k.range(l.anchor, h) : k.cursor(h);
  });
  return !!r && (i(tt(t, o)), !0);
}(s, e, !1) }, { key: "Mod-/", run: (s) => {
  let { state: e } = s, t = e.doc.lineAt(e.selection.main.from), i = Ur(s.state, t.from);
  return i.line ? fd(s) : !!i.block && dd(s);
} }, { key: "Alt-A", run: ud }].concat([{ key: "ArrowLeft", run: Dl, shift: Pl, preventDefault: !0 }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: (s) => El(s, !ge(s)), shift: (s) => Il(s, !ge(s)), preventDefault: !0 }, { mac: "Cmd-ArrowLeft", run: (s) => He(s, (e) => at(s, e, !ge(s))), shift: (s) => Le(s, (e) => at(s, e, !ge(s))), preventDefault: !0 }, { key: "ArrowRight", run: Tl, shift: Nl, preventDefault: !0 }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: (s) => El(s, ge(s)), shift: (s) => Il(s, ge(s)), preventDefault: !0 }, { mac: "Cmd-ArrowRight", run: (s) => He(s, (e) => at(s, e, ge(s))), shift: (s) => Le(s, (e) => at(s, e, ge(s))), preventDefault: !0 }, { key: "ArrowUp", run: Rl, shift: Vl, preventDefault: !0 }, { mac: "Cmd-ArrowUp", run: zl, shift: jl }, { mac: "Ctrl-ArrowUp", run: Ll, shift: Wl }, { key: "ArrowDown", run: Bl, shift: Hl, preventDefault: !0 }, { mac: "Cmd-ArrowDown", run: ql, shift: Kl }, { mac: "Ctrl-ArrowDown", run: Ds, shift: Fl }, { key: "PageUp", run: Ll, shift: Wl }, { key: "PageDown", run: Ds, shift: Fl }, { key: "Home", run: (s) => He(s, (e) => at(s, e, !1)), shift: (s) => Le(s, (e) => at(s, e, !1)), preventDefault: !0 }, { key: "Mod-Home", run: zl, shift: jl }, { key: "End", run: (s) => He(s, (e) => at(s, e, !0)), shift: (s) => Le(s, (e) => at(s, e, !0)), preventDefault: !0 }, { key: "Mod-End", run: ql, shift: Kl }, { key: "Enter", run: Md }, { key: "Mod-a", run: ({ state: s, dispatch: e }) => (e(s.update({ selection: { anchor: 0, head: s.doc.length }, userEvent: "select" })), !0) }, { key: "Backspace", run: Ts, shift: Ts }, { key: "Delete", run: $l }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: Ul }, { key: "Mod-Delete", mac: "Alt-Delete", run: (s) => lc(s, !0) }, { mac: "Mod-Backspace", run: (s) => Si(s, (e) => {
  let t = s.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}) }, { mac: "Mod-Delete", run: (s) => Si(s, (e) => {
  let t = s.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(s.state.doc.length, e.head + 1);
}) }].concat([{ key: "Ctrl-b", run: Dl, shift: Pl, preventDefault: !0 }, { key: "Ctrl-f", run: Tl, shift: Nl }, { key: "Ctrl-p", run: Rl, shift: Vl }, { key: "Ctrl-n", run: Bl, shift: Hl }, { key: "Ctrl-a", run: (s) => He(s, (e) => k.cursor(s.lineBlockAt(e.head).from, 1)), shift: (s) => Le(s, (e) => k.cursor(s.lineBlockAt(e.head).from)) }, { key: "Ctrl-e", run: (s) => He(s, (e) => k.cursor(s.lineBlockAt(e.head).to, -1)), shift: (s) => Le(s, (e) => k.cursor(s.lineBlockAt(e.head).to)) }, { key: "Ctrl-d", run: $l }, { key: "Ctrl-h", run: Ts }, { key: "Ctrl-k", run: (s) => Si(s, (e) => {
  let t = s.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(s.state.doc.length, e.head + 1);
}) }, { key: "Ctrl-Alt-h", run: Ul }, { key: "Ctrl-o", run: ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = s.changeByRange((i) => ({ changes: { from: i.from, to: i.to, insert: q.of(["", ""]) }, range: k.cursor(i.from) }));
  return e(s.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
} }, { key: "Ctrl-t", run: ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = s.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == s.doc.length)
      return { range: i };
    let n = i.from, r = s.doc.lineAt(n), o = n == r.from ? n - 1 : de(r.text, n - r.from, !1) + r.from, l = n == r.to ? n + 1 : de(r.text, n - r.from, !0) + r.from;
    return { changes: { from: o, to: l, insert: s.doc.slice(n, l).append(s.doc.slice(o, n)) }, range: k.cursor(l) };
  });
  return !t.changes.empty && (e(s.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
} }, { key: "Ctrl-v", run: Ds }].map((s) => ({ mac: s.key, run: s.run, shift: s.shift })))), Vp = { key: "Tab", run: hc, shift: cc };
function U() {
  var s = arguments[0];
  typeof s == "string" && (s = document.createElement(s));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var n = t[i];
        typeof n == "string" ? s.setAttribute(i, n) : n != null && (s[i] = n);
      }
    e++;
  }
  for (; e < arguments.length; e++)
    fc(s, arguments[e]);
  return s;
}
function fc(s, e) {
  if (typeof e == "string")
    s.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      s.appendChild(e);
    else {
      if (!Array.isArray(e))
        throw new RangeError("Unsupported child node: " + e);
      for (var t = 0; t < e.length; t++)
        fc(s, e[t]);
    }
}
const Xl = typeof String.prototype.normalize == "function" ? (s) => s.normalize("NFKD") : (s) => s;
class Xt {
  constructor(e, t, i = 0, n = e.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, n), this.bufferStart = i, this.normalize = r ? (l) => r(Xl(l)) : Xl, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return he(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = Dr(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Ne(e);
      let n = this.normalize(t);
      for (let r = 0, o = i; ; r++) {
        let l = n.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
        if (r == n.length - 1) {
          if (a)
            return this.value = a, this;
          break;
        }
        o == i && r < t.length && t.charCodeAt(r) == l && o++;
      }
    }
  }
  match(e, t, i) {
    let n = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = !1;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? n = { from: this.matches[r + 1], to: i } : (this.matches[r]++, l = !0)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? n = { from: t, to: i } : this.matches.push(1, t)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferStart) && (n = null), n;
  }
}
typeof Symbol < "u" && (Xt.prototype[Symbol.iterator] = function() {
  return this;
});
const uc = { from: -1, to: -1, match: /.*/.exec("") }, Yr = "gm" + (/x/.unicode == null ? "" : "u");
class dc {
  constructor(e, t, i, n = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = !1, this.value = uc, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new pc(e, t, i, n, r);
    this.re = new RegExp(t, Yr + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let o = e.lineAt(n);
    this.curLineStart = o.from, this.matchPos = Fn(e, n), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, n = i + t[0].length;
        if (this.matchPos = Fn(this.text, n + (i == n ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < n || i > this.value.to) && (!this.test || this.test(i, n, t)))
          return this.value = { from: i, to: n, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else {
        if (!(this.curLineStart + this.curLine.length < this.to))
          return this.done = !0, this;
        this.nextLine(), e = 0;
      }
    }
  }
}
const Es = /* @__PURE__ */ new WeakMap();
class Jt {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let n = Es.get(e);
    if (!n || n.from >= i || n.to <= t) {
      let l = new Jt(t, e.sliceString(t, i));
      return Es.set(e, l), l;
    }
    if (n.from == t && n.to == i)
      return n;
    let { text: r, from: o } = n;
    return o > t && (r = e.sliceString(t, o) + r, o = t), n.to < i && (r += e.sliceString(n.to, i)), Es.set(e, new Jt(o, r)), new Jt(t, r.slice(t - o, i - o));
  }
}
class pc {
  constructor(e, t, i, n, r) {
    this.text = e, this.to = r, this.done = !1, this.value = uc, this.matchPos = Fn(e, n), this.re = new RegExp(t, Yr + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = Jt.get(e, n, this.chunkEnd(n + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, n = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, n, t)))
          return this.value = { from: i, to: n, match: t }, this.matchPos = Fn(this.text, n + (i == n ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Jt.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length));
    }
  }
}
function Fn(s, e) {
  if (e >= s.length)
    return e;
  let t, i = s.lineAt(e);
  for (; e < i.to && (t = i.text.charCodeAt(e - i.from)) >= 56320 && t < 57344; )
    e++;
  return e;
}
function Cr(s) {
  let e = U("input", { class: "cm-textfield", name: "line", value: String(s.state.doc.lineAt(s.state.selection.main.head).number) });
  function t() {
    let i = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!i)
      return;
    let { state: n } = s, r = n.doc.lineAt(n.selection.main.head), [, o, l, a, h] = i, c = a ? +a.slice(1) : 0, f = l ? +l : r.number;
    if (l && h) {
      let p = f / 100;
      o && (p = p * (o == "-" ? -1 : 1) + r.number / n.doc.lines), f = Math.round(n.doc.lines * p);
    } else
      l && o && (f = f * (o == "-" ? -1 : 1) + r.number);
    let u = n.doc.line(Math.max(1, Math.min(n.doc.lines, f))), d = k.cursor(u.from + Math.max(0, Math.min(c, u.length)));
    s.dispatch({ effects: [zn.of(!1), E.scrollIntoView(d.from, { y: "center" })], selection: d }), s.focus();
  }
  return { dom: U("form", { class: "cm-gotoLine", onkeydown: (i) => {
    i.keyCode == 27 ? (i.preventDefault(), s.dispatch({ effects: zn.of(!1) }), s.focus()) : i.keyCode == 13 && (i.preventDefault(), t());
  }, onsubmit: (i) => {
    i.preventDefault(), t();
  } }, U("label", s.state.phrase("Go to line"), ": ", e), " ", U("button", { class: "cm-button", type: "submit" }, s.state.phrase("go"))) };
}
typeof Symbol < "u" && (dc.prototype[Symbol.iterator] = pc.prototype[Symbol.iterator] = function() {
  return this;
});
const zn = H.define(), Jl = oe.define({ create: () => !0, update(s, e) {
  for (let t of e.effects)
    t.is(zn) && (s = t.value);
  return s;
}, provide: (s) => Bi.from(s, (e) => e ? Cr : null) }), Dd = E.baseTheme({ ".cm-panel.cm-gotoLine": { padding: "2px 6px 4px", "& label": { fontSize: "80%" } } }), Td = { highlightWordAroundCursor: !1, minSelectionLength: 1, maxMatches: 100, wholeWords: !1 }, mc = R.define({ combine: (s) => it(s, Td, { highlightWordAroundCursor: (e, t) => e || t, minSelectionLength: Math.min, maxMatches: Math.min }) });
function Ed(s) {
  let e = [Pd, Ld];
  return s && e.push(mc.of(s)), e;
}
const Rd = N.mark({ class: "cm-selectionMatch" }), Bd = N.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Ql(s, e, t, i) {
  return !(t != 0 && s(e.sliceDoc(t - 1, t)) == J.Word || i != e.doc.length && s(e.sliceDoc(i, i + 1)) == J.Word);
}
const Ld = _.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.selectionSet || s.docChanged || s.viewportChanged) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let e = s.state.facet(mc), { state: t } = s, i = t.selection;
    if (i.ranges.length > 1)
      return N.none;
    let n, r = i.main, o = null;
    if (r.empty) {
      if (!e.highlightWordAroundCursor)
        return N.none;
      let a = t.wordAt(r.head);
      if (!a)
        return N.none;
      o = t.charCategorizer(r.head), n = t.sliceDoc(a.from, a.to);
    } else {
      let a = r.to - r.from;
      if (a < e.minSelectionLength || a > 200)
        return N.none;
      if (e.wholeWords) {
        if (n = t.sliceDoc(r.from, r.to), o = t.charCategorizer(r.head), !Ql(o, t, r.from, r.to) || !function(h, c, f, u) {
          return h(c.sliceDoc(f, f + 1)) == J.Word && h(c.sliceDoc(u - 1, u)) == J.Word;
        }(o, t, r.from, r.to))
          return N.none;
      } else if (n = t.sliceDoc(r.from, r.to), !n)
        return N.none;
    }
    let l = [];
    for (let a of s.visibleRanges) {
      let h = new Xt(t.doc, n, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || Ql(o, t, c, f)) && (r.empty && c <= r.from && f >= r.to ? l.push(Bd.range(c, f)) : (c >= r.to || f <= r.from) && l.push(Rd.range(c, f)), l.length > e.maxMatches))
          return N.none;
      }
    }
    return N.set(l);
  }
}, { decorations: (s) => s.decorations }), Pd = E.baseTheme({ ".cm-selectionMatch": { backgroundColor: "#99ff7780" }, ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" } }), si = R.define({ combine: (s) => it(s, { top: !1, caseSensitive: !1, literal: !1, regexp: !1, wholeWord: !1, createPanel: (e) => new jd(e), scrollToMatch: (e) => E.scrollIntoView(e) }) });
class gc {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || function(t) {
      try {
        return new RegExp(t, Yr), !0;
      } catch {
        return !1;
      }
    }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new Id(this) : new Nd(this);
  }
  getCursor(e, t = 0, i) {
    let n = e.doc ? e : z.create({ doc: e });
    return i == null && (i = n.doc.length), this.regexp ? Wt(this, n, t, i) : Ht(this, n, t, i);
  }
}
class vc {
  constructor(e) {
    this.spec = e;
  }
}
function Ht(s, e, t, i) {
  return new Xt(e.doc, s.unquoted, t, i, s.caseSensitive ? void 0 : (n) => n.toLowerCase(), s.wholeWord ? function(n, r) {
    return (o, l, a, h) => ((h > o || h + a.length < l) && (h = Math.max(0, o - 2), a = n.sliceString(h, Math.min(n.length, l + 2))), !(r(qn(a, o - h)) == J.Word && r(jn(a, o - h)) == J.Word || r(jn(a, l - h)) == J.Word && r(qn(a, l - h)) == J.Word));
  }(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
class Nd extends vc {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let n = Ht(this.spec, e, i, e.doc.length).nextOverlapping();
    return n.done && (n = Ht(this.spec, e, 0, t).nextOverlapping()), n.done ? null : n.value;
  }
  prevMatchInRange(e, t, i) {
    for (let n = i; ; ) {
      let r = Math.max(t, n - 1e4 - this.spec.unquoted.length), o = Ht(this.spec, e, r, n), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == t)
        return null;
      n -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = Ht(this.spec, e, 0, e.doc.length), n = [];
    for (; !i.next().done; ) {
      if (n.length >= t)
        return null;
      n.push(i.value);
    }
    return n;
  }
  highlight(e, t, i, n) {
    let r = Ht(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; )
      n(r.value.from, r.value.to);
  }
}
function Wt(s, e, t, i) {
  return new dc(e.doc, s.search, { ignoreCase: !s.caseSensitive, test: s.wholeWord ? (n = e.charCategorizer(e.selection.main.head), (r, o, l) => !l[0].length || (n(qn(l.input, l.index)) != J.Word || n(jn(l.input, l.index)) != J.Word) && (n(jn(l.input, l.index + l[0].length)) != J.Word || n(qn(l.input, l.index + l[0].length)) != J.Word)) : void 0 }, t, i);
  var n;
}
function qn(s, e) {
  return s.slice(de(s, e, !1), e);
}
function jn(s, e) {
  return s.slice(e, de(s, e));
}
class Id extends vc {
  nextMatch(e, t, i) {
    let n = Wt(this.spec, e, i, e.doc.length).next();
    return n.done && (n = Wt(this.spec, e, 0, t).next()), n.done ? null : n.value;
  }
  prevMatchInRange(e, t, i) {
    for (let n = 1; ; n++) {
      let r = Math.max(t, i - 1e4 * n), o = Wt(this.spec, e, r, i), l = null;
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
    return this.spec.unquote(this.spec.replace).replace(/\$([$&\d+])/g, (t, i) => i == "$" ? "$" : i == "&" ? e.match[0] : i != "0" && +i < e.match.length ? e.match[i] : t);
  }
  matchAll(e, t) {
    let i = Wt(this.spec, e, 0, e.doc.length), n = [];
    for (; !i.next().done; ) {
      if (n.length >= t)
        return null;
      n.push(i.value);
    }
    return n;
  }
  highlight(e, t, i, n) {
    let r = Wt(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !r.next().done; )
      n(r.value.from, r.value.to);
  }
}
const Ni = H.define(), Xr = H.define(), gt = oe.define({ create: (s) => new Rs(Ar(s).create(), null), update(s, e) {
  for (let t of e.effects)
    t.is(Ni) ? s = new Rs(t.value.create(), s.panel) : t.is(Xr) && (s = new Rs(s.query, t.value ? Jr : null));
  return s;
}, provide: (s) => Bi.from(s, (e) => e.panel) });
class Rs {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const Vd = N.mark({ class: "cm-searchMatch" }), Hd = N.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Wd = _.fromClass(class {
  constructor(s) {
    this.view = s, this.decorations = this.highlight(s.state.field(gt));
  }
  update(s) {
    let e = s.state.field(gt);
    (e != s.startState.field(gt) || s.docChanged || s.selectionSet || s.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: s, panel: e }) {
    if (!e || !s.spec.valid)
      return N.none;
    let { view: t } = this, i = new wt();
    for (let n = 0, r = t.visibleRanges, o = r.length; n < o; n++) {
      let { from: l, to: a } = r[n];
      for (; n < o - 1 && a > r[n + 1].from - 500; )
        a = r[++n].to;
      s.highlight(t.state, l, a, (h, c) => {
        let f = t.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? Hd : Vd);
      });
    }
    return i.finish();
  }
}, { decorations: (s) => s.decorations });
function qi(s) {
  return (e) => {
    let t = e.state.field(gt, !1);
    return t && t.query.spec.valid ? s(e, t) : bc(e);
  };
}
const Kn = qi((s, { query: e }) => {
  let { to: t } = s.state.selection.main, i = e.nextMatch(s.state, t, t);
  if (!i)
    return !1;
  let n = k.single(i.from, i.to), r = s.state.facet(si);
  return s.dispatch({ selection: n, effects: [Qr(s, i), r.scrollToMatch(n.main, s)], userEvent: "select.search" }), yc(s), !0;
}), $n = qi((s, { query: e }) => {
  let { state: t } = s, { from: i } = t.selection.main, n = e.prevMatch(t, i, i);
  if (!n)
    return !1;
  let r = k.single(n.from, n.to), o = s.state.facet(si);
  return s.dispatch({ selection: r, effects: [Qr(s, n), o.scrollToMatch(r.main, s)], userEvent: "select.search" }), yc(s), !0;
}), Fd = qi((s, { query: e }) => {
  let t = e.matchAll(s.state, 1e3);
  return !(!t || !t.length) && (s.dispatch({ selection: k.create(t.map((i) => k.range(i.from, i.to))), userEvent: "select.search.matches" }), !0);
}), Zl = qi((s, { query: e }) => {
  let { state: t } = s, { from: i, to: n } = t.selection.main;
  if (t.readOnly)
    return !1;
  let r = e.nextMatch(t, i, i);
  if (!r)
    return !1;
  let o, l, a = [], h = [];
  if (r.from == i && r.to == n && (l = t.toText(e.getReplacement(r)), a.push({ from: r.from, to: r.to, insert: l }), r = e.nextMatch(t, r.from, r.to), h.push(E.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + "."))), r) {
    let c = a.length == 0 || a[0].from >= r.to ? 0 : r.to - r.from - l.length;
    o = k.single(r.from - c, r.to - c), h.push(Qr(s, r)), h.push(t.facet(si).scrollToMatch(o.main, s));
  }
  return s.dispatch({ changes: a, selection: o, effects: h, userEvent: "input.replace" }), !0;
}), zd = qi((s, { query: e }) => {
  if (s.state.readOnly)
    return !1;
  let t = e.matchAll(s.state, 1e9).map((n) => {
    let { from: r, to: o } = n;
    return { from: r, to: o, insert: e.getReplacement(n) };
  });
  if (!t.length)
    return !1;
  let i = s.state.phrase("replaced $ matches", t.length) + ".";
  return s.dispatch({ changes: t, effects: E.announce.of(i), userEvent: "input.replace.all" }), !0;
});
function Jr(s) {
  return s.state.facet(si).createPanel(s);
}
function Ar(s, e) {
  var t, i, n, r, o;
  let l = s.selection.main, a = l.empty || l.to > l.from + 100 ? "" : s.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let h = s.facet(si);
  return new gc({ search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal) ? a : a.replace(/\n/g, "\\n"), caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive, literal: (n = e == null ? void 0 : e.literal) !== null && n !== void 0 ? n : h.literal, regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : h.regexp, wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : h.wholeWord });
}
function wc(s) {
  let e = Ri(s, Jr);
  return e && e.dom.querySelector("[main-field]");
}
function yc(s) {
  let e = wc(s);
  e && e == s.root.activeElement && e.select();
}
const bc = (s) => {
  let e = s.state.field(gt, !1);
  if (e && e.panel) {
    let t = wc(s);
    if (t && t != s.root.activeElement) {
      let i = Ar(s.state, e.query.spec);
      i.valid && s.dispatch({ effects: Ni.of(i) }), t.focus(), t.select();
    }
  } else
    s.dispatch({ effects: [Xr.of(!0), e ? Ni.of(Ar(s.state, e.query.spec)) : H.appendConfig.of($d)] });
  return !0;
}, xc = (s) => {
  let e = s.state.field(gt, !1);
  if (!e || !e.panel)
    return !1;
  let t = Ri(s, Jr);
  return t && t.dom.contains(s.root.activeElement) && s.focus(), s.dispatch({ effects: Xr.of(!1) }), !0;
}, qd = [{ key: "Mod-f", run: bc, scope: "editor search-panel" }, { key: "F3", run: Kn, shift: $n, scope: "editor search-panel", preventDefault: !0 }, { key: "Mod-g", run: Kn, shift: $n, scope: "editor search-panel", preventDefault: !0 }, { key: "Escape", run: xc, scope: "editor search-panel" }, { key: "Mod-Shift-l", run: ({ state: s, dispatch: e }) => {
  let t = s.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: i, to: n } = t.main, r = [], o = 0;
  for (let l = new Xt(s.doc, s.sliceDoc(i, n)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == i && (o = r.length), r.push(k.range(l.value.from, l.value.to));
  }
  return e(s.update({ selection: k.create(r, o), userEvent: "select.search.matches" })), !0;
} }, { key: "Mod-Alt-g", run: (s) => {
  let e = Ri(s, Cr);
  if (!e) {
    let t = [zn.of(!0)];
    s.state.field(Jl, !1) == null && t.push(H.appendConfig.of([Jl, Dd])), s.dispatch({ effects: t }), e = Ri(s, Cr);
  }
  return e && e.dom.querySelector("input").select(), !0;
} }, { key: "Mod-d", run: ({ state: s, dispatch: e }) => {
  let { ranges: t } = s.selection;
  if (t.some((r) => r.from === r.to))
    return (({ state: r, dispatch: o }) => {
      let { selection: l } = r, a = k.create(l.ranges.map((h) => r.wordAt(h.head) || k.cursor(h.head)), l.mainIndex);
      return !a.eq(l) && (o(r.update({ selection: a })), !0);
    })({ state: s, dispatch: e });
  let i = s.sliceDoc(t[0].from, t[0].to);
  if (s.selection.ranges.some((r) => s.sliceDoc(r.from, r.to) != i))
    return !1;
  let n = function(r, o) {
    let { main: l, ranges: a } = r.selection, h = r.wordAt(l.head), c = h && h.from == l.from && h.to == l.to;
    for (let f = !1, u = new Xt(r.doc, o, a[a.length - 1].to); ; ) {
      if (u.next(), !u.done) {
        if (f && a.some((d) => d.from == u.value.from))
          continue;
        if (c) {
          let d = r.wordAt(u.value.from);
          if (!d || d.from != u.value.from || d.to != u.value.to)
            continue;
        }
        return u.value;
      }
      if (f)
        return null;
      u = new Xt(r.doc, o, 0, Math.max(0, a[a.length - 1].from - 1)), f = !0;
    }
  }(s, i);
  return !!n && (e(s.update({ selection: s.selection.addRange(k.range(n.from, n.to), !1), effects: E.scrollIntoView(n.to) })), !0);
}, preventDefault: !0 }];
class jd {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(gt).query.spec;
    function i(n, r, o) {
      return U("button", { class: "cm-button", name: n, onclick: r, type: "button" }, o);
    }
    this.commit = this.commit.bind(this), this.searchField = U("input", { value: t.search, placeholder: De(e, "Find"), "aria-label": De(e, "Find"), class: "cm-textfield", name: "search", form: "", "main-field": "true", onchange: this.commit, onkeyup: this.commit }), this.replaceField = U("input", { value: t.replace, placeholder: De(e, "Replace"), "aria-label": De(e, "Replace"), class: "cm-textfield", name: "replace", form: "", onchange: this.commit, onkeyup: this.commit }), this.caseField = U("input", { type: "checkbox", name: "case", form: "", checked: t.caseSensitive, onchange: this.commit }), this.reField = U("input", { type: "checkbox", name: "re", form: "", checked: t.regexp, onchange: this.commit }), this.wordField = U("input", { type: "checkbox", name: "word", form: "", checked: t.wholeWord, onchange: this.commit }), this.dom = U("div", { onkeydown: (n) => this.keydown(n), class: "cm-search" }, [this.searchField, i("next", () => Kn(e), [De(e, "next")]), i("prev", () => $n(e), [De(e, "previous")]), i("select", () => Fd(e), [De(e, "all")]), U("label", null, [this.caseField, De(e, "match case")]), U("label", null, [this.reField, De(e, "regexp")]), U("label", null, [this.wordField, De(e, "by word")]), ...e.state.readOnly ? [] : [U("br"), this.replaceField, i("replace", () => Zl(e), [De(e, "replace")]), i("replaceAll", () => zd(e), [De(e, "replace all")])], U("button", { name: "close", onclick: () => xc(e), "aria-label": De(e, "close"), type: "button" }, ["×"])]);
  }
  commit() {
    let e = new gc({ search: this.searchField.value, caseSensitive: this.caseField.checked, regexp: this.reField.checked, wholeWord: this.wordField.checked, replace: this.replaceField.value });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: Ni.of(e) }));
  }
  keydown(e) {
    var t, i, n;
    t = this.view, i = e, n = "search-panel", xh(bh(t.state), i, t, n) ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? $n : Kn)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Zl(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Ni) && !i.value.eq(this.query) && this.setQuery(i.value);
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
    return this.view.state.facet(si).top;
  }
}
function De(s, e) {
  return s.state.phrase(e);
}
const fn = 30, un = /[\s\.,:;?!]/;
function Qr(s, { from: e, to: t }) {
  let i = s.state.doc.lineAt(e), n = s.state.doc.lineAt(t).to, r = Math.max(i.from, e - fn), o = Math.min(n, t + fn), l = s.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < fn; a++)
      if (!un.test(l[a + 1]) && un.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != n) {
    for (let a = l.length - 1; a > l.length - fn; a--)
      if (!un.test(l[a - 1]) && un.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return E.announce.of(`${s.state.phrase("current match")}. ${l} ${s.state.phrase("on line")} ${i.number}.`);
}
const Kd = E.baseTheme({ ".cm-panel.cm-search": { padding: "2px 6px 4px", position: "relative", "& [name=close]": { position: "absolute", top: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 }, "& input, & button, & label": { margin: ".2em .6em .2em 0" }, "& input[type=checkbox]": { marginRight: ".2em" }, "& label": { fontSize: "80%", whiteSpace: "pre" } }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }, "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" }, "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" } }), $d = [gt, Ct.low(Wd), Kd];
class kc {
  constructor(e, t, i) {
    this.state = e, this.pos = t, this.explicit = i, this.abortListeners = [];
  }
  tokenBefore(e) {
    let t = pe(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), n = t.text.slice(i - t.from, this.pos - t.from), r = n.search(Sc(e, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: n.slice(r) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t) {
    e == "abort" && this.abortListeners && this.abortListeners.push(t);
  }
}
function _l(s) {
  let e = Object.keys(s).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Ud(s) {
  let e = s.map((n) => typeof n == "string" ? { label: n } : n), [t, i] = e.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : function(n) {
    let r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
    for (let { label: a } of n) {
      r[a[0]] = !0;
      for (let h = 1; h < a.length; h++)
        o[a[h]] = !0;
    }
    let l = _l(r) + _l(o) + "*$";
    return [new RegExp("^" + l), new RegExp(l)];
  }(e);
  return (n) => {
    let r = n.matchBefore(i);
    return r || n.explicit ? { from: r ? r.from : n.pos, options: e, validFor: t } : null;
  };
}
function Hp(s, e) {
  return (t) => {
    for (let i = pe(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
      if (s.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return e(t);
  };
}
class ea {
  constructor(e, t, i, n) {
    this.completion = e, this.source = t, this.match = i, this.score = n;
  }
}
function vt(s) {
  return s.selection.main.from;
}
function Sc(s, e) {
  var t;
  let { source: i } = s, n = e && i[0] != "^", r = i[i.length - 1] != "$";
  return n || r ? new RegExp(`${n ? "^" : ""}(?:${i})${r ? "$" : ""}`, (t = s.flags) !== null && t !== void 0 ? t : s.ignoreCase ? "i" : "") : s;
}
const Zr = rt.define(), ta = /* @__PURE__ */ new WeakMap();
function Gd(s) {
  if (!Array.isArray(s))
    return s;
  let e = ta.get(s);
  return e || ta.set(s, e = Ud(s)), e;
}
const Un = H.define(), Ii = H.define();
class Yd {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = he(e, t), n = Ne(i);
      this.chars.push(i);
      let r = e.slice(t, t + n), o = r.toUpperCase();
      this.folded.push(he(o == r ? r.toLowerCase() : o, 0)), t += n;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: i, any: n, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let w = he(e, 0), y = Ne(w), b = y == e.length ? 0 : -100;
      if (w != t[0]) {
        if (w != i[0])
          return null;
        b += -200;
      }
      return this.ret(b, [0, y]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let w = 0, y = Math.min(e.length, 200); w < y && h < a; ) {
        let b = he(e, w);
        b != t[h] && b != i[h] || (n[h++] = w), w += Ne(b);
      }
      if (h < a)
        return null;
    }
    let c = 0, f = 0, u = !1, d = 0, p = -1, g = -1, m = /[a-z]/.test(e), v = !0;
    for (let w = 0, y = Math.min(e.length, 200), b = 0; w < y && f < a; ) {
      let x = he(e, w);
      l < 0 && (c < a && x == t[c] && (r[c++] = w), d < a && (x == t[d] || x == i[d] ? (d == 0 && (p = w), g = w + 1, d++) : d = 0));
      let A, S = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (A = Dr(x)) != A.toLowerCase() ? 1 : A != A.toUpperCase() ? 2 : 0;
      (!w || S == 1 && m || b == 0 && S != 0) && (t[f] == x || i[f] == x && (u = !0) ? o[f++] = w : o.length && (v = !1)), b = S, w += Ne(x);
    }
    return f == a && o[0] == 0 && v ? this.result((u ? -200 : 0) - 100, o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (g == e.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, g]) : f == a ? this.result((u ? -200 : 0) - 100 - 700 + (v ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((n[0] ? -700 : 0) - 200 - 1100, n, e);
  }
  result(e, t, i) {
    let n = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? Ne(he(i, o)) : 1);
      r && n[r - 1] == o ? n[r - 1] = l : (n[r++] = o, n[r++] = l);
    }
    return this.ret(e - i.length, n);
  }
}
class Xd {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const ue = R.define({ combine: (s) => it(s, { activateOnTyping: !0, activateOnCompletion: () => !1, activateOnTypingDelay: 100, selectOnOpen: !0, override: null, closeOnBlur: !0, maxRenderedOptions: 100, defaultKeymap: !0, tooltipClass: () => "", optionClass: () => "", aboveCursor: !1, icons: !0, addToOptions: [], positionInfo: Jd, filterStrict: !1, compareCompletions: (e, t) => e.label.localeCompare(t.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (e, t) => e && t, closeOnBlur: (e, t) => e && t, icons: (e, t) => e && t, tooltipClass: (e, t) => (i) => ia(e(i), t(i)), optionClass: (e, t) => (i) => ia(e(i), t(i)), addToOptions: (e, t) => e.concat(t), filterStrict: (e, t) => e || t }) });
function ia(s, e) {
  return s ? e ? s + " " + e : s : e;
}
function Jd(s, e, t, i, n, r) {
  let o, l, a = s.textDirection == X.RTL, h = a, c = !1, f = "top", u = e.left - n.left, d = n.right - e.right, p = i.right - i.left, g = i.bottom - i.top;
  if (h && u < Math.min(p, d) ? h = !1 : !h && d < Math.min(p, u) && (h = !0), p <= (h ? u : d))
    o = Math.max(n.top, Math.min(t.top, n.bottom - g)) - e.top, l = Math.min(400, h ? u : d);
  else {
    c = !0, l = Math.min(400, (a ? e.right : n.right - e.left) - 30);
    let m = n.bottom - e.bottom;
    m >= g || m > e.top ? o = t.bottom - e.top : (f = "bottom", o = e.bottom - t.top);
  }
  return { style: `${f}: ${o / ((e.bottom - e.top) / r.offsetHeight)}px; max-width: ${l / ((e.right - e.left) / r.offsetWidth)}px`, class: "cm-completionInfo-" + (c ? a ? "left-narrow" : "right-narrow" : h ? "left" : "right") };
}
function Bs(s, e, t) {
  if (s <= t)
    return { from: 0, to: s };
  if (e < 0 && (e = 0), e <= s >> 1) {
    let n = Math.floor(e / t);
    return { from: n * t, to: (n + 1) * t };
  }
  let i = Math.floor((s - e) / t);
  return { from: s - (i + 1) * t, to: s - i * t };
}
class Qd {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (a) => this.placeInfo(a), key: this }, this.space = null, this.currentClass = "";
    let n = e.state.field(t), { options: r, selected: o } = n.open, l = e.state.facet(ue);
    this.optionContent = function(a) {
      let h = a.addToOptions.slice();
      return a.icons && h.push({ render(c) {
        let f = document.createElement("div");
        return f.classList.add("cm-completionIcon"), c.type && f.classList.add(...c.type.split(/\s+/g).map((u) => "cm-completionIcon-" + u)), f.setAttribute("aria-hidden", "true"), f;
      }, position: 20 }), h.push({ render(c, f, u, d) {
        let p = document.createElement("span");
        p.className = "cm-completionLabel";
        let g = c.displayLabel || c.label, m = 0;
        for (let v = 0; v < d.length; ) {
          let w = d[v++], y = d[v++];
          w > m && p.appendChild(document.createTextNode(g.slice(m, w)));
          let b = p.appendChild(document.createElement("span"));
          b.appendChild(document.createTextNode(g.slice(w, y))), b.className = "cm-completionMatchedText", m = y;
        }
        return m < g.length && p.appendChild(document.createTextNode(g.slice(m))), p;
      }, position: 50 }, { render(c) {
        if (!c.detail)
          return null;
        let f = document.createElement("span");
        return f.className = "cm-completionDetail", f.textContent = c.detail, f;
      }, position: 80 }), h.sort((c, f) => c.position - f.position).map((c) => c.render);
    }(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Bs(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c, f = a.target; f && f != this.dom; f = f.parentNode)
        if (f.nodeName == "LI" && (c = /-(\d+)$/.exec(f.id)) && +c[1] < h.length)
          return this.applyCompletion(e, h[+c[1]]), void a.preventDefault();
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(ue).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: Ii.of(null) });
    }), this.showOptions(r, n.id);
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
    let i = e.state.field(this.stateField), n = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != n) {
      let { options: r, selected: o, disabled: l } = i.open;
      n.open && n.open.options == r || (this.range = Bs(r.length, o, e.state.facet(ue).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((t = n.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
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
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Bs(t.options.length, t.selected, this.view.state.facet(ue).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: n } = i;
      if (!n)
        return;
      let r = typeof n == "string" ? document.createTextNode(n) : n(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
      }).catch((o) => Ae(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: n, destroy: r } = e;
      i.appendChild(n), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, n = this.range.from; i; i = i.nextSibling, n++)
      i.nodeName == "LI" && i.id ? n == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected") : n--;
    return t && function(i, n) {
      let r = i.getBoundingClientRect(), o = n.getBoundingClientRect(), l = r.height / i.offsetHeight;
      o.top < r.top ? i.scrollTop -= (r.top - o.top) / l : o.bottom > r.bottom && (i.scrollTop += (o.bottom - r.bottom) / l);
    }(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), n = e.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.defaultView || window;
      r = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return n.top > Math.min(r.bottom, t.bottom) - 10 || n.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(ue).positionInfo(this.view, t, n, i, r, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const n = document.createElement("ul");
    n.id = t, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        u != r && (o > i.from || i.from == 0) && (r = u, typeof h != "string" && h.header ? n.appendChild(h.header(h)) : n.appendChild(document.createElement("completion-section")).textContent = u);
      }
      const c = n.appendChild(document.createElement("li"));
      c.id = t + "-" + o, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return i.from && n.classList.add("cm-completionListIncompleteTop"), i.to < e.length && n.classList.add("cm-completionListIncompleteBottom"), n;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Zd(s, e) {
  return (t) => new Qd(t, s, e);
}
function na(s) {
  return 100 * (s.boost || 0) + (s.apply ? 10 : 0) + (s.info ? 5 : 0) + (s.type ? 1 : 0);
}
class jt {
  constructor(e, t, i, n, r, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = n, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new jt(this.options, sa(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, n, r) {
    let o = function(a, h) {
      let c = [], f = null, u = (v) => {
        c.push(v);
        let { section: w } = v.completion;
        if (w) {
          f || (f = []);
          let y = typeof w == "string" ? w : w.name;
          f.some((b) => b.name == y) || f.push(typeof w == "string" ? { name: y } : w);
        }
      }, d = h.facet(ue);
      for (let v of a)
        if (v.hasResult()) {
          let w = v.result.getMatch;
          if (v.result.filter === !1)
            for (let y of v.result.options)
              u(new ea(y, v.source, w ? w(y) : [], 1e9 - c.length));
          else {
            let y, b = h.sliceDoc(v.from, v.to), x = d.filterStrict ? new Xd(b) : new Yd(b);
            for (let A of v.result.options)
              if (y = x.match(A.label)) {
                let S = A.displayLabel ? w ? w(A, y.matched) : [] : y.matched;
                u(new ea(A, v.source, S, y.score + (A.boost || 0)));
              }
          }
        }
      if (f) {
        let v = /* @__PURE__ */ Object.create(null), w = 0, y = (b, x) => {
          var A, S;
          return ((A = b.rank) !== null && A !== void 0 ? A : 1e9) - ((S = x.rank) !== null && S !== void 0 ? S : 1e9) || (b.name < x.name ? -1 : 1);
        };
        for (let b of f.sort(y))
          w -= 1e5, v[b.name] = w;
        for (let b of c) {
          let { section: x } = b.completion;
          x && (b.score += v[typeof x == "string" ? x : x.name]);
        }
      }
      let p = [], g = null, m = d.compareCompletions;
      for (let v of c.sort((w, y) => y.score - w.score || m(w.completion, y.completion))) {
        let w = v.completion;
        !g || g.label != w.label || g.detail != w.detail || g.type != null && w.type != null && g.type != w.type || g.apply != w.apply || g.boost != w.boost ? p.push(v) : na(v.completion) > na(g) && (p[p.length - 1] = v), g = v.completion;
      }
      return p;
    }(e, t);
    if (!o.length)
      return n && e.some((a) => a.state == 1) ? new jt(n.options, n.attrs, n.tooltip, n.timestamp, n.selected, !0) : null;
    let l = t.facet(ue).selectOnOpen ? 0 : -1;
    if (n && n.selected != l && n.selected != -1) {
      let a = n.options[n.selected].completion;
      for (let h = 0; h < o.length; h++)
        if (o[h].completion == a) {
          l = h;
          break;
        }
    }
    return new jt(o, sa(i, l), { pos: e.reduce((a, h) => h.hasResult() ? Math.min(a, h.from) : a, 1e8), create: tp, above: r.aboveCursor }, n ? n.timestamp : Date.now(), l, !1);
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
    return new Gn(ep, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(ue), n = (i.override || t.languageDataAt("autocomplete", vt(t)).map(Gd)).map((o) => (this.active.find((l) => l.source == o) || new xe(o, this.active.some((l) => l.state != 0) ? 1 : 0)).update(e, i));
    n.length == this.active.length && n.every((o, l) => o == this.active[l]) && (n = this.active);
    let r = this.open;
    r && e.docChanged && (r = r.map(e.changes)), e.selection || n.some((o) => o.hasResult() && e.changes.touchesRange(o.from, o.to)) || !function(o, l) {
      if (o == l)
        return !0;
      for (let a = 0, h = 0; ; ) {
        for (; a < o.length && !o[a].hasResult; )
          a++;
        for (; h < l.length && !l[h].hasResult; )
          h++;
        let c = a == o.length, f = h == l.length;
        if (c || f)
          return c == f;
        if (o[a++].result != l[h++].result)
          return !1;
      }
    }(n, this.active) ? r = jt.build(n, t, this.id, r, i) : r && r.disabled && !n.some((o) => o.state == 1) && (r = null), !r && n.every((o) => o.state != 1) && n.some((o) => o.hasResult()) && (n = n.map((o) => o.hasResult() ? new xe(o.source, 0) : o));
    for (let o of e.effects)
      o.is(Ac) && (r = r && r.setSelected(o.value, this.id));
    return n == this.active && r == this.open ? this : new Gn(n, this.id, r);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : _d;
  }
}
const _d = { "aria-autocomplete": "list" };
function sa(s, e) {
  let t = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": s };
  return e > -1 && (t["aria-activedescendant"] = s + "-" + e), t;
}
const ep = [];
function Mr(s, e) {
  if (s.isUserEvent("input.complete")) {
    let t = s.annotation(Zr);
    if (t && e.activateOnCompletion(t))
      return "input";
  }
  return s.isUserEvent("input.type") ? "input" : s.isUserEvent("delete.backward") ? "delete" : null;
}
class xe {
  constructor(e, t, i = -1) {
    this.source = e, this.state = t, this.explicitPos = i;
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let i = Mr(e, t), n = this;
    i ? n = n.handleUserEvent(e, i, t) : e.docChanged ? n = n.handleChange(e) : e.selection && n.state != 0 && (n = new xe(n.source, 0));
    for (let r of e.effects)
      if (r.is(Un))
        n = new xe(n.source, 1, r.value ? vt(e.state) : -1);
      else if (r.is(Ii))
        n = new xe(n.source, 0);
      else if (r.is(Cc))
        for (let o of r.value)
          o.source == n.source && (n = o);
    return n;
  }
  handleUserEvent(e, t, i) {
    return t != "delete" && i.activateOnTyping ? new xe(this.source, 1) : this.map(e.changes);
  }
  handleChange(e) {
    return e.changes.touchesRange(vt(e.startState)) ? new xe(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new xe(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class Qt extends xe {
  constructor(e, t, i, n, r) {
    super(e, 2, t), this.result = i, this.from = n, this.to = r;
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, t, i) {
    var n;
    let r = this.result;
    r.map && !e.changes.empty && (r = r.map(r, e.changes));
    let o = e.changes.mapPos(this.from), l = e.changes.mapPos(this.to, 1), a = vt(e.state);
    if ((this.explicitPos < 0 ? a <= o : a < this.from) || a > l || !r || t == "delete" && vt(e.startState) == this.from)
      return new xe(this.source, t == "input" && i.activateOnTyping ? 1 : 0);
    let h = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
    return function(c, f, u, d) {
      if (!c)
        return !1;
      let p = f.sliceDoc(u, d);
      return typeof c == "function" ? c(p, u, d, f) : Sc(c, !0).test(p);
    }(r.validFor, e.state, o, l) ? new Qt(this.source, h, r, o, l) : r.update && (r = r.update(r, o, l, new kc(e.state, a, h >= 0))) ? new Qt(this.source, h, r, r.from, (n = r.to) !== null && n !== void 0 ? n : vt(e.state)) : new xe(this.source, 1, h);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to) ? new xe(this.source, 0) : this.map(e.changes);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new Qt(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new xe(this.source, 0);
  }
}
const Cc = H.define({ map: (s, e) => s.map((t) => t.map(e)) }), Ac = H.define(), Ce = oe.define({ create: () => Gn.start(), update: (s, e) => s.update(e), provide: (s) => [Wr.from(s, (e) => e.tooltip), E.contentAttributes.from(s, (e) => e.attrs)] });
function _r(s, e) {
  const t = e.completion.apply || e.completion.label;
  let i = s.state.field(Ce).active.find((n) => n.source == e.source);
  return i instanceof Qt && (typeof t == "string" ? s.dispatch(Object.assign(Object.assign({}, function(n, r, o, l) {
    let { main: a } = n.selection, h = o - a.from, c = l - a.from;
    return Object.assign(Object.assign({}, n.changeByRange((f) => f != a && o != l && n.sliceDoc(f.from + h, f.from + c) != n.sliceDoc(o, l) ? { range: f } : { changes: { from: f.from + h, to: l == a.from ? f.to : f.from + c, insert: r }, range: k.cursor(f.from + h + r.length) })), { scrollIntoView: !0, userEvent: "input.complete" });
  }(s.state, t, i.from, i.to)), { annotations: Zr.of(e.completion) })) : t(s, e.completion, i.from, i.to), !0);
}
const tp = Zd(Ce, _r);
function dn(s, e = "option") {
  return (t) => {
    let i = t.state.field(Ce, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(ue).interactionDelay)
      return !1;
    let n, r = 1;
    e == "page" && (n = Oh(t, i.open.tooltip)) && (r = Math.max(2, Math.floor(n.dom.offsetHeight / n.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + r * (s ? 1 : -1) : s ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: Ac.of(l) }), !0;
  };
}
class ip {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const np = _.fromClass(class {
  constructor(s) {
    this.view = s, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of s.state.field(Ce).active)
      e.state == 1 && this.startQuery(e);
  }
  update(s) {
    let e = s.state.field(Ce), t = s.state.facet(ue);
    if (!s.selectionSet && !s.docChanged && s.startState.field(Ce) == e)
      return;
    let i = s.transactions.some((r) => (r.selection || r.docChanged) && !Mr(r, t));
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (i || o.updates.length + s.transactions.length > 50 && Date.now() - o.time > 1e3) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            Ae(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...s.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), s.transactions.some((r) => r.effects.some((o) => o.is(Un))) && (this.pendingStart = !0);
    let n = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((r) => r.state == 1 && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), n) : -1, this.composing != 0)
      for (let r of s.transactions)
        Mr(r, t) == "input" ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: s } = this.view, e = s.field(Ce);
    for (let t of e.active)
      t.state != 1 || this.running.some((i) => i.active.source == t.source) || this.startQuery(t);
  }
  startQuery(s) {
    let { state: e } = this.view, t = vt(e), i = new kc(e, t, s.explicitPos == t), n = new ip(s, i);
    this.running.push(n), Promise.resolve(s.source(i)).then((r) => {
      n.context.aborted || (n.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: Ii.of(null) }), Ae(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((s) => s.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ue).updateSyncTime));
  }
  accept() {
    var s;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(ue);
    for (let i = 0; i < this.running.length; i++) {
      let n = this.running[i];
      if (n.done === void 0)
        continue;
      if (this.running.splice(i--, 1), n.done) {
        let o = new Qt(n.active.source, n.active.explicitPos, n.done, n.done.from, (s = n.done.to) !== null && s !== void 0 ? s : vt(n.updates.length ? n.updates[0].startState : this.view.state));
        for (let l of n.updates)
          o = o.update(l, t);
        if (o.hasResult()) {
          e.push(o);
          continue;
        }
      }
      let r = this.view.state.field(Ce).active.find((o) => o.source == n.active.source);
      if (r && r.state == 1)
        if (n.done == null) {
          let o = new xe(n.active.source, 0);
          for (let l of n.updates)
            o = o.update(l, t);
          o.state != 1 && e.push(o);
        } else
          this.startQuery(r);
    }
    e.length && this.view.dispatch({ effects: Cc.of(e) });
  }
}, { eventHandlers: { blur(s) {
  let e = this.view.state.field(Ce, !1);
  if (e && e.tooltip && this.view.state.facet(ue).closeOnBlur) {
    let t = e.open && Oh(this.view, e.open.tooltip);
    t && t.dom.contains(s.relatedTarget) || setTimeout(() => this.view.dispatch({ effects: Ii.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Un.of(!1) }), 20), this.composing = 0;
} } }), sp = typeof navigator == "object" && /Win/.test(navigator.platform), rp = Ct.highest(E.domEventHandlers({ keydown(s, e) {
  let t = e.state.field(Ce, !1);
  if (!t || !t.open || t.open.disabled || t.open.selected < 0 || s.key.length > 1 || s.ctrlKey && (!sp || !s.altKey) || s.metaKey)
    return !1;
  let i = t.open.options[t.open.selected], n = t.active.find((o) => o.source == i.source), r = i.completion.commitCharacters || n.result.commitCharacters;
  return r && r.indexOf(s.key) > -1 && _r(e, i), !1;
} })), Mc = E.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"···"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } }, ".cm-completionIcon-class": { "&:after": { content: "'○'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'◌'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } }, ".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'∪'" } }, ".cm-completionIcon-property": { "&:after": { content: "'□'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } });
class op {
  constructor(e, t, i, n) {
    this.field = e, this.line = t, this.from = i, this.to = n;
  }
}
class eo {
  constructor(e, t, i) {
    this.field = e, this.from = t, this.to = i;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, fe.TrackDel), i = e.mapPos(this.to, 1, fe.TrackDel);
    return t == null || i == null ? null : new eo(this.field, t, i);
  }
}
class to {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let i = [], n = [t], r = e.doc.lineAt(t), o = /^\s*/.exec(r.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let h = o, c = /^\t*/.exec(a)[0].length;
        for (let f = 0; f < c; f++)
          h += e.facet(es);
        n.push(t + h.length - c), a = h + a.slice(c);
      }
      i.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new eo(a.field, n[a.line] + a.from, n[a.line] + a.to));
    return { text: i, ranges: l };
  }
  static parse(e) {
    let t, i = [], n = [], r = [];
    for (let o of e.split(/\r\n?|\n/)) {
      for (; t = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(o); ) {
        let l = t[1] ? +t[1] : null, a = t[2] || t[3] || "", h = -1;
        for (let c = 0; c < i.length; c++)
          (l != null ? i[c].seq == l : a && i[c].name == a) && (h = c);
        if (h < 0) {
          let c = 0;
          for (; c < i.length && (l == null || i[c].seq != null && i[c].seq < l); )
            c++;
          i.splice(c, 0, { seq: l, name: a }), h = c;
          for (let f of r)
            f.field >= h && f.field++;
        }
        r.push(new op(h, n.length, t.index, t.index + a.length)), o = o.slice(0, t.index) + a + o.slice(t.index + t[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, h) => {
        for (let c of r)
          c.line == n.length && c.from > h && (c.from--, c.to--);
        return a;
      }), n.push(o);
    }
    return new to(n, r);
  }
}
let lp = N.widget({ widget: new class extends nt {
  toDOM() {
    let s = document.createElement("span");
    return s.className = "cm-snippetFieldPosition", s;
  }
  ignoreEvent() {
    return !1;
  }
}() }), ap = N.mark({ class: "cm-snippetField" });
class ri {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = N.set(e.map((i) => (i.from == i.to ? lp : ap).range(i.from, i.to)));
  }
  map(e) {
    let t = [];
    for (let i of this.ranges) {
      let n = i.map(e);
      if (!n)
        return null;
      t.push(n);
    }
    return new ri(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((i) => i.field == this.active && i.from <= t.from && i.to >= t.to));
  }
}
const ji = H.define({ map: (s, e) => s && s.map(e) }), hp = H.define(), Vi = oe.define({ create: () => null, update(s, e) {
  for (let t of e.effects) {
    if (t.is(ji))
      return t.value;
    if (t.is(hp) && s)
      return new ri(s.ranges, t.value);
  }
  return s && e.docChanged && (s = s.map(e.changes)), s && e.selection && !s.selectionInsideField(e.selection) && (s = null), s;
}, provide: (s) => E.decorations.from(s, (e) => e ? e.deco : N.none) });
function io(s, e) {
  return k.create(s.filter((t) => t.field == e).map((t) => k.range(t.from, t.to)));
}
function cp(s) {
  let e = to.parse(s);
  return (t, i, n, r) => {
    let { text: o, ranges: l } = e.instantiate(t.state, n), a = { changes: { from: n, to: r, insert: q.of(o) }, scrollIntoView: !0, annotations: i ? [Zr.of(i), te.userEvent.of("input.complete")] : void 0 };
    if (l.length && (a.selection = io(l, 0)), l.some((h) => h.field > 0)) {
      let h = new ri(l, 0), c = a.effects = [ji.of(h)];
      t.state.field(Vi, !1) === void 0 && c.push(H.appendConfig.of([Vi, up, dp, Mc]));
    }
    t.dispatch(t.state.update(a));
  };
}
function ra(s) {
  return ({ state: e, dispatch: t }) => {
    let i = e.field(Vi, !1);
    if (!i || s < 0 && i.active == 0)
      return !1;
    let n = i.active + s, r = s > 0 && !i.ranges.some((o) => o.field == n + s);
    return t(e.update({ selection: io(i.ranges, n), effects: ji.of(r ? null : new ri(i.ranges, n)), scrollIntoView: !0 })), !0;
  };
}
const fp = [{ key: "Tab", run: ra(1), shift: ra(-1) }, { key: "Escape", run: ({ state: s, dispatch: e }) => !!s.field(Vi, !1) && (e(s.update({ effects: ji.of(null) })), !0) }], oa = R.define({ combine: (s) => s.length ? s[0] : fp }), up = Ct.highest(Zn.compute([oa], (s) => s.facet(oa)));
function Wp(s, e) {
  return Object.assign(Object.assign({}, e), { apply: cp(s) });
}
const dp = E.domEventHandlers({ mousedown(s, e) {
  let t, i = e.state.field(Vi, !1);
  if (!i || (t = e.posAtCoords({ x: s.clientX, y: s.clientY })) == null)
    return !1;
  let n = i.ranges.find((r) => r.from <= t && r.to >= t);
  return !(!n || n.field == i.active) && (e.dispatch({ selection: io(i.ranges, n.field), effects: ji.of(i.ranges.some((r) => r.field > n.field) ? new ri(i.ranges, n.field) : null), scrollIntoView: !0 }), !0);
} }), Hi = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, Et = H.define({ map(s, e) {
  return e.mapPos(s, -1, fe.TrackAfter) ?? void 0;
} }), Or = new class extends Tt {
}();
Or.startSide = 1, Or.endSide = -1;
const Oc = oe.define({ create: () => F.empty, update(s, e) {
  if (s = s.map(e.changes), e.selection) {
    let t = e.state.doc.lineAt(e.selection.main.head);
    s = s.update({ filter: (i) => i >= t.from && i <= t.to });
  }
  for (let t of e.effects)
    t.is(Et) && (s = s.update({ add: [Or.range(t.value, t.value + 1)] }));
  return s;
} }), Ls = "()[]{}<>";
function Dc(s) {
  for (let e = 0; e < Ls.length; e += 2)
    if (Ls.charCodeAt(e) == s)
      return Ls.charAt(e + 1);
  return Dr(s < 128 ? s : s + 1);
}
function Tc(s, e) {
  return s.languageDataAt("closeBrackets", e)[0] || Hi;
}
const pp = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), mp = E.inputHandler.of((s, e, t, i) => {
  if ((pp ? s.composing : s.compositionStarted) || s.state.readOnly)
    return !1;
  let n = s.state.selection.main;
  if (i.length > 2 || i.length == 2 && Ne(he(i, 0)) == 1 || e != n.from || t != n.to)
    return !1;
  let r = function(o, l) {
    let a = Tc(o, o.selection.main.head), h = a.brackets || Hi.brackets;
    for (let c of h) {
      let f = Dc(he(c, 0));
      if (l == c)
        return f == c ? yp(o, c, h.indexOf(c + c + c) > -1, a) : vp(o, c, f, a.before || Hi.before);
      if (l == f && Ec(o, o.selection.main.from))
        return wp(o, c, f);
    }
    return null;
  }(s.state, i);
  return !!r && (s.dispatch(r), !0);
}), gp = [{ key: "Backspace", run: ({ state: s, dispatch: e }) => {
  if (s.readOnly)
    return !1;
  let t = Tc(s, s.selection.main.head).brackets || Hi.brackets, i = null, n = s.changeByRange((r) => {
    if (r.empty) {
      let o = function(l, a) {
        let h = l.sliceString(a - 2, a);
        return Ne(he(h, 0)) == h.length ? h : h.slice(1);
      }(s.doc, r.head);
      for (let l of t)
        if (l == o && rs(s.doc, r.head) == Dc(he(l, 0)))
          return { changes: { from: r.head - l.length, to: r.head + l.length }, range: k.cursor(r.head - l.length) };
    }
    return { range: i = r };
  });
  return i || e(s.update(n, { scrollIntoView: !0, userEvent: "delete.backward" })), !i;
} }];
function Ec(s, e) {
  let t = !1;
  return s.field(Oc).between(0, s.doc.length, (i) => {
    i == e && (t = !0);
  }), t;
}
function rs(s, e) {
  let t = s.sliceString(e, e + 2);
  return t.slice(0, Ne(he(t, 0)));
}
function vp(s, e, t, i) {
  let n = null, r = s.changeByRange((o) => {
    if (!o.empty)
      return { changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }], effects: Et.of(o.to + e.length), range: k.range(o.anchor + e.length, o.head + e.length) };
    let l = rs(s.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? { changes: { insert: e + t, from: o.head }, effects: Et.of(o.head + e.length), range: k.cursor(o.head + e.length) } : { range: n = o };
  });
  return n ? null : s.update(r, { scrollIntoView: !0, userEvent: "input.type" });
}
function wp(s, e, t) {
  let i = null, n = s.changeByRange((r) => r.empty && rs(s.doc, r.head) == t ? { changes: { from: r.head, to: r.head + t.length, insert: t }, range: k.cursor(r.head + t.length) } : i = { range: r });
  return i ? null : s.update(n, { scrollIntoView: !0, userEvent: "input.type" });
}
function yp(s, e, t, i) {
  let n = i.stringPrefixes || Hi.stringPrefixes, r = null, o = s.changeByRange((l) => {
    if (!l.empty)
      return { changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }], effects: Et.of(l.to + e.length), range: k.range(l.anchor + e.length, l.head + e.length) };
    let a, h = l.head, c = rs(s.doc, h);
    if (c == e) {
      if (la(s, h))
        return { changes: { insert: e + e, from: h }, effects: Et.of(h + e.length), range: k.cursor(h + e.length) };
      if (Ec(s, h)) {
        let f = t && s.sliceDoc(h, h + 3 * e.length) == e + e + e ? e + e + e : e;
        return { changes: { from: h, to: h + f.length, insert: f }, range: k.cursor(h + f.length) };
      }
    } else {
      if (t && s.sliceDoc(h - 2 * e.length, h) == e + e && (a = aa(s, h - 2 * e.length, n)) > -1 && la(s, a))
        return { changes: { insert: e + e + e + e, from: h }, effects: Et.of(h + e.length), range: k.cursor(h + e.length) };
      if (s.charCategorizer(h)(c) != J.Word && aa(s, h, n) > -1 && !function(f, u, d, p) {
        let g = pe(f).resolveInner(u, -1), m = p.reduce((v, w) => Math.max(v, w.length), 0);
        for (let v = 0; v < 5; v++) {
          let w = f.sliceDoc(g.from, Math.min(g.to, g.from + d.length + m)), y = w.indexOf(d);
          if (!y || y > -1 && p.indexOf(w.slice(0, y)) > -1) {
            let x = g.firstChild;
            for (; x && x.from == g.from && x.to - x.from > d.length + y; ) {
              if (f.sliceDoc(x.to - d.length, x.to) == d)
                return !1;
              x = x.firstChild;
            }
            return !0;
          }
          let b = g.to == u && g.parent;
          if (!b)
            break;
          g = b;
        }
        return !1;
      }(s, h, e, n))
        return { changes: { insert: e + e, from: h }, effects: Et.of(h + e.length), range: k.cursor(h + e.length) };
    }
    return { range: r = l };
  });
  return r ? null : s.update(o, { scrollIntoView: !0, userEvent: "input.type" });
}
function la(s, e) {
  let t = pe(s).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function aa(s, e, t) {
  let i = s.charCategorizer(e);
  if (i(s.sliceDoc(e - 1, e)) != J.Word)
    return e;
  for (let n of t) {
    let r = e - n.length;
    if (s.sliceDoc(r, e) == n && i(s.sliceDoc(r - 1, r)) != J.Word)
      return r;
  }
  return -1;
}
function bp(s = {}) {
  return [rp, Ce, ue.of(s), np, xp, Mc];
}
const Rc = [{ key: "Ctrl-Space", run: (s) => !!s.state.field(Ce, !1) && (s.dispatch({ effects: Un.of(!0) }), !0) }, { key: "Escape", run: (s) => {
  let e = s.state.field(Ce, !1);
  return !(!e || !e.active.some((t) => t.state != 0)) && (s.dispatch({ effects: Ii.of(null) }), !0);
} }, { key: "ArrowDown", run: dn(!0) }, { key: "ArrowUp", run: dn(!1) }, { key: "PageDown", run: dn(!0, "page") }, { key: "PageUp", run: dn(!1, "page") }, { key: "Enter", run: (s) => {
  let e = s.state.field(Ce, !1);
  return !(s.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < s.state.facet(ue).interactionDelay) && _r(s, e.open.options[e.open.selected]);
} }], xp = Ct.highest(Zn.computeN([ue], (s) => s.facet(ue).defaultKeymap ? [Rc] : []));
class kp {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class Ot {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let n = e, r = i.facet(Wi).markerFilter;
    r && (n = r(n, i));
    let o = N.set(n.map((l) => l.from == l.to || l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from ? N.widget({ widget: new Op(l), diagnostic: l }).range(l.from) : N.mark({ attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") }, diagnostic: l, inclusive: !0 }).range(l.from, l.to)), !0);
    return new Ot(o, t, ii(o));
  }
}
function ii(s, e = null, t = 0) {
  let i = null;
  return s.between(t, 1e9, (n, r, { spec: o }) => {
    if (!e || o.diagnostic == e)
      return i = new kp(n, r, o.diagnostic), !1;
  }), i;
}
const Bc = H.define(), no = H.define(), Lc = H.define(), Re = oe.define({ create: () => new Ot(N.none, null, null), update(s, e) {
  if (e.docChanged && s.diagnostics.size) {
    let t = s.diagnostics.map(e.changes), i = null, n = s.panel;
    if (s.selected) {
      let r = e.changes.mapPos(s.selected.from, 1);
      i = ii(t, s.selected.diagnostic, r) || ii(t, null, r);
    }
    !t.size && n && e.state.facet(Wi).autoPanel && (n = null), s = new Ot(t, n, i);
  }
  for (let t of e.effects)
    if (t.is(Bc)) {
      let i = e.state.facet(Wi).autoPanel ? t.value.length ? Fi.open : null : s.panel;
      s = Ot.init(t.value, i, e.state);
    } else
      t.is(no) ? s = new Ot(s.diagnostics, t.value ? Fi.open : null, s.selected) : t.is(Lc) && (s = new Ot(s.diagnostics, s.panel, t.value));
  return s;
}, provide: (s) => [Bi.from(s, (e) => e.panel), E.decorations.from(s, (e) => e.diagnostics)] }), Sp = N.mark({ class: "cm-lintRange cm-lintRange-active", inclusive: !0 });
function Cp(s, e, t) {
  let { diagnostics: i } = s.state.field(Re), n = [], r = 2e8, o = 0;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0)) && (n.push(c.diagnostic), r = Math.min(a, r), o = Math.max(h, o));
  });
  let l = s.state.facet(Wi).tooltipFilter;
  return l && (n = l(n, s.state)), n.length ? { pos: r, end: o, above: s.state.doc.lineAt(r).to < o, create: () => ({ dom: Ap(s, n) }) } : null;
}
function Ap(s, e) {
  return U("ul", { class: "cm-tooltip-lint" }, e.map((t) => Nc(s, t, !1)));
}
const ha = (s) => {
  let e = s.state.field(Re, !1);
  return !(!e || !e.panel) && (s.dispatch({ effects: no.of(!1) }), !0);
}, Mp = [{ key: "Mod-Shift-m", run: (s) => {
  let e = s.state.field(Re, !1);
  var t, i;
  e && e.panel || s.dispatch({ effects: (t = s.state, i = [no.of(!0)], t.field(Re, !1) ? i : i.concat(H.appendConfig.of(Tp))) });
  let n = Ri(s, Fi.open);
  return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, preventDefault: !0 }, { key: "F8", run: (s) => {
  let e = s.state.field(Re, !1);
  if (!e)
    return !1;
  let t = s.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !(!i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to)) && (s.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
} }], Wi = R.define({ combine: (s) => Object.assign({ sources: s.map((e) => e.source).filter((e) => e != null) }, it(s.map((e) => e.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t })) });
function Pc(s) {
  let e = [];
  if (s)
    e:
      for (let { name: t } of s) {
        for (let i = 0; i < t.length; i++) {
          let n = t[i];
          if (/[a-zA-Z]/.test(n) && !e.some((r) => r.toLowerCase() == n.toLowerCase())) {
            e.push(n);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function Nc(s, e, t) {
  var i;
  let n = t ? Pc(e.actions) : [];
  return U("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, U("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(s) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = !1, a = (u) => {
      if (u.preventDefault(), l)
        return;
      l = !0;
      let d = ii(s.state.field(Re).diagnostics, e);
      d && r.apply(s, d.from, d.to);
    }, { name: h } = r, c = n[o] ? h.indexOf(n[o]) : -1, f = c < 0 ? h : [h.slice(0, c), U("u", h.slice(c, c + 1)), h.slice(c + 1)];
    return U("button", { type: "button", class: "cm-diagnosticAction", onclick: a, onmousedown: a, "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${n[o]})"`}.` }, f);
  }), e.source && U("div", { class: "cm-diagnosticSource" }, e.source));
}
class Op extends nt {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return U("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class ca {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Nc(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Fi {
  constructor(e) {
    this.view = e, this.items = [], this.list = U("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: (t) => {
      if (t.keyCode == 27)
        ha(this.view), this.view.focus();
      else if (t.keyCode == 38 || t.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (t.keyCode == 40 || t.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (t.keyCode == 36)
        this.moveSelection(0);
      else if (t.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (t.keyCode == 13)
        this.view.focus();
      else {
        if (!(t.keyCode >= 65 && t.keyCode <= 90 && this.selectedIndex >= 0))
          return;
        {
          let { diagnostic: i } = this.items[this.selectedIndex], n = Pc(i.actions);
          for (let r = 0; r < n.length; r++)
            if (n[r].toUpperCase().charCodeAt(0) == t.keyCode) {
              let o = ii(this.view.state.field(Re).diagnostics, i);
              o && i.actions[r].apply(e, o.from, o.to);
            }
        }
      }
      t.preventDefault();
    }, onclick: (t) => {
      for (let i = 0; i < this.items.length; i++)
        this.items[i].dom.contains(t.target) && this.moveSelection(i);
    } }), this.dom = U("div", { class: "cm-panel-lint" }, this.list, U("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => ha(this.view) }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Re).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Re), i = 0, n = !1, r = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
      let h, c = -1;
      for (let f = i; f < this.items.length; f++)
        if (this.items[f].diagnostic == a.diagnostic) {
          c = f;
          break;
        }
      c < 0 ? (h = new ca(this.view, a.diagnostic), this.items.splice(i, 0, h), n = !0) : (h = this.items[c], c > i && (this.items.splice(i, c - i), n = !0)), t && h.diagnostic == t.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), r = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected"), i++;
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      n = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new ca(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), n = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({ key: this, read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: ({ sel: o, panel: l }) => {
      let a = l.height / this.list.offsetHeight;
      o.top < l.top ? this.list.scrollTop -= (l.top - o.top) / a : o.bottom > l.bottom && (this.list.scrollTop += (o.bottom - l.bottom) / a);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), n && this.sync();
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
    let t = ii(this.view.state.field(Re).diagnostics, this.items[e].diagnostic);
    t && this.view.dispatch({ selection: { anchor: t.from, head: t.to }, scrollIntoView: !0, effects: Lc.of(t) });
  }
  static open(e) {
    return new Fi(e);
  }
}
function pn(s) {
  return function(e, t = 'viewBox="0 0 40 40"') {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`;
  }(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${s}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Dp = E.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: pn("#d11") }, ".cm-lintRange-warning": { backgroundImage: pn("orange") }, ".cm-lintRange-info": { backgroundImage: pn("#999") }, ".cm-lintRange-hint": { backgroundImage: pn("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } }), Tp = [Re, E.decorations.compute([Re], (s) => {
  let { selected: e, panel: t } = s.field(Re);
  return e && t && e.from != e.to ? N.set([Sp.range(e.from, e.to)]) : N.none;
}), lu(Cp, { hideOn: function(s, e) {
  let t = e.pos, i = e.end || t, n = s.state.facet(Wi).hideOn(s, t, i);
  if (n != null)
    return n;
  let r = s.startState.doc.lineAt(e.pos);
  return !(!s.effects.some((o) => o.is(Bc)) && !s.changes.touchesRange(r.from, Math.max(r.to, i)));
} }), Dp], Fp = (() => [mu(), vu, $f(), vd(), Gu(), Vf(), [gi, zf], z.allowMultipleSelections.of(!0), z.transactionFilter.of((s) => {
  if (!s.docChanged || !s.isUserEvent("input.type") && !s.isUserEvent("input.complete"))
    return s;
  let e = s.startState.languageDataAt("indentOnInput", s.startState.selection.main.head);
  if (!e.length)
    return s;
  let t = s.newDoc, { head: i } = s.newSelection.main, n = t.lineAt(i);
  if (i > n.from + 200)
    return s;
  let r = t.sliceString(n.from, i);
  if (!e.some((h) => h.test(r)))
    return s;
  let { state: o } = s, l = -1, a = [];
  for (let { head: h } of o.selection.ranges) {
    let c = o.doc.lineAt(h);
    if (c.from == l)
      continue;
    l = c.from;
    let f = qr(o, c.from);
    if (f == null)
      continue;
    let u = /^\s*/.exec(c.text)[0], d = Li(o, f);
    u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
  }
  return a.length ? [s, { changes: a, sequential: !0 }] : s;
}), Xu(Zu, { fallback: !0 }), rd(), [mp, Oc], bp(), Zf(), tu(), Xf, Ed(), Zn.of([...gp, ...Od, ...qd, ...Cd, ...ju, ...Rc, ...Mp])])();
export {
  bp as A,
  wu as D,
  E,
  is as H,
  ce as I,
  Bp as L,
  Rh as N,
  Su as P,
  H as S,
  ye as T,
  Be as a,
  W as b,
  Ud as c,
  pe as d,
  k as e,
  Wp as f,
  wr as g,
  Nu as h,
  Hp as i,
  Np as j,
  Pp as k,
  Lp as l,
  Fu as m,
  Ip as n,
  Ru as o,
  Eu as p,
  Rp as q,
  Xu as r,
  Ou as s,
  O as t,
  Fp as u,
  z as v,
  es as w,
  Zn as x,
  Vp as y,
  Ep as z
};
