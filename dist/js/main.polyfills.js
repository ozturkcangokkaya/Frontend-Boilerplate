/*!
 * Frontend-Boilerplate v0.0.1
 * A boilerplate for building front-end of web projects
 * (c) 2019 Öztürk Can Gökkaya
 * MIT License
 * https://github.com/ozturkcangokkaya/Frontend-Boilerplate
 */

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is loaded");
});
