---
title: ES6语法
date: 2020-05-27
categories:
 - ES6
tags:
 - ES6
---

## 一、let命令
### 1、作用范围
用let声明变量，只在它所在的代码块有效：适用于for循环

### 2、不存在变量提升
声明的变量必须在声明之后使用，否则就会报错ReferenceError

### 3、暂时性死区
凡是区块中存在let和const命令，这个区块对这些声明的变量，一开始就形成封闭作用域，在这之前使用，就报错
简而言之：在let声明变量之前，该变量都是不可用的，称为暂时性死区（temporal dead zone ：TDZ）
本质：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有它声明的代码出现之后，才可以获取和使用。

### 4、不允许在相同作用域内重复声明一个变量
```js
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```
故而不能在函数内部重新声明形参

## 二、const命令
### 1、基本用法
- const声明一个只读的常量，一旦声明，常量的值就不能改变
- 声明时必须立刻赋值，否则报错
- 与let相似，只在声明所在的块级作用域内有效
- 在声明之前，同样的不可调用
- 不可重复声明
注意：const声明的变量作为一个地址，不是指向的值不可以改变，而是指向不可以改变。当用const声明一个数组的时候，可以添加属性，但不能将另一个数组赋值给它。如果真的想将对象冻结，应该用object.freeze().

```js
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```
## 三、ES6声明变量的六种方法
ES5两种：var、function
ES6添加：let 、const、import、class

## 四、顶层对象的属性
ES5中：顶层对象的属性（window.a）和全局变量（a）是等价的

缺点：
- 不利于模块化编程
- 误操作创建全局变量
- 编译时无法报错，只有运行时才能知道

ES6开始：全局变量将逐步与顶层对象的属性脱钩

```js
var a = 1;
window.a    //1

let b = 1;
window.b    //undefined
```

## 五、global对象

参见如何取到global对象
[http://es6.ruanyifeng.com/#docs/let#global-对象]()

## 六、数组的解构赋值

ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，被称为解构

```js
let [a,b,c] = [1,2,3];
```

表示：可以从对象中提取值，按照对应位置，对变量赋值

本质：模式匹配：只要等号两边的模式相同，左边的变量就会被赋予对应的值。

条件：等号右边必须是可遍历的结构（转为对象以后具备iterator接口）

```js
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"
```

```js
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]
 
let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
```

解构不成功，变量的值就为undefined

```js
let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4
```
按照从左到右依次解构

## 七、模块语法
JavaScript缺少模块化体系，无法将一个大程序拆分成互相依赖的小文件，这对于构建大型项目形成阻碍。
ES6之前：主要的解决方案有，CommonJS和AMD，分别用于服务器和浏览器。
ES6简单的实现了模块功能，完全可以取代CommonJS和AMD，称为浏览器和服务器通用的模块解决方案。
ES6设计思想：尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入输出的变量。
ES6模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
除了静态加载以外，它的优点还有：
- 不再需要UMD模块格式了，将来服务器和浏览器都会支持ES6模块格式。
- 将来浏览器的新API就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
- 不再需要对象作为命名空间（比如Math对象）,未来这些功能可以通过模块提供。

### 1、严格模式

ES6的模块自动采用严格模式，不管有没有在模块头部加上“use strict”

严格模式有以下限制：

- 变量必须声明后再使用
- 函数的参数不能有同名属性
- 不能使用with语句
- 不能对只读属性赋值
- 不能使用前缀0表示八进制数
- 不能删除不可删除的属性
- 不能删除变量delete prop  只能删除属性 delete  global[prop]
- eval 不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.callee
- 不能使用arguments.caller
- 禁止this指向全局对象
- 不能使用fn.caller和fn.arguments获取函数调用的堆栈
- 增加了保留字（protected  static   interface）

严格模式是ES5引入的，不属于ES6

注意：尤其是this的限制，ES6模块中，顶层的this指向undefined，不应该在顶层代码中使用this

### 2、export命令

模块功能主要由两个命令构成：export和import。

export用于规定模块的对外接口

import用于输入其他模块提供的功能

一个模块就相当于一个独立的文件，文件内部的所有变量，外部都无法获取，要想外部能够读取，必须使用export输出该变量。

```js
export var year = 1988;
//或者
var year = 1988;
export {year}
```

```js
var firstName = 'yaoxxx';
var lastName = "yao";
//更清晰的看明白输出了哪些变量
export {firstName, lastName};
```

```js
function f1(){ ... }
function f2(){ ... }
//重命名
export{
   f1 as Fun1,
   f2 as Fun2
}
```

export 命令可以出现在模块的任何位置，只要处于模块顶层就可以。

如果处于块级作用域内，就会报错，import命令也是这样，因为处于条件代码块中，就没办法做静态优化了。

### 3、import命令

使用export命令定义个模块的对外接口之后，其他JS文件就可以通过import命令加载这个模块。

```js
//大括号里面的变量名必须要与导入模块对外接口的名称相同
import {firstName,lastName} from './profile.js'
```

- import命令输入的变量：只读 不允许在引入之后改写
- 但是如果是一个对象，改写它的属性就是允许的。建议不要轻易改变。
- import是编译阶段执行的命令，在代码运行之前
- 由于它是静态执行，故不能使用表达式和变量
- import语句是单例模式，同一个模块只会有一次有效加载

### 4、模块的整体加载：

```js
export function f1(){ ... }
export function f2(){ ... }

//加载该模块:逐一加载
import {f1,f2} from './ff'
//整体加载
import * as ff from './ff'
console.log(ff.f1());                  
```

### 5、export default命令

为给用户提供方便，让他们无需阅读文档就能加载模块，要用到这个命令，作用：模块指定默认输出

```js
export default function(){
    ...
}
```

其他模块加载该模块时，可以用import命令为该匿名函数指定任意名字

```js
import unknowName from './export default'
```

- export  default 命令用于指定模块的默认输出，一个模块只能有一个默认输出，因此该命令在一个文件中只能使用一次。所以在引入的时候import命令不用加大括号。只会唯一对应export default命令
- 就是输出一个叫做default的变量或方法，允许你为他取任意名字

### 6、export和import的复合写法

如果在一个模块先引入再输出该模块，这两条语句可以合并

```js
export { foo, bar } from 'my_module';
```

这里的模块实际并没有导入，只是相当于对外转发了这两个接口，导致当前模块不能直接使用

- 接口改名和整体输出也可以采用这种写法

  ```js
  // 接口改名
  export { foo as myFoo } from 'my_module';
  
  // 整体输出
  export * from 'my_module';
  ```

- 改名为默认接口的写法

  ```js
  export { es6 as default } from './someModule';
  ```

- 同样地，默认接口也可以改名为具名接口。 

  ```js
  export { default as es6 } from './someModule';
  ```

### 7、模块的继承