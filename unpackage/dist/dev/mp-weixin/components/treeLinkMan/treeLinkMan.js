"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_treeLinkMan2 = common_vendor.resolveComponent("treeLinkMan");
  _easycom_treeLinkMan2();
}
const _easycom_treeLinkMan = () => Promise.resolve().then(() => RDovSEJ1aWxkZXJfRmlsZXMvSEJ1bGlkZXJfUHJvL0RlbW8wMDIvY29tcG9uZW50cy90cmVlTGlua01hbi90cmVlTGlua01hbi52dWU);
if (!Math) {
  _easycom_treeLinkMan();
}
const _sfc_main = {
  __name: "treeLinkMan",
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(__props) {
    let numbers = common_vendor.ref(["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ", "Ⅺ", "Ⅻ"]);
    function openLeaderPage(leader) {
      let linkManDetail = { linkMan: leader, typeId: 1, typeName: "公司通讯录" };
      common_vendor.index.setStorageSync("linkManDetail", linkManDetail);
      common_vendor.index.navigateTo({
        url: "/pages/linkManPage/linkManPage"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.dataList, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(common_vendor.unref(numbers)[item.floor] + " " + item.deptName),
            b: item.floor * 30 + "rpx",
            c: !item.isChoose
          }, !item.isChoose ? {} : {}, {
            d: common_vendor.o(($event) => item.isChoose = !item.isChoose, index),
            e: item.isChoose
          }, item.isChoose ? common_vendor.e({
            f: item.deptName !== "经理" && item.deptName !== "董事会"
          }, item.deptName !== "经理" && item.deptName !== "董事会" ? {} : {}, {
            g: common_vendor.t(item.leader.name),
            h: common_vendor.t(item.leader.phone),
            i: item.floor * 30 + "rpx",
            j: common_vendor.o(($event) => openLeaderPage(item.leader), index)
          }) : {}, {
            k: item.isChoose && item.children !== void 0 && item.children !== null && item.children.length > 0
          }, item.isChoose && item.children !== void 0 && item.children !== null && item.children.length > 0 ? {
            l: "19626886-0-" + i0,
            m: common_vendor.p({
              dataList: item.children
            })
          } : {}, {
            n: index
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19626886"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/components/treeLinkMan/treeLinkMan.vue"]]);
wx.createComponent(Component);
const RDovSEJ1aWxkZXJfRmlsZXMvSEJ1bGlkZXJfUHJvL0RlbW8wMDIvY29tcG9uZW50cy90cmVlTGlua01hbi90cmVlTGlua01hbi52dWU = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
