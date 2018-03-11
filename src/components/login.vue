<template>
<h3>登录</h3>
<form method="post" class="am-form" id="login-form" action="javascript:;">
  <div class="form-group">
    <label for="email">电子邮箱:</label>
    <input type="text" class="form-control" id="email" v-model="email" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="password">登录密码:</label>
    <input type="password" class="form-control" id="pass" v-model="pass" placeholder="Pass Word">
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-default" id="login" v-on:click="login">立即登录</button>
  </div>
</form>
<div class="am-alert am-alert-danger" data-am-alert>
  登录失败，请检查！
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      email: '',
      pass: ''
    }
  },
  created() {},
  methods: {
    login: function() {
      cData.authWithPassword({
        email: this.email,
        password: this.pass
      }, function(error, authData) {
        if (error) {
          $(".am-alert").fadeIn();
        } else {
          $("#menu-login").hide();
          $("#menu-write").show();
          window.history.go(-1);
        }
      });
    }

  }
}
</script>
