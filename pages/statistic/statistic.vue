<!-- 考勤统计页面 -->
<template>
	<view class="statisticSty">
		<layout :lay="myLay"></layout>
		考勤统计页面
	</view>
</template>

<script setup>
// 用于设定顶头信息
let myLay = ref({title: '统计',mainColor:"#fff",btnColor:"#F5F5F5"})
</script>

<style lang="scss" scoped>
.statisticSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
}
</style>
