import { request } from "/utils/common_utils/request"

const privateLinkManUrl = '/admin/system/privateLinkMan/'
let userId = 0;
userId = uni.getStorageSync('userMsg').userId
export function getPrivateLinkManList(){
	return request({url: privateLinkManUrl + 'getList/' + userId})
}

export function updatePrivateLinkMan(linkManData = {}){
	return request({url: privateLinkManUrl + 'update', method:'PUT',data: linkManData})
}