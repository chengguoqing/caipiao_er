<template>
<div v-if="is_sddf">
    <div class="ssd_jh_dfert" :style="{'background-image': 'url('+sd.goods_thumb+')'}">
         <section class="daojishie">
            <section class="daojishi_th">
   距离本活动结束还有：

                <span class="yj4 cf biank_df">{{is_drte.d}}</span>
                天
                 <span class="yj4 cf biank_df">{{is_drte.h}}</span>
                时
                 <span class="yj4 cf biank_df">{{is_drte.m}}</span>
                分
            </section>
        </section>

    <section class="jindu_eer">
        <span class="gd" :style="{width:sd.progress_bar+'%'}">
            <i class="f_i dianji_der"></i>
        </span>
    </section>

        <section class="hgf_df_drtd">
            <section class="d_kj_derrts ">
                <section class="sd_lih_yer pr ">
                <i class="f_i tie_derttc">活动礼包</i>
                <ul class="df_kj_dert">
                    <li class="mui-row fz14 cf pr mt10" v-for="sf in sd.gift_bag_intro">
                        <i class="f_i song_deet"></i>
                        <section class="mui-col-xs-9 pl60 dian">
                            {{sf.text}}
                        </section>
                        <section class="mui-col-xs-3 fz12 blm cen" v-if="sf.price">
                            价值<span class="fz16">{{sf.price}}</span>元
                        </section>
                    </li>
                </ul>
            </section>
            </section>
        </section>


               <section class="hgf_df_drtd">
            <section class="d_kj_derrts ">
                <section class="sd_lih_yer pr ab">
                <i class="f_i tie_derttc">呼朋唤友拆礼包</i>
                <section class="hao_ddf_er">
                    <img :src="sd.friend_header_image" class="yj user_icions">
                    <p class="fz12">
                        {{sd.friend_name}}
                    </p>

                    <p class="mt20">
                        <i class="f_w libao_ert" :class="'as'+sd.need_people"></i>
                    </p>
                    <section class="mt20 red fz12" v-if="sd.zige==1&&sd.gift_bag_limit_time">
    <span class="yj4 cf biank_df">{{is_drte_er.h}}</span>
                时
                 <span class="yj4 cf biank_df">{{is_drte_er.m}}</span>
               分
                 <span class="yj4 cf biank_df">{{is_drte_er.m_b}}</span>
                秒
         <span class="yj4 cf biank_df">{{is_drte_er.h_m}}</span>
                毫秒
                    </section>


                       <button class="sd_jh_deert ab" @click="is_shareid=true">帮TA拆礼包</button>
                     <button class="sd_jh_deert" @click="wyy_cyedr">我也要参与</button>
            </section>

    </section>
    </section>
    </section>



        <section class="sd_jh_deeerrt">
            <img src="https://mall.cangniaowl.com/static_liebian/img/kanjialcheng.png" class="w100">
        </section>



          <section class="hgf_df_drtd">
            <section class="d_kj_derrts ">
                <section class="sd_lih_yer pr ">
                <i class="f_i tie_derttc">活动规则</i>


                  <div class="sd_jh_derr red fz12 test-textarea">{{sd.activity_explain}}</div>

            </section>
    </section>

    </section>





                <section class="hgf_df_drtd">
            <section class="d_kj_derrts ">
                <section class=" pr ">
                <i class="f_i tie_derttc">活动进行时</i>
                   <section v-html="sd.goods_desc" class="sdf_jhj_ederr"></section>

    </section>
    </section>
    </section>

    <section class="hgf_df_drtd ab">
            <section class="yj4 dsf_khgh_map pd dian red fz12 pr" @click="fenxiang_map(position,sd.company_address)">
    <i class="f_i map_iconser"></i>活动地址：{{sd.company_address}}


    </section>



        <section class="pr">    <span class="dianjide yj4" @click="fenxiang_map(position,sd.company_address)">点击导航</span>


        <div class="amap-page-container">
      <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo" >
           <el-amap-marker vid="component-marker" :position="center"  :events="marker"></el-amap-marker>
      </el-amap>
    </div>




        </section>
    </section>

    <section class="hgf_df_drtd ab">

        <section class="pr sdf_jhhg_wer bgff">
            <i class="f_i sd_jh_deerteerr"></i>
            <section class="sd_jh_dert">
                    <p class="cen fz14 z9 pt20">
                    本活动由{{sd.shop_name}}同{{sd.company}}联合主办
                    </p>
                <section class="cen z9 mt10 pm10">
                    <section class="sd_jh_dedrrt cz mr10">
                        <img :src="sd.shop_logo" class="sd_xd_a">
                        <p  class="fz12 z9">{{sd.shop_name}}</p>
                    </section>

                    x

                          <section class="sd_jh_dedrrt cz ml10">
                        <img :src="sd.company_logo" class="sd_xd_a">
                        <p  class="fz12 z9">{{sd.company}}</p>
                    </section>
                </section>
            </section>
        </section>


    </section>





        <section class="mt20 cen">
                <i class="f_i logo_sdert"></i>
            <p class="cen fz12 cf mt10 pm40">
    本系统由苍鸟网络提供技术支持
            </p>

        </section>





