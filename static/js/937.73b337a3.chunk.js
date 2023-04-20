(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{5937:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B}});var r=t(2791),i=t(9434),o=t(3634),u="NOT_FOUND";var a=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?a:r,o=t.maxSize,c=void 0===o?1:o,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),p=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return u}return{get:r,put:function(e,i){r(e)===u&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function f(){var e=p.get(arguments);if(e===u){if(e=n.apply(null,arguments),l){var t=p.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}p.put(arguments,e)}return e}return f.clearCache=function(){return p.clear()},f}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function s(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=a,p=s.memoizeOptions,f=void 0===p?t:p,d=Array.isArray(f)?f:[f],m=l(r),h=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(d)),x=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(x,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),x};return i}var p,f,d,m,h,x=s(c),y=function(n){return n.contacts.items},v=function(n){return n.filter},g=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},j=x([y,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),k=t(5705),w=t(168),C=t(6444),Z=(0,C.ZP)(k.gN)(p||(p=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  margin-bottom: 15px;\n"]))),O=C.ZP.button(f||(f=(0,w.Z)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px solid lightgreen;\n  background-color: white;\n"]))),P=t(184),_=function(){var n=(0,i.I0)(),e=(0,i.v9)(y);return(0,P.jsx)(k.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){n((0,o.uK)(t)),function(n,e){return n.find((function(n){return n.name===e.name}))}(e,t)&&alert("".concat(t.name," is already in your contacts.")),r.resetForm()},children:(0,P.jsxs)(k.l0,{children:[(0,P.jsxs)("label",{children:["Name",(0,P.jsx)(Z,{type:"text",name:"name"}),(0,P.jsx)(k.Bc,{name:"name"})]}),(0,P.jsxs)("label",{children:["Number",(0,P.jsx)(Z,{type:"tel",name:"number"}),(0,P.jsx)(k.Bc,{name:"number"})]}),(0,P.jsx)(O,{type:"submit",children:"Add contact"})]})})},A=C.ZP.ul(d||(d=(0,w.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),E=C.ZP.li(m||(m=(0,w.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),T=t(2007),F=t.n(T),R=C.ZP.button(h||(h=(0,w.Z)(["\n  padding: 5px 10px;\n  height: 35px;\n  border-radius: 5px;\n  border: 2px solid rgb(238, 119, 119);\n  background-color: white;\n"]))),I=function(n){var e=n.contact,t=e.id,r=e.name,u=e.number,a=(0,i.I0)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("p",{children:r}),(0,P.jsx)("p",{children:u}),(0,P.jsx)(R,{type:"button",onClick:function(){return a((0,o.GK)(t))},children:"Delete"})]})};I.PropType={name:F().string.isRequired,number:F().string.isRequired};var z,S=function(){var n=(0,i.v9)(j);return(0,P.jsx)(A,{children:n.map((function(n){return(0,P.jsx)(E,{children:(0,P.jsx)(I,{contact:n})},n.id)}))})},q=C.ZP.input(z||(z=(0,w.Z)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  margin-bottom: 15px;\n  margin-left: 10px;\n"]))),N=t(4808),L=function(){var n=(0,i.v9)(v),e=(0,i.I0)();return(0,P.jsxs)("label",{children:["Find contact by name",(0,P.jsx)(q,{type:"text",name:"filter",value:n,onChange:function(n){var t=n.target.value;e((0,N.$)(t))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},B=function(){var n=(0,i.I0)(),e=(0,i.v9)(b),t=(0,i.v9)(g);return(0,r.useEffect)((function(){n((0,o.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h1",{children:"Phonebook"}),(0,P.jsx)(_,{}),(0,P.jsx)("title",{children:"Your contacts"}),(0,P.jsx)("h2",{children:"Your contacts"}),t&&!e&&(0,P.jsx)("p",{children:"Loading contacts..."}),(0,P.jsx)(L,{}),(0,P.jsx)(S,{})]})}},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function o(){}o.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,o,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=937.73b337a3.chunk.js.map