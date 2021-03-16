/*
 * @Author: sun_ping
 * @Date: 2021-03-10 14:56:27
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-10 14:57:03
 * @Description: 
 */
function loader(source){
    console.log('post1')
    return source+'//post1'
}
module.exports = loader;