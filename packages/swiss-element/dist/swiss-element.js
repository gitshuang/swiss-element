!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).swissElement={})}(this,function(n){"use strict";var t=null,e=[],r=[],u=function n(t){return typeof t==typeof n?t():t},o=function(n,t){return n.length!==t.length||n.some(d,t)},i=function(n){return function(t){var e={i:0,stack:[]};t[n]=e,t.before.push(function(){e.i=0})}},c=0,a=function(){return"_$"+c++},f=function(n){var e=t,r=e[n],u=e.update,o=r.i,i=r.stack;return r.i++,{i:o,stack:i,update:u,unknown:o===i.length}},l=function(n){var e=p(u);return s(r,e),u.reset=function(){for(var n in s(e.reset,e),e)/^_\$/.test(n)&&e[n].stack.splice(0)},u;function u(){var r=t;t=e;var u=e._,o=e.before,i=e.after,c=e.external;try{var a;do{u.$=u._=!1,s(o,e),a=n.apply(u.c=this,u.a=arguments),s(i,e),c.length&&s(c.splice(0),a)}while(u._);return a}finally{u.$=!0,t=r}}},s=function(n,t){for(var e=n.length,r=0;r<e;)n[r++](t)},p=function(n){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?n.apply(t.c,t.a):t._=!0}}};function d(n,t){return n!==this[t]}var v,h,b=a();try{v=cancelAnimationFrame,h=requestAnimationFrame}catch(n){v=clearTimeout,h=setTimeout}var y=function(n,t,e,r,u,o,i){var c={always:n,cb:u,check:t,clean:null,inputs:e,raf:r,t:0,update:t,fn:function(){m(o[i],c.cb())}};return c},m=function(n,t){n.t=0,n.clean=t};r.push(function(n){var t=[],e={i:0,stack:t};n[b]=e;var r=function(){e.i=0;for(var n=t.length,r=0;r<n;r++){var u=t[r],o=u.check,i=u.clean,c=u.raf,a=u.t;o&&(c&&a?v(a):i&&i(),m(t[r],null))}};n.reset.push(r),n.before.push(r),n.after.push(function(){for(var n=t.length,e=0;e<n;e++){var r=t[e],u=r.fn,o=r.raf;r.update&&(r.update=!1,o?r.t=h(u):u())}})});var w=function n(r){return function(u,i){var c=f(b),a=c.i,l=c.stack,s=c.unknown,p=i||e;if(s){var d=p===e,v=d||!r||"function"!=typeof p;d||!r||"function"!=typeof p?l.push(y(d,v,p,r,u,l,a)):(t.external.push(function(n){return i(u,n)}),l.push(y(d,d,e,r,n,l,a)))}else{var h=l[a],m=h.check,w=h.always,g=h.inputs;m&&(w||o(g,p))&&(h.cb=u,h.inputs=p,h.update=!0)}}}(!0),g=a();r.push(i(g));var k=a();r.push(i(k));var E=function(n,t){var r=f(k),u=r.i,i=r.stack,c=r.unknown,a=t||e;c&&O(i,-1,n,a);var l=i[u],s=l.filter,p=l.value,d=l.fn,v=l.inputs;return(s?o(v,a):n!==d)?O(i,u,n,a):p},O=function(n,t,r,u){var o={filter:u!==e,value:null,fn:r,inputs:u};return t<0?n.push(o):n[t]=o,o.value=r(),o.value},_=a();r.push(i(_));var C=function(n,t){var e=f(_),r=e.i,o=e.stack,i=e.unknown,c=e.update;if(i){var a=[null,function(e){t=n(t,e),a[0]=t,c()}];o.push(a),a[0]=u(t)}return o[r]},j=a();function A(n,t){n.innerHTML=t()}function P(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function R(){return(R=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function x(n){return"function"==typeof n}function $(n){return void 0===n}function M(n,t){void 0===t&&(t=null),n=n||"s";var e=t?n+"-"+t:n;return function(n){return function(n){return n&&/.-./.test(n)}(n)&&!self.customElements.get(n)}(e)?e:M(e,function(n){void 0===n&&(n="");var t=++S;return""+n+t}())}function L(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return t.reduceRight(function(n,t){return t(n)},n)}}r.push(i(j));var T=x(self.CustomEvent)&&self.CustomEvent||function(n,t){void 0===t&&(t={});var e=document.createEvent("CustomEvent");return e.initCustomEvent(n,t.bubbles,t.cancelable,t),e},S=0;var U,D=(U={enumerable:!1,configurable:!0,writeable:!1},function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return e.forEach(function(t){for(var e in t){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,R(r,U))}}),n}),F="connected",H="dis"+F;function q(n,t){var e={handleEvent:z,onconnected:B,ondisconnected:G,$:n,_:null};t.addEventListener(F,e,!1),t.addEventListener(H,e,!1)}function z(n){this["on"+n.type]()}function B(){G.call(this),this._=this.$()}function G(){var n=this._;this._=null,n&&n()}var I="connectedCallback",J="dis"+I,K="attributeChangedCallback",N="adoptedCallback";n.renderer=function(n){return void 0===n&&(n=A),function(t){return function(){var e=t.apply(void 0,arguments),r=[function(t,e){return n(e(),t)},function(t,e){return n(t,e())},function(t,e){return n(e,t)},function(t,e){return n(t,e)}];return e.renderer=function n(t,u,o){var i;void 0===o&&(o=0),e.renderer=r[o];try{i=e.renderer(t,u,0)}catch(e){if((o+=1)<=3)return n(t,u,o)}return i||""},e}}},n.applyMiddleware=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return function(){var e=n.apply(void 0,arguments),r=function(){throw new Error("Rendering while constructing your middleware is not allowed. Other middleware would not be applied to this render.")},u={render:function(){return r.apply(void 0,arguments)}},o=t.map(function(n){return n(u)});return r=L.apply(void 0,o)(e.render.bind(e)),e.render=r,e}}},n.compose=L,n.useEffect=function(n,t){void 0===t&&(t=[]);var e=[n];return t&&e.push(t.length?t:q),w.apply(null,e)},n.useCallback=function(n,t){return E(function(){return n},t)},n.useMemo=E,n.useReducer=C,n.useRef=function(n){var t=f(g),e=t.i,r=t.stack;if(t.unknown){var o={current:null};r.push(o),o.current=u(n)}return r[e]},n.useState=function(n){return C(function(n,t){return t},n)},n.element=function(n,t,e,r){x(n)&&(r=e,e=t,t=n,n=void 0),!x(e)&&$(r)&&(r=e,e=void 0),n=(r=r||{}).name=M(n||r.name);var u,o,i=function(n,t){function e(){var r=this;return this instanceof e?t.call(this,function(){return"undefined"!=typeof Reflect?Reflect.construct(n,[],r.constructor):n.call(r)}):new e}return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e}((u=r&&r.extends)?document.createElement(u).constructor:HTMLElement,function(n){var u=function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){P(n,t,e[t])})}return n}({},r,{component:t});return function(n,t){return function e(r,u){if(!$(u)){if(!x(u))throw new Error("Expected the enhancer to be a function.");return u(e)(r)}var o=n(),i=l(function(){var n=t.call(o,o);return o.render(n)});return D(o,{render:function(n){return o.renderer(o.renderRoot,function(){return n}),n},renderer:A,connectedCallback:function(){i(),o.dispatchEvent(new T(F))},disconnectedCallback:function(){o.dispatchEvent(new T(H))},attributeChangedCallback:function(n,t,e){o.shouldUpdate(t,e)&&i()},shouldUpdate:function(n,t){return n!==t},get renderRoot(){return o.shadowRoot||o._shadowRoot||o}})}}(n,t)(u,e)});return o=i.prototype,[I,J,K,N].forEach(function(n){o[n]=function(){this.hasOwnProperty(n)&&this[n].apply(this,arguments)}}),i.observedAttributes=r.observedAttributes||[],function(n,t){t.forEach(function(t){t in n||Object.defineProperty(n,function(n){return n.replace(/-([a-z])/g,function(n,t){return t.toUpperCase()})}(t),{configurable:!0,get:function(){return this.getAttribute(t)},set:function(n){null==n?this.removeAttribute(t):this.setAttribute(t,n)}})})}(i.prototype,i.observedAttributes),function(n,t,e){n&&self.customElements.define(n,t,e)}(n,i,r),i},Object.defineProperty(n,"__esModule",{value:!0})});
