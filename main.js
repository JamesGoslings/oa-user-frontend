import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import formCreate from '@form-create/element-ui'
// import FcDesigner from '@form-create/designer'


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
app.use(ElementPlus)

app.use(formCreate)
app.use(FcDesigner)
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif