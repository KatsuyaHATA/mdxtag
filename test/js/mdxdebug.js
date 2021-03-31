(function() {

var cookielist = ["__mdx_sid","__mdx_uid","__mdx_optin","__mdx_lats","__mdx_rpt"];

mdxcookies = {
    json: function() {
        var d = {};
        for (var i=0;i<cookielist.length;i++) {
            var r = new RegExp(cookielist[i]+"=([^; ]+)");
            var m = document.cookie.match(r);
            d[cookielist[i]] = (m ? m[1] : "undefined");
        }
        return JSON.stringify(d);
    },
    clear: function(ket) {
        var _clear = function(k) {
             document.cookie = k + "=; path=/; expires="+(new Date(0)).toGMTString()+";";
        };
        if (key) {
            if (cookielist.join("++").indexOf(key) >= 0) {
                _clear(key);
            }
        } else {
            for (var i=0;i<cookielist.length;i++) {
                _clear(cookielist[i]);
            }
        }
    }
};

mdxurltest = {
    add_params: function(p) {
        if (!window.location.search) {
            console.log("mdxurltest.add_params : Query parameter is not exist");
        }
        __add_params = p;
    },
    send_params: function(p) {
        if (!window.location.search) {
            console.log("mdxurltest.send_params : Query parameter is not exist");
        }
        __send_params = p;
    },
    enable_hash: function(flg) {
        if (!window.location.hash) {
            console.log("mdxurltest.enable_hash : hash is not exist");
        }
        __enable_url_hash = flg||0;
    },
    custom_parameter: function(a, c) {
        __action = a||"";
        __custom_param = c||{};
    },
    clear: function() {
        __add_params = [];
        __send_params = [];
        __custom_param = {};
        __action = "";
        __enable_url_hash = 0;
    }
};

// テスト用の各種イベントハンドラー
jQuery(document).ready(function() {
    jQuery("button#url-test").click(function(e) {
        var val = jQuery("input[name='add_params']").val();
        var p = val.replace(/(^\s*|\s*$)/g,'').split(/\s*,\s*/);
        mdxurltest.add_params(p);
        val = jQuery("input[name='enable_hash']:checked").val();
        mdxurltest.enable_hash((+(val)));
        __push_beacon(__getURL());
        mdxurltest.clear();
    });
    jQuery("button#parameter-test").click(function(e) {
        var val = jQuery("input[name='sned_params']").val();
        var p = val.replace(/(^\s*|\s*$)/g,'').split(/\s*,\s*/);
        mdxurltest.send_params(p);
        val = jQuery("[name='custom_param']").val();
        try {
            p = JSON.parse(val);
        } catch(e) {
            console.log(e);
            return;
        }
        var act = jQuery("input[name='action']").val();
        mdxurltest.custom_parameter(act, p);
        __push_beacon(__getURL());
        mdxurltest.clear();
    });
});
})();
