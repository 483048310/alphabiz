(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticStyle:{height:"100%"},attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),i("q-toolbar-title",[t._v("\n        Alphabiz\n      ")]),i("div",{attrs:{id:"version"}},[t._v("v"+t._s(t.appVersion))]),i("div",{attrs:{id:"commit"}},[t._v("("+t._s(t.appCommit)+")")])],1)],1),i("q-drawer",{ref:"drawer",attrs:{"show-if-above":"",bordered:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",[i("div",{staticClass:"q-mt-xl"}),t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.title,attrs:{currentTab:t.currentTab,path:t.path},on:{trigger:t.setTab}},"EssentialLink",e,!1))}))],2),i("corner")],1),i("q-page-container",{staticStyle:{height:"100%","padding-bottom":"0"}},[i("keep-alive",{attrs:{include:"Player,Index"}},[i("router-view",{attrs:{currentTab:t.currentTab},on:{changeTab:t.setTab,updateTaskNum:t.updateTaskNum,updateLoadingStatus:t.updateLoadingStatus}})],1)],1)],1)},a=[],s=(i("ddb0"),i("9224")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.children&&0!=t.children.length?t.children.length>0?i("div",[i("q-expansion-item",{attrs:{"expand-separator":"",icon:t.icon,label:t.title,caption:t.caption,"default-opened":"/"===t.link}},t._l(t.children,(function(e){return i("EssentialLink",t._b({key:e.title,attrs:{level:.5,currentTab:t.currentTab,path:t.path},on:{trigger:t.onTrigger}},"EssentialLink",e,!1))})),1)],1):t._e():i("div",[i("q-item",{attrs:{clickable:"","inset-level":t.level,active:t.isActive},on:{click:t.onClick}},[t.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1):t._e(),i("q-item-section",[i("q-item-label",[t._v(t._s(t.title))]),i("q-item-label",{attrs:{caption:""}},[t._v("\n        "+t._s(t.caption)+"\n      ")])],1),t.loading?i("q-item-section",{attrs:{side:""}},[i("q-circular-progress",{staticClass:"loading-progress",attrs:{indeterminate:"",size:"24px",thickness:.25,color:"primary","center-color":"transparent","track-color":"transparent"}})],1):t._e()],1)],1)},r=[],c={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},level:{type:Number,default:0},trigger:{type:String,default:""},currentTab:{type:String,default:""},path:{type:String,default:"/"},loading:{type:Boolean,default:!1},children:[]},computed:{isActive(){const t=this.path;return"/"!==t?t===this.link:this.currentTab===this.trigger}},methods:{onClick(){this.$emit("trigger",this.trigger),this.$router.push(this.link)},onTrigger(t){this.$emit("trigger",t)}}},l=c,u=(i("97b3"),i("2877")),d=i("66e5"),p=i("4074"),h=i("0016"),m=i("0170"),g=i("58ea"),b=i("3b73"),_=i("eebe"),v=i.n(_),f=Object(u["a"])(l,o,r,!1,null,"122c6df8",null),k=f.exports;v()(f,"components",{QItem:d["a"],QItemSection:p["a"],QIcon:h["a"],QItemLabel:m["a"],QCircularProgress:g["a"],QExpansionItem:b["a"]});var $=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"corner absolute-bottom",on:{click:t.handleClick}},["signedIn"===t.$store.state.account.authState?i("corner-menu",{on:{signOut:t.signOut,invite:t.invite}}):t._e(),i("q-item",{staticStyle:{height:"65px"},attrs:{clickable:"",exact:!0}},[t.$store.state.account.authState?[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"account_circle"}})],1),i("q-item-section",[i("q-item-label",[t._v(t._s(t.title))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)]:[i("q-item-section",{attrs:{avatar:""}},[i("q-spinner",{staticClass:"q-mr-xs q-mb-xs",attrs:{size:"24px"}})],1),i("q-item-section",[i("span",{staticClass:"q-pr-lg"},[t._v(t._s(t.$t("account_loading")))])])]],2)],1)},q=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-menu",{attrs:{"auto-close":"","touch-position":"","transition-show":"jump-up","transition-hide":"jump-down"}},[i("q-list",{staticClass:"corner-menu__list",staticStyle:{"min-width":"160px"}},[i("q-item",{attrs:{clickable:""}},[i("q-item-section",{attrs:{"data-cy":"account-settings-btn"},on:{click:function(e){return t.$router.push("/account/settings")}}},[t._v("\n        "+t._s(t.$t("account_account_setting"))+"\n      ")])],1),i("q-separator"),t.showInvite?i("q-item",{attrs:{clickable:""}},[i("q-item-section",{attrs:{"data-cy":"invite-btn"},on:{click:function(e){return t.$emit("invite")}}},[t._v(t._s(t.$t("account_invitation")))])],1):t._e(),i("q-separator"),i("q-item",{attrs:{clickable:""}},[i("q-item-section",{attrs:{"data-cy":"sign-out-btn"},on:{click:function(e){return t.$emit("signOut")}}},[t._v(t._s(t.$t("account_sign_out"))+"\n      ")])],1)],1)],1)},S=[],y={name:"CornerMenu",computed:{showInvite(){return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.findIndex((t=>0===t.invitation_state))>=0}}},Q=y,T=i("4e73"),I=i("1c1c"),L=i("eb85"),C=Object(u["a"])(Q,w,S,!1,null,null,null),O=C.exports;v()(C,"components",{QMenu:T["a"],QList:I["a"],QItem:d["a"],QItemSection:p["a"],QSeparator:L["a"]});var x=i("48f4"),N={name:"Corner",components:{CornerMenu:O},computed:{info(){return"signedIn"===this.$store.state.account.authState?this.$store.getters.accountUserInfo:null},title(){return this.info?this.info.nickname?this.info.nickname:this.info.emailVerified?this.info.email.split("@")[0]:this.info.phoneNumberVerified?this.info.phoneNumber:"???":this.$t("account_want_to_join")},caption(){return this.info?`Lv. ${this.info.accountLevel}`:this.$t("account_sign_up_now")}},methods:{handleClick(){const t=this.$store.state.account.authState;t&&"signedIn"!==t&&this.$amplify.showSignedOutDialog()},signOut(){x["g"].showPositive("signed_out"),x["d"].updateState("signedOut"),(this.$route.path.startsWith("/account")||this.$route.path.startsWith("/credits"))&&this.$router.push("/"),x["d"].signOut().catch((()=>{}))},invite(){this.$router.push({path:"/account/settings",query:{call:"invite"}})}}},E=N,j=(i("b5b4"),i("0d59")),D=Object(u["a"])(E,$,q,!1,null,"0362d524",null),M=D.exports;v()(D,"components",{QItem:d["a"],QItemSection:p["a"],QIcon:h["a"],QItemLabel:m["a"],QSpinner:j["a"]});const P=i("ebd6").commit;var V={name:"MainLayout",components:{Corner:M,EssentialLink:k},data(){return{currentTab:"downloading",leftDrawerOpen:!1,appVersion:s["a"],appCommit:P,path:"/",drawer:null,taskNum:{downloading:0,uploading:0,downloaded:0},loadingStatus:{uploading:!1}}},computed:{essentialLinks(){this.$i18n.locale;const t="signedIn"!==this.$store.state.account.authState?[]:[{title:this.$t("account_account_setting"),icon:"account_circle",link:"/account/settings",caption:this.$t("account_setting_caption")}];return[{title:this.$t("home"),caption:this.$t("home_caption"),icon:"home",link:"/",children:[{title:this.$t("downloading")+` (${this.taskNum.downloading})`,icon:"file_download",link:"/",trigger:"downloading"},{title:this.$t("uploading")+` (${this.taskNum.uploading})`,icon:"file_upload",link:"/",trigger:"uploading",loading:this.loadingStatus.uploading},{title:this.$t("downloaded")+` (${this.taskNum.downloaded})`,icon:"done",link:"/",trigger:"downloaded"}]},{title:this.$t("player"),caption:this.$t("player_caption"),icon:"play_circle_filled",link:"/player"},{title:this.$t("credits"),caption:this.$t("credits_caption"),icon:"savings",link:"/credits"},{title:this.$t("settings"),caption:this.$t("settings_caption"),icon:"settings",children:[...t,{title:this.$t("basic"),icon:"assignment",link:"/settings",caption:this.$t("basic_caption")},{title:this.$t("advanced"),icon:"build",link:"/advancedSettings",caption:this.$t("advanced")}]},{title:this.$t("development"),caption:this.$t("development_caption"),icon:"developer_mode",link:"/development"}]}},methods:{setTab(t){t&&(this.currentTab=t,this.$refs.drawer.belowBreakpoint&&this.$refs.drawer.hide())},updateTaskNum(t){Object.assign(this.taskNum,t)},updateLoadingStatus(t){Object.assign(this.loadingStatus,t)}},watch:{$route(t){this.path=t.path}}},z=V,A=(i("89d3"),i("4d5a")),B=i("e359"),J=i("65c6"),H=i("9c40"),W=i("6ac5"),F=i("9404"),U=i("09e3"),G=Object(u["a"])(z,n,a,!1,null,null,null);e["default"]=G.exports;v()(G,"components",{QLayout:A["a"],QHeader:B["a"],QToolbar:J["a"],QBtn:H["a"],QToolbarTitle:W["a"],QDrawer:F["a"],QList:I["a"],QItemLabel:m["a"],QPageContainer:U["a"]})},"86a6":function(t,e,i){},"89d3":function(t,e,i){"use strict";i("e87e")},"97b3":function(t,e,i){"use strict";i("c8e9")},b5b4:function(t,e,i){"use strict";i("86a6")},c8e9:function(t,e,i){},e87e:function(t,e,i){},ebd6:function(t){t.exports=JSON.parse('{"commit":"2322874"}')}}]);