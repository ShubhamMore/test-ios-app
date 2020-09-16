(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm-es5/index-92848855.js");
/* harmony import */ var _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-23e7365a.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-23e7365a.js");
/* harmony import */ var _theme_5641d27f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-5641d27f.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-5641d27f.js");



var textCss = ":host(.ion-color){color:var(--ion-color-base)}";
var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Text.prototype.render = function () {
        var _a;
        var mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_theme_5641d27f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, (_a = {},
                _a[mode] = true,
                _a)) }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return Text;
}());
Text.style = textCss;



/***/ })

}]);