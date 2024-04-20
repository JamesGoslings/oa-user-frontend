"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_layout2 = common_vendor.resolveComponent("layout");
  _easycom_layout2();
}
const _easycom_layout = () => "../../components/layout/layout.js";
if (!Math) {
  _easycom_layout();
}
const _sfc_main = {
  __name: "clockInRule",
  setup(__props) {
    let myLay = common_vendor.ref({ title: "考勤规则" });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          lay: common_vendor.unref(myLay)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-711046ea"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/clockInRule/clockInRule.vue"]]);
wx.createPage(MiniProgramPage);
