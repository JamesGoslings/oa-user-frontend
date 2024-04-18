<template>
	<view class="userDetailSty">
		<layout :lay="myLay"></layout>
		<view class="titleMsg">
			<image class="avatar" :src="userDetailMsg.avatar" mode="aspectFill"></image>
			<view class="textMsg">
				<view class="name">张三</view>
				<view class="post">产品研发部</view>
			</view>
		</view>
		<view class="detailMsg">
			<view class="detailMsgOne">
				<view class="title">个人信息</view>
				<view class="msgOne">
					<view class="iconfont msgIco">&#xe817;</view>
					<view class="msgContent">18000000000</view>
				</view>
				<view class="msgOne">
					<view class="iconfont msgIco">&#xe818;</view>
					<view class="msgContent">四川省成都市</view>
				</view>
			</view>
			
			<view class="workDetailMsg">
				<view class="title">工作信息</view>
				<uni-card :spacing="0">
					<view class="msg">
						<view class="msgOne">
							<view class="iconfont msgIco">&#xe7bd;</view>
							<view class="icoTxt">职位</view>
						</view>
						<view class="detailOne">
							java工程师
						</view>
					</view>
					<view class="fill"></view>
					<view class="msg">
						<view class="msgOne">
							<view class="iconfont msgIco">&#xe696;</view>
							<view class="icoTxt">部门</view>
						</view>
						<view class="detailOne">
							产品研发部
						</view>
					</view>
					<view class="fill"></view>
					<view class="msg">
						<view class="msgOne">
							<view class="iconfont msgIco">&#xe811;</view>
							<view class="icoTxt">入职时间</view>
						</view>
						<view class="detailOne">
							2024.4.18
						</view>
					</view>
					
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script setup>
// 用于设定顶头信息
let myLay = ref({title: '个人详情页',mainColor:"#fff",btnColor:"#F5F5F5"})
// 用于接收和显示用户详细信息
let userDetailMsg = ref(
	{
		avatar: '/static/image/default_avatar.png'
	}
)

// onShow(()=>{
	
// })

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
				width: 80%;
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
