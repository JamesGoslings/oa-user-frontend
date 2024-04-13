"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  const _easycom_treeLinkMan2 = common_vendor.resolveComponent("treeLinkMan");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_myHeader2 + _easycom_treeLinkMan2 + _easycom_loginFailPopup2)();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
const _easycom_treeLinkMan = () => "../../components/treeLinkMan/treeLinkMan.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_myHeader + _easycom_treeLinkMan + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "telep",
  setup(__props) {
    let teleHead = common_vendor.ref({ title: "通讯录", fun: "0", color: "#FFF" });
    common_vendor.ref(false);
    let linkManBarMsg = common_vendor.ref([
      {
        topLinkTxt: "公司通讯录",
        isChoose: false
      },
      {
        topLinkTxt: "个人通讯录",
        isChoose: false
      },
      {
        topLinkTxt: "公共通讯录",
        isChoose: false
      }
    ]);
    let linkManBarDetail = common_vendor.ref([
      {
        deptName: "总经理",
        leader: {
          name: "李四",
          phone: "10086",
          post: "总经理"
        },
        isChoose: false,
        children: []
      },
      {
        deptName: "研发中心",
        leader: {
          name: "李四",
          phone: "10086",
          post: "研发部经理"
        },
        isChoose: false,
        floor: 0,
        children: [
          {
            deptName: "产品研发部",
            leader: {
              name: "李四",
              phone: "10086",
              post: "产品经理"
            },
            isChoose: false,
            floor: 1,
            children: []
          },
          {
            deptName: "运维部",
            leader: {
              name: "李四",
              phone: "10086",
              psot: "运维经理"
            },
            isChoose: false,
            floor: 1,
            children: [
              {
                deptName: "运维支部1",
                leader: {
                  name: "李四",
                  phone: "10086",
                  post: "运维一支部经理"
                },
                isChoose: false,
                floor: 2,
                children: []
              },
              {
                deptName: "运维支部2",
                leader: {
                  name: "李四",
                  phone: "10086",
                  post: "运维二支部经理"
                },
                isChoose: false,
                floor: 2,
                children: []
              }
            ]
          },
          {
            deptName: "平台运营部",
            leader: {
              name: "李四",
              phone: "10086",
              post: "平台运营经理"
            },
            isChoose: false,
            floor: 1,
            children: []
          }
        ]
      },
      {
        deptName: "营销中心",
        leader: {
          name: "李四",
          phone: "10086",
          post: "营销部经理"
        },
        isChoose: false,
        floor: 0,
        children: []
      },
      {
        deptName: "行政中心",
        leader: {
          name: "李四",
          phone: "10086",
          post: "行政中心经理"
        },
        isChoose: false,
        floor: 0,
        children: []
      }
    ]);
    function goSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/searchLinkMan/searchLinkMan"
      });
    }
    function openLinkManList(item) {
      item.isChoose = !item.isChoose;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(teleHead)
        }),
        b: common_vendor.o(($event) => goSearch()),
        c: common_vendor.f(common_vendor.unref(linkManBarMsg), (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.topLinkTxt),
            b: !item.isChoose
          }, !item.isChoose ? {
            c: common_vendor.o(($event) => openLinkManList(item), index)
          } : {
            d: common_vendor.o(($event) => item.isChoose = !item.isChoose, index)
          }, {
            e: item.isChoose && index === 0
          }, item.isChoose && index === 0 ? {
            f: "2f532b38-1-" + i0,
            g: common_vendor.p({
              dataList: common_vendor.unref(linkManBarDetail)
            })
          } : {}, {
            h: index
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f532b38"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/telep/telep.vue"]]);
wx.createPage(MiniProgramPage);
