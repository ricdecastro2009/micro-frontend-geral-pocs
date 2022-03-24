/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/single-spa/lib/esm/single-spa.min.js":
/*!***************************************************************!*\
  !*** ../../node_modules/single-spa/lib/esm/single-spa.min.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export BOOTSTRAPPING [provided] [unused] [could be renamed] */
/*! export LOADING_SOURCE_CODE [provided] [unused] [could be renamed] */
/*! export LOAD_ERROR [provided] [unused] [could be renamed] */
/*! export MOUNTED [provided] [unused] [could be renamed] */
/*! export MOUNTING [provided] [unused] [could be renamed] */
/*! export NOT_BOOTSTRAPPED [provided] [unused] [could be renamed] */
/*! export NOT_LOADED [provided] [unused] [could be renamed] */
/*! export NOT_MOUNTED [provided] [unused] [could be renamed] */
/*! export SKIP_BECAUSE_BROKEN [provided] [unused] [could be renamed] */
/*! export UNMOUNTING [provided] [unused] [could be renamed] */
/*! export UPDATING [provided] [unused] [could be renamed] */
/*! export addErrorHandler [provided] [unused] [could be renamed] */
/*! export checkActivityFunctions [provided] [unused] [could be renamed] */
/*! export ensureJQuerySupport [provided] [unused] [could be renamed] */
/*! export getAppNames [provided] [unused] [could be renamed] */
/*! export getAppStatus [provided] [unused] [could be renamed] */
/*! export getMountedApps [provided] [unused] [could be renamed] */
/*! export mountRootParcel [provided] [unused] [could be renamed] */
/*! export navigateToUrl [provided] [unused] [could be renamed] */
/*! export registerApplication [provided] [used] [could be renamed] */
/*! export removeErrorHandler [provided] [unused] [could be renamed] */
/*! export setBootstrapMaxTime [provided] [unused] [could be renamed] */
/*! export setMountMaxTime [provided] [unused] [could be renamed] */
/*! export setUnloadMaxTime [provided] [unused] [could be renamed] */
/*! export setUnmountMaxTime [provided] [unused] [could be renamed] */
/*! export start [provided] [used] [could be renamed] */
/*! export triggerAppChange [provided] [unused] [could be renamed] */
/*! export unloadApplication [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__.g, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerApplication": () => /* binding */ Nt,
/* harmony export */   "start": () => /* binding */ Gt
/* harmony export */ });
/* unused harmony exports BOOTSTRAPPING, LOADING_SOURCE_CODE, LOAD_ERROR, MOUNTED, MOUNTING, NOT_BOOTSTRAPPED, NOT_LOADED, NOT_MOUNTED, SKIP_BECAUSE_BROKEN, UNMOUNTING, UPDATING, addErrorHandler, checkActivityFunctions, ensureJQuerySupport, getAppNames, getAppStatus, getMountedApps, mountRootParcel, navigateToUrl, removeErrorHandler, setBootstrapMaxTime, setMountMaxTime, setUnloadMaxTime, setUnmountMaxTime, triggerAppChange, unloadApplication */
/* single-spa@5.1.0 - ESM - prod */
var t = Object.freeze({
  __proto__: null,

  get start() {
    return Gt;
  },

  get ensureJQuerySupport() {
    return pt;
  },

  get setBootstrapMaxTime() {
    return V;
  },

  get setMountMaxTime() {
    return q;
  },

  get setUnmountMaxTime() {
    return z;
  },

  get setUnloadMaxTime() {
    return X;
  },

  get registerApplication() {
    return Nt;
  },

  get getMountedApps() {
    return Tt;
  },

  get getAppStatus() {
    return bt;
  },

  get unloadApplication() {
    return Mt;
  },

  get checkActivityFunctions() {
    return At;
  },

  get getAppNames() {
    return Pt;
  },

  get navigateToUrl() {
    return nt;
  },

  get triggerAppChange() {
    return It;
  },

  get addErrorHandler() {
    return i;
  },

  get removeErrorHandler() {
    return a;
  },

  get mountRootParcel() {
    return k;
  },

  get NOT_LOADED() {
    return c;
  },

  get LOADING_SOURCE_CODE() {
    return l;
  },

  get NOT_BOOTSTRAPPED() {
    return f;
  },

  get BOOTSTRAPPING() {
    return h;
  },

  get NOT_MOUNTED() {
    return p;
  },

  get MOUNTING() {
    return m;
  },

  get UPDATING() {
    return v;
  },

  get LOAD_ERROR() {
    return g;
  },

  get MOUNTED() {
    return d;
  },

  get UNMOUNTING() {
    return w;
  },

  get SKIP_BECAUSE_BROKEN() {
    return E;
  }

}),
    e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {}).CustomEvent,
    r = function () {
  try {
    var t = new e("cat", {
      detail: {
        foo: "bar"
      }
    });
    return "cat" === t.type && "bar" === t.detail.foo;
  } catch (t) {}

  return !1;
}() ? e : "undefined" != typeof document && "function" == typeof document.createEvent ? function (t, e) {
  var r = document.createEvent("CustomEvent");
  return e ? r.initCustomEvent(t, e.bubbles, e.cancelable, e.detail) : r.initCustomEvent(t, !1, !1, void 0), r;
} : function (t, e) {
  var r = document.createEventObject();
  return r.type = t, e ? (r.bubbles = Boolean(e.bubbles), r.cancelable = Boolean(e.cancelable), r.detail = e.detail) : (r.bubbles = !1, r.cancelable = !1, r.detail = void 0), r;
},
    n = [];

