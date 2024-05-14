"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_location_location = require("../../utils/location/location.js");
const utils_common_utils_formatDate = require("../../utils/common_utils/formatDate.js");
const api_clockIn_clockIn = require("../../api/clockIn/clockIn.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_uni_steps2 = common_vendor.resolveComponent("uni-steps");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_myHeader2 + _easycom_uni_steps2 + _easycom_uni_popup2 + _easycom_loginFailPopup2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_uni_steps = () => "../../uni_modules/uni-steps/components/uni-steps/uni-steps.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_myHeader + _easycom_uni_steps + _easycom_uni_popup + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "clockIn",
  setup(__props) {
    let myHead = common_vendor.ref({ title: "考勤打卡", fun: "3", color: "#fff" });
    let options = common_vendor.ref([
      {
        title: "上班打卡 09:00",
        desc: ""
      },
      {
        title: "下班打卡 18:00",
        desc: ""
      }
    ]);
    let clockInText = common_vendor.ref("");
    let stepIndex = common_vendor.ref(0);
    let isEntry = common_vendor.ref(false);
    let userMsg = common_vendor.ref(
      {
        avatarUrl: "/static/image/default_avatar.png",
        name: "未登录",
        dept: "无"
      }
    );
    let clockInWay = 0;
    const addRecord = async (record) => {
      let { data } = await api_clockIn_clockIn.addClockInRecord(record);
      console.log(data);
    };
    function clockIn() {
      let now = /* @__PURE__ */ new Date();
      let record = {
        userId: common_vendor.index.getStorageSync("userMsg").userId,
        type: stepIndex.value,
        way: clockInWay,
        clockInTime: utils_common_utils_formatDate.formattedCurrentTime(now)
      };
      addRecord(record);
      console.log("打卡成功");
      options.value[stepIndex.value].desc = "打卡时间 " + utils_common_utils_formatDate.formattedTime(now);
      stepIndex.value++;
      stepIndex.value = stepIndex.value % 2;
      let str = options.value[stepIndex.value].title;
      clockInText = str.substring(0, 4);
      console.log(options.value[stepIndex.value].title);
      console.log(utils_common_utils_formatDate.formattedTime(now));
    }
    const getDistance = async () => {
      let here = await utils_location_location.getOnlyLocation();
      console.log("=========Here==========");
      console.log(here);
      console.log("=========Here==========");
      let distance = utils_location_location.distanceWithCompany(here[0], here[1]);
      console.log("==========D==========");
      console.log(distance);
      console.log("==========D==========");
      if (distance <= 100) {
        isEntry.value = true;
        console.log("可打卡");
      } else {
        console.log("打不了卡，si一边去");
      }
    };
    const currentTime = common_vendor.ref(utils_common_utils_formatDate.formattedTime());
    const updateTime = () => {
      currentTime.value = utils_common_utils_formatDate.formattedTime();
    };
    common_vendor.onMounted(() => {
      const timer = setInterval(updateTime, 1e3);
      return () => clearInterval(timer);
    });
    function goToClockInRule() {
      common_vendor.index.navigateTo({
        url: "/pages/clockInRule/clockInRule"
      });
    }
    function goToStatistic() {
      common_vendor.index.navigateTo({
        url: "/pages/statistic/statistic"
      });
    }
    const morePopup = common_vendor.ref(null);
    const openPopup = () => {
      morePopup.value.open();
    };
    function receiveValue(value) {
      if (value) {
        openPopup();
      }
    }
    common_vendor.onShow(() => {
      userMsg.value = common_vendor.index.getStorageSync("userMsg");
      getDistance();
      let str = options.value[stepIndex.value].title;
      clockInText = str.substring(0, 4);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(receiveValue),
        b: common_vendor.p({
          head: common_vendor.unref(myHead)
        }),
        c: common_vendor.unref(userMsg).avatarUrl,
        d: common_vendor.t(common_vendor.unref(userMsg).name),
        e: common_vendor.t("考勤部门：" + common_vendor.unref(userMsg).dept),
        f: common_vendor.o(($event) => goToStatistic()),
        g: common_vendor.o(($event) => goToClockInRule()),
        h: common_vendor.p({
          options: common_vendor.unref(options),
          direction: "column",
          active: common_vendor.unref(stepIndex)
        }),
        i: common_vendor.t(common_vendor.unref(clockInText)),
        j: common_vendor.t(common_vendor.unref(currentTime)),
        k: !common_vendor.unref(isEntry),
        l: common_vendor.o(($event) => clockIn()),
        m: common_vendor.unref(isEntry)
      }, common_vendor.unref(isEntry) ? {} : {}, {
        n: common_vendor.sr(morePopup, "10d1d18a-2", {
          "k": "morePopup"
        }),
        o: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10d1d18a"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/clockIn/clockIn.vue"]]);
wx.createPage(MiniProgramPage);
