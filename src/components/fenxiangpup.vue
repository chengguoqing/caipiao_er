<!--名片分享弹窗-->
<template>
    <div >


              <section class="sd_jh_deer" :class="is_sd_fn?'show':''">
            <section class="sdf_jh_dff cen">
    <img   v-lazy="url_img" class="w100">
        <div class="sdf_jh_deer">
            <p class="cf pt20 fz12">
长按图片分享好友</p>
        <span class="close_sd yj" @click="$emit('ycsd_d')">
        <i class="dx icon-close1"></i>
    </span>
    </div>
        </section>
        </section>




    </div>
        </template>
<script>
    export default {
              props: {
            is_sd_fn: "",
                  goods_id:""
        },
        data() {
            return {

                url_img:"https://api.cangniaowl.com/v1/product/goodsShareImage?goods_id="
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.url_img+=this.goods_id+"&token="+this.token
        },
    }

</script>
<style>
.sdf_jh_dff img[lazy=loading] {
    width: 100px !important;
    height: 100px;
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto
}
</style>
<style scoped>
    .pup_deert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000
    }

    .sdf_jh_Dertt {
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 290px;
        height: 500px;
        margin: auto;
        background: url(https://mall.cangniaowl.com/static_liebian/img/tancbei.png);
        background-size: 100% 100%;
        z-index: 100001
    }

    .dsf_jjh_der {
        text-align: center;
        margin-top: 67px;
    }

    .dsf_jjh_der img {
        width: 150px;
        height: 150px;
        vertical-align: bottom
    }
    .zuij_der{
        width: 50px;
        height: 21px;
        background-position: -132px -543px;
    }

    .sdf_kjh_dert{
        position: relative;
        top: 3px;
    }
    .sdjhg_de_er{
        border-top: 1px dashed #E87373;
    }




    .sd_jh_deer{
        background: rgba(0,0,0,0.5);
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: none;

        z-index: 10000
    }
    .sdf_jh_dff{
        width: 290px;
       height: 500px;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 50px;
        margin: auto;
    }
    .sdf_jh_dff img{
        height: 100%;
    }

    .sdf_jh_deer{
        position: absolute;
        left: 0px;
        bottom: -60px;
        width: 100%;
        text-align: center;
    }
    .close_sd{
        border: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: relative;
        top: 10px;

    }
    .feng_deer{
        position: absolute;
        right: 10px;
        top: 60px;
        z-index: 1000;
        line-height: 1.2
    }
    .feng_deer img{
        width: 25px;
        height: 25px;
    }

        @media screen and (max-width: 330px) {
          .sdf_jh_dff{
              width: 300px !important;
              height: 426px !important;
               bottom: 70px;
          }
    }

        @media screen and (max-width: 380px) {
          .sdf_jh_dff{
              width: 330px;
              height: 486px;
               bottom: 70px;
          }
    }

       @media screen and (min-width: 380px) {
          .sdf_jh_dff{
              width: 360px;
              height: 552px;
               bottom: 70px;
          }
    }

</style>
