<template>
	<view class="privateLinkManSty">
		<view @click="goToDetailPage(item,myType)" class="privateLinkManOne" v-for="(item,index) in dataList" :key="index">
			<view class="iconfont ico">&#xe68c;</view>
			<view class="textMsg">{{item.name}}</view>
			<view class="textMsg">{{item.phone}}</view>
			<view class="textMsg" v-if="item.relationship !== undefined ">{{'( ' + item.relationship + ' )'}}</view>
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
	},
	myType: {
		type: Object,
		default(){
			return {typeId: -1,typeName: ''}
		}
	}
})
function goToDetailPage(linkMan,myType){
	let linkManDetail = {linkMan: linkMan,typeId: myType.typeId,typeName: myType.typeName}
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