(this["webpackJsonpbioreactor-ui"]=this["webpackJsonpbioreactor-ui"]||[]).push([[4],{290:function(e,t){},303:function(e,t){},305:function(e,t){},338:function(e,t){},339:function(e,t){},341:function(e,t){},343:function(e,t){},378:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(3),s=n(95),a=n(15),o=n(35),i=n.n(o),l=n(46),u=n(0),d=function(e){var t=e.data,n=e.onSelect,o=e.onEdit,d=e.onDelete,m=Object(r.useState)(),f=Object(c.a)(m,2),j=f[0],b=f[1],p=function(){var e=Object(l.a)(i.a.mark((function e(t,c){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j||(b(t),r=function(){return b(null)},Object(s.isFunction)(n)&&n(t,c,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"overflow-hidden bg-white shadow sm:rounded-md",children:t.map((function(e){return Object(u.jsxs)("li",{className:"block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50 cursor-pointer",onClick:function(t){return p(e,t)},children:[Object(u.jsxs)("div",{className:"relative flex items-center px-4 py-4 sm:px-6",children:[j===e&&Object(u.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-30 bg-neutral-300",children:Object(u.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:Object(u.jsx)(a.i,{className:"w-8 h-8 text-primary-800"})})}),Object(u.jsx)("div",{className:"flex items-center flex-1 min-w-0",children:Object(u.jsxs)("div",{className:"flex-1 min-w-0 px-4 sm:grid sm:grid-col-2 sm:gap-4",children:[Object(u.jsx)("p",{className:"col-span-2 text-lg font-semibold truncate text-primary-700",children:e.name}),Object(u.jsxs)("div",{className:"flex flex-col text-xs font-italic text-neutral-600",children:[Object(u.jsxs)("p",{className:"truncate",children:[Object(u.jsx)("span",{className:"font-semibold",children:"Device kind : "}),e.kind]}),Object(u.jsxs)("p",{className:"truncate",children:[Object(u.jsx)("span",{className:"font-semibold",children:"URL : "}),"".concat(e.protocol,"://").concat(e.url,":").concat(e.port)]}),Object(u.jsxs)("p",{className:"truncate",children:[Object(u.jsx)("span",{className:"font-semibold",children:"Topic : "}),e.topic]})]}),Object(u.jsxs)("div",{className:"pt-2 sm:pt-0 flex justify-end items-center cursor-default",children:[Object(u.jsx)("button",{className:"mx-1 p-2 border rounded shadow-sm bg-neutral-100 focus:outline-none active:bg-neutral-200",onClick:function(t){return o(e,t)},children:Object(u.jsx)(a.A,{className:"text-gray-700"})}),Object(u.jsx)("button",{className:"mx-1 p-2 border rounded shadow-sm bg-neutral-100 focus:outline-none active:bg-neutral-200",onClick:function(t){return d(e,t)},children:Object(u.jsx)(a.C,{className:"text-gray-700"})})]})]})}),Object(u.jsx)("div",{children:Object(u.jsx)(a.n,{className:"w-5 h-5 text-neutral-400"})})]}),Object(u.jsx)("div",{className:"w-full border-t border-neutral-100"})]},e.kind+e.name)}))})},m=n(1),f=n(366),j=n(288);var b,p=function(){var e=null,t={};return{connect:function(n){(!e||t&&t.db_name!==n)&&((e=new j.a(n)).info().then((function(e){return t=e})),console.log('connected to DB "'.concat(n,'"')));return{getInfo:function(){return t},put:function(t){return"_id"in t?e.put(t):Promise.reject(new Error("doc must include _id"))},get:function(t){return e.get(t)},getAll:function(){var t=Object(l.a)(i.a.mark((function t(n){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.allDocs(Object(m.a)({include_docs:!0},n));case 2:return c=t.sent,t.abrupt("return",c.rows);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),update:function(t){return"_id"in t?e.get(t._id).then((function(n){return e.put(Object(m.a)(Object(m.a)({},t),{},{_rev:n._rev}))})):Promise.reject(new Error("doc must include _id"))},remove:function(t){return e.get(t).then((function(n){return e.remove({_id:t,_rev:n._rev})}))},removeAll:function(){return e.destroy().then((function(t){e=null,console.log('DB "'.concat(n,'" destroyed : ')+JSON.stringify(t))}))},close:function(t){return e.close((function(){e=null,console.log('DB "'.concat(n,'" closed')),Object(s.isFunction)(t)&&t()}))}}}}}(),x=n(299),O=n.n(x),h=(n(352),function(e,t,n,c,r,a,o){b&&b.connected&&b.options.hostname===e&&Object(s.isFunction)(a)&&a(b);var i="".concat(t,"://").concat(e,":").concat(n);(b=O.a.connect(i,{keepalive:60})).stream.on("error",(function(e){var t=new Error("Couldn't connect to BROKER \"".concat(i,'"'));t.name="Mqtt Error",b.end(),Object(s.isFunction)(o)&&o(t)})),b.on("connect",(function(){console.log("connected to ".concat(i," : ").concat(b.connected)),Object(s.isFunction)(a)&&a(b)}))}),w="BIOREACTOR_devices",v=function(e){var t=e.url,n=e.protocol,c=e.port;e.username,e.password;return function(e,t,n,c,r){return new Promise((function(c,r){h(e,t,n,0,0,(function(e){return c(e)}),(function(e){return r(e)}))}))}(t,n,c)},N=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.connect(w),e.next=3,t.getAll();case 3:return n=e.sent,e.abrupt("return",n.map((function(e){return e.doc})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.connect(w),e.abrupt("return",n.update(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,r,s,a,o,l,u,d,m,f,j,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=p.connect(w),c=t.kind,r=t.name,s=t.url,a=t.protocol,o=void 0===a?"tcp":a,l=t.port,u=void 0===l?"9001":l,d=t.topic,m=t.username,f=t.password,e.t0=i.a.keys(t);case 3:if((e.t1=e.t0()).done){e.next=9;break}if(j=e.t1.value,t[j]){e.next=7;break}throw new Error("Field missing [".concat(j,"]"));case 7:e.next=3;break;case 9:return b="".concat(c,"_").concat(r),e.abrupt("return",n.get(b).then((function(e){var t=new Error("Another device exists with the same name");throw t.payload={exist:!0,payload:e},t})).catch((function(e){if(e.payload&&e.payload.exist)throw e;return n.put({_id:b,name:r,url:s,protocol:o,port:u,topic:d,kind:c,username:m,password:f}).then((function(e){return{exist:!1,inserted:!0,payload:e}})).catch((function(e){var t=new Error(e.toString());throw t.payload={exist:!1,inserted:!1,payload:e.toString()},t}))})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=["tcp","http"].map((function(e){return{label:e.toUpperCase(),value:e}})),C=["computer","beemos","openBio","openBio6","openSpectro","simpleSpectro","solar2015"].map((function(e){return{label:e,value:e}})),q=f.b().shape({name:f.c().max(50,"Name too Long!").matches(/^[A-z0-9_-]*$/,"Field supports only : letters / numbers / _ / - ").required("Required"),url:f.c().required("Required"),port:f.a().positive().integer(),protocol:f.c(),kind:f.c().required("Required"),topic:f.c().required("Required"),username:f.c().required("Required")}),E=function(e){var t=e.isOpen,n=e.onClose,o=e.onSave,d=e.onUpdate,f=e.initialValues,j=!Object(s.isEmpty)(f),b=Object(r.useState)(Object(u.jsx)("div",{})),p=Object(c.a)(b,2),x=p[0],O=p[1],h=Object(r.useRef)(null),w=Object(m.a)({name:"123",url:"mqtt.beemos.org",protocol:k[0].value,port:"9001",kind:C[0].value,topic:"test",username:"testUser",password:"word"},f),N=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!j){e.next=8;break}if(e.t0=Object(s.isFunction)(d),!e.t0){e.next=6;break}return e.next=6,d(t);case 6:e.next=12;break;case 8:if(e.t1=Object(s.isFunction)(o),!e.t1){e.next=12;break}return e.next=12,o(t);case 12:Object(s.isFunction)(n)&&n(),e.next=18;break;case 15:throw e.prev=15,e.t2=e.catch(0),new Error(e.t2.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){!t&&setTimeout((function(){return O(Object(u.jsx)("div",{}))}),500)}),[t]);var g=function(e,t){switch(e){case"connecting":return Object(u.jsxs)("div",{className:"mx-6 flex flex-row items-center text-sm text-left text-neutral-500",children:[Object(u.jsx)(a.i,{className:"w-6 h-6 mr-2"}),Object(u.jsx)("span",{children:t})]});case"success":return Object(u.jsxs)("div",{className:"mx-4 flex flex-row items-center text-sm text-left text-success-500",children:[Object(u.jsx)(a.m,{className:"h-6 w-6 mr-4"}),Object(u.jsx)("span",{children:t})]});case"error":return Object(u.jsxs)("div",{className:"mx-4 flex flex-row items-center text-sm text-left text-danger-500",children:[Object(u.jsx)(a.z,{className:"h-6 w-6 mr-4"}),Object(u.jsx)("span",{children:t})]});default:return Object(u.jsx)("div",{})}};return Object(u.jsxs)(a.e,{isOpen:t,onRequestClose:n,icon:Object(u.jsx)(a.w,{}),iconColor:"neutral",animated:!0,hasCloseButton:!0,requestCloseOnBackdrop:!0,requestCloseOnEsc:!0,fluid:!0,wrapperComponent:a.b,wrapperProps:{innerRef:h,initialValues:w,validationSchema:q,onSubmit:N,className:"h-full"},children:[Object(u.jsx)(a.e.Header,{children:"Connect New Device"}),Object(u.jsxs)(a.e.Body,{children:[Object(u.jsxs)("div",{className:"p-2 mt-2",children:[Object(u.jsx)(a.d,{name:"name",id:"name",label:"Custom name",placeholder:"device_123",disabled:j,required:!0,className:"w-full",inputClassName:"w-full"}),Object(u.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between mt-4 sm:mt-0 border-t border-neutral sm:border-0",children:[Object(u.jsx)(a.d,{name:"url",id:"url",label:"URL",placeholder:"mqtt.domain.com",required:!0,leadingInlineAddon:Object(u.jsx)(a.u,{}),className:"mt-4 sm:mr-4 w-full sm:w-1/2",inputClassName:"w-full"}),Object(u.jsxs)("div",{className:"flex flex-row justify-between items-start flex-1",children:[Object(u.jsx)(a.h,{name:"protocol",id:"protocol",label:"Protocol",options:k,renderOption:function(e){return"".concat(e.label)},getValue:function(e){return e.value},className:"mt-4 mr-4 w-1/2",inputClassName:"w-full"}),Object(u.jsx)(a.d,{name:"port",id:"port",label:"Port",className:"mt-4 flex-1",inputClassName:"w-full"})]})]}),Object(u.jsxs)("div",{className:"flex flex-row justify-between items-start",children:[Object(u.jsx)(a.h,{name:"kind",id:"kind",label:"Device kind",options:C,renderOption:function(e){return"".concat(e.label)},getValue:function(e){return e.value},required:!0,className:"mt-4 mr-4 w-1/3 ",inputClassName:"w-full bg-gray-500"}),Object(u.jsx)(a.d,{name:"topic",id:"topic",label:"Topic",required:!0,className:"mt-4 flex-1",inputClassName:"w-full"})]}),Object(u.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between mt-4 sm:mt-0 border-t border-neutral sm:border-0",children:[Object(u.jsx)(a.d,{name:"username",id:"username",label:"Username",placeholder:"Username",required:!0,leadingInlineAddon:Object(u.jsx)(a.y,{}),className:"mt-4 w-full sm:mr-4 sm:w-1/2",inputClassName:"w-full"}),Object(u.jsx)(a.d,{name:"password",id:"password",label:"Password",type:"password",placeholder:"********",required:!0,leadingInlineAddon:Object(u.jsx)(a.t,{}),className:"mt-4 w-full sm:flex-1",inputClassName:"w-full"})]})]}),Object(u.jsx)(a.c,{})]}),Object(u.jsx)(a.e.Footer,{children:Object(u.jsxs)("div",{className:"flex flex-col sm:flex-row items-center",children:[x,Object(u.jsx)("button",{onClick:function(e){e.stopPropagation(),O(g("connecting","Connecting ...")),setTimeout((function(){v(h.current.values).then((function(e){O(g("success","Connected"))})).catch((function(e){O(g("error","Connection Error: ".concat(e.message)))}))}),500)},type:"button",className:"w-full sm:w-max mt-2 sm:my-0 px-4 py-2 sm:mr-4 text-sm font-semibold text-neutral-700 border rounded-md shadow bg-neutral-200 focus:outline-none flex-1 sm:flex-none",children:"Test connection"}),Object(u.jsx)(a.j,{className:"w-full my-2 sm:my-0 sm:w-max ",children:j?"Update":"Add"})]})})]})};t.default=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!1),l=Object(c.a)(i,2),m=l[0],f=l[1],j=Object(r.useState)([]),b=Object(c.a)(j,2),x=b[0],O=b[1],h=Object(r.useState)({}),k=Object(c.a)(h,2),C=k[0],q=k[1],_=function(){var e=Object(a.G)();return{addErrorNotification:function(t,n){e.addNotification({title:Object(u.jsx)("span",{className:" text-base font-semibold text-danger-500",children:t}),content:Object(u.jsx)("span",{className:"text-sm text-neutral-500",children:n}),icon:Object(u.jsx)(a.B,{className:"w-8 h-8 text-danger-600"})},4e3)},addInfoNotification:function(t,n){e.addNotification({title:Object(u.jsx)("span",{className:"text-base font-semibold text-primary-500",children:t}),content:Object(u.jsx)("span",{className:"text-sm text-neutral-500",children:n}),icon:Object(u.jsx)(a.s,{className:"w-8 h-8 text-primary-600"})},4e3)}}}().addErrorNotification;Object(r.useEffect)((function(){N().then((function(e){return O(e)}))}),[n]);return Object(u.jsxs)("div",{className:"p-8",children:[Object(u.jsx)("h2",{className:"text-3xl font-semibold mb-12 lg:mb-16",children:"Broadcast devices"}),Object(u.jsx)("div",{className:"w-full flex justify-end mb-6 lg:mb-8",children:Object(u.jsx)(a.a,{onClick:function(){return f(!0)},children:"Add device"})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"w-full my-2 flex flex-row items-center ",children:[Object(u.jsx)("h3",{className:"w-max ml-2 mr-4 text-neutral-600 text-sm whitespace-nowrap ",children:"Available devices"}),Object(u.jsx)("div",{className:"w-full border-t border-neutral-300"})]}),Object(u.jsx)(d,{data:x,onSelect:function(e,t,n){setTimeout((function(){v(e).then((function(e){console.log(e),Object(s.isFunction)(n)&&n()})).catch((function(e){_(e.name,e.message),Object(s.isFunction)(n)&&n()}))}),500)},onEdit:function(e,t){t.stopPropagation(),q(e),f(!0)},onDelete:function(e,t){var c;t.stopPropagation(),(c=e._id,p.connect(w).remove(c).catch((function(e){var t=new Error("Couldn't remove record: ".concat(e.message));throw t.name="Database Error",t}))).then((function(){return o(!n)})).catch((function(e){return _(e.name,e.message)}))}})]}),Object(u.jsx)(E,{isOpen:m,onClose:function(){o(!n),f(!1),q({})},initialValues:C,onSave:y,onUpdate:g})]})}}}]);
//# sourceMappingURL=4.89fc67af.chunk.js.map