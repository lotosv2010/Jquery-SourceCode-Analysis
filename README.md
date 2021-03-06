# Jquery-SourceCode-Analysis
## 一、项目说明：
### 1.主要用来记录学习和研究JQuery源码的学习笔记及知识点


## 二、每小结知识点总结
> **目录**
>> **[01 源码梳理](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/01-%E6%BA%90%E7%A0%81%E6%A2%B3%E7%90%86.md)**  
>> **[02 (21, 94) 定义了一些变量和函数](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/02-(21%2C%2094)%E5%AE%9A%E4%B9%89%E4%BA%86%E4%B8%80%E4%BA%9B%E5%8F%98%E9%87%8F%E5%92%8C%E5%87%BD%E6%95%B0.md)**  
>> **[03 (96, 283) 给JQ对象，添加一些方法和属性](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/03-(96%2C%20283)%E7%BB%99JQ%E5%AF%B9%E8%B1%A1%2C%E6%B7%BB%E5%8A%A0%E6%96%B9%E6%B3%95%E5%92%8C%E5%B1%9E%E6%80%A7.md)**  
>> **[04 (258, 347) extend:JQ的继承方法](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/04-(258%2C%20347)%20extend%20JQ%E7%9A%84%E7%BB%A7%E6%89%BF%E6%96%B9%E6%B3%95.md)**  
>> **[05 (349, 817) jQuery.extend()扩展一些工具方法](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/05-(349%2C%20817)%20jQuery.extend()%E6%89%A9%E5%B1%95%E4%B8%80%E4%BA%9B%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95.md)**  
>> **[06 (877, 2856) Sizzle 复杂选择器的实现](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/06-(877%2C%202856)%20Sizzle%E5%A4%8D%E6%9D%82%E9%80%89%E6%8B%A9%E5%99%A8%E7%9A%84%E5%AE%9E%E7%8E%B0.md)**  
>> **[07 (2880, 3042) Callbacks 回调对象,对函数的统一管理](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/07-(2880%2C%203042)%20Callbacks%E5%9B%9E%E8%B0%83%E5%AF%B9%E8%B1%A1%E5%AF%B9%E5%87%BD%E6%95%B0%E7%9A%84%E7%BB%9F%E4%B8%80%E7%AE%A1%E7%90%86.md)**  
>> **[08 (3043, 3183) Deferred 延迟对象,对异步的统一管理](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/08-(3043%2C%203183)%20Deferred%E5%BB%B6%E8%BF%9F%E5%AF%B9%E8%B1%A1%2C%E5%AF%B9%E5%BC%82%E6%AD%A5%E7%9A%84%E7%BB%9F%E4%B8%80%E7%AE%A1%E7%90%86.md)**  
>> **[09 (3184, 3295) support 功能检测](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/09-(3184%2C%203295)%20support%E5%8A%9F%E8%83%BD%E6%A3%80%E6%B5%8B.md)**  
>> **[10 (3308, 3652) data() 数据缓存](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/10-(3308%2C%203652)%20data()%E6%95%B0%E6%8D%AE%E7%BC%93%E5%AD%98.md)**  
>> **[11 (3653, 3797) queue()/dequeue() 队列管理](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/11-(3653%2C%203797)%20queue()%26dequeue()%20%E9%98%9F%E5%88%97%E7%AE%A1%E7%90%86.md)**  
>> **[12 (3803, 4299) attr()/prop()/val()/addClass() 对元素属性的操作](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/12-(3803%2C%204299)%20attr()%26prop()%26val()%26addClass()%20%E5%AF%B9%E5%85%83%E7%B4%A0%E5%B1%9E%E6%80%A7%E7%9A%84%E6%93%8D%E4%BD%9C.md)**  
>> **[13 (4300, 5128) on()/trigger() 事件操作的相关方法](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/13-(4300%2C%205128)%20on()%26trigger()%E4%BA%8B%E4%BB%B6%E6%93%8D%E4%BD%9C%E7%9A%84%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.md)**  
>> **[14 (5140, 6057) DOM操作的相关方法](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/14-(5140%2C%206057)%20DOM%E6%93%8D%E4%BD%9C%E7%9A%84%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.md)**  
>> **[15 (6058, 6620) css样式的操作](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/15-(6058%2C%206620)%20css%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%93%8D%E4%BD%9C.md)**  
>> **[16 (6621, 7854) 提交的数据和ajax](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/15-(6058%2C%206620)%20css%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%93%8D%E4%BD%9C.md)**  
>> **[17 (7855, 8584) animate运动的方法](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/15-(6058%2C%206620)%20css%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%93%8D%E4%BD%9C.md)**  
>> **[18 (8585, 8792) offset位置与尺寸的相关方法](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/15-(6058%2C%206620)%20css%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%93%8D%E4%BD%9C.md)**  
>> **[19 (8804, 8821) JQ支持模块化的模式](https://github.com/lotosv2010/Jquery-SourceCode-Analysis/blob/master/doc/Markdown/15-(6058%2C%206620)%20css%E6%A0%B7%E5%BC%8F%E7%9A%84%E6%93%8D%E4%BD%9C.md)**  