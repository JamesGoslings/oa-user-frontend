<template>
	<view class="allRecordsSty">
		<layout :lay="myLay"></layout>
		<view class="allRecords">
			<uni-card padding="20rpx 0" v-for="(record,index) in recordList" :key="record.id">
				<view class="recordOne">
					<view class="msg">
						<view class="judge" v-if="record.way === 0">
							<view class="ico iconfont">&#xe60a;</view>
						</view>
						<view class="judge" v-else-if="record.way === 1" :style="{background: 'rgb(251,192,19)'}">
							<view class="thinkIco"></view>
						</view>
						<view class="textMsg">
							<view class="name">{{userName}}</view>
							<view class="time">{{record.clockInTime}}</view>
						</view>
					</view>
					<view class="state">
						<view class="status" v-if="record.way === 0">正常</view>
						<view class="status" v-else-if="record.way === 1">拍照打卡</view>
						<view class="type" v-if="record.type === 0" >上班打卡</view>
						<view class="type" v-if="record.type === 1" >下班打卡</view>
					</view>
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script setup>
import { getClockInRecordList } from '@/api/clockIn/clockIn';
// 用于设定顶头信息
let myLay = ref({title: '全部记录',mainColor:"#fff",btnColor:"#F5F5F5"})
// 判断当前展示的什么数据的记录
let mode = ref(-2)
// 拿到页面传的mode值
onLoad(data=>{
	mode.value =  parseInt(data.mode)
})
// 用于接收记录的列表
let recordList = ref([])
const userName = uni.getStorageSync('userMsg').name
const getClockInRecords = async()=>{
	let {data:{data}} = await getClockInRecordList()
	recordList.value = data
}

onShow(()=>{
	console.log(mode.value);
	if(mode.value === 0){
		getClockInRecords()
	}
})
</script>

<style lang="scss" scoped>
@import url("../../static/font2/iconfont.css");
.allRecordsSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.allRecords{
		padding: 30rpx 0;
		.recordOne{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			.msg{
				display: flex;
				align-items: center;
				.judge{
					width: 100rpx;
					height: 100rpx;
					background: rgb(37,99,235);
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					.ico{
						font-size: 60rpx;
					}
					.thinkIco{
						width: 60%;
						height: 10rpx;
						border-radius: 50rpx;
						background: #FFF;
					}
				}
				.textMsg{
					margin-left: 30rpx;
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
					font-size: 24rpx
				}
			}
		}
	}
}
</style>
