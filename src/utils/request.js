import axios from 'axios'
import { getToken, removeToken } from './auth.js'
import router from '../router/index'
const token = getToken()
const account = localStorage.account



// 需要拦截的请求实例
const service = axios.create({
    baseURL: 'http://94188.xyz:8000',  //process.env.VUE_APP_BASE_API   'http://94188.xyz:8000'   
    timeout: 5000
})


// 请求拦截，加上请求头
service.interceptors.request.use(
    function (config) {
        // console.log(config);
        if (token && account) {
            config.headers.tokenstring = `${token}`
            config.headers.account = `${account}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    })

    // 响应拦截，如果token+account验证失败就清除token路由到登录页
    service.interceptors.response.use(
        
        function (res) {
            // console.log(router);
            if (res.data.code == 1000) {
                removeToken();
                router.push({path:'/login'}, ()=>{})
                
                return
            }
            return res
        },
        err => {
            return Promise.reject(err)
        }
    )


// 登录请求实例
const inlogin = axios.create({
    baseURL: 'http://94188.xyz:8000',
    timeout: 5000
})

// 导出请求实例
export {service, inlogin}