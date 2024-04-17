"use strict";
const common_vendor = require("../../common/vendor.js");
const api_telep_telep = require("../../api/telep/telep.js");
const api_linkMan_linkMan = require("../../api/linkMan/linkMan.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_treeLinkMan2 = common_vendor.resolveComponent("treeLinkMan");
  const _easycom_linkMan2 = common_vendor.resolveComponent("linkMan");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_myHeader2 + _easycom_treeLinkMan2 + _easycom_linkMan2 + _easycom_uni_fab2 + _easycom_loginFailPopup2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_treeLinkMan = () => "../../components/treeLinkMan/treeLinkMan.js";
const _easycom_linkMan = () => "../../components/linkMan/linkMan.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_myHeader + _easycom_treeLinkMan + _easycom_linkMan + _easycom_uni_fab + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "telep",
  setup(__props) {
    let isShowFab = common_vendor.ref(true);
    let menus = common_vendor.ref([
      {
        iconPath: "http://picture.gptkong.com/images/d8e7aa93d72f40baa50a7984def4aecc.png",
        text: "搜索"
      },
      {
        iconPath: "http://picture.gptkong.com/images/3ef797faa49f40f1932aabc738b902c1.png",
        text: "新建"
      },
      {
        iconPath: "http://picture.gptkong.com/images/28596118e63848d8b5bef54f0b70d788.png",
        text: "隐藏"
      }
    ]);
    let teleHead = common_vendor.ref({ title: "通讯录", fun: "0", color: "#FFF" });
    common_vendor.ref(false);
    let linkManBarMsg = common_vendor.ref([
      {
        topLinkTxt: "公司通讯录",
        isChoose: false,
        ico: "&#xe623;",
        myType: {},
        detail: []
      },
      {
        topLinkTxt: "个人通讯录",
        isChoose: false,
        ico: "&#xe601;",
        myType: { typeId: 2, typeName: "个人通讯录" },
        detail: []
      },
      {
        topLinkTxt: "公共通讯录",
        isChoose: false,
        ico: "&#xec93;",
        myType: { typeId: 3, typeName: "公共通讯录" },
        detail: []
      }
    ]);
    function trigger(e) {
      console.log(e.index);
      const i = e.index;
      if (i === 0) {
        common_vendor.index.navigateTo({
          url: "/pages/searchLinkMan/searchLinkMan"
        });
      } else if (i === 1) {
        common_vendor.index.navigateTo({
          url: "/pages/editLinkManPage/editLinkManPage"
        });
      } else if (i == 2) {
        isShowFab.value = false;
      }
    }
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
      linkManBarMsg.value[0].detail = data;
    };
    const privateLinkManList = async () => {
      let { data: { data } } = await api_linkMan_linkMan.getPrivateLinkManList();
      linkManBarMsg.value[1].detail = data;
    };
    const publicLinkManList = async () => {
      let { data: { data } } = await api_linkMan_linkMan.getPublicLinkManList();
      linkManBarMsg.value[2].detail = data;
    };
    common_vendor.index.setStorageSync("isShowTelePage", true);
    common_vendor.onShow(() => {
      if (common_vendor.index.getStorageSync("isShowTelePage")) {
        linkManInfo();
        privateLinkManList();
        publicLinkManList();
        common_vendor.index.setStorageSync("isShowTelePage", false);
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          head: common_vendor.unref(teleHead)
        }),
        b: common_vendor.o(($event) => goSearch()),
        c: common_vendor.f(common_vendor.unref(linkManBarMsg), (item, index, i0) => {
          return common_vendor.e({
            a: item.ico,
            b: common_vendor.t(item.topLinkTxt),
            c: !item.isChoose
          }, !item.isChoose ? {} : {}, {
            d: common_vendor.o(($event) => openLinkManList(item), index),
            e: item.isChoose && index === 0
          }, item.isChoose && index === 0 ? {
            f: "2f532b38-1-" + i0,
            g: common_vendor.p({
              dataList: item.detail
            })
          } : item.isChoose && index > 0 ? {
            i: "2f532b38-2-" + i0,
            j: common_vendor.p({
              dataList: item.detail,
              myType: item.myType
            })
          } : {}, {
            h: item.isChoose && index > 0,
            k: index
          });
        }),
        d: common_vendor.unref(isShowFab)
      }, common_vendor.unref(isShowFab) ? {
        e: common_vendor.o(trigger),
        f: common_vendor.p({
          horizontal: "right",
          content: common_vendor.unref(menus)
        })
      } : {
        g: common_vendor.o(($event) => common_vendor.isRef(isShowFab) ? isShowFab.value = true : isShowFab = true)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f532b38"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/telep/telep.vue"]]);
wx.createPage(MiniProgramPage);
