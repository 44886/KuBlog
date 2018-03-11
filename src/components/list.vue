<template>
<article v-for="(index, item) in items">
  <div class="article-time"><span class="am-icon-calculator"></span> {{ item.time }}</div>
  <div class="article-head"><a href="/#!/blog?id={{ index }}">{{ item.title }}</a></div>
  <div class="article-body">
    {{{ item.content.substring(0,300) | marked }}}
  </div>
</article>
</template>

<script type="text/javascript">
import marked from '../../static/js/marked.js'
export default {
  data() {
    return {
      items: {}
    }
  },
  filters: {
    marked
  },
  created() {

  },
  ready() {
    let ctx = this;
    cData.child("blogs").once("value", function(result) {
      /*倒序*/
      let temp = {};
      let keys = Object.keys(result.val());
      keys = keys.reverse();
      for (let i of keys) {
        temp[i] = result.val()[i];
      }
      ctx.items = temp;
    });

  }
}
</script>