function o(t, e) {
  var r = s(t, e);
  n.length ? n.forEach(t => t(r)) : setTimeout(() => {
    throw r;
  });
}

function i(t) {
  if ("function" != typeof t) throw Error(u(28, !1));
  n.push(t);
}

function a(t) {
  if ("function" != typeof t) throw Error(u(29, !1));
  var e = !1;
  return n = n.filter(r => {
    var n = r === t;
    return e = e || n, !n;
  }), e;
}

function u(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];

  return "single-spa minified message #".concat(t, ": ").concat(e ? e + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(n.length ? "&arg=".concat(n.join("&arg=")) : "");
}

function s(t, e) {
  var r,
      n = "".concat(M(e), " '").concat(S(e), "' died in status ").concat(e.status, ": ");

  if (t instanceof Error) {
    try {
      t.message = n + t.message;
    } catch (t) {}

    r = t;
  } else {
    console.warn(u(30, !1, e.status, S(e)));

    try {
      r = Error(n + JSON.stringify(t));
    } catch (e) {
      r = t;
    }
  }

  return r.appOrParcelName = S(e), r;
}

var c = "NOT_LOADED",
    l = "LOADING_SOURCE_CODE",
    f = "NOT_BOOTSTRAPPED",
    h = "BOOTSTRAPPING",
    p = "NOT_MOUNTED",
    m = "MOUNTING",
    d = "MOUNTED",
    v = "UPDATING",
    w = "UNMOUNTING",
    g = "LOAD_ERROR",
    E = "SKIP_BECAUSE_BROKEN";

function y(t) {
  return t.status === d;
}

function O(t) {
  return !y(t);
}

function T(t) {
  return t.status !== c && t.status !== l && t.status !== g;
}

function P(t) {
  return !T(t);
}

function b(t) {
  try {
    return t.activeWhen(window.location);
  } catch (e) {
    o(e, t), t.status = E;
  }
}

function N(t) {
  try {
    return !t.activeWhen(window.location);
  } catch (e) {
    o(e, t), t.status = E;
  }
}

function A(t) {
  return t !== E && (!t || t.status !== E);
}

function _(t) {
  return t.status !== g || new Date().getTime() - t.loadErrorTime >= 200;
}

function S(t) {
  return t.name;
}

function D(t) {
  return Boolean(t.unmountThisParcel);
}

function M(t) {
  return D(t) ? "parcel" : "application";
}

function U() {
  for (var t = arguments.length - 1; t > 0; t--) for (var e in arguments[t]) "__proto__" !== e && (arguments[t - 1][e] = arguments[t][e]);

  return arguments[0];
}

