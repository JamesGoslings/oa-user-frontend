<template>
	<view class="teleSty globalMod">
		<myHeader :head="teleHead"></myHeader>
		<button @click="OnClick()">删除</button>
	</view>
</template>

<script setup>
let teleHead = ref({title:"通讯录",fun:"0"})

function OnClick(){
	uni.showModal({
		title:"是否删除???",
		content:"删除后无法恢复",
		success: res => {
			console.log(res);
			if(res.confirm) uni.showToast({
				title:"删除成功~"
			})
		},
		fail: res => {
			console.log(res)
		}
	})
}
</script>

<style lang="scss" scoped>
@import url(@/common/style/globalStyle.css);
.teleSty{
	
}
</style>
