// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import VueAMap from 'vue-amap';
import VueWechatTitle from 'vue-wechat-title'
import 'babel-polyfill'
Vue.use(VueWechatTitle)
import $ from 'jquery'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/normal.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(VueAMap);
//初始化vue-amap
VueAMap.initAMapApiLoader({
  key: '2a9d7e2ecdb95867d68e8210a5d9d24b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
// Vue.use(VueAMap);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
