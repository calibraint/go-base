webpackJsonp([0,1,2,3],{182:function(t,e,n){"use strict";function c(t){n(188)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(190),a=n(191),i=n(5),r=c,l=i(o.a,a.a,r,null,null);e.default=l.exports},183:function(t,e,n){"use strict";function c(t){n(192)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(194),a=n(195),i=n(5),r=c,l=i(o.a,a.a,r,null,null);e.default=l.exports},184:function(t,e,n){"use strict";function c(t){n(196)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(198),a=n(199),i=n(5),r=c,l=i(o.a,a.a,r,null,null);e.default=l.exports},187:function(t,e,n){"use strict";function c(t){n(208)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(210),a=n(211),i=n(5),r=c,l=i(o.a,a.a,r,null,null);e.default=l.exports},188:function(t,e,n){var c=n(189);"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);n(181)("59efb0dd",c,!0)},189:function(t,e,n){e=t.exports=n(180)(void 0),e.push([t.i,"",""])},190:function(t,e,n){"use strict";var c=n(4),o=n(30);n.n(o);e.a={components:{QBtn:c.c,QCheckbox:c.i,QCollapsible:c.k,QField:c.o,QIcon:c.q,QInput:c.r,QToggle:c.K},props:["account"],data:function(){return{}},validations:{account:{name:{required:o.required,minLength:Object(o.minLength)(3)},email:{required:o.required,email:o.email},roles:{required:o.required,minLength:Object(o.minLength)(1)}}},methods:{clearForm:function(){this.$refs.createAccount.close(),this.account={name:"",email:"",roles:["account"],active:!0},this.$v.account.$reset()}}}},191:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h5",[t._t("title")],2),n("q-field",{attrs:{icon:"account_box",label:"Name",error:t.$v.account.name.$error,"error-label":"Minimum "+t.$v.account.name.$params.minLength.min+" characters"}},[n("q-input",{attrs:{placeholder:"Account Name"},on:{input:function(e){t.$v.account.name.$touch()}},model:{value:t.account.name,callback:function(e){t.account.name="string"==typeof e?e.trim():e},expression:"account.name"}})],1),n("q-field",{attrs:{icon:"mail",label:"Email",error:t.$v.account.email.$error,"error-label":"Not a valid email address"}},[n("q-input",{attrs:{placeholder:"Email Address"},on:{input:function(e){t.$v.account.email.$touch()}},model:{value:t.account.email,callback:function(e){t.account.email="string"==typeof e?e.trim():e},expression:"account.email"}})],1),n("q-field",{attrs:{icon:"supervisor_account",label:"Roles",error:t.$v.account.roles.$error,"error-label":"Choose at least one role"}},[n("q-checkbox",{attrs:{label:"User",val:"user"},on:{focus:function(e){t.$v.account.roles.$touch()}},model:{value:t.account.roles,callback:function(e){t.account.roles=e},expression:"account.roles"}}),n("q-checkbox",{staticClass:"on-right",attrs:{label:"Admin",val:"admin"},model:{value:t.account.roles,callback:function(e){t.account.roles=e},expression:"account.roles"}})],1),n("q-field",{attrs:{icon:"check_circle",label:"Active"}},[n("q-toggle",{model:{value:t.account.active,callback:function(e){t.account.active=e},expression:"account.active"}})],1),n("div",{staticClass:"row justify-end"},[t._t("actions")],2)],1)},o=[],a={render:c,staticRenderFns:o};e.a=a},192:function(t,e,n){var c=n(193);"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);n(181)("5fa8da8e",c,!0)},193:function(t,e,n){e=t.exports=n(180)(void 0),e.push([t.i,".margin{margin-bottom:10px}",""])},194:function(t,e,n){"use strict";var c=n(4),o=n(30);n.n(o);e.a={components:{QBtn:c.c,QCheckbox:c.i,QCollapsible:c.k,QField:c.o,QIcon:c.q,QInput:c.r,QToggle:c.K},data:function(){return{account:{name:"",email:"",roles:["user"],active:!0},loading:!1}},validations:{account:{name:{required:o.required,minLength:Object(o.minLength)(3)},email:{required:o.required,email:o.email},roles:{required:o.required,minLength:Object(o.minLength)(1)}}},methods:{createAccount:function(){var t=this;this.loading=!0,this.axios.post("/admin/accounts",this.account).then(function(e){t.$emit("accountCreated",e.data),t.clearForm(),c.O.create.positive({html:"Account created"})},function(t){c.O.create.negative({html:t.response.data.error})}),this.loading=!1},clearForm:function(){this.$refs.createAccount.close(),this.account={name:"",email:"",roles:["account"],active:!0},this.$v.account.$reset()}}}},195:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-collapsible",{ref:"createAccount",staticClass:"margin",attrs:{icon:"add_circle_outline",label:"Add Account"}},[n("q-field",{attrs:{icon:"account_box",label:"Name",error:t.$v.account.name.$error,"error-label":"Minimum "+t.$v.account.name.$params.minLength.min+" characters"}},[n("q-input",{attrs:{placeholder:"Account Name"},on:{input:function(e){t.$v.account.name.$touch()}},model:{value:t.account.name,callback:function(e){t.account.name="string"==typeof e?e.trim():e},expression:"account.name"}})],1),n("q-field",{attrs:{icon:"mail",label:"Email",error:t.$v.account.email.$error,"error-label":"Not a valid email address"}},[n("q-input",{attrs:{placeholder:"Email Address"},on:{input:function(e){t.$v.account.email.$touch()}},model:{value:t.account.email,callback:function(e){t.account.email="string"==typeof e?e.trim():e},expression:"account.email"}})],1),n("q-field",{attrs:{icon:"supervisor_account",label:"Roles",error:t.$v.account.roles.$error,"error-label":"Choose at least one role"}},[n("q-checkbox",{attrs:{label:"User",val:"user"},on:{focus:function(e){t.$v.account.roles.$touch()}},model:{value:t.account.roles,callback:function(e){t.account.roles=e},expression:"account.roles"}}),n("q-checkbox",{staticClass:"on-right",attrs:{label:"Admin",val:"admin"},model:{value:t.account.roles,callback:function(e){t.account.roles=e},expression:"account.roles"}})],1),n("q-field",{attrs:{icon:"check_circle",label:"Active"}},[n("q-toggle",{model:{value:t.account.active,callback:function(e){t.account.active=e},expression:"account.active"}})],1),n("div",{staticClass:"row justify-end"},[n("q-btn",{on:{click:t.clearForm}},[t._v("Cancel")]),n("q-btn",{staticClass:"on-right",attrs:{disabled:t.$v.account.$invalid||t.loading,color:"primary"},on:{click:t.createAccount}},[t._v("Create")])],1)],1)},o=[],a={render:c,staticRenderFns:o};e.a=a},196:function(t,e,n){var c=n(197);"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);n(181)("10217b28",c,!0)},197:function(t,e,n){e=t.exports=n(180)(void 0),e.push([t.i,".editAccount{padding:25px}",""])},198:function(t,e,n){"use strict";var c=n(9),o=n.n(c),a=n(182),i=n(4);e.a={components:{AccountForm:a.default,QBtn:i.c,QModal:i.A},props:["account"],data:function(){return{editAccount:o()({},this.account),loading:!1}},methods:{updateAccount:function(){var t=this;this.loading=!0,this.axios.put("/admin/accounts/"+this.account.id,this.editAccount).then(function(e){t.$emit("accountUpdated",e.data),i.O.create.positive({html:"Account updated"})},function(t){i.O.create.negative({html:t.response.data.error})}),this.loading=!1},cancelUpdate:function(){this.$emit("cancelUpdate")}}}},199:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.account?n("div",[n("account-form",{attrs:{account:t.editAccount}},[n("div",{slot:"title"},[t._v("Edit "+t._s(t.account.name))]),n("div",{staticClass:"on-right",slot:"actions"},[n("q-btn",{on:{click:t.cancelUpdate}},[t._v("Cancel")]),n("q-btn",{staticClass:"on-right",attrs:{disabled:t.loading,color:"primary"},on:{click:t.updateAccount}},[t._v("Update")])],1)])],1):t._e()},o=[],a={render:c,staticRenderFns:o};e.a=a},208:function(t,e,n){var c=n(209);"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);n(181)("5b22afce",c,!0)},209:function(t,e,n){e=t.exports=n(180)(void 0),e.push([t.i,"",""])},210:function(t,e,n){"use strict";var c=n(20),o=n.n(c),a=n(183),i=n(184),r=n(4);e.a={components:{CreateAccount:a.default,EditAccount:i.default,QBtn:r.c,QDataTable:r.l,QIcon:r.q},data:function(){return{editingAccount:null,accounts:[],config:{rowHeight:"50px",title:"Accounts",noHeader:!1,refresh:!0,columnPicker:!0,leftStickyColumns:2,rightStickyColumns:1,responsive:!0,pagination:{rowsPerPage:10,options:[5,10,25,50]},messages:{noData:"No data available to show.",noDataAfterFiltering:"No results. Please refine your search terms."}},columns:[{label:"ID",field:"id",width:"30px",filter:!0,sort:!0,type:"number"},{label:"Name",field:"name",width:"120px",filter:!0,sort:!0,type:"string"},{label:"Email",field:"email",width:"120px",filter:!0,sort:!0,type:"string"},{label:"Admin",field:"roles",width:"25px",sort:function(t,e){var n=t.includes("admin"),c=e.includes("admin");return n===c?0:c-n},type:"boolean"},{label:"Active",field:"active",width:"25px",sort:!0,type:"boolean"},{label:"Actions",field:"action",width:"100px"}]}},methods:{refresh:function(t){this.fetchAccounts().then(function(){t()},function(){t()})},selection:function(t,e){},rowClick:function(t){},someRowAction:function(t){},fetchAccounts:function(){var t=this;return new o.a(function(e,n){t.axios.get("/admin/accounts").then(function(n){t.accounts=n.data.accounts,e()},function(t){console.log(t.response.data),n(t)})})},addAccount:function(t){this.accounts.push(t)},removeAccount:function(t){this.accounts=this.accounts.filter(function(e){return e.id!==t.id})},editAccount:function(t){this.editingAccount=t},cancelUpdate:function(){this.editingAccount=null},updateAccount:function(t){console.log("update account",t),null===t?this.editAccount=null:(this.accounts=this.accounts.filter(function(e){return e.id!==t.id}),this.accounts.push(t),this.editingAccount=null)},deleteAccount:function(t){var e=this;r.a.create({title:"Confirm Delete Account",message:"Are you sure you want to delete account "+t.name,buttons:["Cancel",{label:"Delete Account",handler:function(){e.axios.delete("/admin/accounts/"+t.id).then(function(n){r.O.create.positive({html:"Account Deleted"}),e.removeAccount(t)},function(t){r.O.create.negative({html:t.response.data.error})})}}]})}},mounted:function(){this.fetchAccounts()}}},211:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-padding"},[t.editingAccount?t._e():n("create-account",{on:{accountCreated:t.addAccount}}),t.editingAccount?n("edit-account",{attrs:{account:t.editingAccount},on:{accountUpdated:t.updateAccount,cancelUpdate:t.cancelUpdate}}):t._e(),n("q-data-table",{attrs:{data:t.accounts,config:t.config,columns:t.columns},on:{refresh:t.refresh,selection:t.selection,rowclick:t.rowClick},scopedSlots:t._u([{key:"col-roles",fn:function(e){return[e.data.includes("admin")?n("q-icon",{staticClass:"text-positive",staticStyle:{"font-size":"25px"},attrs:{name:"supervisor_account"}}):t._e()]}},{key:"col-active",fn:function(t){return[t.data?n("q-icon",{staticClass:"text-positive",staticStyle:{"font-size":"25px"},attrs:{name:"done"}}):n("q-icon",{staticClass:"text-negative",staticStyle:{"font-size":"25px"},attrs:{name:"not_interested"}})]}},{key:"col-action",fn:function(e){return[n("q-btn",{attrs:{small:"small",color:"negative"},on:{click:function(n){t.deleteAccount(e.row)}}},[t._v("Del")]),n("q-btn",{staticClass:"on-right",attrs:{small:"small",color:"primary"},on:{click:function(n){t.editAccount(e.row)}}},[t._v("Edit")])]}}])})],1)},o=[],a={render:c,staticRenderFns:o};e.a=a}});