(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const m={};function fe(e){m.context=e}const Tt=(e,t)=>e===t,$e=Symbol("solid-proxy"),me={equals:Tt};let z=null,at=Ot;const T=1,W=2,ut={owned:null,cleanups:null,context:null,owner:null};var h=null;let f=null,x=null,A=null,N=null,Te=0;const[Eo,Ue]=S(!1);function ct(e,t){const n=x,r=h,o=e.length===0,i=o?ut:{owned:null,cleanups:null,context:null,owner:t||r},l=o?e:()=>e(()=>D(()=>re(i)));h=i,x=null;try{return V(l,!0)}finally{x=n,h=r}}function S(e,t){t=t?Object.assign({},me,t):me;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(f&&f.running&&f.sources.has(n)?o=o(n.tValue):o=o(n.value)),yt(n,o));return[gt.bind(n),r]}function H(e,t,n){const r=qe(e,t,!1,T);pe(r)}function ft(e,t,n){at=Bt;const r=qe(e,t,!1,T),o=de&&Se(h,de.id);o&&(r.suspense=o),r.user=!0,N?N.push(r):pe(r)}function w(e,t,n){n=n?Object.assign({},me,n):me;const r=qe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,pe(r),gt.bind(r)}function D(e){const t=x;x=null;try{return e()}finally{x=t}}function qt(e,t,n){const r=Array.isArray(e);let o,i=n&&n.defer;return l=>{let s;if(r){s=Array(e.length);for(let c=0;c<e.length;c++)s[c]=e[c]()}else s=e();if(i){i=!1;return}const u=D(()=>t(s,o,l));return o=s,u}}function dt(e){ft(()=>D(e))}function se(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Ve(e){z||(z=Symbol("error")),h===null||(h.context===null?h.context={[z]:[e]}:h.context[z]?h.context[z].push(e):h.context[z]=[e])}function ht(){return h}function Lt(e,t){const n=h;h=e;try{return V(t,!0)}finally{h=n}}function Rt(e){if(f&&f.running)return e(),f.done;const t=x,n=h;return Promise.resolve().then(()=>{x=t,h=n;let r;return de&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),V(e,!1),x=h=null,r?r.done:void 0})}function kt(e){N.push.apply(N,e),e.length=0}function le(e,t){const n=Symbol("context");return{id:n,Provider:Mt(n),defaultValue:e}}function ae(e){let t;return(t=Se(h,e.id))!==void 0?t:e.defaultValue}function pt(e){const t=w(e),n=w(()=>Pe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let de;function It(){return de||(de=le({}))}function gt(){const e=f&&f.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===T||e&&this.tState===T)pe(this);else{const t=A;A=null,V(()=>Ee(this),!1),A=t}if(x){const t=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(t)):(x.sources=[this],x.sourceSlots=[t]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function yt(e,t,n){let r=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(f){const o=f.running;(o||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&V(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],l=f&&f.running;l&&f.disposed.has(i)||((l&&!i.tState||!l&&!i.state)&&(i.pure?A.push(i):N.push(i),i.observers&&mt(i)),l?i.tState=T:i.state=T)}if(A.length>1e6)throw A=[],new Error},!1)}return t}function pe(e){if(!e.fn)return;re(e);const t=h,n=x,r=Te;x=h=e,je(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{V(()=>{f&&(f.running=!0),x=h=e,je(e,e.tValue,r),x=h=null},!1)}),x=n,h=t}function je(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(f&&f.running?e.tState=T:e.state=T),Et(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?yt(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function qe(e,t,n,r=T,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=r),h===null||h!==ut&&(f&&f.running&&h.pure?h.tOwned?h.tOwned.push(i):h.tOwned=[i]:h.owned?h.owned.push(i):h.owned=[i]),i}function xe(e){const t=f&&f.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===W||t&&e.tState===W)return Ee(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Te);){if(t&&f.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,i=n[r+1];for(;(o=o.owner)&&o!==i;)if(f.disposed.has(o))return}if(!t&&e.state===T||t&&e.tState===T)pe(e);else if(!t&&e.state===W||t&&e.tState===W){const o=A;A=null,V(()=>Ee(e,n[0]),!1),A=o}}}function V(e,t){if(A)return e();let n=!1;t||(A=[]),N?n=!0:N=[],Te++;try{const r=e();return Dt(n),r}catch(r){A||(N=null),Et(r)}}function Dt(e){if(A&&(Ot(A),A=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const r=f.sources,o=f.disposed;N.push.apply(N,f.effects),t=f.resolve;for(const i of N)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,V(()=>{for(const i of o)re(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let l=0,s=i.owned.length;l<s;l++)re(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ue(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,N),N=null,Ue(!0);return}}const n=N;N=null,n.length&&V(()=>at(n),!1),t&&t()}function Ot(e){for(let t=0;t<e.length;t++)xe(e[t])}function Bt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:xe(r)}for(m.context&&fe(),t=0;t<n;t++)xe(e[t])}function Ee(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(!n&&o.state===T||n&&o.tState===T?o!==t&&xe(o):(!n&&o.state===W||n&&o.tState===W)&&Ee(o,t))}}function mt(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=W:r.state=W,r.pure?A.push(r):N.push(r),r.observers&&mt(r))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),l=n.observerSlots.pop();r<o.length&&(i.sourceSlots[l]=r,o[r]=i,n.observerSlots[r]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)re(e.tOwned[t]);delete e.tOwned}xt(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function xt(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)xt(e.owned[n])}function Ft(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Et(e){e=Ft(e);const t=z&&Se(h,z);if(!t)throw e;for(const n of t)n(e)}function Se(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Se(e.owner,t):void 0}function Pe(e){if(typeof e=="function"&&!e.length)return Pe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Pe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Mt(e,t){return function(r){let o;return H(()=>o=D(()=>(h.context={[e]:r.value},pt(()=>r.children))),void 0),o}}function y(e,t){return D(()=>e(t||{}))}function Oe(){return!0}const Xt={get(e,t,n){return t===$e?n:e.get(t)},has(e,t){return t===$e?!0:e.has(t)},set:Oe,deleteProperty:Oe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Oe,deleteProperty:Oe}},ownKeys(e){return e.keys()}};function Ce(e){return(e=typeof e=="function"?e():e)?e:{}}function Ut(...e){let t=!1;for(let r=0;r<e.length;r++){const o=e[r];t=t||!!o&&$e in o,e[r]=typeof o=="function"?(t=!0,w(o)):o}if(t)return new Proxy({get(r){for(let o=e.length-1;o>=0;o--){const i=Ce(e[o])[r];if(i!==void 0)return i}},has(r){for(let o=e.length-1;o>=0;o--)if(r in Ce(e[o]))return!0;return!1},keys(){const r=[];for(let o=0;o<e.length;o++)r.push(...Object.keys(Ce(e[o])));return[...new Set(r)]}},Xt);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const o=Object.getOwnPropertyDescriptors(e[r]);for(const i in o)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const s=(e[l]||{})[i];if(s!==void 0)return s}}})}return n}let Vt=0;function jt(){const e=m.context;return e?`${e.id}${e.count++}`:`cl-${Vt++}`}function Kt(e){let t=!1;const n=e.keyed,r=w(()=>e.when,void 0,{equals:(o,i)=>t?o===i:!o==!i});return w(()=>{const o=r();if(o){const i=e.children,l=typeof i=="function"&&i.length>0;return t=n||l,l?D(()=>i(o)):i}return e.fallback},void 0,void 0)}function zt(e){let t=!1,n=!1;const r=(l,s)=>l[0]===s[0]&&(t?l[1]===s[1]:!l[1]==!s[1])&&l[2]===s[2],o=pt(()=>e.children),i=w(()=>{let l=o();Array.isArray(l)||(l=[l]);for(let s=0;s<l.length;s++){const u=l[s].when;if(u)return n=!!l[s].keyed,[s,u,l[s]]}return[-1]},void 0,{equals:r});return w(()=>{const[l,s,u]=i();if(l<0)return e.fallback;const c=u.children,d=typeof c=="function"&&c.length>0;return t=n||d,d?D(()=>c(s)):c},void 0,void 0)}function Ke(e){return e}let oe;function St(){oe&&[...oe].forEach(e=>e())}function Wt(e){let t,n;m.context&&m.load&&(n=m.load(m.context.id+m.context.count))&&(t=n[0]);const[r,o]=S(t,void 0);return oe||(oe=new Set),oe.add(o),se(()=>oe.delete(o)),w(()=>{let i;if(i=r()){const l=e.fallback,s=typeof l=="function"&&l.length?D(()=>l(i,()=>o())):l;return Ve(o),s}return Ve(o),e.children},void 0,void 0)}const Yt=le();function Gt(e){let t=0,n,r,o,i,l;const[s,u]=S(!1),c=It(),d={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:s,effects:[],resolved:!1},C=ht();if(m.context&&m.load){const v=m.context.id+m.context.count;let P=m.load(v);if(P&&(o=P[0])&&o!=="$$f"){(typeof o!="object"||!("then"in o))&&(o=Promise.resolve(o));const[_,B]=S(void 0,{equals:!1});i=_,o.then(q=>{if(q||m.done)return q&&(l=q),B();m.gather(v),fe(r),B(),fe()})}}const $=ae(Yt);$&&(n=$.register(d.inFallback));let O;return se(()=>O&&O()),y(c.Provider,{value:d,get children(){return w(()=>{if(l)throw l;if(r=m.context,i)return i(),i=void 0;r&&o==="$$f"&&fe();const v=w(()=>e.children);return w(P=>{const _=d.inFallback(),{showContent:B=!0,showFallback:q=!0}=n?n():{};if((!_||o&&o!=="$$f")&&B)return d.resolved=!0,O&&O(),O=r=o=void 0,kt(d.effects),v();if(!!q)return O?P:ct(ee=>(O=ee,r&&(fe({id:r.id+"f",count:0}),r=void 0),e.fallback),C)})})}})}const Jt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Qt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Jt]),Zt=new Set(["innerHTML","textContent","innerText","children"]),en=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ze=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),tn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),nn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function on(e,t,n){let r=n.length,o=t.length,i=r,l=0,s=0,u=t[o-1].nextSibling,c=null;for(;l<o||s<i;){if(t[l]===n[s]){l++,s++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===l){const d=i<r?s?n[s-1].nextSibling:n[i-s]:u;for(;s<i;)e.insertBefore(n[s++],d)}else if(i===s)for(;l<o;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[s]===t[o-1]){const d=t[--o].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--i],d),t[o]=n[i]}else{if(!c){c=new Map;let C=s;for(;C<i;)c.set(n[C],C++)}const d=c.get(t[l]);if(d!=null)if(s<d&&d<i){let C=l,$=1,O;for(;++C<o&&C<i&&!((O=c.get(t[C]))==null||O!==d+$);)$++;if($>d-s){const v=t[l];for(;s<d;)e.insertBefore(n[s++],v)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const We="_$DX_DELEGATE";function rn(e,t,n,r={}){let o;return ct(i=>{o=i,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function Y(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function ge(e,t=window.document){const n=t[We]||(t[We]=new Set);for(let r=0,o=e.length;r<o;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,fn))}}function Q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function sn(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Z(e,t){t==null?e.removeAttribute("class"):e.className=t}function bt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function ln(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let i,l;for(i=0,l=o.length;i<l;i++){const s=o[i];!s||s==="undefined"||t[s]||(Ye(e,s,!1),delete n[s])}for(i=0,l=r.length;i<l;i++){const s=r[i],u=!!t[s];!s||s==="undefined"||n[s]===u||!u||(Ye(e,s,!0),n[s]=u)}return n}function an(e,t,n){if(!t)return n?Q(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function he(e,t={},n,r){const o={};return r||H(()=>o.children=ie(e,t.children,o.children)),H(()=>t.ref&&t.ref(e)),H(()=>un(e,t,n,!0,o,!0)),o}function k(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ie(e,t,r,n);H(o=>ie(e,t(),o,n),r)}function un(e,t,n,r,o={},i=!1){t||(t={});for(const l in o)if(!(l in t)){if(l==="children")continue;o[l]=Ge(e,l,null,o[l],n,i)}for(const l in t){if(l==="children"){r||ie(e,t.children);continue}const s=t[l];o[l]=Ge(e,l,s,o[l],n,i)}}function cn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ye(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function Ge(e,t,n,r,o,i){let l,s,u;if(t==="style")return an(e,n,r);if(t==="classList")return ln(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),d=tn.has(c);if(!d&&r){const C=Array.isArray(r)?r[0]:r;e.removeEventListener(c,C)}(d||n)&&(bt(e,c,n,d),d&&ge([c]))}else if((u=Zt.has(t))||!o&&(ze[t]||(s=Qt.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Z(e,n):l&&!s&&!u?e[cn(t)]=n:e[ze[t]||t]=n;else{const c=o&&t.indexOf(":")>-1&&nn[t.split(":")[0]];c?sn(e,c,t,n):Q(e,en[t]||t,n)}return n}function fn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ie(e,t,n,r,o){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(m.context)return n;if(i==="number"&&(t=t.toString()),l){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=ne(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(m.context)return n;n=ne(e,n,r)}else{if(i==="function")return H(()=>{let s=t();for(;typeof s=="function";)s=s();n=ie(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],u=n&&Array.isArray(n);if(_e(s,t,n,o))return H(()=>n=ie(e,s,n,r,!0)),()=>n;if(m.context){if(!s.length)return n;for(let c=0;c<s.length;c++)if(s[c].parentNode)return n=s}if(s.length===0){if(n=ne(e,n,r),l)return n}else u?n.length===0?Je(e,s,r):on(e,n,s):(n&&ne(e),Je(e,s));n=s}else if(t instanceof Node){if(m.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=ne(e,n,r,t);ne(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function _e(e,t,n,r){let o=!1;for(let i=0,l=t.length;i<l;i++){let s=t[i],u=n&&n[i];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))o=_e(e,s,u)||o;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();o=_e(e,Array.isArray(s)?s:[s],Array.isArray(u)?u:[u])||o}else e.push(s),o=!0;else{const c=String(s);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return o}function Je(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function ne(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const u=s.parentNode===e;!i&&!l?u?e.replaceChild(o,s):e.insertBefore(o,n):u&&s.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}function dn(e){return m.context?void 0:e.children}const wt=!1;function hn(e,t){e&&t&&rn(e,t===document?t.body:t)}const Le=le(),pn=["title","meta"],Qe=e=>e.tag+(e.name?`.${e.name}"`:""),gn=e=>{if(!m.context){const o=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(o,i=>i.parentNode.removeChild(i))}const t=new Map;function n(o){if(o.ref)return o.ref;let i=document.querySelector(`[data-sm="${o.id}"]`);return i?(i.tagName.toLowerCase()!==o.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(o.tag)),i.removeAttribute("data-sm")):i=document.createElement(o.tag),i}const r={addClientTag:o=>{let i=Qe(o);if(pn.indexOf(o.tag)!==-1){t.has(i)||t.set(i,[]);let s=t.get(i),u=s.length;s=[...s,o],t.set(i,s);{let c=n(o);o.ref=c,he(c,o.props);let d=null;for(var l=u-1;l>=0;l--)if(s[l]!=null){d=s[l];break}c.parentNode!=document.head&&document.head.appendChild(c),d&&d.ref&&document.head.removeChild(d.ref)}return u}{let s=n(o);o.ref=s,he(s,o.props),s.parentNode!=document.head&&document.head.appendChild(s)}return-1},removeClientTag:(o,i)=>{const l=Qe(o);if(o.ref){const s=t.get(l);if(s){if(o.ref.parentNode){o.ref.parentNode.removeChild(o.ref);for(let u=i-1;u>=0;u--)s[u]!=null&&document.head.appendChild(s[u].ref)}s[i]=null,t.set(l,s)}else o.ref.parentNode&&o.ref.parentNode.removeChild(o.ref)}}};return y(Le.Provider,{value:r,get children(){return e.children}})},Ct=(e,t)=>{const n=jt();if(!ae(Le))throw new Error("<MetaProvider /> should be in the tree");return yn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function yn(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=ae(Le);H(()=>{{let o=t(e);se(()=>n(e,o))}})}const On=e=>Ct("title",e),Ze=e=>Ct("meta",e);function mn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function xn([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function En(e){try{return document.querySelector(e)}catch{return null}}function Sn(e,t){const n=En(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function bn(e,t,n,r){let o=!1;const i=s=>typeof s=="string"?{value:s}:s,l=xn(S(i(e()),{equals:(s,u)=>s.value===u.value}),void 0,s=>(!o&&t(s),s));return n&&se(n((s=e())=>{o=!0,l[1](i(s)),o=!1})),{signal:l,utils:r}}function wn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:S({value:""})};return e}function Cn(){return bn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Sn(window.location.hash.slice(1),n)},e=>mn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function vn(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,i){if(n)return!(n=!1);const l={to:o,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const s of e)s.listener({...l,from:s.location,retry:u=>{u&&(n=!0),s.navigate(o,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const Nn=/^(?:[a-z0-9]+:)?\/\//i,An=/^\/+|\/+$/g;function ve(e,t=!1){const n=e.replace(An,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Ne(e,t,n){if(Nn.test(t))return;const r=ve(e),o=n&&ve(n);let i="";return!o||t.startsWith("/")?i=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+o:i=o,(i||"/")+ve(t,!i)}function $n(e,t){if(e==null)throw new Error(t);return e}function Pn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function _n(e){const t=new Map,n=ht();return new Proxy({},{get(r,o){return t.has(o)||Lt(n,()=>t.set(o,w(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const Hn=100,vt=le(),Tn=le(),qn=()=>$n(ae(vt),"Make sure your app is wrapped in a <Router />");let et;const Ln=()=>qn().location;function Rn(e,t){const n=new URL("http://sar"),r=w(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),o=w(()=>r().pathname),i=w(()=>r().search,!0),l=w(()=>r().hash),s=w(()=>"");return{get pathname(){return o()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return s()},query:_n(qt(i,()=>Pn(r())))}}function kn(e,t="",n,r){const{signal:[o,i],utils:l={}}=wn(e),s=l.parsePath||(p=>p),u=l.renderPath||(p=>p),c=l.beforeLeave||vn(),d=Ne("",t),C=void 0;if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!o().value&&i({value:d,replace:!0,scroll:!1});const[$,O]=S(!1),v=async p=>{O(!0);try{await Rt(p)}finally{O(!1)}},[P,_]=S(o().value),[B,q]=S(o().state),ee=Rn(P,B),G=[],X={pattern:d,params:{},path:()=>d,outlet:()=>null,resolvePath(p){return Ne(d,p)}};if(n)try{et=X,X.data=n({data:void 0,params:{},location:ee,navigate:ye(X)})}finally{et=void 0}function te(p,g,b){D(()=>{if(typeof g=="number"){g&&(l.go?c.confirm(g,b)&&l.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:L,resolve:I,scroll:R,state:j}={replace:!1,resolve:!0,scroll:!0,...b},M=I?p.resolvePath(g):Ne("",g);if(M===void 0)throw new Error(`Path '${g}' is not a routable path`);if(G.length>=Hn)throw new Error("Too many redirects");const K=P();if((M!==K||j!==B())&&!wt){if(c.confirm(M,b)){const be=G.push({value:K,replace:L,scroll:R,state:B()});v(()=>{_(M),q(j),St()}).then(()=>{G.length===be&&F({value:M,state:j})})}}})}function ye(p){return p=p||ae(Tn)||X,(g,b)=>te(p,g,b)}function F(p){const g=G[0];g&&((p.value!==g.value||p.state!==g.state)&&i({...p,replace:g.replace,scroll:g.scroll}),G.length=0)}H(()=>{const{value:p,state:g}=o();D(()=>{p!==P()&&v(()=>{_(p),q(g)})})});{let p=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const b=g.composedPath().find(K=>K instanceof Node&&K.nodeName.toUpperCase()==="A");if(!b||!b.hasAttribute("link"))return;const L=b.href;if(b.target||!L&&!b.hasAttribute("state"))return;const I=(b.getAttribute("rel")||"").split(/\s+/);if(b.hasAttribute("download")||I&&I.includes("external"))return;const R=new URL(L);if(R.origin!==window.location.origin||d&&R.pathname&&!R.pathname.toLowerCase().startsWith(d.toLowerCase()))return;const j=s(R.pathname+R.search+R.hash),M=b.getAttribute("state");g.preventDefault(),te(X,j,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:M&&JSON.parse(M)})};var Re=p;ge(["click"]),document.addEventListener("click",p),se(()=>document.removeEventListener("click",p))}return{base:X,out:C,location:ee,isRouting:$,renderPath:u,parsePath:s,navigatorFactory:ye,beforeLeave:c}}const In=e=>{const{source:t,url:n,base:r,data:o,out:i}=e,l=t||Cn(),s=kn(l,r,o);return y(vt.Provider,{value:s,get children(){return e.children}})};const Nt=le({}),Dn=Ln,Bn="$FETCH",Fn=Y('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>');function Mn(e){return y(Wt,{fallback:(t,n)=>y(Kt,{get when(){return!e.fallback},get fallback(){return w(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return y(Xn,{error:t})}}),get children(){return e.children}})}function Xn(e){return ft(()=>console.error(e.error)),(()=>{const t=Fn.cloneNode(!0),n=t.firstChild,r=n.firstChild,o=r.nextSibling,i=o.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),k(r,()=>e.error.message),bt(o,"click",St,!0),o.style.setProperty("color","rgba(252, 165, 165)"),o.style.setProperty("background-color","rgb(153, 27, 27)"),o.style.setProperty("border-radius","5px"),o.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),k(i,()=>e.error.stack),t})()}ge(["click"]);const Un=!1,Vn=!1,jn=!1;function Kn(){return ae(Nt),[Vn,jn,y(dn,{get children(){return wt}}),Un]}function zn(e){return he(document.documentElement,e,!1,!0),e.children}function Wn(e){return he(document.head,e,!1,!0),e.children}function Yn(e){return he(document.body,e,!1,!0),e.children}const Gn=20,tt="mute_all_sounds_key";var a=(e=>(e.EXO="EXO",e.ENDO="ENDO",e))(a||{}),E=(e=>(e.APPEAR="APPEAR",e.DISAPPEAR="DISAPPEAR",e.VISIBLE="VISIBLE",e.INVISIBLE="INVISIBLE",e))(E||{});Object.values(E);const At=800;function ue(e){return new Promise(t=>{let n;n=setTimeout(()=>t(n),e)})}const Jn=Y("<div></div>"),Qn=Y("<sub></sub>"),Zn=Y("<span></span>");function eo(e){let t="opacity-0";switch(e){case E.VISIBLE:t="opacity-100";break;case E.INVISIBLE:t="opacity-0";break;case E.DISAPPEAR:t="formula-disappear";break;case E.APPEAR:t="formula-appear";break}return t}function to({formula:e,formulaAnimationStep:t}){const n=w(()=>{const r=[];let o=[];function i(){o.length>0&&(r.push({text:o.join(""),sub:!1}),o=[])}let l=0;const s=e();for(;!(s===void 0||s==="");){let u=s.charAt(l);if(u==="")break;if(l+=1,u!==" ")if(u==="="||u==="+")i(),r.push({text:`\u2009${u}\u2009`,sub:!1});else if(u>="0"&&u<="9"){for(;;){const c=s.charAt(l);if(c===""||c<"0"||c>"9")break;u=u+c,l+=1}o.length===0?o.push(u):(i(),r.push({text:u,sub:!0}))}else o.push(u)}return i(),r.length===0&&r.push({text:"-",sub:!1}),r});return(()=>{const r=Jn.cloneNode(!0);return k(r,()=>n().map(o=>o.sub===!0?(()=>{const i=Qn.cloneNode(!0);return k(i,()=>o.text),i})():(()=>{const i=Zn.cloneNode(!0);return k(i,()=>o.text),i})())),H(()=>Z(r,eo(t()))),r})()}const no="https://vvtu.github.io/exo-endo-build/assets/exothermic.0ec48e02.png",oo="https://vvtu.github.io/exo-endo-build/assets/endothermic.da9dd79b.png";function Ae(e){const t=e.map(n=>[Math.random(),n]);return t.sort((n,r)=>n[0]-r[0]),t.map(n=>n[1])}function ro(e){const t=Math.min(nt.length,ot.length);if(t*2<e)throw new Error("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F \u0438\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0444\u043E\u0440\u043C\u0443\u043B");return Ae([...Ae(nt.slice(0,t)),...Ae(ot.slice(0,t))]).slice(0,e)}const nt=[{equation:"CH4(\u0433)+2O2(\u0433)=CO2(\u0433)+2H2O(\u0433)",type:a.EXO,explanation:"exo1"},{equation:"2H2(\u0433)+O2(\u0433)=2H2O(\u0433)",type:a.EXO,explanation:"exo1"},{equation:"C(\u0442\u0432)+2H2(\u0433)=CH4(\u0433)",type:a.EXO,explanation:"exo1"},{equation:"NaOH+HCl=NaCl+H2O",type:a.EXO,explanation:"exo1"},{equation:"C2H2+2,5O2=2CO2+H2O",type:a.EXO,explanation:"exo1"},{equation:"4NO2(\u0433)+O2(\u0433)+2H2O(\u0433)=4HNO3(\u0436)",type:a.EXO,explanation:"exo1"},{equation:"SO3+H2O=H2SO4",type:a.EXO,explanation:"exo1"},{equation:"C2H4+3O2=2CO2+2H2O",type:a.EXO,explanation:"exo1"},{equation:"3C2H2=C6H6",type:a.EXO,explanation:"exo1"},{equation:"2NO+O2=2NO2",type:a.EXO,explanation:"exo1"},{equation:"2Mg+O2=MgO2",type:a.EXO,explanation:"exo1"},{equation:"2CuS+3O2=2CuO+2SO2",type:a.EXO,explanation:"exo1"},{equation:"2KClO3=2KCl+3O2",type:a.EXO,explanation:"exo1"},{equation:"2CO+O2=2CO2",type:a.EXO,explanation:"exo1"},{equation:"2KMnO4=K2MnO4+MnO2+O2",type:a.EXO,explanation:"exo1"},{equation:"H2SO4+2NaOH=Na2SO4+2H2O",type:a.EXO,explanation:"exo1"},{equation:"Ba(OH)2+2HNO3=Ba(NO3)2+H2O",type:a.EXO,explanation:"exo1"},{equation:"4Al+3O2=2Al2O3",type:a.EXO,explanation:"exo1"},{equation:"4Cr+3O2=2Cr2O3",type:a.EXO,explanation:"exo1"},{equation:"2C2H6+7O2=4CO2+6H2O",type:a.EXO,explanation:"exo1"},{equation:"2C4H10+13O2=8CO2+10H2O",type:a.EXO,explanation:"exo1"},{equation:"(NH4)2Cr2O7=N2+Cr2O3+4H2O",type:a.EXO,explanation:"exo1"},{equation:"2NH3+CO2=(NH2)2CO+H2O",type:a.EXO,explanation:"exo1"},{equation:"2SO2+O2=2SO3",type:a.EXO,explanation:"exo1"},{equation:"4Fe+3O2=2Fe2O3",type:a.EXO,explanation:"exo1"},{equation:"C+O2=CO2",type:a.EXO,explanation:"exo1"},{equation:"CaO+H2O=Ca(OH)2",type:a.EXO,explanation:"exo1"},{equation:"NH4NO2=N2+2H2O",type:a.EXO,explanation:"exo1"},{equation:"P4+5O2=P4H10",type:a.EXO,explanation:"exo1"},{equation:"N2+3H2=2NH3",type:a.EXO,explanation:"exo1"},{equation:"C6H12O6+6O2=6CO2+6H2O",type:a.EXO,explanation:"exo1"},{equation:"H2+F2=2HF",type:a.EXO,explanation:"exo1"},{equation:"CaO(\u0442\u0432)+H2O(\u0436)=Ca(OH)2(\u0442\u0432)",type:a.EXO,explanation:"exo1"},{equation:"2NO=N2+O2",type:a.EXO,explanation:"exo1"},{equation:"2Na+2H2O=2NaOH+H2",type:a.EXO,explanation:"exo1"}],ot=[{equation:"2C+2H=C2H2",type:a.ENDO,explanation:"endo11"},{equation:"2HgO=2Hg+O2",type:a.ENDO,explanation:"endo11"},{equation:"2Fe2O3+3C=4Fe+3CO2",type:a.ENDO,explanation:"endo11"},{equation:"4NH3+5O2=4NO+6H2O",type:a.ENDO,explanation:"endo11"},{equation:"2CuNO3=2CuO+4NO2+O2",type:a.ENDO,explanation:"endo11"},{equation:"Fe2O3+H2=2Fe+H2O",type:a.ENDO,explanation:"endo11"},{equation:"2Ag2O=4Ag+O2",type:a.ENDO,explanation:"endo11"},{equation:"2Mg(NO3)2=2MgO+4NO2+O2",type:a.ENDO,explanation:"endo11"},{equation:"CaCO3=CaO+CO2",type:a.ENDO,explanation:"endo11"},{equation:"Ca(OH)2=CaO+H2O",type:a.ENDO,explanation:"endo11"},{equation:"NaNO3=2NaNO2+O2",type:a.ENDO,explanation:"endo11"},{equation:"2KNO3\u21922KNO2+O2",type:a.ENDO,explanation:"endo11"},{equation:"H2O=2H2+O2",type:a.ENDO,explanation:"endo11"},{equation:"C2H6=C2H4+H2",type:a.ENDO,explanation:"endo11"},{equation:"NH4NO3=N2O+H2O",type:a.ENDO,explanation:"endo11"},{equation:"2SO3=2SO2+O2",type:a.ENDO,explanation:"endo11"},{equation:"C+CO2=2CO",type:a.ENDO,explanation:"endo11"},{equation:"H2+Cl2=2HCl",type:a.ENDO,explanation:"endo11"},{equation:"2AgBr=2Ag+Br2",type:a.ENDO,explanation:"endo11"},{equation:"2FeCl3=2FeCl2+Cl2",type:a.ENDO,explanation:"endo11"},{equation:"Cu2CH2O5=2CuO+H2O+CO2",type:a.ENDO,explanation:"endo11"},{equation:"2HF=H2+F2",type:a.ENDO,explanation:"endo11"},{equation:"C+H2O=CO+H2",type:a.ENDO,explanation:"endo11"},{equation:"NH3=N2+3H2",type:a.ENDO,explanation:"endo11"},{equation:"2P2O5=4P+5O2",type:a.ENDO,explanation:"endo11"},{equation:"N2(\u0433)+O2(\u0433)=2NO(\u0433)",type:a.ENDO,explanation:"endo11"},{equation:"3C+Fe2O3=3CO+2Fe",type:a.ENDO,explanation:"endo11"},{equation:"KClO4=KCl+2O2",type:a.ENDO,explanation:"endo11"},{equation:"3O2(\u0433)=2O3(\u0433)",type:a.ENDO,explanation:"endo11"},{equation:"6CO2(\u0433)+6H2O(\u0436)=C6H12O6(\u0442\u0432)+6O2(\u0433)",type:a.ENDO,explanation:"endo11"},{equation:"2HgO(\u0442\u0432)=2Hg(\u0442\u0432)+O2",type:a.ENDO,explanation:"endo11"},{equation:"C4H10=C4H8+H2",type:a.ENDO,explanation:"endo11"},{equation:"H2+I2=2HI",type:a.ENDO,explanation:"endo11"},{equation:"4NH3+5O2=4NO+6H2O",type:a.ENDO,explanation:"endo11"}],io="https://vvtu.github.io/exo-endo-build/assets/477552__abacagi__explosion-sfx.fecfda49.mp3",so="https://vvtu.github.io/exo-endo-build/assets/133817__prutsik__space-swoosh.60491d2f.mp3",lo="https://vvtu.github.io/exo-endo-build/assets/432761__xpoki__lazershot.9318bd59.mp3",ao="https://vvtu.github.io/exo-endo-build/assets/162485__kastenfrosch__space.9e366244.mp3",uo="https://vvtu.github.io/exo-endo-build/assets/135510__chriddof__space-bloop.f827dc21.mp3";var He=(e=>(e.BEST_RESULTS="BEST_RESULTS",e.ERROR_RESULTS="ERROR_RESULTS",e.FALSE_SHOT="FALSE_SHOT",e.START="START",e.TRUE_SHOT="TRUE_SHOT",e))(He||{});const co={BEST_RESULTS:io,ERROR_RESULTS:so,FALSE_SHOT:lo,START:ao,TRUE_SHOT:uo};function rt(e){new Audio(co[e]).play()}const fo=Y('<main class="gridContainer"><div class="gridFromula"><div class="text-sky-700 tracking-wider font-normal whitespace-nowrap"></div></div><div class="gridExo"><div><button class="btn-picture text-exothermic-color"><div class="text-lg font-bold"></div><img alt="\u042D\u043A\u0437\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F"><div class="text-xs">\u042D\u043A\u0437\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F</div></button></div></div><div class="gridCountInfo font-normal"><div><span class="text-exothermic-color"></span><span> : </span><span class="text-endothermic-color"></span></div></div><div class="gridEndo"><div><button class="btn-picture text-endothermic-color"><div class="text-lg font-bold"></div><img alt="\u042D\u043D\u0434\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F"><div class="text-xs">\u042D\u043D\u0434\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F</div></button></div></div></main>'),ce=At-20;function it({buttonName:e,state:t,answerIsTrue:n}){let r="opacity-0";switch(t){case E.VISIBLE:r="opacity-100";break;case E.INVISIBLE:r="opacity-0";break;case E.DISAPPEAR:r=n?"formula-disappear":e==="exo"?"formula-disappear-false-exo":"formula-disappear-false-endo";break;case E.APPEAR:r="formula-appear";break}return r}function ho({muteMode:e}){const[t,n]=S(0),[r,o]=S(0),[i,l]=S(0),[s,u]=S(0),[c,d]=S(0),[C,$]=S(ro(Gn)),[O,v]=S(E.INVISIBLE),[P,_]=S({buttonName:"exo",state:E.INVISIBLE,answerIsTrue:!0}),[B,q]=S({buttonName:"endo",state:E.INVISIBLE,answerIsTrue:!0}),[ee,G]=S(C()[0].equation),[X,te]=S(!0),ye=w(()=>C()[t()]);let F;dt(async()=>{document.documentElement.style.setProperty("--main-duration",`${At}ms`),v(E.INVISIBLE),_({buttonName:"exo",state:E.INVISIBLE,answerIsTrue:!0}),q({buttonName:"endo",state:E.INVISIBLE,answerIsTrue:!0}),F=await ue(ce/4),_({buttonName:"exo",state:E.APPEAR,answerIsTrue:!0}),q({buttonName:"endo",state:E.APPEAR,answerIsTrue:!0}),v(E.APPEAR),F=void 0,F=await ue(ce/4),te(!1)});async function Re(p){te(!0);const g=t()+1,b=p===a.EXO?I=>_({buttonName:"exo",...I}):I=>q({buttonName:"endo",...I}),L=p===ye().type;e()||rt(L?He.TRUE_SHOT:He.FALSE_SHOT),b({state:E.DISAPPEAR,answerIsTrue:L}),F=await ue(ce),p===a.EXO?(L&&o(r()+1),l(i()+1)):(L&&u(s()+1),d(c()+1)),b({state:E.APPEAR,answerIsTrue:!0}),v(E.DISAPPEAR),F=await ue(ce),n(g),G(C()[g].equation),v(E.APPEAR),F=await ue(ce),te(!1)}return se(()=>F&&clearTimeout(F)),(()=>{const p=fo.cloneNode(!0),g=p.firstChild,b=g.firstChild,L=g.nextSibling,I=L.firstChild,R=I.firstChild,j=R.firstChild,M=j.nextSibling,K=L.nextSibling,be=K.firstChild,ke=be.firstChild,$t=ke.nextSibling,Pt=$t.nextSibling,_t=K.nextSibling,Ie=_t.firstChild,we=Ie.firstChild,De=we.firstChild,Ht=De.nextSibling;return k(b,y(to,{formula:ee,formulaAnimationStep:O})),R.$$click=()=>Re(a.EXO),k(j,()=>`${r()} : ${i()}`),Q(M,"src",no),k(ke,()=>r()+s()),k(Pt,()=>i()+c()),we.$$click=()=>Re(a.ENDO),k(De,()=>`${s()} : ${c()}`),Q(Ht,"src",oo),H(U=>{const Be=it(P()),Fe=X(),Me=it(B()),Xe=X();return Be!==U._v$&&Z(I,U._v$=Be),Fe!==U._v$2&&(R.disabled=U._v$2=Fe),Me!==U._v$3&&Z(Ie,U._v$3=Me),Xe!==U._v$4&&(we.disabled=U._v$4=Xe),U},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()}ge(["click"]);const po=Y('<svg viewBox="0 0 32 32" id="Layer_1" version="1.1"><path d=" M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z M32 16 A16 16 0 0 1 27.25 27.375 L25.25 25.25 A13 13 0 0 0 29 16 A13 13 0 0 0 25.25 6.75 L27.25 4.625 A16 16 0 0 1 32 16 M25 16 A9 9 0 0 1 22.375 22.375 L20.25 20.25 A6 6 0 0 0 22 16 A6 6 0 0 0 20.25 11.75 L22.375 9.625 A9 9 0 0 1 25 16 "></path> </svg>'),go=e=>(()=>{const t=po.cloneNode(!0);return H(n=>{const r=e.size,o=e.size,i=e.color;return r!==n._v$&&Q(t,"height",n._v$=r),o!==n._v$2&&Q(t,"width",n._v$2=o),i!==n._v$3&&Q(t,"fill",n._v$3=i),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})();const yo=Y('<nav class="bg-sky-800"><ul class="container flex items-center p-3 text-gray-200"><li><button>\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442</button></li><li><button>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</button></li><li class="grow"></li><li></li></ul></nav>'),Oo=Y("<div>111</div>"),J=["\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442","\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F"];function st(){const[e,t]=S(J[0]),[n,r]=S(!0);Dn();const o=i=>i===e()?"border-white":"border-transparent hover:border-sky-600";return dt(()=>{r(localStorage.getItem(tt)==="yes")}),y(zn,{lang:"en",get children(){return[y(Wn,{get children(){return[y(On,{children:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442"}),y(Ze,{charset:"utf-8"}),y(Ze,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),y(Yn,{class:"font-sans screenMaxSize",onDblClick:i=>i.stopPropagation(),get children(){return[y(Gt,{get children(){return y(Mn,{get children(){return[(()=>{const i=yo.cloneNode(!0),l=i.firstChild,s=l.firstChild,u=s.firstChild,c=s.nextSibling,d=c.firstChild,C=c.nextSibling,$=C.nextSibling;return u.$$click=()=>t(J[0]),d.$$click=()=>t(J[1]),$.$$click=()=>{const O=!n();console.log("%c newMuteMode = ","color: #bada55",O),localStorage.setItem(tt,O?"yes":"no"),r(O)},k($,y(go,{color:"#f00",size:"20"})),H(O=>{const v=`border-b-2 ${o(J[0])} mx-1.5 sm:mx-6`,P=`border-b-2 ${o(J[1])} mx-1.5 sm:mx-6`,_=`${n()?"speaker-icon-mute":""}`;return v!==O._v$&&Z(s,O._v$=v),P!==O._v$2&&Z(c,O._v$2=P),_!==O._v$3&&Z($,O._v$3=_),O},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})(),y(zt,{get children(){return[y(Ke,{get when(){return e()===J[0]},get children(){return y(ho,{muteMode:n})}}),y(Ke,{get when(){return e()===J[1]},get children(){return Oo.cloneNode(!0)}})]}})]}})}}),y(Kn,{})]}})]}})}ge(["click"]);const lt=Object.values(Object.assign({}))[0],mo=lt?lt.default:void 0,xo=()=>{let e={get request(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Bn,fetch};function t(n){return y(In,Ut(n,{get children(){return y(st,{})}}))}return y(Nt.Provider,{value:e,get children(){return y(gn,{get children(){return y(t,{data:mo,get children(){return y(st,{})}})}})}})};hn(()=>y(xo,{}),document);
