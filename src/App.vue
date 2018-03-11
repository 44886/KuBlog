<template>
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-3" id="userinfo">
    <div class="bigImg">
    </div>
    <div class="userinfo-view">
      <div class="head">
        <a href="/#!/list"><img src="assets/img/head.jpg"></a>
      </div>
      <div class="name">风云酷小子</div>
      <div class="des">江东弟子今犹在，肯为君王卷土来！</div>
      <div class="menu am-dropdown am-dropdown-up" data-am-dropdown>
        <a data-am-dropdown-toggle class="am-icon-reorder am-icon-lg am-dropdown-toggle" href="javascript:void(0);"></a>
        <ul class="am-dropdown-content">
          <li class="am-dropdown-header">酷·博客·菜单</li>
          <li><a href="http://www.44886.com">首页</a></li>
          <li><a href="/#!/list">博文列表</a></li>
          <li class="am-divider"></li>
          <li id="menu-login"><a href="/#!/login">登录</a></li>
          <li id="menu-write"><a href="/#!/write">写文章</a></li>
        </ul>
      </div>
      <div class="sns">
        <a href="#" target="_blank" class="am-icon-btn am-icon-twitter"></a>
        <a href="javascript:void(0)" class="am-icon-btn am-icon-weixin" data-am-modal="{target: '#doc-modal-1'}"></a>
        <a href="http://weibo.com/wapgh" target="_blank" class="am-icon-btn am-icon-weibo"></a>
      </div>
    </div>
  </div>
  <div class="am-u-sm-12 am-u-md-9" id="subPage">
    <router-view></router-view>
  </div>
</div>
<div class="global-tools">
  <div id="go-top" href="!" title="回到顶部" class="am-icon-btn am-icon-arrow-up am-secondary"></div>
</div>
<div class="am-modal" tabindex="-1" id="doc-modal-1">
  <div class="am-modal-dialog">
    <div class="am-modal-hd">关注我的微信
    </div>
    <div class="am-modal-bd">
      <img src="assets/img/weixin.png" />
    </div>
    <div class="am-modal-footer">
      <span class="am-modal-btn">确定</span>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {

  created() {
    if (cData.getAuth()) {
      setTimeout(function() {
        $("#menu-login").hide();
        $("#menu-write").show();
      }, 1000);
    }
  },
  ready() {
    $('.am-dropdown').dropdown();
  }

}
</script>
