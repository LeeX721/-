import { createApp } from 'vue'
// @ts-ignore
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloablComponent from './components/index'
// import '@/styles'
const app = createApp(App)
app.use(gloablComponent)
app.use(ElementPlus, {
  locale: zhCn,
})

// console.log(import.meta.env);
// import axios from 'axios';
// axios({
//     url: '/api/user/login',
//     method: "post",
//     data: {
//         username: 'admin',
//         password: '111111'
//     }
// })

app.mount('#app')
