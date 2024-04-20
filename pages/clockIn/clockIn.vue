<!-- 打卡页面 -->
<template>
	<view class="clockInSty">
		<myHeader :head="myHead"></myHeader>
		<view class="msgShow">
			<view class="msg">
				<image :src="userMsg.avatarUrl" mode="aspectFill" class="avatar"></image>
				<view class="userTextMsg">
					<text class="name">{{userMsg.name}}</text>
					<text class="dept">{{'考勤部门：' + userMsg.dept}}</text>
				</view>
			</view>
			<view class="funs">
				<view class="fun">
					<view class="iconfont funIco">&#xe626;</view>
					<view class="funText">统计</view>
				</view>
				<view class="fun">
					<view class="iconfont funIco">&#xe61e;</view>
					<view class="funText">考勤规则</view>
				</view>
			</view>
		</view>
		<view class="clockInFun">
			<uni-steps class="steps" :options="options" direction="column" :active="1"></uni-steps>
			<view class="btnBox">
				<button class="btn" hover-class="btnA" >
					<view class="btnText">下班打卡</view>
				</button>
				<view class="clockInLocation iconfont" v-if="isEntry">&#xe6db; 已进入打卡范围</view>
				<view class="clockInLocation iconfont noEntry" v-else>&#xe6dc; 未进入打卡范围</view>
			</view>
		</view>
	</view>
</template>

<script setup>
// myHeader组件的显示信息
let myHead = ref({title: '考勤打卡',fun: '0',color: '#fff'})
// 定义每个步骤的信息
let options = ref([
	{
		title:'上班打卡 09:00',
		desc:'2024-04-20',
	},
	{
		title:'下班打卡 18:00',
		desc:'2024-04-20',
	}
])
// 判断是否已经进入可打卡范围
let isEntry = ref(false)

// 接收用户信息
let userMsg = ref(
	{
		avatarUrl: '/static/image/default_avatar.png',
		name:'未登录',
		dept:'无'
	}
)

onShow(()=>{
	userMsg.value = uni.getStorageSync('userMsg')
})
</script>

<style lang="scss" scoped>
@import url(/static/font2/iconfont.css);
.clockInSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	background: #f5f5f5;
	.msgShow{
		width: 100%;
		// height: 8%;
		border-radius: 15rpx;
		background: #FFF;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.msg{
			display: flex;
			align-items: center;
			.avatar{
				height: 100rpx;
				width: 100rpx;
				margin: 15rpx 0;
				margin-left: 25rpx;
				border-radius: 50%;
			}
			.userTextMsg{
				width: 330rpx;
				// border: #000 1rpx solid;
				display: flex;
				flex-wrap: wrap;
				margin-left: 20rpx;
				.name{
					font-size: 40rpx;
				}
				.dept{
					font-size: 25rpx;
					color: rgb(187,187,187);
				}
			}
		}
		.funs{
			display: flex;
			.fun{
				margin-right: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				.funIco{
					font-size: 40rpx;
				}
				.funText{
					margin-top: 8rpx;
					width: 100%;
					text-align: center;
					font-size: 25rpx;
				}
			}
		}
	}
	.clockInFun{
		width: 100%;
		background: #FFF;
		padding: 50rpx 0;
		.steps{
			padding-bottom: 30rpx;
		}
		.btnBox{
			margin-top: 50rpx;
			margin-bottom: 30rpx;
			width: 100%;
			.btn{
				width: 350rpx;
				height: 350rpx;
				border-radius: 50%;
				background: rgb(44,101,240);
				display: flex;
				justify-content: center;
				align-items: center;
				.btnText{
					color: #FFF;
					font-weight: bold;
					font-size: 45rpx;
				}
			}
			.btnA{
				width: 350rpx;
				height: 350rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgb(107, 189, 240);
			}
			.clockInLocation{
				margin-top: 30rpx;
				width: 100%;
				text-align: center;
				font-size: 30rpx;
				color: rgb(83,125,243);
			}
			.noEntry{
				color: rgb(138,138,138);
			}
		}
		
	}
}
</style>
