(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,c){},105:function(e,t){},112:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(86),s=c.n(n),i=c(87),j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))},o=(c(111),c(4));s.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(i.a,{})})),j()},51:function(e,t,c){"use strict";var a=c(88),r=c(21),n=Object(a.a)({apiKey:"AIzaSyAOAtNR_D5ajCNa6uX75NPMicwMnM0ahiQ",authDomain:"blairschedules-f673d.firebaseapp.com",projectId:"blairschedules-f673d",storageBucket:"blairschedules-f673d.appspot.com",messagingSenderId:"255213167242",appId:"1:255213167242:web:56d6af39d8275dc68c4373",measurementId:"G-1TWM9WEQGV"}),s=Object(r.e)(n);t.a=s},87:function(e,t,c){"use strict";(function(e){var a=c(8),r=c(1),n=c(6),s=c(14),i=c(0),j=(c(102),c(90)),o=c(113),b=c(91),u=c(59),d=c(52),l=c(81),O=c(114),h=c(92),f=c(51),p=c(21),x=c(80),m=c(4),v=Object(p.a)(f.a,"users"),g=Object(p.b)(f.a,"users","seXBtOXYlyIT8oJRq6Lq");t.a=function(){var t=Object(i.useState)([]),y=Object(s.a)(t,2),k=y[0],w=y[1],S=Object(i.useState)(!1),N=Object(s.a)(S,2),I=N[0],B=N[1],P=Object(i.useState)(!0),C=Object(s.a)(P,2),D=C[0],M=C[1],L=Object(i.useState)(""),z=Object(s.a)(L,2),E=z[0],T=z[1],A=Object(i.useState)({1:"Period 1",2:"Period 2",3:"Period 3",4:"Period 4",6:"Period 6",7:"Period 7",8:"Period 8",9:"Period 9"}),F=Object(s.a)(A,2),R=F[0],U=F[1],Q=Object(i.useState)(0),G=Object(s.a)(Q,2),H=G[0],J=G[1];Object(i.useEffect)((function(){Object(p.c)(g).then((function(e){return J(Object.keys(e.data()).length)}))}),[]);var W=function(){var e=Object(n.a)(Object(r.a)().mark((function e(t,c){var s,i,j,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(p.f)(v,Object(p.i)(c,"==",!0)),e.next=3,Object(p.d)(s);case 3:if(i=e.sent,j=!1,i.forEach((function(e){j=!0})),o=[],j){e.next=13;break}return["1","2","3","4","6","7","8","9"].map(function(){var e=Object(n.a)(Object(r.a)().mark((function e(c){var a,n,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.b)(f.a,"classes",t.sch[c]),e.next=3,Object(p.c)(a);case 3:if(!(n=e.sent).exists()){e.next=12;break}return(s=n.data().value).push(t.name),e.next=9,Object(p.h)(a,{value:s});case 9:o.push(s),e.next=15;break;case 12:return e.next=14,Object(p.g)(Object(p.b)(f.a,"classes",t.sch[c]),{value:[t.name]});case 14:o.push([t.name]);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=11,Object(p.h)(g,Object(a.a)({},c,!0));case 11:e.next=14;break;case 13:["1","2","3","4","6","7","8","9"].map(function(){var e=Object(n.a)(Object(r.a)().mark((function e(c){var a,n,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.b)(f.a,"classes",t.sch[c]),e.next=3,Object(p.c)(a);case 3:n=e.sent,s=n.data().value,o.push(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 14:T(t.name),U(t.titles),setTimeout((function(){return w(o)}),1e3);case 17:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),X=function(t){var a=c(104),r=c(106).encodeBase64,n=a.randomBytes(24),s=e.from("Ys3y7rkaBIfezo8UVjQQcCARZU6xWRDr","utf8"),i=e.from(t,"utf8"),j=a.secretbox(i,n,s);return"".concat(r(n),":").concat(r(j))},Y=function(){var e=Object(n.a)(Object(r.a)().mark((function e(t){var c,a,s,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=t.target[0].value,a=t.target[1].value,s=X(c),i=X(a),fetch("/getData?username="+s+"&password="+i).then((function(e){if(500===e.status)throw t.target.reset(),B(!0),"Invalid Login";return e.json()})).then(function(){var e=Object(n.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Montgomery Blair High"!==t.school){e.next=6;break}return e.next=3,W(t,c);case 3:M(!1),e.next=7;break;case 6:B(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(j.a.Brand,{children:"Montgomery Blair Scheduler "}),Object(m.jsx)(b.a,{children:Object(m.jsx)(b.a.Link,{children:0!==E&&Object(m.jsx)("div",{children:E})})})]})}),Object(m.jsxs)(u.a,{show:D,size:"lg",backdrop:"static",keyboard:!1,centered:!0,children:[Object(m.jsx)(u.a.Header,{children:Object(m.jsxs)(u.a.Title,{style:{margin:"auto"},children:["Montgomery Blair HS Scheduler Sign In ",Object(m.jsx)("br",{})," ",Object(m.jsx)("p",{className:"label",children:"by Dhruva Arun"}),"  ",Object(m.jsxs)("p",{className:"label",children:["User Count: ",H]})," "]})}),Object(m.jsx)(u.a.Body,{children:Object(m.jsxs)(d.a,{onSubmit:Y,children:[I&&Object(m.jsx)("p",{className:"error",children:"Invalid Username or Password!"}),Object(m.jsxs)(d.a.Group,{className:"mb-4",children:[Object(m.jsxs)(d.a.Label,{children:[" ",Object(m.jsx)("b",{children:"Username"})," "]}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a.Control,{type:"username",placeholder:"Enter Username",isInvalid:I}),Object(m.jsx)(l.a.Text,{id:"basic-addon1",children:"@mcpsmd.net"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(d.a.Label,{children:[" ",Object(m.jsx)("b",{children:"Password"})," "]}),Object(m.jsx)(l.a,{children:Object(m.jsx)(d.a.Control,{type:"password",placeholder:"Enter Password",isInvalid:I})})]}),Object(m.jsx)(O.a,{className:"modalSubmit",variant:"primary",type:"submit",size:"lg",style:{width:"100%"},children:"Submit"}),Object(m.jsx)(u.a.Footer,{children:Object(m.jsxs)("div",{className:"safety",children:[Object(m.jsxs)("div",{className:"segment",children:[Object(m.jsx)(x.a,{className:"check",size:90}),Object(m.jsx)("p",{children:"All Data Encrypted"})]}),Object(m.jsxs)("div",{className:"segment",children:[Object(m.jsx)(x.a,{className:"check",size:90}),Object(m.jsx)("p",{children:"No Login Information Stored"})]})]})}),Object(m.jsxs)("footer",{className:"footer",children:["Compare Your Schedule with Other Blair Students! ",Object(m.jsx)("br",{})," Contact QuickMathzs#0600 on Discord to Report Bugs "]})]})})]}),Object(m.jsx)("div",{className:"periods",children:0!==k.length&&k.map((function(e,t){return Object(m.jsxs)(h.a,{className:"pd",children:[Object(m.jsx)("h4",{children:(t+(t>3?2:1)).toString()+": "+R[(t+(t>3?2:1)).toString()]}),e.map((function(t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(h.a.Item,{children:t},e+10)})}))]},e)}))})]})}}).call(this,c(84).Buffer)}},[[112,1,2]]]);
//# sourceMappingURL=main.ada652a5.chunk.js.map