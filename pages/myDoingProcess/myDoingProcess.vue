<template>
	<layout :lay="myLay"></layout>
	<view class="doingAll">
		<view style="background: #FFF;">
		    <uni-data-select
		      v-model="chooseIndex"
		      :localdata="[{value: 0,text:'全部'},{value: 1,text: '待处理'}
			  ,{value: 2,text: '已通过'},{value: 3,text:'已驳回'}]"
		    ></uni-data-select>
		</view>
		<view v-for="(process,i) in processAll" :key="i">
		<uni-card class="processOne" v-if="isShowCard(process,chooseIndex)">
			<view class="msg" @click="goToDetail(process)"> 
				<view class="iconfont ico">&#xe72a;</view>
				<view class="msgDetail" style="margin-left: 2vw;">
					<view style="color: rgb(36,47,87);font-size: 28rpx;font-weight: 550;">申请人：{{process.name}}</view>
					<view style="color: RGB(194,194,194);font-size: 25rpx;">审批类型：{{process.processTypeName}}</view>
					<view style="color: RGB(194,194,194);font-size: 25rpx;">申请标题：{{process.title}}</view>
				</view>
			</view>
			<view v-if="isMe(process) && process.status !== -1" class="btnAll">
				<myBtn style="margin: 0 1vw;font-size: 25rpx;padding: 0 2vw;" content="通过" radius="5rpx"
				 @click="doThisTask(process)"/>
				 <myBtn style="margin: 0 1vw;font-size: 25rpx;padding: 0 2vw;" content="驳回" radius="5rpx"
				 mainBackColor="rgb(234,123,54)"  @click="backThisProcess(process)"/>
			</view>
			<view v-else-if="process.status === -1">
				<view v-text="getQuitMsg(process)"></view>
			</view>
			<view v-else>
				<view class="endBox">已操作</view>
			</view>
		</uni-card>
		</view>
		<view style="height: 5vh;background: #F5F5F5;"></view>
	</view>
</template>

<script setup>
import myBtn from '@/components/myBtn/myBtn.vue';
import { getDoingProcess,doTask,quitProcess } from '@/api/process/process';
import {isSpace} from '@/utils/common_utils/stringUtils.js'

// 用于设定顶头信息
let myLay = ref({title: '我审批的申请',mainColor:"#fff",btnColor:"#F5F5F5"})
// 判断该审批卡片是否显示
function isShowCard(process,choose){
	if(choose === 1){
		return process.status === 1 && isMe(process)
	}
	if(choose === 2){
		return process.status !== -1 && !isMe(process)
	}
	if(choose === 3){
		return process.status === -1
	}
	return true;
}
// 存选中的下标
let chooseIndex = ref(1)
// 返回驳回信息
function getQuitMsg(process){
	let peoStr = isMe(process) ? '你' : `${process.currentAuditor}`
	return `已被“${peoStr}"驳回`
}
// 判断当前审批人是不是自己
function isMe(process){
	let username = uni.getStorageSync('userMsg').username
	// console.log(username);
	return process.currentAuditor == username
}

// 跳转到对应的详情页并存下表单值
function goToDetail(process){
	uni.setStorageSync('formValues',process.formValues)
	uni.navigateTo({
		url: '/pages/processDetail/processDetail?tmpId=' + process.processTemplateId
	})
}
// 驳回该流程
const backThisProcess = async(process)=>{
	uni.showModal({
		title: `你确定要驳回申请 “${process.title}” 吗？`,
		success: async (res) => {
			if (res.confirm) {
				let data = await quitProcess(process.processId)
				flush()
				// console.log(data);
			} else if (res.cancel) {
				console.log('用户点击取消~');
			}
		}
	})
}
// 刷新数据
function flush(){
	getMyDoingProcess()
}
// 存拿到的申请
let processAll = ref([])
// 获取待审批申请
const getMyDoingProcess = async()=>{
	let {data:{data}} = await getDoingProcess()
	// console.log("=====================??>>>")
	// console.log(data);
	// console.log("=====================??>>>")
	processAll.value = data
}
// 通过审批
const doThisTask = async(process)=>{
	uni.showModal({
		title: `你确定要驳回申请 “${process.title}” 吗？`,
		success: async (res) => {
			if (res.confirm) {
				let data = await doTask(process.processId)
				flush()
				// console.log(data);
			} else if (res.cancel) {
				console.log('用户点击取消~');
			}
		}
	})
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
	margin-bottom: 5vh;
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
