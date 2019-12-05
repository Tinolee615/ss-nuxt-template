<template>
    <div>
        用户首页
        <ul>
            <li>
                <el-button type="success" plain><nuxt-link to="/user/1">用户1</nuxt-link></el-button>
            </li>
            <li>
                <el-button type="success" plain><nuxt-link to="/user/2">用户2</nuxt-link></el-button>
            </li>
            <li>
                <el-button type="success" plain><nuxt-link to="/user/3">用户3</nuxt-link></el-button>
            </li>
            <li>
                <el-button type="success" plain><nuxt-link to="/user/4">用户4</nuxt-link></el-button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    layout: 'index',
    head() {
        return {
            title: '用户首页',
            meta: [{ hid: 'description', name: 'description', content: '用户首页描述' }]
        }
    }
}
</script>

<style lang="scss"></style>
