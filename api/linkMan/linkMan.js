import { request } from "/utils/common_utils/request"

const linkManUrl = '/admin/system/linkMan/'
let userId = 0;
userId = uni.getStorageSync('userMsg').userId
export function getPrivateLinkManList(){
	return request({url: linkManUrl + 'getPrivateList/' + userId})
}

export function getPublicLinkManList(){
	return request({url: linkManUrl + 'getPublicList'})
}

export function updatePrivateLinkMan(linkManData = {}){
	return request({url: linkManUrl + 'updatePrivateLinkMan', method:'PUT',data: linkManData})
}