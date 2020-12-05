(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={ContactList__item:"ContactItem_ContactList__item__1Lrm-",ContactList__text:"ContactItem_ContactList__text__ab09H"}},11:function(t,e,n){t.exports={label:"Filter_label__1cVjD",input:"Filter_input__12P7u"}},14:function(t,e,n){t.exports={Container:"Container_Container__DEib3"}},2:function(t,e,n){t.exports={title:"ContactForm_title__24nId",ContactForm:"ContactForm_ContactForm__1WOBp",input:"ContactForm_input__39myY",button:"ContactForm_button__2VMpK"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),o=n(12),r=n.n(o),s=n(16),l=n(4),u=n(5),m=n(7),b=n(6),h=n(13),j=n.n(h),d=n(14),C=n.n(d),f=function(t){var e=t.children;return Object(a.jsx)("div",{className:C.a.Container,children:e})},p=n(9),_=n.n(p),x=n(10),O=n.n(x),v=function(t){var e=t.contact,n=e.id,c=e.name,i=e.number,o=t.onDeleteContact;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("li",{className:O.a.ContactList__item,children:[Object(a.jsxs)("p",{className:O.a.ContactList__text,children:[Object(a.jsx)("span",{children:c})," : ",Object(a.jsx)("span",{children:i})]}),Object(a.jsx)("button",{type:"button",onClick:function(){return o(n)},children:"Delete"})]})})},g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:_.a.title,children:"Contacts"}),Object(a.jsx)("ul",{className:_.a.ContactList,children:e.map((function(t){return Object(a.jsx)(v,{contact:t,onDeleteContact:n},t.id)}))})]})},F=n(15),y=n(2),L=n.n(y),N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(F.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.validateForm()&&(t.props.onSubmit(t.state),t.setState({name:"",number:""}))},t.validateForm=function(){var e=t.props.onCheckUnique,n=t.state,a=n.name,c=n.number;if(a&&c)return e(a);alert("Some fields are empty! Please write something")},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:L.a.title,children:"Phonebook"}),Object(a.jsxs)("form",{className:L.a.ContactForm,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{autoComplete:"off",className:L.a.input,name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{autoComplete:"off",className:L.a.input,name:"number",type:"tel",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:L.a.button,children:"Add contact"})]})]})}}]),n}(c.Component),S=n(11),k=n.n(S),w=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:k.a.label,children:["Find contacts by name:",Object(a.jsx)("input",{className:k.a.input,type:"text",value:e,onChange:n})]})},D=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:j.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.handleCheckUnique=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist!"),!n},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)(f,{children:[Object(a.jsx)(N,{onSubmit:this.addContact,onCheckUnique:this.handleCheckUnique}),Object(a.jsx)(w,{value:t,onChange:this.changeFilter}),Object(a.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={title:"ContactList_title__3ZqAf",ContactList:"ContactList_ContactList__1gtDl"}}},[[30,1,2]]]);
//# sourceMappingURL=main.67574fc1.chunk.js.map