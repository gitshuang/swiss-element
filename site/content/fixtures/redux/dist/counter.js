!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function n(){}var r={},o=[],i=[];function u(e,t){for(var n in t)e[n]=t[n];return e}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,l=[];function s(e){!e._dirty&&(e._dirty=!0)&&1==l.push(e)&&c(f)}function f(){var e,t=l;for(l=[];e=t.pop();)e._dirty&&P(e)}function p(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function d(e){var t=u({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function v(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===a.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,u):e.removeEventListener(t,b,u),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var c=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function b(e){return this._listeners[e.type](e)}var y=[],m=0,_=!1,g=!1;function w(){for(var e;e=y.pop();)e.componentDidMount&&e.componentDidMount()}function C(e,t,n,r,o,i){m++||(_=null!=o&&void 0!==o.ownerSVGElement,g=null!=e&&!("__preactattr_"in e));var u=function e(t,n,r,o,i){var u=t,c=_;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(u=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(u,t),k(t,!0))),u.__preactattr_=!0,u;var a,l,s=n.nodeName;if("function"==typeof s)return function(e,t,n,r){for(var o=e&&e._component,i=o,u=e,c=o&&e._componentConstructor===t.nodeName,a=c,l=d(t);o&&!a&&(o=o._parentComponent);)a=o.constructor===t.nodeName;return o&&a&&(!r||o._component)?(j(o,l,3,n,r),e=o.base):(i&&!c&&(S(i),e=u=null),o=N(t.nodeName,l,n),e&&!o.nextBase&&(o.nextBase=e,u=null),j(o,l,1,n,r),e=o.base,u&&e!==u&&(u._component=null,k(u,!1))),e}(t,n,r,o);if(_="svg"===s||"foreignObject"!==s&&_,s=String(s),(!t||!p(t,s))&&(a=s,(l=_?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,u=l,t)){for(;t.firstChild;)u.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(u,t),k(t,!0)}var f=u.firstChild,b=u.__preactattr_,y=n.children;if(null==b){b=u.__preactattr_={};for(var m=u.attributes,w=m.length;w--;)b[m[w].name]=m[w].value}return!g&&y&&1===y.length&&"string"==typeof y[0]&&null!=f&&void 0!==f.splitText&&null==f.nextSibling?f.nodeValue!=y[0]&&(f.nodeValue=y[0]):(y&&y.length||null!=f)&&function(t,n,r,o,i){var u,c,a,l,s,f,d,h,b=t.childNodes,y=[],m={},_=0,g=0,w=b.length,C=0,E=n?n.length:0;if(0!==w)for(var x=0;x<w;x++){var N=b[x],O=N.__preactattr_,j=E&&O?N._component?N._component.__key:O.key:null;null!=j?(_++,m[j]=N):(O||(void 0!==N.splitText?!i||N.nodeValue.trim():i))&&(y[C++]=N)}if(0!==E)for(var x=0;x<E;x++){s=null;var j=(l=n[x]).key;if(null!=j)_&&void 0!==m[j]&&(s=m[j],m[j]=void 0,_--);else if(!s&&g<C)for(u=g;u<C;u++)if(void 0!==y[u]&&(f=c=y[u],h=i,"string"==typeof(d=l)||"number"==typeof d?void 0!==f.splitText:"string"==typeof d.nodeName?!f._componentConstructor&&p(f,d.nodeName):h||f._componentConstructor===d.nodeName)){s=c,y[u]=void 0,u===C-1&&C--,u===g&&g++;break}s=e(s,l,r,o),a=b[x],s&&s!==t&&s!==a&&(null==a?t.appendChild(s):s===a.nextSibling?v(a):t.insertBefore(s,a))}if(_)for(var x in m)void 0!==m[x]&&k(m[x],!1);for(;g<=C;)void 0!==(s=y[C--])&&k(s,!1)}(u,y,r,o,g||null!=b.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,_);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],_)}(u,n.attributes,b),_=c,u}(e,t,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--m||(g=!1,i||w()),u}function k(e,t){var n=e._component;n?S(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||v(e),E(e))}function E(e){for(e=e.lastChild;e;){var t=e.previousSibling;k(e,!0),e=t}}var x={};function N(e,t,n){var r,o=x[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),T.call(r,t,n)):((r=new T(t,n)).constructor=e,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function O(e,t,n){return this.constructor(e,n)}function j(e,t,n,o,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?s(e):P(e,1,i)),e.__ref&&e.__ref(e))}function P(e,t,n,r){if(!e._disable){var o,i,c,a=e.props,l=e.state,s=e.context,f=e.prevProps||a,p=e.prevState||l,v=e.prevContext||s,h=e.base,b=e.nextBase,_=h||b,g=e._component,E=!1;if(h&&(e.props=f,e.state=p,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,l,s)?E=!0:e.componentWillUpdate&&e.componentWillUpdate(a,l,s),e.props=a,e.state=l,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!E){o=e.render(a,l,s),e.getChildContext&&(s=u(u({},s),e.getChildContext()));var x,O,T=o&&o.nodeName;if("function"==typeof T){var A=d(o);(i=g)&&i.constructor===T&&A.key==i.__key?j(i,A,1,s,!1):(x=i,e._component=i=N(T,A,s),i.nextBase=i.nextBase||b,i._parentComponent=e,j(i,A,0,s,!1),P(i,1,n,!0)),O=i.base}else c=_,(x=g)&&(c=e._component=null),(_||1===t)&&(c&&(c._component=null),O=C(c,o,s,n||!h,_&&_.parentNode,!0));if(_&&O!==_&&i!==g){var R=_.parentNode;R&&O!==R&&(R.replaceChild(O,_),x||(_._component=null,k(_,!1)))}if(x&&S(x),e.base=O,O&&!r){for(var U=e,L=e;L=L._parentComponent;)(U=L).base=O;O._component=U,O._componentConstructor=U.constructor}}if(!h||n?y.unshift(e):E||e.componentDidUpdate&&e.componentDidUpdate(f,p,v),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);m||r||w()}}function S(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?S(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,v(t),function(e){var t=e.constructor.name;(x[t]||(x[t]=[])).push(e)}(e),E(t)),e.__ref&&e.__ref(null)}function T(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}u(T.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=u({},n)),u(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),P(this,2)},render:function(){}});var A={},R=JSON.stringify;var U=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+","+e[n];return(A[t]||(A[t]=function(e){for(var t,n,r,o,i,u=0,c="return ",a="",l="",s=0,f="",p="",d="",v=0,h=function e(){r?9===u?(s++&&(c+=","),c+="h("+(l||R(a)),u=0):13===u||0===u&&"..."===a?(0===u?(d||(d=")",f=f?"Object.assign("+f:"Object.assign({}"),f+=p+","+l,p=""):o&&(f+=f?","+(p?"":"{"):"{",p="}",f+=R(o)+":",f+=l||(i||a)&&R(a)||"true",o=""),i=!1):0===u&&(u=13,o=a,a=l="",e(),u=0):(l||(a=a.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))&&(s++&&(c+=","),c+=l||R(a)),a=l=""},b=0;b<e.length;b++){b>0&&(r||h(),l="$["+b+"]",h());for(var y=0;y<e[b].length;y++){if(n=e[b].charCodeAt(y),r){if(39===n||34===n){if(v===n){v=0;continue}if(0===v){v=n;continue}}if(0===v)switch(n){case 62:h(),47!==u&&(c+=f?","+f+p+d:",null"),t&&(c+=")"),r=0,f="",u=1;continue;case 61:u=13,i=!0,o=a,a="";continue;case 47:t||(t=!0,9!==u||a.trim()||(a=l="",u=47));continue;case 9:case 10:case 13:case 32:h(),u=0;continue}}else if(60===n){h(),r=1,d=p=f="",t=i=!1,u=9;continue}a+=e[b].charAt(y)}}return h(),Function("h","$",c)}(e)))(this,arguments)}.bind(function(e,t){var r,u,c,a,l=arguments,s=i;for(a=arguments.length;a-- >2;)o.push(l[a]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((u=o.pop())&&void 0!==u.pop)for(a=u.length;a--;)o.push(u[a]);else"boolean"==typeof u&&(u=null),(c="function"!=typeof e)&&(null==u?u="":"number"==typeof u?u=String(u):"string"!=typeof u&&(c=!1)),c&&r?s[s.length-1]+=u:s===i?s=[u]:s.push(u),r=c;var f=new n;return f.nodeName=e,f.children=s,f.attributes=null==t?void 0:t,f.key=null==t?void 0:t.key,f});function L(e,t){e.innerHTML=t}var M=Array.isArray;function I(e){return"function"==typeof e}function B(e){return void 0===e}function $(e,t){void 0===t&&(t=null),e=e||"s";var n=t?e+"-"+t:e;return function(e){return/.-./.test(e)&&!self.customElements.get(e)}(n)?n:$(n,function(e){void 0===e&&(e="");var t=++H;return""+e+t}())}function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.filter(Boolean).reduceRight(function(e,t){return t(e)},e)}}var D=I(self.CustomEvent)&&self.CustomEvent||function(e,t){void 0===t&&(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t),n};var H=0;var V,q=(V={configurable:!0},function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(function(n){for(var r in n){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,t(o,V))}}),e}),z="connected",F="dis"+z;var Y=null,K=[],G=[],J=function e(t,n){return typeof t==typeof e?t.apply(null,n):t},Q=function(e){return function(t){var n={i:0,stack:[]};t[e]=n,t.before.push(function(){n.i=0})}},X=0,Z=function(){return"_$"+X++},ee=function(e){var t=Y,n=t[e],r=t.update,o=n.i,i=n.stack;return n.i++,{i:o,stack:i,update:r,unknown:o===i.length}},te=function(e){var t=re(n);return ne(G,t),n.reset=function(){for(var e in ne(t.reset,t),t)/^_\$/.test(e)&&t[e].stack.splice(0)},n;function n(){var n=Y;Y=t;var r=t._,o=t.before,i=t.after,u=t.external;try{var c;do{r.$=r._=!1,ne(o,t),c=e.apply(r.c=this,r.a=arguments),ne(i,t),u.length&&ne(u.splice(0),c)}while(r._);return c}finally{r.$=!0,Y=n}}},ne=function(e,t){for(var n=e.length,r=0;r<n;)e[r++](t)},re=function(e){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?e.apply(t.c,t.a):t._=!0}}};function oe(e,t){return e!==this[t]}var ie,ue,ce=Z();try{ie=cancelAnimationFrame,ue=requestAnimationFrame}catch(e){ie=clearTimeout,ue=setTimeout}var ae=function(e,t,n,r,o,i,u){var c={always:e,cb:o,check:t,clean:null,inputs:n,raf:r,t:0,update:t,fn:function(){le(i[u],c.cb())}};return c},le=function(e,t){e.t=0,e.clean=t};G.push(function(e){var t=[],n={i:0,stack:t},r=function(e,t,n,r){n&&r?ie(r):t&&t(),le(e,null)};e[ce]=n,e.before.push(function(){n.i=0}),e.reset.push(function(){n.i=0;for(var e=t.length,o=0;o<e;o++){var i=t[o],u=i.check,c=i.clean,a=i.raf,l=i.t;u&&r(i,c,a,l)}}),e.after.push(function(){for(var e=t.length,n=0;n<e;n++){var o=t[n],i=o.check,u=o.clean,c=o.fn,a=o.raf,l=o.t,s=o.update;i&&s&&(o.update=!1,r(o,u,a,l),a?o.t=ue(c):c())}})});var se=function e(t){return function(n,r){var o,i,u=ee(ce),c=u.i,a=u.stack,l=u.unknown,s=r||K;if(l){var f=s===K,p=f||!t||"function"!=typeof s;f||!t||"function"!=typeof s?a.push(ae(f,p,s,t,n,a,c)):(Y.external.push(function(e){return r(n,e)}),a.push(ae(f,f,K,t,e,a,c)))}else{var d=a[c],v=d.check,h=d.always,b=d.inputs;v&&(h||(i=s,(o=b).length!==i.length||o.some(oe,i)))&&(d.cb=n,d.inputs=s,d.update=!0)}}}(!0),fe=Z();G.push(Q(fe));var pe=function(e){var t=ee(fe),n=t.i,r=t.stack;if(t.unknown){var o={current:null};r.push(o),o.current=J(e,K)}return r[n]},de=Z();G.push(Q(de));var ve=Z();G.push(Q(ve));var he=function(e){return function(e,t){var n=ee(ve),r=n.i,o=n.stack,i=n.unknown,u=n.update;if(i){var c=[null,function(n){t=e(t,n),c[0]=t,u()}];o.push(c),c[0]=J(t,K)}return o[r]}(function(e,t){return J(t,[e])},e)},be=new WeakMap,ye=Z();G.push(Q(ye));var me=function(e){var t={value:e,provide:ge};return be.set(t,[]),t},_e=function(e){var t=ee(ye),n=t.i,r=t.stack,o=t.unknown,i=t.update;return o&&(be.get(e).push(i),r.push(e)),r[n].value};function ge(e){if(this.value!==e){this.value=e;for(var t=be.get(this),n=t.length,r=0;r<n;r++)t[r]()}}var we={current:null};var Ce="connectedCallback",ke="dis"+Ce,Ee="attributeChangedCallback",xe="adoptedCallback",Ne="observedAttributes",Oe=[function(e){return function(t){var n=e(t),r=t.component,o=te(function(){we.current=n;var e=r.call(n,n);return n.render(e)});return n.requestUpdate=o,n}},function(e){return function(t){var n,r=e(t);return n=Object.getPrototypeOf(r),t.observedAttributes.forEach(function(e){e in n||Object.defineProperty(n,function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}(e),{configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),r}}];function je(){return we.current}var Pe="connected",Se="dis"+Pe;function Te(e,t){void 0===t&&(t=[]);var n,r=[e];if(t){var o=je();r.push(t.length?t:(n=o,function(e){var t={handleEvent:Ae,onconnected:Re,ondisconnected:Ue,$:e,_:null};n.addEventListener(Pe,t),n.addEventListener(Se,t)}))}return se.apply(null,r)}function Ae(e){this["on"+e.type]()}function Re(){Ue.call(this),this._=this.$()}function Ue(){var e=this._;this._=null,e&&e()}var Le,Me=Object.prototype.hasOwnProperty;function Ie(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}var Be=new WeakMap;function $e(e){var t=je(),n=_e(Be.get(t)||Le),r=n.getState,o=he(e(r())),i=o[0],u=o[1],c=pe(i);return Te(function(){n.subscribe(function(){var t=e(r());(function(e,t){if(Ie(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Me.call(t,n[o])||!Ie(e[n[o]],t[n[o]]))return!1;return!0})(t,c.current)||(c.current=t,u(t))})}),i}function We(t){return Object.keys(t).reduce(function(n,r){var o,i=t[r];return"function"==typeof i?function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(n){e(t,n,r[n])})}return t}({},n,((o={})[r]=function(e){var t=je(),n=_e(Be.get(t)||Le).dispatch;return function(){return n(e.apply(void 0,arguments))}}(i),o)):n},{})}var De=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),He=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ve={INIT:"@@redux/INIT"+He(),REPLACE:"@@redux/REPLACE"+He(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+He()}};function qe(){var e,t,n=(e=['\n    <div class="box level">\n      <div class="level-item">\n        <button class="button" onclick="','">-</button>\n      </div>\n      <div class="level-item">\n        <h1 class="title">','</h1>\n      </div>\n      <div class="level-item">\n        <button class="button" onclick="','">+</button>\n      </div>\n    </div>\n  '],t||(t=e.slice(0)),e.raw=t,e);return qe=function(){return n},n}var ze,Fe,Ye={decrement:function(){return{type:"DECREMENT"}},increment:function(){return{type:"INCREMENT"}}};ze=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,u=n,c=[],a=c,l=!1;function s(){a===c&&(a=c.slice())}function f(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function p(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return s(),a.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,s();var n=a.indexOf(e);a.splice(n,1)}}}function d(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,u=i(u,e)}finally{l=!1}for(var t=c=a,n=0;n<t.length;n++)(0,t[n])();return e}return d({type:Ve.INIT}),(o={dispatch:d,subscribe:p,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,d({type:Ve.REPLACE})}})[De]=function(){var e,t=p;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(f())}return n(),{unsubscribe:t(n)}}})[De]=function(){return this},e},o}(function(e,t){switch(void 0===e&&(e=0),t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}),Le=Le||me(ze),function(e,t,n,r){var o;if(I(e)&&(r=n,n=t,t=e,e=void 0),!I(n)&&B(r)&&(r=n,n=void 0),M(r)&&((o={})[Ne]=r,r=o),e=(r=r||{}).name=$(e||r.name),!B(n)&&!I(n))throw new Error("Expected the enhancer to be a function.");n=W.apply(void 0,[n].concat(Oe));var i,u,c=function(e,t){function n(){var r=this;return this instanceof n?t.call(this,function(){return"undefined"!=typeof Reflect?Reflect.construct(e,[],r.constructor):e.call(r)}):new n}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n}((i=r&&r.extends)?document.createElement(i).constructor:HTMLElement,function(e){var o=q({},r,{component:t});return function(e,t){return function n(r,o){if(!B(o))return o(n)(r);var i,u=e();return r.shadow&&u.attachShadow({mode:r.shadow}),q(u,{render:function(e){return u.renderer(u.renderRoot,e,i),i=e,e},renderer:L,connectedCallback:function(){u.requestUpdate(),u.dispatchEvent(new D(z))},disconnectedCallback:function(){u.dispatchEvent(new D(F))},attributeChangedCallback:function(e,t,n){u.shouldUpdate(e,t,n)&&u.requestUpdate()},requestUpdate:function(){var e=t.call(u,u);return u.render(e)},shouldUpdate:function(e,t,n){return t!==n},get renderRoot(){return u.shadowRoot||u._shadowRoot||u}})}}(e,t)(o,n)});u=c.prototype,[Ce,ke,Ee,xe].forEach(function(e){u[e]=function(){this.hasOwnProperty(e)&&this[e].apply(this,arguments)}});var a=r[Ne]=r[Ne]||[];c[Ne]=a,function(e,t,n){e&&self.customElements.define(e,t,n)}(e,c,r)}("s-counter",function(){var e=$e(function(e){return e}),t=We(Ye),n=t.decrement,r=t.increment;return U(qe(),function(){return n()},e,function(){return r()})},W((void 0===(Fe=function(e,t){!function(e,t,n){C(n,e,{},!1,t,!1)}(e,t,t.firstElementChild)})&&(Fe=L),function(e){return function(){var t=e.apply(void 0,arguments),n=[function(e,t,n){return Fe(e,t,n)},function(e,t,n){return Fe(t,e,n)},function(e,t,n){return Fe(n,t,e)},function(e,t,n){return Fe(e,function(){return t},n)}];return t.renderer=function e(r,o,i,u){var c;void 0===u&&(u=0),t.renderer=n[u];try{c=t.renderer(r,o,i)}catch(t){if((u+=1)<n.length)return e(r,o,i,u)}return c||""},t}})))});
//# sourceMappingURL=counter.js.map
