// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import axios from '@/axios/index.js'
// import './styles/common.scss'
// import {
//     url
// } from '@/config'
// Vue.prototype.url = url;
//注册自定义组件
// import './components/'
import '@/mock/'
//导入主题文件
import '@/theme/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios;
window.axios = axios;

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})


