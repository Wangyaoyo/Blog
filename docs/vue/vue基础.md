---
title: vue基础
date: 2020-06-04
categories:
 - vue
tags:
 - vue
 - 项目实战
---

## vue指令
- v-html:将字符串解析成html标签
- v-text: 直接解析成字符串元素
 
v-if和v-show的区别
- v-show：通过display来切换状态，适合频繁切换
- v-if: 条件为真时才会开始渲染，适合条件不太可能改变的情况

## vue生命周期
- beforeCreate:组件实例化之前执行的函数
- created:组件实例化完毕但页面还未显示
- beforeMount: 组件挂载前，页面仍未显示，但虚拟Dom已经配置
- mounted:组件挂载后，此方法执行后，页面显示
- beforeUpdate: 组件更新前，页面仍未更新，但虚拟dom已经配置
- updated:组件更新，此方法执行后，页面显示
- beforeDestroy:组件销毁前
- destroyed:组件销毁