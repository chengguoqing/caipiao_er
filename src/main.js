// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import './css/iconfont.css'
import './css/mui.min.css'
import './css/base.css'
import './css/style.css'
import router from './router'
import public_m from './public_m'
import Navigation from 'vue-navigation'
import MintUI from 'mint-ui'
import VueAMap from 'vue-amap';
import VueResource from 'vue-resource';
import store from './store/test'
import scroll from 'vue-seamless-scroll'
Vue.use(MintUI)
Vue.use(public_m)
Vue.use(Navigation, {
    router
})



Vue.use(VueResource)
Vue.use(scroll)

//or you can set componentName default componentName is vue-seamless-scroll
Vue.use(scroll, {
    componentName: 'scroll-seamless'
})
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: '76e7ebd74ce262d74fa78b2227fa5047',
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation'],
    v: '1.4.4'
});




Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
