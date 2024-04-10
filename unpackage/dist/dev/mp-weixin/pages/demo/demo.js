"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    open() {
      this.$refs.popup.open("top");
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.open && $options.open(...args)),
    b: common_vendor.sr("popup", "4e58ded5-0"),
    c: common_vendor.p({
      type: "bottom",
      ["border-radius"]: "10px 10px 0 0"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/demo/demo.vue"]]);
wx.createPage(MiniProgramPage);
