(this["webpackJsonpContact-Cards"]=this["webpackJsonpContact-Cards"]||[]).push([[0],{16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(10),r=n.n(i),s=(n(16),n(6)),o=(n(9),n(17),n(21)),j=n(22),l=n(0),u=function(t){var e=Object(c.useState)(!1),n=Object(s.a)(e,2),a=n[0],i=n[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(o.a,{style:{width:"300px",margin:"40px",padding:"40px",boxShadow:"0 0 10px 0 purple"},children:[Object(l.jsx)(o.a.Img,{variant:"top",src:t.image}),Object(l.jsxs)(o.a.Body,{children:[Object(l.jsx)(o.a.Title,{children:"Contact Name"}),Object(l.jsxs)(o.a.Text,{children:[Object(l.jsxs)("p",{children:["Name:  ",t.name]}),Object(l.jsxs)("p",{children:["Email:",t.email," "]}),Object(l.jsxs)("p",{children:["Nationality:",t.nationality," "]}),a&&Object(l.jsxs)("p",{children:["Age: ",t.age]})]}),Object(l.jsx)(j.a,{variant:"primary",onClick:function(){return i(!a)},children:"Show Age"})]})]})})},d=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=5").then((function(t){return t.json()})).then((function(t){console.log(t),a(t.results)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Contact List"}),n.map((function(t){return Object(l.jsx)(u,{image:t.picture.large,name:t.name.first+""+t.name.last,email:t.email,nationality:t.nat,age:t.dob.age})}))]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()},9:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.3d29cbef.chunk.js.map