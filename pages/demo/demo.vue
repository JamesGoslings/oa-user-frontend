<template>
	<view>
		demo界面
		<button @click="open">按钮</button>
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">底部弹出 Popup 自定义圆角</uni-popup>
	</view>
</template>

<script>
export default {
	methods:{
		open(){
			this.$refs.popup.open('top')
		}
	}
}

</script>

<style lang="scss" scoped>

</style>
