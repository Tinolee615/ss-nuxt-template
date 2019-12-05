<template>
    <div>博客{{ blogId }}</div>
</template>

<script>
export default {
    layout: 'index',
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    data() {
        return {
            blogId: ''
        }
    },
    created() {
        console.log(this.$route.params)
        this.blogId = this.$route.params.id
    }
}
</script>

<style lang="scss"></style>
