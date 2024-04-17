<template>
	<view class="fill" :style="{backGround: color}">
		
	</view>
</template>

<script setup>
	defineProps({
		color:{
			type: String,
			default(){
				return "#F5F5F5"
			}
		}
	})
</script>

<style lang="scss" scoped>
	.fill{
		height: 10%;
	}
</style>