import { request } from "/utils/common_utils/request"

const PROCESS_TYPE_URL = '/admin/process/processType/'

const PROCESS_TEMPLETE_URL = '/admin/process/processTemplate/'

const PROCESS_URL = '/admin/app/process/'

// 获取所有的审批类型
export function getAllProcessType(){
	return request({
		url: PROCESS_TYPE_URL + 'all',
	})
}
// 获取所有的模板
export function getAllProcessTemplate(){
	return request({
		url: PROCESS_TEMPLETE_URL + 'all'
	})
}
// 获取单个模板
export function getOneTemplate(id){
	return request({
		url: PROCESS_TEMPLETE_URL + 'get/' + id
	})
}
// 提交审批
export function addProcess(process = {}){
	return request({
		url: PROCESS_URL + 'add',
		method: 'POST',
		data: process
	})
}