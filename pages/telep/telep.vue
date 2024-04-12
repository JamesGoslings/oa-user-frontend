<template>
	<view class="teleSty">
		<myHeader :head="teleHead"></myHeader>
		<view class="searchBar">
			<view class="search" @click="goSearch()">
				<view class="iconfont ico">&#xe607;</view>
				<text class="iptTxt">请输入</text>
			</view>
		</view>
		
		
		<loginFailPopup></loginFailPopup>
	</view>
</template>

<script setup>
let teleHead = ref({title:"通讯录",fun:"0",color:"#FFF"})

function goSearch(){
	uni.navigateTo({
		url:'/pages/searchLinkMan/searchLinkMan'
	})
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
}
</style>
