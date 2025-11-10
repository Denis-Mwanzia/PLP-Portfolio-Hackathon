var tg=Object.defineProperty;var ng=(e,t,n)=>t in e?tg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Gd=(e,t,n)=>ng(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B0={exports:{}},Na={},H0={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),rg=Symbol.for("react.portal"),ig=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),ag=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),lg=Symbol.for("react.context"),cg=Symbol.for("react.forward_ref"),ug=Symbol.for("react.suspense"),dg=Symbol.for("react.memo"),fg=Symbol.for("react.lazy"),Kd=Symbol.iterator;function pg(e){return e===null||typeof e!="object"?null:(e=Kd&&e[Kd]||e["@@iterator"],typeof e=="function"?e:null)}var U0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W0=Object.assign,Y0={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=Y0,this.updater=n||U0}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function G0(){}G0.prototype=Nr.prototype;function du(e,t,n){this.props=e,this.context=t,this.refs=Y0,this.updater=n||U0}var fu=du.prototype=new G0;fu.constructor=du;W0(fu,Nr.prototype);fu.isPureReactComponent=!0;var Qd=Array.isArray,K0=Object.prototype.hasOwnProperty,pu={current:null},Q0={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)K0.call(t,r)&&!Q0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gi,type:e,key:o,ref:a,props:i,_owner:pu.current}}function hg(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function mg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xd=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mg(""+e.key):t.toString(36)}function Lo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gi:case rg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Is(a,0):r,Qd(i)?(n="",e!=null&&(n=e.replace(Xd,"$&/")+"/"),Lo(i,t,n,"",function(c){return c})):i!=null&&(hu(i)&&(i=hg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Xd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Qd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Is(o,s);a+=Lo(o,t,n,l,i)}else if(l=pg(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Is(o,s++),a+=Lo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function io(e,t,n){if(e==null)return e;var r=[],i=0;return Lo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Mo={transition:null},vg={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:pu};function Z0(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Nr;Y.Fragment=ig;Y.Profiler=ag;Y.PureComponent=du;Y.StrictMode=og;Y.Suspense=ug;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;Y.act=Z0;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=W0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=pu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)K0.call(t,l)&&!Q0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:lg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sg,_context:e},e.Consumer=e};Y.createElement=X0;Y.createFactory=function(e){var t=X0.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:cg,render:e}};Y.isValidElement=hu;Y.lazy=function(e){return{$$typeof:fg,_payload:{_status:-1,_result:e},_init:gg}};Y.memo=function(e,t){return{$$typeof:dg,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};Y.unstable_act=Z0;Y.useCallback=function(e,t){return Qe.current.useCallback(e,t)};Y.useContext=function(e){return Qe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Qe.current.useEffect(e,t)};Y.useId=function(){return Qe.current.useId()};Y.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Qe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};Y.useRef=function(e){return Qe.current.useRef(e)};Y.useState=function(e){return Qe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Qe.current.useTransition()};Y.version="18.3.1";H0.exports=Y;var b=H0.exports;const ce=Vr(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=b,xg=Symbol.for("react.element"),wg=Symbol.for("react.fragment"),Sg=Object.prototype.hasOwnProperty,kg=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bg={key:!0,ref:!0,__self:!0,__source:!0};function q0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Sg.call(t,r)&&!bg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xg,type:e,key:o,ref:a,props:i,_owner:kg.current}}Na.Fragment=wg;Na.jsx=q0;Na.jsxs=q0;B0.exports=Na;var f=B0.exports,Yl={},J0={exports:{}},ct={},e1={exports:{}},t1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,$){var B=z.length;z.push($);e:for(;0<B;){var ae=B-1>>>1,M=z[ae];if(0<i(M,$))z[ae]=$,z[B]=M,B=ae;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],B=z.pop();if(B!==$){z[0]=B;e:for(var ae=0,M=z.length,I=M>>>1;ae<I;){var R=2*(ae+1)-1,H=z[R],T=R+1,G=z[T];if(0>i(H,B))T<M&&0>i(G,H)?(z[ae]=G,z[T]=B,ae=T):(z[ae]=H,z[R]=B,ae=R);else if(T<M&&0>i(G,B))z[ae]=G,z[T]=B,ae=T;else break e}}return $}function i(z,$){var B=z.sortIndex-$.sortIndex;return B!==0?B:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,d=null,p=3,v=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=z)r(c),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(c)}}function w(z){if(x=!1,m(z),!y)if(n(l)!==null)y=!0,ke(C);else{var $=n(c);$!==null&&ve(w,$.startTime-z)}}function C(z,$){y=!1,x&&(x=!1,g(A),A=-1),v=!0;var B=p;try{for(m($),d=n(l);d!==null&&(!(d.expirationTime>$)||z&&!oe());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,p=d.priorityLevel;var M=ae(d.expirationTime<=$);$=e.unstable_now(),typeof M=="function"?d.callback=M:d===n(l)&&r(l),m($)}else r(l);d=n(l)}if(d!==null)var I=!0;else{var R=n(c);R!==null&&ve(w,R.startTime-$),I=!1}return I}finally{d=null,p=B,v=!1}}var P=!1,E=null,A=-1,D=5,_=-1;function oe(){return!(e.unstable_now()-_<D)}function fe(){if(E!==null){var z=e.unstable_now();_=z;var $=!0;try{$=E(!0,z)}finally{$?Se():(P=!1,E=null)}}else P=!1}var Se;if(typeof h=="function")Se=function(){h(fe)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,X=Ee.port2;Ee.port1.onmessage=fe,Se=function(){X.postMessage(null)}}else Se=function(){k(fe,0)};function ke(z){E=z,P||(P=!0,Se())}function ve(z,$){A=k(function(){z(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ke(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var B=p;p=$;try{return z()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=p;p=z;try{return $()}finally{p=B}},e.unstable_scheduleCallback=function(z,$,B){var ae=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ae+B:ae):B=ae,z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=B+M,z={id:u++,callback:$,priorityLevel:z,startTime:B,expirationTime:M,sortIndex:-1},B>ae?(z.sortIndex=B,t(c,z),n(l)===null&&z===n(c)&&(x?(g(A),A=-1):x=!0,ve(w,B-ae))):(z.sortIndex=M,t(l,z),y||v||(y=!0,ke(C))),z},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(z){var $=p;return function(){var B=p;p=$;try{return z.apply(this,arguments)}finally{p=B}}}})(t1);e1.exports=t1;var Cg=e1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg=b,st=Cg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n1=new Set,Ti={};function Yn(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(Ti[e]=t,e=0;e<t.length;e++)n1.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zd={},qd={};function Eg(e){return Gl.call(qd,e)?!0:Gl.call(Zd,e)?!1:Pg.test(e)?qd[e]=!0:(Zd[e]=!0,!1)}function jg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ag(e,t,n,r){if(t===null||typeof t>"u"||jg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,gu);Ne[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,gu);Ne[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,gu);Ne[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function vu(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ag(t,n,i,r)&&(n=null),r||i===null?Eg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),yu=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),r1=Symbol.for("react.provider"),i1=Symbol.for("react.context"),xu=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),wu=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),o1=Symbol.for("react.offscreen"),Jd=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=Jd&&e[Jd]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Rs;function ri(e){if(Rs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rs=t&&t[1]||""}return`
`+Rs+e}var Os=!1;function _s(e,t){if(!e||Os)return"";Os=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Os=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ri(e):""}function zg(e){switch(e.tag){case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return e=_s(e.type,!1),e;case 11:return e=_s(e.type.render,!1),e;case 1:return e=_s(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case rr:return"Portal";case Kl:return"Profiler";case yu:return"StrictMode";case Ql:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case i1:return(e.displayName||"Context")+".Consumer";case r1:return(e._context.displayName||"Context")+".Provider";case xu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wu:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Lg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function a1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mg(e){var t=a1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=Mg(e))}function s1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=a1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ef(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function l1(e,t){t=t.checked,t!=null&&vu(e,"checked",t,!1)}function Jl(e,t){l1(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ec(e,t.type,n):t.hasOwnProperty("defaultValue")&&ec(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ec(e,t,n){(t!=="number"||Zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ii(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function c1(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function u1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?u1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,d1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ig=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){Ig.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function f1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function p1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=f1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rg=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rc(e,t){if(t){if(Rg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ic(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oc=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ac=null,Sr=null,kr=null;function of(e){if(e=Xi(e)){if(typeof ac!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ua(t),ac(e.stateNode,e.type,t))}}function h1(e){Sr?kr?kr.push(e):kr=[e]:Sr=e}function m1(){if(Sr){var e=Sr,t=kr;if(kr=Sr=null,of(e),t)for(e=0;e<t.length;e++)of(t[e])}}function g1(e,t){return e(t)}function v1(){}var Ds=!1;function y1(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return g1(e,t,n)}finally{Ds=!1,(Sr!==null||kr!==null)&&(v1(),m1())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=Ua(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var sc=!1;if(Gt)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{sc=!1}function Og(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ci=!1,qo=null,Jo=!1,lc=null,_g={onError:function(e){ci=!0,qo=e}};function Dg(e,t,n,r,i,o,a,s,l){ci=!1,qo=null,Og.apply(_g,arguments)}function Vg(e,t,n,r,i,o,a,s,l){if(Dg.apply(this,arguments),ci){if(ci){var c=qo;ci=!1,qo=null}else throw Error(j(198));Jo||(Jo=!0,lc=c)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function x1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function af(e){if(Gn(e)!==e)throw Error(j(188))}function Ng(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return af(i),e;if(o===r)return af(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function w1(e){return e=Ng(e),e!==null?S1(e):null}function S1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=S1(e);if(t!==null)return t;e=e.sibling}return null}var k1=st.unstable_scheduleCallback,sf=st.unstable_cancelCallback,$g=st.unstable_shouldYield,Fg=st.unstable_requestPaint,Te=st.unstable_now,Bg=st.unstable_getCurrentPriorityLevel,ku=st.unstable_ImmediatePriority,b1=st.unstable_UserBlockingPriority,ea=st.unstable_NormalPriority,Hg=st.unstable_LowPriority,C1=st.unstable_IdlePriority,$a=null,Ot=null;function Ug(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Gg,Wg=Math.log,Yg=Math.LN2;function Gg(e){return e>>>=0,e===0?32:31-(Wg(e)/Yg|0)|0}var lo=64,co=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=oi(s):(o&=a,o!==0&&(r=oi(o)))}else a=n&~i,a!==0?r=oi(a):o!==0&&(r=oi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function Kg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Kg(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function T1(){var e=lo;return lo<<=1,!(lo&4194240)&&(lo=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function Xg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ne=0;function P1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var E1,Cu,j1,A1,z1,uc=!1,uo=[],fn=null,pn=null,hn=null,ji=new Map,Ai=new Map,sn=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function Yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&Cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qg(e,t,n,r,i){switch(t){case"focusin":return fn=Yr(fn,e,t,n,r,i),!0;case"dragenter":return pn=Yr(pn,e,t,n,r,i),!0;case"mouseover":return hn=Yr(hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ji.set(o,Yr(ji.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ai.set(o,Yr(Ai.get(o)||null,e,t,n,r,i)),!0}return!1}function L1(e){var t=In(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=x1(n),t!==null){e.blockedOn=t,z1(e.priority,function(){j1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oc=r,n.target.dispatchEvent(r),oc=null}else return t=Xi(n),t!==null&&Cu(t),e.blockedOn=n,!1;t.shift()}return!0}function cf(e,t,n){Io(e)&&n.delete(t)}function Jg(){uc=!1,fn!==null&&Io(fn)&&(fn=null),pn!==null&&Io(pn)&&(pn=null),hn!==null&&Io(hn)&&(hn=null),ji.forEach(cf),Ai.forEach(cf)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,uc||(uc=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Jg)))}function zi(e){function t(i){return Gr(i,e)}if(0<uo.length){Gr(uo[0],e);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Gr(fn,e),pn!==null&&Gr(pn,e),hn!==null&&Gr(hn,e),ji.forEach(t),Ai.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)L1(n),n.blockedOn===null&&sn.shift()}var br=qt.ReactCurrentBatchConfig,na=!0;function ev(e,t,n,r){var i=ne,o=br.transition;br.transition=null;try{ne=1,Tu(e,t,n,r)}finally{ne=i,br.transition=o}}function tv(e,t,n,r){var i=ne,o=br.transition;br.transition=null;try{ne=4,Tu(e,t,n,r)}finally{ne=i,br.transition=o}}function Tu(e,t,n,r){if(na){var i=dc(e,t,n,r);if(i===null)Ks(e,t,r,ra,n),lf(e,r);else if(qg(i,e,t,n,r))r.stopPropagation();else if(lf(e,r),t&4&&-1<Zg.indexOf(e)){for(;i!==null;){var o=Xi(i);if(o!==null&&E1(o),o=dc(e,t,n,r),o===null&&Ks(e,t,r,ra,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ks(e,t,r,null,n)}}var ra=null;function dc(e,t,n,r){if(ra=null,e=Su(r),e=In(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=x1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function M1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bg()){case ku:return 1;case b1:return 4;case ea:case Hg:return 16;case C1:return 536870912;default:return 16}default:return 16}}var cn=null,Pu=null,Ro=null;function I1(){if(Ro)return Ro;var e,t=Pu,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ro=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function uf(){return!1}function ut(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fo:uf,this.isPropagationStopped=uf,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=ut($r),Qi=ge({},$r,{view:0,detail:0}),nv=ut(Qi),Ns,$s,Kr,Fa=ge({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Ns=e.screenX-Kr.screenX,$s=e.screenY-Kr.screenY):$s=Ns=0,Kr=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),df=ut(Fa),rv=ge({},Fa,{dataTransfer:0}),iv=ut(rv),ov=ge({},Qi,{relatedTarget:0}),Fs=ut(ov),av=ge({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=ut(av),lv=ge({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cv=ut(lv),uv=ge({},$r,{data:0}),ff=ut(uv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pv[e])?!!t[e]:!1}function ju(){return hv}var mv=ge({},Qi,{key:function(e){if(e.key){var t=dv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gv=ut(mv),vv=ge({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=ut(vv),yv=ge({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),xv=ut(yv),wv=ge({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=ut(wv),kv=ge({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=ut(kv),Cv=[9,13,27,32],Au=Gt&&"CompositionEvent"in window,ui=null;Gt&&"documentMode"in document&&(ui=document.documentMode);var Tv=Gt&&"TextEvent"in window&&!ui,R1=Gt&&(!Au||ui&&8<ui&&11>=ui),hf=" ",mf=!1;function O1(e,t){switch(e){case"keyup":return Cv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function Pv(e,t){switch(e){case"compositionend":return _1(t);case"keypress":return t.which!==32?null:(mf=!0,hf);case"textInput":return e=t.data,e===hf&&mf?null:e;default:return null}}function Ev(e,t){if(or)return e==="compositionend"||!Au&&O1(e,t)?(e=I1(),Ro=Pu=cn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return R1&&t.locale!=="ko"?null:t.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jv[e.type]:t==="textarea"}function D1(e,t,n,r){h1(r),t=ia(t,"onChange"),0<t.length&&(n=new Eu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var di=null,Li=null;function Av(e){K1(e,0)}function Ba(e){var t=lr(e);if(s1(t))return e}function zv(e,t){if(e==="change")return t}var V1=!1;if(Gt){var Bs;if(Gt){var Hs="oninput"in document;if(!Hs){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),Hs=typeof vf.oninput=="function"}Bs=Hs}else Bs=!1;V1=Bs&&(!document.documentMode||9<document.documentMode)}function yf(){di&&(di.detachEvent("onpropertychange",N1),Li=di=null)}function N1(e){if(e.propertyName==="value"&&Ba(Li)){var t=[];D1(t,Li,e,Su(e)),y1(Av,t)}}function Lv(e,t,n){e==="focusin"?(yf(),di=t,Li=n,di.attachEvent("onpropertychange",N1)):e==="focusout"&&yf()}function Mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(Li)}function Iv(e,t){if(e==="click")return Ba(t)}function Rv(e,t){if(e==="input"||e==="change")return Ba(t)}function Ov(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Ov;function Mi(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gl.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,t){var n=xf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xf(n)}}function $1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function F1(){for(var e=window,t=Zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zo(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _v(e){var t=F1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$1(n.ownerDocument.documentElement,n)){if(r!==null&&zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wf(n,o);var a=wf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dv=Gt&&"documentMode"in document&&11>=document.documentMode,ar=null,fc=null,fi=null,pc=!1;function Sf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||ar==null||ar!==Zo(r)||(r=ar,"selectionStart"in r&&zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Mi(fi,r)||(fi=r,r=ia(fc,"onSelect"),0<r.length&&(t=new Eu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Us={},B1={};Gt&&(B1=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Ha(e){if(Us[e])return Us[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in B1)return Us[e]=t[n];return e}var H1=Ha("animationend"),U1=Ha("animationiteration"),W1=Ha("animationstart"),Y1=Ha("transitionend"),G1=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){G1.set(e,t),Yn(t,[e])}for(var Ws=0;Ws<kf.length;Ws++){var Ys=kf[Ws],Vv=Ys.toLowerCase(),Nv=Ys[0].toUpperCase()+Ys.slice(1);Tn(Vv,"on"+Nv)}Tn(H1,"onAnimationEnd");Tn(U1,"onAnimationIteration");Tn(W1,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Y1,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function bf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vg(r,t,void 0,e),e.currentTarget=null}function K1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;bf(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;bf(i,s,c),o=l}}}if(Jo)throw e=lc,Jo=!1,lc=null,e}function ue(e,t){var n=t[yc];n===void 0&&(n=t[yc]=new Set);var r=e+"__bubble";n.has(r)||(Q1(t,e,2,!1),n.add(r))}function Gs(e,t,n){var r=0;t&&(r|=4),Q1(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[ho]){e[ho]=!0,n1.forEach(function(n){n!=="selectionchange"&&($v.has(n)||Gs(n,!1,e),Gs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Gs("selectionchange",!1,t))}}function Q1(e,t,n,r){switch(M1(t)){case 1:var i=ev;break;case 4:i=tv;break;default:i=Tu}n=i.bind(null,t,n,e),i=void 0,!sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ks(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=In(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}y1(function(){var c=o,u=Su(n),d=[];e:{var p=G1.get(e);if(p!==void 0){var v=Eu,y=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":v=gv;break;case"focusin":y="focus",v=Fs;break;case"focusout":y="blur",v=Fs;break;case"beforeblur":case"afterblur":v=Fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xv;break;case H1:case U1:case W1:v=sv;break;case Y1:v=Sv;break;case"scroll":v=nv;break;case"wheel":v=bv;break;case"copy":case"cut":case"paste":v=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=pf}var x=(t&4)!==0,k=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var h=c,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Ei(h,g),w!=null&&x.push(Ri(h,w,m)))),k)break;h=h.return}0<x.length&&(p=new v(p,y,null,n,u),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==oc&&(y=n.relatedTarget||n.fromElement)&&(In(y)||y[Kt]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?In(y):null,y!==null&&(k=Gn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=df,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=pf,w="onPointerLeave",g="onPointerEnter",h="pointer"),k=v==null?p:lr(v),m=y==null?p:lr(y),p=new x(w,h+"leave",v,n,u),p.target=k,p.relatedTarget=m,w=null,In(u)===c&&(x=new x(g,h+"enter",y,n,u),x.target=m,x.relatedTarget=k,w=x),k=w,v&&y)t:{for(x=v,g=y,h=0,m=x;m;m=qn(m))h++;for(m=0,w=g;w;w=qn(w))m++;for(;0<h-m;)x=qn(x),h--;for(;0<m-h;)g=qn(g),m--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=qn(x),g=qn(g)}x=null}else x=null;v!==null&&Cf(d,p,v,x,!1),y!==null&&k!==null&&Cf(d,k,y,x,!0)}}e:{if(p=c?lr(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var C=zv;else if(gf(p))if(V1)C=Rv;else{C=Mv;var P=Lv}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Iv);if(C&&(C=C(e,c))){D1(d,C,n,u);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&ec(p,"number",p.value)}switch(P=c?lr(c):window,e){case"focusin":(gf(P)||P.contentEditable==="true")&&(ar=P,fc=c,fi=null);break;case"focusout":fi=fc=ar=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Sf(d,n,u);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Sf(d,n,u)}var E;if(Au)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else or?O1(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(R1&&n.locale!=="ko"&&(or||A!=="onCompositionStart"?A==="onCompositionEnd"&&or&&(E=I1()):(cn=u,Pu="value"in cn?cn.value:cn.textContent,or=!0)),P=ia(c,A),0<P.length&&(A=new ff(A,e,null,n,u),d.push({event:A,listeners:P}),E?A.data=E:(E=_1(n),E!==null&&(A.data=E)))),(E=Tv?Pv(e,n):Ev(e,n))&&(c=ia(c,"onBeforeInput"),0<c.length&&(u=new ff("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}K1(d,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,n),o!=null&&r.unshift(Ri(e,o,i)),o=Ei(e,t),o!=null&&r.push(Ri(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=Ei(n,o),l!=null&&a.unshift(Ri(n,l,s))):i||(l=Ei(n,o),l!=null&&a.push(Ri(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Fv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(Fv,`
`).replace(Bv,"")}function mo(e,t,n){if(t=Tf(t),Tf(e)!==t&&n)throw Error(j(425))}function oa(){}var hc=null,mc=null;function gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,Hv=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(e){return Pf.resolve(null).then(e).catch(Wv)}:vc;function Wv(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Fr,Oi="__reactProps$"+Fr,Kt="__reactContainer$"+Fr,yc="__reactEvents$"+Fr,Yv="__reactListeners$"+Fr,Gv="__reactHandles$"+Fr;function In(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ef(e);e!==null;){if(n=e[Rt])return n;e=Ef(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[Rt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ua(e){return e[Oi]||null}var xc=[],cr=-1;function Pn(e){return{current:e}}function de(e){0>cr||(e.current=xc[cr],xc[cr]=null,cr--)}function le(e,t){cr++,xc[cr]=e.current,e.current=t}var bn={},Ue=Pn(bn),et=Pn(!1),$n=bn;function Ar(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function aa(){de(et),de(Ue)}function jf(e,t,n){if(Ue.current!==bn)throw Error(j(168));le(Ue,t),le(et,n)}function X1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Lg(e)||"Unknown",i));return ge({},n,r)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,$n=Ue.current,le(Ue,e),le(et,et.current),!0}function Af(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=X1(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,de(et),de(Ue),le(Ue,e)):de(et),le(et,n)}var Ft=null,Wa=!1,Xs=!1;function Z1(e){Ft===null?Ft=[e]:Ft.push(e)}function Kv(e){Wa=!0,Z1(e)}function En(){if(!Xs&&Ft!==null){Xs=!0;var e=0,t=ne;try{var n=Ft;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Wa=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),k1(ku,En),i}finally{ne=t,Xs=!1}}return null}var ur=[],dr=0,la=null,ca=0,ht=[],mt=0,Fn=null,Bt=1,Ht="";function zn(e,t){ur[dr++]=ca,ur[dr++]=la,la=e,ca=t}function q1(e,t,n){ht[mt++]=Bt,ht[mt++]=Ht,ht[mt++]=Fn,Fn=e;var r=Bt;e=Ht;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Bt=1<<32-jt(t)+i|n<<i|r,Ht=o+e}else Bt=1<<o|n<<i|r,Ht=e}function Lu(e){e.return!==null&&(zn(e,1),q1(e,1,0))}function Mu(e){for(;e===la;)la=ur[--dr],ur[dr]=null,ca=ur[--dr],ur[dr]=null;for(;e===Fn;)Fn=ht[--mt],ht[mt]=null,Ht=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null}var at=null,ot=null,pe=!1,Pt=null;function J1(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ot=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Bt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ot=null,!0):!1;default:return!1}}function wc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sc(e){if(pe){var t=ot;if(t){var n=t;if(!zf(e,t)){if(wc(e))throw Error(j(418));t=mn(n.nextSibling);var r=at;t&&zf(e,t)?J1(r,n):(e.flags=e.flags&-4097|2,pe=!1,at=e)}}else{if(wc(e))throw Error(j(418));e.flags=e.flags&-4097|2,pe=!1,at=e}}}function Lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function go(e){if(e!==at)return!1;if(!pe)return Lf(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gc(e.type,e.memoizedProps)),t&&(t=ot)){if(wc(e))throw eh(),Error(j(418));for(;t;)J1(e,t),t=mn(t.nextSibling)}if(Lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=at?mn(e.stateNode.nextSibling):null;return!0}function eh(){for(var e=ot;e;)e=mn(e.nextSibling)}function zr(){ot=at=null,pe=!1}function Iu(e){Pt===null?Pt=[e]:Pt.push(e)}var Qv=qt.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mf(e){var t=e._init;return t(e._payload)}function th(e){function t(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=xn(g,h),g.index=0,g.sibling=null,g}function o(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,m,w){return h===null||h.tag!==6?(h=rl(m,g.mode,w),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,w){var C=m.type;return C===ir?u(g,h,m.props.children,w,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rn&&Mf(C)===h.type)?(w=i(h,m.props),w.ref=Qr(g,h,m),w.return=g,w):(w=Bo(m.type,m.key,m.props,null,g.mode,w),w.ref=Qr(g,h,m),w.return=g,w)}function c(g,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=il(m,g.mode,w),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function u(g,h,m,w,C){return h===null||h.tag!==7?(h=Vn(m,g.mode,w,C),h.return=g,h):(h=i(h,m),h.return=g,h)}function d(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=rl(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:return m=Bo(h.type,h.key,h.props,null,g.mode,m),m.ref=Qr(g,null,h),m.return=g,m;case rr:return h=il(h,g.mode,m),h.return=g,h;case rn:var w=h._init;return d(g,w(h._payload),m)}if(ii(h)||Ur(h))return h=Vn(h,g.mode,m,null),h.return=g,h;vo(g,h)}return null}function p(g,h,m,w){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(g,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:return m.key===C?l(g,h,m,w):null;case rr:return m.key===C?c(g,h,m,w):null;case rn:return C=m._init,p(g,h,C(m._payload),w)}if(ii(m)||Ur(m))return C!==null?null:u(g,h,m,w,null);vo(g,m)}return null}function v(g,h,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,s(h,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oo:return g=g.get(w.key===null?m:w.key)||null,l(h,g,w,C);case rr:return g=g.get(w.key===null?m:w.key)||null,c(h,g,w,C);case rn:var P=w._init;return v(g,h,m,P(w._payload),C)}if(ii(w)||Ur(w))return g=g.get(m)||null,u(h,g,w,C,null);vo(h,w)}return null}function y(g,h,m,w){for(var C=null,P=null,E=h,A=h=0,D=null;E!==null&&A<m.length;A++){E.index>A?(D=E,E=null):D=E.sibling;var _=p(g,E,m[A],w);if(_===null){E===null&&(E=D);break}e&&E&&_.alternate===null&&t(g,E),h=o(_,h,A),P===null?C=_:P.sibling=_,P=_,E=D}if(A===m.length)return n(g,E),pe&&zn(g,A),C;if(E===null){for(;A<m.length;A++)E=d(g,m[A],w),E!==null&&(h=o(E,h,A),P===null?C=E:P.sibling=E,P=E);return pe&&zn(g,A),C}for(E=r(g,E);A<m.length;A++)D=v(E,g,A,m[A],w),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?A:D.key),h=o(D,h,A),P===null?C=D:P.sibling=D,P=D);return e&&E.forEach(function(oe){return t(g,oe)}),pe&&zn(g,A),C}function x(g,h,m,w){var C=Ur(m);if(typeof C!="function")throw Error(j(150));if(m=C.call(m),m==null)throw Error(j(151));for(var P=C=null,E=h,A=h=0,D=null,_=m.next();E!==null&&!_.done;A++,_=m.next()){E.index>A?(D=E,E=null):D=E.sibling;var oe=p(g,E,_.value,w);if(oe===null){E===null&&(E=D);break}e&&E&&oe.alternate===null&&t(g,E),h=o(oe,h,A),P===null?C=oe:P.sibling=oe,P=oe,E=D}if(_.done)return n(g,E),pe&&zn(g,A),C;if(E===null){for(;!_.done;A++,_=m.next())_=d(g,_.value,w),_!==null&&(h=o(_,h,A),P===null?C=_:P.sibling=_,P=_);return pe&&zn(g,A),C}for(E=r(g,E);!_.done;A++,_=m.next())_=v(E,g,A,_.value,w),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?A:_.key),h=o(_,h,A),P===null?C=_:P.sibling=_,P=_);return e&&E.forEach(function(fe){return t(g,fe)}),pe&&zn(g,A),C}function k(g,h,m,w){if(typeof m=="object"&&m!==null&&m.type===ir&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:e:{for(var C=m.key,P=h;P!==null;){if(P.key===C){if(C=m.type,C===ir){if(P.tag===7){n(g,P.sibling),h=i(P,m.props.children),h.return=g,g=h;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rn&&Mf(C)===P.type){n(g,P.sibling),h=i(P,m.props),h.ref=Qr(g,P,m),h.return=g,g=h;break e}n(g,P);break}else t(g,P);P=P.sibling}m.type===ir?(h=Vn(m.props.children,g.mode,w,m.key),h.return=g,g=h):(w=Bo(m.type,m.key,m.props,null,g.mode,w),w.ref=Qr(g,h,m),w.return=g,g=w)}return a(g);case rr:e:{for(P=m.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=il(m,g.mode,w),h.return=g,g=h}return a(g);case rn:return P=m._init,k(g,h,P(m._payload),w)}if(ii(m))return y(g,h,m,w);if(Ur(m))return x(g,h,m,w);vo(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=rl(m,g.mode,w),h.return=g,g=h),a(g)):n(g,h)}return k}var Lr=th(!0),nh=th(!1),ua=Pn(null),da=null,fr=null,Ru=null;function Ou(){Ru=fr=da=null}function _u(e){var t=ua.current;de(ua),e._currentValue=t}function kc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cr(e,t){da=e,Ru=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Ru!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(da===null)throw Error(j(308));fr=e,da.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Rn=null;function Du(e){Rn===null?Rn=[e]:Rn.push(e)}function rh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Du(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Du(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}function If(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fa(e,t,n,r){var i=e.updateQueue;on=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,u=c=l=null,s=o;do{var p=s.lane,v=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(p=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=ge({},d,p);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=v,l=d):u=u.next=v,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Hn|=a,e.lanes=a,e.memoizedState=d}}function Rf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Zi={},_t=Pn(Zi),_i=Pn(Zi),Di=Pn(Zi);function On(e){if(e===Zi)throw Error(j(174));return e}function Nu(e,t){switch(le(Di,t),le(_i,e),le(_t,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nc(t,e)}de(_t),le(_t,t)}function Mr(){de(_t),de(_i),de(Di)}function oh(e){On(Di.current);var t=On(_t.current),n=nc(t,e.type);t!==n&&(le(_i,e),le(_t,n))}function $u(e){_i.current===e&&(de(_t),de(_i))}var he=Pn(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zs=[];function Fu(){for(var e=0;e<Zs.length;e++)Zs[e]._workInProgressVersionPrimary=null;Zs.length=0}var Do=qt.ReactCurrentDispatcher,qs=qt.ReactCurrentBatchConfig,Bn=0,me=null,Ae=null,Le=null,ha=!1,pi=!1,Vi=0,Xv=0;function Fe(){throw Error(j(321))}function Bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Hu(e,t,n,r,i,o){if(Bn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?ey:ty,e=n(r,i),pi){o=0;do{if(pi=!1,Vi=0,25<=o)throw Error(j(301));o+=1,Le=Ae=null,t.updateQueue=null,Do.current=ny,e=n(r,i)}while(pi)}if(Do.current=ma,t=Ae!==null&&Ae.next!==null,Bn=0,Le=Ae=me=null,ha=!1,t)throw Error(j(300));return e}function Uu(){var e=Vi!==0;return Vi=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?me.memoizedState=Le=e:Le=Le.next=e,Le}function xt(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Le===null?me.memoizedState:Le.next;if(t!==null)Le=t,Ae=e;else{if(e===null)throw Error(j(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Le===null?me.memoizedState=Le=e:Le=Le.next=e}return Le}function Ni(e,t){return typeof t=="function"?t(e):t}function Js(e){var t=xt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((Bn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,me.lanes|=u,Hn|=u}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,zt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=xt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);zt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ah(){}function sh(e,t){var n=me,r=xt(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,Wu(uh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,$i(9,ch.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(j(349));Bn&30||lh(n,t,i)}return i}function lh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ch(e,t,n,r){t.value=n,t.getSnapshot=r,dh(t)&&fh(e)}function uh(e,t,n){return n(function(){dh(t)&&fh(e)})}function dh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function fh(e){var t=Qt(e,1);t!==null&&At(t,e,1,-1)}function Of(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t.queue=e,e=e.dispatch=Jv.bind(null,me,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ph(){return xt().memoizedState}function Vo(e,t,n,r){var i=Mt();me.flags|=e,i.memoizedState=$i(1|t,n,void 0,r===void 0?null:r)}function Ya(e,t,n,r){var i=xt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&Bu(r,a.deps)){i.memoizedState=$i(t,n,o,r);return}}me.flags|=e,i.memoizedState=$i(1|t,n,o,r)}function _f(e,t){return Vo(8390656,8,e,t)}function Wu(e,t){return Ya(2048,8,e,t)}function hh(e,t){return Ya(4,2,e,t)}function mh(e,t){return Ya(4,4,e,t)}function gh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4,4,gh.bind(null,t,e),n)}function Yu(){}function yh(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xh(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wh(e,t,n){return Bn&21?(zt(n,t)||(n=T1(),me.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function Zv(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=qs.transition;qs.transition={};try{e(!1),t()}finally{ne=n,qs.transition=r}}function Sh(){return xt().memoizedState}function qv(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kh(e))bh(t,n);else if(n=rh(e,t,n,r),n!==null){var i=Ge();At(n,e,r,i),Ch(n,t,r)}}function Jv(e,t,n){var r=yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kh(e))bh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,zt(s,a)){var l=t.interleaved;l===null?(i.next=i,Du(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rh(e,t,i,r),n!==null&&(i=Ge(),At(n,e,r,i),Ch(n,t,r))}}function kh(e){var t=e.alternate;return e===me||t!==null&&t===me}function bh(e,t){pi=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}var ma={readContext:yt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},ey={readContext:yt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:_f,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qv.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Of,useDebugValue:Yu,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Of(!1),t=e[0];return e=Zv.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Mt();if(pe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Me===null)throw Error(j(349));Bn&30||lh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,_f(uh.bind(null,r,o,e),[e]),r.flags|=2048,$i(9,ch.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Me.identifierPrefix;if(pe){var n=Ht,r=Bt;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ty={readContext:yt,useCallback:yh,useContext:yt,useEffect:Wu,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:xh,useReducer:Js,useRef:ph,useState:function(){return Js(Ni)},useDebugValue:Yu,useDeferredValue:function(e){var t=xt();return wh(t,Ae.memoizedState,e)},useTransition:function(){var e=Js(Ni)[0],t=xt().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:sh,useId:Sh,unstable_isNewReconciler:!1},ny={readContext:yt,useCallback:yh,useContext:yt,useEffect:Wu,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:xh,useReducer:el,useRef:ph,useState:function(){return el(Ni)},useDebugValue:Yu,useDeferredValue:function(e){var t=xt();return Ae===null?t.memoizedState=e:wh(t,Ae.memoizedState,e)},useTransition:function(){var e=el(Ni)[0],t=xt().memoizedState;return[e,t]},useMutableSource:ah,useSyncExternalStore:sh,useId:Sh,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ga={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=yn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(At(t,e,i,r),_o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=yn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(At(t,e,i,r),_o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=yn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(At(t,e,r,n),_o(t,e,r))}};function Df(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Mi(n,r)||!Mi(i,o):!0}function Th(e,t,n){var r=!1,i=bn,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=tt(t)?$n:Ue.current,r=t.contextTypes,o=(r=r!=null)?Ar(e,i):bn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ga.enqueueReplaceState(t,t.state,null)}function Cc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=tt(t)?$n:Ue.current,i.context=Ar(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ga.enqueueReplaceState(i,i.state,null),fa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=zg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ry=typeof WeakMap=="function"?WeakMap:Map;function Ph(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){va||(va=!0,Oc=r),Tc(e,t)},n}function Eh(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Tc(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Nf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ry;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vy.bind(null,e,t,n),t.then(e,e))}function $f(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ff(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var iy=qt.ReactCurrentOwner,Je=!1;function Ye(e,t,n,r){t.child=e===null?nh(t,null,n,r):Lr(t,e.child,n,r)}function Bf(e,t,n,r,i){n=n.render;var o=t.ref;return Cr(t,i),r=Hu(e,t,n,r,o,i),n=Uu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(pe&&n&&Lu(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Hf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ed(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jh(e,t,o,r,i)):(e=Bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(a,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=xn(o,r),e.ref=t.ref,e.return=t,t.child=e}function jh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Mi(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return Pc(e,t,n,r,i)}function Ah(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(hr,it),it|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(hr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(hr,it),it|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(hr,it),it|=r;return Ye(e,t,i,n),t.child}function zh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pc(e,t,n,r,i){var o=tt(n)?$n:Ue.current;return o=Ar(t,o),Cr(t,i),n=Hu(e,t,n,r,o,i),r=Uu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(pe&&r&&Lu(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Uf(e,t,n,r,i){if(tt(n)){var o=!0;sa(t)}else o=!1;if(Cr(t,i),t.stateNode===null)No(e,t),Th(t,n,r),Cc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=yt(c):(c=tt(n)?$n:Ue.current,c=Ar(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&Vf(t,a,r,c),on=!1;var p=t.memoizedState;a.state=p,fa(t,r,a,i),l=t.memoizedState,s!==r||p!==l||et.current||on?(typeof u=="function"&&(bc(t,n,u,r),l=t.memoizedState),(s=on||Df(t,n,s,r,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ih(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ct(t.type,s),a.props=c,d=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=tt(n)?$n:Ue.current,l=Ar(t,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==l)&&Vf(t,a,r,l),on=!1,p=t.memoizedState,a.state=p,fa(t,r,a,i);var y=t.memoizedState;s!==d||p!==y||et.current||on?(typeof v=="function"&&(bc(t,n,v,r),y=t.memoizedState),(c=on||Df(t,n,c,r,p,y,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ec(e,t,n,r,o,i)}function Ec(e,t,n,r,i,o){zh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Af(t,n,!1),Xt(e,t,o);r=t.stateNode,iy.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Lr(t,e.child,null,o),t.child=Lr(t,null,s,o)):Ye(e,t,s,o),t.memoizedState=r.state,i&&Af(t,n,!0),t.child}function Lh(e){var t=e.stateNode;t.pendingContext?jf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jf(e,t.context,!1),Nu(e,t.containerInfo)}function Wf(e,t,n,r,i){return zr(),Iu(i),t.flags|=256,Ye(e,t,n,r),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Ac(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mh(e,t,n){var r=t.pendingProps,i=he.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(he,i&1),e===null)return Sc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Xa(a,r,0,null),e=Vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ac(n),t.memoizedState=jc,e):Gu(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return oy(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=xn(s,o):(o=Vn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ac(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=jc,r}return o=e.child,e=o.sibling,r=xn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gu(e,t){return t=Xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&Iu(r),Lr(t,e.child,null,n),e=Gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(j(422))),yo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xa({mode:"visible",children:r.children},i,0,null),o=Vn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Lr(t,e.child,null,a),t.child.memoizedState=Ac(a),t.memoizedState=jc,o);if(!(t.mode&1))return yo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=tl(o,r,void 0),yo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Je||s){if(r=Me,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),At(r,e,i,-1))}return Ju(),r=tl(Error(j(421))),yo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=mn(i.nextSibling),at=t,pe=!0,Pt=null,e!==null&&(ht[mt++]=Bt,ht[mt++]=Ht,ht[mt++]=Fn,Bt=e.id,Ht=e.overflow,Fn=t),t=Gu(t,r.children),t.flags|=4096,t)}function Yf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kc(e.return,t,n)}function nl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ih(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,n,t);else if(e.tag===19)Yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,o);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function No(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ay(e,t,n){switch(t.tag){case 3:Lh(t),zr();break;case 5:oh(t);break;case 1:tt(t.type)&&sa(t);break;case 4:Nu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(ua,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?Mh(e,t,n):(le(he,he.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);le(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ih(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,Ah(e,t,n)}return Xt(e,t,n)}var Rh,zc,Oh,_h;Rh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};Oh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(_t.current);var o=null;switch(n){case"input":i=ql(e,i),r=ql(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=tc(e,i),r=tc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}rc(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ti.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ti.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ue("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};_h=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sy(e,t,n){var r=t.pendingProps;switch(Mu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return tt(t.type)&&aa(),Be(t),null;case 3:return r=t.stateNode,Mr(),de(et),de(Ue),Fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Vc(Pt),Pt=null))),zc(e,t),Be(t),null;case 5:$u(t);var i=On(Di.current);if(n=t.type,e!==null&&t.stateNode!=null)Oh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Be(t),null}if(e=On(_t.current),go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[Oi]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)ue(ai[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":ef(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":nf(r,o),ue("invalid",r)}rc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,s,e),i=["children",""+s]):Ti.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":ao(r),tf(r,o,!0);break;case"textarea":ao(r),rf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=u1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Rt]=t,e[Oi]=r,Rh(e,t,!1,!1),t.stateNode=e;e:{switch(a=ic(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)ue(ai[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":ef(e,r),i=ql(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ue("invalid",e);break;case"textarea":nf(e,r),i=tc(e,r),ue("invalid",e);break;default:i=r}rc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?p1(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&d1(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pi(e,l):typeof l=="number"&&Pi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ti.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ue("scroll",e):l!=null&&vu(e,o,l,a))}switch(n){case"input":ao(e),tf(e,r,!1);break;case"textarea":ao(e),rf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)_h(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=On(Di.current),On(_t.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Be(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ot!==null&&t.mode&1&&!(t.flags&128))eh(),zr(),t.flags|=98560,o=!1;else if(o=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Rt]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),o=!1}else Pt!==null&&(Vc(Pt),Pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?ze===0&&(ze=3):Ju())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Mr(),zc(e,t),e===null&&Ii(t.stateNode.containerInfo),Be(t),null;case 10:return _u(t.type._context),Be(t),null;case 17:return tt(t.type)&&aa(),Be(t),null;case 19:if(de(he),o=t.memoizedState,o===null)return Be(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Xr(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=pa(e),a!==null){for(t.flags|=128,Xr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(he,he.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Rr&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=pa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!pe)return Be(t),null}else 2*Te()-o.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=he.current,le(he,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function ly(e,t){switch(Mu(t),t.tag){case 1:return tt(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),de(et),de(Ue),Fu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $u(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return Mr(),null;case 10:return _u(t.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var xo=!1,He=!1,cy=typeof WeakSet=="function"?WeakSet:Set,O=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Lc(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Gf=!1;function uy(e,t){if(hc=na,e=F1(),zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++c===i&&(s=a),p===o&&++u===r&&(l=a),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},na=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ct(t.type,x),k);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){xe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=Gf,Gf=!1,y}function hi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Lc(t,n,o)}i=i.next}while(i!==r)}}function Ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dh(e){var t=e.alternate;t!==null&&(e.alternate=null,Dh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Oi],delete t[yc],delete t[Yv],delete t[Gv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vh(e){return e.tag===5||e.tag===3||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(Ic(e,t,n),e=e.sibling;e!==null;)Ic(e,t,n),e=e.sibling}function Rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rc(e,t,n),e=e.sibling;e!==null;)Rc(e,t,n),e=e.sibling}var De=null,Tt=!1;function en(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:He||pr(n,t);case 6:var r=De,i=Tt;De=null,en(e,t,n),De=r,Tt=i,De!==null&&(Tt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Tt?(e=De,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),zi(e)):Qs(De,n.stateNode));break;case 4:r=De,i=Tt,De=n.stateNode.containerInfo,Tt=!0,en(e,t,n),De=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Lc(n,t,a),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!He&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){xe(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,en(e,t,n),He=r):en(e,t,n);break;default:en(e,t,n)}}function Qf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cy),t.forEach(function(r){var i=xy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,Tt=!1;break e;case 3:De=s.stateNode.containerInfo,Tt=!0;break e;case 4:De=s.stateNode.containerInfo,Tt=!0;break e}s=s.return}if(De===null)throw Error(j(160));Nh(o,a,i),De=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){xe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$h(t,e),t=t.sibling}function $h(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Lt(e),r&4){try{hi(3,e,e.return),Ka(3,e)}catch(x){xe(e,e.return,x)}try{hi(5,e,e.return)}catch(x){xe(e,e.return,x)}}break;case 1:kt(t,e),Lt(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(kt(t,e),Lt(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var i=e.stateNode;try{Pi(i,"")}catch(x){xe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&l1(i,o),ic(s,a);var c=ic(s,o);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?p1(i,d):u==="dangerouslySetInnerHTML"?d1(i,d):u==="children"?Pi(i,d):vu(i,u,d,c)}switch(s){case"input":Jl(i,o);break;case"textarea":c1(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?wr(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Oi]=o}catch(x){xe(e,e.return,x)}}break;case 6:if(kt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){xe(e,e.return,x)}}break;case 3:if(kt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(x){xe(e,e.return,x)}break;case 4:kt(t,e),Lt(e);break;case 13:kt(t,e),Lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xu=Te())),r&4&&Qf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(He=(c=He)||u,kt(t,e),He=c):kt(t,e),Lt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(d=O=u;O!==null;){switch(p=O,v=p.child,p.tag){case 0:case 11:case 14:case 15:hi(4,p,p.return);break;case 1:pr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:pr(p,p.return);break;case 22:if(p.memoizedState!==null){Zf(d);continue}}v!==null?(v.return=p,O=v):Zf(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=f1("display",a))}catch(x){xe(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){xe(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(t,e),Lt(e),r&4&&Qf(e);break;case 21:break;default:kt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vh(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var o=Kf(e);Rc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Kf(e);Ic(e,s,a);break;default:throw Error(j(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dy(e,t,n){O=e,Fh(e)}function Fh(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||xo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||He;s=xo;var c=He;if(xo=a,(He=l)&&!c)for(O=i;O!==null;)a=O,l=a.child,a.tag===22&&a.memoizedState!==null?qf(i):l!==null?(l.return=a,O=l):qf(i);for(;o!==null;)O=o,Fh(o),o=o.sibling;O=i,xo=s,He=c}Xf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Xf(e)}}function Xf(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Ka(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Rf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&zi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}He||t.flags&512&&Mc(t)}catch(p){xe(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Zf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function qf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ka(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){xe(t,i,l)}}var o=t.return;try{Mc(t)}catch(l){xe(t,o,l)}break;case 5:var a=t.return;try{Mc(t)}catch(l){xe(t,a,l)}}}catch(l){xe(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var fy=Math.ceil,ga=qt.ReactCurrentDispatcher,Ku=qt.ReactCurrentOwner,vt=qt.ReactCurrentBatchConfig,Z=0,Me=null,Pe=null,Ve=0,it=0,hr=Pn(0),ze=0,Fi=null,Hn=0,Qa=0,Qu=0,mi=null,qe=null,Xu=0,Rr=1/0,$t=null,va=!1,Oc=null,vn=null,wo=!1,un=null,ya=0,gi=0,_c=null,$o=-1,Fo=0;function Ge(){return Z&6?Te():$o!==-1?$o:$o=Te()}function yn(e){return e.mode&1?Z&2&&Ve!==0?Ve&-Ve:Qv.transition!==null?(Fo===0&&(Fo=T1()),Fo):(e=ne,e!==0||(e=window.event,e=e===void 0?16:M1(e.type)),e):1}function At(e,t,n,r){if(50<gi)throw gi=0,_c=null,Error(j(185));Ki(e,n,r),(!(Z&2)||e!==Me)&&(e===Me&&(!(Z&2)&&(Qa|=n),ze===4&&ln(e,Ve)),nt(e,r),n===1&&Z===0&&!(t.mode&1)&&(Rr=Te()+500,Wa&&En()))}function nt(e,t){var n=e.callbackNode;Qg(e,t);var r=ta(e,e===Me?Ve:0);if(r===0)n!==null&&sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sf(n),t===1)e.tag===0?Kv(Jf.bind(null,e)):Z1(Jf.bind(null,e)),Uv(function(){!(Z&6)&&En()}),n=null;else{switch(P1(r)){case 1:n=ku;break;case 4:n=b1;break;case 16:n=ea;break;case 536870912:n=C1;break;default:n=ea}n=Qh(n,Bh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bh(e,t){if($o=-1,Fo=0,Z&6)throw Error(j(327));var n=e.callbackNode;if(Tr()&&e.callbackNode!==n)return null;var r=ta(e,e===Me?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xa(e,r);else{t=r;var i=Z;Z|=2;var o=Uh();(Me!==e||Ve!==t)&&($t=null,Rr=Te()+500,Dn(e,t));do try{my();break}catch(s){Hh(e,s)}while(!0);Ou(),ga.current=o,Z=i,Pe!==null?t=0:(Me=null,Ve=0,t=ze)}if(t!==0){if(t===2&&(i=cc(e),i!==0&&(r=i,t=Dc(e,i))),t===1)throw n=Fi,Dn(e,0),ln(e,r),nt(e,Te()),n;if(t===6)ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!py(i)&&(t=xa(e,r),t===2&&(o=cc(e),o!==0&&(r=o,t=Dc(e,o))),t===1))throw n=Fi,Dn(e,0),ln(e,r),nt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Ln(e,qe,$t);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Xu+500-Te(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vc(Ln.bind(null,e,qe,$t),t);break}Ln(e,qe,$t);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-jt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fy(r/1960))-r,10<r){e.timeoutHandle=vc(Ln.bind(null,e,qe,$t),r);break}Ln(e,qe,$t);break;case 5:Ln(e,qe,$t);break;default:throw Error(j(329))}}}return nt(e,Te()),e.callbackNode===n?Bh.bind(null,e):null}function Dc(e,t){var n=mi;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=xa(e,t),e!==2&&(t=qe,qe=n,t!==null&&Vc(t)),e}function Vc(e){qe===null?qe=e:qe.push.apply(qe,e)}function py(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Qu,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function Jf(e){if(Z&6)throw Error(j(327));Tr();var t=ta(e,0);if(!(t&1))return nt(e,Te()),null;var n=xa(e,t);if(e.tag!==0&&n===2){var r=cc(e);r!==0&&(t=r,n=Dc(e,r))}if(n===1)throw n=Fi,Dn(e,0),ln(e,t),nt(e,Te()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,qe,$t),nt(e,Te()),null}function Zu(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Rr=Te()+500,Wa&&En())}}function Un(e){un!==null&&un.tag===0&&!(Z&6)&&Tr();var t=Z;Z|=1;var n=vt.transition,r=ne;try{if(vt.transition=null,ne=1,e)return e()}finally{ne=r,vt.transition=n,Z=t,!(Z&6)&&En()}}function qu(){it=hr.current,de(hr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hv(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Mu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:Mr(),de(et),de(Ue),Fu();break;case 5:$u(r);break;case 4:Mr();break;case 13:de(he);break;case 19:de(he);break;case 10:_u(r.type._context);break;case 22:case 23:qu()}n=n.return}if(Me=e,Pe=e=xn(e.current,null),Ve=it=t,ze=0,Fi=null,Qu=Qa=Hn=0,qe=mi=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Rn=null}return e}function Hh(e,t){do{var n=Pe;try{if(Ou(),Do.current=ma,ha){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ha=!1}if(Bn=0,Le=Ae=me=null,pi=!1,Vi=0,Ku.current=null,n===null||n.return===null){ze=1,Fi=t,Pe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=$f(a);if(v!==null){v.flags&=-257,Ff(v,a,s,o,t),v.mode&1&&Nf(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Nf(o,c,t),Ju();break e}l=Error(j(426))}}else if(pe&&s.mode&1){var k=$f(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ff(k,a,s,o,t),Iu(Ir(l,s));break e}}o=l=Ir(l,s),ze!==4&&(ze=2),mi===null?mi=[o]:mi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Ph(o,l,t);If(o,g);break e;case 1:s=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vn===null||!vn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Eh(o,s,t);If(o,w);break e}}o=o.return}while(o!==null)}Yh(n)}catch(C){t=C,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Uh(){var e=ga.current;return ga.current=ma,e===null?ma:e}function Ju(){(ze===0||ze===3||ze===2)&&(ze=4),Me===null||!(Hn&268435455)&&!(Qa&268435455)||ln(Me,Ve)}function xa(e,t){var n=Z;Z|=2;var r=Uh();(Me!==e||Ve!==t)&&($t=null,Dn(e,t));do try{hy();break}catch(i){Hh(e,i)}while(!0);if(Ou(),Z=n,ga.current=r,Pe!==null)throw Error(j(261));return Me=null,Ve=0,ze}function hy(){for(;Pe!==null;)Wh(Pe)}function my(){for(;Pe!==null&&!$g();)Wh(Pe)}function Wh(e){var t=Kh(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Yh(e):Pe=t,Ku.current=null}function Yh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ly(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Pe=null;return}}else if(n=sy(n,t,it),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);ze===0&&(ze=5)}function Ln(e,t,n){var r=ne,i=vt.transition;try{vt.transition=null,ne=1,gy(e,t,n,r)}finally{vt.transition=i,ne=r}return null}function gy(e,t,n,r){do Tr();while(un!==null);if(Z&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Xg(e,o),e===Me&&(Pe=Me=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Qh(ea,function(){return Tr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=vt.transition,vt.transition=null;var a=ne;ne=1;var s=Z;Z|=4,Ku.current=null,uy(e,n),$h(n,e),_v(mc),na=!!hc,mc=hc=null,e.current=n,dy(n),Fg(),Z=s,ne=a,vt.transition=o}else e.current=n;if(wo&&(wo=!1,un=e,ya=i),o=e.pendingLanes,o===0&&(vn=null),Ug(n.stateNode),nt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(va)throw va=!1,e=Oc,Oc=null,e;return ya&1&&e.tag!==0&&Tr(),o=e.pendingLanes,o&1?e===_c?gi++:(gi=0,_c=e):gi=0,En(),null}function Tr(){if(un!==null){var e=P1(ya),t=vt.transition,n=ne;try{if(vt.transition=null,ne=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,ya=0,Z&6)throw Error(j(331));var i=Z;for(Z|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:hi(8,u,o)}var d=u.child;if(d!==null)d.return=u,O=d;else for(;O!==null;){u=O;var p=u.sibling,v=u.return;if(Dh(u),u===c){O=null;break}if(p!==null){p.return=v,O=p;break}O=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,O=g;break e}O=o.return}}var h=e.current;for(O=h;O!==null;){a=O;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,O=m;else e:for(a=h;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ka(9,s)}}catch(C){xe(s,s.return,C)}if(s===a){O=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,O=w;break e}O=s.return}}if(Z=i,En(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot($a,e)}catch{}r=!0}return r}finally{ne=n,vt.transition=t}}return!1}function ep(e,t,n){t=Ir(n,t),t=Ph(e,t,1),e=gn(e,t,1),t=Ge(),e!==null&&(Ki(e,1,t),nt(e,t))}function xe(e,t,n){if(e.tag===3)ep(e,e,n);else for(;t!==null;){if(t.tag===3){ep(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=Ir(n,e),e=Eh(t,e,1),t=gn(t,e,1),e=Ge(),t!==null&&(Ki(t,1,e),nt(t,e));break}}t=t.return}}function vy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Ve&n)===n&&(ze===4||ze===3&&(Ve&130023424)===Ve&&500>Te()-Xu?Dn(e,0):Qu|=n),nt(e,t)}function Gh(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=Ge();e=Qt(e,t),e!==null&&(Ki(e,t,n),nt(e,n))}function yy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gh(e,n)}function xy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Gh(e,n)}var Kh;Kh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,ay(e,t,n);Je=!!(e.flags&131072)}else Je=!1,pe&&t.flags&1048576&&q1(t,ca,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;No(e,t),e=t.pendingProps;var i=Ar(t,Ue.current);Cr(t,n),i=Hu(null,t,r,e,i,n);var o=Uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,sa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vu(t),i.updater=Ga,t.stateNode=i,i._reactInternals=t,Cc(t,r,e,n),t=Ec(null,t,r,!0,o,n)):(t.tag=0,pe&&o&&Lu(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(No(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sy(r),e=Ct(r,e),i){case 0:t=Pc(null,t,r,e,n);break e;case 1:t=Uf(null,t,r,e,n);break e;case 11:t=Bf(null,t,r,e,n);break e;case 14:t=Hf(null,t,r,Ct(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Pc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Uf(e,t,r,i,n);case 3:e:{if(Lh(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ih(e,t),fa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ir(Error(j(423)),t),t=Wf(e,t,r,n,i);break e}else if(r!==i){i=Ir(Error(j(424)),t),t=Wf(e,t,r,n,i);break e}else for(ot=mn(t.stateNode.containerInfo.firstChild),at=t,pe=!0,Pt=null,n=nh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===i){t=Xt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return oh(t),e===null&&Sc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,gc(r,i)?a=null:o!==null&&gc(r,o)&&(t.flags|=32),zh(e,t),Ye(e,t,a,n),t.child;case 6:return e===null&&Sc(t),null;case 13:return Mh(e,t,n);case 4:return Nu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Bf(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,le(ua,r._currentValue),r._currentValue=a,o!==null)if(zt(o.value,a)){if(o.children===i.children&&!et.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Wt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),kc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cr(t,n),i=yt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),Hf(e,t,r,i,n);case 15:return jh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),No(e,t),t.tag=1,tt(r)?(e=!0,sa(t)):e=!1,Cr(t,n),Th(t,r,i),Cc(t,r,i,n),Ec(null,t,r,!0,e,n);case 19:return Ih(e,t,n);case 22:return Ah(e,t,n)}throw Error(j(156,t.tag))};function Qh(e,t){return k1(e,t)}function wy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new wy(e,t,n,r)}function ed(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sy(e){if(typeof e=="function")return ed(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xu)return 11;if(e===wu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ed(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ir:return Vn(n.children,i,o,t);case yu:a=8,i|=8;break;case Kl:return e=gt(12,n,t,i|2),e.elementType=Kl,e.lanes=o,e;case Ql:return e=gt(13,n,t,i),e.elementType=Ql,e.lanes=o,e;case Xl:return e=gt(19,n,t,i),e.elementType=Xl,e.lanes=o,e;case o1:return Xa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case r1:a=10;break e;case i1:a=9;break e;case xu:a=11;break e;case wu:a=14;break e;case rn:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=gt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vn(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Xa(e,t,n,r){return e=gt(22,e,r,t),e.elementType=o1,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ky(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function td(e,t,n,r,i,o,a,s,l){return e=new ky(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(o),e}function by(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xh(e){if(!e)return bn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(tt(n))return X1(e,n,t)}return t}function Zh(e,t,n,r,i,o,a,s,l){return e=td(n,r,!0,e,i,o,a,s,l),e.context=Xh(null),n=e.current,r=Ge(),i=yn(n),o=Wt(r,i),o.callback=t??null,gn(n,o,i),e.current.lanes=i,Ki(e,i,r),nt(e,r),e}function Za(e,t,n,r){var i=t.current,o=Ge(),a=yn(i);return n=Xh(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,a),e!==null&&(At(e,i,a,o),_o(e,i,a)),a}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nd(e,t){tp(e,t),(e=e.alternate)&&tp(e,t)}function Cy(){return null}var qh=typeof reportError=="function"?reportError:function(e){console.error(e)};function rd(e){this._internalRoot=e}qa.prototype.render=rd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Za(e,t,null,null)};qa.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Za(null,e,null,null)}),t[Kt]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=A1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&L1(e)}};function id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function np(){}function Ty(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=wa(a);o.call(c)}}var a=Zh(t,r,e,0,null,!1,!1,"",np);return e._reactRootContainer=a,e[Kt]=a.current,Ii(e.nodeType===8?e.parentNode:e),Un(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=wa(l);s.call(c)}}var l=td(e,0,!1,null,null,!1,!1,"",np);return e._reactRootContainer=l,e[Kt]=l.current,Ii(e.nodeType===8?e.parentNode:e),Un(function(){Za(t,l,n,r)}),l}function es(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=wa(a);s.call(l)}}Za(t,a,e,i)}else a=Ty(n,t,e,i,r);return wa(a)}E1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oi(t.pendingLanes);n!==0&&(bu(t,n|1),nt(t,Te()),!(Z&6)&&(Rr=Te()+500,En()))}break;case 13:Un(function(){var r=Qt(e,1);if(r!==null){var i=Ge();At(r,e,1,i)}}),nd(e,1)}};Cu=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ge();At(t,e,134217728,n)}nd(e,134217728)}};j1=function(e){if(e.tag===13){var t=yn(e),n=Qt(e,t);if(n!==null){var r=Ge();At(n,e,t,r)}nd(e,t)}};A1=function(){return ne};z1=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};ac=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ua(r);if(!i)throw Error(j(90));s1(r),Jl(r,i)}}}break;case"textarea":c1(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};g1=Zu;v1=Un;var Py={usingClientEntryPoint:!1,Events:[Xi,lr,Ua,h1,m1,Zu]},Zr={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ey={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=w1(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||Cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{$a=So.inject(Ey),Ot=So}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Py;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(t))throw Error(j(200));return by(e,t,null,n)};ct.createRoot=function(e,t){if(!id(e))throw Error(j(299));var n=!1,r="",i=qh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=td(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,Ii(e.nodeType===8?e.parentNode:e),new rd(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=w1(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Un(e)};ct.hydrate=function(e,t,n){if(!Ja(t))throw Error(j(200));return es(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!id(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=qh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Zh(t,null,e,1,n??null,i,!1,o,a),e[Kt]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qa(t)};ct.render=function(e,t,n){if(!Ja(t))throw Error(j(200));return es(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ja(e))throw Error(j(40));return e._reactRootContainer?(Un(function(){es(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};ct.unstable_batchedUpdates=Zu;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ja(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return es(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function Jh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jh)}catch(e){console.error(e)}}Jh(),J0.exports=ct;var jy=J0.exports,rp=jy;Yl.createRoot=rp.createRoot,Yl.hydrateRoot=rp.hydrateRoot;var em={exports:{}},Ay="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zy=Ay,Ly=zy;function tm(){}function nm(){}nm.resetWarningCache=tm;var My=function(){function e(r,i,o,a,s,l){if(l!==Ly){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:nm,resetWarningCache:tm};return n.PropTypes=n,n};em.exports=My();var Iy=em.exports;const K=Vr(Iy);var Ry=typeof Element<"u",Oy=typeof Map=="function",_y=typeof Set=="function",Dy=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ho(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ho(e[r],t[r]))return!1;return!0}var o;if(Oy&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Ho(r.value[1],t.get(r.value[0])))return!1;return!0}if(_y&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Dy&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(Ry&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Ho(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var Vy=function(t,n){try{return Ho(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Ny=Vr(Vy);var $y=function(e,t,n,r,i,o,a,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,s],u=0;l=new Error(t.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},Fy=$y;const ip=Vr(Fy);var By=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var d=t[u],p=n[u];if(o=r?r.call(i,d,p,u):void 0,o===!1||o===void 0&&d!==p)return!1}return!0};const Hy=Vr(By);function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function od(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nc(e,t)}function Nc(e,t){return Nc=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Nc(e,t)}function op(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var V={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Uy={rel:["amphtml","canonical","alternate"]},Wy={type:["application/ld+json"]},Yy={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},ap=Object.keys(V).map(function(e){return V[e]}),Sa={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Gy=Object.keys(Sa).reduce(function(e,t){return e[Sa[t]]=t,e},{}),Pr=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Ky=function(e){var t=Pr(e,V.TITLE),n=Pr(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,function(){return t});var r=Pr(e,"defaultTitle");return t||r||void 0},Qy=function(e){return Pr(e,"onChangeClientState")||function(){}},ol=function(e,t){return t.filter(function(n){return n[e]!==void 0}).map(function(n){return n[e]}).reduce(function(n,r){return Ce({},n,r)},{})},Xy=function(e,t){return t.filter(function(n){return n[V.BASE]!==void 0}).map(function(n){return n[V.BASE]}).reverse().reduce(function(n,r){if(!n.length)for(var i=Object.keys(r),o=0;o<i.length;o+=1){var a=i[o].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}return n},[])},qr=function(e,t,n){var r={};return n.filter(function(i){return!!Array.isArray(i[e])||(i[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof i[e]+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,o){var a={};o.filter(function(d){for(var p,v=Object.keys(d),y=0;y<v.length;y+=1){var x=v[y],k=x.toLowerCase();t.indexOf(k)===-1||p==="rel"&&d[p].toLowerCase()==="canonical"||k==="rel"&&d[k].toLowerCase()==="stylesheet"||(p=k),t.indexOf(x)===-1||x!=="innerHTML"&&x!=="cssText"&&x!=="itemprop"||(p=x)}if(!p||!d[p])return!1;var g=d[p].toLowerCase();return r[p]||(r[p]={}),a[p]||(a[p]={}),!r[p][g]&&(a[p][g]=!0,!0)}).reverse().forEach(function(d){return i.push(d)});for(var s=Object.keys(a),l=0;l<s.length;l+=1){var c=s[l],u=Ce({},r[c],a[c]);r[c]=u}return i},[]).reverse()},Zy=function(e,t){if(Array.isArray(e)&&e.length){for(var n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},rm=function(e){return Array.isArray(e)?e.join(""):e},al=function(e,t){return Array.isArray(e)?e.reduce(function(n,r){return function(i,o){for(var a=Object.keys(i),s=0;s<a.length;s+=1)if(o[a[s]]&&o[a[s]].includes(i[a[s]]))return!0;return!1}(r,t)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:e}},sp=function(e,t){var n;return Ce({},e,((n={})[t]=void 0,n))},qy=[V.NOSCRIPT,V.SCRIPT,V.STYLE],sl=function(e,t){return t===void 0&&(t=!0),t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},lp=function(e){return Object.keys(e).reduce(function(t,n){var r=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},cp=function(e,t){return t===void 0&&(t={}),Object.keys(e).reduce(function(n,r){return n[Sa[r]||r]=e[r],n},t)},Uo=function(e,t){return t.map(function(n,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(a){var s=Sa[a]||a;s==="innerHTML"||s==="cssText"?o.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:o[s]=n[a]}),ce.createElement(e,o)})},ft=function(e,t,n){switch(e){case V.TITLE:return{toComponent:function(){return i=t.titleAttributes,(o={key:r=t.title})["data-rh"]=!0,a=cp(i,o),[ce.createElement(V.TITLE,a,r)];var r,i,o,a},toString:function(){return function(r,i,o,a){var s=lp(o),l=rm(i);return s?"<"+r+' data-rh="true" '+s+">"+sl(l,a)+"</"+r+">":"<"+r+' data-rh="true">'+sl(l,a)+"</"+r+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return cp(t)},toString:function(){return lp(t)}};default:return{toComponent:function(){return Uo(e,t)},toString:function(){return function(r,i,o){return i.reduce(function(a,s){var l=Object.keys(s).filter(function(d){return!(d==="innerHTML"||d==="cssText")}).reduce(function(d,p){var v=s[p]===void 0?p:p+'="'+sl(s[p],o)+'"';return d?d+" "+v:v},""),c=s.innerHTML||s.cssText||"",u=qy.indexOf(r)===-1;return a+"<"+r+' data-rh="true" '+l+(u?"/>":">"+c+"</"+r+">")},"")}(e,t,n)}}}},$c=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.noscriptTags,a=e.styleTags,s=e.title,l=s===void 0?"":s,c=e.titleAttributes,u=e.linkTags,d=e.metaTags,p=e.scriptTags,v={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var y=function(x){var k=x.linkTags,g=x.scriptTags,h=x.encode,m=al(x.metaTags,Yy),w=al(k,Uy),C=al(g,Wy);return{priorityMethods:{toComponent:function(){return[].concat(Uo(V.META,m.priority),Uo(V.LINK,w.priority),Uo(V.SCRIPT,C.priority))},toString:function(){return ft(V.META,m.priority,h)+" "+ft(V.LINK,w.priority,h)+" "+ft(V.SCRIPT,C.priority,h)}},metaTags:m.default,linkTags:w.default,scriptTags:C.default}}(e);v=y.priorityMethods,u=y.linkTags,d=y.metaTags,p=y.scriptTags}return{priority:v,base:ft(V.BASE,t,r),bodyAttributes:ft("bodyAttributes",n,r),htmlAttributes:ft("htmlAttributes",i,r),link:ft(V.LINK,u,r),meta:ft(V.META,d,r),noscript:ft(V.NOSCRIPT,o,r),script:ft(V.SCRIPT,p,r),style:ft(V.STYLE,a,r),title:ft(V.TITLE,{title:l,titleAttributes:c},r)}},ko=[],Fc=function(e,t){var n=this;t===void 0&&(t=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?ko:n.instances},add:function(r){(n.canUseDOM?ko:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?ko:n.instances).indexOf(r);(n.canUseDOM?ko:n.instances).splice(i,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=$c({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},im=ce.createContext({}),Jy=K.shape({setHelmet:K.func,helmetInstances:K.shape({get:K.func,add:K.func,remove:K.func})}),e4=typeof document<"u",mr=function(e){function t(n){var r;return(r=e.call(this,n)||this).helmetData=new Fc(r.props.context,t.canUseDOM),r}return od(t,e),t.prototype.render=function(){return ce.createElement(im.Provider,{value:this.helmetData.value},this.props.children)},t}(b.Component);mr.canUseDOM=e4,mr.propTypes={context:K.shape({helmet:K.shape()}),children:K.node.isRequired},mr.defaultProps={context:{}},mr.displayName="HelmetProvider";var Jn=function(e,t){var n,r=document.head||document.querySelector(V.HEAD),i=r.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),a=[];return t&&t.length&&t.forEach(function(s){var l=document.createElement(e);for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(c==="innerHTML"?l.innerHTML=s.innerHTML:c==="cssText"?l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText)):l.setAttribute(c,s[c]===void 0?"":s[c]));l.setAttribute("data-rh","true"),o.some(function(u,d){return n=d,l.isEqualNode(u)})?o.splice(n,1):a.push(l)}),o.forEach(function(s){return s.parentNode.removeChild(s)}),a.forEach(function(s){return r.appendChild(s)}),{oldTags:o,newTags:a}},ll=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-rh"),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s+=1){var l=a[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);var u=o.indexOf(l);u!==-1&&o.splice(u,1)}for(var d=o.length-1;d>=0;d-=1)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==a.join(",")&&n.setAttribute("data-rh",a.join(","))}},up=function(e,t){var n=e.baseTag,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,c=e.styleTags,u=e.title,d=e.titleAttributes;ll(V.BODY,e.bodyAttributes),ll(V.HTML,r),function(x,k){x!==void 0&&document.title!==x&&(document.title=rm(x)),ll(V.TITLE,k)}(u,d);var p={baseTag:Jn(V.BASE,n),linkTags:Jn(V.LINK,i),metaTags:Jn(V.META,o),noscriptTags:Jn(V.NOSCRIPT,a),scriptTags:Jn(V.SCRIPT,l),styleTags:Jn(V.STYLE,c)},v={},y={};Object.keys(p).forEach(function(x){var k=p[x],g=k.newTags,h=k.oldTags;g.length&&(v[x]=g),h.length&&(y[x]=p[x].oldTags)}),t&&t(),s(e,v,y)},Jr=null,ka=function(e){function t(){for(var r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).rendered=!1,r}od(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!Hy(r,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var r,i,o=this.props.context,a=o.setHelmet,s=null,l=(r=o.helmetInstances.get().map(function(c){var u=Ce({},c.props);return delete u.context,u}),{baseTag:Xy(["href"],r),bodyAttributes:ol("bodyAttributes",r),defer:Pr(r,"defer"),encode:Pr(r,"encodeSpecialCharacters"),htmlAttributes:ol("htmlAttributes",r),linkTags:qr(V.LINK,["rel","href"],r),metaTags:qr(V.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:qr(V.NOSCRIPT,["innerHTML"],r),onChangeClientState:Qy(r),scriptTags:qr(V.SCRIPT,["src","innerHTML"],r),styleTags:qr(V.STYLE,["cssText"],r),title:Ky(r),titleAttributes:ol("titleAttributes",r),prioritizeSeoTags:Zy(r,"prioritizeSeoTags")});mr.canUseDOM?(i=l,Jr&&cancelAnimationFrame(Jr),i.defer?Jr=requestAnimationFrame(function(){up(i,function(){Jr=null})}):(up(i),Jr=null)):$c&&(s=$c(l)),a(s)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},t}(b.Component);ka.propTypes={context:Jy.isRequired},ka.displayName="HelmetDispatcher";var t4=["children"],n4=["children"],Wo=function(e){function t(){return e.apply(this,arguments)||this}od(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!Ny(sp(this.props,"helmetData"),sp(r,"helmetData"))},n.mapNestedChildrenToProps=function(r,i){if(!i)return null;switch(r.type){case V.SCRIPT:case V.NOSCRIPT:return{innerHTML:i};case V.STYLE:return{cssText:i};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(r){var i,o=r.child,a=r.arrayTypeChildren;return Ce({},a,((i={})[o.type]=[].concat(a[o.type]||[],[Ce({},r.newChildProps,this.mapNestedChildrenToProps(o,r.nestedChildren))]),i))},n.mapObjectTypeChildren=function(r){var i,o,a=r.child,s=r.newProps,l=r.newChildProps,c=r.nestedChildren;switch(a.type){case V.TITLE:return Ce({},s,((i={})[a.type]=c,i.titleAttributes=Ce({},l),i));case V.BODY:return Ce({},s,{bodyAttributes:Ce({},l)});case V.HTML:return Ce({},s,{htmlAttributes:Ce({},l)});default:return Ce({},s,((o={})[a.type]=Ce({},l),o))}},n.mapArrayTypeChildrenToProps=function(r,i){var o=Ce({},i);return Object.keys(r).forEach(function(a){var s;o=Ce({},o,((s={})[a]=r[a],s))}),o},n.warnOnInvalidChildren=function(r,i){return ip(ap.some(function(o){return r.type===o}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+ap.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),ip(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(o){return typeof o!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(r,i){var o=this,a={};return ce.Children.forEach(r,function(s){if(s&&s.props){var l=s.props,c=l.children,u=op(l,t4),d=Object.keys(u).reduce(function(v,y){return v[Gy[y]||y]=u[y],v},{}),p=s.type;switch(typeof p=="symbol"?p=p.toString():o.warnOnInvalidChildren(s,c),p){case V.FRAGMENT:i=o.mapChildrenToProps(c,i);break;case V.LINK:case V.META:case V.NOSCRIPT:case V.SCRIPT:case V.STYLE:a=o.flattenArrayTypeChildren({child:s,arrayTypeChildren:a,newChildProps:d,nestedChildren:c});break;default:i=o.mapObjectTypeChildren({child:s,newProps:i,newChildProps:d,nestedChildren:c})}}}),this.mapArrayTypeChildrenToProps(a,i)},n.render=function(){var r=this.props,i=r.children,o=op(r,n4),a=Ce({},o),s=o.helmetData;return i&&(a=this.mapChildrenToProps(i,a)),!s||s instanceof Fc||(s=new Fc(s.context,s.instances)),s?ce.createElement(ka,Ce({},a,{context:s.value,helmetData:void 0})):ce.createElement(im.Consumer,null,function(l){return ce.createElement(ka,Ce({},a,{context:l}))})},t}(b.Component);Wo.propTypes={base:K.object,bodyAttributes:K.object,children:K.oneOfType([K.arrayOf(K.node),K.node]),defaultTitle:K.string,defer:K.bool,encodeSpecialCharacters:K.bool,htmlAttributes:K.object,link:K.arrayOf(K.object),meta:K.arrayOf(K.object),noscript:K.arrayOf(K.object),onChangeClientState:K.func,script:K.arrayOf(K.object),style:K.arrayOf(K.object),title:K.string,titleAttributes:K.object,titleTemplate:K.string,prioritizeSeoTags:K.bool,helmetData:K.object},Wo.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Wo.displayName="Helmet";var om={exports:{}},re={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=Symbol.for("react.element"),sd=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),ns=Symbol.for("react.strict_mode"),rs=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),os=Symbol.for("react.context"),r4=Symbol.for("react.server_context"),as=Symbol.for("react.forward_ref"),ss=Symbol.for("react.suspense"),ls=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),i4=Symbol.for("react.offscreen"),am;am=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ad:switch(e=e.type,e){case ts:case rs:case ns:case ss:case ls:return e;default:switch(e=e&&e.$$typeof,e){case r4:case os:case as:case us:case cs:case is:return e;default:return t}}case sd:return t}}}re.ContextConsumer=os;re.ContextProvider=is;re.Element=ad;re.ForwardRef=as;re.Fragment=ts;re.Lazy=us;re.Memo=cs;re.Portal=sd;re.Profiler=rs;re.StrictMode=ns;re.Suspense=ss;re.SuspenseList=ls;re.isAsyncMode=function(){return!1};re.isConcurrentMode=function(){return!1};re.isContextConsumer=function(e){return wt(e)===os};re.isContextProvider=function(e){return wt(e)===is};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ad};re.isForwardRef=function(e){return wt(e)===as};re.isFragment=function(e){return wt(e)===ts};re.isLazy=function(e){return wt(e)===us};re.isMemo=function(e){return wt(e)===cs};re.isPortal=function(e){return wt(e)===sd};re.isProfiler=function(e){return wt(e)===rs};re.isStrictMode=function(e){return wt(e)===ns};re.isSuspense=function(e){return wt(e)===ss};re.isSuspenseList=function(e){return wt(e)===ls};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ts||e===rs||e===ns||e===ss||e===ls||e===i4||typeof e=="object"&&e!==null&&(e.$$typeof===us||e.$$typeof===cs||e.$$typeof===is||e.$$typeof===os||e.$$typeof===as||e.$$typeof===am||e.getModuleId!==void 0)};re.typeOf=wt;om.exports=re;var sm=om.exports;function o4(e){function t(M,I,R,H,T){for(var G=0,L=0,ye=0,J=0,te,W,Re=0,Ze=0,q,$e=q=te=0,ee=0,Oe=0,Br=0,_e=0,ro=R.length,Hr=ro-1,St,U="",be="",Ls="",Ms="",Jt;ee<ro;){if(W=R.charCodeAt(ee),ee===Hr&&L+J+ye+G!==0&&(L!==0&&(W=L===47?10:47),J=ye=G=0,ro++,Hr++),L+J+ye+G===0){if(ee===Hr&&(0<Oe&&(U=U.replace(p,"")),0<U.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:U+=R.charAt(ee)}W=59}switch(W){case 123:for(U=U.trim(),te=U.charCodeAt(0),q=1,_e=++ee;ee<ro;){switch(W=R.charCodeAt(ee)){case 123:q++;break;case 125:q--;break;case 47:switch(W=R.charCodeAt(ee+1)){case 42:case 47:e:{for($e=ee+1;$e<Hr;++$e)switch(R.charCodeAt($e)){case 47:if(W===42&&R.charCodeAt($e-1)===42&&ee+2!==$e){ee=$e+1;break e}break;case 10:if(W===47){ee=$e+1;break e}}ee=$e}}break;case 91:W++;case 40:W++;case 34:case 39:for(;ee++<Hr&&R.charCodeAt(ee)!==W;);}if(q===0)break;ee++}switch(q=R.substring(_e,ee),te===0&&(te=(U=U.replace(d,"").trim()).charCodeAt(0)),te){case 64:switch(0<Oe&&(U=U.replace(p,"")),W=U.charCodeAt(1),W){case 100:case 109:case 115:case 45:Oe=I;break;default:Oe=ke}if(q=t(I,Oe,q,W,T+1),_e=q.length,0<z&&(Oe=n(ke,U,Br),Jt=s(3,q,Oe,I,Se,fe,_e,W,T,H),U=Oe.join(""),Jt!==void 0&&(_e=(q=Jt.trim()).length)===0&&(W=0,q="")),0<_e)switch(W){case 115:U=U.replace(P,a);case 100:case 109:case 45:q=U+"{"+q+"}";break;case 107:U=U.replace(h,"$1 $2"),q=U+"{"+q+"}",q=X===1||X===2&&o("@"+q,3)?"@-webkit-"+q+"@"+q:"@"+q;break;default:q=U+q,H===112&&(q=(be+=q,""))}else q="";break;default:q=t(I,n(I,U,Br),q,H,T+1)}Ls+=q,q=Br=Oe=$e=te=0,U="",W=R.charCodeAt(++ee);break;case 125:case 59:if(U=(0<Oe?U.replace(p,""):U).trim(),1<(_e=U.length))switch($e===0&&(te=U.charCodeAt(0),te===45||96<te&&123>te)&&(_e=(U=U.replace(" ",":")).length),0<z&&(Jt=s(1,U,I,M,Se,fe,be.length,H,T,H))!==void 0&&(_e=(U=Jt.trim()).length)===0&&(U="\0\0"),te=U.charCodeAt(0),W=U.charCodeAt(1),te){case 0:break;case 64:if(W===105||W===99){Ms+=U+R.charAt(ee);break}default:U.charCodeAt(_e-1)!==58&&(be+=i(U,te,W,U.charCodeAt(2)))}Br=Oe=$e=te=0,U="",W=R.charCodeAt(++ee)}}switch(W){case 13:case 10:L===47?L=0:1+te===0&&H!==107&&0<U.length&&(Oe=1,U+="\0"),0<z*B&&s(0,U,I,M,Se,fe,be.length,H,T,H),fe=1,Se++;break;case 59:case 125:if(L+J+ye+G===0){fe++;break}default:switch(fe++,St=R.charAt(ee),W){case 9:case 32:if(J+G+L===0)switch(Re){case 44:case 58:case 9:case 32:St="";break;default:W!==32&&(St=" ")}break;case 0:St="\\0";break;case 12:St="\\f";break;case 11:St="\\v";break;case 38:J+L+G===0&&(Oe=Br=1,St="\f"+St);break;case 108:if(J+L+G+Ee===0&&0<$e)switch(ee-$e){case 2:Re===112&&R.charCodeAt(ee-3)===58&&(Ee=Re);case 8:Ze===111&&(Ee=Ze)}break;case 58:J+L+G===0&&($e=ee);break;case 44:L+ye+J+G===0&&(Oe=1,St+="\r");break;case 34:case 39:L===0&&(J=J===W?0:J===0?W:J);break;case 91:J+L+ye===0&&G++;break;case 93:J+L+ye===0&&G--;break;case 41:J+L+G===0&&ye--;break;case 40:if(J+L+G===0){if(te===0)switch(2*Re+3*Ze){case 533:break;default:te=1}ye++}break;case 64:L+ye+J+G+$e+q===0&&(q=1);break;case 42:case 47:if(!(0<J+G+ye))switch(L){case 0:switch(2*W+3*R.charCodeAt(ee+1)){case 235:L=47;break;case 220:_e=ee,L=42}break;case 42:W===47&&Re===42&&_e+2!==ee&&(R.charCodeAt(_e+2)===33&&(be+=R.substring(_e,ee+1)),St="",L=0)}}L===0&&(U+=St)}Ze=Re,Re=W,ee++}if(_e=be.length,0<_e){if(Oe=I,0<z&&(Jt=s(2,be,Oe,M,Se,fe,_e,H,T,H),Jt!==void 0&&(be=Jt).length===0))return Ms+be+Ls;if(be=Oe.join(",")+"{"+be+"}",X*Ee!==0){switch(X!==2||o(be,2)||(Ee=0),Ee){case 111:be=be.replace(w,":-moz-$1")+be;break;case 112:be=be.replace(m,"::-webkit-input-$1")+be.replace(m,"::-moz-$1")+be.replace(m,":-ms-input-$1")+be}Ee=0}}return Ms+be+Ls}function n(M,I,R){var H=I.trim().split(k);I=H;var T=H.length,G=M.length;switch(G){case 0:case 1:var L=0;for(M=G===0?"":M[0]+" ";L<T;++L)I[L]=r(M,I[L],R).trim();break;default:var ye=L=0;for(I=[];L<T;++L)for(var J=0;J<G;++J)I[ye++]=r(M[J]+" ",H[L],R).trim()}return I}function r(M,I,R){var H=I.charCodeAt(0);switch(33>H&&(H=(I=I.trim()).charCodeAt(0)),H){case 38:return I.replace(g,"$1"+M.trim());case 58:return M.trim()+I.replace(g,"$1"+M.trim());default:if(0<1*R&&0<I.indexOf("\f"))return I.replace(g,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+I}function i(M,I,R,H){var T=M+";",G=2*I+3*R+4*H;if(G===944){M=T.indexOf(":",9)+1;var L=T.substring(M,T.length-1).trim();return L=T.substring(0,M).trim()+L+";",X===1||X===2&&o(L,1)?"-webkit-"+L+L:L}if(X===0||X===2&&!o(T,1))return T;switch(G){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(oe,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return L=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+T+"-ms-flex-pack"+L+T;case 1005:return y.test(T)?T.replace(v,":-webkit-")+T.replace(v,":-moz-")+T:T;case 1e3:switch(L=T.substring(13).trim(),I=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(I)){case 226:L=T.replace(C,"tb");break;case 232:L=T.replace(C,"tb-rl");break;case 220:L=T.replace(C,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+L+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(I=(T=M).length-10,L=(T.charCodeAt(I)===33?T.substring(0,I):T).substring(M.indexOf(":",7)+1).trim(),G=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:T=T.replace(L,"-webkit-"+L)+";"+T;break;case 207:case 102:T=T.replace(L,"-webkit-"+(102<G?"inline-":"")+"box")+";"+T.replace(L,"-webkit-"+L)+";"+T.replace(L,"-ms-"+L+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return L=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+L+"-ms-flex-"+L+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(A,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(A,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(_.test(M)===!0)return(L=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),I,R,H).replace(":fill-available",":stretch"):T.replace(L,"-webkit-"+L)+T.replace(L,"-moz-"+L.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,R+H===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+T}return T}function o(M,I){var R=M.indexOf(I===1?":":"{"),H=M.substring(0,I!==3?R:10);return R=M.substring(R+1,M.length-1),$(I!==2?H:H.replace(D,"$1"),R,I)}function a(M,I){var R=i(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return R!==I+";"?R.replace(E," or ($1)").substring(4):"("+I+")"}function s(M,I,R,H,T,G,L,ye,J,te){for(var W=0,Re=I,Ze;W<z;++W)switch(Ze=ve[W].call(u,M,Re,R,H,T,G,L,ye,J,te)){case void 0:case!1:case!0:case null:break;default:Re=Ze}if(Re!==I)return Re}function l(M){switch(M){case void 0:case null:z=ve.length=0;break;default:if(typeof M=="function")ve[z++]=M;else if(typeof M=="object")for(var I=0,R=M.length;I<R;++I)l(M[I]);else B=!!M|0}return l}function c(M){return M=M.prefix,M!==void 0&&($=null,M?typeof M!="function"?X=1:(X=2,$=M):X=0),c}function u(M,I){var R=M;if(33>R.charCodeAt(0)&&(R=R.trim()),ae=R,R=[ae],0<z){var H=s(-1,I,R,R,Se,fe,0,0,0,0);H!==void 0&&typeof H=="string"&&(I=H)}var T=t(ke,R,I,0,0);return 0<z&&(H=s(-2,T,R,R,Se,fe,T.length,0,0,0),H!==void 0&&(T=H)),ae="",Ee=0,fe=Se=1,T}var d=/^\0+/g,p=/[\0\r\f]/g,v=/: */g,y=/zoo|gra/,x=/([,: ])(transform)/g,k=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,w=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,A=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,_=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,fe=1,Se=1,Ee=0,X=1,ke=[],ve=[],z=0,$=null,B=0,ae="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var a4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s4(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var l4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dp=s4(function(e){return l4.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),lm={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,ld=Ie?Symbol.for("react.element"):60103,cd=Ie?Symbol.for("react.portal"):60106,ds=Ie?Symbol.for("react.fragment"):60107,fs=Ie?Symbol.for("react.strict_mode"):60108,ps=Ie?Symbol.for("react.profiler"):60114,hs=Ie?Symbol.for("react.provider"):60109,ms=Ie?Symbol.for("react.context"):60110,ud=Ie?Symbol.for("react.async_mode"):60111,gs=Ie?Symbol.for("react.concurrent_mode"):60111,vs=Ie?Symbol.for("react.forward_ref"):60112,ys=Ie?Symbol.for("react.suspense"):60113,c4=Ie?Symbol.for("react.suspense_list"):60120,xs=Ie?Symbol.for("react.memo"):60115,ws=Ie?Symbol.for("react.lazy"):60116,u4=Ie?Symbol.for("react.block"):60121,d4=Ie?Symbol.for("react.fundamental"):60117,f4=Ie?Symbol.for("react.responder"):60118,p4=Ie?Symbol.for("react.scope"):60119;function dt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ld:switch(e=e.type,e){case ud:case gs:case ds:case ps:case fs:case ys:return e;default:switch(e=e&&e.$$typeof,e){case ms:case vs:case ws:case xs:case hs:return e;default:return t}}case cd:return t}}}function cm(e){return dt(e)===gs}ie.AsyncMode=ud;ie.ConcurrentMode=gs;ie.ContextConsumer=ms;ie.ContextProvider=hs;ie.Element=ld;ie.ForwardRef=vs;ie.Fragment=ds;ie.Lazy=ws;ie.Memo=xs;ie.Portal=cd;ie.Profiler=ps;ie.StrictMode=fs;ie.Suspense=ys;ie.isAsyncMode=function(e){return cm(e)||dt(e)===ud};ie.isConcurrentMode=cm;ie.isContextConsumer=function(e){return dt(e)===ms};ie.isContextProvider=function(e){return dt(e)===hs};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ld};ie.isForwardRef=function(e){return dt(e)===vs};ie.isFragment=function(e){return dt(e)===ds};ie.isLazy=function(e){return dt(e)===ws};ie.isMemo=function(e){return dt(e)===xs};ie.isPortal=function(e){return dt(e)===cd};ie.isProfiler=function(e){return dt(e)===ps};ie.isStrictMode=function(e){return dt(e)===fs};ie.isSuspense=function(e){return dt(e)===ys};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ds||e===gs||e===ps||e===fs||e===ys||e===c4||typeof e=="object"&&e!==null&&(e.$$typeof===ws||e.$$typeof===xs||e.$$typeof===hs||e.$$typeof===ms||e.$$typeof===vs||e.$$typeof===d4||e.$$typeof===f4||e.$$typeof===p4||e.$$typeof===u4)};ie.typeOf=dt;lm.exports=ie;var h4=lm.exports,dd=h4,m4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},um={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fd={};fd[dd.ForwardRef]=v4;fd[dd.Memo]=um;function fp(e){return dd.isMemo(e)?um:fd[e.$$typeof]||m4}var y4=Object.defineProperty,x4=Object.getOwnPropertyNames,pp=Object.getOwnPropertySymbols,w4=Object.getOwnPropertyDescriptor,S4=Object.getPrototypeOf,hp=Object.prototype;function dm(e,t,n){if(typeof t!="string"){if(hp){var r=S4(t);r&&r!==hp&&dm(e,r,n)}var i=x4(t);pp&&(i=i.concat(pp(t)));for(var o=fp(e),a=fp(t),s=0;s<i.length;++s){var l=i[s];if(!g4[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var c=w4(t,l);try{y4(e,l,c)}catch{}}}}return e}var k4=dm;const b4=Vr(k4);var pt={};function Ut(){return(Ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var mp=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Bc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!sm.typeOf(e)},ba=Object.freeze([]),wn=Object.freeze({});function Bi(e){return typeof e=="function"}function gp(e){return e.displayName||e.name||"Component"}function pd(e){return e&&typeof e.styledComponentId=="string"}var Or=typeof process<"u"&&pt!==void 0&&(pt.REACT_APP_SC_ATTR||pt.SC_ATTR)||"data-styled",hd=typeof window<"u"&&"HTMLElement"in window,C4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&pt!==void 0&&(pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==""?pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pt.REACT_APP_SC_DISABLE_SPEEDY:pt.SC_DISABLE_SPEEDY!==void 0&&pt.SC_DISABLE_SPEEDY!==""&&pt.SC_DISABLE_SPEEDY!=="false"&&pt.SC_DISABLE_SPEEDY));function qi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var T4=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&qi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Yo=new Map,Ca=new Map,vi=1,bo=function(e){if(Yo.has(e))return Yo.get(e);for(;Ca.has(vi);)vi++;var t=vi++;return Yo.set(e,t),Ca.set(t,e),t},P4=function(e){return Ca.get(e)},E4=function(e,t){t>=vi&&(vi=t+1),Yo.set(e,t),Ca.set(t,e)},j4="style["+Or+'][data-styled-version="5.3.11"]',A4=new RegExp("^"+Or+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),z4=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},L4=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(A4);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(E4(c,l),z4(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},M4=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},fm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(Or))return u}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Or,"active"),r.setAttribute("data-styled-version","5.3.11");var a=M4();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},I4=function(){function e(n){var r=this.element=fm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}qi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),R4=function(){function e(n){var r=this.element=fm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),O4=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),vp=hd,_4={isServer:!hd,useCSSOMInjection:!C4},pm=function(){function e(n,r,i){n===void 0&&(n=wn),r===void 0&&(r={}),this.options=Ut({},_4,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&hd&&vp&&(vp=!1,function(o){for(var a=document.querySelectorAll(j4),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(Or)!=="active"&&(L4(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return bo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ut({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new O4(a):o?new I4(a):new R4(a),new T4(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(bo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(bo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(bo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=P4(a);if(s!==void 0){var l=n.names.get(s),c=r.getGroup(a);if(l&&c&&l.size){var u=Or+".g"+a+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(p){p.length>0&&(d+=p+",")}),o+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),D4=/(a)(d)/gi,yp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yp(t%52)+n;return(yp(t%52)+n).replace(D4,"$1-$2")}var gr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hm=function(e){return gr(5381,e)};function V4(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bi(n)&&!pd(n))return!1}return!0}var N4=hm("5.3.11"),$4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&V4(t),this.componentId=n,this.baseHash=gr(N4,n),this.baseStyle=r,pm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=_r(this.rules,t,n,r).join(""),s=Hc(gr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=gr(this.baseHash,r.hash),d="",p=0;p<c;p++){var v=this.rules[p];if(typeof v=="string")d+=v;else if(v){var y=_r(v,t,n,r),x=Array.isArray(y)?y.join(""):y;u=gr(u,x+p),d+=x}}if(d){var k=Hc(u>>>0);if(!n.hasNameForId(i,k)){var g=r(d,"."+k,void 0,i);n.insertRules(i,k,g)}o.push(k)}}return o.join(" ")},e}(),F4=/^\s*\/\/.*$/gm,B4=[":","[",".","#"];function H4(e){var t,n,r,i,o=wn,a=o.options,s=a===void 0?wn:a,l=o.plugins,c=l===void 0?ba:l,u=new o4(s),d=[],p=function(x){function k(g){if(g)try{x(g+"}")}catch{}}return function(g,h,m,w,C,P,E,A,D,_){switch(g){case 1:if(D===0&&h.charCodeAt(0)===64)return x(h+";"),"";break;case 2:if(A===0)return h+"/*|*/";break;case 3:switch(A){case 102:case 112:return x(m[0]+h),"";default:return h+(_===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(k)}}}(function(x){d.push(x)}),v=function(x,k,g){return k===0&&B4.indexOf(g[n.length])!==-1||g.match(i)?x:"."+t};function y(x,k,g,h){h===void 0&&(h="&");var m=x.replace(F4,""),w=k&&g?g+" "+k+" { "+m+" }":m;return t=h,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(g||!k?"":k,w)}return u.use([].concat(c,[function(x,k,g){x===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,v))},p,function(x){if(x===-2){var k=d;return d=[],k}}])),y.hash=c.length?c.reduce(function(x,k){return k.name||qi(15),gr(x,k.name)},5381).toString():"",y}var mm=ce.createContext();mm.Consumer;var gm=ce.createContext(),U4=(gm.Consumer,new pm),Uc=H4();function W4(){return b.useContext(mm)||U4}function Y4(){return b.useContext(gm)||Uc}var vm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Uc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return qi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Uc),this.name+t.hash},e}(),G4=/([A-Z])/,K4=/([A-Z])/g,Q4=/^ms-/,X4=function(e){return"-"+e.toLowerCase()};function xp(e){return G4.test(e)?e.replace(K4,X4).replace(Q4,"-ms-"):e}var wp=function(e){return e==null||e===!1||e===""};function _r(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=_r(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(wp(e))return"";if(pd(e))return"."+e.styledComponentId;if(Bi(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return _r(l,t,n,r)}var c;return e instanceof vm?n?(e.inject(n,r),e.getName(r)):e:Bc(e)?function u(d,p){var v,y,x=[];for(var k in d)d.hasOwnProperty(k)&&!wp(d[k])&&(Array.isArray(d[k])&&d[k].isCss||Bi(d[k])?x.push(xp(k)+":",d[k],";"):Bc(d[k])?x.push.apply(x,u(d[k],k)):x.push(xp(k)+": "+(v=k,(y=d[k])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||v in a4||v.startsWith("--")?String(y).trim():y+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(e):e.toString()}var Sp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ym(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Bi(e)||Bc(e)?Sp(_r(mp(ba,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Sp(_r(mp(e,n)))}var Z4=function(e,t,n){return n===void 0&&(n=wn),e.theme!==n.theme&&e.theme||t||n.theme},q4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J4=/(^-|-$)/g;function cl(e){return e.replace(q4,"-").replace(J4,"")}var xm=function(e){return Hc(hm(e)>>>0)};function Co(e){return typeof e=="string"&&!0}var Wc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},e5=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function t5(e,t,n){var r=e[n];Wc(t)&&Wc(r)?wm(r,t):e[n]=t}function wm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Wc(a))for(var s in a)e5(s)&&t5(e,a[s],s)}return e}var Sm=ce.createContext();Sm.Consumer;var ul={};function km(e,t,n){var r=pd(e),i=!Co(e),o=t.attrs,a=o===void 0?ba:o,s=t.componentId,l=s===void 0?function(h,m){var w=typeof h!="string"?"sc":cl(h);ul[w]=(ul[w]||0)+1;var C=w+"-"+xm("5.3.11"+w+ul[w]);return m?m+"-"+C:C}(t.displayName,t.parentComponentId):s,c=t.displayName,u=c===void 0?function(h){return Co(h)?"styled."+h:"Styled("+gp(h)+")"}(e):c,d=t.displayName&&t.componentId?cl(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(h,m,w){return e.shouldForwardProp(h,m,w)&&t.shouldForwardProp(h,m,w)}:e.shouldForwardProp);var y,x=new $4(n,d,r?e.componentStyle:void 0),k=x.isStatic&&a.length===0,g=function(h,m){return function(w,C,P,E){var A=w.attrs,D=w.componentStyle,_=w.defaultProps,oe=w.foldedComponentIds,fe=w.shouldForwardProp,Se=w.styledComponentId,Ee=w.target,X=function(H,T,G){H===void 0&&(H=wn);var L=Ut({},T,{theme:H}),ye={};return G.forEach(function(J){var te,W,Re,Ze=J;for(te in Bi(Ze)&&(Ze=Ze(L)),Ze)L[te]=ye[te]=te==="className"?(W=ye[te],Re=Ze[te],W&&Re?W+" "+Re:W||Re):Ze[te]}),[L,ye]}(Z4(C,b.useContext(Sm),_)||wn,C,A),ke=X[0],ve=X[1],z=function(H,T,G,L){var ye=W4(),J=Y4(),te=T?H.generateAndInjectStyles(wn,ye,J):H.generateAndInjectStyles(G,ye,J);return te}(D,E,ke),$=P,B=ve.$as||C.$as||ve.as||C.as||Ee,ae=Co(B),M=ve!==C?Ut({},C,{},ve):C,I={};for(var R in M)R[0]!=="$"&&R!=="as"&&(R==="forwardedAs"?I.as=M[R]:(fe?fe(R,dp,B):!ae||dp(R))&&(I[R]=M[R]));return C.style&&ve.style!==C.style&&(I.style=Ut({},C.style,{},ve.style)),I.className=Array.prototype.concat(oe,Se,z!==Se?z:null,C.className,ve.className).filter(Boolean).join(" "),I.ref=$,b.createElement(B,I)}(y,h,m,k)};return g.displayName=u,(y=ce.forwardRef(g)).attrs=p,y.componentStyle=x,y.displayName=u,y.shouldForwardProp=v,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ba,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(h){var m=t.componentId,w=function(P,E){if(P==null)return{};var A,D,_={},oe=Object.keys(P);for(D=0;D<oe.length;D++)A=oe[D],E.indexOf(A)>=0||(_[A]=P[A]);return _}(t,["componentId"]),C=m&&m+"-"+(Co(h)?h:cl(gp(h)));return km(h,Ut({},w,{attrs:p,componentId:C}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?wm({},e.defaultProps,h):h}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&b4(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var S=function(e){return function t(n,r,i){if(i===void 0&&(i=wn),!sm.isValidElementType(r))return qi(1,String(r));var o=function(){return n(r,i,ym.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Ut({},i,{},a))},o.attrs=function(a){return t(n,r,Ut({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(km,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){S[e]=S(e)});function Ss(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ym.apply(void 0,[e].concat(n)).join(""),o=xm(i);return new vm(o,i)}const bm=b.createContext(),n5=()=>{const e=b.useContext(bm);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},r5=({children:e})=>{const[t,n]=b.useState("light"),[r,i]=b.useState(!0);b.useEffect(()=>{const s=localStorage.getItem("portfolio-theme")||"light";n(s),i(!1)},[]),b.useEffect(()=>{localStorage.setItem("portfolio-theme",t),document.documentElement.setAttribute("data-theme",t)},[t]);const a={theme:t,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")},isLoading:r};return f.jsx(bm.Provider,{value:a,children:e})};var Cm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kp=ce.createContext&&ce.createContext(Cm),Sn=function(){return Sn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sn.apply(this,arguments)},i5=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Tm(e){return e&&e.map(function(t,n){return ce.createElement(t.tag,Sn({key:n},t.attr),Tm(t.child))})}function F(e){return function(t){return ce.createElement(o5,Sn({attr:Sn({},e.attr)},t),Tm(e.child))}}function o5(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=i5(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ce.createElement("svg",Sn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Sn(Sn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ce.createElement("title",null,o),e.children)};return kp!==void 0?ce.createElement(kp.Consumer,null,function(n){return t(n)}):t(Cm)}function a5(e){return F({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}}]})(e)}function s5(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"}}]})(e)}function Ta(e){return F({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function l5(e){return F({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}}]})(e)}function c5(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Pm(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function u5(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"}}]})(e)}function d5(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"}}]})(e)}function f5(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"}}]})(e)}function p5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(e)}function h5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function m5(e){return F({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"}}]})(e)}function dl(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"}}]})(e)}function er(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"}}]})(e)}function g5(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function Em(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function v5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function y5(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function bp(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function x5(e){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function tr(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(e)}function jm(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"}}]})(e)}function w5(e){return F({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function Cp(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function S5(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"}}]})(e)}function k5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(e)}function b5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function C5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(e)}function T5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"}}]})(e)}function Am(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"}}]})(e)}function P5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"}}]})(e)}function Tp(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function zm(e){return F({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function E5(e){return F({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"}}]})(e)}function j5(e){return F({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"}}]})(e)}const A5=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: var(--off-white);
  border-radius: var(--radius-xl);
  margin: 2rem 0;
`,z5=S.div`
  font-size: 3rem;
  color: #dc3545;
  margin-bottom: 1rem;
`,L5=S.h2`
  color: var(--dark-gray);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,M5=S.p`
  color: var(--medium-gray);
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
`,I5=S.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--hover-blue);
    transform: translateY(-2px);
  }
`;class R5 extends ce.Component{constructor(n){super(n);Gd(this,"handleRetry",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?f.jsxs(A5,{children:[f.jsx(z5,{children:f.jsx(y5,{})}),f.jsx(L5,{children:"Oops! Something went wrong"}),f.jsx(M5,{children:"We're sorry, but something unexpected happened. Please try refreshing the page or contact us if the problem persists."}),f.jsxs(I5,{onClick:this.handleRetry,children:[f.jsx(C5,{}),"Try Again"]})]}):this.props.children}}const ks=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),bs=b.createContext({});function O5(){return b.useContext(bs).visualElement}const Ji=b.createContext(null),Kn=typeof document<"u",Nn=Kn?b.useLayoutEffect:b.useEffect,Lm=b.createContext({strict:!1});function _5(e,t,n,r){const i=O5(),o=b.useContext(Lm),a=b.useContext(Ji),s=b.useContext(ks).reducedMotion,l=b.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceId:a?a.id:void 0,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:s}));const c=l.current;return Nn(()=>{c&&c.render()}),Nn(()=>{c&&c.animationState&&c.animationState.animateChanges()}),Nn(()=>()=>c&&c.notify("Unmount"),[]),c}function vr(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function D5(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):vr(n)&&(n.current=r))},[t])}function Hi(e){return typeof e=="string"||Array.isArray(e)}function Cs(e){return typeof e=="object"&&typeof e.start=="function"}const V5=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function Ts(e){return Cs(e.animate)||V5.some(t=>Hi(e[t]))}function Mm(e){return!!(Ts(e)||e.variants)}function N5(e,t){if(Ts(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Hi(n)?n:void 0,animate:Hi(r)?r:void 0}}return e.inherit!==!1?t:{}}function $5(e){const{initial:t,animate:n}=N5(e,b.useContext(bs));return b.useMemo(()=>({initial:t,animate:n}),[Pp(t),Pp(n)])}function Pp(e){return Array.isArray(e)?e.join(" "):e}const Nt=e=>({isEnabled:t=>e.some(n=>!!t[n])}),Ui={measureLayout:Nt(["layout","layoutId","drag"]),animation:Nt(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:Nt(["exit"]),drag:Nt(["drag","dragControls"]),focus:Nt(["whileFocus"]),hover:Nt(["whileHover","onHoverStart","onHoverEnd"]),tap:Nt(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Nt(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:Nt(["whileInView","onViewportEnter","onViewportLeave"])};function F5(e){for(const t in e)t==="projectionNodeConstructor"?Ui.projectionNodeConstructor=e[t]:Ui[t].Component=e[t]}function Qn(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const yi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let B5=1;function H5(){return Qn(()=>{if(yi.hasEverUpdated)return B5++})}const md=b.createContext({});class U5 extends ce.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const Im=b.createContext({}),W5=Symbol.for("motionComponentSymbol");function Y5({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:i,Component:o}){e&&F5(e);function a(l,c){const u={...b.useContext(ks),...l,layoutId:G5(l)},{isStatic:d}=u;let p=null;const v=$5(l),y=d?void 0:H5(),x=i(l,d);if(!d&&Kn){v.visualElement=_5(o,x,u,t);const k=b.useContext(Lm).strict,g=b.useContext(Im);v.visualElement&&(p=v.visualElement.loadFeatures(u,k,e,y,n||Ui.projectionNodeConstructor,g))}return b.createElement(U5,{visualElement:v.visualElement,props:u},p,b.createElement(bs.Provider,{value:v},r(o,l,y,D5(x,v.visualElement,c),x,d,v.visualElement)))}const s=b.forwardRef(a);return s[W5]=o,s}function G5({layoutId:e}){const t=b.useContext(md).id;return t&&e!==void 0?t+"-"+e:e}function K5(e){function t(r,i={}){return Y5(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Q5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function gd(e){return typeof e!="string"||e.includes("-")?!1:!!(Q5.indexOf(e)>-1||/[A-Z]/.test(e))}const Pa={};function X5(e){Object.assign(Pa,e)}const Ea=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xn=new Set(Ea);function Rm(e,{layout:t,layoutId:n}){return Xn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Pa[e]||e==="opacity")}const Vt=e=>!!(e!=null&&e.getVelocity),Z5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},q5=(e,t)=>Ea.indexOf(e)-Ea.indexOf(t);function J5({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},i,o){let a="";t.sort(q5);for(const s of t)a+=`${Z5[s]||s}(${e[s]}) `;return n&&!e.z&&(a+="translateZ(0)"),a=a.trim(),o?a=o(e,i?"":a):r&&i&&(a="none"),a}function Om(e){return e.startsWith("--")}const e3=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Dr=(e,t,n)=>Math.min(Math.max(n,e),t),Zn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},xi={...Zn,transform:e=>Dr(0,1,e)},To={...Zn,default:1},wi=e=>Math.round(e*1e5)/1e5,Wi=/(-)?([\d]*\.?[\d])+/g,Yc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,t3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function eo(e){return typeof e=="string"}const to=e=>({test:t=>eo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),tn=to("deg"),Dt=to("%"),N=to("px"),n3=to("vh"),r3=to("vw"),Ep={...Dt,parse:e=>Dt.parse(e)/100,transform:e=>Dt.transform(e*100)},jp={...Zn,transform:Math.round},_m={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,radius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,size:N,top:N,right:N,bottom:N,left:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,rotate:tn,rotateX:tn,rotateY:tn,rotateZ:tn,scale:To,scaleX:To,scaleY:To,scaleZ:To,skew:tn,skewX:tn,skewY:tn,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:xi,originX:Ep,originY:Ep,originZ:N,zIndex:jp,fillOpacity:xi,strokeOpacity:xi,numOctaves:jp};function vd(e,t,n,r){const{style:i,vars:o,transform:a,transformKeys:s,transformOrigin:l}=e;s.length=0;let c=!1,u=!1,d=!0;for(const p in t){const v=t[p];if(Om(p)){o[p]=v;continue}const y=_m[p],x=e3(v,y);if(Xn.has(p)){if(c=!0,a[p]=x,s.push(p),!d)continue;v!==(y.default||0)&&(d=!1)}else p.startsWith("origin")?(u=!0,l[p]=x):i[p]=x}if(t.transform||(c||r?i.transform=J5(e,n,d,r):i.transform&&(i.transform="none")),u){const{originX:p="50%",originY:v="50%",originZ:y=0}=l;i.transformOrigin=`${p} ${v} ${y}`}}const yd=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function Dm(e,t,n){for(const r in t)!Vt(t[r])&&!Rm(r,n)&&(e[r]=t[r])}function i3({transformTemplate:e},t,n){return b.useMemo(()=>{const r=yd();return vd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function o3(e,t,n){const r=e.style||{},i={};return Dm(i,r,e),Object.assign(i,i3(e,t,n)),e.transformValues?e.transformValues(i):i}function a3(e,t,n){const r={},i=o3(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=i,r}const s3=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],l3=["whileTap","onTap","onTapStart","onTapCancel"],c3=["onPan","onPanStart","onPanSessionStart","onPanEnd"],u3=["whileInView","onViewportEnter","onViewportLeave","viewport"],d3=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...u3,...l3,...s3,...c3]);function ja(e){return d3.has(e)}let Vm=e=>!ja(e);function f3(e){e&&(Vm=t=>t.startsWith("on")?!ja(t):e(t))}try{f3(require("@emotion/is-prop-valid").default)}catch{}function p3(e,t,n){const r={};for(const i in e)(Vm(i)||n===!0&&ja(i)||!t&&!ja(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Ap(e,t,n){return typeof e=="string"?e:N.transform(t+n*e)}function h3(e,t,n){const r=Ap(t,e.x,e.width),i=Ap(n,e.y,e.height);return`${r} ${i}`}const m3={offset:"stroke-dashoffset",array:"stroke-dasharray"},g3={offset:"strokeDashoffset",array:"strokeDasharray"};function v3(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?m3:g3;e[o.offset]=N.transform(-r);const a=N.transform(t),s=N.transform(n);e[o.array]=`${a} ${s}`}function xd(e,{attrX:t,attrY:n,originX:r,originY:i,pathLength:o,pathSpacing:a=1,pathOffset:s=0,...l},c,u,d){if(vd(e,l,c,d),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:y}=e;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(r!==void 0||i!==void 0||v.transform)&&(v.transformOrigin=h3(y,r!==void 0?r:.5,i!==void 0?i:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),o!==void 0&&v3(p,o,a,s,!1)}const Nm=()=>({...yd(),attrs:{}}),wd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function y3(e,t,n,r){const i=b.useMemo(()=>{const o=Nm();return xd(o,t,{enableHardwareAcceleration:!1},wd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Dm(o,e.style,e),i.style={...o,...i.style}}return i}function x3(e=!1){return(n,r,i,o,{latestValues:a},s)=>{const c=(gd(n)?y3:a3)(r,a,s,n),d={...p3(r,typeof n=="string",e),...c,ref:o};return i&&(d["data-projection-id"]=i),b.createElement(n,d)}}const Sd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function $m(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Fm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bm(e,t,n,r){$m(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Fm.has(i)?i:Sd(i),t.attrs[i])}function kd(e){const{style:t}=e,n={};for(const r in t)(Vt(t[r])||Rm(r,e))&&(n[r]=t[r]);return n}function Hm(e){const t=kd(e);for(const n in e)if(Vt(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function bd(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}const Aa=e=>Array.isArray(e),w3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),S3=e=>Aa(e)?e[e.length-1]||0:e;function Go(e){const t=Vt(e)?e.get():e;return w3(t)?t.toValue():t}function k3({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:b3(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const Um=e=>(t,n)=>{const r=b.useContext(bs),i=b.useContext(Ji),o=()=>k3(e,t,r,i);return n?o():Qn(o)};function b3(e,t,n,r){const i={},o=r(e);for(const p in o)i[p]=Go(o[p]);let{initial:a,animate:s}=e;const l=Ts(e),c=Mm(e);t&&c&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u=u||a===!1;const d=u?s:a;return d&&typeof d!="boolean"&&!Cs(d)&&(Array.isArray(d)?d:[d]).forEach(v=>{const y=bd(e,v);if(!y)return;const{transitionEnd:x,transition:k,...g}=y;for(const h in g){let m=g[h];if(Array.isArray(m)){const w=u?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in x)i[h]=x[h]}),i}const C3={useVisualState:Um({scrapeMotionValuesFromProps:Hm,createRenderState:Nm,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}xd(n,r,{enableHardwareAcceleration:!1},wd(t.tagName),e.transformTemplate),Bm(t,n)}})},T3={useVisualState:Um({scrapeMotionValuesFromProps:kd,createRenderState:yd})};function P3(e,{forwardMotionProps:t=!1},n,r,i){return{...gd(e)?C3:T3,preloadedFeatures:n,useRender:x3(t),createVisualElement:r,projectionNodeConstructor:i,Component:e}}var se;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(se||(se={}));function Ps(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Gc(e,t,n,r){b.useEffect(()=>{const i=e.current;if(n&&i)return Ps(i,t,n,r)},[e,t,n,r])}function E3({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(se.Focus,!0)},i=()=>{n&&n.setActive(se.Focus,!1)};Gc(t,"focus",e?r:void 0),Gc(t,"blur",e?i:void 0)}function Wm(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function Ym(e){return!!e.touches}function j3(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const A3={pageX:0,pageY:0};function z3(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||A3;return{x:r[t+"X"],y:r[t+"Y"]}}function L3(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function Cd(e,t="page"){return{point:Ym(e)?z3(e,t):L3(e,t)}}const Gm=(e,t=!1)=>{const n=r=>e(r,Cd(r));return t?j3(n):n},M3=()=>Kn&&window.onpointerdown===null,I3=()=>Kn&&window.ontouchstart===null,R3=()=>Kn&&window.onmousedown===null,O3={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},_3={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function Km(e){return M3()?e:I3()?_3[e]:R3()?O3[e]:e}function Er(e,t,n,r){return Ps(e,Km(t),Gm(n,t==="pointerdown"),r)}function za(e,t,n,r){return Gc(e,Km(t),n&&Gm(n,t==="pointerdown"),r)}function Qm(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const zp=Qm("dragHorizontal"),Lp=Qm("dragVertical");function Xm(e){let t=!1;if(e==="y")t=Lp();else if(e==="x")t=zp();else{const n=zp(),r=Lp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Zm(){const e=Xm(!0);return e?(e(),!1):!0}function Mp(e,t,n){return(r,i)=>{!Wm(r)||Zm()||(e.animationState&&e.animationState.setActive(se.Hover,t),n&&n(r,i))}}function D3({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){za(r,"pointerenter",e||n?Mp(r,!0,e):void 0,{passive:!e}),za(r,"pointerleave",t||n?Mp(r,!1,t):void 0,{passive:!t})}const qm=(e,t)=>t?e===t?!0:qm(e,t.parentElement):!1;function Td(e){return b.useEffect(()=>()=>e(),[])}const V3=(e,t)=>n=>t(e(n)),Es=(...e)=>e.reduce(V3);function N3({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:i}){const o=e||t||n||r,a=b.useRef(!1),s=b.useRef(null),l={passive:!(t||e||n||v)};function c(){s.current&&s.current(),s.current=null}function u(){return c(),a.current=!1,i.animationState&&i.animationState.setActive(se.Tap,!1),!Zm()}function d(y,x){u()&&(qm(i.current,y.target)?e&&e(y,x):n&&n(y,x))}function p(y,x){u()&&n&&n(y,x)}function v(y,x){c(),!a.current&&(a.current=!0,s.current=Es(Er(window,"pointerup",d,l),Er(window,"pointercancel",p,l)),i.animationState&&i.animationState.setActive(se.Tap,!0),t&&t(y,x))}za(i,"pointerdown",o?v:void 0,l),Td(c)}const Ip=new Set;function $3(e,t,n){Ip.has(t)||(console.warn(t),Ip.add(t))}const Kc=new WeakMap,fl=new WeakMap,F3=e=>{const t=Kc.get(e.target);t&&t(e)},B3=e=>{e.forEach(F3)};function H3({root:e,...t}){const n=e||document;fl.has(n)||fl.set(n,{});const r=fl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(B3,{root:e,...t})),r[i]}function U3(e,t,n){const r=H3(t);return Kc.set(e,n),r.observe(e),()=>{Kc.delete(e),r.unobserve(e)}}function W3({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:i={}}){const o=b.useRef({hasEnteredView:!1,isInView:!1});let a=!!(t||n||r);i.once&&o.current.hasEnteredView&&(a=!1),(typeof IntersectionObserver>"u"?K3:G3)(a,o.current,e,i)}const Y3={some:0,all:1};function G3(e,t,n,{root:r,margin:i,amount:o="some",once:a}){b.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:i,threshold:typeof o=="number"?o:Y3[o]},l=c=>{const{isIntersecting:u}=c;if(t.isInView===u||(t.isInView=u,a&&!u&&t.hasEnteredView))return;u&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(se.InView,u);const d=n.getProps(),p=u?d.onViewportEnter:d.onViewportLeave;p&&p(c)};return U3(n.current,s,l)},[e,r,i,o])}function K3(e,t,n,{fallback:r=!0}){b.useEffect(()=>{!e||!r||requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:i}=n.getProps();i&&i(null),n.animationState&&n.animationState.setActive(se.InView,!0)})},[e])}const dn=e=>t=>(e(t),null),Q3={inView:dn(W3),tap:dn(N3),focus:dn(E3),hover:dn(D3)};function Jm(){const e=b.useContext(Ji);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}function e2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const X3=e=>/^\-?\d*\.?\d+$/.test(e),Z3=e=>/^0[^.\s]+$/.test(e),Yt={delta:0,timestamp:0},t2=1/60*1e3,q3=typeof performance<"u"?()=>performance.now():()=>Date.now(),n2=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(q3()),t2);function J3(e){let t=[],n=[],r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:(l,c=!1,u=!1)=>{const d=u&&i,p=d?t:n;return c&&a.add(l),p.indexOf(l)===-1&&(p.push(l),d&&i&&(r=t.length)),l},cancel:l=>{const c=n.indexOf(l);c!==-1&&n.splice(c,1),a.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let c=0;c<r;c++){const u=t[c];u(l),a.has(u)&&(s.schedule(u),e())}i=!1,o&&(o=!1,s.process(l))}};return s}const e6=40;let Qc=!0,Yi=!1,Xc=!1;const no=["read","update","preRender","render","postRender"],js=no.reduce((e,t)=>(e[t]=J3(()=>Yi=!0),e),{}),Ke=no.reduce((e,t)=>{const n=js[t];return e[t]=(r,i=!1,o=!1)=>(Yi||n6(),n.schedule(r,i,o)),e},{}),Zt=no.reduce((e,t)=>(e[t]=js[t].cancel,e),{}),pl=no.reduce((e,t)=>(e[t]=()=>js[t].process(Yt),e),{}),t6=e=>js[e].process(Yt),r2=e=>{Yi=!1,Yt.delta=Qc?t2:Math.max(Math.min(e-Yt.timestamp,e6),1),Yt.timestamp=e,Xc=!0,no.forEach(t6),Xc=!1,Yi&&(Qc=!1,n2(r2))},n6=()=>{Yi=!0,Qc=!0,Xc||n2(r2)};function Pd(e,t){e.indexOf(t)===-1&&e.push(t)}function Ed(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class jd{constructor(){this.subscriptions=[]}add(t){return Pd(this.subscriptions,t),()=>Ed(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ad(e,t){return t?e*(1e3/t):0}const r6=e=>!isNaN(parseFloat(e));class i6{constructor(t,n={}){this.version="7.10.3",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:a}=Yt;this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,Ke.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ke.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=r6(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){return this.events[t]||(this.events[t]=new jd),this.events[t].add(n)}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ad(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.stopAnimation&&(this.stopAnimation(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.clearListeners(),this.stop()}}function Et(e,t){return new i6(e,t)}const zd=(e,t)=>n=>!!(eo(n)&&t3.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),i2=(e,t,n)=>r=>{if(!eo(r))return r;const[i,o,a,s]=r.match(Wi);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},o6=e=>Dr(0,255,e),hl={...Zn,transform:e=>Math.round(o6(e))},_n={test:zd("rgb","red"),parse:i2("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+hl.transform(e)+", "+hl.transform(t)+", "+hl.transform(n)+", "+wi(xi.transform(r))+")"};function a6(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Zc={test:zd("#"),parse:a6,transform:_n.transform},yr={test:zd("hsl","hue"),parse:i2("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Dt.transform(wi(t))+", "+Dt.transform(wi(n))+", "+wi(xi.transform(r))+")"},We={test:e=>_n.test(e)||Zc.test(e)||yr.test(e),parse:e=>_n.test(e)?_n.parse(e):yr.test(e)?yr.parse(e):Zc.parse(e),transform:e=>eo(e)?e:e.hasOwnProperty("red")?_n.transform(e):yr.transform(e)},o2="${c}",a2="${n}";function s6(e){var t,n;return isNaN(e)&&eo(e)&&(((t=e.match(Wi))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Yc))===null||n===void 0?void 0:n.length)||0)>0}function La(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0,r=0;const i=e.match(Yc);i&&(n=i.length,e=e.replace(Yc,o2),t.push(...i.map(We.parse)));const o=e.match(Wi);return o&&(r=o.length,e=e.replace(Wi,a2),t.push(...o.map(Zn.parse))),{values:t,numColors:n,numNumbers:r,tokenised:e}}function s2(e){return La(e).values}function l2(e){const{values:t,numColors:n,tokenised:r}=La(e),i=t.length;return o=>{let a=r;for(let s=0;s<i;s++)a=a.replace(s<n?o2:a2,s<n?We.transform(o[s]):wi(o[s]));return a}}const l6=e=>typeof e=="number"?0:e;function c6(e){const t=s2(e);return l2(e)(t.map(l6))}const Cn={test:s6,parse:s2,createTransformer:l2,getAnimatableNone:c6},u6=new Set(["brightness","contrast","saturate","opacity"]);function d6(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Wi)||[];if(!r)return e;const i=n.replace(r,"");let o=u6.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const f6=/([a-z-]*)\(.*?\)/g,qc={...Cn,getAnimatableNone:e=>{const t=e.match(f6);return t?t.map(d6).join(" "):e}},p6={..._m,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:qc,WebkitFilter:qc},Ld=e=>p6[e];function Md(e,t){var n;let r=Ld(e);return r!==qc&&(r=Cn),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const c2=e=>t=>t.test(e),h6={test:e=>e==="auto",parse:e=>e},u2=[Zn,N,Dt,tn,r3,n3,h6],ei=e=>u2.find(c2(e)),m6=[...u2,We,Cn],g6=e=>m6.find(c2(e));function v6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function y6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function As(e,t,n){const r=e.getProps();return bd(r,t,n!==void 0?n:r.custom,v6(e),y6(e))}function x6(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Et(n))}function w6(e,t){const n=As(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){const s=S3(o[a]);x6(e,a,s)}}function S6(e,t,n){var r,i;const o=Object.keys(t).filter(s=>!e.hasValue(s)),a=o.length;if(a)for(let s=0;s<a;s++){const l=o[s],c=t[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(X3(u)||Z3(u))?u=parseFloat(u):!g6(u)&&Cn.test(c)&&(u=Md(l,c)),e.addValue(l,Et(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function k6(e,t){return t?(t[e]||t.default||t).from:void 0}function b6(e,t,n){var r;const i={};for(const o in e){const a=k6(o,t);i[o]=a!==void 0?a:(r=n.getValue(o))===null||r===void 0?void 0:r.get()}return i}function Ma(e){return!!(Vt(e)&&e.add)}const C6=(e,t)=>`${e}: ${t}`;function T6(e,t){const{MotionAppearAnimations:n}=window,r=C6(e,Xn.has(t)?"transform":t),i=n&&n.get(r);return i?(Ke.render(()=>{try{i.cancel(),n.delete(r)}catch{}}),i.currentTime||0):0}const P6="framerAppearId",E6="data-"+Sd(P6);var Ia=function(){};const Ko=e=>e*1e3,j6={current:!1},Id=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Rd=e=>t=>1-e(1-t),Od=e=>e*e,A6=Rd(Od),_d=Id(Od),we=(e,t,n)=>-n*e+n*t+e;function ml(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function z6({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=ml(l,s,e+1/3),o=ml(l,s,e),a=ml(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}const gl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},L6=[Zc,_n,yr],M6=e=>L6.find(t=>t.test(e));function Rp(e){const t=M6(e);let n=t.parse(e);return t===yr&&(n=z6(n)),n}const d2=(e,t)=>{const n=Rp(e),r=Rp(t),i={...n};return o=>(i.red=gl(n.red,r.red,o),i.green=gl(n.green,r.green,o),i.blue=gl(n.blue,r.blue,o),i.alpha=we(n.alpha,r.alpha,o),_n.transform(i))};function f2(e,t){return typeof e=="number"?n=>we(e,t,n):We.test(e)?d2(e,t):h2(e,t)}const p2=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,a)=>f2(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}},I6=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=f2(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},h2=(e,t)=>{const n=Cn.createTransformer(t),r=La(e),i=La(t);return r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Es(p2(r.values,i.values),n):a=>`${a>0?t:e}`},Ra=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Op=(e,t)=>n=>we(e,t,n);function R6(e){return typeof e=="number"?Op:typeof e=="string"?We.test(e)?d2:h2:Array.isArray(e)?p2:typeof e=="object"?I6:Op}function O6(e,t,n){const r=[],i=n||R6(e[0]),o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]:t;s=Es(l,s)}r.push(s)}return r}function Dd(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;Ia(o===t.length),Ia(!r||!Array.isArray(r)||r.length===o-1),e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=O6(t,r,i),s=a.length,l=c=>{let u=0;if(s>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const d=Ra(e[u],e[u+1],c);return a[u](d)};return n?c=>l(Dr(e[0],e[o-1],c)):l}const Vd=e=>e,m2=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,_6=1e-7,D6=12;function V6(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=m2(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>_6&&++s<D6);return a}function g2(e,t,n,r){if(e===t&&n===r)return Vd;const i=o=>V6(o,0,1,e,n);return o=>o===0||o===1?o:m2(i(o),t,r)}const v2=e=>1-Math.sin(Math.acos(e)),Nd=Rd(v2),N6=Id(Nd),y2=g2(.33,1.53,.69,.99),$d=Rd(y2),$6=Id($d),F6=e=>(e*=2)<1?.5*$d(e):.5*(2-Math.pow(2,-10*(e-1))),B6={linear:Vd,easeIn:Od,easeInOut:_d,easeOut:A6,circIn:v2,circInOut:N6,circOut:Nd,backIn:$d,backInOut:$6,backOut:y2,anticipate:F6},_p=e=>{if(Array.isArray(e)){Ia(e.length===4);const[t,n,r,i]=e;return g2(t,n,r,i)}else if(typeof e=="string")return B6[e];return e},H6=e=>Array.isArray(e)&&typeof e[0]!="number";function U6(e,t){return e.map(()=>t||_d).splice(0,e.length-1)}function W6(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function Y6(e,t){return e.map(n=>n*t)}function Oa({keyframes:e,ease:t=_d,times:n,duration:r=300}){e=[...e];const i=Oa[0],o=H6(t)?t.map(_p):_p(t),a={done:!1,value:i},s=Y6(n&&n.length===Oa.length?n:W6(e),r);function l(){return Dd(s,e,{ease:Array.isArray(o)?o:U6(e,o)})}let c=l();return{next:u=>(a.value=c(u),a.done=u>=r,a),flipTarget:()=>{e.reverse(),c=l()}}}const vl=.001,G6=.01,K6=10,Q6=.05,X6=1;function Z6({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,a=1-t;a=Dr(Q6,X6,a),e=Dr(G6,K6,e/1e3),a<1?(i=c=>{const u=c*a,d=u*e,p=u-n,v=Jc(c,a),y=Math.exp(-d);return vl-p/v*y},o=c=>{const d=c*a*e,p=d*n+n,v=Math.pow(a,2)*Math.pow(c,2)*e,y=Math.exp(-d),x=Jc(Math.pow(c,2),a);return(-i(c)+vl>0?-1:1)*((p-v)*y)/x}):(i=c=>{const u=Math.exp(-c*e),d=(c-n)*e+1;return-vl+u*d},o=c=>{const u=Math.exp(-c*e),d=(n-c)*(e*e);return u*d});const s=5/e,l=J6(i,o,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:e}}}const q6=12;function J6(e,t,n){let r=n;for(let i=1;i<q6;i++)r=r-e(r)/t(r);return r}function Jc(e,t){return e*Math.sqrt(1-t*t)}const ex=["duration","bounce"],tx=["stiffness","damping","mass"];function Dp(e,t){return t.some(n=>e[n]!==void 0)}function nx(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Dp(e,tx)&&Dp(e,ex)){const n=Z6(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}const rx=5;function x2({keyframes:e,restSpeed:t=2,restDelta:n=.01,...r}){let i=e[0],o=e[e.length-1];const a={done:!1,value:i},{stiffness:s,damping:l,mass:c,velocity:u,duration:d,isResolvedFromDuration:p}=nx(r);let v=ix,y=u?-(u/1e3):0;const x=l/(2*Math.sqrt(s*c));function k(){const g=o-i,h=Math.sqrt(s/c)/1e3;if(n===void 0&&(n=Math.min(Math.abs(o-i)/100,.4)),x<1){const m=Jc(h,x);v=w=>{const C=Math.exp(-x*h*w);return o-C*((y+x*h*g)/m*Math.sin(m*w)+g*Math.cos(m*w))}}else if(x===1)v=m=>o-Math.exp(-h*m)*(g+(y+h*g)*m);else{const m=h*Math.sqrt(x*x-1);v=w=>{const C=Math.exp(-x*h*w),P=Math.min(m*w,300);return o-C*((y+x*h*g)*Math.sinh(P)+m*g*Math.cosh(P))/m}}}return k(),{next:g=>{const h=v(g);if(p)a.done=g>=d;else{let m=y;if(g!==0)if(x<1){const P=Math.max(0,g-rx);m=Ad(h-v(P),g-P)}else m=0;const w=Math.abs(m)<=t,C=Math.abs(o-h)<=n;a.done=w&&C}return a.value=a.done?o:h,a},flipTarget:()=>{y=-y,[i,o]=[o,i],k()}}}x2.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ix=e=>0;function ox({keyframes:e=[0],velocity:t=0,power:n=.8,timeConstant:r=350,restDelta:i=.5,modifyTarget:o}){const a=e[0],s={done:!1,value:a};let l=n*t;const c=a+l,u=o===void 0?c:o(c);return u!==c&&(l=u-a),{next:d=>{const p=-l*Math.exp(-d/r);return s.done=!(p>i||p<-i),s.value=s.done?u:u+p,s},flipTarget:()=>{}}}const ax={decay:ox,keyframes:Oa,tween:Oa,spring:x2};function w2(e,t,n=0){return e-t-n}function sx(e,t=0,n=0,r=!0){return r?w2(t+-e,t,n):t-(e-t)+n}function lx(e,t,n,r){return r?e>=t+n:e<=-n}const cx=e=>{const t=({delta:n})=>e(n);return{start:()=>Ke.update(t,!0),stop:()=>Zt.update(t)}};function _a({duration:e,driver:t=cx,elapsed:n=0,repeat:r=0,repeatType:i="loop",repeatDelay:o=0,keyframes:a,autoplay:s=!0,onPlay:l,onStop:c,onComplete:u,onRepeat:d,onUpdate:p,type:v="keyframes",...y}){var x,k;let g,h=0,m=e,w,C=!1,P=!0,E;const A=ax[a.length>2?"keyframes":v],D=a[0],_=a[a.length-1];!((k=(x=A).needsInterpolation)===null||k===void 0)&&k.call(x,D,_)&&(E=Dd([0,100],[D,_],{clamp:!1}),a=[0,100]);const oe=A({...y,duration:e,keyframes:a});function fe(){h++,i==="reverse"?(P=h%2===0,n=sx(n,m,o,P)):(n=w2(n,m,o),i==="mirror"&&oe.flipTarget()),C=!1,d&&d()}function Se(){g.stop(),u&&u()}function Ee(ke){if(P||(ke=-ke),n+=ke,!C){const ve=oe.next(Math.max(0,n));w=ve.value,E&&(w=E(w)),C=P?ve.done:n<=0}p&&p(w),C&&(h===0&&(m=m!==void 0?m:n),h<r?lx(n,m,o,P)&&fe():Se())}function X(){l&&l(),g=t(Ee),g.start()}return s&&X(),{stop:()=>{c&&c(),g.stop()},sample:ke=>oe.next(Math.max(0,ke))}}function ux(e){return!e||Array.isArray(e)||typeof e=="string"&&S2[e]}const si=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,S2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:si([0,.65,.55,1]),circOut:si([.55,0,1,.45]),backIn:si([.31,.01,.66,-.59]),backOut:si([.33,1.53,.69,.99])};function dx(e){if(e)return Array.isArray(e)?si(e):S2[e]}function fx(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){return e.animate({[t]:n,offset:l},{delay:r,duration:i,easing:dx(s),fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}const Po=10;function px(e,t,{onUpdate:n,onComplete:r,...i}){let{keyframes:o,duration:a=.3,elapsed:s=0,ease:l}=i;if(i.type==="spring"||!ux(i.ease)){const u=_a(i);let d={done:!1,value:o[0]};const p=[];let v=0;for(;!d.done;)d=u.sample(v),p.push(d.value),v+=Po;o=p,a=v-Po,l="linear"}const c=fx(e.owner.current,t,o,{...i,delay:-s,duration:a,ease:l});return c.onfinish=()=>{e.set(o[o.length-1]),r&&r()},()=>{const{currentTime:u}=c;if(u){const d=_a(i);e.setWithVelocity(d.sample(u-Po).value,d.sample(u).value,Po)}Ke.update(()=>c.cancel())}}function k2(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Zt.read(r),e(o-t))};return Ke.read(r,!0),()=>Zt.read(r)}function hx({keyframes:e,elapsed:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),()=>{});return t?k2(i,-t):i()}function mx({keyframes:e,velocity:t=0,min:n,max:r,power:i=.8,timeConstant:o=750,bounceStiffness:a=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:d,onComplete:p,onStop:v}){const y=e[0];let x;function k(w){return n!==void 0&&w<n||r!==void 0&&w>r}function g(w){return n===void 0?r:r===void 0||Math.abs(n-w)<Math.abs(r-w)?n:r}function h(w){x==null||x.stop(),x=_a({keyframes:[0,1],velocity:0,...w,driver:u,onUpdate:C=>{var P;d==null||d(C),(P=w.onUpdate)===null||P===void 0||P.call(w,C)},onComplete:p,onStop:v})}function m(w){h({type:"spring",stiffness:a,damping:s,restDelta:l,...w})}if(k(y))m({velocity:t,keyframes:[y,g(y)]});else{let w=i*t+y;typeof c<"u"&&(w=c(w));const C=g(w),P=C===n?-1:1;let E,A;const D=_=>{E=A,A=_,t=Ad(_-E,Yt.delta),(P===1&&_>C||P===-1&&_<C)&&m({keyframes:[_,C],velocity:t})};h({type:"decay",keyframes:[y,0],velocity:t,timeConstant:o,power:i,restDelta:l,modifyTarget:c,onUpdate:k(w)?D:void 0})}return{stop:()=>x==null?void 0:x.stop()}}const jn=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Eo=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),yl=()=>({type:"keyframes",ease:"linear",duration:.3}),gx={type:"keyframes",duration:.8},Vp={x:jn,y:jn,z:jn,rotate:jn,rotateX:jn,rotateY:jn,rotateZ:jn,scaleX:Eo,scaleY:Eo,scale:Eo,opacity:yl,backgroundColor:yl,color:yl,default:Eo},vx=(e,{keyframes:t})=>t.length>2?gx:(Vp[e]||Vp.default)(t[1]),eu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Cn.test(t)&&!t.startsWith("url("));function yx({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,...c}){return!!Object.keys(c).length}function Np(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function $p(e){return typeof e=="number"?0:Md("",e)}function b2(e,t){return e[t]||e.default||e}function xx(e,t,n,r){const i=eu(t,n);let o=r.from!==void 0?r.from:e.get();return o==="none"&&i&&typeof n=="string"?o=Md(t,n):Np(o)&&typeof n=="string"?o=$p(n):!Array.isArray(n)&&Np(n)&&typeof o=="string"&&(n=$p(o)),Array.isArray(n)?(n[0]===null&&(n[0]=o),n):[o,n]}const Fp={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},xl={},C2={};for(const e in Fp)C2[e]=()=>(xl[e]===void 0&&(xl[e]=Fp[e]()),xl[e]);const wx=new Set(["opacity"]),Fd=(e,t,n,r={})=>i=>{const o=b2(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s=s-Ko(a);const l=xx(t,e,n,o),c=l[0],u=l[l.length-1],d=eu(e,c),p=eu(e,u);let v={keyframes:l,velocity:t.getVelocity(),...o,elapsed:s,onUpdate:g=>{t.set(g),o.onUpdate&&o.onUpdate(g)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(!d||!p||j6.current||o.type===!1)return hx(v);if(o.type==="inertia"){const g=mx(v);return()=>g.stop()}yx(o)||(v={...v,...vx(e,v)}),v.duration&&(v.duration=Ko(v.duration)),v.repeatDelay&&(v.repeatDelay=Ko(v.repeatDelay));const y=t.owner,x=y&&y.current;if(C2.waapi()&&wx.has(e)&&!v.repeatDelay&&v.repeatType!=="mirror"&&v.damping!==0&&y&&x instanceof HTMLElement&&!y.getProps().onUpdate)return px(t,e,v);{const g=_a(v);return()=>g.stop()}};function Sx(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>tu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=tu(e,t,n);else{const i=typeof t=="function"?As(e,t,n.custom):t;r=T2(e,i,n)}return r.then(()=>e.notify("AnimationComplete",t))}function tu(e,t,n={}){var r;const i=As(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>T2(e,i,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:p}=o;return kx(e,t,u+c,d,p,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,u]=l==="beforeChildren"?[a,s]:[s,a];return c().then(u)}else return Promise.all([a(),s(n.delay)])}function T2(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");r&&(a=r);const u=[],d=i&&((o=e.animationState)===null||o===void 0?void 0:o.getState()[i]);for(const p in l){const v=e.getValue(p),y=l[p];if(!v||y===void 0||d&&Cx(d,p))continue;let x={delay:n,elapsed:0,...a};if(e.shouldReduceMotion&&Xn.has(p)&&(x={...x,type:!1,delay:0}),!v.hasAnimated){const g=e.getProps()[E6];g&&(x.elapsed=T6(g,p))}let k=v.start(Fd(p,v,y,x));Ma(c)&&(c.add(p),k=k.then(()=>c.remove(p))),u.push(k)}return Promise.all(u).then(()=>{s&&w6(e,s)})}function kx(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>s-c*r;return Array.from(e.variantChildren).sort(bx).forEach((c,u)=>{a.push(tu(c,t,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(a)}function bx(e,t){return e.sortNodePosition(t)}function Cx({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const Bd=[se.Animate,se.InView,se.Focus,se.Hover,se.Tap,se.Drag,se.Exit],Tx=[...Bd].reverse(),Px=Bd.length;function Ex(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Sx(e,n,r)))}function jx(e){let t=Ex(e);const n=zx();let r=!0;const i=(l,c)=>{const u=As(e,c);if(u){const{transition:d,transitionEnd:p,...v}=u;l={...l,...v,...p}}return l};function o(l){t=l(e)}function a(l,c){const u=e.getProps(),d=e.getVariantContext(!0)||{},p=[],v=new Set;let y={},x=1/0;for(let g=0;g<Px;g++){const h=Tx[g],m=n[h],w=u[h]!==void 0?u[h]:d[h],C=Hi(w),P=h===c?m.isActive:null;P===!1&&(x=g);let E=w===d[h]&&w!==u[h]&&C;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),m.protectedKeys={...y},!m.isActive&&P===null||!w&&!m.prevProp||Cs(w)||typeof w=="boolean")continue;const A=Ax(m.prevProp,w);let D=A||h===c&&m.isActive&&!E&&C||g>x&&C;const _=Array.isArray(w)?w:[w];let oe=_.reduce(i,{});P===!1&&(oe={});const{prevResolvedValues:fe={}}=m,Se={...fe,...oe},Ee=X=>{D=!0,v.delete(X),m.needsAnimating[X]=!0};for(const X in Se){const ke=oe[X],ve=fe[X];y.hasOwnProperty(X)||(ke!==ve?Aa(ke)&&Aa(ve)?!e2(ke,ve)||A?Ee(X):m.protectedKeys[X]=!0:ke!==void 0?Ee(X):v.add(X):ke!==void 0&&v.has(X)?Ee(X):m.protectedKeys[X]=!0)}m.prevProp=w,m.prevResolvedValues=oe,m.isActive&&(y={...y,...oe}),r&&e.blockInitialAnimation&&(D=!1),D&&!E&&p.push(..._.map(X=>({animation:X,options:{type:h,...l}})))}if(v.size){const g={};v.forEach(h=>{const m=e.getBaseTarget(h);m!==void 0&&(g[h]=m)}),p.push({animation:g})}let k=!!p.length;return r&&u.initial===!1&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(p):Promise.resolve()}function s(l,c,u){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(v=>{var y;return(y=v.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const p=a(u,l);for(const v in n)n[v].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n}}function Ax(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!e2(t,e):!1}function An(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zx(){return{[se.Animate]:An(!0),[se.InView]:An(),[se.Hover]:An(),[se.Tap]:An(),[se.Drag]:An(),[se.Focus]:An(),[se.Exit]:An()}}const Lx={animation:dn(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=jx(e)),Cs(t)&&b.useEffect(()=>t.subscribe(e),[t])}),exit:dn(e=>{const{custom:t,visualElement:n}=e,[r,i]=Jm(),o=b.useContext(Ji);b.useEffect(()=>{n.isPresent=r;const a=n.animationState&&n.animationState.setActive(se.Exit,!r,{custom:o&&o.custom||t});a&&!r&&a.then(i)},[r])})},Bp=(e,t)=>Math.abs(e-t);function Mx(e,t){const n=Bp(e.x,t.x),r=Bp(e.y,t.y);return Math.sqrt(n**2+r**2)}class P2{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const c=Sl(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,d=Mx(c.offset,{x:0,y:0})>=3;if(!u&&!d)return;const{point:p}=c,{timestamp:v}=Yt;this.history.push({...p,timestamp:v});const{onStart:y,onMove:x}=this.handlers;u||(y&&y(this.lastMoveEvent,c),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,c)},this.handlePointerMove=(c,u)=>{if(this.lastMoveEvent=c,this.lastMoveEventInfo=wl(u,this.transformPagePoint),Wm(c)&&c.buttons===0){this.handlePointerUp(c,u);return}Ke.update(this.updatePoint,!0)},this.handlePointerUp=(c,u)=>{this.end();const{onEnd:d,onSessionEnd:p}=this.handlers,v=Sl(wl(u,this.transformPagePoint),this.history);this.startEvent&&d&&d(c,v),p&&p(c,v)},Ym(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const i=Cd(t),o=wl(i,this.transformPagePoint),{point:a}=o,{timestamp:s}=Yt;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,Sl(o,this.history)),this.removeListeners=Es(Er(window,"pointermove",this.handlePointerMove),Er(window,"pointerup",this.handlePointerUp),Er(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zt.update(this.updatePoint)}}function wl(e,t){return t?{point:t(e.point)}:e}function Hp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Sl({point:e},t){return{point:e,delta:Hp(e,E2(t)),offset:Hp(e,Ix(t)),velocity:Rx(t,.1)}}function Ix(e){return e[0]}function E2(e){return e[e.length-1]}function Rx(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=E2(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ko(t)));)n--;if(!r)return{x:0,y:0};const o=(i.timestamp-r.timestamp)/1e3;if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function lt(e){return e.max-e.min}function nu(e,t=0,n=.01){return Math.abs(e-t)<=n}function Up(e,t,n,r=.5){e.origin=r,e.originPoint=we(t.min,t.max,e.origin),e.scale=lt(n)/lt(t),(nu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=we(n.min,n.max,e.origin)-e.originPoint,(nu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Si(e,t,n,r){Up(e.x,t.x,n.x,r==null?void 0:r.originX),Up(e.y,t.y,n.y,r==null?void 0:r.originY)}function Wp(e,t,n){e.min=n.min+t.min,e.max=e.min+lt(t)}function Ox(e,t,n){Wp(e.x,t.x,n.x),Wp(e.y,t.y,n.y)}function Yp(e,t,n){e.min=t.min-n.min,e.max=e.min+lt(t)}function ki(e,t,n){Yp(e.x,t.x,n.x),Yp(e.y,t.y,n.y)}function _x(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?we(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?we(n,e,r.max):Math.min(e,n)),e}function Gp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Dx(e,{top:t,left:n,bottom:r,right:i}){return{x:Gp(e.x,n,i),y:Gp(e.y,t,r)}}function Kp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Vx(e,t){return{x:Kp(e.x,t.x),y:Kp(e.y,t.y)}}function Nx(e,t){let n=.5;const r=lt(e),i=lt(t);return i>r?n=Ra(t.min,t.max-r,e.min):r>i&&(n=Ra(e.min,e.max-i,t.min)),Dr(0,1,n)}function $x(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ru=.35;function Fx(e=ru){return e===!1?e=0:e===!0&&(e=ru),{x:Qp(e,"left","right"),y:Qp(e,"top","bottom")}}function Qp(e,t,n){return{min:Xp(e,t),max:Xp(e,n)}}function Xp(e,t){return typeof e=="number"?e:e[t]||0}const Zp=()=>({translate:0,scale:1,origin:0,originPoint:0}),bi=()=>({x:Zp(),y:Zp()}),qp=()=>({min:0,max:0}),je=()=>({x:qp(),y:qp()});function It(e){return[e("x"),e("y")]}function j2({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Bx({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Hx(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function kl(e){return e===void 0||e===1}function iu({scale:e,scaleX:t,scaleY:n}){return!kl(e)||!kl(t)||!kl(n)}function Mn(e){return iu(e)||A2(e)||e.z||e.rotate||e.rotateX||e.rotateY}function A2(e){return Jp(e.x)||Jp(e.y)}function Jp(e){return e&&e!=="0%"}function Da(e,t,n){const r=e-n,i=t*r;return n+i}function e0(e,t,n,r,i){return i!==void 0&&(e=Da(e,i,r)),Da(e,n,r)+t}function ou(e,t=0,n=1,r,i){e.min=e0(e.min,t,n,r,i),e.max=e0(e.max,t,n,r,i)}function z2(e,{x:t,y:n}){ou(e.x,t.translate,t.scale,t.originPoint),ou(e.y,n.translate,n.scale,n.originPoint)}function Ux(e,t,n,r=!1){var i,o;const a=n.length;if(!a)return;t.x=t.y=1;let s,l;for(let c=0;c<a;c++)s=n[c],l=s.projectionDelta,((o=(i=s.instance)===null||i===void 0?void 0:i.style)===null||o===void 0?void 0:o.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&xr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,z2(e,l)),r&&Mn(s.latestValues)&&xr(e,s.latestValues));t.x=t0(t.x),t.y=t0(t.y)}function t0(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function an(e,t){e.min=e.min+t,e.max=e.max+t}function n0(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,a=we(e.min,e.max,o);ou(e,t[n],t[r],a,t.scale)}const Wx=["x","scaleX","originX"],Yx=["y","scaleY","originY"];function xr(e,t){n0(e.x,t,Wx),n0(e.y,t,Yx)}function L2(e,t){return j2(Hx(e.getBoundingClientRect(),t))}function Gx(e,t,n){const r=L2(e,n),{scroll:i}=t;return i&&(an(r.x,i.offset.x),an(r.y,i.offset.y)),r}const Kx=new WeakMap;class Qx{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=je(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(Cd(s,"page").point)},i=(s,l)=>{var c;const{drag:u,dragPropagation:d,onDragStart:p}=this.getProps();u&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Xm(u),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),It(v=>{var y,x;let k=this.getAxisMotionValue(v).get()||0;if(Dt.test(k)){const g=(x=(y=this.visualElement.projection)===null||y===void 0?void 0:y.layout)===null||x===void 0?void 0:x.layoutBox[v];g&&(k=lt(g)*(parseFloat(k)/100))}this.originPoint[v]=k}),p==null||p(s,l),(c=this.visualElement.animationState)===null||c===void 0||c.setActive(se.Drag,!0))},o=(s,l)=>{const{dragPropagation:c,dragDirectionLock:u,onDirectionLock:d,onDrag:p}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:v}=l;if(u&&this.currentDirection===null){this.currentDirection=Xx(v),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,v),this.updateAxis("y",l.point,v),this.visualElement.render(),p==null||p(s,l)},a=(s,l)=>this.stop(s,l);this.panSession=new P2(t,{onSessionStart:r,onStart:i,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o==null||o(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(se.Drag,!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!jo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=_x(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&vr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=Dx(r.layoutBox,t):this.constraints=!1,this.elastic=Fx(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&It(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=$x(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!vr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Gx(r,i.root,this.visualElement.getTransformPagePoint());let a=Vx(i.layout.layoutBox,o);if(n){const s=n(Bx(a));this.hasMutatedConstraints=!!s,s&&(a=j2(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},c=It(u=>{if(!jo(u,n,this.currentDirection))return;let d=(l==null?void 0:l[u])||{};a&&(d={min:0,max:0});const p=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[u]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Fd(t,r,0,n))}stopAnimation(){It(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n;const r="_drag"+t.toUpperCase(),i=this.visualElement.getProps()[r];return i||this.visualElement.getValue(t,((n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])||0)}snapToCursor(t){It(n=>{const{drag:r}=this.getProps();if(!jo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-we(a,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:i}=this.visualElement;if(!vr(r)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};It(s=>{const l=this.getAxisMotionValue(s);if(l){const c=l.get();o[s]=Nx({min:c,max:c},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",(t=i.root)===null||t===void 0||t.updateScroll(),i.updateLayout(),this.resolveConstraints(),It(s=>{if(!jo(s,n,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(we(c,u,o[s]))})}addListeners(){var t;if(!this.visualElement.current)return;Kx.set(this.visualElement,this);const n=this.visualElement.current,r=Er(n,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),i=()=>{const{dragConstraints:c}=this.getProps();vr(c)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&((t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout()),i();const s=Ps(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(It(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=c[d].translate,p.set(p.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),r(),a(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=ru,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function jo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Xx(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function Zx(e){const{dragControls:t,visualElement:n}=e,r=Qn(()=>new Qx(n));b.useEffect(()=>t&&t.subscribe(r),[r,t]),b.useEffect(()=>r.addListeners(),[r])}function qx({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:i}){const o=e||t||n||r,a=b.useRef(null),{transformPagePoint:s}=b.useContext(ks),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(u,d)=>{a.current=null,n&&n(u,d)}};b.useEffect(()=>{a.current!==null&&a.current.updateHandlers(l)});function c(u){a.current=new P2(u,l,{transformPagePoint:s})}za(i,"pointerdown",o&&c),Td(()=>a.current&&a.current.end())}const Jx={pan:dn(qx),drag:dn(Zx)};function au(e){return typeof e=="string"&&e.startsWith("var(--")}const M2=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function e8(e){const t=M2.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function su(e,t,n=1){const[r,i]=e8(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);return o?o.trim():au(i)?su(i,t,n+1):i}function t8(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!au(o))return;const a=su(o,r);a&&i.set(a)});for(const i in t){const o=t[i];if(!au(o))continue;const a=su(o,r);a&&(t[i]=a,n&&n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const n8=new Set(["width","height","top","left","right","bottom","x","y"]),I2=e=>n8.has(e),r8=e=>Object.keys(e).some(I2),R2=(e,t)=>{e.set(t,!1),e.set(t)},r0=e=>e===Zn||e===N;var i0;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(i0||(i0={}));const o0=(e,t)=>parseFloat(e.split(", ")[t]),a0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return o0(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?o0(o[1],e):0}},i8=new Set(["x","y","z"]),o8=Ea.filter(e=>!i8.has(e));function a8(e){const t=[];return o8.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const s0={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:a0(4,13),y:a0(5,14)},s8=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{s[c]=s0[c](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const u=t.getValue(c);R2(u,s[c]),e[c]=s0[c](l,o)}),e},l8=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(I2);let o=[],a=!1;const s=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let u=n[l],d=ei(u);const p=t[l];let v;if(Aa(p)){const y=p.length,x=p[0]===null?1:0;u=p[x],d=ei(u);for(let k=x;k<y;k++)v?Ia(ei(p[k])===v):v=ei(p[k])}else v=ei(p);if(d!==v)if(r0(d)&&r0(v)){const y=c.get();typeof y=="string"&&c.set(parseFloat(y)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&v===N&&(t[l]=p.map(parseFloat))}else d!=null&&d.transform&&(v!=null&&v.transform)&&(u===0||p===0)?u===0?c.set(v.transform(u)):t[l]=d.transform(p):(a||(o=a8(e),a=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],R2(c,p))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,c=s8(t,e,s);return o.length&&o.forEach(([u,d])=>{e.getValue(u).set(d)}),e.render(),Kn&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function c8(e,t,n,r){return r8(t)?l8(e,t,n,r):{target:t,transitionEnd:r}}const u8=(e,t,n,r)=>{const i=t8(e,t,r);return t=i.target,r=i.transitionEnd,c8(e,t,n,r)},Va={current:null},Hd={current:!1};function O2(){if(Hd.current=!0,!!Kn)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Va.current=e.matches;e.addListener(t),t()}else Va.current=!1}function d8(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(Vt(o))e.addValue(i,o),Ma(r)&&r.add(i);else if(Vt(a))e.addValue(i,Et(o,{owner:e})),Ma(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const s=e.getValue(i);!s.hasAnimated&&s.set(o)}else{const s=e.getStaticValue(i);e.addValue(i,Et(s!==void 0?s:o))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const _2=Object.keys(Ui),f8=_2.length,l0=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class p8{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:i},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ke.render(this.render,!1,!0);const{latestValues:a,renderState:s}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Ts(n),this.isVariantNode=Mm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:l,...c}=this.scrapeMotionValuesFromProps(n);for(const u in c){const d=c[u];a[u]!==void 0&&Vt(d)&&(d.set(a[u],!1),Ma(l)&&l.add(u))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),Hd.current||O2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Va.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),Zt.update(this.notifyUpdate),Zt.render(this.render),this.valueSubscriptions.forEach(i=>i()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const i in this.events)this.events[i].clear();this.current=null}bindToMotionValue(t,n){const r=Xn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Ke.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,i,o,a){const s=[];for(let l=0;l<f8;l++){const c=_2[l],{isEnabled:u,Component:d}=Ui[c];u(t)&&d&&s.push(b.createElement(d,{key:c,...t,visualElement:this}))}if(!this.projection&&o){this.projection=new o(i,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:d,layoutScroll:p}=t;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||d&&vr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,layoutScroll:p})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):je()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<l0.length;n++){const r=l0[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const i=t["on"+r];i&&(this.propEventSubscriptions[r]=this.on(r,i))}this.prevMotionValues=d8(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const o=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(o.initial=this.props.initial),o}const i={};for(let o=0;o<h8;o++){const a=D2[o],s=this.props[a];(Hi(s)||s===!1)&&(i[a]=s)}return i}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Et(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=bd(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Vt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new jd),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const D2=["initial",...Bd],h8=D2.length;class V2 extends p8{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let a=b6(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),a&&(a=i(a))),o){S6(this,r,a);const s=u8(this,r,a,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function m8(e){return window.getComputedStyle(e)}class g8 extends V2{readValueFromInstance(t,n){if(Xn.has(n)){const r=Ld(n);return r&&r.default||0}else{const r=m8(t),i=(Om(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return L2(t,n)}build(t,n,r,i){vd(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t){return kd(t)}renderInstance(t,n,r,i){$m(t,n,r,i)}}class v8 extends V2{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return Xn.has(n)?((r=Ld(n))===null||r===void 0?void 0:r.default)||0:(n=Fm.has(n)?n:Sd(n),t.getAttribute(n))}measureInstanceViewportBox(){return je()}scrapeMotionValuesFromProps(t){return Hm(t)}build(t,n,r,i){xd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Bm(t,n,r,i)}mount(t){this.isSVGTag=wd(t.tagName),super.mount(t)}}const y8=(e,t)=>gd(e)?new v8(t,{enableHardwareAcceleration:!1}):new g8(t,{enableHardwareAcceleration:!0});function c0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ti={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=c0(e,t.target.x),r=c0(e,t.target.y);return`${n}% ${r}%`}},u0="_$css",x8={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=e.includes("var("),o=[];i&&(e=e.replace(M2,v=>(o.push(v),u0)));const a=Cn.parse(e);if(a.length>5)return r;const s=Cn.createTransformer(e),l=typeof a[0]!="number"?1:0,c=n.x.scale*t.x,u=n.y.scale*t.y;a[0+l]/=c,a[1+l]/=u;const d=we(c,u,.5);typeof a[2+l]=="number"&&(a[2+l]/=d),typeof a[3+l]=="number"&&(a[3+l]/=d);let p=s(a);if(i){let v=0;p=p.replace(u0,()=>{const y=o[v];return v++,y})}return p}};class w8 extends ce.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;X5(k8),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),yi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||Ke.postRender(()=>{var s;!((s=a.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(i),r!=null&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function S8(e){const[t,n]=Jm(),r=b.useContext(md);return ce.createElement(w8,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Im),isPresent:t,safeToRemove:n})}const k8={borderRadius:{...ti,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ti,borderTopRightRadius:ti,borderBottomLeftRadius:ti,borderBottomRightRadius:ti,boxShadow:x8},b8={measureLayout:S8};function C8(e,t,n={}){const r=Vt(e)?e:Et(e);return r.start(Fd("",r,t,n)),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const N2=["TopLeft","TopRight","BottomLeft","BottomRight"],T8=N2.length,d0=e=>typeof e=="string"?parseFloat(e):e,f0=e=>typeof e=="number"||N.test(e);function P8(e,t,n,r,i,o){i?(e.opacity=we(0,n.opacity!==void 0?n.opacity:1,E8(r)),e.opacityExit=we(t.opacity!==void 0?t.opacity:1,0,j8(r))):o&&(e.opacity=we(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<T8;a++){const s=`border${N2[a]}Radius`;let l=p0(t,s),c=p0(n,s);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||f0(l)===f0(c)?(e[s]=Math.max(we(d0(l),d0(c),r),0),(Dt.test(c)||Dt.test(l))&&(e[s]+="%")):e[s]=c}(t.rotate||n.rotate)&&(e.rotate=we(t.rotate||0,n.rotate||0,r))}function p0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const E8=$2(0,.5,Nd),j8=$2(.5,.95,Vd);function $2(e,t,n){return r=>r<e?0:r>t?1:n(Ra(e,t,r))}function h0(e,t){e.min=t.min,e.max=t.max}function bt(e,t){h0(e.x,t.x),h0(e.y,t.y)}function m0(e,t,n,r,i){return e-=t,e=Da(e,1/n,r),i!==void 0&&(e=Da(e,1/i,r)),e}function A8(e,t=0,n=1,r=.5,i,o=e,a=e){if(Dt.test(t)&&(t=parseFloat(t),t=we(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=we(o.min,o.max,r);e===o&&(s-=t),e.min=m0(e.min,t,n,s,i),e.max=m0(e.max,t,n,s,i)}function g0(e,t,[n,r,i],o,a){A8(e,t[n],t[r],t[i],t.scale,o,a)}const z8=["x","scaleX","originX"],L8=["y","scaleY","originY"];function v0(e,t,n,r){g0(e.x,t,z8,n==null?void 0:n.x,r==null?void 0:r.x),g0(e.y,t,L8,n==null?void 0:n.y,r==null?void 0:r.y)}function y0(e){return e.translate===0&&e.scale===1}function F2(e){return y0(e.x)&&y0(e.y)}function B2(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function x0(e){return lt(e.x)/lt(e.y)}class M8{constructor(){this.members=[]}add(t){Pd(this.members,t),t.scheduleRender()}remove(t){if(Ed(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,a;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(a=(i=t.resumingFrom)===null||i===void 0?void 0:(o=i.options).onExitComplete)===null||a===void 0||a.call(o)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function w0(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),u&&(r+=`rotateY(${u}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return(a!==1||s!==1)&&(r+=`scale(${a}, ${s})`),r||"none"}const I8=(e,t)=>e.depth-t.depth;class R8{constructor(){this.children=[],this.isDirty=!1}add(t){Pd(this.children,t),this.isDirty=!0}remove(t){Ed(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(I8),this.isDirty=!1,this.children.forEach(t)}}const S0=["","X","Y","Z"],k0=1e3;let O8=0;function H2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a,s={},l=t==null?void 0:t()){this.id=O8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(V8),this.nodes.forEach(F8),this.nodes.forEach(B8)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=a,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,a&&this.root.registerPotentialNode(a,this);for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new R8)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new jd),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l==null||l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}registerPotentialNode(a,s){this.potentialNodes.set(a,s)}mount(a,s=!1){var l;if(this.instance)return;this.isSVG=a instanceof SVGElement&&a.tagName!=="svg",this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(u||c)&&(this.isLayoutDirty=!0),e){let p;const v=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=k2(v,250),yi.hasAnimatedSinceResize&&(yi.hasAnimatedSinceResize=!1,this.nodes.forEach(C0))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeTargetChanged:y,layout:x})=>{var k,g,h,m,w;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=(g=(k=this.options.transition)!==null&&k!==void 0?k:d.getDefaultTransition())!==null&&g!==void 0?g:G8,{onLayoutAnimationStart:P,onLayoutAnimationComplete:E}=d.getProps(),A=!this.targetLayout||!B2(this.targetLayout,x)||y,D=!v&&y;if(!((h=this.resumeFrom)===null||h===void 0)&&h.instance||D||v&&(A||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,D);const _={...b2(C,"layout"),onPlay:P,onComplete:E};d.shouldReduceMotion&&(_.delay=0,_.type=!1),this.startAnimation(_)}else!v&&this.animationProgress===0&&C0(this),this.isLead()&&((w=(m=this.options).onExitComplete)===null||w===void 0||w.call(m));this.targetLayout=x})}unmount(){var a,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(a=this.getStack())===null||a===void 0||a.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,Zt.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var a;return this.isAnimationBlocked||((a=this.parent)===null||a===void 0?void 0:a.isTreeAnimationBlocked())||!1}startUpdate(){var a;this.isUpdateBlocked()||(this.isUpdating=!0,(a=this.nodes)===null||a===void 0||a.forEach(H8),this.animationId++)}willUpdate(a=!0){var s,l,c;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const y=this.path[v];y.shouldResetTransform=!0,y.updateScroll("snapshot")}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const p=(c=this.options.visualElement)===null||c===void 0?void 0:c.getProps().transformTemplate;this.prevTransformTemplateValue=p==null?void 0:p(this.latestValues,""),this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(b0);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(K8),this.potentialNodes.clear()),this.nodes.forEach($8),this.nodes.forEach(_8),this.nodes.forEach(D8),this.clearAllSnapshots(),pl.update(),pl.preRender(),pl.render())}clearAllSnapshots(){this.nodes.forEach(N8),this.sharedNodes.forEach(U8)}scheduleUpdateProjection(){Ke.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var a;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(a=this.options.visualElement)===null||a===void 0||a.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var a;if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!F2(this.projectionDelta),c=(a=this.options.visualElement)===null||a===void 0?void 0:a.getProps().transformTemplate,u=c==null?void 0:c(this.latestValues,""),d=u!==this.prevTransformTemplateValue;s&&(l||Mn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),Q8(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return je();const s=a.measureViewportBox(),{scroll:l}=this.root;return l&&(an(s.x,l.offset.x),an(s.y,l.offset.y)),s}removeElementScroll(a){const s=je();bt(s,a);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;if(c!==this.root&&u&&d.layoutScroll){if(u.isRoot){bt(s,a);const{scroll:p}=this.root;p&&(an(s.x,-p.offset.x),an(s.y,-p.offset.y))}an(s.x,u.offset.x),an(s.y,u.offset.y)}}return s}applyTransform(a,s=!1){const l=je();bt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&xr(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Mn(u.latestValues)&&xr(l,u.latestValues)}return Mn(this.latestValues)&&xr(l,this.latestValues),l}removeTransform(a){var s;const l=je();bt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!Mn(u.latestValues))continue;iu(u.latestValues)&&u.updateSnapshot();const d=je(),p=u.measurePageBox();bt(d,p),v0(l,u.latestValues,(s=u.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return Mn(this.latestValues)&&v0(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var a;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:c}=this.options;if(!(!this.layout||!(l||c))){if(!this.targetDelta&&!this.relativeTarget){const u=this.getClosestProjectingParent();u&&u.layout?(this.relativeParent=u,this.relativeTarget=je(),this.relativeTargetOrigin=je(),ki(this.relativeTargetOrigin,this.layout.layoutBox,u.layout.layoutBox),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=je(),this.targetWithTransforms=je()),this.relativeTarget&&this.relativeTargetOrigin&&(!((a=this.relativeParent)===null||a===void 0)&&a.target)?Ox(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bt(this.target,this.layout.layoutBox),z2(this.target,this.targetDelta)):bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const u=this.getClosestProjectingParent();u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target?(this.relativeParent=u,this.relativeTarget=je(),this.relativeTargetOrigin=je(),ki(this.relativeTargetOrigin,this.target,u.target),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||iu(this.parent.latestValues)||A2(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var a;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if(s&&(d=!1),u&&l&&(d=!1),d)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(!((a=this.parent)===null||a===void 0)&&a.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;bt(this.layoutCorrected,this.layout.layoutBox),Ux(this.layoutCorrected,this.treeScale,this.path,u);const{target:y}=c;if(!y)return;this.projectionDelta||(this.projectionDelta=bi(),this.projectionDeltaWithTransform=bi());const x=this.treeScale.x,k=this.treeScale.y,g=this.projectionTransform;Si(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=w0(this.projectionDelta,this.treeScale),(this.projectionTransform!==g||this.treeScale.x!==x||this.treeScale.y!==k)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s,l,c;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),a&&((c=this.getStack())===null||c===void 0||c.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,s=!1){var l,c;const u=this.snapshot,d=(u==null?void 0:u.latestValues)||{},p={...this.latestValues},v=bi();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const y=je(),x=(u==null?void 0:u.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),k=(((c=this.getStack())===null||c===void 0?void 0:c.members.length)||0)<=1,g=!!(x&&!k&&this.options.crossfade===!0&&!this.path.some(Y8));this.animationProgress=0,this.mixTargetDelta=h=>{var m;const w=h/1e3;T0(v.x,a.x,w),T0(v.y,a.y,w),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&(!((m=this.relativeParent)===null||m===void 0)&&m.layout)&&(ki(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),W8(this.relativeTarget,this.relativeTargetOrigin,y,w)),x&&(this.animationValues=p,P8(p,d,this.latestValues,w,g,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(0)}startAnimation(a){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(Zt.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ke.update(()=>{yi.hasAnimatedSinceResize=!0,this.currentAnimation=C8(0,k0,{...a,onUpdate:c=>{var u;this.mixTargetDelta(c),(u=a.onUpdate)===null||u===void 0||u.call(a,c)},onComplete:()=>{var c;(c=a.onComplete)===null||c===void 0||c.call(a),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var a;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(a=this.getStack())===null||a===void 0||a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var a;this.currentAnimation&&((a=this.mixTargetDelta)===null||a===void 0||a.call(this,k0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:c,latestValues:u}=a;if(!(!s||!l||!c)){if(this!==a&&this.layout&&c&&U2(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||je();const d=lt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+d;const p=lt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}bt(s,l),xr(s,u),Si(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(a,s){var l,c,u;this.sharedNodes.has(a)||this.sharedNodes.set(a,new M8),this.sharedNodes.get(a).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(u=(c=s.options.initialPromotionConfig)===null||c===void 0?void 0:c.shouldPreserveFollowOpacity)===null||u===void 0?void 0:u.call(c,s)})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const c={};for(let u=0;u<S0.length;u++){const d="rotate"+S0[u];l[d]&&(c[d]=l[d],a.setStaticValue(d,0))}a==null||a.render();for(const u in c)a.setStaticValue(u,c[u]);a.scheduleRender()}getProjectionStyles(a={}){var s,l,c;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Go(a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=Go(a.pointerEvents)||""),this.hasProjected&&!Mn(this.latestValues)&&(k.transform=d?d({},""):"none",this.hasProjected=!1),k}const v=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=w0(this.projectionDeltaWithTransform,this.treeScale,v),d&&(u.transform=d(v,u.transform));const{x:y,y:x}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?(c=(l=v.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:u.opacity=p===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const k in Pa){if(v[k]===void 0)continue;const{correct:g,applyTo:h}=Pa[k],m=g(v[k],p);if(h){const w=h.length;for(let C=0;C<w;C++)u[h[C]]=m}else u[k]=m}return this.options.layoutId&&(u.pointerEvents=p===this?Go(a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(b0),this.root.sharedNodes.clear()}}}function _8(e){e.updateLayout()}function D8(e){var t,n,r;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:a}=e.layout,{animationType:s}=e.options,l=i.source!==e.layout.source;s==="size"?It(v=>{const y=l?i.measuredBox[v]:i.layoutBox[v],x=lt(y);y.min=o[v].min,y.max=y.min+x}):U2(s,i.layoutBox,o)&&It(v=>{const y=l?i.measuredBox[v]:i.layoutBox[v],x=lt(o[v]);y.max=y.min+x});const c=bi();Si(c,o,i.layoutBox);const u=bi();l?Si(u,e.applyTransform(a,!0),i.measuredBox):Si(u,o,i.layoutBox);const d=!F2(c);let p=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:x}=v;if(y&&x){const k=je();ki(k,i.layoutBox,y.layoutBox);const g=je();ki(g,o,x.layoutBox),B2(k,g)||(p=!0)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:u,layoutDelta:c,hasLayoutChanged:d,hasRelativeTargetChanged:p})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function V8(e){e.isProjectionDirty||(e.isProjectionDirty=!!(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=!!(e.parent&&e.parent.isTransformDirty))}function N8(e){e.clearSnapshot()}function b0(e){e.clearMeasurements()}function $8(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function C0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function F8(e){e.resolveTargetDelta()}function B8(e){e.calcProjection()}function H8(e){e.resetRotation()}function U8(e){e.removeLeadSnapshot()}function T0(e,t,n){e.translate=we(t.translate,0,n),e.scale=we(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function P0(e,t,n,r){e.min=we(t.min,n.min,r),e.max=we(t.max,n.max,r)}function W8(e,t,n,r){P0(e.x,t.x,n.x,r),P0(e.y,t.y,n.y,r)}function Y8(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const G8={duration:.45,ease:[.4,0,.1,1]};function K8(e,t){let n=e.root;for(let o=e.path.length-1;o>=0;o--)if(e.path[o].instance){n=e.path[o];break}const i=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);i&&e.mount(i,!0)}function E0(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function Q8(e){E0(e.x),E0(e.y)}function U2(e,t,n){return e==="position"||e==="preserve-aspect"&&!nu(x0(t),x0(n),.2)}const X8=H2({attachResizeListener:(e,t)=>Ps(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),bl={current:void 0},Z8=H2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!bl.current){const e=new X8(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),bl.current=e}return bl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),q8={...Lx,...Q3,...Jx,...b8},Q=K5((e,t)=>P3(e,t,q8,y8,Z8));function W2(){const e=b.useRef(!1);return Nn(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function J8(){const e=W2(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>Ke.postRender(r),[r]),t]}class ew extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function tw({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:o,height:a,top:s,left:l}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),b.createElement(ew,{isPresent:t,childRef:r,sizeRef:i},b.cloneElement(e,{ref:r}))}const Cl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=Qn(nw),l=b.useId(),c=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u=>{s.set(u,!0);for(const d of s.values())if(!d)return;r&&r()},register:u=>(s.set(u,!1),()=>s.delete(u))}),o?void 0:[n]);return b.useMemo(()=>{s.forEach((u,d)=>s.set(d,!1))},[n]),b.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=b.createElement(tw,{isPresent:n},e)),b.createElement(Ji.Provider,{value:c},e)};function nw(){return new Map}const nr=e=>e.key||"";function rw(e,t){e.forEach(n=>{const r=nr(n);t.set(r,n)})}function iw(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Wn=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{i&&(a="wait",$3(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=J8();const l=b.useContext(md).forceRender;l&&(s=l);const c=W2(),u=iw(e);let d=u;const p=new Set,v=b.useRef(d),y=b.useRef(new Map).current,x=b.useRef(!0);if(Nn(()=>{x.current=!1,rw(u,y),v.current=d}),Td(()=>{x.current=!0,y.clear(),p.clear()}),x.current)return b.createElement(b.Fragment,null,d.map(m=>b.createElement(Cl,{key:nr(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:a},m)));d=[...d];const k=v.current.map(nr),g=u.map(nr),h=k.length;for(let m=0;m<h;m++){const w=k[m];g.indexOf(w)===-1&&p.add(w)}return a==="wait"&&p.size&&(d=[]),p.forEach(m=>{if(g.indexOf(m)!==-1)return;const w=y.get(m);if(!w)return;const C=k.indexOf(m),P=()=>{y.delete(m),p.delete(m);const E=v.current.findIndex(A=>A.key===m);if(v.current.splice(E,1),!p.size){if(v.current=u,c.current===!1)return;s(),r&&r()}};d.splice(C,0,b.createElement(Cl,{key:nr(w),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:o,mode:a},w))}),d=d.map(m=>{const w=m.key;return p.has(w)?m:b.createElement(Cl,{key:nr(m),isPresent:!0,presenceAffectsLayout:o,mode:a},m)}),b.createElement(b.Fragment,null,p.size?d:d.map(m=>b.cloneElement(m)))};function ow(e){const t=Qn(()=>Et(e)),{isStatic:n}=b.useContext(ks);if(n){const[,r]=b.useState(e);b.useEffect(()=>t.on("change",r),[])}return t}const aw=e=>typeof e=="object"&&e.mix,sw=e=>aw(e)?e.mix:void 0;function lw(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=Dd(i,o,{mixer:sw(o[0]),...a});return t?s(r):s}function cw(e,t,n){Nn(()=>{const r=e.map(i=>i.on("change",t));return()=>{r.forEach(i=>i()),n()}})}function uw(e,t){const n=ow(t()),r=()=>n.set(t());return r(),cw(e,()=>Ke.update(r,!1,!0),()=>Zt.update(r)),n}function dw(e,t,n,r){const i=typeof t=="function"?t:lw(t,n,r);return Array.isArray(e)?j0(e,i):j0([e],([o])=>i(o))}function j0(e,t){const n=Qn(()=>[]);return uw(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}const fw=(e,t,n)=>Math.min(Math.max(n,e),t),Ud=e=>typeof e=="number",pw=e=>Array.isArray(e)&&!Ud(e[0]),hw=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e};function mw(e,t){return pw(e)?e[hw(0,e.length,t)]:e}const Y2=(e,t,n)=>-n*e+n*t+e,G2=e=>e,Wd=(e,t,n)=>t-e===0?1:(n-e)/(t-e);function K2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Wd(0,t,r);e.push(Y2(n,1,i))}}function Q2(e){const t=[0];return K2(t,e-1),t}function gw(e,t=Q2(e.length),n=G2){const r=e.length,i=r-t.length;return i>0&&K2(t,i),o=>{let a=0;for(;a<r-2&&!(o<t[a+1]);a++);let s=fw(0,1,Wd(t[a],t[a+1],o));return s=mw(n,a)(s),Y2(e[a],e[a+1],s)}}const X2=e=>typeof e=="function",Z2=e=>typeof e=="string";function vw(e,t){return t?e*(1e3/t):0}function yw(e,t){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}function xw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const Qo=new WeakMap;let nn;function ww(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function Sw({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Qo.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return ww(e,n)}})})}function kw(e){e.forEach(Sw)}function bw(){typeof ResizeObserver>"u"||(nn=new ResizeObserver(kw))}function Cw(e,t){nn||bw();const n=yw(e);return n.forEach(r=>{let i=Qo.get(r);i||(i=new Set,Qo.set(r,i)),i.add(t),nn==null||nn.observe(r)}),()=>{n.forEach(r=>{const i=Qo.get(r);i==null||i.delete(t),i!=null&&i.size||nn==null||nn.unobserve(r)})}}const Xo=new Set;let Ci;function Tw(){Ci=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Xo.forEach(n=>n(t))},window.addEventListener("resize",Ci)}function Pw(e){return Xo.add(e),Ci||Tw(),()=>{Xo.delete(e),!Xo.size&&Ci&&(Ci=void 0)}}function Ew(e,t){return X2(e)?Pw(e):Cw(e,t)}const jw=50,A0=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Aw=()=>({time:0,x:A0(),y:A0()}),zw={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function z0(e,t,n,r){const i=n[t],{length:o,position:a}=zw[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Wd(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>jw?0:vw(i.current-s,c)}function Lw(e,t,n){z0(e,"x",t,n),z0(e,"y",t,n),t.time=n}function Mw(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){const{top:i,left:o}=r.getBBox();for(n.x+=o,n.y+=i;r&&r.tagName!=="svg";)r=r.parentNode}return n}const Iw={All:[[0,0],[1,1]]},lu={start:0,center:.5,end:1};function L0(e,t,n=0){let r=0;if(lu[e]!==void 0&&(e=lu[e]),Z2(e)){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return Ud(e)&&(r=t*e),n+r}const Rw=[0,0];function Ow(e,t,n,r){let i=Array.isArray(e)?e:Rw,o=0,a=0;return Ud(e)?i=[e,e]:Z2(e)&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,lu[e]?e:"0"]),o=L0(i[0],n,r),a=L0(i[1],t),o-a}const _w={x:0,y:0};function Dw(e,t,n){let{offset:r=Iw.All}=n;const{target:i=e,axis:o="y"}=n,a=o==="y"?"height":"width",s=i!==e?Mw(i,e):_w,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:i.clientWidth,height:i.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const d=r.length;for(let p=0;p<d;p++){const v=Ow(r[p],c[a],l[a],s[o]);!u&&v!==t[o].interpolatorOffsets[p]&&(u=!0),t[o].offset[p]=v}u&&(t[o].interpolate=gw(Q2(d),t[o].offset),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function Vw(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Nw(e,t,n,r={}){const i=r.axis||"y";return{measure:()=>Vw(e,r.target,n),update:o=>{Lw(e,n,o),(r.offset||r.target)&&Dw(e,n,r)},notify:X2(t)?()=>t(n):$w(t,n[i])}}function $w(e,t){return e.pause(),e.forEachNative((n,{easing:r})=>{var i,o;if(n.updateDuration)r||(n.easing=G2),n.updateDuration(1);else{const a={duration:1e3};r||(a.easing="linear"),(o=(i=n.effect)===null||i===void 0?void 0:i.updateTiming)===null||o===void 0||o.call(i,a)}}),()=>{e.currentTime=t.progress}}const ni=new WeakMap,M0=new WeakMap,Tl=new WeakMap,I0=e=>e===document.documentElement?window:e;function Fw(e,t={}){var{container:n=document.documentElement}=t,r=xw(t,["container"]);let i=Tl.get(n);i||(i=new Set,Tl.set(n,i));const o=Aw(),a=Nw(n,e,o,r);if(i.add(a),!ni.has(n)){const c=()=>{const d=performance.now();for(const p of i)p.measure();for(const p of i)p.update(d);for(const p of i)p.notify()};ni.set(n,c);const u=I0(n);window.addEventListener("resize",c,{passive:!0}),n!==document.documentElement&&M0.set(n,Ew(n,c)),u.addEventListener("scroll",c,{passive:!0})}const s=ni.get(n),l=requestAnimationFrame(s);return()=>{var c;typeof e!="function"&&e.stop(),cancelAnimationFrame(l);const u=Tl.get(n);if(!u||(u.delete(a),u.size))return;const d=ni.get(n);ni.delete(n),d&&(I0(n).removeEventListener("scroll",d),(c=M0.get(n))===null||c===void 0||c(),window.removeEventListener("resize",d))}}const Bw=()=>({scrollX:Et(0),scrollY:Et(0),scrollXProgress:Et(0),scrollYProgress:Et(0)});function Hw({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Qn(Bw);return(n?Nn:b.useEffect)(()=>Fw(({x:a,y:s})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(s.current),i.scrollYProgress.set(s.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),[]),i}function Uw(){!Hd.current&&O2();const[e]=b.useState(Va.current);return e}const Ww=S.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.$scrolled?"0.8rem":"var(--space-lg)"} 5%;
  position: sticky;
  top: 0;
  background: var(--white);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: ${e=>e.$scrolled?"0 4px 24px var(--shadow-medium)":"0 2px 20px var(--shadow-light)"};
  transition: all 0.3s ease;
`,Yw=S.div`
  display: flex;
  align-items: center;
  font-size: clamp(1.25rem, 2.5vw, 1.8rem);
  font-weight: 700;
  color: var(--primary-blue);
  cursor: default;
`,Gw=S.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--secondary-blue);
  border-radius: 50%;
  margin-left: 4px;
  animation: pulse 2s infinite;
`,Kw=S.nav`
  @media (max-width: 768px) {
    display: none;
  }
`,Qw=S.ul`
  display: flex;
  gap: var(--space-xl);
  list-style: none;
`,Xw=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  @media (max-width: 768px) {
    display: none;
  }
`,q2=S.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid var(--surface-outline);
  background: var(--surface-card);
  color: var(--accent-primary);
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px var(--shadow-light);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px var(--shadow-medium);
  }
`,Zw=S.a`
  position: relative;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-gray);
  text-decoration: none;
  padding: var(--space-sm) 0;
  transition: color 0.3s ease;
  outline: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--primary-blue),
      var(--secondary-blue)
    );
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    color: var(--primary-blue);
  }

  &:focus-visible {
    color: var(--primary-blue);
  }

  &:focus-visible::after {
    width: 100%;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`,qw=S.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,Pl=S.span`
  display: block;
  width: 25px;
  height: 2px;
  background: var(--primary-blue);
  margin: 5px 0;
  transition: all 0.3s ease;
`,Jw=S(Q.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: var(--surface-card);
  box-shadow: -5px 0 20px var(--shadow-medium);
  padding: 5rem clamp(1.25rem, 6vw, 2rem);
  z-index: 1000;
  will-change: transform;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  html[data-theme='dark'] & {
    background: rgba(10, 18, 34, 0.96);
    box-shadow: -5px 0 28px rgba(3, 8, 20, 0.6);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,e7=S(Q.div)`
  position: fixed;
  inset: 0;
  background: rgba(3, 8, 20, 0.45);
  backdrop-filter: blur(4px);
  z-index: 900;
`,t7=S.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  flex: 1;
  margin: 0;
  padding: 0;
`,n7=S.a`
  display: block;
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-gray);
  text-decoration: none;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid rgba(58, 123, 213, 0.1);
  transition: all 0.3s ease;
  outline: none;

  &:hover,
  &.active {
    color: var(--primary-blue);
    padding-left: var(--space-md);
  }

  &:focus-visible {
    color: var(--primary-blue);
    padding-left: var(--space-md);
  }
`,r7=S.div`
  margin-top: auto;
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(58, 123, 213, 0.14);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
`,i7=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  span:first-child {
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(94, 112, 148, 0.82);
  }

  span:last-child {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--text-primary);
  }

  html[data-theme='dark'] & span:first-child {
    color: rgba(197, 210, 245, 0.72);
  }
`,o7=S(q2)`
  width: 44px;
  height: 44px;
  border-width: 1.5px;
`,a7=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState("home"),[i,o]=b.useState(null),a=ce.useRef(null),s=ce.useRef(null),[l,c]=b.useState(!1),{theme:u,toggleTheme:d}=n5(),p=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"resume",label:"Resume"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}];b.useEffect(()=>{const k=()=>{c(window.scrollY>12);const g=p.map(m=>document.getElementById(m.id)).filter(Boolean),h=window.pageYOffset+200;for(const m of g){const w=m.offsetTop,C=m.clientHeight;if(h>=w&&h<w+C){r(m.id);break}}};return window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)},[]);const v=()=>{t(k=>!k)},y=()=>{t(!1)};b.useEffect(()=>{const k=()=>{window.innerWidth>768&&e&&t(!1)};return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[e]);const x=k=>{const g=document.getElementById(k);if(y(),g){const h=l?64:80,m=g.offsetTop-h-20;requestAnimationFrame(()=>{window.scrollTo({top:m<0?0:m,left:0,behavior:"smooth"})})}};return b.useEffect(()=>{if(e){o(document.activeElement);const k=a.current;if(!k)return;const g=window.scrollY||document.documentElement.scrollTop;window.scrollTo({top:g,left:0,behavior:"auto"}),document.documentElement.scrollLeft=0,document.body.scrollLeft=0;const h=document.body.style.overflow,m=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const C=Array.from(k.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')),P=C[0],E=C[C.length-1];P&&P.focus();const A=D=>{D.key==="Escape"&&(D.preventDefault(),y(),s.current&&s.current.focus()),D.key==="Tab"&&C.length>0&&(D.shiftKey&&document.activeElement===P?(D.preventDefault(),E.focus()):!D.shiftKey&&document.activeElement===E&&(D.preventDefault(),P.focus()))};return document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A),document.body.style.overflow=h,document.documentElement.style.overflow=m,document.documentElement.scrollLeft=0,document.body.scrollLeft=0,i&&i.focus&&i.focus()}}},[e,i]),f.jsxs(Ww,{$scrolled:l,children:[f.jsxs(Yw,{children:[f.jsx("span",{children:"Denis"}),f.jsx(Gw,{})]}),f.jsx(Kw,{children:f.jsx(Qw,{children:p.map(k=>f.jsx("li",{children:f.jsx(Zw,{href:`#${k.id}`,className:n===k.id?"active":"",onClick:g=>{g.preventDefault(),x(k.id)},children:k.label})},k.id))})}),f.jsx(Xw,{children:f.jsx(q2,{onClick:d,"aria-label":`Activate ${u==="light"?"dark":"light"} theme`,title:`Switch to ${u==="light"?"dark":"light"} mode`,children:u==="light"?f.jsx(Cp,{size:16}):f.jsx(Tp,{size:16})})}),f.jsxs(qw,{onClick:v,"aria-label":"Toggle mobile navigation","aria-haspopup":"menu","aria-expanded":e,"aria-controls":"mobile-navigation",ref:s,children:[f.jsx(Pl,{}),f.jsx(Pl,{}),f.jsx(Pl,{})]}),f.jsx(Wn,{children:e&&f.jsxs(f.Fragment,{children:[f.jsx(e7,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25,ease:"easeInOut"},onClick:y}),f.jsxs(Jw,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.35,ease:[.22,.61,.36,1]},id:"mobile-navigation",role:"dialog","aria-modal":"true","aria-label":"Site navigation",ref:a,children:[f.jsx(t7,{children:p.map(k=>f.jsx("li",{children:f.jsx(n7,{href:`#${k.id}`,className:n===k.id?"active":"",onClick:g=>{g.preventDefault(),x(k.id)},children:k.label})},k.id))}),f.jsxs(r7,{children:[f.jsxs(i7,{children:[f.jsx("span",{children:"Theme"}),f.jsx("span",{children:u==="light"?"Light mode":"Dark mode"})]}),f.jsx(o7,{onClick:d,"aria-label":`Activate ${u==="light"?"dark":"light"} theme`,title:`Switch to ${u==="light"?"dark":"light"} mode`,children:u==="light"?f.jsx(Cp,{size:16}):f.jsx(Tp,{size:16})})]})]})]})})]})};function s7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"}}]})(e)}function l7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"}}]})(e)}function c7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"}}]})(e)}function u7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"}}]})(e)}function d7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"}}]})(e)}function f7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"}}]})(e)}function p7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"}}]})(e)}function h7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(e)}function m7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"}}]})(e)}function g7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z"}}]})(e)}function v7(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(e)}function J2(e){return F({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"}}]})(e)}const y7=S.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: clamp(var(--space-lg), 7vw, var(--space-3xl));
  position: relative;
  background: var(--hero-gradient);
  overflow: hidden;

  /* Dark theme override */
  [data-theme="dark"] & {
    background: var(--hero-gradient);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(59, 130, 246, 0.08),
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(16, 185, 129, 0.06),
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(139, 92, 246, 0.05),
        transparent 50%
      );
    animation: floatBackground 12s ease-in-out infinite alternate;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
    z-index: 1;
  }

  /* Subtle shimmer in dark mode */
  [data-theme="dark"] &::after {
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.04) 50%, transparent 70%);
  }

  /* Spotlight cursor */
  .spotlight {
    pointer-events: none;
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px circle at var(--mx, 50%) var(--my, 50%),
      rgba(59, 130, 246, 0.12),
      transparent 40%
    );
    z-index: 2;
    transition: background-position 0.05s ease;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: var(--space-2xl) var(--space-md) var(--space-4xl);

    .spotlight {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: var(--space-xl) var(--space-sm) var(--space-3xl);
  }

  @keyframes floatBackground {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(1deg);
    }
    100% {
      transform: translateY(15px) rotate(-1deg);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,x7=S.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(0, 119, 255, 0.2);
  border-radius: 50%;
  top: ${e=>e.top};
  left: ${e=>e.left};
  animation: floatParticle ${e=>e.duration}s linear infinite;
  z-index: 1;

  @keyframes floatParticle {
    0%,
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-20px) scale(1.2);
      opacity: 0.6;
    }
  }
`,w7=S.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: clamp(1.5rem, 6vw, 3.5rem);
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 1100px) {
    max-width: var(--container-xl);
    gap: clamp(1.5rem, 5vw, 2.5rem);
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: clamp(1.75rem, 6vw, 2.5rem);
  }
`,S7=S.div`
  position: relative;
  width: clamp(180px, 26vw, 240px);
  height: clamp(180px, 26vw, 240px);
  flex-shrink: 0;

  @media (max-width: 540px) {
    width: clamp(150px, 45vw, 200px);
    height: clamp(150px, 45vw, 200px);
  }
`,k7=S.div`
  border-radius: 50%;
  padding: 5px;
  background: var(--accent-gradient);
  background-size: 300% 300%;
  animation: glowing 8s ease infinite;

  @keyframes glowing {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,b7=S.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  transition: transform 0.4s ease;
`,C7=S.div`
  flex: 1;
  max-width: 620px;
  padding: 0 clamp(0.5rem, 3.5vw, 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.4rem, 4vw, 2rem);
`,T7=S.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: var(--text-secondary);
`,P7=S.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 800;
  margin: var(--space-sm) 0;
  line-height: 1.1;
`,R0=S.span`
  display: block;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,E7=S.p`
  margin: 0;
  font-size: clamp(1.05rem, 2.6vw, 1.45rem);
  font-weight: 600;
  color: var(--text-secondary);
  min-height: auto;

  .accent {
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
`,j7=S.p`
  margin: 0;
  font-size: clamp(0.96rem, 2.1vw, 1.12rem);
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 36ch;

  strong {
    color: var(--primary-blue);
    font-weight: 600;
  }

  [data-theme='dark'] & strong {
    color: var(--secondary-blue);
  }

  @media (max-width: 992px) {
    margin-inline: auto;
  }
`,A7=S.div`
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-md);
  }
`,eg=S.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 0 10px rgba(0, 119, 255, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`,z7=S(eg)`
  background: var(--surface-card);
  border: 2px solid var(--surface-outline);
  color: var(--accent-primary);

  &:hover::after {
    background: rgba(255, 255, 255, 0.2);
    opacity: 1;
  }

  html[data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.88);
    color: var(--text-primary);
    border-color: rgba(108, 149, 255, 0.22);

    &:hover::after {
      background: rgba(108, 149, 255, 0.16);
    }
  }
`,L7=S(eg)`
  background: var(--accent-gradient);
  color: #ffffff;
  border: 2px solid transparent;

  &:hover::after {
    opacity: 0.2;
    opacity: 1;
  }
`,M7=S.div`
  display: flex;
  justify-content: center;
  gap: clamp(var(--space-md), 6vw, var(--space-lg));
  margin-top: var(--space-lg);
`,O0=S.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--surface-card);
  box-shadow: 0 2px 12px var(--shadow-light);
  color: var(--accent-primary);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 18px var(--shadow-medium);
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
  }
`;S.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.65rem, 2.2vw, 0.95rem);
  margin-top: clamp(0.8rem, 3vw, 1.4rem);
`;S(Q.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(
    120deg,
    rgba(58, 123, 213, 0.25),
    rgba(143, 92, 247, 0.18),
    rgba(28, 216, 255, 0.15)
  );
  color: var(--accent-primary);
  font-weight: 600;
  font-size: clamp(0.8rem, 2.2vw, 0.95rem);
  letter-spacing: 0.04em;
  border: 1px solid rgba(58, 123, 213, 0.25);
  backdrop-filter: blur(6px);

  [data-theme='dark'] & {
    background: linear-gradient(
      120deg,
      rgba(108, 149, 255, 0.22),
      rgba(28, 216, 255, 0.14),
      rgba(139, 92, 246, 0.18)
    );
    color: var(--secondary-blue);
    border-color: rgba(108, 149, 255, 0.28);
  }
`;const I7=S.div`
  margin-top: clamp(1.1rem, 3.2vw, 1.9rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-height: 860px) {
    display: none;
  }
`,R7=S(Q.div)`
  position: relative;
  padding: clamp(1.1rem, 3.2vw, 1.4rem);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(58, 123, 213, 0.18);
  box-shadow: 0 16px 32px rgba(15, 35, 95, 0.08);
  overflow: hidden;

  [data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.82);
    border-color: rgba(108, 149, 255, 0.22);
    box-shadow: 0 18px 36px rgba(6, 12, 25, 0.65);
  }

  h4 {
    font-size: clamp(1.6rem, 4vw, 2rem);
    font-weight: 800;
    color: var(--primary-blue);
    margin: 0;
  }

  p {
    margin: 0.15rem 0 0.45rem;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.04em;
  }

  span {
    font-size: 0.85rem;
    color: var(--text-secondary);
    opacity: 0.75;
  }
`,O7=Ss`
  0% {
    transform: scale(0.9);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.85;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.4;
  }
`,_7=S.span`
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at center,
    rgba(58, 123, 213, 0.22),
    rgba(255, 255, 255, 0)
  );
  animation: ${O7} 6.5s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.55;
`,D7=S(Q.pre)`
  margin-top: clamp(1.2rem, 3.5vw, 2.3rem);
  padding: clamp(1.2rem, 3.5vw, 1.6rem);
  background: rgba(1, 22, 56, 0.92);
  color: #e8f1ff;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(59, 130, 246, 0.25);
  box-shadow: 0 22px 38px rgba(6, 20, 65, 0.48);
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: clamp(0.75rem, 1.8vw, 0.9rem);
  line-height: 1.65;
  overflow-x: auto;
  position: relative;
  max-width: clamp(280px, 42vw, 360px);

  &:before {
    content: 'workflow.ts';
    position: absolute;
    top: 0.55rem;
    right: 1rem;
    font-size: 0.7rem;
    opacity: 0.45;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  code {
    display: block;
    white-space: pre;
  }

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-height: 860px) {
    display: none;
  }

  @media (max-width: 992px) {
    margin-inline: auto;
  }
`,V7=Ss`
  0% {
    transform: rotate(0deg) translateY(-4px);
  }
  50% {
    transform: rotate(180deg) translateY(6px);
  }
  100% {
    transform: rotate(360deg) translateY(-4px);
  }
`,N7=S(Q.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(42px, 5vw, 58px);
  height: clamp(42px, 5vw, 58px);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(58, 123, 213, 0.25);
  color: var(--accent-primary);
  box-shadow: 0 14px 30px rgba(0, 40, 120, 0.16);
  z-index: 3;
  animation: ${V7} ${e=>e.$orbit??14}s linear infinite;
  transform-origin: center;

  [data-theme='dark'] & {
    background: rgba(9, 16, 32, 0.85);
    border-color: rgba(108, 149, 255, 0.25);
    box-shadow: 0 18px 36px rgba(4, 10, 28, 0.6);
  }
`,$7=()=>{const[e,t]=b.useState({x:"50%",y:"50%"}),n=[{value:"12+",label:"Production launches",meta:"From fintech dashboards to civic platforms"},{value:"40%",label:"Performance gains",meta:"Average Lighthouse uplift after refactors"},{value:"8",label:"Hackathons & wins",meta:"Collaboration, rapid ideation & delivery"}],r=[{id:"code",icon:f.jsx(g5,{size:20}),top:"16%",left:"12%",orbit:18,delay:0},{id:"ts",icon:f.jsx(J2,{size:22}),top:"68%",left:"8%",orbit:22,delay:.4},{id:"next",icon:f.jsx(m7,{size:20}),top:"22%",right:"14%",orbit:16,delay:.2},{id:"rocket",icon:f.jsx(T5,{size:18}),top:"72%",right:"12%",orbit:20,delay:.6}],i=[{top:"22%",left:"28%",duration:9},{top:"66%",left:"32%",duration:12},{top:"18%",left:"72%",duration:10},{top:"74%",left:"58%",duration:7},{top:"42%",left:"86%",duration:9}];return f.jsxs(y7,{id:"home",onMouseMove:o=>{const a=o.currentTarget.getBoundingClientRect(),s=(o.clientX-a.left)/a.width*100,l=(o.clientY-a.top)/a.height*100;t({x:`${s}%`,y:`${l}%`})},style:{"--mx":e.x,"--my":e.y},children:[f.jsx("div",{className:"spotlight","aria-hidden":"true"}),i.map((o,a)=>f.jsx(x7,{...o},`particle-${a}`)),r.map(({id:o,icon:a,top:s,left:l,right:c,orbit:u,delay:d})=>f.jsx(N7,{style:{top:s,left:l,right:c},$orbit:u,initial:{opacity:0,scale:.8,y:10},animate:{opacity:1,scale:1,y:[0,-6,0]},transition:{duration:5,repeat:1/0,repeatType:"mirror",delay:d},"aria-hidden":"true",children:a},o)),f.jsxs(w7,{children:[f.jsx(S7,{children:f.jsx(k7,{children:f.jsx(b7,{src:"/assets/passport.jpg",alt:"Denis Mwanzia portrait",width:"260",height:"260",decoding:"async",fetchpriority:"high"})})}),f.jsx(C7,{children:f.jsxs(Q.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[f.jsx(T7,{children:"Hello, I'm"}),f.jsxs(P7,{children:[f.jsx(R0,{children:"Denis"}),f.jsx(R0,{children:"Mwanzia"})]}),f.jsxs(E7,{children:["Full-stack developer turning ideas into"," ",f.jsx("span",{className:"accent",children:"fast, inclusive, production-grade"})," products."]}),f.jsxs(j7,{children:["Focused on ",f.jsx("strong",{children:"developer velocity"}),", ",f.jsx("strong",{children:"experience design"}),", and resilient releases that make a measurable dent."]}),f.jsxs(A7,{children:[f.jsxs(z7,{href:"/assets/resume.pdf",download:!0,children:[f.jsx(Em,{})," Download CV"]}),f.jsx(L7,{href:"#contact",children:"🚀 Let's Connect"})]}),f.jsxs(M7,{children:[f.jsx(O0,{href:"https://www.linkedin.com/in/denis-mwanzia",target:"_blank",children:f.jsx(Pm,{size:20})}),f.jsx(O0,{href:"https://github.com/Denis-Mwanzia",target:"_blank",children:f.jsx(Ta,{size:20})})]}),f.jsx(I7,{children:n.map(o=>f.jsxs(R7,{whileHover:{y:-6,rotateX:4},transition:{type:"spring",stiffness:180,damping:16},children:[f.jsx(_7,{}),f.jsx("h4",{children:o.value}),f.jsx("p",{children:o.label}),f.jsx("span",{children:o.meta})]},o.label))}),f.jsx(D7,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0,amount:.3},"aria-label":"Preview of Denis' workflow pseudo code",children:f.jsx("code",{children:`const denis = engineer({
  stack: ['React', 'Node', 'TypeScript', 'GraphQL'],
  ethos: ['ship fast', 'measure impact', 'delight users'],
  currently: 'Building dependable web apps at lightning pace',
});

denis.launch({ day: 'Today', focus: 'Developer Experience' });`})})]})})]})]})},F7=S.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`,B7=S(Q.div)`
  position: absolute;
  border-radius: 9999px;
  filter: blur(${e=>e.$blur||0}px);
  opacity: ${e=>e.$opacity||.2};
  background: radial-gradient(circle at 30% 30%, ${e=>e.$c1}, ${e=>e.$c2});

  @media (max-width: 768px) {
    display: none;
  }
`,Yd=({shapes:e=[],intensity:t=30})=>{const{scrollYProgress:n}=Hw(),r=Uw();return f.jsx(F7,{"aria-hidden":"true",children:e.map((i,o)=>{const a=(o%3===0?1:o%3===1?-.6:.35)*t,s=r?0:dw(n,[0,1],[a*-1,a]);return f.jsx(B7,{style:{y:s,top:i.top,left:i.left,width:i.size,height:i.size},$c1:i.color1||"rgba(59,130,246,0.35)",$c2:i.color2||"rgba(16,185,129,0.15)",$blur:i.blur||24,$opacity:i.opacity||.25},o)})})};var cu=new Map,Ao=new WeakMap,_0=0,H7=void 0;function U7(e){return e?(Ao.has(e)||(_0+=1,Ao.set(e,_0.toString())),Ao.get(e)):"0"}function W7(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?U7(e.root):e[t]}`).toString()}function Y7(e){const t=W7(e);let n=cu.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(a=>{a.forEach(s=>{var l;const c=s.isIntersecting&&i.some(u=>s.intersectionRatio>=u);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(l=r.get(s.target))==null||l.forEach(u=>{u(c,s)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},cu.set(t,n)}return n}function G7(e,t,n={},r=H7){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:o,elements:a}=Y7(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),cu.delete(i))}}function zs({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:c}={}){var u;const[d,p]=b.useState(null),v=b.useRef(c),[y,x]=b.useState({inView:!!s,entry:void 0});v.current=c,b.useEffect(()=>{if(a||!d)return;let m;return m=G7(d,(w,C)=>{x({inView:w,entry:C}),v.current&&v.current(w,C),C.isIntersecting&&o&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,d,i,r,o,a,n,l,t]);const k=(u=y.entry)==null?void 0:u.target,g=b.useRef(void 0);!d&&k&&!o&&!a&&g.current!==k&&(g.current=k,x({inView:!!s,entry:void 0}));const h=[p,y.inView,y.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const K7=S.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
  background: var(--section-surface);
`,Q7=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
  text-align: center;
  color: var(--text-secondary);
`,X7=S.h3`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  margin-bottom: var(--space-md);
  background: linear-gradient(90deg, #0077ff, #00c6ff, #0077ff);
  background-size: 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 5s infinite linear;

  @keyframes gradientShift {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
`,Z7=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
`,El=S(Q.div)`
  background: var(--surface-card);
  padding: 1.8rem;
  border-radius: var(--radius-xl);
  box-shadow: 0 12px 28px var(--shadow-light);
  border: 1px solid var(--surface-outline);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    background: var(--surface-card-hover);
    box-shadow: 0 16px 36px var(--shadow-medium);
  }
`,jl=S.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: var(--primary-blue);
`,Al=S.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-gray);
`,rt=S.span`
  color: var(--primary-blue);
  font-weight: 600;
`,q7=S.div`
  margin-top: clamp(2.5rem, 6vw, 4.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 4vw, 2.75rem);
`,J7=S.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(40px, 8vw, 80px);
    pointer-events: none;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, var(--section-surface), rgba(255, 255, 255, 0));
    [data-theme='dark'] & {
      background: linear-gradient(90deg, rgba(9, 16, 32, 1), rgba(9, 16, 32, 0));
    }
  }

  &::after {
    right: 0;
    background: linear-gradient(-90deg, var(--section-surface), rgba(255, 255, 255, 0));
    [data-theme='dark'] & {
      background: linear-gradient(-90deg, rgba(9, 16, 32, 1), rgba(9, 16, 32, 0));
    }
  }
`,e9=Ss`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,t9=Ss`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`,n9=S.div`
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 2.75rem);
  min-width: 200%;
  animation: ${e=>e.$reverse?t9:e9}
    ${e=>e.$duration||32}s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 640px) {
    gap: clamp(1.1rem, 5vw, 1.6rem);
  }

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transform: translateX(0) !important;
  }
`,r9=S(Q.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  min-width: clamp(80px, 10vw, 120px);
  padding: clamp(0.85rem, 2.6vw, 1.25rem);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(58, 123, 213, 0.18);
  box-shadow: 0 10px 22px rgba(30, 64, 175, 0.08);
  color: var(--primary-blue);
  text-align: center;
  backdrop-filter: blur(6px);

  span {
    font-size: clamp(0.7rem, 1.8vw, 0.85rem);
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.03em;
  }

  [data-theme='dark'] & {
    background: rgba(10, 18, 34, 0.72);
    border-color: rgba(108, 149, 255, 0.25);
    box-shadow: 0 10px 22px rgba(12, 22, 39, 0.55);

    span {
      color: rgba(226, 236, 255, 0.92);
    }
  }
`,i9=S.span`
  font-size: clamp(1.75rem, 5vw, 2.4rem);
  filter: drop-shadow(0 8px 16px rgba(58, 123, 213, 0.18));
`,o9=S.span``,a9=()=>{const[e,t]=zs({threshold:.1,triggerOnce:!0}),n={hidden:{opacity:0,y:30},visible:i=>({opacity:1,y:0,transition:{duration:.6,delay:i*.2}})},r=[{duration:32,reverse:!1,icons:[{Icon:p7,label:"JavaScript"},{Icon:J2,label:"TypeScript"},{Icon:f5,label:"Python"},{Icon:l5,label:"HTML5"},{Icon:a5,label:"CSS3"},{Icon:f7,label:"GraphQL"},{Icon:s7,label:"C"},{Icon:l7,label:"C++"},{Icon:d7,label:"Go"},{Icon:g7,label:"Ruby"},{Icon:d5,label:"PHP"}]},{duration:36,reverse:!0,icons:[{Icon:p5,label:"React"},{Icon:u5,label:"Node.js"},{Icon:u7,label:"Express"},{Icon:h7,label:"MongoDB"},{Icon:v7,label:"Tailwind"},{Icon:c7,label:"Django"},{Icon:s5,label:"Git"}]}];return f.jsxs(K7,{id:"about",children:[f.jsx(Yd,{shapes:[{size:"240px",top:"5%",left:"10%",color1:"rgba(0,119,255,0.25)",color2:"rgba(0,198,255,0.12)",blur:40,opacity:.25},{size:"320px",top:"60%",left:"75%",color1:"rgba(16,185,129,0.22)",color2:"rgba(0,119,255,0.12)",blur:50,opacity:.22},{size:"180px",top:"75%",left:"15%",color1:"rgba(139,92,246,0.25)",color2:"rgba(59,130,246,0.12)",blur:38,opacity:.22}],intensity:26}),f.jsxs(Q7,{children:[f.jsx(X7,{children:"About Me"}),f.jsxs(Z7,{ref:e,children:[f.jsxs(El,{variants:n,initial:"hidden",animate:t?"visible":"hidden",custom:0,children:[f.jsx(jl,{children:"👨‍💻 Who I Am"}),f.jsxs(Al,{children:["I’m a"," ",f.jsx(rt,{children:"Full-Stack Web Developer & IT Specialist"})," ","from Kenya with a",f.jsx(rt,{children:" BSc in Information Technology"})," from Kabarak University. I love transforming complex ideas into"," ",f.jsx(rt,{children:"fast, secure, and scalable applications"}),"."]})]}),f.jsxs(El,{variants:n,initial:"hidden",animate:t?"visible":"hidden",custom:1,children:[f.jsx(jl,{children:"⚡ What I Do"}),f.jsxs(Al,{children:["Started with ",f.jsx(rt,{children:"Django"})," & the web fundamentals (",f.jsx(rt,{children:"HTML, CSS, JS"}),"), now I specialize in the",f.jsx(rt,{children:" MERN stack"})," through a"," ",f.jsx(rt,{children:"software engineering scholarship"})," at PLP Academy, focusing on ",f.jsx(rt,{children:"clean architecture"}),","," ",f.jsx(rt,{children:"performance"})," &"," ",f.jsx(rt,{children:"accessibility"}),"."]})]}),f.jsxs(El,{variants:n,initial:"hidden",animate:t?"visible":"hidden",custom:2,children:[f.jsx(jl,{children:"🎯 Why I Do It"}),f.jsxs(Al,{children:["My goal is to create"," ",f.jsx(rt,{children:"impactful digital solutions"})," that solve real-world problems. I thrive in"," ",f.jsx(rt,{children:"collaborative environments"}),", value"," ",f.jsx(rt,{children:"continuous learning"}),", and enjoy exploring Nairobi’s tech scene when I’m not coding."]})]})]}),f.jsx(q7,{children:r.map(({icons:i,reverse:o,duration:a},s)=>{const l=[...i,...i];return f.jsx(J7,{"aria-hidden":"false",children:f.jsx(n9,{$reverse:o,$duration:a,children:l.map(({Icon:c,label:u},d)=>f.jsxs(r9,{whileHover:{scale:1.15,rotate:o?-1.5:1.5},whileTap:{scale:.95},transition:{type:"spring",stiffness:260,damping:18},children:[f.jsx(i9,{"aria-hidden":"true",children:f.jsx(c,{})}),f.jsx(o9,{children:u})]},`${u}-${d}`))})},s)})})]})]})},s9=S.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
`,l9=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,c9=S.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`,u9=S.h3`
  font-size: clamp(2rem, 6vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    var(--primary-blue) 0%,
    var(--secondary-blue) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 1px;
`,d9=S.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--medium-gray);
  position: relative;
  padding-bottom: var(--space-md);
`,f9=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(1rem, 3vw, 2rem);
  margin-bottom: clamp(3rem, 8vw, 6rem);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`,p9=S.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
  font-size: clamp(1rem, 2.5vw, 1.18rem);
  font-weight: 600;
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 2rem);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--white);
  color: var(--text-gray);
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.5s ease;
  }

  &.active {
    color: var(--white);
    background: linear-gradient(
      135deg,
      var(--primary-blue),
      var(--secondary-blue)
    );
    border-color: var(--primary-blue);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }

  &.active::before {
    display: none;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: rgba(59, 130, 246, 0.3);
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
`,h9=S.div`
  position: relative;
  width: 100%;
  justify-content: center;
  margin-bottom: var(--space-xl);
  padding-top: 1rem;
`,zl=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3rem, 8vw, 8rem);
  width: 100%;
  max-width: 800px;
  margin: 2rem auto 0;

  @media (max-width: 992px) {
    gap: var(--space-xl);
    margin-top: 1.5rem;
  }
`,Ll=S.div`
  background: var(--accent-primary);
  width: 2px;
  height: auto;
  min-height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 992px) {
    display: none;
  }
`,Ml=S.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 120px;

  &::before {
    content: '';
    position: absolute;
    background: var(--accent-primary);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    z-index: 2;
    border: 3px solid var(--surface-card);
    box-shadow: 0 2px 10px var(--shadow-light);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 992px) {
      display: none;
    }
  }
`,Il=S(Q.div)`
  position: absolute;
  width: clamp(280px, 42vw, 360px);
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  background: var(--surface-card);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--surface-outline);
  box-shadow: 0 12px 28px var(--shadow-light);
  transition: all 0.3s ease;
  z-index: 1;

  &.left {
    right: calc(50% + 2.5rem);
    text-align: left;
  }

  &.right {
    left: calc(50% + 2.5rem);
    text-align: left;
  }

  &:hover {
    transform: translateY(-3px);
    background: var(--surface-card-hover);
    box-shadow: 0 16px 32px var(--shadow-medium);
  }

  @media (max-width: 992px) {
    position: static !important;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`,Rl=S.div`
  color: var(--accent-primary);
  font-size: clamp(1.5rem, 4vw, 2.15rem);
  flex-shrink: 0;
`,Ol=S.div`
  flex: 1;
`,_l=S.h5`
  color: var(--text-primary);
  font-size: clamp(1rem, 2.5vw, 1.13rem);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  line-height: 1.3;
`,Dl=S.p`
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 2vw, 1.07rem);
  margin-bottom: var(--space-md);
  line-height: 1.4;
`,Vl=S.span`
  background: var(--chip-bg);
  color: var(--accent-primary);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-weight: 500;
`,m9=S.div`
  margin-top: var(--space-sm);
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: 'Courier New', monospace;
  background: var(--surface-glass);
  padding: var(--space-xs);
  border-radius: var(--radius-sm);
  display: inline-block;
`,g9=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
`,v9=S.span`
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-size: 0.7rem;
  padding: 2px var(--space-xs);
  border-radius: var(--radius-sm);
  font-weight: 500;

  html[data-theme='light'] & {
    background: rgba(58, 123, 213, 0.12);
    color: var(--accent-primary);
  }
`,y9=S(Q.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`,x9=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
`,w9=S(Q.div)`
  position: relative;
  background-color: var(--surface-card);
  border-radius: var(--radius-xl);
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  box-shadow: 0 20px 45px var(--shadow-medium);
  border: 1px solid var(--surface-outline);
  z-index: 1001;
  overflow: hidden;
`,S9=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--surface-card-hover);
  border-bottom: 1px solid var(--surface-outline);
`,k9=S.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`,b9=S.div`
  display: flex;
  gap: 0.5rem;
`,D0=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &.download {
    background: var(--accent-gradient);
    color: #fff;

    &:hover {
      filter: brightness(1.05);
    }
  }

  &.close {
    background: var(--surface-card);
    color: var(--text-primary);
    border: 1px solid var(--surface-outline);

    &:hover {
      background: var(--surface-card-hover);
      color: var(--accent-primary);
    }
  }
`,C9=S.div`
  width: 100%;
  height: 70vh;
  min-height: 500px;
  position: relative;
`,T9=S.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
`,P9=S.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: var(--space-sm);
  padding: 0.5rem 1rem;
  background: var(--accent-gradient);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }
`,E9=S.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 4vw, 2.5rem);
  padding: var(--space-lg);
  place-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,j9=S.div`
  position: relative;
  background: var(--accent-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: clamp(2rem, 5vw, 2.5rem);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 420px;
  min-height: 380px;
  box-shadow: 0 18px 40px rgba(58, 123, 213, 0.35);
  color: #ffffff;
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 26px 55px rgba(58, 123, 213, 0.45);
  }

  @media (max-width: 480px) {
    min-height: 320px;
    padding: var(--space-xl);
  }
`,A9=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
`,z9=S.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #fff;
`,L9=S.span`
  color: var(--white);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  text-align: center;
`,M9=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: clamp(0.75rem, 2.5vw, 1rem);
  width: 100%;
  align-items: start;
  justify-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: var(--space-sm);
  }
`,I9=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease, border 0.3s ease;
  width: 100%;
  min-height: 52px;

  &:hover {
    background: rgba(255, 255, 255, 0.26);
    border-color: rgba(255, 255, 255, 0.45);
    transform: translateY(-2px);
  }

  html[data-theme='light'] & {
    background: var(--surface-card);
    border: 1px solid var(--surface-outline);
    color: var(--text-secondary);
    box-shadow: 0 6px 18px var(--shadow-light);

    &:hover {
      background: var(--surface-card-hover);
      border-color: rgba(58, 123, 213, 0.15);
    }
  }
`,R9=S.div`
  color: #ffffff;
  font-size: 1rem;
  flex-shrink: 0;

  html[data-theme='light'] & {
    color: var(--accent-primary);
  }
`,O9=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  width: 100%;
`,_9=S.h5`
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  font-weight: 600;
  color: inherit;
  white-space: normal;
  overflow-wrap: anywhere;
`,D9=S.span`
  font-size: clamp(0.8rem, 2.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.8);

  html[data-theme='light'] & {
    color: var(--text-secondary);
  }
`,V9=()=>{const[e,t]=b.useState(0),[n,r]=b.useState(null),[i]=zs({threshold:.1,triggerOnce:!0}),o=[{id:"education",label:"Education",icon:tr},{id:"certifications",label:"Certifications",icon:er},{id:"skills",label:"Personal Skills",icon:j5},{id:"experience",label:"Resume",icon:dl}],a=[{title:"Bachelor Of Science in Information Technology",subtitle:"Kabarak University",date:"2017-2023",icon:tr},{title:"SQL Training Certificate",subtitle:"Learnomate Technologies Pvt Ltd",date:"2024-2024",icon:tr},{title:"Cybersecurity and Emerging Technologies Awareness Training Certificate",subtitle:"ICT Authority Smart Academy",date:"2024-2024",icon:tr},{title:"Software Development",subtitle:"Power Learn Project Academy",date:"2025-Present",icon:tr},{title:"AI Literacy Certified Course",subtitle:"Otermans Institute",date:"2025-2025",icon:tr}],s=[{title:"Network Technician",subtitle:"Tabasamu Fiber Networks Limited",date:"2023-2023",icon:dl},{title:"Freelancer Web Developer & Networking Consultancy",subtitle:"Self-Employed",date:"2023-Present",icon:dl}],l=[{title:"SQL Training Certificate",subtitle:"Learnomate Technologies Pvt Ltd",date:"2024",icon:er,credentialId:"SQL-2024-001",issuer:"Learnomate Technologies",skills:["SQL","Database Management","Data Analysis"],pdfUrl:"/assets/certificates/sql-certificate.pdf",description:"Comprehensive SQL training covering database design, query optimization, and data analysis techniques."},{title:"Cybersecurity and Emerging Technologies Awareness Training",subtitle:"ICT Authority Smart Academy",date:"2024",icon:er,credentialId:"CYBER-2024-002",issuer:"ICT Authority Kenya",skills:["Cybersecurity","Network Security","Emerging Technologies"],pdfUrl:"/assets/certificates/cybersecurity-certificate.pdf",description:"Advanced training in cybersecurity fundamentals, threat assessment, and emerging technology security protocols."},{title:"AI Literacy Certified Course",subtitle:"Otermans Institute",date:"2025",icon:er,credentialId:"OIAI25-ER35KX",issuer:"Otermans Institute",skills:["AI Literacy","Artificial Intelligence","Machine Learning","AI Ethics"],pdfUrl:"/assets/certificates/OIAI25-ER35KX.pdf",description:"Comprehensive AI literacy program covering artificial intelligence fundamentals, machine learning concepts, and AI ethics in modern technology."},{title:"Full-Stack Development — MERN Track",subtitle:"Power Learn Project (PLP)",date:"2025",icon:er,issuer:"Power Learn Project Academy",skills:["React","Node.js","MongoDB","Express","REST APIs","DevOps Fundamentals"],pdfUrl:"/assets/certificates/denis%20Full-Stack%20Development%20MERN%20Stack%20certificate.pdf",description:"Intensive full-stack engineering training focused on building production-grade MERN applications with modern tooling and best practices."},{title:"ICT Graduate Trainee Certification",subtitle:"ICT Authority Smart Academy",date:"2024",icon:er,issuer:"ICT Authority Kenya",skills:["ICT Infrastructure","Networking","Digital Transformation","Professional Development"],pdfUrl:"/assets/certificates/ICT%20Graduate.pdf",description:"Professional certification from the ICT Authority graduate program covering enterprise ICT infrastructure, support operations, and digital transformation initiatives."}],c=[{title:"Front-End Developer",icon:jm,skills:[{name:"HTML",level:"Advanced"},{name:"CSS",level:"Advanced"},{name:"Tailwind CSS",level:"Intermediate"},{name:"JavaScript",level:"Intermediate"},{name:"React",level:"Basic"},{name:"Bootstrap",level:"Intermediate"}]},{title:"Back-End Developer",icon:Am,skills:[{name:"Django",level:"Intermediate"},{name:"Node.js",level:"Basic"},{name:"Express.js",level:"Basic"},{name:"MySQL",level:"Intermediate"},{name:"MongoDB",level:"Basic"},{name:"Restful APIs",level:"Intermediate"}]},{title:"Networking & IT Specialist",icon:S5,skills:[{name:"Network Installation & Troubleshooting"},{name:"MikroTik Configuration (Routing, Firewall, VPN)"},{name:"FTTH Installation & Splicing"},{name:"Linux & Windows Server Administration"}]},{title:"Tools & Technologies",icon:E5,skills:[{name:"Git & GitHub"},{name:"Docker & Virtualization"},{name:"Bash & PowerShell Scripting"},{name:"Cloud Computing (AWS)"}]}],u=()=>f.jsxs(zl,{children:[f.jsx(Ll,{}),a.map((h,m)=>f.jsx(Ml,{children:f.jsxs(Il,{className:m%2===0?"left":"right",initial:{opacity:0,y:20,scale:.98},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:"easeOut"},children:[f.jsx(Rl,{children:f.jsx(h.icon,{})}),f.jsxs(Ol,{children:[f.jsx(_l,{children:h.title}),f.jsx(Dl,{children:h.subtitle}),f.jsx(Vl,{children:h.date})]})]})},m))]}),d=()=>f.jsxs(zl,{children:[f.jsx(Ll,{}),s.map((h,m)=>f.jsx(Ml,{children:f.jsxs(Il,{className:m%2===0?"left":"right",initial:{opacity:0,y:20,scale:.98},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:"easeOut"},children:[f.jsx(Rl,{children:f.jsx(h.icon,{})}),f.jsxs(Ol,{children:[f.jsx(_l,{children:h.title}),f.jsx(Dl,{children:h.subtitle}),f.jsx(Vl,{children:h.date})]})]})},m))]}),p=h=>{r(h)},v=()=>{r(null)},y=h=>{const m=document.createElement("a");m.href=h.pdfUrl,m.download=`${h.title}.pdf`,m.target="_blank",document.body.appendChild(m),m.click(),document.body.removeChild(m)},x=()=>f.jsxs(zl,{children:[f.jsx(Ll,{}),l.map((h,m)=>f.jsx(Ml,{children:f.jsxs(Il,{className:m%2===0?"left":"right",initial:{opacity:0,y:20,scale:.98},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:"easeOut"},children:[f.jsx(Rl,{children:f.jsx(h.icon,{})}),f.jsxs(Ol,{children:[f.jsx(_l,{children:h.title}),f.jsx(Dl,{children:h.subtitle}),f.jsx(Vl,{children:h.date}),h.credentialId&&f.jsxs(m9,{children:["Credential ID: ",h.credentialId]}),h.skills&&f.jsx(g9,{children:h.skills.map((w,C)=>f.jsx(v9,{children:w},C))}),h.pdfUrl&&f.jsxs(P9,{onClick:()=>p(h),children:[f.jsx(x5,{}),"View Certificate"]})]})]})},m))]}),k=()=>f.jsx(E9,{children:c.map((h,m)=>f.jsxs(j9,{children:[f.jsxs(A9,{children:[f.jsx(z9,{children:f.jsx(h.icon,{})}),f.jsx(L9,{children:h.title})]}),f.jsx(M9,{children:h.skills.map((w,C)=>f.jsxs(I9,{children:[f.jsx(R9,{children:"✓"}),f.jsxs(O9,{children:[f.jsx(_9,{children:w.name}),w.level&&f.jsx(D9,{children:w.level})]})]},C))})]},m))}),g=[u(),x(),k(),d()];return f.jsx(s9,{id:"resume",children:f.jsxs(l9,{children:[f.jsxs(c9,{children:[f.jsx(u9,{children:"My Resume"}),f.jsx(d9,{children:"Combination of Education, Experience & Skills"})]}),f.jsx(f9,{children:o.map((h,m)=>f.jsxs(p9,{className:e===m?"active":"",onClick:()=>t(m),children:[f.jsx(h.icon,{}),h.label]},h.id))}),f.jsx(h9,{ref:i,children:f.jsx(Wn,{mode:"wait",children:f.jsx(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:g[e]},e)})}),f.jsx(Wn,{children:n&&f.jsxs(y9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[f.jsx(x9,{onClick:v}),f.jsxs(w9,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{duration:.3},children:[f.jsxs(S9,{children:[f.jsx(k9,{children:n.title}),f.jsxs(b9,{children:[f.jsxs(D0,{className:"download",onClick:()=>y(n),children:[f.jsx(Em,{}),"Download"]}),f.jsxs(D0,{className:"close",onClick:v,children:[f.jsx(zm,{}),"Close"]})]})]}),f.jsx(C9,{children:f.jsx(T9,{src:`${n.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`,title:n.title,onError:()=>{window.open(n.pdfUrl,"_blank")}})})]})]})})]})})},N9=S.div`
  position: relative;
  overflow: hidden;
  background: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${e=>e.minHeight||"200px"};
`,$9=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>e.loaded?1:0};
`,F9=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,B9=({src:e,alt:t,minHeight:n,sizes:r,srcSet:i,width:o,height:a,decoding:s="async",...l})=>{const[c,u]=b.useState(!1),[d,p]=b.useState(!1),v=b.useRef();b.useEffect(()=>{const x=new IntersectionObserver(([k])=>{k.isIntersecting&&(p(!0),x.disconnect())},{threshold:.1});return v.current&&x.observe(v.current),()=>x.disconnect()},[]);const y=()=>{u(!0)};return f.jsxs(N9,{ref:v,minHeight:n,...l,children:[!c&&f.jsx(F9,{}),d&&f.jsx($9,{src:e,alt:t,loaded:c,onLoad:y,loading:"lazy",decoding:s,sizes:r,srcSet:i,width:o,height:a})]})},H9=[{id:"all",label:"All"},{id:"frontend",label:"FrontEnd"},{id:"ai",label:"AI & Machine Learning"},{id:"fullstack",label:"Fullstack"}],U9=[{id:"ai1",title:"Sentiment Analysis Of Customer Reviews",category:"ai",description:"This was part of my University Final Year Project where I trained AI models using both Naive Bayes and Support Vector Machine algorithms. The models achieved impressive accuracy rates of 89% and 94% respectively, demonstrating effective sentiment classification capabilities.",image:"/assets/aiSentiment.jpg",github:"https://github.com/Denis-Mwanzia/Mwananchi_Estore/tree/main/Sentiment_analysis_and_Recomender_system",live:null,date:"October 2023",technologies:["Python","Machine Learning","Naive Bayes","SVM","NLTK"]},{id:"fullstack2",title:"Mwananchi E-store",category:"fullstack",description:"A comprehensive e-commerce platform developed as part of my Final Year Project. This system was designed to integrate seamlessly with the sentiment analysis model, providing a complete solution for online retail with intelligent customer feedback processing.",image:"/assets/ecommerce.jpg",github:"https://github.com/Denis-Mwanzia/Mwananchi_Estore.git",live:null,date:"October 2023",technologies:["Django","Python","HTML","CSS","JavaScript","MySQL"]},{id:"fullstack1",title:"Tuko Maji",category:"fullstack",description:"Tuko Maji is a community-driven platform that empowers citizens to report water-related issues, enables verifiers to validate them, and equips technicians with tools to resolve them.",image:"/assets/tukomaji.png",github:"https://github.com/PLP-MERN-Stack-Development/week-8-capstone_-Denis-Mwanzia.git",live:"https://tukomaji-app.onrender.com/",date:"July 2023",technologies:["MongoDB","Express.js","React","Node.js","TypeScript","Tailwind CSS"]},{id:"frontend2",title:"Portfolio Website",category:"frontend",description:"A modern, responsive portfolio website showcasing creative work with smooth animations, interactive elements, and optimized performance. Built with vanilla HTML, CSS, and JavaScript, demonstrating mastery of fundamental web technologies.",image:"/assets/uiUx.jpg",github:"https://github.com/Denis-Mwanzia/PLP-Portfolio-Hackathon.git",live:"https://denismwanzia.netlify.app/",date:"January 2025",technologies:["HTML5","CSS3","JavaScript","Responsive Design"]},{id:"fullstack3",title:"Kitui Reforest AI",category:"fullstack",description:"A comprehensive environmental restoration platform for Kitui County featuring AI-powered species recommendations, GIS mapping with NDVI analysis, real-time weather integration, and community engagement tools. Built for the Land ReGen Hackathon 2025 with advanced climate intelligence and collaborative project tracking.",image:"/assets/kitui_AI.png",github:"https://github.com/Denis-Mwanzia/LandReGenHackathon2025.git",live:"https://kitui-reforest-ai.onrender.com/",date:"October 2025",technologies:["React","TypeScript","Tailwind CSS","Supabase","Leaflet Maps","AI Integration","OpenWeather API","PostgreSQL"]},{id:"ai2",title:"Kitui Reforest AI",category:"ai",description:"A comprehensive environmental restoration platform for Kitui County featuring AI-powered species recommendations, GIS mapping with NDVI analysis, real-time weather integration, and community engagement tools. Built for the Land ReGen Hackathon 2025 with advanced climate intelligence and collaborative project tracking.",image:"/assets/kitui_AI.png",github:"https://github.com/Denis-Mwanzia/LandReGenHackathon2025.git",live:"https://kitui-reforest-ai.onrender.com/",date:"October 2025",technologies:["React","TypeScript","Tailwind CSS","Supabase","Leaflet Maps","AI Integration","OpenWeather API","PostgreSQL"]}],W9=S.section`
  position: relative;
  padding: clamp(3rem, 8vw, 4rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
`,Y9=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,G9=S.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`,K9=S.h3`
  font-size: clamp(2rem, 6vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    var(--primary-blue) 0%,
    var(--secondary-blue) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 1px;
`,Q9=S.p`
  font-size: clamp(1rem, 2.5vw, 1.18rem);
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  font-weight: 500;
`,X9=S.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem);
  margin-bottom: clamp(2rem, 6vw, 3.5rem);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }
`,Z9=S(Q.button)`
  font-family: var(--font-main);
  font-size: clamp(0.9rem, 2.2vw, 1.18rem);
  font-weight: 500;
  color: var(--text-secondary);
  padding: clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: var(--surface-card);
  outline: none;
  box-shadow: 0 2px 10px var(--shadow-light);

  &:hover {
    color: var(--accent-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px var(--shadow-medium);
  }

  &.active {
    color: #fff;
    background: var(--accent-gradient);
    border-color: transparent;
    box-shadow: 0 6px 18px rgba(58, 123, 213, 0.35);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
`,q9=S.div`
  display: grid;
  position: relative;
  width: 100%;
  gap: clamp(1.5rem, 4vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: stretch;
  transition: all 0.3s ease;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,uu=S(Q.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--surface-outline);
  background: var(--surface-card);
  box-shadow: 0 10px 28px var(--shadow-light);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    border-color: rgba(59, 130, 246, 0.25);
    box-shadow: 0 16px 42px var(--shadow-medium);
  }
`,J9=S.div`
  position: relative;
  overflow: hidden;
  border-radius: calc(var(--radius-xl) - 1px) calc(var(--radius-xl) - 1px) 0 0;
  background: var(--surface-glass);
  min-height: clamp(130px, 20vw, 180px);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(6, 13, 25, 0) 35%,
      rgba(6, 13, 25, 0.55) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  ${uu}:hover &::after,
  ${uu}:focus-visible &::after {
    opacity: 0.8;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`,eS=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: clamp(0.85rem, 2vw, 1.15rem);
  flex: 1;
`,tS=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-sm);
`,nS=S.span`
  font-size: 0.7rem;
  color: var(--text-secondary);
  background: var(--surface-glass);
  border: 1px solid var(--surface-outline);
  border-radius: var(--radius-full);
  padding: 0.25rem 0.65rem;
  letter-spacing: 0.04em;
`,rS=S.span`
  color: var(--accent-primary);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,iS=S.h4`
  color: var(--text-primary);
  font-size: clamp(0.95rem, 2.3vw, 1.15rem);
  margin-bottom: 0.4rem;
  font-weight: 600;
  line-height: 1.35;
`,oS=S.p`
  font-size: clamp(0.8rem, 1.9vw, 0.9rem);
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,aS=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding: clamp(0.65rem, 2vw, 0.9rem) clamp(0.85rem, 2vw, 1rem);
  margin-top: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs);
  }
`,sS=S(Q.button)`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
  width: 100%;
    justify-content: space-between;
  }
`,lS=S.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);

  @media (max-width: 600px) {
    gap: var(--space-sm);
  }
`,V0=S(Q.a)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--surface-outline);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  background: var(--surface-glass);
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: var(--surface-card);
    color: var(--accent-primary);
    border-color: rgba(59, 130, 246, 0.3);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
  }
`,cS=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.15rem;
`,uS=S.span`
  display: inline-block;
  padding: 0.15rem 0.45rem;
  font-size: 0.68rem;
  border: 1px solid var(--badge-border);
  color: var(--text-secondary);
  border-radius: 999px;
  background: var(--badge-bg);
`,dS=S(Q.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 1.5rem);
  box-sizing: border-box;
`,fS=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
`,pS=S(Q.div)`
  position: relative;
  background-color: var(--surface-card);
  border-radius: var(--radius-2xl);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 45px var(--shadow-medium);
  border: 1px solid var(--surface-outline);
  backdrop-filter: blur(14px);
  z-index: 1001;
`,hS=S.div`
  display: flex;
  flex-direction: column;
`,mS=S.div`
  width: 100%;
  height: clamp(200px, 40vw, 350px);
  overflow: hidden;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
`,gS=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`,vS=S.div`
  padding: clamp(1.5rem, 4vw, 2rem);
  color: var(--text-secondary);
`,yS=S.h3`
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  margin-bottom: var(--space-md);
  color: var(--text-gray);
  font-weight: 700;
  line-height: 1.3;
`,xS=S.p`
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.7;
  color: var(--medium-gray);
  margin-bottom: var(--space-lg);
`,wS=S.div`
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: var(--accent-primary);
  flex-wrap: wrap;
`,SS=S.div`
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,N0=S.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  color: #fff;
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.85rem, 2vw, 1rem);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px var(--shadow-medium);
  flex: 1;
  min-width: 120px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px var(--shadow-dark);
  }

  &.github {
    background: linear-gradient(135deg, #24292f, #1f2328);
    color: #f6f8fa;

    &:hover {
      filter: brightness(1.05);
    }

    html[data-theme='dark'] & {
      background: linear-gradient(135deg, #f8fafc, #d0d7de);
      color: #1f2328;

      &:hover {
        filter: brightness(0.96);
      }
    }
  }

  &.live {
    background-image: var(--accent-gradient);
    background-color: transparent;

    &:hover {
      filter: brightness(1.05);
    }
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`,kS=S.button`
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  width: clamp(2rem, 5vw, 2.5rem);
  height: clamp(2rem, 5vw, 2.5rem);
  border-radius: 50%;
  background-color: var(--off-white);
  border: none;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--shadow-medium);

  &:hover {
    background-color: var(--primary-blue);
    color: var(--white);
    transform: rotate(90deg);
    box-shadow: 0 3px 12px var(--shadow-dark);
  }
`,bS=()=>{const[e,t]=b.useState("all"),[n,r]=b.useState(null),[i]=zs({threshold:.1,triggerOnce:!0}),o=b.useRef(null),a=b.useRef(null),s=b.useRef(null),l=b.useMemo(()=>H9,[]),c=b.useMemo(()=>U9,[]),u=b.useMemo(()=>c.filter(y=>e==="all"||y.category===e),[e,c]),d=b.useCallback(y=>{r(y)},[]),p=b.useCallback(()=>{r(null)},[]);b.useEffect(()=>{var y;if(n){s.current=document.activeElement;const x=o.current,k=a.current,h=x?Array.from(x.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')):[],m=h[0],w=h[h.length-1];(y=k||m)==null||y.focus();const C=E=>{E.key==="Escape"&&(E.preventDefault(),p(),s.current&&s.current.focus&&s.current.focus()),E.key==="Tab"&&h.length>0&&(E.shiftKey&&document.activeElement===m?(E.preventDefault(),w.focus()):!E.shiftKey&&document.activeElement===w&&(E.preventDefault(),m.focus()))};document.addEventListener("keydown",C);const P=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{var E;document.removeEventListener("keydown",C),document.body.style.overflow=P,(E=s.current)!=null&&E.focus&&s.current.focus()}}},[n,p]);const v={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return f.jsx(W9,{id:"projects",children:f.jsxs(Y9,{children:[f.jsx(Yd,{shapes:[{size:"260px",top:"8%",left:"80%",color1:"rgba(0,119,255,0.22)",color2:"rgba(0,214,255,0.1)",blur:48,opacity:.22},{size:"180px",top:"40%",left:"5%",color1:"rgba(16,185,129,0.2)",color2:"rgba(0,119,255,0.1)",blur:36,opacity:.2}],intensity:22}),f.jsxs(G9,{children:[f.jsx(K9,{children:"Projects"}),f.jsx(Q9,{children:"My creative works"})]}),f.jsx(X9,{children:l.map(y=>f.jsx(Z9,{className:e===y.id?"active":"",onClick:()=>t(y.id),whileTap:{scale:.97},"aria-pressed":e===y.id,type:"button",children:y.label},y.id))}),f.jsx(q9,{ref:i,children:f.jsx(Wn,{mode:"wait",children:f.jsx(Q.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.25},style:{display:"contents"},children:u.map((y,x)=>f.jsx(Q.div,{variants:v,layout:!0,children:f.jsxs(uu,{className:"project-card",onClick:()=>d(y),whileHover:{y:-6},whileTap:{scale:.98},transition:{type:"spring",stiffness:240,damping:20},role:"button",tabIndex:0,"aria-haspopup":"dialog","aria-label":`Open details for ${y.title}`,onKeyDown:k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),d(y))},children:[f.jsx(J9,{children:f.jsx(B9,{src:y.image,alt:y.title,minHeight:"220px",decoding:"async"})}),f.jsxs(eS,{children:[f.jsxs(tS,{children:[f.jsx(rS,{children:y.category}),y.date&&f.jsx(nS,{children:y.date})]}),f.jsx(iS,{children:y.title}),y.description&&f.jsx(oS,{children:y.description}),"technologies"in y&&Array.isArray(y.technologies)&&y.technologies.length>0&&f.jsx(cS,{children:y.technologies.slice(0,6).map(k=>f.jsx(uS,{children:k},`${y.id}-${k}`))})]}),f.jsxs(aS,{children:[f.jsxs(sS,{type:"button",whileHover:{x:3},whileTap:{scale:.96},onClick:k=>{k.stopPropagation(),d(y)},"aria-label":`Quick view for ${y.title}`,children:["Quick view",f.jsx("span",{"aria-hidden":"true",children:"→"})]}),f.jsxs(lS,{children:[f.jsx(V0,{href:y.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:k=>k.stopPropagation(),"aria-label":`Open ${y.title} repository`,children:f.jsx(Ta,{size:16})}),y.live&&f.jsx(V0,{href:y.live,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:k=>k.stopPropagation(),"aria-label":`Visit live site for ${y.title}`,children:f.jsx(bp,{size:14})})]})]})]})},y.id))},e)})}),f.jsx(Wn,{children:n&&f.jsxs(dS,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},"aria-hidden":!1,children:[f.jsx(fS,{onClick:p}),f.jsxs(pS,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{duration:.3},role:"dialog","aria-modal":"true","aria-labelledby":"project-dialog-title","aria-describedby":"project-dialog-description",ref:o,children:[f.jsx(kS,{onClick:p,"aria-label":"Close popup",ref:a,children:f.jsx(zm,{})}),f.jsxs(hS,{children:[f.jsx(mS,{children:f.jsx(gS,{src:n.image,alt:`${n.title} Screenshot`})}),f.jsxs(vS,{children:[f.jsx(yS,{id:"project-dialog-title",children:n.title}),f.jsx(xS,{id:"project-dialog-description",children:n.description}),f.jsxs(wS,{children:[f.jsxs("span",{children:["Category: ",n.category]}),f.jsxs("span",{children:["Date: ",n.date]})]}),f.jsxs(SS,{children:[f.jsxs(N0,{href:n.github,target:"_blank",rel:"noopener noreferrer",className:"github",children:[f.jsx(Ta,{}),"View on GitHub"]}),n.live&&f.jsxs(N0,{href:n.live,target:"_blank",rel:"noopener noreferrer",className:"live",children:[f.jsx(bp,{}),"Live Demo"]})]})]})]})]})]})})]})})},CS=S.section`
  background: var(--section-surface);
  padding: clamp(3rem, 8vw, 5rem) 0;
  transition: background 0.6s ease;
`,TS=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,PS=S.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`,ES=S.h3`
  font-size: clamp(2rem, 6vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    var(--primary-blue) 0%,
    var(--secondary-blue) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 1px;
`,jS=S.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--medium-gray);
  position: relative;
  padding-bottom: var(--space-md);
`,AS=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 6vw, 3rem);
  margin-top: var(--space-xl);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,zS=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`,Nl=S.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--surface-card);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 28px var(--shadow-light);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--surface-outline);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.03),
      rgba(16, 185, 129, 0.02)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    background: var(--surface-card-hover);
    box-shadow: 0 20px 60px var(--shadow-medium),
      0 0 0 1px rgba(59, 130, 246, 0.12);
  }

  &:hover::before {
    opacity: 1;
  }
`,$l=S.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--accent-primary);
  margin-top: var(--space-xs);
  flex-shrink: 0;
`,Fl=S.div`
  flex: 1;
`,Bl=S.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
  font-weight: 600;
`,LS=S.p`
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
`,$0=S.a`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
  text-decoration: none;
  &:hover {
    color: var(--accent-primary);
  }
`,MS=S.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  background: var(--surface-card);
  padding: clamp(1.5rem, 4vw, 2rem);
  border-radius: var(--radius-xl);
  box-shadow: 0 12px 32px var(--shadow-light);
  border: 1px solid var(--surface-outline);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.02),
      rgba(16, 185, 129, 0.01)
    );
    z-index: 1;
  }
`,zo=S.div`
  position: relative;
`,Hl=S.input`
  width: 100%;
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid var(--surface-outline);
  border-radius: var(--radius-lg);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 2;

  &:focus {
    border-color: var(--accent-primary);
    outline: none;
    box-shadow: 0 0 0 4px rgba(58, 123, 213, 0.14);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.98);
  }

  &:hover {
    border-color: rgba(58, 123, 213, 0.25);
    transform: translateY(-1px);
  }

  html[data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.92);
    border-color: rgba(108, 149, 255, 0.25);
    color: var(--text-primary);

    &:focus {
      border-color: rgba(108, 149, 255, 0.55);
      box-shadow: 0 0 0 4px rgba(108, 149, 255, 0.2);
    }
  }
`,IS=S.textarea`
  width: 100%;
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid var(--surface-outline);
  border-radius: var(--radius-lg);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  resize: vertical;
  min-height: 120px;
  position: relative;
  z-index: 2;

  &:focus {
    border-color: var(--accent-primary);
    outline: none;
    box-shadow: 0 0 0 4px rgba(58, 123, 213, 0.14);
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.98);
  }

  &:hover {
    border-color: rgba(58, 123, 213, 0.25);
    transform: translateY(-1px);
  }

  html[data-theme='dark'] & {
    background: rgba(12, 22, 39, 0.92);
    border-color: rgba(108, 149, 255, 0.25);
    color: var(--text-primary);

    &:focus {
      border-color: rgba(108, 149, 255, 0.55);
      box-shadow: 0 0 0 4px rgba(108, 149, 255, 0.2);
    }
  }
`,RS=S(Q.button)`
  background: var(--accent-gradient);
  color: var(--white);
  border: none;
  padding: clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: var(--radius-full);
  font-size: clamp(0.9rem, 2vw, 1rem);
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  justify-content: center;
  min-width: 150px;
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
  }

  &:hover::before {
    left: 100%;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,OS=S(Q.div)`
  padding: 1rem;
  border-radius: var(--radius-md);
  margin-top: 1rem;
  font-weight: 500;
  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`,Ul=S.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,_S=()=>{const[e,t]=b.useState({name:"",email:"",subject:"",message:"",honeypot:""}),[n,r]=b.useState({}),[i,o]=b.useState(!1),[a,s]=b.useState(null),[l,c]=zs({threshold:.1,triggerOnce:!0}),u=x=>{const{name:k,value:g}=x.target;t(h=>({...h,[k]:g})),n[k]&&r(h=>({...h,[k]:""}))},d=()=>{const x={};return e.name.trim()||(x.name="Name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(x.email="Please enter a valid email address"):x.email="Email is required",e.message.trim()||(x.message="Message is required"),r(x),Object.keys(x).length===0},p=async x=>{if(x.preventDefault(),!!d()&&!e.honeypot){o(!0),s(null);try{if((await fetch("https://formspree.io/f/xnnbljlo",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.name,email:e.email,subject:e.subject,message:e.message})})).ok)s({type:"success",text:"Message sent successfully! I'll get back to you soon."}),t({name:"",email:"",subject:"",message:"",honeypot:""}),setTimeout(()=>s(null),5e3);else throw new Error("Formspree submission failed")}catch{s({type:"error",text:"Failed to send message. Please try again."})}finally{o(!1)}}},v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},y={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return f.jsx(CS,{id:"contact",children:f.jsxs(TS,{children:[f.jsx(Yd,{shapes:[{size:"300px",top:"10%",left:"15%",color1:"rgba(0,119,255,0.18)",color2:"rgba(0,198,255,0.1)",blur:42,opacity:.2},{size:"220px",top:"70%",left:"80%",color1:"rgba(139,92,246,0.18)",color2:"rgba(59,130,246,0.1)",blur:38,opacity:.18}],intensity:18}),f.jsxs(PS,{children:[f.jsx(ES,{children:"Get In Touch"}),f.jsx(jS,{children:"Let's work together"})]}),f.jsxs(AS,{ref:l,children:[f.jsx(Q.div,{variants:v,initial:"hidden",animate:c?"visible":"hidden",children:f.jsx(Q.div,{variants:y,children:f.jsxs(zS,{children:[f.jsxs(Nl,{children:[f.jsx($l,{children:f.jsx(v5,{})}),f.jsxs(Fl,{children:[f.jsx(Bl,{children:"Email"}),f.jsx($0,{href:"mailto:denismunyoki5657@gmail.com",children:"denismunyoki5657@gmail.com"})]})]}),f.jsxs(Nl,{children:[f.jsx($l,{children:f.jsx(b5,{})}),f.jsxs(Fl,{children:[f.jsx(Bl,{children:"Phone"}),f.jsx($0,{href:"tel:+254110433220",children:"+254110433220"})]})]}),f.jsxs(Nl,{children:[f.jsx($l,{children:f.jsx(w5,{})}),f.jsxs(Fl,{children:[f.jsx(Bl,{children:"Location"}),f.jsx(LS,{children:"Nairobi, Kenya"})]})]})]})})}),f.jsx(Q.div,{variants:v,initial:"hidden",animate:c?"visible":"hidden",children:f.jsx(Q.div,{variants:y,children:f.jsxs(MS,{onSubmit:p,children:[f.jsx("input",{type:"text",name:"honeypot",value:e.honeypot,onChange:u,tabIndex:-1,autoComplete:"off",style:{position:"absolute",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1,border:0,padding:0},"aria-hidden":"true"}),f.jsxs(zo,{children:[f.jsx(Hl,{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:u,required:!0,"aria-required":"true","aria-invalid":!!n.name,"aria-describedby":n.name?"contact-name-error":void 0}),n.name&&f.jsx(Ul,{id:"contact-name-error",children:n.name})]}),f.jsxs(zo,{children:[f.jsx(Hl,{type:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:u,required:!0,"aria-required":"true","aria-invalid":!!n.email,"aria-describedby":n.email?"contact-email-error":void 0}),n.email&&f.jsx(Ul,{id:"contact-email-error",children:n.email})]}),f.jsx(zo,{children:f.jsx(Hl,{type:"text",name:"subject",placeholder:"Subject",value:e.subject,onChange:u})}),f.jsxs(zo,{children:[f.jsx(IS,{name:"message",placeholder:"Your Message",value:e.message,onChange:u,required:!0,"aria-required":"true","aria-invalid":!!n.message,"aria-describedby":n.message?"contact-message-error":void 0}),n.message&&f.jsx(Ul,{id:"contact-message-error",children:n.message})]}),f.jsxs(RS,{type:"submit",disabled:i,animate:i?{scale:[1,1.05,1]}:{scale:1},transition:i?{repeat:1/0,duration:.6,ease:"easeInOut"}:{},children:[f.jsx(k5,{})," ",i?"Sending...":"Send Message"]}),f.jsx(Wn,{children:a&&f.jsx(OS,{className:a.type,role:"alert",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:a.text})})]})})})]})]})})},DS=S.footer`
  background-color: var(--dark-blue);
  color: var(--white);
  padding: clamp(3rem, 6vw, 4rem) 0 var(--space-xl);
`,VS=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,NS=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(2rem, 5vw, 3rem);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-xl);
  }
`,$S=S.div`
  flex: 1;
`,F0=S.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: var(--space-lg);
  font-weight: 600;
`,FS=S.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-lg);
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
`,BS=S.div`
  display: flex;
  gap: var(--space-md);
  margin: 0;
`,HS=S.a`
  color: var(--footer-icon-color);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  text-decoration: none;

  &:hover {
    color: var(--secondary-blue);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,US=S.div`
  flex: 1;
`,WS=S.ul`
  list-style: none;
  padding: 0;
`,YS=S.li`
  margin-bottom: var(--space-md);
`,GS=S.a`
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-decoration: none;

  &:hover {
    color: var(--secondary-blue);
  }
`,KS=S.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-xl);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
`,QS=()=>{const e=new Date().getFullYear(),t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},r=[{id:"home",label:"Home",href:"#home"},{id:"about",label:"About",href:"#about"},{id:"projects",label:"Projects",href:"#projects"},{id:"contact",label:"Contact",href:"#contact"}],i=[{id:"github",icon:Ta,href:"https://github.com/Denis-Mwanzia",label:"GitHub"},{id:"linkedin",icon:Pm,href:"https://www.linkedin.com/in/denis-mwanzia",label:"LinkedIn"},{id:"twitter",icon:h5,href:"#",label:"Twitter"},{id:"instagram",icon:c5,href:"#",label:"Instagram"}],o=(a,s)=>{if(s.startsWith("#")){a.preventDefault();const l=document.querySelector(s);if(l){const u=l.offsetTop-80-20;window.scrollTo({top:u,behavior:"smooth"})}}};return f.jsx(DS,{children:f.jsx(VS,{children:f.jsxs(Q.div,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,threshold:.1},children:[f.jsxs(NS,{children:[f.jsx(Q.div,{variants:n,children:f.jsxs($S,{children:[f.jsx(F0,{children:"Denis Mwanzia"}),f.jsx(FS,{children:"Full‑stack developer focused on scalable, accessible web apps. Experienced across web based applications, AI‑assisted features, and internal tools. Pragmatic about performance, DX and maintainability."}),f.jsx(BS,{children:i.map(a=>f.jsx(HS,{href:a.href,target:a.href.startsWith("http")?"_blank":"_self",rel:a.href.startsWith("http")?"noopener noreferrer":"","aria-label":a.label,children:f.jsx(a.icon,{})},a.id))})]})}),f.jsx(Q.div,{variants:n,children:f.jsxs(US,{children:[f.jsx(F0,{children:"Quick Links"}),f.jsx(WS,{children:r.map(a=>f.jsx(YS,{children:f.jsx(GS,{href:a.href,onClick:s=>o(s,a.href),children:a.label})},a.id))})]})})]}),f.jsx(Q.div,{variants:n,children:f.jsx(KS,{children:f.jsxs("p",{children:["© ",e," Denis Mwanzia. All rights reserved."]})})})]})})})},XS=S(Q.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--secondary-blue)
  );
  color: var(--white);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(58, 123, 213, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(58, 123, 213, 0.4);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`,ZS=()=>{const[e,t]=b.useState(!1);b.useEffect(()=>{const r=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return f.jsx(Wn,{children:e&&f.jsx(XS,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},transition:{duration:.3},onClick:n,"aria-label":"Scroll to top",children:f.jsx(m5,{})})})},Wl=({flip:e=!1})=>f.jsx("div",{"aria-hidden":"true",style:{lineHeight:0},children:f.jsx("svg",{viewBox:"0 0 1440 120",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"80px",transform:e?"scaleY(-1)":"none"},children:f.jsx("path",{fill:"currentColor",fillOpacity:"0.06",d:"M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"})})}),qS=S.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 4px;
	width: ${e=>e.$width}%;
	background: linear-gradient(90deg, var(--secondary-blue), var(--primary-blue));
	box-shadow: 0 0 12px rgba(58, 123, 213, 0.6);
	z-index: 1200;
	transition: width 0.08s ease;
`,JS=()=>{const[e,t]=b.useState(0);return b.useEffect(()=>{const n=()=>{const r=window.scrollY||document.documentElement.scrollTop,i=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=i>0?r/i*100:0;t(Math.min(100,Math.max(0,o)))};return n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),f.jsx(qS,{$width:e,"aria-hidden":"true"})},ek=S.section`
  padding: clamp(2.5rem, 7vw, 4rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
  color: var(--text-primary);
`,tk=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,nk=S.h3`
  text-align: center;
  font-size: clamp(1.6rem, 4vw, 2rem);
  font-weight: 800;
  margin-bottom: var(--space-2xl);
  background: linear-gradient(90deg, var(--primary-blue), var(--secondary-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,rk=S.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,ik=S(Q.div)`
  border: 1px solid var(--surface-outline);
  border-radius: var(--radius-2xl);
  padding: clamp(1rem, 3vw, 1.5rem);
  background: var(--surface-card);
  box-shadow: 0 12px 28px var(--shadow-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 36px var(--shadow-medium);
    background: var(--surface-card-hover);
  }
`,ok=S.h4`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: clamp(1.05rem, 2.5vw, 1.2rem);
  margin-bottom: var(--space-sm);

  svg {
    color: var(--accent-primary);
  }
`,ak=S.ul`
  margin: 0;
  padding-left: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
`,sk=()=>{const e={hidden:{opacity:0,y:30,scale:.98},visible:t=>({opacity:1,y:0,scale:1,transition:{duration:.5,delay:t*.15,ease:"easeOut"}})};return f.jsx(ek,{"aria-labelledby":"capabilities-heading",children:f.jsxs(tk,{children:[f.jsx(nk,{id:"capabilities-heading",children:"Capabilities"}),f.jsx(rk,{as:Q.div,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[{icon:f.jsx(jm,{}),title:"Front‑End Engineering",points:["Accessible, responsive UI","Design systems & theming","Performance budgeting"]},{icon:f.jsx(Am,{}),title:"Back‑End & APIs",points:["RESTful APIs","Auth, RBAC, security","Relational & document DBs"]},{icon:f.jsx(P5,{}),title:"Quality & Delivery",points:["Testing & a11y checks","CI/CD & observability","SEO & analytics"]}].map((t,n)=>f.jsxs(ik,{custom:n,variants:e,whileHover:{y:-6},transition:{type:"spring",stiffness:220,damping:18},children:[f.jsxs(ok,{children:[t.icon," ",t.title]}),f.jsx(ak,{children:t.points.map(r=>f.jsx("li",{children:r},r))})]},t.title))})]})})},lk=S.div`
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-primary);
  transition: background 0.6s ease, color 0.6s ease;
`,ck=S.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 10%, rgba(59,130,246,0.08), transparent 30%),
    radial-gradient(circle at 80% 30%, rgba(16,185,129,0.06), transparent 30%),
    radial-gradient(circle at 50% 80%, rgba(139,92,246,0.05), transparent 30%),
    linear-gradient(transparent 0, transparent 98%, rgba(58,123,213,0.06) 100%),
    linear-gradient(90deg, transparent 0, transparent 98%, rgba(58,123,213,0.06) 100%);
  background-size: 100% 100%, 100% 100%, 100% 100%, 40px 40px, 40px 40px;
  background-position: 0 0, 0 0, 0 0, 0 0, 0 0;
  mix-blend-mode: normal;

  html[data-theme='dark'] & {
    background-image:
      radial-gradient(circle at 15% 12%, rgba(108, 149, 255, 0.16), transparent 32%),
      radial-gradient(circle at 82% 25%, rgba(28, 216, 255, 0.12), transparent 35%),
      radial-gradient(circle at 55% 88%, rgba(143, 92, 247, 0.12), transparent 35%),
      linear-gradient(transparent 0, transparent 98%, rgba(108, 149, 255, 0.12) 100%),
      linear-gradient(90deg, transparent 0, transparent 98%, rgba(28, 216, 255, 0.12) 100%);
  }
`,uk=()=>{const e="https://www.denismwanzia.com",t=`${e}/`,n=`${e}/assets/passport.jpg`;return f.jsx(r5,{children:f.jsx(R5,{children:f.jsxs(lk,{children:[f.jsx(JS,{}),f.jsx(ck,{}),f.jsxs(Wo,{children:[f.jsx("title",{children:"Denis Mwanzia - Full-Stack Developer & IT Specialist"}),f.jsx("meta",{name:"description",content:"Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya. Showcasing web development projects, skills, and experience."}),f.jsx("meta",{name:"keywords",content:"web developer, full-stack developer, react, javascript, portfolio, denis mwanzia, kenya, mern stack, django, python"}),f.jsx("meta",{name:"author",content:"Denis Mwanzia"}),f.jsx("meta",{name:"robots",content:"index, follow"}),f.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),f.jsx("meta",{property:"og:type",content:"website"}),f.jsx("meta",{property:"og:url",content:t}),f.jsx("meta",{property:"og:title",content:"Denis Mwanzia - Full-Stack Developer & IT Specialist"}),f.jsx("meta",{property:"og:description",content:"Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."}),f.jsx("meta",{property:"og:image",content:n}),f.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f.jsx("meta",{property:"twitter:url",content:t}),f.jsx("meta",{property:"twitter:title",content:"Denis Mwanzia - Full-Stack Developer & IT Specialist"}),f.jsx("meta",{property:"twitter:description",content:"Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."}),f.jsx("meta",{property:"twitter:image",content:n}),f.jsx("link",{rel:"canonical",href:t}),f.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),f.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),f.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Denis Mwanzia",url:"https://denismwanzia.netlify.app/",image:"https://denis-mwanzia-portfolio.netlify.app/assets/passport.jpg",jobTitle:"Full-Stack Developer & IT Specialist",sameAs:["https://www.linkedin.com/in/denis-mwanzia","https://github.com/Denis-Mwanzia"]})}),f.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"Denis Mwanzia Portfolio",url:"https://denismwanzia.netlify.app/",potentialAction:{"@type":"SearchAction",target:"https://denismwanzia.netlify.app/?q={search_term_string}","query-input":"required name=search_term_string"}})})]}),f.jsx(a7,{}),f.jsx($7,{}),f.jsx(Wl,{}),f.jsx(a9,{}),f.jsx(sk,{}),f.jsx(V9,{}),f.jsx(Wl,{}),f.jsx(bS,{}),f.jsx(Wl,{flip:!0}),f.jsx(_S,{}),f.jsx(QS,{}),f.jsx(ZS,{})]})})})};Yl.createRoot(document.getElementById("root")).render(f.jsx(ce.StrictMode,{children:f.jsx(mr,{children:f.jsx(uk,{})})}));
