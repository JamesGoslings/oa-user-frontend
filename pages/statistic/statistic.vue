<!-- 考勤统计页面 -->
<template>
	<view class="statisticSty">
		<layout :lay="myLay"></layout>
		<view class="mode">
			<view class="title">
				考勤统计
				<view class="showAll">
					查看更多
					<text class="iconfont moreIco">&#xe989;</text>
				</view>
			</view>
			<uni-card padding="20rpx 0">
				<view class="content">
					<view class="contentOne" v-for="(item,index) in firstContent" :key="index">
						<view class="contentTitle">{{item.title}}</view>
						<view class="contentShow">{{item.num}}</view>
					</view>
				</view>
			</uni-card>
		</view>
		
		<view class="mode" v-for="(item,index) in otherContent" :key="index">
			<view class="title">
				{{item.title}}
				<view class="showAll">
					查看全部
					<text class="iconfont moreIco">&#xe989;</text>
				</view>
			</view>
			<uni-card padding="20rpx 0">
				<view class="recordOne">
					<view class="msg">
						<image class="avatar" :src="userMsg.avatarUrl" mode="aspectFill"></image>
						<view class="textMsg">
							<view class="name">{{userMsg.name}}</view>
							<view class="time">{{item.time}}</view>
						</view>
					</view>
					<view class="state">
						<view class="status">
							{{item.status}}
						</view>
						<view class="type">
							{{item.type}}
						</view>
					</view>
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script setup>
// 用于设定顶头信息
let myLay = ref({title: '统计',mainColor:"#fff",btnColor:"#F5F5F5"})
// 用于展示第一项内容的各个元素
let firstContent = ref([
	{
		title: '本月出勤天数',
		num: 11
	},
	{
		title: '本月迟到次数',
		num: 3
	},
	{
		title: '本月早退次数',
		num: 1
	}
])
// 用于展示除第一个模块以外的模块内容(均只显示最近的一条记录)
let otherContent = ref([
	{
		title: '考勤记录',
		time: '2024-02-30至2024-04-22',
		status: '正常',
		type: '上班打卡'
	},
	{
		title: '请假记录',
		time: '2024-02-30至2024-04-22',
		status: '已批准',
		type: '事假'
	},
	{
		title: '加班记录',
		time: '2024-02-30至2024-04-22',
		status: '未批准',
		type: '加班申请'
	}
])
let userMsg = ref({avatarUrl: '/static/image/img.gif',name: '未登录'})
onShow(()=>{
	userMsg.value = uni.getStorageSync('userMsg')
})
</script>

<style lang="scss" scoped>
@import url('../../static/font2/iconfont.css');
.statisticSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.mode{
		margin-top: 30rpx;
		width: 100%;
		margin-bottom: 60rpx;
		.title{
			margin-left: 30rpx;
			font-size: 35rpx;
			font-weight: bold;
			display: flex;
			justify-content: space-between;
			.showAll{
				font-size: 25rpx;
				font-weight: normal;
				color: rgb(59,109,220);
				display: flex;
				align-items: center;
				margin-right: 15rpx;
				.moreIco{
					font-size: 50rpx;
				}
			}
		}
		.content{
			width: 100%;
			height: 100%;
			margin-bottom: 20rpx;
			display: flex;
			.contentOne{
				width: 33.3%;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				text-align: center;
				.contentTitle{
					width: 100%;
					font-size: 28rpx;
					font-weight: bold;
					color: #000;
				}
				.contentShow{
					// margin: 15rpx 0rpx;
					margin-top: 20rpx;
					font-size: 80rpx;
					color: rgb(37,99,235);
					font-weight: bolder;
				}
			}
		}
		.recordOne{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			.msg{
				display: flex;
				align-items: center;
				.avatar{
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}
				.textMsg{
					margin-left: 20rpx;
					.name{
						font-size: 30rpx;
						font-weight: bold;
						color: #000;
					}
					.time{
						color: #000;
						width: 400rpx;
					}
				}
			}
			.state{
				.status{
					font-size: 33rpx;
					color: rgb(59,109,220);
				}
				.type{
					color: #000;
					font-size: 26rpx
				}
			}
		}
	}
}
</style>
