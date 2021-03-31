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
        __push_beacon(__getURL());
    },
    enable_hash: function() {
        if (!window.location.hash) {
            console.log("mdxurltest.enable_hash : Query parameter is not exist");
        }
        __enable_url_hash = 1;
        __push_beacon(__getURL());
    }
};

// テスト用の各種イベントハンドラー
jQuery(document).on("click","button#add-params",function(e) {
    var val = jQuery("input[name='add_params']").val();
    var p val.replace(/(^\s*|\s*$)/g,'').split(/\s*,\s*/);
    mdxurltest.add_params(p);
});
})();
