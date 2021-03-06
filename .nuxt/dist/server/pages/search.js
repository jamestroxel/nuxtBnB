exports.ids = [14,2];
exports.modules = {

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((number, singularWord) => {
  const text = `${number} ${singularWord}`;
  if (number == 1) return text;
  return text + 's';
});

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeRow.vue?vue&type=template&id=52c66df2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"app-house-header\""+(_vm._ssrStyle(null,("background-image:url(" + (_vm.home.images[0]) + ")"), null))+"></div> <div class=\"app-house-body\"><img src=\"/images/icons/heart.svg\" class=\"app-fav\"> <h2>"+_vm._ssrEscape(_vm._s(_vm.home.title))+"</h2> <div class=\"app-address\">"+_vm._ssrEscape(_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+" "+_vm._s(_vm.home.location.state))+"</div> <div class=\"app-amenities\"><p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.pluralize(_vm.home.guests, 'guest'))+", "+_vm._s(_vm.pluralize(_vm.home.bedroooms, 'rooms'))+", "+_vm._s(_vm.pluralize(_vm.home.beds, 'bed'))+", "+_vm._s(_vm.pluralize(_vm.home.bathrooms, 'bath'))+"\n            ")+"</p> <p>"+_vm._ssrEscape(_vm._s(_vm.features))+"</p></div> <div class=\"app-flex\"><div class=\"app-rating\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.home.reviewValue)+"\n                ")+"<span>"+_vm._ssrEscape("("+_vm._s(_vm.home.reviewCount)+")")+"</span></div> <div class=\"app-price\">"+_vm._ssrEscape("\n                $"+_vm._s(_vm.home.pricePerNight))+"<span>/ night</span></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeRow.vue?vue&type=template&id=52c66df2&

// EXTERNAL MODULE: ./utils/pluralize.js
var pluralize = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeRow.vue?vue&type=script&lang=js&
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

/* harmony default export */ var HomeRowvue_type_script_lang_js_ = ({
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  computed: {
    features() {
      return this.home.features.slice(0, 3).join(", ");
    }

  },
  methods: {
    pluralize: pluralize["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/HomeRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeRowvue_type_script_lang_js_ = (HomeRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HomeRow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeRowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "21237f74"
  
)

/* harmony default export */ var HomeRow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=template&id=69cb5376&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-search-results-page"},[_vm._ssrNode("<div class=\"app-search-results\">","</div>",[_vm._ssrNode("<div class=\"app-search-results-listing\">","</div>",[_vm._ssrNode("<h2 class=\"app-title\">"+_vm._ssrEscape("\n                Stays in "+_vm._s(_vm.label)+"\n            ")+"</h2> "),_vm._l((_vm.homes),function(home){return _c('nuxt-link',{key:home.objectID,attrs:{"to":("/home/" + (home.objectID))}},[_c('HomeRow',{staticClass:"app-house",attrs:{"home":home},nativeOn:{"mouseover":function($event){return _vm.highlightMarker(home.objectID, true)},"mouseout":function($event){return _vm.highlightMarker(home.objectID, false)}}})],1)})],2),_vm._ssrNode(" <div class=\"app-search-results-map\"><div class=\"app-map\"></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search.vue?vue&type=template&id=69cb5376&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=script&lang=js&
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
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  head() {
    return {
      title: `Homes around ${this.label}`
    };
  },

  async beforeRouteUpdate(to, from, next) {
    const data = await this.$dataApi.getHomesByLocation(to.query.lat, to.query.lng);
    this.homes = data.json.hits;
    this.label = to.query.label;
    this.lat = to.query.lat;
    this.lng = to.query.lng;
    this.updateMap();
    next();
  },

  async asyncData({
    query,
    $dataApi
  }) {
    const data = await $dataApi.getHomesByLocation(query.lat, query.lng);
    return {
      homes: data.json.hits,
      label: query.label,
      lat: query.lat,
      lng: query.lng
    };
  },

  mounted() {
    this.updateMap();
  },

  methods: {
    highlightMarker(homeId, isHighlighted) {
      var _document$getElements, _document$getElements2;

      (_document$getElements = document.getElementsByClassName(`home-${homeId}`)[0]) === null || _document$getElements === void 0 ? void 0 : (_document$getElements2 = _document$getElements.classList) === null || _document$getElements2 === void 0 ? void 0 : _document$getElements2.toggle('marker-highlight', isHighlighted);
    },

    updateMap() {
      this.$maps.showMap(this.$refs.map, this.lat, this.lng, this.getHomeMarkers());
    },

    getHomeMarkers() {
      if (this.homes.length == 0) return null;
      return this.homes.map(home => {
        return { ...home._geoloc,
          pricePerNight: home.pricePerNight,
          id: home.objectID
        };
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b62ef336"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeRow: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=search.js.map