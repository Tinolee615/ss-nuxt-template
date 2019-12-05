import request from '@/plugins/request'

// 获取验证码
export const login = (data) => {
    return request({
        url: '',
        method: 'post',
        data
    })
}
