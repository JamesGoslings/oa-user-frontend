"use strict";
const common_vendor = require("../../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const HOST = "http://localhost:8800";
const API_HOST = SYSTEM_INFO.uniPlatform === "web" ? "" : HOST;
const API_PROXY = SYSTEM_INFO.uniPlatform === "web" ? "/h5api" : "";
const packApiUrl = (url = "") => {
  console.log(API_HOST);
  if (url.slice(0, 4) === "http")
    return url;
  else
    return `${API_HOST}${API_PROXY}${url}`;
};
exports.packApiUrl = packApiUrl;
