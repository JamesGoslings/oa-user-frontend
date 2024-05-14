<template>
	<layout :lay="myLay"></layout>
	<view class="processAll">
		<div class="type funTitle">人事</div>
	</view>
</template>

<script setup>
import { getAllProcessType } from '../../api/process/processType';
// 用于设定顶头信息
let myLay = ref({title: '审批页面',mainColor:"#fff",btnColor:"#F5F5F5"})

</script>

<style lang="scss" scoped>
@import '@/common/myStyles/listSize.scss';
@import '@/common/myStyles/globalPage.scss';
@import '@/common/myStyles/commonStyles.scss';

.processAll{
	padding: 0 2vw;
	.type{
		margin: 1vh 0;
	}
}
</style>
