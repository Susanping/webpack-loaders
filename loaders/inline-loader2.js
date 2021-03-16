/*
 * @Author: sun_ping
 * @Date: 2021-03-10 14:56:04
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-10 14:57:52
 * @Description: 
 */
function loader(source){
    console.log('inline2')
    return source+'//inline2'
}
module.exports = loader;