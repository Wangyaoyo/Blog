---
title: vue项目的初始化
date: 2020-06-04
categories:
 - vue
tags:
 - vue
 - 项目实战
---

## vue-cli的使用
````
vue init webpack vue-music      //初始化webpack配置
cd vue-music
npm install                     //安装依赖
npm run dev                     //启动项目
````

## 目录结构
````
- src
    - api                   //封装参数实现调用
    - common                //通用
         - font                        //字体
         - image                       //图片
         - js                           //jsonp等...
         - styles                      //样式文件
    - base                  //存放基础组件
    - components            //存放业务组件
    - router                //路由配置
    - store                 //数据存储
- App.vue
- main.js                   //入口文件
````

## 数据请求
1.jsonp
````
组件--> 接口层 --> jsonp(封装) --> 线上数据
then()<-- 返回Promise <-- 返回Promise <-- 线上接口
````

2.node后端代理（jsonp请求被服务端拒绝）
http请求头：浏览器向服务器请求数据时携带信息的数据结构
- Accept-Charset:浏览器可接受的字符集
- Accept-Language: 浏览器所希望的语言种类
- Connection: 是否需要持久连接
- Cookie: 用来辨认用户状态的一小段文本信息
- Host: 初始Url中的主机和端口
- Referer: 源页面请求的Url

Http应答头：
- Content-Length: 内容长度
- Content-Type: 文档类型
- Server: 服务器名字

问题：前端无法直接修改host和referer,通过后端代理的方式修改
