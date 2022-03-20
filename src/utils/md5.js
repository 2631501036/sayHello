import Crypto from 'crypto-js'

export function md5(value) {
    return Crypto.MD5(value).toString()
}