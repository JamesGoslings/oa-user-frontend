<template>
	<layout :lay="myLay"></layout>
	<view class="doingAll">
		<view style="background: #FFF;">
		    <uni-data-select
		      v-model="chooseIndex"
		      :localdata="[{value: -2,text:'全部'},{value: 1,text: '申请中'}
			  ,{value: 2,text: '已通过'},{value: -1,text:'已驳回'}]"
			  @change="getMyProcessList(chooseIndex)"
		    ></uni-data-select>
		</view>
		<view v-for="(process,i) in myProcessAll" :key="i">
			<uni-card class="processOne">
				<view class="msg" @click="goToDetail(process)"> 
					<view class="iconfont ico">&#xe72a;</view>
					<view class="msgDetail" style="margin-left: 2vw;">
						<view style="color: rgb(36,47,87);font-size: 28rpx;font-weight: 550;">申请人：{{process.name}}</view>
						<view style="color: RGB(194,194,194);font-size: 25rpx;">审批类型：{{process.processTypeName}}</view>
						<view style="color: RGB(194,194,194);font-size: 25rpx;">申请标题：{{process.title}}</view>
					</view>
				</view>
				<view>
					<view>{{getMsg(process)}}</view>
				</view>
			</uni-card>
		</view>
		<view style="height: 5vh;background: #F5F5F5;"></view>
	</view>
</template>

<script setup>
import myBtn from '@/components/myBtn/myBtn.vue';
import { getDoingProcess,doTask,quitProcess,listMyProcess } from '@/api/process/process';
import {isSpace} from '@/utils/common_utils/stringUtils.js'

// 用于设定顶头信息
let myLay = ref({title: '我发起的申请',mainColor:"#fff",btnColor:"#F5F5F5"})

let chooseIndex = ref(-2)
function getMsg(process){
	if(process.status === 1){
		return '申请中'
	}
	if(process.status === -1){
		return `已被 ${process.currentAuditor} 驳回`
	}
	if(process.status === 2){
		return '已通过'
	}
	return '无状态'
}

// 存自己的申请
let myProcessAll = ref([])
// 获取发出的申请
const getMyProcessList = async(status = -2)=>{
	let {data:{data}} = await listMyProcess(status)
	myProcessAll.value = data
}

function getQuitMsg(process){
	return `已被“${process.currentAuditor}"驳回`
}
// 跳转到对应的详情页并存下表单值
function goToDetail(process){
	uni.setStorageSync('formValues',process.formValues)
	uni.navigateTo({
		url: '/pages/processDetail/processDetail?tmpId=' + process.processTemplateId
	})
}


onShow(()=>{
	getMyProcessList()
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

