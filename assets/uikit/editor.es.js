var R = Object.defineProperty;
var T = (i, t, e) => t in i ? R(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var y = (i, t, e) => (T(i, typeof t != "symbol" ? t + "" : t, e), e);
function h() {
}
function O(i) {
  return i();
}
function A() {
  return /* @__PURE__ */ Object.create(null);
}
function p(i) {
  i.forEach(O);
}
function S(i) {
  return typeof i == "function";
}
function P(i, t) {
  return i != i ? t == t : i !== t || i && typeof i == "object" || typeof i == "function";
}
function U(i) {
  return Object.keys(i).length === 0;
}
function v(i, t) {
  i.appendChild(t);
}
function V(i, t, e) {
  i.insertBefore(t, e || null);
}
function I(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function b(i) {
  return document.createElement(i);
}
function Z(i) {
  return document.createTextNode(i);
}
function q() {
  return Z(" ");
}
function z(i, t, e, n) {
  return i.addEventListener(t, e, n), () => i.removeEventListener(t, e, n);
}
function x(i, t, e) {
  e == null ? i.removeAttribute(t) : i.getAttribute(t) !== e && i.setAttribute(t, e);
}
function D(i) {
  return Array.from(i.childNodes);
}
function L(i, t) {
  i.value = t ?? "";
}
let $;
function g(i) {
  $ = i;
}
const a = [], M = [];
let d = [];
const N = [], F = /* @__PURE__ */ Promise.resolve();
let m = !1;
function G() {
  m || (m = !0, F.then(H));
}
function _(i) {
  d.push(i);
}
const w = /* @__PURE__ */ new Set();
let c = 0;
function H() {
  if (c !== 0)
    return;
  const i = $;
  do {
    try {
      for (; c < a.length; ) {
        const t = a[c];
        c++, g(t), J(t.$$);
      }
    } catch (t) {
      throw a.length = 0, c = 0, t;
    }
    for (g(null), a.length = 0, c = 0; M.length; )
      M.pop()();
    for (let t = 0; t < d.length; t += 1) {
      const e = d[t];
      w.has(e) || (w.add(e), e());
    }
    d.length = 0;
  } while (a.length);
  for (; N.length; )
    N.pop()();
  m = !1, w.clear(), g(i);
}
function J(i) {
  if (i.fragment !== null) {
    i.update(), p(i.before_update);
    const t = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, t), i.after_update.forEach(_);
  }
}
function K(i) {
  const t = [], e = [];
  d.forEach((n) => i.indexOf(n) === -1 ? t.push(n) : e.push(n)), e.forEach((n) => n()), d = t;
}
const Q = /* @__PURE__ */ new Set();
function W(i, t) {
  i && i.i && (Q.delete(i), i.i(t));
}
function X(i, t, e) {
  const { fragment: n, after_update: u } = i.$$;
  n && n.m(t, e), _(() => {
    const r = i.$$.on_mount.map(O).filter(S);
    i.$$.on_destroy ? i.$$.on_destroy.push(...r) : p(r), i.$$.on_mount = [];
  }), u.forEach(_);
}
function Y(i, t) {
  const e = i.$$;
  e.fragment !== null && (K(e.after_update), p(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function ii(i, t) {
  i.$$.dirty[0] === -1 && (a.push(i), G(), i.$$.dirty.fill(0)), i.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ti(i, t, e, n, u, r, f, k = [-1]) {
  const s = $;
  g(i);
  const o = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: h,
    not_equal: u,
    bound: A(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: A(),
    dirty: k,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  f && f(o.root);
  let j = !1;
  if (o.ctx = e ? e(i, t.props || {}, (l, C, ...B) => {
    const E = B.length ? B[0] : C;
    return o.ctx && u(o.ctx[l], o.ctx[l] = E) && (!o.skip_bound && o.bound[l] && o.bound[l](E), j && ii(i, l)), C;
  }) : [], o.update(), j = !0, p(o.before_update), o.fragment = n ? n(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = D(t.target);
      o.fragment && o.fragment.l(l), l.forEach(I);
    } else
      o.fragment && o.fragment.c();
    t.intro && W(i.$$.fragment), X(i, t.target, t.anchor), H();
  }
  g(s);
}
class ei {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Y(this, 1), this.$destroy = h;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!S(e))
      return h;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const u = n.indexOf(e);
      u !== -1 && n.splice(u, 1);
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
const ni = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ni);
function ui(i) {
  let t, e, n, u, r, f;
  return {
    c() {
      t = b("div"), e = b("div"), e.innerHTML = '<button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Bold</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><path d="M14 12a4 4 0 0 0 0-8H6v8"></path><path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Italic</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Underline</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><path d="M6 4v6a6 6 0 0 0 12 0V4"></path><line x1="4" x2="20" y1="20" y2="20"></line></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Left Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="15" x2="3" y1="12" y2="12"></line><line x1="17" x2="3" y1="18" y2="18"></line></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Center Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="17" x2="7" y1="12" y2="12"></line><line x1="19" x2="5" y1="18" y2="18"></line></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Right Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="21" x2="9" y1="12" y2="12"></line><line x1="21" x2="7" y1="18" y2="18"></line></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Bulleted List</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Add Link</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Image</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></button> <button class="uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-ring-offset-background uikit-transition-colors uikit-focus-visible:outline-none uikit-focus-visible:ring-2 uikit-focus-visible:ring-ring uikit-focus-visible:ring-offset-2 uikit-disabled:pointer-events-none uikit-disabled:opacity-50 uikit-hover:bg-accent uikit-hover:text-accent-foreground uikit-h-10 uikit-px-4 uikit-py-2 uikit-text-gray-600 dark:uikit-text-gray-400"><span class="uikit-sr-only">Emoji</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uikit-w-4 uikit-h-4"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></button>', n = q(), u = b("textarea"), x(e, "class", "uikit-flex uikit-space-x-2 uikit-p-2 uikit-border-b uikit-border-gray-200 dark:uikit-border-gray-800"), x(u, "class", "uikit-w-full uikit-h-full uikit-p-4 uikit-text-gray-600 dark:uikit-text-gray-200 uikit-text-sm"), x(u, "placeholder", "Type your text here..."), x(t, "class", "uikit-max-w-[800px] uikit-h-full uikit-mx-auto uikit-bg-white dark:uikit-bg-gray-900 uikit-shadow-lg uikit-rounded-lg uikit-overflow-hidden");
    },
    m(k, s) {
      V(k, t, s), v(t, e), v(t, n), v(t, u), L(
        u,
        /*source*/
        i[0]
      ), r || (f = z(
        u,
        "input",
        /*textarea_input_handler*/
        i[1]
      ), r = !0);
    },
    p(k, [s]) {
      s & /*source*/
      1 && L(
        u,
        /*source*/
        k[0]
      );
    },
    i: h,
    o: h,
    d(k) {
      k && I(t), r = !1, f();
    }
  };
}
function oi(i, t, e) {
  let { source: n = "" } = t;
  function u() {
    n = this.value, e(0, n);
  }
  return i.$$set = (r) => {
    "source" in r && e(0, n = r.source);
  }, [n, u];
}
class si extends ei {
  constructor(t) {
    super(), ti(this, t, oi, ui, P, { source: 0 });
  }
}
export {
  si as Editor,
  si as Render
};
