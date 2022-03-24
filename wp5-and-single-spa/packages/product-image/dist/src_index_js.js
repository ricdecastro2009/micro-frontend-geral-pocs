(window["webpackJsonpproduct_image"] = window["webpackJsonpproduct_image"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export bootstrap [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export mount [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export unmount [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => /* binding */ bootstrap,
/* harmony export */   "mount": () => /* binding */ mount,
/* harmony export */   "unmount": () => /* binding */ unmount
/* harmony export */ });
/* harmony import */ var home_fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home/fruit */ "?4d47");
/* harmony import */ var home_fruit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(home_fruit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! single-spa-html */ "?eca3");
/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "?f4f3");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_store__WEBPACK_IMPORTED_MODULE_2__);



const template = `
<div
  class="product-images"
  style="display: grid; grid-template-columns: repeat(5, 20%);"
>
</div>
`;
const jsComponent = single_spa_html__WEBPACK_IMPORTED_MODULE_1___default()({
  template
});
jsComponent.originalMount = jsComponent.mount;

jsComponent.mount = function (opts, props) {
  return jsComponent.originalMount(opts, props).then(() => {
    const el = document.querySelector('.product-images');
    const html = home_fruit__WEBPACK_IMPORTED_MODULE_0___default().map(({
      image
    }, index) => `
<img src="${image}" style="max-width: 100%" data-index="${index}" />
          `).join('');
    el.innerHTML = html;
    document.querySelectorAll('.product-images img').forEach(el => el.addEventListener('click', evt => {
      (store_store__WEBPACK_IMPORTED_MODULE_2___default().image) = parseInt(evt.target.getAttribute('data-index'));
    }));
  });
};

const bootstrap = jsComponent.bootstrap;
const mount = jsComponent.mount;
const unmount = jsComponent.unmount;

/***/ })

}]);
//# sourceMappingURL=src_index_js.js.map