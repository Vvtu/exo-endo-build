(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const O={};function fe(e){O.context=e}const Ht=(e,t)=>e===t,$e=Symbol("solid-proxy"),me={equals:Ht};let W=null,st=pt;const H=1,z=2,lt={owned:null,cleanups:null,context:null,owner:null};var h=null;let f=null,x=null,v=null,C=null,Te=0;const[Oo,Ve]=b(!1);function at(e,t){const n=x,r=h,o=e.length===0,i=o?lt:{owned:null,cleanups:null,context:null,owner:t||r},l=o?e:()=>e(()=>I(()=>ne(i)));h=i,x=null;try{return M(l,!0)}finally{x=n,h=r}}function b(e,t){t=t?Object.assign({},me,t):me;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(f&&f.running&&f.sources.has(n)?o=o(n.tValue):o=o(n.value)),ht(n,o));return[dt.bind(n),r]}function T(e,t,n){const r=Re(e,t,!1,H);pe(r)}function ut(e,t,n){st=Dt;const r=Re(e,t,!1,H),o=de&&we(h,de.id);o&&(r.suspense=o),r.user=!0,C?C.push(r):pe(r)}function S(e,t,n){n=n?Object.assign({},me,n):me;const r=Re(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,pe(r),dt.bind(r)}function I(e){const t=x;x=null;try{return e()}finally{x=t}}function _t(e,t,n){const r=Array.isArray(e);let o,i=n&&n.defer;return l=>{let s;if(r){s=Array(e.length);for(let c=0;c<e.length;c++)s[c]=e[c]()}else s=e();if(i){i=!1;return}const a=I(()=>t(s,o,l));return o=s,a}}function qt(e){ut(()=>I(e))}function ie(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Ue(e){W||(W=Symbol("error")),h===null||(h.context===null?h.context={[W]:[e]}:h.context[W]?h.context[W].push(e):h.context[W]=[e])}function ct(){return h}function Tt(e,t){const n=h;h=e;try{return M(t,!0)}finally{h=n}}function Rt(e){if(f&&f.running)return e(),f.done;const t=x,n=h;return Promise.resolve().then(()=>{x=t,h=n;let r;return de&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),M(e,!1),x=h=null,r?r.done:void 0})}function Lt(e){C.push.apply(C,e),e.length=0}function se(e,t){const n=Symbol("context");return{id:n,Provider:Xt(n),defaultValue:e}}function le(e){let t;return(t=we(h,e.id))!==void 0?t:e.defaultValue}function ft(e){const t=S(e),n=S(()=>He(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let de;function kt(){return de||(de=se({}))}function dt(){const e=f&&f.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===H||e&&this.tState===H)pe(this);else{const t=v;v=null,M(()=>Ee(this),!1),v=t}if(x){const t=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(t)):(x.sources=[this],x.sourceSlots=[t]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function ht(e,t,n){let r=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(f){const o=f.running;(o||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&M(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],l=f&&f.running;l&&f.disposed.has(i)||((l&&!i.tState||!l&&!i.state)&&(i.pure?v.push(i):C.push(i),i.observers&&gt(i)),l?i.tState=H:i.state=H)}if(v.length>1e6)throw v=[],new Error},!1)}return t}function pe(e){if(!e.fn)return;ne(e);const t=h,n=x,r=Te;x=h=e,je(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{M(()=>{f&&(f.running=!0),x=h=e,je(e,e.tValue,r),x=h=null},!1)}),x=n,h=t}function je(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(f&&f.running?e.tState=H:e.state=H),Ot(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ht(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function Re(e,t,n,r=H,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=r),h===null||h!==lt&&(f&&f.running&&h.pure?h.tOwned?h.tOwned.push(i):h.tOwned=[i]:h.owned?h.owned.push(i):h.owned=[i]),i}function xe(e){const t=f&&f.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===z||t&&e.tState===z)return Ee(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Te);){if(t&&f.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,i=n[r+1];for(;(o=o.owner)&&o!==i;)if(f.disposed.has(o))return}if(!t&&e.state===H||t&&e.tState===H)pe(e);else if(!t&&e.state===z||t&&e.tState===z){const o=v;v=null,M(()=>Ee(e,n[0]),!1),v=o}}}function M(e,t){if(v)return e();let n=!1;t||(v=[]),C?n=!0:C=[],Te++;try{const r=e();return It(n),r}catch(r){v||(C=null),Ot(r)}}function It(e){if(v&&(pt(v),v=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const r=f.sources,o=f.disposed;C.push.apply(C,f.effects),t=f.resolve;for(const i of C)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,M(()=>{for(const i of o)ne(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let l=0,s=i.owned.length;l<s;l++)ne(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ve(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,C),C=null,Ve(!0);return}}const n=C;C=null,n.length&&M(()=>st(n),!1),t&&t()}function pt(e){for(let t=0;t<e.length;t++)xe(e[t])}function Dt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:xe(r)}for(O.context&&fe(),t=0;t<n;t++)xe(e[t])}function Ee(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(!n&&o.state===H||n&&o.tState===H?o!==t&&xe(o):(!n&&o.state===z||n&&o.tState===z)&&Ee(o,t))}}function gt(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=z:r.state=z,r.pure?v.push(r):C.push(r),r.observers&&gt(r))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),l=n.observerSlots.pop();r<o.length&&(i.sourceSlots[l]=r,o[r]=i,n.observerSlots[r]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)ne(e.tOwned[t]);delete e.tOwned}yt(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function yt(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)yt(e.owned[n])}function Bt(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ot(e){e=Bt(e);const t=W&&we(h,W);if(!t)throw e;for(const n of t)n(e)}function we(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:we(e.owner,t):void 0}function He(e){if(typeof e=="function"&&!e.length)return He(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=He(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Xt(e,t){return function(r){let o;return T(()=>o=I(()=>(h.context={[e]:r.value},ft(()=>r.children))),void 0),o}}function g(e,t){return I(()=>e(t||{}))}function Oe(){return!0}const Ft={get(e,t,n){return t===$e?n:e.get(t)},has(e,t){return t===$e?!0:e.has(t)},set:Oe,deleteProperty:Oe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Oe,deleteProperty:Oe}},ownKeys(e){return e.keys()}};function ve(e){return(e=typeof e=="function"?e():e)?e:{}}function Mt(...e){let t=!1;for(let r=0;r<e.length;r++){const o=e[r];t=t||!!o&&$e in o,e[r]=typeof o=="function"?(t=!0,S(o)):o}if(t)return new Proxy({get(r){for(let o=e.length-1;o>=0;o--){const i=ve(e[o])[r];if(i!==void 0)return i}},has(r){for(let o=e.length-1;o>=0;o--)if(r in ve(e[o]))return!0;return!1},keys(){const r=[];for(let o=0;o<e.length;o++)r.push(...Object.keys(ve(e[o])));return[...new Set(r)]}},Ft);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const o=Object.getOwnPropertyDescriptors(e[r]);for(const i in o)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const s=(e[l]||{})[i];if(s!==void 0)return s}}})}return n}let Vt=0;function Ut(){const e=O.context;return e?`${e.id}${e.count++}`:`cl-${Vt++}`}function jt(e){let t=!1;const n=e.keyed,r=S(()=>e.when,void 0,{equals:(o,i)=>t?o===i:!o==!i});return S(()=>{const o=r();if(o){const i=e.children,l=typeof i=="function"&&i.length>0;return t=n||l,l?I(()=>i(o)):i}return e.fallback},void 0,void 0)}function Kt(e){let t=!1,n=!1;const r=(l,s)=>l[0]===s[0]&&(t?l[1]===s[1]:!l[1]==!s[1])&&l[2]===s[2],o=ft(()=>e.children),i=S(()=>{let l=o();Array.isArray(l)||(l=[l]);for(let s=0;s<l.length;s++){const a=l[s].when;if(a)return n=!!l[s].keyed,[s,a,l[s]]}return[-1]},void 0,{equals:r});return S(()=>{const[l,s,a]=i();if(l<0)return e.fallback;const c=a.children,d=typeof c=="function"&&c.length>0;return t=n||d,d?I(()=>c(s)):c},void 0,void 0)}function Ke(e){return e}let te;function mt(){te&&[...te].forEach(e=>e())}function Wt(e){let t,n;O.context&&O.load&&(n=O.load(O.context.id+O.context.count))&&(t=n[0]);const[r,o]=b(t,void 0);return te||(te=new Set),te.add(o),ie(()=>te.delete(o)),S(()=>{let i;if(i=r()){const l=e.fallback,s=typeof l=="function"&&l.length?I(()=>l(i,()=>o())):l;return Ue(o),s}return Ue(o),e.children},void 0,void 0)}const zt=se();function Gt(e){let t=0,n,r,o,i,l;const[s,a]=b(!1),c=kt(),d={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:s,effects:[],resolved:!1},w=ct();if(O.context&&O.load){const R=O.context.id+O.context.count;let $=O.load(R);if($&&(o=$[0])&&o!=="$$f"){(typeof o!="object"||!("then"in o))&&(o=Promise.resolve(o));const[V,_]=b(void 0,{equals:!1});i=V,o.then(D=>{if(D||O.done)return D&&(l=D),_();O.gather(R),fe(r),_(),fe()})}}const A=le(zt);A&&(n=A.register(d.inFallback));let P;return ie(()=>P&&P()),g(c.Provider,{value:d,get children(){return S(()=>{if(l)throw l;if(r=O.context,i)return i(),i=void 0;r&&o==="$$f"&&fe();const R=S(()=>e.children);return S($=>{const V=d.inFallback(),{showContent:_=!0,showFallback:D=!0}=n?n():{};if((!V||o&&o!=="$$f")&&_)return d.resolved=!0,P&&P(),P=r=o=void 0,Lt(d.effects),R();if(!!D)return P?$:at(U=>(P=U,r&&(fe({id:r.id+"f",count:0}),r=void 0),e.fallback),w)})})}})}const Jt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Qt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Jt]),Yt=new Set(["innerHTML","textContent","innerText","children"]),Zt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),We=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),en=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),tn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function nn(e,t,n){let r=n.length,o=t.length,i=r,l=0,s=0,a=t[o-1].nextSibling,c=null;for(;l<o||s<i;){if(t[l]===n[s]){l++,s++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===l){const d=i<r?s?n[s-1].nextSibling:n[i-s]:a;for(;s<i;)e.insertBefore(n[s++],d)}else if(i===s)for(;l<o;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[s]===t[o-1]){const d=t[--o].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--i],d),t[o]=n[i]}else{if(!c){c=new Map;let w=s;for(;w<i;)c.set(n[w],w++)}const d=c.get(t[l]);if(d!=null)if(s<d&&d<i){let w=l,A=1,P;for(;++w<o&&w<i&&!((P=c.get(t[w]))==null||P!==d+A);)A++;if(A>d-s){const R=t[l];for(;s<d;)e.insertBefore(n[s++],R)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const ze="_$DX_DELEGATE";function on(e,t,n,r={}){let o;return at(i=>{o=i,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function Y(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function ge(e,t=window.document){const n=t[ze]||(t[ze]=new Set);for(let r=0,o=e.length;r<o;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,cn))}}function be(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function rn(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function oe(e,t){t==null?e.removeAttribute("class"):e.className=t}function xt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function sn(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let i,l;for(i=0,l=o.length;i<l;i++){const s=o[i];!s||s==="undefined"||t[s]||(Ge(e,s,!1),delete n[s])}for(i=0,l=r.length;i<l;i++){const s=r[i],a=!!t[s];!s||s==="undefined"||n[s]===a||!a||(Ge(e,s,!0),n[s]=a)}return n}function ln(e,t,n){if(!t)return n?be(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function he(e,t={},n,r){const o={};return r||T(()=>o.children=re(e,t.children,o.children)),T(()=>t.ref&&t.ref(e)),T(()=>an(e,t,n,!0,o,!0)),o}function k(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return re(e,t,r,n);T(o=>re(e,t(),o,n),r)}function an(e,t,n,r,o={},i=!1){t||(t={});for(const l in o)if(!(l in t)){if(l==="children")continue;o[l]=Je(e,l,null,o[l],n,i)}for(const l in t){if(l==="children"){r||re(e,t.children);continue}const s=t[l];o[l]=Je(e,l,s,o[l],n,i)}}function un(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ge(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function Je(e,t,n,r,o,i){let l,s,a;if(t==="style")return ln(e,n,r);if(t==="classList")return sn(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),d=en.has(c);if(!d&&r){const w=Array.isArray(r)?r[0]:r;e.removeEventListener(c,w)}(d||n)&&(xt(e,c,n,d),d&&ge([c]))}else if((a=Yt.has(t))||!o&&(We[t]||(s=Qt.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?oe(e,n):l&&!s&&!a?e[un(t)]=n:e[We[t]||t]=n;else{const c=o&&t.indexOf(":")>-1&&tn[t.split(":")[0]];c?rn(e,c,t,n):be(e,Zt[t]||t,n)}return n}function cn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),O.registry&&!O.done&&(O.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function re(e,t,n,r,o){for(O.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(O.context)return n;if(i==="number"&&(t=t.toString()),l){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=ee(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(O.context)return n;n=ee(e,n,r)}else{if(i==="function")return T(()=>{let s=t();for(;typeof s=="function";)s=s();n=re(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],a=n&&Array.isArray(n);if(_e(s,t,n,o))return T(()=>n=re(e,s,n,r,!0)),()=>n;if(O.context){if(!s.length)return n;for(let c=0;c<s.length;c++)if(s[c].parentNode)return n=s}if(s.length===0){if(n=ee(e,n,r),l)return n}else a?n.length===0?Qe(e,s,r):nn(e,n,s):(n&&ee(e),Qe(e,s));n=s}else if(t instanceof Node){if(O.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=ee(e,n,r,t);ee(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function _e(e,t,n,r){let o=!1;for(let i=0,l=t.length;i<l;i++){let s=t[i],a=n&&n[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))o=_e(e,s,a)||o;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();o=_e(e,Array.isArray(s)?s:[s],Array.isArray(a)?a:[a])||o}else e.push(s),o=!0;else{const c=String(s);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return o}function Qe(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function ee(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const a=s.parentNode===e;!i&&!l?a?e.replaceChild(o,s):e.insertBefore(o,n):a&&s.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}function fn(e){return O.context?void 0:e.children}const Et=!1;function dn(e,t){e&&t&&on(e,t===document?t.body:t)}const Le=se(),hn=["title","meta"],Ye=e=>e.tag+(e.name?`.${e.name}"`:""),pn=e=>{if(!O.context){const o=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(o,i=>i.parentNode.removeChild(i))}const t=new Map;function n(o){if(o.ref)return o.ref;let i=document.querySelector(`[data-sm="${o.id}"]`);return i?(i.tagName.toLowerCase()!==o.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(o.tag)),i.removeAttribute("data-sm")):i=document.createElement(o.tag),i}const r={addClientTag:o=>{let i=Ye(o);if(hn.indexOf(o.tag)!==-1){t.has(i)||t.set(i,[]);let s=t.get(i),a=s.length;s=[...s,o],t.set(i,s);{let c=n(o);o.ref=c,he(c,o.props);let d=null;for(var l=a-1;l>=0;l--)if(s[l]!=null){d=s[l];break}c.parentNode!=document.head&&document.head.appendChild(c),d&&d.ref&&document.head.removeChild(d.ref)}return a}{let s=n(o);o.ref=s,he(s,o.props),s.parentNode!=document.head&&document.head.appendChild(s)}return-1},removeClientTag:(o,i)=>{const l=Ye(o);if(o.ref){const s=t.get(l);if(s){if(o.ref.parentNode){o.ref.parentNode.removeChild(o.ref);for(let a=i-1;a>=0;a--)s[a]!=null&&document.head.appendChild(s[a].ref)}s[i]=null,t.set(l,s)}else o.ref.parentNode&&o.ref.parentNode.removeChild(o.ref)}}};return g(Le.Provider,{value:r,get children(){return e.children}})},bt=(e,t)=>{const n=Ut();if(!le(Le))throw new Error("<MetaProvider /> should be in the tree");return gn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function gn(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=le(Le);T(()=>{{let o=t(e);ie(()=>n(e,o))}})}const yn=e=>bt("title",e),Ze=e=>bt("meta",e);function On(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function mn([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function xn(e){try{return document.querySelector(e)}catch{return null}}function En(e,t){const n=xn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function bn(e,t,n,r){let o=!1;const i=s=>typeof s=="string"?{value:s}:s,l=mn(b(i(e()),{equals:(s,a)=>s.value===a.value}),void 0,s=>(!o&&t(s),s));return n&&ie(n((s=e())=>{o=!0,l[1](i(s)),o=!1})),{signal:l,utils:r}}function wn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:b({value:""})};return e}function Sn(){return bn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),En(window.location.hash.slice(1),n)},e=>On(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Cn(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,i){if(n)return!(n=!1);const l={to:o,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const s of e)s.listener({...l,from:s.location,retry:a=>{a&&(n=!0),s.navigate(o,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const vn=/^(?:[a-z0-9]+:)?\/\//i,Nn=/^\/+|\/+$/g;function Ne(e,t=!1){const n=e.replace(Nn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Ae(e,t,n){if(vn.test(t))return;const r=Ne(e),o=n&&Ne(n);let i="";return!o||t.startsWith("/")?i=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+o:i=o,(i||"/")+Ne(t,!i)}function An(e,t){if(e==null)throw new Error(t);return e}function Pn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function $n(e){const t=new Map,n=ct();return new Proxy({},{get(r,o){return t.has(o)||Tt(n,()=>t.set(o,S(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const Hn=100,wt=se(),_n=se(),qn=()=>An(le(wt),"Make sure your app is wrapped in a <Router />");let et;const Tn=()=>qn().location;function Rn(e,t){const n=new URL("http://sar"),r=S(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),o=S(()=>r().pathname),i=S(()=>r().search,!0),l=S(()=>r().hash),s=S(()=>"");return{get pathname(){return o()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return s()},query:$n(_t(i,()=>Pn(r())))}}function Ln(e,t="",n,r){const{signal:[o,i],utils:l={}}=wn(e),s=l.parsePath||(y=>y),a=l.renderPath||(y=>y),c=l.beforeLeave||Cn(),d=Ae("",t),w=void 0;if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!o().value&&i({value:d,replace:!0,scroll:!1});const[A,P]=b(!1),R=async y=>{P(!0);try{await Rt(y)}finally{P(!1)}},[$,V]=b(o().value),[_,D]=b(o().state),U=Rn($,_),G=[],j={pattern:d,params:{},path:()=>d,outlet:()=>null,resolvePath(y){return Ae(d,y)}};if(n)try{et=j,j.data=n({data:void 0,params:{},location:U,navigate:Z(j)})}finally{et=void 0}function ae(y,p,m){I(()=>{if(typeof p=="number"){p&&(l.go?c.confirm(p,m)&&l.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:B,resolve:q,scroll:N,state:X}={replace:!1,resolve:!0,scroll:!0,...m},L=q?y.resolvePath(p):Ae("",p);if(L===void 0)throw new Error(`Path '${p}' is not a routable path`);if(G.length>=Hn)throw new Error("Too many redirects");const J=$();if((L!==J||X!==_())&&!Et){if(c.confirm(L,m)){const ye=G.push({value:J,replace:B,scroll:N,state:_()});R(()=>{V(L),D(X),mt()}).then(()=>{G.length===ye&&Se({value:L,state:X})})}}})}function Z(y){return y=y||le(_n)||j,(p,m)=>ae(y,p,m)}function Se(y){const p=G[0];p&&((y.value!==p.value||y.state!==p.state)&&i({...y,replace:p.replace,scroll:p.scroll}),G.length=0)}T(()=>{const{value:y,state:p}=o();I(()=>{y!==$()&&R(()=>{V(y),D(p)})})});{let y=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const m=p.composedPath().find(J=>J instanceof Node&&J.nodeName.toUpperCase()==="A");if(!m||!m.hasAttribute("link"))return;const B=m.href;if(m.target||!B&&!m.hasAttribute("state"))return;const q=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||q&&q.includes("external"))return;const N=new URL(B);if(N.origin!==window.location.origin||d&&N.pathname&&!N.pathname.toLowerCase().startsWith(d.toLowerCase()))return;const X=s(N.pathname+N.search+N.hash),L=m.getAttribute("state");p.preventDefault(),ae(j,X,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:L&&JSON.parse(L)})};var K=y;ge(["click"]),document.addEventListener("click",y),ie(()=>document.removeEventListener("click",y))}return{base:j,out:w,location:U,isRouting:A,renderPath:a,parsePath:s,navigatorFactory:Z,beforeLeave:c}}const kn=e=>{const{source:t,url:n,base:r,data:o,out:i}=e,l=t||Sn(),s=Ln(l,r,o);return g(wt.Provider,{value:s,get children(){return e.children}})};const St=se({}),In=Tn,Dn="$FETCH",Bn=Y('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>');function Xn(e){return g(Wt,{fallback:(t,n)=>g(jt,{get when(){return!e.fallback},get fallback(){return S(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return g(Fn,{error:t})}}),get children(){return e.children}})}function Fn(e){return ut(()=>console.error(e.error)),(()=>{const t=Bn.cloneNode(!0),n=t.firstChild,r=n.firstChild,o=r.nextSibling,i=o.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),k(r,()=>e.error.message),xt(o,"click",mt,!0),o.style.setProperty("color","rgba(252, 165, 165)"),o.style.setProperty("background-color","rgb(153, 27, 27)"),o.style.setProperty("border-radius","5px"),o.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),k(i,()=>e.error.stack),t})()}ge(["click"]);const Mn=!1,Vn=!1,Un=!1;function jn(){return le(St),[Vn,Un,g(fn,{get children(){return Et}}),Mn]}function Kn(e){return he(document.documentElement,e,!1,!0),e.children}function Wn(e){return he(document.head,e,!1,!0),e.children}function zn(e){return he(document.body,e,!1,!0),e.children}const Gn=20;var u=(e=>(e.EXO="EXO",e.ENDO="ENDO",e))(u||{}),E=(e=>(e.APPEAR="APPEAR",e.DISAPPEAR="DISAPPEAR",e.VISIBLE="VISIBLE",e.INVISIBLE="INVISIBLE",e))(E||{});Object.values(E);const Ct=800;function ue(e){return new Promise(t=>{let n;n=setTimeout(()=>t(n),e)})}const Jn=Y("<div></div>"),Qn=Y("<sub></sub>"),Yn=Y("<span></span>");function Zn(e){let t="opacity-0";switch(e){case E.VISIBLE:t="opacity-100";break;case E.INVISIBLE:t="opacity-0";break;case E.DISAPPEAR:t="formula-disappear";break;case E.APPEAR:t="formula-appear";break}return t}function eo({formula:e,formulaAnimationStep:t}){const n=S(()=>{const r=[];let o=[];function i(){o.length>0&&(r.push({text:o.join(""),sub:!1}),o=[])}let l=0;const s=e();for(;!(s===void 0||s==="");){let a=s.charAt(l);if(a==="")break;if(l+=1,a!==" ")if(a==="="||a==="+")i(),r.push({text:`\u2009${a}\u2009`,sub:!1});else if(a>="0"&&a<="9"){for(;;){const c=s.charAt(l);if(c===""||c<"0"||c>"9")break;a=a+c,l+=1}o.length===0?o.push(a):(i(),r.push({text:a,sub:!0}))}else o.push(a)}return i(),r.length===0&&r.push({text:"-",sub:!1}),r});return(()=>{const r=Jn.cloneNode(!0);return k(r,()=>n().map(o=>o.sub===!0?(()=>{const i=Qn.cloneNode(!0);return k(i,()=>o.text),i})():(()=>{const i=Yn.cloneNode(!0);return k(i,()=>o.text),i})())),T(()=>oe(r,Zn(t()))),r})()}const to="https://vvtu.github.io/exo-endo-build/assets/exothermic.0ec48e02.png",no="https://vvtu.github.io/exo-endo-build/assets/endothermic.da9dd79b.png";function Pe(e){const t=e.map(n=>[Math.random(),n]);return t.sort((n,r)=>n[0]-r[0]),t.map(n=>n[1])}function oo(e){const t=Math.min(tt.length,nt.length);if(t*2<e)throw new Error("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F \u0438\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0444\u043E\u0440\u043C\u0443\u043B");return Pe([...Pe(tt.slice(0,t)),...Pe(nt.slice(0,t))]).slice(0,e)}const tt=[{equation:"CH4(\u0433)+2O2(\u0433)=CO2(\u0433)+2H2O(\u0433)",type:u.EXO,explanation:"exo1"},{equation:"2H2(\u0433)+O2(\u0433)=2H2O(\u0433)",type:u.EXO,explanation:"exo1"},{equation:"C(\u0442\u0432)+2H2(\u0433)=CH4(\u0433)",type:u.EXO,explanation:"exo1"},{equation:"NaOH+HCl=NaCl+H2O",type:u.EXO,explanation:"exo1"},{equation:"C2H2+2,5O2=2CO2+H2O",type:u.EXO,explanation:"exo1"},{equation:"4NO2(\u0433)+O2(\u0433)+2H2O(\u0433)=4HNO3(\u0436)",type:u.EXO,explanation:"exo1"},{equation:"SO3+H2O=H2SO4",type:u.EXO,explanation:"exo1"},{equation:"C2H4+3O2=2CO2+2H2O",type:u.EXO,explanation:"exo1"},{equation:"3C2H2=C6H6",type:u.EXO,explanation:"exo1"},{equation:"2NO+O2=2NO2",type:u.EXO,explanation:"exo1"},{equation:"2Mg+O2=MgO2",type:u.EXO,explanation:"exo1"},{equation:"2CuS+3O2=2CuO+2SO2",type:u.EXO,explanation:"exo1"},{equation:"2KClO3=2KCl+3O2",type:u.EXO,explanation:"exo1"},{equation:"2CO+O2=2CO2",type:u.EXO,explanation:"exo1"},{equation:"2KMnO4=K2MnO4+MnO2+O2",type:u.EXO,explanation:"exo1"},{equation:"H2SO4+2NaOH=Na2SO4+2H2O",type:u.EXO,explanation:"exo1"},{equation:"Ba(OH)2+2HNO3=Ba(NO3)2+H2O",type:u.EXO,explanation:"exo1"},{equation:"4Al+3O2=2Al2O3",type:u.EXO,explanation:"exo1"},{equation:"4Cr+3O2=2Cr2O3",type:u.EXO,explanation:"exo1"},{equation:"2C2H6+7O2=4CO2+6H2O",type:u.EXO,explanation:"exo1"},{equation:"2C4H10+13O2=8CO2+10H2O",type:u.EXO,explanation:"exo1"},{equation:"(NH4)2Cr2O7=N2+Cr2O3+4H2O",type:u.EXO,explanation:"exo1"},{equation:"2NH3+CO2=(NH2)2CO+H2O",type:u.EXO,explanation:"exo1"},{equation:"2SO2+O2=2SO3",type:u.EXO,explanation:"exo1"},{equation:"4Fe+3O2=2Fe2O3",type:u.EXO,explanation:"exo1"},{equation:"C+O2=CO2",type:u.EXO,explanation:"exo1"},{equation:"CaO+H2O=Ca(OH)2",type:u.EXO,explanation:"exo1"},{equation:"NH4NO2=N2+2H2O",type:u.EXO,explanation:"exo1"},{equation:"P4+5O2=P4H10",type:u.EXO,explanation:"exo1"},{equation:"N2+3H2=2NH3",type:u.EXO,explanation:"exo1"},{equation:"C6H12O6+6O2=6CO2+6H2O",type:u.EXO,explanation:"exo1"},{equation:"H2+F2=2HF",type:u.EXO,explanation:"exo1"},{equation:"CaO(\u0442\u0432)+H2O(\u0436)=Ca(OH)2(\u0442\u0432)",type:u.EXO,explanation:"exo1"},{equation:"2NO=N2+O2",type:u.EXO,explanation:"exo1"},{equation:"2Na+2H2O=2NaOH+H2",type:u.EXO,explanation:"exo1"}],nt=[{equation:"2C+2H=C2H2",type:u.ENDO,explanation:"endo11"},{equation:"2HgO=2Hg+O2",type:u.ENDO,explanation:"endo11"},{equation:"2Fe2O3+3C=4Fe+3CO2",type:u.ENDO,explanation:"endo11"},{equation:"4NH3+5O2=4NO+6H2O",type:u.ENDO,explanation:"endo11"},{equation:"2CuNO3=2CuO+4NO2+O2",type:u.ENDO,explanation:"endo11"},{equation:"Fe2O3+H2=2Fe+H2O",type:u.ENDO,explanation:"endo11"},{equation:"2Ag2O=4Ag+O2",type:u.ENDO,explanation:"endo11"},{equation:"2Mg(NO3)2=2MgO+4NO2+O2",type:u.ENDO,explanation:"endo11"},{equation:"CaCO3=CaO+CO2",type:u.ENDO,explanation:"endo11"},{equation:"Ca(OH)2=CaO+H2O",type:u.ENDO,explanation:"endo11"},{equation:"NaNO3=2NaNO2+O2",type:u.ENDO,explanation:"endo11"},{equation:"2KNO3\u21922KNO2+O2",type:u.ENDO,explanation:"endo11"},{equation:"H2O=2H2+O2",type:u.ENDO,explanation:"endo11"},{equation:"C2H6=C2H4+H2",type:u.ENDO,explanation:"endo11"},{equation:"NH4NO3=N2O+H2O",type:u.ENDO,explanation:"endo11"},{equation:"2SO3=2SO2+O2",type:u.ENDO,explanation:"endo11"},{equation:"C+CO2=2CO",type:u.ENDO,explanation:"endo11"},{equation:"H2+Cl2=2HCl",type:u.ENDO,explanation:"endo11"},{equation:"2AgBr=2Ag+Br2",type:u.ENDO,explanation:"endo11"},{equation:"2FeCl3=2FeCl2+Cl2",type:u.ENDO,explanation:"endo11"},{equation:"Cu2CH2O5=2CuO+H2O+CO2",type:u.ENDO,explanation:"endo11"},{equation:"2HF=H2+F2",type:u.ENDO,explanation:"endo11"},{equation:"C+H2O=CO+H2",type:u.ENDO,explanation:"endo11"},{equation:"NH3=N2+3H2",type:u.ENDO,explanation:"endo11"},{equation:"2P2O5=4P+5O2",type:u.ENDO,explanation:"endo11"},{equation:"N2(\u0433)+O2(\u0433)=2NO(\u0433)",type:u.ENDO,explanation:"endo11"},{equation:"3C+Fe2O3=3CO+2Fe",type:u.ENDO,explanation:"endo11"},{equation:"KClO4=KCl+2O2",type:u.ENDO,explanation:"endo11"},{equation:"3O2(\u0433)=2O3(\u0433)",type:u.ENDO,explanation:"endo11"},{equation:"6CO2(\u0433)+6H2O(\u0436)=C6H12O6(\u0442\u0432)+6O2(\u0433)",type:u.ENDO,explanation:"endo11"},{equation:"2HgO(\u0442\u0432)=2Hg(\u0442\u0432)+O2",type:u.ENDO,explanation:"endo11"},{equation:"C4H10=C4H8+H2",type:u.ENDO,explanation:"endo11"},{equation:"H2+I2=2HI",type:u.ENDO,explanation:"endo11"},{equation:"4NH3+5O2=4NO+6H2O",type:u.ENDO,explanation:"endo11"}],ro="https://vvtu.github.io/exo-endo-build/assets/477552__abacagi__explosion-sfx.fecfda49.mp3",io="https://vvtu.github.io/exo-endo-build/assets/133817__prutsik__space-swoosh.60491d2f.mp3",so="https://vvtu.github.io/exo-endo-build/assets/432761__xpoki__lazershot.9318bd59.mp3",lo="https://vvtu.github.io/exo-endo-build/assets/162485__kastenfrosch__space.9e366244.mp3",ao="https://vvtu.github.io/exo-endo-build/assets/135510__chriddof__space-bloop.f827dc21.mp3";var qe=(e=>(e.BEST_RESULTS="BEST_RESULTS",e.ERROR_RESULTS="ERROR_RESULTS",e.FALSE_SHOT="FALSE_SHOT",e.START="START",e.TRUE_SHOT="TRUE_SHOT",e))(qe||{});function uo(){const e=window.AudioContext||window.webkitAudioContext;console.log("%c AudioContext = ","color: #bada55",e);const t=new e,n={BEST_RESULTS:ro,ERROR_RESULTS:io,FALSE_SHOT:so,START:lo,TRUE_SHOT:ao};function r(l,s){return new Promise((a,c)=>{if(!l){c("Missing url!");return}if(!s){c("Missing audio context!");return}let d=new XMLHttpRequest;d.open("GET",l),d.responseType="arraybuffer",d.onload=function(){let w=d.response;s.decodeAudioData(w,A=>{a(A)})},d.onerror=function(){c("An error occurred.")},d.send()})}const o=Object.create(null);Object.entries(n).forEach(([l,s])=>{o[l]=r(s,t)});function i(l){o[l]?.then(s=>{const a=t.createBufferSource();a.buffer=s,a.connect(t.destination),a.start()})}return{playSound:i}}const co=Y('<main class="gridContainer"><div class="gridFromula"><div class="text-sky-700 tracking-wider font-normal whitespace-nowrap"></div></div><div class="gridExo"><div><button class="btn-picture text-exothermic-color"><div class="text-lg font-bold"></div><img alt="\u042D\u043A\u0437\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F"><div class="text-xs">\u042D\u043A\u0437\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F</div></button></div></div><div class="gridCountInfo font-normal"><div><span class="text-exothermic-color"></span><span> : </span><span class="text-endothermic-color"></span></div></div><div class="gridEndo"><div><button class="btn-picture text-endothermic-color"><div class="text-lg font-bold"></div><img alt="\u042D\u043D\u0434\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F"><div class="text-xs">\u042D\u043D\u0434\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F</div></button></div></div></main>'),ce=Ct-20;function ot({buttonName:e,state:t,answerIsTrue:n}){let r="opacity-0";switch(t){case E.VISIBLE:r="opacity-100";break;case E.INVISIBLE:r="opacity-0";break;case E.DISAPPEAR:r=n?"formula-disappear":e==="exo"?"formula-disappear-false-exo":"formula-disappear-false-endo";break;case E.APPEAR:r="formula-appear";break}return r}function fo(){const[e,t]=b(0),[n,r]=b(),[o,i]=b(0),[l,s]=b(0),[a,c]=b(0),[d,w]=b(0),[A,P]=b(oo(Gn)),[R,$]=b(E.INVISIBLE),[V,_]=b({buttonName:"exo",state:E.INVISIBLE,answerIsTrue:!0}),[D,U]=b({buttonName:"endo",state:E.INVISIBLE,answerIsTrue:!0}),[G,j]=b(A()[0].equation),[ae,Z]=b(!0),Se=S(()=>A()[e()]);let K;qt(async()=>{document.documentElement.style.setProperty("--main-duration",`${Ct}ms`),r(uo()),$(E.INVISIBLE),_({buttonName:"exo",state:E.INVISIBLE,answerIsTrue:!0}),U({buttonName:"endo",state:E.INVISIBLE,answerIsTrue:!0}),K=await ue(ce/4),_({buttonName:"exo",state:E.APPEAR,answerIsTrue:!0}),U({buttonName:"endo",state:E.APPEAR,answerIsTrue:!0}),$(E.APPEAR),K=void 0,K=await ue(ce/4),Z(!1);const m=window.AudioContext||window.webkitAudioContext;console.log("%c AudioContext = ","color: #bada55",m)});async function y(p){Z(!0);const m=e()+1,B=p===u.EXO?N=>_({buttonName:"exo",...N}):N=>U({buttonName:"endo",...N}),q=p===Se().type;q?n()?.playSound(qe.TRUE_SHOT):n()?.playSound(qe.FALSE_SHOT),B({state:E.DISAPPEAR,answerIsTrue:q}),K=await ue(ce),p===u.EXO?(q&&i(o()+1),s(l()+1)):(q&&c(a()+1),w(d()+1)),B({state:E.APPEAR,answerIsTrue:!0}),$(E.DISAPPEAR),K=await ue(ce),t(m),j(A()[m].equation),$(E.APPEAR),K=await ue(ce),Z(!1)}return ie(()=>K&&clearTimeout(K)),(()=>{const p=co.cloneNode(!0),m=p.firstChild,B=m.firstChild,q=m.nextSibling,N=q.firstChild,X=N.firstChild,L=X.firstChild,J=L.nextSibling,ye=q.nextSibling,vt=ye.firstChild,ke=vt.firstChild,Nt=ke.nextSibling,At=Nt.nextSibling,Pt=ye.nextSibling,Ie=Pt.firstChild,Ce=Ie.firstChild,De=Ce.firstChild,$t=De.nextSibling;return k(B,g(eo,{formula:G,formulaAnimationStep:R})),X.$$click=()=>y(u.EXO),k(L,()=>`${o()} : ${l()}`),be(J,"src",to),k(ke,()=>o()+a()),k(At,()=>l()+d()),Ce.$$click=()=>y(u.ENDO),k(De,()=>`${a()} : ${d()}`),be($t,"src",no),T(F=>{const Be=ot(V()),Xe=ae(),Fe=ot(D()),Me=ae();return Be!==F._v$&&oe(N,F._v$=Be),Xe!==F._v$2&&(X.disabled=F._v$2=Xe),Fe!==F._v$3&&oe(Ie,F._v$3=Fe),Me!==F._v$4&&(Ce.disabled=F._v$4=Me),F},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()}ge(["click"]);const ho=Y('<nav class="bg-sky-800"><ul class="container flex items-center p-3 text-gray-200"><li><button>\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442</button></li><li><button>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</button></li></ul></nav>'),po=Y("<div>111</div>"),Q=["\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442","\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F"];function rt(){const[e,t]=b(Q[0]);In();const n=r=>r===e()?"border-white":"border-transparent hover:border-sky-600";return g(Kn,{lang:"en",get children(){return[g(Wn,{get children(){return[g(yn,{children:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442"}),g(Ze,{charset:"utf-8"}),g(Ze,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),g(zn,{class:"font-sans screenMaxSize",get children(){return[g(Gt,{get children(){return g(Xn,{get children(){return[(()=>{const r=ho.cloneNode(!0),o=r.firstChild,i=o.firstChild,l=i.firstChild,s=i.nextSibling,a=s.firstChild;return l.$$click=()=>t(Q[0]),a.$$click=()=>t(Q[1]),T(c=>{const d=`border-b-2 ${n(Q[0])} mx-1.5 sm:mx-6`,w=`border-b-2 ${n(Q[1])} mx-1.5 sm:mx-6`;return d!==c._v$&&oe(i,c._v$=d),w!==c._v$2&&oe(s,c._v$2=w),c},{_v$:void 0,_v$2:void 0}),r})(),g(Kt,{get children(){return[g(Ke,{get when(){return e()===Q[0]},get children(){return g(fo,{})}}),g(Ke,{get when(){return e()===Q[1]},get children(){return po.cloneNode(!0)}})]}})]}})}}),g(jn,{})]}})]}})}ge(["click"]);const it=Object.values(Object.assign({}))[0],go=it?it.default:void 0,yo=()=>{let e={get request(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Dn,fetch};function t(n){return g(kn,Mt(n,{get children(){return g(rt,{})}}))}return g(St.Provider,{value:e,get children(){return g(pn,{get children(){return g(t,{data:go,get children(){return g(rt,{})}})}})}})};dn(()=>g(yo,{}),document);
