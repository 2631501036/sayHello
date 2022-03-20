import service from '@/utils/request'

export const register = (data) => {
    return service({
        url: '/api/auth/register',
        method: 'post',
        data
    })
}

export const login = (data) => {
    return service({
        url: '/api/auth/login',
        method: 'post',
        data
    })
}