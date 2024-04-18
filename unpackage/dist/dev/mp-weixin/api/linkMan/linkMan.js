"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_request = require("../../utils/common_utils/request.js");
const linkManUrl = "/admin/system/linkMan/";
let userId = 0;
userId = common_vendor.index.getStorageSync("userMsg").userId;
function getPrivateLinkManList() {
  return utils_common_utils_request.request({ url: linkManUrl + "getPrivateList/" + userId });
}
function getPublicLinkManList() {
  return utils_common_utils_request.request({ url: linkManUrl + "getPublicList" });
}
function updatePrivateLinkMan(linkManData = {}) {
  return utils_common_utils_request.request({ url: linkManUrl + "updatePrivateLinkMan", method: "PUT", data: linkManData });
}
function savePrivateLinkMan(linkManData = {}) {
  linkManData.userId = userId;
  return utils_common_utils_request.request({ url: linkManUrl + "savePrivateLinkMan", method: "POST", data: linkManData });
}
function removePrivateLinkMan(id = 0) {
  return utils_common_utils_request.request({ url: linkManUrl + "remove/" + id, method: "DELETE" });
}
function searchLinkManList(key = "") {
  return utils_common_utils_request.request({ url: linkManUrl + "searchLinkManList/" + userId + "/" + key });
}
exports.getPrivateLinkManList = getPrivateLinkManList;
exports.getPublicLinkManList = getPublicLinkManList;
exports.removePrivateLinkMan = removePrivateLinkMan;
exports.savePrivateLinkMan = savePrivateLinkMan;
exports.searchLinkManList = searchLinkManList;
exports.updatePrivateLinkMan = updatePrivateLinkMan;
