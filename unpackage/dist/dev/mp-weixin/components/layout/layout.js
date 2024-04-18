"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_system = require("../../utils/common_utils/system.js");
const _sfc_main = {
  __name: "layout",
  props: {
    lay: {
      type: Object,
      default() {
        return { title: "标题", color: "#FFF" };
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
        c: common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        d: common_vendor.t(__props.lay.title),
        e: common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px",
        f: common_vendor.unref(utils_common_utils_system.statusBarHeight) + common_vendor.unref(utils_common_utils_system.getTitleBarHeight)() + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-88c6ddf1"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/layout/layout.vue"]]);
wx.createComponent(Component);
