// 定义直接获取的经纬度数据的接收
let longitude = 0
let latitude = 0

// 手动粗略测出的经纬度误差（模拟器环境下存在的误差）
let missingLongitude = 0.06051
let missingLatitude = 0.00823

// 固定的经纬度坐标（寝室坐标）
const location = [103.98450168185764, 30.582784830729167]

// 获取当前定位的经纬度并逆编码成中文地址（模拟器环境下有误差）
export function getLocation(){
	return new Promise((resolve,reject)=>{
		uni.getLocation({
		  // type: 'wgs84',
		  type: 'gcj02',
		  geocode:true,
		  success: async function (res) {
			longitude = res.longitude
			latitude = res.latitude
			console.log(res)
			console.log('当前位置的经度：' + res.longitude)
			console.log('当前位置的纬度：' + res.latitude)
			if(res.address !== undefined){
				console.log(res.address);
			}else{
				console.log('无法直接获取到地址信息');
			}
			let myData = await getAdress()
			resolve(myData)
		  }, 
		  fail (error) {
			console.log('失败', error)
			reject(error)
		  }
		})
	})
}

// 仅仅只是返回当前位置的经纬度
export function getOnlyLocation(){
	return new Promise((resolve,reject)=>{
		uni.getLocation({
		  // type: 'wgs84',
		  type: 'gcj02',
		  geocode:true,
		  success: async function (res) {
			console.log(res)
			console.log('当前位置的经度：' + res.longitude)
			console.log('当前位置的纬度：' + res.latitude)
			let myLocation = [res.longitude, res.latitude]
			resolve(myLocation)
		  }, 
		  fail (error) {
			console.log('失败', error)
			reject(error)
		  }
		})
	})
}

let key = '91e69218a34541c5b850c28a0f4a908e'
// 向高德的接口发请求，将经纬度解析为具体地址
export function getAdress(){
	return new Promise((resolve,reject)=>{
	let locationData = {simpleLocation: '未授权位置信息', locationDetail: '未授权位置信息'}
		uni.request({
			header:{
				"Content-Type": "application/text"
			},
			// key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
			url:'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location='+ longitude +','+ latitude +'&key=' + key + '&radius=1000&extensions=all',
			success: function (res) {
				console.log(res)
				if(res.statusCode===200){
					// that.citydata=re.data.regeocode.addressComponent.city
					const regoe = res.data.regeocode
					const msg = regoe.addressComponent
					const aois = regoe.aois
					const locationStr = msg.province + aois[0].name
					// 赋值返回值
					locationData.simpleLocation = locationStr
					locationData.locationDetail = regoe.formatted_address
					console.log("获取中文街道地理位置成功",locationStr)
					console.log(aois);
					resolve(locationData)
				}else{
					console.log("获取信息失败，请重试！")
				}
			 }
		})
	})
}

// 用户授权过程中，用户第一次选择不授权的时进行的弹窗
export function cancelChoose(){
	uni.showModal({
	  title: '提示',
	  content: '若点击不授权，将无法使用位置功能',
	  cancelText: '不授权',
	  cancelColor: '#999',
	  confirmText: '授权',
	  confirmColor: '#f94218',
	  success (res) {
	    console.log(res)
	    if (res.confirm) {
	      // 选择弹框内授权
	      uni.openSetting({
	        success (res) {
	          console.log(res.authSetting)
	        }
	      })
	    } else if (res.cancel) {
	      // 选择弹框内 不授权
	      console.log('用户点击不授权')
	    }
	  }
	})
}

// 根据两个位置的经纬度来计算两个位置间的距离
export function distance(lon1,lat1,lon2,lat2){
	// 角度转弧度
	let dLon = toRadians(lon2 - lon1)
	let dLat = toRadians(lat2 - lat1)
	lon1 = toRadians(lon1)
	lon2 = toRadians(lon2)
	lat1 = toRadians(lat1)
	lat2 = toRadians(lat2)
	// 地球平均半径
	const r = 6371 * 1000
	// 根号下的内容
	let sqrtContent = Math.pow(Math.sin(dLat / 2.0), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2.0),2)
	// 具体计算
	let distance = 2.0 * r * Math.asin(Math.sqrt(sqrtContent))
	return distance
}
// 辅助函数，将角度转换为弧度  
function toRadians(angle) {
	return angle * (Math.PI / 180);
}
// 计算和寝室坐标之间的距离
export function distanceWithCompany(lon,lat){
	return distance(lon, lat, location[0], location[1])
}