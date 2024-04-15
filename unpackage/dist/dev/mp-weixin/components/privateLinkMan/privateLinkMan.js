"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "privateLinkMan",
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(__props) {
    function goToDetailPage(linkMan) {
      let linkManDetail = { linkMan, typeId: 2, typeName: "个人通讯录" };
      common_vendor.index.setStorageSync("linkManDetail", linkManDetail);
      common_vendor.index.navigateTo({
        url: "/pages/linkManPage/linkManPage"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.dataList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.phone),
            c: common_vendor.t("( " + item.relationship + " )"),
            d: common_vendor.o(($event) => goToDetailPage(item), index),
            e: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6db8df14"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/privateLinkMan/privateLinkMan.vue"]]);
wx.createComponent(Component);
