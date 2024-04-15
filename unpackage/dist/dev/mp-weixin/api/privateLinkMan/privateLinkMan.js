"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_request = require("../../utils/common_utils/request.js");
const privateLinkManUrl = "/admin/system/privateLinkMan/";
let userId = 0;
userId = common_vendor.index.getStorageSync("userMsg").userId;
function getPrivateLinkManList() {
  console.log("=================ID==================");
  console.log(common_vendor.index.getStorageSync("userMsg").userId);
  userId = common_vendor.index.getStorageSync("userMsg").userId;
  console.log(common_vendor.index.getStorageSync("userMsg"));
  console.log("=================ID==================");
  return utils_common_utils_request.request({ url: privateLinkManUrl + "getList/" + userId });
}
function updatePrivateLinkMan(linkManData = {}) {
  return utils_common_utils_request.request({ url: privateLinkManUrl + "update", method: "PUT", data: linkManData });
}
exports.getPrivateLinkManList = getPrivateLinkManList;
exports.updatePrivateLinkMan = updatePrivateLinkMan;
