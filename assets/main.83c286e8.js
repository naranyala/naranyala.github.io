import{r as b,o as a,c,a as e,t as h,p as v,b as g,F as d,d as $,e as x,f as m,g as y,h as p,i as P}from"./vendor.b0a63ebd.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};q();var u=(t,n)=>{const s=t.__vccOpts||t;for(const[i,o]of n)s[i]=o;return s};const f=t=>(v("data-v-7ece3c58"),t=t(),g(),t),w={id:"wrapper"},L=f(()=>e("h1",null,"Home Page",-1)),N=f(()=>e("br",null,null,-1)),C=f(()=>e("h2",null,"Halo \u{1F590} ",-1)),I={props:{msg:String},setup(t){const n=b(0);return(s,i)=>(a(),c("div",w,[L,N,C,e("h1",null,h(t.msg),1),e("button",{type:"button",onClick:i[0]||(i[0]=o=>n.value++)},"count is: "+h(n.value),1)]))}};var H=u(I,[["__scopeId","data-v-7ece3c58"]]);const S={},A=e("h1",null,"About Page",-1),E=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1);function F(t,n){return a(),c(d,null,[A,E],64)}var j=u(S,[["render",F]]);const k={},D=e("h1",null,"Projects Page",-1),O=e("table",null,[e("tr",null,[e("td",null,"a"),e("td",null,"b")]),e("tr",null,[e("td",null,"1"),e("td",null,"2")])],-1),V=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1);function B(t,n){return a(),c(d,null,[D,O,V],64)}var U=u(k,[["render",B]]);const K={},M=e("h1",null,"Contact Page",-1),T=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1);function z(t,n){return a(),c(d,null,[M,T],64)}var G=u(K,[["render",z]]);const J={"/":H,"/about":j,"/projects":U,"/contact":G},Q={data(){return{currentPath:window.location.hash}},computed:{currentView(){return J[this.currentPath.slice(1)||"/"]||NotFound}},mounted(){window.addEventListener("hashchange",()=>{this.currentPath=window.location.hash})}},_=t=>(v("data-v-6ec335d7"),t=t(),g(),t),R={id:"header"},W=_(()=>e("a",{href:"#/"},"Home",-1)),X=m(" | "),Y=_(()=>e("a",{href:"#/about"},"About",-1)),Z=m(" | "),ee=_(()=>e("a",{href:"#/projects"},"Project",-1)),te=m(" | "),oe=_(()=>e("a",{href:"#/contact"},"Contact",-1));function ne(t,n,s,i,o,r){return a(),c("div",R,[W,X,Y,Z,ee,te,oe,(a(),$(x(r.currentView)))])}var re=u(Q,[["render",ne],["__scopeId","data-v-6ec335d7"]]);const ie={};function ae(t,n,s,i,o,r){const l=y("Navbar");return a(),$(l)}var se=u(ie,[["render",ae]]);const ce={},ue={id:"footer"};function le(t,n){return a(),c("div",ue," \xA92022 ")}var de=u(ce,[["render",le],["__scopeId","data-v-b5acb2d4"]]);const _e={setup(t){return(n,s)=>(a(),c(d,null,[p(re),p(se),p(de)],64))}};P(_e).mount("#app");
