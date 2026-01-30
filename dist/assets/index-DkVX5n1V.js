var og=Object.defineProperty;var ag=(e,t,n)=>t in e?og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Qd=(e,t,n)=>ag(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W0={exports:{}},$a={},Y0={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),sg=Symbol.for("react.portal"),lg=Symbol.for("react.fragment"),cg=Symbol.for("react.strict_mode"),ug=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),pg=Symbol.for("react.forward_ref"),hg=Symbol.for("react.suspense"),mg=Symbol.for("react.memo"),gg=Symbol.for("react.lazy"),Xd=Symbol.iterator;function vg(e){return e===null||typeof e!="object"?null:(e=Xd&&e[Xd]||e["@@iterator"],typeof e=="function"?e:null)}var G0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,Q0={};function Vr(e,t,n){this.props=e,this.context=t,this.refs=Q0,this.updater=n||G0}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function X0(){}X0.prototype=Vr.prototype;function pu(e,t,n){this.props=e,this.context=t,this.refs=Q0,this.updater=n||G0}var hu=pu.prototype=new X0;hu.constructor=pu;K0(hu,Vr.prototype);hu.isPureReactComponent=!0;var Zd=Array.isArray,Z0=Object.prototype.hasOwnProperty,mu={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function J0(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Z0.call(t,r)&&!q0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ki,type:e,key:o,ref:a,props:i,_owner:mu.current}}function yg(e,t){return{$$typeof:Ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ki}function xg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qd=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xg(""+e.key):t.toString(36)}function Mo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ki:case sg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Is(a,0):r,Zd(i)?(n="",e!=null&&(n=e.replace(qd,"$&/")+"/"),Mo(i,t,n,"",function(c){return c})):i!=null&&(gu(i)&&(i=yg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(qd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Zd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Is(o,s);a+=Mo(o,t,n,l,i)}else if(l=vg(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Is(o,s++),a+=Mo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function oo(e,t,n){if(e==null)return e;var r=[],i=0;return Mo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Io={transition:null},Sg={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Io,ReactCurrentOwner:mu};function eh(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:oo,forEach:function(e,t,n){oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oo(e,function(){t++}),t},toArray:function(e){return oo(e,function(t){return t})||[]},only:function(e){if(!gu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Vr;Y.Fragment=lg;Y.Profiler=ug;Y.PureComponent=pu;Y.StrictMode=cg;Y.Suspense=hg;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;Y.act=eh;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=K0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=mu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Z0.call(t,l)&&!q0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Ki,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:fg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dg,_context:e},e.Consumer=e};Y.createElement=J0;Y.createFactory=function(e){var t=J0.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:pg,render:e}};Y.isValidElement=gu;Y.lazy=function(e){return{$$typeof:gg,_payload:{_status:-1,_result:e},_init:wg}};Y.memo=function(e,t){return{$$typeof:mg,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Io.transition;Io.transition={};try{e()}finally{Io.transition=t}};Y.unstable_act=eh;Y.useCallback=function(e,t){return Qe.current.useCallback(e,t)};Y.useContext=function(e){return Qe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Qe.current.useEffect(e,t)};Y.useId=function(){return Qe.current.useId()};Y.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Qe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};Y.useRef=function(e){return Qe.current.useRef(e)};Y.useState=function(e){return Qe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Qe.current.useTransition()};Y.version="18.3.1";Y0.exports=Y;var C=Y0.exports;const ce=Dr(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=C,bg=Symbol.for("react.element"),Cg=Symbol.for("react.fragment"),Tg=Object.prototype.hasOwnProperty,Eg=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pg={key:!0,ref:!0,__self:!0,__source:!0};function th(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Tg.call(t,r)&&!Pg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bg,type:e,key:o,ref:a,props:i,_owner:Eg.current}}$a.Fragment=Cg;$a.jsx=th;$a.jsxs=th;W0.exports=$a;var d=W0.exports,Kl={},nh={exports:{}},ct={},rh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,$){var F=z.length;z.push($);e:for(;0<F;){var ae=F-1>>>1,M=z[ae];if(0<i(M,$))z[ae]=$,z[F]=M,F=ae;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],F=z.pop();if(F!==$){z[0]=F;e:for(var ae=0,M=z.length,R=M>>>1;ae<R;){var _=2*(ae+1)-1,B=z[_],T=_+1,G=z[T];if(0>i(B,F))T<M&&0>i(G,B)?(z[ae]=G,z[T]=F,ae=T):(z[ae]=B,z[_]=F,ae=_);else if(T<M&&0>i(G,F))z[ae]=G,z[T]=F,ae=T;else break e}}return $}function i(z,$){var F=z.sortIndex-$.sortIndex;return F!==0?F:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,f=null,p=3,v=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=z)r(c),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(c)}}function x(z){if(w=!1,g(z),!y)if(n(l)!==null)y=!0,ke(b);else{var $=n(c);$!==null&&ve(x,$.startTime-z)}}function b(z,$){y=!1,w&&(w=!1,m(A),A=-1),v=!0;var F=p;try{for(g($),f=n(l);f!==null&&(!(f.expirationTime>$)||z&&!oe());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,p=f.priorityLevel;var M=ae(f.expirationTime<=$);$=e.unstable_now(),typeof M=="function"?f.callback=M:f===n(l)&&r(l),g($)}else r(l);f=n(l)}if(f!==null)var R=!0;else{var _=n(c);_!==null&&ve(x,_.startTime-$),R=!1}return R}finally{f=null,p=F,v=!1}}var E=!1,P=null,A=-1,N=5,I=-1;function oe(){return!(e.unstable_now()-I<N)}function fe(){if(P!==null){var z=e.unstable_now();I=z;var $=!0;try{$=P(!0,z)}finally{$?Se():(E=!1,P=null)}}else E=!1}var Se;if(typeof h=="function")Se=function(){h(fe)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,X=Pe.port2;Pe.port1.onmessage=fe,Se=function(){X.postMessage(null)}}else Se=function(){k(fe,0)};function ke(z){P=z,E||(E=!0,Se())}function ve(z,$){A=k(function(){z(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ke(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var F=p;p=$;try{return z()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=p;p=z;try{return $()}finally{p=F}},e.unstable_scheduleCallback=function(z,$,F){var ae=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ae+F:ae):F=ae,z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=F+M,z={id:u++,callback:$,priorityLevel:z,startTime:F,expirationTime:M,sortIndex:-1},F>ae?(z.sortIndex=F,t(c,z),n(l)===null&&z===n(c)&&(w?(m(A),A=-1):w=!0,ve(x,F-ae))):(z.sortIndex=M,t(l,z),y||v||(y=!0,ke(b))),z},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(z){var $=p;return function(){var F=p;p=$;try{return z.apply(this,arguments)}finally{p=F}}}})(ih);rh.exports=ih;var jg=rh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag=C,st=jg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oh=new Set,Ei={};function Gn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Ei[e]=t,e=0;e<t.length;e++)oh.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,zg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},ef={};function Lg(e){return Ql.call(ef,e)?!0:Ql.call(Jd,e)?!1:zg.test(e)?ef[e]=!0:(Jd[e]=!0,!1)}function Mg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ig(e,t,n,r){if(t===null||typeof t>"u"||Mg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var vu=/[\-:]([a-z])/g;function yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vu,yu);Ne[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vu,yu);Ne[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vu,yu);Ne[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function xu(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ig(t,n,i,r)&&(n=null),r||i===null?Lg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=Ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),ah=Symbol.for("react.provider"),sh=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),lh=Symbol.for("react.offscreen"),tf=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=tf&&e[tf]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Rs;function ii(e){if(Rs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rs=t&&t[1]||""}return`
`+Rs+e}var _s=!1;function Os(e,t){if(!e||_s)return"";_s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{_s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ii(e):""}function Rg(e){switch(e.tag){case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 2:case 15:return e=Os(e.type,!1),e;case 11:return e=Os(e.type.render,!1),e;case 1:return e=Os(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case Xl:return"Profiler";case wu:return"StrictMode";case Zl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sh:return(e.displayName||"Context")+".Consumer";case ah:return(e._context.displayName||"Context")+".Provider";case Su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function _g(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ch(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Og(e){var t=ch(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=Og(e))}function uh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ch(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ec(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dh(e,t){t=t.checked,t!=null&&xu(e,"checked",t,!1)}function tc(e,t){dh(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nc(e,t.type,n):t.hasOwnProperty("defaultValue")&&nc(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nc(e,t,n){(t!=="number"||qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oi=Array.isArray;function xr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function of(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(oi(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function fh(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function af(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ph(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ic(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ph(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dg=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){Dg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function mh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function gh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vg=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,t){if(t){if(Vg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ac(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lc=null,wr=null,Sr=null;function sf(e){if(e=Zi(e)){if(typeof lc!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Wa(t),lc(e.stateNode,e.type,t))}}function vh(e){wr?Sr?Sr.push(e):Sr=[e]:wr=e}function yh(){if(wr){var e=wr,t=Sr;if(Sr=wr=null,sf(e),t)for(e=0;e<t.length;e++)sf(t[e])}}function xh(e,t){return e(t)}function wh(){}var Ds=!1;function Sh(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return xh(e,t,n)}finally{Ds=!1,(wr!==null||Sr!==null)&&(wh(),yh())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=Wa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var cc=!1;if(Gt)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){cc=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{cc=!1}function Ng(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ui=!1,Jo=null,ea=!1,uc=null,$g={onError:function(e){ui=!0,Jo=e}};function Fg(e,t,n,r,i,o,a,s,l){ui=!1,Jo=null,Ng.apply($g,arguments)}function Bg(e,t,n,r,i,o,a,s,l){if(Fg.apply(this,arguments),ui){if(ui){var c=Jo;ui=!1,Jo=null}else throw Error(j(198));ea||(ea=!0,uc=c)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lf(e){if(Kn(e)!==e)throw Error(j(188))}function Hg(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lf(i),e;if(o===r)return lf(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function bh(e){return e=Hg(e),e!==null?Ch(e):null}function Ch(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ch(e);if(t!==null)return t;e=e.sibling}return null}var Th=st.unstable_scheduleCallback,cf=st.unstable_cancelCallback,Ug=st.unstable_shouldYield,Wg=st.unstable_requestPaint,Te=st.unstable_now,Yg=st.unstable_getCurrentPriorityLevel,Cu=st.unstable_ImmediatePriority,Eh=st.unstable_UserBlockingPriority,ta=st.unstable_NormalPriority,Gg=st.unstable_LowPriority,Ph=st.unstable_IdlePriority,Fa=null,_t=null;function Kg(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Fa,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Zg,Qg=Math.log,Xg=Math.LN2;function Zg(e){return e>>>=0,e===0?32:31-(Qg(e)/Xg|0)|0}var co=64,uo=4194304;function ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ai(s):(o&=a,o!==0&&(r=ai(o)))}else a=n&~i,a!==0?r=ai(a):o!==0&&(r=ai(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),i=1<<n,r|=e[n],t&=~i;return r}function qg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=qg(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function dc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jh(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function ev(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ne=0;function Ah(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zh,Eu,Lh,Mh,Ih,fc=!1,fo=[],pn=null,hn=null,mn=null,Ai=new Map,zi=new Map,ln=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uf(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(t.pointerId)}}function Yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zi(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nv(e,t,n,r,i){switch(t){case"focusin":return pn=Yr(pn,e,t,n,r,i),!0;case"dragenter":return hn=Yr(hn,e,t,n,r,i),!0;case"mouseover":return mn=Yr(mn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ai.set(o,Yr(Ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zi.set(o,Yr(zi.get(o)||null,e,t,n,r,i)),!0}return!1}function Rh(e){var t=Rn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=kh(n),t!==null){e.blockedOn=t,Ih(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sc=r,n.target.dispatchEvent(r),sc=null}else return t=Zi(n),t!==null&&Eu(t),e.blockedOn=n,!1;t.shift()}return!0}function df(e,t,n){Ro(e)&&n.delete(t)}function rv(){fc=!1,pn!==null&&Ro(pn)&&(pn=null),hn!==null&&Ro(hn)&&(hn=null),mn!==null&&Ro(mn)&&(mn=null),Ai.forEach(df),zi.forEach(df)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,fc||(fc=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,rv)))}function Li(e){function t(i){return Gr(i,e)}if(0<fo.length){Gr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Gr(pn,e),hn!==null&&Gr(hn,e),mn!==null&&Gr(mn,e),Ai.forEach(t),zi.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&ln.shift()}var kr=qt.ReactCurrentBatchConfig,ra=!0;function iv(e,t,n,r){var i=ne,o=kr.transition;kr.transition=null;try{ne=1,Pu(e,t,n,r)}finally{ne=i,kr.transition=o}}function ov(e,t,n,r){var i=ne,o=kr.transition;kr.transition=null;try{ne=4,Pu(e,t,n,r)}finally{ne=i,kr.transition=o}}function Pu(e,t,n,r){if(ra){var i=pc(e,t,n,r);if(i===null)Ks(e,t,r,ia,n),uf(e,r);else if(nv(i,e,t,n,r))r.stopPropagation();else if(uf(e,r),t&4&&-1<tv.indexOf(e)){for(;i!==null;){var o=Zi(i);if(o!==null&&zh(o),o=pc(e,t,n,r),o===null&&Ks(e,t,r,ia,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ks(e,t,r,null,n)}}var ia=null;function pc(e,t,n,r){if(ia=null,e=bu(r),e=Rn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ia=e,null}function _h(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yg()){case Cu:return 1;case Eh:return 4;case ta:case Gg:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var un=null,ju=null,_o=null;function Oh(){if(_o)return _o;var e,t=ju,n=t.length,r,i="value"in un?un.value:un.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return _o=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function ff(){return!1}function ut(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?po:ff,this.isPropagationStopped=ff,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=ut(Nr),Xi=ge({},Nr,{view:0,detail:0}),av=ut(Xi),Ns,$s,Kr,Ba=ge({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Ns=e.screenX-Kr.screenX,$s=e.screenY-Kr.screenY):$s=Ns=0,Kr=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),pf=ut(Ba),sv=ge({},Ba,{dataTransfer:0}),lv=ut(sv),cv=ge({},Xi,{relatedTarget:0}),Fs=ut(cv),uv=ge({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=ut(uv),fv=ge({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pv=ut(fv),hv=ge({},Nr,{data:0}),hf=ut(hv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vv[e])?!!t[e]:!1}function zu(){return yv}var xv=ge({},Xi,{key:function(e){if(e.key){var t=mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wv=ut(xv),Sv=ge({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=ut(Sv),kv=ge({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),bv=ut(kv),Cv=ge({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=ut(Cv),Ev=ge({},Ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=ut(Ev),jv=[9,13,27,32],Lu=Gt&&"CompositionEvent"in window,di=null;Gt&&"documentMode"in document&&(di=document.documentMode);var Av=Gt&&"TextEvent"in window&&!di,Dh=Gt&&(!Lu||di&&8<di&&11>=di),gf=" ",vf=!1;function Vh(e,t){switch(e){case"keyup":return jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function zv(e,t){switch(e){case"compositionend":return Nh(t);case"keypress":return t.which!==32?null:(vf=!0,gf);case"textInput":return e=t.data,e===gf&&vf?null:e;default:return null}}function Lv(e,t){if(ir)return e==="compositionend"||!Lu&&Vh(e,t)?(e=Oh(),_o=ju=un=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dh&&t.locale!=="ko"?null:t.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mv[e.type]:t==="textarea"}function $h(e,t,n,r){vh(r),t=oa(t,"onChange"),0<t.length&&(n=new Au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fi=null,Mi=null;function Iv(e){Zh(e,0)}function Ha(e){var t=sr(e);if(uh(t))return e}function Rv(e,t){if(e==="change")return t}var Fh=!1;if(Gt){var Bs;if(Gt){var Hs="oninput"in document;if(!Hs){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),Hs=typeof xf.oninput=="function"}Bs=Hs}else Bs=!1;Fh=Bs&&(!document.documentMode||9<document.documentMode)}function wf(){fi&&(fi.detachEvent("onpropertychange",Bh),Mi=fi=null)}function Bh(e){if(e.propertyName==="value"&&Ha(Mi)){var t=[];$h(t,Mi,e,bu(e)),Sh(Iv,t)}}function _v(e,t,n){e==="focusin"?(wf(),fi=t,Mi=n,fi.attachEvent("onpropertychange",Bh)):e==="focusout"&&wf()}function Ov(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ha(Mi)}function Dv(e,t){if(e==="click")return Ha(t)}function Vv(e,t){if(e==="input"||e==="change")return Ha(t)}function Nv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Nv;function Ii(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ql.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kf(e,t){var n=Sf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function Hh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uh(){for(var e=window,t=qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qo(e.document)}return t}function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $v(e){var t=Uh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hh(n.ownerDocument.documentElement,n)){if(r!==null&&Mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kf(n,o);var a=kf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fv=Gt&&"documentMode"in document&&11>=document.documentMode,or=null,hc=null,pi=null,mc=!1;function bf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mc||or==null||or!==qo(r)||(r=or,"selectionStart"in r&&Mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Ii(pi,r)||(pi=r,r=oa(hc,"onSelect"),0<r.length&&(t=new Au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Us={},Wh={};Gt&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Ua(e){if(Us[e])return Us[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wh)return Us[e]=t[n];return e}var Yh=Ua("animationend"),Gh=Ua("animationiteration"),Kh=Ua("animationstart"),Qh=Ua("transitionend"),Xh=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Xh.set(e,t),Gn(t,[e])}for(var Ws=0;Ws<Cf.length;Ws++){var Ys=Cf[Ws],Bv=Ys.toLowerCase(),Hv=Ys[0].toUpperCase()+Ys.slice(1);En(Bv,"on"+Hv)}En(Yh,"onAnimationEnd");En(Gh,"onAnimationIteration");En(Kh,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Qh,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uv=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function Tf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bg(r,t,void 0,e),e.currentTarget=null}function Zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Tf(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Tf(i,s,c),o=l}}}if(ea)throw e=uc,ea=!1,uc=null,e}function ue(e,t){var n=t[wc];n===void 0&&(n=t[wc]=new Set);var r=e+"__bubble";n.has(r)||(qh(t,e,2,!1),n.add(r))}function Gs(e,t,n){var r=0;t&&(r|=4),qh(n,e,r,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[mo]){e[mo]=!0,oh.forEach(function(n){n!=="selectionchange"&&(Uv.has(n)||Gs(n,!1,e),Gs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,Gs("selectionchange",!1,t))}}function qh(e,t,n,r){switch(_h(t)){case 1:var i=iv;break;case 4:i=ov;break;default:i=Pu}n=i.bind(null,t,n,e),i=void 0,!cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ks(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Rn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Sh(function(){var c=o,u=bu(n),f=[];e:{var p=Xh.get(e);if(p!==void 0){var v=Au,y=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":v=wv;break;case"focusin":y="focus",v=Fs;break;case"focusout":y="blur",v=Fs;break;case"beforeblur":case"afterblur":v=Fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bv;break;case Yh:case Gh:case Kh:v=dv;break;case Qh:v=Tv;break;case"scroll":v=av;break;case"wheel":v=Pv;break;case"copy":case"cut":case"paste":v=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=mf}var w=(t&4)!==0,k=!w&&e==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var h=c,g;h!==null;){g=h;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=ji(h,m),x!=null&&w.push(_i(h,x,g)))),k)break;h=h.return}0<w.length&&(p=new v(p,y,null,n,u),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==sc&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[Kt]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Rn(y):null,y!==null&&(k=Kn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=pf,x="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=mf,x="onPointerLeave",m="onPointerEnter",h="pointer"),k=v==null?p:sr(v),g=y==null?p:sr(y),p=new w(x,h+"leave",v,n,u),p.target=k,p.relatedTarget=g,x=null,Rn(u)===c&&(w=new w(m,h+"enter",y,n,u),w.target=g,w.relatedTarget=k,x=w),k=x,v&&y)t:{for(w=v,m=y,h=0,g=w;g;g=Jn(g))h++;for(g=0,x=m;x;x=Jn(x))g++;for(;0<h-g;)w=Jn(w),h--;for(;0<g-h;)m=Jn(m),g--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=Jn(w),m=Jn(m)}w=null}else w=null;v!==null&&Ef(f,p,v,w,!1),y!==null&&k!==null&&Ef(f,k,y,w,!0)}}e:{if(p=c?sr(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var b=Rv;else if(yf(p))if(Fh)b=Vv;else{b=Ov;var E=_v}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=Dv);if(b&&(b=b(e,c))){$h(f,b,n,u);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&nc(p,"number",p.value)}switch(E=c?sr(c):window,e){case"focusin":(yf(E)||E.contentEditable==="true")&&(or=E,hc=c,pi=null);break;case"focusout":pi=hc=or=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,bf(f,n,u);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":bf(f,n,u)}var P;if(Lu)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ir?Vh(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Dh&&n.locale!=="ko"&&(ir||A!=="onCompositionStart"?A==="onCompositionEnd"&&ir&&(P=Oh()):(un=u,ju="value"in un?un.value:un.textContent,ir=!0)),E=oa(c,A),0<E.length&&(A=new hf(A,e,null,n,u),f.push({event:A,listeners:E}),P?A.data=P:(P=Nh(n),P!==null&&(A.data=P)))),(P=Av?zv(e,n):Lv(e,n))&&(c=oa(c,"onBeforeInput"),0<c.length&&(u=new hf("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=P))}Zh(f,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ji(e,n),o!=null&&r.unshift(_i(e,o,i)),o=ji(e,t),o!=null&&r.push(_i(e,o,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=ji(n,o),l!=null&&a.unshift(_i(n,l,s))):i||(l=ji(n,o),l!=null&&a.push(_i(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Wv=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(Wv,`
`).replace(Yv,"")}function go(e,t,n){if(t=Pf(t),Pf(e)!==t&&n)throw Error(j(425))}function aa(){}var gc=null,vc=null;function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Qv)}:xc;function Qv(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),Rt="__reactFiber$"+$r,Oi="__reactProps$"+$r,Kt="__reactContainer$"+$r,wc="__reactEvents$"+$r,Xv="__reactListeners$"+$r,Zv="__reactHandles$"+$r;function Rn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Af(e);e!==null;){if(n=e[Rt])return n;e=Af(e)}return t}e=n,n=e.parentNode}return null}function Zi(e){return e=e[Rt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Wa(e){return e[Oi]||null}var Sc=[],lr=-1;function Pn(e){return{current:e}}function de(e){0>lr||(e.current=Sc[lr],Sc[lr]=null,lr--)}function le(e,t){lr++,Sc[lr]=e.current,e.current=t}var Cn={},Ue=Pn(Cn),et=Pn(!1),Fn=Cn;function jr(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function sa(){de(et),de(Ue)}function zf(e,t,n){if(Ue.current!==Cn)throw Error(j(168));le(Ue,t),le(et,n)}function Jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,_g(e)||"Unknown",i));return ge({},n,r)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Fn=Ue.current,le(Ue,e),le(et,et.current),!0}function Lf(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Jh(e,t,Fn),r.__reactInternalMemoizedMergedChildContext=e,de(et),de(Ue),le(Ue,e)):de(et),le(et,n)}var Ft=null,Ya=!1,Xs=!1;function e1(e){Ft===null?Ft=[e]:Ft.push(e)}function qv(e){Ya=!0,e1(e)}function jn(){if(!Xs&&Ft!==null){Xs=!0;var e=0,t=ne;try{var n=Ft;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ya=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),Th(Cu,jn),i}finally{ne=t,Xs=!1}}return null}var cr=[],ur=0,ca=null,ua=0,ht=[],mt=0,Bn=null,Bt=1,Ht="";function Ln(e,t){cr[ur++]=ua,cr[ur++]=ca,ca=e,ua=t}function t1(e,t,n){ht[mt++]=Bt,ht[mt++]=Ht,ht[mt++]=Bn,Bn=e;var r=Bt;e=Ht;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Bt=1<<32-jt(t)+i|n<<i|r,Ht=o+e}else Bt=1<<o|n<<i|r,Ht=e}function Iu(e){e.return!==null&&(Ln(e,1),t1(e,1,0))}function Ru(e){for(;e===ca;)ca=cr[--ur],cr[ur]=null,ua=cr[--ur],cr[ur]=null;for(;e===Bn;)Bn=ht[--mt],ht[mt]=null,Ht=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null}var at=null,ot=null,pe=!1,Et=null;function n1(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ot=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Bt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ot=null,!0):!1;default:return!1}}function kc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bc(e){if(pe){var t=ot;if(t){var n=t;if(!Mf(e,t)){if(kc(e))throw Error(j(418));t=gn(n.nextSibling);var r=at;t&&Mf(e,t)?n1(r,n):(e.flags=e.flags&-4097|2,pe=!1,at=e)}}else{if(kc(e))throw Error(j(418));e.flags=e.flags&-4097|2,pe=!1,at=e}}}function If(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function vo(e){if(e!==at)return!1;if(!pe)return If(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yc(e.type,e.memoizedProps)),t&&(t=ot)){if(kc(e))throw r1(),Error(j(418));for(;t;)n1(e,t),t=gn(t.nextSibling)}if(If(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=at?gn(e.stateNode.nextSibling):null;return!0}function r1(){for(var e=ot;e;)e=gn(e.nextSibling)}function Ar(){ot=at=null,pe=!1}function _u(e){Et===null?Et=[e]:Et.push(e)}var Jv=qt.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rf(e){var t=e._init;return t(e._payload)}function i1(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=wn(m,h),m.index=0,m.sibling=null,m}function o(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,g,x){return h===null||h.tag!==6?(h=rl(g,m.mode,x),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,x){var b=g.type;return b===rr?u(m,h,g.props.children,x,g.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&Rf(b)===h.type)?(x=i(h,g.props),x.ref=Qr(m,h,g),x.return=m,x):(x=Ho(g.type,g.key,g.props,null,m.mode,x),x.ref=Qr(m,h,g),x.return=m,x)}function c(m,h,g,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=il(g,m.mode,x),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function u(m,h,g,x,b){return h===null||h.tag!==7?(h=Nn(g,m.mode,x,b),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=rl(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ao:return g=Ho(h.type,h.key,h.props,null,m.mode,g),g.ref=Qr(m,null,h),g.return=m,g;case nr:return h=il(h,m.mode,g),h.return=m,h;case on:var x=h._init;return f(m,x(h._payload),g)}if(oi(h)||Ur(h))return h=Nn(h,m.mode,g,null),h.return=m,h;yo(m,h)}return null}function p(m,h,g,x){var b=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:s(m,h,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ao:return g.key===b?l(m,h,g,x):null;case nr:return g.key===b?c(m,h,g,x):null;case on:return b=g._init,p(m,h,b(g._payload),x)}if(oi(g)||Ur(g))return b!==null?null:u(m,h,g,x,null);yo(m,g)}return null}function v(m,h,g,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,s(h,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ao:return m=m.get(x.key===null?g:x.key)||null,l(h,m,x,b);case nr:return m=m.get(x.key===null?g:x.key)||null,c(h,m,x,b);case on:var E=x._init;return v(m,h,g,E(x._payload),b)}if(oi(x)||Ur(x))return m=m.get(g)||null,u(h,m,x,b,null);yo(h,x)}return null}function y(m,h,g,x){for(var b=null,E=null,P=h,A=h=0,N=null;P!==null&&A<g.length;A++){P.index>A?(N=P,P=null):N=P.sibling;var I=p(m,P,g[A],x);if(I===null){P===null&&(P=N);break}e&&P&&I.alternate===null&&t(m,P),h=o(I,h,A),E===null?b=I:E.sibling=I,E=I,P=N}if(A===g.length)return n(m,P),pe&&Ln(m,A),b;if(P===null){for(;A<g.length;A++)P=f(m,g[A],x),P!==null&&(h=o(P,h,A),E===null?b=P:E.sibling=P,E=P);return pe&&Ln(m,A),b}for(P=r(m,P);A<g.length;A++)N=v(P,m,A,g[A],x),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?A:N.key),h=o(N,h,A),E===null?b=N:E.sibling=N,E=N);return e&&P.forEach(function(oe){return t(m,oe)}),pe&&Ln(m,A),b}function w(m,h,g,x){var b=Ur(g);if(typeof b!="function")throw Error(j(150));if(g=b.call(g),g==null)throw Error(j(151));for(var E=b=null,P=h,A=h=0,N=null,I=g.next();P!==null&&!I.done;A++,I=g.next()){P.index>A?(N=P,P=null):N=P.sibling;var oe=p(m,P,I.value,x);if(oe===null){P===null&&(P=N);break}e&&P&&oe.alternate===null&&t(m,P),h=o(oe,h,A),E===null?b=oe:E.sibling=oe,E=oe,P=N}if(I.done)return n(m,P),pe&&Ln(m,A),b;if(P===null){for(;!I.done;A++,I=g.next())I=f(m,I.value,x),I!==null&&(h=o(I,h,A),E===null?b=I:E.sibling=I,E=I);return pe&&Ln(m,A),b}for(P=r(m,P);!I.done;A++,I=g.next())I=v(P,m,A,I.value,x),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?A:I.key),h=o(I,h,A),E===null?b=I:E.sibling=I,E=I);return e&&P.forEach(function(fe){return t(m,fe)}),pe&&Ln(m,A),b}function k(m,h,g,x){if(typeof g=="object"&&g!==null&&g.type===rr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ao:e:{for(var b=g.key,E=h;E!==null;){if(E.key===b){if(b=g.type,b===rr){if(E.tag===7){n(m,E.sibling),h=i(E,g.props.children),h.return=m,m=h;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&Rf(b)===E.type){n(m,E.sibling),h=i(E,g.props),h.ref=Qr(m,E,g),h.return=m,m=h;break e}n(m,E);break}else t(m,E);E=E.sibling}g.type===rr?(h=Nn(g.props.children,m.mode,x,g.key),h.return=m,m=h):(x=Ho(g.type,g.key,g.props,null,m.mode,x),x.ref=Qr(m,h,g),x.return=m,m=x)}return a(m);case nr:e:{for(E=g.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=il(g,m.mode,x),h.return=m,m=h}return a(m);case on:return E=g._init,k(m,h,E(g._payload),x)}if(oi(g))return y(m,h,g,x);if(Ur(g))return w(m,h,g,x);yo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=rl(g,m.mode,x),h.return=m,m=h),a(m)):n(m,h)}return k}var zr=i1(!0),o1=i1(!1),da=Pn(null),fa=null,dr=null,Ou=null;function Du(){Ou=dr=fa=null}function Vu(e){var t=da.current;de(da),e._currentValue=t}function Cc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function br(e,t){fa=e,Ou=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Ou!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(fa===null)throw Error(j(308));dr=e,fa.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var _n=null;function Nu(e){_n===null?_n=[e]:_n.push(e)}function a1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Nu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Nu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}function _f(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pa(e,t,n,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=c=l=null,s=o;do{var p=s.lane,v=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(p=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(v,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(v,f,p):y,p==null)break e;f=ge({},f,p);break e;case 2:an=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=v,l=f):u=u.next=v,a|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Un|=a,e.lanes=a,e.memoizedState=f}}function Of(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var qi={},Ot=Pn(qi),Di=Pn(qi),Vi=Pn(qi);function On(e){if(e===qi)throw Error(j(174));return e}function Fu(e,t){switch(le(Vi,t),le(Di,e),le(Ot,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ic(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ic(t,e)}de(Ot),le(Ot,t)}function Lr(){de(Ot),de(Di),de(Vi)}function l1(e){On(Vi.current);var t=On(Ot.current),n=ic(t,e.type);t!==n&&(le(Di,e),le(Ot,n))}function Bu(e){Di.current===e&&(de(Ot),de(Di))}var he=Pn(0);function ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zs=[];function Hu(){for(var e=0;e<Zs.length;e++)Zs[e]._workInProgressVersionPrimary=null;Zs.length=0}var Vo=qt.ReactCurrentDispatcher,qs=qt.ReactCurrentBatchConfig,Hn=0,me=null,Ae=null,Le=null,ma=!1,hi=!1,Ni=0,ey=0;function Fe(){throw Error(j(321))}function Uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Wu(e,t,n,r,i,o){if(Hn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?iy:oy,e=n(r,i),hi){o=0;do{if(hi=!1,Ni=0,25<=o)throw Error(j(301));o+=1,Le=Ae=null,t.updateQueue=null,Vo.current=ay,e=n(r,i)}while(hi)}if(Vo.current=ga,t=Ae!==null&&Ae.next!==null,Hn=0,Le=Ae=me=null,ma=!1,t)throw Error(j(300));return e}function Yu(){var e=Ni!==0;return Ni=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?me.memoizedState=Le=e:Le=Le.next=e,Le}function xt(){if(Ae===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Le===null?me.memoizedState:Le.next;if(t!==null)Le=t,Ae=e;else{if(e===null)throw Error(j(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Le===null?me.memoizedState=Le=e:Le=Le.next=e}return Le}function $i(e,t){return typeof t=="function"?t(e):t}function Js(e){var t=xt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((Hn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,me.lanes|=u,Un|=u}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,zt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Un|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=xt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);zt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function c1(){}function u1(e,t){var n=me,r=xt(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,Gu(p1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Fi(9,f1.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(j(349));Hn&30||d1(n,t,i)}return i}function d1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f1(e,t,n,r){t.value=n,t.getSnapshot=r,h1(t)&&m1(e)}function p1(e,t,n){return n(function(){h1(t)&&m1(e)})}function h1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function m1(e){var t=Qt(e,1);t!==null&&At(t,e,1,-1)}function Df(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=ry.bind(null,me,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function g1(){return xt().memoizedState}function No(e,t,n,r){var i=Mt();me.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function Ga(e,t,n,r){var i=xt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&Uu(r,a.deps)){i.memoizedState=Fi(t,n,o,r);return}}me.flags|=e,i.memoizedState=Fi(1|t,n,o,r)}function Vf(e,t){return No(8390656,8,e,t)}function Gu(e,t){return Ga(2048,8,e,t)}function v1(e,t){return Ga(4,2,e,t)}function y1(e,t){return Ga(4,4,e,t)}function x1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w1(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4,4,x1.bind(null,t,e),n)}function Ku(){}function S1(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function k1(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function b1(e,t,n){return Hn&21?(zt(n,t)||(n=jh(),me.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function ty(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=qs.transition;qs.transition={};try{e(!1),t()}finally{ne=n,qs.transition=r}}function C1(){return xt().memoizedState}function ny(e,t,n){var r=xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},T1(e))E1(t,n);else if(n=a1(e,t,n,r),n!==null){var i=Ge();At(n,e,r,i),P1(n,t,r)}}function ry(e,t,n){var r=xn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(T1(e))E1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,zt(s,a)){var l=t.interleaved;l===null?(i.next=i,Nu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=a1(e,t,i,r),n!==null&&(i=Ge(),At(n,e,r,i),P1(n,t,r))}}function T1(e){var t=e.alternate;return e===me||t!==null&&t===me}function E1(e,t){hi=ma=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function P1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}var ga={readContext:yt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},iy={readContext:yt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Vf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,x1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ny.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Df,useDebugValue:Ku,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Df(!1),t=e[0];return e=ty.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,i=Mt();if(pe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Me===null)throw Error(j(349));Hn&30||d1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vf(p1.bind(null,r,o,e),[e]),r.flags|=2048,Fi(9,f1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Me.identifierPrefix;if(pe){var n=Ht,r=Bt;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ey++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},oy={readContext:yt,useCallback:S1,useContext:yt,useEffect:Gu,useImperativeHandle:w1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:k1,useReducer:Js,useRef:g1,useState:function(){return Js($i)},useDebugValue:Ku,useDeferredValue:function(e){var t=xt();return b1(t,Ae.memoizedState,e)},useTransition:function(){var e=Js($i)[0],t=xt().memoizedState;return[e,t]},useMutableSource:c1,useSyncExternalStore:u1,useId:C1,unstable_isNewReconciler:!1},ay={readContext:yt,useCallback:S1,useContext:yt,useEffect:Gu,useImperativeHandle:w1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:k1,useReducer:el,useRef:g1,useState:function(){return el($i)},useDebugValue:Ku,useDeferredValue:function(e){var t=xt();return Ae===null?t.memoizedState=e:b1(t,Ae.memoizedState,e)},useTransition:function(){var e=el($i)[0],t=xt().memoizedState;return[e,t]},useMutableSource:c1,useSyncExternalStore:u1,useId:C1,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ka={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=xn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(At(t,e,i,r),Do(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=xn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(At(t,e,i,r),Do(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=xn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=vn(e,i,r),t!==null&&(At(t,e,r,n),Do(t,e,r))}};function Nf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,o):!0}function j1(e,t,n){var r=!1,i=Cn,o=t.contextType;return typeof o=="object"&&o!==null?o=yt(o):(i=tt(t)?Fn:Ue.current,r=t.contextTypes,o=(r=r!=null)?jr(e,i):Cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $f(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function Ec(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$u(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=yt(o):(o=tt(t)?Fn:Ue.current,i.context=jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Tc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ka.enqueueReplaceState(i,i.state,null),pa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t){try{var n="",r=t;do n+=Rg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function A1(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ya||(ya=!0,Dc=r),Pc(e,t)},n}function z1(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pc(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ff(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sy.bind(null,e,t,n),t.then(e,e))}function Bf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e)}var ly=qt.ReactCurrentOwner,Je=!1;function Ye(e,t,n,r){t.child=e===null?o1(t,null,n,r):zr(t,e.child,n,r)}function Uf(e,t,n,r,i){n=n.render;var o=t.ref;return br(t,i),r=Wu(e,t,n,r,o,i),n=Yu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(pe&&n&&Iu(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Wf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!nd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,L1(e,t,o,r,i)):(e=Ho(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(a,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function L1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ii(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return jc(e,t,n,r,i)}function M1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(pr,it),it|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(pr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(pr,it),it|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(pr,it),it|=r;return Ye(e,t,i,n),t.child}function I1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,n,r,i){var o=tt(n)?Fn:Ue.current;return o=jr(t,o),br(t,i),n=Wu(e,t,n,r,o,i),r=Yu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(pe&&r&&Iu(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Yf(e,t,n,r,i){if(tt(n)){var o=!0;la(t)}else o=!1;if(br(t,i),t.stateNode===null)$o(e,t),j1(t,n,r),Ec(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=yt(c):(c=tt(n)?Fn:Ue.current,c=jr(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&$f(t,a,r,c),an=!1;var p=t.memoizedState;a.state=p,pa(t,r,a,i),l=t.memoizedState,s!==r||p!==l||et.current||an?(typeof u=="function"&&(Tc(t,n,u,r),l=t.memoizedState),(s=an||Nf(t,n,s,r,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,s1(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ct(t.type,s),a.props=c,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=tt(n)?Fn:Ue.current,l=jr(t,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&$f(t,a,r,l),an=!1,p=t.memoizedState,a.state=p,pa(t,r,a,i);var y=t.memoizedState;s!==f||p!==y||et.current||an?(typeof v=="function"&&(Tc(t,n,v,r),y=t.memoizedState),(c=an||Nf(t,n,c,r,p,y,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ac(e,t,n,r,o,i)}function Ac(e,t,n,r,i,o){I1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Lf(t,n,!1),Xt(e,t,o);r=t.stateNode,ly.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=zr(t,e.child,null,o),t.child=zr(t,null,s,o)):Ye(e,t,s,o),t.memoizedState=r.state,i&&Lf(t,n,!0),t.child}function R1(e){var t=e.stateNode;t.pendingContext?zf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zf(e,t.context,!1),Fu(e,t.containerInfo)}function Gf(e,t,n,r,i){return Ar(),_u(i),t.flags|=256,Ye(e,t,n,r),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Lc(e){return{baseLanes:e,cachePool:null,transitions:null}}function _1(e,t,n){var r=t.pendingProps,i=he.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(he,i&1),e===null)return bc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Za(a,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lc(n),t.memoizedState=zc,e):Qu(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return cy(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=wn(s,o):(o=Nn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Lc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=zc,r}return o=e.child,e=o.sibling,r=wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qu(e,t){return t=Za({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&_u(r),zr(t,e.child,null,n),e=Qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(j(422))),xo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Za({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zr(t,e.child,null,a),t.child.memoizedState=Lc(a),t.memoizedState=zc,o);if(!(t.mode&1))return xo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=tl(o,r,void 0),xo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Je||s){if(r=Me,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(e,i),At(r,e,i,-1))}return td(),r=tl(Error(j(421))),xo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ky.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=gn(i.nextSibling),at=t,pe=!0,Et=null,e!==null&&(ht[mt++]=Bt,ht[mt++]=Ht,ht[mt++]=Bn,Bt=e.id,Ht=e.overflow,Bn=t),t=Qu(t,r.children),t.flags|=4096,t)}function Kf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cc(e.return,t,n)}function nl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function O1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kf(e,n,t);else if(e.tag===19)Kf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ha(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ha(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,o);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uy(e,t,n){switch(t.tag){case 3:R1(t),Ar();break;case 5:l1(t);break;case 1:tt(t.type)&&la(t);break;case 4:Fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(da,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?_1(e,t,n):(le(he,he.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);le(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return O1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,M1(e,t,n)}return Xt(e,t,n)}var D1,Mc,V1,N1;D1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};V1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(Ot.current);var o=null;switch(n){case"input":i=ec(e,i),r=ec(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=rc(e,i),r=rc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=aa)}oc(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ei.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ue("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};N1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xr(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dy(e,t,n){var r=t.pendingProps;switch(Ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return tt(t.type)&&sa(),Be(t),null;case 3:return r=t.stateNode,Lr(),de(et),de(Ue),Hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&($c(Et),Et=null))),Mc(e,t),Be(t),null;case 5:Bu(t);var i=On(Vi.current);if(n=t.type,e!==null&&t.stateNode!=null)V1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Be(t),null}if(e=On(Ot.current),vo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[Oi]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)ue(si[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":nf(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":of(r,o),ue("invalid",r)}oc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&go(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&go(r.textContent,s,e),i=["children",""+s]):Ei.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":so(r),rf(r,o,!0);break;case"textarea":so(r),af(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=aa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ph(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Rt]=t,e[Oi]=r,D1(e,t,!1,!1),t.stateNode=e;e:{switch(a=ac(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)ue(si[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":nf(e,r),i=ec(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ue("invalid",e);break;case"textarea":of(e,r),i=rc(e,r),ue("invalid",e);break;default:i=r}oc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?gh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pi(e,l):typeof l=="number"&&Pi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ue("scroll",e):l!=null&&xu(e,o,l,a))}switch(n){case"input":so(e),rf(e,r,!1);break;case"textarea":so(e),af(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xr(e,!!r.multiple,o,!1):r.defaultValue!=null&&xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)N1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=On(Vi.current),On(Ot.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Be(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ot!==null&&t.mode&1&&!(t.flags&128))r1(),Ar(),t.flags|=98560,o=!1;else if(o=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Rt]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),o=!1}else Et!==null&&($c(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?ze===0&&(ze=3):td())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Lr(),Mc(e,t),e===null&&Ri(t.stateNode.containerInfo),Be(t),null;case 10:return Vu(t.type._context),Be(t),null;case 17:return tt(t.type)&&sa(),Be(t),null;case 19:if(de(he),o=t.memoizedState,o===null)return Be(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Xr(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ha(e),a!==null){for(t.flags|=128,Xr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(he,he.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ir&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ha(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!pe)return Be(t),null}else 2*Te()-o.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=he.current,le(he,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return ed(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function fy(e,t){switch(Ru(t),t.tag){case 1:return tt(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),de(et),de(Ue),Hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bu(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return Lr(),null;case 10:return Vu(t.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var wo=!1,He=!1,py=typeof WeakSet=="function"?WeakSet:Set,O=null;function fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Ic(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Qf=!1;function hy(e,t){if(gc=ra,e=Uh(),Mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,f=e,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++c===i&&(s=a),p===o&&++u===r&&(l=a),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:e,selectionRange:n},ra=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ct(t.type,w),k);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){xe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=Qf,Qf=!1,y}function mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ic(t,n,o)}i=i.next}while(i!==r)}}function Qa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $1(e){var t=e.alternate;t!==null&&(e.alternate=null,$1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Oi],delete t[wc],delete t[Xv],delete t[Zv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function F1(e){return e.tag===5||e.tag===3||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=aa));else if(r!==4&&(e=e.child,e!==null))for(_c(e,t,n),e=e.sibling;e!==null;)_c(e,t,n),e=e.sibling}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}var De=null,Tt=!1;function en(e,t,n){for(n=n.child;n!==null;)B1(e,t,n),n=n.sibling}function B1(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:He||fr(n,t);case 6:var r=De,i=Tt;De=null,en(e,t,n),De=r,Tt=i,De!==null&&(Tt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Tt?(e=De,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),Li(e)):Qs(De,n.stateNode));break;case 4:r=De,i=Tt,De=n.stateNode.containerInfo,Tt=!0,en(e,t,n),De=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ic(n,t,a),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!He&&(fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){xe(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,en(e,t,n),He=r):en(e,t,n);break;default:en(e,t,n)}}function Zf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new py),t.forEach(function(r){var i=by.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,Tt=!1;break e;case 3:De=s.stateNode.containerInfo,Tt=!0;break e;case 4:De=s.stateNode.containerInfo,Tt=!0;break e}s=s.return}if(De===null)throw Error(j(160));B1(o,a,i),De=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){xe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)H1(t,e),t=t.sibling}function H1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Lt(e),r&4){try{mi(3,e,e.return),Qa(3,e)}catch(w){xe(e,e.return,w)}try{mi(5,e,e.return)}catch(w){xe(e,e.return,w)}}break;case 1:kt(t,e),Lt(e),r&512&&n!==null&&fr(n,n.return);break;case 5:if(kt(t,e),Lt(e),r&512&&n!==null&&fr(n,n.return),e.flags&32){var i=e.stateNode;try{Pi(i,"")}catch(w){xe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&dh(i,o),ac(s,a);var c=ac(s,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?gh(i,f):u==="dangerouslySetInnerHTML"?hh(i,f):u==="children"?Pi(i,f):xu(i,u,f,c)}switch(s){case"input":tc(i,o);break;case"textarea":fh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?xr(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?xr(i,!!o.multiple,o.defaultValue,!0):xr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Oi]=o}catch(w){xe(e,e.return,w)}}break;case 6:if(kt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){xe(e,e.return,w)}}break;case 3:if(kt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(w){xe(e,e.return,w)}break;case 4:kt(t,e),Lt(e);break;case 13:kt(t,e),Lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(qu=Te())),r&4&&Zf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(He=(c=He)||u,kt(t,e),He=c):kt(t,e),Lt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(f=O=u;O!==null;){switch(p=O,v=p.child,p.tag){case 0:case 11:case 14:case 15:mi(4,p,p.return);break;case 1:fr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){xe(r,n,w)}}break;case 5:fr(p,p.return);break;case 22:if(p.memoizedState!==null){Jf(f);continue}}v!==null?(v.return=p,O=v):Jf(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=mh("display",a))}catch(w){xe(e,e.return,w)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){xe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kt(t,e),Lt(e),r&4&&Zf(e);break;case 21:break;default:kt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(F1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var o=Xf(e);Oc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Xf(e);_c(e,s,a);break;default:throw Error(j(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function my(e,t,n){O=e,U1(e)}function U1(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||He;s=wo;var c=He;if(wo=a,(He=l)&&!c)for(O=i;O!==null;)a=O,l=a.child,a.tag===22&&a.memoizedState!==null?ep(i):l!==null?(l.return=a,O=l):ep(i);for(;o!==null;)O=o,U1(o),o=o.sibling;O=i,wo=s,He=c}qf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):qf(e)}}function qf(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Qa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Of(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Of(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Li(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}He||t.flags&512&&Rc(t)}catch(p){xe(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Jf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function ep(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qa(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){xe(t,i,l)}}var o=t.return;try{Rc(t)}catch(l){xe(t,o,l)}break;case 5:var a=t.return;try{Rc(t)}catch(l){xe(t,a,l)}}}catch(l){xe(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var gy=Math.ceil,va=qt.ReactCurrentDispatcher,Xu=qt.ReactCurrentOwner,vt=qt.ReactCurrentBatchConfig,Z=0,Me=null,Ee=null,Ve=0,it=0,pr=Pn(0),ze=0,Bi=null,Un=0,Xa=0,Zu=0,gi=null,qe=null,qu=0,Ir=1/0,$t=null,ya=!1,Dc=null,yn=null,So=!1,dn=null,xa=0,vi=0,Vc=null,Fo=-1,Bo=0;function Ge(){return Z&6?Te():Fo!==-1?Fo:Fo=Te()}function xn(e){return e.mode&1?Z&2&&Ve!==0?Ve&-Ve:Jv.transition!==null?(Bo===0&&(Bo=jh()),Bo):(e=ne,e!==0||(e=window.event,e=e===void 0?16:_h(e.type)),e):1}function At(e,t,n,r){if(50<vi)throw vi=0,Vc=null,Error(j(185));Qi(e,n,r),(!(Z&2)||e!==Me)&&(e===Me&&(!(Z&2)&&(Xa|=n),ze===4&&cn(e,Ve)),nt(e,r),n===1&&Z===0&&!(t.mode&1)&&(Ir=Te()+500,Ya&&jn()))}function nt(e,t){var n=e.callbackNode;Jg(e,t);var r=na(e,e===Me?Ve:0);if(r===0)n!==null&&cf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cf(n),t===1)e.tag===0?qv(tp.bind(null,e)):e1(tp.bind(null,e)),Kv(function(){!(Z&6)&&jn()}),n=null;else{switch(Ah(r)){case 1:n=Cu;break;case 4:n=Eh;break;case 16:n=ta;break;case 536870912:n=Ph;break;default:n=ta}n=q1(n,W1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W1(e,t){if(Fo=-1,Bo=0,Z&6)throw Error(j(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=na(e,e===Me?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wa(e,r);else{t=r;var i=Z;Z|=2;var o=G1();(Me!==e||Ve!==t)&&($t=null,Ir=Te()+500,Vn(e,t));do try{xy();break}catch(s){Y1(e,s)}while(!0);Du(),va.current=o,Z=i,Ee!==null?t=0:(Me=null,Ve=0,t=ze)}if(t!==0){if(t===2&&(i=dc(e),i!==0&&(r=i,t=Nc(e,i))),t===1)throw n=Bi,Vn(e,0),cn(e,r),nt(e,Te()),n;if(t===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!vy(i)&&(t=wa(e,r),t===2&&(o=dc(e),o!==0&&(r=o,t=Nc(e,o))),t===1))throw n=Bi,Vn(e,0),cn(e,r),nt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Mn(e,qe,$t);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=qu+500-Te(),10<t)){if(na(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xc(Mn.bind(null,e,qe,$t),t);break}Mn(e,qe,$t);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-jt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gy(r/1960))-r,10<r){e.timeoutHandle=xc(Mn.bind(null,e,qe,$t),r);break}Mn(e,qe,$t);break;case 5:Mn(e,qe,$t);break;default:throw Error(j(329))}}}return nt(e,Te()),e.callbackNode===n?W1.bind(null,e):null}function Nc(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=wa(e,t),e!==2&&(t=qe,qe=n,t!==null&&$c(t)),e}function $c(e){qe===null?qe=e:qe.push.apply(qe,e)}function vy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~Zu,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function tp(e){if(Z&6)throw Error(j(327));Cr();var t=na(e,0);if(!(t&1))return nt(e,Te()),null;var n=wa(e,t);if(e.tag!==0&&n===2){var r=dc(e);r!==0&&(t=r,n=Nc(e,r))}if(n===1)throw n=Bi,Vn(e,0),cn(e,t),nt(e,Te()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,qe,$t),nt(e,Te()),null}function Ju(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Ir=Te()+500,Ya&&jn())}}function Wn(e){dn!==null&&dn.tag===0&&!(Z&6)&&Cr();var t=Z;Z|=1;var n=vt.transition,r=ne;try{if(vt.transition=null,ne=1,e)return e()}finally{ne=r,vt.transition=n,Z=t,!(Z&6)&&jn()}}function ed(){it=pr.current,de(pr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gv(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:Lr(),de(et),de(Ue),Hu();break;case 5:Bu(r);break;case 4:Lr();break;case 13:de(he);break;case 19:de(he);break;case 10:Vu(r.type._context);break;case 22:case 23:ed()}n=n.return}if(Me=e,Ee=e=wn(e.current,null),Ve=it=t,ze=0,Bi=null,Zu=Xa=Un=0,qe=gi=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}_n=null}return e}function Y1(e,t){do{var n=Ee;try{if(Du(),Vo.current=ga,ma){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ma=!1}if(Hn=0,Le=Ae=me=null,hi=!1,Ni=0,Xu.current=null,n===null||n.return===null){ze=1,Bi=t,Ee=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=Bf(a);if(v!==null){v.flags&=-257,Hf(v,a,s,o,t),v.mode&1&&Ff(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Ff(o,c,t),td();break e}l=Error(j(426))}}else if(pe&&s.mode&1){var k=Bf(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Hf(k,a,s,o,t),_u(Mr(l,s));break e}}o=l=Mr(l,s),ze!==4&&(ze=2),gi===null?gi=[o]:gi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=A1(o,l,t);_f(o,m);break e;case 1:s=l;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yn===null||!yn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=z1(o,s,t);_f(o,x);break e}}o=o.return}while(o!==null)}Q1(n)}catch(b){t=b,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function G1(){var e=va.current;return va.current=ga,e===null?ga:e}function td(){(ze===0||ze===3||ze===2)&&(ze=4),Me===null||!(Un&268435455)&&!(Xa&268435455)||cn(Me,Ve)}function wa(e,t){var n=Z;Z|=2;var r=G1();(Me!==e||Ve!==t)&&($t=null,Vn(e,t));do try{yy();break}catch(i){Y1(e,i)}while(!0);if(Du(),Z=n,va.current=r,Ee!==null)throw Error(j(261));return Me=null,Ve=0,ze}function yy(){for(;Ee!==null;)K1(Ee)}function xy(){for(;Ee!==null&&!Ug();)K1(Ee)}function K1(e){var t=Z1(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Q1(e):Ee=t,Xu.current=null}function Q1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fy(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ee=null;return}}else if(n=dy(n,t,it),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);ze===0&&(ze=5)}function Mn(e,t,n){var r=ne,i=vt.transition;try{vt.transition=null,ne=1,wy(e,t,n,r)}finally{vt.transition=i,ne=r}return null}function wy(e,t,n,r){do Cr();while(dn!==null);if(Z&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ev(e,o),e===Me&&(Ee=Me=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,q1(ta,function(){return Cr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=vt.transition,vt.transition=null;var a=ne;ne=1;var s=Z;Z|=4,Xu.current=null,hy(e,n),H1(n,e),$v(vc),ra=!!gc,vc=gc=null,e.current=n,my(n),Wg(),Z=s,ne=a,vt.transition=o}else e.current=n;if(So&&(So=!1,dn=e,xa=i),o=e.pendingLanes,o===0&&(yn=null),Kg(n.stateNode),nt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ya)throw ya=!1,e=Dc,Dc=null,e;return xa&1&&e.tag!==0&&Cr(),o=e.pendingLanes,o&1?e===Vc?vi++:(vi=0,Vc=e):vi=0,jn(),null}function Cr(){if(dn!==null){var e=Ah(xa),t=vt.transition,n=ne;try{if(vt.transition=null,ne=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,xa=0,Z&6)throw Error(j(331));var i=Z;for(Z|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:mi(8,u,o)}var f=u.child;if(f!==null)f.return=u,O=f;else for(;O!==null;){u=O;var p=u.sibling,v=u.return;if($1(u),u===c){O=null;break}if(p!==null){p.return=v,O=p;break}O=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,O=m;break e}O=o.return}}var h=e.current;for(O=h;O!==null;){a=O;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,O=g;else e:for(a=h;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qa(9,s)}}catch(b){xe(s,s.return,b)}if(s===a){O=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,O=x;break e}O=s.return}}if(Z=i,jn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Fa,e)}catch{}r=!0}return r}finally{ne=n,vt.transition=t}}return!1}function np(e,t,n){t=Mr(n,t),t=A1(e,t,1),e=vn(e,t,1),t=Ge(),e!==null&&(Qi(e,1,t),nt(e,t))}function xe(e,t,n){if(e.tag===3)np(e,e,n);else for(;t!==null;){if(t.tag===3){np(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Mr(n,e),e=z1(t,e,1),t=vn(t,e,1),e=Ge(),t!==null&&(Qi(t,1,e),nt(t,e));break}}t=t.return}}function Sy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Ve&n)===n&&(ze===4||ze===3&&(Ve&130023424)===Ve&&500>Te()-qu?Vn(e,0):Zu|=n),nt(e,t)}function X1(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=Ge();e=Qt(e,t),e!==null&&(Qi(e,t,n),nt(e,n))}function ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),X1(e,n)}function by(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),X1(e,n)}var Z1;Z1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,uy(e,t,n);Je=!!(e.flags&131072)}else Je=!1,pe&&t.flags&1048576&&t1(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var i=jr(t,Ue.current);br(t,n),i=Wu(null,t,r,e,i,n);var o=Yu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,la(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$u(t),i.updater=Ka,t.stateNode=i,i._reactInternals=t,Ec(t,r,e,n),t=Ac(null,t,r,!0,o,n)):(t.tag=0,pe&&o&&Iu(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ty(r),e=Ct(r,e),i){case 0:t=jc(null,t,r,e,n);break e;case 1:t=Yf(null,t,r,e,n);break e;case 11:t=Uf(null,t,r,e,n);break e;case 14:t=Wf(null,t,r,Ct(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),jc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Yf(e,t,r,i,n);case 3:e:{if(R1(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,s1(e,t),pa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Mr(Error(j(423)),t),t=Gf(e,t,r,n,i);break e}else if(r!==i){i=Mr(Error(j(424)),t),t=Gf(e,t,r,n,i);break e}else for(ot=gn(t.stateNode.containerInfo.firstChild),at=t,pe=!0,Et=null,n=o1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=Xt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return l1(t),e===null&&bc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,yc(r,i)?a=null:o!==null&&yc(r,o)&&(t.flags|=32),I1(e,t),Ye(e,t,a,n),t.child;case 6:return e===null&&bc(t),null;case 13:return _1(e,t,n);case 4:return Fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Uf(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,le(da,r._currentValue),r._currentValue=a,o!==null)if(zt(o.value,a)){if(o.children===i.children&&!et.current){t=Xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Wt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Cc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,br(t,n),i=yt(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),Wf(e,t,r,i,n);case 15:return L1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),$o(e,t),t.tag=1,tt(r)?(e=!0,la(t)):e=!1,br(t,n),j1(t,r,i),Ec(t,r,i,n),Ac(null,t,r,!0,e,n);case 19:return O1(e,t,n);case 22:return M1(e,t,n)}throw Error(j(156,t.tag))};function q1(e,t){return Th(e,t)}function Cy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Cy(e,t,n,r)}function nd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ty(e){if(typeof e=="function")return nd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Su)return 11;if(e===ku)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")nd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rr:return Nn(n.children,i,o,t);case wu:a=8,i|=8;break;case Xl:return e=gt(12,n,t,i|2),e.elementType=Xl,e.lanes=o,e;case Zl:return e=gt(13,n,t,i),e.elementType=Zl,e.lanes=o,e;case ql:return e=gt(19,n,t,i),e.elementType=ql,e.lanes=o,e;case lh:return Za(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ah:a=10;break e;case sh:a=9;break e;case Su:a=11;break e;case ku:a=14;break e;case on:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=gt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Za(e,t,n,r){return e=gt(22,e,r,t),e.elementType=lh,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ey(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rd(e,t,n,r,i,o,a,s,l){return e=new Ey(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(o),e}function Py(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function J1(e){if(!e)return Cn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(tt(n))return Jh(e,n,t)}return t}function em(e,t,n,r,i,o,a,s,l){return e=rd(n,r,!0,e,i,o,a,s,l),e.context=J1(null),n=e.current,r=Ge(),i=xn(n),o=Wt(r,i),o.callback=t??null,vn(n,o,i),e.current.lanes=i,Qi(e,i,r),nt(e,r),e}function qa(e,t,n,r){var i=t.current,o=Ge(),a=xn(i);return n=J1(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(i,t,a),e!==null&&(At(e,i,a,o),Do(e,i,a)),a}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function id(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function jy(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function od(e){this._internalRoot=e}Ja.prototype.render=od.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));qa(e,t,null,null)};Ja.prototype.unmount=od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){qa(null,e,null,null)}),t[Kt]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&Rh(e)}};function ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ip(){}function Ay(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Sa(a);o.call(c)}}var a=em(t,r,e,0,null,!1,!1,"",ip);return e._reactRootContainer=a,e[Kt]=a.current,Ri(e.nodeType===8?e.parentNode:e),Wn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Sa(l);s.call(c)}}var l=rd(e,0,!1,null,null,!1,!1,"",ip);return e._reactRootContainer=l,e[Kt]=l.current,Ri(e.nodeType===8?e.parentNode:e),Wn(function(){qa(t,l,n,r)}),l}function ts(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Sa(a);s.call(l)}}qa(t,a,e,i)}else a=Ay(n,t,e,i,r);return Sa(a)}zh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ai(t.pendingLanes);n!==0&&(Tu(t,n|1),nt(t,Te()),!(Z&6)&&(Ir=Te()+500,jn()))}break;case 13:Wn(function(){var r=Qt(e,1);if(r!==null){var i=Ge();At(r,e,1,i)}}),id(e,1)}};Eu=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Ge();At(t,e,134217728,n)}id(e,134217728)}};Lh=function(e){if(e.tag===13){var t=xn(e),n=Qt(e,t);if(n!==null){var r=Ge();At(n,e,t,r)}id(e,t)}};Mh=function(){return ne};Ih=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};lc=function(e,t,n){switch(t){case"input":if(tc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wa(r);if(!i)throw Error(j(90));uh(r),tc(r,i)}}}break;case"textarea":fh(e,n);break;case"select":t=n.value,t!=null&&xr(e,!!n.multiple,t,!1)}};xh=Ju;wh=Wn;var zy={usingClientEntryPoint:!1,Events:[Zi,sr,Wa,vh,yh,Ju]},Zr={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ly={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bh(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Fa=ko.inject(Ly),_t=ko}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zy;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(t))throw Error(j(200));return Py(e,t,null,n)};ct.createRoot=function(e,t){if(!ad(e))throw Error(j(299));var n=!1,r="",i=tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rd(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,Ri(e.nodeType===8?e.parentNode:e),new od(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=bh(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Wn(e)};ct.hydrate=function(e,t,n){if(!es(t))throw Error(j(200));return ts(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!ad(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=em(t,null,e,1,n??null,i,!1,o,a),e[Kt]=t.current,Ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ja(t)};ct.render=function(e,t,n){if(!es(t))throw Error(j(200));return ts(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!es(e))throw Error(j(40));return e._reactRootContainer?(Wn(function(){ts(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};ct.unstable_batchedUpdates=Ju;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!es(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ts(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm)}catch(e){console.error(e)}}nm(),nh.exports=ct;var My=nh.exports,op=My;Kl.createRoot=op.createRoot,Kl.hydrateRoot=op.hydrateRoot;var rm={exports:{}},Iy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ry=Iy,_y=Ry;function im(){}function om(){}om.resetWarningCache=im;var Oy=function(){function e(r,i,o,a,s,l){if(l!==_y){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:om,resetWarningCache:im};return n.PropTypes=n,n};rm.exports=Oy();var Dy=rm.exports;const K=Dr(Dy);var Vy=typeof Element<"u",Ny=typeof Map=="function",$y=typeof Set=="function",Fy=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Uo(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Uo(e[r],t[r]))return!1;return!0}var o;if(Ny&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Uo(r.value[1],t.get(r.value[0])))return!1;return!0}if($y&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Fy&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(Vy&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Uo(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var By=function(t,n){try{return Uo(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Hy=Dr(By);var Uy=function(e,t,n,r,i,o,a,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,s],u=0;l=new Error(t.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},Wy=Uy;const ap=Dr(Wy);var Yy=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var f=t[u],p=n[u];if(o=r?r.call(i,f,p,u):void 0,o===!1||o===void 0&&f!==p)return!1}return!0};const Gy=Dr(Yy);function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function sd(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Fc(e,t)}function Fc(e,t){return Fc=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Fc(e,t)}function sp(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var D={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Ky={rel:["amphtml","canonical","alternate"]},Qy={type:["application/ld+json"]},Xy={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},lp=Object.keys(D).map(function(e){return D[e]}),ka={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Zy=Object.keys(ka).reduce(function(e,t){return e[ka[t]]=t,e},{}),Tr=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},qy=function(e){var t=Tr(e,D.TITLE),n=Tr(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,function(){return t});var r=Tr(e,"defaultTitle");return t||r||void 0},Jy=function(e){return Tr(e,"onChangeClientState")||function(){}},ol=function(e,t){return t.filter(function(n){return n[e]!==void 0}).map(function(n){return n[e]}).reduce(function(n,r){return Ce({},n,r)},{})},e5=function(e,t){return t.filter(function(n){return n[D.BASE]!==void 0}).map(function(n){return n[D.BASE]}).reverse().reduce(function(n,r){if(!n.length)for(var i=Object.keys(r),o=0;o<i.length;o+=1){var a=i[o].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}return n},[])},qr=function(e,t,n){var r={};return n.filter(function(i){return!!Array.isArray(i[e])||(i[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof i[e]+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,o){var a={};o.filter(function(f){for(var p,v=Object.keys(f),y=0;y<v.length;y+=1){var w=v[y],k=w.toLowerCase();t.indexOf(k)===-1||p==="rel"&&f[p].toLowerCase()==="canonical"||k==="rel"&&f[k].toLowerCase()==="stylesheet"||(p=k),t.indexOf(w)===-1||w!=="innerHTML"&&w!=="cssText"&&w!=="itemprop"||(p=w)}if(!p||!f[p])return!1;var m=f[p].toLowerCase();return r[p]||(r[p]={}),a[p]||(a[p]={}),!r[p][m]&&(a[p][m]=!0,!0)}).reverse().forEach(function(f){return i.push(f)});for(var s=Object.keys(a),l=0;l<s.length;l+=1){var c=s[l],u=Ce({},r[c],a[c]);r[c]=u}return i},[]).reverse()},t5=function(e,t){if(Array.isArray(e)&&e.length){for(var n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},am=function(e){return Array.isArray(e)?e.join(""):e},al=function(e,t){return Array.isArray(e)?e.reduce(function(n,r){return function(i,o){for(var a=Object.keys(i),s=0;s<a.length;s+=1)if(o[a[s]]&&o[a[s]].includes(i[a[s]]))return!0;return!1}(r,t)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:e}},cp=function(e,t){var n;return Ce({},e,((n={})[t]=void 0,n))},n5=[D.NOSCRIPT,D.SCRIPT,D.STYLE],sl=function(e,t){return t===void 0&&(t=!0),t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},up=function(e){return Object.keys(e).reduce(function(t,n){var r=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},dp=function(e,t){return t===void 0&&(t={}),Object.keys(e).reduce(function(n,r){return n[ka[r]||r]=e[r],n},t)},Wo=function(e,t){return t.map(function(n,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(a){var s=ka[a]||a;s==="innerHTML"||s==="cssText"?o.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:o[s]=n[a]}),ce.createElement(e,o)})},ft=function(e,t,n){switch(e){case D.TITLE:return{toComponent:function(){return i=t.titleAttributes,(o={key:r=t.title})["data-rh"]=!0,a=dp(i,o),[ce.createElement(D.TITLE,a,r)];var r,i,o,a},toString:function(){return function(r,i,o,a){var s=up(o),l=am(i);return s?"<"+r+' data-rh="true" '+s+">"+sl(l,a)+"</"+r+">":"<"+r+' data-rh="true">'+sl(l,a)+"</"+r+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return dp(t)},toString:function(){return up(t)}};default:return{toComponent:function(){return Wo(e,t)},toString:function(){return function(r,i,o){return i.reduce(function(a,s){var l=Object.keys(s).filter(function(f){return!(f==="innerHTML"||f==="cssText")}).reduce(function(f,p){var v=s[p]===void 0?p:p+'="'+sl(s[p],o)+'"';return f?f+" "+v:v},""),c=s.innerHTML||s.cssText||"",u=n5.indexOf(r)===-1;return a+"<"+r+' data-rh="true" '+l+(u?"/>":">"+c+"</"+r+">")},"")}(e,t,n)}}}},Bc=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.noscriptTags,a=e.styleTags,s=e.title,l=s===void 0?"":s,c=e.titleAttributes,u=e.linkTags,f=e.metaTags,p=e.scriptTags,v={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var y=function(w){var k=w.linkTags,m=w.scriptTags,h=w.encode,g=al(w.metaTags,Xy),x=al(k,Ky),b=al(m,Qy);return{priorityMethods:{toComponent:function(){return[].concat(Wo(D.META,g.priority),Wo(D.LINK,x.priority),Wo(D.SCRIPT,b.priority))},toString:function(){return ft(D.META,g.priority,h)+" "+ft(D.LINK,x.priority,h)+" "+ft(D.SCRIPT,b.priority,h)}},metaTags:g.default,linkTags:x.default,scriptTags:b.default}}(e);v=y.priorityMethods,u=y.linkTags,f=y.metaTags,p=y.scriptTags}return{priority:v,base:ft(D.BASE,t,r),bodyAttributes:ft("bodyAttributes",n,r),htmlAttributes:ft("htmlAttributes",i,r),link:ft(D.LINK,u,r),meta:ft(D.META,f,r),noscript:ft(D.NOSCRIPT,o,r),script:ft(D.SCRIPT,p,r),style:ft(D.STYLE,a,r),title:ft(D.TITLE,{title:l,titleAttributes:c},r)}},bo=[],Hc=function(e,t){var n=this;t===void 0&&(t=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?bo:n.instances},add:function(r){(n.canUseDOM?bo:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?bo:n.instances).indexOf(r);(n.canUseDOM?bo:n.instances).splice(i,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=Bc({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},sm=ce.createContext({}),r5=K.shape({setHelmet:K.func,helmetInstances:K.shape({get:K.func,add:K.func,remove:K.func})}),i5=typeof document<"u",hr=function(e){function t(n){var r;return(r=e.call(this,n)||this).helmetData=new Hc(r.props.context,t.canUseDOM),r}return sd(t,e),t.prototype.render=function(){return ce.createElement(sm.Provider,{value:this.helmetData.value},this.props.children)},t}(C.Component);hr.canUseDOM=i5,hr.propTypes={context:K.shape({helmet:K.shape()}),children:K.node.isRequired},hr.defaultProps={context:{}},hr.displayName="HelmetProvider";var er=function(e,t){var n,r=document.head||document.querySelector(D.HEAD),i=r.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),a=[];return t&&t.length&&t.forEach(function(s){var l=document.createElement(e);for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(c==="innerHTML"?l.innerHTML=s.innerHTML:c==="cssText"?l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText)):l.setAttribute(c,s[c]===void 0?"":s[c]));l.setAttribute("data-rh","true"),o.some(function(u,f){return n=f,l.isEqualNode(u)})?o.splice(n,1):a.push(l)}),o.forEach(function(s){return s.parentNode.removeChild(s)}),a.forEach(function(s){return r.appendChild(s)}),{oldTags:o,newTags:a}},ll=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-rh"),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s+=1){var l=a[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);var u=o.indexOf(l);u!==-1&&o.splice(u,1)}for(var f=o.length-1;f>=0;f-=1)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==a.join(",")&&n.setAttribute("data-rh",a.join(","))}},fp=function(e,t){var n=e.baseTag,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,c=e.styleTags,u=e.title,f=e.titleAttributes;ll(D.BODY,e.bodyAttributes),ll(D.HTML,r),function(w,k){w!==void 0&&document.title!==w&&(document.title=am(w)),ll(D.TITLE,k)}(u,f);var p={baseTag:er(D.BASE,n),linkTags:er(D.LINK,i),metaTags:er(D.META,o),noscriptTags:er(D.NOSCRIPT,a),scriptTags:er(D.SCRIPT,l),styleTags:er(D.STYLE,c)},v={},y={};Object.keys(p).forEach(function(w){var k=p[w],m=k.newTags,h=k.oldTags;m.length&&(v[w]=m),h.length&&(y[w]=p[w].oldTags)}),t&&t(),s(e,v,y)},Jr=null,ba=function(e){function t(){for(var r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).rendered=!1,r}sd(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!Gy(r,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var r,i,o=this.props.context,a=o.setHelmet,s=null,l=(r=o.helmetInstances.get().map(function(c){var u=Ce({},c.props);return delete u.context,u}),{baseTag:e5(["href"],r),bodyAttributes:ol("bodyAttributes",r),defer:Tr(r,"defer"),encode:Tr(r,"encodeSpecialCharacters"),htmlAttributes:ol("htmlAttributes",r),linkTags:qr(D.LINK,["rel","href"],r),metaTags:qr(D.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:qr(D.NOSCRIPT,["innerHTML"],r),onChangeClientState:Jy(r),scriptTags:qr(D.SCRIPT,["src","innerHTML"],r),styleTags:qr(D.STYLE,["cssText"],r),title:qy(r),titleAttributes:ol("titleAttributes",r),prioritizeSeoTags:t5(r,"prioritizeSeoTags")});hr.canUseDOM?(i=l,Jr&&cancelAnimationFrame(Jr),i.defer?Jr=requestAnimationFrame(function(){fp(i,function(){Jr=null})}):(fp(i),Jr=null)):Bc&&(s=Bc(l)),a(s)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},t}(C.Component);ba.propTypes={context:r5.isRequired},ba.displayName="HelmetDispatcher";var o5=["children"],a5=["children"],Yo=function(e){function t(){return e.apply(this,arguments)||this}sd(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!Hy(cp(this.props,"helmetData"),cp(r,"helmetData"))},n.mapNestedChildrenToProps=function(r,i){if(!i)return null;switch(r.type){case D.SCRIPT:case D.NOSCRIPT:return{innerHTML:i};case D.STYLE:return{cssText:i};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(r){var i,o=r.child,a=r.arrayTypeChildren;return Ce({},a,((i={})[o.type]=[].concat(a[o.type]||[],[Ce({},r.newChildProps,this.mapNestedChildrenToProps(o,r.nestedChildren))]),i))},n.mapObjectTypeChildren=function(r){var i,o,a=r.child,s=r.newProps,l=r.newChildProps,c=r.nestedChildren;switch(a.type){case D.TITLE:return Ce({},s,((i={})[a.type]=c,i.titleAttributes=Ce({},l),i));case D.BODY:return Ce({},s,{bodyAttributes:Ce({},l)});case D.HTML:return Ce({},s,{htmlAttributes:Ce({},l)});default:return Ce({},s,((o={})[a.type]=Ce({},l),o))}},n.mapArrayTypeChildrenToProps=function(r,i){var o=Ce({},i);return Object.keys(r).forEach(function(a){var s;o=Ce({},o,((s={})[a]=r[a],s))}),o},n.warnOnInvalidChildren=function(r,i){return ap(lp.some(function(o){return r.type===o}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+lp.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),ap(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(o){return typeof o!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(r,i){var o=this,a={};return ce.Children.forEach(r,function(s){if(s&&s.props){var l=s.props,c=l.children,u=sp(l,o5),f=Object.keys(u).reduce(function(v,y){return v[Zy[y]||y]=u[y],v},{}),p=s.type;switch(typeof p=="symbol"?p=p.toString():o.warnOnInvalidChildren(s,c),p){case D.FRAGMENT:i=o.mapChildrenToProps(c,i);break;case D.LINK:case D.META:case D.NOSCRIPT:case D.SCRIPT:case D.STYLE:a=o.flattenArrayTypeChildren({child:s,arrayTypeChildren:a,newChildProps:f,nestedChildren:c});break;default:i=o.mapObjectTypeChildren({child:s,newProps:i,newChildProps:f,nestedChildren:c})}}}),this.mapArrayTypeChildrenToProps(a,i)},n.render=function(){var r=this.props,i=r.children,o=sp(r,a5),a=Ce({},o),s=o.helmetData;return i&&(a=this.mapChildrenToProps(i,a)),!s||s instanceof Hc||(s=new Hc(s.context,s.instances)),s?ce.createElement(ba,Ce({},a,{context:s.value,helmetData:void 0})):ce.createElement(sm.Consumer,null,function(l){return ce.createElement(ba,Ce({},a,{context:l}))})},t}(C.Component);Yo.propTypes={base:K.object,bodyAttributes:K.object,children:K.oneOfType([K.arrayOf(K.node),K.node]),defaultTitle:K.string,defer:K.bool,encodeSpecialCharacters:K.bool,htmlAttributes:K.object,link:K.arrayOf(K.object),meta:K.arrayOf(K.object),noscript:K.arrayOf(K.object),onChangeClientState:K.func,script:K.arrayOf(K.object),style:K.arrayOf(K.object),title:K.string,titleAttributes:K.object,titleTemplate:K.string,prioritizeSeoTags:K.bool,helmetData:K.object},Yo.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Yo.displayName="Helmet";var lm={exports:{}},re={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=Symbol.for("react.element"),cd=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),os=Symbol.for("react.provider"),as=Symbol.for("react.context"),s5=Symbol.for("react.server_context"),ss=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),cs=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),ds=Symbol.for("react.lazy"),l5=Symbol.for("react.offscreen"),cm;cm=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ld:switch(e=e.type,e){case ns:case is:case rs:case ls:case cs:return e;default:switch(e=e&&e.$$typeof,e){case s5:case as:case ss:case ds:case us:case os:return e;default:return t}}case cd:return t}}}re.ContextConsumer=as;re.ContextProvider=os;re.Element=ld;re.ForwardRef=ss;re.Fragment=ns;re.Lazy=ds;re.Memo=us;re.Portal=cd;re.Profiler=is;re.StrictMode=rs;re.Suspense=ls;re.SuspenseList=cs;re.isAsyncMode=function(){return!1};re.isConcurrentMode=function(){return!1};re.isContextConsumer=function(e){return wt(e)===as};re.isContextProvider=function(e){return wt(e)===os};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ld};re.isForwardRef=function(e){return wt(e)===ss};re.isFragment=function(e){return wt(e)===ns};re.isLazy=function(e){return wt(e)===ds};re.isMemo=function(e){return wt(e)===us};re.isPortal=function(e){return wt(e)===cd};re.isProfiler=function(e){return wt(e)===is};re.isStrictMode=function(e){return wt(e)===rs};re.isSuspense=function(e){return wt(e)===ls};re.isSuspenseList=function(e){return wt(e)===cs};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ns||e===is||e===rs||e===ls||e===cs||e===l5||typeof e=="object"&&e!==null&&(e.$$typeof===ds||e.$$typeof===us||e.$$typeof===os||e.$$typeof===as||e.$$typeof===ss||e.$$typeof===cm||e.getModuleId!==void 0)};re.typeOf=wt;lm.exports=re;var um=lm.exports;function c5(e){function t(M,R,_,B,T){for(var G=0,L=0,ye=0,J=0,te,W,Re=0,Ze=0,q,$e=q=te=0,ee=0,_e=0,Br=0,Oe=0,io=_.length,Hr=io-1,St,U="",be="",Ls="",Ms="",Jt;ee<io;){if(W=_.charCodeAt(ee),ee===Hr&&L+J+ye+G!==0&&(L!==0&&(W=L===47?10:47),J=ye=G=0,io++,Hr++),L+J+ye+G===0){if(ee===Hr&&(0<_e&&(U=U.replace(p,"")),0<U.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:U+=_.charAt(ee)}W=59}switch(W){case 123:for(U=U.trim(),te=U.charCodeAt(0),q=1,Oe=++ee;ee<io;){switch(W=_.charCodeAt(ee)){case 123:q++;break;case 125:q--;break;case 47:switch(W=_.charCodeAt(ee+1)){case 42:case 47:e:{for($e=ee+1;$e<Hr;++$e)switch(_.charCodeAt($e)){case 47:if(W===42&&_.charCodeAt($e-1)===42&&ee+2!==$e){ee=$e+1;break e}break;case 10:if(W===47){ee=$e+1;break e}}ee=$e}}break;case 91:W++;case 40:W++;case 34:case 39:for(;ee++<Hr&&_.charCodeAt(ee)!==W;);}if(q===0)break;ee++}switch(q=_.substring(Oe,ee),te===0&&(te=(U=U.replace(f,"").trim()).charCodeAt(0)),te){case 64:switch(0<_e&&(U=U.replace(p,"")),W=U.charCodeAt(1),W){case 100:case 109:case 115:case 45:_e=R;break;default:_e=ke}if(q=t(R,_e,q,W,T+1),Oe=q.length,0<z&&(_e=n(ke,U,Br),Jt=s(3,q,_e,R,Se,fe,Oe,W,T,B),U=_e.join(""),Jt!==void 0&&(Oe=(q=Jt.trim()).length)===0&&(W=0,q="")),0<Oe)switch(W){case 115:U=U.replace(E,a);case 100:case 109:case 45:q=U+"{"+q+"}";break;case 107:U=U.replace(h,"$1 $2"),q=U+"{"+q+"}",q=X===1||X===2&&o("@"+q,3)?"@-webkit-"+q+"@"+q:"@"+q;break;default:q=U+q,B===112&&(q=(be+=q,""))}else q="";break;default:q=t(R,n(R,U,Br),q,B,T+1)}Ls+=q,q=Br=_e=$e=te=0,U="",W=_.charCodeAt(++ee);break;case 125:case 59:if(U=(0<_e?U.replace(p,""):U).trim(),1<(Oe=U.length))switch($e===0&&(te=U.charCodeAt(0),te===45||96<te&&123>te)&&(Oe=(U=U.replace(" ",":")).length),0<z&&(Jt=s(1,U,R,M,Se,fe,be.length,B,T,B))!==void 0&&(Oe=(U=Jt.trim()).length)===0&&(U="\0\0"),te=U.charCodeAt(0),W=U.charCodeAt(1),te){case 0:break;case 64:if(W===105||W===99){Ms+=U+_.charAt(ee);break}default:U.charCodeAt(Oe-1)!==58&&(be+=i(U,te,W,U.charCodeAt(2)))}Br=_e=$e=te=0,U="",W=_.charCodeAt(++ee)}}switch(W){case 13:case 10:L===47?L=0:1+te===0&&B!==107&&0<U.length&&(_e=1,U+="\0"),0<z*F&&s(0,U,R,M,Se,fe,be.length,B,T,B),fe=1,Se++;break;case 59:case 125:if(L+J+ye+G===0){fe++;break}default:switch(fe++,St=_.charAt(ee),W){case 9:case 32:if(J+G+L===0)switch(Re){case 44:case 58:case 9:case 32:St="";break;default:W!==32&&(St=" ")}break;case 0:St="\\0";break;case 12:St="\\f";break;case 11:St="\\v";break;case 38:J+L+G===0&&(_e=Br=1,St="\f"+St);break;case 108:if(J+L+G+Pe===0&&0<$e)switch(ee-$e){case 2:Re===112&&_.charCodeAt(ee-3)===58&&(Pe=Re);case 8:Ze===111&&(Pe=Ze)}break;case 58:J+L+G===0&&($e=ee);break;case 44:L+ye+J+G===0&&(_e=1,St+="\r");break;case 34:case 39:L===0&&(J=J===W?0:J===0?W:J);break;case 91:J+L+ye===0&&G++;break;case 93:J+L+ye===0&&G--;break;case 41:J+L+G===0&&ye--;break;case 40:if(J+L+G===0){if(te===0)switch(2*Re+3*Ze){case 533:break;default:te=1}ye++}break;case 64:L+ye+J+G+$e+q===0&&(q=1);break;case 42:case 47:if(!(0<J+G+ye))switch(L){case 0:switch(2*W+3*_.charCodeAt(ee+1)){case 235:L=47;break;case 220:Oe=ee,L=42}break;case 42:W===47&&Re===42&&Oe+2!==ee&&(_.charCodeAt(Oe+2)===33&&(be+=_.substring(Oe,ee+1)),St="",L=0)}}L===0&&(U+=St)}Ze=Re,Re=W,ee++}if(Oe=be.length,0<Oe){if(_e=R,0<z&&(Jt=s(2,be,_e,M,Se,fe,Oe,B,T,B),Jt!==void 0&&(be=Jt).length===0))return Ms+be+Ls;if(be=_e.join(",")+"{"+be+"}",X*Pe!==0){switch(X!==2||o(be,2)||(Pe=0),Pe){case 111:be=be.replace(x,":-moz-$1")+be;break;case 112:be=be.replace(g,"::-webkit-input-$1")+be.replace(g,"::-moz-$1")+be.replace(g,":-ms-input-$1")+be}Pe=0}}return Ms+be+Ls}function n(M,R,_){var B=R.trim().split(k);R=B;var T=B.length,G=M.length;switch(G){case 0:case 1:var L=0;for(M=G===0?"":M[0]+" ";L<T;++L)R[L]=r(M,R[L],_).trim();break;default:var ye=L=0;for(R=[];L<T;++L)for(var J=0;J<G;++J)R[ye++]=r(M[J]+" ",B[L],_).trim()}return R}function r(M,R,_){var B=R.charCodeAt(0);switch(33>B&&(B=(R=R.trim()).charCodeAt(0)),B){case 38:return R.replace(m,"$1"+M.trim());case 58:return M.trim()+R.replace(m,"$1"+M.trim());default:if(0<1*_&&0<R.indexOf("\f"))return R.replace(m,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+R}function i(M,R,_,B){var T=M+";",G=2*R+3*_+4*B;if(G===944){M=T.indexOf(":",9)+1;var L=T.substring(M,T.length-1).trim();return L=T.substring(0,M).trim()+L+";",X===1||X===2&&o(L,1)?"-webkit-"+L+L:L}if(X===0||X===2&&!o(T,1))return T;switch(G){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(oe,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return L=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+T+"-ms-flex-pack"+L+T;case 1005:return y.test(T)?T.replace(v,":-webkit-")+T.replace(v,":-moz-")+T:T;case 1e3:switch(L=T.substring(13).trim(),R=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(R)){case 226:L=T.replace(b,"tb");break;case 232:L=T.replace(b,"tb-rl");break;case 220:L=T.replace(b,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+L+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(R=(T=M).length-10,L=(T.charCodeAt(R)===33?T.substring(0,R):T).substring(M.indexOf(":",7)+1).trim(),G=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:T=T.replace(L,"-webkit-"+L)+";"+T;break;case 207:case 102:T=T.replace(L,"-webkit-"+(102<G?"inline-":"")+"box")+";"+T.replace(L,"-webkit-"+L)+";"+T.replace(L,"-ms-"+L+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return L=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+L+"-ms-flex-"+L+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(A,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(A,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(I.test(M)===!0)return(L=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),R,_,B).replace(":fill-available",":stretch"):T.replace(L,"-webkit-"+L)+T.replace(L,"-moz-"+L.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,_+B===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+T}return T}function o(M,R){var _=M.indexOf(R===1?":":"{"),B=M.substring(0,R!==3?_:10);return _=M.substring(_+1,M.length-1),$(R!==2?B:B.replace(N,"$1"),_,R)}function a(M,R){var _=i(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return _!==R+";"?_.replace(P," or ($1)").substring(4):"("+R+")"}function s(M,R,_,B,T,G,L,ye,J,te){for(var W=0,Re=R,Ze;W<z;++W)switch(Ze=ve[W].call(u,M,Re,_,B,T,G,L,ye,J,te)){case void 0:case!1:case!0:case null:break;default:Re=Ze}if(Re!==R)return Re}function l(M){switch(M){case void 0:case null:z=ve.length=0;break;default:if(typeof M=="function")ve[z++]=M;else if(typeof M=="object")for(var R=0,_=M.length;R<_;++R)l(M[R]);else F=!!M|0}return l}function c(M){return M=M.prefix,M!==void 0&&($=null,M?typeof M!="function"?X=1:(X=2,$=M):X=0),c}function u(M,R){var _=M;if(33>_.charCodeAt(0)&&(_=_.trim()),ae=_,_=[ae],0<z){var B=s(-1,R,_,_,Se,fe,0,0,0,0);B!==void 0&&typeof B=="string"&&(R=B)}var T=t(ke,_,R,0,0);return 0<z&&(B=s(-2,T,_,_,Se,fe,T.length,0,0,0),B!==void 0&&(T=B)),ae="",Pe=0,fe=Se=1,T}var f=/^\0+/g,p=/[\0\r\f]/g,v=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,k=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,A=/-self|flex-/g,N=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,fe=1,Se=1,Pe=0,X=1,ke=[],ve=[],z=0,$=null,F=0,ae="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var u5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function d5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var f5=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,pp=d5(function(e){return f5.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),dm={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,ud=Ie?Symbol.for("react.element"):60103,dd=Ie?Symbol.for("react.portal"):60106,fs=Ie?Symbol.for("react.fragment"):60107,ps=Ie?Symbol.for("react.strict_mode"):60108,hs=Ie?Symbol.for("react.profiler"):60114,ms=Ie?Symbol.for("react.provider"):60109,gs=Ie?Symbol.for("react.context"):60110,fd=Ie?Symbol.for("react.async_mode"):60111,vs=Ie?Symbol.for("react.concurrent_mode"):60111,ys=Ie?Symbol.for("react.forward_ref"):60112,xs=Ie?Symbol.for("react.suspense"):60113,p5=Ie?Symbol.for("react.suspense_list"):60120,ws=Ie?Symbol.for("react.memo"):60115,Ss=Ie?Symbol.for("react.lazy"):60116,h5=Ie?Symbol.for("react.block"):60121,m5=Ie?Symbol.for("react.fundamental"):60117,g5=Ie?Symbol.for("react.responder"):60118,v5=Ie?Symbol.for("react.scope"):60119;function dt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ud:switch(e=e.type,e){case fd:case vs:case fs:case hs:case ps:case xs:return e;default:switch(e=e&&e.$$typeof,e){case gs:case ys:case Ss:case ws:case ms:return e;default:return t}}case dd:return t}}}function fm(e){return dt(e)===vs}ie.AsyncMode=fd;ie.ConcurrentMode=vs;ie.ContextConsumer=gs;ie.ContextProvider=ms;ie.Element=ud;ie.ForwardRef=ys;ie.Fragment=fs;ie.Lazy=Ss;ie.Memo=ws;ie.Portal=dd;ie.Profiler=hs;ie.StrictMode=ps;ie.Suspense=xs;ie.isAsyncMode=function(e){return fm(e)||dt(e)===fd};ie.isConcurrentMode=fm;ie.isContextConsumer=function(e){return dt(e)===gs};ie.isContextProvider=function(e){return dt(e)===ms};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ud};ie.isForwardRef=function(e){return dt(e)===ys};ie.isFragment=function(e){return dt(e)===fs};ie.isLazy=function(e){return dt(e)===Ss};ie.isMemo=function(e){return dt(e)===ws};ie.isPortal=function(e){return dt(e)===dd};ie.isProfiler=function(e){return dt(e)===hs};ie.isStrictMode=function(e){return dt(e)===ps};ie.isSuspense=function(e){return dt(e)===xs};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fs||e===vs||e===hs||e===ps||e===xs||e===p5||typeof e=="object"&&e!==null&&(e.$$typeof===Ss||e.$$typeof===ws||e.$$typeof===ms||e.$$typeof===gs||e.$$typeof===ys||e.$$typeof===m5||e.$$typeof===g5||e.$$typeof===v5||e.$$typeof===h5)};ie.typeOf=dt;dm.exports=ie;var y5=dm.exports,pd=y5,x5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},S5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hd={};hd[pd.ForwardRef]=S5;hd[pd.Memo]=pm;function hp(e){return pd.isMemo(e)?pm:hd[e.$$typeof]||x5}var k5=Object.defineProperty,b5=Object.getOwnPropertyNames,mp=Object.getOwnPropertySymbols,C5=Object.getOwnPropertyDescriptor,T5=Object.getPrototypeOf,gp=Object.prototype;function hm(e,t,n){if(typeof t!="string"){if(gp){var r=T5(t);r&&r!==gp&&hm(e,r,n)}var i=b5(t);mp&&(i=i.concat(mp(t)));for(var o=hp(e),a=hp(t),s=0;s<i.length;++s){var l=i[s];if(!w5[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var c=C5(t,l);try{k5(e,l,c)}catch{}}}}return e}var E5=hm;const P5=Dr(E5);var pt={};function Ut(){return(Ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var vp=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Uc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!um.typeOf(e)},Ca=Object.freeze([]),Sn=Object.freeze({});function Hi(e){return typeof e=="function"}function yp(e){return e.displayName||e.name||"Component"}function md(e){return e&&typeof e.styledComponentId=="string"}var Rr=typeof process<"u"&&pt!==void 0&&(pt.REACT_APP_SC_ATTR||pt.SC_ATTR)||"data-styled",gd=typeof window<"u"&&"HTMLElement"in window,j5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&pt!==void 0&&(pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==""?pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pt.REACT_APP_SC_DISABLE_SPEEDY:pt.SC_DISABLE_SPEEDY!==void 0&&pt.SC_DISABLE_SPEEDY!==""&&pt.SC_DISABLE_SPEEDY!=="false"&&pt.SC_DISABLE_SPEEDY));function Ji(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var A5=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Ji(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Go=new Map,Ta=new Map,yi=1,Co=function(e){if(Go.has(e))return Go.get(e);for(;Ta.has(yi);)yi++;var t=yi++;return Go.set(e,t),Ta.set(t,e),t},z5=function(e){return Ta.get(e)},L5=function(e,t){t>=yi&&(yi=t+1),Go.set(e,t),Ta.set(t,e)},M5="style["+Rr+'][data-styled-version="5.3.11"]',I5=new RegExp("^"+Rr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),R5=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},_5=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(I5);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(L5(c,l),R5(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},O5=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},mm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(Rr))return u}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Rr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=O5();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},D5=function(){function e(n){var r=this.element=mm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}Ji(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),V5=function(){function e(n){var r=this.element=mm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),N5=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),xp=gd,$5={isServer:!gd,useCSSOMInjection:!j5},gm=function(){function e(n,r,i){n===void 0&&(n=Sn),r===void 0&&(r={}),this.options=Ut({},$5,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&gd&&xp&&(xp=!1,function(o){for(var a=document.querySelectorAll(M5),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(Rr)!=="active"&&(_5(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Co(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ut({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new N5(a):o?new D5(a):new V5(a),new A5(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Co(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Co(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Co(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=z5(a);if(s!==void 0){var l=n.names.get(s),c=r.getGroup(a);if(l&&c&&l.size){var u=Rr+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),o+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),F5=/(a)(d)/gi,wp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=wp(t%52)+n;return(wp(t%52)+n).replace(F5,"$1-$2")}var mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vm=function(e){return mr(5381,e)};function B5(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hi(n)&&!md(n))return!1}return!0}var H5=vm("5.3.11"),U5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&B5(t),this.componentId=n,this.baseHash=mr(H5,n),this.baseStyle=r,gm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=_r(this.rules,t,n,r).join(""),s=Wc(mr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=mr(this.baseHash,r.hash),f="",p=0;p<c;p++){var v=this.rules[p];if(typeof v=="string")f+=v;else if(v){var y=_r(v,t,n,r),w=Array.isArray(y)?y.join(""):y;u=mr(u,w+p),f+=w}}if(f){var k=Wc(u>>>0);if(!n.hasNameForId(i,k)){var m=r(f,"."+k,void 0,i);n.insertRules(i,k,m)}o.push(k)}}return o.join(" ")},e}(),W5=/^\s*\/\/.*$/gm,Y5=[":","[",".","#"];function G5(e){var t,n,r,i,o=Sn,a=o.options,s=a===void 0?Sn:a,l=o.plugins,c=l===void 0?Ca:l,u=new c5(s),f=[],p=function(w){function k(m){if(m)try{w(m+"}")}catch{}}return function(m,h,g,x,b,E,P,A,N,I){switch(m){case 1:if(N===0&&h.charCodeAt(0)===64)return w(h+";"),"";break;case 2:if(A===0)return h+"/*|*/";break;case 3:switch(A){case 102:case 112:return w(g[0]+h),"";default:return h+(I===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(k)}}}(function(w){f.push(w)}),v=function(w,k,m){return k===0&&Y5.indexOf(m[n.length])!==-1||m.match(i)?w:"."+t};function y(w,k,m,h){h===void 0&&(h="&");var g=w.replace(W5,""),x=k&&m?m+" "+k+" { "+g+" }":g;return t=h,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(m||!k?"":k,x)}return u.use([].concat(c,[function(w,k,m){w===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,v))},p,function(w){if(w===-2){var k=f;return f=[],k}}])),y.hash=c.length?c.reduce(function(w,k){return k.name||Ji(15),mr(w,k.name)},5381).toString():"",y}var ym=ce.createContext();ym.Consumer;var xm=ce.createContext(),K5=(xm.Consumer,new gm),Yc=G5();function Q5(){return C.useContext(ym)||K5}function X5(){return C.useContext(xm)||Yc}var wm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Yc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Ji(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Yc),this.name+t.hash},e}(),Z5=/([A-Z])/,q5=/([A-Z])/g,J5=/^ms-/,e3=function(e){return"-"+e.toLowerCase()};function Sp(e){return Z5.test(e)?e.replace(q5,e3).replace(J5,"-ms-"):e}var kp=function(e){return e==null||e===!1||e===""};function _r(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=_r(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(kp(e))return"";if(md(e))return"."+e.styledComponentId;if(Hi(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return _r(l,t,n,r)}var c;return e instanceof wm?n?(e.inject(n,r),e.getName(r)):e:Uc(e)?function u(f,p){var v,y,w=[];for(var k in f)f.hasOwnProperty(k)&&!kp(f[k])&&(Array.isArray(f[k])&&f[k].isCss||Hi(f[k])?w.push(Sp(k)+":",f[k],";"):Uc(f[k])?w.push.apply(w,u(f[k],k)):w.push(Sp(k)+": "+(v=k,(y=f[k])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||v in u5||v.startsWith("--")?String(y).trim():y+"px")+";"));return p?[p+" {"].concat(w,["}"]):w}(e):e.toString()}var bp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Sm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Hi(e)||Uc(e)?bp(_r(vp(Ca,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:bp(_r(vp(e,n)))}var t3=function(e,t,n){return n===void 0&&(n=Sn),e.theme!==n.theme&&e.theme||t||n.theme},n3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,r3=/(^-|-$)/g;function cl(e){return e.replace(n3,"-").replace(r3,"")}var km=function(e){return Wc(vm(e)>>>0)};function To(e){return typeof e=="string"&&!0}var Gc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},i3=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function o3(e,t,n){var r=e[n];Gc(t)&&Gc(r)?bm(r,t):e[n]=t}function bm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Gc(a))for(var s in a)i3(s)&&o3(e,a[s],s)}return e}var Cm=ce.createContext();Cm.Consumer;var ul={};function Tm(e,t,n){var r=md(e),i=!To(e),o=t.attrs,a=o===void 0?Ca:o,s=t.componentId,l=s===void 0?function(h,g){var x=typeof h!="string"?"sc":cl(h);ul[x]=(ul[x]||0)+1;var b=x+"-"+km("5.3.11"+x+ul[x]);return g?g+"-"+b:b}(t.displayName,t.parentComponentId):s,c=t.displayName,u=c===void 0?function(h){return To(h)?"styled."+h:"Styled("+yp(h)+")"}(e):c,f=t.displayName&&t.componentId?cl(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(h,g,x){return e.shouldForwardProp(h,g,x)&&t.shouldForwardProp(h,g,x)}:e.shouldForwardProp);var y,w=new U5(n,f,r?e.componentStyle:void 0),k=w.isStatic&&a.length===0,m=function(h,g){return function(x,b,E,P){var A=x.attrs,N=x.componentStyle,I=x.defaultProps,oe=x.foldedComponentIds,fe=x.shouldForwardProp,Se=x.styledComponentId,Pe=x.target,X=function(B,T,G){B===void 0&&(B=Sn);var L=Ut({},T,{theme:B}),ye={};return G.forEach(function(J){var te,W,Re,Ze=J;for(te in Hi(Ze)&&(Ze=Ze(L)),Ze)L[te]=ye[te]=te==="className"?(W=ye[te],Re=Ze[te],W&&Re?W+" "+Re:W||Re):Ze[te]}),[L,ye]}(t3(b,C.useContext(Cm),I)||Sn,b,A),ke=X[0],ve=X[1],z=function(B,T,G,L){var ye=Q5(),J=X5(),te=T?B.generateAndInjectStyles(Sn,ye,J):B.generateAndInjectStyles(G,ye,J);return te}(N,P,ke),$=E,F=ve.$as||b.$as||ve.as||b.as||Pe,ae=To(F),M=ve!==b?Ut({},b,{},ve):b,R={};for(var _ in M)_[0]!=="$"&&_!=="as"&&(_==="forwardedAs"?R.as=M[_]:(fe?fe(_,pp,F):!ae||pp(_))&&(R[_]=M[_]));return b.style&&ve.style!==b.style&&(R.style=Ut({},b.style,{},ve.style)),R.className=Array.prototype.concat(oe,Se,z!==Se?z:null,b.className,ve.className).filter(Boolean).join(" "),R.ref=$,C.createElement(F,R)}(y,h,g,k)};return m.displayName=u,(y=ce.forwardRef(m)).attrs=p,y.componentStyle=w,y.displayName=u,y.shouldForwardProp=v,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ca,y.styledComponentId=f,y.target=r?e.target:e,y.withComponent=function(h){var g=t.componentId,x=function(E,P){if(E==null)return{};var A,N,I={},oe=Object.keys(E);for(N=0;N<oe.length;N++)A=oe[N],P.indexOf(A)>=0||(I[A]=E[A]);return I}(t,["componentId"]),b=g&&g+"-"+(To(h)?h:cl(yp(h)));return Tm(h,Ut({},x,{attrs:p,componentId:b}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?bm({},e.defaultProps,h):h}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&P5(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var S=function(e){return function t(n,r,i){if(i===void 0&&(i=Sn),!um.isValidElementType(r))return Ji(1,String(r));var o=function(){return n(r,i,Sm.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Ut({},i,{},a))},o.attrs=function(a){return t(n,r,Ut({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Tm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){S[e]=S(e)});function Fr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Sm.apply(void 0,[e].concat(n)).join(""),o=km(i);return new wm(o,i)}const Em=C.createContext(),a3=()=>{if(typeof window>"u")return"light";const e=localStorage.getItem("portfolio-theme");return e==="dark"||e==="light"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},s3=()=>{const e=C.useContext(Em);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},l3=({children:e})=>{const[t,n]=C.useState(a3),[r,i]=C.useState(!0);C.useEffect(()=>{i(!1)},[]),C.useEffect(()=>{localStorage.setItem("portfolio-theme",t),document.documentElement.setAttribute("data-theme",t)},[t]);const a={theme:t,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")},isLoading:r};return d.jsx(Em.Provider,{value:a,children:e})};var Pm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cp=ce.createContext&&ce.createContext(Pm),kn=function(){return kn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kn.apply(this,arguments)},c3=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function jm(e){return e&&e.map(function(t,n){return ce.createElement(t.tag,kn({key:n},t.attr),jm(t.child))})}function H(e){return function(t){return ce.createElement(u3,kn({attr:kn({},e.attr)},t),jm(e.child))}}function u3(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=c3(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ce.createElement("svg",kn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:kn(kn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ce.createElement("title",null,o),e.children)};return Cp!==void 0?ce.createElement(Cp.Consumer,null,function(n){return t(n)}):t(Pm)}function d3(e){return H({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}}]})(e)}function f3(e){return H({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"}}]})(e)}function Ea(e){return H({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function p3(e){return H({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}}]})(e)}function Am(e){return H({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function h3(e){return H({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"}}]})(e)}function m3(e){return H({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"}}]})(e)}function g3(e){return H({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"}}]})(e)}function v3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(e)}function y3(e){return H({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"}}]})(e)}function dl(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"}}]})(e)}function tn(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"}}]})(e)}function x3(e){return H({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function zm(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function w3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function S3(e){return H({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function Tp(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function k3(e){return H({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function fl(e){return H({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(e)}function Lm(e){return H({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"}}]})(e)}function b3(e){return H({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function Ep(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function C3(e){return H({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"}}]})(e)}function T3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(e)}function E3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function P3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(e)}function j3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"}}]})(e)}function Mm(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"}}]})(e)}function A3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"}}]})(e)}function Pp(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function Im(e){return H({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function z3(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"}}]})(e)}function L3(e){return H({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"}}]})(e)}const M3=S.div`
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
`,I3=S.div`
  font-size: 3rem;
  color: #dc3545;
  margin-bottom: 1rem;
`,R3=S.h2`
  color: var(--dark-gray);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,_3=S.p`
  color: var(--medium-gray);
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
`,O3=S.button`
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
`;class D3 extends ce.Component{constructor(n){super(n);Qd(this,"handleRetry",()=>{var n,r;(r=(n=this.props).onRetry)==null||r.call(n),this.setState({hasError:!1,error:null,errorInfo:null})});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?d.jsxs(M3,{children:[d.jsx(I3,{children:d.jsx(S3,{})}),d.jsx(R3,{children:"Oops! Something went wrong"}),d.jsx(_3,{children:"We're sorry, but something unexpected happened. Please try refreshing the page or contact us if the problem persists."}),d.jsxs(O3,{onClick:this.handleRetry,children:[d.jsx(P3,{}),"Try Again"]})]}):this.props.children}}const ks=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),bs=C.createContext({});function V3(){return C.useContext(bs).visualElement}const eo=C.createContext(null),Qn=typeof document<"u",$n=Qn?C.useLayoutEffect:C.useEffect,Rm=C.createContext({strict:!1});function N3(e,t,n,r){const i=V3(),o=C.useContext(Rm),a=C.useContext(eo),s=C.useContext(ks).reducedMotion,l=C.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceId:a?a.id:void 0,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:s}));const c=l.current;return $n(()=>{c&&c.render()}),$n(()=>{c&&c.animationState&&c.animationState.animateChanges()}),$n(()=>()=>c&&c.notify("Unmount"),[]),c}function gr(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function $3(e,t,n){return C.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):gr(n)&&(n.current=r))},[t])}function Ui(e){return typeof e=="string"||Array.isArray(e)}function Cs(e){return typeof e=="object"&&typeof e.start=="function"}const F3=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function Ts(e){return Cs(e.animate)||F3.some(t=>Ui(e[t]))}function _m(e){return!!(Ts(e)||e.variants)}function B3(e,t){if(Ts(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ui(n)?n:void 0,animate:Ui(r)?r:void 0}}return e.inherit!==!1?t:{}}function H3(e){const{initial:t,animate:n}=B3(e,C.useContext(bs));return C.useMemo(()=>({initial:t,animate:n}),[jp(t),jp(n)])}function jp(e){return Array.isArray(e)?e.join(" "):e}const Nt=e=>({isEnabled:t=>e.some(n=>!!t[n])}),Wi={measureLayout:Nt(["layout","layoutId","drag"]),animation:Nt(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:Nt(["exit"]),drag:Nt(["drag","dragControls"]),focus:Nt(["whileFocus"]),hover:Nt(["whileHover","onHoverStart","onHoverEnd"]),tap:Nt(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Nt(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:Nt(["whileInView","onViewportEnter","onViewportLeave"])};function U3(e){for(const t in e)t==="projectionNodeConstructor"?Wi.projectionNodeConstructor=e[t]:Wi[t].Component=e[t]}function Xn(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const xi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let W3=1;function Y3(){return Xn(()=>{if(xi.hasEverUpdated)return W3++})}const vd=C.createContext({});class G3 extends ce.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const Om=C.createContext({}),K3=Symbol.for("motionComponentSymbol");function Q3({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:i,Component:o}){e&&U3(e);function a(l,c){const u={...C.useContext(ks),...l,layoutId:X3(l)},{isStatic:f}=u;let p=null;const v=H3(l),y=f?void 0:Y3(),w=i(l,f);if(!f&&Qn){v.visualElement=N3(o,w,u,t);const k=C.useContext(Rm).strict,m=C.useContext(Om);v.visualElement&&(p=v.visualElement.loadFeatures(u,k,e,y,n||Wi.projectionNodeConstructor,m))}return C.createElement(G3,{visualElement:v.visualElement,props:u},p,C.createElement(bs.Provider,{value:v},r(o,l,y,$3(w,v.visualElement,c),w,f,v.visualElement)))}const s=C.forwardRef(a);return s[K3]=o,s}function X3({layoutId:e}){const t=C.useContext(vd).id;return t&&e!==void 0?t+"-"+e:e}function Z3(e){function t(r,i={}){return Q3(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const q3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function yd(e){return typeof e!="string"||e.includes("-")?!1:!!(q3.indexOf(e)>-1||/[A-Z]/.test(e))}const Pa={};function J3(e){Object.assign(Pa,e)}const ja=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zn=new Set(ja);function Dm(e,{layout:t,layoutId:n}){return Zn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Pa[e]||e==="opacity")}const Vt=e=>!!(e!=null&&e.getVelocity),e4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},t4=(e,t)=>ja.indexOf(e)-ja.indexOf(t);function n4({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},i,o){let a="";t.sort(t4);for(const s of t)a+=`${e4[s]||s}(${e[s]}) `;return n&&!e.z&&(a+="translateZ(0)"),a=a.trim(),o?a=o(e,i?"":a):r&&i&&(a="none"),a}function Vm(e){return e.startsWith("--")}const r4=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Or=(e,t,n)=>Math.min(Math.max(n,e),t),qn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},wi={...qn,transform:e=>Or(0,1,e)},Eo={...qn,default:1},Si=e=>Math.round(e*1e5)/1e5,Yi=/(-)?([\d]*\.?[\d])+/g,Kc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,i4=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function to(e){return typeof e=="string"}const no=e=>({test:t=>to(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=no("deg"),Dt=no("%"),V=no("px"),o4=no("vh"),a4=no("vw"),Ap={...Dt,parse:e=>Dt.parse(e)/100,transform:e=>Dt.transform(e*100)},zp={...qn,transform:Math.round},Nm={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,radius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,size:V,top:V,right:V,bottom:V,left:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,rotate:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:Eo,scaleX:Eo,scaleY:Eo,scaleZ:Eo,skew:nn,skewX:nn,skewY:nn,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:wi,originX:Ap,originY:Ap,originZ:V,zIndex:zp,fillOpacity:wi,strokeOpacity:wi,numOctaves:zp};function xd(e,t,n,r){const{style:i,vars:o,transform:a,transformKeys:s,transformOrigin:l}=e;s.length=0;let c=!1,u=!1,f=!0;for(const p in t){const v=t[p];if(Vm(p)){o[p]=v;continue}const y=Nm[p],w=r4(v,y);if(Zn.has(p)){if(c=!0,a[p]=w,s.push(p),!f)continue;v!==(y.default||0)&&(f=!1)}else p.startsWith("origin")?(u=!0,l[p]=w):i[p]=w}if(t.transform||(c||r?i.transform=n4(e,n,f,r):i.transform&&(i.transform="none")),u){const{originX:p="50%",originY:v="50%",originZ:y=0}=l;i.transformOrigin=`${p} ${v} ${y}`}}const wd=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function $m(e,t,n){for(const r in t)!Vt(t[r])&&!Dm(r,n)&&(e[r]=t[r])}function s4({transformTemplate:e},t,n){return C.useMemo(()=>{const r=wd();return xd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function l4(e,t,n){const r=e.style||{},i={};return $m(i,r,e),Object.assign(i,s4(e,t,n)),e.transformValues?e.transformValues(i):i}function c4(e,t,n){const r={},i=l4(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=i,r}const u4=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],d4=["whileTap","onTap","onTapStart","onTapCancel"],f4=["onPan","onPanStart","onPanSessionStart","onPanEnd"],p4=["whileInView","onViewportEnter","onViewportLeave","viewport"],h4=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...p4,...d4,...u4,...f4]);function Aa(e){return h4.has(e)}let Fm=e=>!Aa(e);function m4(e){e&&(Fm=t=>t.startsWith("on")?!Aa(t):e(t))}try{m4(require("@emotion/is-prop-valid").default)}catch{}function g4(e,t,n){const r={};for(const i in e)(Fm(i)||n===!0&&Aa(i)||!t&&!Aa(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Lp(e,t,n){return typeof e=="string"?e:V.transform(t+n*e)}function v4(e,t,n){const r=Lp(t,e.x,e.width),i=Lp(n,e.y,e.height);return`${r} ${i}`}const y4={offset:"stroke-dashoffset",array:"stroke-dasharray"},x4={offset:"strokeDashoffset",array:"strokeDasharray"};function w4(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?y4:x4;e[o.offset]=V.transform(-r);const a=V.transform(t),s=V.transform(n);e[o.array]=`${a} ${s}`}function Sd(e,{attrX:t,attrY:n,originX:r,originY:i,pathLength:o,pathSpacing:a=1,pathOffset:s=0,...l},c,u,f){if(xd(e,l,c,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:y}=e;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(r!==void 0||i!==void 0||v.transform)&&(v.transformOrigin=v4(y,r!==void 0?r:.5,i!==void 0?i:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),o!==void 0&&w4(p,o,a,s,!1)}const Bm=()=>({...wd(),attrs:{}}),kd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function S4(e,t,n,r){const i=C.useMemo(()=>{const o=Bm();return Sd(o,t,{enableHardwareAcceleration:!1},kd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};$m(o,e.style,e),i.style={...o,...i.style}}return i}function k4(e=!1){return(n,r,i,o,{latestValues:a},s)=>{const c=(yd(n)?S4:c4)(r,a,s,n),f={...g4(r,typeof n=="string",e),...c,ref:o};return i&&(f["data-projection-id"]=i),C.createElement(n,f)}}const bd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function Hm(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Um=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Wm(e,t,n,r){Hm(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Um.has(i)?i:bd(i),t.attrs[i])}function Cd(e){const{style:t}=e,n={};for(const r in t)(Vt(t[r])||Dm(r,e))&&(n[r]=t[r]);return n}function Ym(e){const t=Cd(e);for(const n in e)if(Vt(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function Td(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}const za=e=>Array.isArray(e),b4=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),C4=e=>za(e)?e[e.length-1]||0:e;function Ko(e){const t=Vt(e)?e.get():e;return b4(t)?t.toValue():t}function T4({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:E4(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const Gm=e=>(t,n)=>{const r=C.useContext(bs),i=C.useContext(eo),o=()=>T4(e,t,r,i);return n?o():Xn(o)};function E4(e,t,n,r){const i={},o=r(e);for(const p in o)i[p]=Ko(o[p]);let{initial:a,animate:s}=e;const l=Ts(e),c=_m(e);t&&c&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u=u||a===!1;const f=u?s:a;return f&&typeof f!="boolean"&&!Cs(f)&&(Array.isArray(f)?f:[f]).forEach(v=>{const y=Td(e,v);if(!y)return;const{transitionEnd:w,transition:k,...m}=y;for(const h in m){let g=m[h];if(Array.isArray(g)){const x=u?g.length-1:0;g=g[x]}g!==null&&(i[h]=g)}for(const h in w)i[h]=w[h]}),i}const P4={useVisualState:Gm({scrapeMotionValuesFromProps:Ym,createRenderState:Bm,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Sd(n,r,{enableHardwareAcceleration:!1},kd(t.tagName),e.transformTemplate),Wm(t,n)}})},j4={useVisualState:Gm({scrapeMotionValuesFromProps:Cd,createRenderState:wd})};function A4(e,{forwardMotionProps:t=!1},n,r,i){return{...yd(e)?P4:j4,preloadedFeatures:n,useRender:k4(t),createVisualElement:r,projectionNodeConstructor:i,Component:e}}var se;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(se||(se={}));function Es(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Qc(e,t,n,r){C.useEffect(()=>{const i=e.current;if(n&&i)return Es(i,t,n,r)},[e,t,n,r])}function z4({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(se.Focus,!0)},i=()=>{n&&n.setActive(se.Focus,!1)};Qc(t,"focus",e?r:void 0),Qc(t,"blur",e?i:void 0)}function Km(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function Qm(e){return!!e.touches}function L4(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const M4={pageX:0,pageY:0};function I4(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||M4;return{x:r[t+"X"],y:r[t+"Y"]}}function R4(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function Ed(e,t="page"){return{point:Qm(e)?I4(e,t):R4(e,t)}}const Xm=(e,t=!1)=>{const n=r=>e(r,Ed(r));return t?L4(n):n},_4=()=>Qn&&window.onpointerdown===null,O4=()=>Qn&&window.ontouchstart===null,D4=()=>Qn&&window.onmousedown===null,V4={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},N4={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function Zm(e){return _4()?e:O4()?N4[e]:D4()?V4[e]:e}function Er(e,t,n,r){return Es(e,Zm(t),Xm(n,t==="pointerdown"),r)}function La(e,t,n,r){return Qc(e,Zm(t),n&&Xm(n,t==="pointerdown"),r)}function qm(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Mp=qm("dragHorizontal"),Ip=qm("dragVertical");function Jm(e){let t=!1;if(e==="y")t=Ip();else if(e==="x")t=Mp();else{const n=Mp(),r=Ip();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function e2(){const e=Jm(!0);return e?(e(),!1):!0}function Rp(e,t,n){return(r,i)=>{!Km(r)||e2()||(e.animationState&&e.animationState.setActive(se.Hover,t),n&&n(r,i))}}function $4({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){La(r,"pointerenter",e||n?Rp(r,!0,e):void 0,{passive:!e}),La(r,"pointerleave",t||n?Rp(r,!1,t):void 0,{passive:!t})}const t2=(e,t)=>t?e===t?!0:t2(e,t.parentElement):!1;function Pd(e){return C.useEffect(()=>()=>e(),[])}const F4=(e,t)=>n=>t(e(n)),Ps=(...e)=>e.reduce(F4);function B4({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:i}){const o=e||t||n||r,a=C.useRef(!1),s=C.useRef(null),l={passive:!(t||e||n||v)};function c(){s.current&&s.current(),s.current=null}function u(){return c(),a.current=!1,i.animationState&&i.animationState.setActive(se.Tap,!1),!e2()}function f(y,w){u()&&(t2(i.current,y.target)?e&&e(y,w):n&&n(y,w))}function p(y,w){u()&&n&&n(y,w)}function v(y,w){c(),!a.current&&(a.current=!0,s.current=Ps(Er(window,"pointerup",f,l),Er(window,"pointercancel",p,l)),i.animationState&&i.animationState.setActive(se.Tap,!0),t&&t(y,w))}La(i,"pointerdown",o?v:void 0,l),Pd(c)}const _p=new Set;function H4(e,t,n){_p.has(t)||(console.warn(t),_p.add(t))}const Xc=new WeakMap,pl=new WeakMap,U4=e=>{const t=Xc.get(e.target);t&&t(e)},W4=e=>{e.forEach(U4)};function Y4({root:e,...t}){const n=e||document;pl.has(n)||pl.set(n,{});const r=pl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(W4,{root:e,...t})),r[i]}function G4(e,t,n){const r=Y4(t);return Xc.set(e,n),r.observe(e),()=>{Xc.delete(e),r.unobserve(e)}}function K4({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:i={}}){const o=C.useRef({hasEnteredView:!1,isInView:!1});let a=!!(t||n||r);i.once&&o.current.hasEnteredView&&(a=!1),(typeof IntersectionObserver>"u"?Z4:X4)(a,o.current,e,i)}const Q4={some:0,all:1};function X4(e,t,n,{root:r,margin:i,amount:o="some",once:a}){C.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:i,threshold:typeof o=="number"?o:Q4[o]},l=c=>{const{isIntersecting:u}=c;if(t.isInView===u||(t.isInView=u,a&&!u&&t.hasEnteredView))return;u&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(se.InView,u);const f=n.getProps(),p=u?f.onViewportEnter:f.onViewportLeave;p&&p(c)};return G4(n.current,s,l)},[e,r,i,o])}function Z4(e,t,n,{fallback:r=!0}){C.useEffect(()=>{!e||!r||requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:i}=n.getProps();i&&i(null),n.animationState&&n.animationState.setActive(se.InView,!0)})},[e])}const fn=e=>t=>(e(t),null),q4={inView:fn(K4),tap:fn(B4),focus:fn(z4),hover:fn($4)};function n2(){const e=C.useContext(eo);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=C.useId();return C.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}function r2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const J4=e=>/^\-?\d*\.?\d+$/.test(e),e6=e=>/^0[^.\s]+$/.test(e),Yt={delta:0,timestamp:0},i2=1/60*1e3,t6=typeof performance<"u"?()=>performance.now():()=>Date.now(),o2=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(t6()),i2);function n6(e){let t=[],n=[],r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:(l,c=!1,u=!1)=>{const f=u&&i,p=f?t:n;return c&&a.add(l),p.indexOf(l)===-1&&(p.push(l),f&&i&&(r=t.length)),l},cancel:l=>{const c=n.indexOf(l);c!==-1&&n.splice(c,1),a.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let c=0;c<r;c++){const u=t[c];u(l),a.has(u)&&(s.schedule(u),e())}i=!1,o&&(o=!1,s.process(l))}};return s}const r6=40;let Zc=!0,Gi=!1,qc=!1;const ro=["read","update","preRender","render","postRender"],js=ro.reduce((e,t)=>(e[t]=n6(()=>Gi=!0),e),{}),Ke=ro.reduce((e,t)=>{const n=js[t];return e[t]=(r,i=!1,o=!1)=>(Gi||o6(),n.schedule(r,i,o)),e},{}),Zt=ro.reduce((e,t)=>(e[t]=js[t].cancel,e),{}),hl=ro.reduce((e,t)=>(e[t]=()=>js[t].process(Yt),e),{}),i6=e=>js[e].process(Yt),a2=e=>{Gi=!1,Yt.delta=Zc?i2:Math.max(Math.min(e-Yt.timestamp,r6),1),Yt.timestamp=e,qc=!0,ro.forEach(i6),qc=!1,Gi&&(Zc=!1,o2(a2))},o6=()=>{Gi=!0,Zc=!0,qc||o2(a2)};function jd(e,t){e.indexOf(t)===-1&&e.push(t)}function Ad(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class zd{constructor(){this.subscriptions=[]}add(t){return jd(this.subscriptions,t),()=>Ad(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ld(e,t){return t?e*(1e3/t):0}const a6=e=>!isNaN(parseFloat(e));class s6{constructor(t,n={}){this.version="7.10.3",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:a}=Yt;this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,Ke.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ke.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=a6(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){return this.events[t]||(this.events[t]=new zd),this.events[t].add(n)}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ld(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.stopAnimation&&(this.stopAnimation(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.clearListeners(),this.stop()}}function Pt(e,t){return new s6(e,t)}const Md=(e,t)=>n=>!!(to(n)&&i4.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),s2=(e,t,n)=>r=>{if(!to(r))return r;const[i,o,a,s]=r.match(Yi);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},l6=e=>Or(0,255,e),ml={...qn,transform:e=>Math.round(l6(e))},Dn={test:Md("rgb","red"),parse:s2("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ml.transform(e)+", "+ml.transform(t)+", "+ml.transform(n)+", "+Si(wi.transform(r))+")"};function c6(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Jc={test:Md("#"),parse:c6,transform:Dn.transform},vr={test:Md("hsl","hue"),parse:s2("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Dt.transform(Si(t))+", "+Dt.transform(Si(n))+", "+Si(wi.transform(r))+")"},We={test:e=>Dn.test(e)||Jc.test(e)||vr.test(e),parse:e=>Dn.test(e)?Dn.parse(e):vr.test(e)?vr.parse(e):Jc.parse(e),transform:e=>to(e)?e:e.hasOwnProperty("red")?Dn.transform(e):vr.transform(e)},l2="${c}",c2="${n}";function u6(e){var t,n;return isNaN(e)&&to(e)&&(((t=e.match(Yi))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Kc))===null||n===void 0?void 0:n.length)||0)>0}function Ma(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0,r=0;const i=e.match(Kc);i&&(n=i.length,e=e.replace(Kc,l2),t.push(...i.map(We.parse)));const o=e.match(Yi);return o&&(r=o.length,e=e.replace(Yi,c2),t.push(...o.map(qn.parse))),{values:t,numColors:n,numNumbers:r,tokenised:e}}function u2(e){return Ma(e).values}function d2(e){const{values:t,numColors:n,tokenised:r}=Ma(e),i=t.length;return o=>{let a=r;for(let s=0;s<i;s++)a=a.replace(s<n?l2:c2,s<n?We.transform(o[s]):Si(o[s]));return a}}const d6=e=>typeof e=="number"?0:e;function f6(e){const t=u2(e);return d2(e)(t.map(d6))}const Tn={test:u6,parse:u2,createTransformer:d2,getAnimatableNone:f6},p6=new Set(["brightness","contrast","saturate","opacity"]);function h6(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Yi)||[];if(!r)return e;const i=n.replace(r,"");let o=p6.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const m6=/([a-z-]*)\(.*?\)/g,eu={...Tn,getAnimatableNone:e=>{const t=e.match(m6);return t?t.map(h6).join(" "):e}},g6={...Nm,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:eu,WebkitFilter:eu},Id=e=>g6[e];function Rd(e,t){var n;let r=Id(e);return r!==eu&&(r=Tn),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const f2=e=>t=>t.test(e),v6={test:e=>e==="auto",parse:e=>e},p2=[qn,V,Dt,nn,a4,o4,v6],ei=e=>p2.find(f2(e)),y6=[...p2,We,Tn],x6=e=>y6.find(f2(e));function w6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function S6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function As(e,t,n){const r=e.getProps();return Td(r,t,n!==void 0?n:r.custom,w6(e),S6(e))}function k6(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Pt(n))}function b6(e,t){const n=As(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){const s=C4(o[a]);k6(e,a,s)}}function C6(e,t,n){var r,i;const o=Object.keys(t).filter(s=>!e.hasValue(s)),a=o.length;if(a)for(let s=0;s<a;s++){const l=o[s],c=t[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(J4(u)||e6(u))?u=parseFloat(u):!x6(u)&&Tn.test(c)&&(u=Rd(l,c)),e.addValue(l,Pt(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function T6(e,t){return t?(t[e]||t.default||t).from:void 0}function E6(e,t,n){var r;const i={};for(const o in e){const a=T6(o,t);i[o]=a!==void 0?a:(r=n.getValue(o))===null||r===void 0?void 0:r.get()}return i}function Ia(e){return!!(Vt(e)&&e.add)}const P6=(e,t)=>`${e}: ${t}`;function j6(e,t){const{MotionAppearAnimations:n}=window,r=P6(e,Zn.has(t)?"transform":t),i=n&&n.get(r);return i?(Ke.render(()=>{try{i.cancel(),n.delete(r)}catch{}}),i.currentTime||0):0}const A6="framerAppearId",z6="data-"+bd(A6);var Ra=function(){};const Qo=e=>e*1e3,L6={current:!1},_d=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Od=e=>t=>1-e(1-t),Dd=e=>e*e,M6=Od(Dd),Vd=_d(Dd),we=(e,t,n)=>-n*e+n*t+e;function gl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function I6({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=gl(l,s,e+1/3),o=gl(l,s,e),a=gl(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}const vl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},R6=[Jc,Dn,vr],_6=e=>R6.find(t=>t.test(e));function Op(e){const t=_6(e);let n=t.parse(e);return t===vr&&(n=I6(n)),n}const h2=(e,t)=>{const n=Op(e),r=Op(t),i={...n};return o=>(i.red=vl(n.red,r.red,o),i.green=vl(n.green,r.green,o),i.blue=vl(n.blue,r.blue,o),i.alpha=we(n.alpha,r.alpha,o),Dn.transform(i))};function m2(e,t){return typeof e=="number"?n=>we(e,t,n):We.test(e)?h2(e,t):v2(e,t)}const g2=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,a)=>m2(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}},O6=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=m2(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},v2=(e,t)=>{const n=Tn.createTransformer(t),r=Ma(e),i=Ma(t);return r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Ps(g2(r.values,i.values),n):a=>`${a>0?t:e}`},_a=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Dp=(e,t)=>n=>we(e,t,n);function D6(e){return typeof e=="number"?Dp:typeof e=="string"?We.test(e)?h2:v2:Array.isArray(e)?g2:typeof e=="object"?O6:Dp}function V6(e,t,n){const r=[],i=n||D6(e[0]),o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]:t;s=Ps(l,s)}r.push(s)}return r}function Nd(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;Ra(o===t.length),Ra(!r||!Array.isArray(r)||r.length===o-1),e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=V6(t,r,i),s=a.length,l=c=>{let u=0;if(s>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const f=_a(e[u],e[u+1],c);return a[u](f)};return n?c=>l(Or(e[0],e[o-1],c)):l}const $d=e=>e,y2=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,N6=1e-7,$6=12;function F6(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=y2(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>N6&&++s<$6);return a}function x2(e,t,n,r){if(e===t&&n===r)return $d;const i=o=>F6(o,0,1,e,n);return o=>o===0||o===1?o:y2(i(o),t,r)}const w2=e=>1-Math.sin(Math.acos(e)),Fd=Od(w2),B6=_d(Fd),S2=x2(.33,1.53,.69,.99),Bd=Od(S2),H6=_d(Bd),U6=e=>(e*=2)<1?.5*Bd(e):.5*(2-Math.pow(2,-10*(e-1))),W6={linear:$d,easeIn:Dd,easeInOut:Vd,easeOut:M6,circIn:w2,circInOut:B6,circOut:Fd,backIn:Bd,backInOut:H6,backOut:S2,anticipate:U6},Vp=e=>{if(Array.isArray(e)){Ra(e.length===4);const[t,n,r,i]=e;return x2(t,n,r,i)}else if(typeof e=="string")return W6[e];return e},Y6=e=>Array.isArray(e)&&typeof e[0]!="number";function G6(e,t){return e.map(()=>t||Vd).splice(0,e.length-1)}function K6(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function Q6(e,t){return e.map(n=>n*t)}function Oa({keyframes:e,ease:t=Vd,times:n,duration:r=300}){e=[...e];const i=Oa[0],o=Y6(t)?t.map(Vp):Vp(t),a={done:!1,value:i},s=Q6(n&&n.length===Oa.length?n:K6(e),r);function l(){return Nd(s,e,{ease:Array.isArray(o)?o:G6(e,o)})}let c=l();return{next:u=>(a.value=c(u),a.done=u>=r,a),flipTarget:()=>{e.reverse(),c=l()}}}const yl=.001,X6=.01,Z6=10,q6=.05,J6=1;function ex({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,a=1-t;a=Or(q6,J6,a),e=Or(X6,Z6,e/1e3),a<1?(i=c=>{const u=c*a,f=u*e,p=u-n,v=tu(c,a),y=Math.exp(-f);return yl-p/v*y},o=c=>{const f=c*a*e,p=f*n+n,v=Math.pow(a,2)*Math.pow(c,2)*e,y=Math.exp(-f),w=tu(Math.pow(c,2),a);return(-i(c)+yl>0?-1:1)*((p-v)*y)/w}):(i=c=>{const u=Math.exp(-c*e),f=(c-n)*e+1;return-yl+u*f},o=c=>{const u=Math.exp(-c*e),f=(n-c)*(e*e);return u*f});const s=5/e,l=nx(i,o,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:e}}}const tx=12;function nx(e,t,n){let r=n;for(let i=1;i<tx;i++)r=r-e(r)/t(r);return r}function tu(e,t){return e*Math.sqrt(1-t*t)}const rx=["duration","bounce"],ix=["stiffness","damping","mass"];function Np(e,t){return t.some(n=>e[n]!==void 0)}function ox(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Np(e,ix)&&Np(e,rx)){const n=ex(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}const ax=5;function k2({keyframes:e,restSpeed:t=2,restDelta:n=.01,...r}){let i=e[0],o=e[e.length-1];const a={done:!1,value:i},{stiffness:s,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:p}=ox(r);let v=sx,y=u?-(u/1e3):0;const w=l/(2*Math.sqrt(s*c));function k(){const m=o-i,h=Math.sqrt(s/c)/1e3;if(n===void 0&&(n=Math.min(Math.abs(o-i)/100,.4)),w<1){const g=tu(h,w);v=x=>{const b=Math.exp(-w*h*x);return o-b*((y+w*h*m)/g*Math.sin(g*x)+m*Math.cos(g*x))}}else if(w===1)v=g=>o-Math.exp(-h*g)*(m+(y+h*m)*g);else{const g=h*Math.sqrt(w*w-1);v=x=>{const b=Math.exp(-w*h*x),E=Math.min(g*x,300);return o-b*((y+w*h*m)*Math.sinh(E)+g*m*Math.cosh(E))/g}}}return k(),{next:m=>{const h=v(m);if(p)a.done=m>=f;else{let g=y;if(m!==0)if(w<1){const E=Math.max(0,m-ax);g=Ld(h-v(E),m-E)}else g=0;const x=Math.abs(g)<=t,b=Math.abs(o-h)<=n;a.done=x&&b}return a.value=a.done?o:h,a},flipTarget:()=>{y=-y,[i,o]=[o,i],k()}}}k2.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const sx=e=>0;function lx({keyframes:e=[0],velocity:t=0,power:n=.8,timeConstant:r=350,restDelta:i=.5,modifyTarget:o}){const a=e[0],s={done:!1,value:a};let l=n*t;const c=a+l,u=o===void 0?c:o(c);return u!==c&&(l=u-a),{next:f=>{const p=-l*Math.exp(-f/r);return s.done=!(p>i||p<-i),s.value=s.done?u:u+p,s},flipTarget:()=>{}}}const cx={decay:lx,keyframes:Oa,tween:Oa,spring:k2};function b2(e,t,n=0){return e-t-n}function ux(e,t=0,n=0,r=!0){return r?b2(t+-e,t,n):t-(e-t)+n}function dx(e,t,n,r){return r?e>=t+n:e<=-n}const fx=e=>{const t=({delta:n})=>e(n);return{start:()=>Ke.update(t,!0),stop:()=>Zt.update(t)}};function Da({duration:e,driver:t=fx,elapsed:n=0,repeat:r=0,repeatType:i="loop",repeatDelay:o=0,keyframes:a,autoplay:s=!0,onPlay:l,onStop:c,onComplete:u,onRepeat:f,onUpdate:p,type:v="keyframes",...y}){var w,k;let m,h=0,g=e,x,b=!1,E=!0,P;const A=cx[a.length>2?"keyframes":v],N=a[0],I=a[a.length-1];!((k=(w=A).needsInterpolation)===null||k===void 0)&&k.call(w,N,I)&&(P=Nd([0,100],[N,I],{clamp:!1}),a=[0,100]);const oe=A({...y,duration:e,keyframes:a});function fe(){h++,i==="reverse"?(E=h%2===0,n=ux(n,g,o,E)):(n=b2(n,g,o),i==="mirror"&&oe.flipTarget()),b=!1,f&&f()}function Se(){m.stop(),u&&u()}function Pe(ke){if(E||(ke=-ke),n+=ke,!b){const ve=oe.next(Math.max(0,n));x=ve.value,P&&(x=P(x)),b=E?ve.done:n<=0}p&&p(x),b&&(h===0&&(g=g!==void 0?g:n),h<r?dx(n,g,o,E)&&fe():Se())}function X(){l&&l(),m=t(Pe),m.start()}return s&&X(),{stop:()=>{c&&c(),m.stop()},sample:ke=>oe.next(Math.max(0,ke))}}function px(e){return!e||Array.isArray(e)||typeof e=="string"&&C2[e]}const li=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,C2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:li([0,.65,.55,1]),circOut:li([.55,0,1,.45]),backIn:li([.31,.01,.66,-.59]),backOut:li([.33,1.53,.69,.99])};function hx(e){if(e)return Array.isArray(e)?li(e):C2[e]}function mx(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){return e.animate({[t]:n,offset:l},{delay:r,duration:i,easing:hx(s),fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}const Po=10;function gx(e,t,{onUpdate:n,onComplete:r,...i}){let{keyframes:o,duration:a=.3,elapsed:s=0,ease:l}=i;if(i.type==="spring"||!px(i.ease)){const u=Da(i);let f={done:!1,value:o[0]};const p=[];let v=0;for(;!f.done;)f=u.sample(v),p.push(f.value),v+=Po;o=p,a=v-Po,l="linear"}const c=mx(e.owner.current,t,o,{...i,delay:-s,duration:a,ease:l});return c.onfinish=()=>{e.set(o[o.length-1]),r&&r()},()=>{const{currentTime:u}=c;if(u){const f=Da(i);e.setWithVelocity(f.sample(u-Po).value,f.sample(u).value,Po)}Ke.update(()=>c.cancel())}}function T2(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Zt.read(r),e(o-t))};return Ke.read(r,!0),()=>Zt.read(r)}function vx({keyframes:e,elapsed:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),()=>{});return t?T2(i,-t):i()}function yx({keyframes:e,velocity:t=0,min:n,max:r,power:i=.8,timeConstant:o=750,bounceStiffness:a=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:p,onStop:v}){const y=e[0];let w;function k(x){return n!==void 0&&x<n||r!==void 0&&x>r}function m(x){return n===void 0?r:r===void 0||Math.abs(n-x)<Math.abs(r-x)?n:r}function h(x){w==null||w.stop(),w=Da({keyframes:[0,1],velocity:0,...x,driver:u,onUpdate:b=>{var E;f==null||f(b),(E=x.onUpdate)===null||E===void 0||E.call(x,b)},onComplete:p,onStop:v})}function g(x){h({type:"spring",stiffness:a,damping:s,restDelta:l,...x})}if(k(y))g({velocity:t,keyframes:[y,m(y)]});else{let x=i*t+y;typeof c<"u"&&(x=c(x));const b=m(x),E=b===n?-1:1;let P,A;const N=I=>{P=A,A=I,t=Ld(I-P,Yt.delta),(E===1&&I>b||E===-1&&I<b)&&g({keyframes:[I,b],velocity:t})};h({type:"decay",keyframes:[y,0],velocity:t,timeConstant:o,power:i,restDelta:l,modifyTarget:c,onUpdate:k(x)?N:void 0})}return{stop:()=>w==null?void 0:w.stop()}}const An=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),jo=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),xl=()=>({type:"keyframes",ease:"linear",duration:.3}),xx={type:"keyframes",duration:.8},$p={x:An,y:An,z:An,rotate:An,rotateX:An,rotateY:An,rotateZ:An,scaleX:jo,scaleY:jo,scale:jo,opacity:xl,backgroundColor:xl,color:xl,default:jo},wx=(e,{keyframes:t})=>t.length>2?xx:($p[e]||$p.default)(t[1]),nu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Tn.test(t)&&!t.startsWith("url("));function Sx({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,...c}){return!!Object.keys(c).length}function Fp(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function Bp(e){return typeof e=="number"?0:Rd("",e)}function E2(e,t){return e[t]||e.default||e}function kx(e,t,n,r){const i=nu(t,n);let o=r.from!==void 0?r.from:e.get();return o==="none"&&i&&typeof n=="string"?o=Rd(t,n):Fp(o)&&typeof n=="string"?o=Bp(n):!Array.isArray(n)&&Fp(n)&&typeof o=="string"&&(n=Bp(o)),Array.isArray(n)?(n[0]===null&&(n[0]=o),n):[o,n]}const Hp={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},wl={},P2={};for(const e in Hp)P2[e]=()=>(wl[e]===void 0&&(wl[e]=Hp[e]()),wl[e]);const bx=new Set(["opacity"]),Hd=(e,t,n,r={})=>i=>{const o=E2(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s=s-Qo(a);const l=kx(t,e,n,o),c=l[0],u=l[l.length-1],f=nu(e,c),p=nu(e,u);let v={keyframes:l,velocity:t.getVelocity(),...o,elapsed:s,onUpdate:m=>{t.set(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(!f||!p||L6.current||o.type===!1)return vx(v);if(o.type==="inertia"){const m=yx(v);return()=>m.stop()}Sx(o)||(v={...v,...wx(e,v)}),v.duration&&(v.duration=Qo(v.duration)),v.repeatDelay&&(v.repeatDelay=Qo(v.repeatDelay));const y=t.owner,w=y&&y.current;if(P2.waapi()&&bx.has(e)&&!v.repeatDelay&&v.repeatType!=="mirror"&&v.damping!==0&&y&&w instanceof HTMLElement&&!y.getProps().onUpdate)return gx(t,e,v);{const m=Da(v);return()=>m.stop()}};function Cx(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>ru(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=ru(e,t,n);else{const i=typeof t=="function"?As(e,t,n.custom):t;r=j2(e,i,n)}return r.then(()=>e.notify("AnimationComplete",t))}function ru(e,t,n={}){var r;const i=As(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>j2(e,i,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=o;return Tx(e,t,u+c,f,p,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,u]=l==="beforeChildren"?[a,s]:[s,a];return c().then(u)}else return Promise.all([a(),s(n.delay)])}function j2(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");r&&(a=r);const u=[],f=i&&((o=e.animationState)===null||o===void 0?void 0:o.getState()[i]);for(const p in l){const v=e.getValue(p),y=l[p];if(!v||y===void 0||f&&Px(f,p))continue;let w={delay:n,elapsed:0,...a};if(e.shouldReduceMotion&&Zn.has(p)&&(w={...w,type:!1,delay:0}),!v.hasAnimated){const m=e.getProps()[z6];m&&(w.elapsed=j6(m,p))}let k=v.start(Hd(p,v,y,w));Ia(c)&&(c.add(p),k=k.then(()=>c.remove(p))),u.push(k)}return Promise.all(u).then(()=>{s&&b6(e,s)})}function Tx(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>s-c*r;return Array.from(e.variantChildren).sort(Ex).forEach((c,u)=>{a.push(ru(c,t,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(a)}function Ex(e,t){return e.sortNodePosition(t)}function Px({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const Ud=[se.Animate,se.InView,se.Focus,se.Hover,se.Tap,se.Drag,se.Exit],jx=[...Ud].reverse(),Ax=Ud.length;function zx(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Cx(e,n,r)))}function Lx(e){let t=zx(e);const n=Ix();let r=!0;const i=(l,c)=>{const u=As(e,c);if(u){const{transition:f,transitionEnd:p,...v}=u;l={...l,...v,...p}}return l};function o(l){t=l(e)}function a(l,c){const u=e.getProps(),f=e.getVariantContext(!0)||{},p=[],v=new Set;let y={},w=1/0;for(let m=0;m<Ax;m++){const h=jx[m],g=n[h],x=u[h]!==void 0?u[h]:f[h],b=Ui(x),E=h===c?g.isActive:null;E===!1&&(w=m);let P=x===f[h]&&x!==u[h]&&b;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),g.protectedKeys={...y},!g.isActive&&E===null||!x&&!g.prevProp||Cs(x)||typeof x=="boolean")continue;const A=Mx(g.prevProp,x);let N=A||h===c&&g.isActive&&!P&&b||m>w&&b;const I=Array.isArray(x)?x:[x];let oe=I.reduce(i,{});E===!1&&(oe={});const{prevResolvedValues:fe={}}=g,Se={...fe,...oe},Pe=X=>{N=!0,v.delete(X),g.needsAnimating[X]=!0};for(const X in Se){const ke=oe[X],ve=fe[X];y.hasOwnProperty(X)||(ke!==ve?za(ke)&&za(ve)?!r2(ke,ve)||A?Pe(X):g.protectedKeys[X]=!0:ke!==void 0?Pe(X):v.add(X):ke!==void 0&&v.has(X)?Pe(X):g.protectedKeys[X]=!0)}g.prevProp=x,g.prevResolvedValues=oe,g.isActive&&(y={...y,...oe}),r&&e.blockInitialAnimation&&(N=!1),N&&!P&&p.push(...I.map(X=>({animation:X,options:{type:h,...l}})))}if(v.size){const m={};v.forEach(h=>{const g=e.getBaseTarget(h);g!==void 0&&(m[h]=g)}),p.push({animation:m})}let k=!!p.length;return r&&u.initial===!1&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(p):Promise.resolve()}function s(l,c,u){var f;if(n[l].isActive===c)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(v=>{var y;return(y=v.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const p=a(u,l);for(const v in n)n[v].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n}}function Mx(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!r2(t,e):!1}function zn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ix(){return{[se.Animate]:zn(!0),[se.InView]:zn(),[se.Hover]:zn(),[se.Tap]:zn(),[se.Drag]:zn(),[se.Focus]:zn(),[se.Exit]:zn()}}const Rx={animation:fn(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=Lx(e)),Cs(t)&&C.useEffect(()=>t.subscribe(e),[t])}),exit:fn(e=>{const{custom:t,visualElement:n}=e,[r,i]=n2(),o=C.useContext(eo);C.useEffect(()=>{n.isPresent=r;const a=n.animationState&&n.animationState.setActive(se.Exit,!r,{custom:o&&o.custom||t});a&&!r&&a.then(i)},[r])})},Up=(e,t)=>Math.abs(e-t);function _x(e,t){const n=Up(e.x,t.x),r=Up(e.y,t.y);return Math.sqrt(n**2+r**2)}class A2{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const c=kl(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,f=_x(c.offset,{x:0,y:0})>=3;if(!u&&!f)return;const{point:p}=c,{timestamp:v}=Yt;this.history.push({...p,timestamp:v});const{onStart:y,onMove:w}=this.handlers;u||(y&&y(this.lastMoveEvent,c),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,c)},this.handlePointerMove=(c,u)=>{if(this.lastMoveEvent=c,this.lastMoveEventInfo=Sl(u,this.transformPagePoint),Km(c)&&c.buttons===0){this.handlePointerUp(c,u);return}Ke.update(this.updatePoint,!0)},this.handlePointerUp=(c,u)=>{this.end();const{onEnd:f,onSessionEnd:p}=this.handlers,v=kl(Sl(u,this.transformPagePoint),this.history);this.startEvent&&f&&f(c,v),p&&p(c,v)},Qm(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const i=Ed(t),o=Sl(i,this.transformPagePoint),{point:a}=o,{timestamp:s}=Yt;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,kl(o,this.history)),this.removeListeners=Ps(Er(window,"pointermove",this.handlePointerMove),Er(window,"pointerup",this.handlePointerUp),Er(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zt.update(this.updatePoint)}}function Sl(e,t){return t?{point:t(e.point)}:e}function Wp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function kl({point:e},t){return{point:e,delta:Wp(e,z2(t)),offset:Wp(e,Ox(t)),velocity:Dx(t,.1)}}function Ox(e){return e[0]}function z2(e){return e[e.length-1]}function Dx(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=z2(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Qo(t)));)n--;if(!r)return{x:0,y:0};const o=(i.timestamp-r.timestamp)/1e3;if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function lt(e){return e.max-e.min}function iu(e,t=0,n=.01){return Math.abs(e-t)<=n}function Yp(e,t,n,r=.5){e.origin=r,e.originPoint=we(t.min,t.max,e.origin),e.scale=lt(n)/lt(t),(iu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=we(n.min,n.max,e.origin)-e.originPoint,(iu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ki(e,t,n,r){Yp(e.x,t.x,n.x,r==null?void 0:r.originX),Yp(e.y,t.y,n.y,r==null?void 0:r.originY)}function Gp(e,t,n){e.min=n.min+t.min,e.max=e.min+lt(t)}function Vx(e,t,n){Gp(e.x,t.x,n.x),Gp(e.y,t.y,n.y)}function Kp(e,t,n){e.min=t.min-n.min,e.max=e.min+lt(t)}function bi(e,t,n){Kp(e.x,t.x,n.x),Kp(e.y,t.y,n.y)}function Nx(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?we(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?we(n,e,r.max):Math.min(e,n)),e}function Qp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function $x(e,{top:t,left:n,bottom:r,right:i}){return{x:Qp(e.x,n,i),y:Qp(e.y,t,r)}}function Xp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Fx(e,t){return{x:Xp(e.x,t.x),y:Xp(e.y,t.y)}}function Bx(e,t){let n=.5;const r=lt(e),i=lt(t);return i>r?n=_a(t.min,t.max-r,e.min):r>i&&(n=_a(e.min,e.max-i,t.min)),Or(0,1,n)}function Hx(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ou=.35;function Ux(e=ou){return e===!1?e=0:e===!0&&(e=ou),{x:Zp(e,"left","right"),y:Zp(e,"top","bottom")}}function Zp(e,t,n){return{min:qp(e,t),max:qp(e,n)}}function qp(e,t){return typeof e=="number"?e:e[t]||0}const Jp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ci=()=>({x:Jp(),y:Jp()}),e0=()=>({min:0,max:0}),je=()=>({x:e0(),y:e0()});function It(e){return[e("x"),e("y")]}function L2({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Wx({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Yx(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function bl(e){return e===void 0||e===1}function au({scale:e,scaleX:t,scaleY:n}){return!bl(e)||!bl(t)||!bl(n)}function In(e){return au(e)||M2(e)||e.z||e.rotate||e.rotateX||e.rotateY}function M2(e){return t0(e.x)||t0(e.y)}function t0(e){return e&&e!=="0%"}function Va(e,t,n){const r=e-n,i=t*r;return n+i}function n0(e,t,n,r,i){return i!==void 0&&(e=Va(e,i,r)),Va(e,n,r)+t}function su(e,t=0,n=1,r,i){e.min=n0(e.min,t,n,r,i),e.max=n0(e.max,t,n,r,i)}function I2(e,{x:t,y:n}){su(e.x,t.translate,t.scale,t.originPoint),su(e.y,n.translate,n.scale,n.originPoint)}function Gx(e,t,n,r=!1){var i,o;const a=n.length;if(!a)return;t.x=t.y=1;let s,l;for(let c=0;c<a;c++)s=n[c],l=s.projectionDelta,((o=(i=s.instance)===null||i===void 0?void 0:i.style)===null||o===void 0?void 0:o.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&yr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,I2(e,l)),r&&In(s.latestValues)&&yr(e,s.latestValues));t.x=r0(t.x),t.y=r0(t.y)}function r0(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function sn(e,t){e.min=e.min+t,e.max=e.max+t}function i0(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,a=we(e.min,e.max,o);su(e,t[n],t[r],a,t.scale)}const Kx=["x","scaleX","originX"],Qx=["y","scaleY","originY"];function yr(e,t){i0(e.x,t,Kx),i0(e.y,t,Qx)}function R2(e,t){return L2(Yx(e.getBoundingClientRect(),t))}function Xx(e,t,n){const r=R2(e,n),{scroll:i}=t;return i&&(sn(r.x,i.offset.x),sn(r.y,i.offset.y)),r}const Zx=new WeakMap;class qx{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=je(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(Ed(s,"page").point)},i=(s,l)=>{var c;const{drag:u,dragPropagation:f,onDragStart:p}=this.getProps();u&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Jm(u),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),It(v=>{var y,w;let k=this.getAxisMotionValue(v).get()||0;if(Dt.test(k)){const m=(w=(y=this.visualElement.projection)===null||y===void 0?void 0:y.layout)===null||w===void 0?void 0:w.layoutBox[v];m&&(k=lt(m)*(parseFloat(k)/100))}this.originPoint[v]=k}),p==null||p(s,l),(c=this.visualElement.animationState)===null||c===void 0||c.setActive(se.Drag,!0))},o=(s,l)=>{const{dragPropagation:c,dragDirectionLock:u,onDirectionLock:f,onDrag:p}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:v}=l;if(u&&this.currentDirection===null){this.currentDirection=Jx(v),this.currentDirection!==null&&(f==null||f(this.currentDirection));return}this.updateAxis("x",l.point,v),this.updateAxis("y",l.point,v),this.visualElement.render(),p==null||p(s,l)},a=(s,l)=>this.stop(s,l);this.panSession=new A2(t,{onSessionStart:r,onStart:i,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o==null||o(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(se.Drag,!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ao(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=Nx(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&gr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=$x(r.layoutBox,t):this.constraints=!1,this.elastic=Ux(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&It(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Hx(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!gr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Xx(r,i.root,this.visualElement.getTransformPagePoint());let a=Fx(i.layout.layoutBox,o);if(n){const s=n(Wx(a));this.hasMutatedConstraints=!!s,s&&(a=L2(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},c=It(u=>{if(!Ao(u,n,this.currentDirection))return;let f=(l==null?void 0:l[u])||{};a&&(f={min:0,max:0});const p=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[u]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Hd(t,r,0,n))}stopAnimation(){It(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n;const r="_drag"+t.toUpperCase(),i=this.visualElement.getProps()[r];return i||this.visualElement.getValue(t,((n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])||0)}snapToCursor(t){It(n=>{const{drag:r}=this.getProps();if(!Ao(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-we(a,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:i}=this.visualElement;if(!gr(r)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};It(s=>{const l=this.getAxisMotionValue(s);if(l){const c=l.get();o[s]=Bx({min:c,max:c},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",(t=i.root)===null||t===void 0||t.updateScroll(),i.updateLayout(),this.resolveConstraints(),It(s=>{if(!Ao(s,n,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(we(c,u,o[s]))})}addListeners(){var t;if(!this.visualElement.current)return;Zx.set(this.visualElement,this);const n=this.visualElement.current,r=Er(n,"pointerdown",c=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(c)}),i=()=>{const{dragConstraints:c}=this.getProps();gr(c)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",i);o&&!o.layout&&((t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout()),i();const s=Es(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(It(f=>{const p=this.getAxisMotionValue(f);p&&(this.originPoint[f]+=c[f].translate,p.set(p.get()+c[f].translate))}),this.visualElement.render())});return()=>{s(),r(),a(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=ou,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function Ao(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Jx(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function e8(e){const{dragControls:t,visualElement:n}=e,r=Xn(()=>new qx(n));C.useEffect(()=>t&&t.subscribe(r),[r,t]),C.useEffect(()=>r.addListeners(),[r])}function t8({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:i}){const o=e||t||n||r,a=C.useRef(null),{transformPagePoint:s}=C.useContext(ks),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(u,f)=>{a.current=null,n&&n(u,f)}};C.useEffect(()=>{a.current!==null&&a.current.updateHandlers(l)});function c(u){a.current=new A2(u,l,{transformPagePoint:s})}La(i,"pointerdown",o&&c),Pd(()=>a.current&&a.current.end())}const n8={pan:fn(t8),drag:fn(e8)};function lu(e){return typeof e=="string"&&e.startsWith("var(--")}const _2=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function r8(e){const t=_2.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function cu(e,t,n=1){const[r,i]=r8(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);return o?o.trim():lu(i)?cu(i,t,n+1):i}function i8(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!lu(o))return;const a=cu(o,r);a&&i.set(a)});for(const i in t){const o=t[i];if(!lu(o))continue;const a=cu(o,r);a&&(t[i]=a,n&&n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const o8=new Set(["width","height","top","left","right","bottom","x","y"]),O2=e=>o8.has(e),a8=e=>Object.keys(e).some(O2),D2=(e,t)=>{e.set(t,!1),e.set(t)},o0=e=>e===qn||e===V;var a0;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(a0||(a0={}));const s0=(e,t)=>parseFloat(e.split(", ")[t]),l0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return s0(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?s0(o[1],e):0}},s8=new Set(["x","y","z"]),l8=ja.filter(e=>!s8.has(e));function c8(e){const t=[];return l8.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const c0={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:l0(4,13),y:l0(5,14)},u8=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{s[c]=c0[c](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const u=t.getValue(c);D2(u,s[c]),e[c]=c0[c](l,o)}),e},d8=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(O2);let o=[],a=!1;const s=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let u=n[l],f=ei(u);const p=t[l];let v;if(za(p)){const y=p.length,w=p[0]===null?1:0;u=p[w],f=ei(u);for(let k=w;k<y;k++)v?Ra(ei(p[k])===v):v=ei(p[k])}else v=ei(p);if(f!==v)if(o0(f)&&o0(v)){const y=c.get();typeof y=="string"&&c.set(parseFloat(y)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&v===V&&(t[l]=p.map(parseFloat))}else f!=null&&f.transform&&(v!=null&&v.transform)&&(u===0||p===0)?u===0?c.set(v.transform(u)):t[l]=f.transform(p):(a||(o=c8(e),a=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],D2(c,p))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,c=u8(t,e,s);return o.length&&o.forEach(([u,f])=>{e.getValue(u).set(f)}),e.render(),Qn&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function f8(e,t,n,r){return a8(t)?d8(e,t,n,r):{target:t,transitionEnd:r}}const p8=(e,t,n,r)=>{const i=i8(e,t,r);return t=i.target,r=i.transitionEnd,f8(e,t,n,r)},Na={current:null},Wd={current:!1};function V2(){if(Wd.current=!0,!!Qn)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Na.current=e.matches;e.addListener(t),t()}else Na.current=!1}function h8(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(Vt(o))e.addValue(i,o),Ia(r)&&r.add(i);else if(Vt(a))e.addValue(i,Pt(o,{owner:e})),Ia(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const s=e.getValue(i);!s.hasAnimated&&s.set(o)}else{const s=e.getStaticValue(i);e.addValue(i,Pt(s!==void 0?s:o))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const N2=Object.keys(Wi),m8=N2.length,u0=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class g8{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:i},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ke.render(this.render,!1,!0);const{latestValues:a,renderState:s}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Ts(n),this.isVariantNode=_m(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:l,...c}=this.scrapeMotionValuesFromProps(n);for(const u in c){const f=c[u];a[u]!==void 0&&Vt(f)&&(f.set(a[u],!1),Ia(l)&&l.add(u))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),Wd.current||V2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Na.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),Zt.update(this.notifyUpdate),Zt.render(this.render),this.valueSubscriptions.forEach(i=>i()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const i in this.events)this.events[i].clear();this.current=null}bindToMotionValue(t,n){const r=Zn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Ke.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,i,o,a){const s=[];for(let l=0;l<m8;l++){const c=N2[l],{isEnabled:u,Component:f}=Wi[c];u(t)&&f&&s.push(C.createElement(f,{key:c,...t,visualElement:this}))}if(!this.projection&&o){this.projection=new o(i,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:f,layoutScroll:p}=t;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||f&&gr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,layoutScroll:p})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):je()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<u0.length;n++){const r=u0[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const i=t["on"+r];i&&(this.propEventSubscriptions[r]=this.on(r,i))}this.prevMotionValues=h8(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const o=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(o.initial=this.props.initial),o}const i={};for(let o=0;o<v8;o++){const a=$2[o],s=this.props[a];(Ui(s)||s===!1)&&(i[a]=s)}return i}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Pt(n,{owner:this}),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Td(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Vt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new zd),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const $2=["initial",...Ud],v8=$2.length;class F2 extends g8{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let a=E6(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),a&&(a=i(a))),o){C6(this,r,a);const s=p8(this,r,a,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function y8(e){return window.getComputedStyle(e)}class x8 extends F2{readValueFromInstance(t,n){if(Zn.has(n)){const r=Id(n);return r&&r.default||0}else{const r=y8(t),i=(Vm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return R2(t,n)}build(t,n,r,i){xd(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t){return Cd(t)}renderInstance(t,n,r,i){Hm(t,n,r,i)}}class w8 extends F2{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return Zn.has(n)?((r=Id(n))===null||r===void 0?void 0:r.default)||0:(n=Um.has(n)?n:bd(n),t.getAttribute(n))}measureInstanceViewportBox(){return je()}scrapeMotionValuesFromProps(t){return Ym(t)}build(t,n,r,i){Sd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Wm(t,n,r,i)}mount(t){this.isSVGTag=kd(t.tagName),super.mount(t)}}const S8=(e,t)=>yd(e)?new w8(t,{enableHardwareAcceleration:!1}):new x8(t,{enableHardwareAcceleration:!0});function d0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ti={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(V.test(e))e=parseFloat(e);else return e;const n=d0(e,t.target.x),r=d0(e,t.target.y);return`${n}% ${r}%`}},f0="_$css",k8={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=e.includes("var("),o=[];i&&(e=e.replace(_2,v=>(o.push(v),f0)));const a=Tn.parse(e);if(a.length>5)return r;const s=Tn.createTransformer(e),l=typeof a[0]!="number"?1:0,c=n.x.scale*t.x,u=n.y.scale*t.y;a[0+l]/=c,a[1+l]/=u;const f=we(c,u,.5);typeof a[2+l]=="number"&&(a[2+l]/=f),typeof a[3+l]=="number"&&(a[3+l]/=f);let p=s(a);if(i){let v=0;p=p.replace(f0,()=>{const y=o[v];return v++,y})}return p}};class b8 extends ce.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;J3(T8),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),xi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||Ke.postRender(()=>{var s;!((s=a.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(i),r!=null&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function C8(e){const[t,n]=n2(),r=C.useContext(vd);return ce.createElement(b8,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(Om),isPresent:t,safeToRemove:n})}const T8={borderRadius:{...ti,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ti,borderTopRightRadius:ti,borderBottomLeftRadius:ti,borderBottomRightRadius:ti,boxShadow:k8},E8={measureLayout:C8};function P8(e,t,n={}){const r=Vt(e)?e:Pt(e);return r.start(Hd("",r,t,n)),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const B2=["TopLeft","TopRight","BottomLeft","BottomRight"],j8=B2.length,p0=e=>typeof e=="string"?parseFloat(e):e,h0=e=>typeof e=="number"||V.test(e);function A8(e,t,n,r,i,o){i?(e.opacity=we(0,n.opacity!==void 0?n.opacity:1,z8(r)),e.opacityExit=we(t.opacity!==void 0?t.opacity:1,0,L8(r))):o&&(e.opacity=we(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<j8;a++){const s=`border${B2[a]}Radius`;let l=m0(t,s),c=m0(n,s);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||h0(l)===h0(c)?(e[s]=Math.max(we(p0(l),p0(c),r),0),(Dt.test(c)||Dt.test(l))&&(e[s]+="%")):e[s]=c}(t.rotate||n.rotate)&&(e.rotate=we(t.rotate||0,n.rotate||0,r))}function m0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const z8=H2(0,.5,Fd),L8=H2(.5,.95,$d);function H2(e,t,n){return r=>r<e?0:r>t?1:n(_a(e,t,r))}function g0(e,t){e.min=t.min,e.max=t.max}function bt(e,t){g0(e.x,t.x),g0(e.y,t.y)}function v0(e,t,n,r,i){return e-=t,e=Va(e,1/n,r),i!==void 0&&(e=Va(e,1/i,r)),e}function M8(e,t=0,n=1,r=.5,i,o=e,a=e){if(Dt.test(t)&&(t=parseFloat(t),t=we(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=we(o.min,o.max,r);e===o&&(s-=t),e.min=v0(e.min,t,n,s,i),e.max=v0(e.max,t,n,s,i)}function y0(e,t,[n,r,i],o,a){M8(e,t[n],t[r],t[i],t.scale,o,a)}const I8=["x","scaleX","originX"],R8=["y","scaleY","originY"];function x0(e,t,n,r){y0(e.x,t,I8,n==null?void 0:n.x,r==null?void 0:r.x),y0(e.y,t,R8,n==null?void 0:n.y,r==null?void 0:r.y)}function w0(e){return e.translate===0&&e.scale===1}function U2(e){return w0(e.x)&&w0(e.y)}function W2(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function S0(e){return lt(e.x)/lt(e.y)}class _8{constructor(){this.members=[]}add(t){jd(this.members,t),t.scheduleRender()}remove(t){if(Ad(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,a;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(a=(i=t.resumingFrom)===null||i===void 0?void 0:(o=i.options).onExitComplete)===null||a===void 0||a.call(o)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function k0(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),u&&(r+=`rotateY(${u}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return(a!==1||s!==1)&&(r+=`scale(${a}, ${s})`),r||"none"}const O8=(e,t)=>e.depth-t.depth;class D8{constructor(){this.children=[],this.isDirty=!1}add(t){jd(this.children,t),this.isDirty=!0}remove(t){Ad(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(O8),this.isDirty=!1,this.children.forEach(t)}}const b0=["","X","Y","Z"],C0=1e3;let V8=0;function Y2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a,s={},l=t==null?void 0:t()){this.id=V8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(F8),this.nodes.forEach(U8),this.nodes.forEach(W8)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=a,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,a&&this.root.registerPotentialNode(a,this);for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new D8)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new zd),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l==null||l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}registerPotentialNode(a,s){this.potentialNodes.set(a,s)}mount(a,s=!1){var l;if(this.instance)return;this.isSVG=a instanceof SVGElement&&a.tagName!=="svg",this.instance=a;const{layoutId:c,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(a),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(u||c)&&(this.isLayoutDirty=!0),e){let p;const v=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=T2(v,250),xi.hasAnimatedSinceResize&&(xi.hasAnimatedSinceResize=!1,this.nodes.forEach(E0))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&f&&(c||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeTargetChanged:y,layout:w})=>{var k,m,h,g,x;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=(m=(k=this.options.transition)!==null&&k!==void 0?k:f.getDefaultTransition())!==null&&m!==void 0?m:X8,{onLayoutAnimationStart:E,onLayoutAnimationComplete:P}=f.getProps(),A=!this.targetLayout||!W2(this.targetLayout,w)||y,N=!v&&y;if(!((h=this.resumeFrom)===null||h===void 0)&&h.instance||N||v&&(A||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,N);const I={...E2(b,"layout"),onPlay:E,onComplete:P};f.shouldReduceMotion&&(I.delay=0,I.type=!1),this.startAnimation(I)}else!v&&this.animationProgress===0&&E0(this),this.isLead()&&((x=(g=this.options).onExitComplete)===null||x===void 0||x.call(g));this.targetLayout=w})}unmount(){var a,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(a=this.getStack())===null||a===void 0||a.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,Zt.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var a;return this.isAnimationBlocked||((a=this.parent)===null||a===void 0?void 0:a.isTreeAnimationBlocked())||!1}startUpdate(){var a;this.isUpdateBlocked()||(this.isUpdating=!0,(a=this.nodes)===null||a===void 0||a.forEach(Y8),this.animationId++)}willUpdate(a=!0){var s,l,c;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const y=this.path[v];y.shouldResetTransform=!0,y.updateScroll("snapshot")}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const p=(c=this.options.visualElement)===null||c===void 0?void 0:c.getProps().transformTemplate;this.prevTransformTemplateValue=p==null?void 0:p(this.latestValues,""),this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(T0);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(Z8),this.potentialNodes.clear()),this.nodes.forEach(H8),this.nodes.forEach(N8),this.nodes.forEach($8),this.clearAllSnapshots(),hl.update(),hl.preRender(),hl.render())}clearAllSnapshots(){this.nodes.forEach(B8),this.sharedNodes.forEach(G8)}scheduleUpdateProjection(){Ke.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var a;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(a=this.options.visualElement)===null||a===void 0||a.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var a;if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!U2(this.projectionDelta),c=(a=this.options.visualElement)===null||a===void 0?void 0:a.getProps().transformTemplate,u=c==null?void 0:c(this.latestValues,""),f=u!==this.prevTransformTemplateValue;s&&(l||In(this.latestValues)||f)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),q8(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return je();const s=a.measureViewportBox(),{scroll:l}=this.root;return l&&(sn(s.x,l.offset.x),sn(s.y,l.offset.y)),s}removeElementScroll(a){const s=je();bt(s,a);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;if(c!==this.root&&u&&f.layoutScroll){if(u.isRoot){bt(s,a);const{scroll:p}=this.root;p&&(sn(s.x,-p.offset.x),sn(s.y,-p.offset.y))}sn(s.x,u.offset.x),sn(s.y,u.offset.y)}}return s}applyTransform(a,s=!1){const l=je();bt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&yr(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),In(u.latestValues)&&yr(l,u.latestValues)}return In(this.latestValues)&&yr(l,this.latestValues),l}removeTransform(a){var s;const l=je();bt(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!In(u.latestValues))continue;au(u.latestValues)&&u.updateSnapshot();const f=je(),p=u.measurePageBox();bt(f,p),x0(l,u.latestValues,(s=u.snapshot)===null||s===void 0?void 0:s.layoutBox,f)}return In(this.latestValues)&&x0(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var a;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:c}=this.options;if(!(!this.layout||!(l||c))){if(!this.targetDelta&&!this.relativeTarget){const u=this.getClosestProjectingParent();u&&u.layout?(this.relativeParent=u,this.relativeTarget=je(),this.relativeTargetOrigin=je(),bi(this.relativeTargetOrigin,this.layout.layoutBox,u.layout.layoutBox),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=je(),this.targetWithTransforms=je()),this.relativeTarget&&this.relativeTargetOrigin&&(!((a=this.relativeParent)===null||a===void 0)&&a.target)?Vx(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bt(this.target,this.layout.layoutBox),I2(this.target,this.targetDelta)):bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const u=this.getClosestProjectingParent();u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target?(this.relativeParent=u,this.relativeTarget=je(),this.relativeTargetOrigin=je(),bi(this.relativeTargetOrigin,this.target,u.target),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||au(this.parent.latestValues)||M2(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var a;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let f=!0;if(s&&(f=!1),u&&l&&(f=!1),f)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(!((a=this.parent)===null||a===void 0)&&a.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;bt(this.layoutCorrected,this.layout.layoutBox),Gx(this.layoutCorrected,this.treeScale,this.path,u);const{target:y}=c;if(!y)return;this.projectionDelta||(this.projectionDelta=Ci(),this.projectionDeltaWithTransform=Ci());const w=this.treeScale.x,k=this.treeScale.y,m=this.projectionTransform;ki(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=k0(this.projectionDelta,this.treeScale),(this.projectionTransform!==m||this.treeScale.x!==w||this.treeScale.y!==k)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s,l,c;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),a&&((c=this.getStack())===null||c===void 0||c.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,s=!1){var l,c;const u=this.snapshot,f=(u==null?void 0:u.latestValues)||{},p={...this.latestValues},v=Ci();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const y=je(),w=(u==null?void 0:u.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),k=(((c=this.getStack())===null||c===void 0?void 0:c.members.length)||0)<=1,m=!!(w&&!k&&this.options.crossfade===!0&&!this.path.some(Q8));this.animationProgress=0,this.mixTargetDelta=h=>{var g;const x=h/1e3;P0(v.x,a.x,x),P0(v.y,a.y,x),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&(!((g=this.relativeParent)===null||g===void 0)&&g.layout)&&(bi(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),K8(this.relativeTarget,this.relativeTargetOrigin,y,x)),w&&(this.animationValues=p,A8(p,f,this.latestValues,x,m,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(0)}startAnimation(a){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(Zt.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ke.update(()=>{xi.hasAnimatedSinceResize=!0,this.currentAnimation=P8(0,C0,{...a,onUpdate:c=>{var u;this.mixTargetDelta(c),(u=a.onUpdate)===null||u===void 0||u.call(a,c)},onComplete:()=>{var c;(c=a.onComplete)===null||c===void 0||c.call(a),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var a;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(a=this.getStack())===null||a===void 0||a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var a;this.currentAnimation&&((a=this.mixTargetDelta)===null||a===void 0||a.call(this,C0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:c,latestValues:u}=a;if(!(!s||!l||!c)){if(this!==a&&this.layout&&c&&G2(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||je();const f=lt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const p=lt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+p}bt(s,l),yr(s,u),ki(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(a,s){var l,c,u;this.sharedNodes.has(a)||this.sharedNodes.set(a,new _8),this.sharedNodes.get(a).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(u=(c=s.options.initialPromotionConfig)===null||c===void 0?void 0:c.shouldPreserveFollowOpacity)===null||u===void 0?void 0:u.call(c,s)})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const c={};for(let u=0;u<b0.length;u++){const f="rotate"+b0[u];l[f]&&(c[f]=l[f],a.setStaticValue(f,0))}a==null||a.render();for(const u in c)a.setStaticValue(u,c[u]);a.scheduleRender()}getProjectionStyles(a={}){var s,l,c;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const f=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ko(a.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=Ko(a.pointerEvents)||""),this.hasProjected&&!In(this.latestValues)&&(k.transform=f?f({},""):"none",this.hasProjected=!1),k}const v=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=k0(this.projectionDeltaWithTransform,this.treeScale,v),f&&(u.transform=f(v,u.transform));const{x:y,y:w}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${w.origin*100}% 0`,p.animationValues?u.opacity=p===this?(c=(l=v.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:u.opacity=p===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const k in Pa){if(v[k]===void 0)continue;const{correct:m,applyTo:h}=Pa[k],g=m(v[k],p);if(h){const x=h.length;for(let b=0;b<x;b++)u[h[b]]=g}else u[k]=g}return this.options.layoutId&&(u.pointerEvents=p===this?Ko(a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(T0),this.root.sharedNodes.clear()}}}function N8(e){e.updateLayout()}function $8(e){var t,n,r;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:a}=e.layout,{animationType:s}=e.options,l=i.source!==e.layout.source;s==="size"?It(v=>{const y=l?i.measuredBox[v]:i.layoutBox[v],w=lt(y);y.min=o[v].min,y.max=y.min+w}):G2(s,i.layoutBox,o)&&It(v=>{const y=l?i.measuredBox[v]:i.layoutBox[v],w=lt(o[v]);y.max=y.min+w});const c=Ci();ki(c,o,i.layoutBox);const u=Ci();l?ki(u,e.applyTransform(a,!0),i.measuredBox):ki(u,o,i.layoutBox);const f=!U2(c);let p=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:w}=v;if(y&&w){const k=je();bi(k,i.layoutBox,y.layoutBox);const m=je();bi(m,o,w.layoutBox),W2(k,m)||(p=!0)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:u,layoutDelta:c,hasLayoutChanged:f,hasRelativeTargetChanged:p})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function F8(e){e.isProjectionDirty||(e.isProjectionDirty=!!(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=!!(e.parent&&e.parent.isTransformDirty))}function B8(e){e.clearSnapshot()}function T0(e){e.clearMeasurements()}function H8(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function E0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function U8(e){e.resolveTargetDelta()}function W8(e){e.calcProjection()}function Y8(e){e.resetRotation()}function G8(e){e.removeLeadSnapshot()}function P0(e,t,n){e.translate=we(t.translate,0,n),e.scale=we(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function j0(e,t,n,r){e.min=we(t.min,n.min,r),e.max=we(t.max,n.max,r)}function K8(e,t,n,r){j0(e.x,t.x,n.x,r),j0(e.y,t.y,n.y,r)}function Q8(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const X8={duration:.45,ease:[.4,0,.1,1]};function Z8(e,t){let n=e.root;for(let o=e.path.length-1;o>=0;o--)if(e.path[o].instance){n=e.path[o];break}const i=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);i&&e.mount(i,!0)}function A0(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function q8(e){A0(e.x),A0(e.y)}function G2(e,t,n){return e==="position"||e==="preserve-aspect"&&!iu(S0(t),S0(n),.2)}const J8=Y2({attachResizeListener:(e,t)=>Es(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cl={current:void 0},ew=Y2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cl.current){const e=new J8(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Cl.current=e}return Cl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),tw={...Rx,...q4,...n8,...E8},Q=Z3((e,t)=>A4(e,t,tw,S8,ew));function K2(){const e=C.useRef(!1);return $n(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function nw(){const e=K2(),[t,n]=C.useState(0),r=C.useCallback(()=>{e.current&&n(t+1)},[t]);return[C.useCallback(()=>Ke.postRender(r),[r]),t]}class rw extends C.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function iw({children:e,isPresent:t}){const n=C.useId(),r=C.useRef(null),i=C.useRef({width:0,height:0,top:0,left:0});return C.useInsertionEffect(()=>{const{width:o,height:a,top:s,left:l}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),C.createElement(rw,{isPresent:t,childRef:r,sizeRef:i},C.cloneElement(e,{ref:r}))}const Tl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=Xn(ow),l=C.useId(),c=C.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u=>{s.set(u,!0);for(const f of s.values())if(!f)return;r&&r()},register:u=>(s.set(u,!1),()=>s.delete(u))}),o?void 0:[n]);return C.useMemo(()=>{s.forEach((u,f)=>s.set(f,!1))},[n]),C.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=C.createElement(iw,{isPresent:n},e)),C.createElement(eo.Provider,{value:c},e)};function ow(){return new Map}const tr=e=>e.key||"";function aw(e,t){e.forEach(n=>{const r=tr(n);t.set(r,n)})}function sw(e){const t=[];return C.Children.forEach(e,n=>{C.isValidElement(n)&&t.push(n)}),t}const Yn=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{i&&(a="wait",H4(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=nw();const l=C.useContext(vd).forceRender;l&&(s=l);const c=K2(),u=sw(e);let f=u;const p=new Set,v=C.useRef(f),y=C.useRef(new Map).current,w=C.useRef(!0);if($n(()=>{w.current=!1,aw(u,y),v.current=f}),Pd(()=>{w.current=!0,y.clear(),p.clear()}),w.current)return C.createElement(C.Fragment,null,f.map(g=>C.createElement(Tl,{key:tr(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:a},g)));f=[...f];const k=v.current.map(tr),m=u.map(tr),h=k.length;for(let g=0;g<h;g++){const x=k[g];m.indexOf(x)===-1&&p.add(x)}return a==="wait"&&p.size&&(f=[]),p.forEach(g=>{if(m.indexOf(g)!==-1)return;const x=y.get(g);if(!x)return;const b=k.indexOf(g),E=()=>{y.delete(g),p.delete(g);const P=v.current.findIndex(A=>A.key===g);if(v.current.splice(P,1),!p.size){if(v.current=u,c.current===!1)return;s(),r&&r()}};f.splice(b,0,C.createElement(Tl,{key:tr(x),isPresent:!1,onExitComplete:E,custom:t,presenceAffectsLayout:o,mode:a},x))}),f=f.map(g=>{const x=g.key;return p.has(x)?g:C.createElement(Tl,{key:tr(g),isPresent:!0,presenceAffectsLayout:o,mode:a},g)}),C.createElement(C.Fragment,null,p.size?f:f.map(g=>C.cloneElement(g)))};function lw(e){const t=Xn(()=>Pt(e)),{isStatic:n}=C.useContext(ks);if(n){const[,r]=C.useState(e);C.useEffect(()=>t.on("change",r),[])}return t}const cw=e=>typeof e=="object"&&e.mix,uw=e=>cw(e)?e.mix:void 0;function dw(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=Nd(i,o,{mixer:uw(o[0]),...a});return t?s(r):s}function fw(e,t,n){$n(()=>{const r=e.map(i=>i.on("change",t));return()=>{r.forEach(i=>i()),n()}})}function pw(e,t){const n=lw(t()),r=()=>n.set(t());return r(),fw(e,()=>Ke.update(r,!1,!0),()=>Zt.update(r)),n}function ni(e,t,n,r){const i=typeof t=="function"?t:dw(t,n,r);return Array.isArray(e)?z0(e,i):z0([e],([o])=>i(o))}function z0(e,t){const n=Xn(()=>[]);return pw(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}const hw=(e,t,n)=>Math.min(Math.max(n,e),t),Yd=e=>typeof e=="number",mw=e=>Array.isArray(e)&&!Yd(e[0]),gw=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e};function vw(e,t){return mw(e)?e[gw(0,e.length,t)]:e}const Q2=(e,t,n)=>-n*e+n*t+e,X2=e=>e,Gd=(e,t,n)=>t-e===0?1:(n-e)/(t-e);function Z2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Gd(0,t,r);e.push(Q2(n,1,i))}}function q2(e){const t=[0];return Z2(t,e-1),t}function yw(e,t=q2(e.length),n=X2){const r=e.length,i=r-t.length;return i>0&&Z2(t,i),o=>{let a=0;for(;a<r-2&&!(o<t[a+1]);a++);let s=hw(0,1,Gd(t[a],t[a+1],o));return s=vw(n,a)(s),Q2(e[a],e[a+1],s)}}const J2=e=>typeof e=="function",eg=e=>typeof e=="string";function xw(e,t){return t?e*(1e3/t):0}function ww(e,t){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}function Sw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const Xo=new WeakMap;let rn;function kw(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function bw({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Xo.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return kw(e,n)}})})}function Cw(e){e.forEach(bw)}function Tw(){typeof ResizeObserver>"u"||(rn=new ResizeObserver(Cw))}function Ew(e,t){rn||Tw();const n=ww(e);return n.forEach(r=>{let i=Xo.get(r);i||(i=new Set,Xo.set(r,i)),i.add(t),rn==null||rn.observe(r)}),()=>{n.forEach(r=>{const i=Xo.get(r);i==null||i.delete(t),i!=null&&i.size||rn==null||rn.unobserve(r)})}}const Zo=new Set;let Ti;function Pw(){Ti=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Zo.forEach(n=>n(t))},window.addEventListener("resize",Ti)}function jw(e){return Zo.add(e),Ti||Pw(),()=>{Zo.delete(e),!Zo.size&&Ti&&(Ti=void 0)}}function Aw(e,t){return J2(e)?jw(e):Ew(e,t)}const zw=50,L0=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Lw=()=>({time:0,x:L0(),y:L0()}),Mw={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function M0(e,t,n,r){const i=n[t],{length:o,position:a}=Mw[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Gd(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>zw?0:xw(i.current-s,c)}function Iw(e,t,n){M0(e,"x",t,n),M0(e,"y",t,n),t.time=n}function Rw(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){const{top:i,left:o}=r.getBBox();for(n.x+=o,n.y+=i;r&&r.tagName!=="svg";)r=r.parentNode}return n}const _w={All:[[0,0],[1,1]]},uu={start:0,center:.5,end:1};function I0(e,t,n=0){let r=0;if(uu[e]!==void 0&&(e=uu[e]),eg(e)){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return Yd(e)&&(r=t*e),n+r}const Ow=[0,0];function Dw(e,t,n,r){let i=Array.isArray(e)?e:Ow,o=0,a=0;return Yd(e)?i=[e,e]:eg(e)&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,uu[e]?e:"0"]),o=I0(i[0],n,r),a=I0(i[1],t),o-a}const Vw={x:0,y:0};function Nw(e,t,n){let{offset:r=_w.All}=n;const{target:i=e,axis:o="y"}=n,a=o==="y"?"height":"width",s=i!==e?Rw(i,e):Vw,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:i.clientWidth,height:i.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const f=r.length;for(let p=0;p<f;p++){const v=Dw(r[p],c[a],l[a],s[o]);!u&&v!==t[o].interpolatorOffsets[p]&&(u=!0),t[o].offset[p]=v}u&&(t[o].interpolate=yw(q2(f),t[o].offset),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function $w(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Fw(e,t,n,r={}){const i=r.axis||"y";return{measure:()=>$w(e,r.target,n),update:o=>{Iw(e,n,o),(r.offset||r.target)&&Nw(e,n,r)},notify:J2(t)?()=>t(n):Bw(t,n[i])}}function Bw(e,t){return e.pause(),e.forEachNative((n,{easing:r})=>{var i,o;if(n.updateDuration)r||(n.easing=X2),n.updateDuration(1);else{const a={duration:1e3};r||(a.easing="linear"),(o=(i=n.effect)===null||i===void 0?void 0:i.updateTiming)===null||o===void 0||o.call(i,a)}}),()=>{e.currentTime=t.progress}}const ri=new WeakMap,R0=new WeakMap,El=new WeakMap,_0=e=>e===document.documentElement?window:e;function Hw(e,t={}){var{container:n=document.documentElement}=t,r=Sw(t,["container"]);let i=El.get(n);i||(i=new Set,El.set(n,i));const o=Lw(),a=Fw(n,e,o,r);if(i.add(a),!ri.has(n)){const c=()=>{const f=performance.now();for(const p of i)p.measure();for(const p of i)p.update(f);for(const p of i)p.notify()};ri.set(n,c);const u=_0(n);window.addEventListener("resize",c,{passive:!0}),n!==document.documentElement&&R0.set(n,Aw(n,c)),u.addEventListener("scroll",c,{passive:!0})}const s=ri.get(n),l=requestAnimationFrame(s);return()=>{var c;typeof e!="function"&&e.stop(),cancelAnimationFrame(l);const u=El.get(n);if(!u||(u.delete(a),u.size))return;const f=ri.get(n);ri.delete(n),f&&(_0(n).removeEventListener("scroll",f),(c=R0.get(n))===null||c===void 0||c(),window.removeEventListener("resize",f))}}const Uw=()=>({scrollX:Pt(0),scrollY:Pt(0),scrollXProgress:Pt(0),scrollYProgress:Pt(0)});function Ww({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Xn(Uw);return(n?$n:C.useEffect)(()=>Hw(({x:a,y:s})=>{i.scrollX.set(a.current),i.scrollXProgress.set(a.progress),i.scrollY.set(s.current),i.scrollYProgress.set(s.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),[]),i}function Yw(){!Wd.current&&V2();const[e]=C.useState(Na.current);return e}var U0;const Pl=typeof import.meta<"u"&&((U0="https://denismwanzia.netlify.app".replace)==null?void 0:U0.call("https://denismwanzia.netlify.app",/\/$/,""))||"https://denismwanzia.netlify.app",Gw=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"resume",label:"Resume"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],Kw=[{id:"all",label:"All"},{id:"frontend",label:"FrontEnd"},{id:"ai",label:"AI & Machine Learning"},{id:"fullstack",label:"Fullstack"}],Qw=[{id:"ai1",title:"Sentiment Analysis Of Customer Reviews",category:"ai",description:"This was part of my University Final Year Project where I trained AI models using both Naive Bayes and Support Vector Machine algorithms. The models achieved impressive accuracy rates of 89% and 94% respectively, demonstrating effective sentiment classification capabilities.",image:"/assets/aiSentiment.jpg",github:"https://github.com/Denis-Mwanzia/Mwananchi_Estore/tree/main/Sentiment_analysis_and_Recomender_system",live:null,date:"October 2023",technologies:["Python","Machine Learning","Naive Bayes","SVM","NLTK"]},{id:"fullstack2",title:"Mwananchi E-store",category:"fullstack",description:"A comprehensive e-commerce platform developed as part of my Final Year Project. This system was designed to integrate seamlessly with the sentiment analysis model, providing a complete solution for online retail with intelligent customer feedback processing.",image:"/assets/ecommerce.jpg",github:"https://github.com/Denis-Mwanzia/Mwananchi_Estore.git",live:null,date:"October 2023",technologies:["Django","Python","HTML","CSS","JavaScript","MySQL"]},{id:"fullstack1",title:"Tuko Maji",category:"fullstack",description:"Tuko Maji is a community-driven platform that empowers citizens to report water-related issues, enables verifiers to validate them, and equips technicians with tools to resolve them.",image:"/assets/tukomaji.png",github:"https://github.com/PLP-MERN-Stack-Development/week-8-capstone_-Denis-Mwanzia.git",live:"https://tukomaji-app.onrender.com/",date:"July 2023",technologies:["MongoDB","Express.js","React","Node.js","TypeScript","Tailwind CSS"]},{id:"frontend2",title:"Portfolio Website",category:"frontend",description:"A modern, responsive portfolio website showcasing creative work with smooth animations, interactive elements, and optimized performance. Built with vanilla HTML, CSS, and JavaScript, demonstrating mastery of fundamental web technologies.",image:"/assets/uiUx.jpg",github:"https://github.com/Denis-Mwanzia/PLP-Portfolio-Hackathon.git",live:"https://denismwanzia.netlify.app/",date:"January 2025",technologies:["HTML5","CSS3","JavaScript","Responsive Design"]},{id:"fullstack3",title:"Kitui Reforest AI",category:"fullstack",description:"A comprehensive environmental restoration platform for Kitui County featuring AI-powered species recommendations, GIS mapping with NDVI analysis, real-time weather integration, and community engagement tools. Built for the Land ReGen Hackathon 2025 with advanced climate intelligence and collaborative project tracking.",image:"/assets/kitui_AI.png",github:"https://github.com/Denis-Mwanzia/LandReGenHackathon2025.git",live:"https://kitui-reforest-ai.onrender.com/",date:"October 2025",technologies:["React","TypeScript","Tailwind CSS","Supabase","Leaflet Maps","AI Integration","OpenWeather API","PostgreSQL"]}],tg=(e,t)=>{let n;return function(){const r=arguments,i=this;n||(e.apply(i,r),n=!0,setTimeout(()=>n=!1,t))}},Xw=S.header`
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
`,Zw=S.div`
  display: flex;
  align-items: center;
  font-size: clamp(1.25rem, 2.5vw, 1.8rem);
  font-weight: 700;
  color: var(--primary-blue);
  cursor: default;
`,qw=S.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--secondary-blue);
  border-radius: 50%;
  margin-left: 4px;
  animation: pulse 2s infinite;
`,Jw=S.nav`
  @media (max-width: 768px) {
    display: none;
  }
`,e7=S.ul`
  display: flex;
  gap: var(--space-xl);
  list-style: none;
`,t7=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);

  @media (max-width: 768px) {
    display: none;
  }
`,ng=S.button`
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
`,n7=S.a`
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
`,r7=S.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,jl=S.span`
  display: block;
  width: 25px;
  height: 2px;
  background: var(--primary-blue);
  margin: 5px 0;
  transition: all 0.3s ease;
`,i7=S(Q.nav)`
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
`,o7=S(Q.div)`
  position: fixed;
  inset: 0;
  background: rgba(3, 8, 20, 0.45);
  backdrop-filter: blur(4px);
  z-index: 900;
`,a7=S.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  flex: 1;
  margin: 0;
  padding: 0;
`,s7=S.a`
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
`,l7=S.div`
  margin-top: auto;
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(58, 123, 213, 0.14);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
`,c7=S.div`
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
`,u7=S(ng)`
  width: 44px;
  height: 44px;
  border-width: 1.5px;
`,d7=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState("home"),[i,o]=C.useState(null),a=ce.useRef(null),s=ce.useRef(null),[l,c]=C.useState(!1),{theme:u,toggleTheme:f}=s3(),p=Gw,v=100;C.useEffect(()=>{const h=tg(()=>{c(window.scrollY>12);const g=p.map(b=>document.getElementById(b.id)).filter(Boolean),x=window.pageYOffset+200;for(const b of g){const E=b.offsetTop,P=b.clientHeight;if(x>=E&&x<E+P){r(b.id);break}}},v);return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[p]);const y=()=>{t(m=>!m)},w=()=>{t(!1)};C.useEffect(()=>{const m=()=>{window.innerWidth>768&&e&&t(!1)};return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[e]);const k=m=>{const h=document.getElementById(m);if(w(),h){const g=l?64:80,x=h.offsetTop-g-20;requestAnimationFrame(()=>{window.scrollTo({top:x<0?0:x,left:0,behavior:"smooth"})})}};return C.useEffect(()=>{if(e){o(document.activeElement);const m=a.current;if(!m)return;const h=window.scrollY||document.documentElement.scrollTop;window.scrollTo({top:h,left:0,behavior:"auto"}),document.documentElement.scrollLeft=0,document.body.scrollLeft=0;const g=document.body.style.overflow,x=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const E=Array.from(m.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')),P=E[0],A=E[E.length-1];P&&P.focus();const N=I=>{I.key==="Escape"&&(I.preventDefault(),w(),s.current&&s.current.focus()),I.key==="Tab"&&E.length>0&&(I.shiftKey&&document.activeElement===P?(I.preventDefault(),A.focus()):!I.shiftKey&&document.activeElement===A&&(I.preventDefault(),P.focus()))};return document.addEventListener("keydown",N),()=>{document.removeEventListener("keydown",N),document.body.style.overflow=g,document.documentElement.style.overflow=x,document.documentElement.scrollLeft=0,document.body.scrollLeft=0,i&&i.focus&&i.focus()}}},[e,i]),d.jsxs(Xw,{$scrolled:l,children:[d.jsxs(Zw,{children:[d.jsx("span",{children:"Denis"}),d.jsx(qw,{})]}),d.jsx(Jw,{children:d.jsx(e7,{children:p.map(m=>d.jsx("li",{children:d.jsx(n7,{href:`#${m.id}`,className:n===m.id?"active":"",onClick:h=>{h.preventDefault(),k(m.id)},children:m.label})},m.id))})}),d.jsx(t7,{children:d.jsx(ng,{onClick:f,"aria-label":`Activate ${u==="light"?"dark":"light"} theme`,title:`Switch to ${u==="light"?"dark":"light"} mode`,children:u==="light"?d.jsx(Ep,{size:16}):d.jsx(Pp,{size:16})})}),d.jsxs(r7,{onClick:y,"aria-label":"Toggle mobile navigation","aria-haspopup":"menu","aria-expanded":e,"aria-controls":"mobile-navigation",ref:s,children:[d.jsx(jl,{}),d.jsx(jl,{}),d.jsx(jl,{})]}),d.jsx(Yn,{children:e&&d.jsxs(d.Fragment,{children:[d.jsx(o7,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25,ease:"easeInOut"},onClick:w}),d.jsxs(i7,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.35,ease:[.22,.61,.36,1]},id:"mobile-navigation",role:"dialog","aria-modal":"true","aria-label":"Site navigation",ref:a,children:[d.jsx(a7,{children:p.map(m=>d.jsx("li",{children:d.jsx(s7,{href:`#${m.id}`,className:n===m.id?"active":"",onClick:h=>{h.preventDefault(),k(m.id)},children:m.label})},m.id))}),d.jsxs(l7,{children:[d.jsxs(c7,{children:[d.jsx("span",{children:"Theme"}),d.jsx("span",{children:u==="light"?"Light mode":"Dark mode"})]}),d.jsx(u7,{onClick:f,"aria-label":`Activate ${u==="light"?"dark":"light"} theme`,title:`Switch to ${u==="light"?"dark":"light"} mode`,children:u==="light"?d.jsx(Ep,{size:16}):d.jsx(Pp,{size:16})})]})]})]})})]})};function f7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"}}]})(e)}function p7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"}}]})(e)}function h7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"}}]})(e)}function m7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"}}]})(e)}function g7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"}}]})(e)}function v7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"}}]})(e)}function y7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"}}]})(e)}function x7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(e)}function w7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"}}]})(e)}function S7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z"}}]})(e)}function k7(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(e)}function rg(e){return H({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"}}]})(e)}const b7=S.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: clamp(var(--space-lg), 7vw, var(--space-3xl));
  position: relative;
  background: var(--hero-gradient);
  overflow: hidden;

  /* Dark theme override */
  [data-theme='dark'] & {
    background: var(--hero-gradient);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
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
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: shimmer 3s ease-in-out infinite;
    z-index: 1;
  }

  /* Subtle shimmer in dark mode */
  [data-theme='dark'] &::after {
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.04) 50%,
      transparent 70%
    );
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
`,C7=S.div`
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
`,T7=S.div`
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
`,E7=S.div`
  position: relative;
  width: clamp(180px, 26vw, 240px);
  height: clamp(180px, 26vw, 240px);
  flex-shrink: 0;

  @media (max-width: 540px) {
    width: clamp(150px, 45vw, 200px);
    height: clamp(150px, 45vw, 200px);
  }
`,P7=S.div`
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
`,j7=S.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  transition: transform 0.4s ease;
`,A7=S.div`
  flex: 1;
  max-width: 620px;
  padding: 0 clamp(0.5rem, 3.5vw, 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.4rem, 4vw, 2rem);
`,z7=S.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: var(--text-secondary);
`,L7=S.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 800;
  margin: var(--space-sm) 0;
  line-height: 1.1;
`,O0=S.span`
  display: block;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,M7=S.p`
  margin: 0;
  font-size: clamp(1.05rem, 2.6vw, 1.45rem);
  font-weight: 600;
  color: var(--text-secondary);
  min-height: auto;

  .accent {
    background: linear-gradient(
      120deg,
      var(--accent-primary),
      var(--accent-secondary)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
`,I7=S.p`
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
`,R7=S.div`
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
`,ig=S.a`
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

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
`,_7=S(ig)`
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
`,O7=S(ig)`
  background: var(--accent-gradient);
  color: #ffffff;
  border: 2px solid transparent;

  &:hover::after {
    background: rgba(255, 255, 255, 0.2);
    opacity: 1;
  }
`,D7=S.div`
  display: flex;
  justify-content: center;
  gap: clamp(var(--space-md), 6vw, var(--space-lg));
  margin-top: var(--space-lg);
`,D0=S.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--surface-card);
  box-shadow: 0 2px 12px var(--shadow-light);
  color: var(--accent-primary);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

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
`;const V7=S.div`
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
`,N7=S(Q.div)`
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
`,$7=Fr`
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
`,F7=S.span`
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at center,
    rgba(58, 123, 213, 0.22),
    rgba(255, 255, 255, 0)
  );
  animation: ${$7} 6.5s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.55;
`,B7=S(Q.pre)`
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
`,H7=Fr`
  0% {
    transform: rotate(0deg) translateY(-4px);
  }
  50% {
    transform: rotate(180deg) translateY(6px);
  }
  100% {
    transform: rotate(360deg) translateY(-4px);
  }
`,U7=S(Q.div)`
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
  animation: ${H7} ${e=>e.$orbit??14}s linear infinite;
  transform-origin: center;

  [data-theme='dark'] & {
    background: rgba(9, 16, 32, 0.85);
    border-color: rgba(108, 149, 255, 0.25);
    box-shadow: 0 18px 36px rgba(4, 10, 28, 0.6);
  }
`,W7=()=>{const[e,t]=C.useState({x:"50%",y:"50%"}),n=[{value:"12+",label:"Production launches",meta:"From fintech dashboards to civic platforms"},{value:"40%",label:"Performance gains",meta:"Average Lighthouse uplift after refactors"},{value:"8",label:"Hackathons & wins",meta:"Collaboration, rapid ideation & delivery"}],r=[{id:"code",icon:d.jsx(x3,{size:20}),top:"16%",left:"12%",orbit:18,delay:0},{id:"ts",icon:d.jsx(rg,{size:22}),top:"68%",left:"8%",orbit:22,delay:.4},{id:"next",icon:d.jsx(w7,{size:20}),top:"22%",right:"14%",orbit:16,delay:.2},{id:"rocket",icon:d.jsx(j3,{size:18}),top:"72%",right:"12%",orbit:20,delay:.6}],i=[{top:"22%",left:"28%",duration:9},{top:"66%",left:"32%",duration:12},{top:"18%",left:"72%",duration:10},{top:"74%",left:"58%",duration:7},{top:"42%",left:"86%",duration:9}];return d.jsxs(b7,{id:"home",onMouseMove:o=>{const a=o.currentTarget.getBoundingClientRect(),s=(o.clientX-a.left)/a.width*100,l=(o.clientY-a.top)/a.height*100;t({x:`${s}%`,y:`${l}%`})},style:{"--mx":e.x,"--my":e.y},children:[d.jsx("div",{className:"spotlight","aria-hidden":"true"}),i.map((o,a)=>d.jsx(C7,{...o},`particle-${a}`)),r.map(({id:o,icon:a,top:s,left:l,right:c,orbit:u,delay:f})=>d.jsx(U7,{style:{top:s,left:l,right:c},$orbit:u,initial:{opacity:0,scale:.8,y:10},animate:{opacity:1,scale:1,y:[0,-6,0]},transition:{duration:5,repeat:1/0,repeatType:"mirror",delay:f},"aria-hidden":"true",children:a},o)),d.jsxs(T7,{children:[d.jsx(E7,{children:d.jsx(P7,{children:d.jsx(j7,{src:"/assets/passport.jpg",alt:"Denis Mwanzia portrait",width:"260",height:"260",decoding:"async",fetchpriority:"high"})})}),d.jsx(A7,{children:d.jsxs(Q.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[d.jsx(z7,{children:"Hello, I'm"}),d.jsxs(L7,{children:[d.jsx(O0,{children:"Denis"}),d.jsx(O0,{children:"Mwanzia"})]}),d.jsxs(M7,{children:["Full-stack developer turning ideas into"," ",d.jsx("span",{className:"accent",children:"fast, inclusive, production-grade"})," ","products."]}),d.jsxs(I7,{children:["Focused on ",d.jsx("strong",{children:"developer velocity"}),","," ",d.jsx("strong",{children:"experience design"}),", and resilient releases that make a measurable dent."]}),d.jsxs(R7,{children:[d.jsxs(_7,{href:"/assets/resume.pdf",download:!0,"aria-label":"Download CV (PDF)",children:[d.jsx(zm,{})," Download CV"]}),d.jsx(O7,{href:"#contact","aria-label":"Go to contact section",children:"🚀 Let's Connect"})]}),d.jsxs(D7,{children:[d.jsx(D0,{href:"https://www.linkedin.com/in/denis-mwanzia",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:d.jsx(Am,{size:20})}),d.jsx(D0,{href:"https://github.com/Denis-Mwanzia",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:d.jsx(Ea,{size:20})})]}),d.jsx(V7,{children:n.map(o=>d.jsxs(N7,{whileHover:{y:-6,rotateX:4},transition:{type:"spring",stiffness:180,damping:16},children:[d.jsx(F7,{}),d.jsx("h4",{children:o.value}),d.jsx("p",{children:o.label}),d.jsx("span",{children:o.meta})]},o.label))}),d.jsx(B7,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0,amount:.3},"aria-label":"Preview of Denis' workflow pseudo code",children:d.jsx("code",{children:`const denis = engineer({
  stack: ['React', 'Node', 'TypeScript', 'GraphQL'],
  ethos: ['ship fast', 'measure impact', 'delight users'],
  currently: 'Building dependable web apps at lightning pace',
});

denis.launch({ day: 'Today', focus: 'Developer Experience' });`})})]})})]})]})},Y7=S.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`,G7=S(Q.div)`
  position: absolute;
  border-radius: 9999px;
  filter: blur(${e=>e.$blur||0}px);
  opacity: ${e=>e.$opacity||.2};
  background: radial-gradient(
    circle at 30% 30%,
    ${e=>e.$c1},
    ${e=>e.$c2}
  );

  @media (max-width: 768px) {
    display: none;
  }
`,K7=5,Kd=({shapes:e=[],intensity:t=30})=>{const{scrollYProgress:n}=Ww(),r=Yw(),i=ni(n,[0,1],[-1*t,t]),o=ni(n,[0,1],[.6*t,-.6*t]),a=ni(n,[0,1],[.35*t,-.35*t]),s=ni(n,[0,1],[-.6*t,.6*t]),l=ni(n,[0,1],[.35*t,-.35*t]),c=[i,o,a,s,l];return d.jsx(Y7,{"aria-hidden":"true",children:e.slice(0,K7).map((u,f)=>{const p=r?0:c[f];return d.jsx(G7,{style:{y:p,top:u.top,left:u.left,width:u.size,height:u.size},$c1:u.color1||"rgba(59,130,246,0.35)",$c2:u.color2||"rgba(16,185,129,0.15)",$blur:u.blur||24,$opacity:u.opacity||.25},f)})})};var du=new Map,zo=new WeakMap,V0=0,Q7=void 0;function X7(e){return e?(zo.has(e)||(V0+=1,zo.set(e,V0.toString())),zo.get(e)):"0"}function Z7(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?X7(e.root):e[t]}`).toString()}function q7(e){const t=Z7(e);let n=du.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(a=>{a.forEach(s=>{var l;const c=s.isIntersecting&&i.some(u=>s.intersectionRatio>=u);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(l=r.get(s.target))==null||l.forEach(u=>{u(c,s)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},du.set(t,n)}return n}function J7(e,t,n={},r=Q7){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:o,elements:a}=q7(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),du.delete(i))}}function zs({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:c}={}){var u;const[f,p]=C.useState(null),v=C.useRef(c),[y,w]=C.useState({inView:!!s,entry:void 0});v.current=c,C.useEffect(()=>{if(a||!f)return;let g;return g=J7(f,(x,b)=>{w({inView:x,entry:b}),v.current&&v.current(x,b),b.isIntersecting&&o&&g&&(g(),g=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,f,i,r,o,a,n,l,t]);const k=(u=y.entry)==null?void 0:u.target,m=C.useRef(void 0);!f&&k&&!o&&!a&&m.current!==k&&(m.current=k,w({inView:!!s,entry:void 0}));const h=[p,y.inView,y.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const e9=S.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
  background: var(--section-surface);
`,t9=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
  text-align: center;
  color: var(--text-secondary);
`,n9=S.h3`
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
`,r9=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
`,Al=S(Q.div)`
  background: var(--surface-card);
  padding: 1.8rem;
  border-radius: var(--radius-xl);
  box-shadow: 0 12px 28px var(--shadow-light);
  border: 1px solid var(--surface-outline);
  text-align: left;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    background: var(--surface-card-hover);
    box-shadow: 0 16px 36px var(--shadow-medium);
  }
`,zl=S.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: var(--primary-blue);
`,Ll=S.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-gray);
`,rt=S.span`
  color: var(--primary-blue);
  font-weight: 600;
`,i9=S.div`
  margin-top: clamp(2.5rem, 6vw, 4.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 4vw, 2.75rem);
`,o9=S.div`
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
    background: linear-gradient(
      90deg,
      var(--section-surface),
      rgba(255, 255, 255, 0)
    );
    [data-theme='dark'] & {
      background: linear-gradient(
        90deg,
        rgba(9, 16, 32, 1),
        rgba(9, 16, 32, 0)
      );
    }
  }

  &::after {
    right: 0;
    background: linear-gradient(
      -90deg,
      var(--section-surface),
      rgba(255, 255, 255, 0)
    );
    [data-theme='dark'] & {
      background: linear-gradient(
        -90deg,
        rgba(9, 16, 32, 1),
        rgba(9, 16, 32, 0)
      );
    }
  }
`,a9=Fr`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`,s9=Fr`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`,l9=S.div`
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 2.75rem);
  min-width: 200%;
  animation: ${e=>e.$reverse?s9:a9}
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
`,c9=S(Q.div)`
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
`,u9=S.span`
  font-size: clamp(1.75rem, 5vw, 2.4rem);
  filter: drop-shadow(0 8px 16px rgba(58, 123, 213, 0.18));
`,d9=S.span``,f9=()=>{const[e,t]=zs({threshold:.1,triggerOnce:!0}),n={hidden:{opacity:0,y:30},visible:i=>({opacity:1,y:0,transition:{duration:.6,delay:i*.2}})},r=[{duration:32,reverse:!1,icons:[{Icon:y7,label:"JavaScript"},{Icon:rg,label:"TypeScript"},{Icon:g3,label:"Python"},{Icon:p3,label:"HTML5"},{Icon:d3,label:"CSS3"},{Icon:v7,label:"GraphQL"},{Icon:f7,label:"C"},{Icon:p7,label:"C++"},{Icon:g7,label:"Go"},{Icon:S7,label:"Ruby"},{Icon:m3,label:"PHP"}]},{duration:36,reverse:!0,icons:[{Icon:v3,label:"React"},{Icon:h3,label:"Node.js"},{Icon:m7,label:"Express"},{Icon:x7,label:"MongoDB"},{Icon:k7,label:"Tailwind"},{Icon:h7,label:"Django"},{Icon:f3,label:"Git"}]}];return d.jsxs(e9,{id:"about",children:[d.jsx(Kd,{shapes:[{size:"240px",top:"5%",left:"10%",color1:"rgba(0,119,255,0.25)",color2:"rgba(0,198,255,0.12)",blur:40,opacity:.25},{size:"320px",top:"60%",left:"75%",color1:"rgba(16,185,129,0.22)",color2:"rgba(0,119,255,0.12)",blur:50,opacity:.22},{size:"180px",top:"75%",left:"15%",color1:"rgba(139,92,246,0.25)",color2:"rgba(59,130,246,0.12)",blur:38,opacity:.22}],intensity:26}),d.jsxs(t9,{children:[d.jsx(n9,{children:"About Me"}),d.jsxs(r9,{ref:e,children:[d.jsxs(Al,{variants:n,initial:"hidden",animate:t?"visible":"hidden",custom:0,children:[d.jsx(zl,{children:"👨‍💻 Who I Am"}),d.jsxs(Ll,{children:["I’m a"," ",d.jsx(rt,{children:"Full-Stack Web Developer & IT Specialist"})," ","from Kenya with a",d.jsx(rt,{children:" BSc in Information Technology"})," from Kabarak University. I love transforming complex ideas into"," ",d.jsx(rt,{children:"fast, secure, and scalable applications"}),"."]})]}),d.jsxs(Al,{variants:n,initial:"hidden",animate:t?"visible":"hidden",custom:1,children:[d.jsx(zl,{children:"⚡ What I Do"}),d.jsxs(Ll,{children:["Started with ",d.jsx(rt,{children:"Django"})," & the web fundamentals (",d.jsx(rt,{children:"HTML, CSS, JS"}),"), now I specialize in the",d.jsx(rt,{children:" MERN stack"})," through a"," ",d.jsx(rt,{children:"software engineering scholarship"})," at PLP Academy, focusing on ",d.jsx(rt,{children:"clean architecture"}),","," ",d.jsx(rt,{children:"performance"})," &"," ",d.jsx(rt,{children:"accessibility"}),"."]})]}),d.jsxs(Al,{variants:n,initial:"hidden",animate:t?"visible":"hidden",custom:2,children:[d.jsx(zl,{children:"🎯 Why I Do It"}),d.jsxs(Ll,{children:["My goal is to create"," ",d.jsx(rt,{children:"impactful digital solutions"})," that solve real-world problems. I thrive in"," ",d.jsx(rt,{children:"collaborative environments"}),", value"," ",d.jsx(rt,{children:"continuous learning"}),", and enjoy exploring Nairobi’s tech scene when I’m not coding."]})]})]}),d.jsx(i9,{children:r.map(({icons:i,reverse:o,duration:a},s)=>{const l=[...i,...i];return d.jsx(o9,{"aria-hidden":"true",children:d.jsx(l9,{$reverse:o,$duration:a,children:l.map(({Icon:c,label:u},f)=>d.jsxs(c9,{whileHover:{scale:1.15,rotate:o?-1.5:1.5},whileTap:{scale:.95},transition:{type:"spring",stiffness:260,damping:18},children:[d.jsx(u9,{"aria-hidden":"true",children:d.jsx(c,{})}),d.jsx(d9,{children:u})]},`${u}-${f}`))})},s)})})]})]})},p9=S.section`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 5rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
`,h9=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,m9=S.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`,g9=S.h3`
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
`,v9=S.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--medium-gray);
  position: relative;
  padding-bottom: var(--space-md);
`,y9=S.div`
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
`,x9=S.button`
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
`,w9=S.div`
  position: relative;
  width: 100%;
  justify-content: center;
  margin-bottom: var(--space-xl);
  padding-top: 1rem;
`,Ml=S.div`
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
`,Il=S.div`
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
`,Rl=S.div`
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
`,_l=S(Q.div)`
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
`,Ol=S.div`
  color: var(--accent-primary);
  font-size: clamp(1.5rem, 4vw, 2.15rem);
  flex-shrink: 0;
`,Dl=S.div`
  flex: 1;
`,Vl=S.h5`
  color: var(--text-primary);
  font-size: clamp(1rem, 2.5vw, 1.13rem);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  line-height: 1.3;
`,Nl=S.p`
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 2vw, 1.07rem);
  margin-bottom: var(--space-md);
  line-height: 1.4;
`,$l=S.span`
  background: var(--chip-bg);
  color: var(--accent-primary);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-weight: 500;
`,S9=S.div`
  margin-top: var(--space-sm);
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: 'Courier New', monospace;
  background: var(--surface-glass);
  padding: var(--space-xs);
  border-radius: var(--radius-sm);
  display: inline-block;
`,k9=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
`,b9=S.span`
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
`,C9=S(Q.div)`
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
`,T9=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
`,E9=S(Q.div)`
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
`,P9=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--surface-card-hover);
  border-bottom: 1px solid var(--surface-outline);
`,j9=S.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
`,A9=S.div`
  display: flex;
  gap: 0.5rem;
`,N0=S.button`
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
`,z9=S.div`
  width: 100%;
  height: 70vh;
  min-height: 500px;
  position: relative;
`,L9=S.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
`,M9=S.button`
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
`,I9=S.div`
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
`,R9=S.div`
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
`,_9=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
`,O9=S.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #fff;
`,D9=S.span`
  color: var(--white);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  text-align: center;
`,V9=S.div`
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
`,N9=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(12px);
  transition:
    all 0.3s ease,
    border 0.3s ease;
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
`,$9=S.div`
  color: #ffffff;
  font-size: 1rem;
  flex-shrink: 0;

  html[data-theme='light'] & {
    color: var(--accent-primary);
  }
`,F9=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  width: 100%;
`,B9=S.h5`
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  font-weight: 600;
  color: inherit;
  white-space: normal;
  overflow-wrap: anywhere;
`,H9=S.span`
  font-size: clamp(0.8rem, 2.5vw, 0.95rem);
  color: rgba(255, 255, 255, 0.8);

  html[data-theme='light'] & {
    color: var(--text-secondary);
  }
`,U9=()=>{var h,g;const[e,t]=C.useState(0),[n,r]=C.useState(null),[i]=zs({threshold:.1,triggerOnce:!0}),o=[{id:"education",label:"Education",icon:fl},{id:"certifications",label:"Certifications",icon:tn},{id:"skills",label:"Personal Skills",icon:L3},{id:"experience",label:"Resume",icon:dl}],a=[{title:"Bachelor of Science in Information Technology",subtitle:"Kabarak University",date:"2017–2023",icon:fl},{title:"Software Development — Full-Stack (MERN)",subtitle:"Power Learn Project Academy",date:"2025–Present",icon:fl}],s=[{title:"Network Technician",subtitle:"Tabasamu Fiber Networks Limited",date:"2023-2023",icon:dl},{title:"Freelancer Web Developer & Networking Consultancy",subtitle:"Self-Employed",date:"2023-Present",icon:dl}],l=[{title:"SQL Training Certificate",subtitle:"Learnomate Technologies Pvt Ltd",date:"2024",icon:tn,credentialId:"SQL-2024-001",issuer:"Learnomate Technologies",skills:["SQL","Database Management","Data Analysis"],pdfUrl:"/assets/certificates/sql-certificate.pdf",description:"Comprehensive SQL training covering database design, query optimization, and data analysis techniques."},{title:"Cybersecurity and Emerging Technologies Awareness Training",subtitle:"ICT Authority Smart Academy",date:"2024",icon:tn,credentialId:"CYBER-2024-002",issuer:"ICT Authority Kenya",skills:["Cybersecurity","Network Security","Emerging Technologies"],pdfUrl:"/assets/certificates/cybersecurity-certificate.pdf",description:"Advanced training in cybersecurity fundamentals, threat assessment, and emerging technology security protocols."},{title:"AI Literacy Certified Course",subtitle:"Otermans Institute",date:"2025",icon:tn,credentialId:"OIAI25-ER35KX",issuer:"Otermans Institute",skills:["AI Literacy","Artificial Intelligence","Machine Learning","AI Ethics"],pdfUrl:"/assets/certificates/OIAI25-ER35KX.pdf",description:"Comprehensive AI literacy program covering artificial intelligence fundamentals, machine learning concepts, and AI ethics in modern technology."},{title:"Full-Stack Development — MERN Track",subtitle:"Power Learn Project (PLP)",date:"2025",icon:tn,issuer:"Power Learn Project Academy",skills:["React","Node.js","MongoDB","Express","REST APIs","DevOps Fundamentals"],pdfUrl:"/assets/certificates/denis%20Full-Stack%20Development%20MERN%20Stack%20certificate.pdf",description:"Intensive full-stack engineering training focused on building production-grade MERN applications with modern tooling and best practices."},{title:"ICT Graduate Trainee Certification",subtitle:"ICT Authority Smart Academy",date:"2024",icon:tn,issuer:"ICT Authority Kenya",skills:["ICT Infrastructure","Networking","Digital Transformation","Professional Development"],pdfUrl:"/assets/certificates/ICT%20Graduate.pdf",description:"Professional certification from the ICT Authority graduate program covering enterprise ICT infrastructure, support operations, and digital transformation initiatives."},{title:"Generative AI",subtitle:"Unstacked Labs",date:"2025",icon:tn,issuer:"Unstacked Labs",skills:["Google Generative AI(Genkit, ADK and Vertex AI)","Building with AI","Practical AI Applications"],pdfUrl:"/assets/certificates/unstacked-labs-bwai-certificate.pdf",description:"Certificate of completion for the Unstacked Labs BwAI (Building with AI) program, covering Google ADK, Genkit and Vertex AI."},{title:"Cloud Infrastructure and Services",subtitle:"Cloud Infrastructure Training",date:"2025",icon:tn,issuer:"Cloud Infrastructure Training",skills:["Cloud Computing","Infrastructure","Cloud Services"],pdfUrl:"/assets/certificates/cloud-infrastructure-and-services.pdf",description:"Training in cloud infrastructure and services(AWS), covering deployment, management, and best practices for cloud-based solutions."}],c=[{title:"Front-End Developer",icon:Lm,skills:[{name:"HTML",level:"Advanced"},{name:"CSS",level:"Advanced"},{name:"Tailwind CSS",level:"Intermediate"},{name:"JavaScript",level:"Intermediate"},{name:"React",level:"Basic"},{name:"Bootstrap",level:"Intermediate"}]},{title:"Back-End Developer",icon:Mm,skills:[{name:"Django",level:"Intermediate"},{name:"Node.js",level:"Basic"},{name:"Express.js",level:"Basic"},{name:"MySQL",level:"Intermediate"},{name:"MongoDB",level:"Basic"},{name:"Restful APIs",level:"Intermediate"}]},{title:"Networking & IT Specialist",icon:C3,skills:[{name:"Network Installation & Troubleshooting"},{name:"MikroTik Configuration (Routing, Firewall, VPN)"},{name:"FTTH Installation & Splicing"},{name:"Linux & Windows Server Administration"}]},{title:"Tools & Technologies",icon:z3,skills:[{name:"Git & GitHub"},{name:"Docker & Virtualization"},{name:"Bash & PowerShell Scripting"},{name:"Cloud Computing (AWS)"}]}],u=()=>d.jsxs(Ml,{children:[d.jsx(Il,{}),a.map((x,b)=>d.jsx(Rl,{children:d.jsxs(_l,{className:b%2===0?"left":"right",initial:{opacity:0,y:20,scale:.98},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:"easeOut"},children:[d.jsx(Ol,{children:d.jsx(x.icon,{})}),d.jsxs(Dl,{children:[d.jsx(Vl,{children:x.title}),d.jsx(Nl,{children:x.subtitle}),d.jsx($l,{children:x.date})]})]})},b))]}),f=()=>d.jsxs(Ml,{children:[d.jsx(Il,{}),s.map((x,b)=>d.jsx(Rl,{children:d.jsxs(_l,{className:b%2===0?"left":"right",initial:{opacity:0,y:20,scale:.98},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:"easeOut"},children:[d.jsx(Ol,{children:d.jsx(x.icon,{})}),d.jsxs(Dl,{children:[d.jsx(Vl,{children:x.title}),d.jsx(Nl,{children:x.subtitle}),d.jsx($l,{children:x.date})]})]})},b))]}),p=x=>{r(x)},v=()=>{r(null)},y=x=>{const b=document.createElement("a");b.href=x.pdfUrl,b.download=`${x.title}.pdf`,b.target="_blank",document.body.appendChild(b),b.click(),document.body.removeChild(b)},w=()=>d.jsxs(Ml,{children:[d.jsx(Il,{}),l.map((x,b)=>d.jsx(Rl,{children:d.jsxs(_l,{className:b%2===0?"left":"right",initial:{opacity:0,y:20,scale:.98},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.3},transition:{duration:.5,ease:"easeOut"},children:[d.jsx(Ol,{children:d.jsx(x.icon,{})}),d.jsxs(Dl,{children:[d.jsx(Vl,{children:x.title}),d.jsx(Nl,{children:x.subtitle}),d.jsx($l,{children:x.date}),x.credentialId&&d.jsxs(S9,{children:["Credential ID: ",x.credentialId]}),x.skills&&d.jsx(k9,{children:x.skills.map((E,P)=>d.jsx(b9,{children:E},P))}),x.pdfUrl&&d.jsxs(M9,{onClick:()=>p(x),children:[d.jsx(k3,{}),"View Certificate"]})]})]})},b))]}),k=()=>d.jsx(I9,{children:c.map((x,b)=>d.jsxs(R9,{children:[d.jsxs(_9,{children:[d.jsx(O9,{children:d.jsx(x.icon,{})}),d.jsx(D9,{children:x.title})]}),d.jsx(V9,{children:x.skills.map((E,P)=>d.jsxs(N9,{children:[d.jsx($9,{children:"✓"}),d.jsxs(F9,{children:[d.jsx(B9,{children:E.name}),E.level&&d.jsx(H9,{children:E.level})]})]},P))})]},b))}),m=[u(),w(),k(),f()];return d.jsx(p9,{id:"resume",children:d.jsxs(h9,{children:[d.jsxs(m9,{children:[d.jsx(g9,{children:"My Resume"}),d.jsx(v9,{children:"Combination of Education, Experience & Skills"})]}),d.jsx(y9,{role:"tablist","aria-label":"Resume sections",children:o.map((x,b)=>d.jsxs(x9,{role:"tab",id:`resume-tab-${x.id}`,"aria-selected":e===b,"aria-controls":`resume-tabpanel-${x.id}`,className:e===b?"active":"",onClick:()=>t(b),children:[d.jsx(x.icon,{}),x.label]},x.id))}),d.jsx(w9,{ref:i,role:"tabpanel",id:`resume-tabpanel-${(h=o[e])==null?void 0:h.id}`,"aria-labelledby":`resume-tab-${(g=o[e])==null?void 0:g.id}`,children:d.jsx(Yn,{mode:"wait",children:d.jsx(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:m[e]},e)})}),d.jsx(Yn,{children:n&&d.jsxs(C9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsx(T9,{onClick:v}),d.jsxs(E9,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{duration:.3},children:[d.jsxs(P9,{children:[d.jsx(j9,{children:n.title}),d.jsxs(A9,{children:[d.jsxs(N0,{className:"download",onClick:()=>y(n),children:[d.jsx(zm,{}),"Download"]}),d.jsxs(N0,{className:"close",onClick:v,children:[d.jsx(Im,{}),"Close"]})]})]}),d.jsx(z9,{children:d.jsx(L9,{src:`${n.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`,title:n.title,onError:()=>{window.open(n.pdfUrl,"_blank")}})})]})]})})]})})},W9=S.div`
  position: relative;
  overflow: hidden;
  background: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${e=>e.minHeight||"200px"};
`,Y9=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${e=>e.loaded?1:0};
`,G9=S.div`
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
`,K9=({src:e,alt:t,minHeight:n,sizes:r,srcSet:i,width:o,height:a,decoding:s="async",...l})=>{const[c,u]=C.useState(!1),[f,p]=C.useState(!1),[v,y]=C.useState(null),w=C.useCallback(m=>{y(m)},[]);C.useEffect(()=>{if(!v)return;const m=new IntersectionObserver(([h])=>{h.isIntersecting&&(p(!0),m.disconnect())},{threshold:.1});return m.observe(v),()=>m.disconnect()},[v]);const k=()=>{u(!0)};return d.jsxs(W9,{ref:w,minHeight:n,...l,children:[!c&&d.jsx(G9,{}),f&&d.jsx(Y9,{src:e,alt:t,loaded:c,onLoad:k,loading:"lazy",decoding:s,sizes:r,srcSet:i,width:o,height:a})]})},Q9=S.section`
  position: relative;
  padding: clamp(3rem, 8vw, 4rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
`,X9=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,Z9=S.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`,q9=S.h3`
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
`,J9=S.p`
  font-size: clamp(1rem, 2.5vw, 1.18rem);
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  font-weight: 500;
`,eS=S.div`
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
`,tS=S(Q.button)`
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
`,nS=S.div`
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
`,fu=S(Q.article)`
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
`,rS=S.div`
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

  ${fu}:hover &::after,
  ${fu}:focus-visible &::after {
    opacity: 0.8;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`,iS=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: clamp(0.85rem, 2vw, 1.15rem);
  flex: 1;
`,oS=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-sm);
`,aS=S.span`
  font-size: 0.7rem;
  color: var(--text-secondary);
  background: var(--surface-glass);
  border: 1px solid var(--surface-outline);
  border-radius: var(--radius-full);
  padding: 0.25rem 0.65rem;
  letter-spacing: 0.04em;
`,sS=S.span`
  color: var(--accent-primary);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,lS=S.h4`
  color: var(--text-primary);
  font-size: clamp(0.95rem, 2.3vw, 1.15rem);
  margin-bottom: 0.4rem;
  font-weight: 600;
  line-height: 1.35;
`,cS=S.p`
  font-size: clamp(0.8rem, 1.9vw, 0.9rem);
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,uS=S.div`
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
`,dS=S(Q.button)`
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
`,fS=S.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);

  @media (max-width: 600px) {
    gap: var(--space-sm);
  }
`,$0=S(Q.a)`
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
`,pS=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.15rem;
`,hS=S.span`
  display: inline-block;
  padding: 0.15rem 0.45rem;
  font-size: 0.68rem;
  border: 1px solid var(--badge-border);
  color: var(--text-secondary);
  border-radius: 999px;
  background: var(--badge-bg);
`,mS=S(Q.div)`
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
`,gS=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
`,vS=S(Q.div)`
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
`,yS=S.div`
  display: flex;
  flex-direction: column;
`,xS=S.div`
  width: 100%;
  height: clamp(200px, 40vw, 350px);
  overflow: hidden;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
`,wS=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`,SS=S.div`
  padding: clamp(1.5rem, 4vw, 2rem);
  color: var(--text-secondary);
`,kS=S.h3`
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  margin-bottom: var(--space-md);
  color: var(--text-gray);
  font-weight: 700;
  line-height: 1.3;
`,bS=S.p`
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.7;
  color: var(--medium-gray);
  margin-bottom: var(--space-lg);
`,CS=S.div`
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: var(--accent-primary);
  flex-wrap: wrap;
`,TS=S.div`
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,F0=S.a`
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
`,ES=S.button`
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
`,PS=()=>{const[e,t]=C.useState("all"),[n,r]=C.useState(null),[i]=zs({threshold:.1,triggerOnce:!0}),o=C.useRef(null),a=C.useRef(null),s=C.useRef(null),l=C.useMemo(()=>Kw,[]),c=C.useMemo(()=>Qw,[]),u=C.useMemo(()=>c.filter(y=>e==="all"||y.category===e),[e,c]),f=C.useCallback(y=>{r(y)},[]),p=C.useCallback(()=>{r(null)},[]);C.useEffect(()=>{var y;if(n){s.current=document.activeElement;const w=o.current,k=a.current,h=w?Array.from(w.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')):[],g=h[0],x=h[h.length-1];(y=k||g)==null||y.focus();const b=P=>{P.key==="Escape"&&(P.preventDefault(),p(),s.current&&s.current.focus&&s.current.focus()),P.key==="Tab"&&h.length>0&&(P.shiftKey&&document.activeElement===g?(P.preventDefault(),x.focus()):!P.shiftKey&&document.activeElement===x&&(P.preventDefault(),g.focus()))};document.addEventListener("keydown",b);const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{var P;document.removeEventListener("keydown",b),document.body.style.overflow=E,(P=s.current)!=null&&P.focus&&s.current.focus()}}},[n,p]);const v={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return d.jsx(Q9,{id:"projects",children:d.jsxs(X9,{children:[d.jsx(Kd,{shapes:[{size:"260px",top:"8%",left:"80%",color1:"rgba(0,119,255,0.22)",color2:"rgba(0,214,255,0.1)",blur:48,opacity:.22},{size:"180px",top:"40%",left:"5%",color1:"rgba(16,185,129,0.2)",color2:"rgba(0,119,255,0.1)",blur:36,opacity:.2}],intensity:22}),d.jsxs(Z9,{children:[d.jsx(q9,{children:"Projects"}),d.jsx(J9,{children:"My creative works"})]}),d.jsx(eS,{children:l.map(y=>d.jsx(tS,{className:e===y.id?"active":"",onClick:()=>t(y.id),whileTap:{scale:.97},"aria-pressed":e===y.id,type:"button",children:y.label},y.id))}),d.jsx(nS,{ref:i,children:d.jsx(Yn,{mode:"wait",children:d.jsx(Q.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.25},style:{display:"contents"},children:u.map((y,w)=>d.jsx(Q.div,{variants:v,layout:!0,children:d.jsxs(fu,{className:"project-card",onClick:()=>f(y),whileHover:{y:-6},whileTap:{scale:.98},transition:{type:"spring",stiffness:240,damping:20},role:"button",tabIndex:0,"aria-haspopup":"dialog","aria-label":`Open details for ${y.title}`,onKeyDown:k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),f(y))},children:[d.jsx(rS,{children:d.jsx(K9,{src:y.image,alt:y.title,minHeight:"220px",decoding:"async"})}),d.jsxs(iS,{children:[d.jsxs(oS,{children:[d.jsx(sS,{children:y.category}),y.date&&d.jsx(aS,{children:y.date})]}),d.jsx(lS,{children:y.title}),y.description&&d.jsx(cS,{children:y.description}),"technologies"in y&&Array.isArray(y.technologies)&&y.technologies.length>0&&d.jsx(pS,{children:y.technologies.slice(0,6).map(k=>d.jsx(hS,{children:k},`${y.id}-${k}`))})]}),d.jsxs(uS,{children:[d.jsxs(dS,{type:"button",whileHover:{x:3},whileTap:{scale:.96},onClick:k=>{k.stopPropagation(),f(y)},"aria-label":`Quick view for ${y.title}`,children:["Quick view",d.jsx("span",{"aria-hidden":"true",children:"→"})]}),d.jsxs(fS,{children:[d.jsx($0,{href:y.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:k=>k.stopPropagation(),"aria-label":`Open ${y.title} repository`,children:d.jsx(Ea,{size:16})}),y.live&&d.jsx($0,{href:y.live,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:k=>k.stopPropagation(),"aria-label":`Visit live site for ${y.title}`,children:d.jsx(Tp,{size:14})})]})]})]})},y.id))},e)})}),d.jsx(Yn,{children:n&&d.jsxs(mS,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},"aria-hidden":!1,children:[d.jsx(gS,{onClick:p}),d.jsxs(vS,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{duration:.3},role:"dialog","aria-modal":"true","aria-labelledby":"project-dialog-title","aria-describedby":"project-dialog-description",ref:o,children:[d.jsx(ES,{onClick:p,"aria-label":"Close popup",ref:a,children:d.jsx(Im,{})}),d.jsxs(yS,{children:[d.jsx(xS,{children:d.jsx(wS,{src:n.image,alt:`${n.title} Screenshot`})}),d.jsxs(SS,{children:[d.jsx(kS,{id:"project-dialog-title",children:n.title}),d.jsx(bS,{id:"project-dialog-description",children:n.description}),d.jsxs(CS,{children:[d.jsxs("span",{children:["Category: ",n.category]}),d.jsxs("span",{children:["Date: ",n.date]})]}),d.jsxs(TS,{children:[d.jsxs(F0,{href:n.github,target:"_blank",rel:"noopener noreferrer",className:"github",children:[d.jsx(Ea,{}),"View on GitHub"]}),n.live&&d.jsxs(F0,{href:n.live,target:"_blank",rel:"noopener noreferrer",className:"live",children:[d.jsx(Tp,{}),"Live Demo"]})]})]})]})]})]})})]})})},jS=Fr`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,AS=Fr`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,zS=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>e.height||"100vh"};
  width: ${e=>e.width||"100%"};
  background: ${e=>e.background||"linear-gradient(135deg, var(--off-white) 0%, var(--white) 100%)"};
`,LS=S.div`
  width: ${e=>e.size||"50px"};
  height: ${e=>e.size||"50px"};
  border: 4px solid var(--light-gray);
  border-top: 4px solid var(--primary-blue);
  border-radius: 50%;
  animation: ${jS} 1s linear infinite;
`,MS=S.div`
  display: flex;
  gap: 4px;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-blue);
    animation: ${AS} 1.4s ease-in-out infinite both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
    &:nth-child(3) {
      animation-delay: 0s;
    }
  }
`,IS=S.p`
  margin-top: 1rem;
  color: var(--medium-gray);
  font-size: 1rem;
  font-weight: 500;
`,RS=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,_S=({text:e="Loading...",variant:t="spinner",size:n="50px",height:r,width:i,background:o,showText:a=!0,inline:s=!1})=>{const l=d.jsxs(RS,{children:[t==="dots"?d.jsxs(MS,{children:[d.jsx("div",{}),d.jsx("div",{}),d.jsx("div",{})]}):d.jsx(LS,{size:n}),a&&d.jsx(IS,{children:e})]});return s?l:d.jsx(zS,{height:r,width:i,background:o,children:l})},OS=S.section`
  background: var(--section-surface);
  padding: clamp(3rem, 8vw, 5rem) 0;
  transition: background 0.6s ease;
`,DS=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,VS=S.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`,NS=S.h3`
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
`,$S=S.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--medium-gray);
  position: relative;
  padding-bottom: var(--space-md);
`,FS=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 6vw, 3rem);
  margin-top: var(--space-xl);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,BS=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`,Fl=S.div`
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
    box-shadow:
      0 20px 60px var(--shadow-medium),
      0 0 0 1px rgba(59, 130, 246, 0.12);
  }

  &:hover::before {
    opacity: 1;
  }
`,Bl=S.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--accent-primary);
  margin-top: var(--space-xs);
  flex-shrink: 0;
`,Hl=S.div`
  flex: 1;
`,Ul=S.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
  font-weight: 600;
`,HS=S.p`
  color: var(--text-secondary);
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
`,B0=S.a`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  word-break: break-word;
  text-decoration: none;
  &:hover {
    color: var(--accent-primary);
  }
`,US=S.form`
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
`,Lo=S.div`
  position: relative;
`,Wl=S.input`
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
`,WS=S.textarea`
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
`,YS=S(Q.button)`
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
`,GS=S(Q.div)`
  padding: 1rem;
  border-radius: var(--radius-md);
  margin-top: 1rem;
  font-weight: 500;
  &.success {
    background: var(--color-success-bg);
    color: var(--color-success-text);
    border: 1px solid var(--color-success-border);
  }
  &.error {
    background: var(--color-error-bg);
    color: var(--color-error-text);
    border: 1px solid var(--color-error-border);
  }
`,Yl=S.div`
  color: var(--color-error-text);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,KS=()=>{const[e,t]=C.useState({name:"",email:"",subject:"",message:"",honeypot:""}),[n,r]=C.useState({}),[i,o]=C.useState(!1),[a,s]=C.useState(null),[l,c]=zs({threshold:.1,triggerOnce:!0}),u=w=>{const{name:k,value:m}=w.target;t(h=>({...h,[k]:m})),n[k]&&r(h=>({...h,[k]:""}))},f=()=>{const w={};return e.name.trim()||(w.name="Name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(w.email="Please enter a valid email address"):w.email="Email is required",e.message.trim()||(w.message="Message is required"),r(w),Object.keys(w).length===0},p=async w=>{if(w.preventDefault(),!!f()&&!e.honeypot){o(!0),s(null);try{if((await fetch("https://formspree.io/f/xnnbljlo",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.name,email:e.email,subject:e.subject,message:e.message})})).ok)s({type:"success",text:"Message sent successfully! I'll get back to you soon."}),t({name:"",email:"",subject:"",message:"",honeypot:""}),setTimeout(()=>s(null),5e3);else throw new Error("Formspree submission failed")}catch{s({type:"error",text:"Failed to send message. Please try again."})}finally{o(!1)}}},v={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},y={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return d.jsx(OS,{id:"contact",children:d.jsxs(DS,{children:[d.jsx(Kd,{shapes:[{size:"300px",top:"10%",left:"15%",color1:"rgba(0,119,255,0.18)",color2:"rgba(0,198,255,0.1)",blur:42,opacity:.2},{size:"220px",top:"70%",left:"80%",color1:"rgba(139,92,246,0.18)",color2:"rgba(59,130,246,0.1)",blur:38,opacity:.18}],intensity:18}),d.jsxs(VS,{children:[d.jsx(NS,{children:"Get In Touch"}),d.jsx($S,{children:"Let's work together"})]}),d.jsxs(FS,{ref:l,children:[d.jsx(Q.div,{variants:v,initial:"hidden",animate:c?"visible":"hidden",children:d.jsx(Q.div,{variants:y,children:d.jsxs(BS,{children:[d.jsxs(Fl,{children:[d.jsx(Bl,{children:d.jsx(w3,{})}),d.jsxs(Hl,{children:[d.jsx(Ul,{children:"Email"}),d.jsx(B0,{href:"mailto:denismunyoki5657@gmail.com",children:"denismunyoki5657@gmail.com"})]})]}),d.jsxs(Fl,{children:[d.jsx(Bl,{children:d.jsx(E3,{})}),d.jsxs(Hl,{children:[d.jsx(Ul,{children:"Phone"}),d.jsx(B0,{href:"tel:+254110433220",children:"+254110433220"})]})]}),d.jsxs(Fl,{children:[d.jsx(Bl,{children:d.jsx(b3,{})}),d.jsxs(Hl,{children:[d.jsx(Ul,{children:"Location"}),d.jsx(HS,{children:"Nairobi, Kenya"})]})]})]})})}),d.jsx(Q.div,{variants:v,initial:"hidden",animate:c?"visible":"hidden",children:d.jsx(Q.div,{variants:y,children:d.jsxs(US,{onSubmit:p,children:[d.jsx("input",{type:"text",name:"honeypot",value:e.honeypot,onChange:u,tabIndex:-1,autoComplete:"off",style:{position:"absolute",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1,border:0,padding:0},"aria-hidden":"true"}),d.jsxs(Lo,{children:[d.jsx(Wl,{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:u,required:!0,"aria-required":"true","aria-invalid":!!n.name,"aria-describedby":n.name?"contact-name-error":void 0}),n.name&&d.jsx(Yl,{id:"contact-name-error",children:n.name})]}),d.jsxs(Lo,{children:[d.jsx(Wl,{type:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:u,required:!0,"aria-required":"true","aria-invalid":!!n.email,"aria-describedby":n.email?"contact-email-error":void 0}),n.email&&d.jsx(Yl,{id:"contact-email-error",children:n.email})]}),d.jsx(Lo,{children:d.jsx(Wl,{type:"text",name:"subject",placeholder:"Subject",value:e.subject,onChange:u})}),d.jsxs(Lo,{children:[d.jsx(WS,{name:"message",placeholder:"Your Message",value:e.message,onChange:u,required:!0,"aria-required":"true","aria-invalid":!!n.message,"aria-describedby":n.message?"contact-message-error":void 0}),n.message&&d.jsx(Yl,{id:"contact-message-error",children:n.message})]}),d.jsx(YS,{type:"submit",disabled:i,animate:i?{scale:[1,1.05,1]}:{scale:1},transition:i?{repeat:1/0,duration:.6,ease:"easeInOut"}:{},children:i?d.jsxs(d.Fragment,{children:[d.jsx(_S,{variant:"dots",showText:!1,inline:!0}),d.jsx("span",{children:"Sending..."})]}):d.jsxs(d.Fragment,{children:[d.jsx(T3,{}),d.jsx("span",{children:"Send Message"})]})}),d.jsx(Yn,{children:a&&d.jsx(GS,{className:a.type,role:"alert",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:a.text})})]})})})]})]})})},QS=S.footer`
  background-color: var(--dark-blue);
  color: var(--white);
  padding: clamp(3rem, 6vw, 4rem) 0 var(--space-xl);
`,XS=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,ZS=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(2rem, 5vw, 3rem);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-xl);
  }
`,qS=S.div`
  flex: 1;
`,H0=S.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: var(--space-lg);
  font-weight: 600;
`,JS=S.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-lg);
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
`,ek=S.div`
  display: flex;
  gap: var(--space-md);
  margin: 0;
`,tk=S.a`
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
`,nk=S.div`
  flex: 1;
`,rk=S.ul`
  list-style: none;
  padding: 0;
`,ik=S.li`
  margin-bottom: var(--space-md);
`,ok=S.a`
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-decoration: none;

  &:hover {
    color: var(--secondary-blue);
  }
`,ak=S.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--space-xl);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
`,sk=()=>{const e=new Date().getFullYear(),t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},r=[{id:"home",label:"Home",href:"#home"},{id:"about",label:"About",href:"#about"},{id:"projects",label:"Projects",href:"#projects"},{id:"contact",label:"Contact",href:"#contact"}],i=[{id:"github",icon:Ea,href:"https://github.com/Denis-Mwanzia",label:"GitHub"},{id:"linkedin",icon:Am,href:"https://www.linkedin.com/in/denis-mwanzia",label:"LinkedIn"}],o=(a,s)=>{if(s.startsWith("#")){a.preventDefault();const l=document.querySelector(s);if(l){const u=l.offsetTop-80-20;window.scrollTo({top:u,behavior:"smooth"})}}};return d.jsx(QS,{children:d.jsx(XS,{children:d.jsxs(Q.div,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,threshold:.1},children:[d.jsxs(ZS,{children:[d.jsx(Q.div,{variants:n,children:d.jsxs(qS,{children:[d.jsx(H0,{children:"Denis Mwanzia"}),d.jsx(JS,{children:"Full‑stack developer focused on scalable, accessible web apps. Experienced across web based applications, AI‑assisted features, and internal tools. Pragmatic about performance, DX and maintainability."}),d.jsx(ek,{children:i.map(a=>d.jsx(tk,{href:a.href,target:a.href.startsWith("http")?"_blank":"_self",rel:a.href.startsWith("http")?"noopener noreferrer":"","aria-label":a.label,children:d.jsx(a.icon,{})},a.id))})]})}),d.jsx(Q.div,{variants:n,children:d.jsxs(nk,{children:[d.jsx(H0,{children:"Quick Links"}),d.jsx(rk,{children:r.map(a=>d.jsx(ik,{children:d.jsx(ok,{href:a.href,onClick:s=>o(s,a.href),children:a.label})},a.id))})]})})]}),d.jsx(Q.div,{variants:n,children:d.jsx(ak,{children:d.jsxs("p",{children:["© ",e," Denis Mwanzia. All rights reserved."]})})})]})})})},lk=S(Q.button)`
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
`,ck=()=>{const[e,t]=C.useState(!1);C.useEffect(()=>{const r=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return d.jsx(Yn,{children:e&&d.jsx(lk,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},transition:{duration:.3},onClick:n,"aria-label":"Scroll to top",children:d.jsx(y3,{})})})},Gl=({flip:e=!1})=>d.jsx("div",{"aria-hidden":"true",style:{lineHeight:0},children:d.jsx("svg",{viewBox:"0 0 1440 120",preserveAspectRatio:"none",style:{display:"block",width:"100%",height:"80px",transform:e?"scaleY(-1)":"none"},children:d.jsx("path",{fill:"currentColor",fillOpacity:"0.06",d:"M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"})})}),uk=S.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: ${e=>e.$width}%;
  background: linear-gradient(
    90deg,
    var(--secondary-blue),
    var(--primary-blue)
  );
  box-shadow: 0 0 12px rgba(58, 123, 213, 0.6);
  z-index: 1200;
  transition: width 0.08s ease;
`,dk=100,fk=()=>{const[e,t]=C.useState(0);return C.useEffect(()=>{const n=()=>{const i=window.scrollY||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-document.documentElement.clientHeight,a=o>0?i/o*100:0;t(Math.min(100,Math.max(0,a)))},r=tg(n,dk);return n(),window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),d.jsx(uk,{$width:e,"aria-hidden":"true"})},pk=S.section`
  padding: clamp(2.5rem, 7vw, 4rem) 0;
  background: var(--section-surface);
  transition: background 0.6s ease;
  color: var(--text-primary);
`,hk=S.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
`,mk=S.h3`
  text-align: center;
  font-size: clamp(1.6rem, 4vw, 2rem);
  font-weight: 800;
  margin-bottom: var(--space-2xl);
  background: linear-gradient(90deg, var(--primary-blue), var(--secondary-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,gk=S.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,vk=S(Q.div)`
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
`,yk=S.h4`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: clamp(1.05rem, 2.5vw, 1.2rem);
  margin-bottom: var(--space-sm);

  svg {
    color: var(--accent-primary);
  }
`,xk=S.ul`
  margin: 0;
  padding-left: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
`,wk=()=>{const e={hidden:{opacity:0,y:30,scale:.98},visible:t=>({opacity:1,y:0,scale:1,transition:{duration:.5,delay:t*.15,ease:"easeOut"}})};return d.jsx(pk,{"aria-labelledby":"capabilities-heading",children:d.jsxs(hk,{children:[d.jsx(mk,{id:"capabilities-heading",children:"Capabilities"}),d.jsx(gk,{as:Q.div,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[{icon:d.jsx(Lm,{}),title:"Front‑End Engineering",points:["Accessible, responsive UI","Design systems & theming","Performance budgeting"]},{icon:d.jsx(Mm,{}),title:"Back‑End & APIs",points:["RESTful APIs","Auth, RBAC, security","Relational & document DBs"]},{icon:d.jsx(A3,{}),title:"Quality & Delivery",points:["Testing & a11y checks","CI/CD & observability","SEO & analytics"]}].map((t,n)=>d.jsxs(vk,{custom:n,variants:e,whileHover:{y:-6},transition:{type:"spring",stiffness:220,damping:18},children:[d.jsxs(yk,{children:[t.icon," ",t.title]}),d.jsx(xk,{children:t.points.map(r=>d.jsx("li",{children:r},r))})]},t.title))})]})})},Sk=S.div`
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-primary);
  transition:
    background 0.6s ease,
    color 0.6s ease;
`,kk=S.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    radial-gradient(
      circle at 20% 10%,
      rgba(59, 130, 246, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(16, 185, 129, 0.06),
      transparent 30%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(139, 92, 246, 0.05),
      transparent 30%
    ),
    linear-gradient(
      transparent 0,
      transparent 98%,
      rgba(58, 123, 213, 0.06) 100%
    ),
    linear-gradient(
      90deg,
      transparent 0,
      transparent 98%,
      rgba(58, 123, 213, 0.06) 100%
    );
  background-size:
    100% 100%,
    100% 100%,
    100% 100%,
    40px 40px,
    40px 40px;
  background-position:
    0 0,
    0 0,
    0 0,
    0 0,
    0 0;
  mix-blend-mode: normal;

  html[data-theme='dark'] & {
    background-image:
      radial-gradient(
        circle at 15% 12%,
        rgba(108, 149, 255, 0.16),
        transparent 32%
      ),
      radial-gradient(
        circle at 82% 25%,
        rgba(28, 216, 255, 0.12),
        transparent 35%
      ),
      radial-gradient(
        circle at 55% 88%,
        rgba(143, 92, 247, 0.12),
        transparent 35%
      ),
      linear-gradient(
        transparent 0,
        transparent 98%,
        rgba(108, 149, 255, 0.12) 100%
      ),
      linear-gradient(
        90deg,
        transparent 0,
        transparent 98%,
        rgba(28, 216, 255, 0.12) 100%
      );
  }
`,bk=S.a`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  background: var(--primary-blue);
  color: white;
  font-weight: 600;
  border-radius: var(--radius-md);
  z-index: 9999;
  transition: top 0.2s ease;

  &:focus {
    top: 1rem;
    outline: 2px solid var(--secondary-blue);
    outline-offset: 2px;
  }
`,Ck=S.main`
  outline: none;
`,Tk=()=>{const[e,t]=C.useState(0),n=`${Pl}/`,r=`${Pl}/assets/passport.jpg`;return d.jsx(l3,{children:d.jsx(D3,{onRetry:()=>t(i=>i+1),children:d.jsxs(Sk,{children:[d.jsx(fk,{}),d.jsx(kk,{}),d.jsxs(Yo,{children:[d.jsx("title",{children:"Denis Mwanzia - Full-Stack Developer & IT Specialist"}),d.jsx("meta",{name:"description",content:"Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya. Showcasing web development projects, skills, and experience."}),d.jsx("meta",{name:"keywords",content:"web developer, full-stack developer, react, javascript, portfolio, denis mwanzia, kenya, mern stack, django, python"}),d.jsx("meta",{name:"author",content:"Denis Mwanzia"}),d.jsx("meta",{name:"robots",content:"index, follow"}),d.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),d.jsx("meta",{property:"og:type",content:"website"}),d.jsx("meta",{property:"og:url",content:n}),d.jsx("meta",{property:"og:title",content:"Denis Mwanzia - Full-Stack Developer & IT Specialist"}),d.jsx("meta",{property:"og:description",content:"Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."}),d.jsx("meta",{property:"og:image",content:r}),d.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),d.jsx("meta",{property:"twitter:url",content:n}),d.jsx("meta",{property:"twitter:title",content:"Denis Mwanzia - Full-Stack Developer & IT Specialist"}),d.jsx("meta",{property:"twitter:description",content:"Portfolio of Denis Mwanzia, a passionate Full-Stack Developer and IT Specialist based in Kenya."}),d.jsx("meta",{property:"twitter:image",content:r}),d.jsx("link",{rel:"canonical",href:n}),d.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),d.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),d.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Denis Mwanzia",url:n,image:r,jobTitle:"Full-Stack Developer & IT Specialist",sameAs:["https://www.linkedin.com/in/denis-mwanzia","https://github.com/Denis-Mwanzia"]})}),d.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"Denis Mwanzia Portfolio",url:n,potentialAction:{"@type":"SearchAction",target:`${Pl}/?q={search_term_string}`,"query-input":"required name=search_term_string"}})})]}),d.jsx(bk,{href:"#main-content",children:"Skip to main content"}),d.jsx(d7,{}),d.jsxs(Ck,{id:"main-content",tabIndex:-1,children:[d.jsx(W7,{}),d.jsx(Gl,{}),d.jsx(f9,{}),d.jsx(wk,{}),d.jsx(U9,{}),d.jsx(Gl,{}),d.jsx(PS,{}),d.jsx(Gl,{flip:!0}),d.jsx(KS,{})]}),d.jsx(sk,{}),d.jsx(ck,{})]})},e)})};Kl.createRoot(document.getElementById("root")).render(d.jsx(ce.StrictMode,{children:d.jsx(hr,{children:d.jsx(Tk,{})})}));
