/*ziye 

说明：微信扫码 https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziye333.png 获取授权  




一，第一次进一定先授权，第一次进一定先授权，第一次进一定先授权，

二，将hostname复制粘贴进配置文件

三，将重写复制到 rewrite_local 下，开启软件，进对应程序获取ck（会卡住，但是可以获取ck），目前一共7个打卡小程序，

建议新建配置片段，获取ck后禁用，
换号则复制js文件，修改jbid的值就可以了



ck=1

微打卡
微早起打卡
音乐打卡
早起打卡
圈子打卡
京优打卡
每天打卡



ck=2

云端打卡
久诺打卡

用本地js   改ck=2  获取ck





时间设置  

！！！删除第一个*后面的空格！！！   自行模拟人性化修改选择 


5位  第一位为分 填 10-59     如

* /12 6-23 * * * dkhjziye925.js           
6点到23点 0 12 24 36 48 运行1次  


6位  第一位为秒 填 0-59      第二位为分 填 10-59   如

23 * /13 6-23 * * * dkhjziye925.js        
6点到23点 0 13 26 39 52 的23秒运行1次



打卡限速默认设置10分钟一次，可根据情况修改，



hostname=zm.shujumagician.com,www.baimaa.com,ph0001.hezyq.com,daka.isfx.cn,wq.inqan.com,www.zq221727.com,cps.0day.fun,am.kuqi5.cn,w.1688sywh.com,

############## 圈x

//微打卡  微早起打卡
https:\/\/zm\.shujumagician\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js

//音乐打卡
https:\/\/www\.baimaa\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js


// 早起打卡
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js



//圈子打卡
https:\/\/wq\.inqan\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js




//京优打卡
https:\/\/www\.zq221727\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js




//云端打卡
https:\/\/cps\.0day\.fun\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js






//久诺打卡
https:\/\/am\.kuqi5\.cn\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js




//每天打卡
https:\/\/w\.1688sywh\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js












############## loon

//微打卡  微早起打卡
http-request https:\/\/zm\.shujumagician\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true

//音乐打卡
http-request https:\/\/www\.baimaa\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true


// 早起打卡
http-request https:\/\/ph0001\.hezyq\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true




//圈子打卡
http-request https:\/\/wq\.inqan\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true




//京优打卡
http-request https:\/\/www\.zq221727\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true




//云端打卡
http-request https:\/\/cps\.0day\.fun\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true







//久诺打卡
http-request https:\/\/am\.kuqi5\.cn\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true




//每天打卡
http-request https:\/\/w\.1688sywh\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true










############## surge

//微打卡  微早起打卡
微打卡  微早起打卡 = type=http-request,pattern=https:\/\/zm\.shujumagician\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true

//音乐打卡
音乐打卡 = type=http-request,pattern=https:\/\/www\.baimaa\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true


// 早起打卡
早起打卡 = type=http-request,pattern=https:\/\/ph0001\.hezyq\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true



//圈子打卡
圈子打卡 = type=http-request,pattern=https:\/\/wq\.inqan\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true





//京优打卡
京优打卡 = type=http-request,pattern=https:\/\/www\.zq221727\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true





//云端打卡
云端打卡 = type=http-request,pattern=https:\/\/cps\.0day\.fun\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true





//久诺打卡
久诺打卡 = type=http-request,pattern=https:\/\/am\.kuqi5\.cn\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true





//每天打卡
每天打卡 = type=http-request,pattern=https:\/\/w\.1688sywh\.com\/*,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/dkhjziyeck.js, requires-body=true













*/

//////////////////////////////////////////正文

const CK=2// 修改ck 获取对应程序cookie

const jsname = '打卡合集'
const $ = new Env(jsname)//模版引用
const jbid =1// 换号则复制js，修改jbid的值就可以了
const notify = 1; //通知开为1，关为0
const logs = 0; // 日志开为1，关为0




const wdkname = "微打卡";//程序名
const wdkid = 2;//ck id
const wdkcs = 20;//打卡次数
const wdktx = 10;//提现标准
const wdkxs = 10;//限速标准.单位为分钟
const wdkdh = 13000;//兑换标准
const wdkdhid = 9;//兑换id
const wdkdhsp = "腾讯月卡";//兑换商品
const wdkkey = "wdkkey"+jbid  //保存ck
const wdkurl =$.getdata(wdkkey)//读取ck







const wzqdkname = "微早起打卡";//程序名
const wzqdkid = 8;//ck id
const wzqdkcs = 20;//打卡次数
const wzqdktx = 10;//提现标准
const wzqdkxs = 10;//限速标准.单位为分钟
const wzqdkdh = 13000;//兑换标准
const wzqdkdhid = 10;//兑换id
const wzqdkdhsp = "腾讯月卡";//兑换商品
const wzqdkkey = "wzqdkkey"+jbid  //保存ck
const wzqdkurl =$.getdata(wzqdkkey)//读取ck




const yydkname = "音乐打卡";//程序名
const yydkid = 11;//ck id
const yydkcs = 10;//打卡次数
const yydktx = 10;//提现标准
const yydkxs = 10;//限速标准.单位为分钟
const yydkdh = 10;//兑换标准
const yydkdhid = 22;//兑换id
const yydkdhsp = "1元";//兑换商品
const yydkkey = "yydkkey"+jbid  //保存ck
const yydkurl =$.getdata(yydkkey)//读取ck










