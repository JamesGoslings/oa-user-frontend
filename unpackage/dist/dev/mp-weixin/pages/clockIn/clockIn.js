"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  _easycom_myHeader2();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
if (!Math) {
  _easycom_myHeader();
}
const _sfc_main = {
  __name: "clockIn",
  setup(__props) {
    let myHead = common_vendor.ref({ title: "考勤打卡", fun: "0", color: "#fff" });
    let userMsg = common_vendor.ref(
      {
        avatarUrl: "/static/image/default_avatar.png",
        name: "未登录",
        dept: "无"
      }
    );
    common_vendor.onShow(() => {
      userMsg.value = common_vendor.index.getStorageSync("userMsg");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(myHead)
        }),
        b: common_vendor.unref(userMsg).avatarUrl,
        c: common_vendor.t(common_vendor.unref(userMsg).name),
        d: common_vendor.t("考勤部门：" + common_vendor.unref(userMsg).dept)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10d1d18a"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/clockIn/clockIn.vue"]]);
wx.createPage(MiniProgramPage);
