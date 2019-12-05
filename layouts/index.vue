<template>
    <div class="container">
        <div class="tab">
            <el-button type="primary"><nuxt-link to="/">首页</nuxt-link></el-button>
            <el-button type="primary"><nuxt-link to="/blog/1">我的博客</nuxt-link></el-button>
            <el-button type="primary"><nuxt-link to="/user">用户</nuxt-link></el-button>
        </div>
        <nuxt />
    </div>
</template>

<script>
export default {
    components: {},
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    }
}
</script>

<style lang="scss">
.container {
    margin: 100px auto 0;
    min-height: 100vh;
    text-align: center;
    img {
        width: 100px;
        height: 100px;
    }
    .tab {
        a {
            color: #ffffff;
        }
    }
}
</style>
