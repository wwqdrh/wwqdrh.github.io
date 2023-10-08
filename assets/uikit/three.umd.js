(function(Ee,xe){typeof exports=="object"&&typeof module<"u"?xe(exports):typeof define=="function"&&define.amd?define(["exports"],xe):(Ee=typeof globalThis<"u"?globalThis:Ee||self,xe(Ee.uikit_three={}))})(this,function(Ee){"use strict";var hp=Object.defineProperty;var fp=(Ee,xe,Tn)=>xe in Ee?hp(Ee,xe,{enumerable:!0,configurable:!0,writable:!0,value:Tn}):Ee[xe]=Tn;var mo=(Ee,xe,Tn)=>(fp(Ee,typeof xe!="symbol"?xe+"":xe,Tn),Tn);var xe=document.createElement("style");xe.textContent='.uikit-container{margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem;width:100%}@media (min-width:1400px){.uikit-container{max-width:1400px}}.uikit-prose{color:var(--tw-prose-body);max-width:65ch}.uikit-prose :where(p):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:1.25em;margin-top:1.25em}.uikit-prose :where([class~=lead]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-bottom:1.2em;margin-top:1.2em}.uikit-prose :where(a):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.uikit-prose :where(strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.uikit-prose :where(a strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(blockquote strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(thead th strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(ol):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:decimal;margin-bottom:1.25em;margin-top:1.25em;padding-left:1.625em}.uikit-prose :where(ol[type=A]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:upper-alpha}.uikit-prose :where(ol[type=a]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:lower-alpha}.uikit-prose :where(ol[type=A s]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:upper-alpha}.uikit-prose :where(ol[type=a s]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:lower-alpha}.uikit-prose :where(ol[type=I]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:upper-roman}.uikit-prose :where(ol[type=i]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:lower-roman}.uikit-prose :where(ol[type=I s]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:upper-roman}.uikit-prose :where(ol[type=i s]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:lower-roman}.uikit-prose :where(ol[type="1"]):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:decimal}.uikit-prose :where(ul):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){list-style-type:disc;margin-bottom:1.25em;margin-top:1.25em;padding-left:1.625em}.uikit-prose :where(ol>li):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.uikit-prose :where(ul>li):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *))::marker{color:var(--tw-prose-bullets)}.uikit-prose :where(dt):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.25em}.uikit-prose :where(hr):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-bottom:3em;margin-top:3em}.uikit-prose :where(blockquote):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){border-left-color:var(--tw-prose-quote-borders);border-left-width:.25rem;color:var(--tw-prose-quotes);font-style:italic;font-weight:500;margin-bottom:1.6em;margin-top:1.6em;padding-left:1em;quotes:"“""”""‘""’"}.uikit-prose :where(blockquote p:first-of-type):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)):before{content:open-quote}.uikit-prose :where(blockquote p:last-of-type):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)):after{content:close-quote}.uikit-prose :where(h1):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-headings);font-size:2.25em;font-weight:800;line-height:1.1111111;margin-bottom:.8888889em;margin-top:0}.uikit-prose :where(h1 strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit;font-weight:900}.uikit-prose :where(h2):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-headings);font-size:1.5em;font-weight:700;line-height:1.3333333;margin-bottom:1em;margin-top:2em}.uikit-prose :where(h2 strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit;font-weight:800}.uikit-prose :where(h3):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-headings);font-size:1.25em;font-weight:600;line-height:1.6;margin-bottom:.6em;margin-top:1.6em}.uikit-prose :where(h3 strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit;font-weight:700}.uikit-prose :where(h4):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-headings);font-weight:600;line-height:1.5;margin-bottom:.5em;margin-top:1.5em}.uikit-prose :where(h4 strong):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit;font-weight:700}.uikit-prose :where(img):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:2em;margin-top:2em}.uikit-prose :where(picture):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){display:block;margin-bottom:2em;margin-top:2em}.uikit-prose :where(kbd):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){border-radius:.3125rem;box-shadow:0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px 0 rgb(var(--tw-prose-kbd-shadows)/10%);color:var(--tw-prose-kbd);font-family:inherit;font-size:.875em;font-weight:500;padding:.1875em .375em}.uikit-prose :where(code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.uikit-prose :where(code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)):before{content:"`"}.uikit-prose :where(code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)):after{content:"`"}.uikit-prose :where(a code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(h1 code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(h2 code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit;font-size:.875em}.uikit-prose :where(h3 code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit;font-size:.9em}.uikit-prose :where(h4 code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(blockquote code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(thead th code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:inherit}.uikit-prose :where(pre):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){background-color:var(--tw-prose-pre-bg);border-radius:.375rem;color:var(--tw-prose-pre-code);font-size:.875em;font-weight:400;line-height:1.7142857;margin-bottom:1.7142857em;margin-top:1.7142857em;overflow-x:auto;padding:.8571429em 1.1428571em}.uikit-prose :where(pre code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){background-color:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;padding:0}.uikit-prose :where(pre code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)):before{content:none}.uikit-prose :where(pre code):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)):after{content:none}.uikit-prose :where(table):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){font-size:.875em;line-height:1.7142857;margin-bottom:2em;margin-top:2em;table-layout:auto;text-align:left;width:100%}.uikit-prose :where(thead):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){border-bottom-color:var(--tw-prose-th-borders);border-bottom-width:1px}.uikit-prose :where(thead th):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-headings);font-weight:600;padding-bottom:.5714286em;padding-left:.5714286em;padding-right:.5714286em;vertical-align:bottom}.uikit-prose :where(tbody tr):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){border-bottom-color:var(--tw-prose-td-borders);border-bottom-width:1px}.uikit-prose :where(tbody tr:last-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){border-bottom-width:0}.uikit-prose :where(tbody td):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){vertical-align:baseline}.uikit-prose :where(tfoot):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){border-top-color:var(--tw-prose-th-borders);border-top-width:1px}.uikit-prose :where(tfoot td):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){vertical-align:top}.uikit-prose :where(figure>*):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:0;margin-top:0}.uikit-prose :where(figcaption):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){color:var(--tw-prose-captions);font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.uikit-prose{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-kbd:#111827;--tw-prose-kbd-shadows:17 24 39;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:255 255 255;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgba(0,0,0,.5);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75}.uikit-prose :where(picture>img):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:0;margin-top:0}.uikit-prose :where(video):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:2em;margin-top:2em}.uikit-prose :where(li):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:.5em;margin-top:.5em}.uikit-prose :where(ol>li):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){padding-left:.375em}.uikit-prose :where(ul>li):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){padding-left:.375em}.uikit-prose :where(.uikit-prose>ul>li p):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:.75em;margin-top:.75em}.uikit-prose :where(.uikit-prose>ul>li>:first-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:1.25em}.uikit-prose :where(.uikit-prose>ul>li>:last-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:1.25em}.uikit-prose :where(.uikit-prose>ol>li>:first-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:1.25em}.uikit-prose :where(.uikit-prose>ol>li>:last-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:1.25em}.uikit-prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:.75em;margin-top:.75em}.uikit-prose :where(dl):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:1.25em;margin-top:1.25em}.uikit-prose :where(dd):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:.5em;padding-left:1.625em}.uikit-prose :where(hr+*):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:0}.uikit-prose :where(h2+*):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:0}.uikit-prose :where(h3+*):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:0}.uikit-prose :where(h4+*):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:0}.uikit-prose :where(thead th:first-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){padding-left:0}.uikit-prose :where(thead th:last-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){padding-right:0}.uikit-prose :where(tbody td,tfoot td):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){padding:.5714286em}.uikit-prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){padding-left:0}.uikit-prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){padding-right:0}.uikit-prose :where(figure):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:2em;margin-top:2em}.uikit-prose :where(.uikit-prose>:first-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-top:0}.uikit-prose :where(.uikit-prose>:last-child):not(:where([class~=uikit-not-prose],[class~=uikit-not-prose] *)){margin-bottom:0}@media (hover:hover){.uikit-menu li>:not(ul):not(.uikit-menu-title):not(details).uikit-active,.uikit-menu li>:not(ul):not(.uikit-menu-title):not(details):active,.uikit-menu li>details>summary:active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--nc)/var(--tw-text-opacity))}}.uikit-btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;animation:button-pop var(--animation-btn,.25s) ease-out;background-color:hsl(var(--b2)/var(--tw-bg-opacity));border-color:transparent;border-color:hsl(var(--b2)/var(--tw-border-opacity));border-radius:var(--rounded-btn,.5rem);border-width:var(--border-btn,1px);color:hsl(var(--bc)/var(--tw-text-opacity));cursor:pointer;display:inline-flex;flex-shrink:0;flex-wrap:wrap;font-size:.875rem;font-weight:600;gap:.5rem;height:3rem;justify-content:center;line-height:1em;min-height:3rem;outline-color:hsl(var(--bc)/1);padding-left:1rem;padding-right:1rem;text-align:center;text-decoration-line:none;text-transform:var(--btn-text-case,uppercase);transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-user-select:none;-moz-user-select:none;user-select:none}.uikit-btn-disabled,.uikit-btn:disabled,.uikit-btn[disabled]{pointer-events:none}.uikit-btn-circle{border-radius:9999px;height:3rem;padding:0;width:3rem}.uikit-btn-group>input[type=radio].uikit-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.uikit-btn-group>input[type=radio].uikit-btn:before{content:attr(data-title)}.uikit-btn:is(input[type=checkbox]),.uikit-btn:is(input[type=radio]){-webkit-appearance:none;-moz-appearance:none;appearance:none;width:auto}.uikit-btn:is(input[type=checkbox]):after,.uikit-btn:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.uikit-carousel{-ms-overflow-style:none;display:inline-flex;overflow-x:scroll;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none}.uikit-carousel-item{box-sizing:content-box;display:flex;flex:none;scroll-snap-align:start}.uikit-carousel-center .uikit-carousel-item{scroll-snap-align:center}.uikit-carousel-end .uikit-carousel-item{scroll-snap-align:end}.uikit-drawer{display:grid;grid-auto-columns:max-content auto;position:relative;width:100%}.uikit-drawer-content{grid-column-start:2;grid-row-start:1}.uikit-drawer-side{align-items:flex-start;display:grid;grid-column-start:1;grid-row-start:1;grid-template-columns:repeat(1,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,1fr));height:100vh;height:100dvh;justify-items:start;left:0;overflow-y:auto;overscroll-behavior:contain;pointer-events:none;position:fixed;scrollbar-width:none;top:0;width:100%}.uikit-drawer-side::-webkit-scrollbar{display:none}.uikit-drawer-side>.uikit-drawer-overlay{background-color:transparent;cursor:pointer;place-self:stretch;position:sticky;top:0;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.uikit-drawer-side>*{grid-column-start:1;grid-row-start:1}.uikit-drawer-side>:not(.uikit-drawer-overlay){transform:translate(-100%);transition-duration:.3s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}[dir=rtl] .uikit-drawer-side>:not(.uikit-drawer-overlay){transform:translate(-100%)}.uikit-drawer-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:0;opacity:0;position:fixed;width:0}.uikit-drawer-toggle:checked~.uikit-drawer-side{pointer-events:auto;visibility:visible}.uikit-drawer-toggle:checked~.uikit-drawer-side>:not(.uikit-drawer-overlay){transform:translate(0)}.uikit-drawer-end .uikit-drawer-toggle~.uikit-drawer-content{grid-column-start:1}.uikit-drawer-end .uikit-drawer-toggle~.uikit-drawer-side{grid-column-start:2;justify-items:end}.uikit-drawer-end .uikit-drawer-toggle~.uikit-drawer-side>:not(.uikit-drawer-overlay){transform:translate(100%)}.uikit-drawer-end .uikit-drawer-toggle:checked~.uikit-drawer-side>:not(.uikit-drawer-overlay){transform:translate(0)}.uikit-dropdown{display:inline-block;position:relative}.uikit-dropdown>:focus{outline:2px solid transparent;outline-offset:2px}.uikit-dropdown .uikit-dropdown-content{position:absolute}.uikit-dropdown:is(:not(details)) .uikit-dropdown-content{--tw-scale-x:.95;--tw-scale-y:.95;opacity:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform-origin:top;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);visibility:hidden}.uikit-dropdown-end .uikit-dropdown-content{right:0}.uikit-dropdown-left .uikit-dropdown-content{bottom:auto;right:100%;top:0;transform-origin:right}.uikit-dropdown-right .uikit-dropdown-content{bottom:auto;left:100%;top:0;transform-origin:left}.uikit-dropdown-bottom .uikit-dropdown-content{bottom:auto;top:100%;transform-origin:top}.uikit-dropdown-top .uikit-dropdown-content{bottom:100%;top:auto;transform-origin:bottom}.uikit-dropdown-end.uikit-dropdown-left .uikit-dropdown-content,.uikit-dropdown-end.uikit-dropdown-right .uikit-dropdown-content{bottom:0;top:auto}.uikit-dropdown.uikit-dropdown-open .uikit-dropdown-content,.uikit-dropdown:focus-within .uikit-dropdown-content,.uikit-dropdown:not(.uikit-dropdown-hover):focus .uikit-dropdown-content{opacity:1;visibility:visible}@media (hover:hover){.uikit-dropdown.uikit-dropdown-hover:hover .uikit-dropdown-content{opacity:1;visibility:visible}.uikit-btn:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsl(var(--b3)/var(--tw-bg-opacity));border-color:hsl(var(--b3)/var(--tw-border-opacity))}.uikit-btn.uikit-glass:hover{--glass-opacity:25%;--glass-border-opacity:15%}.uikit-btn-ghost:hover{--tw-border-opacity:0;--tw-bg-opacity:.2;background-color:hsl(var(--bc)/var(--tw-bg-opacity))}.uikit-btn-disabled:hover,.uikit-btn:disabled:hover,.uikit-btn[disabled]:hover{--tw-border-opacity:0;--tw-bg-opacity:.2;--tw-text-opacity:.2;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--bc)/var(--tw-text-opacity))}.uikit-btn:is(input[type=checkbox]:checked):hover,.uikit-btn:is(input[type=radio]:checked):hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsl(var(--pf)/var(--tw-bg-opacity));border-color:hsl(var(--pf)/var(--tw-border-opacity))}.uikit-dropdown.uikit-dropdown-hover:hover .uikit-dropdown-content{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>:not(ul):not(details):not(.uikit-menu-title)):not(.uikit-active):hover,:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>details>summary:not(.uikit-menu-title)):not(.uikit-active):hover{--tw-text-opacity:1;background-color:hsl(var(--bc)/.1);color:hsl(var(--bc)/var(--tw-text-opacity));cursor:pointer;outline:2px solid transparent;outline-offset:2px}}.uikit-dropdown:is(details) summary::-webkit-details-marker{display:none}.uikit-join .uikit-dropdown .uikit-join-item:first-child:not(:last-child),.uikit-join :first-child:not(:last-child) .uikit-dropdown .uikit-join-item{border-bottom-right-radius:inherit;border-top-right-radius:inherit}.uikit-menu{display:flex;flex-direction:column;flex-wrap:wrap;font-size:.875rem;line-height:1.25rem;padding:.5rem}.uikit-menu :where(li ul){margin-left:1rem;padding-left:.5rem;position:relative;white-space:nowrap}.uikit-menu :where(li:not(.uikit-menu-title)>:not(ul):not(details):not(.uikit-menu-title)),.uikit-menu :where(li:not(.uikit-menu-title)>details>summary:not(.uikit-menu-title)){align-content:flex-start;align-items:center;display:grid;gap:.5rem;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;-webkit-user-select:none;-moz-user-select:none;user-select:none}.uikit-menu li.uikit-disabled{color:hsl(var(--bc)/.3);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none}.uikit-menu :where(li>.uikit-menu-dropdown:not(.uikit-menu-dropdown-show)){display:none}:where(.uikit-menu li){align-items:stretch;display:flex;flex-direction:column;flex-shrink:0;flex-wrap:wrap;position:relative}:where(.uikit-menu li) .uikit-badge{justify-self:end}.uikit-btn:active:focus,.uikit-btn:active:hover{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale,.97))}.uikit-btn:focus-visible{outline-offset:2px;outline-style:solid;outline-width:2px}.uikit-btn.uikit-glass{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);outline-color:currentColor}.uikit-btn.uikit-glass.uikit-btn-active{--glass-opacity:25%;--glass-border-opacity:15%}.uikit-btn-ghost{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;background-color:transparent;border-color:transparent;border-width:1px;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:currentColor;outline-color:currentColor}.uikit-btn-ghost.uikit-btn-active{--tw-border-opacity:0;--tw-bg-opacity:.2;background-color:hsl(var(--bc)/var(--tw-bg-opacity))}.uikit-btn.uikit-btn-disabled,.uikit-btn:disabled,.uikit-btn[disabled]{--tw-border-opacity:0;--tw-bg-opacity:.2;--tw-text-opacity:.2;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--bc)/var(--tw-text-opacity))}.uikit-btn-group>.uikit-btn-active,.uikit-btn-group>input[type=radio]:checked.uikit-btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.uikit-btn-group>.uikit-btn-active:focus-visible,.uikit-btn-group>input[type=radio]:checked.uikit-btn:focus-visible{outline-color:hsl(var(--p)/1);outline-style:solid;outline-width:2px}.uikit-btn:is(input[type=checkbox]:checked),.uikit-btn:is(input[type=radio]:checked){--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.uikit-btn:is(input[type=checkbox]:checked):focus-visible,.uikit-btn:is(input[type=radio]:checked):focus-visible{outline-color:hsl(var(--p)/1)}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.98))}40%{transform:scale(1.02)}to{transform:scale(1)}}.uikit-carousel::-webkit-scrollbar{display:none}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}.uikit-drawer-toggle:checked~.uikit-drawer-side>.uikit-drawer-overlay{background-color:#0006}.uikit-drawer-toggle:focus-visible~.uikit-drawer-content label.uikit-drawer-button{outline-offset:2px;outline-style:solid;outline-width:2px}.uikit-dropdown.uikit-dropdown-open .uikit-dropdown-content,.uikit-dropdown:focus .uikit-dropdown-content,.uikit-dropdown:focus-within .uikit-dropdown-content{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:where(.uikit-menu li:empty){background-color:hsl(var(--bc)/.1);height:1px;margin:.5rem 1rem}.uikit-menu :where(li ul):before{background-color:hsl(var(--bc)/.1);bottom:.75rem;content:"";left:0;position:absolute;top:.75rem;width:1px}.uikit-menu :where(li:not(.uikit-menu-title)>:not(ul):not(details):not(.uikit-menu-title)),.uikit-menu :where(li:not(.uikit-menu-title)>details>summary:not(.uikit-menu-title)){text-wrap:balance;border-radius:var(--rounded-btn,.5rem);padding:.5rem 1rem;text-align:left;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>:not(ul):not(details):not(.uikit-menu-title)):is(summary):not(.uikit-active):focus-visible,:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>:not(ul):not(details):not(.uikit-menu-title)):not(summary):not(.uikit-active).uikit-focus,:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>:not(ul):not(details):not(.uikit-menu-title)):not(summary):not(.uikit-active):focus,:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>details>summary:not(.uikit-menu-title)):is(summary):not(.uikit-active):focus-visible,:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>details>summary:not(.uikit-menu-title)):not(summary):not(.uikit-active).uikit-focus,:where(.uikit-menu li:not(.uikit-menu-title):not(.uikit-disabled)>details>summary:not(.uikit-menu-title)):not(summary):not(.uikit-active):focus{--tw-text-opacity:1;background-color:hsl(var(--bc)/.1);color:hsl(var(--bc)/var(--tw-text-opacity));cursor:pointer;outline:2px solid transparent;outline-offset:2px}.uikit-menu li>:not(ul):not(.uikit-menu-title):not(details).uikit-active,.uikit-menu li>:not(ul):not(.uikit-menu-title):not(details):active,.uikit-menu li>details>summary:active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--nc)/var(--tw-text-opacity))}.uikit-menu :where(li>details>summary)::-webkit-details-marker{display:none}.uikit-menu :where(li>.uikit-menu-dropdown-toggle):after,.uikit-menu :where(li>details>summary):after{box-shadow:2px 2px;content:"";display:block;height:.5rem;justify-self:end;margin-top:-.5rem;pointer-events:none;transform:rotate(45deg);transform-origin:75% 75%;transition-duration:.3s;transition-property:transform,margin-top;transition-timing-function:cubic-bezier(.4,0,.2,1);width:.5rem}.uikit-menu :where(li>.uikit-menu-dropdown-toggle.uikit-menu-dropdown-show):after,.uikit-menu :where(li>details[open]>summary):after{margin-top:0;transform:rotate(225deg)}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes toast-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}:root .uikit-prose{--tw-prose-body:hsl(var(--bc)/.8);--tw-prose-headings:hsl(var(--bc));--tw-prose-lead:hsl(var(--bc));--tw-prose-links:hsl(var(--bc));--tw-prose-bold:hsl(var(--bc));--tw-prose-counters:hsl(var(--bc));--tw-prose-bullets:hsl(var(--bc)/.5);--tw-prose-hr:hsl(var(--bc)/.2);--tw-prose-quotes:hsl(var(--bc));--tw-prose-quote-borders:hsl(var(--bc)/.2);--tw-prose-captions:hsl(var(--bc)/.5);--tw-prose-code:hsl(var(--bc));--tw-prose-pre-code:hsl(var(--nc));--tw-prose-pre-bg:hsl(var(--n));--tw-prose-th-borders:hsl(var(--bc)/.5);--tw-prose-td-borders:hsl(var(--bc)/.2)}.uikit-prose :where(code):not(:where([class~=not-prose] *)){border-radius:var(--rounded-badge);padding:2px 8px}.uikit-prose code:after,.uikit-prose code:before{content:none}.uikit-prose pre code{border-radius:0;padding:0}.uikit-prose :where(tbody tr,thead):not(:where([class~=not-prose] *)){border-bottom-color:hsl(var(--bc)/20%)}.uikit-rounded-box{border-radius:var(--rounded-box,1rem)}.uikit-btn-sm{font-size:.875rem;height:2rem;min-height:2rem;padding-left:.75rem;padding-right:.75rem}.uikit-btn-square:where(.uikit-btn-sm){height:2rem;padding:0;width:2rem}.uikit-btn-circle:where(.uikit-btn-xs){border-radius:9999px;height:1.5rem;padding:0;width:1.5rem}.uikit-btn-circle:where(.uikit-btn-sm){border-radius:9999px;height:2rem;padding:0;width:2rem}.uikit-btn-circle:where(.uikit-btn-md){border-radius:9999px;height:3rem;padding:0;width:3rem}.uikit-btn-circle:where(.uikit-btn-lg){border-radius:9999px;height:4rem;padding:0;width:4rem}.uikit-drawer-open>.uikit-drawer-toggle{display:none}.uikit-drawer-open>.uikit-drawer-toggle~.uikit-drawer-side{display:block;overscroll-behavior:auto;pointer-events:auto;position:sticky;visibility:visible;width:auto}.uikit-drawer-open>.uikit-drawer-toggle~.uikit-drawer-side>:not(.uikit-drawer-overlay),[dir=rtl] .uikit-drawer-open>.uikit-drawer-toggle~.uikit-drawer-side>:not(.uikit-drawer-overlay){transform:translate(0)}.uikit-drawer-open>.uikit-drawer-toggle:checked~.uikit-drawer-side{pointer-events:auto;visibility:visible}.uikit-btn-group .uikit-btn:not(:first-child):not(:last-child){border-radius:0}.uikit-btn-group .uikit-btn:first-child:not(:last-child){border-bottom-left-radius:var(--rounded-btn,.5rem);border-bottom-right-radius:0;border-top-left-radius:var(--rounded-btn,.5rem);border-top-right-radius:0;margin-left:-1px;margin-top:0}.uikit-btn-group .uikit-btn:last-child:not(:first-child){border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn,.5rem);border-top-left-radius:0;border-top-right-radius:var(--rounded-btn,.5rem)}.uikit-btn-group-horizontal .uikit-btn:not(:first-child):not(:last-child){border-radius:0}.uikit-btn-group-horizontal .uikit-btn:first-child:not(:last-child){border-bottom-left-radius:var(--rounded-btn,.5rem);border-bottom-right-radius:0;border-top-left-radius:var(--rounded-btn,.5rem);border-top-right-radius:0;margin-left:-1px;margin-top:0}.uikit-btn-group-horizontal .uikit-btn:last-child:not(:first-child){border-bottom-left-radius:0;border-bottom-right-radius:var(--rounded-btn,.5rem);border-top-left-radius:0;border-top-right-radius:var(--rounded-btn,.5rem)}.uikit-btn-group-vertical .uikit-btn:first-child:not(:last-child){border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--rounded-btn,.5rem);border-top-right-radius:var(--rounded-btn,.5rem);margin-left:0;margin-top:-1px}.uikit-btn-group-vertical .uikit-btn:last-child:not(:first-child){border-bottom-left-radius:var(--rounded-btn,.5rem);border-bottom-right-radius:var(--rounded-btn,.5rem);border-top-left-radius:0;border-top-right-radius:0}.uikit-drawer-open>.uikit-drawer-toggle~.uikit-drawer-side>.uikit-drawer-overlay{background-color:transparent;cursor:default}.uikit-sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.uikit-pointer-events-none{pointer-events:none}.uikit-fixed{position:fixed}.uikit-absolute{position:absolute}.uikit-relative{position:relative}.uikit-left-2{left:.5rem}.uikit-left-5{left:1.25rem}.uikit-right-0{right:0}.uikit-right-2{right:.5rem}.uikit-right-5{right:1.25rem}.uikit-top-0{top:0}.uikit-top-1\\/2{top:50%}.uikit-top-2{top:.5rem}.uikit-z-50{z-index:50}.uikit-z-\\[1\\]{z-index:1}.uikit--mx-1{margin-left:-.25rem;margin-right:-.25rem}.uikit--mx-3{margin-left:-.75rem;margin-right:-.75rem}.uikit-mx-2{margin-left:.5rem;margin-right:.5rem}.uikit-mx-3{margin-left:.75rem;margin-right:.75rem}.uikit-mx-auto{margin-left:auto;margin-right:auto}.uikit-my-1{margin-bottom:.25rem;margin-top:.25rem}.uikit--mt-48{margin-top:-12rem}.uikit-mb-1{margin-bottom:.25rem}.uikit-mb-2{margin-bottom:.5rem}.uikit-mb-4{margin-bottom:1rem}.uikit-mb-6{margin-bottom:1.5rem}.uikit-mb-8{margin-bottom:2rem}.uikit-ml-1{margin-left:.25rem}.uikit-ml-2{margin-left:.5rem}.uikit-ml-auto{margin-left:auto}.uikit-mr-1{margin-right:.25rem}.uikit-mr-2{margin-right:.5rem}.uikit-mr-3{margin-right:.75rem}.uikit-mr-4{margin-right:1rem}.uikit-mr-auto{margin-right:auto}.uikit-mt-12{margin-top:3rem}.uikit-mt-3{margin-top:.75rem}.uikit-mt-4{margin-top:1rem}.uikit-mt-6{margin-top:1.5rem}.uikit-block{display:block}.uikit-inline-block{display:inline-block}.uikit-flex{display:flex}.uikit-inline-flex{display:inline-flex}.uikit-hidden{display:none}.uikit-h-10{height:2.5rem}.uikit-h-11{height:2.75rem}.uikit-h-16{height:4rem}.uikit-h-2{height:.5rem}.uikit-h-3{height:.75rem}.uikit-h-3\\.5{height:.875rem}.uikit-h-4{height:1rem}.uikit-h-5{height:1.25rem}.uikit-h-6{height:1.5rem}.uikit-h-7{height:1.75rem}.uikit-h-8{height:2rem}.uikit-h-9{height:2.25rem}.uikit-h-96{height:24rem}.uikit-h-\\[24px\\]{height:24px}.uikit-h-full{height:100%}.uikit-h-px{height:1px}.uikit-h-screen{height:100vh}.uikit-max-h-full{max-height:100%}.uikit-min-h-\\[300px\\]{min-height:300px}.uikit-min-h-\\[80px\\]{min-height:80px}.uikit-min-h-full{min-height:100%}.uikit-min-h-screen{min-height:100vh}.uikit-w-1\\/12{width:8.333333%}.uikit-w-1\\/2{width:50%}.uikit-w-1\\/3{width:33.333333%}.uikit-w-1\\/4{width:25%}.uikit-w-1\\/6{width:16.666667%}.uikit-w-10{width:2.5rem}.uikit-w-10\\/12{width:83.333333%}.uikit-w-12{width:3rem}.uikit-w-16{width:4rem}.uikit-w-2{width:.5rem}.uikit-w-3{width:.75rem}.uikit-w-3\\.5{width:.875rem}.uikit-w-4{width:1rem}.uikit-w-5{width:1.25rem}.uikit-w-52{width:13rem}.uikit-w-6{width:1.5rem}.uikit-w-64{width:16rem}.uikit-w-7{width:1.75rem}.uikit-w-8{width:2rem}.uikit-w-80{width:20rem}.uikit-w-\\[44px\\]{width:44px}.uikit-w-full{width:100%}.uikit-w-screen{width:100vw}.uikit-min-w-\\[800px\\]{min-width:800px}.uikit-min-w-\\[8rem\\]{min-width:8rem}.uikit-max-w-\\[800px\\]{max-width:800px}.uikit-max-w-full{max-width:100%}.uikit-max-w-lg{max-width:32rem}.uikit-max-w-screen-md{max-width:768px}.uikit-max-w-screen-xl{max-width:1280px}.uikit-max-w-sm{max-width:24rem}.uikit-flex-1{flex:1 1 0%}.uikit-shrink-0{flex-shrink:0}.uikit-flex-grow{flex-grow:1}.uikit--translate-y-1\\/2{--tw-translate-y:-50%}.uikit--translate-y-1\\/2,.uikit-transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.uikit-cursor-default{cursor:default}.uikit-cursor-not-allowed{cursor:not-allowed}.uikit-cursor-pointer{cursor:pointer}.uikit-select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.uikit-list-inside{list-style-position:inside}.uikit-list-disc{list-style-type:disc}.uikit-list-none{list-style-type:none}.uikit-flex-row-reverse{flex-direction:row-reverse}.uikit-flex-col{flex-direction:column}.uikit-flex-wrap{flex-wrap:wrap}.uikit-items-start{align-items:flex-start}.uikit-items-center{align-items:center}.uikit-justify-center{justify-content:center}.uikit-justify-between{justify-content:space-between}.uikit-gap-1{gap:.25rem}.uikit-gap-1\\.5{gap:.375rem}.uikit-gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.uikit-gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.uikit-space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.uikit-space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.uikit-space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.uikit-space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.uikit-space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.uikit-space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.uikit-space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.uikit-self-center{align-self:center}.uikit-overflow-hidden{overflow:hidden}.uikit-overflow-scroll{overflow:scroll}.uikit-overflow-y-auto{overflow-y:auto}.uikit-whitespace-nowrap{white-space:nowrap}.uikit-rounded{border-radius:.25rem}.uikit-rounded-2xl{border-radius:1rem}.uikit-rounded-full{border-radius:9999px}.uikit-rounded-lg{border-radius:.5rem}.uikit-rounded-md{border-radius:.375rem}.uikit-rounded-sm{border-radius:.125rem}.uikit-border{border-width:1px}.uikit-border-2{border-width:2px}.uikit-border-b{border-bottom-width:1px}.uikit-border-l-4{border-left-width:4px}.uikit-border-r{border-right-width:1px}.uikit-border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.uikit-border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.uikit-border-green-400{--tw-border-opacity:1;border-color:rgb(74 222 128/var(--tw-border-opacity))}.uikit-border-transparent{border-color:transparent}.uikit-border-l-green-400{--tw-border-opacity:1;border-left-color:rgb(74 222 128/var(--tw-border-opacity))}.uikit-bg-base-100{--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity))}.uikit-bg-base-200{--tw-bg-opacity:1;background-color:hsl(var(--b2)/var(--tw-bg-opacity))}.uikit-bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.uikit-bg-emerald-500{--tw-bg-opacity:1;background-color:rgb(16 185 129/var(--tw-bg-opacity))}.uikit-bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity))}.uikit-bg-indigo-600{--tw-bg-opacity:1;background-color:rgb(79 70 229/var(--tw-bg-opacity))}.uikit-bg-pink-500{--tw-bg-opacity:1;background-color:rgb(236 72 153/var(--tw-bg-opacity))}.uikit-bg-primary{--tw-bg-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity))}.uikit-bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.uikit-bg-secondary{--tw-bg-opacity:1;background-color:hsl(var(--s)/var(--tw-bg-opacity))}.uikit-bg-slate-50{--tw-bg-opacity:1;background-color:rgb(248 250 252/var(--tw-bg-opacity))}.uikit-bg-transparent{background-color:transparent}.uikit-bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.uikit-bg-yellow-400{--tw-bg-opacity:1;background-color:rgb(250 204 21/var(--tw-bg-opacity))}.uikit-fill-current{fill:currentColor}.uikit-p-1{padding:.25rem}.uikit-p-2{padding:.5rem}.uikit-p-3{padding:.75rem}.uikit-p-4{padding:1rem}.uikit-px-12{padding-left:3rem;padding-right:3rem}.uikit-px-2{padding-left:.5rem;padding-right:.5rem}.uikit-px-3{padding-left:.75rem;padding-right:.75rem}.uikit-px-36{padding-left:9rem;padding-right:9rem}.uikit-px-4{padding-left:1rem;padding-right:1rem}.uikit-px-5{padding-left:1.25rem;padding-right:1.25rem}.uikit-px-6{padding-left:1.5rem;padding-right:1.5rem}.uikit-px-8{padding-left:2rem;padding-right:2rem}.uikit-py-1{padding-bottom:.25rem;padding-top:.25rem}.uikit-py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.uikit-py-12{padding-bottom:3rem;padding-top:3rem}.uikit-py-2{padding-bottom:.5rem;padding-top:.5rem}.uikit-py-3{padding-bottom:.75rem;padding-top:.75rem}.uikit-py-4{padding-bottom:1rem;padding-top:1rem}.uikit-py-8{padding-bottom:2rem;padding-top:2rem}.uikit-pb-12{padding-bottom:3rem}.uikit-pb-8{padding-bottom:2rem}.uikit-pl-8{padding-left:2rem}.uikit-pr-2{padding-right:.5rem}.uikit-pt-10{padding-top:2.5rem}.uikit-pt-16{padding-top:4rem}.uikit-pt-24{padding-top:6rem}.uikit-pt-32{padding-top:8rem}.uikit-text-center{text-align:center}.uikit-text-2xl{font-size:1.5rem;line-height:2rem}.uikit-text-3xl{font-size:1.875rem;line-height:2.25rem}.uikit-text-4xl{font-size:2.25rem;line-height:2.5rem}.uikit-text-lg{font-size:1.125rem;line-height:1.75rem}.uikit-text-sm{font-size:.875rem;line-height:1.25rem}.uikit-text-xl{font-size:1.25rem;line-height:1.75rem}.uikit-text-xs{font-size:.75rem;line-height:1rem}.uikit-font-bold{font-weight:700}.uikit-font-extrabold{font-weight:800}.uikit-font-medium{font-weight:500}.uikit-font-normal{font-weight:400}.uikit-font-semibold{font-weight:600}.uikit-uppercase{text-transform:uppercase}.uikit-normal-case{text-transform:none}.uikit-leading-none{line-height:1}.uikit-leading-relaxed{line-height:1.625}.uikit-tracking-tight{letter-spacing:-.025em}.uikit-tracking-wide{letter-spacing:.025em}.uikit-tracking-widest{letter-spacing:.1em}.uikit-text-base-content{--tw-text-opacity:1;color:hsl(var(--bc)/var(--tw-text-opacity))}.uikit-text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.uikit-text-emerald-500{--tw-text-opacity:1;color:rgb(16 185 129/var(--tw-text-opacity))}.uikit-text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.uikit-text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.uikit-text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.uikit-text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.uikit-text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.uikit-text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.uikit-text-green-400{--tw-text-opacity:1;color:rgb(74 222 128/var(--tw-text-opacity))}.uikit-text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.uikit-text-primary{--tw-text-opacity:1;color:hsl(var(--p)/var(--tw-text-opacity))}.uikit-text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.uikit-text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.uikit-text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105/var(--tw-text-opacity))}.uikit-text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.uikit-text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.uikit-text-yellow-400{--tw-text-opacity:1;color:rgb(250 204 21/var(--tw-text-opacity))}.uikit-underline-offset-4{text-underline-offset:4px}.uikit-opacity-50{opacity:.5}.uikit-opacity-60{opacity:.6}.uikit-shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.uikit-shadow,.uikit-shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.uikit-shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.uikit-shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.uikit-shadow-md,.uikit-shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.uikit-shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.uikit-outline-none{outline:2px solid transparent;outline-offset:2px}.uikit-ring-0{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.uikit-transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.uikit-transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.uikit-transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.uikit-transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.uikit-duration-150,.uikit-transition-transform{transition-duration:.15s}.uikit-duration-200{transition-duration:.2s}.uikit-duration-300{transition-duration:.3s}.uikit-ease-linear{transition-timing-function:linear}.file\\:uikit-border-0::file-selector-button{border-width:0}.file\\:uikit-bg-transparent::file-selector-button{background-color:transparent}.file\\:uikit-text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:uikit-font-medium::file-selector-button{font-weight:500}.hover\\:uikit-bg-accent:hover{--tw-bg-opacity:1;background-color:hsl(var(--a)/var(--tw-bg-opacity))}.hover\\:uikit-bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.hover\\:uikit-bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:uikit-bg-primary\\/90:hover{background-color:hsl(var(--p)/.9)}.hover\\:uikit-bg-secondary\\/80:hover{background-color:hsl(var(--s)/.8)}.hover\\:uikit-text-gray-700:hover{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.hover\\:uikit-underline:hover{text-decoration-line:underline}.hover\\:uikit-shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:uikit-border-green-400:focus{--tw-border-opacity:1;border-color:rgb(74 222 128/var(--tw-border-opacity))}.focus\\:uikit-bg-accent:focus{--tw-bg-opacity:1;background-color:hsl(var(--a)/var(--tw-bg-opacity))}.focus\\:uikit-outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:uikit-ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:uikit-ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible\\:uikit-outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:uikit-ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:uikit-ring-offset-2:focus-visible{--tw-ring-offset-width:2px}.active\\:uikit-bg-pink-600:active{--tw-bg-opacity:1;background-color:rgb(219 39 119/var(--tw-bg-opacity))}.disabled\\:uikit-pointer-events-none:disabled{pointer-events:none}.disabled\\:uikit-cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:uikit-opacity-50:disabled{opacity:.5}.uikit-peer:disabled~.peer-disabled\\:uikit-cursor-not-allowed{cursor:not-allowed}.uikit-peer:disabled~.peer-disabled\\:uikit-opacity-70{opacity:.7}.data-\\[disabled\\]\\:uikit-pointer-events-none[data-disabled]{pointer-events:none}.data-\\[state\\=checked\\]\\:uikit-translate-x-5[data-state=checked]{--tw-translate-x:1.25rem}.data-\\[state\\=checked\\]\\:uikit-translate-x-5[data-state=checked],.data-\\[state\\=unchecked\\]\\:uikit-translate-x-0[data-state=unchecked]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=unchecked\\]\\:uikit-translate-x-0[data-state=unchecked]{--tw-translate-x:0px}.data-\\[highlighted\\]\\:uikit-bg-accent[data-highlighted]{--tw-bg-opacity:1;background-color:hsl(var(--a)/var(--tw-bg-opacity))}.data-\\[state\\=checked\\]\\:uikit-bg-primary[data-state=checked]{--tw-bg-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity))}.data-\\[state\\=open\\]\\:uikit-bg-accent[data-state=open]{--tw-bg-opacity:1;background-color:hsl(var(--a)/var(--tw-bg-opacity))}.data-\\[disabled\\]\\:uikit-opacity-50[data-disabled]{opacity:.5}:is([dir=rtl] .rtl\\:uikit-border-l){border-left-width:1px}:is([dir=rtl] .rtl\\:uikit-border-r-0){border-right-width:0}:is(.uikit-dark .dark\\:uikit-border-gray-700){--tw-border-opacity:1;border-color:rgb(55 65 81/var(--tw-border-opacity))}:is(.uikit-dark .dark\\:uikit-border-gray-800){--tw-border-opacity:1;border-color:rgb(31 41 55/var(--tw-border-opacity))}:is(.uikit-dark .dark\\:uikit-bg-blue-600){--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}:is(.uikit-dark .dark\\:uikit-bg-gray-800){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}:is(.uikit-dark .dark\\:uikit-bg-gray-900){--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}:is(.uikit-dark .dark\\:uikit-text-blue-400){--tw-text-opacity:1;color:rgb(96 165 250/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:uikit-text-emerald-400){--tw-text-opacity:1;color:rgb(52 211 153/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:uikit-text-gray-100){--tw-text-opacity:1;color:rgb(243 244 246/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:uikit-text-gray-200){--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:uikit-text-gray-400){--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:uikit-text-red-400){--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:uikit-text-white){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:uikit-text-yellow-300){--tw-text-opacity:1;color:rgb(253 224 71/var(--tw-text-opacity))}:is(.uikit-dark .dark\\:hover\\:uikit-bg-blue-500:hover){--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}:is(.uikit-dark .dark\\:hover\\:uikit-bg-gray-800:hover){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}:is(.uikit-dark .dark\\:hover\\:uikit-text-gray-200:hover){--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:uikit-mt-0{margin-top:0}.sm\\:uikit-w-6\\/12{width:50%}.sm\\:uikit-w-auto{width:auto}.sm\\:uikit-py-16{padding-bottom:4rem;padding-top:4rem}.sm\\:uikit-pt-0{padding-top:0}.sm\\:uikit-text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:768px){.md\\:uikit-grid{display:grid}.md\\:uikit-w-1\\/3{width:33.333333%}.md\\:uikit-w-2\\/3,.md\\:uikit-w-8\\/12{width:66.666667%}.md\\:uikit-grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:uikit-gap-12{gap:3rem}.md\\:uikit-space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:uikit-px-4{padding-left:1rem;padding-right:1rem}.md\\:uikit-pr-12{padding-right:3rem}.md\\:uikit-pt-0{padding-top:0}.md\\:uikit-text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width:1024px){.lg\\:uikit-static{position:static}.lg\\:uikit-mx-auto{margin-left:auto;margin-right:auto}.lg\\:uikit-mb-16{margin-bottom:4rem}.lg\\:uikit-ml-auto{margin-left:auto}.lg\\:uikit-mt-0{margin-top:0}.lg\\:uikit-block{display:block}.lg\\:uikit-flex{display:flex}.lg\\:uikit-hidden{display:none}.lg\\:uikit-h-12{height:3rem}.lg\\:uikit-h-6{height:1.5rem}.lg\\:uikit-w-1\\/2{width:50%}.lg\\:uikit-w-12{width:3rem}.lg\\:uikit-w-6{width:1.5rem}.lg\\:uikit-w-6\\/12{width:50%}.lg\\:uikit-w-auto{width:auto}.lg\\:uikit-grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:uikit-flex-row{flex-direction:row}.lg\\:uikit-items-center{align-items:center}.lg\\:uikit-justify-start{justify-content:flex-start}.lg\\:uikit-gap-12{gap:3rem}.lg\\:uikit-px-6{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width:1280px){.xl\\:uikit-w-6\\/12{width:50%}}\n',document.head.appendChild(xe);const Tn="";function An(){}function go(i){return i()}function _o(){return Object.create(null)}function Mi(i){i.forEach(go)}function vo(i){return typeof i=="function"}function Ga(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function Va(i){return Object.keys(i).length===0}function Wa(i,t,e){i.insertBefore(t,e||null)}function xo(i){i.parentNode&&i.parentNode.removeChild(i)}function Xa(i){return document.createElement(i)}function qa(i,t,e){e==null?i.removeAttribute(t):i.getAttribute(t)!==e&&i.setAttribute(t,e)}function Ya(i){return Array.from(i.childNodes)}let li;function ci(i){li=i}function ja(){if(!li)throw new Error("Function called outside component initialization");return li}function $a(i){ja().$$.on_mount.push(i)}const Rn=[],ar=[];let Cn=[];const bo=[],Za=Promise.resolve();let lr=!1;function Ka(){lr||(lr=!0,Za.then(yo))}function cr(i){Cn.push(i)}const ur=new Set;let Ln=0;function yo(){if(Ln!==0)return;const i=li;do{try{for(;Ln<Rn.length;){const t=Rn[Ln];Ln++,ci(t),Ja(t.$$)}}catch(t){throw Rn.length=0,Ln=0,t}for(ci(null),Rn.length=0,Ln=0;ar.length;)ar.pop()();for(let t=0;t<Cn.length;t+=1){const e=Cn[t];ur.has(e)||(ur.add(e),e())}Cn.length=0}while(Rn.length);for(;bo.length;)bo.pop()();lr=!1,ur.clear(),ci(i)}function Ja(i){if(i.fragment!==null){i.update(),Mi(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(cr)}}function Qa(i){const t=[],e=[];Cn.forEach(n=>i.indexOf(n)===-1?t.push(n):e.push(n)),e.forEach(n=>n()),Cn=t}const tl=new Set;function el(i,t){i&&i.i&&(tl.delete(i),i.i(t))}function nl(i,t,e){const{fragment:n,after_update:r}=i.$$;n&&n.m(t,e),cr(()=>{const o=i.$$.on_mount.map(go).filter(vo);i.$$.on_destroy?i.$$.on_destroy.push(...o):Mi(o),i.$$.on_mount=[]}),r.forEach(cr)}function il(i,t){const e=i.$$;e.fragment!==null&&(Qa(e.after_update),Mi(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function rl(i,t){i.$$.dirty[0]===-1&&(Rn.push(i),Ka(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function ol(i,t,e,n,r,o,a,s=[-1]){const l=li;ci(i);const c=i.$$={fragment:null,ctx:[],props:o,update:An,not_equal:r,bound:_o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:_o(),dirty:s,skip_bound:!1,root:t.target||l.$$.root};a&&a(c.root);let d=!1;if(c.ctx=e?e(i,t.props||{},(f,h,...p)=>{const v=p.length?p[0]:h;return c.ctx&&r(c.ctx[f],c.ctx[f]=v)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](v),d&&rl(i,f)),h}):[],c.update(),d=!0,Mi(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const f=Ya(t.target);c.fragment&&c.fragment.l(f),f.forEach(xo)}else c.fragment&&c.fragment.c();t.intro&&el(i.$$.fragment),nl(i,t.target,t.anchor),yo()}ci(l)}class sl{constructor(){mo(this,"$$");mo(this,"$$set")}$destroy(){il(this,1),this.$destroy=An}$on(t,e){if(!vo(e))return An;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!Va(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const al="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(al);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dr="157",hr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ll=0,wo=1,cl=2,Mo=1,ul=2,He=3,Qe=0,be=1,Ge=2,tn=0,Pn=1,So=2,Eo=3,To=4,dl=5,kn=100,hl=101,fl=102,Ao=103,Ro=104,pl=200,ml=201,gl=202,_l=203,Co=204,Lo=205,vl=206,xl=207,bl=208,yl=209,wl=210,Ml=0,Sl=1,El=2,fr=3,Tl=4,Al=5,Rl=6,Cl=7,pr=0,Ll=1,Pl=2,en=0,kl=1,Dl=2,Ul=3,Il=4,Nl=5,Po=300,Dn=301,Un=302,mr=303,gr=304,Si=306,_r=1e3,ke=1001,vr=1002,he=1003,ko=1004,xr=1005,Te=1006,Fl=1007,ui=1008,nn=1009,Ol=1010,Bl=1011,br=1012,Do=1013,rn=1014,on=1015,di=1016,Uo=1017,Io=1018,dn=1020,zl=1021,De=1023,Hl=1024,Gl=1025,hn=1026,In=1027,Vl=1028,No=1029,Wl=1030,Fo=1031,Oo=1033,yr=33776,wr=33777,Mr=33778,Sr=33779,Bo=35840,zo=35841,Ho=35842,Go=35843,Xl=36196,Vo=37492,Wo=37496,Xo=37808,qo=37809,Yo=37810,jo=37811,$o=37812,Zo=37813,Ko=37814,Jo=37815,Qo=37816,ts=37817,es=37818,ns=37819,is=37820,rs=37821,Er=36492,os=36494,ss=36495,ql=36283,as=36284,ls=36285,cs=36286,us=3e3,fn=3001,Yl=3200,jl=3201,ds=0,$l=1,Ae="",oe="srgb",Ve="srgb-linear",Tr="display-p3",Ei="display-p3-linear",Ti="linear",Xt="srgb",Ai="rec709",Ri="p3",Ar=7680,Zl=519,Kl=512,Jl=513,Ql=514,tc=515,ec=516,nc=517,ic=518,rc=519,hs=35044,fs="300 es",Rr=1035,We=2e3,Ci=2001;class pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,t);t.target=null}}}const ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ps=1234567;const hi=Math.PI/180,fi=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ce[i&255]+ce[i>>8&255]+ce[i>>16&255]+ce[i>>24&255]+"-"+ce[t&255]+ce[t>>8&255]+"-"+ce[t>>16&15|64]+ce[t>>24&255]+"-"+ce[e&63|128]+ce[e>>8&255]+"-"+ce[e>>16&255]+ce[e>>24&255]+ce[n&255]+ce[n>>8&255]+ce[n>>16&255]+ce[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function Cr(i,t){return(i%t+t)%t}function oc(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function sc(i,t,e){return i!==t?(e-i)/(t-i):0}function pi(i,t,e){return(1-e)*i+e*t}function ac(i,t,e,n){return pi(i,t,1-Math.exp(-e*n))}function lc(i,t=1){return t-Math.abs(Cr(i,t*2)-t)}function cc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hc(i,t){return i+Math.random()*(t-i)}function fc(i){return i*(.5-Math.random())}function pc(i){i!==void 0&&(ps=i);let t=ps+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mc(i){return i*hi}function gc(i){return i*fi}function Lr(i){return(i&i-1)===0&&i!==0}function _c(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Li(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vc(i,t,e,n,r){const o=Math.cos,a=Math.sin,s=o(e/2),l=a(e/2),c=o((t+n)/2),d=a((t+n)/2),f=o((t-n)/2),h=a((t-n)/2),p=o((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":i.set(s*d,l*f,l*h,s*c);break;case"YZY":i.set(l*h,s*d,l*f,s*c);break;case"ZXZ":i.set(l*f,l*h,s*d,s*c);break;case"XZX":i.set(s*d,l*v,l*p,s*c);break;case"YXY":i.set(l*p,s*d,l*v,s*c);break;case"ZYZ":i.set(l*v,l*p,s*d,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ms={DEG2RAD:hi,RAD2DEG:fi,generateUUID:Nn,clamp:fe,euclideanModulo:Cr,mapLinear:oc,inverseLerp:sc,lerp:pi,damp:ac,pingpong:lc,smoothstep:cc,smootherstep:uc,randInt:dc,randFloat:hc,randFloatSpread:fc,seededRandom:pc,degToRad:mc,radToDeg:gc,isPowerOfTwo:Lr,ceilPowerOfTwo:_c,floorPowerOfTwo:Li,setQuaternionFromProperEuler:vc,normalize:pe,denormalize:Fn};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*r+t.x,this.y=o*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,r,o,a,s,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,a,s,l,c)}set(t,e,n,r,o,a,s,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=s,d[3]=e,d[4]=o,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],p=n[5],v=n[8],_=r[0],m=r[3],u=r[6],y=r[1],g=r[4],M=r[7],S=r[2],R=r[5],C=r[8];return o[0]=a*_+s*y+l*S,o[3]=a*m+s*g+l*R,o[6]=a*u+s*M+l*C,o[1]=c*_+d*y+f*S,o[4]=c*m+d*g+f*R,o[7]=c*u+d*M+f*C,o[2]=h*_+p*y+v*S,o[5]=h*m+p*g+v*R,o[8]=h*u+p*M+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*s*c-n*o*d+n*s*l+r*o*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8],f=d*a-s*c,h=s*l-d*o,p=c*o-a*l,v=e*f+n*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=f*_,t[1]=(r*c-d*n)*_,t[2]=(s*n-r*a)*_,t[3]=h*_,t[4]=(d*e-r*l)*_,t[5]=(r*o-s*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-r*c,r*l,-r*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Ut;function gs(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xc(){const i=Pi("canvas");return i.style.display="block",i}const _s={};function mi(i){i in _s||(_s[i]=!0,console.warn(i))}const vs=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xs=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ki={[Ve]:{transfer:Ti,primaries:Ai,toReference:i=>i,fromReference:i=>i},[oe]:{transfer:Xt,primaries:Ai,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ei]:{transfer:Ti,primaries:Ri,toReference:i=>i.applyMatrix3(xs),fromReference:i=>i.applyMatrix3(vs)},[Tr]:{transfer:Xt,primaries:Ri,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xs),fromReference:i=>i.applyMatrix3(vs).convertLinearToSRGB()}},bc=new Set([Ve,Ei]),Gt={enabled:!0,_workingColorSpace:Ve,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ki[t].toReference,r=ki[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ki[i].primaries},getTransfer:function(i){return i===Ae?Ti:ki[i].transfer}};function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class bs{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=Pi("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=On(o[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yc=0;class ys{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Nn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Dr(r[a].image)):o.push(Dr(r[a]))}else o=Dr(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wc=0;class ye extends pn{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=ke,r=ke,o=Te,a=ui,s=De,l=nn,c=ye.DEFAULT_ANISOTROPY,d=Ae){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Nn(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===fn?oe:Ae),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oe?fn:us}set encoding(t){mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===fn?oe:Ae}}ye.DEFAULT_IMAGE=null,ye.DEFAULT_MAPPING=Po,ye.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,r=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const l=t.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(c+1)/2,M=(p+1)/2,S=(u+1)/2,R=(d+h)/4,C=(f+_)/4,U=(v+m)/4;return g>M&&g>S?g<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(g),r=R/n,o=C/n):M>S?M<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),n=R/r,o=U/r):S<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),n=C/o,r=U/o),this.set(n,r,o,e),this}let y=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-_)/y,this.z=(h-d)/y,this.w=Math.acos((c+p+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mc extends pn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fn?oe:Ae),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ye(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ys(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ws extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sc extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,a,s){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const h=o[a+0],p=o[a+1],v=o[a+2],_=o[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(s===1){t[e+0]=h,t[e+1]=p,t[e+2]=v,t[e+3]=_;return}if(f!==_||l!==h||c!==p||d!==v){let m=1-s;const u=l*h+c*p+d*v+f*_,y=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const S=Math.sqrt(g),R=Math.atan2(S,u*y);m=Math.sin(m*R)/S,s=Math.sin(s*R)/S}const M=s*y;if(l=l*m+h*M,c=c*m+p*M,d=d*m+v*M,f=f*m+_*M,m===1-s){const S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,o,a){const s=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=o[a],h=o[a+1],p=o[a+2],v=o[a+3];return t[e]=s*v+d*f+l*p-c*h,t[e+1]=l*v+d*h+c*f-s*p,t[e+2]=c*v+d*p+s*h-l*f,t[e+3]=d*v-s*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,o=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),d=s(r/2),f=s(o/2),h=l(n/2),p=l(r/2),v=l(o/2);switch(a){case"XYZ":this._x=h*d*f+c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f-h*p*v;break;case"YXZ":this._x=h*d*f+c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f+h*p*v;break;case"ZXY":this._x=h*d*f-c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f-h*p*v;break;case"ZYX":this._x=h*d*f-c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f+h*p*v;break;case"YZX":this._x=h*d*f+c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f-h*p*v;break;case"XZY":this._x=h*d*f-c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],a=e[1],s=e[5],l=e[9],c=e[2],d=e[6],f=e[10],h=n+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(o-c)*p,this._z=(a-r)*p}else if(n>s&&n>f){const p=2*Math.sqrt(1+n-s-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-n-f);this._w=(o-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-s);this._w=(a-r)/p,this._x=(o+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,a=t._w,s=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*s+r*c-o*l,this._y=r*d+a*l+o*s-n*c,this._z=o*d+a*c+n*l-r*s,this._w=a*d-n*s-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,o=this._z,a=this._w;let s=a*t._w+n*t._x+r*t._y+o*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*o+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),f=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(o),n*Math.cos(o),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ms.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ms.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*r-s*n,d=l*n+s*e-o*r,f=l*r+o*n-a*e,h=-o*e-a*n-s*r;return this.x=c*l+h*-o+d*-s-f*-a,this.y=d*l+h*-a+f*-o-c*-s,this.z=f*l+h*-s+c*-a-d*-o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,a=e.x,s=e.y,l=e.z;return this.x=r*l-o*s,this.y=o*a-n*l,this.z=n*s-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new L,Ms=new zn;class gi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Hn.copy(t.boundingBox),Hn.applyMatrix4(t.matrixWorld),this.union(Hn);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let a=0,s=o.count;a<s;a++)qe.fromBufferAttribute(o,a).applyMatrix4(t.matrixWorld),this.expandByPoint(qe)}else r.boundingBox===null&&r.computeBoundingBox(),Hn.copy(r.boundingBox),Hn.applyMatrix4(t.matrixWorld),this.union(Hn)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_i),Di.subVectors(this.max,_i),Gn.subVectors(t.a,_i),Vn.subVectors(t.b,_i),Wn.subVectors(t.c,_i),sn.subVectors(Vn,Gn),an.subVectors(Wn,Vn),gn.subVectors(Gn,Wn);let e=[0,-sn.z,sn.y,0,-an.z,an.y,0,-gn.z,gn.y,sn.z,0,-sn.x,an.z,0,-an.x,gn.z,0,-gn.x,-sn.y,sn.x,0,-an.y,an.x,0,-gn.y,gn.x,0];return!Ir(e,Gn,Vn,Wn,Di)||(e=[1,0,0,0,1,0,0,0,1],!Ir(e,Gn,Vn,Wn,Di))?!1:(Ui.crossVectors(sn,an),e=[Ui.x,Ui.y,Ui.z],Ir(e,Gn,Vn,Wn,Di))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xe=[new L,new L,new L,new L,new L,new L,new L,new L],qe=new L,Hn=new gi,Gn=new L,Vn=new L,Wn=new L,sn=new L,an=new L,gn=new L,_i=new L,Di=new L,Ui=new L,_n=new L;function Ir(i,t,e,n,r){for(let o=0,a=i.length-3;o<=a;o+=3){_n.fromArray(i,o);const s=r.x*Math.abs(_n.x)+r.y*Math.abs(_n.y)+r.z*Math.abs(_n.z),l=t.dot(_n),c=e.dot(_n),d=n.dot(_n);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const Ec=new gi,vi=new L,Nr=new L;class Ii{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ec.setFromPoints(t).getCenter(n);let r=0;for(let o=0,a=t.length;o<a;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vi.subVectors(t,this.center);const e=vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vi.copy(t.center).add(Nr)),this.expandByPoint(vi.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new L,Fr=new L,Ni=new L,ln=new L,Or=new L,Fi=new L,Br=new L;class Ss{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.origin).addScaledVector(this.direction,e),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fr.copy(t).add(e).multiplyScalar(.5),Ni.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(Fr);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Ni),s=ln.dot(this.direction),l=-ln.dot(Ni),c=ln.lengthSq(),d=Math.abs(1-a*a);let f,h,p,v;if(d>0)if(f=a*l-s,h=a*s-l,v=o*d,f>=0)if(h>=-v)if(h<=v){const _=1/d;f*=_,h*=_,p=f*(f+a*h+2*s)+h*(a*f+h+2*l)+c}else h=o,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*o+s)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(f=Math.max(0,-(a*o+s)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c);else h=a>0?-o:o,f=Math.max(0,-(a*h+s)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fr).addScaledVector(Ni,h),p}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const n=Ye.dot(this.direction),r=Ye.dot(Ye)-n*n,o=t.radius*t.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=n-a,l=n+a;return l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,a,s,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(o=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(o=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||o>r||((o>n||isNaN(n))&&(n=o),(a<r||isNaN(r))&&(r=a),f>=0?(s=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(s=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,n,r,o){Or.subVectors(e,t),Fi.subVectors(n,t),Br.crossVectors(Or,Fi);let a=this.direction.dot(Br),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;ln.subVectors(this.origin,t);const l=s*this.direction.dot(Fi.crossVectors(ln,Fi));if(l<0)return null;const c=s*this.direction.dot(Or.cross(ln));if(c<0||l+c>a)return null;const d=-s*ln.dot(Br);return d<0?null:this.at(d/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,r,o,a,s,l,c,d,f,h,p,v,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,a,s,l,c,d,f,h,p,v,_,m)}set(t,e,n,r,o,a,s,l,c,d,f,h,p,v,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=o,u[5]=a,u[9]=s,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=v,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Xn.setFromMatrixColumn(t,0).length(),o=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const h=a*d,p=a*f,v=s*d,_=s*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=p+v*c,e[5]=h-_*c,e[9]=-s*l,e[2]=_-h*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,p=l*f,v=c*d,_=c*f;e[0]=h+_*s,e[4]=v*s-p,e[8]=a*c,e[1]=a*f,e[5]=a*d,e[9]=-s,e[2]=p*s-v,e[6]=_+h*s,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,p=l*f,v=c*d,_=c*f;e[0]=h-_*s,e[4]=-a*f,e[8]=v+p*s,e[1]=p+v*s,e[5]=a*d,e[9]=_-h*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,p=a*f,v=s*d,_=s*f;e[0]=l*d,e[4]=v*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-v,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,v=s*l,_=s*c;e[0]=l*d,e[4]=_-h*f,e[8]=v*f+p,e[1]=f,e[5]=a*d,e[9]=-s*d,e[2]=-c*d,e[6]=p*f+v,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,p=a*c,v=s*l,_=s*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=h*f+_,e[5]=a*d,e[9]=p*f-v,e[2]=v*f-p,e[6]=s*d,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tc,t,Ac)}lookAt(t,e,n){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),cn.crossVectors(n,we),cn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),cn.crossVectors(n,we)),cn.normalize(),Oi.crossVectors(we,cn),r[0]=cn.x,r[4]=Oi.x,r[8]=we.x,r[1]=cn.y,r[5]=Oi.y,r[9]=we.y,r[2]=cn.z,r[6]=Oi.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],p=n[13],v=n[2],_=n[6],m=n[10],u=n[14],y=n[3],g=n[7],M=n[11],S=n[15],R=r[0],C=r[4],U=r[8],b=r[12],T=r[1],B=r[5],q=r[9],K=r[13],P=r[2],G=r[6],Y=r[10],W=r[14],Q=r[3],X=r[7],$=r[11],k=r[15];return o[0]=a*R+s*T+l*P+c*Q,o[4]=a*C+s*B+l*G+c*X,o[8]=a*U+s*q+l*Y+c*$,o[12]=a*b+s*K+l*W+c*k,o[1]=d*R+f*T+h*P+p*Q,o[5]=d*C+f*B+h*G+p*X,o[9]=d*U+f*q+h*Y+p*$,o[13]=d*b+f*K+h*W+p*k,o[2]=v*R+_*T+m*P+u*Q,o[6]=v*C+_*B+m*G+u*X,o[10]=v*U+_*q+m*Y+u*$,o[14]=v*b+_*K+m*W+u*k,o[3]=y*R+g*T+M*P+S*Q,o[7]=y*C+g*B+M*G+S*X,o[11]=y*U+g*q+M*Y+S*$,o[15]=y*b+g*K+M*W+S*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],a=t[1],s=t[5],l=t[9],c=t[13],d=t[2],f=t[6],h=t[10],p=t[14],v=t[3],_=t[7],m=t[11],u=t[15];return v*(+o*l*f-r*c*f-o*s*h+n*c*h+r*s*p-n*l*p)+_*(+e*l*p-e*c*h+o*a*h-r*a*p+r*c*d-o*l*d)+m*(+e*c*f-e*s*p-o*a*f+n*a*p+o*s*d-n*c*d)+u*(-r*s*d-e*l*f+e*s*h+r*a*f-n*a*h+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],a=t[4],s=t[5],l=t[6],c=t[7],d=t[8],f=t[9],h=t[10],p=t[11],v=t[12],_=t[13],m=t[14],u=t[15],y=f*m*c-_*h*c+_*l*p-s*m*p-f*l*u+s*h*u,g=v*h*c-d*m*c-v*l*p+a*m*p+d*l*u-a*h*u,M=d*_*c-v*f*c+v*s*p-a*_*p-d*s*u+a*f*u,S=v*f*l-d*_*l-v*s*h+a*_*h+d*s*m-a*f*m,R=e*y+n*g+r*M+o*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(_*h*o-f*m*o-_*r*p+n*m*p+f*r*u-n*h*u)*C,t[2]=(s*m*o-_*l*o+_*r*c-n*m*c-s*r*u+n*l*u)*C,t[3]=(f*l*o-s*h*o-f*r*c+n*h*c+s*r*p-n*l*p)*C,t[4]=g*C,t[5]=(d*m*o-v*h*o+v*r*p-e*m*p-d*r*u+e*h*u)*C,t[6]=(v*l*o-a*m*o-v*r*c+e*m*c+a*r*u-e*l*u)*C,t[7]=(a*h*o-d*l*o+d*r*c-e*h*c-a*r*p+e*l*p)*C,t[8]=M*C,t[9]=(v*f*o-d*_*o-v*n*p+e*_*p+d*n*u-e*f*u)*C,t[10]=(a*_*o-v*s*o+v*n*c-e*_*c-a*n*u+e*s*u)*C,t[11]=(d*s*o-a*f*o-d*n*c+e*f*c+a*n*p-e*s*p)*C,t[12]=S*C,t[13]=(d*_*r-v*f*r+v*n*h-e*_*h-d*n*m+e*f*m)*C,t[14]=(v*s*r-a*_*r-v*n*l+e*_*l+a*n*m-e*s*m)*C,t[15]=(a*f*r-d*s*r+d*n*l-e*f*l-a*n*h+e*s*h)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,a=t.x,s=t.y,l=t.z,c=o*a,d=o*s;return this.set(c*a+n,c*s-r*l,c*l+r*s,0,c*s+r*l,d*s+n,d*l-r*a,0,c*l-r*s,d*l+r*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,a){return this.set(1,n,o,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,a=e._y,s=e._z,l=e._w,c=o+o,d=a+a,f=s+s,h=o*c,p=o*d,v=o*f,_=a*d,m=a*f,u=s*f,y=l*c,g=l*d,M=l*f,S=n.x,R=n.y,C=n.z;return r[0]=(1-(_+u))*S,r[1]=(p+M)*S,r[2]=(v-g)*S,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(h+u))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(v+g)*C,r[9]=(m-y)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let o=Xn.set(r[0],r[1],r[2]).length();const a=Xn.set(r[4],r[5],r[6]).length(),s=Xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Ue.copy(this);const c=1/o,d=1/a,f=1/s;return Ue.elements[0]*=c,Ue.elements[1]*=c,Ue.elements[2]*=c,Ue.elements[4]*=d,Ue.elements[5]*=d,Ue.elements[6]*=d,Ue.elements[8]*=f,Ue.elements[9]*=f,Ue.elements[10]*=f,e.setFromRotationMatrix(Ue),n.x=o,n.y=a,n.z=s,this}makePerspective(t,e,n,r,o,a,s=We){const l=this.elements,c=2*o/(e-t),d=2*o/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let p,v;if(s===We)p=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(s===Ci)p=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,o,a,s=We){const l=this.elements,c=1/(e-t),d=1/(n-r),f=1/(a-o),h=(e+t)*c,p=(n+r)*d;let v,_;if(s===We)v=(a+o)*f,_=-2*f;else if(s===Ci)v=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new L,Ue=new jt,Tc=new L(0,0,0),Ac=new L(1,1,1),cn=new L,Oi=new L,we=new L,Es=new jt,Ts=new zn;class Bi{constructor(t=0,e=0,n=0,r=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Es.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Es,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ts.setFromEuler(this),this.setFromQuaternion(Ts,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class As{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rc=0;const Rs=new L,qn=new zn,je=new jt,zi=new L,xi=new L,Cc=new L,Lc=new zn,Cs=new L(1,0,0),Ls=new L(0,1,0),Ps=new L(0,0,1),Pc={type:"added"},kc={type:"removed"};class ie extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DEFAULT_UP.clone();const t=new L,e=new Bi,n=new zn,r=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ut}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(Cs,t)}rotateY(t){return this.rotateOnAxis(Ls,t)}rotateZ(t){return this.rotateOnAxis(Ps,t)}translateOnAxis(t,e){return Rs.copy(t).applyQuaternion(this.quaternion),this.position.add(Rs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cs,t)}translateY(t){return this.translateOnAxis(Ls,t)}translateZ(t){return this.translateOnAxis(Ps,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zi.copy(t):zi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?je.lookAt(xi,zi,this.up):je.lookAt(zi,xi,this.up),this.quaternion.setFromRotationMatrix(je),r&&(je.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(je),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),je.multiply(t.parent.matrixWorld)),t.applyMatrix4(je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,t,Cc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Lc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(t.materials,this.material[l]));r.material=s}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),v=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ie.DEFAULT_UP=new L(0,1,0),ie.DEFAULT_MATRIX_AUTO_UPDATE=!0,ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ie=new L,$e=new L,zr=new L,Ze=new L,Yn=new L,jn=new L,ks=new L,Hr=new L,Gr=new L,Vr=new L;let Hi=!1;class Ne{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ie.subVectors(t,e),r.cross(Ie);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Ie.subVectors(r,e),$e.subVectors(n,e),zr.subVectors(t,e);const a=Ie.dot(Ie),s=Ie.dot($e),l=Ie.dot(zr),c=$e.dot($e),d=$e.dot(zr),f=a*c-s*s;if(f===0)return o.set(-2,-1,-1);const h=1/f,p=(c*l-s*d)*h,v=(a*d-s*l)*h;return o.set(1-p-v,v,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ze),Ze.x>=0&&Ze.y>=0&&Ze.x+Ze.y<=1}static getUV(t,e,n,r,o,a,s,l){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),this.getInterpolation(t,e,n,r,o,a,s,l)}static getInterpolation(t,e,n,r,o,a,s,l){return this.getBarycoord(t,e,n,r,Ze),l.setScalar(0),l.addScaledVector(o,Ze.x),l.addScaledVector(a,Ze.y),l.addScaledVector(s,Ze.z),l}static isFrontFacing(t,e,n,r){return Ie.subVectors(n,e),$e.subVectors(t,e),Ie.cross($e).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ie.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Ie.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ne.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ne.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,o){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),Ne.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}getInterpolation(t,e,n,r,o){return Ne.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return Ne.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ne.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let a,s;Yn.subVectors(r,n),jn.subVectors(o,n),Hr.subVectors(t,n);const l=Yn.dot(Hr),c=jn.dot(Hr);if(l<=0&&c<=0)return e.copy(n);Gr.subVectors(t,r);const d=Yn.dot(Gr),f=jn.dot(Gr);if(d>=0&&f<=d)return e.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Yn,a);Vr.subVectors(t,o);const p=Yn.dot(Vr),v=jn.dot(Vr);if(v>=0&&p<=v)return e.copy(o);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return s=c/(c-v),e.copy(n).addScaledVector(jn,s);const m=d*v-p*f;if(m<=0&&f-d>=0&&p-v>=0)return ks.subVectors(o,r),s=(f-d)/(f-d+(p-v)),e.copy(r).addScaledVector(ks,s);const u=1/(m+_+h);return a=_*u,s=h*u,e.copy(n).addScaledVector(Yn,a).addScaledVector(jn,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Dc=0;class $n extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Pn,this.side=Qe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Lo,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==Qe&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(e){const o=r(t.textures),a=r(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ds={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Gt.workingColorSpace){if(t=Cr(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Wr(a,o,t+1/3),this.g=Wr(a,o,t),this.b=Wr(a,o,t-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(t,e=oe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){const n=Ds[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return Gt.fromWorkingColorSpace(ue.copy(this),t),Math.round(fe(ue.r*255,0,255))*65536+Math.round(fe(ue.g*255,0,255))*256+Math.round(fe(ue.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(ue.copy(this),e);const n=ue.r,r=ue.g,o=ue.b,a=Math.max(n,r,o),s=Math.min(n,r,o);let l,c;const d=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=d<=.5?f/(a+s):f/(2-a-s),a){case n:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-n)/f+2;break;case o:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(ue.copy(this),e),t.r=ue.r,t.g=ue.g,t.b=ue.b,t}getStyle(t=oe){Gt.fromWorkingColorSpace(ue.copy(this),t);const e=ue.r,n=ue.g,r=ue.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Gi);const n=pi(un.h,Gi.h,e),r=pi(un.s,Gi.s,e),o=pi(un.l,Gi.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ue=new Bt;Bt.NAMES=Ds;class Us extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new L,Vi=new At;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hs,this.updateRange={offset:0,count:-1},this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vi.fromBufferAttribute(this,e),Vi.applyMatrix3(t),this.setXY(e,Vi.x,Vi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),r=pe(r,this.array),o=pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Is extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ns extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uc=0;const Re=new jt,Xr=new ie,Zn=new L,Me=new gi,bi=new gi,re=new L;class Ce extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gs(t)?Ns:Is)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ut().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];Me.setFromBufferAttribute(o),this.morphTargetsRelative?(re.addVectors(this.boundingBox.min,Me.min),this.boundingBox.expandByPoint(re),re.addVectors(this.boundingBox.max,Me.max),this.boundingBox.expandByPoint(re)):(this.boundingBox.expandByPoint(Me.min),this.boundingBox.expandByPoint(Me.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Me.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const s=e[o];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(re.addVectors(Me.min,bi.min),Me.expandByPoint(re),re.addVectors(Me.max,bi.max),Me.expandByPoint(re)):(Me.expandByPoint(bi.min),Me.expandByPoint(bi.max))}Me.getCenter(n);let r=0;for(let o=0,a=t.count;o<a;o++)re.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(re));if(e)for(let o=0,a=e.length;o<a;o++){const s=e[o],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)re.fromBufferAttribute(s,c),l&&(Zn.fromBufferAttribute(t,c),re.add(Zn)),r=Math.max(r,n.distanceToSquared(re))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,o=e.normal.array,a=e.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<s;T++)c[T]=new L,d[T]=new L;const f=new L,h=new L,p=new L,v=new At,_=new At,m=new At,u=new L,y=new L;function g(T,B,q){f.fromArray(r,T*3),h.fromArray(r,B*3),p.fromArray(r,q*3),v.fromArray(a,T*2),_.fromArray(a,B*2),m.fromArray(a,q*2),h.sub(f),p.sub(f),_.sub(v),m.sub(v);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(K),y.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(K),c[T].add(u),c[B].add(u),c[q].add(u),d[T].add(y),d[B].add(y),d[q].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,B=M.length;T<B;++T){const q=M[T],K=q.start,P=q.count;for(let G=K,Y=K+P;G<Y;G+=3)g(n[G+0],n[G+1],n[G+2])}const S=new L,R=new L,C=new L,U=new L;function b(T){C.fromArray(o,T*3),U.copy(C);const B=c[T];S.copy(B),S.sub(C.multiplyScalar(C.dot(B))).normalize(),R.crossVectors(U,B);const K=R.dot(d[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=K}for(let T=0,B=M.length;T<B;++T){const q=M[T],K=q.start,P=q.count;for(let G=K,Y=K+P;G<Y;G+=3)b(n[G+0]),b(n[G+1]),b(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new L,o=new L,a=new L,s=new L,l=new L,c=new L,d=new L,f=new L;if(t)for(let h=0,p=t.count;h<p;h+=3){const v=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),d.subVectors(a,o),f.subVectors(r,o),d.cross(f),s.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),s.add(d),l.add(d),c.add(d),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,o),f.subVectors(r,o),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)re.fromBufferAttribute(t,e),re.normalize(),t.setXYZ(e,re.x,re.y,re.z)}toNonIndexed(){function t(s,l){const c=s.array,d=s.itemSize,f=s.normalized,h=new c.constructor(l.length*d);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?p=l[_]*s.data.stride+s.offset:p=l[_]*d;for(let u=0;u<d;u++)h[v++]=c[p++]}return new Fe(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=t(l,n);e.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=t(h,n);l.push(p)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(t.data))}d.length>0&&(r[l]=d,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const o=t.morphAttributes;for(const c in o){const d=[],f=o[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fs=new jt,vn=new Ss,Wi=new Ii,Os=new L,Kn=new L,Jn=new L,Qn=new L,qr=new L,Xi=new L,qi=new At,Yi=new At,ji=new At,Bs=new L,zs=new L,Hs=new L,$i=new L,Zi=new L;class Oe extends ie{constructor(t=new Ce,e=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const s=this.morphTargetInfluences;if(o&&s){Xi.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=s[l],f=o[l];d!==0&&(qr.fromBufferAttribute(f,t),a?Xi.addScaledVector(qr,d):Xi.addScaledVector(qr.sub(e),d))}e.add(Xi)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(o),vn.copy(t.ray).recast(t.near),!(Wi.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Wi,Os)===null||vn.origin.distanceToSquared(Os)>(t.far-t.near)**2))&&(Fs.copy(o).invert(),vn.copy(t.ray).applyMatrix4(Fs),!(n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vn)))}_computeIntersections(t,e,n){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],u=a[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,S=g;M<S;M+=3){const R=s.getX(M),C=s.getX(M+1),U=s.getX(M+2);r=Ki(this,u,t,n,c,d,f,R,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(s.count,p.start+p.count);for(let m=v,u=_;m<u;m+=3){const y=s.getX(m),g=s.getX(m+1),M=s.getX(m+2);r=Ki(this,a,t,n,c,d,f,y,g,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],u=a[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,S=g;M<S;M+=3){const R=M,C=M+1,U=M+2;r=Ki(this,u,t,n,c,d,f,R,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,u=_;m<u;m+=3){const y=m,g=m+1,M=m+2;r=Ki(this,a,t,n,c,d,f,y,g,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Ic(i,t,e,n,r,o,a,s){let l;if(t.side===be?l=n.intersectTriangle(a,o,r,!0,s):l=n.intersectTriangle(r,o,a,t.side===Qe,s),l===null)return null;Zi.copy(s),Zi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zi);return c<e.near||c>e.far?null:{distance:c,point:Zi.clone(),object:i}}function Ki(i,t,e,n,r,o,a,s,l,c){i.getVertexPosition(s,Kn),i.getVertexPosition(l,Jn),i.getVertexPosition(c,Qn);const d=Ic(i,t,e,n,Kn,Jn,Qn,$i);if(d){r&&(qi.fromBufferAttribute(r,s),Yi.fromBufferAttribute(r,l),ji.fromBufferAttribute(r,c),d.uv=Ne.getInterpolation($i,Kn,Jn,Qn,qi,Yi,ji,new At)),o&&(qi.fromBufferAttribute(o,s),Yi.fromBufferAttribute(o,l),ji.fromBufferAttribute(o,c),d.uv1=Ne.getInterpolation($i,Kn,Jn,Qn,qi,Yi,ji,new At),d.uv2=d.uv1),a&&(Bs.fromBufferAttribute(a,s),zs.fromBufferAttribute(a,l),Hs.fromBufferAttribute(a,c),d.normal=Ne.getInterpolation($i,Kn,Jn,Qn,Bs,zs,Hs,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new L,materialIndex:0};Ne.getNormal(Kn,Jn,Qn,f.normal),d.face=f}return d}class ti extends Ce{constructor(t=1,e=1,n=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,n,e,t,a,o,0),v("z","y","x",1,-1,n,e,-t,a,o,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,o,4),v("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function v(_,m,u,y,g,M,S,R,C,U,b){const T=M/C,B=S/U,q=M/2,K=S/2,P=R/2,G=C+1,Y=U+1;let W=0,Q=0;const X=new L;for(let $=0;$<Y;$++){const k=$*B-K;for(let V=0;V<G;V++){const at=V*T-q;X[_]=at*y,X[m]=k*g,X[u]=P,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[u]=R>0?1:-1,d.push(X.x,X.y,X.z),f.push(V/C),f.push(1-$/U),W+=1}}for(let $=0;$<U;$++)for(let k=0;k<C;k++){const V=h+k+G*$,at=h+k+G*($+1),ct=h+(k+1)+G*($+1),dt=h+(k+1)+G*$;l.push(V,at,dt),l.push(at,ct,dt),Q+=6}s.addGroup(p,Q,b),p+=Q,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ei(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function me(i){const t={};for(let e=0;e<i.length;e++){const n=ei(i[e]);for(const r in n)t[r]=n[r]}return t}function Nc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gs(i){return i.getRenderTarget()===null?i.outputColorSpace:Gt.workingColorSpace}const Fc={clone:ei,merge:me};var Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ei(t.uniforms),this.uniformsGroups=Nc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vs extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=We}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Le extends Vs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fi*2*Math.atan(Math.tan(hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(o+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class zc extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(ni,ii,t,e);r.layers=this.layers,this.add(r);const o=new Le(ni,ii,t,e);o.layers=this.layers,this.add(o);const a=new Le(ni,ii,t,e);a.layers=this.layers,this.add(a);const s=new Le(ni,ii,t,e);s.layers=this.layers,this.add(s);const l=new Le(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Le(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,a,s,l]=e;for(const c of e)this.remove(c);if(t===We)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ci)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,s),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,h,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ws extends ye{constructor(t,e,n,r,o,a,s,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Dn,super(t,e,n,r,o,a,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hc extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===fn?oe:Ae),this.texture=new Ws(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Te}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ti(5,5,5),o=new xn({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:tn});o.uniforms.tEquirect.value=e;const a=new Oe(r,o),s=e.minFilter;return e.minFilter===ui&&(e.minFilter=Te),new zc(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(o)}}const Yr=new L,Gc=new L,Vc=new Ut;class bn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Yr.subVectors(n,e).cross(Gc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vc.getNormalMatrix(t),r=this.coplanarPoint(Yr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Ii,Ji=new L;class jr{constructor(t=new bn,e=new bn,n=new bn,r=new bn,o=new bn,a=new bn){this.planes=[t,e,n,r,o,a]}set(t,e,n,r,o,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=We){const n=this.planes,r=t.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],v=r[9],_=r[10],m=r[11],u=r[12],y=r[13],g=r[14],M=r[15];if(n[0].setComponents(l-o,h-c,m-p,M-u).normalize(),n[1].setComponents(l+o,h+c,m+p,M+u).normalize(),n[2].setComponents(l+a,h+d,m+v,M+y).normalize(),n[3].setComponents(l-a,h-d,m-v,M-y).normalize(),n[4].setComponents(l-s,h-f,m-_,M-g).normalize(),e===We)n[5].setComponents(l+s,h+f,m+_,M+g).normalize();else if(e===Ci)n[5].setComponents(s,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ji.x=r.normal.x>0?t.max.x:t.min.x,Ji.y=r.normal.y>0?t.max.y:t.min.y,Ji.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ji)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xs(){let i=null,t=!1,e=null,n=null;function r(o,a){e(o,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Wc(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,d){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(d,p),i.bufferData(d,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function o(c,d,f){const h=d.array,p=d.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(e?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,d)):f.version<c.version&&(o(f.buffer,c,d),f.version=c.version)}return{get:a,remove:s,update:l}}class $r extends Ce{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,a=e/2,s=Math.floor(n),l=Math.floor(r),c=s+1,d=l+1,f=t/s,h=e/l,p=[],v=[],_=[],m=[];for(let u=0;u<d;u++){const y=u*h-a;for(let g=0;g<c;g++){const M=g*f-o;v.push(M,-y,0),_.push(0,0,1),m.push(g/s),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<s;y++){const g=y+c*u,M=y+c*(u+1),S=y+1+c*(u+1),R=y+1+c*u;p.push(g,M,R),p.push(M,S,R)}this.setIndex(p),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$c=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pt={alphahash_fragment:Xc,alphahash_pars_fragment:qc,alphamap_fragment:Yc,alphamap_pars_fragment:jc,alphatest_fragment:$c,alphatest_pars_fragment:Zc,aomap_fragment:Kc,aomap_pars_fragment:Jc,begin_vertex:Qc,beginnormal_vertex:tu,bsdfs:eu,iridescence_fragment:nu,bumpmap_pars_fragment:iu,clipping_planes_fragment:ru,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:su,clipping_planes_vertex:au,color_fragment:lu,color_pars_fragment:cu,color_pars_vertex:uu,color_vertex:du,common:hu,cube_uv_reflection_fragment:fu,defaultnormal_vertex:pu,displacementmap_pars_vertex:mu,displacementmap_vertex:gu,emissivemap_fragment:_u,emissivemap_pars_fragment:vu,colorspace_fragment:xu,colorspace_pars_fragment:bu,envmap_fragment:yu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Mu,envmap_pars_vertex:Su,envmap_physical_pars_fragment:Nu,envmap_vertex:Eu,fog_vertex:Tu,fog_pars_vertex:Au,fog_fragment:Ru,fog_pars_fragment:Cu,gradientmap_pars_fragment:Lu,lightmap_fragment:Pu,lightmap_pars_fragment:ku,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Uu,lights_pars_begin:Iu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Ou,lights_phong_fragment:Bu,lights_phong_pars_fragment:zu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:$u,map_fragment:Zu,map_pars_fragment:Ku,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:td,metalnessmap_pars_fragment:ed,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:rd,morphtarget_vertex:od,normal_fragment_begin:sd,normal_fragment_maps:ad,normal_pars_fragment:ld,normal_pars_vertex:cd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:hd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:_d,premultiplied_alpha_fragment:vd,project_vertex:xd,dithering_fragment:bd,dithering_pars_fragment:yd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:Ed,shadowmap_vertex:Td,shadowmask_pars_fragment:Ad,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Ld,skinnormal_vertex:Pd,specularmap_fragment:kd,specularmap_pars_fragment:Dd,tonemapping_fragment:Ud,tonemapping_pars_fragment:Id,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:Bd,uv_vertex:zd,worldpos_vertex:Hd,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},st={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Be={basic:{uniforms:me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:me([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:me([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:me([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:me([st.points,st.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:me([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:me([st.common,st.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:me([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:me([st.sprite,st.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:me([st.common,st.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:me([st.lights,st.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Be.physical={uniforms:me([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Qi={r:0,b:0,g:0};function Gd(i,t,e,n,r,o,a){const s=new Bt(0);let l=o===!0?0:1,c,d,f=null,h=0,p=null;function v(m,u){let y=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?e:t).get(g)),g===null?_(s,l):g&&g.isColor&&(_(g,1),y=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Si)?(d===void 0&&(d=new Oe(new ti(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ei(Be.backgroundCube.uniforms),vertexShader:Be.backgroundCube.vertexShader,fragmentShader:Be.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Gt.getTransfer(g.colorSpace)!==Xt,(f!==g||h!==g.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,p=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Oe(new $r(2,2),new xn({name:"BackgroundMaterial",uniforms:ei(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(g.colorSpace)!==Xt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,u){m.getRGB(Qi,Gs(i)),n.buffers.color.setClear(Qi.r,Qi.g,Qi.b,u,a)}return{getClearColor:function(){return s},setClearColor:function(m,u=1){s.set(m),l=u,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:v}}function Vd(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,s={},l=m(null);let c=l,d=!1;function f(P,G,Y,W,Q){let X=!1;if(a){const $=_(W,Y,G);c!==$&&(c=$,p(c.object)),X=u(P,W,Y,Q),X&&y(P,W,Y,Q)}else{const $=G.wireframe===!0;(c.geometry!==W.id||c.program!==Y.id||c.wireframe!==$)&&(c.geometry=W.id,c.program=Y.id,c.wireframe=$,X=!0)}Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,U(P,G,Y,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function p(P){return n.isWebGL2?i.bindVertexArray(P):o.bindVertexArrayOES(P)}function v(P){return n.isWebGL2?i.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function _(P,G,Y){const W=Y.wireframe===!0;let Q=s[P.id];Q===void 0&&(Q={},s[P.id]=Q);let X=Q[G.id];X===void 0&&(X={},Q[G.id]=X);let $=X[W];return $===void 0&&($=m(h()),X[W]=$),$}function m(P){const G=[],Y=[],W=[];for(let Q=0;Q<r;Q++)G[Q]=0,Y[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:W,object:P,attributes:{},index:null}}function u(P,G,Y,W){const Q=c.attributes,X=G.attributes;let $=0;const k=Y.getAttributes();for(const V in k)if(k[V].location>=0){const ct=Q[V];let dt=X[V];if(dt===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),ct===void 0||ct.attribute!==dt||dt&&ct.data!==dt.data)return!0;$++}return c.attributesNum!==$||c.index!==W}function y(P,G,Y,W){const Q={},X=G.attributes;let $=0;const k=Y.getAttributes();for(const V in k)if(k[V].location>=0){let ct=X[V];ct===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor));const dt={};dt.attribute=ct,ct&&ct.data&&(dt.data=ct.data),Q[V]=dt,$++}c.attributes=Q,c.attributesNum=$,c.index=W}function g(){const P=c.newAttributes;for(let G=0,Y=P.length;G<Y;G++)P[G]=0}function M(P){S(P,0)}function S(P,G){const Y=c.newAttributes,W=c.enabledAttributes,Q=c.attributeDivisors;Y[P]=1,W[P]===0&&(i.enableVertexAttribArray(P),W[P]=1),Q[P]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),Q[P]=G)}function R(){const P=c.newAttributes,G=c.enabledAttributes;for(let Y=0,W=G.length;Y<W;Y++)G[Y]!==P[Y]&&(i.disableVertexAttribArray(Y),G[Y]=0)}function C(P,G,Y,W,Q,X,$){$===!0?i.vertexAttribIPointer(P,G,Y,Q,X):i.vertexAttribPointer(P,G,Y,W,Q,X)}function U(P,G,Y,W){if(n.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const Q=W.attributes,X=Y.getAttributes(),$=G.defaultAttributeValues;for(const k in X){const V=X[k];if(V.location>=0){let at=Q[k];if(at===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),at!==void 0){const ct=at.normalized,dt=at.itemSize,xt=e.get(at);if(xt===void 0)continue;const F=xt.buffer,Z=xt.type,_t=xt.bytesPerElement,Ht=n.isWebGL2===!0&&(Z===i.INT||Z===i.UNSIGNED_INT||at.gpuType===Do);if(at.isInterleavedBufferAttribute){const yt=at.data,D=yt.stride,ae=at.offset;if(yt.isInstancedInterleavedBuffer){for(let gt=0;gt<V.locationSize;gt++)S(V.location+gt,yt.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let gt=0;gt<V.locationSize;gt++)M(V.location+gt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let gt=0;gt<V.locationSize;gt++)C(V.location+gt,dt/V.locationSize,Z,ct,D*_t,(ae+dt/V.locationSize*gt)*_t,Ht)}else{if(at.isInstancedBufferAttribute){for(let yt=0;yt<V.locationSize;yt++)S(V.location+yt,at.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let yt=0;yt<V.locationSize;yt++)M(V.location+yt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let yt=0;yt<V.locationSize;yt++)C(V.location+yt,dt/V.locationSize,Z,ct,dt*_t,dt/V.locationSize*yt*_t,Ht)}}else if($!==void 0){const ct=$[k];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(V.location,ct);break;case 3:i.vertexAttrib3fv(V.location,ct);break;case 4:i.vertexAttrib4fv(V.location,ct);break;default:i.vertexAttrib1fv(V.location,ct)}}}}R()}function b(){q();for(const P in s){const G=s[P];for(const Y in G){const W=G[Y];for(const Q in W)v(W[Q].object),delete W[Q];delete G[Y]}delete s[P]}}function T(P){if(s[P.id]===void 0)return;const G=s[P.id];for(const Y in G){const W=G[Y];for(const Q in W)v(W[Q].object),delete W[Q];delete G[Y]}delete s[P.id]}function B(P){for(const G in s){const Y=s[G];if(Y[P.id]===void 0)continue;const W=Y[P.id];for(const Q in W)v(W[Q].object),delete W[Q];delete Y[P.id]}}function q(){K(),d=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:K,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:M,disableUnusedAttributes:R}}function Wd(i,t,e,n){const r=n.isWebGL2;let o;function a(c){o=c}function s(c,d){i.drawArrays(o,c,d),e.update(d,o,1)}function l(c,d,f){if(f===0)return;let h,p;if(r)h=i,p="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](o,c,d,f),e.update(d,o,f)}this.setMode=a,this.render=s,this.renderInstances=l}function Xd(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=e.precision!==void 0?e.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=a||t.has("OES_texture_float"),S=g&&M,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:R}}function qd(i){const t=this;let e=null,n=0,r=!1,o=!1;const a=new bn,s=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||v===null||v.length===0||o&&!m)o?d(null):c();else{const y=o?0:n,g=y*4;let M=u.clippingState||null;l.value=M,M=d(v,h,g,p);for(let S=0;S!==g;++S)M[S]=e[S];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,h,p,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const u=p+_*4,y=h.matrixWorldInverse;s.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,M=p;g!==_;++g,M+=4)a.copy(f[g]).applyMatrix4(y,s),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Yd(i){let t=new WeakMap;function e(a,s){return s===mr?a.mapping=Dn:s===gr&&(a.mapping=Un),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===mr||s===gr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hc(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class qs extends Vs{constructor(t=-1,e=1,n=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,a=n+t,s=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,Ys=[.125,.215,.35,.446,.526,.582],wn=20,Zr=new qs,js=new Bt;let Kr=null;const Mn=(1+Math.sqrt(5))/2,oi=1/Mn,$s=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Mn,oi),new L(0,Mn,-oi),new L(oi,0,Mn),new L(-oi,0,Mn),new L(Mn,oi,0),new L(-Mn,oi,0)];class Zs{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Kr=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Js(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr),t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dn||t.mapping===Un?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:di,format:De,colorSpace:Ve,depthBuffer:!1},r=Ks(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ks(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jd(o)),this._blurMaterial=$d(o,t,e)}return r}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,r){const s=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(js),d.toneMapping=en,d.autoClear=!1;const p=new Us({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),v=new Oe(new ti,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(js),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(s.up.set(0,l[u],0),s.lookAt(c[u],0,0)):y===1?(s.up.set(0,0,l[u]),s.lookAt(0,c[u],0)):(s.up.set(0,l[u],0),s.lookAt(0,0,c[u]));const g=this._cubeSize;tr(r,y*g,u>2?g:0,g,g),d.setRenderTarget(r),_&&d.render(v,s),d.render(t,s)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Dn||t.mapping===Un;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Js());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$s[(r-1)%$s.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,r,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",o),this._halfBlur(a,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Oe(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*wn-1),_=o/v,m=isFinite(o)?1+Math.floor(d*_):wn;m>wn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wn}`);const u=[];let y=0;for(let C=0;C<wn;++C){const U=C/_,b=Math.exp(-U*U/2);u.push(b),C===0?y+=b:C<m&&(y+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-n;const M=this._sizeLods[r],S=3*M*(r>g-ri?r-g+ri:0),R=4*(this._cubeSize-M);tr(e,S,R,3*M,2*M),l.setRenderTarget(e),l.render(f,Zr)}}function jd(i){const t=[],e=[],n=[];let r=i;const o=i-ri+1+Ys.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);e.push(s);let l=1/s;a>i-ri?l=Ys[a-i+ri-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,v=6,_=3,m=2,u=1,y=new Float32Array(_*v*p),g=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,U=R>2?0:-1,b=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];y.set(b,_*v*R),g.set(h,m*v*R);const T=[R,R,R,R,R,R];M.set(T,u*v*R)}const S=new Ce;S.setAttribute("position",new Fe(y,_)),S.setAttribute("uv",new Fe(g,m)),S.setAttribute("faceIndex",new Fe(M,u)),t.push(S),r>ri&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ks(i,t,e){const n=new mn(i,t,e);return n.texture.mapping=Si,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function $d(i,t,e){const n=new Float32Array(wn),r=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Js(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Qs(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Jr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zd(i){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===mr||l===gr,d=l===Dn||l===Un;if(c||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=t.get(s);return e===null&&(e=new Zs(i)),f=c?e.fromEquirectangular(s,f):e.fromCubemap(s,f),t.set(s,f),f.texture}else{if(t.has(s))return t.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||d&&f&&r(f)){e===null&&(e=new Zs(i));const h=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,h),s.addEventListener("dispose",o),h.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jd(i,t,e,n){const r={},o=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=o.get(h);p&&(t.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)t.update(h[v],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const _=p[v];for(let m=0,u=_.length;m<u;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let g=0,M=y.length;g<M;g+=3){const S=y[g+0],R=y[g+1],C=y[g+2];h.push(S,R,R,C,C,S)}}else if(v!==void 0){const y=v.array;_=v.version;for(let g=0,M=y.length/3-1;g<M;g+=3){const S=g+0,R=g+1,C=g+2;h.push(S,R,R,C,C,S)}}else return;const m=new(gs(h)?Ns:Is)(h,1);m.version=_;const u=o.get(f);u&&t.remove(u),o.set(f,m)}function d(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function Qd(i,t,e,n){const r=n.isWebGL2;let o;function a(h){o=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function d(h,p){i.drawElements(o,p,s,h*l),e.update(p,o,1)}function f(h,p,v){if(v===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,p,s,h*l,v),e.update(p,o,v)}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f}function th(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,s){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=s*(o/3);break;case i.LINES:e.lines+=s*(o/2);break;case i.LINE_STRIP:e.lines+=s*(o-1);break;case i.LINE_LOOP:e.lines+=s*o;break;case i.POINTS:e.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function eh(i,t){return i[0]-t[0]}function nh(i,t){return Math.abs(t[1])-Math.abs(i[1])}function ih(i,t,e){const n={},r=new Float32Array(8),o=new WeakMap,a=new ne,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=p!==void 0?p.length:0;let _=o.get(d);if(_===void 0||_.count!==v){let P=function(){q.dispose(),o.delete(d),d.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const y=d.morphAttributes.position!==void 0,g=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let U=0;y===!0&&(U=1),g===!0&&(U=2),M===!0&&(U=3);let b=d.attributes.position.count*U,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const B=new Float32Array(b*T*4*v),q=new ws(B,b,T,v);q.type=on,q.needsUpdate=!0;const K=U*4;for(let G=0;G<v;G++){const Y=S[G],W=R[G],Q=C[G],X=b*T*4*G;for(let $=0;$<Y.count;$++){const k=$*K;y===!0&&(a.fromBufferAttribute(Y,$),B[X+k+0]=a.x,B[X+k+1]=a.y,B[X+k+2]=a.z,B[X+k+3]=0),g===!0&&(a.fromBufferAttribute(W,$),B[X+k+4]=a.x,B[X+k+5]=a.y,B[X+k+6]=a.z,B[X+k+7]=0),M===!0&&(a.fromBufferAttribute(Q,$),B[X+k+8]=a.x,B[X+k+9]=a.y,B[X+k+10]=a.z,B[X+k+11]=Q.itemSize===4?a.w:1)}}_={count:v,texture:q,size:new At(b,T)},o.set(d,_),d.addEventListener("dispose",P)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const u=d.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",u),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=h===void 0?0:h.length;let v=n[d.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];n[d.id]=v}for(let g=0;g<p;g++){const M=v[g];M[0]=g,M[1]=h[g]}v.sort(nh);for(let g=0;g<8;g++)g<p&&v[g][1]?(s[g][0]=v[g][0],s[g][1]=v[g][1]):(s[g][0]=Number.MAX_SAFE_INTEGER,s[g][1]=0);s.sort(eh);const _=d.morphAttributes.position,m=d.morphAttributes.normal;let u=0;for(let g=0;g<8;g++){const M=s[g],S=M[0],R=M[1];S!==Number.MAX_SAFE_INTEGER&&R?(_&&d.getAttribute("morphTarget"+g)!==_[S]&&d.setAttribute("morphTarget"+g,_[S]),m&&d.getAttribute("morphNormal"+g)!==m[S]&&d.setAttribute("morphNormal"+g,m[S]),r[g]=R,u+=R):(_&&d.hasAttribute("morphTarget"+g)===!0&&d.deleteAttribute("morphTarget"+g),m&&d.hasAttribute("morphNormal"+g)===!0&&d.deleteAttribute("morphNormal"+g),r[g]=0)}const y=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function rh(i,t,e,n){let r=new WeakMap;function o(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}const ta=new ye,ea=new ws,na=new Sc,ia=new Ws,ra=[],oa=[],sa=new Float32Array(16),aa=new Float32Array(9),la=new Float32Array(4);function si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let o=ra[r];if(o===void 0&&(o=new Float32Array(r),ra[r]=o),t!==0){n.toArray(o,0);for(let a=1,s=0;a!==t;++a)s+=e,i[a].toArray(o,s)}return o}function te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function er(i,t){let e=oa[t];e===void 0&&(e=new Int32Array(t),oa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function oh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;i.uniform2fv(this.addr,t),ee(e,t)}}function ah(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(te(e,t))return;i.uniform3fv(this.addr,t),ee(e,t)}}function lh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;i.uniform4fv(this.addr,t),ee(e,t)}}function ch(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;la.set(n),i.uniformMatrix2fv(this.addr,!1,la),ee(e,n)}}function uh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;aa.set(n),i.uniformMatrix3fv(this.addr,!1,aa),ee(e,n)}}function dh(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ee(e,t)}else{if(te(e,n))return;sa.set(n),i.uniformMatrix4fv(this.addr,!1,sa),ee(e,n)}}function hh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;i.uniform2iv(this.addr,t),ee(e,t)}}function ph(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;i.uniform3iv(this.addr,t),ee(e,t)}}function mh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;i.uniform4iv(this.addr,t),ee(e,t)}}function gh(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _h(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(te(e,t))return;i.uniform2uiv(this.addr,t),ee(e,t)}}function vh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(te(e,t))return;i.uniform3uiv(this.addr,t),ee(e,t)}}function xh(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(te(e,t))return;i.uniform4uiv(this.addr,t),ee(e,t)}}function bh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||ta,r)}function yh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||na,r)}function wh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ia,r)}function Mh(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ea,r)}function Sh(i){switch(i){case 5126:return oh;case 35664:return sh;case 35665:return ah;case 35666:return lh;case 35674:return ch;case 35675:return uh;case 35676:return dh;case 5124:case 35670:return hh;case 35667:case 35671:return fh;case 35668:case 35672:return ph;case 35669:case 35673:return mh;case 5125:return gh;case 36294:return _h;case 36295:return vh;case 36296:return xh;case 35678:case 36198:case 36298:case 36306:case 35682:return bh;case 35679:case 36299:case 36307:return yh;case 35680:case 36300:case 36308:case 36293:return wh;case 36289:case 36303:case 36311:case 36292:return Mh}}function Eh(i,t){i.uniform1fv(this.addr,t)}function Th(i,t){const e=si(t,this.size,2);i.uniform2fv(this.addr,e)}function Ah(i,t){const e=si(t,this.size,3);i.uniform3fv(this.addr,e)}function Rh(i,t){const e=si(t,this.size,4);i.uniform4fv(this.addr,e)}function Ch(i,t){const e=si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lh(i,t){const e=si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ph(i,t){const e=si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kh(i,t){i.uniform1iv(this.addr,t)}function Dh(i,t){i.uniform2iv(this.addr,t)}function Uh(i,t){i.uniform3iv(this.addr,t)}function Ih(i,t){i.uniform4iv(this.addr,t)}function Nh(i,t){i.uniform1uiv(this.addr,t)}function Fh(i,t){i.uniform2uiv(this.addr,t)}function Oh(i,t){i.uniform3uiv(this.addr,t)}function Bh(i,t){i.uniform4uiv(this.addr,t)}function zh(i,t,e){const n=this.cache,r=t.length,o=er(e,r);te(n,o)||(i.uniform1iv(this.addr,o),ee(n,o));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||ta,o[a])}function Hh(i,t,e){const n=this.cache,r=t.length,o=er(e,r);te(n,o)||(i.uniform1iv(this.addr,o),ee(n,o));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||na,o[a])}function Gh(i,t,e){const n=this.cache,r=t.length,o=er(e,r);te(n,o)||(i.uniform1iv(this.addr,o),ee(n,o));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ia,o[a])}function Vh(i,t,e){const n=this.cache,r=t.length,o=er(e,r);te(n,o)||(i.uniform1iv(this.addr,o),ee(n,o));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ea,o[a])}function Wh(i){switch(i){case 5126:return Eh;case 35664:return Th;case 35665:return Ah;case 35666:return Rh;case 35674:return Ch;case 35675:return Lh;case 35676:return Ph;case 5124:case 35670:return kh;case 35667:case 35671:return Dh;case 35668:case 35672:return Uh;case 35669:case 35673:return Ih;case 5125:return Nh;case 36294:return Fh;case 36295:return Oh;case 36296:return Bh;case 35678:case 36198:case 36298:case 36306:case 35682:return zh;case 35679:case 36299:case 36307:return Hh;case 35680:case 36300:case 36308:case 36293:return Gh;case 36289:case 36303:case 36311:case 36292:return Vh}}class Xh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Sh(e.type)}}class qh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Wh(e.type)}}class Yh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(t,e[s.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function ca(i,t){i.seq.push(t),i.map[t.id]=t}function jh(i,t,e){const n=i.name,r=n.length;for(Qr.lastIndex=0;;){const o=Qr.exec(n),a=Qr.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){ca(e,c===void 0?new Xh(s,i,t):new qh(s,i,t));break}else{let f=e.map[s];f===void 0&&(f=new Yh(s),ca(e,f)),e=f}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),a=t.getUniformLocation(e,o.name);jh(o,a,this)}}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,a=e.length;o!==a;++o){const s=e[o],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function ua(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let $h=0;function Zh(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=r;a<o;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function Kh(i){const t=Gt.getPrimaries(Gt.workingColorSpace),e=Gt.getPrimaries(i);let n;switch(t===e?n="":t===Ri&&e===Ai?n="LinearDisplayP3ToLinearSRGB":t===Ai&&e===Ri&&(n="LinearSRGBToLinearDisplayP3"),i){case Ve:case Ei:return[n,"LinearTransferOETF"];case oe:case Tr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function da(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Zh(i.getShaderSource(t),a)}else return r}function Jh(i,t){const e=Kh(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qh(i,t){let e;switch(t){case kl:e="Linear";break;case Dl:e="Reinhard";break;case Ul:e="OptimizedCineon";break;case Il:e="ACESFilmic";break;case Nl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yi).join(`
`)}function ef(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(t,r),a=o.name;let s=1;o.type===i.FLOAT_MAT2&&(s=2),o.type===i.FLOAT_MAT3&&(s=3),o.type===i.FLOAT_MAT4&&(s=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:s}}return e}function yi(i){return i!==""}function ha(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(rf,sf)}const of=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sf(i,t){let e=Pt[t];if(e===void 0){const n=of.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const af=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pa(i){return i.replace(af,lf)}function lf(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ma(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===He&&(t="SHADOWMAP_TYPE_VSM"),t}function uf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Dn:case Un:t="ENVMAP_TYPE_CUBE";break;case Si:t="ENVMAP_TYPE_CUBE_UV";break}return t}function df(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Un:t="ENVMAP_MODE_REFRACTION";break}return t}function hf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pr:t="ENVMAP_BLENDING_MULTIPLY";break;case Ll:t="ENVMAP_BLENDING_MIX";break;case Pl:t="ENVMAP_BLENDING_ADD";break}return t}function ff(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pf(i,t,e,n){const r=i.getContext(),o=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=cf(e),c=uf(e),d=df(e),f=hf(e),h=ff(e),p=e.isWebGL2?"":tf(e),v=ef(o),_=r.createProgram();let m,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(yi).join(`
`),m.length>0&&(m+=`
`),u=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(yi).join(`
`),u.length>0&&(u+=`
`)):(m=[ma(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),u=[p,ma(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==en?"#define TONE_MAPPING":"",e.toneMapping!==en?Pt.tonemapping_pars_fragment:"",e.toneMapping!==en?Qh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,Jh("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yi).join(`
`)),a=to(a),a=ha(a,e),a=fa(a,e),s=to(s),s=ha(s,e),s=fa(s,e),a=pa(a),s=pa(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=y+m+a,M=y+u+s,S=ua(r,r.VERTEX_SHADER,g),R=ua(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,S),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const b=r.getProgramInfoLog(_).trim(),T=r.getShaderInfoLog(S).trim(),B=r.getShaderInfoLog(R).trim();let q=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,R);else{const P=da(r,S,"vertex"),G=da(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+P+`
`+G)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(T===""||B==="")&&(K=!1);K&&(this.diagnostics={runnable:q,programLog:b,vertexShader:{log:T,prefix:m},fragmentShader:{log:B,prefix:u}})}r.deleteShader(S),r.deleteShader(R);let C;this.getUniforms=function(){return C===void 0&&(C=new nr(r,_)),C};let U;return this.getAttributes=function(){return U===void 0&&(U=nf(r,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$h++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=R,this}let mf=0;class gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _f(t),e.set(t,n)),n}}class _f{constructor(t){this.id=mf++,this.code=t,this.usedTimes=0}}function vf(i,t,e,n,r,o,a){const s=new As,l=new gf,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,T,B,q,K){const P=q.fog,G=K.geometry,Y=b.isMeshStandardMaterial?q.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),Q=W&&W.mapping===Si?W.image.height:null,X=v[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const $=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,k=$!==void 0?$.length:0;let V=0;G.morphAttributes.position!==void 0&&(V=1),G.morphAttributes.normal!==void 0&&(V=2),G.morphAttributes.color!==void 0&&(V=3);let at,ct,dt,xt;if(X){const qt=Be[X];at=qt.vertexShader,ct=qt.fragmentShader}else at=b.vertexShader,ct=b.fragmentShader,l.update(b),dt=l.getVertexShaderID(b),xt=l.getFragmentShaderID(b);const F=i.getRenderTarget(),Z=K.isInstancedMesh===!0,_t=!!b.map,Ht=!!b.matcap,yt=!!W,D=!!b.aoMap,ae=!!b.lightMap,gt=!!b.bumpMap,kt=!!b.normalMap,Rt=!!b.displacementMap,Yt=!!b.emissiveMap,Ot=!!b.metalnessMap,It=!!b.roughnessMap,Wt=b.anisotropy>0,le=b.clearcoat>0,de=b.iridescence>0,E=b.sheen>0,x=b.transmission>0,O=Wt&&!!b.anisotropyMap,et=le&&!!b.clearcoatMap,J=le&&!!b.clearcoatNormalMap,nt=le&&!!b.clearcoatRoughnessMap,pt=de&&!!b.iridescenceMap,ot=de&&!!b.iridescenceThicknessMap,ut=E&&!!b.sheenColorMap,Mt=E&&!!b.sheenRoughnessMap,zt=!!b.specularMap,tt=!!b.specularColorMap,Vt=!!b.specularIntensityMap,Ct=x&&!!b.transmissionMap,St=x&&!!b.thicknessMap,bt=!!b.gradientMap,A=!!b.alphaMap,rt=b.alphaTest>0,it=!!b.alphaHash,ht=!!b.extensions,lt=!!G.attributes.uv1,j=!!G.attributes.uv2,mt=!!G.attributes.uv3;let Lt=en;return b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=i.toneMapping),{isWebGL2:d,shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:at,fragmentShader:ct,defines:b.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Z,instancingColor:Z&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ve,map:_t,matcap:Ht,envMap:yt,envMapMode:yt&&W.mapping,envMapCubeUVHeight:Q,aoMap:D,lightMap:ae,bumpMap:gt,normalMap:kt,displacementMap:h&&Rt,emissiveMap:Yt,normalMapObjectSpace:kt&&b.normalMapType===$l,normalMapTangentSpace:kt&&b.normalMapType===ds,metalnessMap:Ot,roughnessMap:It,anisotropy:Wt,anisotropyMap:O,clearcoat:le,clearcoatMap:et,clearcoatNormalMap:J,clearcoatRoughnessMap:nt,iridescence:de,iridescenceMap:pt,iridescenceThicknessMap:ot,sheen:E,sheenColorMap:ut,sheenRoughnessMap:Mt,specularMap:zt,specularColorMap:tt,specularIntensityMap:Vt,transmission:x,transmissionMap:Ct,thicknessMap:St,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Pn,alphaMap:A,alphaTest:rt,alphaHash:it,combine:b.combine,mapUv:_t&&_(b.map.channel),aoMapUv:D&&_(b.aoMap.channel),lightMapUv:ae&&_(b.lightMap.channel),bumpMapUv:gt&&_(b.bumpMap.channel),normalMapUv:kt&&_(b.normalMap.channel),displacementMapUv:Rt&&_(b.displacementMap.channel),emissiveMapUv:Yt&&_(b.emissiveMap.channel),metalnessMapUv:Ot&&_(b.metalnessMap.channel),roughnessMapUv:It&&_(b.roughnessMap.channel),anisotropyMapUv:O&&_(b.anisotropyMap.channel),clearcoatMapUv:et&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(b.sheenRoughnessMap.channel),specularMapUv:zt&&_(b.specularMap.channel),specularColorMapUv:tt&&_(b.specularColorMap.channel),specularIntensityMapUv:Vt&&_(b.specularIntensityMap.channel),transmissionMapUv:Ct&&_(b.transmissionMap.channel),thicknessMapUv:St&&_(b.thicknessMap.channel),alphaMapUv:A&&_(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(kt||Wt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:lt,vertexUv2s:j,vertexUv3s:mt,pointsUvs:K.isPoints===!0&&!!G.attributes.uv&&(_t||A),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:_t&&b.map.isVideoTexture===!0&&Gt.getTransfer(b.map.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ge,flipSided:b.side===be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ht&&b.extensions.derivatives===!0,extensionFragDepth:ht&&b.extensions.fragDepth===!0,extensionDrawBuffers:ht&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function u(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)T.push(B),T.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(y(T,b),g(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function g(b,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),b.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),b.push(s.mask)}function M(b){const T=v[b.type];let B;if(T){const q=Be[T];B=Fc.clone(q.uniforms)}else B=b.uniforms;return B}function S(b,T){let B;for(let q=0,K=c.length;q<K;q++){const P=c[q];if(P.cacheKey===T){B=P,++B.usedTimes;break}}return B===void 0&&(B=new pf(i,T,b,o),c.push(B)),B}function R(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:S,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:U}}function xf(){let i=new WeakMap;function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function e(o){i.delete(o)}function n(o,a,s){i.get(o)[a]=s}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function bf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ga(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _a(){const i=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function a(f,h,p,v,_,m){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},i[t]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=_,u.group=m),t++,u}function s(f,h,p,v,_,m){const u=a(f,h,p,v,_,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):e.push(u)}function l(f,h,p,v,_,m){const u=a(f,h,p,v,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):e.unshift(u)}function c(f,h){e.length>1&&e.sort(f||bf),n.length>1&&n.sort(h||ga),r.length>1&&r.sort(h||ga)}function d(){for(let f=t,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:s,unshift:l,finish:d,sort:c}}function yf(){let i=new WeakMap;function t(n,r){const o=i.get(n);let a;return o===void 0?(a=new _a,i.set(n,[a])):r>=o.length?(a=new _a,o.push(a)):a=o[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Mf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sf=0;function Ef(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tf(i,t){const e=new wf,n=Mf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new L);const o=new L,a=new jt,s=new jt;function l(d,f){let h=0,p=0,v=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,m=0,u=0,y=0,g=0,M=0,S=0,R=0,C=0,U=0,b=0;d.sort(Ef);const T=f===!0?Math.PI:1;for(let q=0,K=d.length;q<K;q++){const P=d[q],G=P.color,Y=P.intensity,W=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*Y*T,p+=G.g*Y*T,v+=G.b*Y*T;else if(P.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(P.sh.coefficients[X],Y);b++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const $=P.shadow,k=n.get(P);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.directionalShadow[_]=k,r.directionalShadowMap[_]=Q,r.directionalShadowMatrix[_]=P.shadow.matrix,M++}r.directional[_]=X,_++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(Y*T),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,r.spot[u]=X;const $=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,$.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[u]=$.matrix,P.castShadow){const k=n.get(P);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.spotShadow[u]=k,r.spotShadowMap[u]=Q,R++}u++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(G).multiplyScalar(Y),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=X,y++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,k=n.get(P);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,r.pointShadow[m]=k,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=P.shadow.matrix,S++}r.point[m]=X,m++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Y*T),X.groundColor.copy(P.groundColor).multiplyScalar(Y*T),r.hemi[g]=X,g++}}y>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=st.LTC_FLOAT_1,r.rectAreaLTC2=st.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=st.LTC_HALF_1,r.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==u||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==M||B.numPointShadows!==S||B.numSpotShadows!==R||B.numSpotMaps!==C||B.numLightProbes!==b)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=y,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=R+C-U,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=b,B.directionalLength=_,B.pointLength=m,B.spotLength=u,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=M,B.numPointShadows=S,B.numSpotShadows=R,B.numSpotMaps=C,B.numLightProbes=b,r.version=Sf++)}function c(d,f){let h=0,p=0,v=0,_=0,m=0;const u=f.matrixWorldInverse;for(let y=0,g=d.length;y<g;y++){const M=d[y];if(M.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(u),h++}else if(M.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(u),s.identity(),a.copy(M.matrixWorld),a.premultiply(u),s.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),_++}else if(M.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function va(i,t){const e=new Tf(i,t),n=[],r=[];function o(){n.length=0,r.length=0}function a(f){n.push(f)}function s(f){r.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Af(i,t){let e=new WeakMap;function n(o,a=0){const s=e.get(o);let l;return s===void 0?(l=new va(i,t),e.set(o,[l])):a>=s.length?(l=new va(i,t),s.push(l)):l=s[a],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class Rf extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cf extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kf(i,t,e){let n=new jr;const r=new At,o=new At,a=new ne,s=new Rf({depthPacking:jl}),l=new Cf,c={},d=e.maxTextureSize,f={[Qe]:be,[be]:Qe,[Ge]:Ge},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Lf,fragmentShader:Pf}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ce;v.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let u=this.type;this.render=function(S,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const U=i.getRenderTarget(),b=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),B=i.state;B.setBlending(tn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=u!==He&&this.type===He,K=u===He&&this.type!==He;for(let P=0,G=S.length;P<G;P++){const Y=S[P],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const Q=W.getFrameExtents();if(r.multiply(Q),o.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/Q.x),r.x=o.x*Q.x,W.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/Q.y),r.y=o.y*Q.y,W.mapSize.y=o.y)),W.map===null||q===!0||K===!0){const $=this.type!==He?{minFilter:he,magFilter:he}:{};W.map!==null&&W.map.dispose(),W.map=new mn(r.x,r.y,$),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const X=W.getViewportCount();for(let $=0;$<X;$++){const k=W.getViewport($);a.set(o.x*k.x,o.y*k.y,o.x*k.z,o.y*k.w),B.viewport(a),W.updateMatrices(Y,$),n=W.getFrustum(),M(R,C,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===He&&y(W,C),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(U,b,T)};function y(S,R){const C=t.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mn(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,C,h,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,C,p,_,null)}function g(S,R,C,U){let b=null;const T=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)b=T;else if(b=C.isPointLight===!0?l:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=b.uuid,q=R.uuid;let K=c[B];K===void 0&&(K={},c[B]=K);let P=K[q];P===void 0&&(P=b.clone(),K[q]=P),b=P}if(b.visible=R.visible,b.wireframe=R.wireframe,U===He?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=C}return b}function M(S,R,C,U,b){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===He)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const q=t.update(S),K=S.material;if(Array.isArray(K)){const P=q.groups;for(let G=0,Y=P.length;G<Y;G++){const W=P[G],Q=K[W.materialIndex];if(Q&&Q.visible){const X=g(S,Q,U,b);i.renderBufferDirect(C,null,q,X,S,W)}}}else if(K.visible){const P=g(S,K,U,b);i.renderBufferDirect(C,null,q,P,S,null)}}const B=S.children;for(let q=0,K=B.length;q<K;q++)M(B[q],R,C,U,b)}}function Df(i,t,e){const n=e.isWebGL2;function r(){let A=!1;const rt=new ne;let it=null;const ht=new ne(0,0,0,0);return{setMask:function(lt){it!==lt&&!A&&(i.colorMask(lt,lt,lt,lt),it=lt)},setLocked:function(lt){A=lt},setClear:function(lt,j,mt,Lt,ge){ge===!0&&(lt*=Lt,j*=Lt,mt*=Lt),rt.set(lt,j,mt,Lt),ht.equals(rt)===!1&&(i.clearColor(lt,j,mt,Lt),ht.copy(rt))},reset:function(){A=!1,it=null,ht.set(-1,0,0,0)}}}function o(){let A=!1,rt=null,it=null,ht=null;return{setTest:function(lt){lt?F(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(lt){rt!==lt&&!A&&(i.depthMask(lt),rt=lt)},setFunc:function(lt){if(it!==lt){switch(lt){case Ml:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case Al:i.depthFunc(i.GEQUAL);break;case Rl:i.depthFunc(i.GREATER);break;case Cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=lt}},setLocked:function(lt){A=lt},setClear:function(lt){ht!==lt&&(i.clearDepth(lt),ht=lt)},reset:function(){A=!1,rt=null,it=null,ht=null}}}function a(){let A=!1,rt=null,it=null,ht=null,lt=null,j=null,mt=null,Lt=null,ge=null;return{setTest:function(qt){A||(qt?F(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(qt){rt!==qt&&!A&&(i.stencilMask(qt),rt=qt)},setFunc:function(qt,ze,_e){(it!==qt||ht!==ze||lt!==_e)&&(i.stencilFunc(qt,ze,_e),it=qt,ht=ze,lt=_e)},setOp:function(qt,ze,_e){(j!==qt||mt!==ze||Lt!==_e)&&(i.stencilOp(qt,ze,_e),j=qt,mt=ze,Lt=_e)},setLocked:function(qt){A=qt},setClear:function(qt){ge!==qt&&(i.clearStencil(qt),ge=qt)},reset:function(){A=!1,rt=null,it=null,ht=null,lt=null,j=null,mt=null,Lt=null,ge=null}}}const s=new r,l=new o,c=new a,d=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,_=[],m=null,u=!1,y=null,g=null,M=null,S=null,R=null,C=null,U=null,b=!1,T=null,B=null,q=null,K=null,P=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=W>=2);let X=null,$={};const k=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),at=new ne().fromArray(k),ct=new ne().fromArray(V);function dt(A,rt,it,ht){const lt=new Uint8Array(4),j=i.createTexture();i.bindTexture(A,j),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<it;mt++)n&&(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)?i.texImage3D(rt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(rt+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return j}const xt={};xt[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xt[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),F(i.DEPTH_TEST),l.setFunc(fr),Rt(!1),Yt(wo),F(i.CULL_FACE),gt(tn);function F(A){h[A]!==!0&&(i.enable(A),h[A]=!0)}function Z(A){h[A]!==!1&&(i.disable(A),h[A]=!1)}function _t(A,rt){return p[A]!==rt?(i.bindFramebuffer(A,rt),p[A]=rt,n&&(A===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=rt),A===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=rt)),!0):!1}function Ht(A,rt){let it=_,ht=!1;if(A)if(it=v.get(rt),it===void 0&&(it=[],v.set(rt,it)),A.isWebGLMultipleRenderTargets){const lt=A.texture;if(it.length!==lt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let j=0,mt=lt.length;j<mt;j++)it[j]=i.COLOR_ATTACHMENT0+j;it.length=lt.length,ht=!0}}else it[0]!==i.COLOR_ATTACHMENT0&&(it[0]=i.COLOR_ATTACHMENT0,ht=!0);else it[0]!==i.BACK&&(it[0]=i.BACK,ht=!0);ht&&(e.isWebGL2?i.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function yt(A){return m!==A?(i.useProgram(A),m=A,!0):!1}const D={[kn]:i.FUNC_ADD,[hl]:i.FUNC_SUBTRACT,[fl]:i.FUNC_REVERSE_SUBTRACT};if(n)D[Ao]=i.MIN,D[Ro]=i.MAX;else{const A=t.get("EXT_blend_minmax");A!==null&&(D[Ao]=A.MIN_EXT,D[Ro]=A.MAX_EXT)}const ae={[pl]:i.ZERO,[ml]:i.ONE,[gl]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[wl]:i.SRC_ALPHA_SATURATE,[bl]:i.DST_COLOR,[vl]:i.DST_ALPHA,[_l]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[yl]:i.ONE_MINUS_DST_COLOR,[xl]:i.ONE_MINUS_DST_ALPHA};function gt(A,rt,it,ht,lt,j,mt,Lt){if(A===tn){u===!0&&(Z(i.BLEND),u=!1);return}if(u===!1&&(F(i.BLEND),u=!0),A!==dl){if(A!==y||Lt!==b){if((g!==kn||R!==kn)&&(i.blendEquation(i.FUNC_ADD),g=kn,R=kn),Lt)switch(A){case Pn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.ONE,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case To:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}M=null,S=null,C=null,U=null,y=A,b=Lt}return}lt=lt||rt,j=j||it,mt=mt||ht,(rt!==g||lt!==R)&&(i.blendEquationSeparate(D[rt],D[lt]),g=rt,R=lt),(it!==M||ht!==S||j!==C||mt!==U)&&(i.blendFuncSeparate(ae[it],ae[ht],ae[j],ae[mt]),M=it,S=ht,C=j,U=mt),y=A,b=!1}function kt(A,rt){A.side===Ge?Z(i.CULL_FACE):F(i.CULL_FACE);let it=A.side===be;rt&&(it=!it),Rt(it),A.blending===Pn&&A.transparent===!1?gt(tn):gt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),s.setMask(A.colorWrite);const ht=A.stencilWrite;c.setTest(ht),ht&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),It(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(A){T!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),T=A)}function Yt(A){A!==ll?(F(i.CULL_FACE),A!==B&&(A===wo?i.cullFace(i.BACK):A===cl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),B=A}function Ot(A){A!==q&&(Y&&i.lineWidth(A),q=A)}function It(A,rt,it){A?(F(i.POLYGON_OFFSET_FILL),(K!==rt||P!==it)&&(i.polygonOffset(rt,it),K=rt,P=it)):Z(i.POLYGON_OFFSET_FILL)}function Wt(A){A?F(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function le(A){A===void 0&&(A=i.TEXTURE0+G-1),X!==A&&(i.activeTexture(A),X=A)}function de(A,rt,it){it===void 0&&(X===null?it=i.TEXTURE0+G-1:it=X);let ht=$[it];ht===void 0&&(ht={type:void 0,texture:void 0},$[it]=ht),(ht.type!==A||ht.texture!==rt)&&(X!==it&&(i.activeTexture(it),X=it),i.bindTexture(A,rt||xt[A]),ht.type=A,ht.texture=rt)}function E(){const A=$[X];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function x(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function O(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function tt(A){at.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),at.copy(A))}function Vt(A){ct.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),ct.copy(A))}function Ct(A,rt){let it=f.get(rt);it===void 0&&(it=new WeakMap,f.set(rt,it));let ht=it.get(A);ht===void 0&&(ht=i.getUniformBlockIndex(rt,A.name),it.set(A,ht))}function St(A,rt){const ht=f.get(rt).get(A);d.get(rt)!==ht&&(i.uniformBlockBinding(rt,ht,A.__bindingPointIndex),d.set(rt,ht))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,$={},p={},v=new WeakMap,_=[],m=null,u=!1,y=null,g=null,M=null,S=null,R=null,C=null,U=null,b=!1,T=null,B=null,q=null,K=null,P=null,at.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:F,disable:Z,bindFramebuffer:_t,drawBuffers:Ht,useProgram:yt,setBlending:gt,setMaterial:kt,setFlipSided:Rt,setCullFace:Yt,setLineWidth:Ot,setPolygonOffset:It,setScissorTest:Wt,activeTexture:le,bindTexture:de,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Mt,texImage3D:zt,updateUBOMapping:Ct,uniformBlockBinding:St,texStorage2D:ot,texStorage3D:ut,texSubImage2D:et,texSubImage3D:J,compressedTexSubImage2D:nt,compressedTexSubImage3D:pt,scissor:tt,viewport:Vt,reset:bt}}function Uf(i,t,e,n,r,o,a){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,x){return u?new OffscreenCanvas(E,x):Pi("canvas")}function g(E,x,O,et){let J=1;if((E.width>et||E.height>et)&&(J=et/Math.max(E.width,E.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const nt=x?Li:Math.floor,pt=nt(J*E.width),ot=nt(J*E.height);_===void 0&&(_=y(pt,ot));const ut=O?y(pt,ot):_;return ut.width=pt,ut.height=ot,ut.getContext("2d").drawImage(E,0,0,pt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pt+"x"+ot+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return Lr(E.width)&&Lr(E.height)}function S(E){return s?!1:E.wrapS!==ke||E.wrapT!==ke||E.minFilter!==he&&E.minFilter!==Te}function R(E,x){return E.generateMipmaps&&x&&E.minFilter!==he&&E.minFilter!==Te}function C(E){i.generateMipmap(E)}function U(E,x,O,et,J=!1){if(s===!1)return x;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let nt=x;if(x===i.RED&&(O===i.FLOAT&&(nt=i.R32F),O===i.HALF_FLOAT&&(nt=i.R16F),O===i.UNSIGNED_BYTE&&(nt=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(nt=i.R8UI),O===i.UNSIGNED_SHORT&&(nt=i.R16UI),O===i.UNSIGNED_INT&&(nt=i.R32UI),O===i.BYTE&&(nt=i.R8I),O===i.SHORT&&(nt=i.R16I),O===i.INT&&(nt=i.R32I)),x===i.RG&&(O===i.FLOAT&&(nt=i.RG32F),O===i.HALF_FLOAT&&(nt=i.RG16F),O===i.UNSIGNED_BYTE&&(nt=i.RG8)),x===i.RGBA){const pt=J?Ti:Gt.getTransfer(et);O===i.FLOAT&&(nt=i.RGBA32F),O===i.HALF_FLOAT&&(nt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(nt=pt===Xt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(E,x,O){return R(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==he&&E.minFilter!==Te?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function T(E){return E===he||E===ko||E===xr?i.NEAREST:i.LINEAR}function B(E){const x=E.target;x.removeEventListener("dispose",B),K(x),x.isVideoTexture&&v.delete(x)}function q(E){const x=E.target;x.removeEventListener("dispose",q),G(x)}function K(E){const x=n.get(E);if(x.__webglInit===void 0)return;const O=E.source,et=m.get(O);if(et){const J=et[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(E),Object.keys(et).length===0&&m.delete(O)}n.remove(E)}function P(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const O=E.source,et=m.get(O);delete et[x.__cacheKey],a.memory.textures--}function G(E){const x=E.texture,O=n.get(E),et=n.get(x);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let nt=0;nt<O.__webglFramebuffer[J].length;nt++)i.deleteFramebuffer(O.__webglFramebuffer[J][nt]);else i.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)i.deleteFramebuffer(O.__webglFramebuffer[J]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,nt=x.length;J<nt;J++){const pt=n.get(x[J]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(x[J])}n.remove(x),n.remove(E)}let Y=0;function W(){Y=0}function Q(){const E=Y;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Y+=1,E}function X(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function $(E,x){const O=n.get(E);if(E.isVideoTexture&&le(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,E,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function k(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){_t(O,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function V(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){_t(O,E,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function at(E,x){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Ht(O,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const ct={[_r]:i.REPEAT,[ke]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},dt={[he]:i.NEAREST,[ko]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Te]:i.LINEAR,[Fl]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},xt={[Kl]:i.NEVER,[rc]:i.ALWAYS,[Jl]:i.LESS,[tc]:i.LEQUAL,[Ql]:i.EQUAL,[ic]:i.GEQUAL,[ec]:i.GREATER,[nc]:i.NOTEQUAL};function F(E,x,O){if(O?(i.texParameteri(E,i.TEXTURE_WRAP_S,ct[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ct[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ct[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,dt[x.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==ke||x.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(x.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==he&&x.minFilter!==Te&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===he||x.minFilter!==xr&&x.minFilter!==ui||x.type===on&&t.has("OES_texture_float_linear")===!1||s===!1&&x.type===di&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Z(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",B));const et=x.source;let J=m.get(et);J===void 0&&(J={},m.set(et,J));const nt=X(x);if(nt!==E.__cacheKey){J[nt]===void 0&&(J[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[nt].usedTimes++;const pt=J[E.__cacheKey];pt!==void 0&&(J[E.__cacheKey].usedTimes--,pt.usedTimes===0&&P(x)),E.__cacheKey=nt,E.__webglTexture=J[nt].texture}return O}function _t(E,x,O){let et=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=i.TEXTURE_3D);const J=Z(E,x),nt=x.source;e.bindTexture(et,E.__webglTexture,i.TEXTURE0+O);const pt=n.get(nt);if(nt.version!==pt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const ot=Gt.getPrimaries(Gt.workingColorSpace),ut=x.colorSpace===Ae?null:Gt.getPrimaries(x.colorSpace),Mt=x.colorSpace===Ae||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const zt=S(x)&&M(x.image)===!1;let tt=g(x.image,zt,!1,d);tt=de(x,tt);const Vt=M(tt)||s,Ct=o.convert(x.format,x.colorSpace);let St=o.convert(x.type),bt=U(x.internalFormat,Ct,St,x.colorSpace,x.isVideoTexture);F(et,x,Vt);let A;const rt=x.mipmaps,it=s&&x.isVideoTexture!==!0,ht=pt.__version===void 0||J===!0,lt=b(x,tt,Vt);if(x.isDepthTexture)bt=i.DEPTH_COMPONENT,s?x.type===on?bt=i.DEPTH_COMPONENT32F:x.type===rn?bt=i.DEPTH_COMPONENT24:x.type===dn?bt=i.DEPTH24_STENCIL8:bt=i.DEPTH_COMPONENT16:x.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===hn&&bt===i.DEPTH_COMPONENT&&x.type!==br&&x.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=rn,St=o.convert(x.type)),x.format===In&&bt===i.DEPTH_COMPONENT&&(bt=i.DEPTH_STENCIL,x.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=dn,St=o.convert(x.type))),ht&&(it?e.texStorage2D(i.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,Ct,St,null));else if(x.isDataTexture)if(rt.length>0&&Vt){it&&ht&&e.texStorage2D(i.TEXTURE_2D,lt,bt,rt[0].width,rt[0].height);for(let j=0,mt=rt.length;j<mt;j++)A=rt[j],it?e.texSubImage2D(i.TEXTURE_2D,j,0,0,A.width,A.height,Ct,St,A.data):e.texImage2D(i.TEXTURE_2D,j,bt,A.width,A.height,0,Ct,St,A.data);x.generateMipmaps=!1}else it?(ht&&e.texStorage2D(i.TEXTURE_2D,lt,bt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,Ct,St,tt.data)):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,Ct,St,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){it&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,bt,rt[0].width,rt[0].height,tt.depth);for(let j=0,mt=rt.length;j<mt;j++)A=rt[j],x.format!==De?Ct!==null?it?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,A.width,A.height,tt.depth,Ct,A.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,bt,A.width,A.height,tt.depth,0,A.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,A.width,A.height,tt.depth,Ct,St,A.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,bt,A.width,A.height,tt.depth,0,Ct,St,A.data)}else{it&&ht&&e.texStorage2D(i.TEXTURE_2D,lt,bt,rt[0].width,rt[0].height);for(let j=0,mt=rt.length;j<mt;j++)A=rt[j],x.format!==De?Ct!==null?it?e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,A.width,A.height,Ct,A.data):e.compressedTexImage2D(i.TEXTURE_2D,j,bt,A.width,A.height,0,A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?e.texSubImage2D(i.TEXTURE_2D,j,0,0,A.width,A.height,Ct,St,A.data):e.texImage2D(i.TEXTURE_2D,j,bt,A.width,A.height,0,Ct,St,A.data)}else if(x.isDataArrayTexture)it?(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Ct,St,tt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,Ct,St,tt.data);else if(x.isData3DTexture)it?(ht&&e.texStorage3D(i.TEXTURE_3D,lt,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Ct,St,tt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,Ct,St,tt.data);else if(x.isFramebufferTexture){if(ht)if(it)e.texStorage2D(i.TEXTURE_2D,lt,bt,tt.width,tt.height);else{let j=tt.width,mt=tt.height;for(let Lt=0;Lt<lt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,bt,j,mt,0,Ct,St,null),j>>=1,mt>>=1}}else if(rt.length>0&&Vt){it&&ht&&e.texStorage2D(i.TEXTURE_2D,lt,bt,rt[0].width,rt[0].height);for(let j=0,mt=rt.length;j<mt;j++)A=rt[j],it?e.texSubImage2D(i.TEXTURE_2D,j,0,0,Ct,St,A):e.texImage2D(i.TEXTURE_2D,j,bt,Ct,St,A);x.generateMipmaps=!1}else it?(ht&&e.texStorage2D(i.TEXTURE_2D,lt,bt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,St,tt)):e.texImage2D(i.TEXTURE_2D,0,bt,Ct,St,tt);R(x,Vt)&&C(et),pt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ht(E,x,O){if(x.image.length!==6)return;const et=Z(E,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const nt=n.get(J);if(J.version!==nt.__version||et===!0){e.activeTexture(i.TEXTURE0+O);const pt=Gt.getPrimaries(Gt.workingColorSpace),ot=x.colorSpace===Ae?null:Gt.getPrimaries(x.colorSpace),ut=x.colorSpace===Ae||pt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,zt=x.image[0]&&x.image[0].isDataTexture,tt=[];for(let j=0;j<6;j++)!Mt&&!zt?tt[j]=g(x.image[j],!1,!0,c):tt[j]=zt?x.image[j].image:x.image[j],tt[j]=de(x,tt[j]);const Vt=tt[0],Ct=M(Vt)||s,St=o.convert(x.format,x.colorSpace),bt=o.convert(x.type),A=U(x.internalFormat,St,bt,x.colorSpace),rt=s&&x.isVideoTexture!==!0,it=nt.__version===void 0||et===!0;let ht=b(x,Vt,Ct);F(i.TEXTURE_CUBE_MAP,x,Ct);let lt;if(Mt){rt&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,A,Vt.width,Vt.height);for(let j=0;j<6;j++){lt=tt[j].mipmaps;for(let mt=0;mt<lt.length;mt++){const Lt=lt[mt];x.format!==De?St!==null?rt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,Lt.width,Lt.height,St,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,A,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,Lt.width,Lt.height,St,bt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,A,Lt.width,Lt.height,0,St,bt,Lt.data)}}}else{lt=x.mipmaps,rt&&it&&(lt.length>0&&ht++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,A,tt[0].width,tt[0].height));for(let j=0;j<6;j++)if(zt){rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,tt[j].width,tt[j].height,St,bt,tt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,A,tt[j].width,tt[j].height,0,St,bt,tt[j].data);for(let mt=0;mt<lt.length;mt++){const ge=lt[mt].image[j].image;rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,ge.width,ge.height,St,bt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,A,ge.width,ge.height,0,St,bt,ge.data)}}else{rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St,bt,tt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,A,St,bt,tt[j]);for(let mt=0;mt<lt.length;mt++){const Lt=lt[mt];rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,St,bt,Lt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,A,St,bt,Lt.image[j])}}}R(x,Ct)&&C(i.TEXTURE_CUBE_MAP),nt.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function yt(E,x,O,et,J,nt){const pt=o.convert(O.format,O.colorSpace),ot=o.convert(O.type),ut=U(O.internalFormat,pt,ot,O.colorSpace);if(!n.get(x).__hasExternalTextures){const zt=Math.max(1,x.width>>nt),tt=Math.max(1,x.height>>nt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,nt,ut,zt,tt,x.depth,0,pt,ot,null):e.texImage2D(J,nt,ut,zt,tt,0,pt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Wt(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,n.get(O).__webglTexture,0,It(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,J,n.get(O).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(E,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let et=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||Wt(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===on?et=i.DEPTH_COMPONENT32F:J.type===rn&&(et=i.DEPTH_COMPONENT24));const nt=It(x);Wt(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,et,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,et,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const et=It(x);O&&Wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,x.width,x.height):Wt(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const et=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<et.length;J++){const nt=et[J],pt=o.convert(nt.format,nt.colorSpace),ot=o.convert(nt.type),ut=U(nt.internalFormat,pt,ot,nt.colorSpace),Mt=It(x);O&&Wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ut,x.width,x.height):Wt(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const et=n.get(x.depthTexture).__webglTexture,J=It(x);if(x.depthTexture.format===hn)Wt(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===In)Wt(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function gt(E){const x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ae(x.__webglFramebuffer,E)}else if(O){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]=i.createRenderbuffer(),D(x.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),D(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,x,O){const et=n.get(E);x!==void 0&&yt(et.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&gt(E)}function Rt(E){const x=E.texture,O=n.get(E),et=n.get(x);E.addEventListener("dispose",q),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=x.version,a.memory.textures++);const J=E.isWebGLCubeRenderTarget===!0,nt=E.isWebGLMultipleRenderTargets===!0,pt=M(E)||s;if(J){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(s&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)O.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else O.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(s&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)O.__webglFramebuffer[ot]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(nt)if(r.drawBuffers){const ot=E.texture;for(let ut=0,Mt=ot.length;ut<Mt;ut++){const zt=n.get(ot[ut]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Wt(E)===!1){const ot=nt?x:[x];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){const Mt=ot[ut];O.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const zt=o.convert(Mt.format,Mt.colorSpace),tt=o.convert(Mt.type),Vt=U(Mt.internalFormat,zt,tt,Mt.colorSpace,E.isXRRenderTarget===!0),Ct=It(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Vt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),D(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),F(i.TEXTURE_CUBE_MAP,x,pt);for(let ot=0;ot<6;ot++)if(s&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)yt(O.__webglFramebuffer[ot][ut],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else yt(O.__webglFramebuffer[ot],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);R(x,pt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ot=E.texture;for(let ut=0,Mt=ot.length;ut<Mt;ut++){const zt=ot[ut],tt=n.get(zt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),F(i.TEXTURE_2D,zt,pt),yt(O.__webglFramebuffer,E,zt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),R(zt,pt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?ot=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,et.__webglTexture),F(ot,x,pt),s&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)yt(O.__webglFramebuffer[ut],E,x,i.COLOR_ATTACHMENT0,ot,ut);else yt(O.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ot,0);R(x,pt)&&C(ot),e.unbindTexture()}E.depthBuffer&&gt(E)}function Yt(E){const x=M(E)||s,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,J=O.length;et<J;et++){const nt=O[et];if(R(nt,x)){const pt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ot=n.get(nt).__webglTexture;e.bindTexture(pt,ot),C(pt),e.unbindTexture()}}}function Ot(E){if(s&&E.samples>0&&Wt(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,et=E.height;let J=i.COLOR_BUFFER_BIT;const nt=[],pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(E),ut=E.isWebGLMultipleRenderTargets===!0;if(ut)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){nt.push(i.COLOR_ATTACHMENT0+Mt),E.depthBuffer&&nt.push(pt);const zt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(zt===!1&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ut&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[Mt]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pt])),ut){const tt=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,O,et,0,0,O,et,J,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[Mt]);const zt=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function It(E){return Math.min(f,E.samples)}function Wt(E){const x=n.get(E);return s&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(E){const x=a.render.frame;v.get(E)!==x&&(v.set(E,x),E.update())}function de(E,x){const O=E.colorSpace,et=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Rr||O!==Ve&&O!==Ae&&(Gt.getTransfer(O)===Xt?s===!1?t.has("EXT_sRGB")===!0&&et===De?(E.format=Rr,E.minFilter=Te,E.generateMipmaps=!1):x=bs.sRGBToLinear(x):(et!==De||J!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=at,this.rebindTextures=kt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Wt}function If(i,t,e){const n=e.isWebGL2;function r(o,a=Ae){let s;const l=Gt.getTransfer(a);if(o===nn)return i.UNSIGNED_BYTE;if(o===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(o===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Ol)return i.BYTE;if(o===Bl)return i.SHORT;if(o===br)return i.UNSIGNED_SHORT;if(o===Do)return i.INT;if(o===rn)return i.UNSIGNED_INT;if(o===on)return i.FLOAT;if(o===di)return n?i.HALF_FLOAT:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===zl)return i.ALPHA;if(o===De)return i.RGBA;if(o===Hl)return i.LUMINANCE;if(o===Gl)return i.LUMINANCE_ALPHA;if(o===hn)return i.DEPTH_COMPONENT;if(o===In)return i.DEPTH_STENCIL;if(o===Rr)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===Vl)return i.RED;if(o===No)return i.RED_INTEGER;if(o===Wl)return i.RG;if(o===Fo)return i.RG_INTEGER;if(o===Oo)return i.RGBA_INTEGER;if(o===yr||o===wr||o===Mr||o===Sr)if(l===Xt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Mr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Bo||o===zo||o===Ho||o===Go)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===Bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Xl)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Vo||o===Wo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(o===Vo)return l===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===Wo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Xo||o===qo||o===Yo||o===jo||o===$o||o===Zo||o===Ko||o===Jo||o===Qo||o===ts||o===es||o===ns||o===is||o===rs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(o===Xo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===qo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Yo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===jo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===$o)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Zo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Ko)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Jo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Qo)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ts)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===es)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===ns)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===is)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===rs)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Er||o===os||o===ss)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(o===Er)return l===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===os)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===ss)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===ql||o===as||o===ls||o===cs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(o===Er)return s.COMPRESSED_RED_RGTC1_EXT;if(o===as)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ls)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===cs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===dn?n?i.UNSIGNED_INT_24_8:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class Nf extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ir extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ff={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Of extends ye{constructor(t,e,n,r,o,a,s,l,c,d){if(d=d!==void 0?d:hn,d!==hn&&d!==In)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===hn&&(n=rn),n===void 0&&d===In&&(n=dn),super(null,r,o,a,s,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:he,this.minFilter=l!==void 0?l:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bf extends pn{constructor(t,e){super();const n=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,v=null;const _=e.getContextAttributes();let m=null,u=null;const y=[],g=[],M=new Le;M.layers.enable(1),M.viewport=new ne;const S=new Le;S.layers.enable(2),S.viewport=new ne;const R=[M,S],C=new Nf;C.layers.enable(1),C.layers.enable(2);let U=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=y[k];return V===void 0&&(V=new eo,y[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=y[k];return V===void 0&&(V=new eo,y[k]=V),V.getGripSpace()},this.getHand=function(k){let V=y[k];return V===void 0&&(V=new eo,y[k]=V),V.getHandSpace()};function T(k){const V=g.indexOf(k.inputSource);if(V===-1)return;const at=y[V];at!==void 0&&(at.update(k.inputSource,k.frame,c||a),at.dispatchEvent({type:k.type,data:k.inputSource}))}function B(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",q);for(let k=0;k<y.length;k++){const V=g[k];V!==null&&(g[k]=null,y[k].disconnect(V))}U=null,b=null,t.setRenderTarget(m),p=null,h=null,f=null,r=null,u=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",B),r.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,e,V),r.updateRenderState({baseLayer:p}),u=new mn(p.framebufferWidth,p.framebufferHeight,{format:De,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let V=null,at=null,ct=null;_.depth&&(ct=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=_.stencil?In:hn,at=_.stencil?dn:rn);const dt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:o};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(dt),r.updateRenderState({layers:[h]}),u=new mn(h.textureWidth,h.textureHeight,{format:De,type:nn,depthTexture:new Of(h.textureWidth,h.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const xt=t.properties.get(u);xt.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(k){for(let V=0;V<k.removed.length;V++){const at=k.removed[V],ct=g.indexOf(at);ct>=0&&(g[ct]=null,y[ct].disconnect(at))}for(let V=0;V<k.added.length;V++){const at=k.added[V];let ct=g.indexOf(at);if(ct===-1){for(let xt=0;xt<y.length;xt++)if(xt>=g.length){g.push(at),ct=xt;break}else if(g[xt]===null){g[xt]=at,ct=xt;break}if(ct===-1)break}const dt=y[ct];dt&&dt.connect(at)}}const K=new L,P=new L;function G(k,V,at){K.setFromMatrixPosition(V.matrixWorld),P.setFromMatrixPosition(at.matrixWorld);const ct=K.distanceTo(P),dt=V.projectionMatrix.elements,xt=at.projectionMatrix.elements,F=dt[14]/(dt[10]-1),Z=dt[14]/(dt[10]+1),_t=(dt[9]+1)/dt[5],Ht=(dt[9]-1)/dt[5],yt=(dt[8]-1)/dt[0],D=(xt[8]+1)/xt[0],ae=F*yt,gt=F*D,kt=ct/(-yt+D),Rt=kt*-yt;V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Rt),k.translateZ(kt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Yt=F+kt,Ot=Z+kt,It=ae-Rt,Wt=gt+(ct-Rt),le=_t*Z/Ot*Yt,de=Ht*Z/Ot*Yt;k.projectionMatrix.makePerspective(It,Wt,le,de,Yt,Ot),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;C.near=S.near=M.near=k.near,C.far=S.far=M.far=k.far,(U!==C.near||b!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,b=C.far);const V=k.parent,at=C.cameras;Y(C,V);for(let ct=0;ct<at.length;ct++)Y(at[ct],V);at.length===2?G(C,M,S):C.projectionMatrix.copy(M.projectionMatrix),W(k,C,V)};function W(k,V,at){at===null?k.matrix.copy(V.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(V.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(V.projectionMatrix),k.projectionMatrixInverse.copy(V.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=fi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let Q=null;function X(k,V){if(d=V.getViewerPose(c||a),v=V,d!==null){const at=d.views;p!==null&&(t.setRenderTargetFramebuffer(u,p.framebuffer),t.setRenderTarget(u));let ct=!1;at.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let dt=0;dt<at.length;dt++){const xt=at[dt];let F=null;if(p!==null)F=p.getViewport(xt);else{const _t=f.getViewSubImage(h,xt);F=_t.viewport,dt===0&&(t.setRenderTargetTextures(u,_t.colorTexture,h.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(u))}let Z=R[dt];Z===void 0&&(Z=new Le,Z.layers.enable(dt),Z.viewport=new ne,R[dt]=Z),Z.matrix.fromArray(xt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(xt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(F.x,F.y,F.width,F.height),dt===0&&(C.matrix.copy(Z.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(Z)}}for(let at=0;at<y.length;at++){const ct=g[at],dt=y[at];ct!==null&&dt!==void 0&&dt.update(ct,V,c||a)}Q&&Q(k,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),v=null}const $=new Xs;$.setAnimationLoop(X),this.setAnimationLoop=function(k){Q=k},this.dispose=function(){}}}function zf(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Gs(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,y,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),f(m,u)):u.isMeshPhongMaterial?(o(m,u),d(m,u)):u.isMeshStandardMaterial?(o(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(o(m,u),v(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),_(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&s(m,u)):u.isPointsMaterial?l(m,u,y,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===be&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===be&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=t.get(u).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const g=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,e(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function s(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=g*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),t.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===be&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const y=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hf(i,t,e,n){let r={},o={},a=[];const s=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){const M=g.program;n.uniformBlockBinding(y,M)}function c(y,g){let M=r[y.id];M===void 0&&(v(y),M=d(y),r[y.id]=M,y.addEventListener("dispose",m));const S=g.program;n.updateUBOMapping(y,S);const R=t.render.frame;o[y.id]!==R&&(h(y),o[y.id]=R)}function d(y){const g=f();y.__bindingPointIndex=g;const M=i.createBuffer(),S=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,M),M}function f(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const g=r[y.id],M=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let R=0,C=M.length;R<C;R++){const U=M[R];if(p(U,R,S)===!0){const b=U.__offset,T=Array.isArray(U.value)?U.value:[U.value];let B=0;for(let q=0;q<T.length;q++){const K=T[q],P=_(K);typeof K=="number"?(U.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,b+B,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=K.elements[0],U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=K.elements[0],U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=K.elements[0]):(K.toArray(U.__data,B),B+=P.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,U.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,g,M){const S=y.value;if(M[g]===void 0){if(typeof S=="number")M[g]=S;else{const R=Array.isArray(S)?S:[S],C=[];for(let U=0;U<R.length;U++)C.push(R[U].clone());M[g]=C}return!0}else if(typeof S=="number"){if(M[g]!==S)return M[g]=S,!0}else{const R=Array.isArray(M[g])?M[g]:[M[g]],C=Array.isArray(S)?S:[S];for(let U=0;U<R.length;U++){const b=R[U];if(b.equals(C[U])===!1)return b.copy(C[U]),!0}}return!1}function v(y){const g=y.uniforms;let M=0;const S=16;let R=0;for(let C=0,U=g.length;C<U;C++){const b=g[C],T={boundary:0,storage:0},B=Array.isArray(b.value)?b.value:[b.value];for(let q=0,K=B.length;q<K;q++){const P=B[q],G=_(P);T.boundary+=G.boundary,T.storage+=G.storage}if(b.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,C>0){R=M%S;const q=S-R;R!==0&&q-T.boundary<0&&(M+=S-R,b.__offset=M)}M+=T.storage}return R=M%S,R>0&&(M+=S-R),y.__size=M,y.__cache={},this}function _(y){const g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function m(y){const g=y.target;g.removeEventListener("dispose",m);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function u(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},o={}}return{bind:l,update:c,dispose:u}}class xa{constructor(t={}){const{canvas:e=xc(),context:n=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this._useLegacyLights=!1,this.toneMapping=en,this.toneMappingExposure=1;const g=this;let M=!1,S=0,R=0,C=null,U=-1,b=null;const T=new ne,B=new ne;let q=null;const K=new Bt(0);let P=0,G=e.width,Y=e.height,W=1,Q=null,X=null;const $=new ne(0,0,G,Y),k=new ne(0,0,G,Y);let V=!1;const at=new jr;let ct=!1,dt=!1,xt=null;const F=new jt,Z=new At,_t=new L,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return C===null?W:1}let D=n;function ae(w,I){for(let z=0;z<w.length;z++){const N=w[z],H=e.getContext(N,I);if(H!==null)return H}return null}try{const w={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dr}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),D=ae(I,w),D===null)throw ae(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let gt,kt,Rt,Yt,Ot,It,Wt,le,de,E,x,O,et,J,nt,pt,ot,ut,Mt,zt,tt,Vt,Ct,St;function bt(){gt=new Kd(D),kt=new Xd(D,gt,t),gt.init(kt),Vt=new If(D,gt,kt),Rt=new Df(D,gt,kt),Yt=new th(D),Ot=new xf,It=new Uf(D,gt,Rt,Ot,kt,Vt,Yt),Wt=new Yd(g),le=new Zd(g),de=new Wc(D,kt),Ct=new Vd(D,gt,de,kt),E=new Jd(D,de,Yt,Ct),x=new rh(D,E,de,Yt),Mt=new ih(D,kt,It),pt=new qd(Ot),O=new vf(g,Wt,le,gt,kt,Ct,pt),et=new zf(g,Ot),J=new yf,nt=new Af(gt,kt),ut=new Gd(g,Wt,le,Rt,x,h,l),ot=new kf(g,x,kt),St=new Hf(D,Yt,kt,Rt),zt=new Wd(D,gt,Yt,kt),tt=new Qd(D,gt,Yt,kt),Yt.programs=O.programs,g.capabilities=kt,g.extensions=gt,g.properties=Ot,g.renderLists=J,g.shadowMap=ot,g.state=Rt,g.info=Yt}bt();const A=new Bf(g,D);this.xr=A,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(G,Y,!1))},this.getSize=function(w){return w.set(G,Y)},this.setSize=function(w,I,z=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Y=I,e.width=Math.floor(w*W),e.height=Math.floor(I*W),z===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(G*W,Y*W).floor()},this.setDrawingBufferSize=function(w,I,z){G=w,Y=I,W=z,e.width=Math.floor(w*z),e.height=Math.floor(I*z),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,I,z,N){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,I,z,N),Rt.viewport(T.copy($).multiplyScalar(W).floor())},this.getScissor=function(w){return w.copy(k)},this.setScissor=function(w,I,z,N){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,I,z,N),Rt.scissor(B.copy(k).multiplyScalar(W).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){Rt.setScissorTest(V=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(w=!0,I=!0,z=!0){let N=0;if(w){let H=!1;if(C!==null){const ft=C.texture.format;H=ft===Oo||ft===Fo||ft===No}if(H){const ft=C.texture.type,vt=ft===nn||ft===rn||ft===br||ft===dn||ft===Uo||ft===Io,Et=ut.getClearColor(),Tt=ut.getClearAlpha(),Nt=Et.r,wt=Et.g,Dt=Et.b;vt?(p[0]=Nt,p[1]=wt,p[2]=Dt,p[3]=Tt,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Nt,v[1]=wt,v[2]=Dt,v[3]=Tt,D.clearBufferiv(D.COLOR,0,v))}else N|=D.COLOR_BUFFER_BIT}I&&(N|=D.DEPTH_BUFFER_BIT),z&&(N|=D.STENCIL_BUFFER_BIT),D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),J.dispose(),nt.dispose(),Ot.dispose(),Wt.dispose(),le.dispose(),x.dispose(),Ct.dispose(),St.dispose(),O.dispose(),A.dispose(),A.removeEventListener("sessionstart",qt),A.removeEventListener("sessionend",ze),xt&&(xt.dispose(),xt=null),_e.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Yt.autoReset,I=ot.enabled,z=ot.autoUpdate,N=ot.needsUpdate,H=ot.type;bt(),Yt.autoReset=w,ot.enabled=I,ot.autoUpdate=z,ot.needsUpdate=N,ot.type=H}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const I=w.target;I.removeEventListener("dispose",lt),j(I)}function j(w){mt(w),Ot.remove(w)}function mt(w){const I=Ot.get(w).programs;I!==void 0&&(I.forEach(function(z){O.releaseProgram(z)}),w.isShaderMaterial&&O.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,z,N,H,ft){I===null&&(I=Ht);const vt=H.isMesh&&H.matrixWorld.determinant()<0,Et=lp(w,I,z,N,H);Rt.setMaterial(N,vt);let Tt=z.index,Nt=1;if(N.wireframe===!0){if(Tt=E.getWireframeAttribute(z),Tt===void 0)return;Nt=2}const wt=z.drawRange,Dt=z.attributes.position;let $t=wt.start*Nt,Zt=(wt.start+wt.count)*Nt;ft!==null&&($t=Math.max($t,ft.start*Nt),Zt=Math.min(Zt,(ft.start+ft.count)*Nt)),Tt!==null?($t=Math.max($t,0),Zt=Math.min(Zt,Tt.count)):Dt!=null&&($t=Math.max($t,0),Zt=Math.min(Zt,Dt.count));const Pe=Zt-$t;if(Pe<0||Pe===1/0)return;Ct.setup(H,N,Et,z,Tt);let Je,Jt=zt;if(Tt!==null&&(Je=de.get(Tt),Jt=tt,Jt.setIndex(Je)),H.isMesh)N.wireframe===!0?(Rt.setLineWidth(N.wireframeLinewidth*yt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(H.isLine){let Ft=N.linewidth;Ft===void 0&&(Ft=1),Rt.setLineWidth(Ft*yt()),H.isLineSegments?Jt.setMode(D.LINES):H.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else H.isPoints?Jt.setMode(D.POINTS):H.isSprite&&Jt.setMode(D.TRIANGLES);if(H.isInstancedMesh)Jt.renderInstances($t,Pe,H.count);else if(z.isInstancedBufferGeometry){const Ft=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,uo=Math.min(z.instanceCount,Ft);Jt.renderInstances($t,Pe,uo)}else Jt.render($t,Pe)},this.compile=function(w,I){function z(N,H,ft){N.transparent===!0&&N.side===Ge&&N.forceSinglePass===!1?(N.side=be,N.needsUpdate=!0,sr(N,H,ft),N.side=Qe,N.needsUpdate=!0,sr(N,H,ft),N.side=Ge):sr(N,H,ft)}m=nt.get(w),m.init(),y.push(m),w.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(g._useLegacyLights),w.traverse(function(N){const H=N.material;if(H)if(Array.isArray(H))for(let ft=0;ft<H.length;ft++){const vt=H[ft];z(vt,w,N)}else z(H,w,N)}),y.pop(),m=null};let Lt=null;function ge(w){Lt&&Lt(w)}function qt(){_e.stop()}function ze(){_e.start()}const _e=new Xs;_e.setAnimationLoop(ge),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(w){Lt=w,A.setAnimationLoop(w),w===null?_e.stop():_e.start()},A.addEventListener("sessionstart",qt),A.addEventListener("sessionend",ze),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(I),I=A.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,I,C),m=nt.get(w,y.length),m.init(),y.push(m),F.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),at.setFromProjectionMatrix(F),dt=this.localClippingEnabled,ct=pt.init(this.clippingPlanes,dt),_=J.get(w,u.length),_.init(),u.push(_),Na(w,I,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Q,X),this.info.render.frame++,ct===!0&&pt.beginShadows();const z=m.state.shadowsArray;if(ot.render(z,w,I),ct===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(_,w),m.setupLights(g._useLegacyLights),I.isArrayCamera){const N=I.cameras;for(let H=0,ft=N.length;H<ft;H++){const vt=N[H];Fa(_,w,vt,vt.viewport)}}else Fa(_,w,I);C!==null&&(It.updateMultisampleRenderTarget(C),It.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(g,w,I),Ct.resetDefaultState(),U=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Na(w,I,z,N){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||at.intersectsSprite(w)){N&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(F);const vt=x.update(w),Et=w.material;Et.visible&&_.push(w,vt,Et,z,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||at.intersectsObject(w))){const vt=x.update(w),Et=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),_t.copy(vt.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(F)),Array.isArray(Et)){const Tt=vt.groups;for(let Nt=0,wt=Tt.length;Nt<wt;Nt++){const Dt=Tt[Nt],$t=Et[Dt.materialIndex];$t&&$t.visible&&_.push(w,vt,$t,z,_t.z,Dt)}}else Et.visible&&_.push(w,vt,Et,z,_t.z,null)}}const ft=w.children;for(let vt=0,Et=ft.length;vt<Et;vt++)Na(ft[vt],I,z,N)}function Fa(w,I,z,N){const H=w.opaque,ft=w.transmissive,vt=w.transparent;m.setupLightsView(z),ct===!0&&pt.setGlobalState(g.clippingPlanes,z),ft.length>0&&ap(H,ft,I,z),N&&Rt.viewport(T.copy(N)),H.length>0&&or(H,I,z),ft.length>0&&or(ft,I,z),vt.length>0&&or(vt,I,z),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ap(w,I,z,N){const H=kt.isWebGL2;xt===null&&(xt=new mn(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")?di:nn,minFilter:ui,samples:H?4:0})),g.getDrawingBufferSize(Z),H?xt.setSize(Z.x,Z.y):xt.setSize(Li(Z.x),Li(Z.y));const ft=g.getRenderTarget();g.setRenderTarget(xt),g.getClearColor(K),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const vt=g.toneMapping;g.toneMapping=en,or(w,z,N),It.updateMultisampleRenderTarget(xt),It.updateRenderTargetMipmap(xt);let Et=!1;for(let Tt=0,Nt=I.length;Tt<Nt;Tt++){const wt=I[Tt],Dt=wt.object,$t=wt.geometry,Zt=wt.material,Pe=wt.group;if(Zt.side===Ge&&Dt.layers.test(N.layers)){const Je=Zt.side;Zt.side=be,Zt.needsUpdate=!0,Oa(Dt,z,N,$t,Zt,Pe),Zt.side=Je,Zt.needsUpdate=!0,Et=!0}}Et===!0&&(It.updateMultisampleRenderTarget(xt),It.updateRenderTargetMipmap(xt)),g.setRenderTarget(ft),g.setClearColor(K,P),g.toneMapping=vt}function or(w,I,z){const N=I.isScene===!0?I.overrideMaterial:null;for(let H=0,ft=w.length;H<ft;H++){const vt=w[H],Et=vt.object,Tt=vt.geometry,Nt=N===null?vt.material:N,wt=vt.group;Et.layers.test(z.layers)&&Oa(Et,I,z,Tt,Nt,wt)}}function Oa(w,I,z,N,H,ft){w.onBeforeRender(g,I,z,N,H,ft),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(g,I,z,N,w,ft),H.transparent===!0&&H.side===Ge&&H.forceSinglePass===!1?(H.side=be,H.needsUpdate=!0,g.renderBufferDirect(z,I,N,H,w,ft),H.side=Qe,H.needsUpdate=!0,g.renderBufferDirect(z,I,N,H,w,ft),H.side=Ge):g.renderBufferDirect(z,I,N,H,w,ft),w.onAfterRender(g,I,z,N,H,ft)}function sr(w,I,z){I.isScene!==!0&&(I=Ht);const N=Ot.get(w),H=m.state.lights,ft=m.state.shadowsArray,vt=H.state.version,Et=O.getParameters(w,H.state,ft,I,z),Tt=O.getProgramCacheKey(Et);let Nt=N.programs;N.environment=w.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(w.isMeshStandardMaterial?le:Wt).get(w.envMap||N.environment),Nt===void 0&&(w.addEventListener("dispose",lt),Nt=new Map,N.programs=Nt);let wt=Nt.get(Tt);if(wt!==void 0){if(N.currentProgram===wt&&N.lightsStateVersion===vt)return Ba(w,Et),wt}else Et.uniforms=O.getUniforms(w),w.onBuild(z,Et,g),w.onBeforeCompile(Et,g),wt=O.acquireProgram(Et,Tt),Nt.set(Tt,wt),N.uniforms=Et.uniforms;const Dt=N.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=pt.uniform),Ba(w,Et),N.needsLights=up(w),N.lightsStateVersion=vt,N.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.directionalShadowMap.value=H.state.directionalShadowMap,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotShadowMap.value=H.state.spotShadowMap,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMap.value=H.state.pointShadowMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix);const $t=wt.getUniforms(),Zt=nr.seqWithValue($t.seq,Dt);return N.currentProgram=wt,N.uniformsList=Zt,wt}function Ba(w,I){const z=Ot.get(w);z.outputColorSpace=I.outputColorSpace,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function lp(w,I,z,N,H){I.isScene!==!0&&(I=Ht),It.resetTextureUnits();const ft=I.fog,vt=N.isMeshStandardMaterial?I.environment:null,Et=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ve,Tt=(N.isMeshStandardMaterial?le:Wt).get(N.envMap||vt),Nt=N.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,wt=!!z.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Dt=!!z.morphAttributes.position,$t=!!z.morphAttributes.normal,Zt=!!z.morphAttributes.color;let Pe=en;N.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=g.toneMapping);const Je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=Je!==void 0?Je.length:0,Ft=Ot.get(N),uo=m.state.lights;if(ct===!0&&(dt===!0||w!==b)){const Se=w===b&&N.id===U;pt.setState(N,w,Se)}let Qt=!1;N.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==uo.state.version||Ft.outputColorSpace!==Et||H.isInstancedMesh&&Ft.instancing===!1||!H.isInstancedMesh&&Ft.instancing===!0||H.isSkinnedMesh&&Ft.skinning===!1||!H.isSkinnedMesh&&Ft.skinning===!0||H.isInstancedMesh&&Ft.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ft.instancingColor===!1&&H.instanceColor!==null||Ft.envMap!==Tt||N.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==pt.numPlanes||Ft.numIntersection!==pt.numIntersection)||Ft.vertexAlphas!==Nt||Ft.vertexTangents!==wt||Ft.morphTargets!==Dt||Ft.morphNormals!==$t||Ft.morphColors!==Zt||Ft.toneMapping!==Pe||kt.isWebGL2===!0&&Ft.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Ft.__version=N.version);let Sn=Ft.currentProgram;Qt===!0&&(Sn=sr(N,I,H));let za=!1,wi=!1,ho=!1;const ve=Sn.getUniforms(),En=Ft.uniforms;if(Rt.useProgram(Sn.program)&&(za=!0,wi=!0,ho=!0),N.id!==U&&(U=N.id,wi=!0),za||b!==w){ve.setValue(D,"projectionMatrix",w.projectionMatrix),ve.setValue(D,"viewMatrix",w.matrixWorldInverse);const Se=ve.map.cameraPosition;Se!==void 0&&Se.setValue(D,_t.setFromMatrixPosition(w.matrixWorld)),kt.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ve.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,wi=!0,ho=!0)}if(H.isSkinnedMesh){ve.setOptional(D,H,"bindMatrix"),ve.setOptional(D,H,"bindMatrixInverse");const Se=H.skeleton;Se&&(kt.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),ve.setValue(D,"boneTexture",Se.boneTexture,It),ve.setValue(D,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fo=z.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&kt.isWebGL2===!0)&&Mt.update(H,z,Sn),(wi||Ft.receiveShadow!==H.receiveShadow)&&(Ft.receiveShadow=H.receiveShadow,ve.setValue(D,"receiveShadow",H.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(En.envMap.value=Tt,En.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),wi&&(ve.setValue(D,"toneMappingExposure",g.toneMappingExposure),Ft.needsLights&&cp(En,ho),ft&&N.fog===!0&&et.refreshFogUniforms(En,ft),et.refreshMaterialUniforms(En,N,W,Y,xt),nr.upload(D,Ft.uniformsList,En,It)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(nr.upload(D,Ft.uniformsList,En,It),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ve.setValue(D,"center",H.center),ve.setValue(D,"modelViewMatrix",H.modelViewMatrix),ve.setValue(D,"normalMatrix",H.normalMatrix),ve.setValue(D,"modelMatrix",H.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Se=N.uniformsGroups;for(let po=0,dp=Se.length;po<dp;po++)if(kt.isWebGL2){const Ha=Se[po];St.update(Ha,Sn),St.bind(Ha,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function cp(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function up(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,I,z){Ot.get(w.texture).__webglTexture=I,Ot.get(w.depthTexture).__webglTexture=z;const N=Ot.get(w);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=z===void 0,N.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const z=Ot.get(w);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,z=0){C=w,S=I,R=z;let N=!0,H=null,ft=!1,vt=!1;if(w){const Tt=Ot.get(w);Tt.__useDefaultFramebuffer!==void 0?(Rt.bindFramebuffer(D.FRAMEBUFFER,null),N=!1):Tt.__webglFramebuffer===void 0?It.setupRenderTarget(w):Tt.__hasExternalTextures&&It.rebindTextures(w,Ot.get(w.texture).__webglTexture,Ot.get(w.depthTexture).__webglTexture);const Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const wt=Ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?H=wt[I][z]:H=wt[I],ft=!0):kt.isWebGL2&&w.samples>0&&It.useMultisampledRTT(w)===!1?H=Ot.get(w).__webglMultisampledFramebuffer:Array.isArray(wt)?H=wt[z]:H=wt,T.copy(w.viewport),B.copy(w.scissor),q=w.scissorTest}else T.copy($).multiplyScalar(W).floor(),B.copy(k).multiplyScalar(W).floor(),q=V;if(Rt.bindFramebuffer(D.FRAMEBUFFER,H)&&kt.drawBuffers&&N&&Rt.drawBuffers(w,H),Rt.viewport(T),Rt.scissor(B),Rt.setScissorTest(q),ft){const Tt=Ot.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,z)}else if(vt){const Tt=Ot.get(w.texture),Nt=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,z||0,Nt)}U=-1},this.readRenderTargetPixels=function(w,I,z,N,H,ft,vt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){Rt.bindFramebuffer(D.FRAMEBUFFER,Et);try{const Tt=w.texture,Nt=Tt.format,wt=Tt.type;if(Nt!==De&&Vt.convert(Nt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=wt===di&&(gt.has("EXT_color_buffer_half_float")||kt.isWebGL2&&gt.has("EXT_color_buffer_float"));if(wt!==nn&&Vt.convert(wt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===on&&(kt.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-N&&z>=0&&z<=w.height-H&&D.readPixels(I,z,N,H,Vt.convert(Nt),Vt.convert(wt),ft)}finally{const Tt=C!==null?Ot.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(w,I,z=0){const N=Math.pow(2,-z),H=Math.floor(I.image.width*N),ft=Math.floor(I.image.height*N);It.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,w.x,w.y,H,ft),Rt.unbindTexture()},this.copyTextureToTexture=function(w,I,z,N=0){const H=I.image.width,ft=I.image.height,vt=Vt.convert(z.format),Et=Vt.convert(z.type);It.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,w.x,w.y,H,ft,vt,Et,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,vt,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,N,w.x,w.y,vt,Et,I.image),N===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,I,z,N,H=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=w.max.x-w.min.x+1,vt=w.max.y-w.min.y+1,Et=w.max.z-w.min.z+1,Tt=Vt.convert(N.format),Nt=Vt.convert(N.type);let wt;if(N.isData3DTexture)It.setTexture3D(N,0),wt=D.TEXTURE_3D;else if(N.isDataArrayTexture)It.setTexture2DArray(N,0),wt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Dt=D.getParameter(D.UNPACK_ROW_LENGTH),$t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zt=D.getParameter(D.UNPACK_SKIP_PIXELS),Pe=D.getParameter(D.UNPACK_SKIP_ROWS),Je=D.getParameter(D.UNPACK_SKIP_IMAGES),Jt=z.isCompressedTexture?z.mipmaps[0]:z.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Jt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,w.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,w.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,w.min.z),z.isDataTexture||z.isData3DTexture?D.texSubImage3D(wt,H,I.x,I.y,I.z,ft,vt,Et,Tt,Nt,Jt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(wt,H,I.x,I.y,I.z,ft,vt,Et,Tt,Jt.data)):D.texSubImage3D(wt,H,I.x,I.y,I.z,ft,vt,Et,Tt,Nt,Jt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Je),H===0&&N.generateMipmaps&&D.generateMipmap(wt),Rt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?It.setTextureCube(w,0):w.isData3DTexture?It.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?It.setTexture2DArray(w,0):It.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){S=0,R=0,C=null,Rt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Tr?"display-p3":"srgb",e.unpackColorSpace=Gt.workingColorSpace===Ei?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===oe?fn:us}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===fn?oe:Ve}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Gf extends xa{}Gf.prototype.isWebGL1Renderer=!0;class Vf extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ba extends $n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ya=new L,wa=new L,Ma=new jt,no=new Ss,rr=new Ii;class Wf extends ie{constructor(t=new Ce,e=new ba){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)ya.fromBufferAttribute(e,r-1),wa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ya.distanceTo(wa);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),rr.radius+=o,t.ray.intersectsSphere(rr)===!1)return;Ma.copy(r).invert(),no.copy(t.ray).applyMatrix4(Ma);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new L,d=new L,f=new L,h=new L,p=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const u=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let g=u,M=y-1;g<M;g+=p){const S=v.getX(g),R=v.getX(g+1);if(c.fromBufferAttribute(m,S),d.fromBufferAttribute(m,R),no.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(h);U<t.near||U>t.far||e.push({distance:U,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let g=u,M=y-1;g<M;g+=p){if(c.fromBufferAttribute(m,g),d.fromBufferAttribute(m,g+1),no.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(h);R<t.near||R>t.far||e.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}const Sa=new L,Ea=new L;class Xf extends Wf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)Sa.fromBufferAttribute(e,r),Ea.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Sa.distanceTo(Ea);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class io extends Ce{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const o=[],a=[];s(r),c(n),d(),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(o.slice(),3)),this.setAttribute("uv",new se(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function s(y){const g=new L,M=new L,S=new L;for(let R=0;R<e.length;R+=3)p(e[R+0],g),p(e[R+1],M),p(e[R+2],S),l(g,M,S,y)}function l(y,g,M,S){const R=S+1,C=[];for(let U=0;U<=R;U++){C[U]=[];const b=y.clone().lerp(M,U/R),T=g.clone().lerp(M,U/R),B=R-U;for(let q=0;q<=B;q++)q===0&&U===R?C[U][q]=b:C[U][q]=b.clone().lerp(T,q/B)}for(let U=0;U<R;U++)for(let b=0;b<2*(R-U)-1;b++){const T=Math.floor(b/2);b%2===0?(h(C[U][T+1]),h(C[U+1][T]),h(C[U][T])):(h(C[U][T+1]),h(C[U+1][T+1]),h(C[U+1][T]))}}function c(y){const g=new L;for(let M=0;M<o.length;M+=3)g.x=o[M+0],g.y=o[M+1],g.z=o[M+2],g.normalize().multiplyScalar(y),o[M+0]=g.x,o[M+1]=g.y,o[M+2]=g.z}function d(){const y=new L;for(let g=0;g<o.length;g+=3){y.x=o[g+0],y.y=o[g+1],y.z=o[g+2];const M=m(y)/2/Math.PI+.5,S=u(y)/Math.PI+.5;a.push(M,1-S)}v(),f()}function f(){for(let y=0;y<a.length;y+=6){const g=a[y+0],M=a[y+2],S=a[y+4],R=Math.max(g,M,S),C=Math.min(g,M,S);R>.9&&C<.1&&(g<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function h(y){o.push(y.x,y.y,y.z)}function p(y,g){const M=y*3;g.x=t[M+0],g.y=t[M+1],g.z=t[M+2]}function v(){const y=new L,g=new L,M=new L,S=new L,R=new At,C=new At,U=new At;for(let b=0,T=0;b<o.length;b+=9,T+=6){y.set(o[b+0],o[b+1],o[b+2]),g.set(o[b+3],o[b+4],o[b+5]),M.set(o[b+6],o[b+7],o[b+8]),R.set(a[T+0],a[T+1]),C.set(a[T+2],a[T+3]),U.set(a[T+4],a[T+5]),S.copy(y).add(g).add(M).divideScalar(3);const B=m(S);_(R,T+0,y,B),_(C,T+2,g,B),_(U,T+4,M,B)}}function _(y,g,M,S){S<0&&y.x===1&&(a[g]=y.x-1),M.x===0&&M.z===0&&(a[g]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.vertices,t.indices,t.radius,t.details)}}class ro extends io{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ro(t.radius,t.detail)}}class Ta extends $n{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Aa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qf{constructor(t,e,n){const r=this;let o=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){s++,o===!1&&r.onStart!==void 0&&r.onStart(d,a,s),o=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null}}}const Yf=new qf;class oo{constructor(t){this.manager=t!==void 0?t:Yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ke={};class jf extends Error{constructor(t,e){super(t),this.response=e}}class $f extends oo{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Aa.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(Ke[t]!==void 0){Ke[t].push({onLoad:e,onProgress:n,onError:r});return}Ke[t]=[],Ke[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Ke[t],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,v=p!==0;let _=0;const m=new ReadableStream({start(u){y();function y(){f.read().then(({done:g,value:M})=>{if(g)u.close();else{_+=M.byteLength;const S=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:p});for(let R=0,C=d.length;R<C;R++){const U=d[R];U.onProgress&&U.onProgress(S)}u.enqueue(M),y()}})}}});return new Response(m)}else throw new jf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,s));case"json":return c.json();default:if(s===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(s),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Aa.add(t,c);const d=Ke[t];delete Ke[t];for(let f=0,h=d.length;f<h;f++){const p=d[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=Ke[t];if(d===void 0)throw this.manager.itemError(t),c;delete Ke[t];for(let f=0,h=d.length;f<h;f++){const p=d[f];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Zf extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const so=new jt,Ra=new L,Ca=new L;class Kf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ra.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ra),Ca.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ca),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jf extends Kf{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class La extends Zf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new Jf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qf extends Xf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ce;r.setAttribute("position",new se(e,3)),r.setAttribute("color",new se(n,3));const o=new ba({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(t,e,n){const r=new Bt,o=this.geometry.attributes.color.array;return r.set(t),r.toArray(o,0),r.toArray(o,3),r.set(e),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dr);class Pa extends oo{constructor(t){super(t)}load(t,e,n,r){const o=this,a=new $f(o.manager);a.setPath(o.path),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(t,function(s){try{e(o.parse(s))}catch(l){r?r(l):console.error(l),o.manager.itemError(t)}},n,r)}parse(t){function e(p){return p.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function n(p){return p.charAt(0).toUpperCase()+p.slice(1).toLowerCase()}function r(p,v){return"s"+Math.min(p,v)+"e"+Math.max(p,v)}function o(p,v,_,m){const u=parseInt(h[m].slice(p,p+v));if(u){const y=r(_,u);d[y]===void 0&&(c.push([_-1,u-1,1]),d[y]=c.length-1)}}function a(){const p={geometryAtoms:new Ce,geometryBonds:new Ce,json:{atoms:l}},v=p.geometryAtoms,_=p.geometryBonds,m=[],u=[],y=[],g=new Bt;for(let M=0,S=l.length;M<S;M++){const R=l[M],C=R[0],U=R[1],b=R[2];m.push(C,U,b);const T=R[3][0]/255,B=R[3][1]/255,q=R[3][2]/255;g.set(T,B,q).convertSRGBToLinear(),u.push(g.r,g.g,g.b)}for(let M=0,S=c.length;M<S;M++){const R=c[M],C=R[0],U=R[1],b=f[C],T=f[U];let B=b[0],q=b[1],K=b[2];y.push(B,q,K),B=T[0],q=T[1],K=T[2],y.push(B,q,K)}return v.setAttribute("position",new se(m,3)),v.setAttribute("color",new se(u,3)),_.setAttribute("position",new se(y,3)),p}const s={h:[255,255,255],he:[217,255,255],li:[204,128,255],be:[194,255,0],b:[255,181,181],c:[144,144,144],n:[48,80,248],o:[255,13,13],f:[144,224,80],ne:[179,227,245],na:[171,92,242],mg:[138,255,0],al:[191,166,166],si:[240,200,160],p:[255,128,0],s:[255,255,48],cl:[31,240,31],ar:[128,209,227],k:[143,64,212],ca:[61,255,0],sc:[230,230,230],ti:[191,194,199],v:[166,166,171],cr:[138,153,199],mn:[156,122,199],fe:[224,102,51],co:[240,144,160],ni:[80,208,80],cu:[200,128,51],zn:[125,128,176],ga:[194,143,143],ge:[102,143,143],as:[189,128,227],se:[255,161,0],br:[166,41,41],kr:[92,184,209],rb:[112,46,176],sr:[0,255,0],y:[148,255,255],zr:[148,224,224],nb:[115,194,201],mo:[84,181,181],tc:[59,158,158],ru:[36,143,143],rh:[10,125,140],pd:[0,105,133],ag:[192,192,192],cd:[255,217,143],in:[166,117,115],sn:[102,128,128],sb:[158,99,181],te:[212,122,0],i:[148,0,148],xe:[66,158,176],cs:[87,23,143],ba:[0,201,0],la:[112,212,255],ce:[255,255,199],pr:[217,255,199],nd:[199,255,199],pm:[163,255,199],sm:[143,255,199],eu:[97,255,199],gd:[69,255,199],tb:[48,255,199],dy:[31,255,199],ho:[0,255,156],er:[0,230,117],tm:[0,212,82],yb:[0,191,56],lu:[0,171,36],hf:[77,194,255],ta:[77,166,255],w:[33,148,214],re:[38,125,171],os:[38,102,150],ir:[23,84,135],pt:[208,208,224],au:[255,209,35],hg:[184,184,208],tl:[166,84,77],pb:[87,89,97],bi:[158,79,181],po:[171,92,0],at:[117,79,69],rn:[66,130,150],fr:[66,0,102],ra:[0,125,0],ac:[112,171,250],th:[0,186,255],pa:[0,161,255],u:[0,143,255],np:[0,128,255],pu:[0,107,255],am:[84,92,242],cm:[120,92,227],bk:[138,79,227],cf:[161,54,212],es:[179,31,212],fm:[179,31,186],md:[179,13,166],no:[189,13,135],lr:[199,0,102],rf:[204,0,89],db:[209,0,79],sg:[217,0,69],bh:[224,0,56],hs:[230,0,46],mt:[235,0,38],ds:[235,0,38],rg:[235,0,38],cn:[235,0,38],uut:[235,0,38],uuq:[235,0,38],uup:[235,0,38],uuh:[235,0,38],uus:[235,0,38],uuo:[235,0,38]},l=[],c=[],d={},f={},h=t.split(`
`);for(let p=0,v=h.length;p<v;p++)if(h[p].slice(0,4)==="ATOM"||h[p].slice(0,6)==="HETATM"){const _=parseFloat(h[p].slice(30,37)),m=parseFloat(h[p].slice(38,45)),u=parseFloat(h[p].slice(46,53)),y=parseInt(h[p].slice(6,11))-1;let g=e(h[p].slice(76,78)).toLowerCase();g===""&&(g=e(h[p].slice(12,14)).toLowerCase());const M=[_,m,u,s[g],n(g)];l.push(M),f[y]=M}else if(h[p].slice(0,6)==="CONECT"){const _=parseInt(h[p].slice(6,11));o(11,5,_,p),o(16,5,_,p),o(21,5,_,p),o(26,5,_,p)}return a()}}class tp extends ie{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new At(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ai=new L,ka=new jt,Da=new jt,Ua=new L,Ia=new L;class ep{constructor(t={}){const e=this;let n,r,o,a;const s={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(p,v){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),ka.copy(v.matrixWorldInverse),Da.multiplyMatrices(v.projectionMatrix,ka),c(p,p,v),h(p)},this.setSize=function(p,v){n=p,r=v,o=n/2,a=r/2,l.style.width=p+"px",l.style.height=v+"px"};function c(p,v,_){if(p.isCSS2DObject){ai.setFromMatrixPosition(p.matrixWorld),ai.applyMatrix4(Da);const m=p.visible===!0&&ai.z>=-1&&ai.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(e,v,_);const y=p.element;y.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(ai.x*o+o)+"px,"+(-ai.y*a+a)+"px)",y.parentNode!==l&&l.appendChild(y),p.onAfterRender(e,v,_)}const u={distanceToCameraSquared:d(_,p)};s.objects.set(p,u)}for(let m=0,u=p.children.length;m<u;m++)c(p.children[m],v,_)}function d(p,v){return Ua.setFromMatrixPosition(p.matrixWorld),Ia.setFromMatrixPosition(v.matrixWorld),Ua.distanceToSquared(Ia)}function f(p){const v=[];return p.traverse(function(_){_.isCSS2DObject&&v.push(_)}),v}function h(p){const v=f(p).sort(function(m,u){if(m.renderOrder!==u.renderOrder)return u.renderOrder-m.renderOrder;const y=s.objects.get(m).distanceToCameraSquared,g=s.objects.get(u).distanceToCameraSquared;return y-g}),_=v.length;for(let m=0,u=v.length;m<u;m++)v[m].element.style.zIndex=_-m}}}const ao={type:"change"},lo={type:"start"},co={type:"end"};class np extends pn{constructor(t,e){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:hr.ROTATE,MIDDLE:hr.DOLLY,RIGHT:hr.PAN},this.target=new L;const o=1e-6,a=new L;let s=1,l=r.NONE,c=r.NONE,d=0,f=0,h=0;const p=new L,v=new At,_=new At,m=new L,u=new At,y=new At,g=new At,M=new At,S=[],R={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const F=n.domElement.getBoundingClientRect(),Z=n.domElement.ownerDocument.documentElement;n.screen.left=F.left+window.pageXOffset-Z.clientLeft,n.screen.top=F.top+window.pageYOffset-Z.clientTop,n.screen.width=F.width,n.screen.height=F.height};const C=function(){const F=new At;return function(_t,Ht){return F.set((_t-n.screen.left)/n.screen.width,(Ht-n.screen.top)/n.screen.height),F}}(),U=function(){const F=new At;return function(_t,Ht){return F.set((_t-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-Ht))/n.screen.width),F}}();this.rotateCamera=function(){const F=new L,Z=new zn,_t=new L,Ht=new L,yt=new L,D=new L;return function(){D.set(_.x-v.x,_.y-v.y,0);let gt=D.length();gt?(p.copy(n.object.position).sub(n.target),_t.copy(p).normalize(),Ht.copy(n.object.up).normalize(),yt.crossVectors(Ht,_t).normalize(),Ht.setLength(_.y-v.y),yt.setLength(_.x-v.x),D.copy(Ht.add(yt)),F.crossVectors(D,p).normalize(),gt*=n.rotateSpeed,Z.setFromAxisAngle(F,gt),p.applyQuaternion(Z),n.object.up.applyQuaternion(Z),m.copy(F),h=gt):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor),p.copy(n.object.position).sub(n.target),Z.setFromAxisAngle(m,h),p.applyQuaternion(Z),n.object.up.applyQuaternion(Z)),v.copy(_)}}(),this.zoomCamera=function(){let F;l===r.TOUCH_ZOOM_PAN?(F=d/f,d=f,n.object.isPerspectiveCamera?p.multiplyScalar(F):n.object.isOrthographicCamera?(n.object.zoom=ms.clamp(n.object.zoom/F,n.minZoom,n.maxZoom),s!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(F=1+(y.y-u.y)*n.zoomSpeed,F!==1&&F>0&&(n.object.isPerspectiveCamera?p.multiplyScalar(F):n.object.isOrthographicCamera?(n.object.zoom=ms.clamp(n.object.zoom/F,n.minZoom,n.maxZoom),s!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?u.copy(y):u.y+=(y.y-u.y)*this.dynamicDampingFactor)},this.panCamera=function(){const F=new At,Z=new L,_t=new L;return function(){if(F.copy(M).sub(g),F.lengthSq()){if(n.object.isOrthographicCamera){const yt=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,D=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;F.x*=yt,F.y*=D}F.multiplyScalar(p.length()*n.panSpeed),_t.copy(p).cross(n.object.up).setLength(F.x),_t.add(Z.copy(n.object.up).setLength(F.y)),n.object.position.add(_t),n.target.add(_t),n.staticMoving?g.copy(M):g.add(F.subVectors(M,g).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(p.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,p.setLength(n.maxDistance)),u.copy(y)),p.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,p.setLength(n.minDistance)),u.copy(y)))},this.update=function(){p.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,p),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),a.distanceToSquared(n.object.position)>o&&(n.dispatchEvent(ao),a.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(a.distanceToSquared(n.object.position)>o||s!==n.object.zoom)&&(n.dispatchEvent(ao),a.copy(n.object.position),s=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),p.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(ao),a.copy(n.object.position),s=n.object.zoom};function b(F){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",B)),at(F),F.pointerType==="touch"?X(F):G(F))}function T(F){n.enabled!==!1&&(F.pointerType==="touch"?$(F):Y(F))}function B(F){n.enabled!==!1&&(F.pointerType==="touch"?k(F):W(),ct(F),S.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",B)))}function q(F){ct(F)}function K(F){n.enabled!==!1&&(window.removeEventListener("keydown",K),c===r.NONE&&(F.code===n.keys[r.ROTATE]&&!n.noRotate?c=r.ROTATE:F.code===n.keys[r.ZOOM]&&!n.noZoom?c=r.ZOOM:F.code===n.keys[r.PAN]&&!n.noPan&&(c=r.PAN)))}function P(){n.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",K))}function G(F){if(l===r.NONE)switch(F.button){case n.mouseButtons.LEFT:l=r.ROTATE;break;case n.mouseButtons.MIDDLE:l=r.ZOOM;break;case n.mouseButtons.RIGHT:l=r.PAN;break}const Z=c!==r.NONE?c:l;Z===r.ROTATE&&!n.noRotate?(_.copy(U(F.pageX,F.pageY)),v.copy(_)):Z===r.ZOOM&&!n.noZoom?(u.copy(C(F.pageX,F.pageY)),y.copy(u)):Z===r.PAN&&!n.noPan&&(g.copy(C(F.pageX,F.pageY)),M.copy(g)),n.dispatchEvent(lo)}function Y(F){const Z=c!==r.NONE?c:l;Z===r.ROTATE&&!n.noRotate?(v.copy(_),_.copy(U(F.pageX,F.pageY))):Z===r.ZOOM&&!n.noZoom?y.copy(C(F.pageX,F.pageY)):Z===r.PAN&&!n.noPan&&M.copy(C(F.pageX,F.pageY))}function W(){l=r.NONE,n.dispatchEvent(co)}function Q(F){if(n.enabled!==!1&&n.noZoom!==!0){switch(F.preventDefault(),F.deltaMode){case 2:u.y-=F.deltaY*.025;break;case 1:u.y-=F.deltaY*.01;break;default:u.y-=F.deltaY*25e-5;break}n.dispatchEvent(lo),n.dispatchEvent(co)}}function X(F){switch(dt(F),S.length){case 1:l=r.TOUCH_ROTATE,_.copy(U(S[0].pageX,S[0].pageY)),v.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const Z=S[0].pageX-S[1].pageX,_t=S[0].pageY-S[1].pageY;f=d=Math.sqrt(Z*Z+_t*_t);const Ht=(S[0].pageX+S[1].pageX)/2,yt=(S[0].pageY+S[1].pageY)/2;g.copy(C(Ht,yt)),M.copy(g);break}n.dispatchEvent(lo)}function $(F){switch(dt(F),S.length){case 1:v.copy(_),_.copy(U(F.pageX,F.pageY));break;default:const Z=xt(F),_t=F.pageX-Z.x,Ht=F.pageY-Z.y;f=Math.sqrt(_t*_t+Ht*Ht);const yt=(F.pageX+Z.x)/2,D=(F.pageY+Z.y)/2;M.copy(C(yt,D));break}}function k(F){switch(S.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(U(F.pageX,F.pageY)),v.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let Z=0;Z<S.length;Z++)if(S[Z].pointerId!==F.pointerId){const _t=R[S[Z].pointerId];_.copy(U(_t.x,_t.y)),v.copy(_);break}break}n.dispatchEvent(co)}function V(F){n.enabled!==!1&&F.preventDefault()}function at(F){S.push(F)}function ct(F){delete R[F.pointerId];for(let Z=0;Z<S.length;Z++)if(S[Z].pointerId==F.pointerId){S.splice(Z,1);return}}function dt(F){let Z=R[F.pointerId];Z===void 0&&(Z=new At,R[F.pointerId]=Z),Z.set(F.pageX,F.pageY)}function xt(F){const Z=F.pointerId===S[0].pointerId?S[1]:S[0];return R[Z.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",B),window.removeEventListener("keydown",K),window.removeEventListener("keyup",P)},this.domElement.addEventListener("contextmenu",V),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",q),this.domElement.addEventListener("wheel",Q,{passive:!1}),window.addEventListener("keydown",K),window.addEventListener("keyup",P),this.handleResize(),this.update()}}class ip{constructor(t,e=!0){this.target=t||(()=>{let r=document.createElement("div");return r.classList.add("uikit-w-screen","uikit-h-screen"),document.body.appendChild(r),r})(),this.scene=this.initScene(),this.camera=this.initCamera(),this.renderer=this.initRenderer(),this.controls=this.initControls(),e&&this.scene.add(new Qf(1)),this.addLight();let n=this;window.addEventListener("resize",()=>{this.camera.aspect=n.getWidth()/n.getHeight(),this.camera.updateProjectionMatrix(),this.renderer.forEach(r=>{r.setSize(n.getWidth(),n.getHeight())})})}getWidth(){return this.target?this.target.clientWidth:window.innerWidth}getHeight(){return this.target?this.target.clientHeight:window.innerHeight}initScene(){return new Vf}initCamera(){let t=new Le(70,this.getWidth()/this.getHeight(),1,100);return t.position.z=10,t}initRenderer(){let t=new Map,e=new xa({antialias:!0});return e.setPixelRatio(window.devicePixelRatio),e.setSize(this.getWidth(),this.getHeight()),this.target.appendChild(e.domElement),t.set("default",e),t}addCSS2DRenderer(t){if(this.renderer.has(t))throw Error(`${t} already exist`);let e=new ep;e.setSize(this.getWidth(),this.getHeight()),e.domElement.style.position="absolute",e.domElement.style.top="0px",e.domElement.style.pointerEvents="none",this.target.appendChild(e.domElement),this.renderer.set(t,e)}initControls(){return new np(this.camera,this.renderer.get("default").domElement)}addLight(){let t=new La(16777215,.8);t.position.set(1,1,1),this.scene.add(t);let e=new La(16777215,.5);e.position.set(-1,-1,1),this.scene.add(e)}Animate(){let t=this;requestAnimationFrame(this.Animate.bind(this)),this.controls.update(),this.renderer.forEach(e=>{e.render(t.scene,t.camera)})}AddObj(t){this.scene.add(t)}SetBackgroundColor(t){t&&(this.scene.background=new Bt(t))}}function rp(i){let t;return{c(){t=Xa("div"),qa(t,"class","uikit-w-full uikit-h-full uikit-shadow-lg")},m(e,n){Wa(e,t,n),i[4](t)},p:An,i:An,o:An,d(e){e&&xo(t),i[4](null)}}}function op(i,t,e){let{model:n=""}=t,{urlmodel:r=""}=t,{backgroundColor:o=""}=t,a,s;const l=()=>{let _=new Pa;try{s=_.parse(n)}catch(m){console.log(m)}},c=()=>{new Pa().load(r,m=>{s=m})},d=()=>{if(!window)return;let _=new ip(a);_.addCSS2DRenderer("label"),_.SetBackgroundColor(o),f(_),h(_),p(_),_.Animate()},f=_=>{const m=s.geometryAtoms.getAttribute("position"),u=s.geometryAtoms.getAttribute("color");for(let y=0;y<m.count;y++){let g=new L;g.x=m.getX(y),g.y=m.getY(y),g.z=m.getZ(y);let M=new Bt;M.r=u.getX(y),M.g=u.getY(y),M.b=u.getZ(y);let S=new ro(.25,3),R=new Ta({color:M}),C=new Oe(S,R);C.position.copy(g),_.AddObj(C)}},h=_=>{const m=s.geometryBonds.getAttribute("position");for(let u=0;u<m.count;u+=2){let y=new L;y.x=m.getX(u),y.y=m.getY(u),y.z=m.getZ(u);let g=new L;g.x=m.getX(u+1),g.y=m.getY(u+1),g.z=m.getZ(u+1);let M=new ti(.05,.05,.05),S=new Ta({color:16777215}),R=new Oe(M,S);R.position.copy(y),R.position.lerp(g,.5),R.scale.z=y.distanceTo(g)*10,R.lookAt(g),_.AddObj(R)}},p=_=>{const m=s.json;for(let u of m.atoms){let y=document.createElement("div");y.style.color=`rgb(${u[3][0]}, ${u[3][1]}, ${u[3][2]})`,y.textContent=u[4];let g=new L;g.x=u[0],g.y=u[1],g.z=u[2];let M=new tp(y);M.position.copy(g),_.AddObj(M)}};$a(()=>{d()});function v(_){ar[_?"unshift":"push"](()=>{a=_,e(0,a)})}return i.$$set=_=>{"model"in _&&e(1,n=_.model),"urlmodel"in _&&e(2,r=_.urlmodel),"backgroundColor"in _&&e(3,o=_.backgroundColor)},i.$$.update=()=>{i.$$.dirty&2&&n&&l(),i.$$.dirty&4&&r&&c()},[a,n,r,o,v]}class sp extends sl{constructor(t){super(),ol(this,t,op,rp,Ga,{model:1,urlmodel:2,backgroundColor:3})}}Ee.PdbRender=sp,Object.defineProperty(Ee,Symbol.toStringTag,{value:"Module"})});
