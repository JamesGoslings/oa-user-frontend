"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_myHeader2 = common_vendor.resolveComponent("myHeader");
  _easycom_myHeader2();
}
const _easycom_myHeader = () => "../../components/myHeader/myHeader.js";
if (!Math) {
  _easycom_myHeader();
}
const _sfc_main = {
  __name: "editLinkManPage",
  setup(__props) {
    let head = common_vendor.ref({ title: "", fun: "0", color: "#F5F5F5" });
    let linkMan = common_vendor.ref({ id: 0, name: "", phone: "", relationship: "" });
    common_vendor.ref({});
    let editMode = common_vendor.ref([
      {
        ico: "&#xe615;",
        placeholder: "名称",
        key: "name"
      },
      {
        ico: "&#xe6d0;",
        placeholder: "电话号码",
        key: "phone"
      },
      {
        ico: "&#xe63e;",
        placeholder: "与联系人的关系",
        key: "relationship"
      }
    ]);
    common_vendor.onLoad((data) => {
      linkMan.value = JSON.parse(data.originData);
    });
    function submitMsg() {
      common_vendor.index.showModal({
        title: "是否保存修改",
        success: (res) => {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
      console.log("============V1============");
      console.log(linkMan.value);
      console.log("============V1============");
    }
    function goBack() {
      common_vendor.index.showModal({
        title: "未保存修改是否退出",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.navigateBack();
          } else if (res.cancel) {
            console.log("用户点击取消~");
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          head: common_vendor.unref(head)
        }),
        b: common_vendor.o(($event) => goBack()),
        c: common_vendor.o(($event) => submitMsg()),
        d: common_vendor.f(common_vendor.unref(editMode), (item, index, i0) => {
          return {
            a: item.ico,
            b: item.placeholder,
            c: common_vendor.unref(linkMan)[item.key],
            d: common_vendor.o(($event) => common_vendor.unref(linkMan)[item.key] = $event.detail.value, index),
            e: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c733174"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/editLinkManPage/editLinkManPage.vue"]]);
wx.createPage(MiniProgramPage);
