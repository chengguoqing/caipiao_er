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
                        {{user_name}}
                    </p>
                </section>
            <p class="fz20 cf cen mt20">
                修改个人资料
            </p>
            <section class="mui-row mt20">
                <section class="mui-col-xs-4 cf tr fz15 dsf_kj_der">
                    真实姓名
                </section>
                <section class="mui-col-xs-8 pl10">
                    <input type="text" class="sd_jh_deret" v-model="name_df">
                </section>
            </section>
                    <section class="mui-row mt15">
                <section class="mui-col-xs-4 cf tr fz15 dsf_kj_der">
                    联系电话
                </section>
                <section class="mui-col-xs-8 pl10">
                    <input type="tel" class="sd_jh_deret" v-model="mobile_phone">
                </section>
            </section>

            <p class="fz12 cf cen sdf_jkh_deer">
    >> 修改您的个人资料以便我们确认礼包的所属人 <<
                </p>
            <p class="cen sdf_jh_Derrt">
            <a class="mui-btn querenh_eder"  @click="tijioa">确认提交</a>
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
            user_name: "",
            mobile_phone: "",
            goods_id: '',
            friend_header_image: '',
            name_df:""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            tijioa() {
                if (!this.user_name) {
                    MessageBox('提示', "请输入您的真实姓名");
                    return
                }
                if (!this.mobile_phone) {
                    MessageBox('提示', "请输入联系电话");
                    return
                }
                if (!this.yanza.phone(this.mobile_phone)) {
                    MessageBox('提示', "联系电话格式不正确");
                    return
                }
                let bindphone = {},
                    th = this
                bindphone.mobile_phone = this.mobile_phone
                bindphone.truename = this.name_df
                bindphone.goods_id = this.goods_id
                this.post("liebian/bindphone", bindphone, function(data) {
                    th.$emit('ssd_Sdr')
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

</style>
