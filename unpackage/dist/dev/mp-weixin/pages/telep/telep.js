"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_myHeader2 + _easycom_loginFailPopup2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_myHeader + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "telep",
  setup(__props) {
    let teleHead = common_vendor.ref({ title: "通讯录", fun: "0", color: "#FFF" });
    function goSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/searchLinkMan/searchLinkMan"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(teleHead)
        }),
        b: common_vendor.o(($event) => goSearch())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f532b38"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/telep/telep.vue"]]);
wx.createPage(MiniProgramPage);
