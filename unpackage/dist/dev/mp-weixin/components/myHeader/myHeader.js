"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_system = require("../../utils/common_utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "myHeader",
  props: {
    head: {
      type: Object,
      default() {
        return { title: "标题", fun: "1", color: "#FFF" };
      }
    }
  },
  setup(__props) {
    function onScan() {
      common_vendor.index.scanCode({
        success: function(res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
          common_vendor.index.setStorage({
            key: "requiredUrl",
            data: res.result,
            success: () => {
              console.log("url传输成功");
              common_vendor.index.navigateTo({
                url: "/pages/home/webview"
              });
            }
          });
        },
        fail: (res2) => {
          let showTitle = "";
          showTitle = "扫码失败";
          common_vendor.index.showToast({
            title: showTitle,
            icon: "error"
          });
        }
      });
    }
    let justifyContentValue = "space-between";
    justifyContentValue = "flex-start";
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_common_utils_system.statusBarHeight) + "px",
        b: __props.head.title !== "" && __props.head.title !== null
      }, __props.head.title !== "" && __props.head.title !== null ? {
        c: common_vendor.t(__props.head.title)
      } : {}, {
        d: __props.head.fun === "1"
      }, __props.head.fun === "1" ? {
        e: common_vendor.p({
          type: "search",
          color: "#888",
          size: "22"
        }),
        f: common_vendor.o(($event) => onScan()),
        g: common_vendor.p({
          type: "scan",
          color: "#888",
          size: "22"
        })
      } : __props.head.fun === "2" ? {
        i: common_vendor.p({
          type: "gear",
          color: "#888",
          size: "22"
        })
      } : {}, {
        h: __props.head.fun === "2",
        j: common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        k: common_vendor.unref(justifyContentValue),
        l: __props.head.color,
        m: common_vendor.unref(utils_common_utils_system.statusBarHeight) + common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5fa7a163"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/myHeader/myHeader.vue"]]);
wx.createComponent(Component);
