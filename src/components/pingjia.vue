<!--评价-->

<template>
	<section>
		<!--
           <section class="pl10 btm mui-row pt10 bgff">
                <p class="mui-col-xs-3 pr10 mb10" v-for="ddf in 8">
                    <span class="yj4 df_jh_ertxc_we ls fz12">全部1</span>
                </p>
        </section>
-->
<!--
		<section class="mt15 bgff">
			<section class="pd z9 fz14 pt10 pm10" @click="hf('assessment_details',{goods_id:goods_id})" v-if="commentlist.comment_num!=0">
				<span> 评价({{commentlist.comment_num}}) </span>

				<span class="fz12 fr z3">
                    <span v-if="commentlist.comment_num!=0"><span class="red">{{commentlist.positive_rate}}%</span> 好评度 </span>

				<i class="dx icon-right fz14"></i>

				</span>
			</section>

			<section class="pd z9 fz14 pt10 pm10" v-else @click="hf('assessment_details',{goods_id:goods_id})">
				<span>暂无评价</span> <i class="dx icon-right fz12 fr"></i>
			</section>

		</section>
-->

		<ul class="msg_list">
			<li class="sd_kh_dli bgff  pt10 pm10 btm" v-for="sd in commentlist.data">
				<img :src="sd.header_image" class="yj user_icon_sd fl mt2">
				<section class="ov pl10 pt10" @click="hf('assessment_details',{goods_id:goods_id})">
					<p class="dian user_name z3  fz13 f_b cz">
						{{sd.user_name}}
					</p>
<!--
					<span class="fr mr5">
                    <i class="dx icon-shoucang fz14 cz ml5" v-for="(df,idx) in 5" :class="idx<sd.comment_rank?'act':''"></i>
                      </span>
-->
				</section>
				<p class="qc"></p>
				<p class="fz13 z3 mt5" @click="hf('assessment_details',{goods_id:goods_id})">
					{{sd.content}}
				</p>
				<section class="imgager_w mt2" v-if="sd.images">
					<section class="imgager_s">
						<img :src="img_s" v-for="img_s in sd.images" @click="hf('photo_viewer',{ping:sd.images,ptext:sd.content,comment_rank:sd.comment_rank})">

					</section>

				</section>

			</li>

		</ul>
<section class="btm pt5 pm5 pd bgff fz12" @click="hf('assessment_details',{goods_id:goods_id})">
        查看全部用户评价
    <span class="fr z9">共{{commentlist.comment_num}}条 <i class="dx icon-right fz12 "></i></span>
    </section>

<!--
		<p class="pd bgff pm10" v-if="commentlist.comment_num>3" @click="hf('assessment_details',{goods_id:goods_id})">
			<a class="mui-btn w100 br">查看全部评价</a>
		</p>
-->

	</section>
</template>
<script>
	export default {
		props: {
			title: "",
			goods_id: ""
		},
		data() {
			return {
				commentlist: "",
			}
		},
		methods: {

		},
	     mounted() {
			let commentlist = {},
				th = this
			commentlist.goods_id = this.goods_id
			commentlist.per_page = 3

			this.post("product/commentlist", commentlist, function(data) {
				th.commentlist = data
			}, true)
		},
	}
</script>
<style scoped>
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
</style>