<!--        头部的滚动条-->

                 <vue-seamless-scroll :data="sd.sys_user" :class-option="optionSingleHeightTime_er" class="seamless-warp as_kj_tope pd fz12 cf">
                      <section v-for="sd in sd.sys_user">
         <img :src="sd.header_image" class="yj use_iuud_er cz mr5">    {{sd.user_name}}获得了<span v-if="sd.money>0"> {{sd.money}}元红包</span><span v-else>礼包</span>

        </section>
    </vue-seamless-scroll>








         <audio id="df_dfrf_eer" controls="controls" style="width:1px;height:1px;" autoplay="autoplay">
  <source :src="sd.bgmusic" />
</audio>




<!--
        <section class="cen df_jh_deert" @click="is_sd_fn=true">
            <i class="f_i erwei_eer"></i>
            <p class="cf fz12">分享二维码</p>
        </section>
-->

        <img src="https://mall.cangniaowl.com/static_liebian/img/yinyue.png" class="yinyue " :class="is_bof?'ssdwwer':''" @click="zanting">

<!--        <dibu  @ssd_Sdr_x="yaoqing_s" :tel_s="sd.company_tel"></dibu>-->

           <dibu  @ssd_Sdr_x="is_Ddffe=true" :is_sye="'true'" :kjh_s="0" :tel_s="sd.company_tel" :shop_id="sd.shop_id" :goods_id_er="goods_id"></dibu>
    </div>
    <p class="dsf_jh_der"></p>



        <fenxiangpup :is_sd_fn="is_sd_fn" @ycsd_d="is_sd_fn=false" :goods_id="goods_id" v-if="goods_id"></fenxiangpup>

    <name_page v-if="is_Ddffe" @ssd_Sdr="is_Ddffe=false" :user_name="sd.user_name" :mobile_phone="sd.mobile_phone" :goods_id="goods_id" :friend_header_image="sd.header_image" ></name_page>
<!--    支付的弹窗-->
    <payment_page :is_drte_er="is_drte_er" :is_ssd="sd.gift_bag_limit_time" v-if="sd.need_people==0" :friend_header_image="sd.header_image" :friend_name="sd.user_name" :jiage="sd.shop_price" :goods_id="goods_id" ></payment_page>
<!--    帮ta拆红包-->
    <cailibao v-if="is_shareid" @ssd_Sdr="is_shareid=false"  @ckasd="ckasd" :user_name="sd.user_name" :friend_header_image="sd.friend_header_image" :friend_name="sd.friend_name" :goods_id="goods_id" :shareid="shareid" :already="sd.already"></cailibao>
    </div>
        </template>
