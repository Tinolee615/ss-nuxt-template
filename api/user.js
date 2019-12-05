import request from '@/plugins/request'

// 用户信息
export const queryUserInfo = (data) => {
    return request({
        url: '',
        method: 'get',
        params: data
    })
}
