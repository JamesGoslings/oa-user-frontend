<template>
	<view class="editLinkManSty">
		<myHeader :head="head"></myHeader>
		<view class="topbar">
			<view class="iconfont topIco">&#xe647;</view>
			<view class="topTxt">编辑联系人</view>
			<view class="iconfont topIco">&#xe648;</view>
		</view>
		<view class="ico iconfont">&#xe60b;</view>
		<view class="cards">
			<view class="card" v-for="(item,index) in editMode" :key="index">
				<view class="iconfont modeIco" v-html="item.ico"></view>
				<input class="ipt" :placeholder="item.placeholder"/>
			</view>
		</view>
	</view>
</template>

<script setup>
let head = ref({title:"",fun:"0",color:"#F5F5F5"})
let iptSty = ref({width: "50rpx"})
let editMode = ref([
	{
		ico: '&#xe615;',
		placeholder: '名称'
	},
	{
		ico: '&#xe6d0;',
		placeholder: '电话号码'
	},
	{
		ico: '&#xe63e;',
		placeholder: '与联系人的关系'
	}
	])
</script>

<style lang="scss" scoped>
@import url('/static/font/iconfont.css');
.editLinkManSty{
	background-color: #F5F5F5;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.topbar{
		width: 100%;
		height: 8%;
		// border: #000 1rpx solid;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.topIco{
			font-size: 80rpx;
		}
		.topTxt{
			font-family: 幼圆;
			font-size: 45rpx;
		}
	}
	.ico{
		padding-top: 40rpx;
		padding-bottom: 30rpx;
		// border: #000 1rpx solid;s
		width: 100%;
		text-align: center;
		font-size: 120rpx;
	}
	.cards{
		width: 100%;
		// height: 70%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.card{
			width: 95%;
			height: 200rpx;
			margin-bottom: 60rpx;
			background: #fff;
			border-radius: 60rpx;
			// border: #000 1rpx solid;
			display: flex;
			align-items: center;
			.modeIco{
				margin-left: 40rpx;
				font-size: 60rpx;
			}
			.ipt{
				width: 70%;
				// border: #000 1rpx solid;
				display: flex;
				align-items: center;
				margin-left: 50rpx;
				font-size: 40rpx;
			}
		}
	}
}

</style>
