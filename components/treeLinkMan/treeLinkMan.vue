<template>
	<view class="tree">
		<view class="linkManBarDetail" v-for="(item,index) in dataList" :key="index">
			<view class="detailOne"  @click="item.isChoose = !item.isChoose">
				<view class="detailOneTxt" :style="{paddingLeft: (item.floor * 30) + 'rpx'}">{{numbers[item.floor] + ' ' + item.deptName}}</view>
				<view class="icoDetail iconfont">
					<text class="iconfont icoUp" v-if="!item.isChoose">
						&#xe61d;
					</text>
					<text class="iconfont icoUp" v-else 
					style="-moz-transform: rotate(90deg);-webkit-transform: rotate(90deg);">
						&#xe61d;
					</text>
				</view>
			</view>
			<view class="leaderMsg" v-if="item.isChoose" :style="{paddingLeft: (item.floor * 30) + 'rpx'}" @click="openLeaderPage(item.leader)">
				<view class="iconfont leaderIco">&#xe68c;</view>
				<text class="leaderLabel" v-if="item.deptName !== '经理' && item.deptName !== '董事会'">负责人</text>
				<text class="leaderLabel">{{item.leader.name}}</text>
				<text class="leaderLabel">{{item.leader.phone}}</text>
			</view>
			<treeLinkMan v-if="item.isChoose && item.children !== undefined && item.children !== null
			 && item.children.length > 0" :dataList="item.children"></treeLinkMan>
		</view>
	</view>
</template>

<script setup>
let numbers = ref(['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ','Ⅹ','Ⅺ','Ⅻ'])
defineProps({
	dataList: {
		type: Array,
		default(){
			return []
		}
	}
})

function openLeaderPage(leader){
	// uni.setStorageSync('linkMan',leader)
	let linkManDetail = {linkMan: leader,typeId: 1,typeName: '公司通讯录'}
	uni.setStorageSync('linkManDetail',linkManDetail)
	uni.navigateTo({
		url:'/pages/linkManPage/linkManPage'
	})
}
</script>

<style lang="scss" scoped>
@import url(@/static/font/iconfont.css);
.tree{
	overflow: hidden;
	.linkManBarDetail{
		width: 100%;
		// height: 5%;
		// height: 100rpx;
		// margin-top: 10rpx;
		// margin-bottom: 10rpx;
		margin-bottom: 5rpx;
		.detailOne{
			padding: 15rpx 0;
			width: 100%;
			height: 100%;
			font-size: 35rpx;
			background: rgba(255,255,255, 0.8);
			display: flex;
			// border: #c4c4c4 1rpx solid;
			.detailOneTxt{
				// padding-left: 20rpx;
				// width: 30%;
				width: 100%;
				// height: 100%;
				color: #6d6d6d;
				margin-left: 100rpx;
			}
			.icoDetail{
				width: 65%;
				float: right;
				.icoUp{
					font-size: 50rpx;
					float: right;
					color: rgba(0,0,0,0.3);
				}
			}
		}
		.leaderMsg{
			width: 100%;
			height: 100%;
			padding: 10rpx 0;
			background: rgba(255,255,255, 0.8);
			display: flex;
			align-items: center;
			margin-bottom: 5rpx;
			// border: #000 1rpx solid;
			.leaderIco{
				margin-left: 20rpx;
				font-size: 50rpx;
			}
			.leaderLabel{
				// font-size: 28rpx;
				font-size: 32rpx;
				padding-left: 50rpx;
				// color: #6d6d6d;
				color: #aa0000;
			}
		}
	}
}
</style>