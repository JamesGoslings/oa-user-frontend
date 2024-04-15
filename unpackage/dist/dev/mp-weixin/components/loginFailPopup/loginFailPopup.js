"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "loginFailPopup",
  setup(__props) {
    function toLogin() {
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    }
    const popupPrompt = common_vendor.ref(null);
    const openPopup = () => {
      popupPrompt.value.open();
    };
    const checkLogin = async () => {
      let myToken = common_vendor.index.getStorageSync("token");
      if (myToken !== "" && myToken !== null) {
        return;
      }
      console.log("mytoken==>");
      console.log(myToken);
      setTimeout(() => {
        openPopup();
      }, 0);
    };
    common_vendor.onShow(() => {
      checkLogin();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => toLogin()),
        b: common_vendor.sr(popupPrompt, "e357f36b-0", {
          "k": "popupPrompt"
        }),
        c: common_vendor.p({
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e357f36b"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/loginFailPopup/loginFailPopup.vue"]]);
wx.createComponent(Component);
