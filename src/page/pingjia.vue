<!--评价-->
<template>
	<div>
		<section class="bgff  mb10">
			<section class="pd pt10 df_kh_erecc">
				<img src="http://images.cangniaowl.com/images/261/20180806/e2bbb5f27ebd5a6a5bd0d6e1b974d887.jpg?imageView2/1/w/0/h/0/interlace/0/q/100" class="sd_jh_er cz">
				<span class="fz14 z6 ml5">描述相符</span>

                <textarea placeholder="这次购买的商品还满意吗？可以在此处写点评价给
其他顾客参考哦" class="sd_jhg_piwer mt10" rows="5 " ></textarea>


                <section class="sd_shnga_s mui-row ">

					<section class="up_ic_sde pr ab" v-for="(tu,idx) in imhgsd_dr">
						<img :src="tu">
						<i class="yj dx icon-close1 bgred cf dfg_closeerx" @click="remo_img(idx)"></i>
					</section>
					<section class="up_ic_sde pr" @click="up_img_er">
						<i class="dx icon-xiangji fz32 z9"></i>
					</section>
				</section>
			</section>

<!--

			<section class="pd">
				<section class="sd_shnga_s mui-row mt10">
					<section class="up_ic_sde pr ab" v-for="(tu,idx) in sd.images">
						<img :src="tu">
						<i class="yj dx icon-close1 bgred cf dfg_closeerx" @click="remo_img(idxo,idx)"></i>
					</section>

					<section class="up_ic_sde pr" @click="up_img_er(idxo)">
						<i class="dx icon-xiangji fz32 z9"></i>
					</section>

				</section>
			</section>
-->

		</section>



		<section class="dsf_jh_drf btm bgff  mui-row">
			<section class="mui-col-xs-9 pd">



			</section>
			<section class="mui-col-xs-3 bgred fz12 cen" @click="submit_comments">
				提交评价
			</section>

		</section>

		<input type="file" @change="previewFile" id="ssd_ooie">
	</div>
</template>
<script>
    import {
    MessageBox
} from 'mint-ui';
	export default {
		data() {
			return {
				tups: [],
				goods_list: "",
				goods_lister: [],
				order_id: "",
				niming: true, //是否匿名提交
				hg_sd: 0, //描述评价等级
				deliver_rank: 5, //物流评价等级
				services_rank: 5, //服务态度等级
				huaise: true, //开关
				img_idx: "",
                imhgsd_dr:[]
			}
		},
		components: {},
		methods: {
			getimg(data) { //获取上传的图片
				this.tups = data
			},
			up_img_er(idx) { //上传图片按钮触发

//				this.img_idx = idx
				$('#ssd_ooie').click()

			},
			previewFile() {
				if(this.tups.length >= 3) {
					return
				}
				var th = this
				var file = document.querySelector('#ssd_ooie').files[0];
				var reader = new FileReader();
				reader.onloadend = function() {
					let upload = {}
					upload.image = reader.result
					console.log(reader);
					th.post('images/upload', upload, function(data) {
						th.imhgsd_dr.push(data.src)
					})

				}
				if(file) {
					reader.readAsDataURL(file);
				} else {

				}
			},
			remo_img( idx) {
                this.imhgsd_dr.splice(idx, 1);
//				this.goods_lister[idxo].images.splice(idx, 1);

			},
			submit_comments() { //提交评论
				let addcomment = {},
					th = this
				addcomment.token = this.token
				addcomment.order_id = this.order_id
				addcomment.deliver_rank = this.deliver_rank
				addcomment.services_rank = this.services_rank
				this.goods_lister.map(a => {
					if(this.niming) {
						a.anonymous = 1
					} else {
						a.anonymous = 0
					}
				})
				addcomment.comment = this.goods_lister

				if(!addcomment.comment[0].content){
                      MessageBox('提示', "评价内容不能为空");
                    return
                }
				this.post("product/addcomment", addcomment, function(data) {
					th.$router.back(-1)

				})
			}
		},
		mounted() {

//			this.goods_list = this.$route.query.goods_list;
//			this.order_id = this.$route.query.order_id
//			this.goods_list.map((a, b) => {
//				let skshj_s = {}
//				skshj_s.images = [] //产品上传图片
//				skshj_s.goods_rank = 5 //评分
//				skshj_s.rec_id = a.rec_id
//				skshj_s.goods_id = a.goods_id
//				skshj_s.anonymous = 1 //1=匿名评价
//				skshj_s.content = "" //评价内容
//				skshj_s.goods_thumb = a.goods_thumb //产品图片
//				this.goods_lister.push(skshj_s)
//
//			})

			this.Title("评价")
		},
	}
</script>
<style scoped>
	.sd_jh_er {
		width: 45px;
		height: 45px;
		border: 1px solid #f5f5f5
	}

	.df_kh_erecc {
		line-height: 45px;
	}

	.sd_jhg_piwer {
		border: 0px;
		background: #F8F8F8;
		font-size: 13px;
		text-indent: 0px;
		margin-bottom: 0px;
	}

	.pingjis_s {
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
		background: #fff;
		height: 50px;
		line-height: 50px;
	}

	.up_ic_sde {
		border: 1px dashed #e0e0e0;
		width: 80px;
		height: 80px;
		margin-right: 8px;
		margin-bottom: 10px;
		text-align: center;
		line-height: 85px;
		float: left;
	}

	#ssd_ooie {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		display: none
	}

	.up_ic_sde img {
		width: 100%;
		height: 100%;
	}

	.dfg_closeerx {
		position: absolute;
		right: -8px;
		top: -8px;
		line-height: 20px;
		font-size: 12px;
		width: 20px;
		height: 20px;
	}
    .dsf_jh_drf {
    height: 50px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 1000;
    line-height: 50px;
}
</style>
