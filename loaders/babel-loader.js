/*
 * @Author: sun_ping
 * @Date: 2021-03-10 13:31:46
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-12 10:45:54
 * @Description: 
 */
// source  上一个loader给我这个loader的内容或者最原始模块内容

//loader
const core = require('@babel/core');
function loader(source,inputSourceMap,data){
 const options = {
     presets:['@babel/preset-env'],
     inputSourceMap,
     sourceMaps:true,
     filename:this.request.split('!').split('!')
 }
 let {code,map,ast} = core.transform(source,options);
 return this.calllback(null,code,map,ast)
}
module.exports = loader
/**
 * 
 * 当需要返回多个值的时候需要使用 this.calllback来传递多个值
 * 当需要返回一个值 可以直接return
 * map可以进行代码调试，debugger的时候可以看到源代码
 * ast 给webpackm,直接分析
 * 
 */