<template>
	<view class="indexSty">	
		<swiper class="swiSty" @change="change">
			<swiper-item v-for="(item,index) in swiContent" :key="index">
				<image :src="item.imgPath" mode="aspectFill" class="imgSty"></image>
				<button class="btn" hover-class="btn_a" @click="toLogin()" v-if="index === 2">开始使用</button>
				<view v-if="index !== 2">
					<text class="mainText">
						{{item.mainTxt}}
					</text>
					<br/>
					<text class="aText">{{item.aTxt}}</text>
				</view>
			</swiper-item>
		</swiper>
		<view class="chices">
			<view class="chice" v-for="(item,index) in 3" :key="index"
			:style="{background: dotIndex === index ? 'blue' : '#F5F5F5'}"></view>
		</view>
	</view>
</template>

<script setup>

function toLogin(){
	uni.redirectTo({
		url:'/pages/login/login'
	})
}
let swiContent = ref([
	{
		imgPath:"/static/image/draw/多端协同(1).png",
		mainTxt:"权 限 管 理",
		aTxt:"实现多端合作，分工明确，有效提高工作效率"
	},
	{
		imgPath:"/static/image/draw/数据查找(1).png",
		mainTxt:"绩 效 查 询",
		aTxt:"绩效工资在线查询，对自己更有B数"
	},
	{
		imgPath:"/static/image/draw/用户登录(1).png",
		mainTxt:"",
		aTxt:""
	}
])

let dotIndex = ref(0)
function change(e){
	dotIndex.value = e.detail.current
}
</script>

<style lang="scss" scoped>
@import url(@/common/style/btn.css);
.indexSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.swiDot{
		width: 100%;
		height: 80%;
	}
		.swiSty{
			width: 100%;
			height: 70%;
			margin-top: 20%;
			text-align: center;
			display: flex;
			justify-content: center;
			.imgSty{
				width: 100%;
				height: 60%;
				padding-bottom: 10%;
			}
			.mainText{
				
			}
			.aText{
				font-size: 25rpx;
				color: rgba(144,147,153, 0.9);
			}
			
		}
		.chices{
			width: 100%;
			display: flex;
			justify-content: center;
			.chice{
				width: 10%;
				height: 18rpx;
				float: left;
				margin-right: 10rpx;
				border-radius: 15%;
				background: #F5F5F5;
			}
		}
	
}
</style>
