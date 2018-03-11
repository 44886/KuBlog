<template>
<h1>编辑博文</h1>
<form method="post" class="am-form" id="login-form" action="javascript:;">
  <div class="form-group">
    <label for="email">文章标题:</label>
    <input type="text" class="form-control" id="title" value='{{ title }}' v-model='title' placeholder="请输入文章标题">
  </div>
  <div class="form-group">
    <label for="password">文章内容:</label>
    <textarea class="md-editor form-control" data-provider="markdown" name="" rows="15" cols="" v-model='content' id="content">{{ content }}</textarea>
  </div>
  <div class="form-group">
    <button type="submit" class="am-btn am-btn-success" id="update" @click="update">更新数据</button>
    <button type="submit" class="am-btn am-btn-danger" id="delete" @click="remove">删除本文</button>
  </div>
</form>
</template>

<script type="text/javascript">
let id;
export default {
  data() {
    return {
      content: '',
      title: ''
    }
  },
  created() {
    let ctx = this;
    id = this.$route.query.id;
    cData.child("blogs/" + id).once("value", function(result) {
      if (result == null || result == undefined) {
        alert('有错');
      } else {
        ctx.title = result.val().title;
        ctx.content = result.val().content;
      }
    }, function(err) {
      alert('有错');
    });
  },
  ready() {
    $(".md-editor").markdown();
  },
  methods: {
    update: function() {
      let data = {};
      data.title = this.title;
      data.content = this.content;
      cData.child("blogs/" + id).update(data, function() {
        window.location = '/#!/blog?id=' + id;
      });
    },
    remove: function() {
      if (confirm("真的要删除吗？不能恢复哦。")) {
        cData.child("blogs/" + id).remove(function() {
          window.location = '/#!/list';
        });
      }
    }
  }
}

function datefomart(date, formart) {

  if (!formart) {
    formart = "-";
  }
  var dateArray = date.split("-");
  for (let i in dateArray) {
    if (dateArray[i].length < 2) {
      dateArray[i] = "0" + dateArray[i];
    }
  }
  return dateArray.join(formart);
}
</script>