function L(t, e) {
  for (var r = 0; r < t.length; r++) if (e(t[r])) return t[r];

  return null;
}

function j(t) {
  return t && ("function" == typeof t || (e = t, Array.isArray(e) && !L(e, t => "function" != typeof t)));
  var e;
}

function I(t, e) {
  var r = t[e] || [];
  0 === (r = Array.isArray(r) ? r : [r]).length && (r = [() => Promise.resolve()]);
  var n = M(t),
      o = S(t);
  return function (t) {
    return r.reduce((r, i, a) => r.then(() => {
      var r = i(t);
      return R(r) ? r : Promise.reject(u(15, !1, n, o, e, a));
    }), Promise.resolve());
  };
}

function R(t) {
  return t && "function" == typeof t.then && "function" == typeof t.catch;
}

function x(t, e) {
  return Promise.resolve().then(() => t.status !== f ? t : (t.status = h, Y(t, "bootstrap").then(() => (t.status = p, t)).catch(r => {
    if (t.status = E, e) throw s(r, t);
    return o(r, t), t;
  })));
}

function G(t, e) {
  return Promise.resolve().then(() => {
    if (t.status !== d) return t;
    t.status = w;
    var r = Object.keys(t.parcels).map(e => t.parcels[e].unmountThisParcel());
    return Promise.all(r).then(n, r => n().then(() => {
      var n = Error(r.message);

      if (e) {
        var i = s(n, t);
        throw t.status = E, i;
      }

      o(n, t), t.status = E;
    })).then(() => t);

    function n() {
      return Y(t, "unmount").then(() => {
        t.status = p;
      }).catch(r => {
        if (e) {
          var n = s(r, t);
          throw t.status = E, n;
        }

        o(r, t), t.status = E;
      });
    }
  });
}

var B = !1,
    C = !1;

function K(t, e) {
  return Promise.resolve().then(() => t.status !== p ? t : (B || (window.dispatchEvent(new r("single-spa:before-first-mount")), B = !0), Y(t, "mount").then(() => (t.status = d, C || (window.dispatchEvent(new r("single-spa:first-mount")), C = !0), t)).catch(r => {
    return t.status = d, G(t).then(n, n);

    function n() {
      if (e) {
        var n = s(r, t);
        throw t.status = E, n;
      }

      return o(r, t), t.status = E, t;
    }
  })));
}

var W = 0,
    $ = {
  parcels: {}
};

function k() {
  return F.apply($, arguments);
}

function F(t, e) {
  var r = this;
  if (!t || "object" != typeof t && "function" != typeof t) throw Error(u(2, !1));
  if (t.name && "string" != typeof t.name) throw Error(u(3, !1, typeof t.name));
  if ("object" != typeof e) throw Error(u(4, !1, name, typeof e));
  if (!e.domElement) throw Error(u(5, !1, name));
  var n,
      o = W++,
      i = "function" == typeof t,
      a = i ? t : () => Promise.resolve(t),
      c = {
    id: o,
    parcels: {},
    status: i ? l : f,
    customProps: e,
    parentName: S(r),

    unmountThisParcel() {
      if (c.status !== d) throw Error(u(6, !1, name, c.status));
      return G(c, !0).then(t => (c.parentName && delete r.parcels[c.id], t)).then(t => (m(t), t)).catch(t => {
        throw c.status = E, w(t), t;
      });
    }

  };
  r.parcels[o] = c;
  var h = a();
  if (!h || "function" != typeof h.then) throw Error(u(7, !1));
  var m,
      w,
      g = (h = h.then(t => {
    if (!t) throw Error(u(8, !1));
    var e = t.name || "parcel-".concat(o);
    if (!j(t.bootstrap)) throw Error(u(9, !1, e));
    if (!j(t.mount)) throw Error(u(10, !1, e));
    if (!j(t.unmount)) throw Error(u(11, !1, e));
    if (t.update && !j(t.update)) throw Error(u(12, !1, e));
    var r = I(t, "bootstrap"),
        i = I(t, "mount"),
        a = I(t, "unmount");
    c.status = f, c.name = e, c.bootstrap = r, c.mount = i, c.unmount = a, c.timeouts = Z(t.timeouts), t.update && (c.update = I(t, "update"), n.update = function (t) {
      return c.customProps = t, J(function (t) {
        return Promise.resolve().then(() => {
          if (t.status !== d) throw Error(u(32, !1, S(t)));
          return t.status = v, Y(t, "update").then(() => (t.status = d, t)).catch(e => {
            var r = s(e, t);
            throw t.status = E, r;
          });
        });
      }(c));
    });
  })).then(() => x(c, !0)),
      y = g.then(() => K(c, !0)),
      O = new Promise((t, e) => {
    m = t, w = e;
  });
  return n = {
    mount: () => J(Promise.resolve().then(() => {
      if (c.status !== p) throw Error(u(13, !1, name, c.status));
      return r.parcels[o] = c, K(c);
    })),
    unmount: () => J(c.unmountThisParcel()),
    getStatus: () => c.status,
    loadPromise: J(h),
    bootstrapPromise: J(g),
    mountPromise: J(y),
    unmountPromise: J(O)
  };
}

