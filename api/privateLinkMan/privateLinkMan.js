import { request } from "/utils/common_utils/request"

const privateLinkManUrl = '/admin/system/privateLinkMan'
let userId = uni.getStorageSync('userMsg').userId
export function getPrivateLinkManList(){
	return request({url: privateLinkManUrl + '/getList/' + userId})
}