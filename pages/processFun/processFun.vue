<template>
	<layout :lay="myLay"></layout>
	<view class="processAll">
		<view v-for="(type) in processTypeAll">
			<view class="type funTitle">{{type.name}}</view>
			<view v-for="(tmp) in processTemplateAll">
				<uni-card padding="20rpx 0" v-if="tmp.processTypeId === type.id" @click="goToDetail(tmp)">
						<view class="tmpOne">
							<view class="icoBox" :style="getIcoSty(type.id)">
								<view class="myIconfont ico" v-html="tmp.iconUrl"></view>
							</view>
							<view class="tmpMsg">{{tmp.name}}</view>
						</view>
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script setup>
import { getAllProcessType,getAllProcessTemplate } from '../../api/process/process';
import { colors } from '../../utils/common_utils/staticData';
// 用于设定顶头信息
let myLay = ref({title: '审批页面',mainColor:"#fff",btnColor:"#F5F5F5"})

// 跳转到对应的详情页
function goToDetail(tmp){
	uni.navigateTo({
		url: '/pages/processDetail/processDetail?tmpId=' + tmp.id
	})
}
// 用于设置当前图标背景色
function getIcoSty(id){
	id %= colors.length
	return {background: colors[id]}
}

// 存所有的类型
let processTypeAll = ref([])
// 获取类型
const getTypeAll = async()=>{
	let {data:{data}} = await getAllProcessType()
	processTypeAll.value = data
}
// 获取所有模板
let processTemplateAll = ref([])
const getTemplateAll = async()=>{
	let {data:{data}} = await getAllProcessTemplate()
	processTemplateAll.value = data
}
onShow(()=>{
	getTypeAll()
	getTemplateAll()
})
</script>

<style lang="scss" scoped>
@import '@/common/myStyles/listSize.scss';
@import '@/common/myStyles/globalPage.scss';
@import '@/common/myStyles/commonStyles.scss';
@import url('@/static/fontTotal/iconfont.css');

.processAll{
	padding: 0 2vw;
	.type{
		margin: 1vh 0;
	}
		.tmpOne{
			@include flex-box;
			justify-content: left;
			.icoBox{
				@include flex-box;
				// padding: 2vh 2.7vw;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				background: rgb(48,207,149);
				.ico{
					font-size: 50rpx;
					color: #FFF;
				}
			}
	}
	
}
</style>
