<!-- 单独展示企业信息的页面 -->
<template>
	<view class="companyMsgSty">
		<layout :lay="myLay"></layout>
		<view class="topImgShow">
			<image class="topImg" src="http://picture.gptkong.com/images/b75a59270c1c405bba3a78ff96c72723.jpg" mode="aspectFill"></image>
		</view>
		<view class="msgs">
			<view class="msgOne">
				<view class="title">
					基本信息
				</view>
				<view class="detail" v-for="(item,index) in basicMsg" :key="index">
					<view class="ico iconfont" v-html="item.ico" ></view>
					<text class="icoTxt">{{item.icoText + '：'}}</text>
					<view class="msgContent">{{item.content}}</view>
				</view>
			</view>
			<view class="msgOne">
				<view class="title">
					企业简介
				</view>
				<uni-card margin="0 0">
					<text  class="mainText">
						牛马科技有限公司成立于2023年，是一家专注于互联网领域的创新型企业。
						公司主要从事软件开发、网络技术、移动应用等方面的研发和应用。
						公司拥有一个优秀的技术人员，致力于提供高质量的产品和服务
					</text>
				</uni-card>
			</view>
			
		</view>
	</view>
</template>

<script setup>
// 用于设定顶头信息
let myLay = ref({title: '企业信息',mainColor:"#fff",btnColor:"#F5F5F5"})
// 用于展示基本信息
let basicMsg = ref([
	{
		ico: '&#xe674;',
		icoText: '名称',
		content: '牛马科技有限公司'
	},
	{
		ico: '&#xe64b;',
		icoText: '地址',
		content: '四川省成都信息工程大学15栋3027'
	},
	{
		ico: '&#xe645;',
		icoText: '电话',
		content: '19982033675'
	},
	{
		ico: '&#xe672;',
		icoText: '邮箱',
		content: '3248175240@qq.com'
	},
	{
		ico: '&#xea91;',
		icoText: '公众号',
		content: '我的OA办公系统公众号'
	}
])
</script>

<style lang="scss" scoped>
@import url('../../static/font2/iconfont.css');
.companyMsgSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.topImgShow{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.topImg{
			width: 95%;
			height: 250rpx;
			border-radius: 30rpx;
		}
	}
	.msgs{
		width: 90%;
		padding: 40rpx 30rpx;
		display: flex;
		flex-wrap: wrap;
		.msgOne{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 50rpx;
			.title{
				width: 100%;
				font-size: 35rpx;
				font-weight: bold;
				margin-bottom: 30rpx;
			}
			.detail{
				width: 100%;
				display: flex;
				align-items: center;
				margin-bottom: 25rpx;
				.ico{
					font-size: 50rpx;
					display: flex;
					align-items: center;
				}
				.icoTxt{
					margin-left: 15rpx;
					color: #9ca3af;
					font-size: 32rpx;
				}
				.msgContent{
					color: #9ca3af;
					font-size: 32rpx;
				}
			}
			.mainText{
				font-size: 32rpx;
			}
		}
	}
}
</style>
