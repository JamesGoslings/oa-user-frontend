import { request } from "/utils/common_utils/request"

const PROCESS_TYPE_URL = '/admin/process/processType/'

// 获取所有的审批类型
export function getAllProcessType(){
	return request({
		url: PROCESS_TYPE_URL + 'all',
	})
}