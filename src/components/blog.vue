<template>
<article>
  <div class="article-time">
    <a id="blog-edit" href="" class="am-icon-edit am-icon-fw"></a>
    <i class="am-icon-calculator"></i><span id="blog-time">2016-02-11</span>
  </div>
  <div class="article-head">{{blog.title}}</div>
  <div class="article-body">{{{blog.content | marked}}}</div>
  <div class="article-foot " align="center">
    <div id="giveMoney-box" class="am-dropdown am-dropdown-up" data-am-dropdown>
      <a href="javascript:void(0);" id="giveMoney" class="am-icon-btn am-warning am-dropdown-toggle" data-am-dropdown-toggle>赏</a>
      <p class="am-dropdown-content"><img src="../assets/img/zhifubao.png"></p>
    </div>
  </div>
</article>
<!--PC和WAP自适应版-->
<div data-am-widget="duoshuo" id="duoshuo" class="am-duoshuo am-duoshuo-default"></div>
</template>

<script type="text/javascript">
import marked from '../../static/js/marked.js';
let id, ctx;
export default {
  data() {
    return {
      blog: {
        content: '',
        title: ''
      },
      id: this.$route.query.id
    }
  },
  filters: {
    marked
  },
  created() {
    ctx = this;
    id = this.$route.query.id;
    cData.child("blogs/" + id).on("value", function(result) {
      ctx.blog = result.val();
    });
  },
  ready() {
    $('.am-dropdown').dropdown();
    if (cData.getAuth()) {
      $("#blog-edit").attr("href", "/#!/edit?id=" + id);
      $("#blog-edit").show();
    }
    /* Let DUOSHUO work. If not do this,DUOSHUO can not work.*/
    var el = document.createElement('div'); //该div不需要设置class="ds-thread"
    el.setAttribute('data-thread-key', id); //必选参数
    el.setAttribute('data-title', ctx.blog.title);
    el.setAttribute('data-url', window.location.href); //必选参数
    el.setAttribute('data-author-key', '风云酷小子'); //可选参数
    //if (DUOSHUO) {
    DUOSHUO.EmbedThread(el);
    //}
    $(".am-duoshuo").html(el);
  }
}
</script>
