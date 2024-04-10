const SYSTEM_INFO = uni.getSystemInfoSync()
export const statusBarHeight = SYSTEM_INFO.statusBarHeight || 0
export const getTitleBarHeight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let {top,height} = uni.getMenuButtonBoundingClientRect();
		return height + (top - statusBarHeight)*2
	}else{
		return 40;
	}
}