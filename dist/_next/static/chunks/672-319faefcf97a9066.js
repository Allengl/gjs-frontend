(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{6275:function(e,t,r){"use strict";var n=r(4604);Object.defineProperty(t,"__esModule",{value:!0}),t.BroadcastChannel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){var handler=function(r){if(r.key===e){var n,o=JSON.parse(null!==(n=r.newValue)&&void 0!==n?n:"{}");(null==o?void 0:o.event)==="session"&&null!=o&&o.data&&t(o)}};return window.addEventListener("storage",handler),function(){return window.removeEventListener("storage",handler)}},post:function(t){if("undefined"!=typeof window)try{localStorage.setItem(e,JSON.stringify(_objectSpread(_objectSpread({},t),{},{timestamp:now()})))}catch(e){}}}},t.apiBaseUrl=apiBaseUrl,t.fetchData=function(e,t,r){return _fetchData.apply(this,arguments)},t.now=now;var o=n(r(1655)),a=n(r(1653)),u=n(r(948));function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,a.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _fetchData(){return(_fetchData=(0,u.default)(o.default.mark(function _callee(e,t,r){var n,a,u,s,c,l,f,p,d,h=arguments;return o.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=(n=h.length>3&&void 0!==h[3]?h[3]:{}).ctx,s=void 0===(u=n.req)?null==a?void 0:a.req:u,c="".concat(apiBaseUrl(t),"/").concat(e),o.prev=2,f={headers:_objectSpread({"Content-Type":"application/json"},null!=s&&null!==(l=s.headers)&&void 0!==l&&l.cookie?{cookie:s.headers.cookie}:{})},null!=s&&s.body&&(f.body=JSON.stringify(s.body),f.method="POST"),o.next=7,fetch(c,f);case 7:return p=o.sent,o.next=10,p.json();case 10:if(d=o.sent,p.ok){o.next=13;break}throw d;case 13:return o.abrupt("return",Object.keys(d).length>0?d:null);case 16:return o.prev=16,o.t0=o.catch(2),r.error("CLIENT_FETCH_ERROR",{error:o.t0,url:c}),o.abrupt("return",null);case 20:case"end":return o.stop()}},_callee,null,[[2,16]])}))).apply(this,arguments)}function apiBaseUrl(e){return"undefined"==typeof window?"".concat(e.baseUrlServer).concat(e.basePathServer):e.basePath}function now(){return Math.floor(Date.now()/1e3)}},1850:function(e,t,r){"use strict";var n=r(4604);Object.defineProperty(t,"__esModule",{value:!0}),t.UnsupportedStrategy=t.UnknownError=t.OAuthCallbackError=t.MissingSecret=t.MissingAuthorize=t.MissingAdapterMethods=t.MissingAdapter=t.MissingAPIRoute=t.InvalidCallbackUrl=t.AccountNotLinkedError=void 0,t.adapterErrorHandler=function(e,t){if(e)return Object.keys(e).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function _callee2(){var r,a,u,s,c,l=arguments;return o.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:for(o.prev=0,a=Array(r=l.length),u=0;u<r;u++)a[u]=l[u];return t.debug("adapter_".concat(n),{args:a}),s=e[n],o.next=6,s.apply(void 0,a);case 6:return o.abrupt("return",o.sent);case 9:throw o.prev=9,o.t0=o.catch(0),t.error("adapter_error_".concat(n),o.t0),(c=new h(o.t0)).name="".concat(capitalize(n),"Error"),c;case 15:case"end":return o.stop()}},_callee2,null,[[0,9]])})),r},{})},t.capitalize=capitalize,t.eventsErrorHandler=function(e,t){return Object.keys(e).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function _callee(){var r,a=arguments;return o.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,r=e[n],o.next=4,r.apply(void 0,a);case 4:return o.abrupt("return",o.sent);case 7:o.prev=7,o.t0=o.catch(0),t.error("".concat(upperSnake(n),"_EVENT_ERROR"),o.t0);case 10:case"end":return o.stop()}},_callee,null,[[0,7]])})),r},{})},t.upperSnake=upperSnake;var o=n(r(1655)),a=n(r(948)),u=n(r(3807)),s=n(r(1653)),c=n(r(4249)),l=n(r(6544)),f=n(r(7292)),p=n(r(3681)),d=n(r(5070));function _createSuper(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,p.default)(this,r)}}var h=function(e){(0,f.default)(UnknownError,e);var t=_createSuper(UnknownError);function UnknownError(e){var r,n;return(0,c.default)(this,UnknownError),(n=t.call(this,null!==(r=null==e?void 0:e.message)&&void 0!==r?r:e)).name="UnknownError",n.code=e.code,e instanceof Error&&(n.stack=e.stack),n}return(0,l.default)(UnknownError,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}]),UnknownError}((0,n(r(8931)).default)(Error));t.UnknownError=h;var v=function(e){(0,f.default)(OAuthCallbackError,e);var t=_createSuper(OAuthCallbackError);function OAuthCallbackError(){var e;(0,c.default)(this,OAuthCallbackError);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","OAuthCallbackError"),e}return(0,l.default)(OAuthCallbackError)}(h);t.OAuthCallbackError=v;var y=function(e){(0,f.default)(AccountNotLinkedError,e);var t=_createSuper(AccountNotLinkedError);function AccountNotLinkedError(){var e;(0,c.default)(this,AccountNotLinkedError);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","AccountNotLinkedError"),e}return(0,l.default)(AccountNotLinkedError)}(h);t.AccountNotLinkedError=y;var g=function(e){(0,f.default)(MissingAPIRoute,e);var t=_createSuper(MissingAPIRoute);function MissingAPIRoute(){var e;(0,c.default)(this,MissingAPIRoute);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","MissingAPIRouteError"),(0,s.default)((0,u.default)(e),"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),e}return(0,l.default)(MissingAPIRoute)}(h);t.MissingAPIRoute=g;var _=function(e){(0,f.default)(MissingSecret,e);var t=_createSuper(MissingSecret);function MissingSecret(){var e;(0,c.default)(this,MissingSecret);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","MissingSecretError"),(0,s.default)((0,u.default)(e),"code","NO_SECRET"),e}return(0,l.default)(MissingSecret)}(h);t.MissingSecret=_;var b=function(e){(0,f.default)(MissingAuthorize,e);var t=_createSuper(MissingAuthorize);function MissingAuthorize(){var e;(0,c.default)(this,MissingAuthorize);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","MissingAuthorizeError"),(0,s.default)((0,u.default)(e),"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),e}return(0,l.default)(MissingAuthorize)}(h);t.MissingAuthorize=b;var x=function(e){(0,f.default)(MissingAdapter,e);var t=_createSuper(MissingAdapter);function MissingAdapter(){var e;(0,c.default)(this,MissingAdapter);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","MissingAdapterError"),(0,s.default)((0,u.default)(e),"code","EMAIL_REQUIRES_ADAPTER_ERROR"),e}return(0,l.default)(MissingAdapter)}(h);t.MissingAdapter=x;var w=function(e){(0,f.default)(MissingAdapterMethods,e);var t=_createSuper(MissingAdapterMethods);function MissingAdapterMethods(){var e;(0,c.default)(this,MissingAdapterMethods);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","MissingAdapterMethodsError"),(0,s.default)((0,u.default)(e),"code","MISSING_ADAPTER_METHODS_ERROR"),e}return(0,l.default)(MissingAdapterMethods)}(h);t.MissingAdapterMethods=w;var m=function(e){(0,f.default)(UnsupportedStrategy,e);var t=_createSuper(UnsupportedStrategy);function UnsupportedStrategy(){var e;(0,c.default)(this,UnsupportedStrategy);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","UnsupportedStrategyError"),(0,s.default)((0,u.default)(e),"code","CALLBACK_CREDENTIALS_JWT_ERROR"),e}return(0,l.default)(UnsupportedStrategy)}(h);t.UnsupportedStrategy=m;var O=function(e){(0,f.default)(InvalidCallbackUrl,e);var t=_createSuper(InvalidCallbackUrl);function InvalidCallbackUrl(){var e;(0,c.default)(this,InvalidCallbackUrl);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),(0,s.default)((0,u.default)(e),"name","InvalidCallbackUrl"),(0,s.default)((0,u.default)(e),"code","INVALID_CALLBACK_URL_ERROR"),e}return(0,l.default)(InvalidCallbackUrl)}(h);function upperSnake(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()}function capitalize(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}t.InvalidCallbackUrl=O},3672:function(e,t,r){"use strict";var n,o,a,u,s,c=r(59),l=r(4604),f=r(8551);Object.defineProperty(t,"__esModule",{value:!0});var p={SessionContext:!0,useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};t.SessionContext=void 0,t.SessionProvider=function(e){if(!k)throw Error("React Context is unavailable in Server Components");var t,r,n,o,a,u,s=e.children,c=e.basePath,l=e.refetchInterval,f=e.refetchWhenOffline;c&&(O.basePath=c);var p=void 0!==e.session;O._lastSync=p?(0,x.now)():0;var h=g.useState(function(){return p&&(O._session=e.session),e.session}),_=(0,y.default)(h,2),b=_[0],m=_[1],P=g.useState(!p),M=(0,y.default)(P,2),A=M[0],j=M[1];g.useEffect(function(){return O._getSession=(0,v.default)(d.default.mark(function _callee(){var e,t,r=arguments;return d.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=(r.length>0&&void 0!==r[0]?r[0]:{}).event,n.prev=1,!((t="storage"===e)||void 0===O._session)){n.next=10;break}return O._lastSync=(0,x.now)(),n.next=7,getSession({broadcast:!t});case 7:return O._session=n.sent,m(O._session),n.abrupt("return");case 10:if(!(!e||null===O._session||(0,x.now)()<O._lastSync)){n.next=12;break}return n.abrupt("return");case 12:return O._lastSync=(0,x.now)(),n.next=15,getSession();case 15:O._session=n.sent,m(O._session),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(1),S.error("CLIENT_SESSION_ERROR",n.t0);case 22:return n.prev=22,j(!1),n.finish(22);case 25:case"end":return n.stop()}},_callee,null,[[1,19,22,25]])})),O._getSession(),function(){O._lastSync=0,O._session=void 0,O._getSession=function(){}}},[]),g.useEffect(function(){var e=E.receive(function(){return O._getSession({event:"storage"})});return function(){return e()}},[]),g.useEffect(function(){var t=e.refetchOnWindowFocus,r=void 0===t||t,visibilityHandler=function(){r&&"visible"===document.visibilityState&&O._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",visibilityHandler,!1),function(){return document.removeEventListener("visibilitychange",visibilityHandler,!1)}},[e.refetchOnWindowFocus]);var R=(t=g.useState("undefined"!=typeof navigator&&navigator.onLine),n=(r=(0,y.default)(t,2))[0],o=r[1],a=function(){return o(!0)},u=function(){return o(!1)},g.useEffect(function(){return window.addEventListener("online",a),window.addEventListener("offline",u),function(){window.removeEventListener("online",a),window.removeEventListener("offline",u)}},[]),n),L=!1!==f||R;g.useEffect(function(){if(l&&L){var e=setInterval(function(){O._session&&O._getSession({event:"poll"})},1e3*l);return function(){return clearInterval(e)}}},[l,L]);var C=g.useMemo(function(){return{data:b,status:A?"loading":b?"authenticated":"unauthenticated",update:function(e){return(0,v.default)(d.default.mark(function _callee2(){var t;return d.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(A||!b)){r.next=2;break}return r.abrupt("return");case 2:return j(!0),r.t0=x.fetchData,r.t1=O,r.t2=S,r.next=8,getCsrfToken();case 8:return r.t3=r.sent,r.t4=e,r.t5={csrfToken:r.t3,data:r.t4},r.t6={body:r.t5},r.t7={req:r.t6},r.next=15,(0,r.t0)("session",r.t1,r.t2,r.t7);case 15:return t=r.sent,j(!1),t&&(m(t),E.post({event:"session",data:{trigger:"getSession"}})),r.abrupt("return",t);case 19:case"end":return r.stop()}},_callee2)}))()}}},[b,A]);return(0,w.jsx)(k.Provider,{value:C,children:s})},t.getCsrfToken=getCsrfToken,t.getProviders=getProviders,t.getSession=getSession,t.signIn=function(e,t,r){return _signIn.apply(this,arguments)},t.signOut=function(e){return _signOut.apply(this,arguments)},t.useSession=function(e){if(!k)throw Error("React Context is unavailable in Server Components");var t=g.useContext(k),r=null!=e?e:{},n=r.required,o=r.onUnauthenticated,a=n&&"unauthenticated"===t.status;return(g.useEffect(function(){if(a){var e="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));o?o():window.location.href=e}},[a,o]),a)?{data:t.data,update:t.update,status:"loading"}:t};var d=l(r(1655)),h=l(r(1653)),v=l(r(948)),y=l(r(4733)),g=_interopRequireWildcard(r(3381)),_=_interopRequireWildcard(r(8845)),b=l(r(4465)),x=r(6275),w=r(9424),m=r(7029);function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,h.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.keys(m).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(p,e))&&(e in t&&t[e]===m[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return m[e]}}))});var O={baseUrl:(0,b.default)(null!==(n=c.env.NEXTAUTH_URL)&&void 0!==n?n:c.env.VERCEL_URL).origin,basePath:(0,b.default)(c.env.NEXTAUTH_URL).path,baseUrlServer:(0,b.default)(null!==(o=null!==(a=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==a?a:c.env.NEXTAUTH_URL)&&void 0!==o?o:c.env.VERCEL_URL).origin,basePathServer:(0,b.default)(null!==(u=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==u?u:c.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},E=(0,x.BroadcastChannel)(),S=(0,_.proxyLogger)(_.default,O.basePath),k=null===(s=g.createContext)||void 0===s?void 0:s.call(g,void 0);function getSession(e){return _getSession2.apply(this,arguments)}function _getSession2(){return(_getSession2=(0,v.default)(d.default.mark(function _callee3(e){var t,r;return d.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.fetchData)("session",O,S,e);case 2:return r=n.sent,(null===(t=null==e?void 0:e.broadcast)||void 0===t||t)&&E.post({event:"session",data:{trigger:"getSession"}}),n.abrupt("return",r);case 5:case"end":return n.stop()}},_callee3)}))).apply(this,arguments)}function getCsrfToken(e){return _getCsrfToken.apply(this,arguments)}function _getCsrfToken(){return(_getCsrfToken=(0,v.default)(d.default.mark(function _callee4(e){var t;return d.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,x.fetchData)("csrf",O,S,e);case 2:return t=r.sent,r.abrupt("return",null==t?void 0:t.csrfToken);case 4:case"end":return r.stop()}},_callee4)}))).apply(this,arguments)}function getProviders(){return _getProviders.apply(this,arguments)}function _getProviders(){return(_getProviders=(0,v.default)(d.default.mark(function _callee5(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.fetchData)("providers",O,S);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},_callee5)}))).apply(this,arguments)}function _signIn(){return(_signIn=(0,v.default)(d.default.mark(function _callee6(e,t,r){var n,o,a,u,s,c,l,f,p,h,v,y,g,_,b,w,m;return d.default.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return a=void 0===(o=(n=null!=t?t:{}).callbackUrl)?window.location.href:o,s=void 0===(u=n.redirect)||u,c=(0,x.apiBaseUrl)(O),d.next=4,getProviders();case 4:if(l=d.sent){d.next=8;break}return window.location.href="".concat(c,"/error"),d.abrupt("return");case 8:if(!(!e||!(e in l))){d.next=11;break}return window.location.href="".concat(c,"/signin?").concat(new URLSearchParams({callbackUrl:a})),d.abrupt("return");case 11:return f="credentials"===l[e].type,p="email"===l[e].type,h=f||p,v="".concat(c,"/").concat(f?"callback":"signin","/").concat(e),y="".concat(v).concat(r?"?".concat(new URLSearchParams(r)):""),d.t0=fetch,d.t1=y,d.t2={"Content-Type":"application/x-www-form-urlencoded"},d.t3=URLSearchParams,d.t4=_objectSpread,d.t5=_objectSpread({},t),d.t6={},d.next=25,getCsrfToken();case 25:return d.t7=d.sent,d.t8=a,d.t9={csrfToken:d.t7,callbackUrl:d.t8,json:!0},d.t10=(0,d.t4)(d.t5,d.t6,d.t9),d.t11=new d.t3(d.t10),d.t12={method:"post",headers:d.t2,body:d.t11},d.next=33,(0,d.t0)(d.t1,d.t12);case 33:return g=d.sent,d.next=36,g.json();case 36:if(_=d.sent,!(s||!h)){d.next=42;break}return w=null!==(b=_.url)&&void 0!==b?b:a,window.location.href=w,w.includes("#")&&window.location.reload(),d.abrupt("return");case 42:if(m=new URL(_.url).searchParams.get("error"),!g.ok){d.next=46;break}return d.next=46,O._getSession({event:"storage"});case 46:return d.abrupt("return",{error:m,status:g.status,ok:g.ok,url:m?null:_.url});case 47:case"end":return d.stop()}},_callee6)}))).apply(this,arguments)}function _signOut(){return(_signOut=(0,v.default)(d.default.mark(function _callee7(e){var t,r,n,o,a,u,s,c,l;return d.default.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return n=void 0===(r=(null!=e?e:{}).callbackUrl)?window.location.href:r,o=(0,x.apiBaseUrl)(O),f.t0={"Content-Type":"application/x-www-form-urlencoded"},f.t1=URLSearchParams,f.next=6,getCsrfToken();case 6:return f.t2=f.sent,f.t3=n,f.t4={csrfToken:f.t2,callbackUrl:f.t3,json:!0},f.t5=new f.t1(f.t4),a={method:"post",headers:f.t0,body:f.t5},f.next=13,fetch("".concat(o,"/signout"),a);case 13:return u=f.sent,f.next=16,u.json();case 16:if(s=f.sent,E.post({event:"session",data:{trigger:"signout"}}),!(null===(t=null==e?void 0:e.redirect)||void 0===t||t)){f.next=23;break}return l=null!==(c=s.url)&&void 0!==c?c:n,window.location.href=l,l.includes("#")&&window.location.reload(),f.abrupt("return");case 23:return f.next=25,O._getSession({event:"storage"});case 25:return f.abrupt("return",s);case 26:case"end":return f.stop()}},_callee7)}))).apply(this,arguments)}t.SessionContext=k},7029:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},8845:function(e,t,r){"use strict";var n=r(4604);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.proxyLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;try{if("undefined"==typeof window)return e;var r={},_loop=function(e){r[e]=function(r,n){u[e](r,n),"error"===e&&(n=formatError(n)),n.client=!0;var a="".concat(t,"/_log"),s=new URLSearchParams(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,o.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({level:e,code:r},n));return navigator.sendBeacon?navigator.sendBeacon(a,s):fetch(a,{method:"POST",body:s,keepalive:!0})}};for(var n in e)_loop(n);return r}catch(e){return u}},t.setLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;t||(u.debug=function(){}),e.error&&(u.error=e.error),e.warn&&(u.warn=e.warn),e.debug&&(u.debug=e.debug)};var o=n(r(1653)),a=r(1850);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function formatError(e){var t;return e instanceof Error&&!(e instanceof a.UnknownError)?{message:e.message,stack:e.stack,name:e.name}:(null!=e&&e.error&&(e.error=formatError(e.error),e.message=null!==(t=e.message)&&void 0!==t?t:e.error.message),e)}var u={error:function(e,t){t=formatError(t),console.error("[next-auth][error][".concat(e,"]"),"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),t.message,t)},warn:function(e){console.warn("[next-auth][warn][".concat(e,"]"),"\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()))},debug:function(e,t){console.log("[next-auth][debug][".concat(e,"]"),t)}};t.default=u},4465:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t;let r=new URL("http://localhost:3000/api/auth");e&&!e.startsWith("http")&&(e=`https://${e}`);let n=new URL(null!==(t=e)&&void 0!==t?t:r),o=("/"===n.pathname?r.pathname:n.pathname).replace(/\/$/,""),a=`${n.origin}${o}`;return{origin:n.origin,host:n.host,path:o,base:a,toString:()=>a}}},5374:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},7487:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3807:function(e){e.exports=function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},948:function(e){function asyncGeneratorStep(e,t,r,n,o,a,u){try{var s=e[a](u),c=s.value}catch(e){r(e);return}s.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function _next(e){asyncGeneratorStep(a,n,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,n,o,_next,_throw,"throw",e)}_next(void 0)})}},e.exports.__esModule=!0,e.exports.default=e.exports},4249:function(e){e.exports=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},515:function(e,t,r){var n=r(8375),o=r(5096);function _construct(t,r,a){return o()?e.exports=_construct=Reflect.construct.bind():e.exports=_construct=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports,_construct.apply(null,arguments)}e.exports=_construct,e.exports.__esModule=!0,e.exports.default=e.exports},6544:function(e,t,r){var n=r(391);function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},1653:function(e,t,r){var n=r(391);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},5070:function(e){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},7292:function(e,t,r){var n=r(8375);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},4604:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},2463:function(e){e.exports=function(e){return -1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},5096:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},3853:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,s=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return s}},e.exports.__esModule=!0,e.exports.default=e.exports},2613:function(e){e.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3681:function(e,t,r){var n=r(8551).default,o=r(3807);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},292:function(e,t,r){var n=r(8551).default;function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=_regeneratorRuntime=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},o=Object.prototype,a=o.hasOwnProperty,u=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function define(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function(e,t,r){return e[t]=r}}function wrap(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof Generator?r:Generator).prototype);return u(c,"_invoke",{value:(a=new Context(o||[]),s=p,function(r,o){if(s===d)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var u=a.delegate;if(u){var c=function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+n+"' method")),v;var a=tryCatch(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var u=a.arg;return u?u.done?(r[e.resultName]=u.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):u:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,v)}(u,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=d;var l=tryCatch(e,n,a);if("normal"===l.type){if(s=a.done?h:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(s=h,a.method="throw",a.arg=l.arg)}})}),c}function tryCatch(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=wrap;var p="suspendedStart",d="executing",h="completed",v={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var y={};define(y,c,function(){return this});var g=Object.getPrototypeOf,_=g&&g(g(values([])));_&&_!==o&&a.call(_,c)&&(y=_);var b=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(y);function defineIteratorMethods(e){["next","throw","return"].forEach(function(t){define(e,t,function(e){return this._invoke(t,e)})})}function AsyncIterator(e,t){var r;u(this,"_invoke",{value:function(o,u){function callInvokeWithMethodAndArg(){return new t(function(r,s){!function invoke(r,o,u,s){var c=tryCatch(e[r],e,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then(function(e){invoke("next",e,u,s)},function(e){invoke("throw",e,u,s)}):t.resolve(f).then(function(e){l.value=e,u(l)},function(e){return invoke("throw",e,u,s)})}s(c.arg)}(o,u,r,s)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(a.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw TypeError(n(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,u(b,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),u(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,f,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,f,"GeneratorFunction")),e.prototype=Object.create(b),e},r.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,l,function(){return this}),r.AsyncIterator=AsyncIterator,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var u=new AsyncIterator(wrap(e,t,n,o),a);return r.isGeneratorFunction(t)?u:u.next().then(function(e){return e.done?e.value:u.next()})},defineIteratorMethods(b),define(b,f,"Generator"),define(b,c,function(){return this}),define(b,"toString",function(){return"[object Generator]"}),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function next(){for(;r.length;){var e=r.pop();if(e in t)return next.value=e,next.done=!1,next}return next.done=!0,next}},r.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function handle(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],u=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}e.exports=_regeneratorRuntime,e.exports.__esModule=!0,e.exports.default=e.exports},8375:function(e){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},4733:function(e,t,r){var n=r(7487),o=r(3853),a=r(1347),u=r(2613);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},5670:function(e,t,r){var n=r(8551).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},391:function(e,t,r){var n=r(8551).default,o=r(5670);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8551:function(e){function _typeof(t){return e.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,_typeof(t)}e.exports=_typeof,e.exports.__esModule=!0,e.exports.default=e.exports},1347:function(e,t,r){var n=r(5374);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}},e.exports.__esModule=!0,e.exports.default=e.exports},8931:function(e,t,r){var n=r(5070),o=r(8375),a=r(2463),u=r(515);function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return e.exports=_wrapNativeSuper=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,Wrapper)}function Wrapper(){return u(e,arguments,n(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),o(Wrapper,e)},e.exports.__esModule=!0,e.exports.default=e.exports,_wrapNativeSuper(t)}e.exports=_wrapNativeSuper,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,r){var n=r(292)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);