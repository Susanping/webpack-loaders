/*
 * @Author: sun_ping
 * @Date: 2021-03-10 14:56:14
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-10 14:57:25
 * @Description: 
 */
function loader(source){
    console.log('normal1')
    return source+'//normal1'
}
module.exports = loader;