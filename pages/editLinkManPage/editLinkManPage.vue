<template>
	<view class="editLinkManSty">
		<myHeader :head="head"></myHeader>
		<view class="topbar">
			<view class="iconfont topIco" @click="goBack()">&#xe647;</view>
			<view class="topTxt">{{pageTextMsg[funIndex].topText}}</view>
			<view class="iconfont topIco" @click="submitMsg(pageTextMsg[funIndex].isUpdate)">&#xe648;</view>
		</view>
		<view class="ico iconfont">&#xe60b;</view>
		<view class="cards">
			<view class="card" v-for="(item,index) in editMode" :key="index">
				<view class="iconfont modeIco" v-html="item.ico"></view>
				<input class="ipt" :placeholder="item.placeholder" v-model="linkMan[item.key]"/>
			</view>
		</view>
	</view>
</template>

<script setup>
import { updatePrivateLinkMan, savePrivateLinkMan } from '@/api/linkMan/linkMan';
let head = ref({title:"",fun:"0",color:"#F5F5F5"})
let linkMan = ref({id: 0,name: '',phone: '',relationship: ''})
let editMode = ref([
	{
		ico: '&#xe615;',
		placeholder: '名称',
		key: 'name'
	},
	{
		ico: '&#xe6d0;',
		placeholder: '电话号码',
		key: 'phone'
	},
	{
		ico: '&#xe63e;',
		placeholder: '与联系人的关系',
		key: 'relationship'
	}
])

let pageTextMsg = ref([
	{
		topText: '编辑联系人',
		isUpdate: true
	},
	{
		topText: '新建联系人',
		isUpdate: false
	}
])
let funIndex = ref(0)
onLoad(data=>{
	const originData = data.originData
	if(originData === undefined){
		funIndex.value = 1
		return;
	}
	linkMan.value = JSON.parse(originData)
})

const updateLinkManMsg = async()=>{
	let {data:{code}} = await updatePrivateLinkMan(linkMan.value)
	if(code === 200){
		let detail = uni.getStorageSync('linkManDetail')
		detail.linkMan = linkMan.value
		uni.setStorageSync('linkManDetail',detail)
		console.log('===========Detail============');
		console.log(uni.getStorageSync('linkManDetail'));
		console.log('===========Detail============');
	}
}

const saveLinkManMsg = async()=>{
	let {data} = await savePrivateLinkMan(linkMan.value)
	console.log(data);
}

// onBackPress( res =>{
// 	console.log(res);
// 	console.log('为什么不触发事件,cnm');
// 	return true
// })
// onUnload(res=>{
// 	console.log('cnm,为什么不在当前页面就触发这个事件，之后触发有毛用');
// 	console.log(res);
// 	return true
// })


const submitMsg = async (isUpdate)=>{
	
	let title = isUpdate ? '是否保存修改' : '是否新建联系人'
	
	uni.showModal({
		title: title,
		success: res => {
			if (res.confirm) {
				console.log('用户点击确定');
				if(isUpdate){
					updateLinkManMsg().then(()=>{
						uni.setStorageSync('isShowTelePage',true)
						uni.navigateBack()
					})
				}
				saveLinkManMsg().then(()=>{
					uni.setStorageSync('isShowTelePage',true)
					uni.navigateBack()
				})
				
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	})
}



function goBack(){
	uni.showModal({
		title:'未保存修改是否退出',
		success: res => {
			if (res.confirm) {
				uni.navigateBack()
			} else if (res.cancel) {
				console.log('用户点击取消~');
			}
		}
	})
}
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
				font-size: 38rpx;
				color: #3d3d3d;
			}
		}
	}
}

</style>
