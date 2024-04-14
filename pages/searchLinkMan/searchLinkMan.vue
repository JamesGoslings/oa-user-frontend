<template>
	<view class="all">
		<view class="layout">
			<view class="navbor">
				<view class="statusBar" :style="{height: statusBarHeight+'px'}"></view>
				<view class="iconfont icoLeft" :style="{height: getTitleBarHeight()+'px'}">
					<view class="icoRound" @click="goBack()">
						<text>&#xe604;</text>
					</view>
				</view>
				<view class="titleBar" :style="{height: getTitleBarHeight()+'px'}">
					<text class="title">搜索</text>
				</view>
			</view>
			<view class="fill" :style="{height: statusBarHeight+getTitleBarHeight()+'px'}">
				
			</view>
		</view>
		<view class="content">
			<view class="iptAll">
				<view class="ipt">
					<view class="iconfont iptIco">&#xe740;丨
					</view>
					<input class="iptBar" v-model="iptValue" @focus="clearValue()" @blur="initValue()"/>
					<view class="btn">
						<button class="btn1" hover-class="btn_a" @click="search()">搜索</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import{statusBarHeight,getTitleBarHeight} from '@/utils/common_utils/system.js'

let iptValue = ref('请输入电话号码或联系人姓名')
function clearValue(){
	if(iptValue.value === '请输入电话号码或联系人姓名')
	iptValue.value = ''
}
function initValue(){
	if(iptValue.value === ''){
		iptValue.value = '请输入电话号码或联系人姓名'
	}
}
function search(){
	console.log(iptValue.value);
}

function goBack(){
	uni.navigateBack()
}


//TODO 让h5和app端的头部图标位于最右，小程序中图标紧靠标题
let justifyContentValue = 'space-between'
// #ifdef MP
justifyContentValue = 'flex-start'
// #endif

</script>

<style lang="scss" scoped>
@import url(/static/font/iconfont.css);
.all{
	background-color: #F5F5F5;
	// position: fixed;
	// left: 0;
	width: 100%; 
	height: 100%;
	// overflow: auto;
	.layout{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.navbor{
			background: #f5f5f5;
			// border: #000 1rpx solid;
			position: fixed;
			width: 100%;
			z-index: 10;
			display: flex;
			align-items: center;
			.statusBar{}
			.icoLeft{
				width: 10%;
				float: left;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;
				.icoRound{
					width: 100%;
					height: 85%;
					background: rgba(255,255,255,0.8);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			.titleBar{
				width: 80%;
				align-items: center;
				display: flex;
				justify-content: center;
				.title{
					font-size: 35rpx;
					font-weight: 200;
					color: black;
				}
			}
		.fill{}
		}
	}

	.content{
		background-color: #F5F5F5;
		position: fixed;
		left: 0;
		width: 100%; 
		height: 100%;
		overflow: auto;
		// margin-top: 10rpx;
		padding-top: 10rpx;
		.iptAll{
			width: 100%;
			height: 6%;
			// border: #000 1rpx solid;
			display: flex;
			justify-content: center;
			.ipt{
				background: #FFF;
				width: 95%;
				height: 100%;
				// border: #000 1rpx solid;
				border-radius: 40rpx;
				display: flex;
				align-items: center;
				.iptIco{
					width: 10%;
					margin-left: 25rpx;
					font-size: 30rpx;
					color: rgb(200,200,200);
				}
				.iptBar{
					width: 72%;
					height: 100%;
					font-size: 25rpx;
					// border: blue 1rpx solid;
				}
				.btn{
					width: 16%;
					height: 100%;
					// border: #000 1rpx solid;
					
					.btn1{
						width: 100%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100%;
						color: #FFF;
						font-size: 25rpx;
						border-radius: 40rpx;
						background: rgb(0,0,255);
					}
					.btn_a{
						background: rgb(82, 166, 255);
					}
				}

			}
		}

	}
}
</style>