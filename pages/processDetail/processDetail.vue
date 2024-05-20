<template>
	<layout :lay="myLay"></layout>
	<view class="detailAll"></view>
	<el-form :model="form">
		<el-form-item label="标题">
			<el-input v-model="myProcess.title" autocomplete="off" />
		</el-form-item>
		<el-form-item label="审批描述">
			<el-input v-model="myProcess.description" autocomplete="off" />
		</el-form-item>
	</el-form>
	<iframe :src="iframeUrl" name="child" style="myFrame" width="100%" height="600"></iframe>
	<!-- <web-view src="../myForm/processForm.html"></web-view> -->
</template>

<script setup>
import { getOneTemplate,addProcess } from '../../api/process/process';
// 用于设定顶头信息
let myLay = ref({title: '详情页',mainColor:"#fff",btnColor:"#F5F5F5"})

// 存正在操作的审批流程
let myProcess = ref({})

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
	// 拿表单数据
	let myFormValue = ''
	myFormValue = uni.getStorageSync('formValues')
	iframeUrl.value = `/pages/myForm/processForm.html?rule=${data.formProps}&option=${data.formOptions}&formValue=${myFormValue}`
	myProcess.value.processTemplateId = data.id
	myProcess.value.processTypeId = data.processTypeId
}
// 拿操作模板
onLoad((data)=>{
	getOne(data.tmpId)
})

const iframe = ref(null);
const receivedData = ref(null);

// 监听message事件,接收html发来的用户输入数据
const handleMessage = (event) => {
	myProcess.value.formValues = JSON.stringify(event.data.msg)
	let userInfo = uni.getStorageSync('userMsg')
	myProcess.value.userId = userInfo.userId
	console.log('====================>>>>')
	console.log(myProcess.value);
	console.log('====================>>>>')
	addMyProcess()
};
const addMyProcess = async()=>{
	let {data} = await addProcess(myProcess.value)
}
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
