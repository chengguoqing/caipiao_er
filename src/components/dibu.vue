<template>
	<footer class="mui-row dsf_d_dibu btm cen">
		<section class="mui-col-xs-3" v-for="(du,idx) in dubvu" :class="idx==kjh_s?'act':''" @click="sd_jheertxc(du.href)">
			<p class="sd_jhg_ert pr" :class="idx==2?'kefu':''" >

				<i class="f_i   z3 cz pr df_kj_deer" :class="[du.icon,du.size]" >

                </i>
			</p>
			<p class="z3 fz12" :class="idx==2?'sd_jkh_er':''">
				{{du.name}}
			</p>
		</section>

	</footer>

</template>
<script>
    import base from "../js/base.js"

    export default {
        props: {
            tel_s: "",
            kjh_s: "",
            gwcw: "",
            is_sye: "",
            shop_id:"",
            goods_id_er:""
        },
        data() {
            return {
                dubvu: [{
                    name: "邀请好友",
                    icon: "ab",
                    size: "fz22",
                    href: "yaoqing",
                    cls: ""
                }, {
                    name: "联系电话",
                    icon: "",
                    size: "fz20",
                    href: "dianhua",
                    cls: "act"
                }, {
                    name: "关于我们",
                    icon: "ac",
                    size: "fz22",
                    href: "in_regard",
                    number: 0,
                    cls: ""
                }, {
                    name: "我的红包",
                    icon: "ad",
                    size: "fz22",
                    href: "my_packets",
                    number: 0,
                    cls: ""
                }]
            }
        },
        methods: {
            sd_jheertxc(url) {

                if(this.kjh_s==0){
                      window.location.href=`https://api.cangniaowl.com/shop/${this.shop_id}.html#/?goods_id=${this.goods_id_er}`
                    return
                }
                if (url.indexOf("dianhua") >= 0) {
                    window.location.href = "tel:" + this.tel_s
                    return
                }

                if (url.indexOf("yaoqing") >= 0) {

                    this.$emit('ssd_Sdr_x')
                    return
                }
                console.log(base.kefu);
                this.hf(url)
            }
        },
        created: function() {

            if (this.is_sye) {
                this.dubvu[0].icon = "ae"
                this.dubvu[0].name = "回到首页"
                this.dubvu[0].href = ""
            }
            let goods_id = this.$route.query.goods_id
            if (!goods_id) {
                goods_id = window.location.search.split('goods_id=')[1].split("&")[0]

            }

            this.dubvu.map(a => {
                a.href = a.href + "?goods_id=" + goods_id
            })
            console.log(this.dubvu);
        },

    }

</script>
<style scoped>
    .dsf_d_dibu {
        position: fixed;
        width: 100%;
        left: 0px;
        bottom: 0px;
        z-index: 99999;
        background: #F6F7F7
    }

    .sd_jhg_ert {
        line-height: 28px;
        position: relative;
        top: 2px;
    }

    .dsf_d_dibu .mui-col-xs-3 {
        width: 25%;
    }

    .dsf_d_dibu .mui-col-xs-3.act .z3 {
        color: #B23031 !important
    }


    .df_kj_deer {
        width: 22px;
        height: 22px;
        background-position: -178px -272px;
    }

    .df_kj_deer.ab {
        width: 28px;
        background-position: -223px -274px;
    }

    .df_kj_deer.ac {
        width: 25px;
        background-position: -278px -274px;
    }

    .df_kj_deer.ad {
        width: 20px;
        background-position: -331px -274px;
    }

    .df_kj_deer.ae {
        width: 26px;
        height: 24px;
        background-position: -146px -230px;
    }

    .dsf_d_dibu .mui-col-xs-3.act .df_kj_deer.ae {
        background-position: -183px -230px;
    }
    .dsf_d_dibu .mui-col-xs-3.act .df_kj_deer.ac {
        background-position: -278px -318px;
    }

    .dsf_d_dibu .mui-col-xs-3.act .df_kj_deer.ad {
        background-position: -331px -318px;
    }

</style>
