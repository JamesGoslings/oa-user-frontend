import { request } from "/utils/common_utils/request"
const clockInRecordUrl = '/admin/system/clockInRecord/'

// 添加打卡记录
export function addClockInRecord(record){
	return request({url: clockInRecordUrl + 'save', method: 'POST', data: record})
}