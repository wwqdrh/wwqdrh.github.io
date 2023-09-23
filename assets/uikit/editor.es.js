var R = Object.defineProperty;
var T = (e, t, n) => t in e ? R(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var v = (e, t, n) => (T(e, typeof t != "symbol" ? t + "" : t, n), n);
function x() {
}
function O(e) {
  return e();
}
function A() {
  return /* @__PURE__ */ Object.create(null);
}
function y(e) {
  e.forEach(O);
}
function S(e) {
  return typeof e == "function";
}
function P(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function b(e, t) {
  e.appendChild(t);
}
function V(e, t, n) {
  e.insertBefore(t, n || null);
}
function I(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function w(e) {
  return document.createElement(e);
}
function Z(e) {
  return document.createTextNode(e);
}
function q() {
  return Z(" ");
}
function z(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function D(e) {
  return Array.from(e.childNodes);
}
function L(e, t) {
  e.value = t ?? "";
}
let $;
function h(e) {
  $ = e;
}
const d = [], M = [];
let f = [];
const N = [], F = /* @__PURE__ */ Promise.resolve();
let k = !1;
function G() {
  k || (k = !0, F.then(H));
}
function _(e) {
  f.push(e);
}
const m = /* @__PURE__ */ new Set();
let u = 0;
function H() {
  if (u !== 0)
    return;
  const e = $;
  do {
    try {
      for (; u < d.length; ) {
        const t = d[u];
        u++, h(t), J(t.$$);
      }
    } catch (t) {
      throw d.length = 0, u = 0, t;
    }
    for (h(null), d.length = 0, u = 0; M.length; )
      M.pop()();
    for (let t = 0; t < f.length; t += 1) {
      const n = f[t];
      m.has(n) || (m.add(n), n());
    }
    f.length = 0;
  } while (d.length);
  for (; N.length; )
    N.pop()();
  k = !1, m.clear(), h(e);
}
function J(e) {
  if (e.fragment !== null) {
    e.update(), y(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(_);
  }
}
function K(e) {
  const t = [], n = [];
  f.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), f = t;
}
const Q = /* @__PURE__ */ new Set();
function W(e, t) {
  e && e.i && (Q.delete(e), e.i(t));
}
function X(e, t, n) {
  const { fragment: i, after_update: o } = e.$$;
  i && i.m(t, n), _(() => {
    const s = e.$$.on_mount.map(O).filter(S);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : y(s), e.$$.on_mount = [];
  }), o.forEach(_);
}
function Y(e, t) {
  const n = e.$$;
  n.fragment !== null && (K(n.after_update), y(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ee(e, t) {
  e.$$.dirty[0] === -1 && (d.push(e), G(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function te(e, t, n, i, o, s, g, a = [-1]) {
  const l = $;
  h(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: x,
    not_equal: o,
    bound: A(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: A(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  g && g(r.root);
  let j = !1;
  if (r.ctx = n ? n(e, t.props || {}, (c, C, ...B) => {
    const E = B.length ? B[0] : C;
    return r.ctx && o(r.ctx[c], r.ctx[c] = E) && (!r.skip_bound && r.bound[c] && r.bound[c](E), j && ee(e, c)), C;
  }) : [], r.update(), j = !0, y(r.before_update), r.fragment = i ? i(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = D(t.target);
      r.fragment && r.fragment.l(c), c.forEach(I);
    } else
      r.fragment && r.fragment.c();
    t.intro && W(e.$$.fragment), X(e, t.target, t.anchor), H();
  }
  h(l);
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
    v(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    v(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Y(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!S(n))
      return x;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const o = i.indexOf(n);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ie = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ie);
function oe(e) {
  let t, n, i, o, s, g;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Bold</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M14 12a4 4 0 0 0 0-8H6v8"></path><path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Italic</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Underline</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M6 4v6a6 6 0 0 0 12 0V4"></path><line x1="4" x2="20" y1="20" y2="20"></line></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Left Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="15" x2="3" y1="12" y2="12"></line><line x1="17" x2="3" y1="18" y2="18"></line></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Center Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="17" x2="7" y1="12" y2="12"></line><line x1="19" x2="5" y1="18" y2="18"></line></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Right Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="21" x2="9" y1="12" y2="12"></line><line x1="21" x2="7" y1="18" y2="18"></line></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Bulleted List</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Add Link</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Image</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></button> <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-600 dark:text-gray-400"><span class="sr-only">Emoji</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></button>', i = q(), o = w("textarea"), p(n, "class", "flex space-x-2 p-2 border-b border-gray-200 dark:border-gray-800"), p(o, "class", "w-full h-full p-4 text-gray-600 dark:text-gray-200 text-sm"), p(o, "placeholder", "Type your text here..."), p(t, "class", "max-w-[800px] h-full mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden");
    },
    m(a, l) {
      V(a, t, l), b(t, n), b(t, i), b(t, o), L(
        o,
        /*source*/
        e[0]
      ), s || (g = z(
        o,
        "input",
        /*textarea_input_handler*/
        e[1]
      ), s = !0);
    },
    p(a, [l]) {
      l & /*source*/
      1 && L(
        o,
        /*source*/
        a[0]
      );
    },
    i: x,
    o: x,
    d(a) {
      a && I(t), s = !1, g();
    }
  };
}
function re(e, t, n) {
  let { source: i = "" } = t;
  function o() {
    i = this.value, n(0, i);
  }
  return e.$$set = (s) => {
    "source" in s && n(0, i = s.source);
  }, [i, o];
}
class le extends ne {
  constructor(t) {
    super(), te(this, t, re, oe, P, { source: 0 });
  }
}
export {
  le as Editor,
  le as Render
};
