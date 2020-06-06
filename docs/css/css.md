---
title: CSS
date: 2020-06-04
categories:
 - CSS
tags:
 - CSS
---

## BFC：块级格式化上下文
### 目的：形成一个完全独立的空间，让空间中的子元素不会影响到外面的布局
### 如何形成：
- float不为none
- position不为 relative 和 static
- overflow为auto scroll 和 hidden
- display的值为table-cell 或 inline-block

### 解决的问题：
- 解决浮动元素令父元素高度塌陷的问题
- 两栏自适应布局
- 解决外边距垂直方向重合的问题



## flex弹性布局
### 如何设置？
````
display: flex;
或者
dsplay: inline-flex;
````
flex容器：设置了flex的元素
flex项目：容器中的子元素
两条轴：水平的主轴和垂直的交叉轴
### 容器的属性
- flex-direction: 决定主轴的方向：row | column
- flex-wrap: 规定如何换行：nowrap(不换行) | wrap (换行，第一行在上方) | wrap-reverse(第一行在下方)
- flex-flow: 以上两个的简写：默认：row nowrap
- justify-content: 定义项目在主轴上的对齐方式 ： flex-start|flex-end|center|space-between|space-around
- align-items: 定义项目在交叉轴上如何对齐：flex-start|flex-end|center|strech|baseline
- align-content: 定义了多根轴线的对齐方式
### 项目的属性
- 不常用


## line-height和vertical-align