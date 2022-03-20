import Cookies from 'js-cookie'

const TokenKey = 'UI-Token'
// const USER_NAME_KEY = 'user_name_key'

// 本地token相关操作
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token, {expires:7})
}

export function removeToken() {
    console.log("shanchu");
    return Cookies.remove(TokenKey)
}