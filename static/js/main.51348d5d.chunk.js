(this.webpackJsonpresturent=this.webpackJsonpresturent||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(20),r=n.n(s),i=(n(44),n(45),n(9)),o=n(10),l=n(2),j=n(3),d=n(6),b=n(5),h=n(0),u=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Home"})})}}]),n}(c.Component),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={zipcode:[],serviceName:[]},e}return Object(j.a)(n,[{key:"search",value:function(){var e=this;fetch("https://api.clearpricing.health/landingpageData").then((function(t){t.json().then((function(t){console.warn("resp",t),e.setState({zipcode:t.ZipCode}),e.setState({serviceName:t.ServiceName})}))}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"SEARCH"}),Object(h.jsx)("input",{type:"text",onChange:function(t){return e.search(t.target.value)}}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{class:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"ZipCode"}),Object(h.jsx)("th",{scope:"col",children:"city"}),Object(h.jsx)("th",{scope:"col",children:"serviceName"})]})}),Object(h.jsx)("tbody",{children:this.state.zipcode.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[" ",e.Zipcode]}),Object(h.jsxs)("td",{children:[" ",e.City]})]})}))})]}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{class:"thead-dark",children:Object(h.jsx)("tr",{children:Object(h.jsx)("th",{scope:"col",children:"ServiceName"})})}),Object(h.jsx)("tbody",{children:this.state.serviceName.map((function(e){return Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:e})})}))})]})]})}}]),n}(c.Component),p=n(14);function x(){var e=Object(c.useState)({color:"black",backgroundColor:"white",border:"1px solid white"}),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("Enable Dark mood"),r=Object(p.a)(s,2),i=r[0],o=r[1];return Object(h.jsxs)("div",{class:"container",style:n,children:[Object(h.jsx)("h1",{children:"About Us"}),Object(h.jsxs)("div",{class:"accordion",id:"accordionExample",children:[Object(h.jsxs)("div",{class:"accordion-item",style:n,children:[Object(h.jsx)("h2",{class:"accordion-header",id:"headingOne",children:Object(h.jsx)("button",{class:"accordion-button ",style:n,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(h.jsx)("div",{id:"collapseOne",class:"accordion-collapse collapse ","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{class:"accordion-body",style:n,children:[Object(h.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{class:"accordion-item",style:n,children:[Object(h.jsx)("h2",{class:"accordion-header",id:"headingTwo",children:Object(h.jsx)("button",{class:"accordion-button collapsed",style:n,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(h.jsx)("div",{id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{class:"accordion-body",style:n,children:[Object(h.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{class:"accordion-item",style:n,children:[Object(h.jsx)("h2",{class:"accordion-header",id:"headingThree",children:Object(h.jsx)("button",{class:"accordion-button collapsed",style:n,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(h.jsx)("div",{id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{class:"accordion-body",style:n,children:[Object(h.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(h.jsx)("button",{type:"checkbox",onClick:function(){"black"==n.color?(a({color:"white",backgroundColor:"black",border:"1px solid white"}),o("Enable Light mood")):(a({color:"black",backgroundColor:"white",border:"1px solid white"}),o("Enable Dark mood"))},class:"btn btn-primary my-2",children:i})]})}var m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Services"})})}}]),n}(c.Component),v=function(){var e=Object(c.useState)(1),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){console.warn(n)}),[]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["USE EFFECT HOOKS IN REACT  JS ",n]}),Object(h.jsx)("button",{onClick:function(){a(n+1)},children:" INCREMENT"})]})},f=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={user:null,password:null},e}return Object(j.a)(n,[{key:"submit",value:function(){console.warn(this.state)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Form Handling"}),Object(h.jsx)("input",{type:"text",name:"user",onChange:function(t){e.setState({user:t.target.value})}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"password",onChange:function(t){e.setState({password:t.target.value})}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return e.submit()},children:"Submit"})]})}}]),n}(c.Component),y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={name:"",password:"",nameError:"",passwordError:""},e}return Object(j.a)(n,[{key:"validation",value:function(){if(!this.state.name.includes("@")&&this.state.password.length<5)this.setState({nameError:"invalid name",passwordError:"password should be 5 digits"});else if(this.state.name.includes("@")){if(!(this.state.password.length<5))return!0;this.setState({passwordError:"password should be 8 digits"})}else this.setState({nameError:"invalid name"})}},{key:"submit",value:function(){this.setState({nameError:"",passwordError:""}),this.validation()&&alert("form has been submited")}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"FORM VALIDATION"}),Object(h.jsx)("input",{type:"text",name:"name",onChange:function(t){e.setState({name:t.target.value})}}),Object(h.jsx)("p",{style:{color:"red",font:"12px"},children:this.state.nameError}),Object(h.jsx)("input",{type:"password",name:"password",onChange:function(t){e.setState({password:t.target.value})}}),Object(h.jsx)("p",{style:{color:"red",font:"12px"},children:this.state.passwordError}),Object(h.jsx)("button",{onClick:function(){return e.submit()},children:"Submit"})]})}}]),n}(c.Component),g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={list:[{name:"safdar",email:"saf@gmail.com",phone:"123"},{name:"osama",email:"osama@gmail.com",phone:"122"},{name:"shakeeb",email:"sha@gmail.com",phone:"133"}]},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"MAP LISTING"}),this.state.list.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:["Name: ",e.name," Email: ",e.email,"  Phone: ",e.phone]}),e.email]})}))]})}}]),n}(c.Component),w=(n(47),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"header",children:"STYLE IN REACT GLOBALY"}),Object(h.jsx)("h1",{style:{color:"red"},children:"STYLE IN REACT INLINE"})]})}}]),n}(c.Component)),C=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={users:null},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://reqres.in/api/users?page=2").then((function(t){t.json().then((function(t){e.setState({users:t.data})}))}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"FETCH API DATA"}),this.state.users?this.state.users.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[t,"--- ",e.first_name,e.last_name,"----",e.email]})})})):null]})}}]),n}(c.Component),k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return r.a.createPortal(Object(h.jsx)("h1",{children:"portal components"}),document.getElementById("other-root"))}}]),n}(c.Component),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).userRef=a.a.createRef(),e}return Object(j.a)(n,[{key:"editval",value:function(){this.userRef.current.value="10000"}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Ref In React "}),Object(h.jsx)("input",{ref:this.userRef,type:"text",name:"user"}),Object(h.jsx)("button",{onClick:function(){return e.editval()},children:"Click Me"})]})}}]),n}(c.Component),E=n(81),T=n(80),N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={show:!1},e}return Object(j.a)(n,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(E.a,{onClick:function(){return e.handleModal()},children:" click me"}),Object(h.jsxs)(T.a,{show:this.state.show,onHide:function(){return e.handleModal()},children:[Object(h.jsx)(T.a.Header,{closeButton:!0,children:"Modal Heading"}),Object(h.jsx)(T.a.Body,{children:"Hello EveryOne"}),Object(h.jsxs)(T.a.Footer,{children:[Object(h.jsx)(E.a,{onClick:function(){return e.handleModal()},children:"Close"}),Object(h.jsx)(E.a,{onClick:function(){return e.handleModal()},children:"Save"})]})]})]})}}]),n}(c.Component),F=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"hello"})})}}]),n}(c.Component),I=(n(74),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={data:10},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return console.warn(this.state),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["Pure Component ",this.state.data]}),Object(h.jsx)("button",{onClick:function(){return e.setState({data:20})},children:"update"})]})}}]),n}(c.PureComponent)),A=n(23),L=n.n(A),R=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).login=function(){var t=new FormData;t.append("username",e.state.username),t.append("password",e.state.password),L()({method:"POST",url:"https://clearcosthealth.pythonanywhere.com/superadminlogin",data:t}).then((function(e){var t=e.data;"true"==t.status?(localStorage.setItem("token",t.token),localStorage.setItem("id",t.id),console.log(t),alert("login Sucessfully")):"true"!==t.status&&alert("user name or password incorrect!")}),(function(e){alert("catch")}))},e.state={username:null,password:null},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"JWT TOKEN"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",onChange:function(t){e.setState({username:t.target.value})}})," ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",onChange:function(t){e.setState({password:t.target.value})}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){e.login()},children:"Login"})]})]})}}]),n}(c.Component),M=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={name:"",password:""},e}return Object(j.a)(n,[{key:"submit",value:function(){console.warn(this.state)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"control components"}),Object(h.jsx)("input",{type:"text",placeholder:"enter name",onChange:function(t){e.setState({name:t.target.value})}}),"  ",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",placeholder:"enter password",onChange:function(t){e.setState({password:t.target.value})}}),"  ",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){e.submit()},children:"Submit"})]})}}]),n}(c.Component),U=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),n}(c.Component);n(69);function B(e){var t=Object(c.useState)(""),n=Object(p.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),i=Object(p.a)(r,2);i[0],i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("h1",{children:" Analyze the paragraph"}),Object(h.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[e.alert.type,"This is alert",e.alert.message,Object(h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),Object(h.jsx)("textarea",{className:"form-control",value:a,id:"utilities",onChange:function(e){s(e.target.value)},rows:"8",children:" "}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var e=a.toUpperCase();s(e),document.title="Uper Case"},children:"Capital letter"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var e=a.toLowerCase();s(e),document.title="Lower Case"},children:"Small letter"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){s("")},children:"Clear"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var e=document.getElementById("utilities");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){var e=a.split(/[ ]+/);s(e.join(" "))},children:"Remove Extra Spaces"})]})}),Object(h.jsxs)("div",{className:"container my-4",children:[Object(h.jsx)("h2",{children:"Summary of your paragraph "}),Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("b",{children:a.split(" ").length})," words and ",Object(h.jsxs)("b",{children:[" ",a.length]})," Characters in your paragraph "]}),Object(h.jsxs)("p",{children:[.008*a.split(" ").length," minutes takes to read the paragraph"]}),Object(h.jsx)("h3",{children:"Preview  "}),Object(h.jsx)("p",{children:a})]})]})}var H=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"upload",value:function(e){console.warn(e.target.files)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"File Upload"}),Object(h.jsx)("input",{type:"file",onChange:function(t){return e.upload(t)},name:"img"})]})}}]),n}(c.Component);function P(){var e=a.a.useState(null),t=Object(p.a)(e,2),n=t[0],c=t[1];return a.a.useEffect((function(){L.a.get("https://jsonplaceholder.typicode.com/posts/1").then((function(e){c(e.data),console.log(e)}))}),[]),n?Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:n.title}),Object(h.jsx)("p",{children:n.body})]}):null}function D(e){return e.alert&&Object(h.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[e.alert,Object(h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}var J=function(e){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.a,{children:[Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(i.b,{to:"/",children:"Home"})," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(i.b,{to:"/About",children:"About"})," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(i.b,{to:"/Contactus",children:"Contactus"})," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(i.b,{to:"/Services",children:"Services"})," "]}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Form",children:" Form "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Formsubmit",children:" Formsubmit "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Formvalidation",children:" Formvalidation "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Maplisting",children:" Maplisting "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Styleinreact",children:" Styleinreact "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/CallApi",children:" CallApi "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Reactportal",children:" Reactportal "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Ref",children:" Ref "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Bootstrap",children:" Bootstrap "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/ErrorBoundary",children:" ErrorBoundary "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Purecomponenet",children:" Purecomponenet "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Jwttoken",children:" JwtToken "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Uncontrolcomponent",children:" Uncontrolcomponent "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Uploadfile",children:"Uploadfile"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Utilities",children:"Utilities"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/FileUpload",children:"FileUpload"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/LoginForm",children:"LoginForm"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/Alert",children:"Alert"})})]}),Object(h.jsx)(o.a,{path:"/",exact:!0,children:Object(h.jsx)(u,{})}),Object(h.jsx)(o.a,{path:"/Contactus",children:Object(h.jsx)(x,{})}),Object(h.jsx)(o.a,{path:"/Services",children:Object(h.jsx)(m,{})}),Object(h.jsx)(o.a,{path:"/About",children:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{path:"/Form",children:Object(h.jsx)(v,{})}),Object(h.jsx)(o.a,{path:"/Formsubmit",children:Object(h.jsx)(f,{})}),Object(h.jsx)(o.a,{path:"/Formvalidation",children:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{path:"/Maplisting",children:Object(h.jsx)(g,{})}),Object(h.jsx)(o.a,{path:"/Styleinreact",children:Object(h.jsx)(w,{})}),Object(h.jsx)(o.a,{path:"/CallApi",children:Object(h.jsx)(C,{})}),Object(h.jsx)(o.a,{path:"/Reactportal",children:Object(h.jsx)(k,{})}),Object(h.jsx)(o.a,{path:"/Ref",children:Object(h.jsx)(S,{})}),Object(h.jsx)(o.a,{path:"/Bootstrap",children:Object(h.jsx)(N,{})}),Object(h.jsx)(o.a,{path:"/ErrorBoundary",children:Object(h.jsx)(F,{})}),Object(h.jsx)(o.a,{path:"/Purecomponenet",children:Object(h.jsx)(I,{})}),Object(h.jsx)(o.a,{path:"/Jwttoken",children:Object(h.jsx)(R,{})}),Object(h.jsx)(o.a,{path:"/Uncontrolcomponent",children:Object(h.jsx)(M,{})}),Object(h.jsx)(o.a,{path:"/Uploadfile",children:Object(h.jsx)(U,{})}),Object(h.jsx)(o.a,{path:"/Utilities",children:Object(h.jsx)("strong",{children:Object(h.jsx)(B,{alert:alert})})}),Object(h.jsx)(o.a,{path:"/FileUpload",children:Object(h.jsx)(H,{})}),Object(h.jsx)(o.a,{path:"/LoginForm",children:Object(h.jsx)(P,{})}),Object(h.jsx)(o.a,{path:"/Alert",children:Object(h.jsx)(D,{})})]})})},Y=(n(73),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))});r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),Y()}},[[75,1,2]]]);
//# sourceMappingURL=main.51348d5d.chunk.js.map