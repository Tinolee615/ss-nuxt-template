# nuxt.js SSR框架封装模板

> nuxt.js SSR框架封装模板，封装了axios请求拦截、api接口模块、路由拦截、store状态管理，以及eslint和prettier开发的相关配置

## axios请求拦截（plugins/request.js）
```
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

```

## api接口模块(api/*)
```
import request from '@/plugins/request'

// 用户信息
export const queryUserInfo = (data) => {
    return request({
        url: '',
        method: 'get',
        params: data
    })
}

```

## 路由拦截(plugins/permission.js) 
- nuxt.config.js配置
```
plugins: ['@/plugins/permission'],
```

```
export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        //记录上一次路由
        app.store.commit('CHANGE_FULLPATH', from.path)
        next()
    })
}

```
## store状态管理(store/*)
```
export const state = () => ({
    fullPath: '/'
})

export const mutations = {
    CHANGE_FULLPATH(state, data) {
        state.fullPath = data
    }
}

```


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
