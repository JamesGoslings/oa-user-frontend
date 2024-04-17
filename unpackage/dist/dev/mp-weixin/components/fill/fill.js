"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "fill",
  props: {
    color: {
      type: String,
      default() {
        return "#F5F5F5";
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.color
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d07715e6"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/fill/fill.vue"]]);
wx.createComponent(Component);
