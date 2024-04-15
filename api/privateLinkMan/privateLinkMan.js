import { request } from "/utils/common_utils/request"

const privateLinkManUrl = '/admin/system/privateLinkMan/'
let userId = 0;
userId = uni.getStorageSync('userMsg').userId
export function getPrivateLinkManList(){
	console.log('=================ID==================');
	console.log(uni.getStorageSync('userMsg').userId);
	userId = uni.getStorageSync('userMsg').userId
	console.log(uni.getStorageSync('userMsg'));
	console.log('=================ID==================');
	return request({url: privateLinkManUrl + 'getList/' + userId})
}

export function updatePrivateLinkMan(linkManData = {}){
	return request({url: privateLinkManUrl + 'update', method:'PUT',data: linkManData})
}