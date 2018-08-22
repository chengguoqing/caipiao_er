<!--支付页-->
<template>
    <div >
        <section class="paser_eerr" @click="$emit('ssd_Sdr')"></section>

        <section class="ds_jh_dert">
             <i class="dx icon-close  close_der" @click="$emit('ssd_Sdr')"></i>
                <section class="df_jh_rtde">
                    <p class="cen">
                        <img :src="friend_header_image" class="yj user_dert">
                    </p>
                    <p class="cen red">
                        {{friend_name}}
                    </p>
                </section>
            <p class="fz20 cf cen mt20">
            恭喜您！礼包已打开！
            </p>
            <p class="fz12 cf cen mt20">
                礼包特惠价
            </p>
            <p class="cen cf mt15 fz16">
            <span class="fz40">{{jiage}}</span>
                <span>元</span>
            </p>



            <p class="cen sdf_jh_Derrt">
            <a class="mui-btn querenh_eder"  @click="sdf_jh_d">立即支付</a>
            </p>
            <p class="cen julizhifu mt20"  v-if="is_ssd">
            <img src="https://mall.cangniaowl.com/static_liebian/img/julizhifu.png">
            </p>

                <section class="mt10 cen cf fz12" v-if="is_ssd">
    <span class="yj4 cf biank_df">{{is_drte_er.h}}</span>
                时
                 <span class="yj4 cf biank_df">{{is_drte_er.m}}</span>
               分
                 <span class="yj4 cf biank_df">{{is_drte_er.m_b}}</span>
                秒

                    </section>



        </section>

    </div>
        </template>
<script>
    export default {
        props: {
            is_drte_er: "",
            is_ssd: "",
            friend_header_image: "",
            friend_name: "",
            jiage: "",
            goods_id: "",
            shop_id:""

        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            sdf_jh_d() {
                let checkout = {},
                    th = this
                checkout.goods_id = this.goods_id
                checkout.goods_number = 1
                checkout.step = 2
                checkout.total_money=th.jiage
                this.post("shopping/checkout", checkout, function(data) {
                    let url_de = `https://api.cangniaowl.com/payment_lianbian.html?token=${th.token}&order_id=${data.order_id}&goods_id=${th.goods_id}&shop_id=${th.shop_id}`
                    th.$emit('ssd_Sdr')
                    window.location.href = url_de
                })
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .paser_eerr {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10001;
        top: 0px;
        left: 0px;
    }

    .ds_jh_dert {
        width: 304px;
        height: 304px;
        background: #E53E3E;
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
        z-index: 10002;
        border-radius: 8px;

    }

    .df_jh_rtde {
        height: 89px;
        background: url(https://mall.cangniaowl.com/static_liebian/img/wen_topwe.png);
        background-size: 100% auto;
    }

    .user_dert {
        width: 65px;
        height: 65px;
        border: 2px solid #fff;
        margin-top: -30px;
    }

    .sd_jh_deret {
        width: 152px;
        height: 27px;
        margin: 0px;
        border: 0px;
        text-indent: 0px;
        font-size: 14px;
    }

    .dsf_kj_der {
        line-height: 27px;
    }

    .sdf_jkh_deer {
        transform: scale(0.8);
        position: absolute;
        bottom: 5px;
        width: 100%;
    }

    .querenh_eder {
        background: linear-gradient(to right, #EAD7B9, #CDAF80);
        border: 0px;
        color: #b72724;
        font-size: 16px;
        padding: 8px 15px;
        border-radius: 8px;
    }

    .sdf_jh_Derrt {
        position: absolute;
        bottom: -60px;
        width: 100%;
    }

    .julizhifu img {
        width: 192px
    }


    .biank_df {
        background: linear-gradient(to top, #D8B184, #FEFDFC);
        padding: 4px 5px;
        font-size: 12px;
        color: #b60412 !important
    }

</style>
