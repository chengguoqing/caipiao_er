<template>
  <div id="app">

 <router-view ></router-view>

  </div>
</template>

<script>
    export default {
        name: 'app',
        components: {

        },
        computed: {

        },
        methods: {


        },

        mounted() {
            var sd_us = window.location.href
            let getwxsign = {},
                th = this
            getwxsign.url = sd_us
            this.post('home/getwxsign', getwxsign, function(data) {
                th.wx_config(data)

            })



        }
    }

</script>
<style scoped>
    .png_sos {
        width: 157px;
    }

    .huis_sdre {
        height: 40px;
    }

    .sos_gn {
        width: 250px;
    }

</style>
