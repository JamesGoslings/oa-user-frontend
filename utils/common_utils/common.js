// import { API_HOST,API_PROXY } from "../../config.js"


//系统信息
export const SYSTEM_INFO = uni.getSystemInfoSync()

//主机地址10.21.48.214
export const HOST = 'http://localhost:8800'
// export const HOST = 'http://10.21.48.214:8800'

//api服务器
export const API_HOST = SYSTEM_INFO.uniPlatform === 'web' ? '' : HOST

//api服务代理路径
export const API_PROXY = SYSTEM_INFO.uniPlatform === 'web' ? '/h5api' : ''

/**
 * 组装接口url
*/
export const packApiUrl = (url = '') => {
	console.log(API_HOST);
	if(url.slice(0,4) === 'http') return url
	else return `${API_HOST}${API_PROXY}${url}`
}