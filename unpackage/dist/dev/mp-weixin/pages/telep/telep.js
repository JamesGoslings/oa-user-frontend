"use strict";
const common_vendor = require("../../common/vendor.js");
const api_telep_telep = require("../../api/telep/telep.js");
const api_privateLinkMan_privateLinkMan = require("../../api/privateLinkMan/privateLinkMan.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_treeLinkMan2 = common_vendor.resolveComponent("treeLinkMan");
  const _easycom_privateLinkMan2 = common_vendor.resolveComponent("privateLinkMan");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_myHeader2 + _easycom_treeLinkMan2 + _easycom_privateLinkMan2 + _easycom_loginFailPopup2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_treeLinkMan = () => "../../components/treeLinkMan/treeLinkMan.js";
const _easycom_privateLinkMan = () => "../../components/privateLinkMan/privateLinkMan.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_myHeader + _easycom_treeLinkMan + _easycom_privateLinkMan + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "telep",
  setup(__props) {
    common_vendor.ref("&#xe607;");
    let teleHead = common_vendor.ref({ title: "通讯录", fun: "0", color: "#FFF" });
    common_vendor.ref(false);
    let linkManBarMsg = common_vendor.ref([
      {
        topLinkTxt: "公司通讯录",
        isChoose: false,
        ico: "&#xe623;"
      },
      {
        topLinkTxt: "个人通讯录",
        isChoose: false,
        ico: "&#xe601;"
      },
      {
        topLinkTxt: "公共通讯录",
        isChoose: false,
        ico: "&#xec93;"
      }
    ]);
    let linkManBarDetail = common_vendor.ref([]);
    let privateLinkManBarDetail = common_vendor.ref([]);
    function goSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/searchLinkMan/searchLinkMan"
      });
    }
    function openLinkManList(item) {
      item.isChoose = !item.isChoose;
    }
    const linkManInfo = async () => {
      let { data: { data } } = await api_telep_telep.getLinkManListInfo();
      linkManBarDetail.value = data;
    };
    const privateLinkManList = async () => {
      let { data: { data } } = await api_privateLinkMan_privateLinkMan.getPrivateLinkManList();
      privateLinkManBarDetail.value = data;
    };
    let isShow = true;
    common_vendor.onShow(() => {
      if (isShow) {
        linkManInfo();
        privateLinkManList();
        isShow = false;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(teleHead)
        }),
        b: common_vendor.o(($event) => goSearch()),
        c: common_vendor.f(common_vendor.unref(linkManBarMsg), (item, index, i0) => {
          return common_vendor.e({
            a: item.ico,
            b: common_vendor.t(item.topLinkTxt),
            c: !item.isChoose
          }, !item.isChoose ? {
            d: common_vendor.o(($event) => openLinkManList(item), index)
          } : {
            e: common_vendor.o(($event) => item.isChoose = !item.isChoose, index)
          }, {
            f: item.isChoose && index === 0
          }, item.isChoose && index === 0 ? {
            g: "2f532b38-1-" + i0,
            h: common_vendor.p({
              dataList: common_vendor.unref(linkManBarDetail)
            })
          } : item.isChoose && index === 1 ? {
            j: "2f532b38-2-" + i0,
            k: common_vendor.p({
              dataList: common_vendor.unref(privateLinkManBarDetail)
            })
          } : {}, {
            i: item.isChoose && index === 1,
            l: index
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f532b38"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/telep/telep.vue"]]);
wx.createPage(MiniProgramPage);
