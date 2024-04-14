import { request } from "../utils/common_utils/request";
const telepUrl = '/admin/system/dept/'

export function getLinkManListInfo(){
	return request({url: telepUrl + 'linkManListInfo'})
}