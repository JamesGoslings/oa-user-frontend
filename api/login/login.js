import { BASE_URL,request } from "../../utils/common_utils/request";

let indexUrl = BASE_URL + "/admin/system/index/"

export function useLogin(user){
	uni.showLoading()
	return uni.request({
		url:indexUrl+"login",
		data:user,
		method:'POST'
	})
}
