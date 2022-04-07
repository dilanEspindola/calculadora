function reset() {
    var _a;
    (_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.reset();
}
function borrar() {
    var pantallaInput = document.getElementById("pantalla");
    document.getElementById('pantalla').value = pantallaInput.slice(0, pantallaInput.length - 1);
}
