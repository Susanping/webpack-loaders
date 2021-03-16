/*
 * @Author: sun_ping
 * @Date: 2021-03-10 14:55:54
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-10 14:57:44
 * @Description: 
 */
function loader(source){
    console.log('inline1')
    return source+'//inline1'
}
module.exports = loader;