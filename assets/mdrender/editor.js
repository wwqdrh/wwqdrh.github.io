const url = new URL(import.meta.url)
const urlParams = new URLSearchParams(url.search);
const pathname = url.pathname
const relname = pathname.slice(0, pathname.lastIndexOf("/"))
let css = document.createElement("link")
css.rel = "stylesheet"
css.href = url.origin + relname + "/editor-render.css"
document.head.appendChild(css)

let modulePromise = import('./editor-render.es.js' + new URL(import.meta.url).search);
modulePromise.then(module => {
    const uikit_editor = module;
    // 执行导入后的代码
    window.uikit_editor = uikit_editor
    const editable = urlParams.get("editable");
    if (editable === "true") {
        let css = document.createElement("link")
        css.rel = "stylesheet"
        css.href = relname + "/editor.css"
        document.head.appendChild(css)

        let modulePromise = import('./editor.es.js');
        modulePromise.then(module2 => {
            module.registerModel(module2.models)
            window.uikit_editor = module
        });
    } else {
        window.uikit_editor = module
    }
});
