export const setCookie = (key, value)=>{ 
    let expdate = new Date();
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //过期时间
    document.cookie = key+"="+value+";expires="+expdate.toGMTString()+";path=/";
}

export const getCookie = (c_name)=>{
	if (document.cookie.length>0){
	  let c_start=document.cookie.indexOf(c_name + "=")
	  if (c_start!=-1){ 
		c_start=c_start + c_name.length+1 
	   let c_end=document.cookie.indexOf(";",c_start)
		if (c_end==-1) c_end=document.cookie.length
		return unescape(document.cookie.substring(c_start,c_end))
		}
	  }
	return ""
}