const zqdkname = "早起打卡";//程序名
const zqdkid = 597;//ck id
const zqdkcs = 20;//打卡次数
const zqdktx = 10;//提现标准
const zqdkxs = 10;//限速标准.单位为分钟
const zqdkdh = 5000;//兑换标准
const zqdkdhid = 6;//兑换id
const zqdkdhsp = "1元";//兑换商品
const zqdkkey = "zqdkkey"+jbid  //保存ck
const zqdkurl =$.getdata(zqdkkey)//读取ck




const qzdkname = "圈子打卡";//程序名
const qzdkid = 9;//ck id
const qzdkcs = 20;//打卡次数
const qzdktx = 10;//提现标准
const qzdkxs = 10;//限速标准.单位为分钟
const qzdkdh = 3500;//兑换标准
const qzdkdhid = 4;//兑换id
const qzdkdhsp = "50元话费";//兑换商品
const qzdkkey = "qzdkkey"+jbid  //保存ck
const qzdkurl =$.getdata(qzdkkey)//读取ck





const jydkname = "京优打卡";//程序名
const jydkid = 39;//ck id
const jydkcs = 5;//打卡次数
const jydktx = 10;//提现标准
const jydkxs = 10;//限速标准.单位为分钟
const jydkdh = 3500;//兑换标准
const jydkdhid = 4;//兑换id
const jydkdhsp = "50元话费";//兑换商品
const jydkkey = "jydkkey"+jbid  //保存ck
const jydkurl =$.getdata(jydkkey)//读取ck




const yddkname = "云端打卡";//程序名
const yddkid = 2;//ck id
const yddkcs = 10;//打卡次数
const yddktx = 10;//提现标准
const yddkxs = 10;//限速标准.单位为分钟
const yddkdh = 3500;//兑换标准
const yddkdhid = 4;//兑换id
const yddkdhsp = "50元话费";//兑换商品
const yddkkey = "yddkkey"+jbid  //保存ck
const yddkurl =$.getdata(yddkkey)//读取ck






const jndkname = "久诺打卡";//程序名
const jndkid = 8;//ck id
const jndkcs = 10;//打卡次数
const jndktx = 10;//提现标准
const jndkxs = 10;//限速标准.单位为分钟
const jndkdh = 3500;//兑换标准
const jndkdhid = 4;//兑换id
const jndkdhsp = "50元话费";//兑换商品
const jndkkey = "jndkkey"+jbid  //保存ck
const jndkurl =$.getdata(jndkkey)//读取ck




const mtdkname = "每天打卡";//程序名
const mtdkid = 57;//ck id
const mtdkcs = 10;//打卡次数
const mtdktx = 10;//提现标准
const mtdkxs = 10;//限速标准.单位为分钟
const mtdkdh = 3500;//兑换标准
const mtdkdhid = 4;//兑换id
const mtdkdhsp = "50元话费";//兑换商品
const mtdkkey = "mtdkkey"+jbid  //保存ck
const mtdkurl =$.getdata(mtdkkey)//读取ck











//CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie()
} 





  




//CK获取模块
function GetCookie() {

/////////////////////CK=1

if (CK==1)
{
	
if ($request && $request.url.match(/i=2&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const wdkurl =  $request.url
  $.log(`wdkurl:${wdkurl}`)
  if (wdkurl) $.setdata(wdkurl, wdkkey)
  $.msg(wdkkey, `获取cookie: 成功🎉`, ``)
}






if ($request && $request.url.match(/i=8&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const wzqdkurl =  $request.url
  $.log(`wzqdkurl:${wzqdkurl}`)
  if (wzqdkurl) $.setdata(wzqdkurl, wzqdkkey)
  $.msg(wzqdkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=11&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const yydkurl =  $request.url
  $.log(`yydkurl:${yydkurl}`)
  if (yydkurl) $.setdata(yydkurl, yydkkey)
  $.msg(yydkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=597&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const zqdkurl =  $request.url
  $.log(`zqdkurl:${zqdkurl}`)
  if (zqdkurl) $.setdata(zqdkurl, zqdkkey)
  $.msg(zqdkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=9&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const qzdkurl =  $request.url
  $.log(`qzdkurl:${qzdkurl}`)
  if (qzdkurl) $.setdata(qzdkurl, qzdkkey)
  $.msg(qzdkkey, `获取cookie: 成功🎉`, ``)
}




if ($request && $request.url.match(/i=39&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const jydkurl =  $request.url
  $.log(`jydkurl:${jydkurl}`)
  if (jydkurl) $.setdata(jydkurl, jydkkey)
  $.msg(jydkkey, `获取cookie: 成功🎉`, ``)
}





if ($request && $request.url.match(/i=39&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const mtdkurl =  $request.url
  $.log(`mtdkurl:${mtdkurl}`)
  if (mtdkurl) $.setdata(mtdkurl, mtdkkey)
  $.msg(mtdkkey, `获取cookie: 成功🎉`, ``)
}






}








if (CK==2)
{
	
	
	
	
	
if ($request && $request.url.match(/i=2&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const yddkurl =  $request.url
  $.log(`yddkurl:${yddkurl}`)
  if (yddkurl) $.setdata(yddkurl, yddkkey)
  $.msg(yddkkey, `获取cookie: 成功🎉`, ``)
}



	
if ($request && $request.url.match(/i=8&/))
if ($request && $request.url.match(/action=today&contr=index/))
{const jndkurl =  $request.url
  $.log(`jndkurl:${jndkurl}`)
  if (jndkurl) $.setdata(jndkurl, jndkkey)
  $.msg(jndkkey, `获取cookie: 成功🎉`, ``)
}






}








}














// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