function J(t) {
  return t.then(() => null);
}

function H(e) {
  var r = U({}, e.customProps, {
    name: S(e),
    mountParcel: F.bind(e),
    singleSpa: t
  });
  return D(e) && (r.unmountSelf = e.unmountThisParcel), r;
}

var Q = {
  bootstrap: {
    millis: 4e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  mount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unmount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unload: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  update: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  }
};

function V(t, e, r) {
  if ("number" != typeof t || t <= 0) throw Error(u(16, !1));
  Q.bootstrap = {
    millis: t,
    dieOnTimeout: e,
    warningMillis: r || 1e3
  };
}

function q(t, e, r) {
  if ("number" != typeof t || t <= 0) throw Error(u(17, !1));
  Q.mount = {
    millis: t,
    dieOnTimeout: e,
    warningMillis: r || 1e3
  };
}

function z(t, e, r) {
  if ("number" != typeof t || t <= 0) throw Error(u(18, !1));
  Q.unmount = {
    millis: t,
    dieOnTimeout: e,
    warningMillis: r || 1e3
  };
}

function X(t, e, r) {
  if ("number" != typeof t || t <= 0) throw Error(u(19, !1));
  Q.unload = {
    millis: t,
    dieOnTimeout: e,
    warningMillis: r || 1e3
  };
}

function Y(t, e) {
  var r = t.timeouts[e],
      n = r.warningMillis,
      o = M(t);
  return new Promise((i, a) => {
    var s = !1,
        c = !1;
    t[e](H(t)).then(t => {
      s = !0, i(t);
    }).catch(t => {
      s = !0, a(t);
    }), setTimeout(() => f(1), n), setTimeout(() => f(!0), r.millis);
    var l = u(31, !1, e, o, S(t), r.millis);

    function f(t) {
      if (!s) if (!0 === t) c = !0, r.dieOnTimeout ? a(Error(l)) : console.error(l);else if (!c) {
        var e = t,
            o = e * n;
        console.warn(l), o + n < r.millis && setTimeout(() => f(e + 1), n);
      }
    }
  });
}

function Z(t) {
  var e = {};

  for (var r in Q) e[r] = U({}, Q[r], t && t[r] || {});

  return e;
}

function tt(t) {
  return Promise.resolve().then(() => {
    return t.loadPromise ? t.loadPromise : t.status !== c && t.status !== g ? t : (t.status = l, t.loadPromise = Promise.resolve().then(() => {
      var n = t.loadImpl(H(t));
      if (!R(n)) throw r = !0, Error(u(33, !1, S(t)));
      return n.then(r => {
        var n;
        t.loadErrorTime = null, "object" != typeof (e = r) && (n = 34), j(e.bootstrap) || (n = 35), j(e.mount) || (n = 36), j(e.unmount) || (n = 37);
        var i = M(e);

        if (n) {
          var a;

          try {
            a = JSON.stringify(e);
          } catch (t) {}

          return console.error(u(n, !1, i, S(t), a), e), o(void 0, t), t.status = E, t;
        }

        return e.devtools && e.devtools.overlays && (t.devtools.overlays = U({}, t.devtools.overlays, e.devtools.overlays)), t.status = f, t.bootstrap = I(e, "bootstrap"), t.mount = I(e, "mount"), t.unmount = I(e, "unmount"), t.unload = I(e, "unload"), t.timeouts = Z(e.timeouts), delete t.loadPromise, t;
      });
    }).catch(e => (delete t.loadPromise, o(e, t), r ? t.status = E : (t.status = g, t.loadErrorTime = new Date().getTime()), t)));
    var e, r;
  });
}

