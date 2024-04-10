import { packApiUrl } from "../../utils/common_utils/common"

export let BASE_URL = packApiUrl('')

export function request(config={}){
	
	let {
		url,
		method='GET',
		header={token:''},
		data={}
	} = config
	url = BASE_URL + url
	header.token = uni.getStorageSync('token')
	uni.showLoading({
		title:"资源加载中"
	})
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
			header,
			data,
			success: res => {
				let code = res.data.code
				if(code === 200){
					resolve(res)
				}else{
					uni.showModal({
						title:'错误提示',
						content:res.data.message + res.data.data,
						showCancel:false
					})
					reject(res.data)
				}
			},
			complete:()=>{
				uni.hideLoading()
			}
		})
	})
}