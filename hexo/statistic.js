function loadStatistic(e) {
    var t = e + "/pub/statistic/";
    fetch(t, {
        referrerPolicy: "no-referrer-when-downgrade"
    }).then(function (res) {
        if (res.ok) {
            res.json().then(function (e) {
                if (e.status) {
                    if (document.getElementById("qexo-page-pv")) {
                        document.getElementById("qexo-page-pv").innerHTML = e.page_pv;
                    }
                    if (document.getElementById("qexo-site-pv")) {
                        document.getElementById("qexo-site-pv").innerHTML = e.site_pv;
                    }
                    if (document.getElementById("qexo-site-uv")) {
                        document.getElementById("qexo-site-uv").innerHTML = e.site_uv;
                    }
                } else {
                    console.log(e.error);
                    if (document.getElementById("qexo-page-pv")) {
                        document.getElementById("qexo-page-pv").innerHTML = "请求失败";
                    }
                    if (document.getElementById("qexo-site-pv")) {
                        document.getElementById("qexo-site-pv").innerHTML = "请求失败";
                    }
                    if (document.getElementById("qexo-site-uv")) {
                        document.getElementById("qexo-site-uv").innerHTML = "请求失败";
                    }
                }
            })
        } else {
            if (document.getElementById("qexo-page-pv")) {
                document.getElementById("qexo-page-pv").innerHTML = "请求失败";
            }
            if (document.getElementById("qexo-site-pv")) {
                document.getElementById("qexo-site-pv").innerHTML = "请求失败";
            }
            if (document.getElementById("qexo-site-uv")) {
                document.getElementById("qexo-site-uv").innerHTML = "请求失败";
            }
        }
    }, function (ex) {
        console.log('站点统计失败! 网络错误')
        if (document.getElementById("qexo-page-pv")) {
            document.getElementById("qexo-page-pv").innerHTML = "请求失败";
        }
        if (document.getElementById("qexo-site-pv")) {
            document.getElementById("qexo-site-pv").innerHTML = "请求失败";
        }
        if (document.getElementById("qexo-site-uv")) {
            document.getElementById("qexo-site-uv").innerHTML = "请求失败";
        }
    });
}