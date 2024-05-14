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
  __name: "statistic",
  setup(__props) {
    let myLay = common_vendor.ref({ title: "统计", mainColor: "#fff", btnColor: "#F5F5F5" });
    let firstContent = common_vendor.ref([
      {
        title: "本月出勤天数",
        num: 0
      },
      {
        title: "本月迟到次数",
        num: 3
      },
      {
        title: "本月早退次数",
        num: 1
      }
    ]);
    let otherContent = common_vendor.ref([
      {
        title: "考勤记录",
        time: "2024-02-30至2024-04-22",
        status: "正常",
        type: "上班打卡"
      },
      {
        title: "请假记录",
        time: "2024-02-30至2024-04-22",
        status: "已批准",
        type: "事假"
      },
      {
        title: "加班记录",
        time: "2024-02-30至2024-04-22",
        status: "未批准",
        type: "加班申请"
      }
    ]);
    let userMsg = common_vendor.ref({ avatarUrl: "/static/image/img.gif", name: "未登录" });
    const getClockInRecordCountThisMonth = async () => {
      let { data: { data } } = await api_clockIn_clockIn.getRecordCountThisMonth();
      firstContent.value[0].num = data.recordCountThisMonth;
    };
    const getFirstClockInRecord = async () => {
      let { data: { data } } = await api_clockIn_clockIn.getFirstRecord();
      otherContent.value[0].time = data.clockInTime;
      let type = data.type;
      let way = data.way;
      otherContent.value[0].status = way === 0 ? "正常" : "拍照打卡";
      otherContent.value[0].type = type === 0 ? "上班打卡" : "下班打卡";
    };
    common_vendor.onShow(() => {
      userMsg.value = common_vendor.index.getStorageSync("userMsg");
      getFirstClockInRecord();
      getClockInRecordCountThisMonth();
    });
    function checkAll(index) {
      common_vendor.index.navigateTo({
        url: "/pages/allRecords/allRecords?mode=" + index
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          lay: common_vendor.unref(myLay)
        }),
        b: common_vendor.f(common_vendor.unref(firstContent), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.num),
            c: index
          };
        }),
        c: common_vendor.p({
          padding: "20rpx 0"
        }),
        d: common_vendor.f(common_vendor.unref(otherContent), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => checkAll(index), index),
            c: common_vendor.t(item.time),
            d: common_vendor.t(item.status),
            e: common_vendor.t(item.type),
            f: "8208ac4c-2-" + i0,
            g: index
          };
        }),
        e: common_vendor.unref(userMsg).avatarUrl,
        f: common_vendor.t(common_vendor.unref(userMsg).name),
        g: common_vendor.p({
          padding: "20rpx 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8208ac4c"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/statistic/statistic.vue"]]);
wx.createPage(MiniProgramPage);
