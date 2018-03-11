// src/main.js
import Vue from 'vue';
import App from './App.vue';
import List from './components/list.vue';
import Blog from './components/blog.vue';
import Login from './components/login.vue';
import Write from './components/write.vue';
import Edit from './components/edit.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//注册两个插件
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter();
// 路由map
router.map({
  '/': {
    component: List
  },
  '/list': {
    component: List
  },
  '/blog': {
    component: Blog
  },
  '/login': {
    component: Login
  },
  '/write': {
    component: Write
  },
  '/edit': {
    component: Edit
  }
});
router.redirect({
  '*': '/list'
});
router.start(App, 'app');
