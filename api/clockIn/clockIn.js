import { request } from "/utils/common_utils/request"
const clockInRecordUrl = '/admin/attendance/clockInRecord/'

// 添加打卡记录
export function addClockInRecord(record){
	return request({url: clockInRecordUrl + 'save', method: 'POST', data: record})
}

// 获取该用户本月打卡次数
export function getRecordCountThisMonth(){
	const uId = uni.getStorageSync('userMsg').userId
	return request({url: clockInRecordUrl + 'getCountOneMonth/' + uId})
}

// 获取该用户最新的一条打卡记录
export function getFirstRecord(){
	const uId = uni.getStorageSync('userMsg').userId
	return request({url: clockInRecordUrl + 'getFirst/' + uId})
}

// 获取该用户所有的打卡记录（按时间降序排列）
export function getClockInRecordList(){
	const uId = uni.getStorageSync('userMsg').userId
	return request({url: clockInRecordUrl + 'getAll/' + uId})
}
