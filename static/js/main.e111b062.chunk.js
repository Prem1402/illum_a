(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,a){e.exports=a(430)},428:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(81),r=a.n(n),o=a(446),c=a(447),l=a(1),i=a.n(l),s=a(85),u=a(20),m=a(59),h=a(35),d=a(185),p=a(186),g=a.n(p),f=a(187),E=a(36),v=a(189),b="LOAD_GEO_CACHE",w="UPDATE_GEO_CACHE",C="LIKE_GEO_CACHE",y="AUTH_USER",O="AUTH_ERROR",k="REG_ERROR",j="CLEAR_ERROR",N={geoCache:[],authenticated:"",errorMessage:[],regErrorMessage:""};var A=Object(h.c)({router:f.routerReducer,GeoCacheReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N.geoCache,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.geoCache;case w:return Object(v.a)(e.filter(function(e){return e.id!=t.geoCacheDetails.id})).concat([Object.assign({},t.geoCacheDetails)]);case C:return Object(E.a)({},e).map(function(e){return e.id!==t.id?e:Object(E.a)({},e,{likes:Number(e.likes)+1})});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(E.a)({},e,{authenticated:t.loginData});case O:return Object(E.a)({},e,{errorMessage:t.errMsg});case k:return Object(E.a)({},e,{regErrorMessage:t.errMsg});case j:return Object(E.a)({},e,{regErrorMessage:"",errorMessage:""});default:return e}}}),U=g()(),R=[d.a,Object(m.routerMiddleware)(U)],M=h.d.apply(void 0,[h.a.apply(void 0,R)].concat([])),S=Object(h.e)(Object(m.connectRouter)(U)(A),{},M,{auth:{authenticated:localStorage.getItem("authUser")}}),G=a(24),I=a(25),L=a(27),_=a(26),x=a(28),P=a(437),D=a(435),W=a(436),q=a(431),B=a(432),T=a(433),F=a(434),z=a(118),H=a.n(z),J=function(){var e=localStorage.getItem("authUser");if(e){var t=JSON.parse(e),a=H()();return!H()(1e3*t.created_at+1e3*t.expires_in).isBefore(a)||(localStorage.removeItem("authUser"),!1)}return!1},Y=function(e){localStorage.setItem("authUser",JSON.stringify(e)),localStorage.setItem("token",e.access_token)},Z=function(){return localStorage.getItem("token")},K=function(){localStorage.removeItem("authUser"),localStorage.removeItem("token")},Q=function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).logout=function(e){e.preventDefault(),K(),a.props.history.push("/login")},a}return Object(x.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.authenticated;return i.a.createElement("div",null,i.a.createElement(q.a,{color:"grey",light:!0,expand:"md"},i.a.createElement(B.a,{href:"/"},"Geo Location"),i.a.createElement(T.a,{className:"ml-auto",navbar:!0},i.a.createElement(F.a,null,i.a.createElement(D.a,{to:"/register/",className:"nav-link"},"Register")),e?i.a.createElement(l.Fragment,null,i.a.createElement(F.a,null,i.a.createElement(D.a,{to:"/map",className:"nav-link"},"Map")),i.a.createElement(F.a,null,i.a.createElement("a",{onClick:this.logout,className:"nav-link"},"Logout"))):i.a.createElement(F.a,null,i.a.createElement(D.a,{to:"/login/",className:"nav-link"},"Login")))))}}]),t}(l.Component);var X=Object(u.connect)(function(e){return{authenticated:J()}})(Object(W.a)(Q)),$=function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).renderBody=function(){var e=a.props,t=e.authenticated,n=e.path,r=e.children;return t&&"/login"===n?i.a.createElement(P.a,{to:{pathname:"/"}}):t||"/login"===n?r:i.a.createElement(P.a,{to:{pathname:"/login"}})},a}return Object(x.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.authenticated;return i.a.createElement("div",null,i.a.createElement(X,Object.assign({authenticated:e},this.props)),this.renderBody())}}]),t}(l.Component),V=Object(u.connect)(function(e){return{authenticated:J(),path:e.router.location.pathname}})($),ee=a(50),te=a(438),ae=a(439),ne=a(440),re=a(441),oe=a(442),ce=a(443),le=a(444),ie=function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",submitted:!1},a.handleChange=function(e){a.setState(Object(ee.a)({},e.target.name,e.target.value))},a.redirectToDashboard=function(){a.props.history.push("/")},a.doLogin=function(){a.setState({submitted:!0});var e=a.props.loggedInUser,t=a.state,n=t.email,r=t.password;n&&r&&e({email:n,password:r,redirect:a.redirectToDashboard})},a}return Object(x.a)(t,e),Object(I.a)(t,[{key:"componentWillUnmount",value:function(){(0,this.props.clearError)()}},{key:"render",value:function(){var e=this.props.errorMessage,t=this.state,a=t.email,n=t.password,r=t.submitted;return i.a.createElement(l.Fragment,null,i.a.createElement(X,Object.assign({authenticated:!1},this.props)),i.a.createElement(te.a,null,i.a.createElement(ae.a,{md:{size:6,offset:3}},i.a.createElement("div",{style:{color:"red"}},e||null," "),i.a.createElement(ne.a,null,i.a.createElement(te.a,{form:!0},i.a.createElement(ae.a,{md:12},i.a.createElement(re.a,null,i.a.createElement(oe.a,null,"Email"),i.a.createElement(ce.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"Enter Email",onChange:this.handleChange}),r&&!a&&i.a.createElement("div",{className:"help-block"},"Email is required")),i.a.createElement(re.a,null,i.a.createElement(oe.a,null,"Password"),i.a.createElement(ce.a,{type:"password",name:"password",id:"Password",placeholder:"Enter Password",onChange:this.handleChange}),r&&!n&&i.a.createElement("div",{className:"help-block"},"Password is required")))),i.a.createElement(le.a,{onClick:this.doLogin},"Submit")))))}}]),t}(l.Component),se=a(51),ue=a.n(se);function me(){return{type:j}}function he(e){return function(t){return function(e){var t={grant_type:"password",email:e.email,password:e.password};return ue.a.post("https://blooming-cove-35281.herokuapp.com/api/oauth/token",t,{crossdomain:!0}).then(function(e){return e.data}).catch(function(e){throw e})}({email:e.email,password:e.password}).then(function(a){Y(a),t(function(e){return{type:y,loginData:e}}(a)),e.redirect()}).catch(function(e){t({type:O,errMsg:"Invalid Credentials"})})}}function de(e){return function(t){return function(e){var t={user:{email:e.email,first_name:e.firstName,last_name:e.lastName,password:e.password,username:e.userName}};return ue.a.post("https://blooming-cove-35281.herokuapp.com/api/users",t,{crossdomain:!0}).then(function(e){return e.data}).catch(function(e){throw e})}(e).then(function(e){t({type:y,loginData:e})}).catch(function(e){t({type:k,errMsg:{regErr:"Error! Email exists or input details is incorrect"}})})}}var pe=Object(u.connect)(function(e){return{errorMessage:e.auth.errorMessage}},function(e){return{loggedInUser:function(t){return e(he(t))},clearError:function(){return e(me())}}})(ie),ge=function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",userName:"",email:"",password:"",submitted:!1},a.handleChange=function(e){a.setState(Object(ee.a)({},e.target.name,e.target.value))},a.doRegister=function(){var e=a.props.registerUser,t=a.state,n=t.firstName,r=t.lastName,o=t.userName,c=t.email,l=t.password;a.setState({submitted:!0}),n&&r&&o&&c&&l&&e({firstName:n,lastName:r,userName:o,email:c,password:l})},a}return Object(x.a)(t,e),Object(I.a)(t,[{key:"componentWillUnmount",value:function(){(0,this.props.clearError)()}},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.userName,r=e.email,o=e.password,c=e.submitted,s=this.props.errorMessage;return i.a.createElement(l.Fragment,null,i.a.createElement(X,Object.assign({authenticated:!1},this.props)),i.a.createElement(te.a,null,i.a.createElement(ae.a,{md:{size:6,offset:3}},i.a.createElement("div",{style:{color:"red"}},s||null),i.a.createElement(ne.a,null,i.a.createElement(te.a,{form:!0},i.a.createElement(ae.a,{md:12},i.a.createElement(re.a,null,i.a.createElement(oe.a,null,"First Name"),i.a.createElement(ce.a,{type:"text",name:"firstName",id:"FirstName",placeholder:"Enter First Name",onChange:this.handleChange}),c&&!t&&i.a.createElement("div",{className:"help-block",style:{color:"red"}},"First Name is required")),i.a.createElement(re.a,null,i.a.createElement(oe.a,null,"Last Name"),i.a.createElement(ce.a,{type:"text",name:"lastName",id:"LastName",placeholder:"Enter Last Name",onChange:this.handleChange}),c&&!a&&i.a.createElement("div",{className:"help-block",style:{color:"red"}},"Last Name is required")),i.a.createElement(re.a,null,i.a.createElement(oe.a,null,"User Name"),i.a.createElement(ce.a,{type:"text",name:"userName",id:"UserName",placeholder:"Enter User Name",onChange:this.handleChange}),c&&!n&&i.a.createElement("div",{className:"help-block",style:{color:"red"}},"User Name is required")),i.a.createElement(re.a,null,i.a.createElement(oe.a,null,"Email"),i.a.createElement(ce.a,{type:"email",name:"email",id:"Email",placeholder:"Enter Email",onChange:this.handleChange}),c&&!r&&i.a.createElement("div",{className:"help-block",style:{color:"red"}},"Email is required")),i.a.createElement(re.a,null,i.a.createElement(oe.a,null,"Password"),i.a.createElement(ce.a,{type:"password",name:"password",id:"Password",placeholder:"Enter Password",onChange:this.handleChange}),c&&!o&&i.a.createElement("div",{className:"help-block",style:{color:"red"}},"Password is required")))),i.a.createElement(le.a,{onClick:this.doRegister},"Submit")))))}}]),t}(l.Component),fe=Object(u.connect)(function(e){return{errorMessage:e.auth.regErrorMessage.regErr||""}},function(e){return{registerUser:function(t){return e(de(t))},clearError:function(){return e(me())}}})(ge),Ee=(a(232),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var be=a(445),we=a(53),Ce=function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={infoOpen:!1,i:null},a.onCloseInfo=function(){a.setState({index:null})},a.infoOpen=function(e){a.setState({index:e})},a}return Object(x.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.geoCache,n=t.likeGeoCache,r=this.state.index;return i.a.createElement(we.GoogleMap,{defaultZoom:2,defaultCenter:{lat:-34.397,lng:150.644}},a.map(function(t,a){return i.a.createElement(we.Marker,{key:a,position:{lat:Number(t.lat),lng:Number(t.lng)},onClick:function(){return e.infoOpen(a)}},r===a&&i.a.createElement(we.InfoWindow,{onCloseClick:e.onCloseInfo},i.a.createElement("p",null,"".concat(t.lat,", ").concat(t.lng),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return n(t.id)}},"Like"))))}))}}]),t}(l.Component),ye=Object(we.withScriptjs)(Object(we.withGoogleMap)(Ce)),Oe=(a(428),function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).updateGps=function(e){console.log(e),(0,a.props.updateGeoCache)(e)},a}return Object(x.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadGeoCache)()}},{key:"render",value:function(){var e=this.props,t=e.geoCache,a=e.likeGeoCache;return i.a.createElement("div",{className:"container-fluid mt-3 m-3"},i.a.createElement("div",{className:"row mb-3"},i.a.createElement(s.ActionCable,{channel:"GeoCacheChannel",room:1,onReceived:this.updateGps}),i.a.createElement(ye,{geoCache:t,likeGeoCache:a,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3&libraries=geometry,drawing,places&&key=AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE",loadingElement:i.a.createElement("div",{style:{height:"50vh"}}),containerElement:i.a.createElement("div",{style:{height:"50vh",width:"100%"}}),mapElement:i.a.createElement("div",{style:{height:"50vh"}})})),i.a.createElement("div",{className:"row"},i.a.createElement(be.a,{responsive:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Cordinate"),i.a.createElement("th",null,"Title"),i.a.createElement("th",null,"Comment"),i.a.createElement("th",null,"Likes"),i.a.createElement("th",null,"Unlikes"),i.a.createElement("th",null,"Message"))),i.a.createElement("tbody",null,t.map(function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,"".concat(e.lat,", ").concat(e.lng)),i.a.createElement("td",null,e.title),i.a.createElement("td",null,e.comments),i.a.createElement("td",null,e.likes),i.a.createElement("td",null,e.unlikes),i.a.createElement("td",null,e.message))})))))}}]),t}(l.Component));function ke(e){return function(t){return function(e){var t=Z();return ue.a.post("https://blooming-cove-35281.herokuapp.com/api/geo_caches/".concat(e,"/like"),null,{headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(t)},crossdomain:!0}).then(function(e){return e}).catch(function(e){throw e})}(e).then(function(){t(function(e){return{type:C,id:e}}(e))}).catch(function(e){throw e})}}function je(){return function(e){return function(){var e=Z();return ue.a.get("https://blooming-cove-35281.herokuapp.com/api/geo_caches",{headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(e)},crossdomain:!0}).then(function(e){return e.data}).catch(function(e){throw e})}().then(function(t){e(function(e){return{type:b,geoCache:e}}(t))}).catch(function(e){throw e})}}var Ne=Object(u.connect)(function(e){return{geoCache:e.GeoCacheReducer}},function(e){return{loadGeoCache:function(){return e(je())},loggedInUser:function(){return e(he())},registerUser:function(){return e(de())},updateGeoCache:function(t){return e({type:w,geoCacheDetails:t})},likeGeoCache:function(t){return e(ke(t))}}})(Oe);r.a.render(i.a.createElement(u.Provider,{store:S},i.a.createElement(m.ConnectedRouter,{history:U},i.a.createElement(o.a,null,i.a.createElement(c.a,{excat:!0,path:"/register",component:fe}),i.a.createElement(c.a,{excat:!0,path:"/login",component:pe}),i.a.createElement(V,null,i.a.createElement(s.ActionCableProvider,{url:"wss://blooming-cove-35281.herokuapp.com/cabel"},i.a.createElement(c.a,{excat:!0,path:"/",component:Ne})))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Ee?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ve(t,e)})}}()}},[[190,2,1]]]);
//# sourceMappingURL=main.e111b062.chunk.js.map