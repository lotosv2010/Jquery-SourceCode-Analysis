// jquery-2.03 源码梳理

(function() {
    // (21, 94) 定义了一些变量和函数 jQuery = function(){} [01 - 03]

    // (96, 283) 给JQ对象，添加一些方法和属性 [04 - 12]

    // (285, 347) extend:JQ的继承方法 [13 - 14]

    // (349, 817) jQuery.extend(): 扩展一些工具方法 [ 15 - 28]

    // (877, 2856) Sizzle: 复杂选择器的实现 []

    // (2880, 3042) Callbacks: 回调对象,对函数的统一管理 [29 - 32]

    // (3043, 3183) Deferred: 延迟对象,对异步的统一管理 [33 - 38]

    // (3184, 3295) support: 功能检测 [39 - 42]

    // (3308, 3652) data(): 数据缓存 [43 - 46]

    // (3653, 3797) queue()/dequeue(): 队列管理 [47 - 50]

    // (3803, 4299) attr()/prop()/val()/addClass()...: 对元素属性的操作 [51 - ]

    // (4300, 5128) on()/trigger()...: 事件操作的相关方法

    // (5140, 6057) DOM操作的相关方法:添加 删除 获取 包装...

    // (6058, 6620) css(): 样式的操作

    // (6621, 7854) 提交的数据和ajax(): ajax()/load()/getJson()

    // (7855, 8584) animate(): 运动的方法

    // (8585, 8792) offset()...: 位置与尺寸的相关方法

    // (8804, 8821) JQ支持模块化的模式

    // (8826) window.jQuery = window.$ = jQuery
})()