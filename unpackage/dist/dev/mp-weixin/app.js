"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/home/home.js";
  "./pages/telep/telep.js";
  "./pages/i/i.js";
  "./pages/demo/demo.js";
  "./pages/home/webview.js";
  "./pages/login/login.js";
  "./pages/searchLinkMan/searchLinkMan.js";
  "./pages/linkManPage/linkManPage.js";
  "./pages/editLinkManPage/editLinkManPage.js";
  "./pages/userDetail/userDetail.js";
}
console.log("/???");
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
