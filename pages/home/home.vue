<template>
	<view class="homeSty globalMod">
		<myHeader :head="homeHead"></myHeader>
		<view class="logo">
			<view class="titleText">
				<text class="mainText">工程实践&nbsp;OA办公</text>
				<br/>
				<text class="aText">宁可累死自己 也要卷死同学</text>
			</view>
			<image src="../../static/image/logo.png" mode="aspectFill" class="logoImg"></image>
		</view>
		<!-- 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏 -->
		<uni-notice-bar background-color="rgba(255,255,255,1)" color="#c4d0ec"
		 scrollable showClose showIcon single
		 text="宁可累死自己&nbsp;&nbsp;也要卷死同学!!!"></uni-notice-bar>
		<uni-card title="待处理申请/通知" extra="点击查看全部">
			<view slot="actions" class="card-actions no-border">
				<uni-list :border="false">
					<uni-list-item title="申请处理" showArrow badge-text="1" :show-badge="true"
					note="1小时前"></uni-list-item>
					<uni-list-item title="通告处理" showArrow badge-text="2" :show-badge="true"
					note="2小时前"></uni-list-item>
				</uni-list>
			</view>
		</uni-card>
			
		<uni-card title="未读消息" extra="点击查看全部">
			<view slot="actions" class="card-actions no-border">
				<uni-list :border="false">
					<uni-list-item title="管理员消息" showArrow badge-text="1" :show-badge="true"
					note="1小时前"></uni-list-item>
					<uni-list-item title="系统消息" showArrow badge-text="2" :show-badge="true"
					note="2小时前"></uni-list-item>
				</uni-list>
			</view>
		</uni-card>
		
		<uni-card title="功能">
			
			 <view slot="actions" class="card-actions no-border funMode">
				<view class="modeOne">
					<view class="iconfont iconSize">&#xedba;</view>
					<text class="icoText">打卡</text>
				</view>
				<view class="modeOne" @click="goToProcessPage()">
					<view class="iconfont iconSize">&#x100cb;</view>
					<text class="icoText">审批</text>
				</view>
				<view class="modeOne">
					<view class="iconfont iconSize">&#x100cd;</view>
					<text class="icoText">日程</text>
				</view>
				<view class="modeOne">
					<view class="iconfont iconSize">&#x100cf;</view>
					<text class="icoText">绩效</text>
				</view>
				<view class="modeOne">
					<view class="iconfont iconSize">&#x100d0;</view>
					<text class="icoText">文档库</text>
				</view>
				<view class="modeOne">
					<view class="iconfont iconSize">&#x100cc;</view>
					<text class="icoText">更多</text>
				</view>
			</view>
		</uni-card>
		<view class="fill"></view>
		<loginFailPopup></loginFailPopup>
	</view>
</template>

<script setup>
// function onPage(){
// 	uni.navigateTo({
// 		url:"/pages/demo/demo"
// 	})
// }

// 跳转功能页面
function goToProcessPage(){
	// 跳转到审批页面
	uni.navigateTo({
		url:"/pages/processFun/processFun"
	})
}

let homeHead = ref({title:"首页",fun:"1",color:"#FFF"})

let isShow = ref(true)
onShow(()=>{
	if(isShow.value){
		isShow = false
		uni.setTabBarBadge({
			index:0,
			text:"6"
		})
		uni.showTabBarRedDot({
			index:2
		})
	}
})

let mainUrl = "/h5api/admin/api/process/"
let myData;
async function request(){
	uni.showLoading()
	let {data} = await uni.request({
		url:mainUrl + "getProcessType",
		method:"get",
		complete: () => {
			uni.hideLoading()
		},
		fail: () => {
			console.log("失败了");
		},
		success: () => {
			console.log("成功了");
			myData = data
		}
	})
}

// setTimeout(()=>{
// 	uni.setNavigationBarTitle({
// 			title:"动态标题"
// 	})
// },2000)

</script>

<style lang="scss" scoped>
@import url(@/static/font/iconfont.css);
@import url(@/common/style/globalStyle.css);
.homeSty{
	.logo{
		background:
			linear-gradient(to bottom,transparent,#fff 400rpx),
			linear-gradient(to right,#c4d0ec,#92b4f4);
		height: 200rpx;
		margin: 20rpx 50rpx;
		border-radius: 40rpx;
		align-items: center;
		display: flex;
		.titleText{
			padding: 0rpx 60rpx;
			color: #fff;
			.mainText{
				font-size: 37rpx;
			}
			.aText{
				font-size: 28rpx;
			}
		}
		.logoImg{
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
		}
		
	}
	.funMode{
		margin-right: 15rpx;
		// margin-bottom: 80rpx;
		.modeOne{
			float: left;
			width: 25%;
			text-align: center;
			padding-bottom: 20rpx;
			.icoText{
				
			}
			.iconSize{
				font-size: 80rpx;
				padding-bottom: 20rpx;
				padding-top: 20rpx;
			}
		}
		
	}
	
	.fill{
		height: 120rpx;
	}
	
	
	
	
	
	// .flag{
	// 	width: 700rpx;
	// 	height: 200rpx;
	// 	.show{
	// 		// background-color: rgb(28,143,249);
	// 		width: 90%;
	// 		height: 100%;
			
	// 		box-sizing: border-box;
	// 		border-radius: 20rpx;
	// 	}
	// 	// padding: 0rpx 30rpx;
	// 	padding: 10rpx 30rpx;
	// }
	
	
	// .notice{
	// 	width: 750rpx;
	// 	padding: 30rpx 0;
	// 	swiper{
	// 		width: 750rpx;
	// 		height: 340rpx;
	// 		&-item{
	// 			width: 100%;
	// 			height: 100%;
	// 			image{
	// 				width: 100%;
	// 				height: 100%;
	// 				padding: 0rpx 30rpx;
	// 				box-sizing: border-box;
	// 				border-radius: 20rpx;
	// 			}
	// 		}
	// 	}
	// }
}
</style>
