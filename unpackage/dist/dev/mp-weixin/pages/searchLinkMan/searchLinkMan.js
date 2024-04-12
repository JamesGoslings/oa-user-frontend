"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_system = require("../../utils/common_utils/system.js");
const _sfc_main = {
  __name: "searchLinkMan",
  setup(__props) {
    let iptValue = common_vendor.ref("请输入电话号码或联系人姓名");
    function clearValue() {
      if (iptValue.value === "请输入电话号码或联系人姓名")
        iptValue.value = "";
    }
    function initValue() {
      if (iptValue.value === "") {
        iptValue.value = "请输入电话号码或联系人姓名";
      }
    }
    function search() {
      console.log(iptValue.value);
    }
    function goBack() {
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common_utils_system.statusBarHeight) + "px",
        b: common_vendor.o(($event) => goBack()),
        c: common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        d: common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        e: common_vendor.unref(utils_common_utils_system.statusBarHeight) + common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        f: common_vendor.o(($event) => clearValue()),
        g: common_vendor.o(($event) => initValue()),
        h: common_vendor.unref(iptValue),
        i: common_vendor.o(($event) => common_vendor.isRef(iptValue) ? iptValue.value = $event.detail.value : iptValue = $event.detail.value),
        j: common_vendor.o(($event) => search())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ad502e0"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/searchLinkMan/searchLinkMan.vue"]]);
wx.createPage(MiniProgramPage);
