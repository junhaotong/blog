webpackJsonp([1],{133:function(t,e){},134:function(t,e){},135:function(t,e){},136:function(t,e){},137:function(t,e){},144:function(t,e,r){function a(t){r(136)}var n=r(11)(r(76),r(151),a,"data-v-bfd528fa",null);t.exports=n.exports},145:function(t,e,r){function a(t){r(137)}var n=r(11)(r(77),r(152),a,null,null);t.exports=n.exports},146:function(t,e,r){function a(t){r(135)}var n=r(11)(r(78),r(150),a,null,null);t.exports=n.exports},147:function(t,e,r){function a(t){r(133)}var n=r(11)(r(79),r(148),a,null,null);t.exports=n.exports},148:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("Table",{staticClass:"user-list",attrs:{border:"",columns:t.columns,data:t.data}})},staticRenderFns:[]}},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},staticRenderFns:[]}},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Row",[r("i-col",{attrs:{span:"12"}},[r("Form",{ref:"UserForm",attrs:{model:t.UserForm,rules:t.rules,"label-width":100}},[r("Form-item",{attrs:{label:"用户头像"}},[r("Upload",{attrs:{action:"/api/upload/image",name:"image","show-upload-list":!1,"on-success":t.uploadSuccess}},[r("div",{staticClass:"upload"},[t.UserForm.avatar?r("img",{attrs:{src:"/"+t.UserForm.avatar,alt:""}}):[r("Icon",{attrs:{type:"ios-cloud-upload-outline"}}),t._v("\n                            上传头像\n\n                        ")]],2)])],1),t._v(" "),r("Form-item",{attrs:{label:"用户名",prop:"username"}},[r("Input",{staticClass:"middle-input",attrs:{placeholder:"请输入用户名"},model:{value:t.UserForm.username,callback:function(e){t.UserForm.username=e},expression:"UserForm.username"}})],1),t._v(" "),r("Form-item",{attrs:{label:"邮箱",prop:"email"}},[r("Input",{staticClass:"middle-input",attrs:{placeholder:"请输入邮箱"},model:{value:t.UserForm.email,callback:function(e){t.UserForm.email=e},expression:"UserForm.email"}})],1),t._v(" "),r("Form-item",{attrs:{label:"密码",prop:"pwd"}},[r("Input",{staticClass:"middle-input",attrs:{type:"password",placeholder:"请输入用户密码"},model:{value:t.UserForm.pwd,callback:function(e){t.UserForm.pwd=e},expression:"UserForm.pwd"}})],1),t._v(" "),r("Form-item",{attrs:{label:"再次输入密码",prop:"re_pwd",required:!0}},[r("Input",{staticClass:"middle-input",attrs:{type:"password",placeholder:"再次输入密码"},model:{value:t.UserForm.re_pwd,callback:function(e){t.UserForm.re_pwd=e},expression:"UserForm.re_pwd"}})],1),t._v(" "),r("Form-item",{attrs:{label:"用户类型"}},[r("span",[t._v("普通用户")])]),t._v(" "),r("Form-item",[r("Button",{attrs:{type:"primary"},on:{click:t.regist}},[t._v("确认注册")])],1)],1)],1)],1)},staticRenderFns:[]}},151:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Row",{staticClass:"layout",attrs:{type:"flex"}},[r("div",{staticClass:"menu-left"},[r("div",{staticClass:"logo"},[t._v("Jeremy")]),t._v(" "),r("Menu",{attrs:{theme:"dark",width:"auto","active-name":t.$route.path,"open-names":[t.$route.matched[0].path]},on:{"on-select":t.changeLeftMenu}},t._l(t.$router.options.routes,function(e,a){return e.hidden?t._e():r("Submenu",{key:e.path,attrs:{name:e.path}},[r("template",{slot:"title"},[r("Icon",{staticClass:"menu-icon",attrs:{type:e.icon}}),t._v(" "),r("span",{staticClass:"menu-text"},[t._v(t._s(e.name))])],1),t._v(" "),t._l(e.children,function(a){return a.hidden?t._e():r("Menu-item",{key:a.path,attrs:{name:e.path+"/"+a.path}},[r("Icon",{staticClass:"menu-icon",attrs:{type:a.icon}}),t._v(" "),r("span",{staticClass:"menu-text"},[t._v(t._s(a.name))])],1)})],2)}))],1),t._v(" "),r("div",{staticClass:"content-right"},[r("div",{staticClass:"layout-ceiling"},[r("a",{staticClass:"cailing-item",attrs:{href:"javascript:void(0)"}},[t._v("管理后台")]),t._v(" "),r("Dropdown",{staticClass:"cailing-item pull-right",attrs:{trigger:"click"}},[r("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n                    "+t._s(t.$store.state.userinfo.userinfo.username)+"\n                    "),r("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),r("Dropdown-menu",{slot:"list"},[r("Dropdown-item",[r("span",{on:{click:t.logout}},[t._v("退出登录")])])],1)],1)],1),t._v(" "),r("div",{staticClass:"main"},[r("Breadcrumb",{staticClass:"bread"},[r("Breadcrumb-item",{attrs:{href:"/"}},[t._v("首页")]),t._v(" "),t.$route.matched[0]?r("Breadcrumb-item",{attrs:{href:t.$route.matched[0].path}},[t._v(t._s(t.$route.matched[0].name))]):t._e(),t._v(" "),t.$route.matched[1]?r("Breadcrumb-item",[t._v(t._s(t.$route.matched[1].name))]):t._e()],1),t._v(" "),r("div",{staticClass:"content"},[r("router-view")],1)],1)])])},staticRenderFns:[]}},152:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Row",{staticClass:"login-wrapper"},[r("canvas",{attrs:{id:"login"}}),t._v(" "),r("div",{staticClass:"login-dialog"},[r("div",{staticClass:"title"},[t._v("登录")]),t._v(" "),r("Form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.loginRules}},[r("Form-item",{attrs:{prop:"username",error:t.usernameError}},[r("Input",{staticClass:"input",attrs:{placeholder:"请输入用户名"},model:{value:t.loginForm.username,callback:function(e){t.loginForm.username=e},expression:"loginForm.username"}})],1),t._v(" "),r("Form-item",{attrs:{prop:"password",error:t.pwdError}},[r("Input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.loginForm.password,callback:function(e){t.loginForm.password=e},expression:"loginForm.password"}})],1),t._v(" "),r("Button",{staticClass:"btn-login",on:{click:t.login}},[t._v("登录")])],1)],1)])},staticRenderFns:[]}},34:function(t,e,r){"use strict";var a=r(82),n=r(81);e.a={Login:a.a,Content:n.a}},52:function(t,e,r){"use strict";var a=r(8),n=r(153),s=r(34),o=r(89);a.default.use(n.a),e.a=new n.a({routes:[{path:"/",redirect:"/user",hidden:!0,component:function(t){t(s.a.Content)}},{path:"/login",hidden:!0,component:function(t){t(s.a.Login)}}].concat(o.a)})},53:function(t,e,r){"use strict";var a=r(8),n=r(155),s=r(90);a.default.use(n.a),e.a=new n.a.Store({modules:{userinfo:s.a}})},54:function(t,e,r){"use strict";var a=r(8),n=r(28),s=r.n(n),o=r(143),i=r.n(o),u=r(27),c=r.n(u),l=r(140),d=r.n(l),m=r(26),p=r.n(m);a.default.use(i.a,s.a),s.a.defaults.baseURL="/api";var f=p.a.getJSON("userinfo")||{};f.token&&(s.a.defaults.headers.common.Authorization=f.token),s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.transformRequest=function(t){return c.a.start(),d.a.stringify(t)},s.a.defaults.transformResponse=function(t){return c.a.done(),t=JSON.parse(t),3e3===t.code&&(window.vm.$Message.error(t.msg),window.vm.$router.push("/login")),t}},55:function(t,e){},57:function(t,e,r){function a(t){r(134)}var n=r(11)(r(75),r(149),a,null,null);t.exports=n.exports},75:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},76:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(26),n=r.n(a);e.default={name:"content",data:function(){return{}},methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){n.a.remove("userinfo"),t.$router.push("/login")})},changeLeftMenu:function(t){this.$router.push(t)}}}},77:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r(80);e.default={name:"AdminLogin",data:function(){return{loginForm:{username:"",password:"",user_type:2},loginRules:{username:{required:!0,message:"用户名不能为空",trigger:"blur"},password:{required:!0,message:"密码不能为空",trigger:"blur"}},usernameError:"",pwdError:""}},methods:{login:function(){var t=this;this.pwdError="",this.usernameError="",this.$refs.loginForm.validate(function(e){e&&t.axios.post("/admin/login",t.loginForm).then(function(e){0===e.data.code?(t.$Message.success(e.data.msg),t.$store.dispatch("update_userinfo"),t.$router.push("/")):2001===e.data.code?t.pwdError=e.data.msg:t.usernameError=e.data.msg})})}},mounted:function(){Dot("login",{cW:1500,cH:650})}}},78:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"UserAdd",data:function(){var t=this;return{UserForm:{avatar:"",username:"",email:"",pwd:"",re_pwd:""},rules:{username:{required:!0,message:"用户名不能为空",trigger:"blur"},email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],pwd:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:20,message:"密码应为6-20位",trigger:"blur"}],re_pwd:{validator:function(e,r,a){""===r?a(new Error("请再次输入密码")):r!==t.UserForm.pwd?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}}}},methods:{uploadSuccess:function(t,e,r){0===t.code?this.UserForm.avatar=t.data.avatar:this.$Message.error(t.msg)},regist:function(){var t=this;this.$refs.UserForm.validate(function(e){e&&t.axios.post("/regist",t.UserForm).then(function(e){0===e.data.code?t.$Message.success(e.data.msg):t.$Message.error(e.data.msg)})})}}}},79:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(84);e.default=a.a},80:function(t,e,r){"use strict";var a=r(93),n=r.n(a);!function(t,e){t.Dot=function(){return function(e,r){var a={cW:1367,cH:500,numDot:100,radDot:15,isRangeRad:!0,dotColor:"#FFFFFF",isLine:!0,lineDist:75,lineColor:"#FFFFFF",bounce:1,opacity:.5,isTouch:!1,vxRange:2,vyRange:2,isWallCollisionTest:!0,isBallCollisionTest:!0},s=[],o=null,i=null,u=null,c=null,l=null,d=null,m=function(t,e){n()(t).forEach(function(r){e[r]=t[r]})},p=function(e,r){"string"==typeof e&&"#"===e[0]&&(e=t.parseInt(e.slice(1),16)),r=void 0===r?1:r;var a=e>>16&255,n=e>>8&255,s=e>>4&255,o=r<0?0:r>1?1:r;return 1===o?"rgb("+a+","+n+","+s+")":"rgba("+a+","+n+","+s+","+o+")"},f=function(t,e){var r=e-t;return parseInt((Math.random()*r+t).toFixed(2))},v=function(t,e,r){this.x=0,this.y=0,this.vx=0,this.vy=0,this.radius=e,this.rotation=0,this.mass=1,this.scaleX=1,this.scaleY=1,this.name="",this.color=p(t,r)};v.prototype.draw=function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.rotation),t.scale(this.scaleX,this.scaleY),t.fillStyle=this.color,t.strokeStyle=this.color,t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI,!1),t.closePath(),t.fill(),t.restore()};var h=function(){for(var t=0;t<a.numDot;t++){a.isRangeRad&&(a.radDot=Math.floor(f(2,a.radDot)));var e=new v(a.dotColor,a.radDot,a.opacity);e.x=f(0,l),e.y=f(0,d),e.vx=Math.random()*a.vxRange-a.vxRange/2,e.vy=Math.random()*a.vyRange-a.vyRange/2,s.push(e)}},g=function(t){t.draw(i)},x=function(t){t.x+=t.vx,t.y+=t.vy,y(t)},y=function(t){a.isWallCollisionTest?(t.x+t.radius>l?(t.x=l-t.radius,t.vx*=-a.bounce):t.x-t.radius<0&&(t.x=t.radius,t.vx*=-a.bounce),t.y+t.radius>d?(t.y=d-t.radius,t.vy*=-a.bounce):t.y-t.radius<0&&(t.y=t.radius,t.vy*=-a.bounce)):(t.x-t.radius>l?t.x=0:t.x+t.radius<0&&(t.x=l),t.y-t.radius>d?t.y=0:t.y+t.radius<0&&(t.y=d))},_=function(t,e,r,a,n){return{x:n?t*a+e*r:t*a-e*r,y:n?e*a-t*r:e*a+t*r}},w=function(t,e){var r=e.x-t.x,a=e.y-t.y;if(Math.sqrt(r*r+a*a)<t.radius+e.radius){var n=Math.atan2(a,r),s=Math.sin(n),o=Math.cos(n),i={x:0,y:0},u=_(r,a,s,o,!0),c=_(t.vx,t.vy,s,o,!0),l=_(e.vx,e.vy,s,o,!0),d=c.x-l.x;c.x=((t.mass-e.mass)*c.x+2*e.mass*l.x)/(t.mass+e.mass),l.x=d+c.x;var m=Math.abs(c.x)+Math.abs(l.x),p=t.radius+e.radius-Math.abs(i.x-u.x);i.x+=c.x/m*p,u.x+=l.x/m*p;var f=_(i.x,i.y,s,o,!1),v=_(u.x,u.y,s,o,!1);e.x=t.x+v.x,e.y=t.y+v.y,t.x=t.x+f.x,t.y=t.y+f.y;var h=_(c.x,c.y,s,o,!1),g=_(l.x,l.y,s,o,!1);t.vx=h.x,t.vy=h.y,e.vx=g.x,e.vy=g.y}},F=function(t,e){var r=e.x-t.x,n=e.y-t.y;Math.sqrt(r*r+n*n)<a.lineDist&&(i.save(),i.strokeStyle=p(a.lineColor,a.opacity-.4<=0?.1:a.opacity-.4),i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.closePath(),i.stroke(),i.restore())},b=function(){s.forEach(x);for(var t=0;t<a.numDot-1;t++){u=s[t];for(var e=t+1;e<a.numDot;e++)c=s[e],a.isBallCollisionTest&&w(u,c),a.isLine&&F(u,c)}s.forEach(g)};t.requestAnimationFrame||(t.requestAnimationFrame=t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)});!function(e,r){m(r||{},a),o=document.getElementById(e),i=o.getContext("2d"),l=a.cW,d=a.cH,o.width=l,o.height=d,h(),function e(){t.requestAnimationFrame(e),i.clearRect(0,0,l,d),b()}()}(e,r)}}()}("undefined"!=typeof window?window:this)},81:function(t,e,r){"use strict";var a=r(144),n=r.n(a);e.a=n.a},82:function(t,e,r){"use strict";var a=r(145),n=r.n(a);e.a=n.a},83:function(t,e,r){"use strict";var a=r(146),n=r.n(a);e.a=n.a},84:function(t,e,r){"use strict";e.a={name:"UserList",data:function(){return{columns:[{type:"index",width:80,align:"center"},{title:"用户名",align:"center",key:"username"},{title:"邮箱",align:"center",key:"email",width:180},{title:"头像",align:"center",render:function(t,e){return t("img",{attrs:{src:"/"+e.row.avatar},class:{avatar:!0}})}},{title:"注册时间",align:"center",key:"create_at",width:150},{title:"用户类型",align:"center",render:function(t,e){var r=void 0;switch(e.row.type){case 1:r="普通用户";break;case 2:r="管理员"}return t("span",r)}},{title:"用户状态",align:"center",render:function(t,e){var r=void 0;switch(e.row.status){case 0:r="正常";break;case-1:r="禁止登录"}return t("span",r)}},{title:"操作",align:"center",fixed:"right",render:function(t,e){var r=void 0;switch(e.row.status){case 0:r=t("Button",{props:{type:"error"}},"禁止登录");break;case-1:r=t("Button",{props:{type:"success"}},"允许登录")}return r}}],data:[{name:"2324"}]}},methods:{getUserList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.axios.get("/admin/user",{page:e}).then(function(e){0===e.data.code&&(t.data=e.data.data,console.log(t.data))})}},mounted:function(){this.getUserList()}}},85:function(t,e,r){"use strict";var a=r(147),n=r.n(a);e.a=n.a},86:function(t,e,r){"use strict";var a=r(83),n=r(85);e.a={Add:a.a,List:n.a}},87:function(t,e,r){"use strict";var a=r(86);e.a={User:a.a}},88:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(8),n=r(57),s=r.n(n),o=r(52),i=r(27),u=r.n(i),c=r(55),l=(r.n(c),r(53)),d=r(56),m=r.n(d);r(54);a.default.use(m.a),a.default.config.productionTip=!1,o.a.beforeEach(function(t,e,r){window.scroll(0,0),u.a.start();var a=l.a.state.userinfo.userinfo;a.token||"/login"===t.path?a.token&&"/login"===t.path?(u.a.done(),r("/")):r():r("/login"),r()}),o.a.afterEach(function(){u.a.done()}),window.vm=new a.default({el:"#app",router:o.a,store:l.a,template:"<App/>",components:{App:s.a}})},89:function(t,e,r){"use strict";var a=r(87),n=r(34);e.a=[{path:"/user",name:"用户管理",icon:"android-person",redirect:"/user/add",component:function(t){t(n.a.Content)},children:[{path:"add",name:"添加用户",icon:"plus-round",component:a.a.User.Add},{path:"list",name:"用户列表",icon:"list",component:a.a.User.List}]}]},90:function(t,e,r){"use strict";var a,n=r(95),s=r.n(n),o=r(94),i=r.n(o),u=r(26),c=r.n(u),l=r(91),d=r(28),m=r.n(d),p={userinfo:c.a.getJSON("userinfo")||{}},f={logout:function(t){var e=t.commit;return new i.a(function(t,r){e(l.a),t()})},update_userinfo:function(t){var e=t.commit;return new i.a(function(t,r){e(l.b),t()})}},v=(a={},s()(a,l.a,function(t){t.userinfo={}}),s()(a,l.b,function(t){t.userinfo=c.a.getJSON("userinfo")||{},m.a.defaults.headers.common.Authorization=t.userinfo.token}),a);e.a={state:p,actions:f,mutations:v}},91:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n});var a="LOGOUT",n="UPDATE_USERINFO"}},[88]);