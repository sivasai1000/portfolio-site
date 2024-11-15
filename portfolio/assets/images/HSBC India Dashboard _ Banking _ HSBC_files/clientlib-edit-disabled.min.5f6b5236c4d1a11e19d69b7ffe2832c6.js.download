(function(){var a=document.querySelector(".cpi-wrapper__header");
var b=document.querySelector(".cpi-masthead-navigation");
var d=null;
function g(k){return k?k.getBoundingClientRect().width:0
}function e(){var n=document.querySelector(".cpi-masthead-logo--large");
var l=cpiUtils.getElementsFromSelector(".cpi-menubar__menu-item-wrapper");
var k=document.querySelector(".cpi-masthead-user-menu");
var m=l.reduce(function(o,p){return o+g(p)
},0);
d=g(n)+m+g(k)
}function f(){var l=document.querySelector(".cpi-main-header__container");
var k=parseInt(window.getComputedStyle(l,null).getPropertyValue("width"),10);
e();
return d>=k
}function i(){a.classList.remove("cpi-wrapper__header--menu-second-row");
if(f()){a.classList.add("cpi-wrapper__header--menu-second-row")
}}function h(l){var k=[].slice.call(l.querySelectorAll(".cpi-doormat__section-wrapper"));
return k.length===0?true:k.some(function(m){return window.getComputedStyle(m,null).getPropertyValue("display")==="block"
})
}function j(){var k=document.querySelectorAll(".cpi-menubar__doormat");
cpiUtils.forEach(k,function(l,n){var m=n.querySelectorAll(".cpi-doormat__column");
cpiUtils.forEach(m,function(o,p){var q=h(p);
if(!q){p.classList.add("cpi-hide-block")
}})
})
}function c(){i();
j();
b.classList.add("cpi-masthead-navigation--visible")
}if(b){cpiUtils.eventHandler.addEvent(window,"resize",i);
cpiUtils.eventHandler.addEvent(window,"load",c)
}})();