<script>
    import dibu from '../components/dibu'
    import Aplayer from 'vue-aplayer'
    import fenxiangpup from "../components/fenxiangpup.vue"
    import name_page from "../components/name_page.vue"

    import payment_page from "../components/payment_page.vue"
    import cailibao from "../components/cailibao.vue"
    import base from "../js/base.js"
    export default {
        name: "km",
        data() {
            return {
                is_sddf: "",
                goods_id: "",
                sd: "",
                shareid: "",
                is_shareid: true,
                is_fx_s: false,
                position: {},
                sd_xef: "",
                sd_Der: 63,
                autoplay: false,
                muted: true,
                animate: false,
                sd_is_d: true,
                is_bof: true,
                items: [ //消息列表对应的数组
                    '', '', '', '', '', '', '', ''
                ],
                is_sd_fn: "",
                is_Ddffe: false,
                is_drte: { //头部的倒计时
                    d: 0,
                    h: 0,
                    m: 0,
                    m_b: 0
                },
                is_drte_er: { //礼包下面的倒计时
                    d: 0,
                    h: 0,
                    m: 0,
                    m_b: 0,
                    h_m: 0
                },
                dfer_eer: "",
                zoom: 17,
                center: [116.411743, 39.92401],
                marker: {

                    click() {

                    }
                }

            }
        },
        mixins: [base.test_s],
        computed: {
            optionSingleHeightTime() {
                return {
                    singleHeight: 64,
                    waitTime: 2000
                }
            },
            optionSingleHeightTime_er() {
                return {
                    singleHeight: 45,
                    waitTime: 2000
                }
            }
        },
        components: {

            dibu,
            Aplayer,
            fenxiangpup,
            name_page,
            payment_page,
            cailibao

        },
        methods: {
            wyy_cyedr(){//我也要参与
                window.location.href=`https://api.cangniaowl.com/shop/${this.sd.shop_id}.html#/?goods_id=${this.goods_id}`
            },

            yaoqing_s() {
                if (this.sd.zige == 0) {
                    this.is_Ddffe = true
                } else {
                    this.is_sd_fn = true
                }

            },
            getClickInfo(e) {





            },
            jinsu_derrt() {

            },
            ckasd() {
                this.is_shareid = false
                this.getdate(true)

            },
            bofang() {
                var a = document.getElementById("df_dfrf_eer");
                a.play() //播放
                this.is_bof = true
            },
            zanting() {
                var a = document.getElementById("df_dfrf_eer");
                if (this.is_bof) {
                    a.pause() //播放
                    this.is_bof = false
                } else {
                    a.play() //播放
                    this.is_bof = true
                }

            },
            GetRTime(daye, call_back, ty) {
                var EndTime = new Date(daye);
                var NowTime = new Date();
                var t = EndTime.getTime() - NowTime.getTime();
                var d = 0;
                var h = 0;
                var m = 0;
                var s = 0;
                if (t >= 0) {
                    d = Math.floor(t / 1000 / 60 / 60 / 24);
                    if (ty) {
                        h = Math.floor(t / 1000 / 60 / 60 % 24);
                    } else {
                        h = Math.floor(t / 1000 / 60 / 60);
                    }

                    m = Math.floor(t / 1000 / 60 % 60);
                    s = Math.floor(t / 1000 % 60);
                }
                d < 10 ? d = (0 + '' + d) : d
                h < 10 ? h = (0 + '' + h) : h
                m < 10 ? m = (0 + '' + m) : m
                s < 10 ? s = (0 + '' + s) : s
                call_back(d, h, m, s)
            },
            getdate(df_der) {
                var th = this
                let home = {}
                home.goods_id = this.goods_id
                if (this.$route.query.shareid) {
                    home.shareid = this.$route.query.shareid
                }

                this.post("liebian/home", home, function(data) {
                    localStorage.user_info = JSON.stringify(data)
                    th.sd = data

                        var fx_url = `https://api.cangniaowl.com/shop/${data.shop_id}.html?goods_id=${th.goods_id}&shareid=${data.user_id}`
                    th.fenxiang(data.activity_title, fx_url, data.goods_thumb, data.header_image)

                    let text = {
                        key: "1ca50beb27f893268297a00cdb0acdf3",
                        address: data.company_address,
                        city: '全国'
                    }
                    if (data.shareid == 0) {
                        th.hf(`?goods_id=${th.goods_id}&shareid=${data.shareid}`)
                    } else {
                        th.is_sddf = true
                    }

                    th.ge_tr('https://restapi.amap.com/v3/geocode/geo', text, function(data) {
                        th.center = data.geocodes[0].location.split(",")

                        th.position.lat = th.center[0]
                        th.position.lng = th.center[1]
                    })




                })
            }

        },
        mounted() {
            var th = this
            document.addEventListener('DOMContentLoaded', function() {
                th.bofang()
            });
            //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
            document.addEventListener('touchstart', function() {
                if (th.sd_is_d) {
                    th.sd_is_d = false
                    th.bofang()
                }
            });
            this.Title("首页")
            let goods_id = this.$route.query.goods_id
            if (!goods_id) {
                goods_id = window.location.search.split('goods_id=')[1].split("&")[0]

            }
            this.goods_id = goods_id
            this.getdate()








            th.wx_chus()

            this.shareid = this.$route.query.shareid
            if (!this.shareid) {
                try {
                    th.shareid = window.location.search.split('shareid=')[1].split("&")[0]
                } catch (e) {

                }

            }

            setInterval(function() {
                th.GetRTime(th.sd.activity_end_time_str, function(d, a, b, c) {
                    th.is_drte.d = d
                    th.is_drte.h = a
                    th.is_drte.m = b
                    th.is_drte.m_b = c
                }, true)
                if (th.sd.gift_bag_limit_time) {
                    th.GetRTime(th.sd.gift_bag_limit_time, function(d, a, b, c) {
                        th.is_drte_er.d = d
                        th.is_drte_er.h = a
                        th.is_drte_er.m = b
                        th.is_drte_er.m_b = c
                    })
                }
            }, 1000);

            setInterval(function() {
                th.is_drte_er.h_m = Math.floor(Math.random() * 60 + 1)
                if (th.is_drte_er.h_m < 10) {
                    th.is_drte_er.h_m = 0 + "" + th.is_drte_er.h_m
                }
            }, 100);
        },
        created() {

        },

    }

