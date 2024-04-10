import { request } from "../../utils/common_utils/request";
import { BASE_URL } from "../../utils/common_utils/request";

let indexUrl = "/admin/system/index/"
let userUrl = "/admin/system/sysUser/"

// export function getInfo(){
// 	return request({url:indexUrl+"info"})
// }

export function getUserInfo(){
	return request({url:userUrl + 'userInfo',method:"POST"})
}

export function saveAndBackImg(userMsg) {
	let tempFilePath = ''
	uni.chooseImage({
		count:1,
		success: (chooseImageRes) => {
			tempFilePath = chooseImageRes.tempFilePaths[0];
			uni.uploadFile({
				url: BASE_URL + userUrl + 'uploadAvatar',
				filePath: tempFilePath,
				header:{token:uni.getStorageSync('token')},
				name:'myFile',
				success: (uploadFileRes) => {
					let res = JSON.parse(uploadFileRes.data)
					console.log(res);
					console.log("临时路径" + tempFilePath);
					
					// 修改缓存中的userMsg的图片地址
					let userInfo = uni.getStorageSync('userMsg')
					userInfo.avatarUrl = res.data
					uni.setStorageSync('userMsg',userInfo)
					// 直接给页面的userMsg赋值，实现操作完成即可显示图片
					userMsg.value.avatar = res.data
				}
			});
		}
	});
	
}


