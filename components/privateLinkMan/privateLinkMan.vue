<template>
	<view class="privateLinkManSty">
		<view @click="goToDetailPage(item)" class="privateLinkManOne" v-for="(item,index) in dataList" :key="index">
			<view class="iconfont ico">&#xe68c;</view>
			<view class="textMsg">{{item.name}}</view>
			<view class="textMsg">{{item.phone}}</view>
			<view class="textMsg">{{'( ' + item.relationship + ' )'}}</view>
		</view>
	</view>
</template>

<script setup>
defineProps({
	dataList: {
		type: Array,
		default(){
			return []
		}
	}
})
function goToDetailPage(linkMan){
	let linkManDetail = {linkMan: linkMan,typeId: 2,typeName: '个人通讯录'}
	uni.setStorageSync('linkManDetail',linkManDetail)
	uni.navigateTo({
		url: '/pages/linkManPage/linkManPage'
		// url: '/pages/linkManPage/linkManPage?linkManDetail=' + JSON.stringify(linkManDetail)
	})
}
</script>

<style lang="scss" scoped>
@import url(/static/font/iconfont.css);
.privateLinkManSty{
	overflow: hidden;
	.privateLinkManOne{
		width: 100%;
		margin-bottom: 5rpx;
		font-size: 35rpx;
		background: rgba(255,255,255, 0.8);
		display: flex;
		padding: 15rpx 0;
		align-items: center;
		.ico{
			margin-left: 20rpx;
			font-size: 50rpx;
		}
		.textMsg{
			font-size: 32rpx;
			padding-left: 50rpx;
			color: #aa0000;
		}
	}
}
</style>