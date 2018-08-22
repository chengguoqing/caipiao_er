import router from './router'
var wx = require('weixin-js-sdk');
import md5 from './js/md5'
import {
    MessageBox
} from 'mint-ui';
var sd_iux = "https://api.cangniaowl.com/v1/",
    shopinfo = false


export default {
    install(Vue, options) {
        let name = "token"
        Vue.prototype.token = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
        //        if (Vue.prototype.token) {
        //            localStorage.token = Vue.prototype.token
        //        } else {
        //            Vue.prototype.token = localStorage.token
        //        }

        Vue.prototype.token = token

        Vue.prototype.te_gooid = ""
        // Vue.prototype.token = "kf7AcoF67rhSNQPvn3EiX3Z22O1p5tKUozc1UwjyIwDA4DL_zhc-mBwjcQpo"
        //Vue.prototype.token ="m4xPkM5TRUcXNH37azKgIQ5DA2B8S0sLozc1UwlSXgajwincRkTMVx8vA79I"
        Vue.prototype.ge_t = function (url, cn, xy) {
            this.$http.get(sd_iux + url, {
                params: cn
            }).then((response) => {
                xy(response.data)
            }, (response) => {
                //                alert("请求失败");
            });
        }

        Vue.prototype.ge_tr = function (url, cn, xy) {
            this.$http.get(url, {
                params: cn
            }).then((response) => {
                xy(response.data)
            }, (response) => {
                //                alert("请求失败");
            });
        }



        Vue.filter("baoliu", function (t) {
            return parseFloat(t).toFixed(2)
        })

        Vue.filter("shixiao", function (t) {
            switch (t) {
                case 1:
                    return '已删除';
                    break;
                case 2:
                    return '商品已下架';
                    break;
                case 3:
                    return '已售馨';
                    break;
                default:
                    break;
            }

        })
        Vue.directive('clik_ds', {
            inserted: function (el, binding) {
                el.onclick = function () {
                    var sd_dert = "." + this.classList[0]
                    document.querySelector(sd_dert).classList.remove("act");
                    this.classList.add('act')
                    binding.value[1].map(a => {
                        a.cls = ""
                    })
                    binding.value[0].cls = "act"


                }
            }
        })
        Vue.prototype.shopinfo = ""
        Vue.prototype.shop_info = function (call_bs) {
            if (!Vue.prototype.shopinfo) {
                let shopinfo = {},
                    th = this
                shopinfo.token = this.token
                this.$http.get(sd_iux + "home/shopinfo", {
                    params: shopinfo
                }).then((response) => {
                    try {
                        Vue.prototype.shopinfo = response.data
                        call_bs(Vue.prototype.shopinfo)
                    } catch (e) {

                    }
                }, (response) => {
                    //                    alert("请求失败");
                });
            } else {
                try {
                    call_bs(Vue.prototype.shopinfo)
                } catch (e) {

                }

            }
        }
        Vue.prototype.car_number = ""
        Vue.prototype.carnumber = function (call_e) { //购物车
            let carnumber = {}
            carnumber.token = this.token
            this.$http.get(sd_iux + "user/carnumber", {
                params: carnumber
            }).then((response) => {
                try {
                    Vue.prototype.car_number = response.data.data.number //获取购物车数量

                    call_e(response.data.data.number)
                } catch (e) {

                }
            }, (response) => {
                //                alert("请求失败");
            });


        }

        Vue.prototype.urlencode = function (data) {
            var _result = [];
            for (var key in data) {
                var value = data[key];
                if (value.constructor == Array) {
                    value.forEach(function (_value) {
                        _result.push(key + "=" + _value);
                    });
                } else {
                    _result.push(key + '=' + value);
                }
            }

            return _result.join('&');
        }




        //company=分享标题  sd_us=分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 imgUrl分享图标 desc=详情介绍
        Vue.prototype.fenxiang = function (company, sd_us, shop_logo, desc) {
            wx.ready(function () {

                wx.onMenuShareTimeline({
                    title: company, // 分享标题
                    link: sd_us, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shop_logo, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: company,
                    desc: desc,
                    link: sd_us,
                    imgUrl: shop_logo,
                    trigger: function (res) {

                    },
                    success: function (res) {

                    },
                    cancel: function (res) {

                    }
                });
            })
        }


        Vue.prototype.fenxiang_map = function (point, dizi) {
            window.location.href="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd="+dizi
//            wx.ready(function () {
//                wx.openLocation({
//                    latitude: point.lat, // 纬度，浮点数，范围为90 ~ -90
//                    longitude: point.lng, // 经度，浮点数，范围为180 ~ -180。
//                    name: dizi, // 位置名
//                    address: dizi, // 地址详情说明
//                    scale: 18, // 地图缩放级别,整形值,范围从1~28。默认为最大
//                    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
//                });
//            })

        }

        //        滚到倒指定的位置
        Vue.prototype.gundong = function (target) {

            var scrollT = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollT > target) {
                var timer = setInterval(function () {
                    var scrollT = document.body.scrollTop || document.documentElement.scrollTop
                    var step = Math.floor(-scrollT / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
                    if (scrollT <= target) {
                        document.body.scrollTop = document.documentElement.scrollTop = target;
                        clearTimeout(timer);
                    }
                }, 20)
            } else if (scrollT == 0) {
                var timer = setInterval(function () {
                    var scrollT = document.body.scrollTop || document.documentElement.scrollTop
                    var step = Math.floor(300 / 3 * 0.7);
                    document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
                    console.log(scrollT)
                    if (scrollT >= target) {
                        document.body.scrollTop = document.documentElement.scrollTop = target;
                        clearTimeout(timer);
                    }
                }, 20)
            } else if (scrollT < target) {
                var timer = setInterval(function () {
                    var scrollT = document.body.scrollTop || document.documentElement.scrollTop
                    var step = Math.floor(scrollT / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
                    if (scrollT >= target) {
                        document.body.scrollTop = document.documentElement.scrollTop = target;
                        clearTimeout(timer);
                    }
                }, 20)
            } else if (target == scrollT) {
                return false;
            }



        }



        Vue.prototype.price_guo = function (t) {
            t = parseFloat(t).toFixed(2)
            t += ""
            let price_a = t.split(".")[0],
                price_b = t.split(".")[1]
            return `${price_a}.<span class="fz12">${price_b}</span>`
        }


        Vue.prototype.post = function (url, cn, xy, cal, err_call, er_ert) {
            if (!cn) {
                cn = {}
            }
            cn.token = token
            this.$http.post(sd_iux + url, cn, {
                emulateJSON: true //跨域
            }).then((response) => {

                if (response.data.err_code == "000001") { //跳转首页
                    //                    router.push({
                    //                        path: "/"
                    //                    })
                    window.location.href = window.location.href.split("#")[0]
                    return
                }
                if (response.data.err_code == "000002") { //限购
                    xy(response.data.data)
                    return
                }
                if (response.data.err_code == "000003") { //库存不足
                    xy(response.data.data, response.data)
                    return
                }

                if (response.data.return_code != "SUCCESS") {
                    if (cal) {
                        return
                    }
                    MessageBox('提示', response.data.return_msg);
                    try {
                        err_call()
                    } catch (e) {

                    }
                    return
                }
                xy(response.data.data, response.data)
            }, (response) => {
                return;
                try {
                    er_ert()
                } catch (e) {

                }
                if (!cn.dingshi) {
                    router.push({
                        path: "failure_err"
                    })
                }

            });
        }



        Vue.prototype.post_er = function (url, cn, xy, cal, err_call, er_ert) {


            this.$http.post(url, cn, {
                emulateJSON: true //跨域
            }).then((response) => {

                xy(response.data.data, response.data)
            }, (response) => {


            });
        }



        Vue.prototype.Title = function (title, ty) {
            document.title = title


        }
        Vue.prototype.time_c = function (t) {
            let time = new Date()
            time.setTime(t * 1000)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate()
            Month < 10 ? Month = 0 + '' + Month : Month = Month
            return Year + "-" + Month + "-" + Data
        }

        Vue.prototype.time_d = function (t) {
            let time = new Date()
            time.setTime(t * 1000)
            let Year = time.getFullYear(),
                Month = time.getMonth() + 1,
                Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
                hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
                Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
                Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
            Month < 10 ? Month = 0 + '' + Month : Month = Month
            return Year + "-" + Month + "-" + Data + " " + hour + ":" + Minutes + ":" + Seconds
        }




        Vue.prototype.setuser_info = function (user) {
            localStorage.user = JSON.stringify(user)
        }

        Vue.prototype.kefu = function (shop_id, goods_id) {
            window.location.href = `http://shop${shop_id}.cangniaowl.com/websocket/index?token=${token}&goods_id=${goods_id}`


        }


        Vue.prototype.hf = function (url, cu) { //路由跳转

            if (url.indexOf("http") >= 0) {
                window.location.href = url
                return
            }


            if (url.indexOf("search") >= 0) {

                router.push({
                    path: "cplist",
                    query: {
                        group_id: url.split("group_id=")[1]
                    }
                })

                return

            }

            if (url.indexOf("#/") >= 0) {
                router.push({
                    path: url.split("#/")[1]
                })
                return
            }
            //            if (url.indexOf("_id=") >= 0) {
            //                let act_id = {}
            //                act_id.act_id = url.split("?_id=")[1]
            //
            //                router.push({
            //                    path: "activity_168",
            //                    query: act_id
            //                })
            //                return
            //            }



            if (url.indexOf("/") >= 0) {
                url = url.split("/")[1]
            }
            let id_sdert = true
            if (url.indexOf("html") >= 0) {
                let id_sd = url.split(".html")[0]
                cu = {
                    goods_id: id_sd
                }
                url = "commodity_details"
                if (isNaN(id_sd)) {
                    id_sdert = false
                }
            }

            if (id_sdert) {
                router.push({
                    path: "/" + url,
                    query: cu
                })
            }

        }
        Vue.prototype.hfe = function (url, cu) { //路由跳转


            router.replace({
                path: "/" + url,
                query: cu
            })
        }


        //获取cookie
        Vue.prototype.getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        }
        Vue.prototype.setCookie = function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            console.info(cname + "=" + cvalue + "; " + expires);
            document.cookie = cname + "=" + cvalue + "; " + expires;
            console.info(document.cookie);
        }

        Vue.prototype.yanza = {
            mail: function (a) {
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|14[0-9]{9}|19[0-9]{9}|16[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
            },
            car_t: function (a) {
                var b = !1;
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
            },
            jine: function (a) {
                var b = !1;
                return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a) && (b = !0), b
            }

        };


        Vue.prototype.wx_config = function (data) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature, // 必填，签名，见附录1
                jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'onVoicePlayEnd',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
            });

        }







    }
}
