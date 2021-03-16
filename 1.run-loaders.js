/*
 * @Author: sun_ping
 * @Date: 2021-03-10 14:46:20
 * @LastEditors: sun_ping
 * @LastEditTime: 2021-03-16 13:59:09
 * @Description:  loader是如何组装和工作的
 */


//1. 为什么说loader执行从下往上 右边->左边
//2. 为什么要分成四种loader   因为loader的配置是分散的，它可能由多个配置文件合并而来
// 3 loader 本身没有区别 只是顺序不一样而已
let path = require('path');
let fs= require('fs');

const  {runLoaders} = require("loader-runner");
let filePath = path.resolve(__dirname,'src','index.js')
let request = `!!inline-loader1!inline-loader2!${filePath}`;
let parts = request.replace(/^-?!+/,'').split('!');
let resource = parts.pop();
let resolveLoader = (loader)=>path.resolve(__dirname,'loaders',loader)
let inlineLoaders = parts.map(resolveLoader);

let rules = [
    {
        test:/\.js$/,
        use:['normal-loader1','normal-loader2']
    },
    {
      test:/\.js$/,
      enforce:'post',
      use:['post-loader1','post-loader2']
   },
   {
    test:/\.js$/,
    enforce:'pre',
    use:['pre-loader1','pre-loader2']
   }
]
let preLoaders = [];
let postLoaders = [];
let normalLoaders =[];
for(let i=0;i<rules.length;i++){
    if(rules[i].test.test(resource)){
        if(rules[i].enforce=='pre'){
            preLoaders.push(...rules[i].use)
        }else if(rules[i].enforce=='post'){
            postLoaders.push(...rules[i].use)
        }else{
            normalLoaders.push(...rules[i].use)
        }
    }
}
preLoaders = preLoaders.map(resolveLoader)
postLoaders = postLoaders.map(resolveLoader)
normalLoaders= normalLoaders.map(resolveLoader)
let loaders = [];
if(request.startsWith('!!')){
    loaders=[...inlineLoaders]
}else if(request.startsWith('-!')){
    loaders=[...postLoaders,...inlineLoaders]
}else if(request.startsWith('!')){
    loaders=[...postLoaders,...inlineLoaders,...preLoaders]

}else{
    loaders=[...postLoaders,...inlineLoaders,normalLoaders,...preLoaders]
}

console.log(loaders)
runLoaders({
	resource,
	loaders,
	context: { name:'sun' },
	readResource: fs.readFile.bind(fs)
	
}, function(err, result) {
	// console.log(err)
    // console.log(result)
})
