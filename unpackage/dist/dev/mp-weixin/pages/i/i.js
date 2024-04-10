"use strict";
const common_vendor = require("../../common/vendor.js");
const api_i_i = require("../../api/i/i.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_myHeader2 + _easycom_uni_card2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_loginFailPopup2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_myHeader + _easycom_uni_card + _easycom_uni_list_item + _easycom_uni_list + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "i",
  setup(__props) {
    let iHead = common_vendor.ref({ title: "我的", fun: "2" });
    let userMsg = common_vendor.ref({ name: "未登录", avatar: "/static/image/default_avatar.png" });
    const test = async () => {
      let { data: { data } } = await api_i_i.getUserInfo();
      console.log("===========DATA===========");
      console.log(data);
      console.log("===========DATA===========");
      common_vendor.index.setStorageSync("userMsg", data);
      console.log("===========DATA2===========");
      console.log(common_vendor.index.getStorageSync("userMsg"));
      console.log("===========DATA2===========");
    };
    function changeAvatar() {
      api_i_i.saveAndBackImg(userMsg);
    }
    function info() {
      let userInfo = common_vendor.index.getStorageSync("userMsg");
      userMsg.value.name = userInfo.name;
      userMsg.value.avatar = userInfo.avatarUrl;
    }
    common_vendor.onShow(() => {
      info();
      common_vendor.index.hideTabBarRedDot({
        index: 2
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(iHead)
        }),
        b: common_vendor.unref(userMsg).avatar,
        c: common_vendor.o(($event) => changeAvatar()),
        d: common_vendor.t(common_vendor.unref(userMsg).name),
        e: common_vendor.p({
          margin: "50rpx"
        }),
        f: common_vendor.p({
          showArrow: true
        }),
        g: common_vendor.p({
          showArrow: true,
          border: false
        }),
        h: common_vendor.o(($event) => test()),
        i: common_vendor.p({
          showArrow: true,
          border: false
        }),
        j: common_vendor.p({
          showArrow: true,
          border: false
        }),
        k: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5b828d59"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/i/i.vue"]]);
wx.createPage(MiniProgramPage);
