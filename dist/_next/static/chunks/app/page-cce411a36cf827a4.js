(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{59:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(2963)},1651:function(e,t,r){Promise.resolve().then(r.t.bind(r,8635,23)),Promise.resolve().then(r.bind(r,2682))},6651:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return u}});let n=r(7295),o=n._(r(3381)),u=o.default.createContext(null)},2682:function(e,t,r){"use strict";r.r(t);var n=r(9424),o=r(3672);r(3381),t.default=()=>{let{data:e}=(0,o.useSession)();return(0,n.jsx)("pre",{children:JSON.stringify(e)})}},2963:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var u=[],i=!1,c=-1;function cleanUpNextTick(){i&&n&&(i=!1,n.length?u=n.concat(u):c=-1,u.length&&drainQueue())}function drainQueue(){if(!i){var e=runTimeout(cleanUpNextTick);i=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,i=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new Item(e,t)),1!==u.length||i||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function __nccwpck_require__(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},u=!0;try{t[e](o,o.exports,__nccwpck_require__),u=!1}finally{u&&delete r[e]}return o.exports}__nccwpck_require__.ab="//";var n=__nccwpck_require__(229);e.exports=n}()},4990:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3381),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,u={},l=null,a=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:a,props:u,_owner:c.current}}t.Fragment=u,t.jsx=q,t.jsxs=q},9424:function(e,t,r){"use strict";e.exports=r(4990)}},function(e){e.O(0,[635,672,362,95,744],function(){return e(e.s=1651)}),_N_E=e.O()}]);