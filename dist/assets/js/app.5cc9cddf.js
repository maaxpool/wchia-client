(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],m=0,l=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"assets/js/"+({}[e]||e)+"."+{"chunk-1ad0f453":"1fb26843","chunk-2d208298":"3adadd89","chunk-40792496":"ecf245d3","chunk-88243c50":"52dab803","chunk-dd4c2cfc":"c3221688"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1ad0f453":1,"chunk-40792496":1,"chunk-88243c50":1,"chunk-dd4c2cfc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-1ad0f453":"97968a68","chunk-2d208298":"31d6cfe0","chunk-40792496":"cdefd6f7","chunk-88243c50":"077e4bf7","chunk-dd4c2cfc":"64271bdf"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],m=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(m===r||m===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],m=u.getAttribute("data-href");if(m===r||m===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,m=document.createElement("script");m.charset="utf-8",m.timeout=120,s.nc&&m.setAttribute("nonce",s.nc),m.src=c(e);var l=new Error;u=function(t){m.onerror=m.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:m})}),12e4);m.onerror=m.onload=u,document.head.appendChild(m)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],m=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=m;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1172:function(e,t,n){"use strict";n("a18c");function r(e,t){e.$router.push({name:"home"});var n=document.querySelector("#"+t);if(n){var r=n.offsetTop;document.documentElement.scrollTop=r}}t["a"]=r},1294:function(e,t,n){},"31a3":function(e,t,n){"use strict";n("ab29")},3268:function(e,t,n){},"3fab":function(e,t,n){"use strict";n.r(t),t["default"]={public:{fee:"Fee",send:"send",cancel:"Cancel",item1Name:"Check transaction",placeholder1:"Please input",placeholder2:"Please select",nodata:"No Data",check:"Check Details",minimunQuantity:"Minimum exchange"},msg:{require:"{val} is required",rational:"please input the rational"},navs:{item1:"About Broker",item2:"Exchange WXCH",item3:"Exchange XCH",item4:"Historical transaction",item5:"Connect Us",btn1:"Sign Up",dropDownItem1:"setting",dropDownItem2:"Sign out"},footer:{lpart:{item1:"WXCH is the first ERC20 tokenbacked 1:1 with Chia",item2:"If you need help, please contact"},rpart:{item1:""}},msgs:{},home:{block1:{title:"Transparency and security ensures trust",content:"The greatest concern of moving assets across a chain via a bridge is trust built on top of security.  In order to establish such trust, we are taking the following measures: 1)to have a public audited smartcontract and have the source code open to the public; 2) to be transparent with our services and ourmotivations and 3) to have multisig custodian services. By doing so, when you convert one XCH to WXCH,your proof of reserve is on-chain, there will be only one WXCH to be minted, and the WXCH will be burnedwhen the XCH token is redeemed.",button:"Connect Wallet"},block2:{title:"About Broker",subTitle:"You will see the basic information of Broker to help you trade better.",item1Name:"Broker’s Name",item1Desc:"",item2Name:"Broker’s ChiaWallet Address",item2Desc:"",item3Name:"Broker’s Ethereumaddress for WXCH",item3Desc:""},block3:{title:"EXCHANGE WXCH",subTitle:"You can convert XCH to WXCH, which can increase the liquidity of Chia token.",item1Name:"Send XCH",item2Name:"Exchange WXCH",item3Name:"Fee",item4Name:"Receiving  WXCH address",btn1:"Redeem WXCH now"},block4:{title:"EXCHANGE XCH",subTitle:"You can exchange WXCH back to XCH to your Chia Wallet at any time.",item1Name:"Send WXCH",item2Name:"Exchange XCH",item3Name:"XCH address",btn1:"Exchange back to XCH"},block5:{title:"Historical transaction",item1:"Cumulative exchange WXCH",item2:"Cumulative exchange XCH",tab1:"Exchange WXCH",tab2:"Exchange XCH",cell1:"Transaction Time",cell2:"Quantity",cell3:"Sending address",cell4:"Receiving address",cell5:"Result",tbHandler:"Check details",status:{created:"created",xch_transferred:"xch_transferred",wxch_transferring:"wxch_transferring",finished:"finished",closed:"closed",error:"error"}}},register:{pageTitle:"Create a WXCH account",subTitle:"WXCH is the first ERC20 tokenbacked 1:1 with Chia",item1Name:"ETH Wallet Address",item1Unit:"Connect Wallet",item2Name:"Contry",item2PlaceHold:"Please select",item3Name:"First name",item3Unit:"",item4Name:"Last name",item4Unit:"",item5Name:"Phone number",item5Unit:"",item5PlaceHold:"Please select",item6Name:"Address line",item6Unit:"",item7Name:"City",item8Name:"State",item9Name:"Zip code",item10Name:"Email address",extrItem1:"I confirm that the information I provided is accurate",btn1:"Register an account"},account:{pageTitle:"Account",subTitleItem1:"Balance of WXCH",subTitleItem2:"Balance of XCH",item1Name:"First name",item2Name:"Last name",item3Name:"Country",item4Name:"Phone number",item5Name:"Address line",item6Name:"City",item7Name:"State",item8Name:"Zip code",item9Name:"Email",item10Name:"Chia Wallet Address",item11Name:"ETH Wallet Address",btn1:"Preserve"},transDetail:{pageTitle:"Transaction Details",subTitleItem1:"Transaction Time:",subTitleItem2:"Result",subTitleItem3:"Fee:",item1Name:"Sending address",item2Name:"Receiving address",item3Name:"Quantity",item4Name:"Status",item5Name:"Transaction Hash",item6Name:"Ethereum transaction"}}},4115:function(e,t,n){"use strict";n("3268")},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=n("852e"),i=n.n(o),c={namespaced:!0,state:{provide:null,account:null,eth_sign:null,auth_msg:null},getters:{provide:function(e){return e.provide},account:function(e){return e.account},eth_sign:function(e){return e.eth_sign||i.a.get("ethereum_eth_sign")},auth_msg:function(e){return e.auth_msg||i.a.get("ethereum_auth_msg")}},mutations:{provide:function(e,t){e.provide=t},account:function(e,t){e.account=t},eth_sign:function(e,t){t&&i.a.set("ethereum_eth_sign",t,{expires:1}),e.eth_sign=t},auth_msg:function(e,t){t&&i.a.set("ethereum_auth_msg",t,{expires:1}),e.auth_msg=t}}},s={namespaced:!0,state:{conf:null,user:null,wxch_balance:0,xch_balance:0,balance_init:!1,wrap_amount:0,unwrap_amount:0,state_init:!1},getters:{conf:function(e){var t;return t=i.a.get("conf")?JSON.parse(i.a.get("conf")):e.conf||{},t},user:function(e){return!e.user&&i.a.get("user")&&(e.user=JSON.parse(i.a.get("user"))),"string"==typeof e.user?JSON.parse(e.user):e.user},balance:function(e){var t=e.wxch_balance,n=e.xch_balance,r=e.wrap_amount,a=e.unwrap_amount,o=e.state_init;return{wxch_balance:t,xch_balance:n,wrap_amount:r,unwrap_amount:a,state_init:o}}},mutations:{conf:function(e,t){i.a.set("conf",JSON.stringify(t),{expires:1}),e.conf=t},user:function(e,t){i.a.set("user",JSON.stringify(t),{expires:1}),e.user=t},balance:function(e,t){var n=t.wxch_amount,r=t.xch_amount;e.wxch_balance=n,e.xch_balance=r,e.balance_init=!0},comulative:function(e,t){var n=t.wrap_amount,r=t.unwrap_amount;e.wrap_amount=n,e.unwrap_amount=r,e.state_init=!0}}},u=n("f855"),m={namespaced:!0,state:{loadingWatcher:[]},getters:{loadingWatcher:function(e){return e.loadingWatcher}},mutations:{loadingWatcher:function(e,t){var n=t.nameArr,r=t.type,a=e.loadingWatcher;1==r&&(e.loadingWatcher=Object(u["a"])(a,n)),0==r&&(e.loadingWatcher=Object(u["b"])(a,n))}}},l={user:s,ethereum:c,situation:m};r["default"].use(a["a"]);var h=new a["a"].Store({modules:l});t["a"]=h},"51a4":function(e,t,n){"use strict";n("cdf3")},5553:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return s}));var r=n("1da1"),a=(n("d3b7"),n("96cf"),n("4360")),o=n("751a"),i=n("5c96"),c=function(){return a["a"].getters["user/user"]},s=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o["a"])("get_configure");case 3:t=e.sent,t&&t["success"]&&a["a"].commit("user/conf",t["msg"]),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(e){return new Promise((function(t,n){e||(console.error("Can not catch the $app"),n()),e.$metaMaskUtils.ethSign().then((function(){if(c()||!a["a"].getters["ethereum/account"])return!1;Object(o["a"])("get_user",{eth_address:a["a"].getters["ethereum/account"],eth_signature:a["a"].getters["ethereum/eth_sign"],auth_msg:String(a["a"].getters["ethereum/auth_msg"])}).then((function(e){if(e&&e["success"]){var n=e["msg"];a["a"].commit("user/user",n)}t()})).catch((function(e){Object(i["Message"])({showClose:!0,message:e.response.data.err_msg,type:"error"})}))})).catch((function(e){console.error(e)}))}))},m=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,s,u,m,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c()&&a["a"].getters["ethereum/account"]){e.next=2;break}return e.abrupt("return",!1);case 2:return e.prev=2,e.next=5,Object(o["a"])("balance",{eth_address:a["a"].getters["ethereum/account"],eth_signature:a["a"].getters["ethereum/eth_sign"],auth_msg:String(a["a"].getters["ethereum/auth_msg"])});case 5:return t=e.sent,n=t["msg"],r=n.wxch_amount,i=n.xch_amount,a["a"].commit("user/balance",{wxch_amount:r,xch_amount:i}),e.next=12,Object(o["a"])("transaction_stat",{eth_address:a["a"].getters["ethereum/account"]});case 12:s=e.sent,u=s["msg"],m=u.wrap_amount,l=u.unwrap_amount,a["a"].commit("user/comulative",{wrap_amount:m,unwrap_amount:l}),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](2),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}()},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),o=n.n(a),i=n("852e"),c=n.n(i),s=(n("1294"),n("a18c")),u=n("a925"),m=n("9923");function l(e,t){r["default"].use(u["a"]);var n={locale:e,fallbackLocale:t,silentFallbackWarn:!0,messages:Object(m["default"])()};return new u["a"](n)}var h=n("4360"),d=n("751a"),f=n("1da1"),p=(n("96cf"),n("ac1f"),n("466d"),n("159b"),n("d3b7"),n("b680"),n("4c41")),g=n.n(p);function b(e){this.web3Provider,this.account,this.initlization();var t={onChainChanged:function(){if(document.cookie){var e=document.cookie.match(/[^ =;]+(?=\=)/g);e.forEach((function(e){c.a.remove(e)}))}window.location.reload()},onDisconnect:function(e){}};e&&Object.assign(t,e),window.ethereum&&(ethereum.on("chainChanged",t["onChainChanged"]),ethereum.on("accountsChanged",t["onChainChanged"]),ethereum.on("disconnect",(function(e){t.onDisconnect(e),console.error(e)})))}function v(e){var t=h["a"].getters["ethereum/auth_msg"]?h["a"].getters["ethereum/auth_msg"]:JSON.stringify({timestamp:(Date.now()/36e5).toFixed(),space:e,type:"personal_sign"});return h["a"].commit("ethereum/auth_msg",t),t}b.prototype.initlization=Object(f["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g()();case 2:if(this.web3Provider=e.sent,h["a"].commit("ethereum/provide",this.web3Provider),!this.web3Provider){e.next=18;break}return e.prev=5,e.next=8,ethereum.request({method:"eth_requestAccounts"});case 8:t=e.sent,this.account=t[0],h["a"].commit("ethereum/account",this.account),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](5),this.showError(e.t0);case 16:e.next=20;break;case 18:console.error("Please install MetaMask!"),Object(a["Message"])({showClose:!0,message:"Please install MetaMask!",type:"error"});case 20:case"end":return e.stop()}}),e,this,[[5,13]])}))),b.prototype.getNetworkVersion=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ethereum.request({method:"eth_chainId"});case 2:return t=e.sent,e.next=5,ethereum.request({method:"net_version"});case 5:return n=e.sent,e.abrupt("return",{chainId:t,networkId:n});case 7:case"end":return e.stop()}}),e)}))),b.prototype.networkCheck=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getNetworkVersion();case 2:if(t=e.sent,3==t.networkId){e.next=8;break}return n="\n            Current network ".concat(t.networkId," not supported, \n            Please switch to one of the following: Rposten\n        "),Object(a["Message"])({showClose:!0,message:n,type:"error"}),console.error(n),e.abrupt("return",!1);case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e,this)}))),b.prototype.signCheck=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0==Boolean(h["a"].getters["ethereum/eth_sign"])||!Boolean(h["a"].getters["ethereum/auth_msg"])){e.next=4;break}return e.abrupt("return",!0);case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)}))),b.prototype.networkChanged=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:ethereum.on("chainChanged",(function(){ethereum.request({method:"eth_getBlockByNumber",params:["latest",!1]}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}));case 1:case"end":return e.stop()}}),e)}))),b.prototype.ethSign=function(){var e=this,t=v(this.account);return new Promise(function(){var n=Object(f["a"])(regeneratorRuntime.mark((function n(r,a){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.networkCheck();case 2:if(o=n.sent,o){n.next=5;break}return n.abrupt("return",!1);case 5:if(!h["a"].getters["ethereum/eth_sign"]){n.next=8;break}return r(h["a"].getters["ethereum/eth_sign"]),n.abrupt("return",!1);case 8:return n.prev=8,n.next=11,ethereum.request({method:"personal_sign",params:[t,e.account]});case 11:i=n.sent,h["a"].commit("ethereum/eth_sign",i),r(i),n.next=20;break;case 16:n.prev=16,n.t0=n["catch"](8),e.showError(n.t0),a(n.t0);case 20:case"end":return n.stop()}}),n,null,[[8,16]])})));return function(e,t){return n.apply(this,arguments)}}())},b.prototype.showError=function(e){Object(a["Message"])({showClose:!0,message:JSON.stringify(e["message"]||e),type:"error"}),console.error(e)};var _=b,C=(n("caad"),n("2532"),n("323e")),w=n.n(C),k=n("5553");w.a.configure({showSpinner:!1});var N=function(e,t,n){w.a.isStarted()||w.a.start(),n()},x=function(e,t,n,r){if(s["b"].includes(e)&&Object(k["a"])()){try{n("/home")}catch(a){console.log(a)}return!1}n()},y=function(){w.a.done()},H={beforeEach:[N,x],afterEach:[y]};function O(e,t){var n=e.beforeEach,r=e.afterEach;n.forEach((function(e){t.beforeEach((function(n,r,a){return e(n,r,a,t)}))})),r.forEach((function(e){t.afterEach((function(n,r,a){return e(n,r,a,t)}))}))}function X(e){var t=e.router;O(H,t)}var E=X,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{backgroundColor:this.bg||"#FFFFFF"},attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},W=[],T={name:"App",components:{},data:function(){return{bg:null}},created:function(){Object(k["c"])()},watch:{$route:function(e){e.meta&&(this.bg=e.meta.bg)}}},A=T,P=(n("5c0b"),n("2877")),S=Object(P["a"])(A,j,W,!1,null,null,null),R=S.exports,U=Object(s["a"])(),F=l(c.a.get("lang")?c.a.get("lang"):"en");r["default"].config.productionTip=!1,console.log(Object({NODE_ENV:"production",VUE_APP_LANG:"en",VUE_APP_URL:"/",VUE_APP_CHIA_URL:"https://www.chiaexplorer.com/blockchain/block/",VUE_APP_ETH_URL:"https://etherscan.io/token/",BASE_URL:"/"})),r["default"].use(o.a),r["default"].prototype.$http=d["a"],r["default"].prototype.$metaMaskUtils=new _,E({router:U}),new r["default"]({router:U,store:h["a"],i18n:F,render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"751a":function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("852e"),i=n.n(o),c={get_configure:{url:"/config/broker",methods:"get"},get_user:{url:"/user",methods:"get"},register:{url:"/user",methods:"post"},modify_user:{url:"/user",methods:"put"},transaction_stat:{url:"transaction/stat",methods:"get"},balance:{url:"/user/balance",methods:"get"},transaction_list:{url:"transaction/list",methods:"get"},transaction_detail:{url:"transaction/detail",methods:"get"},wrap:{url:"/wrap",methods:"post"},unwrap:{url:"/unwrap",methods:"post"}},s=n("4360"),u=a.a.create({baseURL:"/rpc",timeout:6e4});u.interceptors.request.use((function(e){return"post"===e.method&&(e.headers["Content-Type"]="application/json;charset=UTF-8"),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var m={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,a){t.language=i.a.get("LOCAL_LANG"),u({method:"get",url:e,params:t,body:t}).then((function(e){s["a"].commit("situation/loadingWatcher",{nameArr:[n],type:0}),200===e.status?r(e.data):a(e.data)})).catch((function(e){s["a"].commit("situation/loadingWatcher",{nameArr:[n],type:0}),a(e)}))}))},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,a){u({method:"post",url:e,data:t}).then((function(e){var t=e.status,o=e.data;s["a"].commit("situation/loadingWatcher",{nameArr:[n],type:0}),200===t?r(o):a(o)})).catch((function(e){s["a"].commit("situation/loadingWatcher",{nameArr:[n],type:0}),a(e)}))}))},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,a){u({method:"put",url:e,data:t}).then((function(e){var t=e.status,o=e.data;s["a"].commit("situation/loadingWatcher",{nameArr:[n],type:0}),200===t?r(o):a(o)})).catch((function(e){s["a"].commit("situation/loadingWatcher",{nameArr:[n],type:0}),a(e)}))}))}},l=function(e,t){var n=c[e],r=n["methods"],a=n["url"];return s["a"].commit("situation/loadingWatcher",{nameArr:[e],type:1}),m[r](a,t,e)};t["a"]=l},"98f0":function(e,t,n){"use strict";n("afcb")},9923:function(e,t,n){"use strict";n.r(t);var r=n("5530"),a=(n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319"),n("ba25")),o=function(){var e={};return a.keys().forEach((function(t){if(t.indexOf("index")<0){var n=i(t.replace(/\.\//g,""));e=Object(r["a"])(Object(r["a"])({},e),n)}})),e},i=function(e){var t={},r=n("e6ea")("./".concat(e));return t[e.replace(/\.js/g,"")]=r.default,t};t["default"]=o},"9c0c":function(e,t,n){},"9df6":function(e,t,n){"use strict";n.r(t),t["default"]={public:{fee:"手续费",send:"发送",cancel:"取消",item1Name:"查看交易",placeholder1:"请输入",placeholder2:"请选择",nodata:"没有数据",check:"查看交易",minimunQuantity:"最小兑换数量"},msg:{require:"{val} 是必须的",rational:"请输入合理的"},navs:{item1:"关于代理商",item2:"兑换WXCH",item3:"换回 XCH",item4:"历史交易",item5:"联系我们",btn1:"注册",dropDownItem1:"设置",dropDownItem2:"登出"},footer:{lpart:{item1:"WXCH 是第一个以奇亚币 1:1背书的ERC20 代币",item2:"如需帮助，请联系"},rpart:{item1:""}},msgs:{},home:{block1:{title:"透明度和安全性确保信任",content:"通过桥梁在链上移动资产的最大担心是建立在安全之上的信任。为了建立这种信任，我们采取的措施包括： 1) 公开的经过审计的智能合约，并将源代码公开； 2) 透明的服务和动机，以及 3) 多重签名支持的托管服务。所有的交易记录都是在存储在链上，当你将一个 XCH 转换为 WXCH 时，只有一个 WXCH 被铸造，当 XCH 代币被赎回时，对应的WXCH 将被销毁。",button:"连接钱包"},block2:{title:"关于代理商",subTitle:"您会看到代理商的基本信息，帮助您更好地进行交易。",item1Name:"代理商名字",item1Desc:"",item2Name:"代理商的Chia钱包地址",item2Desc:"",item3Name:"代理商的WXCH钱包地址",item3Desc:""},block3:{title:"立即兑换WXCH",subTitle:"您可以把XCH兑换成WXCH，由此可以提高奇亚币的流动性。",item1Name:"发送XCH",item2Name:"兑换成 WXCH",item3Name:"手续费",item4Name:"WXCH 接收地址",btn1:"立即兑换WXCH"},block4:{title:"兑换成XCH",subTitle:"您可以随时把 WXCH 兑换回 XCH 到您的奇亚地址。",item1Name:"发送WXCH",item2Name:"兑换成XCH",item3Name:"XCH 接收地址",btn1:"换回XCH"},block5:{title:"历史交易",item1:"累计兑换 WXCH",item2:"累计换回 XCH",tab1:"兑换成 WXCH",tab2:"兑换成XCH",cell1:"交易时间",cell2:"数量",cell3:"发送地址",cell4:"接收地址",cell5:"结果",tbHandler:"查看详情",status:{created:"已创建",xch_transferred:"XCH已接收",wxch_transferring:"WXCH发送中",finished:"已完成",closed:"已关闭",error:"交易异常"}}},register:{pageTitle:"注册一个WXCH账号",subTitle:"WXCH 是第一个以奇亚币 1:1背书的ERC20 代币",item1Name:"以太坊钱包地址",item1Unit:"连接钱包",item2Name:"国家",item2PlaceHold:"请选择",item3Name:"名",item3Unit:"",item4Name:"姓",item4Unit:"",item5Name:"手机号码",item5Unit:"",item5PlaceHold:"请选择",item6Name:"地址",item6Unit:"",item7Name:"城市",item8Name:"州",item9Name:"邮编",item10Name:"邮箱地址",extrItem1:"我确认我提供的信息是准确的",btn1:"注册帐号"},account:{pageTitle:"账号设置",subTitleItem1:"WXCH 资产",subTitleItem2:"XCH 资产",item1Name:"名",item2Name:"姓",item3Name:"国家",item4Name:"手机号码",item5Name:"地址",item6Name:"城市",item7Name:"州",item8Name:"邮编",item9Name:"邮箱地址",item10Name:"奇亚币钱包地址",item11Name:"以太坊钱包地址",btn1:"保存"},transDetail:{pageTitle:"交易详情",subTitleItem1:"交易时间",subTitleItem2:"结果",subTitleItem3:"手续费",item1Name:"发送地址",item2Name:"接收地址",item3Name:"数量",item4Name:"状态",item5Name:"交易哈希"}}},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return U})),n.d(t,"a",(function(){return F}));n("caad"),n("2532"),n("b0c0");var r=n("2b0e"),a=n("8c4f"),o=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("header-home"),n("router-view")],1)}),i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header header-page"},[n("div",{staticClass:"header-fixed-board"},[n("div",{staticClass:"content"},[n("a",{staticClass:"logo",on:{click:function(t){return e.goto(e.home)}}}),n("ul",{staticClass:"navbar"},e._l(e.navList,(function(t,r){return n("li",{key:"nav_item_"+r,on:{click:function(t){e.scroll("Block_"+(r+2))}}},[e._v(e._s(e.$t("navs.item"+(r+1))))])})),0),n("div",{staticClass:"append"},[e.user?n("router-link",{staticClass:"usrLogo",attrs:{to:{name:"account"}}}):n("el-button",{on:{click:function(t){return e.goto("register")}}},[e._v(e._s(e.$t("navs.btn1")))])],1)])])])},s=[],u=n("5530"),m=n("2f62"),l=n("1172"),h={name:"HeaderHome",i18n:n("f679"),computed:Object(u["a"])({},Object(m["b"])("user",{user:"user"})),data:function(){return{isAuth:!1,navList:[{index:1},{index:2},{index:3},{index:4}]}},methods:{goto:function(e){this.$router.push({name:e})},scroll:function(e){Object(l["a"])(this,e)}}},d=h,f=(n("98f0"),n("2877")),p=Object(f["a"])(d,c,s,!1,null,"59f82236",null),g=p.exports,b={components:{headerHome:g}},v=b,_=Object(f["a"])(v,o,i,!1,null,"b4ed4238",null),C=_.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("header-inner"),n("router-view"),n("page-footer")],1)},k=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header header-page"},[n("div",{staticClass:"header-fixed-board"},[n("div",{staticClass:"content"},[n("a",{staticClass:"logo",on:{click:function(t){return e.goTo("home")}}})])])])},x=[],y={name:"HeaderHome",i18n:n("f679"),data:function(){return{isAuth:!1}},methods:{goTo:function(e){this.$router.push({name:e})}}},H=y,O=(n("4115"),Object(f["a"])(H,N,x,!1,null,"54abd7e5",null)),X=O.exports,E=n("bd4b"),j={components:{headerInner:X,pageFooter:E["a"]}},W=j,T=(n("31a3"),Object(f["a"])(W,w,k,!1,null,"03f10a3b",null)),A=T.exports,P={routes:[{path:"*",name:"404",component:function(){return n.e("chunk-2d208298").then(n.bind(null,"a42a"))}},{path:"/",component:C,redirect:"/home",children:[{name:"home",path:"home",component:function(){return n.e("chunk-40792496").then(n.bind(null,"f5b8"))}}]},{path:"/pages",component:A,redirect:"/404",children:[{path:"signup",name:"register",component:function(){return n.e("chunk-88243c50").then(n.bind(null,"2440"))},meta:{bg:"#FAFAFA"}},{path:"account",name:"account",component:function(){return n.e("chunk-1ad0f453").then(n.bind(null,"d48a"))},meta:{bg:"#FAFAFA"}},{path:"transDetail/:id",name:"transDetail",component:function(){return n.e("chunk-dd4c2cfc").then(n.bind(null,"1fe3"))},meta:{bg:"#FAFAFA"}}]}]},S=P,R=a["a"].prototype.push;a["a"].prototype.push=function(e,t,n){return t||n?R.call(this,e,t,n):R.call(this,e).catch((function(e){return e}))},r["default"].use(a["a"]);var U={names:["register"],includes:function(e){return this.names.includes(e.name)}};function F(){return new a["a"](S)}},ab29:function(e,t,n){},afcb:function(e,t,n){},ba25:function(e,t,n){var r={"./en.js":"3fab","./index.js":"9923","./zh.js":"9df6"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="ba25"},bd4b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"l-part"},[n("img",{staticClass:"logo",attrs:{src:"/img/logo_ft.png"}}),n("div",{staticClass:"desc"},[e._v(e._s(e.$t("footer.lpart.item1")))]),n("div",{staticClass:"desc"},[n("span",[e._v(e._s(e.$t("footer.lpart.item2")))]),n("a",{staticClass:"link",attrs:{href:"mailto:"+e.conf.email}},[e._v(e._s(e.conf.email))])]),n("el-dropdown",{on:{command:e.changeLang}},[n("el-button",[e._v(e._s(e.locale))]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"en"}},[e._v("Englisth")]),n("el-dropdown-item",{attrs:{command:"zh"}},[e._v("中文简体")])],1)],1)],1),n("ul",{staticClass:"r-part"},[n("a",{on:{click:function(t){return e.scroll("Block_2")}}},[e._v(e._s(e.$t("navs.item1")))]),n("a",{on:{click:function(t){return e.scroll("Block_3")}}},[e._v(e._s(e.$t("navs.item2")))]),n("a",{on:{click:function(t){return e.scroll("Block_4")}}},[e._v(e._s(e.$t("navs.item3")))]),n("a",{on:{click:function(t){return e.scroll("Block_5")}}},[e._v(e._s(e.$t("navs.item4")))])])])])},a=[],o=n("5530"),i=n("1172"),c=n("852e"),s=n.n(c),u=n("2f62"),m={name:"pageFooter",computed:Object(o["a"])(Object(o["a"])({},Object(u["b"])("user",{conf:"conf"})),{},{locale:function(){return"en"==this.$i18n.locale?"English":"中文简体"}}),methods:{scroll:function(e){Object(i["a"])(this,e)},changeLang:function(e){s.a.set("lang",e),this.$i18n.locale=e}}},l=m,h=(n("51a4"),n("2877")),d=Object(h["a"])(l,r,a,!1,null,"4a52f61a",null);t["a"]=d.exports},cdf3:function(e,t,n){},e6ea:function(e,t,n){var r={"./":"9923","./en":"3fab","./en.js":"3fab","./index":"9923","./index.js":"9923","./zh":"9df6","./zh.js":"9df6"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="e6ea"},f679:function(e,t){},f855:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o}));n("99af"),n("a630"),n("3ca3"),n("d3b7"),n("6062"),n("ddb0"),n("4de4"),n("ac1f"),n("5319"),n("fb6a");var r=function(e,t){var n=e.concat(t);return Array.from(new Set(n))},a=function(e,t){return e=e.filter((function(e){return-1==t.indexOf(e)})),e},o=function(e){return e.slice(0,19).replace(/[A-Z]/g," ")}}});