import{o as i,c,r as b,a as e,t as f,p as v,b as $,F as m,d as g,e as x,f as h,g as y,h as p,i as P}from"./vendor.b0a63ebd.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};q();var u=(t,n)=>{const s=t.__vccOpts||t;for(const[r,o]of n)s[r]=o;return s};const w={},N={id:"header"};function I(t,n,s,r,o,a){return i(),c("div",N,"Header")}var L=u(w,[["render",I],["__scopeId","data-v-3aa1a3e0"]]);const _=t=>(v("data-v-79337c28"),t=t(),$(),t),C={id:"wrapper"},H=_(()=>e("div",null,[e("br"),e("i",{class:"las la-4x la-home"})],-1)),S=_(()=>e("h1",null,"Home Page",-1)),k=_(()=>e("br",null,null,-1)),A=_(()=>e("h2",null,"Halo \u{1F590} ",-1)),E=_(()=>e("br",null,null,-1)),F={props:{msg:String},setup(t){const n=b(0);return(s,r)=>(i(),c("div",C,[H,S,k,A,e("h1",null,f(t.msg),1),e("button",{type:"button",onClick:r[0]||(r[0]=o=>n.value++)},"count is: "+f(n.value),1),E]))}};var j=u(F,[["__scopeId","data-v-79337c28"]]);const D={},O=e("div",null,[e("br"),e("i",{class:"las la-4x la-book"})],-1),V=e("h1",null,"About Page",-1),B=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1);function U(t,n){return i(),c(m,null,[O,V,B],64)}var K=u(D,[["render",U]]);const M={},T=e("div",null,[e("br"),e("i",{class:"las la-4x la-warehouse"})],-1),z=e("h1",null,"Projects Page",-1),G=e("table",null,[e("tr",null,[e("td",null,"a"),e("td",null,"b")]),e("tr",null,[e("td",null,"1"),e("td",null,"2")])],-1),J=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1);function Q(t,n){return i(),c(m,null,[T,z,G,J],64)}var R=u(M,[["render",Q]]);const W={},X=e("div",null,[e("br"),e("i",{class:"las la-4x la-phone"})],-1),Y=e("h1",null,"Contact Page",-1),Z=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1);function ee(t,n){return i(),c(m,null,[X,Y,Z],64)}var te=u(W,[["render",ee]]);const oe={"/":j,"/about":K,"/projects":R,"/contact":te},ne={data(){return{currentPath:window.location.hash}},computed:{currentView(){return oe[this.currentPath.slice(1)||"/"]||NotFound}},mounted(){window.addEventListener("hashchange",()=>{this.currentPath=window.location.hash})}},l=t=>(v("data-v-72909ad8"),t=t(),$(),t),ae={id:"navbar"},re=l(()=>e("br",null,null,-1)),ie=l(()=>e("a",{href:"#/"},"Home",-1)),se=h(" | "),ce=l(()=>e("a",{href:"#/about"},"About",-1)),ue=h(" | "),le=l(()=>e("a",{href:"#/projects"},"Project",-1)),de=h(" | "),_e=l(()=>e("a",{href:"#/contact"},"Contact",-1)),pe=l(()=>e("br",null,null,-1));function me(t,n,s,r,o,a){return i(),c("div",ae,[re,ie,se,ce,ue,le,de,_e,pe,(i(),g(x(a.currentView)))])}var he=u(ne,[["render",me],["__scopeId","data-v-72909ad8"]]);const fe={};function ve(t,n,s,r,o,a){const d=y("Navbar");return i(),g(d)}var $e=u(fe,[["render",ve]]);const ge={},be={id:"footer"};function xe(t,n){return i(),c("div",be," \xA92022 ")}var ye=u(ge,[["render",xe],["__scopeId","data-v-1aef31e2"]]);const Pe={setup(t){return(n,s)=>(i(),c(m,null,[p(L),p(he),p($e),p(ye)],64))}};P(Pe).mount("#app");
