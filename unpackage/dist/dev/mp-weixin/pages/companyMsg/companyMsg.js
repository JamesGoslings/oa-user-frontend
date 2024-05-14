"use strict";
const common_vendor = require("../../common/vendor.js");
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
  __name: "companyMsg",
  setup(__props) {
    let myLay = common_vendor.ref({ title: "企业信息", mainColor: "#fff", btnColor: "#F5F5F5" });
    let basicMsg = common_vendor.ref([
      {
        ico: "&#xe674;",
        icoText: "名称",
        content: "牛马科技有限公司"
      },
      {
        ico: "&#xe64b;",
        icoText: "地址",
        content: "四川省成都信息工程大学15栋3027"
      },
      {
        ico: "&#xe645;",
        icoText: "电话",
        content: "19982033675"
      },
      {
        ico: "&#xe672;",
        icoText: "邮箱",
        content: "3248175240@qq.com"
      },
      {
        ico: "&#xea91;",
        icoText: "公众号",
        content: "我的OA办公系统公众号"
      }
    ]);
    function goBanner() {
      common_vendor.index.navigateTo({
        url: "/pages/banner/banner"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          lay: common_vendor.unref(myLay)
        }),
        b: common_vendor.f(common_vendor.unref(basicMsg), (item, index, i0) => {
          return common_vendor.e({
            a: item.ico,
            b: common_vendor.t(item.icoText + "："),
            c: index !== 4
          }, index !== 4 ? {
            d: common_vendor.t(item.content)
          } : {
            e: common_vendor.t(item.content),
            f: common_vendor.o(($event) => goBanner(), index)
          }, {
            g: index
          });
        }),
        c: common_vendor.p({
          margin: "0 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-84c712f4"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/companyMsg/companyMsg.vue"]]);
wx.createPage(MiniProgramPage);
