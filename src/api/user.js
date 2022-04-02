import {service, inlogin} from '@/utils/request'

// 注册接口
export const register = (data) => {
    return inlogin({
        url: '/api/auth/register',
        method: 'post',
        data
    })
}

// 登录接口
export const login = (data) => {
    return inlogin({
        url: '/api/auth/login',
        method: 'post',
        data
    })
}

// 上传头像接口
export const upLoadAvator = (data) => {
    return service({
        url: '/api/auth/uploadavator',
        method: 'post',
        data
        
    })
}

// app挂在后get请求用户信息
export const onLine = () => {
    return service({
        url: '/api/auth/online',
        method: 'get'
    })
}