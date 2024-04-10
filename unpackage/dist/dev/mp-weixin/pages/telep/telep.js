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
  __name: "telep",
  setup(__props) {
    let teleHead = common_vendor.ref({ title: "通讯录", fun: "0" });
    function OnClick() {
      common_vendor.index.showModal({
        title: "是否删除???",
        content: "删除后无法恢复",
        success: (res) => {
          console.log(res);
          if (res.confirm)
            common_vendor.index.showToast({
              title: "删除成功~"
            });
        },
        fail: (res) => {
          console.log(res);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(teleHead)
        }),
        b: common_vendor.o(($event) => OnClick())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f532b38"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/telep/telep.vue"]]);
wx.createPage(MiniProgramPage);
