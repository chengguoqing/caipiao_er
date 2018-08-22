<template>
    <div class="sdf_jkj_deer">
        <section class="pr lunbo_eerr">
  				<mt-swipe :auto="4000">
							<mt-swipe-item v-for="(bann,idx) in sd.company_images" :key="idx">

                        <div class="Sdf_jh_eert" :style="{'background-image': 'url('+bann+')'}"></div>

							</mt-swipe-item>
						</mt-swipe>

            <section class="dsf_jh_deer pd cen">
                <img :src="sd.company_logo" class="sd_xd_a cz kx">
                <p class="mt10">
                        <span class="cf fz16 df_jh_dcer">{{sd.company}}</span>
                </p>

            </section>
        </section>


        <section class="pt15 pm15 pd mui-row dsf_errjh_deer">
            <section class="pd mui-col-xs-6" @click="is_ddf=0">
                   <p class="guanyu_detr" :class="is_ddf==0?'act':''">关于我们</p>
            </section>

              <section class="pd mui-col-xs-6" @click="is_ddf=1">
                   <p class="guanyu_detr  ab " :class="is_ddf==1?'act':''">领取礼包</p>
            </section>

        </section>


        <section v-if="is_ddf==0">


        <section class="">
                <p class="cen sdf_jh_deer">
                       <i class="f_i dsfj_df_errt"></i> 品牌介绍
                </p>
            <section class="jiesieer pd pt10 pm10" v-html="sd.company_intro"></section>
        </section>


            <section class="mt10">
                <p class="cen sdf_jh_deer">
                       <i class="f_i dsfj_df_errt ab"></i> 美容师
                </p>
            <section class="bgff pl10  pt10 pm10 sdf_jh_deert">
                    <section class="sd_jkh_deer mr10" v-for="sf in sd.beautician_images">
                            <img :src="sf.img" class="kx mrs_kjde">
                        <p class="fz12 sdf_jh_der cen">
    <span class="fz14 z3">美容师</span><br>
{{sf.name}}
                            </p>
                    </section>
            </section>
        </section>







           <section class="mt10">
                <p class="cen sdf_jh_deer">
                       <i class="f_i dsfj_df_errt ac"></i> 店内环境
                </p>
            <section class="bgff pd  pt10 pm10 sdf_kh_deer" v-html="sd.company_desc"></section>
        </section>



           <section class="mt10">
                <p class="cen sdf_jh_deer">
                       <i class="f_i dsfj_df_errt ac"></i> 用户评价
                </p>
                <pingjia v-if="true" :goods_id="$route.query.goods_id"></pingjia>
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

        </section>

        <section v-else>
          <section class="df_h_deeert">
                <p class="cen sdf_jh_deer">
                       <i class="f_i dsfj_df_errt ac"></i> 拆礼包活动
                </p>
    </section>

              <page_index ></page_index>
        </section>


                <section class="mt40 cen">
                <i class="f_i logo_sdert"></i>
            <p class="cen fz12 z3 mt10 ">
    本系统由苍鸟网络提供技术支持
            </p>

        </section>





           <dibu  @ssd_Sdr_x="is_Ddffe=true" :is_sye="'true'" :kjh_s="2" :tel_s="sd.company_tel"></dibu>
    </div>
        </template>
<script>
    import dibu from '../components/dibu'
    import pingjia from '../components/pingjia'
        import page_index from '../components/page_index'
    export default {
        data() {
            return {
                sd: "",
                position: {},
                zoom: 17,
                center: [116.411743, 39.92401],
                is_ddf:0,
                marker: {

                    click() {

                    }
                }
            }
        },
        components: {
            dibu,
            pingjia,
            page_index
        },

        methods: {
            tiaozsd(company_address,ty) {
                let text = {
                        key: "1ca50beb27f893268297a00cdb0acdf3",
                        address: company_address,
                        city: '全国'
                    },
                    th = this
                th.ge_tr('https://restapi.amap.com/v3/geocode/geo', text, function(data) {
                    th.center = data.geocodes[0].location.split(",")
                    th.position.lat = th.center[0]
                        th.position.lng = th.center[1]
                    if(!ty){
                         th.fenxiang_map(th.position, company_address)
                    }


                })

            }
        },
        mounted() {
            window.scrollTo(0, 0)
            var th = this,
                about = {}
            about.goods_id = this.$route.query.goods_id
            this.post('liebian/about', about, function(data) {
                th.sd = data
                th.tiaozsd(data.company_address,true)
            })


            this.Title("关于我们")
        },
    }

</script>
<style>
    .lunbo_eerr .mint-swipe-indicators {
        left: inherit;
        right: -30px;
    }

</style>
<style scoped>
    .dsf_errjh_deer{
        position: relative;
        z-index: 1000;
        background: #EFEFF4;
    }
    .df_h_deeert{
          position: relative;
        z-index: 1000;
    }
    .guanyu_detr{
          background: linear-gradient(to top, #EDD3A1, #F6EBD8);
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        color: #811A1E;
        border-radius: 6px;
           box-shadow: 2px 2px 6px rgba(0,0,0,.4);
    }
    .guanyu_detr.act {
        box-shadow:-2px -2px 6px rgba(0,0,0,.4) inset;
    }
    .guanyu_detr.ab{
        background: #811A1E;
        color: #EDD3A1
    }
    .lunbo_eerr {
        height: 12rem;
    }

    .Sdf_jh_eert {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;


    }

    .dsf_jh_deer {
        position: absolute;
        left: 0px;
        bottom: 0px;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100%;
        /*        background: rgba(0, 0, 0, 0.3)*/
    }

    .df_jh_dcer {
        background: rgba(0, 0, 0, 0.5);
        display: inline-block;
        min-width: 150px;
        line-height: 25px;
        border-radius: 20px;
    }

    .sd_xd_a {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    .map_icon_er {
        width: 19px;
        height: 26px;
        background-position: -108px -378px;
    }

    .df_jh_dert {
        line-height: 1.4
    }

    .sd_hjh_deert {
        width: 23px;
        height: 23px;
        background-position: -146px -381px;
    }

    .dfds_jh_deer {
        line-height: 40px;
    }

    .dsfj_df_errt {
        width: 16px;
        height: 16px;
        background-position: -196px -388px;
    }

    .dsfj_df_errt.ab {
        background-position: -224px -386px;
    }

    .dsfj_df_errt.ac {
        background-position: -250px -386px;
    }

    .sdf_jh_deer {
        line-height: 30px;
        color: #bd3032;
        background: linear-gradient(to top, #EDD3A1, #F6EBD8);
    }

    .jiesieer {
        background: #fff;
        font-size: 14px;
        text-indent: 20px;



    }

    .sdf_jh_deert {
        white-space: nowrap;
        overflow: auto;
    }

    .sd_jkh_deer {
        display: inline-block
    }

    .mrs_kjde {
        width: 67px;
        height: 67px;
    }

    .sdf_jh_der {
        line-height: 1.3
    }

    .sdf_jkj_deer {
        padding-bottom: 80px;
    }
       .dsf_khgh_map {
        line-height: 40px;
        height: 35px;
        z-index: 1000;
        background: linear-gradient(to top, #E0C48E, #F7ECD9);
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

</style>
<style>
    .sdf_kh_deer img {
        max-width: 100%;
    }

</style>
