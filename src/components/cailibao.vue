<!--拆礼包弹窗-->
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

          <p class="mt20 cen">
                    <i class="f_i libao_ert"></i>
                    </p>
            <p class="cen cf fz12 mt20 dian" v-if="already==0">
    您的好友{{friend_name}}很想要得到这个礼包<br>
现急需您助力拆掉一层礼包哦！
            </p>

                 <p class="cen cf fz12 mt20 dian" v-if="already==1">
  每位朋友只能帮拆一次，您已经帮TA拆过了哦！
            </p>

            <p class="cen sdf_jh_Derrt">
                <a class="mui-btn querenh_eder"  @click="cailibao" v-if="already==0">帮TA拆礼包</a>
                   <a class="mui-btn querenh_eder"  @click="$emit('ckasd')" v-if="already==1">关闭</a>
            </p>

        </section>

    </div>
        </template>
<script>
        import {
    MessageBox
} from 'mint-ui';
    export default {
        props: {
            already:"",
            user_name:"",
            friend_header_image:"",
            friend_name:"",
            goods_id:"",
            shareid:""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            cailibao(){
                let friend={},
                    th=this
                friend.goods_id=this.goods_id
                friend.shareid=this.shareid
                this.post("liebian/friend",friend,function(){
                       MessageBox('提示', '您已帮忙拆掉了一层礼包，您的好友'+th.friend_name+'万分感谢您的助力！');
                    th.$emit('ckasd')
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

    .libao_ert {
        width: 105px;
        height: 120px;
        background-position: -16px -177px;

    }

</style>
