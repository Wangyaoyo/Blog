---
title: stylus
date: 2020-06-04
categories:
 - CSS
tags:
 - CSS
 - stylus
---
## 安装依赖
````
package.json:
"stylus":
"stylus-loader":
````

## 定义变量
````
定义在variable.styl:

//颜色规范
$color-bg = #222
$color-theme = #ffcd32
$color-text = #fff
...

//字体规范
$font-size-small = 10px
$font-size-medium = 14px
$font-size-large = 18px

使用：
@import "variable.styl"
background: $color-bg           //语义化
````

## 初始化
````
//index.styl
@import "./reset.styl"
@import "./base.styl"
@import "./icon.styl"

//main.js
import 'common/stylus/index.styl'

//mixin和variable在需要时引入
````
