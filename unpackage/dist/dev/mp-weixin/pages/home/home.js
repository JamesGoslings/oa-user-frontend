"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_myHeader2 + _easycom_uni_notice_bar2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_card2 + _easycom_loginFailPopup2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_myHeader + _easycom_uni_notice_bar + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_card + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let homeHead = common_vendor.ref({ title: "首页", fun: "1", color: "#FFF" });
    let isShow = common_vendor.ref(true);
    common_vendor.onShow(() => {
      if (isShow.value) {
        isShow = false;
        common_vendor.index.setTabBarBadge({
          index: 0,
          text: "6"
        });
        common_vendor.index.showTabBarRedDot({
          index: 2
        });
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(homeHead)
        }),
        b: common_vendor.p({
          ["background-color"]: "rgba(255,255,255,1)",
          color: "#c4d0ec",
          scrollable: true,
          showClose: true,
          showIcon: true,
          single: true,
          text: "宁可累死自己  也要卷死同学!!!"
        }),
        c: common_vendor.p({
          title: "申请处理",
          showArrow: true,
          ["badge-text"]: "1",
          ["show-badge"]: true,
          note: "1小时前"
        }),
        d: common_vendor.p({
          title: "通告处理",
          showArrow: true,
          ["badge-text"]: "2",
          ["show-badge"]: true,
          note: "2小时前"
        }),
        e: common_vendor.p({
          border: false
        }),
        f: common_vendor.p({
          title: "待处理申请/通知",
          extra: "点击查看全部"
        }),
        g: common_vendor.p({
          title: "管理员消息",
          showArrow: true,
          ["badge-text"]: "1",
          ["show-badge"]: true,
          note: "1小时前"
        }),
        h: common_vendor.p({
          title: "系统消息",
          showArrow: true,
          ["badge-text"]: "2",
          ["show-badge"]: true,
          note: "2小时前"
        }),
        i: common_vendor.p({
          border: false
        }),
        j: common_vendor.p({
          title: "未读消息",
          extra: "点击查看全部"
        }),
        k: common_vendor.p({
          title: "功能"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
