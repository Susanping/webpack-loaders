/*
 * @Author: sun_ping
 * @Date: 2021-03-10 14:54:16
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-10 14:55:10
 * @Description: 
 */
function loader(source){
    console.log('prev1')
    return source+'//prev1'
}
module.exports = loader;