<!--图片查看-->
<template>
	<div @click="$router.back(-1)">
		<section class="daohang_sd pd cen">
			<i class="dx icon-left fl"></i>
			<span class="fz16 ml10">{{chushi_s}}/{{ping.length}}</span>
		</section>

		<section class="sjh_de_retx">

			<mt-swipe :auto="0" :speed="0" class="banner_dsdf" :defaultIndex="defaul_tIndex" :show-indicators="false" @change="handleChange">
				<mt-swipe-item v-for="(pi,idx) in ping" :key="idx">
					<section class="cz_w sdf_jh_fert">
						<section class="cf cz_a">
							<img :src="pi">
						</section>
					</section>

				</mt-swipe-item>

			</mt-swipe>

			<section class="pinglungh_sd">
				<p>
<!--
					<span class=" mr5">
                    <i class="dx icon-shoucang fz14 cz mr5" v-for="(df,idx) in 5" :class="idx<$route.query.comment_rank?'act':''"></i>
                      </span>
-->
				</p>
				{{$route.query.ptext}}

			</section>

		</section>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				ping: "", //轮播图数据
				chushi_s: 1, //头部的定位了切换到第几页
				defaul_tIndex: 0 //默认显示第几页
			}
		},
		components: {

		},
		methods: {
			handleChange(idx) {
				this.chushi_s = idx + 1
			}
		},
		mounted() {
			this.Title("晒单详情-苍鸟")
			this.ping = this.$route.query.ping;
		},
        beforeRouteLeave(to, from, next) {
            // 设置下一个路由的 meta
            if (to.path == "/assessment_details") {
                to.meta.keepAlive = true
            }
            next();
        }
	}
</script>
<style scoped>
	.daohang_sd {
		position: fixed;
		width: 100%;
		background: #000;
		color: #fff;
        line-height: 50px;
		z-index: 1000
	}

	.sjh_de_retx {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		padding-top: 45px;
		background: #000;
		z-index: 1
	}

	.banner_dsdf {
		width: 100%;
		height: 100%;
	}

	.sdf_jh_fert {
		width: 100%;
		height: 100%;
	}

	.banner_dsdf img {
		max-width: 100%;
		max-height: 100%;
	}

	.pinglungh_sd {
		color: #fff;
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
		background: rgba(0, 0, 0, 0.5);
		padding: 10px;
		height: 120px;
		overflow: auto;
		font-size: 14px;
	}
</style>
