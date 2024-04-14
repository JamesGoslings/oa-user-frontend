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
			<view class="linkManBar">
				<view class="iconfont linkIco">&#xe623;</view>
				<view class="topLinkTxt">{{item.topLinkTxt}}</view>
				<view class="menuIco iconfont">
					<text class="iconfont aIco" v-if="!item.isChoose" @click="openLinkManList(item)">
						&#xe656;
					</text>
					<text class="iconfont aIco" v-else  @click="item.isChoose = !item.isChoose"
					style="-moz-transform: rotate(90deg);-webkit-transform: rotate(90deg);">
						&#xe656;
					</text>
				</view>
			</view>
			
			<treeLinkMan :dataList="linkManBarDetail" v-if="item.isChoose && index === 0"></treeLinkMan>

<!-- 			<view class="linkManBarDetail" v-if="item.isChoose">
				<view class="detailOne" v-if="index === 0" v-for="(it,i) in linkManBarDetail" :key="i">
					<view class="detailOneTxt">{{it.deptName}}</view>
					<view class="icoDetail iconfont">
						<text class="iconfont icoUp" v-if="!it.isChoose" @click="openLinkManList(it)">
							&#xe61d;
						</text>
						<text class="iconfont icoUp" v-else  @click="it.isChoose = !it.isChoose"
						style="-moz-transform: rotate(90deg);-webkit-transform: rotate(90deg);">
							&#xe61d;
						</text>
					</view>
					
				</view>
			</view> -->
	
			
		</view>
	
		<loginFailPopup></loginFailPopup>
	</view>
</template>

<script setup>
import { callWithErrorHandling } from 'vue';
import { getLinkManListInfo } from '../../api/telep';
let teleHead = ref({title:"通讯录",fun:"0",color:"#FFF"})
let isChoose  = ref(false)
let linkManBarMsg = ref([
	{
		topLinkTxt: '公司通讯录',
		isChoose: false
	},
	{
		topLinkTxt: '个人通讯录',
		isChoose: false
	},
	{
		topLinkTxt: '公共通讯录',
		isChoose: false
	}
])
let linkManBarDetail = ref([])
function goSearch(){
	uni.navigateTo({
		url:'/pages/searchLinkMan/searchLinkMan'
	})
}
function openLinkManList(item){
	item.isChoose = !item.isChoose
	// console.log(linkManBarMsg.value.length);
}
const linkManInfo = async ()=>{
	let {data:{data}} = await getLinkManListInfo()
	console.log("==============LinkManListData=================");
	console.log(data);
	console.log("==============LinkManListData=================");
	linkManBarDetail.value = data
}
let isShow = true 
onShow(()=>{
	if(isShow){
		linkManInfo()
		isShow = false
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
		.linkManBar{
			width: 100%;
			height: 5%;
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
		.linkManBarDetail{
			width: 100%;
			height: 5%;
			margin-top: 10rpx;
			margin-bottom: 10rpx;
			.detailOne{
				width: 100%;
				height: 100%;
				background: rgba(255,255,255, 0.8);
				display: flex;
				margin-top: 2rpx;
				margin-bottom: 2rpx;
				// border: #c4c4c4 1rpx solid;
				.detailOneTxt{
					width: 20%;
					// height: 100%;
					color: #6d6d6d;
					margin-left: 100rpx;
				}
				.icoDetail{
					width: 65%;
					float: right;
					.icoUp{
						font-size: 50rpx;
						float: right;
						color: rgba(0,0,0,0.3);
					}
				}
			}
		}
	}
}
</style>