var et = {
  hashchange: [],
  popstate: []
},
    rt = ["hashchange", "popstate"];

function nt(t) {
  var e;
  if ("string" == typeof t) e = t;else if (this && this.href) e = this.href;else {
    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(u(14, !1));
    e = t.currentTarget.href, t.preventDefault();
  }
  var r = ft(window.location.href),
      n = ft(e);
  0 === e.indexOf("#") ? window.location.hash = n.hash : r.host !== n.host && n.host ? window.location.href = e : n.pathname === r.pathname && n.search === r.pathname ? window.location.hash = n.hash : window.history.pushState(null, null, e);
}

function ot(t) {
  if (t) {
    var e = t[0].type;
    rt.indexOf(e) >= 0 && et[e].forEach(e => {
      try {
        e.apply(this, t);
      } catch (t) {
        setTimeout(() => {
          throw t;
        });
      }
    });
  }
}

function it() {
  Rt([], arguments);
}

window.addEventListener("hashchange", it), window.addEventListener("popstate", it);
var at = window.addEventListener,
    ut = window.removeEventListener;
window.addEventListener = function (t, e) {
  if (!("function" == typeof e && rt.indexOf(t) >= 0) || L(et[t], t => t === e)) return at.apply(this, arguments);
  et[t].push(e);
}, window.removeEventListener = function (t, e) {
  if (!("function" == typeof e && rt.indexOf(t) >= 0)) return ut.apply(this, arguments);
  et[t] = et[t].filter(t => t !== e);
};
var st = window.history.pushState;

window.history.pushState = function (t) {
  var e = st.apply(this, arguments);
  return it(lt(t)), e;
};

var ct = window.history.replaceState;

function lt(t) {
  try {
    return new PopStateEvent("popstate", {
      state: t
    });
  } catch (r) {
    var e = document.createEvent("PopStateEvent");
    return e.initPopStateEvent("popstate", !1, !1, t), e;
  }
}

function ft(t) {
  var e = document.createElement("a");
  return e.href = t, e;
}

window.history.replaceState = function (t) {
  var e = ct.apply(this, arguments);
  return it(lt(t)), e;
}, window.singleSpaNavigate = nt;
var ht = !1;

function pt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;

  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !ht) {
    var e = t.fn.on,
        r = t.fn.off;
    t.fn.on = function (t, r) {
      return mt.call(this, e, window.addEventListener, t, r, arguments);
    }, t.fn.off = function (t, e) {
      return mt.call(this, r, window.removeEventListener, t, e, arguments);
    }, ht = !0;
  }
}

function mt(t, e, r, n, o) {
  return "string" != typeof r ? t.apply(this, o) : (r.split(/\s+/).forEach(t => {
    rt.indexOf(t) >= 0 && (e(t, n), r = r.replace(t, ""));
  }), "" === r.trim() ? this : t.apply(this, o));
}

var dt = {};

