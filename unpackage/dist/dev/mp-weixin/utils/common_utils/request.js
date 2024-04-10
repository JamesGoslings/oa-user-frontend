"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_common = require("./common.js");
let BASE_URL = utils_common_utils_common.packApiUrl("");
function request(config = {}) {
  let {
    url,
    method = "GET",
    header = { token: "" },
    data = {}
  } = config;
  url = BASE_URL + url;
  header.token = common_vendor.index.getStorageSync("token");
  common_vendor.index.showLoading({
    title: "资源加载中"
  });
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method,
      header,
      data,
      success: (res) => {
        let code = res.data.code;
        if (code === 200) {
          resolve(res);
        } else {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.message + res.data.data,
            showCancel: false
          });
          reject(res.data);
        }
      },
      complete: () => {
        common_vendor.index.hideLoading();
      }
    });
  });
}
exports.BASE_URL = BASE_URL;
exports.request = request;
