import axios from 'axios'

const whiteApi = []
// 创建axios实例
const service = axios.create({
    crossDomain: true,
    // withCredentials:true,
    // baseURL: process.env.BASE_API, // api 的 base_url
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    timeout: 5 * 1000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    (config) => {
        const configUrl = config.url.replace(/\?(.)*/, '')
        if (!whiteApi.includes(configUrl)) {
        }

        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
