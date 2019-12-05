<template>
    <div>用户{{ id }}</div>
</template>

<script>
export default {
    layout: 'index',
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    data() {
        return {
            id: ''
        }
    },
    created() {
        console.log(this.$route.params.id)
        this.id = this.$route.params.id
    }
}
</script>

<style lang="scss"></style>
