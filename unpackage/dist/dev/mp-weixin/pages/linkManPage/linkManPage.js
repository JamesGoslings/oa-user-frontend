"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/common_utils/system.js");
const api_linkMan_linkMan = require("../../api/linkMan/linkMan.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_loginFailPopup2 = common_vendor.resolveComponent("loginFailPopup");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_loginFailPopup2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_loginFailPopup = () => "../../components/loginFailPopup/loginFailPopup.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_loginFailPopup)();
}
const _sfc_main = {
  __name: "linkManPage",
  setup(__props) {
    let justifyContentValue = "space-between";
    justifyContentValue = "flex-start";
    let isClickMore = common_vendor.ref(false);
    let topPx = common_vendor.ref(0);
    function clickMore() {
      isClickMore.value = !isClickMore.value;
      topPx.value = topPx.value === 0 ? 13 : 0;
    }
    let detail = common_vendor.ref({});
    let linkMan = common_vendor.ref({});
    common_vendor.onShow(() => {
      detail.value = common_vendor.index.getStorageSync("linkManDetail");
      linkMan.value = detail.value.linkMan;
      setLinkManAvatar();
    });
    function goBack() {
      common_vendor.index.navigateBack();
    }
    function goEdit() {
      common_vendor.index.navigateTo({
        url: "/pages/editLinkManPage/editLinkManPage?originData=" + JSON.stringify(linkMan.value)
      });
    }
    const removeOne = async () => {
      let { data } = await api_linkMan_linkMan.removePrivateLinkMan(linkMan.value.id);
      console.log(data);
    };
    function removeLinkMan() {
      common_vendor.index.showModal({
        title: "是否删除该联系人",
        success: (res) => {
          if (res.confirm) {
            console.log("用户点击确定");
            removeOne().then(() => {
              common_vendor.index.navigateBack();
              common_vendor.index.setStorageSync("isShowTelePage", true);
              common_vendor.index.showModal({
                title: "删除成功",
                showCancel: false
              });
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
    let linkManAvatar = common_vendor.ref("/static/image/default_avatar.png");
    function setLinkManAvatar() {
      if (detail.value.typeId === 2) {
        linkManAvatar.value = "/static/image/logo.png";
        return;
      }
      let url = linkMan.value.avatarUrl;
      if (url === void 0 || url === null || url === "") {
        return;
      }
      linkManAvatar.value = url;
    }
    function call() {
      common_vendor.index.makePhoneCall({
        phoneNumber: linkMan.value.phone,
        success: () => {
          console.log("拨号成功了!");
        },
        fail: () => {
          console.log("拨号失败了。");
        },
        complete: () => {
          console.log("操作结束~");
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => goBack()),
        b: common_vendor.unref(detail).typeId === 2
      }, common_vendor.unref(detail).typeId === 2 ? common_vendor.e({
        c: common_vendor.o(($event) => clickMore()),
        d: common_vendor.unref(topPx) + "rpx",
        e: common_vendor.unref(isClickMore)
      }, common_vendor.unref(isClickMore) ? {
        f: common_vendor.o(($event) => goEdit()),
        g: common_vendor.o(($event) => removeLinkMan())
      } : {}) : {}, {
        h: common_vendor.unref(justifyContentValue),
        i: common_vendor.unref(linkManAvatar),
        j: common_vendor.t(common_vendor.unref(linkMan).name),
        k: common_vendor.unref(detail).typeId === 1
      }, common_vendor.unref(detail).typeId === 1 ? {
        l: common_vendor.p({
          title: common_vendor.unref(linkMan).post,
          note: "联系人职位"
        })
      } : common_vendor.unref(detail).typeId === 2 ? {
        n: common_vendor.p({
          title: common_vendor.unref(linkMan).relationship,
          note: "关系",
          border: false
        })
      } : {}, {
        m: common_vendor.unref(detail).typeId === 2,
        o: common_vendor.o(($event) => call()),
        p: common_vendor.p({
          title: common_vendor.unref(linkMan).phone,
          note: "联系人手机号码"
        }),
        q: common_vendor.unref(detail).typeId === 2
      }, common_vendor.unref(detail).typeId === 2 ? {
        r: common_vendor.p({
          title: common_vendor.unref(linkMan).createTime,
          note: "创建时间"
        })
      } : {}, {
        s: common_vendor.p({
          title: common_vendor.unref(detail).typeName,
          note: "当前通讯录"
        }),
        t: common_vendor.p({
          border: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8f4dddb7"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/linkManPage/linkManPage.vue"]]);
wx.createPage(MiniProgramPage);
