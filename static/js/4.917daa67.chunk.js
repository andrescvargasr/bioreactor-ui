(this["webpackJsonpbioreactor-ui"]=this["webpackJsonpbioreactor-ui"]||[]).push([[4],{290:function(e,t){},303:function(e,t){},305:function(e,t){},338:function(e,t){},339:function(e,t){},341:function(e,t){},343:function(e,t){},378:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(15),s=n(0),o=function(e){var t=e.data,n=e.onSelect,r=e.onEdit;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"w-full flex flex-row items-center",children:[Object(s.jsx)("h3",{className:"w-max ml-2 mr-4 text-neutral-600 text-sm font-semibold whitespace-nowrap ",children:"Available devices"}),Object(s.jsx)("div",{className:"w-full border-t border-neutral-300"})]}),Object(s.jsx)("div",{className:"h-4"}),Object(s.jsx)("div",{className:"overflow-hidden bg-white shadow sm:rounded-md",children:t.map((function(e){return Object(s.jsxs)("li",{className:"block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50 cursor-pointer",onClick:function(t){return n(e,t)},children:[Object(s.jsxs)("div",{className:"flex items-center px-4 py-4 sm:px-6",children:[Object(s.jsx)("div",{className:"flex items-center flex-1 min-w-0",children:Object(s.jsxs)("div",{className:"flex-1 min-w-0 px-4 md:grid md:grid-col-2 md:gap-4",children:[Object(s.jsx)("p",{className:"col-span-2 text-lg font-semibold truncate text-primary-700",children:e.name}),Object(s.jsxs)("div",{className:"flex flex-col text-sm font-italic text-neutral",children:[Object(s.jsxs)("p",{className:"truncate",children:[Object(s.jsx)("span",{className:"font-semibold",children:"URL : "}),e.url]}),Object(s.jsxs)("p",{className:"truncate",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Topic : "}),e.topic]})]}),Object(s.jsx)("div",{className:"pt-2 md:pt-0 flex justify-end items-center cursor-default",children:Object(s.jsx)("button",{className:"mx-1 p-2 border rounded-md shadow bg-neutral-100 focus:outline-none active:bg-neutral-200",onClick:function(t){return r(e,t)},children:Object(s.jsx)(c.w,{className:"text-gray-700"})})})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(c.k,{className:"w-5 h-5 text-neutral-400"})})]}),Object(s.jsx)("div",{className:"w-full border-t border-neutral-100"})]},e.name)}))})]})},a=n(3),l=n(36),i=n.n(l),u=n(46),d=n(1),m=n(366),b=n(113),j=n(288);var f,p=function(){var e=null,t={};return{connect:function(n){(!e||t&&t.db_name!==n)&&((e=new j.a(n)).info().then((function(e){return t=e})),console.log('connected to DB "'.concat(n,'"')));return{getInfo:function(){return t},put:function(t){return"_id"in t?e.put(t):Promise.reject(new Error("doc must include _id"))},get:function(t){return e.get(t)},getAll:function(){var t=Object(u.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.allDocs(Object(d.a)({include_docs:!0},n));case 2:return r=t.sent,console.log("get ".concat(r.total_rows," rows")),t.abrupt("return",r.rows);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),update:function(t){return"_id"in t?e.get(t._id).then((function(n){return e.put(Object(d.a)(Object(d.a)({},t),{},{_rev:n._rev}))})):Promise.reject(new Error("doc must include _id"))},remove:function(t){return e.get(t).then((function(n){return e.remove({_id:t,_rev:n._rev})}))},removeAll:function(){return e.destroy().then((function(t){e=null,console.log('DB "'.concat(n,'" destroyed : ')+JSON.stringify(t))}))},close:function(t){return e.close((function(){e=null,console.log('DB "'.concat(n,'" closed')),Object(b.isFunction)(t)&&t()}))}}}}}(),x=n(299),h=n.n(x),O=(n(352),function(e,t,n,r,c,s,o){f&&f.connected&&f.options.hostname===e&&Object(b.isFunction)(s)&&s(f);var a="".concat(t,"://").concat(e,":").concat(n);(f=h.a.connect(a,{keepalive:60})).stream.on("error",(function(e){var t=new Error("couldn't connect to BROKER \"".concat(a,'"'));t.name="MQTT ERROR",f.end(),Object(b.isFunction)(o)&&o(t)})),f.on("connect",(function(){console.log("connected to ".concat(a," : ").concat(f.connected)),Object(b.isFunction)(s)&&s(f)}))}),w={tcp:"tcp",http:"http"},v={tcp:"computer",http:"beemos"},g=w.tcp,N=function(e){var t=e.url,n=e.protocol,r=e.port;e.username,e.password;return function(e,t,n,r,c){return new Promise((function(r,c){O(e,t,n,0,0,(function(e){return r(e)}),(function(e){return c(e)}))}))}(t,n,r)},y=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,c,s,o,a,l,u,d,m,b,j,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=p.connect("BIOREACTOR_devices"),r=t.kind,c=t.name,s=t.url,o=t.protocol,a=void 0===o?g:o,l=t.port,u=void 0===l?"9001":l,d=t.topic,m=t.username,b=t.password,e.t0=i.a.keys(t);case 3:if((e.t1=e.t0()).done){e.next=9;break}if(j=e.t1.value,t[j]){e.next=7;break}throw new Error("Field missing [".concat(j,"]"));case 7:e.next=3;break;case 9:return f="".concat(r,"_").concat(c),e.abrupt("return",n.get(f).then((function(e){var t=new Error("Another device exists with the same name");throw t.payload={exist:!0,payload:e},t})).catch((function(e){if(e.payload&&e.payload.exist)throw e;return n.put({_id:f,name:c,url:s,protocol:a,port:u,topic:d,username:m,password:b}).then((function(e){return{exist:!1,inserted:!0,payload:e}})).catch((function(e){var t=new Error(e.toString());throw t.payload={exist:!1,inserted:!1,payload:e.toString()},t}))})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){var t=e.isOpen,n=e.onClose,o=e.initialValues,l=void 0===o?{}:o,j=Object(a.useState)(Object(s.jsx)("div",{})),f=Object(r.a)(j,2),p=f[0],x=f[1],h=Object(a.useRef)(null),O=Object.values(w).map((function(e){return{label:e.toUpperCase(),value:e}})),g=Object.values(v).map((function(e){return{label:e.toUpperCase(),value:e}})),C=Object(d.a)({name:"123",url:"mqtt.beemos.org",protocol:O[0].value,port:"9001",kind:g[0].value,topic:"test",username:"testuser",password:"word"},l),k=m.b().shape({name:m.c().max(50,"Name too Long!").matches(/^[A-z0-9_-]*$/,"Field supports only : letters / numbers / _ / - ").required("Required"),url:m.c().required("Required"),port:m.a().positive().integer().required("Required"),protocol:m.c().required("Required"),username:m.c().required("Required")}),q=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t);case 3:Object(b.isFunction)(n)&&n(),e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),_=function(e,t){switch(e){case"connecting":return Object(s.jsxs)("div",{className:"h-full mx-6 flex flex-row items-center text-sm text-neutral-500",children:[Object(s.jsx)(c.f,{className:"w-5 h-5 mr-2"}),Object(s.jsx)("span",{children:t})]});case"success":return Object(s.jsxs)("div",{className:"h-full mx-4 flex flex-row items-center text-sm text-success-500",children:[Object(s.jsx)(c.j,{className:"h-5 w-5 mr-4"}),Object(s.jsx)("span",{children:t})]});case"error":return Object(s.jsxs)("div",{className:"h-full mx-4 flex flex-row items-center text-sm text-danger-500",children:[Object(s.jsx)(c.v,{className:"h-5 w-5 mr-4"}),Object(s.jsx)("span",{children:t})]});default:return Object(s.jsx)("div",{})}};return Object(s.jsxs)(c.d,{isOpen:t,onRequestClose:n,icon:Object(s.jsx)(c.s,{}),iconColor:"neutral",animated:!0,hasCloseButton:!0,requestCloseOnBackdrop:!0,requestCloseOnEsc:!0,fluid:!0,wrapperComponent:c.a,wrapperProps:{innerRef:h,initialValues:C,validationSchema:k,onSubmit:q,className:"h-full"},children:[Object(s.jsx)(c.d.Header,{children:"Connect New Device"}),Object(s.jsxs)(c.d.Body,{children:[Object(s.jsxs)("div",{className:"p-2 mt-2",children:[Object(s.jsx)(c.c,{name:"name",id:"name",label:"Custom name",placeholder:"device_123",required:!0,className:"w-full",inputClassName:"w-full"}),Object(s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between mt-4 sm:mt-0 border-t border-neutral sm:border-0",children:[Object(s.jsx)(c.c,{name:"url",id:"url",label:"URL",placeholder:"mqtt.domain.com",required:!0,leadingInlineAddon:Object(s.jsx)(c.q,{}),className:"mt-4 sm:mr-4 w-full sm:w-1/2",inputClassName:"w-full"}),Object(s.jsxs)("div",{className:"flex flex-row justify-between flex-1",children:[Object(s.jsx)(c.e,{name:"protocol",id:"protocol",label:"Protocol",options:O,renderOption:function(e){return"".concat(e.label)},getValue:function(e){return e.value},className:"mt-4 mr-4 w-1/2",inputClassName:"w-full"}),Object(s.jsx)(c.c,{name:"port",id:"port",label:"Port",className:"mt-4 flex-1",inputClassName:"w-full"})]})]}),Object(s.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(s.jsx)(c.e,{name:"kind",id:"kind",label:"Device kind",options:g,renderOption:function(e){return"".concat(e.label)},getValue:function(e){return e.value},required:!0,className:"mt-4 mr-4 w-1/3 ",inputClassName:"w-full bg-gray-500"}),Object(s.jsx)(c.c,{name:"topic",id:"topic",label:"Topic",required:!0,className:"mt-4 flex-1",inputClassName:"w-full"})]}),Object(s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between mt-4 sm:mt-0 border-t border-neutral sm:border-0",children:[Object(s.jsx)(c.c,{name:"username",id:"username",label:"Username",placeholder:"Username",required:!0,leadingInlineAddon:Object(s.jsx)(c.u,{}),className:"mt-4 w-full sm:mr-4 sm:w-1/2",inputClassName:"w-full"}),Object(s.jsx)(c.c,{name:"password",id:"password",label:"Password",type:"password",placeholder:"********",required:!0,leadingInlineAddon:Object(s.jsx)(c.p,{}),className:"mt-4 w-full sm:flex-1",inputClassName:"w-full"})]})]}),Object(s.jsx)(c.b,{})]}),Object(s.jsx)(c.d.Footer,{children:Object(s.jsxs)("div",{className:"flex flex-row items-center",children:[p,Object(s.jsx)("button",{onClick:function(e){e.stopPropagation(),x(_("connecting","Connecting ...")),setTimeout((function(){N(h.current.values).then((function(e){x(_("success","Connected"))})).catch((function(e){x(_("error","Connection Error: ".concat(e.message)))}))}),500)},type:"button",className:"px-4 py-2 mr-4 text-sm font-semibold text-neutral-700 border rounded-md shadow bg-neutral-200 focus:outline-none flex-1 sm:flex-none",children:"Test connection"}),Object(s.jsx)(c.g,{className:"w-1/3 sm:w-max ",children:"Add"})]})})]})};t.default=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([{name:"device 1",url:"mqtt.beemos.org",topic:"lpatiny/Computer/server"},{name:"device 2",url:"mqtt.zakodium.org",topic:"lpatiny/Computer/server"},{name:"device 3",url:"mqtt.zakodium.org",topic:"lpatiny/Computer/server"}]),i=Object(r.a)(l,1)[0];return Object(s.jsxs)("div",{className:"p-8",children:[Object(s.jsx)("h2",{className:"text-3xl font-semibold mb-12 lg:mb-16",children:"Broadcast devices"}),Object(s.jsx)("div",{className:"w-full flex justify-end mb-6 lg:mb-8",children:Object(s.jsx)("button",{onClick:function(){return c(!0)},className:"px-4 text-neutral-100 font-semibold p-2 border rounded-md shadow bg-primary-700 focus:outline-none active:bg-primary-500",children:"Add device"})}),Object(s.jsx)(C,{isOpen:n,onClose:function(){return c(!1)}}),Object(s.jsx)(o,{data:i,onSelect:function(e){console.log(e)},onEdit:function(e,t){t.stopPropagation(),console.log(e)}})]})}}}]);
//# sourceMappingURL=4.917daa67.chunk.js.map