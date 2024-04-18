"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/common_utils/system.js");
const api_linkMan_linkMan = require("../../api/linkMan/linkMan.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
const _sfc_main = {
  __name: "searchLinkMan",
  setup(__props) {
    let iptValue = common_vendor.ref("");
    let linkManDetailData = common_vendor.ref([]);
    const search = async () => {
      console.log(iptValue.value);
      let { data: { data } } = await api_linkMan_linkMan.searchLinkManList(iptValue.value);
      linkManDetailData.value = data;
    };
    common_vendor.onShow(() => {
      if (iptValue.value !== "") {
        search(iptValue.value);
      }
    });
    function goDetailPage(linkMandetail) {
      if (linkMandetail.typeId === 1) {
        const leader = linkMandetail.leader;
        linkMandetail.linkMan = leader;
      }
      common_vendor.index.setStorageSync("linkManDetail", linkMandetail);
      common_vendor.index.navigateTo({
        url: "/pages/linkManPage/linkManPage"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(iptValue),
        b: common_vendor.o(($event) => common_vendor.isRef(iptValue) ? iptValue.value = $event.detail.value : iptValue = $event.detail.value),
        c: common_vendor.o(($event) => search()),
        d: common_vendor.f(common_vendor.unref(linkManDetailData), (item, index, i0) => {
          return common_vendor.e({
            a: item.typeId === 1
          }, item.typeId === 1 ? {
            b: common_vendor.t(item.leader.name),
            c: common_vendor.t(item.leader.phone)
          } : {
            d: common_vendor.t(item.linkMan.name),
            e: common_vendor.t(item.linkMan.phone)
          }, {
            f: common_vendor.t(item.typeName),
            g: item.deptName !== void 0 && item.deptName !== null && item.deptName !== ""
          }, item.deptName !== void 0 && item.deptName !== null && item.deptName !== "" ? {
            h: common_vendor.t("-" + item.deptName)
          } : {}, {
            i: index,
            j: common_vendor.o(($event) => goDetailPage(item), index)
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ad502e0"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/searchLinkMan/searchLinkMan.vue"]]);
wx.createPage(MiniProgramPage);
