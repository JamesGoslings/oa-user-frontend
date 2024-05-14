"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_layout2 = common_vendor.resolveComponent("layout");
  _easycom_layout2();
}
const _easycom_layout = () => "../../components/layout/layout.js";
if (!Math) {
  _easycom_layout();
}
const _sfc_main = {
  __name: "clockInRule",
  setup(__props) {
    let myLay = common_vendor.ref({ title: "考勤规则", mainColor: "#fff", btnColor: "#F5F5F5" });
    let modes = common_vendor.ref([
      {
        title: "考勤方式",
        contents: [
          {
            icon: "&#xe844;",
            title: "一键打卡",
            description: "在公司指点打卡地点 100m 范围内即可一键打卡"
          },
          {
            icon: "&#xe845;",
            title: "拍照打卡",
            description: "在指点打卡位置拍照上传指定照片完成打卡"
          }
        ]
      },
      {
        title: "考勤时间",
        contents: [
          {
            icon: "&#xe842;",
            title: "上班时间",
            description: "早上 9:00 开始上班"
          },
          {
            icon: "&#xe843;",
            title: "下班时间",
            description: "下午 6:00 结束工作"
          }
        ]
      },
      {
        title: "迟到早退",
        contents: [
          {
            icon: "&#xe846;",
            title: "迟到",
            description: "迟到超过 15 分钟算作迟到"
          },
          {
            icon: "&#xe846;",
            title: "早退",
            description: "早退超过 15 分钟算作早退"
          }
        ]
      },
      {
        title: "请假规则",
        contents: [
          {
            icon: "&#xe847;",
            title: "请假类型",
            description: "请假类型包括年假、病假、事假等"
          },
          {
            icon: "&#xe847;",
            title: "请假时长",
            description: "请假时长以小时为单位计算"
          }
        ]
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          lay: common_vendor.unref(myLay)
        }),
        b: common_vendor.f(common_vendor.unref(modes), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.f(item.contents, (it, i, i1) => {
              return {
                a: it.icon,
                b: common_vendor.t(it.title),
                c: common_vendor.t(it.description),
                d: i
              };
            }),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-711046ea"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/clockInRule/clockInRule.vue"]]);
wx.createPage(MiniProgramPage);
