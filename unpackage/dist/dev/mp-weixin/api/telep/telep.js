"use strict";
const utils_common_utils_request = require("../../utils/common_utils/request.js");
const telepUrl = "/admin/system/dept/";
function getLinkManListInfo() {
  return utils_common_utils_request.request({ url: telepUrl + "linkManListInfo" });
}
exports.getLinkManListInfo = getLinkManListInfo;
