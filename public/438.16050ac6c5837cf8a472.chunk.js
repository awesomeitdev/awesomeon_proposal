"use strict";(self.webpackChunkproposal_web=self.webpackChunkproposal_web||[]).push([[438],{438:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var a=r(540),n=r(767),l=r(389),c=r(444),s=r(27),o=r(3);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function m(){m=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",o=l.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function f(e,t,r,a){var l=t&&t.prototype instanceof g?t:g,c=Object.create(l.prototype),s=new M(a||[]);return n(c,"_invoke",{value:L(e,r,s)}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",h="suspendedYield",y="executing",b="completed",E={};function g(){}function v(){}function x(){}var N={};u(N,c,(function(){return this}));var w=Object.getPrototypeOf,R=w&&w(w(P([])));R&&R!==r&&a.call(R,c)&&(N=R);var k=x.prototype=g.prototype=Object.create(N);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(n,l,c,s){var o=d(e[n],e,l);if("throw"!==o.type){var m=o.arg,u=m.value;return u&&"object"==i(u)&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(u).then((function(e){m.value=e,c(m)}),(function(e){return r("throw",e,c,s)}))}s(o.arg)}var l;n(this,"_invoke",{value:function(e,a){function n(){return new t((function(t,n){r(e,a,t,n)}))}return l=l?l.then(n,n):n()}})}function L(t,r,a){var n=p;return function(l,c){if(n===y)throw Error("Generator is already running");if(n===b){if("throw"===l)throw c;return{value:e,done:!0}}for(a.method=l,a.arg=c;;){var s=a.delegate;if(s){var o=F(s,a);if(o){if(o===E)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===p)throw n=b,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=y;var i=d(t,r,a);if("normal"===i.type){if(n=a.done?b:h,i.arg===E)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n=b,a.method="throw",a.arg=i.arg)}}}function F(t,r){var a=r.method,n=t.iterator[a];if(n===e)return r.delegate=null,"throw"===a&&t.iterator.return&&(r.method="return",r.arg=e,F(t,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),E;var l=d(n,t.iterator,r.arg);if("throw"===l.type)return r.method="throw",r.arg=l.arg,r.delegate=null,E;var c=l.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,E):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,E)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,l=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return l.next=l}}throw new TypeError(i(t)+" is not iterable")}return v.prototype=x,n(k,"constructor",{value:x,configurable:!0}),n(x,"constructor",{value:v,configurable:!0}),v.displayName=u(x,o,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,u(e,o,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},O(j.prototype),u(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,a,n,l){void 0===l&&(l=Promise);var c=new j(f(e,r,a,n),l);return t.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},O(k),u(k,o,"Generator"),u(k,c,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=P,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return s.type="throw",s.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var c=this.tryEntries[l],s=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var o=a.call(c,"catchLoc"),i=a.call(c,"finallyLoc");if(o&&i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(o){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!i)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,E):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),E},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),E}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:P(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),E}},t}function u(e,t,r,a,n,l,c){try{var s=e[l](c),o=s.value}catch(e){return void r(e)}s.done?t(o):Promise.resolve(o).then(a,n)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,l,c,s=[],o=!0,i=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(a=l.call(r)).done)&&(s.push(a.value),s.length!==t);o=!0);}catch(e){i=!0,n=e}finally{try{if(!o&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(i)throw n}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}var p="/images/d0dbe79c8ccdc786c001d9b111960de9jpg",h="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",y="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80";const b=function(){var e,t,r=(0,l.Bd)(),i=r.t,d=r.i18n,b=(0,n.Zp)(),E=(0,n.zy)(),g=(0,a.useRef)(!1),v=f((0,a.useState)(!0),2),x=v[0],N=v[1],w=(0,a.useRef)((function(){}));(0,a.useEffect)((function(){var e;g.current=!0;var t=function(){var t,r=(t=m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!g.current){t.next=5;break}return t.next=4,d.changeLanguage("ko");case 4:e=setTimeout((function(){g.current&&N(!1)}),100);case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),g.current&&N(!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(a,n){var l=t.apply(e,r);function c(e){u(l,a,n,c,s,"next",e)}function s(e){u(l,a,n,c,s,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return t(),function(){g.current=!1,e&&clearTimeout(e),w.current()}}),[d]),(0,a.useEffect)((function(){if(g.current&&!x){var e;return e&&clearTimeout(e),e=setTimeout((function(){try{if(!g.current)return;var e=E.hash.replace("#","");if(e){var t=document.getElementById(e);t&&g.current&&t.scrollIntoView({behavior:"smooth",block:"start"})}else window.scrollTo({top:0,behavior:"smooth"})}catch(e){}}),100),function(){e&&clearTimeout(e)}}}),[E.hash,x]);var R,k,O,j,L,F,S,C,M,P,I=(0,a.useCallback)((function(e){g.current&&(b(e),window.scrollTo({top:0,behavior:"smooth"}))}),[b]),_=((0,a.useCallback)((function(e){if(g.current&&!x){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}}),[x]),(0,a.useCallback)((function(){return I("/emm")}),[I]),(0,a.useCallback)((function(){return I("/company")}),[I]),(0,a.useCallback)((function(){return I("/emmintroduce")}),[I]),(0,a.useCallback)((function(){return I("/faq")}),[I]),(0,a.useCallback)((function(){return I("/contact")}),[I]),(0,a.useCallback)((function(e){var t=e.target.value;d.changeLanguage(t)}),[d]),(0,a.useCallback)((function(){alert("도입 문의를 통해 무료 체험을 신청해 주세요."),window.open("https://docs.google.com/forms/d/e/1FAIpQLSfodzPClwTO9-DUORIfJgg6S0Or2mXXC8Gsh1fM1Z243PCYHQ/viewform?usp=header","_blank")}),[]));return a.createElement("div",{className:"pt-20"},a.createElement("main",null,a.createElement("section",{className:"relative bg-gradient-to-r from-blue-900 to-blue-700 text-white"},a.createElement("div",{className:"absolute inset-0 bg-cover bg-center opacity-20",style:{backgroundImage:"url(".concat(p,")"),backgroundBlendMode:"overlay"}}),a.createElement("div",{className:"relative container mx-auto px-4 lg:px-8 max-w-screen-xl py-32"},a.createElement("div",{className:"max-w-3xl"},a.createElement("h1",{className:"text-6xl font-bold mb-8"},"AwesomeONE"),a.createElement("p",{className:"text-2xl mb-12 opacity-90 leading-relaxed whitespace-pre-line"},i("hero.subtitle")),a.createElement("div",{className:"flex gap-6"},a.createElement("button",{onClick:_,className:"bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"},i("hero.button")),a.createElement("button",{onClick:function(){return window.open("https://one-console.awesomeit.co.kr/","_blank")},className:"border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"},i("hero.consoleMove")))))),a.createElement("section",{className:"py-24"},a.createElement("div",{className:"container mx-auto px-6 max-w-7xl"},a.createElement("div",{className:"flex items-center gap-16 mb-32"},a.createElement("div",{className:"w-1/2"},a.createElement("h2",{className:"text-4xl font-bold mb-6"},i("features.fullManagement.title")),a.createElement("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed whitespace-pre-line"},i("features.fullManagement.description")),a.createElement("ul",{className:"space-y-4"},null===(e=i("features.fullManagement.bullets",{returnObjects:!0}))||void 0===e?void 0:e.map((function(e,t){return a.createElement("li",{key:t,className:"flex items-start gap-4"},a.createElement("div",{className:"mt-1"},a.createElement(s.CMH,{className:"w-6 h-6 text-blue-600"})),a.createElement("span",{className:"text-lg text-gray-700"},e))})))),a.createElement("div",{className:"w-1/2"},a.createElement("img",{src:h,alt:"Full Management",className:"rounded-lg shadow-2xl"}))),a.createElement("div",{className:"flex flex-row-reverse items-center gap-16"},a.createElement("div",{className:"w-1/2"},a.createElement("h2",{className:"text-4xl font-bold mb-6 flex items-center gap-4"},i("features.workProfile.title"),a.createElement("span",{className:c.R.badge},"추후 지원 예정")),a.createElement("p",{className:"text-gray-600 text-lg mb-6 whitespace-pre-line"},i("features.workProfile.description")),a.createElement("ul",{className:"space-y-4"},null===(t=i("features.workProfile.bullets",{returnObjects:!0}))||void 0===t?void 0:t.map((function(e,t){return a.createElement("li",{key:t,className:"flex items-start gap-4"},a.createElement("div",{className:"mt-1"},a.createElement(s.CMH,{className:"w-6 h-6 text-blue-600"})),a.createElement("span",{className:"text-lg text-gray-700"},e))})))),a.createElement("div",{className:"w-1/2"},a.createElement("img",{src:y,alt:"Work Profile",className:"rounded-lg shadow-2xl"}))))),a.createElement("section",{className:"".concat(c.R.section," ").concat(c.R.bgSecondary)},a.createElement("div",{className:c.R.container},a.createElement("h2",{className:c.R.h2},i("managementModes.title")),a.createElement("div",{className:c.R.grid3Cols},a.createElement("div",{className:c.R.card},a.createElement("h3",{className:c.R.h3},"Full Manage 모드"),a.createElement("p",{className:c.R.paragraph},i("managementModes.fullManagement.description")),a.createElement("ul",{className:c.R.list},(P=i("managementModes.fullManagement.bullets",{returnObjects:!0}),a.createElement(a.Fragment,null,a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.VSk,{className:c.R.icon}),"기기의 모든 설정과 앱을 회사에서 관리"),a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.cfS,{className:c.R.icon}),"개인 계정 로그인 및 개인 앱 설치 제한"),a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.pcC,{className:c.R.icon}),"보안 정책의 완전한 적용"),a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.Iy6,{className:c.R.icon}),P[1]))))),a.createElement("div",{className:c.R.card},a.createElement("h3",{className:c.R.h3},i("managementModes.semiManage.title")," 모드"),a.createElement("p",{className:c.R.paragraph},i("managementModes.semiManage.description")),a.createElement("ul",{className:c.R.list},i("managementModes.semiManage.bullets",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t,className:"flex items-center text-base"},0===t&&a.createElement(o.VSk,{className:c.R.icon}),1===t&&a.createElement(o.cfS,{className:c.R.icon}),2===t&&a.createElement(o.pcC,{className:c.R.icon}),3===t&&a.createElement(o.Iy6,{className:c.R.icon}),e)})))),a.createElement("div",{className:c.R.card},a.createElement("h3",{className:"".concat(c.R.h3," flex items-center gap-4")},"Split Control 모드",a.createElement("span",{className:c.R.badge},"추후 지원 예정")),a.createElement("p",{className:c.R.paragraph},i("managementModes.workProfile.description")),a.createElement("ul",{className:c.R.list},function(){i("managementModes.workProfile.bullets",{returnObjects:!0});return a.createElement(a.Fragment,null,a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.Iy6,{className:c.R.icon}),"업무용과 개인용 영역을 분리하여 관리"),a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.cfS,{className:c.R.icon}),"개인 영역은 자유롭게 사용 가능"),a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.pcC,{className:c.R.icon}),"업무 영역만 회사 정책 적용"),a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.VSk,{className:c.R.icon}),"기존 사용중인 기기에 바로 적용 가능"))}()))))),a.createElement("section",{id:"core-features",className:c.R.section},a.createElement("div",{className:c.R.container},a.createElement("h2",{className:c.R.h2},i("coreFeatures.title")),a.createElement("div",{className:c.R.grid3Cols},a.createElement("div",{className:c.R.card},a.createElement("h3",{className:c.R.h3},i("coreFeatures.mdm.title")),a.createElement("div",{className:"space-y-6"},a.createElement("div",null,a.createElement("h4",{className:"text-xl font-semibold text-blue-600 mb-4"},i("coreFeatures.mdm.deviceControl.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},i("coreFeatures.mdm.deviceControl.items",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t},e)})))),a.createElement("div",null,a.createElement("h4",{className:"text-xl font-semibold text-blue-600 mb-4"},i("coreFeatures.mdm.systemPolicy.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},i("coreFeatures.mdm.systemPolicy.items",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t},e)})))),a.createElement("div",null,a.createElement("h4",{className:"text-xl font-semibold text-blue-600 mb-4"},i("coreFeatures.mdm.networkPolicy.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},i("coreFeatures.mdm.networkPolicy.items",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t},e)})))))),a.createElement("div",{className:c.R.card},a.createElement("h3",{className:c.R.h3},i("coreFeatures.security.title")),a.createElement("div",{className:"space-y-6"},a.createElement("div",null,a.createElement("h4",{className:"text-xl font-semibold text-blue-600 mb-4"},i("coreFeatures.security.screenLock.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},i("coreFeatures.security.screenLock.items",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t},e)})))),a.createElement("div",null,a.createElement("h4",{className:"text-xl font-semibold text-blue-600 mb-4"},i("coreFeatures.security.location.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},i("coreFeatures.security.location.items",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t},e)})))))),a.createElement("div",{className:c.R.card},a.createElement("h3",{className:c.R.h3},i("coreFeatures.mam.title")),a.createElement("div",{className:"space-y-6"},a.createElement("div",null,a.createElement("h4",{className:"text-xl font-semibold text-blue-600 mb-4"},i("coreFeatures.mam.appPolicy.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},(M=i("coreFeatures.mam.appPolicy.items",{returnObjects:!0}),a.createElement(a.Fragment,null,a.createElement("li",null,M[0].title,a.createElement("ul",{className:"pl-5 mt-2 space-y-2 text-sm"},M[0].subitems.map((function(e,t){return a.createElement("li",{key:t},"- ",e)})))),a.createElement("li",null,M[1]),a.createElement("li",null,M[2]),a.createElement("li",null,M[3]))))),a.createElement("div",null,a.createElement("h4",{className:"text-xl font-semibold text-blue-600 mb-4"},i("coreFeatures.mam.kioskMode.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},i("coreFeatures.mam.kioskMode.items",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t},e)}))))))))),a.createElement("section",{id:"technical-info",className:c.R.section},a.createElement("div",{className:c.R.container},a.createElement("h2",{className:c.R.h2},i("technicalInfo.title")),a.createElement("div",{className:"max-w-4xl mx-auto"},a.createElement("div",{className:c.R.card},a.createElement("h3",{className:c.R.h3},i("technicalInfo.androidVersion.title")),a.createElement("table",{className:"w-full mb-8"},a.createElement("tbody",{className:"divide-y"},(C=i("technicalInfo.androidVersion.versions",{returnObjects:!0})||{},a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"py-4 text-base"},(null==C||null===(O=C.dedicated)||void 0===O?void 0:O.name)||""),a.createElement("td",{className:"py-4 font-medium text-base"},(null==C||null===(j=C.dedicated)||void 0===j?void 0:j.version)||"")),a.createElement("tr",null,a.createElement("td",{className:"py-4 text-base"},(null==C||null===(L=C.fullManagement)||void 0===L?void 0:L.name)||""),a.createElement("td",{className:"py-4 font-medium text-base"},(null==C||null===(F=C.fullManagement)||void 0===F?void 0:F.version)||"")),a.createElement("tr",null,a.createElement("td",{className:"py-4 text-base"},(null==C||null===(S=C.workProfile)||void 0===S?void 0:S.name)||""),a.createElement("td",{className:"py-4 font-medium text-base"},a.createElement("span",{className:"text-yellow-600"},i("technicalInfo.androidVersion.comingSoon")))))))),a.createElement("h3",{className:c.R.h3},i("technicalInfo.systemRequirements.title")),a.createElement("ul",{className:"space-y-3 text-base text-gray-600 list-disc pl-5"},i("technicalInfo.systemRequirements.items",{returnObjects:!0}).map((function(e,t){return a.createElement("li",{key:t},e)}))))))),a.createElement("section",{id:"support-contact",className:"".concat(c.R.section," ").concat(c.R.bgSecondary)},a.createElement("div",{className:c.R.container},a.createElement("h2",{className:c.R.h2},"고객 지원"),a.createElement("div",{className:"max-w-4xl mx-auto"},a.createElement("div",{className:c.R.grid2Cols},a.createElement("div",{className:c.R.card},(k=i("support.contact",{returnObjects:!0}),a.createElement(a.Fragment,null,a.createElement("h3",{className:c.R.h3},k.title),a.createElement("ul",{className:"space-y-6"},a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.QFc,{className:c.R.icon}),k.phone),a.createElement("li",{className:"flex items-center text-base"},a.createElement(o.pHD,{className:c.R.icon}),k.email))))),a.createElement("div",{className:c.R.card},(R=i("support.serviceLevel",{returnObjects:!0}),a.createElement(a.Fragment,null,a.createElement("h3",{className:c.R.h3},R.title),a.createElement("ul",{className:"space-y-4 text-base"},a.createElement("li",{className:"flex items-center"},a.createElement(o.Ohp,{className:c.R.icon}),R.basic),a.createElement("li",{className:"pl-9"},R.support),a.createElement("li",{className:"pl-9"},R.emergency),a.createElement("li",{className:"pl-9"},R.inspection)))))))))))}},444:(e,t,r)=>{r.d(t,{R:()=>a});var a={container:"container mx-auto px-4 max-w-7xl",section:"py-16",h1:"text-5xl font-bold mb-8",h2:"text-4xl font-bold mb-10 text-center",h3:"text-2xl font-semibold mb-6",paragraph:"text-gray-600 text-lg mb-6 leading-relaxed whitespace-pre-line",card:"bg-white p-6 rounded-xl shadow-lg",list:"space-y-4",listItem:"flex items-center text-lg",icon:"w-6 h-6 text-blue-600 mr-3",primaryButton:"bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",secondaryButton:"border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors",grid2Cols:"grid md:grid-cols-2 gap-8",grid3Cols:"grid md:grid-cols-3 gap-6",textPrimary:"text-gray-900",textSecondary:"text-gray-600",bgPrimary:"bg-white",bgSecondary:"bg-gray-50",badge:"text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full border border-yellow-300"}}}]);