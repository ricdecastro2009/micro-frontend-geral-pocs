/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ "container-reference/home":
/*!***********************!*\
  !*** external "home" ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = home;

/***/ }),

/***/ "container-reference/store":
/*!************************!*\
  !*** external "store" ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = store;

/***/ }),

/***/ "?686a":
/*!************************************************!*\
  !*** remote override container-reference/home ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var external = __webpack_require__("container-reference/home");
external.override(Object.assign({
	"single-spa-html": () => {
		return Promise.resolve().then(() => {
			return () => __webpack_require__("?eca3")
		})
	}
}, __webpack_require__.O));
module.exports = external;

/***/ }),

/***/ "?629d":
/*!*************************************************!*\
  !*** remote override container-reference/store ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var external = __webpack_require__("container-reference/store");
external.override(Object.assign({
	"single-spa-html": () => {
		return Promise.resolve().then(() => {
			return () => __webpack_require__("?eca3")
		})
	}
}, __webpack_require__.O));
module.exports = external;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/overridables */
/******/ 	(() => {
/******/ 		__webpack_require__.O = {};
/******/ 		var chunkMapping = {};
/******/ 		var idToNameMapping = {};
/******/ 		var fallbackMapping = {
/******/ 		
/******/ 		};
/******/ 		__webpack_require__.f.overridables = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_modules__[id]) return;
/******/ 					promises.push(Promise.resolve((__webpack_require__.O[idToNameMapping[id]] || fallbackMapping[id])()).then((factory) => {
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					}))
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:3002/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {};
/******/ 		var idToExternalAndNameMapping = {};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_modules__[id]) return;
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					promises.push(Promise.resolve(__webpack_require__(data[0]).get(data[1])).then((factory) => {
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					}))
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							var loadingEnded = () => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) return installedChunkData[1];
/******/ 								}
/******/ 							};
/******/ 							var script = document.createElement('script');
/******/ 							var onScriptComplete;
/******/ 		
/******/ 							script.charset = 'utf-8';
/******/ 							script.timeout = 120;
/******/ 							if (__webpack_require__.nc) {
/******/ 								script.setAttribute("nonce", __webpack_require__.nc);
/******/ 							}
/******/ 							script.src = url;
/******/ 		
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							onScriptComplete = (event) => {
/******/ 								onScriptComplete = () => {
/******/ 		
/******/ 								}
/******/ 								// avoid mem leaks in IE.
/******/ 								script.onerror = script.onload = null;
/******/ 								clearTimeout(timeout);
/******/ 								var reportError = loadingEnded();
/******/ 								if(reportError) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									reportError(error);
/******/ 								}
/******/ 							}
/******/ 							;
/******/ 							var timeout = setTimeout(() => {
/******/ 								onScriptComplete({ type: 'timeout', target: script })
/******/ 							}, 120000);
/******/ 							script.onerror = script.onload = onScriptComplete;
/******/ 							document.head.appendChild(script);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 		
/******/ 						// no HMR
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		function webpackJsonpCallback(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 		
/******/ 			var runtime = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		var jsonpArray = window["webpackJsonpproduct_image"] = window["webpackJsonpproduct_image"] || [];
/******/ 		var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 		jsonpArray.push = webpackJsonpCallback;
/******/ 		var parentJsonpFunction = oldJsonpFunction;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=main.js.map