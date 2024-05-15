<template>
	<layout :lay="myLay"></layout>
	<view class="detailAll"></view>
	<!-- <iframe :src="iframeUrl" width="100%" height="600"></iframe> -->
	<web-view src="../myForm/processForm.html"></web-view>
</template>

<script setup>
import { getOneTemplate } from '../../api/process/process';
import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'
// 用于设定顶头信息
let myLay = ref({title: '详情页',mainColor:"#fff",btnColor:"#F5F5F5"})
// 正在操作的模板
let myTemplate = ref({})
let rule = ref([])
let option = ref({})
// 表单页面
let iframeUrl = ref('/pages/myForm/processForm.html')
const getOne = async(id)=>{
	let {data:{data}} = await getOneTemplate(id);
	myTemplate.value = data
	rule.value = JSON.parse(data.formProps)
	option.value = JSON.parse(data.formOptions)
	console.log(JSON.parse(data.formProps))
	console.log(JSON.parse(data.formOptions))
}
// 拿操作模板
onLoad((data)=>{
	getOne(data.tmpId)
})
</script>

<style lang="scss" scoped>

</style>
