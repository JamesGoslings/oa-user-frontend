"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "linkMan",
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      }
    },
    myType: {
      type: Object,
      default() {
        return { typeId: -1, typeName: "" };
      }
    }
  },
  setup(__props) {
    function goToDetailPage(linkMan, myType) {
      let linkManDetail = { linkMan, typeId: myType.typeId, typeName: myType.typeName };
      common_vendor.index.setStorageSync("linkManDetail", linkManDetail);
      common_vendor.index.navigateTo({
        url: "/pages/linkManPage/linkManPage"
        // url: '/pages/linkManPage/linkManPage?linkManDetail=' + JSON.stringify(linkManDetail)
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.dataList, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.phone),
            c: item.relationship !== void 0
          }, item.relationship !== void 0 ? {
            d: common_vendor.t("( " + item.relationship + " )")
          } : {}, {
            e: common_vendor.o(($event) => goToDetailPage(item, __props.myType), index),
            f: index
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e1763781"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/linkMan/linkMan.vue"]]);
wx.createComponent(Component);
