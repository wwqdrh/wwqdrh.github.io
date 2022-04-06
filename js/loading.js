/*
 * 动态添加 CSS 样式
 * @param selector {string} 选择器
 * @param rules    {string} CSS样式规则
 * @param index    {number} 插入规则的位置, 靠后的规则会覆盖靠前的
 */
const addCssRule = (() => {
  // 创建一个 style， 返回其 stylesheet 对象
  // 注意：IE6/7/8中使用 style.stylesheet，其它浏览器 style.sheet
  function createStyleSheet() {
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.type = "text/css";
    head.appendChild(style);
    return style.sheet || style.styleSheet;
  }

  // 创建 stylesheet 对象
  const sheet = createStyleSheet();

  // 返回接口函数
  return function (selector, rules, index) {
    index = index || 0;
    if (sheet.insertRule) {
      sheet.insertRule(selector + "{" + rules + "}", index);
    } else if (sheet.addRule) {
      sheet.addRule(selector, rules, index);
    }
  };
})();

/**
 * 加载css
 */
function loadCSS() {
  addCssRule(
    "#Loading",
    `top:50%;
  left:50%;
  position: absolute;
  -webkit-transform: translateY(-50%)  translateX(-50%);
  transform: translateY(-50%)  translateX(-50%);
  z-index:100;`
  );
  addCssRule(
    "@-webkit-keyframes ball-beat ",
    `50% {
    opacity: 0.2;
    -webkit-transform: scale(0.75);
    transform: scale(0.75); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1); }`
  );
  addCssRule(
    "@keyframes ball-beat ",
    ` 50% {
    opacity: 0.2;
    -webkit-transform: scale(0.75);
    transform: scale(0.75); }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1); } `
  );
  addCssRule(
    ".ball-beat > div",
    `background-color: #279fcf;
    width: 15px;
    height: 15px;
    border-radius: 100% !important;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat 0.7s 0s infinite linear;
    animation: ball-beat 0.7s 0s infinite linear;`
  );
  addCssRule(
    ".ball-beat > div:nth-child(2n-1)",
    `-webkit-animation-delay: 0.35s !important;
  animation-delay: 0.35s !important;`
  );
}

function loadDom() {
  const panel = document.createElement("div");
  panel.innerHTML = `
  <div id="Loading">
    <div class="loader-inner ball-beat">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  `;
  document.body.appendChild(panel.children[0]);
}

(() => {
  loadDom();
  loadCSS();
})();
