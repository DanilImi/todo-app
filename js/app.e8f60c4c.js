(function(){"use strict";var e={71:function(e,t,n){var a=n(9242),s=n(3396);function u(e,t,n,a,u,o){const i=(0,s.up)("HeaderVue"),l=(0,s.up)("MainVue"),r=(0,s.up)("FooterVue");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),(0,s.Wm)(l),(0,s.Wm)(r)],64)}var o=n(7139);function i(e,t,n,a,u,i){return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("h1",{class:(0,o.C_)(e.$style.title)},"to do list",2)])}var l={},r={title:"HeaderVue_title_S5fv8"},c=n(89);const d={};d["$style"]=r;const p=(0,c.Z)(l,[["render",i],["__cssModules",d]]);var _=p;function v(e,t,n,a,u,i){const l=(0,s.up)("AccVueVue"),r=(0,s.up)("InputTaskVue"),c=(0,s.up)("InputFooterVue");return(0,s.wg)(),(0,s.iD)("main",null,[(0,s._)("div",{class:(0,o.C_)(e.$style.accordion)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.faqBase,((t,n)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(e.$style.accordionTask),key:n},[(0,s.Wm)(l,{onClick:e=>a.closeAllFaq(t),item:t},null,8,["onClick","item"]),(0,s._)("div",{class:(0,o.C_)([t.open?e.$style.visible:e.$style.invisible])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.dataMiniTask,(e=>((0,s.wg)(),(0,s.j4)(l,{item:e,key:e.id},null,8,["item"])))),128)),(0,s.Wm)(r)],2)],2)))),128))],2),(0,s.Wm)(c)])}var f=n(4870);const k=(0,s._)("input",{type:"checkbox",id:"scales",name:"scales"},null,-1);function m(e,t,n,a,u,i){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)([n.item.style?e.$style.task:e.$style.header,n.item.open?e.$style.bRadius:""])},[(0,s._)("div",{class:(0,o.C_)([e.$style.acc,n.item.style?"":e.$style.cPointer])},[(0,s._)("div",{class:(0,o.C_)(e.$style.wrapperCheck)},[k,(0,s._)("span",null,(0,o.zw)(n.item.value),1)],2),(0,s._)("button",null,[(0,s._)("div",{class:(0,o.C_)(e.$style.btn)},null,2)])],2)],2)}var y={props:{item:{type:Object,required:!0}}},b={header:"AccVue_header_EPl10",acc:"AccVue_acc_BsoNK",btn:"AccVue_btn_xNH5S",wrapperCheck:"AccVue_wrapperCheck_RKba_",task:"AccVue_task_n6RQr",bRadius:"AccVue_bRadius_Qtqbu",cPointer:"AccVue_cPointer_HoOm9"};const V={};V["$style"]=b;const h=(0,c.Z)(y,[["render",m],["__cssModules",V]]);var w=h;const T=(0,s._)("input",{type:"text",id:"AddTask",name:"AddTask",placeholder:"Add a new task"},null,-1),g=[T];function C(e,t,n,a,u,i){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(e.$style.InputFooter)},g,2)}var $={},A={InputFooter:"InputFooter_InputFooter_yRvBY"};const I={};I["$style"]=A;const M=(0,c.Z)($,[["render",C],["__cssModules",I]]);var D=M;const O=(0,s._)("button",null,"+",-1),j=(0,s._)("input",{type:"text",id:"AddTask",name:"AddTask",placeholder:"Add a new task"},null,-1),F=[O,j];function H(e,t,n,a,u,i){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(e.$style.inputTask)},F,2)}var Z={},x={inputTask:"InputTask_inputTask_fzjfa"};const R={};R["$style"]=x;const q=(0,c.Z)(Z,[["render",H],["__cssModules",R]]);var P=q,W={components:{AccVueVue:w,InputFooterVue:D,InputTaskVue:P},data(){return{variablesAcc:[{id:1,value:"All"},{id:2,value:"Active"},{id:3,value:"Completed"}],isCheck:"All",dataMiniTask:[{id:1,value:"task",style:!0},{id:2,value:"task",style:!0},{id:3,value:"task",style:!0},{id:4,value:"task",style:!0}]}},setup(){const e=(0,f.iH)([{value:"Task1",TaskItem:"Task2",open:!1},{value:"Task2",TaskItem:"Task3",open:!1}]),t=t=>{t.open||e.value.forEach((e=>e.open=!1)),t.open=!t.open};return{faqBase:e,closeAllFaq:t}}},K={accordion:"MainVue_accordion_wteIN",accordionTask:"MainVue_accordionTask_F8xH1",invisible:"MainVue_invisible_wjLdq",visible:"MainVue_visible_ZNj_E"};const Y={};Y["$style"]=K;const B=(0,c.Z)(W,[["render",v],["__cssModules",Y]]);var E=B;function N(e,t,n,a,u,o){const i=(0,s.up)("DataTask"),l=(0,s.up)("InputRadioVue");return(0,s.wg)(),(0,s.iD)("footer",null,[(0,s.Wm)(i),(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.variablesInput,(e=>((0,s.wg)(),(0,s.j4)(l,{item:e,key:e.id,modelValue:u.isCheck,"onUpdate:modelValue":t[0]||(t[0]=e=>u.isCheck=e)},null,8,["item","modelValue"])))),128))])])}function S(e,t,n,a,u,i){return(0,s.wg)(),(0,s.iD)("span",{class:(0,o.C_)(e.$style.dataTask)},"1/3 left",2)}var z={},L={dataTask:"DataTask_dataTask_Z5Ov_"};const Q={};Q["$style"]=L;const J=(0,c.Z)(z,[["render",S],["__cssModules",Q]]);var U=J;const G=["id","value","checked"],X=["for"];function ee(e,t,n,a,u,i){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(e.$style.footerInput)},[(0,s._)("input",{type:"radio",id:n.item.id,name:"Filter",value:n.item.value,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),checked:n.item.value===n.modelValue},null,40,G),(0,s._)("label",{for:n.item.id},(0,o.zw)(n.item.value),9,X)],2)}var te={props:{item:{type:Object,required:!0},modelValue:{String:String,default:null}}},ne={footerInput:"InputRadio_footerInput_VJPL_"};const ae={};ae["$style"]=ne;const se=(0,c.Z)(te,[["render",ee],["__cssModules",ae]]);var ue=se,oe={components:{InputRadioVue:ue,DataTask:U},data(){return{variablesInput:[{id:1,value:"All"},{id:2,value:"Active"},{id:3,value:"Completed"}],isCheck:"All"}}},ie={};const le={};le["$style"]=ie;const re=(0,c.Z)(oe,[["render",N],["__cssModules",le]]);var ce=re,de={components:{HeaderVue:_,FooterVue:ce,MainVue:E}};const pe=(0,c.Z)(de,[["render",u]]);var _e=pe,ve=n(65),fe=(0,ve.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)(_e).use(fe).mount("#app")}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var u=t[a]={exports:{}};return e[a](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,u){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],u=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&u||o>=u)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,u<o&&(o=u));if(i){e.splice(c--,1);var r=s();void 0!==r&&(t=r)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[a,s,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,u,o=a[0],i=a[1],l=a[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var c=l(n)}for(t&&t(a);r<o.length;r++)u=o[r],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(c)},a=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(71)}));a=n.O(a)})();
//# sourceMappingURL=app.e8f60c4c.js.map