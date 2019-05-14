$(function () {
    // 加载主导航
    $('body>#mainNav').load('../page/topNav.html #mainNav>*');
    // 加载footer
    $('body>footer').addClass('text-center mainFooter').html(`
        <span hidden class="d-md-inline">您是第 <img style="position: relative;top:-.125rem" src="http://www.cutercounter.com/hits.php?id=geepfcxo&nd=6&style=4" alt="免费计数器"> 位访客</span>
        &emsp; © 2019 关中刀客在青岛 <a href="http://www.beian.miit.gov.cn" target="_blank"> 鲁ICP备19013610号 </a>
        <a href="https://github.com/daoke0818/myWeb" target="_blank"><i class="iconfont i-github_bg"></i></a>
        <a href="https://gitee.com/daoke0818/myWeb" target="_blank"><i class="iconfont i-gitee_bg"></i></a>
    `);
});