</script>
<style>
    .sdf_jhj_ederr img {
        width: 100%
    }

</style>
<style scoped>
    .amap-page-container {
        height: 150px;
        border: 0px !important
    }

    #df_dfrf_eer {
        display: none
    }

    .ssd_jh_dfert {

        background-repeat: no-repeat;
        min-height: 500px;
        background-size: 100% auto;
        padding-bottom: 50px;
        position: relative;
        z-index: 10
    }

    .dsf_jh_der {
        background-image: url('https://mall.cangniaowl.com/static_liebian/img/bg_img_er.jpg');
        background-size: 100% auto;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1
    }

    .daojishie {
        width: 310px;
        margin: auto;
        padding-top: 15rem;
    }

    .daojishi_th {
        line-height: 38px;
        border-radius: 30px;
        background: linear-gradient(to right, #F8F5E7, #EAD7AB);
        color: #d1021d;
        font-size: 13px;
        text-align: center;
    }

    .biank_df {
        background: #E22C3C;
        padding: 4px 5px;
        font-size: 12px;
    }

    .jindu_eer {
        width: 270px;
        margin: auto;
        height: 6px;
        background: #fff;
        border-radius: 6px;
        margin-top: 15px;
        position: relative
    }

    .jindu_eer span {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;

        border-radius: 6px;
        background: url(https://mall.cangniaowl.com/static_liebian/img/jindu.png);
        background-size: auto 100%;

    }

    .dianji_der {
        width: 18px;
        height: 17px;
        background-position: -138px -49px;

        position: absolute;
        right: -10px;
        top: -5px;
    }

    .hgf_df_drtd {
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 60px;
    }

    .hgf_df_drtd.ab {
        margin-top: 30px;
    }

    .d_kj_derrts {
        background: linear-gradient(to top, #E8CE9D, #F7EFDE);
        border-radius: 4px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .sd_lih_yer {
        background: #fff;

        padding-left: 15px;
        padding-right: 15px;
    }

    .sd_lih_yer.ac {
        padding-left: 5px;
        padding-right: 5px;
    }

    .tie_derttc {
        width: 235px;
        height: 43px;
        background-position: -16px -104px;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
        top: -25px;
        font-style: normal;
        color: #b50412;
        text-align: center;
        line-height: 38px;
    }

    .df_kj_dert {
        padding-top: 25px;
        padding-bottom: 15px;
    }

    .df_kj_dert li {
        line-height: 35px;
        background: linear-gradient(to right, #FC363C, #D22C31);
        border-radius: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .song_deet {
        width: 45px;
        height: 51px;
        background-position: -176px -20px;
        position: absolute;
        left: 10px;
        top: -5px;
    }

    .hao_ddf_er {
        padding-top: 25px;
        padding-bottom: 15px;
        text-align: center;

    }

    .sd_lih_yer.ab {
        background: url(https://mall.cangniaowl.com/static_liebian/img/ssd_jh_s.jpg);
        background-size: 100% 100%;
    }

    .user_icions {
        width: 68px;
        height: 68px;
        border: 2px solid #CC2129
    }

    .dpoi_der {
        width: 21px;
        height: 14px;
        background-position: -232px -52px;
        position: relative;
        top: -6px;
    }

    .dpoi_der.ab {
        background-position: -282px -50px;
        top: 4px;
    }

    .libao_ert {
        width: 105px;
        height: 121px;
        background-position: -40px -6px;

    }

    .libao_ert.as10 {
        background-position: -40px -6px;

    }

    .libao_ert.as9 {
        background-position: -210px -6px;

    }

    .libao_ert.as8 {
        background-position: -37px -133px;

    }

    .libao_ert.as7 {
        background-position: -210px -133px;

    }

    .libao_ert.as6 {
        background-position: -37px -260px;

    }

    .libao_ert.as5 {
        background-position: -209px -260px;

    }

    .libao_ert.as4 {
        background-position: -37px -386px;

    }

    .libao_ert.as3 {
        background-position: -209px -386px;

    }

    .libao_ert.as2 {
        background-position: -37px -524px;

    }

    .libao_ert.as1 {
        background-position: -210px -524px;

    }

    .sd_jh_deert {
        width: 233px;
        line-height: 30px;
        padding: 0px;
        background: linear-gradient(to top, #C91315, #FE7C83);
        border: 0px;
        border-radius: 20px;
        color: #fff;
        margin-top: 10px;
    }

    .sd_jh_deert.ab {
        border: 1px solid #C91820;
        background: #fff;
        color: #C91820;
    }

    .sd_jh_deeerrt {
        width: 330px;
        margin: auto;
        margin-top: 30px;
    }

    .sd_jh_derr {
        line-height: 1.5;
        padding-top: 25px;
        padding-bottom: 15px;
    }

    .s_kjh_de {
        background: #C91315;
        color: #fff;
        border-radius: 50%;
        display: inline-block;
        width: 15px;
        height: 15px;
        text-align: center;
        line-height: 16px;
        font-size: 12px;
        padding: 0px;
        margin-right: 5px;
    }

    .dsf_khgh_map {
        line-height: 40px;
        height: 35px;
        z-index: 1000;
        background: linear-gradient(to top, #E0C48E, #F7ECD9);
    }

    .map_iconser {
        width: 12px;
        height: 14px;
        background-position: -138px -281px;
        position: relative;
        top: -2px;
        margin-right: 5px;
    }

    .map_icose {
        height: 150px;
        background: #fff;
    }

    .dianjide {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0px;
        right: 20px;
        color: #fff;
        line-height: 25px;
        z-index: 1000;
        font-size: 12px;
        padding: 0px 5px;
        transform: scale(0.9)
    }

    .sdf_jhhg_wer {
        padding: 5px;
    }

    .sd_jh_dert {
        min-height: 100px;
        border: 1px solid #F8EEDC
    }

    .sd_jh_deerteerr {
        width: 41px;
        height: 50px;
        background-position: -301px -110px;
        position: absolute;
        left: -5px;
        top: -10px;
    }

    .sd_xd_a {
        width: 53px;
        height: 53px;
    }

    .sd_jh_dedrrt {
        display: inline-block;
    }

    .user_icon_ser {
        width: 40px;
        height: 40px;
        float: left
    }

    .libao_eerr {
        width: 74px;
        height: 83px;
        background-position: -16px -321px;
        position: absolute;
        top: -45px;
        right: -15px;
    }

    .fdg_kjhj_deeer {
        height: 272px;
        transition: all 0.5s;
        width: 100%;
        overflow: hidden
    }

    .fdg_kjhj_deeer li {
        height: 65px;
    }

    .anim {
        transition: all 0.5s;
    }

    .logo_sdert {
        width: 22px;
        height: 40px;
        background-position: -321px -38px;
    }

    .as_kj_tope {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        line-height: 45px;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        height: 45px;
        overflow: hidden;
    }

    .use_iuud_er {
        width: 30px;
        height: 30px;
    }

    .erwei_eer {
        width: 43px;
        height: 43px;
        background-position: -75px -24px;

    }

    .df_jh_deert,
    .yinyue {
        position: fixed;
        right: 5px;
        top: 60px;

        z-index: 1000;
    }

    .yinyue {
        top: 7px;
        right: 20px;
        width: 30px;
        height: 30px;
    }

</style>
<style>
    .ssdwwer {
        animation: rotating 1.2s linear infinite
    }


    @keyframes rotating {
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(360deg)
        }
    }

</style>
