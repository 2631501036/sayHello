import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import { getToken } from '../utils/auth'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/dashboard/video'
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            // 需要登录才能进入
            login: true
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('../views/Dashboard.vue'),
                meta: {
                    // 需要登录才能进入
                    login: true
                },
                children: [
                    {
                        path: '/dashboard/video',
                        name: 'Video',
                        component: () => import('../views/Video.vue'),
                        meta: {
                            // 需要登录才能进入
                            login: true
                        },
                    },
                    {
                        path: '/dashboard/image',
                        name: 'Image',
                        component: () => import('../views/Image.vue'),
                        meta: {
                            // 需要登录才能进入
                            login: true
                        },
                    },
                    {
                        path: '/dashboard/music',
                        name: 'Music',
                        component: () => import('../views/Music.vue'),
                        meta: {
                            // 需要登录才能进入
                            login: true
                        },
                    },
                ]
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
                meta: {
                    // 需要登录才能进入
                    login: true
                },
                children: [
                    {
                        path: '/about/friends',
                        name: 'Image',
                        component: () => import('../views/Friends.vue'),
                        meta: {
                            // 需要登录才能进入
                            login: true
                        },
                    },
                    {
                        path: '/about/world',
                        name: 'World',
                        component: () => import('../views/World.vue'),
                        meta: {
                            // 需要登录才能进入
                            login: true
                        },
                    },
                ]
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue'),
        meta: {
            login: true
        }

    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/Test.vue'),
        meta: {
            login: true
        }

    },
    {
        path: '/cc',
        name: 'Cc',
        component: () => import('../views/Cc.vue'),
        meta: {
            login: true
        }

    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            // 不需要登录能进入
            login: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            // 不需要登录能进入
            login: false
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (!getToken() && to.meta.login) {
        console.log("没有获取到token");
        next('/login')
    } else {
        next()
    }
})

export default router
