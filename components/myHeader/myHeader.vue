<template>
	<view class="layout">
		<view class="navbor">
			<view class="statusBar" :style="{height: statusBarHeight+'px'}"></view>
			<view class="titleBar" :style="{height: getTitleBarHeight()+'px' ,justifyContent: justifyContentValue}">
				<view class="title">{{head.title}}</view>
				<view class="search" v-if="head.fun === '1'">
					<uni-icons type="search" color="#888" size="22" class="icon"></uni-icons>
					<uni-icons type="scan" color="#888" size="22" class="icon" @click="onScan()"></uni-icons>
				</view>
				<view class="search" v-else-if="head.fun === '2'">
					<uni-icons type="gear" color="#888" size="22" class="icon"></uni-icons>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height: statusBarHeight+getTitleBarHeight()+'px'}">
			
		</view>
	</view>
</template>

<script setup>
import{statusBarHeight,getTitleBarHeight} from '@/utils/common_utils/system.js'
defineProps({
	head:{
		type:Object,
		default(){
			return {title:"标题",fun:"1"}
		}
	}
})
function onScan(){
	uni.scanCode({
		success: function (res) {
			console.log('条码类型：' + res.scanType);
			console.log('条码内容：' + res.result);
			uni.setStorage({
				key:'requiredUrl',
				data:res.result,
				success: () => {
					console.log("url传输成功");
					uni.navigateTo({
						url:"/pages/home/webview"
					})
				}
			})
		},
		fail: res2 => {
			let showTitle = "";
			// #ifdef H5
			showTitle = "PC端扫个毛的码"
			// #endif
			
			// #ifndef H5
			showTitle = "扫码失败"
			// #endif
			
			uni.showToast({
				title:showTitle,
				icon:'error'
			})
		}
	});
}

//TODO 让h5和app端的头部图标位于最右，小程序中图标紧靠标题
let justifyContentValue = 'space-between'
// #ifdef MP
justifyContentValue = 'flex-start'
// #endif

</script>

<style lang="scss" scoped>
.layout{
	.navbor{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background-color: white;
		.statusBar{}
		.titleBar{
			padding:0 30rpx;
			align-items: center;
			display: flex;
			}
			.title{
				font-size: 20px;
				// font-weight: 700;
				color: black;
			}
			.search{
				.icon{
					padding-left: 30rpx;
				}
			}
	.fill{
		}
	}
}

</style>