# test-for-yzw-webpack-numbers

> 测试在项目中引入新建的yzw-webpack-numbers包

[来源](http://www.css88.com/doc/webpack2/guides/author-libraries/)
[参考](https://github.com/kalcifer/webpack-library-example)

执行
```
npm install
```

## 使用方式一：
当库通过 script 标签引入的时候，可以通过全局变量 webpackNumbers 来使用
index.html引入yzw-webpack-numbers
```
<script src="./node_modules/yzw-webpack-numbers/dist/yzw-webpack-numbers.js"></script>
```
浏览器打开index.html

## 使用方式二：
库可以在 Node.js 中使用

testNode.js引入yzw-webpack-numbers
```
var yzwWebpackNumbers = require('yzw-webpack-numbers');
```
执行
```
node testNode
```
# test-for-yzw-webpack-numbers