function vt(t) {
  return Promise.resolve().then(() => {
    var e = dt[S(t)];
    return e ? t.status === c ? (wt(t, e), t) : "UNLOADING" === t.status ? e.promise.then(() => t) : t.status !== p ? t : (t.status = "UNLOADING", Y(t, "unload").then(() => (wt(t, e), t)).catch(r => (function (t, e, r) {
      delete dt[S(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, o(r, t), t.status = E, e.reject(r);
    }(t, e, r), t))) : t;
  });
}

function wt(t, e) {
  delete dt[S(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = c, e.resolve();
}

function gt(t, e, r, n) {
  dt[S(t)] = {
    app: t,
    resolve: r,
    reject: n
  }, Object.defineProperty(dt[S(t)], "promise", {
    get: e
  });
}

function Et(t) {
  return dt[t];
}

function yt() {
  return Object.keys(dt).map(t => dt[t].app).filter(O);
}

var Ot = [];

function Tt() {
  return Ot.filter(y).map(S);
}

function Pt() {
  return Ot.map(S);
}

function bt(t) {
  var e = L(Ot, e => S(e) === t);
  return e ? e.status : null;
}

function Nt(t, e, r) {
  var n,
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if ("string" != typeof t || 0 === t.length) throw Error(u(20, !1));
  if (-1 !== Pt().indexOf(t)) throw Error(u(21, !1, t));
  if ("object" != typeof o || Array.isArray(o)) throw Error(u(22, !1));
  if (!e) throw Error(u(23, !1));
  if (n = "function" != typeof e ? () => Promise.resolve(e) : e, "function" != typeof r) throw Error(u(24, !1));
  Ot.push({
    loadErrorTime: null,
    name: t,
    loadImpl: n,
    activeWhen: r,
    status: c,
    parcels: {},
    devtools: {
      overlays: {
        options: {},
        selectors: []
      }
    },
    customProps: o
  }), pt(), Rt();
}

function At(t) {
  return Ot.filter(e => e.activeWhen(t)).map(S);
}

function _t() {
  return Ot.filter(A).filter(_).filter(P).filter(b);
}

function St() {
  return Ot.filter(A).filter(y).filter(N);
}

function Dt() {
  return Ot.filter(A).filter(O).filter(T).filter(b);
}

function Mt(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    waitForUnmount: !1
  };
  if ("string" != typeof t) throw Error(u(26, !1));
  var r = L(Ot, e => S(e) === t);
  if (!r) throw Error(u(27, !1, t));
  var n,
      o = Et(S(r));

  if (e && e.waitForUnmount) {
    if (o) return o.promise;
    var i = new Promise((t, e) => {
      gt(r, () => i, t, e);
    });
    return i;
  }

  return o ? (n = o.promise, Ut(r, o.resolve, o.reject)) : n = new Promise((t, e) => {
    gt(r, () => n, t, e), Ut(r, t, e);
  }), n;
}

function Ut(t, e, r) {
  G(t).then(vt).then(() => {
    e(), setTimeout(() => {
      Rt();
    });
  }).catch(r);
}

var Lt = !1,
    jt = [];

function It() {
  return Rt();
}

function Rt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      e = arguments.length > 1 ? arguments[1] : void 0;
  if (Lt) return new Promise((t, r) => {
    jt.push({
      resolve: t,
      reject: r,
      eventArguments: e
    });
  });
  var n = !0;
  return Bt() ? (Lt = !0, i()) : o();

  function o() {
    return Promise.resolve().then(() => {
      var t = _t().map(tt);

      return t.length > 0 && (n = !1), Promise.all(t).then(u).then(() => []).catch(t => {
        throw u(), t;
      });
    });
  }

  function i() {
    return Promise.resolve().then(() => {
      window.dispatchEvent(new r("single-spa:before-routing-event", s()));
      var e = yt().map(vt),
          o = St().map(G).map(t => t.then(vt)).concat(e);
      o.length > 0 && (n = !1);

      var i = Promise.all(o),
          c = _t(),
          l = c.map(t => tt(t).then(x).then(t => i.then(() => K(t))));

      l.length > 0 && (n = !1);
      var f = Dt().filter(t => c.indexOf(t) < 0).map(t => x(t).then(() => i).then(() => K(t)));
      return f.length > 0 && (n = !1), i.catch(t => {
        throw u(), t;
      }).then(() => (u(), Promise.all(l.concat(f)).catch(e => {
        throw t.forEach(t => t.reject(e)), e;
      }).then(a)));
    });
  }

  function a() {
    var e = Tt();
    t.forEach(t => t.resolve(e));

    try {
      var o = n ? "single-spa:no-app-change" : "single-spa:app-change";
      window.dispatchEvent(new r(o, s())), window.dispatchEvent(new r("single-spa:routing-event", s()));
    } catch (t) {
      setTimeout(() => {
        throw t;
      });
    }

    if (Lt = !1, jt.length > 0) {
      var i = jt;
      jt = [], Rt(i);
    }

    return e;
  }

  function u() {
    t.forEach(t => {
      ot(t.eventArguments);
    }), ot(e);
  }

  function s() {
    var t = {
      detail: {}
    };
    return e && e[0] && (t.detail.originalEvent = e[0]), t;
  }
}

var xt = !1;

function Gt() {
  xt = !0, Rt();
}

function Bt() {
  return xt;
}

setTimeout(() => {
  xt || console.warn(u(1, !1));
}, 5e3);
var Ct = {
  getRawAppData: function () {
    return [...Ot];
  },
  reroute: Rt,
  NOT_LOADED: c,
  toLoadPromise: tt,
  toBootstrapPromise: x,
  unregisterApplication: function (t) {
    if (!Ot.find(e => S(e) === t)) throw Error(u(25, !1, t));
    return Mt(t).then(() => {
      var e = Ot.findIndex(e => S(e) === t);
      Ot.splice(e, 1);
    });
  }
};
window && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Ct);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "../../node_modules/single-spa/lib/esm/single-spa.min.js");

