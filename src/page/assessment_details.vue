<!--评价详情-->
<template>
	<div class="pingjiaxq">
		<section class="asses_top bgff">
			<section class="uy_leiy_sd cen pt10 pm5 act" data-type="">
				<span class="fz12 ">
                    <span class="fz16">全部</span><br> {{piungji_s.comment_num}}
				</span>
			</section>

			<section class="uy_leiy_sd cen pt10 pm5 " data-type="2">
				<span class="fz12 ">
                    <span class="fz16">好评</span><br> {{piungji_s.positive_comment_num}}
				</span>
			</section>

			<section class="uy_leiy_sd cen pt10 pm5 " data-type="1">
				<span class="fz12 ">
                    <span class="fz16">中评</span><br> {{piungji_s.moderate_comment_num}}
				</span>
			</section>

			<section class="uy_leiy_sd cen pt10 pm5 " data-type="0">
				<span class="fz12 ">
                    <span class="fz16">差评</span><br> {{piungji_s.negative_comment_num}}
				</span>
			</section>

			<section class="uy_leiy_sd cen pt10 pm5 " data-type="3">
				<span class="fz12 ">
                    <span class="fz16">有图</span><br> {{piungji_s.img_comment_num}}
				</span>
			</section>
			<p class="qc"></p>

		</section>

		<section class="d_jh_drt_dr">
			<ul class="msg_list mt5" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false">
				<li class="sd_kh_dli bgff  pt10 pm10 btm" v-for="sd in commentlist_data">
					<img :src="sd.header_image" class="yj user_icon_sd fl mt2">
					<section class="ov pl10 ">
						<p class="dian  z3  fz13  cz ">
							{{sd.user_name}}
							<span class="z9 fr fz12" v-html="time_c(sd.add_time)"></span>
						</p>
<!--
						<p class="">
							<i class="dx icon-shoucang fz14 cz mr5" v-for="(df,idx) in 5" :class="idx<sd.comment_rank?'act':''"></i>
						</p>
-->
						<p class="fz14 z3 mt5">
							{{sd.content}}
						</p>

						<section class="mt10" v-if="sd.images">

							<p class="pingjia_sd" :style="{backgroundImage: 'url('+simg+') ' }" v-for="simg in sd.images" @click="hf('photo_viewer',{ping:sd.images,ptext:sd.content,comment_rank:sd.comment_rank})">

							</p>
						</section>
                        <p class="qc"></p>

						<section class="fz12 mt5 bghs pd pt10 pm10" v-if="sd.reply_count==1">
							<p class=" fz12">
								<span class="red">店家回复</span> {{sd.reply_content}}

							</p>
						</section>

					</section>
					<p class="qc"></p>

				</li>

			</ul>

			<section class="qc pt10 pm10 btm fz13 cen" v-if="commentlist_data.length>=10">
				<section>
					<mt-spinner color="#26a2ff" :size="20" class="f_b cz" v-if="commentlist_data.length%10==0"></mt-spinner>
					<span class="ml10" v-if="commentlist_data.length%10==0">加载中...</span>
					<span class="ml10" v-else>我是有底线的</span>
				</section>
			</section>




		</section>
	</div>
</template>
<script>


    export default {
        data() {
            return {
                goods_id: "",
                ty_pe: "", //评论类型
                current_page: 1, //页码
                commentlist_data: [],
                piungji_s: "",
                loading: false, //是否下拉 true禁止
                sd_certds: false,
                kb: {
                    icom: "dsf_hss_sr",
                    msg: "暂无评价",
                    type: 2,
                    btn_name: "返回商品详情页",
                    btn_url: ""
                },
            }
        },
        components: {

        },
        methods: {
            getpingjia(call_b) {
                let commentlist = {},
                    th = this
                commentlist.token = this.token
                commentlist.goods_id = this.goods_id
                commentlist.per_page = 10
                if (this.ty_pe) {
                    commentlist.type = this.ty_pe
                }

                commentlist.current_page = this.current_page
                this.post("product/commentlist", commentlist, function(data) {
                    th.sd_certds = true
                    th.piungji_s = data
                    data.data.map(a => {
                        th.commentlist_data.push(a)
                    })
                    $(".d_jh_drt_dr").addClass("show")
                    try {
                        call_b()
                    } catch (e) {

                    }

                })
            },
            chushi() {
                this.current_page = 1 //页码
                this.commentlist_data = []
            },
            loadMore() {
                if (this.sd_certds) {
                    let th = this
                    this.loading = true;
                    th.current_page++
                        th.getpingjia(function() { //下拉
                            th.loading = false;
                            console.log(2);
                        })
                }

            }
        },
        mounted() {
            this.goods_id = this.$route.query.goods_id
            this.getpingjia()
            window.scrollTo(0, 0);
            let th = this
            $(".uy_leiy_sd").off("click").on("click", function() {
                $(".uy_leiy_sd").removeClass("act")
                $(".d_jh_drt_dr").removeClass("show")
                $(this).addClass("act")
                let type = $(this).attr("data-type")
                th.chushi()
                th.ty_pe = type
                th.getpingjia()
                console.log(type);
            })
            this.Title("评价详情")
        }
    }

</script>
<style lang="scss" scoped>
    .asses_top {
        position: sticky;
        left: 0px;
        top: 0px;
        z-index: 100;
        .uy_leiy_sd {
            width: 20%;
            float: left
        }
        .uy_leiy_sd span.fz12 {
            padding-bottom: 5px;
            display: inline-block;
        }
        .uy_leiy_sd.act span.fz12 {
            color: #F15454;
            border-bottom: 2px solid #F15454;
        }
    }

    .pingjiaxq {
        .d_jh_drt_dr {
            display: none;
        }
        .user_icon_sd {
            width: 38px;
            height: 38px;
        }
        .user_name {
            max-width: 110px;
        }
        .icon-shoucang.act:before {
            color: #F15454 !important;
        }
        .sd_uiuyy_xsdfx li {
            width: 33.33%;
            float: left;
            padding-bottom: 33.33%;
            position: relative;
            float: left;
            overflow: hidden;
            cursor: pointer;
            background-color: #edeeee;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
            position: relative;
        }
        .sd_uiuyy_xsdfx img {
            max-height: 100%;
            max-width: 200px;
        }
        .sd_uiuyy_xsdfx li:before {
            content: '';
            display: block;
            background-color: #fff;
            position: absolute;
            top: 0;
            z-index: 1;
            height: 100%;
            width: 5px;
            right: 0;
        }
        .sd_kh_dli {
            padding-left: 10px;
            padding-right: 5px
        }
        .imgager_w {
            height: 72px;
            overflow: hidden
        }
        .imgager_s {
            height: 90px;
            overflow: auto;
            white-space: nowrap;
        }
        .imgager_s img {
            width: 72px;
            height: 72px;
            margin-right: 3px;
        }
    }

</style>
