"use strict";
const common_vendor = require("../../common/vendor.js");
let longitude = 0;
let latitude = 0;
function getLocation() {
  return new Promise((resolve, reject) => {
    common_vendor.index.getLocation({
      // type: 'wgs84',
      type: "gcj02",
      geocode: true,
      success: async function(res) {
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
        let myData = await getAdress();
        resolve(myData);
      },
      fail(error) {
        console.log("失败", error);
        reject(error);
      }
    });
  });
}
let key = "91e69218a34541c5b850c28a0f4a908e";
function getAdress() {
  return new Promise((resolve, reject) => {
    let locationData = { simpleLocation: "未授权位置信息", locationDetail: "未授权位置信息" };
    common_vendor.index.request({
      header: {
        "Content-Type": "application/text"
      },
      // key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
      url: "https://restapi.amap.com/v3/geocode/regeo?output=JSON&location=" + longitude + "," + latitude + "&key=" + key + "&radius=1000&extensions=all",
      success: function(res) {
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
          resolve(locationData);
        } else {
          console.log("获取信息失败，请重试！");
        }
      }
    });
  });
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
function distance(lon1, lat1, lon2, lat2) {
  let dLon = toRadians(lon2 - lon1);
  let dLat = toRadians(lat2 - lat1);
  lon1 = toRadians(lon1);
  lon2 = toRadians(lon2);
  lat1 = toRadians(lat1);
  lat2 = toRadians(lat2);
  const r = 6371 * 1e3;
  let sqrtContent = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
  let distance2 = 2 * r * Math.asin(Math.sqrt(sqrtContent));
  return distance2;
}
function toRadians(angle) {
  return angle * (Math.PI / 180);
}
exports.cancelChoose = cancelChoose;
exports.distance = distance;
exports.getLocation = getLocation;
