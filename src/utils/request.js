import axios from 'axios'

const service = axios.create({
    baseURL : 'http://94188.xyz:8000',  //process.env.VUE_APP_BASE_API      'http://127.0.0.1:8000'
    timeout : 5000
})

export default service