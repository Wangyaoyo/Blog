---
title: Promise
date: 2020-06-05
categories:
 - ES6
tags:
 - ES6
---

## 定义
是一个构造函数，用于异步编程。
- 方法：all()  reject()  resolve(),原型上有then() catch()等
- 特点：1.三种状态pending(进行中)、fulfilled(已成功)和rejected(已失败)
        2.一旦状态改变，就不会再变。
        
## 使用

````
//在用Promise时一般是包在一个函数中，在需要时去运行
let p = new Promise((resolve,reject)=>{
    if(1){
        resolve(res);
    }else{
        reject(err);
    }
})
//会返回一个Promise对象, 接下来就可以用Promise上的then、catch方法了
p.then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
})
````
- then：两个参数分别接收resolve，reject返回的状态
- catch：1.接收reject的回调  2.resolve异常时
- 精髓：1.在异步操作执行完以后，用链式调用的方式执行回调函数；
- 精髓：2.能够简化层层回调的写法，避免回调地狱，用维护状态，传递状态的方式来使得回调函数能够及时调用，比传递callback函数要简单灵活。
