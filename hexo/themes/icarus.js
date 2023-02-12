function loadSideBarFriends(id, url) { //id=class name
    var uri = url + "/pub/friends/";
    var loadStyle = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div>';
    for (let i = 0; i < document.getElementsByClassName(id).length; i++) {
        document.getElementsByClassName(id)[i].innerHTML = loadStyle;
    }
    document.getElementsByClassName(id)[1]
    var ajax;
    try {
        // Firefox, Opera 8.0+, Safari
        ajax = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("糟糕,你的浏览器不能上传文件!");
                return false;
            }
        }
    }
    ajax.open("get", uri, true);
    ajax.setRequestHeader("Content-Type", "text/plain");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var res = JSON.parse(ajax.response);
                if (res["status"]) {
                    var friends = res["data"];
                    for (let i = 0; i < document.getElementsByClassName(id).length; i++) {
                        document.getElementsByClassName(id)[i].innerHTML = '';
                    }
                    for (let i = 0; i < friends.length; i++) {
                        for (let j = 0; j < document.getElementsByClassName(id).length; j++) {
                            document.getElementsByClassName(id)[j].innerHTML += '<li><a class="level is-mobile is-mobile" href="' + friends[i]["url"] + '" target="_blank" rel="noopener"><span class="level-left"><span class="level-item">' + friends[i]["name"] + '</span></span><span class="level-right"><span class="level-item tag">' + friends[i]["url"].split('/')[2] + '</span></span></a></li>';
                        }
                    }
                } else {
                    console.log(res["data"]["msg"]);
                }
            } else {
                console.log("友链获取失败! 网络错误");
            }
        }
    };
    ajax.send(null);
}


function loadSideBarTalks(id, url, limit) { //id=class name
    var uri = url + "/pub/talks/?page=1&limit=" + limit;
    var loadStyle = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">说说加载中...</p></div>';
    for (let i = 0; i < document.getElementsByClassName(id).length; i++) {
        document.getElementsByClassName(id)[i].innerHTML = loadStyle;
    }
    document.getElementsByClassName(id)[1]
    var ajax;
    try {
        // Firefox, Opera 8.0+, Safari
        ajax = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("糟糕,你的浏览器不能上传文件!");
                return false;
            }
        }
    }
    ajax.open("get", uri, true);
    ajax.setRequestHeader("Content-Type", "text/plain");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var res = JSON.parse(ajax.response);
                if (res["status"]) {
                    var talks = res["data"];
                    for (let i = 0; i < document.getElementsByClassName(id).length; i++) {
                        document.getElementsByClassName(id)[i].innerHTML = '';
                    }
                    for (let i = 0; i < talks.length; i++) {
                        var item = talks[i];
                        var date = new Date(item.time * 1000);
                        for (let j = 0; j < document.getElementsByClassName(id).length; j++) {
                            document.getElementsByClassName(id)[j].innerHTML +=
                                '<article class="media"><div class="media-content">' +
                                '<p class="title"><a href="#' + item.id + '">' + changeContent(item.content) + '</a></p>' +
                                '<p class="date">' + item.tags.join() + ' / ' + date.getFullYear() + "-" +
                                (date.getMonth() < 9 ? 0 : "") + (date.getMonth() + 1) + "-" + date.getDate() + '</p>' +
                                '</div></article>';
                        }
                    }
                } else {
                    console.log(res["data"]["msg"]);
                }
            } else {
                console.log("友链获取失败! 网络错误");
            }
        }
    };
    ajax.send(null);
}

// 从 butterfly 主题借鉴
// https://github.com/jerryc127/hexo-theme-butterfly/blob/dev/layout/includes/third-party/newest-comments/twikoo-comment.pug
function changeContent(content) {
    if (content === '') return content;
    content = content.replace(/<[^>]+>/g, ''); // remove html tag
    if (content.length > 150) {
        content = content.substring(0, 150) + '...';
    }
    return content;
}