(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('product-image', () => __webpack_require__.e(/*! import() */ "-_dce0").then(__webpack_require__.t.bind(__webpack_require__, /*! productImage/ProductImage */ "?dce0", 7)), //location => location.pathname.startsWith('/teste')
location => location.pathname === '/' //location => location.pathname.startsWith('/')
//activeWhen= ["/teste"],
);
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('header', () => __webpack_require__.e(/*! import() */ "-_f95b").then(__webpack_require__.t.bind(__webpack_require__, /*! nav/Header */ "?f95b", 7)), location => location.pathname.startsWith('/'));
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('footer', () => __webpack_require__.e(/*! import() */ "-_eb54").then(__webpack_require__.t.bind(__webpack_require__, /*! nav/Footer */ "?eb54", 7)), location => location.pathname.startsWith('/'));
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)('buy-tools', () => __webpack_require__.e(/*! import() */ "-_bcc7").then(__webpack_require__.t.bind(__webpack_require__, /*! buyTools/BuyTools */ "?bcc7", 7)), location => location.pathname.startsWith('/'));
(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.start)();

/***/ }),

/***/ "container-reference/buyTools":
/*!***************************!*\
  !*** external "buyTools" ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = buyTools;

/***/ }),

/***/ "container-reference/nav":
/*!**********************!*\
  !*** external "nav" ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = nav;

/***/ }),

/***/ "container-reference/productImage":
/*!*******************************!*\
  !*** external "productImage" ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = productImage;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			if(mode & 2 && typeof value == 'object' && value) {
/******/ 				for(const key in value) def[key] = () => value[key];
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		__webpack_require__.p = "http://localhost:3001/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"-_dce0": [
/******/ 				"?dce0"
/******/ 			],
/******/ 			"-_f95b": [
/******/ 				"?f95b"
/******/ 			],
/******/ 			"-_eb54": [
/******/ 				"?eb54"
/******/ 			],
/******/ 			"-_bcc7": [
/******/ 				"?bcc7"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"?dce0": [
/******/ 				"container-reference/productImage",
/******/ 				"ProductImage"
/******/ 			],
/******/ 			"?f95b": [
/******/ 				"container-reference/nav",
/******/ 				"Header"
/******/ 			],
/******/ 			"?eb54": [
/******/ 				"container-reference/nav",
/******/ 				"Footer"
/******/ 			],
/******/ 			"?bcc7": [
/******/ 				"container-reference/buyTools",
/******/ 				"BuyTools"
/******/ 			]
/******/ 		};
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
/******/ 				installedChunks[chunkId] = 0;
/******/ 		
/******/ 				// no HMR
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
/******/ 		var jsonpArray = window["webpackJsonphome"] = window["webpackJsonphome"] || [];
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