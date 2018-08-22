<template>
    <div class="pm80" v-cloak>
        <section class="user_top_eer pd pt10 pm10">
            <img :src="sd.header_image" class="yj user_icon_er fl mt5">
            <section class="ov pl20 pt5">

                    <p class="cf fz14 pr pt10">
                       <span class="fz16 ">{{sd.truename}}</span>
                        <span class="fz12" v-if="is_ber">(ID:{{sd.user_id}})</span>
                        <img src="https://mall.cangniaowl.com/static_liebian/img/bianji.png" class="bianjki_eerf cz" @click="is_Ddffe=true">
                    </p>
                <p class="cf fz14">
                    {{sd.mobile_phone}}
                </p>

            </section>
            <p class="qc fz14 cf pt15 cen">
    当前红包（元）
            </p>
            <p class="fz34 cen cf  mt20">
             		{{mywallet.total_commissions||'0'|baoliu}}
            </p>

        </section>

        <section class="bgff">
            <p class="pt15 pm15 cen">
                <button class="sheqti_xr" @click="hf('tixian?goods_id='+goods_id)">申请提现</button>
            </p>

            <section class="sdsf_jh_dert" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" v-if="sd_crty">
                <div class="mui-row pd btm pt10 pm10" v-for="sd in user_e" >
                    <section class="mui-col-xs-6">
                        <img :src="sd.header_image" class="yj dsf_h_deerr fl">
                        <section class="ov pl10 dian z6 fz14 dersf_jh_der">
    {{sd.user_name}}
                        </section>
                    </section>
                        <section class="mui-col-xs-3 cen z6 fz14 dersf_jh_der">
    购买礼包
                    </section>
                  <section class="mui-col-xs-3 tr sdf_jher_der">
                        <p class="fz16 ls">+{{sd.commission_price}}</p>
                      <p class="fz12 z9" v-html="time_c(sd.add_time)"></p>
                    </section>
                </div>



            </section>


              <div class="sdsf_jh_dert cen mt40" v-else>
                    <i class="f_i kojng_sddrt"></i>
                    <p class="cen mt10">您还没有获得过红包哦！</p>
                </div>




        </section>




                <section class="mt40 cen">
                <i class="f_i logo_sdert"></i>
            <p class="cen fz12 z3 mt10 ">
    本系统由苍鸟网络提供技术支持
            </p>

        </section>

        <xiu_gai v-if="is_Ddffe" @ssd_Sdr="xigai_eeret"  :user_name="sd.user_name" :name_df="sd.truename" :mobile_phone="sd.mobile_phone" :friend_header_image="sd.header_image" :goods_id="goods_id"></xiu_gai>
                <dibu  @ssd_Sdr_x="is_Ddffe=true" :is_sye="'true'" :kjh_s="3" :tel_s="sd.company_tel"></dibu>
    </div>
        </template>
<script>
    import dibu from '../components/dibu'
    import xiu_gai from "../components/xiu_gai.vue"
    export default {
        data() {
            return {
                is_ber: true,
                name_df: "",
                sd: "",
                is_Ddffe: "",
                current_page: 1,
                user_e: [],
                is_down: true,
                loading: false, //是否下拉 true禁止
                sd_deerr: 1,
                goods_id: "",
                mywallet: "",
                sd_crty: true
            }
        },
        components: {
            dibu,
            xiu_gai
        },
        methods: {
            bianid() {
                this.is_ber = false
                setTimeout(a => {
                    this.$refs.input_eer.focus()
                }, 100);
            },
            yikai_e() {
                this.is_ber = true
                let editname = {}
                editname.truename = this.name_df
                this.post("liebian/editname", editname, function() {

                })
            },
            gethong(call_bacl) {
                let user = {},
                    th = this
                user.goods_id = this.$route.query.goods_id
                user.current_page = this.current_page
                this.post("liebian/user", user, function(data) {
                    data.data.map(a => {
                        th.user_e.push(a)
                    })

                    try {
                        call_bacl(data.data)
                    } catch (e) {

                    }

                })
            },
            loadMore() {
                let th = this
                if (th.is_down) {
                    th.current_page++

                        th.gethong(function(data) { //下拉
                            if (data.length > 0) {
                                th.is_down = true
                                th.loading = false;
                            } else {
                                th.is_down = false
                                th.loading = true;
                            }

                        })
                }

            },
            editname() {
                let editname = {}
                editname.truename = this.name_df
                this.post("liebian/editname", editname, function() {

                })
            },
            xigai_eeret() {
                let home = {},
                    th = this
                home.goods_id = this.goods_id
                this.post("liebian/home", home, function(data) {
                    th.sd = data
                          localStorage.user_info = JSON.stringify(data)
                    th.name_df = data.user_name
                    th.is_Ddffe = false
                })



            }

        },
        mounted() {
            let home = {},
                th = this
            home.goods_id = this.$route.query.goods_id
            this.goods_id = this.$route.query.goods_id
            try {
                th.sd = JSON.parse(localStorage.user_info)
                th.name_df = th.sd.user_name
            } catch (e) {

            }

            if (!th.sd) {
                this.post("liebian/home", home, function(data) {
                    th.sd = data
                    th.name_df = data.user_name
                })
            }
            console.log(th.sd);

            this.post("user/mywallet", {}, function(data) {
                th.mywallet = data
            })



            this.gethong(function(dads) {
                if (dads.length <= 0) {
                    th.sd_crty = false
                }
            })
            this.Title("我的红包")
        },
    }

</script>
<style scoped>
    [v-cloak] {
        display: none;
    }

    .user_top_eer {
        height: 11rem;
        min-height: 170px;
        background: url("https://mall.cangniaowl.com/static_liebian/img/bg_img_er.jpg");

    }

    .user_icon_er {
        width: 65px;
        height: 65px;
    }

    .shazg_deer {
        width: 60px !important;
        margin: 0px !important;
        background: transparent;
        text-indent: 0px;
        padding: 0px;
        font-size: 16px;
        border: 0px;
    }

    .bianjki_eerf {
        width: 18px;
        position: relative;
        bottom: 2px;
    }

    .sheqti_xr {
        width: 250px;
        background: #B2070F;
        color: #fff;
        font-size: 15px;
        border-radius: 20px;
    }

    .dsf_h_deerr {
        width: 35px;
        height: 35px;
    }

    .dersf_jh_der {
        line-height: 35px;
    }

    .sdf_jher_der {
        line-height: 1.2
    }

    .sdsf_jh_dert {
        min-height: 280px
    }

    .kojng_sddrt {
        width: 115px;
        height: 125px;
        background-position: -16px -432px
    }

</style>
