<template>
	<view class="linkManPageSty">
		<view class="pageTop">
			<view class="backBtn">
				<view class="btn iconfont" @click="goBack()">
					&#xe604;
				</view>
			</view>
			<view class="avatarView">
				<view class="avatar">
					<image class="avatarImg" :src="linkManAvatar" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="showLinkManMsg">
			<text>{{linkMan.name}}</text>
		</view>
		<uni-list :border="false">
			<uni-list-item :title="linkMan.post" note="联系人职位"></uni-list-item>
			<uni-list-item :title="linkMan.phone" note="联系人手机号码">
				<template v-slot:footer>
					<view class="iconfont phoneIco" @click="call()">&#xe610;</view>
				</template>
			</uni-list-item>
			<uni-list-item title="公司通讯录" note="当前通讯录"></uni-list-item>
		</uni-list>
	</view>

</template>

<script setup>
let linkMan = ref(uni.getStorageSync('linkMan'))
function goBack(){
	uni.navigateBack()
}
let linkManAvatar = ref('/static/image/logo.png')
function setLinkManAvatar(){
	let url = linkMan.value.avatarUrl
	if(url === null || url === ''){
		return;
	}
	linkManAvatar.value = url
}
setLinkManAvatar()
function call(){
	uni.makePhoneCall({
		phoneNumber: linkMan.value.phone,
		success: () => {
			console.log('拨号成功了!');
		},
		fail: () => {
			console.log('拨号失败了。');
		},
		complete: () => {
			console.log('操作结束~');
		}
	});

}
</script>

<style lang="scss" scoped>
@import url('../../static/font/iconfont.css');
.linkManPageSty{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.pageTop{
		width: 100%;
		height: 25%;
		background:
			linear-gradient(to bottom,transparent,#fff 400rpx),
			linear-gradient(to right,#beecd8 20%,#F4E2D8);
		margin-bottom: 15%;
		.backBtn{
			width: 100%;
			height: 45%;
			// border: #000 1rpx solid;
			display: flex;
			align-items: center;
			.btn{
				width: 70rpx;
				height: 70rpx;
				margin-left: 20rpx;
				border-radius: 50%;
				background: rgba(255,255,255, 0.5);
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 40rpx;
				color: rgba(0,0,0,0.5);
			}
			
		}
		.avatarView{
			margin-top: 10%;
			width: 100%;
			height: 60%;
			// border: #000 1rpx solid;
			display: flex;
			justify-content: center;
			.avatar{
				// width: 27%;
				// height: 100%;
				width: 200rpx;
				height: 200rpx;
				// background: gray;
				background: #fff;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				.avatarImg{
					width: 80%;
					height: 80%;
					border-radius: 50%;
				}
			}
		}
	}
	.showLinkManMsg{
		width: 100%;
		height: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50rpx;
	}
	.phoneIco{
		font-size: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
