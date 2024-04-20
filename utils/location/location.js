// 定义直接获取的经纬度数据的接收
let longitude = 0
let latitude = 0

// 手动粗略测出的经纬度误差
let missingLongitude = 0.06051
let missingLatitude = 0.00823

// export let locationData = {}
// let locationData = {simpleLocation: '未授权位置信息', locationDetail: '未授权位置信息'}
// 获取当前定位的经纬度（有误差）
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

// 向高德的接口发请求，将经纬度解析为具体地址
export function getAdress(){
	return new Promise((resolve,reject)=>{
	let locationData = {simpleLocation: '未授权位置信息', locationDetail: '未授权位置信息'}
		uni.request({
			header:{
				"Content-Type": "application/text"
			},
			// key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
			url:'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location='+(longitude + missingLongitude)+','+(latitude + missingLatitude)+'&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all',
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

