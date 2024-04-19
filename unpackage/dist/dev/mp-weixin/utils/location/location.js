"use strict";
const common_vendor = require("../../common/vendor.js");
let longitude = 0;
let latitude = 0;
let missingLongitude = 0.06051;
let missingLatitude = 823e-5;
let locationData = { simpleLocation: "未授权位置信息", locationDetail: "未授权位置信息" };
function getLocation() {
  common_vendor.index.getLocation({
    // type: 'wgs84',
    type: "gcj02",
    geocode: true,
    success: function(res) {
      longitude = res.longitude;
      latitude = res.latitude;
      console.log(res);
      console.log("当前位置的经度：" + res.longitude);
      console.log("当前位置的纬度：" + res.latitude);
      if (res.address !== void 0) {
        console.log(res.address);
      } else {
        console.log("无法直接获取到地址信息");
      }
      getAdress();
    },
    fail(error) {
      console.log("失败", error);
    }
  });
  return locationData;
}
function getAdress() {
  common_vendor.index.request({
    header: {
      "Content-Type": "application/text"
    },
    // key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
    url: "https://restapi.amap.com/v3/geocode/regeo?output=JSON&location=" + (longitude + missingLongitude) + "," + (latitude + missingLatitude) + "&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all",
    success(res) {
      console.log(res);
      if (res.statusCode === 200) {
        const regoe = res.data.regeocode;
        const msg = regoe.addressComponent;
        const aois = regoe.aois;
        const locationStr = msg.province + aois[0].name;
        locationData.simpleLocation = locationStr;
        locationData.locationDetail = regoe.formatted_address;
        console.log("获取中文街道地理位置成功", locationStr);
        console.log(aois);
      } else {
        console.log("获取信息失败，请重试！");
      }
    }
  });
  return locationData;
}
function cancelChoose() {
  common_vendor.index.showModal({
    title: "提示",
    content: "若点击不授权，将无法使用位置功能",
    cancelText: "不授权",
    cancelColor: "#999",
    confirmText: "授权",
    confirmColor: "#f94218",
    success(res) {
      console.log(res);
      if (res.confirm) {
        common_vendor.index.openSetting({
          success(res2) {
            console.log(res2.authSetting);
          }
        });
      } else if (res.cancel) {
        console.log("用户点击不授权");
      }
    }
  });
}
exports.cancelChoose = cancelChoose;
exports.getLocation = getLocation;
