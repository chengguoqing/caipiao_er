exports.test_s = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    methods: {
        wx_chus(call_back) {
            var sd_us =window.location.href
            let getwxsign = {},
                th = this
            getwxsign.url = sd_us
            console.log(sd_us);
            this.post('home/getwxsign', getwxsign, function (data) {
                th.wx_config(data)
                try {
                    call_back()
                } catch (e) {

                }
            })
        }
    },
}
