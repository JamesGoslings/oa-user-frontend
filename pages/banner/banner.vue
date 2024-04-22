<template>
	<view class="banner">
		<layout :lay="myLay"></layout>
		<image class="img" mode="widthFix" src="http://picture.gptkong.com/images/656b6f4597fa43ceaa10706c05668967.png"></image>
	</view>
</template>

<script setup>
// 用于设定顶头信息
let myLay = ref({title: '关注公众号',mainColor:"#fff",btnColor:"#F5F5F5"})
</script>

<style lang="scss" scoped>
.banner{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background: rgb(144,202,145);
	.img{
		width: 100%;
	}
}
</style>
