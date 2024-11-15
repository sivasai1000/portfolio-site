/*! a11y-dialog 5.5.2 — © Edenspiekermann */
;
!function(p){var g,f,k=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];
function c(d,a){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.container=d,this.dialog=d.querySelector('dialog, [role="dialog"], [role="alertdialog"]'),this.role=this.dialog.getAttribute("role")||"dialog",this.useDialog="show" in f.createElement("dialog")&&"DIALOG"===this.dialog.nodeName,this._listeners={},this.create(a)
}function q(a){return Array.prototype.slice.call(a)
}function b(d,a){return q((a||f).querySelectorAll(d))
}function m(d){var a=j(d),a=d.querySelector("[autofocus]")||a[0];
a&&a.focus()
}function j(a){return b(k.join(","),a).filter(function(d){return !!(d.offsetWidth||d.offsetHeight||d.getClientRects().length)
})
}function l(){b("[data-a11y-dialog]").forEach(function(a){new c(a,a.getAttribute("data-a11y-dialog")||void 0)
})
}c.prototype.create=function(d){var a;
return this._targets=this._targets||function(e){if(NodeList.prototype.isPrototypeOf(e)){return q(e)
}if(Element.prototype.isPrototypeOf(e)){return[e]
}if("string"==typeof e){return b(e)
}}(d)||(a=this.container,(d=q(a.parentNode.childNodes).filter(function(e){return 1===e.nodeType
})).splice(d.indexOf(a),1),d),this.shown=this.dialog.hasAttribute("open"),this.dialog.setAttribute("role",this.role),this.useDialog?(this.container.setAttribute("data-a11y-dialog-native",""),this.container.removeAttribute("aria-hidden")):this.shown?this.container.removeAttribute("aria-hidden"):this.container.setAttribute("aria-hidden",!0),this._openers=b('[data-a11y-dialog-show="'+this.container.id+'"]'),this._openers.forEach(function(e){e.addEventListener("click",this._show)
}.bind(this)),this._closers=b("[data-a11y-dialog-hide]",this.container).concat(b('[data-a11y-dialog-hide="'+this.container.id+'"]')),this._closers.forEach(function(e){e.addEventListener("click",this._hide)
}.bind(this)),this._fire("create"),this
},c.prototype.show=function(a){return this.shown||(this.shown=!0,g=f.activeElement,this.useDialog?this.dialog.showModal(a instanceof Event?void 0:a):(this.dialog.setAttribute("open",""),this.container.removeAttribute("aria-hidden"),this._targets.forEach(function(d){d.hasAttribute("aria-hidden")&&d.setAttribute("data-a11y-dialog-original-aria-hidden",d.getAttribute("aria-hidden")),d.setAttribute("aria-hidden","true")
})),m(this.dialog),f.body.addEventListener("focus",this._maintainFocus,!0),f.addEventListener("keydown",this._bindKeypress),this._fire("show",a)),this
},c.prototype.hide=function(a){return this.shown&&(this.shown=!1,this.useDialog?this.dialog.close(a instanceof Event?void 0:a):(this.dialog.removeAttribute("open"),this.container.setAttribute("aria-hidden","true"),this._targets.forEach(function(d){d.hasAttribute("data-a11y-dialog-original-aria-hidden")?(d.setAttribute("aria-hidden",d.getAttribute("data-a11y-dialog-original-aria-hidden")),d.removeAttribute("data-a11y-dialog-original-aria-hidden")):d.removeAttribute("aria-hidden")
})),g&&g.focus&&g.focus(),f.body.removeEventListener("focus",this._maintainFocus,!0),f.removeEventListener("keydown",this._bindKeypress),this._fire("hide",a)),this
},c.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(a){a.removeEventListener("click",this._show)
}.bind(this)),this._closers.forEach(function(a){a.removeEventListener("click",this._hide)
}.bind(this)),this._fire("destroy"),this._listeners={},this
},c.prototype.on=function(d,a){return void 0===this._listeners[d]&&(this._listeners[d]=[]),this._listeners[d].push(a),this
},c.prototype.off=function(d,a){a=this._listeners[d].indexOf(a);
return -1<a&&this._listeners[d].splice(a,1),this
},c.prototype._fire=function(d,a){(this._listeners[d]||[]).forEach(function(e){e(this.container,a)
}.bind(this))
},c.prototype._bindKeypress=function(d){var a,h;
this.shown&&27===d.which&&"alertdialog"!==this.role&&(d.preventDefault(),this.hide(d)),this.shown&&9===d.which&&(a=this.dialog,h=d,d=j(a),a=d.indexOf(f.activeElement),h.shiftKey&&0===a?(d[d.length-1].focus(),h.preventDefault()):h.shiftKey||a!==d.length-1||(d[0].focus(),h.preventDefault()))
},c.prototype._maintainFocus=function(a){this.shown&&!this.container.contains(a.target)&&m(this.dialog)
},void 0!==p.document&&("loading"===(f=p.document).readyState?f.addEventListener("DOMContentLoaded",l):p.requestAnimationFrame?p.requestAnimationFrame(l):p.setTimeout(l,16)),"undefined"!=typeof module&&void 0!==module.exports?module.exports=c:"function"==typeof define&&define.amd?define("A11yDialog",[],function(){return c
}):"object"==typeof p&&(p.A11yDialog=c)
}("undefined"!=typeof global?global:window);
(function(b,c){var a={};
b.PubSub=a;
var d=b.define;
c(a);
if(typeof d==="function"&&d.amd){d(function(){return a
})
}else{if(typeof exports==="object"){if(module!==undefined&&module.exports){exports=module.exports=a
}exports.PubSub=a;
module.exports=exports=a
}}}((typeof window==="object"&&window)||this,function(m){var e={},i=-1;
function h(o){var n;
for(n in o){if(o.hasOwnProperty(n)){return true
}}return false
}function l(o){return function n(){throw o
}
}function b(o,p,q){try{o(p,q)
}catch(n){setTimeout(l(n),0)
}}function f(n,o,p){n(o,p)
}function d(o,q,r,u){var t=e[q],n=u?f:b,p;
if(!e.hasOwnProperty(q)){return
}for(p in t){if(t.hasOwnProperty(p)){n(t[p],o,r)
}}}function c(n,o,q){return function p(){var s=String(n),r=s.lastIndexOf(".");
d(n,n,o,q);
while(r!==-1){s=s.substr(0,r);
r=s.lastIndexOf(".");
d(n,s,o,q)
}}
}function g(p){var o=String(p),q=Boolean(e.hasOwnProperty(o)&&h(e[o])),n=o.lastIndexOf(".");
while(!q&&n!==-1){o=o.substr(0,n);
n=o.lastIndexOf(".");
q=Boolean(e.hasOwnProperty(o)&&h(e[o]))
}return q
}function a(p,q,o,s){p=(typeof p==="symbol")?p.toString():p;
var r=c(p,q,s),n=g(p);
if(!n){return false
}if(o===true){r()
}else{setTimeout(r,0)
}return true
}m.publish=function(n,o){return a(n,o,false,m.immediateExceptions)
};
m.publishSync=function(n,o){return a(n,o,true,m.immediateExceptions)
};
m.subscribe=function(p,o){if(typeof o!=="function"){return false
}p=(typeof p==="symbol")?p.toString():p;
if(!e.hasOwnProperty(p)){e[p]={}
}var n="uid_"+String(++i);
e[p][n]=o;
return n
};
m.subscribeOnce=function(p,o){var n=m.subscribe(p,function(){m.unsubscribe(n);
o.apply(this,arguments)
});
return m
};
m.clearAllSubscriptions=function j(){e={}
};
m.clearSubscriptions=function k(o){var n;
for(n in e){if(e.hasOwnProperty(n)&&n.indexOf(o)===0){delete e[n]
}}};
m.unsubscribe=function(s){var o=function(x){var t;
for(t in e){if(e.hasOwnProperty(t)&&t.indexOf(x)===0){return true
}}return false
},r=typeof s==="string"&&(e.hasOwnProperty(s)||o(s)),p=!r&&typeof s==="string",n=typeof s==="function",w=false,q,v,u;
if(r){m.clearSubscriptions(s);
return
}for(q in e){if(e.hasOwnProperty(q)){v=e[q];
if(p&&v[s]){delete v[s];
w=s;
break
}if(n){for(u in v){if(v.hasOwnProperty(u)&&v[u]===s){delete v[u];
w=true
}}}}}return w
}
}));
(function(){if(typeof window.CustomEvent==="function"){return false
}function a(c,d){var b;
d=d||{bubbles:false,cancelable:false,detail:null};
b=document.createEvent("CustomEvent");
b.initCustomEvent(c,d.bubbles,d.cancelable,d.detail);
return b
}a.prototype=window.Event.prototype;
window.CustomEvent=a
})();
var cpiUtils={};
cpiUtils.forEach=function(d,c,b){var a;
for(a=0;
a<d.length;
a++){c.call(b,a,d[a])
}};
cpiUtils.closest=function(a,b){if(typeof a.closest==="function"){return a.closest(b)||null
}while(a){if(cpiUtils.matches(a,b)){return a
}a=a.parentElement
}return null
};
cpiUtils.matches=function(b,d){var a;
var c;
if(typeof b.matches==="function"){return b.matches(d)||null
}c=document.querySelectorAll(d);
a=c.length;
while(--a>=0&&c.item(a)!==b){}return a>-1
};
cpiUtils.templateReplace=function(e,a){var d=Object.keys(a);
var c;
var b=null;
for(c=0;
c<d.length;
c++){b=d[c];
e=e.replace("${"+b+"}",a[b])
}return e
};
cpiUtils.getElementsFromSelector=function(a,c){var b=null;
c=c||document;
if(/^(#?[\w-]+|\.[\w-.]+)$/.test(a)){switch(a.charAt(0)){case"#":return[c.getElementById(a.substr(1))];
case".":b=a.substr(1).replace(/\./g," ");
return[].slice.call(c.getElementsByClassName(b));
default:return[].slice.call(c.getElementsByTagName(a))
}}return[].slice.call(c.querySelectorAll(a))
};
cpiUtils.getCookieValue=function(c){var a=new RegExp(c+"=([^;]+)");
var b=a.exec(document.cookie);
return b?decodeURI(b[1]):null
};
cpiUtils.setCookieValue=function(e,d,a){var c=e+"="+d+";";
var b="Expires="+(a?a+"":"0")+";";
document.cookie=c+b+";Secure;path=/"
};
cpiUtils.isMobile=function(){var a=navigator.userAgent||navigator.vendor||window.opera;
if(/windows phone/i.test(a)){return true
}if(/android/i.test(a)){return true
}if(/iPad|iPhone|iPod/.test(a)&&!window.MSStream){return true
}return false
};
cpiUtils.getCpiVersion=function(){var a=document.querySelector("[data-cpi-version]").getAttribute("data-cpi-version");
return a?a.substring(13).replace(/_/g,"."):null
};
cpiUtils.eventHandler={addEvent:function addEvent(e,d,c){function a(g){var f=c.apply(this,arguments);
if(f===false){g.stopPropagation();
g.preventDefault()
}return f
}function b(){var f=c.call(e,window.event);
if(f===false){window.event.returnValue=false;
window.event.cancelBubble=true
}return f
}if(e){if(e.attachEvent){e.attachEvent("on"+d,b);
return{elem:e,handler:b,event:d}
}e.addEventListener(d,a,false);
return{elem:e,handler:a,event:d}
}return null
},removeEvent:function removeEvent(a){if(a.elem.removeEventListener){a.elem.removeEventListener(a.event,a.handler)
}else{a.elem.detachEvent("on"+a.event,a.handler)
}}};
cpiUtils.taggingHandler={tmsTrackEvent:function(a,b){if(window.TMS&&window.TMS.trackEvent){window.TMS.trackEvent(a,b)
}},tmsTrackView:function(a){if(window.TMS&&window.TMS.trackView){window.TMS.trackView(a)
}}};
cpiUtils.minimalAjax=function(b,i,d,f){var c=document.getElementById("cpiAPIConfigScript");
var a=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("MicrosoftXMLHTTP");
var j={method:"GET",setHeaders:e,additionalHeaders:{},body:null};
function g(k){if(k.method){j.method=k.method
}if(k.setHeaders){j.setHeaders=k.setHeaders
}if(k.additionalHeaders){j.additionalHeaders=k.additionalHeaders
}if(k.body){j.body=k.body
}}function h(l,m){var k;
for(k in l){if({}.hasOwnProperty.call(l,k)){m.setRequestHeader(k,l[k])
}}}function e(l){var k={"X-HSBC-Locale":c.getAttribute("data-header-locale"),"X-HSBC-Chnl-CountryCode":c.getAttribute("data-header-channel-country-code"),"X-HSBC-Chnl-Group-Member":c.getAttribute("data-header-channel-group-member"),"X-HSBC-Channel-Id":c.getAttribute("data-header-channel-id"),"X-HSBC-GBGF":c.getAttribute("data-header-gbgf"),"X-HSBC-Global-Channel-Id":c.getAttribute("data-header-global-channel-id"),"X-HSBC-Client-Id":c.getAttribute("data-header-client-id"),"X-HSBC-Source-System-Id":c.getAttribute("data-header-source-system-id"),"Accept-Language":c.getAttribute("data-header-accept-language")};
h(k,l);
if(j.additionalHeaders){h(j.additionalHeaders,l)
}}a.onreadystatechange=function(){if(this.readyState===4){if(this.status===200){i(this.responseText)
}else{d(this.status,this.responseText)
}}};
if(f){g(f)
}a.open(j.method,b,true);
j.setHeaders(a);
a.send(j.body)
};
cpiUtils.topic={NAVIGATE_AWAY:"navigate-away",NAVIGATE_AWAY_MODAL_SHOW:"navigate-away.modal-show",NAVIGATE_AWAY_LEAVE:"navigate-away.leave",SESSION_TIMEOUT_MODAL_SHOW:"session-timeout.modal-show",CAM_LEVEL_CHECK:"cam-level-check",publish:function publish(a,b){window.PubSub.publish(a,b)
},publishSync:function publishSync(a,b){window.PubSub.publishSync(a,b)
},subscribe:function subscribe(a,b){window.PubSub.subscribe(a,b)
}};
cpiUtils.logoffUser=function(){var e=document.getElementById("cpiLogoffScript");
var c={retail:e.getAttribute("data-retail-logoff-url"),advance:e.getAttribute("data-advance-logoff-url"),premier:e.getAttribute("data-premier-logoff-url")};
var g=e.getAttribute("data-logoff-path-default");
var b=JSON.parse(e.getAttribute("data-logoff-paths"));
function a(){var h=cpiUtils.getCookieValue("segment-hint");
return h?h:"retail"
}function f(){var h=a();
var i;
if(g){i=g;
cpiUtils.forEach(b,function(j,k){if(k.segment===h){i=k.path
}})
}else{i=c[h]
}return i
}function d(){var h=f();
var i=document.createElement("form");
document.body.appendChild(i);
i.setAttribute("method","post");
i.setAttribute("action",h);
i.submit()
}d()
};
cpiUtils.modal={cpiDisplayedModal:null,cpiHiddenModal:null};
cpiUtils.modal.modalInstances=[];
cpiUtils.modal.nodesUpdatedWithAriaHidden=[];
cpiUtils.modal._registerEvents=function(f,a,e,d){var c=function(h){if(h&&typeof h.focus==="function"){h.focus();
window.scrollTo(0,0)
}};
var b=function(h,j){var i;
if(typeof a==="function"){a(h,j)
}if(cpiUtils.modal.cpiDisplayedModal){i=cpiUtils.modal.cpiDisplayedModal;
cpiUtils.modal.cpiDisplayedModal.hide();
cpiUtils.modal.cpiHiddenModal=i;
i=null
}cpiUtils.modal._getBodyChildNodes();
cpiUtils.modal._addAriaHidden();
h.setAttribute("aria-hidden","false");
c(d)
};
var g=function(h,i){if(typeof e==="function"){e(h,i)
}cpiUtils.modal.cpiDisplayedModal=null;
if(cpiUtils.modal.cpiHiddenModal){cpiUtils.modal.cpiHiddenModal.show();
cpiUtils.modal.cpiDisplayedModal=cpiUtils.modal.cpiHiddenModal;
cpiUtils.modal.cpiHiddenModal=null
}else{cpiUtils.modal._removeAriaHidden()
}h.setAttribute("aria-hidden","true");
document.body.classList.remove("cpi-modal-open")
};
f.on("show",b);
f.on("hide",g)
};
cpiUtils.modal._addClickHandler=function(a,b){if(typeof b==="function"&&a){cpiUtils.eventHandler.addEvent(a,"click",b)
}};
cpiUtils.modal._registerModalButtonEvents=function(e,g,d,f){var c=e.querySelector(".button--primary");
var b=e.querySelector(".button--secondary");
var a=e.querySelector(".cpi-modal-dialog__close-icon");
cpiUtils.modal._addClickHandler(c,g);
cpiUtils.modal._addClickHandler(b,d);
cpiUtils.modal._addClickHandler(a,f)
};
cpiUtils.modal._getBodyChildNodes=function(){var a;
if(!cpiUtils.modal.cpiHiddenModal){a=[].slice.call(document.body.children);
cpiUtils.modal.nodesUpdatedWithAriaHidden=a.filter(function(b){return(!b.getAttribute("aria-hidden")||b.getAttribute("aria-hidden")==="false")&&b.getAttribute("id")!=="cpi-modal-wrapper"
})
}};
cpiUtils.modal._addAriaHidden=function(){cpiUtils.modal.nodesUpdatedWithAriaHidden.forEach(function(a){a.setAttribute("aria-hidden","true")
})
};
cpiUtils.modal._removeAriaHidden=function(){cpiUtils.modal.nodesUpdatedWithAriaHidden.forEach(function(a){a.setAttribute("aria-hidden","false")
})
};
cpiUtils.modal._getModalInstance=function(b){var a;
for(a=0;
a<cpiUtils.modal.modalInstances.length;
a++){if(cpiUtils.modal.modalInstances[a].container.id===b.id){return cpiUtils.modal.modalInstances[a]
}}};
cpiUtils.modal.getNewModal=function(){var e=document.querySelector(".cpi-modal-wrapper");
var b=document.createElement("div");
var d=document.createElement("div");
var a=document.createElement("div");
var c=document.createElement("dialog");
d.setAttribute("id","cpi-modal-dialog-"+cpiUtils.modal.modalInstances.length);
d.setAttribute("class","cpi-modal-dialog");
d.setAttribute("aria-hidden",true);
a.setAttribute("class","cpi-modal-dialog__overlay-background");
a.setAttribute("tabindex","-1");
c.setAttribute("class","cpi-modal-dialog__wrapper");
c.setAttribute("tabindex","-1");
d.appendChild(a);
d.appendChild(c);
b.appendChild(d);
e.appendChild(b);
return d
};
cpiUtils.modal.show=function(c,a,j,g,f,h,e,d){var b=null;
function i(){var k;
for(k=0;
k<cpiUtils.modal.modalInstances.length;
k++){if(cpiUtils.modal.modalInstances[k].container.id===c.id){return true
}}return false
}if(i()){b=cpiUtils.modal._getModalInstance(c)
}else{b=new window.A11yDialog(c);
cpiUtils.modal._registerEvents(b,g,f,j);
cpiUtils.modal._registerModalButtonEvents(c,h,e,d);
cpiUtils.modal.modalInstances.push(b)
}document.body.classList.add("cpi-modal-open");
b.show(a);
cpiUtils.modal.cpiDisplayedModal=b
};
cpiUtils.modal.hide=function(c,b){var a=cpiUtils.modal._getModalInstance(c);
a.hide();
document.body.classList.remove("cpi-modal-open");
if(b){a.container.remove();
a.destroy()
}};
cpiUtils.DataStore=(function(){function d(h,i){this.owner=h;
this.group=i
}d.prototype._getKeyPrefix=function e(){return this.owner+"."+this.group
};
d.prototype.getFullKey=function c(h){return this.owner+"."+this.group+"."+h
};
d.prototype.setItem=function b(h,i){window.localStorage.setItem(this.getFullKey(h),i)
};
d.prototype.getItem=function g(h){return window.localStorage.getItem(this.getFullKey(h))
};
d.prototype.removeItem=function f(h){window.localStorage.removeItem(this.getFullKey(h))
};
d.prototype.clear=function a(){var h=this._getKeyPrefix();
Object.keys(window.localStorage).forEach(function(i){if(i.substr(0,h.length)===h){window.localStorage.removeItem(i)
}})
};
return d
}());
cpiUtils.dom={setAttributes:function(c,b){var a;
for(a in b){c.setAttribute(a,b[a])
}},createCPIElement:function(c,a){var b=typeof c==="string"?window.document.createElement(c):c;
if(a){cpiUtils.dom.setAttributes(b,a)
}return b
}};
(function(){var b="session-cookie-timeout-value";
var c="countdown-message-html";
var h="countdown-a11y-message-html";
var f="popup-window-action";
var g=new cpiUtils.DataStore("cpi","session-timeout-popup");
var a=new cpiUtils.DataStore("cpi","session-timeout-timer");
var i=true;
function d(m){var j=document.querySelector(".cpi-modal-dialog__text");
var o=document.querySelector(".button--primary");
var q=document.querySelector(".button--secondary");
var l=m.querySelector(".cpi-modal-dialog__a11y-text");
var n=l.innerHTML;
var p=m.getAttribute("data-counter-time")?Number(m.getAttribute("data-counter-time")):60000;
function k(r){g.setItem(f,r);
if(window===window.parent){window.close()
}}cpiUtils.eventHandler.addEvent(window,"DOMContentLoaded",function(){window.focus();
o.focus();
l.innerHTML=cpiUtils.templateReplace(n,{noOfSecondsRemaining:p})
});
cpiUtils.eventHandler.addEvent(window,"unload",function(){g.setItem(f,"extend")
});
cpiUtils.eventHandler.addEvent(o,"click",function(){k("extend")
});
cpiUtils.eventHandler.addEvent(q,"click",function(){k("logout")
});
cpiUtils.eventHandler.addEvent(window,"storage",function(r){if(r.key===g.getFullKey(c)){j.innerHTML=r.newValue
}else{l.innerHTML=r.newValue
}})
}function e(n){var M=n.getAttribute("data-counter-time")?Number(n.getAttribute("data-counter-time"))*1000:60000;
var Z=n.getAttribute("data-default-time-out")?Number(n.getAttribute("data-default-time-out"))*1000:0;
var u=cpiUtils.getCookieValue("session-idle-hint");
var D;
var y=0;
var W=0;
var z=n.querySelector(".cpi-modal-dialog__title");
var w=n.querySelector(".cpi-modal-dialog__text");
var G=n.querySelector(".cpi-modal-dialog__a11y-text");
var s=n.querySelector(".button--primary");
var X=w.innerHTML;
var R=window.Notification&&Notification.requestPermission;
var B;
var A;
var x=[];
var t={noOfSecondsRemaining:""};
var r=[10,M/3000,M*2/3000,M/1000];
function L(){var ad=document.cookie.replace(/(?:(?:^|.*;\s*)session-expiry-hint\s*\=\s*([^;]*).*$)|^.*$/,"$1");
if(ad){return Number(ad)
}return Z
}function o(){return Number(a.getItem(b))-M
}function U(){if(L()<M){M=L()
}return M/1000
}function l(){var ae=L();
var ad=new Date().getTime();
a.setItem(b,ae+ad)
}function k(ad){if(R&&!cpiUtils.isMobile()){if(Notification.permission==="granted"){B=new Notification(z.innerText,{body:cpiUtils.templateReplace(X,{noOfSecondsRemaining:U()}),icon:window.origin+n.getAttribute("data-notification-icon")});
setTimeout(B.close.bind(B),8000);
cpiUtils.eventHandler.addEvent(B,"click",function(){this.close();
ad.focus()
})
}else{R=false
}}}function I(){if(A&&!A.closed){A.close()
}}function F(){if(B){B.close()
}}function C(){window.clearInterval(W);
W=0;
while(x.length>0){cpiUtils.eventHandler.removeEvent(x.pop())
}}function m(){I();
F();
C();
a.clear();
g.clear();
cpiUtils.logoffUser()
}function S(){if(!cpiUtils.getCookieValue("session-expiry-hint")){m();
return
}if(i){i=false;
l();
ac()
}else{K()
}}function v(){var ad=n.getAttribute("data-keep-session-alive-page-url")+".html";
cpiUtils.minimalAjax(ad,S,m)
}function ab(){I();
g.clear();
F();
C();
cpiUtils.modal.hide(n);
v()
}function J(ad){if(r.indexOf(ad)!==-1){G.innerHTML=cpiUtils.templateReplace(X,t);
g.setItem(h,G.innerHTML)
}}function j(){w.innerHTML=cpiUtils.templateReplace(X,t);
g.setItem(c,w.innerHTML)
}function N(){J(t.noOfSecondsRemaining);
j();
W=window.setInterval(function(){t.noOfSecondsRemaining--;
J(t.noOfSecondsRemaining);
j();
if(t.noOfSecondsRemaining<=0){m()
}},1000)
}function E(ad){switch(ad.newValue){case"extend":ab();
break;
case"logout":m();
break;
default:break
}}function Q(){x.push(cpiUtils.eventHandler.addEvent(window,"storage",function(ad){if(ad.key===g.getFullKey(f)){E(ad)
}}))
}function H(){try{new Notification("")
}catch(ad){if(ad.name==="TypeError"){R=false
}}}function O(){H();
if(R&&!cpiUtils.isMobile()){if(Notification.permission==="default"){Notification.requestPermission()
}}}function Y(){if(A){return A
}return window
}function K(){if(i||W>0){return
}cpiUtils.topic.publishSync(cpiUtils.topic.SESSION_TIMEOUT_MODAL_SHOW);
if(!cpiUtils.isMobile()){A=window.open(n.getAttribute("data-session-timeout-popup-url"),"_cpiSessionTimeout","menubar=no,toolbar=no,personalbar=no,location=no,scrollbars=no,status=yes,resizable=no,left=400,top=200,width=700,height=350")
}g.setItem(f,"waiting");
cpiUtils.topic.publishSync(cpiUtils.topic.SESSION_TIMEOUT_MODAL_SHOW,false);
Q();
N();
cpiUtils.modal.show(n,null,s,{},{},ab,m);
k(Y())
}function aa(){if(u){if(D){window.clearTimeout(D)
}D=window.setTimeout(function(){i=false;
K()
},u-M)
}}function ac(){y=window.setTimeout(function(){g.clear();
t.noOfSecondsRemaining=U();
if(o()>new Date().getTime()){ac()
}else{v()
}},o()-new Date().getTime())
}function p(){m()
}function P(ad){t.noOfSecondsRemaining=ad;
if(W===0){i=false;
window.clearTimeout(y);
g.clear();
v()
}}function V(){window.clearTimeout(y);
ac()
}function T(){var ad=new Date();
var af=Number(a.getItem(b));
var ah=o();
var ag=parseInt((ah-ad.getTime())/1000,10);
var ae=parseInt((af-ad.getTime())/1000,10);
if(ae<0){p()
}else{if(ag<0){P(ae)
}else{V()
}}}function q(){cpiUtils.eventHandler.addEvent(document,"visibilitychange",function(){if(document.visibilityState==="visible"){T()
}});
cpiUtils.eventHandler.addEvent(document,"click",function(){i=true;
aa()
});
cpiUtils.eventHandler.addEvent(document,"beforeinput",function(){i=true;
aa()
})
}l();
O();
ac();
aa();
q()
}document.addEventListener("DOMContentLoaded",function(){var k=document.getElementById("cpi-session-timeout-modal");
var j=document.getElementById("cpi-session-timeout-popup");
if(k){e(k)
}if(j){d(j)
}})
}());
(function(){var b;
var d;
var f=function(g){if(g.id===null||g.contentUrl===null){return false
}return true
};
var e=function(h){var g=document.createRange().createContextualFragment(h);
document.getElementById(this.id).appendChild(g)
};
var a=function(){};
var c=function(){var g;
d=JSON.parse(b.getAttribute("data-slots-data"));
for(g=0;
g<d.length;
g++){if(f(d[g])){cpiUtils.minimalAjax(d[g].contentUrl+".html",e.bind(d[g]),a,{setHeaders:a})
}}};
document.addEventListener("DOMContentLoaded",function(){b=document.getElementById("cpiVAMConfigScript");
if(b!==null){c()
}})
})();
(function(){var f;
var d;
function c(){var g=d.getAttribute("data-redirect-on-2nd-logon-url");
if(g){cpiUtils.eventHandler.addEvent(window,"storage",function(h){if(h.key===f.getFullKey("id")&&window.trackingID!==h.newValue){window.location=g
}})
}}function e(h){var g=JSON.parse(h);
if(g.trackingID){window.trackingID=g.trackingID;
f.setItem("id",window.trackingID);
c()
}}function a(){}function b(){var g=d.getAttribute("data-encrypted-cin-url");
if(g){f=new cpiUtils.DataStore("cpi","tracking");
cpiUtils.minimalAjax(g,e,a,{method:"POST"})
}}document.addEventListener("DOMContentLoaded",function(){d=document.getElementById("cpiAPIConfigScript");
if(d){b(d)
}})
})();
cpiUtils.page={changesEnabled:false,hasChanges:function hasChanges(a){cpiUtils.page.changesEnabled=a
},changesDetected:function changesDetected(){return cpiUtils.page.changesEnabled
}};
cpiUtils.navigationHandler=function(c,n){var m,k;
var p=cpiUtils.closest(c.target,"a");
cpiUtils.navigationHandler.triggerEl=p;
cpiUtils.navigationHandler.callback=n;
cpiUtils.navigationHandler.checkForCallBack=function o(r){var q=cpiUtils.navigationHandler.callback;
if(q&&typeof q==="function"){q(c)
}else{r()
}};
function d(){return p&&p.getAttribute("data-external-url")?true:false
}function g(){return p&&p.getAttribute("href")!=="#"||n?true:false
}function l(){return p&&p.getAttribute("data-modal-trigger")!==null
}function f(){return p&&p.getAttribute("data-custom-event-name")!==null
}function j(){return p&&p.getAttribute("data-cbm-product")!==null
}function i(){var q=p.getAttribute("data-modal-trigger");
switch(q){case"liveShare":cpiUtils.liveShare.open(c);
break;
case"cobrowse":window.tealiumLaunchCobrowse();
break;
default:break
}}function h(){var r=p.getAttribute("data-custom-event-name");
var q=p.getAttribute("data-custom-event-fragment-path");
cpiUtils.topic.publishSync(r,{fragmentUrl:q})
}function b(){var s=cpiUtils.navigationHandler.triggerEl&&cpiUtils.navigationHandler.triggerEl.getAttribute("target")?cpiUtils.navigationHandler.triggerEl.getAttribute("target"):"_self";
function q(){var v=cpiUtils.navigationHandler.triggerEl.getAttribute("href");
window.open(v,s)
}function r(){cpiUtils.topic.publishSync(cpiUtils.topic.NAVIGATE_AWAY_LEAVE,{changes:true,external:false});
q()
}function u(){cpiUtils.topic.publish(cpiUtils.topic.NAVIGATE_AWAY_MODAL_SHOW,{changes:true,external:false})
}function t(){var w=document.getElementById("cpi-modal-navigate-away-internal");
var v=w.querySelector(".cpi-modal-dialog__close-icon");
if(w){cpiUtils.modal.show(w,c,v,u,{},function(){cpiUtils.navigationHandler.checkForCallBack(r)
})
}}if(cpiUtils.page.changesDetected()&&s==="_self"){t()
}else{cpiUtils.navigationHandler.checkForCallBack(q)
}}function e(){function r(){var v="/bin/logout.";
var w=document.createElement("form");
var u=cpiUtils.navigationHandler.triggerEl.getAttribute("data-external-url");
document.body.appendChild(w);
w.setAttribute("method","post");
w.setAttribute("action",v+u);
w.submit()
}function q(){cpiUtils.topic.publishSync(cpiUtils.topic.NAVIGATE_AWAY_LEAVE,{changes:cpiUtils.page.changesDetected(),external:true});
r()
}function t(w){var v=w.querySelector(".cpi-modal-dialog__sub-text");
var u=w.querySelector(".cpi-modal-dialog__wrapper");
cpiUtils.topic.publish(cpiUtils.topic.NAVIGATE_AWAY_MODAL_SHOW,{changes:cpiUtils.page.changesDetected(),external:true});
if(cpiUtils.page.changesDetected()&&!v.classList.contains("cpi-modal-dialog__sub-text--visible")){u.setAttribute("aria-describedby","external-link-modal-text external-link-modal-sub-text");
v.classList.add("cpi-modal-dialog__sub-text--visible")
}else{u.setAttribute("aria-describedby","external-link-modal-text");
v.classList.remove("cpi-modal-dialog__sub-text--visible")
}}function s(){var v=document.getElementById("cpi-modal-navigate-away-external");
var u=null;
if(v){u=v.querySelector(".cpi-modal-dialog__close-icon");
cpiUtils.modal.show(v,c,u,t,{},function(){cpiUtils.navigationHandler.checkForCallBack(q)
})
}}s()
}function a(){if(d()){e()
}else{if(g()){b()
}else{if(l()){i()
}else{if(f()){h()
}}}}}c.preventDefault();
if(!j()){a()
}else{m=p.getAttribute("data-cbm-product");
k=p.getAttribute("data-cbm-rule");
cpiUtils.cbm.checkWithMessage(m,k,a)
}};
cpiUtils.navigateAway=cpiUtils.navigationHandler;
(function(){var d;
var i;
var a;
var f;
function g(){var l={};
if(window.utag_data){l={page_url:f.getAttribute("data-cpi-tms-page-url"),page_name:f.getAttribute("data-cpi-tms-page-name"),site_section:f.getAttribute("data-cpi-tms-view-site-section"),page_language:window.utag_data.page_language,page_type:f.getAttribute("data-cpi-tms-view-page-type"),page_customer_group:f.getAttribute("data-cpi-tms-view-page-customer-group"),customer_group:window.utag_data.customer_group,page_security_level:window.utag_data.page_security_level,page_category:f.getAttribute("data-cpi-tms-view-page-category"),page_subcategory:f.getAttribute("data-cpi-tms-view-page-sub-category"),raw_datalayer:f.getAttribute("data-cpi-tms-view-raw-data-layer")}
}cpiUtils.taggingHandler.tmsTrackView(l)
}function k(){var l={};
if(window.utag_data){l={page_url:f.getAttribute("data-cpi-tms-page-url"),page_name:f.getAttribute("data-cpi-tms-page-name"),event_category:f.getAttribute("data-cpi-tms-link-event-category"),event_action:f.getAttribute("data-cpi-tms-link-event-action"),event_content:f.getAttribute("data-cpi-tms-link-event-content"),raw_datalayer:f.getAttribute("data-cpi-tms-link-raw-data-layer")}
}cpiUtils.taggingHandler.tmsTrackEvent("link",l)
}function b(){var n;
var l;
var m=document.getElementById("cpiLiveChatButton");
if(m){cpiUtils.dom.setAttributes(m,{"class":"cpi-modal-dialog__button button button--primary",title:i.getAttribute("data-primary-button-accessibility-text")});
n=cpiUtils.dom.createCPIElement("i",{"class":"cpi-icon-chat","aria-hidden":true});
l=cpiUtils.dom.createCPIElement("span");
l.innerHTML=i.getAttribute("data-primary-button-text");
m.appendChild(n);
m.insertAdjacentElement("beforeend",l);
window.clearInterval(d);
a=cpiUtils.eventHandler.addEvent(m,"click",k)
}}function j(l){cpiUtils.modal.hide(l,true);
if(d){window.clearInterval(d)
}if(a){cpiUtils.eventHandler.removeEvent(a)
}}function c(l,p){var o=cpiUtils.modal.getNewModal();
var n=document.createRange().createContextualFragment(p);
var m=n.querySelectorAll("[data-empty-dialog-close]");
cpiUtils.forEach(m,function(q,r){cpiUtils.eventHandler.addEvent(r,"click",j.bind(null,o))
});
cpiUtils.eventHandler.addEvent(n.querySelector("dialog"),"close",j.bind(null,o));
o.querySelector("dialog").appendChild(n);
cpiUtils.modal.show(o);
f=document.getElementById("cpiEmptyModalTealiumTagging");
if(f){g()
}i=document.querySelector('[data-primary-button-type="livechat"]');
if(i){d=window.setInterval(b,100)
}}function h(){}function e(l,m){if(document.location.href.indexOf("localhost")!==-1){m.fragmentUrl+=".html?wcmmode=disabled"
}cpiUtils.minimalAjax(m.fragmentUrl,c.bind(null,m.fragmentUrl),h)
}cpiUtils.topic.subscribe("custom-event.custom-modal",e)
}());
cpiUtils.custInfo={_custInfoHint:{},_customerTypes:[],_cbmRules:[],_initTypes:function(a){var b;
for(b in a){if(a[b]){this._customerTypes.push(b)
}}},hasTypes:function(b){var a=true;
b=Array.isArray(b)?b:[b];
b.forEach(function(c){a=a&&this._customerTypes.indexOf(c)!==-1
},this);
return a
},hasAccounts:function(a){return this.hasTypes(a)
},_initCBM:function(){if(this._custInfoHint.productEligibilities){this._cbmRules=this._custInfoHint.productEligibilities
}},_getCBMAction:function(a,b){var d=this._cbmRules[a];
var c;
if(d){c=d[b]
}if(c){c=c.toUpperCase()
}return c
},_init:function(){var a=cpiUtils.getCookieValue("cust-info-hint");
if(a&&a.length!==0){this._custInfoHint=JSON.parse(a.replace(/^"|\\|"$/g,""));
if(this._custInfoHint){this._initTypesFromCookie()
}}},_initTypesFromCookie:function(){if(this._custInfoHint.accounts){this._initTypes(this._custInfoHint.accounts)
}if(this._custInfoHint.types){this._initTypes(this._custInfoHint.types)
}this._initCBM()
}};
cpiUtils.custInfo._init();
(function(){var f=cpiUtils.getCookieValue("segment-hint");
var e=document.getElementById("cpiBranding");
var c;
var b="";
function d(i){var g=e?JSON.parse(e.getAttribute("data-segments")):{};
var h="";
h+=cpiUtils.templateReplace(".cpi-cust-seg--show-${customersSegment}{display:inherit;}",{customersSegment:f});
cpiUtils.forEach(g,function(j,k){if(k.value!==i){h+=cpiUtils.templateReplace(".cpi-cust-seg--show-${otherSegment}:not(.cpi-cust-seg--show-${customersSegment}),",{customersSegment:i,otherSegment:k.value})
}});
h+=cpiUtils.templateReplace(".cpi-cust-seg--hide-${customersSegment}{display:none}",{customersSegment:f});
return h
}function a(){var h=e?JSON.parse(e.getAttribute("data-types")):{};
var g="";
cpiUtils.forEach(h,function(i,j){if(cpiUtils.custInfo.hasTypes(j.name)){g+=cpiUtils.templateReplace(".cpi-type-info--hide-${name}{display:none;}",{name:j.name})
}});
return g
}c=document.createElement("style");
c.type="text/css";
b+=d(f);
b+=a(f);
c.styleSheet=c.styleSheet?c.styleSheet.cssText=b:c.appendChild(document.createTextNode(b));
document.getElementsByTagName("head")[0].appendChild(c)
})();
cpiUtils.cbm={_closeModal:function(a){cpiUtils.modal.hide(a,true)
},_showModalWithFragment:function(b,d){var e=this;
function a(h,j){var i=cpiUtils.modal.getNewModal();
var g=document.createRange().createContextualFragment(j);
var f=g.querySelectorAll("[data-empty-dialog-close]");
cpiUtils.forEach(f,function(k,l){cpiUtils.eventHandler.addEvent(l,"click",function(){e._closeModal(i)
})
});
cpiUtils.eventHandler.addEvent(g.querySelector("dialog"),"close",function(){e._closeModal(i)
});
i.querySelector("dialog").appendChild(g);
cpiUtils.modal.show(i,null,null,null,null,d)
}function c(){}if(b){if(document.location.href.indexOf("localhost")!==-1){b+=".html?wcmmode=disabled"
}cpiUtils.minimalAjax(b,a.bind(null,b),c)
}},getAction:function(a,b){return cpiUtils.custInfo._getCBMAction(a,b)
},checkWithMessage:function(c,d,e){var g=this;
var f=cpiUtils.custInfo._getCBMAction(c,d);
var a;
var b=document.getElementById("cpiBranding");
if(f==="Y"&&e){e()
}if(f&&e){a=b.getAttribute("data-cbm-modal-"+f.toLowerCase());
g._showModalWithFragment(a,e)
}}};
cpiUtils.semver={_splitRangeItem:function(c){var b=c.replace(/[<>=]/g,"");
var a=c.substring(0,c.length-b.length);
a=a.length?a:"=";
return[a,b]
},_compareParts:function(b,d){var a;
var e;
var c;
for(a=0;
a<3;
a++){e=Number(b[a]);
c=Number(d[a]);
if(e<c){return -1
}else{if(e>c){return 1
}}}return 0
},_compare:function(a,c){var f=cpiUtils.semver._splitRangeItem(c);
var b=f[0];
var e=a.split(".");
var g=f[1].split(".");
var d=0;
d=cpiUtils.semver._compareParts(e,g);
if(b==="="&&d!==0){return false
}if(b==="<"&&d!==-1){return false
}if(b===">"&&d!==1){return false
}if(b==="<="&&d===1){return false
}if(b===">="&&d===-1){return false
}return true
},satisfies:function(a,b){var c=b.split(" ");
var d=true;
c.forEach(function(e){d=d&&cpiUtils.semver._compare(a,e)
});
return d
}};
cpiUtils.pageInfo={_pageType:"",isBusinessRBB:function(){return cpiUtils.pageInfo._pageType==="business--rbb"
},isPersonalRBB:function(){return cpiUtils.pageInfo._pageType==="personal--rbb"
},init:function(){var a=document.body;
cpiUtils.pageInfo._pageType=a.getAttribute("data-cpi-page-type")
}};
document.addEventListener("DOMContentLoaded",cpiUtils.pageInfo.init);
(function(){var s=".cpi-modal-dialog__close-icon";
var d=".cpi-modal-dialog__scroll-wrapper";
var g=".cpi-modal-dialog__expand-text";
var b=".cpi-modal-dialog__expand-text > *[class^='cpi-icon-chevron-']";
var j=".cpi-modal-dialog__expand-text-content";
var t=".cpi-modal-dialog__text-error-message";
var o="live-share-tnc-checkbox";
var e="button.button--primary";
var q;
function i(v){var u={};
if(window.utag_data){u={page_url:window.utag_data.page_url,page_name:window.utag_data.page_name}
}cpiUtils.taggingHandler.tmsTrackEvent("link",Object.assign(v,u));
return null
}function f(u){var v=q.querySelector(t).classList;
var w=q.querySelector("input").classList;
if(u){v.remove("cpi-modal-dialog__text-error-message--hidden");
w.add("cpi-text-input--error")
}else{v.add("cpi-modal-dialog__text-error-message--hidden");
w.remove("cpi-text-input--error")
}}function m(){var v=q.querySelectorAll("button")[2];
var A=q.querySelector(e);
var x=q.querySelector("input");
var u=document.getElementById(o);
var E=q.querySelector(g);
var z=q.getAttribute("data-session-id-length");
var B=z?Number(z):6;
function y(){var F=q.getAttribute("data-print-page-path");
var H=window.open(F,"window","left=50000,top=50000,width=800,height=1200,scrollbars=1,resizable=1");
var G={event_category:q.getAttribute("data-print-event-category"),event_action:q.getAttribute("data-print-event-action"),event_content:q.getAttribute("data-print-event-content"),raw_datalayer:q.getAttribute("data-print-raw-datalayer")};
i(G);
H.focus();
cpiUtils.eventHandler.addEvent(H,"load",function(){setTimeout(function(){H.print();
setTimeout(H.close(),1000)
},1000)
})
}function D(){var F=new RegExp("^\\d{"+B+"}$");
return F.test(x.value)
}function w(){var G=u.checked;
var F=D();
if(G&&F){A.disabled=""
}else{A.disabled="disabled"
}}function C(){var F=q.querySelector(b).classList;
var G=q.querySelector(j).classList;
E.setAttribute("aria-expanded",G.contains("cpi-modal-dialog__expand-text-content--hidden"));
F.toggle("cpi-icon-chevron-up");
G.toggle("cpi-modal-dialog__expand-text-content--hidden")
}cpiUtils.eventHandler.addEvent(u,"click",w);
cpiUtils.eventHandler.addEvent(x,"input",function(){var F=/^\d+$/.test(x.value);
f(!F);
w()
});
cpiUtils.eventHandler.addEvent(x,"change",function(){f(!D())
});
cpiUtils.eventHandler.addEvent(v,"click",y);
cpiUtils.eventHandler.addEvent(E,"click",C)
}function h(v){var u=q.querySelectorAll("input");
var y=q.querySelector(e);
var z=y.querySelectorAll("span")[1].classList;
var w=y.querySelector("span").classList;
var x=v?"disabled":"";
cpiUtils.forEach(u,function(A,B){B.disabled=x
});
y.disabled=x;
if(v){z.add("cpi-loading__spinner--hidden");
w.remove("cpi-loading__spinner--hidden")
}else{z.remove("cpi-loading__spinner--hidden");
w.add("cpi-loading__spinner--hidden")
}}function p(){var u=q.querySelector("input");
u.value="";
f(false)
}function n(){var v=q.querySelector(e);
var w=document.getElementById(o);
var u={event_category:q.getAttribute("data-popup-event-category"),event_action:q.getAttribute("data-popup-event-action"),event_content:q.getAttribute("data-popup-event-content"),raw_datalayer:q.getAttribute("data-popup-raw-datalayer")};
i(u);
h(false);
v.disabled="disabled";
w.checked=false;
p()
}function r(){var v=document.getElementById("cpi-modal-service-error");
var u;
var w;
if(v){w={form_field_1:q.getAttribute("data-service-error-feature"),event_category:v.getAttribute("data-unavailable-event-category"),event_action:v.getAttribute("data-unavailable-event-action"),event_content:v.getAttribute("data-unavailable-event-content"),raw_datalayer:v.getAttribute("data-unavailable-raw-datalayer")};
i(w);
u=v.querySelector(s);
cpiUtils.modal.show(v,null,u)
}}function a(){if(q){cpiUtils.modal.hide(q)
}}function k(){var w=q.getAttribute("data-error-timeout");
var v=w?Number(w)*1000:10000;
var u=q.querySelector("input");
h(true);
cpiUtils.liveShare.triggerCobrowse(u.value,"verify");
cpiUtils.liveShare.errorTimeoutId=setTimeout(function(){a();
r()
},v)
}function l(){var u=q.querySelector(d);
u.scrollTop=0;
clearTimeout(cpiUtils.liveShare.errorTimeoutId)
}cpiUtils.liveShare={};
cpiUtils.liveShare.triggerCobrowse=function(x,v){var u={event_type:"lpNavigation",transaction_execution_type:"now",session_id:x,cobrowsestate:v};
try{cpiUtils.taggingHandler.tmsTrackEvent("cobrowse",u)
}catch(w){}};
cpiUtils.liveShare.open=function c(w){var v=document.getElementById("cpi-modal-live-share");
var u;
if(!v){return
}cpiUtils.liveShare.modal=v;
q=cpiUtils.liveShare.modal;
if(!cpiUtils.liveShare.hasInitialized){m();
cpiUtils.liveShare.hasInitialized=true
}u=v.querySelector(s);
cpiUtils.modal.show(v,w,u,n,l,k)
};
cpiUtils.liveShare.validateSessionNumberHandler=function(u){var v=q.querySelector("input");
var w;
if(u){cpiUtils.liveShare.triggerCobrowse(v.value,"authenticate");
a()
}else{w={event_category:q.getAttribute("data-error-event-category"),event_action:q.getAttribute("data-error-event-action"),event_content:q.getAttribute("data-error-event-content"),raw_datalayer:q.getAttribute("data-error-raw-datalayer")};
i(w);
h(false);
f(true)
}clearTimeout(cpiUtils.liveShare.errorTimeoutId)
}
}());
window._validateSessionNumber=function(a){cpiUtils.liveShare.validateSessionNumberHandler(a)
};
cpiUtils.spinner={_loadingSpinner:document.getElementById("cpi-modal-spinner"),nodesUpdatedWithAriaHidden:null,_getBodyChildNodes:function(){var a;
a=[].slice.call(document.body.children);
cpiUtils.spinner.nodesUpdatedWithAriaHidden=a.filter(function(b){return(!b.getAttribute("aria-hidden")||b.getAttribute("aria-hidden")==="false")&&b.getAttribute("id")!=="cpi-modal-wrapper"
})
},_addAriaHidden:function(){cpiUtils.spinner.nodesUpdatedWithAriaHidden.forEach(function(a){a.setAttribute("aria-hidden","true")
})
},_removeAriaHidden:function(){cpiUtils.spinner.nodesUpdatedWithAriaHidden.forEach(function(a){a.setAttribute("aria-hidden","false")
})
},_focusModalSpinner:function(a){if(a){cpiUtils.spinner._loadingSpinner.setAttribute("tabIndex","0");
cpiUtils.spinner._loadingSpinner.setAttribute("aria-hidden","false");
cpiUtils.spinner._loadingSpinner.focus()
}else{cpiUtils.spinner._loadingSpinner.setAttribute("tabIndex","-1");
cpiUtils.spinner._loadingSpinner.setAttribute("aria-hidden","true");
cpiUtils.spinner._loadingSpinner.blur()
}},_updateMaincontent:function(a){if(a){cpiUtils.spinner._getBodyChildNodes();
cpiUtils.spinner._addAriaHidden()
}else{cpiUtils.spinner._removeAriaHidden()
}},startModalSpinner:function(){var a=document.getElementById("cpi-modal-spinner");
cpiUtils.spinner._updateMaincontent(true);
a.classList.add("cpi-modal-spinner--show");
setTimeout(function(){a.focus()
},0);
document.body.classList.add("cpi-modal-open");
if(cpiUtils.spinner._loadingSpinner){cpiUtils.spinner._focusModalSpinner(true)
}},stopModalSpinner:function(){var a=document.getElementById("cpi-modal-spinner");
cpiUtils.spinner._updateMaincontent(false);
a.classList.remove("cpi-modal-spinner--show");
document.body.classList.remove("cpi-modal-open");
if(cpiUtils.spinner._loadingSpinner){cpiUtils.spinner._focusModalSpinner(false)
}}};