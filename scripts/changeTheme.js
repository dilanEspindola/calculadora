var _a, _b, _c;
window.addEventListener("DOMContentLoaded", function () {
    var _a;
    (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.add("active-1");
});
(_a = document.querySelector(".uno")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b, _c;
    (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.add("active-1");
    (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.remove("active-2");
    (_c = document.querySelector('body')) === null || _c === void 0 ? void 0 : _c.classList.remove("active-3");
});
(_b = document.querySelector(".dos")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a, _b, _c;
    (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.add("active-2");
    (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.remove("active-3");
    (_c = document.querySelector('body')) === null || _c === void 0 ? void 0 : _c.classList.remove("active-1");
});
(_c = document.querySelector(".tres")) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a, _b, _c;
    (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.add("active-3");
    (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.remove("active-1");
    (_c = document.querySelector('body')) === null || _c === void 0 ? void 0 : _c.classList.remove("active-2");
});
