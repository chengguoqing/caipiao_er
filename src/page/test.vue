<template>
    <div >
         <a @click="hf('test_er')">dsfdsfs</a>
    </div>
        </template>
<script>
    import base from '../js/base.js'

    export default {
        data() {
            return {

            }
        },

        components: {

        },
        methods: {

        },
        mounted() {
            console.log(this.$store.state.show);
        },
    }

</script>
<style scoped>


</style>
