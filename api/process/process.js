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
// 获取需要自己审批的申请
export function getDoingProcess(){
	let userId = uni.getStorageSync('userMsg').userId
	return request({
		url: PROCESS_URL + 'doProcess/' + userId,
		method: 'GET'
	})
}
// 执行任务
export function doTask(processId = 0){
	let userId = uni.getStorageSync('userMsg').userId
	return request({
		url: PROCESS_URL + `doTask/${processId}/${userId}`,
		method: 'POST'
	})
}
// 驳回申请
export function quitProcess(processId = 0){
	let userId = uni.getStorageSync('userMsg').userId
	return request({
		url: PROCESS_URL + `quit/${processId}/${userId}`,
		method: 'DELETE'
	})
}
// 拿到自己发出的申请
export function listMyProcess(status = -2){
	let userId = uni.getStorageSync('userMsg').userId
	return request({
		url: PROCESS_URL + `myProcess/${userId}/${status}`,
		method: 'GET'
	})
}