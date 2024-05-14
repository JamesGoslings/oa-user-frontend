<template>
	<layout :lay="myLay"></layout>
	<view class="detailAll"></view>
</template>

<script setup>
import { getOneTemplate } from '../../api/process/process';
// 用于设定顶头信息
let myLay = ref({title: '详情页',mainColor:"#fff",btnColor:"#F5F5F5"})
// 正在操作的模板
let myTemplate = ref({})
const getOne = async(id)=>{
	let {data:{data}} = await getOneTemplate(id);
	myTemplate.value = data
	console.log(data)
}
// 拿操作模板
onLoad((data)=>{
	getOne(data.tmpId)
})
</script>

<style lang="scss" scoped>

</style>
