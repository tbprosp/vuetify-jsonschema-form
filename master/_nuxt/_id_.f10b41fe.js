import{_ as s,a as c}from"./example.457ded38.js";import{e as i}from"./index.77a0a236.js";import{_ as d,I as r,x as _,m as n,s as x,y as u,t as f,v as a,J as g}from"./entry.5e527063.js";import{V as y}from"./VContainer.cb1ceaa4.js";import{V as m}from"./VBtn.f11ae81a.js";import"./code-block.6550fd1a.js";import"./tag.ca488db7.js";import"./VAlert.bbf31976.js";const v={computed:{nodeEnv(){return"production"},examplesCategory(){return i.find(t=>t.id===this.$route.params.categoryId)},example(){var t;return(t=this.examplesCategory)==null?void 0:t.examples.find(o=>o.id===this.$route.params.id)}}},h={class:"text-h3 mb-3"};function C(t,o,V,k,B,e){const l=s,p=c;return n(),r(y,{fluid:""},{default:_(()=>[x("h1",h,[u(f(e.example.title)+" ",1),a(m,{icon:"mdi-reply",flat:"",title:"get back to parent page",to:`/${e.examplesCategory.id}`},null,8,["to"]),e.nodeEnv==="development"?(n(),r(m,{key:0,icon:"mdi-package-variant-closed",flat:"",title:"open compiled version",to:`/compiled/${e.examplesCategory.id}/${e.example.id}`},null,8,["to"])):g("",!0)]),a(l,{content:e.example.description},null,8,["content"]),a(p,{example:e.example,v2:e.examplesCategory.id==="v2"},null,8,["example","v2"])]),_:1})}const T=d(v,[["render",C]]);export{T as default};
