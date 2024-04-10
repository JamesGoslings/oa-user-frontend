"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login_login = require("../../api/login/login.js");
const api_i_i = require("../../api/i/i.js");
require("../../utils/common_utils/request.js");
require("../../utils/common_utils/common.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let user = common_vendor.ref({ username: "", password: "" });
    let showPwd = common_vendor.ref(false);
    let msg = common_vendor.ref("");
    const info = async () => {
      let { data: { data } } = await api_i_i.getUserInfo();
      common_vendor.index.setStorageSync("userMsg", data);
      console.log("===========DATA2===========");
      console.log(common_vendor.index.getStorageSync("userMsg"));
      console.log("===========DATA2===========");
    };
    const login = async () => {
      if (user.value.username === "" || user.value.password === "") {
        msg.value = "* 别瞎输，用户名和密码都不能为空";
        return;
      }
      let { data } = await api_login_login.useLogin(user.value);
      common_vendor.index.hideLoading();
      user.value.username = "";
      user.value.password = "";
      console.log(data);
      if (data.code !== 200) {
        console.log(data.message);
        msg.value = "* " + data.message;
        return;
      }
      common_vendor.index.setStorageSync("token", data.data.token);
      info();
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(user).username,
        b: common_vendor.o(($event) => common_vendor.unref(user).username = $event.detail.value),
        c: !common_vendor.unref(showPwd),
        d: common_vendor.unref(user).password,
        e: common_vendor.o(($event) => common_vendor.unref(user).password = $event.detail.value),
        f: common_vendor.unref(showPwd)
      }, common_vendor.unref(showPwd) ? {} : {}, {
        g: common_vendor.o(($event) => common_vendor.isRef(showPwd) ? showPwd.value = !common_vendor.unref(showPwd) : showPwd = !common_vendor.unref(showPwd)),
        h: common_vendor.t(common_vendor.unref(msg)),
        i: common_vendor.o(($event) => login())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/HBuilder_Files/HBulider_Pro/Demo002/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
