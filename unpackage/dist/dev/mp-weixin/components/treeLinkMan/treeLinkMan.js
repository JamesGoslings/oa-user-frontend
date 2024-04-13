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
    function openLeaderPage(leader) {
      common_vendor.index.setStorageSync("linkMan", leader);
      common_vendor.index.navigateTo({
        url: "/pages/linkManPage/linkManPage"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.dataList, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.deptName),
            b: item.floor * 30 + "rpx",
            c: !item.isChoose
          }, !item.isChoose ? {
            d: common_vendor.o(($event) => item.isChoose = !item.isChoose, index)
          } : {
            e: common_vendor.o(($event) => item.isChoose = !item.isChoose, index)
          }, {
            f: item.isChoose
          }, item.isChoose ? common_vendor.e({
            g: item.deptName !== "总经理"
          }, item.deptName !== "总经理" ? {} : {}, {
            h: common_vendor.t(item.leader.name),
            i: common_vendor.t(item.leader.phone),
            j: item.floor * 30 + "rpx",
            k: common_vendor.o(($event) => openLeaderPage(item.leader), index)
          }) : {}, {
            l: item.isChoose && item.children !== void 0 && item.children !== null && item.children.length > 0
          }, item.isChoose && item.children !== void 0 && item.children !== null && item.children.length > 0 ? {
            m: "19626886-0-" + i0,
            n: common_vendor.p({
              dataList: item.children
            })
          } : {}, {
            o: index
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
