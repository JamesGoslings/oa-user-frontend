
<!--显示单个联系人具体信息的页面  -->

<template>
	<view class="linkManPageSty">
		<view class="pageTop">
			<view class="backBtn" :style="{justifyContent: justifyContentValue}">
				<view class="btn iconfont" @click="goBack()">
					&#xe604;
				</view>
				<view class="btn editBtn iconfont" @click="goEdit()" v-if="detail.typeId === 2">
					&#xe602;
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
			<uni-list-item :title="linkMan.post" note="联系人职位" v-if="detail.typeId === 1"></uni-list-item>
			<uni-list-item :title="linkMan.relationship" note="关系" v-else-if="detail.typeId === 2" :border="false"></uni-list-item>
			<uni-list-item :title="linkMan.phone" note="联系人手机号码">
				<template v-slot:footer>
					<view class="iconfont phoneIco" @click="call()">&#xe610;</view>
				</template>
			</uni-list-item>
			<uni-list-item :title="linkMan.createTime" note="创建时间" v-if="detail.typeId === 2"></uni-list-item>
			<uni-list-item :title="detail.typeName" note="当前通讯录"></uni-list-item>
		</uni-list>
		<loginFailPopup></loginFailPopup>
	</view>

</template>

<script setup>
import{statusBarHeight,getTitleBarHeight} from '@/utils/common_utils/system.js'

//TODO 让h5和app端的头部图标位于最右，小程序中图标紧靠标题
let justifyContentValue = 'space-between'
// #ifdef MP
justifyContentValue = 'flex-start'
// #endif

let detail = ref({})
let linkMan = ref({})
onShow(()=>{
	detail.value = uni.getStorageSync('linkManDetail')
	linkMan.value = detail.value.linkMan
	setLinkManAvatar()
	
	console.log('OnShow执行了');
	console.log('=============NEWDATA==============');
	console.log(uni.getStorageSync('linkManDetail'));
	console.log(linkMan.value);
	console.log('=============NEWDATA==============');
	
})

// onLoad( data =>{
// 	detail.value = JSON.parse(data.linkManDetail)
// 	linkMan.value = detail.value.linkMan
// 	setLinkManAvatar()
	
// 	console.log('=============NEWDATA==============');
// 	console.log(detail.value);
// 	console.log(linkMan.value);
// 	console.log('=============NEWDATA==============');
	
// })

function goBack(){
	uni.navigateBack()
}
function goEdit(){
	uni.navigateTo({
		url: '/pages/editLinkManPage/editLinkManPage?originData=' + JSON.stringify(linkMan.value)
	})
}

let linkManAvatar = ref('/static/image/default_avatar.png')
function setLinkManAvatar(){
	if(detail.value.typeId === 2){
		linkManAvatar.value = '/static/image/logo.png'
		return;
	}
	let url = linkMan.value.avatarUrl
	if(url === undefined || url === null || url === ''){
		return;
	}
	linkManAvatar.value = url
}

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
			justify-content: space-between;
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
			.editBtn{
				margin-right: 20rpx;
				display: flex;
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
				width: 250rpx;
				height: 250rpx;
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
