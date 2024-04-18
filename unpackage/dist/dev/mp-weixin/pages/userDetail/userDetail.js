"use strict";
const common_vendor = require("../../common/vendor.js");
const api_i_i = require("../../api/i/i.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
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
        avatarUrl: "/static/image/default_avatar.png",
        createTime: "",
        name: "未登录",
        phone: "0",
        post: "无",
        dept: "无"
      }
    );
    common_vendor.onShow(() => {
      userDetailMsg.value = common_vendor.index.getStorageSync("userMsg");
    });
    function changeAvatar() {
      api_i_i.saveAndBackImg(userDetailMsg);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          lay: common_vendor.unref(myLay)
        }),
        b: common_vendor.unref(userDetailMsg).avatarUrl,
        c: common_vendor.o(($event) => changeAvatar()),
        d: common_vendor.t(common_vendor.unref(userDetailMsg).name),
        e: common_vendor.t(common_vendor.unref(userDetailMsg).dept),
        f: common_vendor.t(common_vendor.unref(userDetailMsg).phone),
        g: common_vendor.t(common_vendor.unref(userDetailMsg).post),
        h: common_vendor.t(common_vendor.unref(userDetailMsg).dept),
        i: common_vendor.t(common_vendor.unref(userDetailMsg).createTime),
        j: common_vendor.p({
          spacing: "0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-82cda788"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/userDetail/userDetail.vue"]]);
wx.createPage(MiniProgramPage);
