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
				<view class="fun" @click="goToClockInRule()">
					<view class="iconfont funIco">&#xe61e;</view>
					<view class="funText">考勤规则</view>
				</view>
			</view>
		</view>
		<view class="clockInFun">
			<uni-steps class="steps" :options="options" direction="column" :active="stepIndex"></uni-steps>
			<view class="btnBox">
				<button class="btn" hover-class="btnA" :disabled="!isEntry" @click="clockIn()">
					<view class="btnText">
						<view v-text="clockInText"></view>
						<view class="nowTime" v-text="currentTime"></view>
					</view>
				</button>
				<view class="clockInLocation iconfont" v-if="isEntry">&#xe6db; 已进入打卡范围</view>
				<view class="clockInLocation iconfont noEntry" v-else>&#xe6dc; 未进入打卡范围</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { distanceWithCompany,getOnlyLocation } from '@/utils/location/location';
import { formattedTime } from '@/utils/common_utils/formatDate';
// myHeader组件的显示信息
let myHead = ref({title: '考勤打卡',fun: '0',color: '#fff'})
// 定义每个步骤的信息
let options = ref([
	{
		title:'上班打卡 09:00',
		desc:'',
	},
	{
		title:'下班打卡 18:00',
		desc:'',
	}
])
//
let clockInText = ref('')
// 判断打卡的步骤
let stepIndex = ref(0)
// 判断是否已经进入可打卡范围
let isEntry = ref(true)

// 接收用户信息
let userMsg = ref(
	{
		avatarUrl: '/static/image/default_avatar.png',
		name:'未登录',
		dept:'无'
	}
)

function clockIn(){
	console.log('打卡成功');
	// 运行打卡任务步骤
	stepIndex.value++;
	stepIndex.value = stepIndex.value % 2;
	// 同步显示打卡文字
	let str = options.value[stepIndex.value].title
	clockInText = str.substring(0,4)
	// 同步显示打卡时间
	options.value[stepIndex.value].desc = '打卡时间 ' + formattedTime()
	console.log(options.value[stepIndex.value].title);
	console.log(formattedTime());
}
// 获取当前位置与寝室位置的距离并判断是否在打卡范围内
const getDistance = async ()=>{
	let here = await getOnlyLocation()
	console.log('=========Here==========');
	console.log(here);
	console.log('=========Here==========');
	let distance = distanceWithCompany(here[0],here[1])
	console.log('==========D==========');
	console.log(distance);
	console.log('==========D==========');
	if(distance <= 100){
		isEntry.value = true
		console.log('可打卡');
	}else{
		console.log('打不了卡，si一边去');
	}
}


const currentTime = ref(formattedTime());

const updateTime = () => {
  currentTime.value = formattedTime();
};  

onMounted(() => {
	const timer = setInterval(updateTime, 1000); // 每秒更新一次时间
	return () => clearInterval(timer); // 清除计时器，当组件卸载时
}); 
// 转到打卡规则页面
function goToClockInRule(){
	uni.navigateTo({
		url: '/pages/clockInRule/clockInRule'
	})
}

onShow(()=>{
	userMsg.value = uni.getStorageSync('userMsg')
	getDistance()
	let str = options.value[stepIndex.value].title
	clockInText = str.substring(0,4)
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
		margin-top: 50rpx;
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
				// background: rgb(44,101,240);
				background: linear-gradient(to right,#00aaff 20%,#aa55ff);
				box-shadow: 0px 0px 12px rgba(44,101,240,0.9);
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				.btnText{
					color: #FFF;
					font-weight: bold;
					font-size: 45rpx;
					.nowTime{
						font-size: 25rpx;
						font-weight: normal;
					}
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
