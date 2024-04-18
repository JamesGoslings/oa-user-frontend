<template>
	<view class="teleSty">
		<myHeader :head="teleHead"></myHeader>
		<view class="searchBar">
			<view class="search" @click="goSearch()">
				<view class="iconfont ico">&#xe607;</view>
				<text class="iptTxt">请输入电话号码或联系人姓名</text>
			</view>
		</view>
		<view class="linkManModule" v-for="(item,index) in linkManBarMsg" :key="index">
			<view class="linkManBar" @click="openLinkManList(item)">
				<view class="iconfont linkIco" v-html="item.ico"></view>
				<view class="topLinkTxt">{{item.topLinkTxt}}</view>
				<view class="menuIco iconfont">
					<text class="iconfont aIco" v-if="!item.isChoose">
						&#xe656;
					</text>
					<text class="iconfont aIco" v-else style="-moz-transform: rotate(90deg);-webkit-transform: rotate(90deg);">
						&#xe656;
					</text>
				</view>
			</view>
			
			<treeLinkMan :dataList="item.detail" v-if="item.isChoose && index === 0"></treeLinkMan>
			
			<linkMan :dataList="item.detail" :myType="item.myType" v-else-if="item.isChoose && index > 0"></linkMan>
		</view>
		
		<uni-fab horizontal="right" :content="menus" @trigger="trigger" v-if="isShowFab">
		</uni-fab>
		<view class="hideFab" v-else @click="isShowFab = true"></view>
		<!-- <view class="hideFab"></view> -->
		<view class="fill"></view>
		<loginFailPopup></loginFailPopup>
	</view>
</template>

<script setup>
import { callWithErrorHandling } from 'vue';
import { getLinkManListInfo } from '@/api/telep/telep.js'
// import { getPrivateLinkManList } from '@/api/privateLinkMan/privateLinkMan';
import { getPrivateLinkManList,getPublicLinkManList } from '@/api/linkMan/linkMan';

// 用于判断是否展示悬浮菜单按钮
let isShowFab = ref(true)

// 定义悬浮菜单各个功能按钮
let menus = ref([
	{
		iconPath: 'http://picture.gptkong.com/images/d8e7aa93d72f40baa50a7984def4aecc.png',
		text: '搜索'
	},
	{
		iconPath: 'http://picture.gptkong.com/images/3ef797faa49f40f1932aabc738b902c1.png',
		text: '新建'
	},
	{
		iconPath: 'http://picture.gptkong.com/images/28596118e63848d8b5bef54f0b70d788.png',
		text: '隐藏'
	}
])

// myHeader组件的显示信息
let teleHead = ref({title:"通讯录",fun:"0",color:"#FFF"})

let isChoose  = ref(false)

// 定义各个通讯录模块的数据模型
let linkManBarMsg = ref([
	{
		topLinkTxt: '公司通讯录',
		isChoose: false,
		ico: '&#xe623;',
		myType: {},
		detail: []
	},
	{
		topLinkTxt: '个人通讯录',
		isChoose: false,
		ico: '&#xe601;',
		myType: {typeId: 2, typeName: '个人通讯录'},
		detail: []
	},
	{
		topLinkTxt: '公共通讯录',
		isChoose: false,
		ico: '&#xec93;',
		myType: {typeId: 3, typeName: '公共通讯录'},
		detail: []
	}
])

// 悬浮菜单的处理方法
function trigger(e){
	console.log(e.index);
	const i = e.index
	if(i === 0){
		uni.navigateTo({
			url: '/pages/searchLinkMan/searchLinkMan'
		})
	}
	else if(i === 1){
		uni.navigateTo({
			url: '/pages/editLinkManPage/editLinkManPage'
		})
	}
	else if(i == 2){
		isShowFab.value = false
	}
}

// 进入搜索页面
function goSearch(){
	uni.navigateTo({
		url:'/pages/searchLinkMan/searchLinkMan'
	})
}

// 判断选中
function openLinkManList(item){
	item.isChoose = !item.isChoose
	// console.log(linkManBarMsg.value.length);
}

// 从后端获取树型的公司通讯录
const linkManInfo = async ()=>{
	let {data:{data}} = await getLinkManListInfo()
	// linkManBarDetail.value = data
	linkManBarMsg.value[0].detail = data
}

// 从后台获取全部的个人联系人的列表
const privateLinkManList = async ()=>{
	let {data:{data}} = await getPrivateLinkManList()
	// privateLinkManBarDetail.value = data
	linkManBarMsg.value[1].detail = data
}

// 从后端获取全部的公共联系人的列表
const publicLinkManList = async ()=>{
	let {data:{data}} = await getPublicLinkManList()
	linkManBarMsg.value[2].detail = data
}

// 设置isShowTelePage缓存来确定该页面是否需要重新加载（减少资源消耗）
uni.setStorageSync('isShowTelePage',true)
onShow(()=>{
	if(uni.getStorageSync('isShowTelePage')){
		linkManInfo()
		privateLinkManList()
		publicLinkManList()
		uni.setStorageSync('isShowTelePage',false)
	}
})

</script>

<style lang="scss" scoped>
@import url(@/static/font/iconfont.css);
.teleSty{
	background-color: #F5F5F5;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%; 
	height: 100%;
	overflow: auto;
	.searchBar{
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		width: 100%;
		height: 6%;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		.search{
			width: 98%;
			height: 80%;
			background: #F5F5F5;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			.ico{
				font-size: 40rpx;
				margin-right: 20rpx;
			}
			.iptTxt{
				font-size: 30rpx;
				color: rgb(102,102,102);
			}
		}
	}
	.linkManModule{
		margin-bottom: 10rpx;
		// height: 10%;
		.linkManBar{
			width: 100%;
			// height: 5%;
			padding: 5% 0 ;
			background: #fff;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			margin-bottom: 10rpx;
			.linkIco{
				margin-left: 20rpx;
				margin-right: 30rpx;
				font-size: 50rpx;
			}
			.topLinkTxt{
				font-size: 35rpx;
				
			}
			.menuIco{
				width: 60%;
				float: right;
				.aIco{
					float: right;
					// padding-right: 10rpx;
				}
			}
		}
	}
	.hideFab{
		position: fixed;
		right: 0rpx;
		bottom: 22%;
		width: 20rpx;
		height: 120rpx;
		border-radius: 20rpx;
		background: rgb(0,122,255);
		// border: #000 1rpx solid;
	}
	.fill{
		height: 10%;
	}
}
</style>
