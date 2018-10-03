'use strict';
const path = require('path');

const adUrl = escape("http://www.julyedu.com/weekend/train6?from=numpy");
const adJump = "window.open(\\\"http:\/\/gg.numpy.org.cn\/jump.php?from=\\\"+window.location.href+\\\"&url="+ adUrl +"\\\")";

module.exports = {
    doc: {
        name: "NumPy 中文文档",
        description: "这是NumPy官方的中文文档，NumPy是用Python进行科学计算的基础软件包，本文档详细的提供了从用户指南到参考手册全方位的内容，用户可以通过本文档方便快速的查找NumPy的api说明以及用法。",
        version: "1.14.0",
        dir: "",
        outDir: "",
        staticDir: ""
    },
    theme: {
        dir: "", 
        title: "NumPy官方中文文档",
        headHtml: `
        <meta name="description" content="这是NumPy官方的中文文档，NumPy是用Python进行科学计算的基础软件包，本文档详细的提供了从用户指南到参考手册全方位的内容，用户可以通过本文档方便快速的查找NumPy的api说明以及用法。" />
        <meta name="keywords" content="numpy中文文档,numpy中文api,numpy中文手册,numpy中文教程,numpy下载安装,numpy" />
        <link rel="shortcut icon" href="/static/favicon.ico"/>
        `,
        footHtml: `
        <script>
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?a809b6f7e6517af8c15c6076273e80fe";
          var s = document.getElementsByTagName("script")[0]; 
          setTimeout(function () {
            s.parentNode.insertBefore(hm, s);
          }, 100);
        })();
        </script>
        <script>
        (function() {
            var ggStyle = window.document.createElement("style");
            ggStyle.innerHTML = "#gg-box{max-width:900px;padding-left:60px;padding-right:60px;box-sizing:border-box;text-align:center;background-color:#fff}#gg-box img{height:100%;width:100%;opacity:.7;cursor:pointer;transition:opacity .4s}#gg-box img:hover{opacity:.9}"
            document.querySelector(".tea-container").appendChild(ggStyle);
            var gg = window.document.createElement("div");
            gg.id = "gg-box";
            gg.innerHTML = "<img src='/static/images/gg-qiyue-1.png' onclick='${adJump}' />"
            document.querySelector(".tea-container").appendChild(gg);
        })();
        </script>
        <script>
            var comments = window.document.createElement("div");
            comments.style.maxWidth = "900px";
            comments.style.backgroundColor = "#fff";
            comments.style.padding = "20px";
            comments.style.boxSizing = "border-box";
            comments.id = "comments";
            document.querySelector(".tea-container").appendChild(comments);
        </script>
        <script>
        (function() {
            var ipc = window.document.createElement("div");
            ipc.id = "ipcBox";
            ipc.style.fontSize = "12px";
            ipc.style.maxWidth = "900px";
            ipc.style.padding = "20px";  
            ipc.style.boxSizing = "border-box";
            ipc.style.margin = "0px";
            ipc.style.textAlign = "center";
            ipc.style.backgroundColor = "#fff";
            ipc.innerHTML = "<span style='color: #bdbdbd;'>@2018 numpy.org.cn </span><a style='color: #bdbdbd;' href='http://www.miitbeian.gov.cn/' target='_blank'>粤ICP备16025085号-3</a>"
            document.querySelector(".tea-container").appendChild(ipc);
        })();
        </script>
        <script>
            var script = document.createElement("script");
            script.src = "https://code.tellto.cn/dist/js/init.min.js";
            script.setAttribute('data-el', '#comments');
            document.body.appendChild(script); 
        </script>
        `,
        isMinify: true, 
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}