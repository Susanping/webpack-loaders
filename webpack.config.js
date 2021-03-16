/*
 * @Author: sun_ping
 * @Date: 2021-03-10 13:30:37
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-16 13:12:37
 * @Description: 
 */
const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    devtool:'inline-source-map',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist')
    },
    resolveLoader:{
      alias:{
        //   'babel-loader':path.resolve('./loaders/babel-loader.js'),
        //    modules:[path.resolve('./loaders'),'node_modules']
      }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['normal-loader1','normal-loader2']
                // use:[path.resolve('./loaders/babel-loader.js')]
            },
            {
              test:/\.js$/,
              enforce:'post',
              use:['post-loader1','post-loader2']
              // use:[path.resolve('./loaders/babel-loader.js')]
           },
           {
            test:/\.js$/,
            enforce:'pre',
            use:['pre-loader1','pre-loader2']
            // use:[path.resolve('./loaders/babel-loader.js')]
         },
        ]
    },
    plugins:[
        new HtmlWepackPlugin()
    ]
}

// 使用自定义loader 三种方法
//1
