"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[742],{5742:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var t,i,a,o,c,s=r(2791),l=r(9434),u=r(3634),d=r(6916),p=function(n){return n.contacts.items},x=function(n){return n.filter},m=function(n){return n.contacts.isLoading},f=function(n){return n.contacts.error},h=(0,d.P1)([p,x],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),b=r(5705),g=r(168),j=r(6444),y=(0,j.ZP)(b.gN)(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  margin-bottom: 15px;\n"]))),v=j.ZP.button(i||(i=(0,g.Z)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px solid lightgreen;\n  background-color: lightpink;\n"]))),Z=r(184),k=function(){var n=(0,l.I0)(),e=(0,l.v9)(p);return(0,Z.jsx)(b.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){n((0,u.uK)(r)),function(n,e){return n.find((function(n){return n.name===e.name}))}(e,r)&&alert("".concat(r.name," is already in your contacts.")),t.resetForm()},children:(0,Z.jsxs)(b.l0,{children:[(0,Z.jsxs)("label",{children:["Name",(0,Z.jsx)(y,{type:"text",name:"name"}),(0,Z.jsx)(b.Bc,{name:"name"})]}),(0,Z.jsxs)("label",{children:["Number",(0,Z.jsx)(y,{type:"tel",name:"number"}),(0,Z.jsx)(b.Bc,{name:"number"})]}),(0,Z.jsx)(v,{type:"submit",children:"Add contact"})]})})},P=j.ZP.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),C=j.ZP.li(o||(o=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),w=r(2007),A=r.n(w),F=j.ZP.button(c||(c=(0,g.Z)(["\n  padding: 5px 10px;\n  height: 35px;\n  border-radius: 5px;\n  border: 2px solid rgb(238, 119, 119);\n  background-color: white;\n"]))),z=function(n){var e=n.contact,r=e.id,t=e.name,i=e.phone,a=(0,l.I0)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("p",{children:t}),(0,Z.jsx)("p",{children:i}),(0,Z.jsx)(F,{type:"button",onClick:function(){return a((0,u.GK)(r))},children:"Delete"})]})};z.PropType={name:A().string.isRequired,number:A().string.isRequired};var I,L=function(){var n=(0,l.v9)(h);return(0,Z.jsx)(P,{children:n.map((function(n){return(0,Z.jsx)(C,{children:(0,Z.jsx)(z,{contact:n})},n.id)}))})},N=j.ZP.input(I||(I=(0,g.Z)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  margin-bottom: 15px;\n  margin-left: 10px;\n"]))),_=r(4808),q=function(){var n=(0,l.v9)(x),e=(0,l.I0)();return(0,Z.jsxs)("label",{children:["Find contact by name",(0,Z.jsx)(N,{type:"text",name:"filter",value:n,onChange:function(n){var r=n.target.value;e((0,_.$)(r))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},B=function(){var n=(0,l.I0)(),e=(0,l.v9)(f),r=(0,l.v9)(m);return(0,s.useEffect)((function(){n((0,u.yF)())}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h1",{children:"Phonebook"}),(0,Z.jsx)(k,{}),(0,Z.jsx)("title",{children:"Your contacts"}),r&&!e&&(0,Z.jsx)("p",{children:"Loading contacts..."}),(0,Z.jsx)(q,{}),(0,Z.jsx)(L,{})]})}}}]);
//# sourceMappingURL=742.3dfacc6d.chunk.js.map