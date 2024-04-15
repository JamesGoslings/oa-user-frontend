"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_request = require("../../utils/common_utils/request.js");
const privateLinkManUrl = "/admin/system/privateLinkMan";
let userId = 0;
userId = common_vendor.index.getStorageSync("userMsg").userId;
function getPrivateLinkManList() {
  return utils_common_utils_request.request({ url: privateLinkManUrl + "/getList/" + userId });
}
exports.getPrivateLinkManList = getPrivateLinkManList;
