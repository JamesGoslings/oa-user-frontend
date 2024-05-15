<template>
	<layout :lay="myLay"></layout>
	<view class="detailAll"></view>
	<iframe :src="iframeUrl" name="child" style="myFrame" width="100%" height="600"></iframe>
	<!-- <web-view src="../myForm/processForm.html"></web-view> -->
</template>

<script setup>
import { getOneTemplate } from '../../api/process/process';
// 用于设定顶头信息
let myLay = ref({title: '详情页',mainColor:"#fff",btnColor:"#F5F5F5"})
// 正在操作的模板
let myTemplate = ref({})
let rule = ref([])
let option = ref({})

// let child = ref(null)

// 表单页面
let iframeUrl = ref(`/pages/myForm/processForm.html`)
const getOne = async(id)=>{
	let {data:{data}} = await getOneTemplate(id);
	myTemplate.value = data
	iframeUrl.value = `/pages/myForm/processForm.html?rule=${data.formProps}&option=${data.formOptions}`
}
// 拿操作模板
onLoad((data)=>{
	getOne(data.tmpId)
})

const iframe = ref(null);  
const receivedData = ref(null);

// 监听message事件,接收html发来的用户输入数据
const handleMessage = (event) => {
	console.log(event.data.msg);
};

onShow(()=>{
})
// 在组件挂载后添加事件监听器  
onMounted(() => {
// 监听从子页面拿来的数据
	window.addEventListener('message', handleMessage);
		// 组件卸载时移除事件监听器，防止内存泄漏
		return () => {
			window.removeEventListener('message', handleMessage);  
		};
	});

</script>

<style lang="scss" scoped>
iframe{
	border: 0;
	left: -10vw;
}
</style>
