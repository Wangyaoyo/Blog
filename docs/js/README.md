---
title: js相关
date: 2020-05-27
categories:
 - js
tags:
 - node
 - js
---

#### Node的优势：

- 脱离浏览器运行JS
- 编写API
- 前端工程化工具webpack等强依赖于node
- 用于中间层服务器的实现：
  - 性能大大提高（运行在Chrome's V8 JavaScript engine），异步IO
  - 处理数据，减轻后端压力
  - 安全性提高，起到保护后端的作用

#### Node 的使用

1、环境搭建：

​     官网下载稳定版本

```
node -v		   //测试是否安装
node a.js      //直接运行 js文件
```

2、NPM包管理

​     用来管理js引入的依赖

```
npm init        	  //在当前目录下创建package.json文件
npm install jquery    //安装所需的包  简写install i
npm uninstall jquery  //卸载所需的包  简写install un
//以上命令同样适用于cnpm （淘宝镜像）
```

3、Node中的模块（三大模块）

- 全局模块

```
process.env        //得到环境变量
process.argv
```

- 系统模块
  - path: 处理文件路径和目录路径的实用工具
  - fs：用于文件读写操作


```node
//引入系统模块
let path = require('path');
//打印目录
console.log(path.dirname('/node/a/b/c/1.jpg'));   /node/a/b/c
//打印文件名
console.log(path.basename('/node/a/b/c/1.jpg'));  1.jpg
//打印扩展名
console.log(path.extname('/node/a/b/c/1.jpg'));    .jpg

//path.resolve函数中的每个参数从左往右相当于在当前目录下执行一个cd xx
path.resolve('/node/a/b/c','./d')
//最有用的用法： __dirname得到运行文件的文件名 这样就更方便自己的代码在别人的电脑上运行也不出错
path.resolve(__dirname,'index.js');

```


```node
//引入系统模块
let fs = require('fs');
//fs.readFile() : 第一个参数：待读取文件名；  第二个文件名：回调函数
fs.readFile('./a.txt',(err,data) => {
   if(err){
     console.log(err);
   }else{
     console.log(data.toString());
   }
})

//fs.writeFile() : 第一个参数：写入文件名；   第二个文件名:写入内容；  第三个文件名：回调函数
fs.writeFile('./b.txt','薪水面谈',(err) => {
  if(err)
    throw err;
  }
}
```

- 自定义模块：-
  - require自己封装的模块
  - exports
  - module
  - require

```
require: 负责导入一个路径下的js文件
	1.如果有路径，就去路径里面找
	2.没有的话就去node_modules里面找
	3.再去node的安装目录里找
用法：
const My = require(./my.js)
```
```
export:导出该js文件中的变量
用法：
export.a = 1;
export.b = 2;
```

```
module:用于批量导出
module.export = {			//效果同上
    a:1;
    b:2;
}  
或者：
//mod
module.exports = function(){
  	console.log(123);
}			
//再在另一个js文件中：
const mod1 = require(./mod);
mod1();					//打印出123
```

