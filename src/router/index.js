import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import in_regard from '@/page/in_regard'
import my_packets from '@/page/my_packets'
import tixian from '@/page/tixian'
import share_fx from '@/page/share_fx'
import test from '@/page/test'
import test_er from '@/page/test_er'
import photo_viewer from '@/page/photo_viewer'
import assessment_details from '@/page/assessment_details'
import pingjia from '@/page/pingjia'
Vue.use(Router)
export default new Router({
    //   mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
    },
        {
            path: '/in_regard',
            name: 'in_regard',
            component: in_regard
    },
        {
            path: '/my_packets',
            name: 'my_packets',
            component: my_packets
    },
        {
            path: '/tixian',
            name: 'tixian',
            component: tixian
    },
        {
            path: '/share_fx',
            name: 'share_fx',
            component: share_fx
    },
        {
            path: '/test',
            name: 'test',
            component: test
    },
        {
            path: '/test_er',
            name: 'test_er',
            component: test_er
    },
        {
            path: '/photo_viewer',
            name: 'photo_viewer',
            component: photo_viewer
    },
        {
            path: '/assessment_details',
            name: 'assessment_details',
            component: assessment_details
    },
        {
            path: '/pingjia',
            name: 'pingjia',
            component: pingjia
    }

  ]
})
