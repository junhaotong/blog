webpackJsonp([16],{"++Us":function(r,e,t){e=r.exports=t("FZ+f")(!0),e.push([r.i,".sign-wrapper .get-code .code-item{width:calc(100% - 100px);position:relative}.sign-wrapper .get-code .ivu-form-item-content{display:-webkit-box;display:-ms-flexbox;display:flex}.sign-wrapper .get-code .btn-get-code{width:100px;border:1px solid #dddee1;border-radius:0;border-top:0;border-left:0}.sign-wrapper .regist-btn{height:35px;margin-top:20px}","",{version:3,sources:["/Users/blue/Documents/personal/blog/web/front/src/components/Sign/Regist/Regist.vue"],names:[],mappings:"AACA,mCACE,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,+CACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,sCACE,YAAa,AACb,yBAA0B,AAC1B,gBAAiB,AACjB,aAAc,AACd,aAAe,CAChB,AACD,0BACE,YAAa,AACb,eAAiB,CAClB",file:"Regist.vue",sourcesContent:["\n.sign-wrapper .get-code .code-item {\n  width: calc(100% - 100px);\n  position: relative;\n}\n.sign-wrapper .get-code .ivu-form-item-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.sign-wrapper .get-code .btn-get-code {\n  width: 100px;\n  border: 1px solid #dddee1;\n  border-radius: 0;\n  border-top: 0;\n  border-left: 0;\n}\n.sign-wrapper .regist-btn {\n  height: 35px;\n  margin-top: 20px;\n}\n"],sourceRoot:""}])},"Izd/":function(r,e,t){"use strict";function s(r){t("uNCk")}Object.defineProperty(e,"__esModule",{value:!0});var o=t("gCnZ"),i=t("jDpS"),a=t("VU/8"),n=s,d=a(o.a,i.a,n,null,null);e.default=d.exports},gCnZ:function(r,e,t){"use strict";e.a={name:"regist",data:function(){var r=this;return{registForm:{username:"",email:"",code:"",pwd:"",re_pwd:""},emailError:"",usernameError:"",codeError:"",pwdError:"",rePwdError:"",codeMsg:"获取验证码",rules:{username:{validator:function(e,t,s){r.usernameError=""===t?"请输入用户名":"",s()},trigger:"blur"},email:{validator:function(e,t,s){var o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;""===t?r.emailError="请输入邮箱":o.test(t)?r.emailError="":r.emailError="邮箱格式不正确",s()},trigger:"blur"},code:{validator:function(e,t,s){r.codeError=""===t?"请输入验证码":"",s()},trigger:"blur"},pwd:{validator:function(e,t,s){""===t?r.pwdError="请输入密码":/^[0-9A-Za-z]{6,20}$/.test(t)?r.pwdError="":r.pwdError="6-20位字符或数字",s()},trigger:"blur"},re_pwd:{validator:function(e,t,s){""===t?r.rePwdError="请重新输入密码":t===r.registForm.pwd?r.rePwdError="":r.rePwdError="两次密码不一致",s()},trigger:"blur"}},codeStatus:!1}},methods:{sendCode:function(){var r=this;if(this.emailError="",""===this.registForm.email)return void(this.emailError="请输入邮箱");this.axios.post("/send_code",{email:this.registForm.email}).then(function(e){if(0===e.data.code){r.$Message.success(e.data.msg),r.codeStatus=!0;var t=59;r.codeMsg="60秒后重发";var s=setInterval(function(){r.codeMsg=t+"秒后重发",0===--t&&(r.codeStatus=!1,r.codeMsg="重新发送",clearInterval(s))},1e3)}else r.$Message.error(e.data.msg)})},regist:function(){var r=this;return this.usernameError="",""===this.registForm.username?void(this.usernameError="请输入用户名"):(this.emailError="",""===this.registForm.email?void(this.emailError="请输入邮箱"):void this.axios.post("/regist",this.registForm).then(function(e){0===e.data.code?(r.$Message.success("注册成功"),r.$emit("update:tabName","login")):r.$Message.error(e.data.msg)}))}}}},jDpS:function(r,e,t){"use strict";var s=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("Row",[t("Form",{ref:"registForm",attrs:{model:r.registForm,rules:r.rules}},[t("FormItem",{staticClass:"form-item",attrs:{prop:"username"}},[t("Input",{attrs:{placeholder:"用户名"},model:{value:r.registForm.username,callback:function(e){r.registForm.username=e},expression:"registForm.username"}}),r._v(" "),t("transition",{attrs:{name:"slide-fade"}},[r.usernameError?t("div",{staticClass:"hint"},[r._v(r._s(r.usernameError))]):r._e()])],1),r._v(" "),t("FormItem",{staticClass:"form-item",attrs:{prop:"email"}},[t("Input",{attrs:{placeholder:"邮箱"},model:{value:r.registForm.email,callback:function(e){r.registForm.email=e},expression:"registForm.email"}}),r._v(" "),t("transition",{attrs:{name:"slide-fade"}},[r.emailError?t("div",{staticClass:"hint"},[r._v(r._s(r.emailError))]):r._e()])],1),r._v(" "),t("FormItem",{staticClass:"form-item get-code",attrs:{prop:"code"}},[t("div",{staticClass:"code-item"},[t("Input",{attrs:{placeholder:"验证码"},model:{value:r.registForm.code,callback:function(e){r.registForm.code=e},expression:"registForm.code"}}),r._v(" "),t("transition",{attrs:{name:"slide-fade"}},[r.codeError?t("div",{staticClass:"hint"},[r._v(r._s(r.codeError))]):r._e()])],1),r._v(" "),t("Button",{staticClass:"btn-get-code",attrs:{disabled:r.codeStatus,type:"text"},on:{click:r.sendCode}},[r._v(r._s(r.codeMsg))])],1),r._v(" "),t("FormItem",{staticClass:"form-item",attrs:{prop:"pwd"}},[t("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:r.registForm.pwd,callback:function(e){r.registForm.pwd=e},expression:"registForm.pwd"}}),r._v(" "),t("transition",{attrs:{name:"slide-fade"}},[r.pwdError?t("div",{staticClass:"hint"},[r._v(r._s(r.pwdError))]):r._e()])],1),r._v(" "),t("FormItem",{staticClass:"form-item",attrs:{prop:"re_pwd"}},[t("Input",{attrs:{type:"password",placeholder:"重新输入密码"},model:{value:r.registForm.re_pwd,callback:function(e){r.registForm.re_pwd=e},expression:"registForm.re_pwd"}}),r._v(" "),t("transition",{attrs:{name:"slide-fade"}},[r.rePwdError?t("div",{staticClass:"hint"},[r._v(r._s(r.rePwdError))]):r._e()])],1),r._v(" "),t("FormItem",{staticClass:"form-item"},[t("Button",{staticClass:"regist-btn",attrs:{type:"primary",long:""},on:{click:r.regist}},[r._v("注册")])],1)],1)],1)},o=[],i={render:s,staticRenderFns:o};e.a=i},uNCk:function(r,e,t){var s=t("++Us");"string"==typeof s&&(s=[[r.i,s,""]]),s.locals&&(r.exports=s.locals);t("rjj0")("3fb67a67",s,!0)}});
//# sourceMappingURL=16.26099d0fc3fde54118f6.js.map