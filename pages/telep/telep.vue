<template>
	<view class="teleSty">
		<myHeader :head="teleHead"></myHeader>
		<view class="searchBar">
			<view class="search" @click="goSearch()">
				<view class="iconfont ico">&#xe607;</view>
				<text class="iptTxt">请输入电话号码或联系人姓名</text>
			</view>
		</view>
		<view class="linkManBar" v-for="(item,index) in LinkManBarMsg" :key="index">
			<view class="iconfont linkIco">&#xe623;</view>
			<view class="topLinkTxt">{{item.topLinkTxt}}</view>
			<view class="menuIco iconfont">
				<text class="iconfont aIco" v-if="!item.isChoose" @click="openLinkManList(item)">
					&#xe656;
				</text>
				<text class="iconfont aIco" v-else  @click="item.isChoose = !item.isChoose"
				style="-moz-transform: rotate(90deg);-webkit-transform: rotate(90deg);">
					&#xe656;
				</text>
			</view>
		</view>
	
		<loginFailPopup></loginFailPopup>
	</view>
</template>

<script setup>
let teleHead = ref({title:"通讯录",fun:"0",color:"#FFF"})
let isChoose  = ref(false)
let LinkManBarMsg = ref([
	{
		topLinkTxt: '公司通讯录',
		isChoose: false
	},
	{
		topLinkTxt: '个人通讯录',
		isChoose: false
	},
	{
		topLinkTxt: '公共通讯录',
		isChoose: false
	}
])
function goSearch(){
	uni.navigateTo({
		url:'/pages/searchLinkMan/searchLinkMan'
	})
}
function openLinkManList(item){
	item.isChoose = !item.isChoose
	
}


</script>

<style lang="scss" scoped>
@import url(@/static/font/iconfont.css);
.teleSty{
	background-color: #F5F5F5;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.searchBar{
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		width: 100%;
		height: 6%;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		.search{
			width: 98%;
			height: 80%;
			background: #F5F5F5;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			.ico{
				font-size: 40rpx;
				margin-right: 20rpx;
			}
			.iptTxt{
				font-size: 30rpx;
				color: rgb(102,102,102);
			}
		}
	}
	.linkManBar{
		width: 100%;
		height: 5%;
		background: #fff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		margin-bottom: 10rpx;
		.linkIco{
			margin-left: 20rpx;
			margin-right: 30rpx;
			font-size: 50rpx;
		}
		.topLinkTxt{
			font-size: 35rpx;
			
		}
		.menuIco{
			width: 60%;
			float: right;
			.aIco{
				float: right;
				// padding-right: 10rpx;
			}
		}
	}
}
</style>
