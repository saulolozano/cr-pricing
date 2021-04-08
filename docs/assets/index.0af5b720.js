import{o as e,c as s,a as t,T as l,w as a,F as o,r as n,b as r,d as i,t as p,e as c}from"./vendor.14530a5f.js";!function(e=".",s="__import__"){try{self[s]=new Function("u","return import(u)")}catch(t){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[s]=e=>new Promise(((t,o)=>{const n=new URL(e,l);if(self[s].moduleMap[n])return t(self[s].moduleMap[n]);const r=new Blob([`import * as m from '${n}';`,`${s}.moduleMap['${n}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){o(new Error(`Failed to import: ${e}`)),a(i)},onload(){t(self[s].moduleMap[n]),a(i)}});document.head.appendChild(i)})),self[s].moduleMap={}}}("/assets/");const d={data:()=>({regions:[{name:"North America",description:"This region includes continental United States and Canada.",hasDiscount:Math.random()>.5,selected:!1,short_name:"us"},{name:"Europe",description:"This region includes the UK and EU countries.",hasDiscount:Math.random()>.5,selected:!1,short_name:"eu"},{name:"South America",description:"This region includes Colombia, Argentina, Chile and Brazil.",hasDiscount:Math.random()>.5,selected:!1,short_name:"sa"}],pricing_tables:{us:{"50Mbps":"100","100Mbps":"100","200Mbps":"100","300Mbps":"100","400Mbps":"100","500Mbps":"100","1Gbps":"200","2Gbps":"200","5Gbps":"350","10Gbps":"600","20Gbps":"1000","30Gbps":"1600","40Gbps":"2400","50Gbps":"3600","60Gbps":"4500","80Gbps":"5600","100Gbps":"6800"},eu:{"50Mbps":"119","100Mbps":"119","200Mbps":"119","300Mbps":"119","400Mbps":"119","500Mbps":"119","1Gbps":"237","2Gbps":"237","5Gbps":"415","10Gbps":"712","20Gbps":"1187","30Gbps":"1899","40Gbps":"2849","50Gbps":"4272","60Gbps":"5342","80Gbps":"6648","100Gbps":"8072"},sa:{"50Mbps":"225","100Mbps":"300","200Mbps":"450","300Mbps":"600","400Mbps":"750","500Mbps":"900","1Gbps":"1350","2Gbps":"2400","5Gbps":"4500","10Gbps":"8400","20Gbps":"12750","30Gbps":"17250","40Gbps":"21000","50Gbps":"24000","60Gbps":"26250","80Gbps":"28350","100Gbps":"29850"},eu_us:{"50Mbps":"150","100Mbps":"200","200Mbps":"300","300Mbps":"400","400Mbps":"500","500Mbps":"600","1Gbps":"900","2Gbps":"1600","5Gbps":"3000","10Gbps":"5600","20Gbps":"8500","30Gbps":"11500","40Gbps":"14000","50Gbps":"16000","60Gbps":"17500","80Gbps":"18900","100Gbps":"19900"},sa_us:{"50Mbps":"225","100Mbps":"300","200Mbps":"450","300Mbps":"600","400Mbps":"750","500Mbps":"900","1Gbps":"1350","2Gbps":"2400","5Gbps":"4500","10Gbps":"8400","20Gbps":"12750","30Gbps":"17250","40Gbps":"21000","50Gbps":"24000","60Gbps":"26250","80Gbps":"28350","100Gbps":"29850"},eu_sa:{"50Mbps":"225","100Mbps":"300","200Mbps":"450","300Mbps":"600","400Mbps":"750","500Mbps":"900","1Gbps":"1350","2Gbps":"2400","5Gbps":"4500","10Gbps":"8400","20Gbps":"12750","30Gbps":"17250","40Gbps":"21000","50Gbps":"24000","60Gbps":"26250","80Gbps":"28350","100Gbps":"29850"},eu_sa_us:{"50Mbps":"225","100Mbps":"300","200Mbps":"450","300Mbps":"600","400Mbps":"750","500Mbps":"900","1Gbps":"1350","2Gbps":"2400","5Gbps":"4500","10Gbps":"8400","20Gbps":"12750","30Gbps":"17250","40Gbps":"21000","50Gbps":"24000","60Gbps":"26250","80Gbps":"28350","100Gbps":"29850"}},showAll:!1}),computed:{anOptionIsSelected(){return this.regions.some((e=>e.selected))},billingMessage(){let e=0;return this.regions.map((s=>{e+=s.selected?1:0})),1===e?"You have selected a single region Cloud Router":"You have selected a multi-region Cloud Router"},total(){if(this.anOptionIsSelected){let e=[];this.regions.map((s=>{s.selected&&e.push(s.short_name)})),this.selectedRegionName=e.sort().join("_");const s=this.pricing_tables[this.selectedRegionName],t=this.showAll?Object.keys(s).length:6;return Object.keys(s).slice(0,t).reduce(((e,t)=>(e[t]=s[t],e)),{})}}},methods:{reset(){this.regions.map((e=>{e.selected=!1}))},formatCurrency(e){return("eu"!==this.selectedRegionName?"$":"€")+parseInt(e).toLocaleString()}}},b={class:"container m-auto p-32"},u={class:"",style:{"min-height":"160px"}},m=t("h1",{class:"text-4xl text-center text-gray-700"},"Cloud Router Pricing",-1),g={class:"mb-10 text-center text-lg text-gray-400"},h=r(" Select the regions you'd like to use in your cloud router and we'll tell you how much you have to pay."),G=t("br",null,null,-1),M={class:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 align-middle"},x={class:"flex-1 flex flex-col p-6"},v={class:"mt-6 text-gray text-2xl font-medium"},w={class:"mt-1 flex-grow flex flex-col justify-between"},C={class:"text-gray-500 text-sm"},y={class:"mt-3"},f={key:0,class:"px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full"},k={key:0,class:"col-span-4 border-2 border-green-200 bg-green-50 rounded-md"},_={class:"rounded-md bg-green-50 p-4"},L={class:"flex"},R=t("div",{class:"flex-shrink-0"},[t("svg",{class:"h-8 w-8 inline-block text-green-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})])],-1),S={class:"ml-3 flex-auto"},j={class:"text-lg font-medium text-green-800"},Z=t("div",{class:"mt-2 text-sm text-green-700"}," To the right is the amount you have to pay ",-1),z={class:"ml-3 flex-auto bg-gray-100 text-center rounded-md p-1"},A={class:"min-w-full divide-y divide-gray-200 rounded-md"},O=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"},[t("svg",{class:"inline-block p-0 m-0",width:"28px",height:"28px",viewBox:"0 0 34 34",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M 16 6 C 9.382813 6 4 11.382813 4 18 C 4 20.894531 5.035156 23.550781 6.75 25.625 L 7.03125 26 L 24.96875 26 L 25.25 25.625 C 26.964844 23.550781 28 20.894531 28 18 C 28 11.382813 22.617188 6 16 6 Z M 16 8 C 21.535156 8 26 12.464844 26 18 C 26 20.265625 25.207031 22.324219 23.9375 24 L 8.0625 24 C 6.792969 22.324219 6 20.265625 6 18 C 6 12.464844 10.464844 8 16 8 Z M 16 9 C 15.449219 9 15 9.449219 15 10 C 15 10.550781 15.449219 11 16 11 C 16.550781 11 17 10.550781 17 10 C 17 9.449219 16.550781 9 16 9 Z M 12 10.0625 C 11.449219 10.0625 11 10.511719 11 11.0625 C 11 11.613281 11.449219 12.0625 12 12.0625 C 12.550781 12.0625 13 11.613281 13 11.0625 C 13 10.511719 12.550781 10.0625 12 10.0625 Z M 20 10.0625 C 19.449219 10.0625 19 10.511719 19 11.0625 C 19 11.613281 19.449219 12.0625 20 12.0625 C 20.550781 12.0625 21 11.613281 21 11.0625 C 21 10.511719 20.550781 10.0625 20 10.0625 Z M 9.0625 13 C 8.511719 13 8.0625 13.449219 8.0625 14 C 8.0625 14.550781 8.511719 15 9.0625 15 C 9.613281 15 10.0625 14.550781 10.0625 14 C 10.0625 13.449219 9.613281 13 9.0625 13 Z M 22.65625 13.03125 L 17 16.28125 C 16.707031 16.109375 16.363281 16 16 16 C 14.894531 16 14 16.894531 14 18 C 14 19.105469 14.894531 20 16 20 C 17.09375 20 17.984375 19.121094 18 18.03125 C 18 18.019531 18 18.011719 18 18 L 23.65625 14.78125 Z M 8 17 C 7.449219 17 7 17.449219 7 18 C 7 18.550781 7.449219 19 8 19 C 8.550781 19 9 18.550781 9 18 C 9 17.449219 8.550781 17 8 17 Z M 24 17 C 23.449219 17 23 17.449219 23 18 C 23 18.550781 23.449219 19 24 19 C 24.550781 19 25 18.550781 25 18 C 25 17.449219 24.550781 17 24 17 Z M 9.0625 21 C 8.511719 21 8.0625 21.449219 8.0625 22 C 8.0625 22.550781 8.511719 23 9.0625 23 C 9.613281 23 10.0625 22.550781 10.0625 22 C 10.0625 21.449219 9.613281 21 9.0625 21 Z M 22.9375 21 C 22.386719 21 21.9375 21.449219 21.9375 22 C 21.9375 22.550781 22.386719 23 22.9375 23 C 23.488281 23 23.9375 22.550781 23.9375 22 C 23.9375 21.449219 23.488281 21 22.9375 21 Z"})]),r(" Speed ")]),t("th",{scope:"col",class:"px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 inline-block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),r(" Price ")])])],-1),U={class:"px-6 py-4 whitespace-nowrap text-center text-lg text-gray-600"},B={class:"px-6 py-4 whitespace-nowrap text-center text-2xl font-medium text-gray-700"},I=t("br",null,null,-1),T=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clip-rule":"evenodd"})],-1),$=r(" Show all "),D=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z","clip-rule":"evenodd"})],-1),E=r(" Show less "),N=t("br",null,null,-1),F=t("br",null,null,-1);d.render=function(r,c,d,H,P,V){return e(),s("div",b,[t("div",u,[m,t("p",g,[h,G,t(l,{"enter-active-class":"transition-opacity ease-in duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity ease-in duration-300","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a((()=>[V.anOptionIsSelected?(e(),s("button",{key:0,onClick:c[1]||(c[1]=(...e)=>V.reset&&V.reset(...e)),class:"p-3 mt-4 bg-yellow-100 text-yellow-700 font-bold rounded-md transition ease-in-out"}," Start over ")):i("",!0)])),_:1})])]),t("ul",M,[(e(!0),s(o,null,n(P.regions,(l=>(e(),s("li",{onClick:e=>l.selected=!l.selected,key:l,class:["col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200\n               border-2 border-indigo-200 cursor-pointer\n               transition ease-in-out duration-300",{"border-indigo-700":l.selected}]},[t("div",x,[t("h3",v,p(l.name),1),t("dl",w,[t("dd",C,p(l.description),1),t("dd",y,[l.hasDiscount?(e(),s("span",f,"limited-time discount")):i("",!0)])])])],10,["onClick"])))),128)),t(l,{"enter-active-class":"transition-opacity ease-in duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity ease-in duration-300","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a((()=>[V.anOptionIsSelected?(e(),s("li",k,[t("div",_,[t("div",L,[R,t("div",S,[t("h3",j,p(V.billingMessage),1),Z]),t("div",z,[t("table",A,[O,t("tbody",null,[(e(!0),s(o,null,n(V.total,((l,a,o)=>(e(),s("tr",{key:o,class:[{"bg-white":o%2==0,"bg-gray-50":o%2!=0},"hover:bg-gray-200"]},[t("td",U,p(a),1),t("td",B,p(V.formatCurrency(l)),1)],2)))),128))])]),I,t("a",{href:"javascript:;",onClick:c[2]||(c[2]=e=>P.showAll=!P.showAll),class:"text-center py-2 px-3 rounded-md hover:bg-gray-300 "},[P.showAll?i("",!0):(e(),s(o,{key:0},[T,$],64)),P.showAll?(e(),s(o,{key:1},[D,E],64)):i("",!0)]),N,F])])])])):i("",!0)])),_:1})])])},c(d).mount("#app");
