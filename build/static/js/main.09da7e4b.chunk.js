(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{25:function(e,a,t){e.exports=t.p+"static/media/ieee-wie-logo.18490708.png"},31:function(e,a,t){e.exports=t(46)},39:function(e,a,t){},41:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(24),c=t.n(o),r=t(14),m=t(9),i=t(30),s=(t(39),t(25)),d=t.n(s);var u=function(){var e=Object(n.useRef)(),a=Object(n.useCallback)(function(){if(window.innerWidth<=1024){var e=document.querySelector(".navLinks").style;e.display="flex"===e.display?"none":"flex"}},[]),t=l.a.memo(function(e){var a=e.to,t=e.icon,n=e.text,o=e.onClick;return l.a.createElement(r.c,{className:"navLink",to:a,onClick:o},l.a.createElement(m.a,{icon:t})," ",n)}),o=Object(n.useMemo)(function(){return[{to:"/about",icon:"mdi:about-circle-outline",text:"About"},{to:"/events",icon:"carbon:event",text:"Events"},{to:"/team",icon:"fluent:people-team-16-regular",text:"Team"}]},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar fixed-top"},l.a.createElement("div",null,l.a.createElement(r.b,{className:"navbar-brand",to:"/"},l.a.createElement("img",{src:d.a,alt:"IEEE",width:"60"}))),l.a.createElement("button",{className:"navbar-toggler",onClick:a,type:"button"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"navLinks"},o.map(function(e,n){return l.a.createElement(t,{key:n,to:e.to,icon:e.icon,text:e.text,onClick:a})}),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#contactModal"},l.a.createElement(m.a,{icon:"tabler:mail-code"})," Contact"))),l.a.createElement("div",{className:"modal fade",id:"contactModal",tabIndex:"-1","aria-labelledby":"contactModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("form",{ref:e,onSubmit:function(a){var t=a.target[4];a.preventDefault(),t.innerText="Sending..",i.a.sendForm("service_17r8yck","template_64wbocd",e.current,"padFwes2LRTZpuUB9").then(function(e){console.log(e),t.classList.add("btn-success"),t.innerHTML="Sent!",t.disabled=!0},function(e){console.log(e),t.classList.add("btn-danger"),t.innerText="ERROR!"})}},l.a.createElement("div",{className:"modal-header border-bottom-0"},l.a.createElement("h1",{className:"modal-title fs-5",id:"contactModalLabel"},l.a.createElement(m.a,{icon:"ion:link"})," Get in Touch"),l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"from_name",placeholder:"Name",required:!0}),l.a.createElement("label",{htmlFor:"from_name"},l.a.createElement(m.a,{icon:"gg:rename"})," Name")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"from_email",placeholder:"name@example.com",required:!0}),l.a.createElement("label",{htmlFor:"from_email"},l.a.createElement(m.a,{icon:"line-md:email-twotone"})," Email address")),l.a.createElement("div",{className:"form-floating"},l.a.createElement("textarea",{type:"text",className:"form-control",id:"message",name:"message",placeholder:"Your Message Here...",minLength:10,required:!0}),l.a.createElement("label",{htmlFor:"email"},l.a.createElement(m.a,{icon:"tabler:message-bolt"})," Message"))),l.a.createElement("div",{className:"modal-footer border-top-0"},l.a.createElement("button",{type:"submit",className:"btn btn-primary w-100"},"Send ",l.a.createElement(m.a,{icon:"cil:send"}))))))))},b=t(0),E=(t(41),t(29)),f=l.a.lazy(function(){return t.e(2).then(t.bind(null,106))}),p=l.a.lazy(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,107))}),g=l.a.lazy(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,103))}),v=l.a.lazy(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,108))}),h=l.a.lazy(function(){return t.e(6).then(t.bind(null,104))});var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement(u,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}},l.a.createElement(E.a,{color:"#7ca2e3"}))},l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/",exact:!0,Component:f}),l.a.createElement(b.a,{path:"/about",exact:!0,Component:p}),l.a.createElement(b.a,{path:"/events",exact:!0,Component:g}),l.a.createElement(b.a,{path:"/team",exact:!0,Component:v}),l.a.createElement(b.a,{path:"*",Component:h})))))},N=function(e){e&&e instanceof Function&&t.e(7).then(t.bind(null,105)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(y,null)),N()}},[[31,9,8]]]);
//# sourceMappingURL=main.09da7e4b.chunk.js.map