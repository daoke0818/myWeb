$(function () {
    setTimeout(function () {
        $('html>head>title').after('<link rel="stylesheet" href="//at.alicdn.com/t/font_880295_s7rtthy10q.css">')
    },500);

    // 加载主导航
    $('body>#mainNav').load('../page/topNav.html #mainNav>*',function () {

    });

    // video标签写上autoplay属性会导致即使隐藏了整个标签，仍然会在手机QQ浏览器中自动播放出来，所以只能采取如下办法来处理
    if($(window).width()<576){
        $('body').prepend(`
        <div class="bgVideo">
            <h1 style="position: absolute;left: 99999px;display: none">关中刀客在青岛的博客首页</h1>
        </div>
    `);
    }else{
        $('body').prepend(`
        <div class="bgVideo">
            <h1 style="position: absolute;left: 99999px;display: none">关中刀客在青岛的博客首页</h1>
            <video autoplay class="d-md-block" loop src="video/SF_SutroBaths-4K_nimia_573584_768_ZH-CN.mp4"></video>
        </div>
    `);
    }

    // 加载footer
    $('body>footer').addClass('text-center mainFooter').html(`
        <span hidden class="d-md-inline">网站访问次数：<img style="position: relative;top:-.125rem" src="http://www.cutercounter.com/hits.php?id=geepfcxo&nd=6&style=4" alt="免费计数器"></span>
        &emsp; © 2019 关中刀客在青岛 <a href="http://www.beian.miit.gov.cn" target="_blank"> 鲁ICP备19013610号 </a>
        <a href="https://github.com/daoke0818/myWeb" target="_blank" title="github上的源码"><i class="iconfont i-github_bg"></i></a>
        <a href="https://gitee.com/daoke0818/myWeb" target="_blank" title="码云上的源码"><i class="iconfont i-gitee_bg"></i></a>
    `);

    // 所有外链在新窗口打开
    setTimeout(function () {
        $('body:not("#index") :not("#mainNav a") ').filter((index,item)=>{
            console.log(index,$(item).attr('href'));
            const href = $(item).attr('href') || '';
            return href.startsWith('http')
                &&!$(item).find('i').hasClass('i-gitee_bg')
                &&!$(item).find('i').hasClass('i-github_bg')
                &&!$(item).hasClass('contact-item')
                &&!$(item).hasClass('logo')
                &&!$(item).parent().hasClass('card')
        }).append('<i class="iconfont i-wailian"></i>').attr('target','_blank')
    },500)
});
