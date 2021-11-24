// 1.使用ES6模块化的语法导入jquery
import $ from 'jquery'

// 2.实现隔行变色的效果
$(function() {
    $('li:odd').css('background', 'yellow')
    $('li:even').css('background', 'skyblue')
})