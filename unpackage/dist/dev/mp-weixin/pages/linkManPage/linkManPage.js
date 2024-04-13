"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "linkManPage",
  setup(__props) {
    let linkMan = common_vendor.ref(common_vendor.index.getStorageSync("linkMan"));
    function goBack() {
      common_vendor.index.navigateBack();
    }
    function call() {
      common_vendor.index.makePhoneCall({
        phoneNumber: linkMan.value.phone,
        success: () => {
          console.log("拨号成功了!");
        },
        fail: () => {
          console.log("拨号失败了。");
        },
        complete: () => {
          console.log("操作结束~");
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => goBack()),
        b: common_vendor.t(common_vendor.unref(linkMan).name),
        c: common_vendor.p({
          title: common_vendor.unref(linkMan).post,
          note: "联系人职位"
        }),
        d: common_vendor.o(($event) => call()),
        e: common_vendor.p({
          title: common_vendor.unref(linkMan).phone,
          note: "联系人手机号码"
        }),
        f: common_vendor.p({
          title: "公司通讯录",
          note: "当前通讯录"
        }),
        g: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8f4dddb7"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/linkManPage/linkManPage.vue"]]);
wx.createPage(MiniProgramPage);
