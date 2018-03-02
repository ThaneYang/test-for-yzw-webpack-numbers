require('lodash');

var yzwWebpackNumbers = require('yzw-webpack-numbers');
// 无法使用import，因为import是ES6的语法，而这个文件是用node来执行的
// import webpackNumbers from './webpack-numbers.js'

var out = function() {
  process.stdout.write('This is the result for numtoword(1) ===' + yzwWebpackNumbers.numToWord(1));
}

out();
