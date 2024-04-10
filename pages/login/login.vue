<template>
	<view class="loginSty">
		<view  class="text">
			<text>欢迎使用OA办公</text>
		</view>
		<view class="logo">
			<image src="../../static/image/logo.png" mode="aspectFill"  class="imgLogo"/>
		</view>
		<view class="formIpt">
			<view>
				<input class="ipt" placeholder="请输入用户名" style="width: 84%;" v-model="user.username"/>
			</view>
			<view class="pwdLab">
				<input class="ipt ipt1" placeholder="请输入密码" :password="!showPwd" v-model="user.password"/>
				<view @click="showPwd = !showPwd">
					<text class="iconfont icoText" v-if="showPwd">&#xe606;</text>
					<text class="iconfont icoText" v-else>&#xe613;</text>
				</view>
			</view>
		</view>
			<view class="remind">
				<text class="textSty">{{msg}}</text>
			</view>
			<button class="btn" style="width: 84%; margin-top: 0;" hover-class="btn_a"
			 @click="login()">登录</button>
	</view>
</template>

<script setup>
// import {setCookie, getCookie} from '@/utils/common_utils/myCookie.js'
import {useLogin} from '@/api/login/login.js'
import { getUserInfo } from '../../api/i/i';


let user = ref({username:"",password:""})
let showPwd = ref(false)
let msg = ref("")


const info = async ()=>{
	let {data:{data}} = await getUserInfo()
	uni.setStorageSync('userMsg',data)
	console.log("===========DATA2===========");
	console.log(uni.getStorageSync('userMsg'));
	console.log("===========DATA2===========");
}

const login = async ()=>{
	if(user.value.username === "" || user.value.password === ""){
		msg.value = "* 别瞎输，用户名和密码都不能为空"
		return;
	}
	let {data} = await useLogin(user.value)
	uni.hideLoading()
	user.value.username=""
	user.value.password=""
	console.log(data);
	if(data.code !== 200){
		console.log(data.message);
		msg.value = "* "+data.message
		return;
	}
	uni.setStorageSync('token',data.data.token)
	
	info()
	
	uni.reLaunch({
		url:'/pages/home/home'
	})
}


</script>

<style lang="scss" scoped>
@import url(@/common/style/btn.css);
@import url(@/static/font/iconfont.css);
.loginSty{
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: hidden;
	.text{
		margin: 100rpx 50rpx 0rpx 50rpx;
		width: 100%;
		font-size: 50rpx;
	}
	.logo{
		display: flex;
		justify-content: center;
		.imgLogo{
			margin: 150rpx 0rpx;
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
		}
	}
	.formIpt{
		width: 100%;
		margin: 0rpx 8%;
		.ipt{
			height: 80rpx;
			border: 3rpx solid rgb(242,242,245);
			margin-bottom: 30rpx;
		}
		.pwdLab{
			width: 84%;
			display: flex;
			align-items: center;
			border: 3rpx solid rgb(242,242,245);
			.ipt1{
				width: 90%;
				margin-bottom: 0rpx;
				border: 0;
			}
			.txtIco{
				
			}
		}
	}
	.remind{
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.textSty{
			color: #00aa00;
			font-size: 30rpx;
		}
	}
	
}
</style>
