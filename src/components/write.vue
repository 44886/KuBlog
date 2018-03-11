<template>
<h1>撰写博文</h1>

<form method="post" class="am-form" id="login-form" action="javascript:;">
  <div class="form-group">
    <label for="email">文章标题:</label>
    <input type="text" class="form-control" id="title" v-model='title' placeholder="请输入文章标题">
  </div>
  <div class="form-group">
    <label for="password">文章内容:</label>
    <textarea class="md-editor form-control" data-provider="markdown" name="" v-model='content' rows="15" cols="" id="content"></textarea>
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-default" id="post" @click='posts'>立即发表</button>
  </div>
</form>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      content: '',
      title: ''
    }
  },

  created() {

  },
  ready() {
    $(".md-editor").markdown();
  },
  methods: {
    posts: function() {
      let data = {};
      data.title = this.title;
      data.content = this.content;
      let myDate = new Date();
      let today = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
      data.time = datefomart(today) + " " + datefomart(myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(), ":");
      let newBlog = cData.child("blogs").push(data);
      let newId = newBlog.key();
      window.location = '/#!/blog?id=' + newId;
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
