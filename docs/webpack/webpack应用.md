---
title: webpack应用
date: 2020-06-04
categories:
 - webpack
tags:
 - webpack
 - 项目实战
---

## 配置别名
````
//webpack.base.conf.js
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.export = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('src'),
          'common':resolve('src/common'),
          'components':resolve('src/components'),
          'api': resolve('src/api'),
          'base': resolve('src/base')
        }
      },
}
````