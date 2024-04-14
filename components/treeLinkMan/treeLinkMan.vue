<template>
	<view class="tree">
		<view class="linkManBarDetail" v-for="(item,index) in dataList" :key="index">
			<view class="detailOne">
				<view class="detailOneTxt" :style="{paddingLeft: (item.floor * 30) + 'rpx'}">{{item.deptName}}</view>
				<view class="icoDetail iconfont">
					<text class="iconfont icoUp" v-if="!item.isChoose" @click="item.isChoose = !item.isChoose">
						&#xe61d;
					</text>
					<text class="iconfont icoUp" v-else  @click="item.isChoose = !item.isChoose"
					style="-moz-transform: rotate(90deg);-webkit-transform: rotate(90deg);">
						&#xe61d;
					</text>
				</view>
			</view>
			<view class="leaderMsg" v-if="item.isChoose" :style="{paddingLeft: (item.floor * 30) + 'rpx'}" @click="openLeaderPage(item.leader)">
				<view class="iconfont leaderIco">&#xe68c;</view>
				<text class="leaderLabel" v-if="item.deptName !== '总经理'">负责人</text>
				<text class="leaderLabel">{{item.leader.name}}</text>
				<text class="leaderLabel">{{item.leader.phone}}</text>
			</view>
			<treeLinkMan v-if="item.isChoose && item.children !== undefined && item.children !== null
			 && item.children.length > 0" :dataList="item.children"></treeLinkMan>
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

function openLeaderPage(leader){
	uni.setStorageSync('linkMan',leader)
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
		height: 5%;
		// margin-top: 10rpx;
		// margin-bottom: 10rpx;
		margin-bottom: 5rpx;
		.detailOne{
			width: 100%;
			height: 100%;
			background: rgba(255,255,255, 0.8);
			display: flex;
			// border: #c4c4c4 1rpx solid;
			.detailOneTxt{
				// padding-left: 20rpx;
				width: 30%;
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
				font-size: 28rpx;
				padding-left: 50rpx;
				color: #6d6d6d;
			}
		}
	}
}
</style>