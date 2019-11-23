(this.webpackJsonpbookbook=this.webpackJsonpbookbook||[]).push([[0],{248:function(e,t,a){e.exports=a(492)},253:function(e,t,a){},492:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(242),c=a.n(l),o=(a(253),a(10)),i=a(11),s=a(13),m=a(12),u=a(14),h=a(6),d=a(35),p=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(h.c,{to:"/create"},"Add Book")))},E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(h.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(h.c,{to:"/signin"},"Login")))},g=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(h.c,{to:"/catalog"},"Catalog")))},f=function(){return r.a.createElement("nav",{className:"nav-wrapper grey darken-4"},r.a.createElement("div",{className:"container"},r.a.createElement(h.b,{to:"/",className:"brand-logo"},"BookBook NYC"),r.a.createElement(g,null),r.a.createElement(p,null),r.a.createElement(E,null)))},b=a(247),v=function(e){var t=e.book;return t.title.length>40&&(t.title=t.title.substring(0,40)+"\u2026"),r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("div",{className:"bookDisplay"},r.a.createElement("img",{src:t.cover,class:"cover"}),r.a.createElement("span",{className:"price"},"$",Number(t.price).toFixed(2))),r.a.createElement("p",{class:"bookTitle",style:{minHeight:"3em"}},t.title),r.a.createElement("p",{class:"bookDesc"},"By: ",t.author)))},k=a(244),O=a.n(k),N=function(e,t){return e.title<t.title?-1:e.title>t.title?1:0},y=function(e,t){return e.title<t.title?1:e.title>t.title?-1:0},w=function(e,t){return e.author<t.author?-1:e.author>t.author?1:0},C=function(e,t){return e.author<t.author?1:e.author>t.author?-1:0},j=function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},x=function(e,t){return e.price<t.price?1:e.price>t.price?-1:0},D=function(e,t){return e.rating<t.rating?-1:e.rating>t.rating?1:0},A=function(e,t){return e.rating<t.rating?1:e.rating>t.rating?-1:0},S=function(e,t){var a=new Date(e.releaseDate),n=new Date(t.releaseDate);return a<n?-1:a>n?1:0},F=function(e,t){var a=new Date(e.releaseDate),n=new Date(t.releaseDate);return a<n?1:a>n?-1:0},B=function(e){return"Non-Fiction"==e.genre},R=function(e){return"Science Fiction"==e.genre},L=function(e){return"Fantasy"==e.genre},P=function(e){return e.rating>=1},z=function(e){return e.rating>=2},T=function(e){return e.rating>=3},_=function(e){return e.rating>=4},G=function(e){return e.rating>=5},M=function(e){return e.isTopSeller},I=function(e){return e.author="J. K. Rowling"},U=function(e){var t=e.books,a=e.sort,l=e.filter,c=Object(n.useState)(0),o=Object(b.a)(c,2),i=o[0],s=o[1],m=0;return t&&(t.sort(function(e){switch(e){case"titleAsc":return N;case"titleDesc":return y;case"authorAsc":return w;case"authorDesc":return C;case"priceAsc":return j;case"priceDesc":return x;case"ratingAsc":return D;case"ratingDesc":return A;case"dateAsc":return S;case"dateDesc":return F;default:return function(){return 0}}}(a)),t=t.filter(function(e){switch(e){case"genreNonfi":return B;case"genreScifi":return R;case"genreFant":return L;case"rating1":return P;case"rating2":return z;case"rating3":return T;case"rating4":return _;case"rating5":return G;case"top":return M;case"author":return I;default:return function(){return!0}}}(l)),m=Math.ceil(t.length/10),t=t.slice(10*i,10*(i+1))),r.a.createElement("div",{className:"project-list section row s12"},t&&t.map((function(e){return r.a.createElement(h.b,{className:"col s3",to:"/book/"+e.id},r.a.createElement(v,{book:e,key:e.id}))})),r.a.createElement("div",{className:"col s12"},t&&r.a.createElement(O.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:m,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){s(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))},J=a(27),H=a(29),Z=a(17),X=a(91),Y=a.n(X),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={sort:"none",filter:"none"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Y.a.FormSelect.init(document.querySelectorAll(".dashboard select"))}},{key:"render",value:function(){var e=this,t=this.props.Books;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row s12"},r.a.createElement("div",{class:"input-field col s3"},r.a.createElement("select",{onChange:function(t){return e.setState({sort:t.target.value})},value:this.state.sort},r.a.createElement("option",{value:"none",disabled:!0,selected:!0},"Sorting..."),r.a.createElement("option",{value:"titleAsc"},"Title A-Z"),r.a.createElement("option",{value:"titleDesc"},"Title Z-A"),r.a.createElement("option",{value:"authorAsc"},"Author A-Z"),r.a.createElement("option",{value:"auhtorDesc"},"Author Z-A"),r.a.createElement("option",{value:"priceAsc"},"Price (Low)"),r.a.createElement("option",{value:"priceDesc"},"Price( High)"),r.a.createElement("option",{value:"ratingAsc"},"Rating (Low)"),r.a.createElement("option",{value:"ratingDesc"},"Rating (High)"),r.a.createElement("option",{value:"dateDesc"},"Date (Most Recent)"),r.a.createElement("option",{value:"dateAsc"},"Date (Oldest)"))),r.a.createElement("div",{class:"input-field col s3"},r.a.createElement("select",{onChange:function(t){return e.setState({filter:t.target.value})},value:this.state.filter},r.a.createElement("option",{value:"none",disabled:!0,selected:!0},"Filter By..."),r.a.createElement("optgroup",{label:"Genre"},r.a.createElement("option",{value:"genreNonfi"},"Non-Fiction"),r.a.createElement("option",{value:"genreScifi"},"Science Fiction"),r.a.createElement("option",{value:"genreFant"},"Fantasy")),r.a.createElement("optgroup",{label:"Rating"},r.a.createElement("option",{value:"rating1"},"\u2605"),r.a.createElement("option",{value:"rating2"},"\u2605\u2605"),r.a.createElement("option",{value:"rating3"},"\u2605\u2605\u2605"),r.a.createElement("option",{value:"rating4"},"\u2605\u2605\u2605\u2605"),r.a.createElement("option",{value:"rating5"},"\u2605\u2605\u2605\u2605\u2605")),r.a.createElement("optgroup",{label:"Top Sellers"},r.a.createElement("option",{value:"top"},"All Top Selling Books"))))),r.a.createElement(U,{books:t,sort:this.state.sort,filter:this.state.filter}))}}]),t}(n.Component),$=Object(Z.d)(Object(J.b)((function(e){return{Books:e.firestore.ordered.Books}})),Object(H.firestoreConnect)([{collection:"Books"}]))(W),q=a(146),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).zoom=a.props.zoom.clone({background:a.props.color}),a.attachZoom=function(e){a.zoom.attach(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{src:this.props.src,alt:this.props.alt,ref:this.attachZoom,className:"cover"})}}]),t}(n.Component),V=(a(410),Object(Z.d)(Object(J.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.Books;return{book:n?n[a]:null}})),Object(H.firestoreConnect)([{collection:"Books"}]))((function(e){var t=e.book,a=Object(q.a)({background:"#000",margin:48});return t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"image"},r.a.createElement(K,{src:t.cover,alt:t.title,zoom:a,color:"#000000"})),r.a.createElement("p",{class:"bookTitle"},t.title),r.a.createElement("p",null),r.a.createElement("p",null,t.description),r.a.createElement("div",{class:"bookDesc"},r.a.createElement(h.b,{to:"/author/"+t.author},r.a.createElement("p",{className:"black-text",style:{textDecoration:"underline"}},"By: ",t.author)),r.a.createElement("p",null,"Bio: ",t.bio),r.a.createElement("p",null,"Genre: ",t.genre),r.a.createElement("p",null,"Publisher: ",t.publisher),r.a.createElement("p",null,"Release Date: ",t.releaseDate),r.a.createElement("p",null,"Price: $",Number(t.price).toFixed(2)),r.a.createElement("p",null,"Rating: ",t.rating))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading book..."))}))),Q="",ee=function(e){return e.author==Q},te=function(e){var t=e.books,a=e.filter;return Q=a,t&&(t=t.filter(ee)),r.a.createElement("div",{className:"project-list section"},r.a.createElement("h5",null,"Books by: ",Q),r.a.createElement("h6",null,Q.bio),t&&t.map((function(e){return r.a.createElement(h.b,{className:"col s3",to:"/book/"+e.id},r.a.createElement(v,{book:e,key:e.id}))})))},ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={filter:"none"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Y.a.FormSelect.init(document.querySelectorAll(".dashboard select"))}},{key:"render",value:function(){var e=this.props.Books;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row s12"},r.a.createElement(te,{books:e,filter:this.props.match.params.filter})))}}]),t}(n.Component),ne=Object(Z.d)(Object(J.b)((function(e){return{Books:e.firestore.ordered.Books}})),Object(H.firestoreConnect)([{collection:"Books"}]))(ae),re=a(34),le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={identification:"",password:""},a.handleChange=function(e){a.setState(Object(re.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"identification"},"ID"),r.a.createElement("input",{type:"text",id:"identification",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn cyan z-depth-0"},"Login"))),r.a.createElement("div",{class:"white-text"},r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO")))}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={identification:"",password:"",firstName:"",lastName:"",email:"",homeAddress:"",nickname:""},a.handleChange=function(e){a.setState(Object(re.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"identification"},"ID"),r.a.createElement("input",{type:"text",id:"identification",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Last Name"),r.a.createElement("input",{type:"text",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"homeAddress"},"Home Address"),r.a.createElement("input",{type:"text",id:"homeAddress",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"nickname"},"Nickname"),r.a.createElement("input",{type:"text",id:"nickname",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn cyan z-depth-0"},"Sign Up"))),r.a.createElement("div",{class:"white-text"},r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO"),r.a.createElement("h5",null,"Ghetto way to make footer stick LMAO")))}}]),t}(n.Component);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ie=function(e){return function(t,a,n){(0,n.getFirestore)().collection("Books").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach((function(t){Object(re.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)).then((function(){t({type:"CREATE_PROJECT_SUCCESS"})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR"},e)}))}},se=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",author:"",bio:"",description:"",genre:"",publisher:"",releaseDate:"",rating:""},a.handleChange=function(e){a.setState(Object(re.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Add a new book"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"Book Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"author",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"author"},"Author")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"bio",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"bio"},"Bio")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"description",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"description"},"Description")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"genre",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"genre"},"Genre")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"publisher",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"publisher"},"Publisher")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"releaseDate",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"releaseDate"},"Release Date")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"price",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"price"},"Price")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"cover",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"cover"},"Cover")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"rating",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"rating"},"Rating")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn cyan"},"Create"))))}}]),t}(n.Component),me=Object(J.b)(null,(function(e){return{createProject:function(t){return e(ie(t))}}}))(se),ue=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"parent"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h2",null,"Welcome to BookBook NYC!")),r.a.createElement(h.c,{to:"/catalog"},r.a.createElement("div",{className:"col s3 offset-s3 center-align card-panel hoverable"},r.a.createElement("div",{className:"card-panel cyan z-depth-0 white-text"},r.a.createElement("h5",null,"Catalog")))),r.a.createElement(h.c,{to:"/signup"},r.a.createElement("div",{className:"col s3 center-align card-panel hoverable"},r.a.createElement("div",{className:"card-panel cyan z-depth-0 white-text"},r.a.createElement("h5",null,"Sign Up"))))))}}]),t}(n.Component),he=function(){return r.a.createElement("footer",{class:"page-footer black"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col l6 s12"},r.a.createElement("h5",{class:"white-text"},"BookBook NYC"),r.a.createElement("p",{class:"grey-text text-lighten-4"},"BookBook catalogs your favorites books from new releases, to timeless classics."),r.a.createElement("a",{href:"https://www.twitter.com/bookbooknyc",color:"white"},r.a.createElement("img",{src:"twitterlogo.png",alt:"Twitter Logo"})),r.a.createElement("a",{href:"https://www.instagram.com/bookbooknyc"},r.a.createElement("img",{src:"instagramlogo.png",alt:"Instagram Logo"}))),r.a.createElement("div",{class:"col l4 offset-l2 s12"},r.a.createElement("h5",{class:"white-text"},"Developed and Designed by:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{class:"grey-text text-lighten-3",href:"#!"},"Elizabeth Alume")),r.a.createElement("li",null,r.a.createElement("a",{class:"grey-text text-lighten-3",href:"#!"},"Leonel Diaz")))))),r.a.createElement("div",{class:"footer-copyright"},r.a.createElement("div",{class:"container"},r.a.createElement("h7",null,"@BookBook NYC"))))},de=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:ue}),r.a.createElement(d.a,{path:"/catalog",component:$}),r.a.createElement(d.a,{path:"/book/:id",component:V}),r.a.createElement(d.a,{path:"/signin",component:le}),r.a.createElement(d.a,{path:"/signup",component:ce}),r.a.createElement(d.a,{path:"/create",component:me}),r.a.createElement(d.a,{path:"/author/:filter",component:ne})),r.a.createElement(he,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe={},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;arguments.length>1&&arguments[1];return e},ge={sortOrder:"none"},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT_SUCCESS":return console.log("create project success"),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"),e;case"CHANGE_SORT_ORDER":return{sortOrder:t.payload};default:return e}},be=a(65),ve=Object(Z.c)({auth:Ee,project:fe,firestore:be.firestoreReducer}),ke=a(246),Oe=a(93),Ne=a.n(Oe);a(486),a(490);Ne.a.initializeApp({apiKey:"AIzaSyBgCRch0C208pv8rNU6OX0crbsAEJUyThA",authDomain:"team15-cen.firebaseapp.com",databaseURL:"https://team15-cen.firebaseio.com",projectId:"team15-cen",storageBucket:"team15-cen.appspot.com",messagingSenderId:"738528211869",appId:"1:738528211869:web:a921a5712d98a93c723574",measurementId:"G-7QH6M24RD8"}),Ne.a.firestore().settings({timestampsInSnapshots:!0});var ye=Ne.a,we=Object(Z.e)(ve,Object(Z.d)(Object(Z.a)(ke.a.withExtraArgument({getFirebase:H.getFirebase,getFirestore:be.getFirestore})),Object(H.reactReduxFirebase)(ye),Object(be.reduxFirestore)(ye),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(J.a,{store:we},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[248,1,2]]]);
//# sourceMappingURL=main.31e7fe30.chunk.js.map