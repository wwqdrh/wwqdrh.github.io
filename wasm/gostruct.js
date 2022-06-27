window.gostructinit = function () {
    const go = new Go();

    WebAssembly.instantiateStreaming(fetch("/wasm/gostruct.wasm"), go.importObject).then(async (result) => {
        await go.run(result.instance)
    });

}

window.json2struct = function (value) {
    return json2struct(value)
}

window.xml2struct = function (value) {
    return xml2struct(value)
}