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
					<input class="iptBar" v-model="iptValue" placeholder="请输入电话号码或联系人姓名"/>
					<view class="btn">
						<button class="btn1" hover-class="btn_a" @click="search()">搜索</button>
					</view>
				</view>
			</view>
			<view class="linkManBarAll">
				<view class="linkManBarOne" v-for="(item,index) in linkManDetailData" :key="index" @click="goDetailPage(item)">
					<view class="card">
						<view class="iconfont linkManIco">&#xe68c;</view>
						<view v-if="item.typeId === 1">
							<view class="textMsg">{{item.leader.name}}</view>
							<view class="textMsg">{{item.leader.phone}}</view>
						</view>
						<view v-else >
							<view class="textMsg">{{item.linkMan.name}}</view>
							<view class="textMsg">{{item.linkMan.phone}}</view>
						</view>
					</view>
					<view class="linkManBar">
						<text class="barTxt">来源：</text>
						<text>{{ item.typeName }}</text>
						<text v-if="item.deptName !== undefined && item.deptName !== null && item.deptName !== '' " >
						{{'-' + item.deptName}}</text>
					</view>
					
				</view>
			</view>
			<view class="fillBottom"></view>
		</view>
	</view>
</template>

<script setup>
import { statusBarHeight, getTitleBarHeight } from '@/utils/common_utils/system.js'
import { searchLinkManList } from '@/api/linkMan/linkMan';

let iptValue = ref('')

let linkManDetailData = ref([])

const search = async ()=>{
	console.log(iptValue.value);
	let {data:{data}} = await searchLinkManList(iptValue.value)
	linkManDetailData.value = data
}

function goBack(){
	uni.navigateBack()
}

// 处理编辑后，信息更新的问题
onShow(()=>{
	if(iptValue.value !== ''){
		search(iptValue.value)
	}
})

function goDetailPage(linkMandetail){
	if(linkMandetail.typeId === 1){
		const leader = linkMandetail.leader
		linkMandetail.linkMan = leader
	}
	uni.setStorageSync('linkManDetail',linkMandetail)
	uni.navigateTo({
		url: '/pages/linkManPage/linkManPage'
	})
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
			margin-bottom: 80rpx;
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

		.linkManBarAll{
			width: 100%;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			margin-bottom: 50rpx;
			.linkManBarOne{
				width: 98%;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				box-shadow: 0 0 5px 1px #999;
				border-radius: 10rpx;
				margin-bottom: 50rpx;
				.card{
					width: 100%;
					background: #fff;
					height: 120rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					display: flex;
					align-items: center;
					.linkManIco{
						font-size: 70rpx;
					}
					.textMsg{
						padding-left: 50rpx;
					}
				}
				.linkManBar{
					width: 100%;
					height: 50rpx;
					background: rgb(238,238,238);
					.barTxt{
						margin-left: 20rpx;
					}
				}
				
			}
		}
		
		.fillBottom{
			width: 100%;
			height: 10%;
			// border: #000 1rpx solid;
		}
	}
	
	
}
</style>