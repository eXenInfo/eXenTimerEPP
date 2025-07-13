// Tone.js (v14.7.77) - Minified. The MIT License (MIT) Copyright (c) 2014-2021 Yotam Mann.
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Tone={})}(this,(function(t){"use strict";var e,i,n,s,o,r,a,l,u,h,c,d,f,p,g,m,v,y,b,w,k,S,T,C,A,E,x,M,O,P,R,L,D,z,I,F,V,B,N,U,G,H,W,j,Y,q,K,Z,J,Q,X,$,tt,et,it,nt,st,ot,rt,at,lt,ut,ht,ct,dt,ft,pt,gt,mt,vt,yt,bt,wt,kt,St,Tt,Ct,At,Et,xt,Mt,Ot,Pt,Rt,Lt,Dt,zt,It,Ft,Vt,Bt,Nt,Ut,Gt,Ht,Wt,jt,Yt,qt,Kt,Zt,Jt,Qt,Xt,$t,te,ee,ie,ne,se,oe,re,ae,le,ue,he,ce,de,fe,pe,ge,me,ve,ye,be,we,ke,Se,Te,Ce,Ae,Ee,xe,Me,Oe,Pe,Re,Le,De,ze,Ie,Fe,Ve,Be,Ne,Ue,Ge,He,We,je,Ye,qe,Ke,Ze,Je,Qe,Xe,$e,ti,ei,ii,ni,si,oi,ri,ai,li,ui,hi,ci,di,fi,pi,gi,mi,vi,yi,bi,wi,ki,Si,Ti,Ci,Ai,Ei,xi,Mi,Oi,Pi,Ri,Li,Di,zi,Ii,Fi,Vi,Bi,Ni,Ui,Gi,Hi,Wi,ji,Yi,qi,Ki,Zi,Ji,Qi,Xi,$i,tn,en,nn,sn,on,rn,an,ln,un,hn,cn,dn,fn,pn,gn,mn,vn,yn,bn,wn,kn,Sn,Tn,Cn,An,En,xn,Mn,On,Pn,Rn,Ln,Dn,zn,In,Fn,Vn,Bn,Nn,Un,Gn,Hn,Wn,jn,Yn,qn,Kn,Zn,Jn,Qn,Xn;e=this,i=function(){return this},n=e,s=n.performance,o=n.setTimeout,r=n.clearTimeout,a=n.setInterval,l=n.clearInterval,u=n.requestAnimationFrame,h=n.cancelAnimationFrame,c=function(t){o(t,0)},d=function(t){return t instanceof AudioBuffer},f=function(t){return t instanceof AudioContext},p=function(t){return f(t)?t.destination:null},g=function(t){return t instanceof AudioNode},m=function(t){return t instanceof AudioParam},v=function(t){return t instanceof ChannelMergerNode},y=function(t){return t instanceof GainNode},b=function(t){return t instanceof OscillatorNode},w=function(t,e){return t instanceof e},k=Array.isArray,S=function(t){return"function"==typeof t},T=function(t){return t instanceof MessagePort},C=function(t){return"number"==typeof t},A=function(t){return"object"==typeof t},E=function(t){return"string"==typeof t},x=function(t){return void 0===t},M="undefined"!=typeof globalThis?globalThis:window,O=M.TONE_SILENCE_LOGGING,P=M.TONE_DEBUG_CLASS,R=new WeakMap,L=function(t){if(!O){var e=R.get(t);x(e)&&(e=0,console.warn("".concat(t," has been deprecated. Will be removed in version 15.0"))),e<10&&console.log("".concat(t," is silent. Ensure that the connection path is correct.")),R.set(t,e+1)}},D=new WeakSet,z=function(t){D.has(t)||(D.add(t),console.warn(t))};function I(t,e){for(var i in e)t[i]=e[i]}var F=Object.assign||I;var V=128;function B(t,e,i){for(var n=new Array(t),s=0;s<t;s++)n[s]=i(s,e);return n}function N(t,e){return B(t,void 0,(function(t){return e(t)}))}function U(t){return 180*(t/Math.PI)}function G(t){return Math.PI*t/180}function H(t,e,i){return Math.min(Math.max(t,e),i)}function W(t,e,i){return(t-e)%(i-e)+e}function j(t,e,i){return t<e?e:t>i?i:t}function Y(t){for(var e=0,i=0;i<t.length;i++)e+=t[i];return e/t.length}function q(t,e){return t.reduce((function(t,e){return t*e}),e)}function K(t){return t.reduce((function(t,e){return t+e}),0)}function Z(t){for(var e=0,i=0;i<t.length;i++)e=Math.max(e,Math.abs(t[i]));return e}function J(t){return C(t)?Math.pow(10,t/20):void 0}function Q(t){return C(t)?20*Math.log10(t):void 0}function X(t,e){for(var i=Math.pow(10,t/10),n=Math.pow(10,e/10),s=Math.pow(10,(t+e)/10),o=10*Math.log10(i+n),r=10*Math.log10(s);isFinite(o)&&isFinite(r)&&Math.abs(o-r)>.1;)i=Math.pow(10,t/10),n=Math.pow(10,e/10),s=i+n,o=10*Math.log10(s),r=10*Math.log10(i)+10*Math.log10(n),t+=.1;return o}function $(t,e){return e=Math.pow(2,e),Math.log(t)/Math.log(e)}function tt(t,e,i,n,s){return(t-i)/(e-i)*(s-n)+n}function et(t){return t>0?1:t<0?-1:0}function it(t,e){return t%e}var nt=Math.PI;function st(t,e,i){return void 0===i?t>=e:t>=e&&t<=i}function ot(t){return t.constructor.name}function rt(t){var e=ot(t);return P&&P.has(e)}var at=new WeakMap;function lt(t,e){return at.has(t)?at.get(t):e}function ut(t,e){return at.set(t,e),t}function ht(t,e){return e.isPrototypeOf(t)}var ct=function(){function t(e){void 0===e&&(e=1),this.value=e,this.inputs=[],this.outputs=[],this.isUndisposed=!0,this.name="Tone",this._internalChannels=this.outputs,this.numberOfInputs=this.inputs.length,this.numberOfOutputs=this.outputs.length}return t.prototype.connect=function(e,i,n){return void 0===i&&(i=0),void 0===n&&(n=0),g(e)?(this.outputs[i].connect(e,n),e._internalChannels[n].inputs.push(this.outputs[i])):f(e)?this.connect(e.destination,i,n):e instanceof t?this.connect(e.inputs[n],i):e instanceof AudioParam&&this.connect(e,i),this},t.prototype.disconnect=function(e,i,n){return void 0===i&&(i=0),void 0===n&&(n=0),g(e)?this.outputs[i].disconnect(e,n):f(e)?this.disconnect(e.destination,i,n):e instanceof t?this.disconnect(e.inputs[n],i):e instanceof AudioParam&&this.disconnect(e,i),this},t.prototype.chain=function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.forEach((function(e){t.connect(e),t=e})),this},t.prototype.fan=function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.forEach((function(e){t.connect(e)})),this},t.prototype.dispose=function(){return this.isUndisposed&&(this.isUndisposed=!1),this},t.prototype.toString=function(){return this.name},t.prototype.toDestination=function(){return this.connect(this.context.destination),this},t.prototype.toMaster=function(){return z("toMaster() has been renamed toDestination()"),this.toDestination()},t.prototype.get=function(){return z("get() has been removed. Use the 'value' attribute instead."),this.value},t.prototype.set=function(t){return z("set() has been removed. Use the 'value' attribute instead."),this.value=t,this},t.prototype.log=function(){if(rt(this)){var t;console.log.apply(console,[(t="color: #A88532; font-weight: bold; font-size: 11px;").concat(this.name," : ")].concat(Array.prototype.slice.call(arguments)))}},t.prototype.assert=function(t,e){if(!t)throw new Error(e)},t.prototype.assertRange=function(t,e,i){if(!st(t,e,i))throw new RangeError("Value must be within [".concat(e,", ").concat(i,"], got: ").concat(t,"."))},t.prototype.assertArgument=function(t,e,i){if(x(t))throw new Error("Argument ".concat(e," is undefined").concat(i?": ".concat(i):"."))},t}();var dt=function(){function t(e){this.name="Tone",this.isUndisposed=!0,this.isUndisposed=!0}return t.prototype.dispose=function(){return this.isUndisposed&&(this.isUndisposed=!1),this},t.prototype.toString=function(){return this.name},t.prototype.log=function(){if(rt(this)){var t;console.log.apply(console,[(t="color: #A88532; font-weight: bold; font-size: 11px;").concat(this.name," : ")].concat(Array.prototype.slice.call(arguments)))}},t.prototype.assert=function(t,e){if(!t)throw new Error(e)},t.prototype.assertRange=function(t,e,i){if(!st(t,e,i))throw new RangeError("Value must be within [".concat(e,", ").concat(i,"], got: ").concat(t,"."))},t.prototype.assertArgument=function(t,e,i){if(x(t))throw new Error("Argument ".concat(e," is undefined").concat(i?": ".concat(i):"."))},t}();function ft(t,e){Object.defineProperty(t,"name",{value:e,configurable:!0})}var pt=1e3;function gt(t,e,i){var n=new Error(i);return n.name=e,n.stack=t,n}var mt=new WeakMap;function vt(t,e,i){if("function"==typeof t)try{t(e,i)}catch(t){bt(t)}}function yt(t,e,i){if("function"==typeof t.onfulfilled)try{t.onfulfilled(e)}catch(t){bt(t)}else t.resolve(e)}function bt(t){o((function(){throw t}))}var wt={};function kt(t){var e=mt.get(t);return e||(e={state:0,value:void 0,queue:[]},mt.set(t,e)),e}function St(t,e,i){var n=kt(t);0===n.state&&(n.state=e,n.value=i,n.queue.forEach((function(t){"function"==typeof(e===wt.f?t.onfulfilled:t.onrejected)?vt(e===wt.f?t.onfulfilled:t.onrejected,i):e===wt.f?t.resolve(i):t.reject(i)})))}function Tt(t){return new Promise(t)}var Ct,At=function(){function t(e){var i=this;if(this.name="Tone",this._onfulfilled=function(){},this._onrejected=function(){},this._state=0,this._value=void 0,this._queue=[],e)try{e(this._resolve.bind(this),this._reject.bind(this))}catch(t){i._reject(t)}}return t.prototype.then=function(e,i){var n=this;return new t((function(t,s){n._queue.push({onfulfilled:e,onrejected:i,resolve:t,reject:s}),1!==n._state&&-1!==n._state||At._run(n)}))},t.prototype.catch=function(t){return this.then(null,t)},t.prototype._resolve=function(t){this._state=1,this._value=t,At._run(this)},t.prototype._reject=function(t){this._state=-1,this._value=t,At._run(this)},t.all=function(e){return new t((function(t,i){var n=0,s=[];e.forEach((function(e,o){Promise.resolve(e).then((function(e){s[o]=e,++n===e.length&&t(s)}),i)}))}))},t.resolve=function(e){return new t((function(t){t(e)}))},t._run=function(t){t._queue.forEach((function(e){var i=1===t._state?e.onfulfilled:e.onrejected;if("function"==typeof i)try{var n=i(t._value);"function"==typeof n.then?n.then(e.resolve,e.reject):e.resolve(n)}catch(t){e.reject(t)}else 1===t._state?e.resolve(t._value):e.reject(t._value)})),t._queue=[]},t}(),Et="undefined"==typeof Promise?At:Promise;function xt(t){return t.then}function Mt(t){return new Et(t)}function Ot(t){var e,i,n;return e=0,i=0,n=new Et((function(t){var n=a((function(){e-i>2*pt?t("offline"):i=e}),pt);return t((function(){l(n)}))})),o((function t(){e++,o(t,100)}),100),n}function Pt(t){return new Et((function(e){o(e,1e3*t)}))}var Rt=function(){function t(e){this.name="Tone",this._events=new Map,this.isUndisposed=!0,e&&this.fromJSON(e)}return t.prototype.on=function(t,e){var i=this._events.get(t);return x(i)?this._events.set(t,[e]):i.push(e),this},t.prototype.once=function(t,e){var i=this,n=function(){for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];e.apply(void 0,o),i.off(t,n)};return this.on(t,n),this},t.prototype.off=function(t,e){if(this._events.has(t)){var i=this._events.get(t);if(x(e))this._events.set(t,[]);else for(var n=i.length-1;n>=0;n--)i[n]===e&&i.splice(n,1)}return this},t.prototype.emit=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return this._events.has(t)&&this._events.get(t).slice(0).forEach((function(t){t.apply(void 0,i)})),this},t.prototype.dispose=function(){return this.isUndisposed&&(this._events=void 0,this.isUndisposed=!1),this},t.prototype.fromJSON=function(t){for(var e in t)this.on(e,t[e])},t.prototype.toJSON=function(){for(var t={},e=this._events.keys(),i=e.next();i.done;i=e.next())t[i.value]=this._events.get(i.value);return t},t.prototype.log=function(){if(rt(this)){var t;console.log.apply(console,[(t="color: #008C5F; font-weight: bold; font-size: 11px;").concat(this.name," : ")].concat(Array.prototype.slice.call(arguments)))}},t.prototype.assert=function(t,e){if(!t)throw new Error(e)},t.prototype.assertRange=function(t,e,i){if(!st(t,e,i))throw new RangeError("Value must be within [".concat(e,", ").concat(i,"], got: ").concat(t,"."))},t.prototype.assertArgument=function(t,e,i){if(x(t))throw new Error("Argument ".concat(e," is undefined").concat(i?": ".concat(i):"."))},t}(),Lt=/^\[\s*(-?[\d\.]+)\s*,\s*(-?[\d\.]+)\s*\]$/,Dt=new Map;function zt(t,e,i){Dt.has(t)||(Dt.set(t,new Map),Dt.get(t).set(e,i))}function It(t,e){if(Dt.has(t))return Dt.get(t).get(e)}function Ft(t,e){if(Dt.has(t)){var i=Dt.get(t);i.delete(e),0===i.size&&Dt.delete(t)}}function Vt(t,e,i){var n=new Array(t);if(k(i))for(var s=0;s<t;s++)n[s]=Vt(e,i[s]);else for(s=0;s<t;s++)n[s]=Vt(e,i);return n}function Bt(t,e){return k(e)?e.map((function(e){return Bt(t,e)})):new t}function Nt(t,e){return k(e)?e.map((function(e){return new t(e)})):new t(e)}function Ut(t){return k(t)?t.map(Ut):void 0}function Gt(t){return k(t)?t.map(Gt):void 0}function Ht(t){return t.length}function Wt(t,e){if(t.length>0){for(var i=new Array(t.length),n=0;n<t.length;n++)i[n]=t[n][e];return i}}var jt=function(t){var e=function(t){return function(e){return new t(e)}};return function(i,n){void 0===n&&(n=e(t));for(var s=new Array(i),o=0;o<i;o++)s[o]=n(o);return s}},Yt=function(t){return function(){return new t}},qt=new WeakMap;function Kt(t,e){qt.set(t,e)}function Zt(t){return qt.get(t)}var Jt=function(){function t(e){this.name="Tone",this._context=e,this.isUndisposed=!0,this.isUndisposed=!0}return Object.defineProperty(t.prototype,"context",{get:function(){return this._context},set:function(t){this._context=t,qt.set(this,t)}}),t.prototype.dispose=function(){return this.isUndisposed&&(this.isUndisposed=!1,Ft(this.constructor,this)),this},t.prototype.log=function(){if(rt(this)){var t;console.log.apply(console,[(t="color: #A88532; font-weight: bold; font-size: 11px;").concat(this.name," : ")].concat(Array.prototype.slice.call(arguments)))}},t.prototype.assert=function(t,e){if(!t)throw new Error(e)},t.prototype.assertRange=function(t,e,i){if(!st(t,e,i))throw new RangeError("Value must be within [".concat(e,", ").concat(i,"], got: ").concat(t,"."))},t.prototype.assertArgument=function(t,e,i){if(x(t))throw new Error("Argument ".concat(e," is undefined").concat(i?": ".concat(i):"."))},t}(),Qt=function(){function t(e){var i=this;void 0===e&&(e=t.getDefaults()),this.name="Tone",this.isUndisposed=!0,this._overridden=new Map,this.isUndisposed=!0;var n=Zt(this);this.context=lt(e.context,n),this._internalChannels=[],this.inputs=[],this.outputs=[],this.numberOfInputs=e.numberOfInputs,this.numberOfOutputs=e.numberOfOutputs,this.output=new ct({context:this.context}),this.input=new ct({context:this.context}),this.output.output.channelCount=e.channelCount,this.output.output.channelCountMode=e.channelCountMode,this.output.output.channelInterpretation=e.channelInterpretation}return t.prototype.connect=function(e,i,n){return void 0===i&&(i=0),void 0===n&&(n=0),this.output.connect(e,i,n),this},t.prototype.disconnect=function(e,i,n){return void 0===i&&(i=0),void 0===n&&(n=0),this.output.disconnect(e,i,n),this},t.prototype.chain=function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.forEach((function(e){t.connect(e),t=e})),this},t.prototype.fan=function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.forEach((function(e){t.connect(e)})),this},t.prototype.dispose=function(){return this.isUndisposed&&(this.isUndisposed=!1,this.input.dispose(),this.output.dispose(),Ft(this.constructor,this)),this},t.prototype.set=function(t,e){var i;if(A(t)){var n=t;for(var s in n)this.set(s,n[s])}else if(this.get(t)instanceof ct)this.get(t).value=e;else if(this.get(t)instanceof Qt)this.get(t).set(e);else{var o=this.get(t);this._overridden.set(t,o),this[t]=e}return this},t.prototype.get=function(t){var e,i,n,s,o;return A(t)?(e={},i=t,n=Array.isArray(i),s=0,i=n?i:i[Symbol.iterator]();;){var r;if(n){if(s>=i.length)break;r=i[s++]}else{if((s=i.next()).done)break;r=s.value}var a=r;e[a]=this.get(a)}:e=this._overridden.has(t)?this._overridden.get(t):this[t],e},t.prototype.toDestination=function(){return this.connect(this.context.destination),this},t.prototype.toMaster=function(){return z("toMaster() has been renamed toDestination()"),this.toDestination()},t.prototype.log=function(){if(rt(this)){var t;console.log.apply(console,[(t="color: #A88532; font-weight: bold; font-size: 11px;").concat(this.name," : ")].concat(Array.prototype.slice.call(arguments)))}},t.prototype.assert=function(t,e){if(!t)throw new Error(e)},t.prototype.assertRange=function(t,e,i){if(!st(t,e,i))throw new RangeError("Value must be within [".concat(e,", ").concat(i,"], got: ").concat(t,"."))},t.prototype.assertArgument=function(t,e,i){if(x(t))throw new Error("Argument ".concat(e," is undefined").concat(i?": ".concat(i):"."))},t.getDefaults=function(){return{channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",context:void 0,numberOfInputs:1,numberOfOutputs:1}},t}(),Xt=function(){function t(e){var i=this;void 0===e&&(e=t.getDefaults()),this.name="Tone",this.isUndisposed=!0,this._overridden=new Map,this.isUndisposed=!0;var n=Zt(this);this.context=lt(e.context,n),this._internalChannels=[],this.inputs=[],this.outputs=[],this.numberOfInputs=e.numberOfInputs,this.numberOfOutputs=e.numberOfOutputs}return t.prototype.connect=function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=0),this},t.prototype.disconnect=function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=0),this},t.prototype.chain=function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.forEach((function(e){t.connect(e),t=e})),this},t.prototype.fan=function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.forEach((function(e){t.connect(e)})),this},t.prototype.dispose=function(){return this.isUndisposed&&(this.isUndisposed=!1,Ft(this.constructor,this)),this},t.prototype.set=function(t,e){var i;if(A(t)){var n=t;for(var s in n)this.set(s,n[s])}else if(this.get(t)instanceof ct)this.get(t).value=e;else if(this.get(t)instanceof t)this.get(t).set(e);else{var o=this.get(t);this._overridden.set(t,o),this[t]=e}return this},t.prototype.get=function(t){var e,i,n,s,o;return A(t)?(e={},i=t,n=Array.isArray(i),s=0,i=n?i:i[Symbol.iterator]();;){var r;if(n){if(s>=i.length)break;r=i[s++]}else{if((s=i.next()).done)break;r=s.value}var a=r;e[a]=this.get(a)}:e=this._overridden.has(t)?this._overridden.get(t):this[t],e},t.prototype.toDestination=function(){return this.connect(this.context.destination),this},t.prototype.toMaster=function(){return z("toMaster() has been renamed toDestination()"),this.toDestination()},t.prototype.log=function(){if(rt(this)){var t;console.log.apply(console,[(t="color: #A88532; font-weight: bold; font-size: 11px;").concat(this.name," : ")].concat(Array.prototype.slice.call(arguments)))}},t.prototype.assert=function(t,e){if(!t)throw new Error(e)},t.prototype.assertRange=function(t,e,i){if(!st(t,e,i))throw new RangeError("Value must be within [".concat(e,", ").concat(i,"], got: ").concat(t,"."))},t.prototype.assertArgument=function(t,e,i){if(x(t))throw new Error("Argument ".concat(e," is undefined").concat(i?": ".concat(i):"."))},t.getDefaults=function(){return{context:void 0,numberOfInputs:1,numberOfOutputs:1}},t}();var $t=function(t){function e(e){var i=this;return void 0===e&&(e={}),(i=t.call(this,e)||this).name="Source",i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.prototype.start=function(t,e,i){return this},e.prototype.stop=function(t){return this},e.prototype.sync=function(){return this},e.prototype.unsync=function(){return this},e}(Xt);var te=function(t){function e(e){var i=this;return void 0===e&&(e=t.getDefaults()),(i=t.call(this,e)||this).name="Gain",i.input=i.output=i.gain=new ct({context:i.context,value:e.gain,units:"gain"}),i.gain.value=e.gain,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.getDefaults=function(){return F(t.getDefaults(),{gain:1})},e.prototype.set=function(e,i){var n=this;return A(e)?t.prototype.set.call(this,e):this.gain.value=e,this},e.prototype.get=function(){return this.gain.value},e.prototype.dispose=function(){return t.prototype.dispose.call(this),this.gain.dispose(),this},e}(Qt),ee=function(t){function e(e){var i=this;return void 0===e&&(e=t.getDefaults()),(i=t.call(this,e)||this).name="Destination",i.input=i.output=new te({context:i.context,gain:e.gain}),i.master=new te({context:i.context}),i.input.connect(i.master),i.master.connect(i.context.rawContext.destination),i.volume=i.master.gain,i.mute=e.mute,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.getDefaults=function(){return F(t.getDefaults(),{gain:1,mute:!1})},Object.defineProperty(e.prototype,"mute",{get:function(){return this.master.gain.value=== -1/0},set:function(t){this.master.gain.value=t?-1/0:1}}),e.prototype.dispose=function(){return t.prototype.dispose.call(this),this.master.dispose(),this},e}(Qt);var ie=function(t){function e(e){var i=this;return(i=t.call(this,e)||this).name="Param",i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.prototype.set=function(e,i){var n=this;return A(e)?t.prototype.set.call(this,e):this.value=e,this},e.prototype.get=function(){return this.value},e}(Qt);var ne=function(t){function e(e){var i=this;return void 0===e&&(e=t.getDefaults()),(i=t.call(this,e)||this).name="Oscillator",i._oscillator=new OscillatorNode(i.context.rawContext),i.input=i.output=i._oscillator,i.frequency=new ie({context:i.context,value:e.frequency,units:"frequency"}),i.detune=new ie({context:i.context,value:e.detune,units:"cents"}),i.type=e.type,i.frequency.connect(i._oscillator.frequency),i.detune.connect(i._oscillator.detune),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.getDefaults=function(){return F(t.getDefaults(),{detune:0,frequency:440,type:"sine"})},Object.defineProperty(e.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t}}),e.prototype.start=function(e){return this._oscillator.start(e),this},e.prototype.stop=function(e){return this._oscillator.stop(e),this},e.prototype.dispose=function(){return t.prototype.dispose.call(this),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this},e}($t),se=function(t){function e(e){var i=this;return void 0===e&&(e=t.getDefaults()),(i=t.call(this,e)||this).name="Synth",i.frequency=new ie({context:i.context,value:440,units:"frequency"}),i.detune=new ie({context:i.context,value:0,units:"cents"}),i.oscillator=new ne({context:i.context,frequency:i.frequency,detune:i.detune,onstop:function(){return i.triggerRelease()}}),i.envelope=new ee({context:i.context,attack:e.attack,decay:e.decay,sustain:e.sustain,release:e.release}),i.oscillator.connect(i.envelope),i.envelope.connect(i.output),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.getDefaults=function(){return F(t.getDefaults(),{attack:.005,decay:.1,detune:0,frequency:440,oscillator:{type:"triangle"},release:.2,sustain:.3})},e.prototype.triggerAttack=function(t,e){return this.frequency.setValueAtTime(t,e),this.envelope.triggerAttack(e),this},e.prototype.triggerRelease=function(e){return this.envelope.triggerRelease(e),this},e.prototype.triggerAttackRelease=function(t,e,i){return this.triggerAttack(t,i),this.triggerRelease(i+e),this},e.prototype.dispose=function(){return t.prototype.dispose.call(this),this.oscillator.dispose(),this.envelope.dispose(),this.frequency.dispose(),this.detune.dispose(),this},e}(Qt);t.Destination=new ee,t.Gain=te,t.Oscillator=ne,t.Synth=se,t.Transport=new Rt,t.start=function(){return Mt((function(t){var e;e=document.body||document.documentElement,new MutationObserver((function(i){i.forEach((function(i){e.contains(i.target)||(t(),Ct&&Ct.disconnect(),document.removeEventListener("click",Ct))}))})).observe(e,{childList:!0,subtree:!0}),Ct=new ne({context:t.Destination.context}).toDestination().start()}))},Object.defineProperty(t,"context",{get:function(){return t.Destination.context},set:function(e){t.Destination.context=e,Kt(t,e)}}),Object.defineProperty(t,"now",{get:function(){return t.Destination.context.now()}}),Object.defineProperty(t,"immediate",{get:function(){return t.Destination.context.immediate()}}),Object.defineProperty(t,"Destination",{get:function(){return t.Destination},set:function(e){t.Destination.dispose(),t.Destination=e}}),Object.defineProperty(t,"Transport",{get:function(){return t.Transport},set:function(e){t.Transport.dispose(),t.Transport=e}}),Object.defineProperty(t,"Draw",{get:function(){return t.Draw},set:function(e){t.Draw.dispose(),t.Draw=e}}),Object.defineProperty(t,"version",{get:function(){return"14.7.77"}}),Object.defineProperty(t,"supported",{get:function(){var t=M.AudioContext||M.webkitAudioContext,e=void 0!==M.Promise;return t&&e}}),Object.defineProperty(t,"debug",{get:function(){return!x(P)},set:function(t){t?P=new Set:P=void 0}}),Object.defineProperty(t,"silenceErrors",{get:function(){return O},set:function(t){O=t}}),Object.defineProperty(t,"dbToGain",{get:function(){return J}}),Object.defineProperty(t,"gainToDb",{get:function(){return Q}}),Object.defineProperty(t,"intervalToFrequencyRatio",{get:function(){return function(t){return Math.pow(2,t/12)}}}),Object.defineProperty(t,"mtof",{get:function(){return function(t){return 440*Math.pow(2,(t-69)/12)}}}),Object.defineProperty(t,"ftom",{get:function(){return function(t){return 69+12*Math.log2(t/440)}}}),Object.defineProperty(t,"optionsFromArguments",{get:function(){return function(t,e,i,n){var s={};if(1===t.length&&A(t[0]))s=t[0];else for(var o=0;o<i.length;o++)s[i[o]]=t[o];return x(n)?s:F(n,s)}}}),Object.defineProperty(t,"isContext",{get:function(){return f}}),Object.defineProperty(t,"isAudioNode",{get:function(){return g}}),Object.defineProperty(t,"isAudioParam",{get:function(){return m}}),Object.defineProperty(t,"isSignal",{get:function(){return function(t){return m(t)||g(t)&&(t instanceof te||t instanceof ie)}}}),Object.defineProperty(t,"isFrequency",{get:function(){return function(t){return E(t)&&t.match(/^(?:[a-gA-G]#?){1}(\d+\.?\d*)$/)||C(t)&&t>0}}}),Object.defineProperty(t,"isTransportTime",{get:function(){return function(t){return E(t)&&t.match(/^(\d+(\.\d+)?\:){1,2}(\d+(\.\d+)?)?$/)}}}),Object.defineProperty(t,"isTicks",{get:function(){return function(t){return E(t)&&t.match(/^\d+i$/)}}}),Object.defineProperty(t,"isNote",{get:function(){return function(t){return E(t)&&!!t.match(/^[a-gA-G]#?\d$/)}}}),Object.defineProperty(t,"isRest",{get:function(){return function(t){return null===t||A(t)&&t.rest}}}),Object.defineProperty(t,"isPitch",{get:function(){return function(t){return E(t)&&!!t.match(/^[a-gA-G]#?$/)}}}),Object.defineProperty(t,"isNumber",{get:function(){return C}}),Object.defineProperty(t,"isString",{get:function(){return E}}),Object.defineProperty(t,"isObject",{get:function(){return A}}),Object.defineProperty(t,"isBoolean",{get:function(){return function(t){return"boolean"==typeof t}}}),Object.defineProperty(t,"isFunction",{get:function(){return S}}),Object.defineProperty(t,"isUndef",{get:function(){return x}}),Object.defineProperty(t,"isDefined",{get:function(){return function(t){return!x(t)}}}),Object.defineProperty(t,"isArray",{get:function(){return k}}),Object.defineProperty(t,"isAudioBuffer",{get:function(){return d}}),Object.defineProperty(t,"isAudioWorkletNode",{get:function(){return function(t){return ht(t,M.AudioWorkletNode)}}}),Object.defineProperty(t,"isOfflineAudioContext",{get:function(){return function(t){return ht(t,M.OfflineAudioContext)}}}),Object.defineProperty(t,"isAudioContext",{get:function(){return f}}),Object.defineProperty(t,"isDestination",{get:function(){return function(t){return t instanceof ee}}}),Object.defineProperty(t,"isOscillatorType",{get:function(){return function(t){return"sine"===t||"square"===t||"sawtooth"===t||"triangle"===t||"custom"===t||t.includes("sine")||t.includes("square")||t.includes("sawtooth")||t.includes("triangle")}}}),Object.defineProperty(t,"setContext",{get:function(){return function(e){if(f(e))t.context=e;else if(e instanceof Jt)t.context=e.context}}}),Object.defineProperty(t,"getContext",{get:function(){return t.context}}),Object.defineProperty(t,"setLogger",{get:function(){return function(t){z("setLogger is deprecated"),console.warn=t}}}),Object.defineProperty(t,"setTransport",{get:function(){return function(e){z("setTransport is deprecated"),t.Transport=e}}}),Object.defineProperty(t,"getTransport",{get:function(){return t.Transport}}),Object.defineProperty(t,"Time",{get:function(){return function(t,e){return new he(t,e)}}}),Object.defineProperty(t,"Frequency",{get:function(){return function(t,e){return new ce(t,e)}}}),Object.defineProperty(t,"TransportTime",{get:function(){return function(t,e){return new de(t,e)}}}),Object.defineProperty(t,"Ticks",{get:function(){return function(t,e){return new fe(t,e)}}}),Object.defineProperty(t,"Midi",{get:function(){return function(t,e){return new pe(t,e)}}}),Object.defineProperty(t,"connect",{get:function(){return function(t,e,i,n){t.connect(e,i,n)}}}),Object.defineProperty(t,"disconnect",{get:function(){return function(t,e,i,n){t.disconnect(e,i,n)}}}),Object.defineProperty(t,"getDestination",{get:function(){return t.Destination}}),Object.defineProperty(t,"Offline",{get:function(){return function(t,e,i){return new Et((function(n,s){var o=new OfflineAudioContext(i,e*i,i);Kt(t,o),t(t.Transport).then((function(){n(o.startRendering())})).catch((function(t){s(t)}))}))}}}),Object.defineProperty(t,"Buffer",{get:function(){return function(t,e,i){return new ge(t,e,i)}}}),Object.defineProperty(t,"loaded",{get:function(){return ge.loaded}}),Object.defineProperty(t,"Emitter",{get:function(){return Rt}}),Object.defineProperty(t,"Param",{get:function(){return ie}}),Object.defineProperty(t,"ToneAudioBuffer",{get:function(){return ge}}),Object.defineProperty(t,"ToneAudioBuffers",{get:function(){return me}}),Object.defineProperty(t,"Player",{get:function(){return ve}}),Object.defineProperty(t,"Players",{get:function(){return ye}}),Object.defineProperty(t,"Draw",{get:function(){return be}}),Object.defineProperty(t,"OfflineContext",{get:function(){return we}}),Object.defineProperty(t,"Context",{get:function(){return Jt}}),Object.defineProperty(t,"BaseContext",{get:function(){return dt}}),Object.defineProperty(t,"ToneAudioNode",{get:function(){return Qt}}),Object.defineProperty(t,"ToneWithContext",{get:function(){return Jt}}),Object.defineProperty(t,"Source",{get:function(){return $t}}),Object.defineProperty(t,"Transport",{get:function(){return Rt}}),Object.defineProperty(t,"ToneEvent",{get:function(){return ke}}),Object.defineProperty(t,"Sequence",{get:function(){return Se}}),Object.defineProperty(t,"Part",{get:function(){return Te}}),Object.defineProperty(t,"Loop",{get:function(){return Ce}}),Object.defineProperty(t,"Pattern",{get:function(){return Ae}}),Object.defineProperty(t,"Clock",{get:function(){return Ee}}),Object.defineProperty(t,"IntervalTimeline",{get:function(){return xe}}),Object.defineProperty(t,"Timeline",{get:function(){return Me}}),Object.defineProperty(t,"StateTimeline",{get:function(){return Oe}}),Object.defineProperty(t,"Event",{get:function(){return ke}}),Object.defineProperty(t,"Unit",{get:function(){return Pe}}),Object.defineProperty(t,"TimeBase",{get:function(){return Re}}),Object.defineProperty(t,"FrequencyClass",{get:function(){return ce}}),Object.defineProperty(t,"TimeClass",{get:function(){return he}}),Object.defineProperty(t,"TransportTimeClass",{get:function(){return de}}),Object.defineProperty(t,"TicksClass",{get:function(){return fe}}),Object.defineProperty(t,"MidiClass",{get:function(){return pe}}),Object.defineProperty(t,"Signal",{get:function(){return Le}}),Object.defineProperty(t,"Pow",{get:function(){return De}}),Object.defineProperty(t,"Envelope",{get:function(){return ee}}),Object.defineProperty(t,"AmplitudeEnvelope",{get:function(){return ze}}),Object.defineProperty(t,"FrequencyEnvelope",{get:function(){return Ie}}),Object.defineProperty(t,"ADSR",{get:function(){return Fe}}),Object.defineProperty(t,"Compressor",{get:function(){return Ve}}),Object.defineProperty(t,"Filter",{get:function(){return Be}}),Object.defineProperty(t,"BiquadFilter",{get:function(){return Ne}}),Object.defineProperty(t,"EQ3",{get:function(){return Ue}}),Object.defineProperty(t,"MultibandSplit",{get:function(){return Ge}}),Object.defineProperty(t,"Analyser",{get:function(){return He}}),Object.defineProperty(t,"FFT",{get:function(){return We}}),Object.defineProperty(t,"Meter",{get:function(){return je}}),Object.defineProperty(t,"Waveform",{get:function(){return Ye}}),Object.defineProperty(t,"DCMeter",{get:function(){return qe}}),Object.defineProperty(t,"Volume",{get:function(){return Ke}}),Object.defineProperty(t,"LFO",{get:function(){return Ze}}),Object.defineProperty(t,"PingPongDelay",{get:function(){return Je}}),Object.defineProperty(t,"FeedbackDelay",{get:function(){return Qe}}),Object.defineProperty(t,"Delay",{get:function(){return Xe}}),Object.defineProperty(t,"Reverb",{get:function(){return $e}}),Object.defineProperty(t,"Convolver",{get:function(){return ti}}),Object.defineProperty(t,"Chorus",{get:function(){return ei}}),Object.defineProperty(t,"Phaser",{get:function(){return ii}}),Object.defineProperty(t,"Vibrato",{get:function(){return ni}}),Object.defineProperty(t,"Tremolo",{get:function(){return si}}),Object.defineProperty(t,"AutoFilter",{get:function(){return oi}}),Object.defineProperty(t,"AutoPanner",{get:function(){return ri}}),Object.defineProperty(t,"AutoWah",{get:function(){return ai}}),Object.defineProperty(t,"Distortion",{get:function(){return li}}),Object.defineProperty(t,"Chebyshev",{get:function(){return ui}}),Object.defineProperty(t,"BitCrusher",{get:function(){return hi}}),Object.defineProperty(t,"PitchShift",{get:function(){return ci}}),Object.defineProperty(t,"StereoWidener",{get:function(){return di}}),Object.defineProperty(t,"MidSideSplit",{get:function(){return fi}}),Object.defineProperty(t,"MidSideMerge",{get:function(){return pi}}),Object.defineProperty(t,"Merge",{get:function(){return gi}}),Object.defineProperty(t,"Split",{get:function(){return mi}}),Object.defineProperty(t,"ChannelMerger",{get:function(){return gi}}),Object.defineProperty(t,"ChannelSplitter",{get:function(){return mi}}),Object.defineProperty(t,"CrossFade",{get:function(){return vi}}),Object.defineProperty(t,"Panner",{get:function(){return yi}}),Object.defineProperty(t,"PanVol",{get:function(){return bi}}),Object.defineProperty(t,"StereoPanner",{get:function(){return wi}}),Object.defineProperty(t,"Solo",{get:function(){return ki}}),Object.defineProperty(t,"Mute",{get:function(){return Si}}),Object.defineProperty(t,"Gate",{get:function(){return Ti}}),Object.defineProperty(t,"Follower",{get:function(){return Ci}}),Object.defineProperty(t,"Limiter",{get:function(){return Ai}}),Object.defineProperty(t,"MultibandCompressor",{get:function(){return Ei}}),Object.defineProperty(t,"FeedbackCombFilter",{get:function(){return xi}}),Object.defineProperty(t,"LowpassCombFilter",{get:function(){return Mi}}),Object.defineProperty(t,"Allpass",{get:function(){return Oi}}),Object.defineProperty(t,"JcReverb",{get:function(){return Pi}}),Object.defineProperty(t,"Freeverb",{get:function(){return Ri}}),Object.defineProperty(t,"FrequencyShifter",{get:function(){return Li}}),Object.defineProperty(t,"MembraneSynth",{get:function(){return Di}}),Object.defineProperty(t,"MetalSynth",{get:function(){return zi}}),Object.defineProperty(t,"NoiseSynth",{get:function(){return Ii}}),Object.defineProperty(t,"PluckSynth",{get:function(){return Fi}}),Object.defineProperty(t,"PolySynth",{get:function(){return Vi}}),Object.defineProperty(t,"FMSynth",{get:function(){return Bi}}),Object.defineProperty(t,"AMSynth",{get:function(){return Ni}}),Object.defineProperty(t,"DuoSynth",{get:function(){return Ui}}),Object.defineProperty(t,"MonoSynth",{get:function(){return Gi}}),Object.defineProperty(t,"Noise",{get:function(){return Hi}}),Object.defineProperty(t,"PulseOscillator",{get:function(){return Wi}}),Object.defineProperty(t,"PWMOscillator",{get:function(){return ji}}),Object.defineProperty(t,"FatOscillator",{get:function(){return Yi}}),Object.defineProperty(t,"AMOscillator",{get:function(){return qi}}),Object.defineProperty(t,"FMOscillator",{get:function(){return Ki}}),Object.defineProperty(t,"OmniOscillator",{get:function(){return Zi}}),Object.defineProperty(t,"ToneBufferSource",{get:function(){return Ji}}),Object.defineProperty(t,"UserMedia",{get:function(){return Qi}}),Object.defineProperty(t,"ToneConstantSource",{get:function(){return Xi}}),Object.defineProperty(t,"Abs",{get:function(){return $i}}),Object.defineProperty(t,"Add",{get:function(){return tn}}),Object.defineProperty(t,"AudioToGain",{get:function(){return en}}),Object.defineProperty(t,"GainToAudio",{get:function(){return nn}}),Object.defineProperty(t,"Multiply",{get:function(){return sn}}),Object.defineProperty(t,"Negate",{get:function(){return on}}),Object.defineProperty(t,"Scale",{get:function(){return rn}}),Object.defineProperty(t,"ScaleExp",{get:function(){return an}}),Object.defineProperty(t,"SignalOperator",{get:function(){return ln}}),Object.defineProperty(t,"Subtract",{get:function(){return un}}),Object.defineProperty(t,"WaveShaper",{get:function(){return hn}}),Object.defineProperty(t,"Zero",{get:function(){return cn}}),Object.defineProperty(t,"GreaterThan",{get:function(){return dn}}),Object.defineProperty(t,"GreaterThanZero",{get:function(){return fn}}),Object.defineProperty(t,"Equal",{get:function(){return pn}}),Object.defineProperty(t,"EqualZero",{get:function(){return gn}}),Object.defineProperty(t,"LessThan",{get:function(){return mn}}),Object.defineProperty(t,"Select",{get:function(){return vn}}),Object.defineProperty(t,"IfThenElse",{get:function(){return yn}}),Object.defineProperty(t,"And",{get:function(){return bn}}),Object.defineProperty(t,"Or",{get:function(){return wn}}),Object.defineProperty(t,"Not",{get:function(){return kn}}),Object.defineProperty(t,"Min",{get:function(){return Sn}}),Object.defineProperty(t,"Max",{get:function(){return Tn}}),Object.defineProperty(t,"Modulo",{get:function(){return Cn}}),Object.defineProperty(t,"Pow",{get:function(){return An}}),Object.defineProperty(t,"AudioToGain",{get:function(){return En}}),Object.defineProperty(t,"GainToAudio",{get:function(){return xn}}),Object.defineProperty(t,"Listener",{get:function(){return Mn}}),Object.defineProperty(t,"Panner3D",{get:function(){return On}}),Object.defineProperty(t,"Transport",{get:function(){return Pn}}),Object.defineProperty(t,"now",{get:function(){return Rn}}),Object.defineProperty(t,"immediate",{get:function(){return Ln}}),Object.defineProperty(t,"getContext",{get:function(){return Dn}}),Object.defineProperty(t,"setContext",{get:function(){return zn}}),Object.defineProperty(t,"start",{get:function(){return In}}),Object.defineProperty(t,"loaded",{get:function(){return Fn}}),Object.defineProperty(t,"Buffer",{get:function(){return Vn}}),Object.defineProperty(t,"Draw",{get:function(){return Bn}}),Object.defineProperty(t,"Emitter",{get:function(){return Nn}}),Object.defineProperty(t,"Offline",{get:function(){return Un}}),Object.defineProperty(t,"Player",{get:function(){return Gn}}),Object.defineProperty(t,"Players",{get:function(){return Hn}}),Object.defineProperty(t,"UserMedia",{get:function(){return Wn}}),Object.defineProperty(t,"Listener",{get:function(){return jn}}),Object.defineProperty(t,"Panner3D",{get:function(){return Yn}}),Object.defineProperty(t,"ToneBufferSource",{get:function(){return qn}}),Object.defineProperty(t,"ToneAudioBuffer",{get:function(){return Kn}}),Object.defineProperty(t,"ToneAudioBuffers",{get:function(){return Zn}}),Object.defineProperty(t,"Clock",{get:function(){return Jn}}),Object.defineProperty(t,"Loop",{get:function(){return Qn}}),Object.defineProperty(t,"Part",{get:function(){return Xn}}),Object.defineProperty(t,"Pattern",{get:function(){return e}}),Object.defineProperty(t,"Sequence",{get:function(){return i}}),Object.defineProperty(t,"ToneEvent",{get:function(){return n}}),Object.defineProperty(t,"Frequency",{get:function(){return s}}),Object.defineProperty(t,"Midi",{get:function(){return o}}),Object.defineProperty(t,"Ticks",{get:function(){return r}}),Object.defineProperty(t,"Time",{get:function(){return a}}),Object.defineProperty(t,"TransportTime",{get:function(){return l}}),Object.defineProperty(t,"Abs",{get:function(){return u}}),Object.defineProperty(t,"Add",{get:function(){return h}}),Object.defineProperty(t,"AudioToGain",{get:function(){return c}}),Object.defineProperty(t,"GainToAudio",{get:function(){return d}}),Object.defineProperty(t,"GreaterThan",{get:function(){return f}}),Object.defineProperty(t,"GreaterThanZero",{get:function(){return p}}),Object.defineProperty(t,"IfThenElse",{get:function(){return g}}),Object.defineProperty(t,"Multiply",{get:function(){return m}}),Object.defineProperty(t,"Negate",{get:function(){return v}}),Object.defineProperty(t,"Pow",{get:function(){return y}}),Object.defineProperty(t,"Scale",{get:function(){return b}}),Object.defineProperty(t,"ScaleExp",{get:function(){return w}}),Object.defineProperty(t,"Signal",{get:function(){return k}}),Object.defineProperty(t,"Subtract",{get:function(){return S}}),Object.defineProperty(t,"WaveShaper",{get:function(){return T}}),Object.defineProperty(t,"Zero",{get:function(){return C}}),Object.defineProperty(t,"optionsFromArguments",{get:function(){return A}}),Object.defineProperty(t,"dbToGain",{get:function(){return E}}),Object.defineProperty(t,"gainToDb",{get:function(){return x}}),Object.defineProperty(t,"intervalToFrequencyRatio",{get:function(){return M}}),Object.defineProperty(t,"mtof",{get:function(){return O}}),Object.defineProperty(t,"ftom",{get:function(){return P}}),Object.defineProperty(t,"isFrequency",{get:function(){return R}}),Object.defineProperty(t,"isTransportTime",{get:function(){return L}}),Object.defineProperty(t,"isTicks",{get:function(){return D}}),Object.defineProperty(t,"isNote",{get:function(){return z}}),Object.defineProperty(t,"isRest",{get:function(){return I}}),Object.defineProperty(t,"isPitch",{get:function(){return F}}),Object.defineProperty(t,"isNumber",{get:function(){return V}}),Object.defineProperty(t,"isString",{get:function(){return B}}),Object.defineProperty(t,"isObject",{get:function(){return N}}),Object.defineProperty(t,"isBoolean",{get:function(){return U}}),Object.defineProperty(t,"isFunction",{get:function(){return G}}),Object.defineProperty(t,"isUndef",{get:function(){return H}}),Object.defineProperty(t,"isDefined",{get:function(){return W}}),Object.defineProperty(t,"isArray",{get:function(){return j}}),Object.defineProperty(t,"isAudioBuffer",{get:function(){return Y}}),Object.defineProperty(t,"isAudioWorkletNode",{get:function(){return q}}),Object.defineProperty(t,"isOfflineAudioContext",{get:function(){return K}}),Object.defineProperty(t,"isAudioContext",{get:function(){return Z}}),Object.defineProperty(t,"isDestination",{get:function(){return J}}),Object.defineProperty(t,"isOscillatorType",{get:function(){return Q}}),Object.defineProperty(t,"supported",{get:function(){return X}}),Object.defineProperty(t,"version",{get:function(){return$}}),Object.defineProperty(t,"debug",{get:function(){return tt}}),Object.defineProperty(t,"silenceErrors",{get:function(){return et}}),Object.defineProperty(t,"connect",{get:function(){return it}}),Object.defineProperty(t,"disconnect",{get:function(){return nt}}),Object.defineProperty(t,"getDestination",{get:function(){return st}}),Object.defineProperty(t,"getContext",{get:function(){return ot}}),Object.defineProperty(t,"setContext",{get:function(){return rt}}),Object.defineProperty(t,"setLogger",{get:function(){return at}}),Object.defineProperty(t,"setTransport",{get:function(){return lt}}),Object.defineProperty(t,"start",{get:function(){return ut}}),Object.defineProperty(t,"loaded",{get:function(){return ht}}),Object.defineProperty(t,"Buffer",{get:function(){return ct}}),Object.defineProperty(t,"Draw",{get:function(){return dt}}),Object.defineProperty(t,"Emitter",{get:function(){return ft}}),Object.defineProperty(t,"Offline",{get:function(){return pt}}),Object.defineProperty(t,"Player",{get:function(){return gt}}),Object.defineProperty(t,"Players",{get:function(){return mt}}),Object.defineProperty(t,"UserMedia",{get:function(){return vt}}),Object.defineProperty(t,"Listener",{get:function(){return yt}}),Object.defineProperty(t,"Panner3D",{get:function(){return bt}}),Object.defineProperty(t,"ToneBufferSource",{get:function(){return wt}}),Object.defineProperty(t,"ToneAudioBuffer",{get:function(){return kt}}),Object.defineProperty(t,"ToneAudioBuffers",{get:function(){return St}}),Object.defineProperty(t,"Clock",{get:function(){return Tt}}),Object.defineProperty(t,"Loop",{get:function(){return Ct}}),Object.defineProperty(t,"Part",{get:function(){return At}}),Object.defineProperty(t,"Pattern",{get:function(){return Et}}),Object.defineProperty(t,"Sequence",{get:function(){return xt}}),Object.defineProperty(t,"ToneEvent",{get:function(){return Mt}}),Object.defineProperty(t,"Frequency",{get:function(){return Ot}}),Object.defineProperty(t,"Midi",{get:function(){return Pt}}),Object.defineProperty(t,"Ticks",{get:function(){return Rt}}),Object.defineProperty(t,"Time",{get:function(){return Lt}}),Object.defineProperty(t,"TransportTime",{get:function(){return Dt}}),Object.defineProperty(t,"Abs",{get:function(){return zt}}),Object.defineProperty(t,"Add",{get:function(){return It}}),Object.defineProperty(t,"AudioToGain",{get:function(){return Ft}}),Object.defineProperty(t,"GainToAudio",{get:function(){return Vt}}),Object.defineProperty(t,"GreaterThan",{get:function(){return Bt}}),Object.defineProperty(t,"GreaterThanZero",{get:function(){return Nt}}),Object.defineProperty(t,"IfThenElse",{get:function(){return Ut}}),Object.defineProperty(t,"Multiply",{get:function(){return Gt}}),Object.defineProperty(t,"Negate",{get:function(){return Ht}}),Object.defineProperty(t,"Pow",{get:function(){return Wt}}),Object.defineProperty(t,"Scale",{get:function(){return jt}}),Object.defineProperty(t,"ScaleExp",{get:function(){return Yt}}),Object.defineProperty(t,"Signal",{get:function(){return qt}}),Object.defineProperty(t,"Subtract",{get:function(){return Kt}}),Object.defineProperty(t,"WaveShaper",{get:function(){return Zt}}),Object.defineProperty(t,"Zero",{get:function(){return Jt}}),Object.defineProperty(t,"optionsFromArguments",{get:function(){return Qt}}),Object.defineProperty(t,"dbToGain",{get:function(){return Xt}}),Object.defineProperty(t,"gainToDb",{get:function(){return $t}}),Object.defineProperty(t,"intervalToFrequencyRatio",{get:function(){return te}}),Object.defineProperty(t,"mtof",{get:function(){return ee}}),Object.defineProperty(t,"ftom",{get:function(){return ie}}),Object.defineProperty(t,"isFrequency",{get:function(){return ne}}),Object.defineProperty(t,"isTransportTime",{get:function(){return se}}),Object.defineProperty(t,"isTicks",{get:function(){return oe}}),Object.defineProperty(t,"isNote",{get:function(){return re}}),Object.defineProperty(t,"isRest",{get:function(){return ae}}),Object.defineProperty(t,"isPitch",{get:function(){return le}}),Object.defineProperty(t,"isNumber",{get:function(){return ue}}),Object.defineProperty(t,"isString",{get:function(){return he}}),Object.defineProperty(t,"isObject",{get:function(){return ce}}),Object.defineProperty(t,"isBoolean",{get:function(){return de}}),Object.defineProperty(t,"isFunction",{get:function(){return fe}}),Object.defineProperty(t,"isUndef",{get:function(){return pe}}),Object.defineProperty(t,"isDefined",{get:function(){return ge}}),Object.defineProperty(t,"isArray",{get:function(){return me}}),Object.defineProperty(t,"isAudioBuffer",{get:function(){return ve}}),Object.defineProperty(t,"isAudioWorkletNode",{get:function(){return ye}}),Object.defineProperty(t,"isOfflineAudioContext",{get:function(){return be}}),Object.defineProperty(t,"isAudioContext",{get:function(){return we}}),Object.defineProperty(t,"isDestination",{get:function(){return ke}}),Object.defineProperty(t,"isOscillatorType",{get:function(){return Se}}),Object.defineProperty(t,"supported",{get:function(){return Te}}),Object.defineProperty(t,"version",{get:function(){return Ce}}),Object.defineProperty(t,"debug",{get:function(){return Ae}}),Object.defineProperty(t,"silenceErrors",{get:function(){return Ee}}),Object.defineProperty(t,"connect",{get:function(){return xe}}),Object.defineProperty(t,"disconnect",{get:function(){return Me}}),Object.defineProperty(t,"getDestination",{get:function(){return Oe}}),Object.defineProperty(t,"getContext",{get:function(){return Pe}}),Object.defineProperty(t,"setContext",{get:function(){return Re}}),Object.defineProperty(t,"setLogger",{get:function(){return Le}}),Object.defineProperty(t,"setTransport",{get:function(){return De}}),Object.defineProperty(t,"start",{get:function(){return ze}}),Object.defineProperty(t,"loaded",{get:function(){return Ie}}),Object.defineProperty(t,"Buffer",{get:function(){return Fe}}),Object.defineProperty(t,"Draw",{get:function(){return Ve}}),Object.defineProperty(t,"Emitter",{get:function(){return Be}}),Object.defineProperty(t,"Offline",{get:function(){return Ne}}),Object.defineProperty(t,"Player",{get:function(){return Ue}}),Object.defineProperty(t,"Players",{get:function(){return Ge}}),Object.defineProperty(t,"UserMedia",{get:function(){return He}}),Object.defineProperty(t,"Listener",{get:function(){return We}}),Object.defineProperty(t,"Panner3D",{get:function(){return je}}),Object.defineProperty(t,"ToneBufferSource",{get:function(){return Ye}}),Object.defineProperty(t,"ToneAudioBuffer",{get:function(){return qe}}),Object.defineProperty(t,"ToneAudioBuffers",{get:function(){return Ke}}),Object.defineProperty(t,"Clock",{get:function(){return Ze}}),Object.defineProperty(t,"Loop",{get:function(){return Je}}),Object.defineProperty(t,"Part",{get:function(){return Qe}}),Object.defineProperty(t,"Pattern",{get:function(){return Xe}}),Object.defineProperty(t,"Sequence",{get:function(){return $e}}),Object.defineProperty(t,"ToneEvent",{get:function(){return ti}}),Object.defineProperty(t,"Frequency",{get:function(){return ei}}),Object.defineProperty(t,"Midi",{get:function(){return ii}}),Object.defineProperty(t,"Ticks",{get:function(){return ni}}),Object.defineProperty(t,"Time",{get:function(){return si}}),Object.defineProperty(t,"TransportTime",{get:function(){return oi}}),Object.defineProperty(t,"Abs",{get:function(){return ri}}),Object.defineProperty(t,"Add",{get:function(){return ai}}),Object.defineProperty(t,"AudioToGain",{get:function(){return li}}),Object.defineProperty(t,"GainToAudio",{get:function(){return ui}}),Object.defineProperty(t,"GreaterThan",{get:function(){return hi}}),Object.defineProperty(t,"GreaterThanZero",{get:function(){return ci}}),Object.defineProperty(t,"IfThenElse",{get:function(){return di}}),Object.defineProperty(t,"Multiply",{get:function(){return fi}}),Object.defineProperty(t,"Negate",{get:function(){return pi}}),Object.defineProperty(t,"Pow",{get:function(){return gi}}),Object.defineProperty(t,"Scale",{get:function(){return mi}}),Object.defineProperty(t,"ScaleExp",{get:function(){return vi}}),Object.defineProperty(t,"Signal",{get:function(){return yi}}),Object.defineProperty(t,"Subtract",{get:function(){return bi}}),Object.defineProperty(t,"WaveShaper",{get:function(){return wi}}),Object.defineProperty(t,"Zero",{get:function(){return ki}}),Object.defineProperty(t,"optionsFromArguments",{get:function(){return Si}}),Object.defineProperty(t,"dbToGain",{get:function(){return Ti}}),Object.defineProperty(t,"gainToDb",{get:function(){return Ci}}),Object.defineProperty(t,"intervalToFrequencyRatio",{get:function(){return Ai}}),Object.defineProperty(t,"mtof",{get:function(){return Ei}}),Object.defineProperty(t,"ftom",{get:function(){return xi}}),Object.defineProperty(t,"isFrequency",{get:function(){return Mi}}),Object.defineProperty(t,"isTransportTime",{get:function(){return Oi}}),Object.defineProperty(t,"isTicks",{get:function(){return Pi}}),Object.defineProperty(t,"isNote",{get:function(){return Ri}}),Object.defineProperty(t,"isRest",{get:function(){return Li}}),Object.defineProperty(t,"isPitch",{get:function(){return Di}}),Object.defineProperty(t,"isNumber",{get:function(){return zi}}),Object.defineProperty(t,"isString",{get:function(){return Ii}}),Object.defineProperty(t,"isObject",{get:function(){return Fi}}),Object.defineProperty(t,"isBoolean",{get:function(){return Vi}}),Object.defineProperty(t,"isFunction",{get:function(){return Bi}}),Object.defineProperty(t,"isUndef",{get:function(){return Ni}}),Object.defineProperty(t,"isDefined",{get:function(){return Ui}}),Object.defineProperty(t,"isArray",{get:function(){return Gi}}),Object.defineProperty(t,"isAudioBuffer",{get:function(){return Hi}}),Object.defineProperty(t,"isAudioWorkletNode",{get:function(){return Wi}}),Object.defineProperty(t,"isOfflineAudioContext",{get:function(){return ji}}),Object.defineProperty(t,"isAudioContext",{get:function(){return Yi}}),Object.defineProperty(t,"isDestination",{get:function(){return qi}}),Object.defineProperty(t,"isOscillatorType",{get:function(){return Ki}}),Object.defineProperty(t,"supported",{get:function(){return Zi}}),Object.defineProperty(t,"version",{get:function(){return Ji}}),Object.defineProperty(t,"debug",{get:function(){return Qi}}),Object.defineProperty(t,"silenceErrors",{get:function(){return Xi}}),Object.defineProperty(t,"connect",{get:function(){return $i}}),Object.defineProperty(t,"disconnect",{get:function(){return tn}}),Object.defineProperty(t,"getDestination",{get:function(){return en}}),Object.defineProperty(t,"getContext",{get:function(){return nn}}),Object.defineProperty(t,"setContext",{get:function(){return sn}}),Object.defineProperty(t,"setLogger",{get:function(){return on}}),Object.defineProperty(t,"setTransport",{get:function(){return rn}}),Object.defineProperty(t,"start",{get:function(){return an}}),Object.defineProperty(t,"loaded",{get:function(){return ln}}),Object.defineProperty(t,"Buffer",{get:function(){return un}}),Object.defineProperty(t,"Draw",{get:function(){return hn}}),Object.defineProperty(t,"Emitter",{get:function(){return cn}}),Object.defineProperty(t,"Offline",{get:function(){return dn}}),Object.defineProperty(t,"Player",{get:function(){return fn}}),Object.defineProperty(t,"Players",{get:function(){return pn}}),Object.defineProperty(t,"UserMedia",{get:function(){return gn}}),Object.defineProperty(t,"Listener",{get:function(){return mn}}),Object.defineProperty(t,"Panner3D",{get:function(){return vn}}),Object.defineProperty(t,"ToneBufferSource",{get:function(){return yn}}),Object.defineProperty(t,"ToneAudioBuffer",{get:function(){return bn}}),Object.defineProperty(t,"ToneAudioBuffers",{get:function(){return wn}}),Object.defineProperty(t,"Clock",{get:function(){return kn}}),Object.defineProperty(t,"Loop",{get:function(){return Sn}}),Object.defineProperty(t,"Part",{get:function(){return Tn}}),Object.defineProperty(t,"Pattern",{get:function(){return Cn}}),Object.defineProperty(t,"Sequence",{get:function(){return An}}),Object.defineProperty(t,"ToneEvent",{get:function(){return En}}),Object.defineProperty(t,"Frequency",{get:function(){return xn}}),Object.defineProperty(t,"Midi",{get:function(){return Mn}}),Object.defineProperty(t,"Ticks",{get:function(){return On}}),Object.defineProperty(t,"Time",{get:function(){return Pn}}),Object.defineProperty(t,"TransportTime",{get:function(){return Rn}}),Object.defineProperty(t,"Abs",{get:function(){return Ln}}),Object.defineProperty(t,"Add",{get:function(){return Dn}}),Object.defineProperty(t,"AudioToGain",{get:function(){return zn}}),Object.defineProperty(t,"GainToAudio",{get:function(){return In}}),Object.defineProperty(t,"GreaterThan",{get:function(){return Fn}}),Object.defineProperty(t,"GreaterThanZero",{get:function(){return Vn}}),Object.defineProperty(t,"IfThenElse",{get:function(){return Bn}}),Object.defineProperty(t,"Multiply",{get:function(){return Nn}}),Object.defineProperty(t,"Negate",{get:function(){return Un}}),Object.defineProperty(t,"Pow",{get:function(){return Gn}}),Object.defineProperty(t,"Scale",{get:function(){return Hn}}),Object.defineProperty(t,"ScaleExp",{get:function(){return Wn}}),Object.defineProperty(t,"Signal",{get:function(){return jn}}),Object.defineProperty(t,"Subtract",{get:function(){return Yn}}),Object.defineProperty(t,"WaveShaper",{get:function(){return qn}}),Object.defineProperty(t,"Zero",{get:function(){return Kn}}),Object.defineProperty(t,"optionsFromArguments",{get:function(){return Zn}}),Object.defineProperty(t,"dbToGain",{get:function(){return Jn}}),Object.defineProperty(t,"gainToDb",{get:function(){return Qn}}),Object.defineProperty(t,"intervalToFrequencyRatio",{get:function(){return Xn}})}))
    </script>
    <script>
        // App Logic
        document.addEventListener('DOMContentLoaded', () => {
            // --- DOM Elements ---
            const navTimerBtn = document.getElementById('nav-timer');
            const navAdminBtn = document.getElementById('nav-admin');
            const navHelpBtn = document.getElementById('nav-help');
            const timerView = document.getElementById('timer-view');
            const adminView = document.getElementById('admin-view');
            const helpView = document.getElementById('help-view');

            // Timer View Elements
            const liveTimerDisplay = document.getElementById('live-timer-display');
            const liveStageName = document.getElementById('live-stage-name');
            const liveTotalProgress = document.getElementById('live-total-progress');
            const liveStartBtn = document.getElementById('live-start-btn');
            const liveResetBtn = document.getElementById('live-reset-btn');
            const liveStagesListContainer = document.getElementById('live-stages-list');
            const liveDisciplineName = document.getElementById('live-discipline-name');

            // Admin View Elements
            const adminDisciplineSelect = document.getElementById('admin-discipline-select');
            const adminLoadBtn = document.getElementById('admin-load-btn');
            const adminExportSingleBtn = document.getElementById('admin-export-single-btn');
            const adminDeleteBtn = document.getElementById('admin-delete-btn');
            const editingDisciplineName = document.getElementById('editing-discipline-name');
            const adminStagesListContainer = document.getElementById('admin-stages-list');
            const addStageBtn = document.getElementById('add-stage-btn');
            const saveDisciplineBtn = document.getElementById('save-discipline-btn');
            const disciplineNameInput = document.getElementById('discipline-name-input');
            const exportAllBtn = document.getElementById('export-all-btn');
            const importBtn = document.getElementById('import-btn');
            
            // New Stage Form
            const newStageName = document.getElementById('new-stage-name');
            const newStagePrepTime = document.getElementById('new-stage-prep-time');
            const newStageDuration = document.getElementById('new-stage-duration');
            const newStageReps = document.getElementById('new-stage-reps');
            const newStagePause = document.getElementById('new-stage-pause');
            const newStageSoundStart = document.getElementById('new-stage-sound-start');
            const newStageSoundEnd = document.getElementById('new-stage-sound-end');
            const newStagePauseAfter = document.getElementById('new-stage-pause-after');

            // Edit Modal
            const editModal = document.getElementById('edit-modal');
            const editStageIndexInput = document.getElementById('edit-stage-index');
            const editStageNameInput = document.getElementById('edit-stage-name');
            const editStagePrepTimeInput = document.getElementById('edit-stage-prep-time');
            const editStageDurationInput = document.getElementById('edit-stage-duration');
            const editStageRepsInput = document.getElementById('edit-stage-reps');
            const editStagePauseInput = document.getElementById('edit-stage-pause');
            const editStageSoundStartInput = document.getElementById('edit-stage-sound-start');
            const editStageSoundEndInput = document.getElementById('edit-stage-sound-end');
            const editStagePauseAfterInput = document.getElementById('edit-stage-pause-after');
            const saveEditBtn = document.getElementById('save-edit-btn');
            const cancelEditBtn = document.getElementById('cancel-edit-btn');
            
            // Import Modal
            const importModal = document.getElementById('import-modal');
            const importTextArea = document.getElementById('import-text-area');
            const processImportBtn = document.getElementById('process-import-btn');
            const cancelImportBtn = document.getElementById('cancel-import-btn');


            // --- App State ---
            let disciplines = {};
            let editorStages = []; // Stages for the ADMIN editor
            let liveStages = []; // Stages for the TIMER view
            let activeDisciplineName = ''; // Name of the discipline in the TIMER view
            
            let currentStageIndex = 0;
            let currentRepetition = 1;
            let timeLeft = 0;
            let timerInterval = null;
            let timerState = 'idle'; // idle, prep, running, paused, rep_pause, finished

            let insertionIndex = -1;
            let audioInitialized = false;

            // --- View Management ---
            function switchView(viewName) {
                timerView.style.display = 'none';
                adminView.style.display = 'none';
                helpView.style.display = 'none';
                navTimerBtn.classList.remove('active');
                navAdminBtn.classList.remove('active');
                navHelpBtn.classList.remove('active');

                const views = {
                    timer: { view: timerView, btn: navTimerBtn },
                    admin: { view: adminView, btn: navAdminBtn },
                    help: { view: helpView, btn: navHelpBtn }
                };

                if (views[viewName]) {
                    views[viewName].view.style.display = 'flex';
                    views[viewName].btn.classList.add('active');
                }
            }
            
            // --- Audio Context & Synth ---
            const initAudio = () => {
                if (audioInitialized || typeof Tone === 'undefined') return;
                if (Tone.context.state !== 'running') {
                    Tone.start().then(() => {
                        console.log("AudioContext started successfully.");
                        audioInitialized = true;
                    }).catch(e => console.error("Tone.js start failed:", e));
                } else {
                    audioInitialized = true;
                }
            };

            // Add a one-time listener for the first user interaction
            function oneTimeAudioInit() {
                initAudio();
                document.body.removeEventListener('click', oneTimeAudioInit);
                document.body.removeEventListener('touchend', oneTimeAudioInit);
            }
            document.body.addEventListener('click', oneTimeAudioInit);
            document.body.addEventListener('touchend', oneTimeAudioInit);
            
            navTimerBtn.addEventListener('click', () => switchView('timer'));
            navAdminBtn.addEventListener('click', () => switchView('admin'));
            navHelpBtn.addEventListener('click', () => switchView('help'));
            
            const playSound = () => {
                if (!audioInitialized) {
                    console.warn("Audio not initialized. User interaction needed.");
                    return;
                }
                try {
                    const soundSynth = new Tone.Synth({
                        oscillator: { type: "fatsquare", count: 3, spread: 40 },
                        envelope: { attack: 0.01, decay: 0.1, sustain: 0.5, release: 0.2 }
                    }).toDestination();
                    soundSynth.triggerAttackRelease("A5", "0.5"); 
                    setTimeout(() => { if(soundSynth) soundSynth.dispose(); }, 700);
                } catch (e) {
                    console.error("Failed to play sound:", e);
                }
            };

            // --- Core Timer Logic ---
            const tick = () => {
                timeLeft--;
                updateTimerDisplay();

                if (timeLeft > 0) return;
                
                clearInterval(timerInterval);
                timerInterval = null;

                const stage = liveStages[currentStageIndex];
                
                if (timerState === 'prep') {
                    if (stage.soundAtStart) playSound();
                } else { // 'running' or 'rep_pause'
                    if (stage.soundAtEnd) playSound();
                }
                
                setTimeout(handlePhaseEnd, 100);
            };

            const handlePhaseEnd = () => {
                const stage = liveStages[currentStageIndex];

                if (timerState === 'prep') {
                    startMainDuration();
                    return;
                }

                if (timerState === 'rep_pause') {
                    startNextRepetition();
                    return;
                }

                if (currentRepetition < stage.repetitions) {
                    currentRepetition++;
                    startInterRepPauseOrNextRep();
                } else {
                    if (stage.pauseAfter && currentStageIndex < liveStages.length - 1) {
                        pauseForNextStage();
                    } else {
                        advanceToNextStage();
                    }
                }
            };

            const startMainDuration = () => {
                const stage = liveStages[currentStageIndex];
                timerState = 'running';
                timeLeft = stage.duration;
                updateUiForStateChange();
                if (timeLeft > 0) {
                    timerInterval = setInterval(tick, 1000);
                } else {
                    if (stage.soundAtEnd) playSound();
                    setTimeout(handlePhaseEnd, 100);
                }
            };
            
            const startNextRepetition = () => {
                const stage = liveStages[currentStageIndex];
                timerState = 'running';
                timeLeft = stage.duration;
                if (stage.soundAtStart) playSound();
                updateUiForStateChange();
                if (timeLeft > 0) {
                    timerInterval = setInterval(tick, 1000);
                } else {
                    if (stage.soundAtEnd) playSound();
                    setTimeout(handlePhaseEnd, 100);
                }
            };

            const startInterRepPauseOrNextRep = () => {
                const stage = liveStages[currentStageIndex];
                if (stage.pauseDuration > 0) {
                    timerState = 'rep_pause';
                    timeLeft = stage.pauseDuration;
                    updateUiForStateChange();
                    timerInterval = setInterval(tick, 1000);
                } else {
                    startNextRepetition();
                }
            };

            const advanceToNextStage = () => {
                currentStageIndex++;
                currentRepetition = 1;
                if (currentStageIndex >= liveStages.length) {
                    finishSequence();
                } else {
                    prepareStage(currentStageIndex);
                }
            };
            
            const pauseForNextStage = () => {
                timerState = 'paused';
                updateUiForStateChange();
            };

            const startTimer = () => {
                initAudio();
                if (liveStages.length === 0) {
                    alert("Bitte im Admin-Bereich eine Disziplin laden.");
                    return;
                }

                if (timerState === 'paused') {
                    currentStageIndex++;
                    prepareStage(currentStageIndex);
                    return;
                }
                
                if (timerState === 'idle' || timerState === 'finished') {
                    if (timerState === 'finished') {
                        currentStageIndex = 0; // Reset to start if finished
                    }
                    loadStage();
                }
            };

            const resetCurrentDiscipline = () => {
                clearInterval(timerInterval);
                timerInterval = null;
                if (liveStages.length > 0) {
                    prepareStage(0);
                } else {
                    timerState = 'idle';
                    updateUiForStateChange();
                }
            };
            
            const finishSequence = () => {
                timerState = 'finished';
                updateUiForStateChange();
            };
            
            const prepareStage = (index) => {
                currentStageIndex = index;
                currentRepetition = 1;
                timerState = 'idle';
                updateUiForStateChange();
            };

            const loadStage = () => {
                const stage = liveStages[currentStageIndex];
                currentRepetition = 1;

                if (stage.prepTime > 0) {
                    timerState = 'prep';
                    timeLeft = stage.prepTime;
                } else {
                    timerState = 'running';
                    timeLeft = stage.duration;
                    if (stage.soundAtStart) playSound();
                }
                
                updateUiForStateChange();
                
                if (timeLeft > 0) {
                    timerInterval = setInterval(tick, 1000);
                } else {
                    if (timerState === 'prep' && stage.soundAtStart) playSound();
                    if (timerState === 'running' && stage.soundAtEnd) playSound();
                    setTimeout(handlePhaseEnd, 100);
                }
            };
            
            // --- UI Update Logic ---
            const formatTime = (seconds) => {
                const s = Math.max(0, seconds);
                return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
            }
            const updateTimerDisplay = () => liveTimerDisplay.textContent = formatTime(timeLeft);

            const updateUiForStateChange = () => {
                const stage = liveStages[currentStageIndex];
                
                liveStartBtn.classList.add('hidden');
                liveResetBtn.classList.add('hidden');

                if (!liveStages || liveStages.length === 0) {
                    liveStageName.textContent = 'Disziplin laden...';
                    liveTotalProgress.textContent = 'Bitte im Admin-Bereich eine Disziplin laden.';
                    liveDisciplineName.textContent = '-';
                    liveTimerDisplay.textContent = '00:00';
                    return;
                }

                switch(timerState) {
                    case 'idle':
                        liveStageName.textContent = stage.name;
                        liveTimerDisplay.textContent = formatTime(stage.prepTime > 0 ? stage.prepTime : stage.duration);
                        liveTotalProgress.textContent = `Bereit für Phase ${currentStageIndex + 1} von ${liveStages.length}. Zum Starten 'Start' drücken.`;
                        
                        liveStartBtn.classList.remove('hidden');
                        liveStartBtn.textContent = 'Start';
                        liveStartBtn.className = 'w-full max-w-xs bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors';
                        
                        if (currentStageIndex > 0) {
                            liveResetBtn.classList.remove('hidden');
                        }
                        break;

                    case 'prep':
                    case 'running':
                    case 'rep_pause':
                        liveResetBtn.classList.remove('hidden');
                        if (timerState === 'prep') {
                            liveStageName.textContent = 'Vorbereitung';
                        } else if (timerState === 'running') {
                            const repText = stage.repetitions > 1 ? ` (${currentRepetition}/${stage.repetitions})` : '';
                            liveStageName.textContent = stage.name + repText;
                        } else {
                            liveStageName.textContent = 'Pause';
                        }
                        liveTotalProgress.textContent = `Phase ${currentStageIndex + 1} von ${liveStages.length} läuft...`;
                        break;

                    case 'paused':
                        liveStageName.textContent = `Bereit für nächste Phase`;
                        liveTotalProgress.textContent = `Phase ${currentStageIndex + 1} von ${liveStages.length} beendet.`;
                        liveTimerDisplay.textContent = formatTime(0);

                        liveStartBtn.classList.remove('hidden');
                        liveStartBtn.textContent = 'Weiter';
                        liveStartBtn.className = 'w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors';
                        
                        liveResetBtn.classList.remove('hidden');
                        break;

                    case 'finished':
                        liveStageName.textContent = 'Fertig!';
                        liveTotalProgress.textContent = `Ablauf beendet.`;
                        liveTimerDisplay.textContent = formatTime(0);
                        
                        liveResetBtn.classList.remove('hidden');
                        break;
                }
                updateTimerDisplay();
            };
            
            const renderLiveStagesList = () => {
                liveStagesListContainer.innerHTML = '';
                if (!liveStages || liveStages.length === 0) {
                    liveStagesListContainer.innerHTML = `<p class="text-gray-500 text-center italic">Kein Ablauf geladen.</p>`;
                    return;
                }
                liveStages.forEach((stage, index) => {
                    const prepText = stage.prepTime > 0 ? `${stage.prepTime}s Vorl. + ` : '';
                    const repText = stage.repetitions > 1 ? ` &times; ${stage.repetitions}` : '';
                    const pauseText = stage.pauseDuration > 0 ? ` (+${stage.pauseDuration}s Pause)` : '';
                    let soundText = '';
                    if (stage.soundAtStart && stage.soundAtEnd) soundText = 'Start/End-Ton';
                    else if (stage.soundAtStart) soundText = 'Start-Ton';
                    else if (stage.soundAtEnd) soundText = 'End-Ton';
                    const pauseAfterText = stage.pauseAfter ? ' | Pause nachher' : '';

                    const stageEl = document.createElement('div');
                    stageEl.className = 'bg-gray-700 p-3 rounded-lg flex items-center justify-between';
                    
                    stageEl.innerHTML = `
                        <div class="flex items-center flex-grow min-w-0">
                            <span class="font-bold text-gray-400 mr-4">${index + 1}.</span>
                            <div class="min-w-0">
                                <p class="text-white font-semibold stage-name-display break-word">${stage.name}</p>
                                <p class="text-xs text-gray-300 break-word">${prepText}${stage.duration}s ${repText}${pauseText} ${soundText}${pauseAfterText}</p>
                            </div>
                        </div>
                        <button data-action="start-from" data-index="${index}" title="Von hier starten" class="p-2 text-green-400 hover:bg-green-700 hover:text-white rounded-md flex-shrink-0 transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
                        </button>
                    `;
                    liveStagesListContainer.appendChild(stageEl);
                });
            };

            const renderAdminStagesList = () => {
                adminStagesListContainer.innerHTML = '';
                
                const createInsertButton = (index) => {
                    const btn = document.createElement('button');
                    btn.className = 'insert-btn w-full p-1.5 bg-gray-700 hover:bg-amber-500 text-gray-400 hover:text-gray-900 rounded-md transition-colors text-xs font-bold';
                    btn.textContent = 'HIER EINFÜGEN';
                    btn.dataset.index = index;
                    btn.addEventListener('click', () => {
                        insertionIndex = index;
                        document.querySelectorAll('.insert-btn').forEach(b => b.classList.remove('bg-amber-500', 'text-gray-900'));
                        btn.classList.add('bg-amber-500', 'text-gray-900');
                    });
                    adminStagesListContainer.appendChild(btn);
                };

                createInsertButton(0);

                if (editorStages.length === 0) {
                     document.querySelector(`.insert-btn[data-index='0']`)?.classList.add('bg-amber-500', 'text-gray-900');
                     insertionIndex = 0;
                } else {
                    editorStages.forEach((stage, index) => {
                        const prepText = stage.prepTime > 0 ? `${stage.prepTime}s Vorl. + ` : '';
                        const repText = stage.repetitions > 1 ? ` &times; ${stage.repetitions}` : '';
                        const pauseText = stage.pauseDuration > 0 ? ` (+${stage.pauseDuration}s Pause)` : '';
                        let soundText = '';
                        if (stage.soundAtStart && stage.soundAtEnd) soundText = 'Start/End-Ton';
                        else if (stage.soundAtStart) soundText = 'Start-Ton';
                        else if (stage.soundAtEnd) soundText = 'End-Ton';
                        const pauseAfterText = stage.pauseAfter ? ' | Pause nachher' : '';

                        const stageEl = document.createElement('div');
                        stageEl.className = 'bg-gray-700 p-2 rounded-lg flex items-center justify-between';
                        stageEl.dataset.index = index;
                        
                        stageEl.innerHTML = `
                            <div class="flex items-center flex-grow cursor-pointer min-w-0" data-action="edit">
                                <span class="font-bold text-gray-400 mr-3">${index + 1}.</span>
                                <div class="flex-grow min-w-0">
                                    <p class="text-white font-semibold stage-name-display break-word">${stage.name}</p>
                                    <p class="text-xs text-gray-300 break-word">${prepText}${stage.duration}s ${repText}${pauseText} ${soundText}${pauseAfterText}</p>
                                </div>
                            </div>
                            <div class="stage-controls flex items-center flex-shrink-0 ml-2">
                                 <button data-action="duplicate" title="Duplizieren" class="p-1 hover:bg-gray-600 rounded-md"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>
                                 <button data-action="move-up" title="Nach oben" ${index === 0 ? 'disabled' : ''} class="p-1 hover:bg-gray-600 rounded-md"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg></button>
                                 <button data-action="move-down" title="Nach unten" ${index === editorStages.length - 1 ? 'disabled' : ''} class="p-1 hover:bg-gray-600 rounded-md"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                 <button data-action="remove" title="Löschen" class="p-1 text-red-500 hover:bg-red-700 hover:text-white rounded-md ml-1"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></button>
                            </div>
                        `;
                        
                        stageEl.addEventListener('click', (e) => {
                            const action = e.target.closest('button')?.dataset.action || e.target.closest('[data-action="edit"]')?.dataset.action;
                            if (!action) return;

                            switch (action) {
                                case 'edit': openEditModal(index); break;
                                case 'remove': removeStage(index); break;
                                case 'move-up': moveStage(index, -1); break;
                                case 'move-down': moveStage(index, 1); break;
                                case 'duplicate': duplicateStage(index); break;
                            }
                        });

                        adminStagesListContainer.appendChild(stageEl);
                        createInsertButton(index + 1);
                    });
                }
                
                if(insertionIndex === -1 || insertionIndex > editorStages.length) {
                     insertionIndex = editorStages.length;
                }
                document.querySelector(`.insert-btn[data-index='${insertionIndex}']`)?.classList.add('bg-amber-500', 'text-gray-900');
            };

            // --- Admin Logic ---
            const addStage = () => {
                const duration = parseInt(newStageDuration.value);
                if (!duration || isNaN(duration) || duration < 1) { alert("Bitte geben Sie eine gültige Dauer (mind. 1s) an."); return; }
                
                const newStage = { 
                    name: newStageName.value.trim() || 'Unbenannte Phase',
                    prepTime: parseInt(newStagePrepTime.value) || 0,
                    duration: duration,
                    repetitions: parseInt(newStageReps.value) || 1,
                    pauseDuration: parseInt(newStagePause.value) || 0,
                    soundAtStart: newStageSoundStart.checked, 
                    soundAtEnd: newStageSoundEnd.checked,
                    pauseAfter: newStagePauseAfter.checked
                };

                const finalInsertionIndex = (insertionIndex === -1) ? editorStages.length : insertionIndex;
                editorStages.splice(finalInsertionIndex, 0, newStage);
                
                insertionIndex = finalInsertionIndex + 1;
                renderAdminStagesList();

                // Clear form
                newStageName.value = '';
                newStagePrepTime.value = '';
                newStageDuration.value = '';
                newStageReps.value = '';
                newStagePause.value = '';
                newStageSoundStart.checked = false;
                newStageSoundEnd.checked = true;
                newStagePauseAfter.checked = false;
            };

            const removeStage = (index) => {
                editorStages.splice(index, 1);
                renderAdminStagesList();
            };
            
            const moveStage = (index, direction) => {
                const newIndex = index + direction;
                if (newIndex < 0 || newIndex >= editorStages.length) return;
                [editorStages[index], editorStages[newIndex]] = [editorStages[newIndex], editorStages[index]];
                renderAdminStagesList();
            };

            const duplicateStage = (index) => {
                const stageToDuplicate = JSON.parse(JSON.stringify(editorStages[index]));
                editorStages.splice(index + 1, 0, stageToDuplicate);
                insertionIndex = index + 2;
                renderAdminStagesList();
            };

            const openEditModal = (index) => {
                const stage = editorStages[index];
                editStageIndexInput.value = index;
                editStageNameInput.value = stage.name;
                editStagePrepTimeInput.value = stage.prepTime || 0;
                editStageDurationInput.value = stage.duration;
                editStageRepsInput.value = stage.repetitions;
                editStagePauseInput.value = stage.pauseDuration || 0;
                editStageSoundStartInput.checked = stage.soundAtStart;
                editStageSoundEndInput.checked = stage.soundAtEnd;
                editStagePauseAfterInput.checked = stage.pauseAfter;
                editModal.classList.remove('hidden');
            };

            const closeEditModal = () => editModal.classList.add('hidden');

            const handleUpdateStage = () => {
                const index = parseInt(editStageIndexInput.value);
                const duration = parseInt(editStageDurationInput.value);
                if (!duration || isNaN(duration) || duration < 1) { alert("Bitte geben Sie eine gültige Dauer (mind. 1s) an."); return; }
                
                editorStages[index] = {
                    name: editStageNameInput.value.trim() || 'Unbenannte Phase',
                    prepTime: parseInt(editStagePrepTimeInput.value) || 0,
                    duration: duration,
                    repetitions: parseInt(editStageRepsInput.value) || 1,
                    pauseDuration: parseInt(editStagePauseInput.value) || 0,
                    soundAtStart: editStageSoundStartInput.checked,
                    soundAtEnd: editStageSoundEndInput.checked,
                    pauseAfter: editStagePauseAfterInput.checked
                };
                renderAdminStagesList();
                closeEditModal();
            };

    // --- Data Management ---
    const renderDisciplineSelector = () => {
        const currentAdminSelection = adminDisciplineSelect.value;
        adminDisciplineSelect.innerHTML = '';
        const names = Object.keys(disciplines).sort((a, b) => a.localeCompare(b));
        
        if (names.length === 0) {
            adminDisciplineSelect.innerHTML = `<option>Keine Disziplinen</option>`;
            adminLoadBtn.disabled = true;
            adminDeleteBtn.disabled = true;
            return;
        }

        names.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            adminDisciplineSelect.appendChild(option);
        });

        if (disciplines[currentAdminSelection]) adminDisciplineSelect.value = currentAdminSelection;
        adminLoadBtn.disabled = false;
        adminDeleteBtn.disabled = false;
    };
    
    const saveDisciplinesToStorage = () => {
        try {
            localStorage.setItem('bdmpTimerDisciplines', JSON.stringify(disciplines));
            localStorage.setItem('bdmpTimerActiveDiscipline', activeDisciplineName);
        } catch (e) {
            console.error("Failed to save to localStorage", e);
            alert("Fehler beim Speichern der Daten. Der Speicher könnte voll sein.");
        }
    };

    const loadDisciplinesFromStorage = () => {
        const stored = localStorage.getItem('bdmpTimerDisciplines');
        if (stored) {
            try {
                disciplines = JSON.parse(stored);
            } catch {
                disciplines = {}; // Fallback if data is corrupted
            }
        } else {
            // If no disciplines are in storage, load the full default set.
            disciplines = {
              "NPA A-B-OS Standard": [
                { "name": "Stage 1 - 25 Meter\n6 Schuss in 15 Sekunden auf die linke Scheibe.\nIst jemand nicht fertig? - ACHTUNG!", "prepTime": 3, "duration": 15, "repetitions": 1, "pauseDuration": 0, "soundAtStart": true, "soundAtEnd": true, "pauseAfter": true },
                { "name": "Stage 2 - 20 Meter\n6 Schuss in 10 Sekunden davon 3 auf jede Scheibe.\nIst jemand nicht fertig? - ACHTUNG!", "prepTime": 3, "duration": 10, "repetitions": 1, "pauseDuration": 0, "soundAtStart": true, "soundAtEnd": true, "pauseAfter": true },
                { "name": "Stage 3 - 15 Meter\n2 Schuss in 3 Sekunden mit 3 Wiederholungen auf die rechte Scheibe.\nIst jemand nicht fertig? - ACHTUNG!", "prepTime": 3, "duration": 3, "repetitions": 3, "pauseDuration": 7, "soundAtStart": true, "soundAtEnd": true, "pauseAfter": true },
                { "name": "Stage 4 - 10 Meter\n6 Schuss in 6 Sekunden davon 3 auf jede Scheibe.\nIst jemand nicht fertig? - ACHTUNG!", "prepTime": 3, "duration": 6, "repetitions": 1, "pauseDuration": 0, "soundAtStart": true, "soundAtEnd": true, "pauseAfter": false }
              ],
              "Police Pistol 2 (PP2)": [
                { "name": "Station A: 10m\n2x 6 Schuss in 5 Sekunden", "prepTime": 5, "duration": 5, "repetitions": 2, "pauseDuration": 10, "soundAtStart": true, "soundAtEnd": true, "pauseAfter": true },
                { "name": "Station B: 50m\n24 Schuss in 3 Minuten", "prepTime": 5, "duration": 180, "repetitions": 1, "pauseDuration": 0, "soundAtStart": true, "soundAtEnd": true, "pauseAfter": true },
                { "name": "Station C: 25m\n24 Schuss in 2 Minuten", "prepTime": 5, "duration": 120, "repetitions": 1, "pauseDuration": 0, "soundAtStart": true, "soundAtEnd": true, "pauseAfter": false }
              ],
            };
            saveDisciplinesToStorage();
        }
        
        const lastActive = localStorage.getItem('bdmpTimerActiveDiscipline');
        if (lastActive && disciplines[lastActive]) {
            loadDisciplineForTimer(lastActive, false); // Don't switch view on initial load
        }

        renderDisciplineSelector();
    };
    
    function handleSaveDiscipline() {
        const name = disciplineNameInput.value.trim();
        if (!name) { alert("Bitte geben Sie einen Namen an."); return; }
        if (editorStages.length === 0) { alert("Ablauf ist leer und kann nicht gespeichert werden."); return; }
        
        if (disciplines[name] && disciplineNameInput.value !== adminDisciplineSelect.value) {
            if (!confirm(`Die Disziplin "${name}" existiert bereits. Möchten Sie sie überschreiben?`)) {
                return;
            }
        }

        disciplines[name] = JSON.parse(JSON.stringify(editorStages));
        saveDisciplinesToStorage();
        renderDisciplineSelector();
        adminDisciplineSelect.value = name;
        alert(`Disziplin "${name}" wurde gespeichert!`);
    }
    
    function handleDeleteDiscipline() {
        const name = adminDisciplineSelect.value;
        if (disciplines[name] && confirm(`Disziplin "${name}" wirklich löschen? Dies kann nicht rückgängig gemacht werden.`)) {
            delete disciplines[name];
            
            if (activeDisciplineName === name) {
                activeDisciplineName = '';
                liveStages = [];
                resetCurrentDiscipline();
                renderLiveStagesList();
                liveDisciplineName.textContent = '-';
            }
            
            if (disciplineNameInput.value === name) {
                editorStages = [];
                disciplineNameInput.value = '';
                editingDisciplineName.textContent = 'Neue Disziplin';
                renderAdminStagesList();
            }

            saveDisciplinesToStorage();
            renderDisciplineSelector();
        }
    }

    function loadDisciplineForEditor(name) {
        if (disciplines[name]) {
            editorStages = JSON.parse(JSON.stringify(disciplines[name]));
            disciplineNameInput.value = name;
            editingDisciplineName.textContent = name;
            insertionIndex = editorStages.length;
            renderAdminStagesList();
        }
    }

    function loadDisciplineForTimer(name, doSwitchView = true) {
        if (disciplines[name]) {
            liveStages = JSON.parse(JSON.stringify(disciplines[name]));
            activeDisciplineName = name;
            liveDisciplineName.textContent = name;
            
            saveDisciplinesToStorage();
            renderLiveStagesList();
            resetCurrentDiscipline();
            
            if (doSwitchView) {
                switchView('timer');
            }
        } else {
            alert(`Disziplin "${name}" konnte nicht gefunden werden.`);
        }
    }
    
    // --- Import / Export via Clipboard ---
    function copyToClipboard(text, successMessage) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; 
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            alert(successMessage);
        } catch (err) {
            console.error('Fehler beim Kopieren in die Zwischenablage: ', err);
            alert('Kopieren fehlgeschlagen. Bitte manuell kopieren.');
        }
        document.body.removeChild(textArea);
    }

    function handleExportAll() {
        if (Object.keys(disciplines).length === 0) {
            alert("Keine Disziplinen zum Kopieren vorhanden.");
            return;
        }
        const dataStr = JSON.stringify(disciplines, null, 2);
        copyToClipboard(dataStr, "Die gesamte Sammlung wurde in die Zwischenablage kopiert.");
    }
    
    function handleExportSingle() {
        const name = adminDisciplineSelect.value;
        if (!disciplines[name]) {
            alert("Bitte wählen Sie eine gültige Disziplin zum Kopieren aus.");
            return;
        }
        const singleDiscipline = { [name]: disciplines[name] };
        const dataStr = JSON.stringify(singleDiscipline, null, 2);
        copyToClipboard(dataStr, `Disziplin "${name}" wurde in die Zwischenablage kopiert.`);
    }

    function handleImport() {
        importTextArea.value = '';
        importModal.classList.remove('hidden');
    }

    function processImportFromText() {
        const importedData = importTextArea.value;
        if (!importedData.trim()) {
            alert("Das Textfeld ist leer. Bitte fügen Sie Daten ein.");
            return;
        }
        try {
            const importedDisciplines = JSON.parse(importedData);
            let importedCount = 0;
            let overwrittenCount = 0;
            
            for (const name in importedDisciplines) {
                if (Object.prototype.hasOwnProperty.call(importedDisciplines, name) && Array.isArray(importedDisciplines[name])) {
                    if (disciplines[name]) {
                        if (confirm(`Disziplin "${name}" existiert bereits. Möchten Sie sie mit der importierten Version überschreiben?`)) {
                            disciplines[name] = importedDisciplines[name];
                            overwrittenCount++;
                        }
                    } else {
                        disciplines[name] = importedDisciplines[name];
                        importedCount++;
                    }
                }
            }

            if (importedCount > 0 || overwrittenCount > 0) {
                saveDisciplinesToStorage();
                renderDisciplineSelector();
                loadDisciplineForEditor(adminDisciplineSelect.value);
                alert(`${importedCount} Disziplin(en) neu importiert, ${overwrittenCount} überschrieben.`);
            } else {
                alert("Keine neuen oder zu überschreibenden Disziplinen in den Daten gefunden.");
            }
        } catch (e) {
            alert("Fehler beim Verarbeiten der Daten. Stellen Sie sicher, dass der Text das korrekte Format hat.");
            console.error(e);
        } finally {
            importModal.classList.add('hidden');
        }
    }

    // --- Event Listeners ---
    liveStartBtn.addEventListener('click', startTimer);
    liveResetBtn.addEventListener('click', resetCurrentDiscipline);
    
    liveStagesListContainer.addEventListener('click', (event) => {
        const startButton = event.target.closest('button[data-action="start-from"]');
        if (startButton) {
            initAudio();
            const index = parseInt(startButton.dataset.index, 10);
            if (!isNaN(index)) {
                clearInterval(timerInterval);
                timerInterval = null;
                prepareStage(index);
            }
        }
    });

    addStageBtn.addEventListener('click', addStage);
    saveDisciplineBtn.addEventListener('click', handleSaveDiscipline);
    adminLoadBtn.addEventListener('click', () => loadDisciplineForTimer(adminDisciplineSelect.value));
    adminExportSingleBtn.addEventListener('click', handleExportSingle);
    adminDisciplineSelect.addEventListener('change', () => loadDisciplineForEditor(adminDisciplineSelect.value));
    adminDeleteBtn.addEventListener('click', handleDeleteDiscipline);
    
    saveEditBtn.addEventListener('click', handleUpdateStage);
    cancelEditBtn.addEventListener('click', closeEditModal);
    
    exportAllBtn.addEventListener('click', handleExportAll);
    importBtn.addEventListener('click', handleImport);
    
    cancelImportBtn.addEventListener('click', () => importModal.classList.add('hidden'));
    processImportBtn.addEventListener('click', processImportFromText);
    
    // --- Initial Load ---
    loadDisciplinesFromStorage();
    updateUiForStateChange(); // Initial UI setup for timer
    if (Object.keys(disciplines).length > 0) {
        loadDisciplineForEditor(adminDisciplineSelect.value);
    } else {
        renderAdminStagesList();
    }
});

// --- PWA Service Worker Registration ---
if ('serviceWorker' in navigator) {
    const serviceWorkerScript = `
        const CACHE_NAME = 'exen-timer-cache-v1';
        const urlsToCache = [
            './', // Caches the main page itself
            './index.html' // Explicitly cache index.html
        ];

        self.addEventListener('install', event => {
            event.waitUntil(
                caches.open(CACHE_NAME)
                    .then(cache => {
                        console.log('Service Worker: Caching app shell');
                        return cache.addAll(urlsToCache);
                    })
            );
        });

        self.addEventListener('activate', event => {
            const cacheWhitelist = [CACHE_NAME];
            event.waitUntil(
                caches.keys().then(cacheNames => {
                    return Promise.all(
                        cacheNames.map(cacheName => {
                            if (cacheWhitelist.indexOf(cacheName) === -1) {
                                return caches.delete(cacheName);
                            }
                        })
                    );
                })
            );
        });

        self.addEventListener('fetch', event => {
            event.respondWith(
                caches.match(event.request)
                    .then(response => {
                        return response || fetch(event.request);
                    })
            );
        });
    `;
    const blob = new Blob([serviceWorkerScript], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(swUrl)
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}
</script>
</body>
</html>
