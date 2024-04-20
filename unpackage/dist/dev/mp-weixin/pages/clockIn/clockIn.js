"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_uni_steps2 = common_vendor.resolveComponent("uni-steps");
  (_easycom_myHeader2 + _easycom_uni_steps2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_uni_steps = () => "../../uni_modules/uni-steps/components/uni-steps/uni-steps.js";
if (!Math) {
  (_easycom_myHeader + _easycom_uni_steps)();
}
const _sfc_main = {
  __name: "clockIn",
  setup(__props) {
    let myHead = common_vendor.ref({ title: "考勤打卡", fun: "0", color: "#fff" });
    let options = common_vendor.ref([
      {
        title: "上班打卡 09:00",
        desc: "2024-04-20"
      },
      {
        title: "下班打卡 18:00",
        desc: "2024-04-20"
      }
    ]);
    let isEntry = common_vendor.ref(false);
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
      return common_vendor.e({
        a: common_vendor.p({
          head: common_vendor.unref(myHead)
        }),
        b: common_vendor.unref(userMsg).avatarUrl,
        c: common_vendor.t(common_vendor.unref(userMsg).name),
        d: common_vendor.t("考勤部门：" + common_vendor.unref(userMsg).dept),
        e: common_vendor.p({
          options: common_vendor.unref(options),
          direction: "column",
          active: 1
        }),
        f: common_vendor.unref(isEntry)
      }, common_vendor.unref(isEntry) ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10d1d18a"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/clockIn/clockIn.vue"]]);
wx.createPage(MiniProgramPage);
