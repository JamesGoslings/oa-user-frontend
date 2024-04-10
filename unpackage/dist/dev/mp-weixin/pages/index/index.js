"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function toLogin() {
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    }
    let swiContent = common_vendor.ref([
      {
        imgPath: "/static/image/draw/多端协同(1).png",
        mainTxt: "权 限 管 理",
        aTxt: "实现多端合作，分工明确，有效提高工作效率"
      },
      {
        imgPath: "/static/image/draw/数据查找(1).png",
        mainTxt: "绩 效 查 询",
        aTxt: "绩效工资在线查询，对自己更有B数"
      },
      {
        imgPath: "/static/image/draw/用户登录(1).png",
        mainTxt: "",
        aTxt: ""
      }
    ]);
    let dotIndex = common_vendor.ref(0);
    function change(e) {
      dotIndex.value = e.detail.current;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(swiContent), (item, index, i0) => {
          return common_vendor.e({
            a: item.imgPath,
            b: index === 2
          }, index === 2 ? {
            c: common_vendor.o(($event) => toLogin(), index)
          } : {}, {
            d: index !== 2
          }, index !== 2 ? {
            e: common_vendor.t(item.mainTxt),
            f: common_vendor.t(item.aTxt)
          } : {}, {
            g: index
          });
        }),
        b: common_vendor.o(change),
        c: common_vendor.f(3, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.unref(dotIndex) === index ? "blue" : "#F5F5F5"
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
