<template>
	<view class="iStyle">
		<myHeader :head="iHead"></myHeader>
		<uni-card class="totalCard" margin="50rpx">
			<view class="cardAll">
				<image class="avatar" :src="userMsg.avatar" mode="aspectFill" @click="changeAvatar()"/>
				<view class="cardTexts">
					<text class="cardMainText">{{userMsg.name}}</text>
					<view class="position">
						<text>项目经理</text>
					</view>
				</view>
				<view class="status">
					在职
				</view>
				<view class="msg iconfont">
					个人资料 &#xe656;
				</view>
			</view>
		</uni-card>
		
		<uni-list :border="false">
			<uni-list-item showArrow>
				<template v-slot:header>
					<view class="slot-box">
						<text class="iconfont iconFun">&#xe63b;</text>
					</view>
				</template>
				<template v-slot:body>
					<text class="slot-box slot-text">我的消息</text>
				</template>
			</uni-list-item>
			
			<uni-list-item showArrow :border="false">
				<template v-slot:header>
					<view class="slot-box">
						<text class="iconfont iconFun">&#xe63c;</text>
					</view>
				</template>
				<template v-slot:body>
					<text class="slot-box slot-text">企业信息</text>
				</template>
			</uni-list-item>
			
			<uni-list-item showArrow :border="false">
				<template v-slot:header>
					<view class="slot-box">
						<text class="iconfont iconFun">&#xe735;</text>
					</view>
				</template>
				<template v-slot:body>
					<text class="slot-box slot-text" @click="test()">帮助中心</text>
				</template>
			</uni-list-item>
			
			<uni-list-item showArrow :border="false">
				<template v-slot:header>
					<view class="slot-box">
						<text class="iconfont iconFun">&#xe63d;</text>
					</view>
				</template>
				<template v-slot:body>
					<text class="slot-box slot-text">关于我们</text>
				</template>
			</uni-list-item>
			
			
		</uni-list>			
		<loginFailPopup></loginFailPopup>
	</view>
</template>

<script setup>
// import {setCookie, getCookie} from '@/utils/common_utils/myCookie.js'
import { saveAndBackImg,getUserInfo } from '@/api/i/i.js';

let iHead = ref({title:"我的",fun:"2"})
let userMsg = ref({name:"未登录",avatar:"/static/image/default_avatar.png"})

const test = async ()=>{
	let {data:{data}} = await getUserInfo()
	console.log("===========DATA===========");
	console.log(data);
	console.log("===========DATA===========");
	uni.setStorageSync('userMsg',data)
	console.log("===========DATA2===========");
	console.log(uni.getStorageSync('userMsg'));
	console.log("===========DATA2===========");
}

function changeAvatar(){
	saveAndBackImg(userMsg)
}

function info(){
	let userInfo = uni.getStorageSync('userMsg')
	userMsg.value.name = userInfo.name
	userMsg.value.avatar = userInfo.avatarUrl
}

onShow(()=>{
	info()
	uni.hideTabBarRedDot({
		index:2
	})
})



</script>

<style lang="scss" scoped>
@import url(@/static/font/iconfont.css);
.iStyle{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.totalCard{
		padding: 500rpx 0;
		.cardAll{
			.avatar{
				margin-bottom: 20rpx;
				height: 150rpx;
				width: 150rpx;
				border-radius: 10%;
				float: left;
			}
			.cardTexts{
				float: left;
				.cardMainText{
					font-weight: bold;
					margin-left: 30rpx;
					font-size: 40rpx;
				}
				.position{
					background-color: #fcfcfc;
					margin: 10rpx 0rpx 0rpx 20rpx;
					width: 120rpx;
					height: 60rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 25rpx;
					color: #9c9c9c;
					border-radius: 10%;
				}
			}
			.status{
				font-size: 25rpx;
				font-weight: bold;
				color:rgb(227,216,138);
				display: flex;
				justify-content: center;
				align-items: center;
				width: 80rpx;
				height: 40rpx;
				background: rgb(250,244,214);
				padding: 0rpx 15rpx ;
				border-radius: 10%;
			}
			.msg{
				float: right;
				font-size: 25rpx;
				color: blue;
			}
		}
	}	
	.slot-box {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			.iconFun{
				display: flex;
				align-items: center;
				height: 100rpx;
				font-size: 70rpx;
				margin-right: 20rpx;
			}
		}
	
		.slot-image {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			margin-right: 10px;
			width: 30px;
			height: 30px;
		}
	
		.slot-text {
			flex: 1;
			font-size: 15px;
			margin-right: 10px;
		}
}

</style>
