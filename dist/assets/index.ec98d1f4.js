import{d as e,c as r,r as t,o,a as n,b as s,e as a}from"./vendor.2263667c.js";var d=e({name:"App"});let i;d.render=function(e,n,s,a,d,i){const c=t("router-view");return o(),r(c)};const c={},p=function(e,r){if(!r)return e();if(void 0===i){const e=document.createElement("link").relList;i=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(r.map((e=>{if(e in c)return;c[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=r?"stylesheet":i,r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r?new Promise(((e,r)=>{o.addEventListener("load",e),o.addEventListener("error",r)})):void 0}))).then((()=>e()))},l=[{path:"/",component:()=>p((()=>import("./Home.727428e3.js")),["/assets/Home.727428e3.js","/assets/Home.7a4c7b2d.css","/assets/logo.34543b0f.js","/assets/vendor.2263667c.js"])},{path:"/dashboard",component:()=>p((()=>import("./Dashboard.ac4d3a60.js")),["/assets/Dashboard.ac4d3a60.js","/assets/Dashboard.5f409222.css","/assets/logo.34543b0f.js","/assets/vendor.2263667c.js"])}],u=n({history:s(),routes:l});a(d).use(u).mount("#app");
