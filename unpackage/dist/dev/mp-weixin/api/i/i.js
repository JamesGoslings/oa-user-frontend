"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common_utils_request = require("../../utils/common_utils/request.js");
let userUrl = "/admin/system/sysUser/";
function getUserInfo() {
  return utils_common_utils_request.request({ url: userUrl + "userInfo", method: "POST" });
}
function saveAndBackImg(userMsg) {
  let tempFilePath = "";
  common_vendor.index.chooseImage({
    count: 1,
    success: (chooseImageRes) => {
      tempFilePath = chooseImageRes.tempFilePaths[0];
      common_vendor.index.uploadFile({
        url: utils_common_utils_request.BASE_URL + userUrl + "uploadAvatar",
        filePath: tempFilePath,
        header: { token: common_vendor.index.getStorageSync("token") },
        name: "myFile",
        success: (uploadFileRes) => {
          let res = JSON.parse(uploadFileRes.data);
          let userInfo = common_vendor.index.getStorageSync("userMsg");
          userInfo.avatarUrl = res.data;
          common_vendor.index.setStorageSync("userMsg", userInfo);
          let avatar = userMsg.value.avatar;
          if (avatar !== void 0) {
            userMsg.value.avatar = res.data;
          } else if (userMsg.value.avatarUrl !== void 0) {
            userMsg.value.avatarUrl = res.data;
          }
        }
      });
    }
  });
}
exports.getUserInfo = getUserInfo;
exports.saveAndBackImg = saveAndBackImg;
