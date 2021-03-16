/*
 * @Author: sun_ping
 * @Date: 2021-03-12 10:34:30
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-12 11:10:40
 * @Description: 
 */
var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    console.log(req.headers)
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin,content-length,referer,No-Cache,accept-language,cookie,X-Requested-With,origin,X-E4M-With,cookieorigin,x-forwarded-for,Pragma,Last-Modified,cookieOrigin,accept,x-real-ip,Cache-Control,host,If-Modified-Since,content-type,Expires,accept-encoding,user-agent,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Expose-Headers",'Cache-Control,Content-Language,Content-Length,Content-Type,Expires,Last-Modified,Pragma')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/', (req, res) => {
        res.cookie('isVisit', 1, {maxAge: 60 * 1000, httpOnly: true}) // 该处是设置 cookie 与 httpOnly 
        res.send('欢迎初次光临')
   
});
app.listen(4000);