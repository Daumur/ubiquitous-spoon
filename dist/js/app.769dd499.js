(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],d=0,v=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"3e3e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Article"},[s("h1",{staticClass:"subheading grey--text"},[t._v("Article")]),s("v-snackbar",{attrs:{timeout:4e3,top:"",color:"#000000"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[s("span",[t._v("Ajout réussi")]),s("v-btn",{attrs:{color:"#FF0000"},on:{click:function(e){t.snackbar=!1}}},[t._v("Fermer")])],1),s("v-snackbar",{attrs:{timeout:4e3,top:"",color:"#000000"},model:{value:t.snackbar2,callback:function(e){t.snackbar2=e},expression:"snackbar2"}},[s("span",[t._v("Suppression réussi")]),s("v-btn",{attrs:{color:"#FF0000"},on:{click:function(e){t.snackbar2=!1}}},[t._v("Fermer")])],1),s("v-container",{staticClass:"my-5"},[s("v-expansion-panels",{attrs:{accordion:""}},t._l(t.myProjects,function(e){return s("v-expansion-panel",{key:e.title},[s("v-expansion-panel-header",[t._v(t._s(e.title))]),s("v-expansion-panel-content",{staticClass:"grey--text"},[s("div",{staticClass:"font-weight-bold"},[t._v("Par "+t._s(e.person))]),s("div",{staticClass:"font-weight-bold"},[t._v("Depuis le "+t._s(e.date))]),s("div",[t._v(t._s(e.content))])])],1)}),1)],1),s("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({staticClass:"success",attrs:{color:"#FF0000",text:""}},a),[t._v("Ajouter nouvel article")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",{attrs:{elevation:"24"}},[s("v-card-title",[s("h2",[t._v("Ajouter un nouvel article")])]),s("v-form",{ref:"form",staticClass:"px-3"},[s("v-text-field",{attrs:{label:"Title","prepend-icon":"mdi-folder",rules:t.inputRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),s("v-textarea",{attrs:{label:"Description","prepend-icon":"mdi-pen",rules:t.inputRules},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),s("v-spacer"),s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-text-field",t._g({attrs:{label:"Date de création","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.due,callback:function(e){t.due=e},expression:"due"}},a))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[s("v-date-picker",{attrs:{color:"#203DD1"},on:{input:function(e){t.menu1=!1}},model:{value:t.due,callback:function(e){t.due=e},expression:"due"}})],1),s("v-select",{attrs:{"prepend-icon":"mdi-circle",items:t.stats,"menu-props":{top:!0,offsetY:!0},label:"Statut"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),s("v-btn",{staticClass:"success mx-0 mt-3",attrs:{color:"#59D120",loading:t.loading},on:{click:t.submit}},[t._v("Ajout article")])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({staticClass:"success",attrs:{color:"#FF0000",text:""}},a),[t._v("Supprimer un article")])]}}]),model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[s("v-card",{attrs:{elevation:"24"}},[s("v-card-title",[s("h2",[t._v("Suppression d'article")])]),s("v-form",{ref:"form",staticClass:"px-3"},[s("v-text-field",{attrs:{label:"ID","prepend-icon":"mdi-folder",rules:t.outputRules},model:{value:t.ID,callback:function(e){t.ID=e},expression:"ID"}}),s("v-btn",{staticClass:"success mx-0 mt-3",attrs:{color:"#FF0000"},on:{click:t.del}},[t._v("Suppr article")])],1)],1)],1)],1)},i=[],o={data(){return{projects:[],status:"ongoing",stats:["ongoing","overdue","complete"],due:(new Date).toISOString().substr(0,10),menu1:!1,title:"",content:"",ID:"",inputRules:[t=>t.length>=3||"Minimum 3 caractère"],outputRules:[t=>t.length>=2||"Veuillez selectionner une ligne"],loading:!1,dialog:!1,dialog2:!1,snackbar:!1,snackbar2:!1}},created(){this.fetchEventsList(),this.timer=setInterval(this.fetchEventsList,1e9)},methods:{async submit(){if(this.$session.id()){if("Admin"!==this.$session.get("username"))this.msgStatus="Vous devez être administrateur afin de rajouter un article",alert(this.msgStatus);else if(this.$refs.form.validate()){this.loading=!0;try{var t=this.$session.get("username");const o=await this.axios.post("http://localhost:4000/api/article",{title:this.title,person:t,date:this.due,status:this.status,content:this.content});this.snackbar=!0,this.loading=!1,this.dialog=!1,this.titre=o.data.title,console.log(this.titre),this.character=o.data.person,console.log(this.character);var e=o.data.date;console.log(e);var s=o.data.status;console.log(s);var a=o.data.content;console.log(a);const n=await this.axios.get("http://localhost:4000/api/article");this.$session.set("article",n.data),this.projects=this.$session.get("article")}catch(i){this.error=i.response.data.message,console.log("response",JSON.stringify(i.response))}}}else this.msgStatus="Connexion inexistante",alert(this.msgStatus)},async del(){if(this.$session.id())if("Admin"!==this.$session.get("username"))this.msgStatus="Vous devez être administrateur afin de supprimer un article",alert(this.msgStatus);else try{await this.axios.post("http://localhost:4000/api/suprarticle",{ID:this.ID}),this.snackbar2=!0;const e=await this.axios.get("http://localhost:4000/api/article");this.$session.set("article",e.data),this.projects=this.$session.get("article")}catch(t){this.error=t.response.data.message,console.log("response",JSON.stringify(t.response))}else this.msgStatus="Connexion inexistante",alert(this.msgStatus);this.dialog2=!1},async fetchEventsList(){if(this.$session.id()){const t=await this.axios.get("http://localhost:4000/api/article");this.$session.set("article",t.data),this.projects=this.$session.get("article")}else;}},computed:{myProjects(){return this.projects.filter(t=>{return t.person})}}},n=o,r=s("2877"),l=s("6544"),c=s.n(l),u=s("8336"),d=s("b0af"),v=s("99d9"),p=s("a523"),m=s("2e4b"),h=s("169a"),f=s("cd55"),g=s("49e2"),b=s("c865"),x=s("0393"),_=s("4bd4"),y=s("e449"),w=s("b974"),V=s("2db4"),k=s("2fa4"),S=s("8654"),C=s("a844"),$=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=$.exports;c()($,{VBtn:u["a"],VCard:d["a"],VCardTitle:v["b"],VContainer:p["a"],VDatePicker:m["a"],VDialog:h["a"],VExpansionPanel:f["a"],VExpansionPanelContent:g["a"],VExpansionPanelHeader:b["a"],VExpansionPanels:x["a"],VForm:_["a"],VMenu:y["a"],VSelect:w["a"],VSnackbar:V["a"],VSpacer:k["a"],VTextField:S["a"],VTextarea:C["a"]})},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("v-toolbar"),s("router-view"),s("v-container",{staticClass:"fill-height"},[s("v-row",{attrs:{align:"center",justify:"center"}})],1),s("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list-item",[s("v-list-item-avatar",[s("v-img",{attrs:{src:"https://wir.skyrock.net/wir/v1/profilcrop/?c=mog&w=301&h=301&im=%2Fbig.124165283.jpg"}})],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(t.username))])],1)],1),s("v-divider"),s("v-list",{attrs:{dense:""}},t._l(t.items,function(e){return s("v-list-item",{key:e.title,attrs:{link:"",router:"",to:e.route}},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}),1)],1),s("v-app-bar",{attrs:{absolute:"",fixed:"",color:"#fcb69f",dark:"",src:"https://picsum.photos/1920/1080?random"}},[s("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),s("v-toolbar-title",[t._v("HyperSiteConsulting")]),s("div",{staticClass:"flex-grow-1"}),s("v-spacer"),s("router-link",{attrs:{to:"/login"}},[s("v-btn",{attrs:{color:"#FF0000"}},[s("span",[t._v("Sign in")]),s("v-icon",{attrs:{right:"",color:"#00000"}},[t._v("mdi-login")])],1)],1),s("router-link",{attrs:{to:"/register"}},[s("v-btn",{attrs:{color:"#FF0000"}},[s("span",[t._v("Register")]),s("v-icon",{attrs:{right:"",color:"#00000"}},[t._v("mdi-account-plus")])],1)],1),s("router-link",{attrs:{to:"/about"}},[s("v-btn",{attrs:{color:"#FF0000"},on:{click:t.logout}},[s("span",[t._v("Sign out")]),s("v-icon",{attrs:{right:"",color:"#00000"}},[t._v("mdi-logout")])],1)],1)],1),s("v-footer",{attrs:{absolute:""}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("\n      "+t._s((new Date).getFullYear())+" —\n      "),s("strong",[t._v("HyperSiteConsulting")])])],1)],1)},o=[],n={data(){return{activeBtn:1,offsetTop:0,username:this.$session.get("username"),out:!0,visi:!0,showNav:!0,drawer:!1,items:[{title:"About",icon:"mdi-help-box",route:"/about"},{title:"Home",icon:"mdi-home",route:"/home"},{title:"Article",icon:"mdi-book",route:"/article"}]}},created(){this.fetchEventsList(),this.timer=setInterval(this.fetchEventsList,10)},methods:{async logout(){var t=this.$session.get("ID");console.log(t),this.$session.destroy(),this.username=""},async fetchEventsList(){this.username=this.$session.get("username")}}},r=n,l=s("2877"),c=s("6544"),u=s.n(c),d=s("40dc"),v=s("5bc1"),p=s("8336"),m=s("62ad"),h=s("a523"),f=s("ce7e"),g=s("553a"),b=s("132d"),x=s("adda"),_=s("8860"),y=s("da13"),w=s("8270"),V=s("5d23"),k=s("34c3"),S=s("f774"),C=s("0fd9"),$=s("2fa4"),j=s("71d9"),F=s("2a7f"),L=Object(l["a"])(r,i,o,!1,null,null,null),T=L.exports;u()(L,{VAppBar:d["a"],VAppBarNavIcon:v["a"],VBtn:p["a"],VCol:m["a"],VContainer:h["a"],VDivider:f["a"],VFooter:g["a"],VIcon:b["a"],VImg:x["a"],VList:_["a"],VListItem:y["a"],VListItemAvatar:w["a"],VListItemContent:V["a"],VListItemIcon:k["a"],VListItemTitle:V["b"],VNavigationDrawer:S["a"],VRow:C["a"],VSpacer:$["a"],VToolbar:j["a"],VToolbarTitle:F["a"]});var I=s("f309");a["a"].use(I["a"]);var O=new I["a"]({icons:{iconfont:"mdi"}}),E=s("bc3a"),D=s.n(E),P=s("8c4f"),A=s("a7fe"),N=s.n(A),R=s("0628"),B=s.n(R),q=s("7207"),H=s.n(q);a["a"].config.productionTip=!1,a["a"].use(O),a["a"].use(N.a,D.a),a["a"].use(P["a"]),a["a"].use(H.a),a["a"].use(B.a);const J=[{path:"/home",name:"Home",component:s("57da").default},{path:"/login",name:"Login",component:s("b7cc").default},{path:"/about",name:"About",component:s("a794").default},{path:"/register",name:"Register",component:s("e932").default},{path:"/article",name:"Article",component:s("3e3e").default},{path:"/todo",name:"ToDo",component:s("643f").default},{path:"/",name:"about",component:s("a794").default},{path:"*",redirect:"/about"}],M=new P["a"]({routes:J,mode:"history"});new a["a"]({router:M,vuetify:O,render:t=>t(T)}).$mount("#app")},"57da":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Home"},[s("h1",[t._v("Home")]),s("v-container",{staticClass:"my-5"},[s("v-layout",{staticClass:"mb-3",attrs:{row:""}},[s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({attrs:{small:"",color:"grey"},on:{click:function(e){return t.sortBy("title")}}},a),[s("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-folder")]),s("span",{staticClass:"caption text-lowercase"},[t._v("Par nom d'article")])],1)]}}])},[s("span",[t._v("Trier article par nom d'article")])])],1),s("br"),t._l(t.articles,function(e){return s("v-card",{key:e.title,attrs:{flat:"",elevation:0}},[s("v-layout",{class:"pa-3 article "+e.status,attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Titre article")]),s("div",[t._v(t._s(e.title))])]),s("v-flex",{attrs:{xs6:"",md2:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Edtiter par")]),s("div",[t._v(t._s(e.person))])]),s("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Depuis le")]),s("div",[t._v(t._s(e.date))])]),s("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[s("br"),s("div",{staticClass:"right"},[s("v-chip",{class:"v-chip--active white--text caption my-2",attrs:{small:"",color:""+e.status}},[t._v(t._s(e.status))])],1)])],1),s("br"),s("v-divider")],1)})],2)],1)},i=[],o={data(){return{articles:[]}},created(){this.fetchEventsList(),this.timer=setInterval(this.fetchEventsList,1e9)},methods:{async sortBy(t){this.articles.sort((e,s)=>e[t]<s[t]?-1:1)},async fetchEventsList(){if(this.$session.id()){const t=await this.axios.get("http://localhost:4000/api/article");this.$session.set("article",t.data),this.articles=this.$session.get("article")}else;}}},n=o,r=(s("8b71"),s("2877")),l=s("6544"),c=s.n(l),u=s("8336"),d=s("b0af"),v=s("cc20"),p=s("a523"),m=s("ce7e"),h=s("0e8f"),f=s("132d"),g=s("a722"),b=s("3a2f"),x=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=x.exports;c()(x,{VBtn:u["a"],VCard:d["a"],VChip:v["a"],VContainer:p["a"],VDivider:m["a"],VFlex:h["a"],VIcon:f["a"],VLayout:g["a"],VTooltip:b["a"]})},"643f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"todo"}},[s("br"),s("br"),s("br"),s("v-container",[s("v-layout",{attrs:{"text-center":"",wrap:""}},[s("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Content",required:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),s("v-col",[s("v-btn",{on:{click:t.addTodo}},[t._v("Ajouter")]),s("br"),s("br"),t._l(t.todoList,function(e){return s("li",{key:e.id},[s("p",{attrs:{align:"left"}},[t._v("\n                  Title : "+t._s(e.title)+"\n                  "),s("br"),t._v("\n                  content :"+t._s(e.content)+"\n                ")]),s("br"),s("br"),s("v-btn",{on:{click:t.delTodo}},[t._v("Supprimer")]),s("br"),s("br")],1)})],2)],1)],1)],1)],1)],1)],1)},i=[],o={data:()=>({valid:!1,title:"",content:"",todoList:[]}),methods:{addTodo(){this.todoList.push({title:this.title,content:this.content}),console.log(JSON.stringify(this.todoList)),this.newTodolist=""},delTodo(t){const e=this.todoList.indexOf(t);this.todoList.splice(e,1),console.log(JSON.stringify(this.todoList))}}},n=o,r=s("2877"),l=s("6544"),c=s.n(l),u=s("8336"),d=s("62ad"),v=s("a523"),p=s("4bd4"),m=s("a722"),h=s("0fd9"),f=s("8654"),g=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=g.exports;c()(g,{VBtn:u["a"],VCol:d["a"],VContainer:v["a"],VForm:p["a"],VLayout:m["a"],VRow:h["a"],VTextField:f["a"]})},"8b71":function(t,e,s){"use strict";var a=s("d944"),i=s.n(a);i.a},a794:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Présentaiton"}},[s("h2",{staticClass:"subheading grey--text"},[t._v("PRÉSENTATION")]),s("br"),s("v-container",[t._v("\n    Ce site à pour but de présenter, trier et comptabiliser nos créations.\n    "),s("br"),s("br"),t._v("Nous publierons sur ce site toutes nos créations référencées dans des catégories afin d’avoir un véritable catalogue.\n    Les créations sont diverses et variées. Il s’agit d’objet en tout genre issue de notre imagination ou de la pop culture.\n    Nous essayerons de favoriser l’utilitaire avec des objets tel que des sacs ou des vêtements résistant pour toute sorte d’expédition.\n    "),s("br"),s("br"),t._v("Perspective d’avenir :\n    "),s("br"),s("br"),t._v("Si l’utilisation de ce site nous avantage dans notre travail, nous pourrions envisager de l’optimiser afin de vendre nos produits directement via le site.\n  ")])],1)},i=[],o={data(){return{}}},n=o,r=s("2877"),l=s("6544"),c=s.n(l),u=s("a523"),d=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=d.exports;c()(d,{VContainer:u["a"]})},b7cc:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{"text-center":"",wrap:""}},[s("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"User",required:""},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),s("v-btn",{on:{click:t.login}},[t._v("Connexion")])],1)],1),s("router-view")],1)],1)},i=[],o={data:()=>({valid:!1,user:"",password:"",msgStatus:"",todos:[]}),methods:{async login(){if(""===this.password||""===this.user)console.log("empty"),this.msgStatus="Nom et mot de passe requis !",alert(this.msgStatus);else if(this.$session.id())this.msgStatus="Un utilisateur est déjà connecté",alert(this.msgStatus);else try{const s=await this.axios.post("http://localhost:4000/api/login",{username:this.user,password:this.password,userId:this.$session.id()});this.$session.start();const a=await this.axios.get("http://localhost:4000/api/article");this.$session.set("article",a.data),this.$session.set("username",s.data.username),this.$session.set("email",s.data.email),this.$session.set("ID",s.data.ID);var t=this.$session.id();console.log(t),console.log("Logged !"),this.$router.push("Home")}catch(e){this.error=e.response.data.message,console.log("response",JSON.stringify(e.response)),this.msgStatus="Nom ou mot de passe incorrect !",alert(this.msgStatus)}}}},n=o,r=s("2877"),l=s("6544"),c=s.n(l),u=s("8336"),d=s("62ad"),v=s("a523"),p=s("4bd4"),m=s("a722"),h=s("0fd9"),f=s("8654"),g=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=g.exports;c()(g,{VBtn:u["a"],VCol:d["a"],VContainer:v["a"],VForm:p["a"],VLayout:m["a"],VRow:h["a"],VTextField:f["a"]})},d944:function(t,e,s){},e932:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-md-center"},[s("h2",[t._v("Register")]),s("v-layout",[s("v-flex",{attrs:{xs6:"","offset-xs3":""}},[s("v-card",[s("v-card-text",[s("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("v-text-field",{attrs:{label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("v-btn",{staticClass:"mb-3",attrs:{success:""},on:{click:t.addElement}},[t._v("Register")])],1)],1)],1),s("router-view")],1)},i=[],o={data:()=>({valid:!1,username:"",password:"",email:"",msgStatus:"",todos:[]}),methods:{async addElement(){if(console.log(this.username),console.log(this.password),console.log(this.email),""===this.password||""===this.username)console.log("empty"),this.msgStatus="Nom, mot de passe ainsi que mail est necessaire !!",alert(this.msgStatus);else if(this.$session.id())this.msgStatus="Un utilisateur est déjà connecté",alert(this.msgStatus);else try{const e=await this.axios.post("http://localhost:4000/api/addElement",{username:this.username,password:this.password,email:this.email});this.info=e.data.username,console.log("ajouté !"),this.msgStatus=this.username+" votre compte à bien été crée !",console.log(this.msgStatus),alert(this.msgStatus),this.$router.push("Home")}catch(t){this.error=t.response.data.message,console.log("response",JSON.stringify(t.response))}}}},n=o,r=s("2877"),l=s("6544"),c=s.n(l),u=s("8336"),d=s("b0af"),v=s("99d9"),p=s("0e8f"),m=s("a722"),h=s("8654"),f=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=f.exports;c()(f,{VBtn:u["a"],VCard:d["a"],VCardText:v["a"],VFlex:p["a"],VLayout:m["a"],VTextField:h["a"]})}});
//# sourceMappingURL=app.769dd499.js.map