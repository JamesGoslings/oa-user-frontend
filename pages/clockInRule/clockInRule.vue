<template>
	<view class="ruleSty">
		<layout :lay="myLay"></layout>
		<view class="modes">
			<view class="mode" v-for="(item,index) in modes" :key="index">
				<view class="title">
					{{item.title}}
				</view>
				<view class="contentOne" v-for="(it,i) in item.contents" :key="i">
					<view class="icoAll">
						<view class="iconfont ico" v-html="it.icon" ></view>
					</view>
					<view class="textAll">
						<view class="textTitle">
							{{it.title}}
						</view>
						<view class="textContent">
							{{it.description}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
// 用于头部信息的展示
let myLay = ref({title: '考勤规则',mainColor:"#fff",btnColor:"#F5F5F5"})

// 用于界面各个模块的内容显示
let modes = ref([
	{
		title: '考勤方式',
		contents: [
			{
				icon: '&#xe844;',
				title: '一键打卡',
				description: '在公司指点打卡地点100m范围内即可一键打卡'
			},
			{
				icon: '&#xe845;',
				title: '拍照打卡',
				description: '在指点打卡位置拍照上传指定照片完成打卡'
			}
		]
	},
	{
		title: '考勤时间',
		contents: [
			{
				icon: '&#xe842;',
				title: '上班时间',
				description: '早上9:00开始上班'
			},
			{
				icon: '&#xe843;',
				title: '下班时间',
				description: '下午6:00结束工作'
			}
		]
	},
	{
		title: '迟到早退',
		contents: [
			{
				icon: '&#xe846;',
				title: '迟到',
				description: '迟到超过15分钟算作迟到'
			},
			{
				icon: '&#xe846;',
				title: '早退',
				description: '早退超过15分钟算作早退'
			}
		]
	},
	{
		title: '请假规则',
		contents: [
			{
				icon: '&#xe847;',
				title: '请假类型',
				description: '请假类型包括年假、病假、事假等'
			},
			{
				icon: '&#xe847;',
				title: '请假时长',
				description: '请假时长以小时为单位计算'
			}
		]
	},
])
</script>

<style lang="scss" scoped>
@import url('../../static/font2/iconfont.css');
.ruleSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.modes{
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		padding: 25rpx 30rpx;
		.mode{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 70rpx;
			.title{
				width: 90%;
				font-size: 35rpx;
				font-weight: bold;
			}
			.contentOne{
				margin-top: 30rpx;
				width: 100%;
				display: flex;
				align-items: center;
				.icoAll{
					width: 75rpx;
					height: 75rpx;
					border-radius: 50%;
					background: rgb(37,99,235);
					display: flex;
					align-items: center;
					justify-content: center;
					.ico{
						font-size: 40rpx;
					}
				}
				.textAll{
					margin-left: 30rpx;
					.textTitle{
						font-size: 33rpx;
					}
					.textContent{
						margin-top: 5rpx;
						font-size: 25rpx;
					}
				}
			}
		}
	}
}
</style>
