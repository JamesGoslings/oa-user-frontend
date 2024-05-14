"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_request = require("../../utils/common_utils/request.js");
const clockInRecordUrl = "/admin/system/clockInRecord/";
function addClockInRecord(record) {
  return utils_common_utils_request.request({ url: clockInRecordUrl + "save", method: "POST", data: record });
}
function getRecordCountThisMonth() {
  const uId = common_vendor.index.getStorageSync("userMsg").userId;
  return utils_common_utils_request.request({ url: clockInRecordUrl + "getCountOneMonth/" + uId });
}
function getFirstRecord() {
  const uId = common_vendor.index.getStorageSync("userMsg").userId;
  return utils_common_utils_request.request({ url: clockInRecordUrl + "getFirst/" + uId });
}
function getClockInRecordList() {
  const uId = common_vendor.index.getStorageSync("userMsg").userId;
  return utils_common_utils_request.request({ url: clockInRecordUrl + "getAll/" + uId });
}
exports.addClockInRecord = addClockInRecord;
exports.getClockInRecordList = getClockInRecordList;
exports.getFirstRecord = getFirstRecord;
exports.getRecordCountThisMonth = getRecordCountThisMonth;
