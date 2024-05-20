<template>
	<layout :lay="myLay"></layout>
	<view class="doingAll">
		<uni-card class="processOne" v-for="(process,i) in processAll" :key="i">
			<view class="msg" @click="goToDetail(process)"> 
				<view class="iconfont ico">&#xe72a;</view>
				<view class="msgDetail" style="margin-left: 2vw;">
					<view style="color: rgb(36,47,87);font-size: 28rpx;font-weight: 550;">申请人：{{process.name}}</view>
					<view style="color: RGB(194,194,194);font-size: 25rpx;">审批类型：{{process.processTypeName}}</view>
					<view style="color: RGB(194,194,194);font-size: 25rpx;">申请标题：{{process.title}}</view>
				</view>
			</view>
			<view v-if="isMe(process.currentAuditor)" class="btnAll">
				<myBtn style="margin: 0 1vw;font-size: 25rpx;padding: 0 2vw;" content="通过" radius="5rpx"
				 @click="doThisTask(process.processId)"/>
				 <myBtn style="margin: 0 1vw;font-size: 25rpx;padding: 0 2vw;" content="驳回" radius="5rpx"
				 mainBackColor="rgb(234,123,54)"  @click="backThisProcess(process)"/>
			</view>
			<view v-else>
				<view class="endBox">已操作</view>
			</view>
		</uni-card>
	</view>
</template>

<script setup>
import myBtn from '@/components/myBtn/myBtn.vue';
import { getDoingProcess,doTask } from '@/api/process/process';
import {isSpace} from '@/utils/common_utils/stringUtils.js'

// 用于设定顶头信息
let myLay = ref({title: '我审批的申请',mainColor:"#fff",btnColor:"#F5F5F5"})

// 判断当前审批人是不是自己
function isMe(currentAuditor){
	let username = uni.getStorageSync('userMsg').username
	// console.log(username);
	return currentAuditor == username
}

// 跳转到对应的详情页并存下表单值
function goToDetail(process){
	uni.setStorageSync('formValues',process.formValues)
	uni.navigateTo({
		url: '/pages/processDetail/processDetail?tmpId=' + process.processTemplateId
	})
}
// 驳回该流程
function backThisProcess(process){
	alert('驳回')
}

// 存拿到的申请
let processAll = ref([])
// 获取待审批申请
const getMyDoingProcess = async()=>{
	let {data:{data}} = await getDoingProcess()
	console.log("=====================??>>>")
	console.log(data);
	console.log("=====================??>>>")
	processAll.value = data
}
const doThisTask = async(processId)=>{
	console.log(processId);
	let data = await doTask(processId)
	console.log('===============================>>>>>>')
	console.log(data);
	console.log('===============================>>>>>>')
}
onShow(()=>{
	getMyDoingProcess()
})
</script>

<style lang="scss" scoped>
@import '@/common/myStyles/listSize.scss';
@import '@/common/myStyles/globalPage.scss';
@import '@/common/myStyles/commonStyles.scss';
@import url('@/static/fontTotal/iconfont.css');
@import url('@/static/font2/iconfont.css');

	
.doingAll{
	background-color: #F5F5F5;
	position: fixed;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.processOne{
		:deep(){
			.uni-card__content{
				@include flex-box;
				justify-content: space-between;
				.msg{
					@include flex-box;
					.ico{
						font-size: 80rpx;
					}
				}
				.btnAll{
					@include flex-box;
					justify-content: space-between;
				}
			}
		}
	}
}

</style>
