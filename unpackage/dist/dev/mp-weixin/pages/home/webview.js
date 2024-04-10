"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "webview",
  setup(__props) {
    let myUrl = common_vendor.ref(common_vendor.index.getStorageSync("requiredUrl"));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(myUrl)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/home/webview.vue"]]);
wx.createPage(MiniProgramPage);
