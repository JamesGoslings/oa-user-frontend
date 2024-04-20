<template>
	<view class="ruleSty">
		<layout :lay="myLay"></layout>
		<view class="myCard">
			<view class="card">
				<view></view>
			</view>
		</view>
	</view>
</template>

<script setup>
// 用于头部信息的展示
let myLay = ref({title: '考勤规则'})

</script>

<style lang="scss" scoped>
.ruleSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	background: #f5f5f5;
	.myCard{
		width: 100%;
		display: flex;
		justify-content: center;
		margin: 50rpx 0;
		.card{
			width: 90%;
			height: 200rpx;
			background: #FFF;
			border-radius: 30rpx;
		}
	}
}
</style>
