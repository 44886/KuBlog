# KuBlog
![kernel](https://img.shields.io/badge/kernel-vue-brightgreen.svg)
![ui](https://img.shields.io/badge/ui-amazeui-brightgreen.svg)
![baas](https://img.shields.io/badge/baas-firebase-brightgreen.svg)
![baas](https://img.shields.io/badge/baas-野狗-brightgreen.svg)
![user](https://img.shields.io/badge/user-1.8k-yellow.svg)


# 为何这么屌？
不需要`php`也不需要`mysql`，更不需要每次更新博文都要用命令来生成静态的文件。

但是，你还是能在线写博文，还是可以弄用户登录，没有权限的人，是不能写博文的！

# 准备
1. 请先在你的电脑上安装好`vue脚手架`。不安也没关系，在本项目目录下，运行： `npm install` 也可以把vue安装到本项目中。
2. 注册一个`fireBase`（国外）或者 `野狗`（国内）Baas平台的账号，这个就是要代替传统的数据库。

# 开始修改
1. 你要修改的部分：`src`目录下，各页面在`components`中。（如果看不懂，请先学`vue`）
2. 接下来要做的事情，就是写前端页面了，数据的交互，用js，`fireBase` 和 `野狗` 都有文档的。
3. 你可以一边修改，一边看结果，在命令行中运行 `npm run dev` ，浏览器能实时预览你的变动。

# 发布
1. 将项目打包成静态文件，运行 `npm run build` ，在 `dist` 目录中就有了最终的文件。
2. 将生成的文件上传到你服务器吧！

# 其他
这个博客于2015年底制作，当时为了用上github的静态服务器，就不想用数据库，于是就运用了fireBase来进行数据存储，使用js就能交互，方便快捷。但是fireBase毕竟是谷歌的，国内使用不方便，于是发现国内原来也有类似的东东——野狗。就是数据存储空间太小了。