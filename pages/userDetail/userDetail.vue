<template>
	<view class="userDetailSty">
		<layout :lay="myLay"></layout>
		<view class="titleMsg">
			<image class="avatar" :src="userDetailMsg.avatarUrl" mode="aspectFill" @click="changeAvatar()"></image>
			<view class="textMsg">
				<view class="name">{{userDetailMsg.name}}</view>
				<view class="post">{{userDetailMsg.dept}}</view>
			</view>
		</view>
		<view class="detailMsg">
			<view class="detailMsgOne">
				<view class="title">个人信息</view>
				<view class="msgOne">
					<view class="iconfont msgIco">&#xe817;</view>
					<view class="msgContent">{{userDetailMsg.phone}}</view>
				</view>
				<view class="msgOne">
					<view class="iconfont msgIco">&#xe818;</view>
					<view class="msgContent" @click="isDetail = !isDetail" v-if="!isDetail" >{{myLocationData.simpleLocation}}</view>
					<view class="msgContent" @click="isDetail = !isDetail" v-else>{{myLocationData.locationDetail}}</view>
				</view>
			</view>
			
			<view class="workDetailMsg">
				<view class="title">工作信息</view>
				<uni-card spacing='0'>
					<view class="msg">
						<view class="msgOne">
							<view class="iconfont msgIco">&#xe7bd;</view>
							<view class="icoTxt">职位</view>
						</view>
						<view class="detailOne">
							{{userDetailMsg.post}}
						</view>
					</view>
					<view class="fill"></view>
					<view class="msg">
						<view class="msgOne">
							<view class="iconfont msgIco">&#xe696;</view>
							<view class="icoTxt">部门</view>
						</view>
						<view class="detailOne">
							{{userDetailMsg.dept}}
						</view>
					</view>
					<view class="fill"></view>
					<view class="msg">
						<view class="msgOne">
							<view class="iconfont msgIco">&#xe811;</view>
							<view class="icoTxt">入职时间</view>
						</view>
						<view class="detailOne">
							{{userDetailMsg.createTime}}
						</view>
					</view>
					
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script setup>
import { saveAndBackImg } from '@/api/i/i.js';
import { getLocation,cancelChoose } from '@/utils/location/location';
// 用于设定顶头信息
let myLay = ref({title: '个人详情页',mainColor:"#fff",btnColor:"#F5F5F5"})
// 用于接收和显示用户详细信息
let userDetailMsg = ref(
	{
		avatarUrl: '/static/image/default_avatar.png',
		createTime:'',
		name:'未登录',
		phone:'0',
		post:'无',
		dept:'无'
	}
)

// 修改头像并实现马上回显（非发网络请求回显）
function changeAvatar(){
	saveAndBackImg(userDetailMsg)
}

let myLocationData = ref({simpleLoaction:'未授权位置信息',locationDetail: '未授权位置信息'})
let isDetail = ref(false)

// 获取信息同步到data中
const location = async ()=>{
	myLocationData.value = await getLocation()
	console.log('=========Location===========');
	console.log(myLocationData.value);
	console.log(myLocationData.value.simpleLocation);
	console.log(myLocationData.value.locationDetail);
	console.log('=========Location===========');
}

// 拉起授权，并获取当前位置信息（中文的详细信息）
function getMyLocation () {
	// 先查看是否授权
	uni.getSetting({
	        success (res) {
	          console.log(res)
				// 如果没有授权
				if (!res.authSetting['scope.userLocation']) {
					// 则拉起授权窗口
					uni.authorize({
						scope: 'scope.userLocation',
						success () {
							// 点击允许后--就一直会进入成功授权的回调 就可以使用获取的方法了
							location()
						},
						fail (error) {
							console.log('拒绝授权', error)
							// 点击了拒绝授权后--就一直会进入失败回调函数--此时就可以在这里重新拉起授权窗口
							cancelChoose()
						}
					})
	          } else {
	            // 有权限则直接获取
				location()
			}
	    }
	})
}

// 获取用户信息
onShow(()=>{
	userDetailMsg.value = uni.getStorageSync('userMsg')
	getMyLocation()
})
</script>

<style lang="scss" scoped>
@import url('/static/font/iconfont.css');
.userDetailSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.titleMsg{
		width: 100%;
		height: 20%;
		display: flex;
		// justify-content: center;
		align-items: center;
		margin-top: 50rpx;
		margin-bottom: 30rpx;
		.avatar{
			width: 200rpx;
			height: 200rpx;
			margin-left: 120rpx;
			margin-right: 30rpx;
			border-radius: 50%;
		}
		.textMsg{
			width: 300rpx;
			// border: #000 1rpx solid;
			display: flex;
			flex-wrap: wrap;
			height: 50%;
			.name{
				width: 100%;
				font-size: 40rpx;
				font-weight: bold;
			}
			.post{
				
			}
		}
	}
	.detailMsg{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.detailMsgOne{
			width: 100%;
			margin-bottom: 50rpx;
			.title{
				width: 80%;
				margin-left: 30rpx;
				font-weight: bold;
				margin-bottom: 25rpx;
			}
			.msgOne{
				width: 90%;
				margin-left: 30rpx;
				margin-top: 15rpx;
				margin-bottom: 15rpx;
				display: flex;
				align-items: center;
				.msgIco{
					font-size: 40rpx;
					margin-right: 30rpx;
					color: rgba(0,0,0, 0.5);
				}
				.msgContent{
					font-size: 35rpx;
					color: rgb(107,114,128);
				}
			}
		}
		.workDetailMsg{
			width: 100%;
			margin-bottom: 50rpx;
			.title{
				width: 80%;
				margin-left: 30rpx;
				font-weight: bold;
				margin-bottom: 25rpx;
			}
			.fill{
				width: 100%;
				height: 40rpx;
			}
			.msg{
				margin: 20rpx 0;
				.msgOne{
					// border: #000 1rpx solid;
					width: 80%;
					display: flex;
					align-items: center;
					.msgIco{
						font-size: 40rpx;
						color: rgba(0,0,0, 0.5);
					}
					.icoTxt{
						margin-left: 20rpx;
						font-size: 38rpx;
					}
					
				}
				.detailOne{
					margin-top: 20rpx;
					margin-left: 10rpx;
					font-size: 35rpx;
				}
			}
		}
	}
}
</style>
