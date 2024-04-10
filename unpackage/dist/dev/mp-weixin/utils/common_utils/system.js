"use strict";
const common_vendor = require("../../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const statusBarHeight = SYSTEM_INFO.statusBarHeight || 0;
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return height + (top - statusBarHeight) * 2;
  } else {
    return 40;
  }
};
exports.getTitleBarHeight = getTitleBarHeight;
exports.statusBarHeight = statusBarHeight;
