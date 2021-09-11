(()=>{"use strict";var e=function(){function e(){}return e.addSelectBox=function(e,t){t.add(new Option("-")),e.forEach((function(e){t.add(new Option(""+e))}))},e.resetSelectBox=function(e){for(;1<=e.childNodes.length;)e.removeChild(e.firstChild)},e}(),t=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(e){u(e)}}function a(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},n=function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},r=function(e){return t(void 0,void 0,void 0,(function(){var t,r;return n(this,(function(n){switch(n.label){case 0:return[4,fetch("https://api.recursionist.io/builder/computers?type="+e,{method:"GET"})];case 1:return 204==(t=n.sent()).status?[2,{status:t.status}]:(r=t.json(),[2,{status:t.status,body:r}])}}))}))},o=document.getElementById("cpuBrand"),u=document.getElementById("cpuModel"),i=document.getElementById("gpuBrand"),a=document.getElementById("gpuModel"),c=(document.getElementById("ramAmount"),document.getElementById("ramBrand")),d=document.getElementById("ramModel"),l=document.getElementById("storageKind"),s=document.getElementById("storage"),f=document.getElementById("storageBrand"),h=document.getElementById("storageModel"),v=(document.getElementById("btn"),document.getElementById("score"),function(){function v(){}return v.getCpu=function(){var i=this,a=[];t(void 0,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,r("cpu")];case 1:return[2,e.sent().body]}}))})).then((function(t){for(var n in t)a.push(t[n].Brand),a=Array.from(new Set(a));e.addSelectBox(a,o),o.addEventListener("change",(function(){i.filterModel(t,u,o)}))}))},v.getGpu=function(){var o=this,u=[];t(void 0,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,r("gpu")];case 1:return[2,e.sent().body]}}))})).then((function(t){for(var n in t)u.push(t[n].Brand),u=Array.from(new Set(u));e.addSelectBox(u,i),i.addEventListener("change",(function(){o.filterModel(t,a,i)}))}))},v.getRam=function(){var o=this,u=[];t(void 0,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,r("ram")];case 1:return[2,e.sent().body]}}))})).then((function(t){for(var n in t)u.push(t[n].Brand),u=Array.from(new Set(u));e.addSelectBox(u,c),c.addEventListener("change",(function(){o.filterModel(t,d,c)}))}))},v.getStorage=function(){var o=this,u=[],i=[];l.addEventListener("change",(function(){var a,c=l.value;(a=c,t(void 0,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return"1"!=a?[3,2]:[4,r("hdd")];case 1:return[2,e.sent().body];case 2:return"2"!=a?[3,4]:[4,r("ssd")];case 3:return[2,e.sent().body];case 4:return[2]}}))}))).then((function(t){for(var n in t){var r=t[n].Model.match(/\d*[TG]B/g).toString();u.push(r),i.push(t[n].Brand),u=Array.from(new Set(u)),i=Array.from(new Set(i))}e.addSelectBox(u,s),e.addSelectBox(i,f),s.addEventListener("change",(function(){o.filterModel(t,h,f,s)})),f.addEventListener("change",(function(){o.filterModel(t,h,f,s)}))}))}))},v.filterModel=function(t,n,r,o){var u,i=[];e.resetSelectBox(n);var a=r.value,c=null===(u=o)||void 0===u?void 0:u.value,d=t.filter((function(e){return e.Brand==a}));if(c)for(var l in d)d[l].Model.includes(c)&&i.push(d[l].Model),i=Array.from(new Set(i));else for(var l in d)i.push(d[l].Model),i=Array.from(new Set(i));e.addSelectBox(i,n)},v}());v.getCpu(),v.getGpu(),v.getRam(),v.getStorage()})();