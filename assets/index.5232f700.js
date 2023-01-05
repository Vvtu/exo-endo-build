(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const y={};function Y(e){y.context=e}const lt=(e,t)=>e===t,le=Symbol("solid-proxy"),ce={equals:lt};let M=null,Ie=We;const P=1,q=2,Ve={owned:null,cleanups:null,context:null,owner:null};var d=null;let c=null,p=null,v=null,x=null,ve=0;const[qn,Ee]=E(!1);function He(e,t){const n=p,s=d,r=e.length===0,i=r?Ve:{owned:null,cleanups:null,context:null,owner:t||s},l=r?e:()=>e(()=>k(()=>K(i)));d=i,p=null;try{return N(l,!0)}finally{p=n,d=s}}function E(e,t){t=t?Object.assign({},ce,t):ce;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(c&&c.running&&c.sources.has(n)?r=r(n.tValue):r=r(n.value)),Ke(n,r));return[Ue.bind(n),s]}function $(e,t,n){const s=Se(e,t,!1,P);ne(s)}function ct(e,t,n){Ie=mt;const s=Se(e,t,!1,P),r=ee&&de(d,ee.id);r&&(s.suspense=r),s.user=!0,x?x.push(s):ne(s)}function b(e,t,n){n=n?Object.assign({},ce,n):ce;const s=Se(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ne(s),Ue.bind(s)}function k(e){const t=p;p=null;try{return e()}finally{p=t}}function ut(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const a=k(()=>t(o,r,l));return r=o,a}}function te(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Oe(e){M||(M=Symbol("error")),d===null||(d.context===null?d.context={[M]:[e]}:d.context[M]?d.context[M].push(e):d.context[M]=[e])}function De(){return d}function at(e,t){const n=d;d=e;try{return N(t,!0)}finally{d=n}}function ft(e){if(c&&c.running)return e(),c.done;const t=p,n=d;return Promise.resolve().then(()=>{p=t,d=n;let s;return ee&&(s=c||(c={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),N(e,!1),p=d=null,s?s.done:void 0})}function dt(e){x.push.apply(x,e),e.length=0}function z(e,t){const n=Symbol("context");return{id:n,Provider:bt(n),defaultValue:e}}function B(e){let t;return(t=de(d,e.id))!==void 0?t:e.defaultValue}function ht(e){const t=b(e),n=b(()=>me(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let ee;function gt(){return ee||(ee=z({}))}function Ue(){const e=c&&c.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===P||e&&this.tState===P)ne(this);else{const t=v;v=null,N(()=>ae(this),!1),v=t}if(p){const t=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(t)):(p.sources=[this],p.sourceSlots=[t]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return e&&c.sources.has(this)?this.tValue:this.value}function Ke(e,t,n){let s=c&&c.running&&c.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(c){const r=c.running;(r||!n&&c.sources.has(e))&&(c.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&N(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=c&&c.running;l&&c.disposed.has(i)||((l&&!i.tState||!l&&!i.state)&&(i.pure?v.push(i):x.push(i),i.observers&&Xe(i)),l?i.tState=P:i.state=P)}if(v.length>1e6)throw v=[],new Error},!1)}return t}function ne(e){if(!e.fn)return;K(e);const t=d,n=p,s=ve;p=d=e,ke(e,c&&c.running&&c.sources.has(e)?e.tValue:e.value,s),c&&!c.running&&c.sources.has(e)&&queueMicrotask(()=>{N(()=>{c&&(c.running=!0),p=d=e,ke(e,e.tValue,s),p=d=null},!1)}),p=n,d=t}function ke(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(c&&c.running?e.tState=P:e.state=P),Je(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ke(e,s,!0):c&&c.running&&e.pure?(c.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function Se(e,t,n,s=P,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return c&&c.running&&(i.state=0,i.tState=s),d===null||d!==Ve&&(c&&c.running&&d.pure?d.tOwned?d.tOwned.push(i):d.tOwned=[i]:d.owned?d.owned.push(i):d.owned=[i]),i}function ue(e){const t=c&&c.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===q||t&&e.tState===q)return ae(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ve);){if(t&&c.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(c.disposed.has(r))return}if(!t&&e.state===P||t&&e.tState===P)ne(e);else if(!t&&e.state===q||t&&e.tState===q){const r=v;v=null,N(()=>ae(e,n[0]),!1),v=r}}}function N(e,t){if(v)return e();let n=!1;t||(v=[]),x?n=!0:x=[],ve++;try{const s=e();return yt(n),s}catch(s){v||(x=null),Je(s)}}function yt(e){if(v&&(We(v),v=null),e)return;let t;if(c){if(!c.promises.size&&!c.queue.size){const s=c.sources,r=c.disposed;x.push.apply(x,c.effects),t=c.resolve;for(const i of x)"tState"in i&&(i.state=i.tState),delete i.tState;c=null,N(()=>{for(const i of r)K(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)K(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ee(!1)},!1)}else if(c.running){c.running=!1,c.effects.push.apply(c.effects,x),x=null,Ee(!0);return}}const n=x;x=null,n.length&&N(()=>Ie(n),!1),t&&t()}function We(e){for(let t=0;t<e.length;t++)ue(e[t])}function mt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ue(s)}for(y.context&&Y(),t=0;t<n;t++)ue(e[t])}function ae(e,t){const n=c&&c.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(!n&&r.state===P||n&&r.tState===P?r!==t&&ue(r):(!n&&r.state===q||n&&r.tState===q)&&ae(r,t))}}function Xe(e){const t=c&&c.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!t&&!s.state||t&&!s.tState)&&(t?s.tState=q:s.state=q,s.pure?v.push(s):x.push(s),s.observers&&Xe(s))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(c&&c.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)K(e.tOwned[t]);delete e.tOwned}ze(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}c&&c.running?e.tState=0:e.state=0,e.context=null}function ze(e,t){if(t||(e.tState=0,c.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)ze(e.owned[n])}function pt(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Je(e){e=pt(e);const t=M&&de(d,M);if(!t)throw e;for(const n of t)n(e)}function de(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:de(e.owner,t):void 0}function me(e){if(typeof e=="function"&&!e.length)return me(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=me(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function bt(e,t){return function(s){let r;return $(()=>r=k(()=>(d.context={[e]:s.value},ht(()=>s.children))),void 0),r}}function h(e,t){return k(()=>e(t||{}))}function oe(){return!0}const Ge={get(e,t,n){return t===le?n:e.get(t)},has(e,t){return t===le?!0:e.has(t)},set:oe,deleteProperty:oe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:oe,deleteProperty:oe}},ownKeys(e){return e.keys()}};function ge(e){return(e=typeof e=="function"?e():e)?e:{}}function pe(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&le in r,e[s]=typeof r=="function"?(t=!0,b(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const i=ge(e[r])[s];if(i!==void 0)return i}},has(s){for(let r=e.length-1;r>=0;r--)if(s in ge(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(ge(e[r])));return[...new Set(s)]}},Ge);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const i in r)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[i];if(o!==void 0)return o}}})}return n}function wt(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),r=le in e;r||t.push(Object.keys(s).filter(l=>!n.has(l)));const i=t.map(l=>{const o={};for(let a=0;a<l.length;a++){const u=l[a];!r&&!(u in e)||Object.defineProperty(o,u,s[u]?s[u]:{get(){return e[u]},set(){return!0},enumerable:!0})}return o});return r&&i.push(new Proxy({get(l){return n.has(l)?void 0:e[l]},has(l){return n.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!n.has(l))}},Ge)),i}let xt=0;function vt(){const e=y.context;return e?`${e.id}${e.count++}`:`cl-${xt++}`}function St(e){let t=!1;const n=e.keyed,s=b(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return b(()=>{const r=s();if(r){const i=e.children,l=typeof i=="function"&&i.length>0;return t=n||l,l?k(()=>i(r)):i}return e.fallback},void 0,void 0)}let U;function Qe(){U&&[...U].forEach(e=>e())}function Ct(e){let t,n;y.context&&y.load&&(n=y.load(y.context.id+y.context.count))&&(t=n[0]);const[s,r]=E(t,void 0);return U||(U=new Set),U.add(r),te(()=>U.delete(r)),b(()=>{let i;if(i=s()){const l=e.fallback,o=typeof l=="function"&&l.length?k(()=>l(i,()=>r())):l;return Oe(r),o}return Oe(r),e.children},void 0,void 0)}const Pt=z();function $t(e){let t=0,n,s,r,i,l;const[o,a]=E(!1),u=gt(),f={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:o,effects:[],resolved:!1},S=De();if(y.context&&y.load){const A=y.context.id+y.context.count;let T=y.load(A);if(T&&(r=T[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[V,_]=E(void 0,{equals:!1});i=V,r.then(R=>{if(R||y.done)return R&&(l=R),_();y.gather(A),Y(s),_(),Y()})}}const L=B(Pt);L&&(n=L.register(f.inFallback));let C;return te(()=>C&&C()),h(u.Provider,{value:f,get children(){return b(()=>{if(l)throw l;if(s=y.context,i)return i(),i=void 0;s&&r==="$$f"&&Y();const A=b(()=>e.children);return b(T=>{const V=f.inFallback(),{showContent:_=!0,showFallback:R=!0}=n?n():{};if((!V||r&&r!=="$$f")&&_)return f.resolved=!0,C&&C(),C=s=r=void 0,dt(f.effects),A();if(!!R)return C?T:He(re=>(C=re,s&&(Y({id:s.id+"f",count:0}),s=void 0),e.fallback),S)})})}})}const At=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Et=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...At]),Ot=new Set(["innerHTML","textContent","innerText","children"]),kt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ne=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Nt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Lt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Tt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,a=t[r-1].nextSibling,u=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const f=i<s?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],f)}else if(i===o)for(;l<r;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],f),t[r]=n[i]}else{if(!u){u=new Map;let S=o;for(;S<i;)u.set(n[S],S++)}const f=u.get(t[l]);if(f!=null)if(o<f&&f<i){let S=l,L=1,C;for(;++S<r&&S<i&&!((C=u.get(t[S]))==null||C!==f+L);)L++;if(L>f-o){const A=t[l];for(;o<f;)e.insertBefore(n[o++],A)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Le="_$DX_DELEGATE";function _t(e,t,n,s={}){let r;return He(i=>{r=i,t===document?e():O(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function I(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function he(e,t=window.document){const n=t[Le]||(t[Le]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Bt))}}function fe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Rt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function be(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ye(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function jt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(Te(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(Te(e,o,!0),n[o]=a)}return n}function Ft(e,t,n){if(!t)return n?fe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function W(e,t={},n,s){const r={};return s||$(()=>r.children=X(e,t.children,r.children)),$(()=>t.ref&&t.ref(e)),$(()=>Mt(e,t,n,!0,r,!0)),r}function O(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return X(e,t,s,n);$(r=>X(e,t(),r,n),s)}function Mt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=_e(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||X(e,t.children);continue}const o=t[l];r[l]=_e(e,l,o,r[l],n,i)}}function qt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Te(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function _e(e,t,n,s,r,i){let l,o,a;if(t==="style")return Ft(e,n,s);if(t==="classList")return jt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),f=Nt.has(u);if(!f&&s){const S=Array.isArray(s)?s[0]:s;e.removeEventListener(u,S)}(f||n)&&(Ye(e,u,n,f),f&&he([u]))}else if((a=Ot.has(t))||!r&&(Ne[t]||(o=Et.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?be(e,n):l&&!o&&!a?e[qt(t)]=n:e[Ne[t]||t]=n;else{const u=r&&t.indexOf(":")>-1&&Lt[t.split(":")[0]];u?Rt(e,u,t,n):fe(e,kt[t]||t,n)}return n}function Bt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function X(e,t,n,s,r){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(y.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=D(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(y.context)return n;n=D(e,n,s)}else{if(i==="function")return $(()=>{let o=t();for(;typeof o=="function";)o=o();n=X(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(we(o,t,n,r))return $(()=>n=X(e,o,n,s,!0)),()=>n;if(y.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=D(e,n,s),l)return n}else a?n.length===0?Re(e,o,s):Tt(e,n,o):(n&&D(e),Re(e,o));n=o}else if(t instanceof Node){if(y.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=D(e,n,s,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function we(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=we(e,o,a)||r;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();r=we(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||r}else e.push(o),r=!0;else{const u=String(o);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return r}function Re(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function D(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(r,o):e.insertBefore(r,n):a&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function It(e){return y.context?void 0:e.children}const Ze=!1;function Vt(e,t){e&&t&&_t(e,t===document?t.body:t)}const Ce=z(),Ht=["title","meta"],je=e=>e.tag+(e.name?`.${e.name}"`:""),Dt=e=>{if(!y.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,i=>i.parentNode.removeChild(i))}const t=new Map;function n(r){if(r.ref)return r.ref;let i=document.querySelector(`[data-sm="${r.id}"]`);return i?(i.tagName.toLowerCase()!==r.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(r.tag)),i.removeAttribute("data-sm")):i=document.createElement(r.tag),i}const s={addClientTag:r=>{let i=je(r);if(Ht.indexOf(r.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),a=o.length;o=[...o,r],t.set(i,o);{let u=n(r);r.ref=u,W(u,r.props);let f=null;for(var l=a-1;l>=0;l--)if(o[l]!=null){f=o[l];break}u.parentNode!=document.head&&document.head.appendChild(u),f&&f.ref&&document.head.removeChild(f.ref)}return a}{let o=n(r);r.ref=o,W(o,r.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(r,i)=>{const l=je(r);if(r.ref){const o=t.get(l);if(o){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let a=i-1;a>=0;a--)o[a]!=null&&document.head.appendChild(o[a].ref)}o[i]=null,t.set(l,o)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return h(Ce.Provider,{value:s,get children(){return e.children}})},et=(e,t)=>{const n=vt();if(!B(Ce))throw new Error("<MetaProvider /> should be in the tree");return Ut({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function Ut(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=B(Ce);$(()=>{{let r=t(e);te(()=>n(e,r))}})}const Kt=e=>et("title",e),Fe=e=>et("meta",e);function Wt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Xt([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function zt(e){try{return document.querySelector(e)}catch{return null}}function Jt(e,t){const n=zt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Gt(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=Xt(E(i(e()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!r&&t(o),o));return n&&te(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function Qt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:E({value:""})};return e}function Yt(){return Gt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),Jt(window.location.hash.slice(1),n)},e=>Wt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Zt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:a=>{a&&(n=!0),o.navigate(r,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const en=/^(?:[a-z0-9]+:)?\/\//i,tn=/^\/+|\/+$/g;function Z(e,t=!1){const n=e.replace(tn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ye(e,t,n){if(en.test(t))return;const s=Z(e),r=n&&Z(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+Z(t,!i)}function nn(e,t){if(e==null)throw new Error(t);return e}function rn(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function sn(e){const t=new Map,n=De();return new Proxy({},{get(s,r){return t.has(r)||at(n,()=>t.set(r,b(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const on=100,tt=z(),nt=z(),Pe=()=>nn(B(tt),"Make sure your app is wrapped in a <Router />");let xe;const ln=()=>xe||B(nt)||Pe().base,cn=e=>{const t=ln();return b(()=>t.resolvePath(e()))},un=e=>{const t=Pe();return b(()=>{const n=e();return n!==void 0?t.renderPath(n):n})};const rt=()=>Pe().location;function an(e,t){const n=new URL("http://sar"),s=b(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),r=b(()=>s().pathname),i=b(()=>s().search,!0),l=b(()=>s().hash),o=b(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:sn(ut(i,()=>rn(s())))}}function fn(e,t="",n,s){const{signal:[r,i],utils:l={}}=Qt(e),o=l.parsePath||(m=>m),a=l.renderPath||(m=>m),u=l.beforeLeave||Zt(),f=ye("",t),S=void 0;if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!r().value&&i({value:f,replace:!0,scroll:!1});const[L,C]=E(!1),A=async m=>{C(!0);try{await ft(m)}finally{C(!1)}},[T,V]=E(r().value),[_,R]=E(r().state),re=an(T,_),J=[],H={pattern:f,params:{},path:()=>f,outlet:()=>null,resolvePath(m){return ye(f,m)}};if(n)try{xe=H,H.data=n({data:void 0,params:{},location:re,navigate:Ae(H)})}finally{xe=void 0}function $e(m,g,w){k(()=>{if(typeof g=="number"){g&&(l.go?u.confirm(g,w)&&l.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:se,resolve:ie,scroll:j,state:G}={replace:!1,resolve:!0,scroll:!0,...w},F=ie?m.resolvePath(g):ye("",g);if(F===void 0)throw new Error(`Path '${g}' is not a routable path`);if(J.length>=on)throw new Error("Too many redirects");const Q=T();if((F!==Q||G!==_())&&!Ze){if(u.confirm(F,w)){const ot=J.push({value:Q,replace:se,scroll:j,state:_()});A(()=>{V(F),R(G),Qe()}).then(()=>{J.length===ot&&it({value:F,state:G})})}}})}function Ae(m){return m=m||B(nt)||H,(g,w)=>$e(m,g,w)}function it(m){const g=J[0];g&&((m.value!==g.value||m.state!==g.state)&&i({...m,replace:g.replace,scroll:g.scroll}),J.length=0)}$(()=>{const{value:m,state:g}=r();k(()=>{m!==T()&&A(()=>{V(m),R(g)})})});{let m=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const w=g.composedPath().find(Q=>Q instanceof Node&&Q.nodeName.toUpperCase()==="A");if(!w||!w.hasAttribute("link"))return;const se=w.href;if(w.target||!se&&!w.hasAttribute("state"))return;const ie=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||ie&&ie.includes("external"))return;const j=new URL(se);if(j.origin!==window.location.origin||f&&j.pathname&&!j.pathname.toLowerCase().startsWith(f.toLowerCase()))return;const G=o(j.pathname+j.search+j.hash),F=w.getAttribute("state");g.preventDefault(),$e(H,G,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};var Bn=m;he(["click"]),document.addEventListener("click",m),te(()=>document.removeEventListener("click",m))}return{base:H,out:S,location:re,isRouting:L,renderPath:a,parsePath:o,navigatorFactory:Ae,beforeLeave:u}}const dn=I("<a link></a>"),hn=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||Yt(),o=fn(l,s,r);return h(tt.Provider,{value:o,get children(){return e.children}})};function gn(e){e=pe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=wt(e,["href","state","class","activeClass","inactiveClass","end"]),n=cn(()=>e.href),s=un(n),r=rt(),i=b(()=>{const l=n();if(l===void 0)return!1;const o=Z(l.split(/[?#]/,1)[0]).toLowerCase(),a=Z(r.pathname).toLowerCase();return e.end?o===a:a.startsWith(o)});return(()=>{const l=dn.cloneNode(!0);return W(l,pe(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),l})()}const st=z({}),Me=gn,yn=rt,mn="$FETCH",pn=I('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>');function bn(e){return h(Ct,{fallback:(t,n)=>h(St,{get when(){return!e.fallback},get fallback(){return b(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return h(wn,{error:t})}}),get children(){return e.children}})}function wn(e){return ct(()=>console.error(e.error)),(()=>{const t=pn.cloneNode(!0),n=t.firstChild,s=n.firstChild,r=s.nextSibling,i=r.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),s.style.setProperty("font-weight","bold"),O(s,()=>e.error.message),Ye(r,"click",Qe,!0),r.style.setProperty("color","rgba(252, 165, 165)"),r.style.setProperty("background-color","rgb(153, 27, 27)"),r.style.setProperty("border-radius","5px"),r.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),O(i,()=>e.error.stack),t})()}he(["click"]);const xn=!1,vn=!1,Sn=!1;function Cn(){return B(st),[vn,Sn,h(It,{get children(){return Ze}}),xn]}function Pn(e){return W(document.documentElement,e,!1,!0),e.children}function $n(e){return W(document.head,e,!1,!0),e.children}function An(e){return W(document.body,e,!1,!0),e.children}const En=I("<div></div>"),On=I("<sub></sub>"),kn=I("<span></span>");function Nn({str:e}){const t=[];let n=[];function s(){n.length>0&&(t.push({text:n.join(""),sub:!1}),n=[])}let r=0;for(;;){let i=e.charAt(r);if(i==="")break;if(r+=1,i!==" ")if(i==="="||i==="+")s(),t.push({text:` ${i} `,sub:!1});else if(i>="0"&&i<="9"){for(;;){const l=e.charAt(r);if(l===""||l<"0"||l>"9")break;i=i+l,r+=1}n.length===0?n.push(i):(s(),t.push({text:i,sub:!0}))}else n.push(i)}return s(),(()=>{const i=En.cloneNode(!0);return O(i,()=>t.map(l=>l.sub===!0?(()=>{const o=On.cloneNode(!0);return O(o,()=>l.text),o})():(()=>{const o=kn.cloneNode(!0);return O(o,()=>l.text),o})())),i})()}const Ln="https://vvtu.github.io/exo-endo-build/assets/exothermic.0ec48e02.png",Tn="https://vvtu.github.io/exo-endo-build/assets/endothermic.da9dd79b.png",_n=I('<main class="text-center mx-auto text-gray-700 p-4"><h1 class="max-6-xs text-3xl text-sky-700 font-light uppercase mt-3">\u0421\u0447\u0435\u0442: 11:6 (21)</h1><div class="gridContainer"><div class="gridExo"><button class="rounded-lg border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[1rem] py-[1rem]"><img alt="exothermic"><div class="text-xs text-sky-700 ">\u042D\u043A\u0437\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F</div></button></div><div class="gridFormula"><div class="text-sky-700 text-xl tracking-wider my-6 font-normal"></div></div><div class="gridEndo"><button class="rounded-lg border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[1rem] py-[1rem]"><img alt="endothermic"><div class="text-xs text-sky-700">\u042D\u043D\u0434\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F</div></button></div></div></main>');function Rn(){return(()=>{const e=_n.cloneNode(!0),t=e.firstChild,n=t.nextSibling,s=n.firstChild,r=s.firstChild,i=r.firstChild,l=s.nextSibling,o=l.firstChild,a=l.nextSibling,u=a.firstChild,f=u.firstChild;return r.$$click=()=>{},fe(i,"src",Ln),O(o,h(Nn,{str:"2Mg(NO3)2=2MgO+4NO2+O2"})),u.$$click=()=>{},fe(f,"src",Tn),e})()}he(["click"]);const jn=I('<nav class="bg-sky-800"><ul class="container flex items-center p-3 text-gray-200"><li></li><li></li></ul></nav>');function qe(){const e=yn(),t=n=>n==e.pathname?"border-sky-600":"border-transparent hover:border-sky-600";return h(Pn,{lang:"en",get children(){return[h($n,{get children(){return[h(Kt,{children:"SolidStart - With TailwindCSS"}),h(Fe,{charset:"utf-8"}),h(Fe,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),h(An,{class:"font-sans screenMaxSize",get children(){return[h($t,{get children(){return h(bn,{get children(){return[(()=>{const n=jn.cloneNode(!0),s=n.firstChild,r=s.firstChild,i=r.nextSibling;return O(r,h(Me,{href:"/",children:"Home"})),O(i,h(Me,{href:"/about",children:"About"})),$(l=>{const o=`border-b-2 ${t("/")} mx-1.5 sm:mx-6`,a=`border-b-2 ${t("/about")} mx-1.5 sm:mx-6`;return o!==l._v$&&be(r,l._v$=o),a!==l._v$2&&be(i,l._v$2=a),l},{_v$:void 0,_v$2:void 0}),n})(),h(Rn,{})]}})}}),h(Cn,{})]}})]}})}const Be=Object.values(Object.assign({}))[0],Fn=Be?Be.default:void 0,Mn=()=>{let e={get request(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:mn,fetch};function t(n){return h(hn,pe(n,{get children(){return h(qe,{})}}))}return h(st.Provider,{value:e,get children(){return h(Dt,{get children(){return h(t,{data:Fn,get children(){return h(qe,{})}})}})}})};Vt(()=>h(Mn,{}),document);
