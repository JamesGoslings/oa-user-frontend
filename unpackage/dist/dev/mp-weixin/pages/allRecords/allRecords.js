"use strict";
const common_vendor = require("../../common/vendor.js");
const api_clockIn_clockIn = require("../../api/clockIn/clockIn.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
if (!Array) {
  const _easycom_layout2 = common_vendor.resolveComponent("layout");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_layout2 + _easycom_uni_card2)();
}
const _easycom_layout = () => "../../components/layout/layout.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_layout + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "allRecords",
  setup(__props) {
    let myLay = common_vendor.ref({ title: "全部记录", mainColor: "#fff", btnColor: "#F5F5F5" });
    let mode = common_vendor.ref(-2);
    common_vendor.onLoad((data) => {
      mode.value = parseInt(data.mode);
    });
    let recordList = common_vendor.ref([]);
    const userName = common_vendor.index.getStorageSync("userMsg").name;
    const getClockInRecords = async () => {
      let { data: { data } } = await api_clockIn_clockIn.getClockInRecordList();
      recordList.value = data;
    };
    common_vendor.onShow(() => {
      console.log(mode.value);
      if (mode.value === 0) {
        getClockInRecords();
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          lay: common_vendor.unref(myLay)
        }),
        b: common_vendor.f(common_vendor.unref(recordList), (record, index, i0) => {
          return common_vendor.e({
            a: record.way === 0
          }, record.way === 0 ? {} : record.way === 1 ? {} : {}, {
            b: record.way === 1,
            c: common_vendor.t(record.clockInTime),
            d: record.way === 0
          }, record.way === 0 ? {} : record.way === 1 ? {} : {}, {
            e: record.way === 1,
            f: record.type === 0
          }, record.type === 0 ? {} : {}, {
            g: record.type === 1
          }, record.type === 1 ? {} : {}, {
            h: record.id,
            i: "965ef721-1-" + i0
          });
        }),
        c: common_vendor.t(common_vendor.unref(userName)),
        d: common_vendor.p({
          padding: "20rpx 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-965ef721"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/allRecords/allRecords.vue"]]);
wx.createPage(MiniProgramPage);
