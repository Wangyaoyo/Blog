---
title: vue-router
date: 2020-06-04
categories:
 - vue
tags:
 - vue
 - vue-router
 - 项目实战
---

## 使用
````
//router/index.js
import Router from 'vue-router'
//注册
Vue.use(Router)        
//引入组件然后配置
export default new Router({
    配置路径及组件
})

//main.js
import router from './router'
new Vue({
   el: '#app',
   router,
   store,
   render: h => h(App)
})

//App.vue
<router-view></router-view>

//实现切换
<router-link tag="div" class="" to="path"></router-link>
````

## 配置router的要素：
- path与组件的映射
- 引入
- link
- view
