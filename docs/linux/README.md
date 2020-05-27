---
title: linux命令
date: 2020-05-27
categories:
 - linux
tags:
 - linux
 - pm2
 - deploy
---

## 常用命令
展示目录下文件列表 ： ls  
查看目录下文件权限 ： ll   
动态查看日志 ： tail  -f   日志名称   
查看完整文件 ： cat  文件名称
查看当前应用进程 ： ps  -ef | grep  nginx
根据进程号杀死服务 ： kill  -9  进程号
根据进程号查询对应的端口号 ： netstat  -nap | grep 进程号
根据端口号查询对应的进程号 ： netstat  -nap | grep 端口号
关停服务   ./xx.jar  stop
启动服务   ./xx.jar  start 
查看当前服务器剩余资源：free  -m 
查看当前文件夹大小 ：du  -sh  
查看当前目录下所有文件的大小 ： du -sh  *
删除文件 ： rm  -f 文件名
重命名文件 ： mv  老文件名  新文件名

## 安装pm2 

基于node.js的进程管理器：守护、监控、日志的一整套完整的功能。

```npm install -g pm2```

```js
pm2 stop
pm2 list 
pm2 describe id 启动程序的详细信息 pm2 describe id
```

## 部署项目
安装git
安装node
安装nginx

  ```js
  cd /usr/local/src
  wget http://nginx.org/download/nginx-1.1.10.tar.gz
  tar -zxvf nginx-1.1.10.tar.gz
  cd nginx-1.1.10
  ./configure
  make      #make的过程是把各种语言写的源码文件，变成可执行文件和各种库文件
  make install#make install是把这些编译出来的可执行文件和库文件复制到合适的地方
  
  ps -ef|grep nginx 		#看是否启动
  ```

  nginx常用操作

  ```js
  nginx -s reload  ：修改配置后重新加载生效
  nginx -s reopen  ：重新打开日志文件
  nginx -t -c /path/to/nginx.conf 测试nginx配置文件是否正确
  
  关闭nginx：
  nginx -s stop  :快速停止nginx
           quit  ：完整有序的停止nginx
  
  其他的停止nginx 方式：
  
  ps -ef | grep nginx
  
  kill -QUIT 主进程号     ：从容停止Nginx
  kill -TERM 主进程号     ：快速停止Nginx
  pkill -9 nginx          ：强制停止Nginx
  ```

- 修改线上配置

  ```js
  const url = debug ? '/api/lyric' : 'http://主机IP/api/lyric'
  ```
  config/index.js   build下的

  ```js
  assetsPublicPath  修改为空
  
  含义：
  assetsRoot : 在当前目录的上一级 的 dist目录下输出资源文件
  assetsSubDirectory: 把所有的静态资源打包到 dist下的 assets文件夹下
  assetsPublicPath :代表生成的index.html文件，里面引入资源时，路径前面要加上 assetsPublicPath的值
  ```

- 配置nginx.conf文件

  ```js
  proxy_pass 表示你所有访问 你的域名/music/ 的请求都代理到 127.0.0.1:9000 上了。还记得我们刚才起的 node 服务吗，这里的端口号要对上，对于我这个例子而言，请求 http://主机名/music/ 全部代理到我的 node 服务，所以就可以打开页面了。ngnix 配置完成记得保存，然后在命令行运行 nginx -s reload 重启 nginx 服务。
  
  如果你想配置多个项目，就配置不同的 location 代理到不同的端口即可。
  ```

- 部署

  ```js
  git pull 拉取代码
  npm install 安装依赖
  npm run buid 打包项目
  pm2管理node服务 pm2 start prod.server.js -i 0
  启动nginx ./usr/local/nginx/sbin/nginx
  ```

- 踩坑记：

  未置空```assetsPublicPath```

  访问项目报错：502 Bad Gateway  如下设置：

  ```js
  setsebool -P httpd_can_network_connect 1 #(并重启虚拟机)
  ```

  端口未开，防火墙添加端口通过
  2020.05.03 修改了nginx.conf文件没有重启nginx
