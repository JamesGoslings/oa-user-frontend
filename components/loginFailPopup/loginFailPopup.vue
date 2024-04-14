<template>
	<uni-popup ref="popupPrompt" :is-mask-click="false">
		<view class="window">
			<view class="winTxt">
				<text>* 登录失败或登录信息已过期</text>
			</view>
			<view class="btns">
				<button class="btn btn1" hover-class="btn_a" @click="toLogin()">
					前去登录</button>
				<button class="btn btn2">退出应用
				<!-- <navigator class="btn btn2" open-type="exit" target="miniProgram">退出</navigator> -->
				</button>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
function toLogin(){
	uni.redirectTo({
		url:'/pages/login/login'
	})
}

const popupPrompt = ref(null)
const openPopup = ()=>{
	popupPrompt.value.open()
}
const checkLogin = async()=>{
	let myToken = uni.getStorageSync('token')
	if(myToken !== "" && myToken !== null){
		// console.log("有token,值为: " + myToken);
		return;
	}
	console.log("mytoken==>");
	console.log(myToken);
	setTimeout(()=>{
		openPopup()
	},0)
	
}
onShow(()=>{
	checkLogin()
})

</script>

<style lang="scss" scoped>
.window{
	width: 500rpx;
	height: 200rpx;
	background: #fcfcfc;
	text-align: center;
	border-radius: 15rpx;
	.winTxt{
		width: 100%;
		height: 60%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #aa0000;
	}
	.btns{
		width: 100%;
		height: 40%;
		.btn{
			height: 100%;
			width: 50%;
			float: left;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 25rpx;
		}
		.btn1{
			background: #0a80ff;
			color: #fff;
		}
		.btn2{
			// border: 1rpx #fcfcfc solid;
		}
		.btn_a{
			background: #19e1ff;
		}
	}
}
</style>