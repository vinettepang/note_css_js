import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import App from '@/App.vue'
import Home from '@/pages/Home.vue'
import Collect from '@/pages/Collect.vue'

Vue.use(Router)

// const router = new VueRouter({
//     mode: 'history',
//     //base: __dirname,
//     routes: [
//         { path: '/', name: 'home', component: App },
//         { path: '/collect', name: 'collect', component: Collect }
//     ]
// })

export default new Router({
    routes: [
        { path: '/',  component: Home },
        { path: '/collect',  component: Collect }
    ],
    mode: "history"
})