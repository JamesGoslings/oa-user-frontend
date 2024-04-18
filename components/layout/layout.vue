<!-- 用于有回退要求的页面且页面无其他功能需求 -->
<template>
	<view class="layout">
		<view class="navbor" :style="{background: lay.mainColor}">
			<view class="statusBar" :style="{height: statusBarHeight+'px'}"></view>
			<view class="iconfont icoLeft" :style="{height: getTitleBarHeight()+'px'}">
				<view class="icoRound" @click="goBack()" :style="{background: lay.btnColor}">
					<text>&#xe604;</text>
				</view>
			</view>
			<view class="titleBar" :style="{height: getTitleBarHeight()+'px'}">
				<text class="title">{{lay.title}}</text>
			</view>
		</view>
		<view class="fill" :style="{height: statusBarHeight+getTitleBarHeight()+'px'}">
			
		</view>
	</view>
</template>

<script setup>
import { statusBarHeight, getTitleBarHeight } from '@/utils/common_utils/system.js'


defineProps({
	lay:{
		type:Object,
		default(){
			return {title:"标题",mainColor:"#fff", btnColor:"#fff"}
		}
	}
})

function goBack(){
	uni.navigateBack()
}

</script>

<style lang="scss" scoped>
@import url(/static/font/iconfont.css);
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
</style>
