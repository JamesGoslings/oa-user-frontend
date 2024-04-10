<template>
	<web-view :src="myUrl"></web-view>
</template>

<script setup>
let myUrl = ref(uni.getStorageSync('requiredUrl'));
</script>

<style lang="scss" scoped>

</style>
