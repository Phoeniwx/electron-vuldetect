(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85272794"],{"4ef5":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-list",{attrs:{id:"set",itemLayout:"horizontal"}},[t("a-list-item",{staticStyle:{"text-align":"left"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("a-switch",{attrs:{checkedChildren:"开",unCheckedChildren:"关"},on:{change:function(a){return e.autoLaunchChange(e.autoLaunchChecked)}},model:{value:e.autoLaunchChecked,callback:function(a){e.autoLaunchChecked=a},expression:"autoLaunchChecked"}})]},proxy:!0}])},[t("a-list-item-meta",{scopedSlots:e._u([{key:"title",fn:function(){return[t("a",[e._v("启动")])]},proxy:!0},{key:"description",fn:function(){return[t("span",[e._v(" 开机自动启动 ")])]},proxy:!0}])})],1)],1)},c=[],u=t("a358"),o={data:function(){return{autoLaunchChecked:!1}},mounted:function(){this.autoLaunchInit()},methods:{autoLaunchInit:function(){var e=this;Object(u["a"])("autoLaunchIsEnabled",{}).then((function(a){if(0!==a.code)return!1;e.autoLaunchChecked=a.data.isEnabled})).catch((function(e){console.log("err:",e)}))},autoLaunchChange:function(e){var a=this,t={checkStatus:e};e?Object(u["a"])("autoLaunchEnable",t).then((function(e){if(0!==e.code)return!1;a.autoLaunchChecked=e.data.isEnabled})).catch((function(e){console.log("err:",e)})):Object(u["a"])("autoLaunchDisable",t).then((function(e){if(0!==e.code)return!1;a.autoLaunchChecked=e.data.isEnabled})).catch((function(e){console.log("err:",e)}))}}},i=o,r=(t("b2ac"),t("2877")),h=Object(r["a"])(i,n,c,!1,null,"2c7c633a",null);a["default"]=h.exports},a358:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("b775"),c={outApi:"/api/v1/outApi",openDir:"/api/v1/example/openLocalDir",uploadFile:"/api/v1/example/uploadFile",executeJS:"/api/v1/example/executeJS",setShortcut:"/api/v1/example/setShortcut",autoLaunchEnable:"/api/v1/example/autoLaunchEnable",autoLaunchDisable:"/api/v1/example/autoLaunchDisable",autoLaunchIsEnabled:"/api/v1/example/autoLaunchIsEnabled",openSoftware:"/api/v1/example/openSoftware"};function u(e,a){return Object(n["b"])({url:c[e],method:"post",data:a})}},b2ac:function(e,a,t){"use strict";t("fa57")},fa57:function(e,a,t){}}]);
//# sourceMappingURL=chunk-85272794.970e0865.js.map