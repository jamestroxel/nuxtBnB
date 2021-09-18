module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/home-card","2":"components/home-row","3":"components/property-description","4":"components/property-details","5":"components/property-gallery","6":"components/property-host","7":"components/property-map","8":"components/property-reviews","9":"components/short-text","10":"pages/admin","11":"pages/home/_id","12":"pages/index","13":"pages/no-access","14":"pages/search"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(17);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  isLoggedIn: false,
  user: {}
});
const mutations = {
  user(state, user) {
    state.isLoggedIn = !!user;
    state.user = user || {};
  }

};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "HomeCard", function() { return HomeCard; });
__webpack_require__.d(components_namespaceObject, "HomeRow", function() { return HomeRow; });
__webpack_require__.d(components_namespaceObject, "PropertyDescription", function() { return PropertyDescription; });
__webpack_require__.d(components_namespaceObject, "PropertyDetails", function() { return PropertyDetails; });
__webpack_require__.d(components_namespaceObject, "PropertyGallery", function() { return PropertyGallery; });
__webpack_require__.d(components_namespaceObject, "PropertyHost", function() { return PropertyHost; });
__webpack_require__.d(components_namespaceObject, "PropertyMap", function() { return PropertyMap; });
__webpack_require__.d(components_namespaceObject, "PropertyReviews", function() { return PropertyReviews; });
__webpack_require__.d(components_namespaceObject, "ShortText", function() { return ShortText; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(9);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(10);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(5);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(4);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(6);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _4304433b = () => interopDefault(__webpack_require__.e(/* import() | pages/admin */ 10).then(__webpack_require__.bind(null, 35)));

const _0711445c = () => interopDefault(__webpack_require__.e(/* import() | pages/no-access */ 13).then(__webpack_require__.bind(null, 39)));

const _66705c28 = () => interopDefault(__webpack_require__.e(/* import() | pages/search */ 14).then(__webpack_require__.bind(null, 36)));

const _dfcaa664 = () => interopDefault(__webpack_require__.e(/* import() | pages/home/_id */ 11).then(__webpack_require__.bind(null, 37)));

const _1194ef3e = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 12).then(__webpack_require__.bind(null, 38)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/admin",
    component: _4304433b,
    name: "admin"
  }, {
    path: "/no-access",
    component: _0711445c,
    name: "no-access"
  }, {
    path: "/search",
    component: _66705c28,
    name: "search"
  }, {
    path: "/home/:id?",
    component: _dfcaa664,
    name: "home-id"
  }, {
    path: "/",
    component: _1194ef3e,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=67531de8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"text-align":"center"}},[_vm._ssrNode("<img src=\"data:image/jpeg;base64,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\"><br><br> <h1>Error!!</h1>"+_vm._ssrEscape("\n    "+_vm._s(_vm.error.message)+" "+_vm._s(_vm.error.statusCode)))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=67531de8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'BIG PROBLEMS'
    };
  },

  props: {
    error: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "87bed640"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(13)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "55c3d74b"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(14);

// EXTERNAL MODULE: ./assets/sass/app.scss
var sass_app = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=67cfe3d6&
var defaultvue_type_template_id_67cfe3d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app"},[_vm._ssrNode("<header class=\"app-header\"><div class=\"app-logo\"><img src=\"/images/logo.svg\"></div> <div class=\"app-search\"><input type=\"text\" placeholder=\"Enter your address\"> <input type=\"text\" placeholder=\"Check in\" class=\"datepicker\"> <input type=\"text\" placeholder=\"Check out\" class=\"datepicker\"> <button><img src=\"/images/icons/search.svg\"></button></div> <div class=\"app-user-menu\">"+((_vm.isLoggedIn)?("<img src=\"/images/icons/house.svg\"> <div class=\"name\">Host</div> <img"+(_vm._ssrAttr("src",_vm.user.profileUrl))+" class=\"avatar\">"):"<!---->")+" <div id=\"googleButton\" class=\"ml-8\""+(_vm._ssrStyle(null,null, { display: (!_vm.isLoggedIn) ? '' : 'none' }))+"></div></div></header> "),_c('nuxt')],2)}
var defaultvue_type_template_id_67cfe3d6_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=67cfe3d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
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
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    }

  },

  mounted() {
    this.$maps.makeAutoComplete(this.$refs.citySearch);
  },

  methods: {
    changed(event) {
      const place = event.detail;
      if (!place.geometry) return;
      this.$router.push({
        name: 'search',
        query: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          label: this.$refs.citySearch.value
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_67cfe3d6_render,
  defaultvue_type_template_id_67cfe3d6_staticRenderFns,
  false,
  null,
  null,
  "bf2676ce"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(16), 'auth.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const HomeCard = () => __webpack_require__.e(/* import() | components/home-card */ 1).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c));
const HomeRow = () => __webpack_require__.e(/* import() | components/home-row */ 2).then(__webpack_require__.bind(null, 25)).then(c => wrapFunctional(c.default || c));
const PropertyDescription = () => __webpack_require__.e(/* import() | components/property-description */ 3).then(__webpack_require__.bind(null, 28)).then(c => wrapFunctional(c.default || c));
const PropertyDetails = () => __webpack_require__.e(/* import() | components/property-details */ 4).then(__webpack_require__.bind(null, 27)).then(c => wrapFunctional(c.default || c));
const PropertyGallery = () => __webpack_require__.e(/* import() | components/property-gallery */ 5).then(__webpack_require__.bind(null, 26)).then(c => wrapFunctional(c.default || c));
const PropertyHost = () => __webpack_require__.e(/* import() | components/property-host */ 6).then(__webpack_require__.bind(null, 31)).then(c => wrapFunctional(c.default || c));
const PropertyMap = () => __webpack_require__.e(/* import() | components/property-map */ 7).then(__webpack_require__.bind(null, 29)).then(c => wrapFunctional(c.default || c));
const PropertyReviews = () => __webpack_require__.e(/* import() | components/property-reviews */ 8).then(__webpack_require__.bind(null, 30)).then(c => wrapFunctional(c.default || c));
const ShortText = () => __webpack_require__.e(/* import() | components/short-text */ 9).then(__webpack_require__.bind(null, 23)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(8);

// CONCATENATED MODULE: ./utils/fetchUtils.js
async function unWrap(response) {
  const json = await response.json();
  const {
    ok,
    status,
    statusText
  } = response;
  return {
    json,
    ok,
    status,
    statusText
  };
}
function getErrorResponse(error) {
  return {
    ok: false,
    status: 500,
    statusText: error.message,
    json: {}
  };
}
// CONCATENATED MODULE: ./plugins/dataApi.js

/* harmony default export */ var dataApi = (function ({
  $config
}, inject) {
  const headers = {
    "X-Algolia-API-Key": $config.algolia.key,
    "X-Algolia-Application-Id": $config.algolia.appId
  };
  inject('dataApi', {
    getHome,
    getReviewsByHomeId,
    getUsersByHomeId,
    getHomesByLocation
  });

  async function getHome(homeID) {
    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/${homeID}`, {
        headers
      }));
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  async function getReviewsByHomeId(homeId) {
    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/reviews/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          filters: `homeId: ${homeId}`,
          hitsPerPage: 6,
          attributesToHighlight: []
        })
      }));
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  async function getUsersByHomeId(homeId) {
    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/users/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          filters: `homeId: ${homeId}`,
          attributesToHighlight: []
        })
      }));
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  async function getHomesByLocation(lat, lng, radiusInMeters = 1500) {
    try {
      return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          aroundLatLng: `${lat},${lng}`,
          aroundRadius: radiusInMeters,
          attributesToHighlight: [],
          hitsPerPage: 10
        })
      }));
    } catch (error) {
      return getErrorResponse(error);
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ../plugins/maps.client (mode: 'client')

 // Source: ../plugins/dataApi (mode: 'all')

 // Source: ../plugins/auth.client (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "titleTemplate": "Mastering Nuxt: %s",
      "htmlAttrs": {
        "lang": "en"
      },
      "bodyAttrs": {
        "class": ["my-style"]
      },
      "meta": [{
        "charset": "utf-8"
      }],
      "link": [],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof dataApi === 'function') {
    await dataApi(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    const {
      route
    } = router.resolve(app.context.route.fullPath); // Ignore 404s rather than blindly replacing URL

    if (!route.matched.length && false) {
      return resolve();
    }

    router.replace(route, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: false
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map