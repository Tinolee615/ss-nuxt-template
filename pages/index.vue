<template>
    <div class="home">
        <div>
            首页
        </div>
    </div>
</template>

<script>
import { queryUserInfo } from '@/api/user'
export default {
    layout: 'index',
    computed: {},
    async asyncData(context) {
        const { data } = await queryUserInfo()
        return { data }
    },
    head() {
        return {
            title: '首页',
            meta: [{ hid: 'description', name: 'description', content: '首页描述' }]
        }
    },
    created() {
        console.log('pagePath:', this.$store.state.fullPath)

        console.log(this.data)
    },
    methods: {}
}
</script>

<style lang="scss"></style>
