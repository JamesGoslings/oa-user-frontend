"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_request = require("../../utils/common_utils/request.js");
let indexUrl = utils_common_utils_request.BASE_URL + "/admin/system/index/";
function useLogin(user) {
  common_vendor.index.showLoading();
  return common_vendor.index.request({
    url: indexUrl + "login",
    data: user,
    method: "POST"
  });
}
exports.useLogin = useLogin;
