"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_layout2 = common_vendor.resolveComponent("layout");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_layout2 + _easycom_uni_card2)();
}
const _easycom_layout = () => "../../components/layout/layout.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_layout + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "userDetail",
  setup(__props) {
    let myLay = common_vendor.ref({ title: "个人详情页", mainColor: "#fff", btnColor: "#F5F5F5" });
    let userDetailMsg = common_vendor.ref(
      {
        avatar: "/static/image/default_avatar.png"
      }
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          lay: common_vendor.unref(myLay)
        }),
        b: common_vendor.unref(userDetailMsg).avatar,
        c: common_vendor.p({
          spacing: 0
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-82cda788"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/userDetail/userDetail.vue"]]);
wx.createPage(MiniProgramPage);
