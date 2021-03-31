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
    }
};

})();
