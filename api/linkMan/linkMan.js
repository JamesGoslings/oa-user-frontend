import { request } from "/utils/common_utils/request"

const linkManUrl = '/admin/system/linkMan/'
// let userId = uni.getStorageSync('userMsg').userId

export function getPrivateLinkManList(){
	let userId = uni.getStorageSync('userMsg').userId
	return request({url: linkManUrl + 'getPrivateList/' + userId})
}

export function getPublicLinkManList(){
	return request({url: linkManUrl + 'getPublicList'})
}

export function updatePrivateLinkMan(linkManData = {}){
	return request({url: linkManUrl + 'updatePrivateLinkMan', method:'PUT',data: linkManData})
}

export function savePrivateLinkMan(linkManData = {}){
	let userId = uni.getStorageSync('userMsg').userId
	linkManData.userId = userId
	return request({url: linkManUrl + 'savePrivateLinkMan', method: 'POST', data: linkManData})
}

export function removePrivateLinkMan(id = 0){
	return request({url: linkManUrl + 'remove/' + id, method: 'DELETE'})
}

export function searchLinkManList(key = ''){
	let userId = uni.getStorageSync('userMsg').userId
	return request({url: linkManUrl + 'searchLinkManList/' + userId + '/' + key})
}
