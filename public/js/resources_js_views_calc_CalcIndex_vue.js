(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_calc_CalcIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calc/CalcIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calc/CalcIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CalcIndex",
  data: function data() {
    return {
      isLoading: true,
      items: []
    };
  },
  mounted: function mounted() {
    this.loadItems();
  },
  methods: {
    loadItems: function loadItems() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/calcs').then(function (result) {
        console.log(result.data);
        _this.items = result.data;
        _this.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/calc/CalcIndex.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/calc/CalcIndex.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalcIndex_vue_vue_type_template_id_9525bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true& */ "./resources/js/views/calc/CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true&");
/* harmony import */ var _CalcIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalcIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/calc/CalcIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CalcIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CalcIndex_vue_vue_type_template_id_9525bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CalcIndex_vue_vue_type_template_id_9525bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9525bd3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/calc/CalcIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/calc/CalcIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/calc/CalcIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalcIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalcIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calc/CalcIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalcIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/calc/CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/calc/CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalcIndex_vue_vue_type_template_id_9525bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalcIndex_vue_vue_type_template_id_9525bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalcIndex_vue_vue_type_template_id_9525bd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calc/CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calc/CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/calc/CalcIndex.vue?vue&type=template&id=9525bd3c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("table", { staticClass: "table table-bordered table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.items, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", [_vm._v(_vm._s(item.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.matrix))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.main_value))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.diagonal_value))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.sum_columns))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c("router-link", { attrs: { to: "/calc/" + item.id } }, [
                      _vm._v("Детально")
                    ])
                  ],
                  1
                )
              ])
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Матрица")]),
        _vm._v(" "),
        _c("th", [_vm._v("Главная")]),
        _vm._v(" "),
        _c("th", [_vm._v("Побочная")]),
        _vm._v(" "),
        _c("th", [_vm._v("Сумма столбцов")]),
        _vm._v(" "),
        _c("th", [_vm._v("Операции")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);