"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_system = require("../../utils/common_utils/system.js");
const _sfc_main = {
  __name: "layout",
  props: {
    lay: {
      type: Object,
      default() {
        return { title: "标题", mainColor: "#fff", btnColor: "#fff" };
      }
    }
  },
  setup(__props) {
    function goBack() {
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common_utils_system.statusBarHeight) + "px",
        b: common_vendor.o(($event) => goBack()),
        c: __props.lay.btnColor,
        d: common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        e: common_vendor.t(__props.lay.title),
        f: common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        g: __props.lay.mainColor,
        h: common_vendor.unref(utils_common_utils_system.statusBarHeight) + common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-88c6ddf1"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/layout/layout.vue"]]);
wx.createComponent(Component);
