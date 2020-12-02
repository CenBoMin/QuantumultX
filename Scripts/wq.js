
/*ziye


点分享按钮获取cookie

⚠️可能会卡住，但是能获取到cookie，然后注释重写就行了！

hostname=minigame.ucpopo.com


#哇圈
############## 圈x
https:\/\/minigame\.ucpopo\.com\/wasai\/login? url script-request-header wq.js




*/


const jsname='哇圈'
const $ = Env(jsname)

const logs = 1;   //0为关闭日志，1为开启
const notifyInterval=0//0为关闭通知，1为开启
const jbid=1;
const js=1
const dd=200//延迟








const wqurlKey = 'wqurl'+jbid
const wqurlVal = $.getdata(wqurlKey)



const wqheaderKey = 'wqhd'+jbid
const wqheaderVal= $.getdata(wqheaderKey)

const wqbodyKey = 'wqbody'+jbid
const wqbodyVal = $.getdata(wqbodyKey)





var tz=''


//CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
} else {
    !(async () => {
        await wqtake(),
        await wqinfo(),
        await wqsign(),
        await wqunlock1(),
        await wqunlock2(),
        await wqlevelup1(),
        await wqlevelup2(),
        await wqlevelup3(),
        await wqrent(),
        await wqfriend(),
        await showmsg();
    })()
    .catch((e) => sy.logErr(e))
    .finally(() => sy.done())
}


function GetCookie() {

   if($request &&$request.url.indexOf("login?")>=0) {

  const wqurlVal = $request.url
if (wqurlVal)        $.setdata(wqurlVal,wqurlKey)
    $.log(`[${jsname}] 获取url请求: 成功,wqurlVal: ${wqurlVal}`)
$.msg(wqurlKey, `获取url: 成功🎉`, ``)
    
  const wqbodyVal = $request.body
    if (wqbodyVal)        $.setdata(wqbodyVal,wqbodyKey)
    $.log(`[${jsname}] 获取阅读: 成功,wqbodyVal: ${wqbodyVal}`)
$.msg(wqbodyKey, `获取body: 成功🎉`, ``)
    
const wqheaderVal = JSON.stringify($request.headers)
    if (wqheaderVal)        $.setdata(wqheaderVal,wqheaderKey)
    $.log(`[${jsname}] 获取Cookie: 成功,wqheaderVal: ${wqheaderVal}`)
    $.msg(wqheaderKey, `获取header: 成功🎉`, ``)
  

}




  


}




//领取能量
function wqtake() {
return new Promise((resolve, reject) => {


for(let i=0;i<21;i++)
 {
 	 
	setTimeout(()=>{	 

  const towqtakeurl ={url: wqurlVal.replace(/login?/g, `machine/take?machineid=${i+1}&`),

    headers: JSON.parse(wqheaderVal),
   timeout:60000};
   $.post(towqtakeurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 领取能量: ${data}`)
     take =JSON.parse(data)
      
 
if (take.digiccy>=0)
tz+=
'【领取'+(i+1)+'能量】:'+take.digiccy+'\n'







    } )			
    
   },i*dd)



    resolve()

 }
	
   })
  }





//签到
function wqsign() {
return new Promise((resolve, reject) => {

  const towqsignurl =  {url: wqurlVal.replace(/login?/g, `sign/takeAward?`),

    headers: JSON.parse(wqheaderVal),
    //body: wqbodyVal
  timeout:60000};
   $.post(towqsignurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 签到: ${data}`)
     sign =JSON.parse(data)
      if (sign.cash>=0)
 {

tz+='【签到成功】:'+'\n'

}




    resolve()
    })
   })
  }  



//种植
function wqrent() {
return new Promise((resolve, reject) => {



for(let i=0;i<21;i++)
 {
 	 
	setTimeout(()=>{	 


  const towqrenturl = {url: wqurlVal.replace(/login?/g, `machine/rent?machineid=${i+1}&`),

    headers: JSON.parse(wqheaderVal),
  timeout:60000};
   $.post(towqrenturl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 种植: ${data}`)
     rent =JSON.parse(data)
      
var t=rent.expireTime
var cz=t-new Date().getTime()
var CZ=(cz/60000).toFixed(0)
if (rent.output==0)
tz+='【成功种植'+(i+1)+'号】:成熟时间'+CZ+'分钟'+'\n'



    })			
    
   },i*dd+10)






    resolve()

 }
	
   })
  }






//好友列表
function wqfriend() {
return new Promise((resolve, reject) => {

  const towqfriendurl = {url: wqurlVal.replace(/login?/g, `friend/getList?`),

    headers: JSON.parse(wqheaderVal),
    //body: wqbodyVal
  timeout:60000};
   $.post(towqfriendurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 好友列表: ${data}`)
     friend =JSON.parse(data)

for(let i=0;i<21;i++)
 {
 	 
	setTimeout(()=>{	 

var friendid=friend[i].openid
 

const towqactiveurl = {url: wqurlVal.replace(/login?/g, `friend/active?friendid=${friendid}&`),

    headers: JSON.parse(wqheaderVal),
    
  timeout:60000};
   $.post(towqactiveurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 激活: ${data}`)
     active =JSON.parse(data)
     

})			
    



const towqhelpurl = {url: wqurlVal.replace(/login?/g, `machine/help?machineid=${i+1}&helpid=${friendid}&`),

    headers: JSON.parse(wqheaderVal),
    
  timeout:60000};
   $.post(towqhelpurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 助力: ${data}`)
     help =JSON.parse(data)
var t=help.expireTime
var cz=t-new Date().getTime()
var CZ=(cz/60000).toFixed(0)

if (help.helpid)
     tz+=
'【成功助力'+(i+1)+'号植物】:，助力时间'+CZ+'分钟'+'\n'

})			
    




  },i*dd+20)






    resolve()

 }




}

)


	
   })
  }










//喷壶
function wqlevelup1() {
return new Promise((resolve, reject) => {

  const towqlevelup1url = {url: wqurlVal.replace(/login?/g, `electric/levelup?electricid=1&`),

    headers: JSON.parse(wqheaderVal),
    
  timeout:60000};
   $.post(towqlevelup1url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 喷壶: ${data}`)
     levelup1 =JSON.parse(data)
 if (levelup1.level)
 tz+='【喷壶升级】:等级'+levelup1.level+'\n'
 





    resolve()
    })
   })
  }  





//洒水车
function wqlevelup2() {
return new Promise((resolve, reject) => {

  const towqlevelup2url = {url: wqurlVal.replace(/login?/g, `electric/levelup?electricid=2&`),

    headers: JSON.parse(wqheaderVal),
    //body: wqbodyVal
  };
   $.post(towqlevelup2url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 洒水车: ${data}`)
     levelup2 =JSON.parse(data)
  if (levelup2.level)
  tz+='【洒水车升级】:等级'+levelup2.level+'\n'
 
     








    resolve()
    })
   })
  }  







//自动灌溉
function wqlevelup3() {
return new Promise((resolve, reject) => {

  const towqlevelup3url = {url: wqurlVal.replace(/login?/g, `electric/levelup?electricid=3&`),

    headers: JSON.parse(wqheaderVal),
    //body: wqbodyVal
  timeout:60000};
   $.post(towqlevelup3url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 自动灌溉: ${data}`)
     levelup3 =JSON.parse(data)
 if (levelup3.level)
 tz+='【自动灌溉升级】:等级'+levelup3.level+'\n'
 
     








    resolve()
    })
   })
  }  








//解锁工具
function wqunlock1() {
return new Promise((resolve, reject) => {
	

	
  const towqunlock1url = {url: wqurlVal.replace(/login?/g, `electric/unlock?electricid=2&`),

    headers: JSON.parse(wqheaderVal),
    //body: wqbodyVal
  timeout:60000};

   $.post(towqunlock1url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 解锁洒水车: ${data}`)
     unlock1 =JSON.parse(data)
 if (unlock1.level)
 tz+='【解锁洒水车】:成功'+'\n'
     


    resolve()



    })
   })
  }  







//解锁工具
function wqunlock2() {
return new Promise((resolve, reject) => {
	

  const towqunlock2url = {url: wqurlVal.replace(/login?/g, `electric/unlock?electricid=3&`),

    headers: JSON.parse(wqheaderVal),
    //body: wqbodyVal
  timeout:60000};

   $.post(towqunlock2url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 解锁自动灌溉: ${data}`)
     unlock2 =JSON.parse(data)
  if (unlock2.level)
tz+='【解锁自动灌溉】:成功'+'\n'
 
     







    resolve()
    })
   })
  }  



//个人中心
function wqinfo() {
return new Promise((resolve, reject) => {

  const towqinfourl = {

    url: wqurlVal,

    headers: JSON.parse(wqheaderVal),
    //body: wqbodyVal
 timeout:60000};
   $.post(towqinfourl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, 个人中心: ${data}`)
     info =JSON.parse(data)

if (info.user.electricList['3'])
 {

var t=[info.user.electricList['1'].expireTime,info.user.electricList['2'].expireTime,info.user.electricList['3'].expireTime]



var cz1=t[0]-new Date().getTime()
var CZ1=(cz1/60000).toFixed(0)

var cz2=t[1]-new Date().getTime()
var CZ2=(cz2/60000).toFixed(0)

var cz3=t[2]-new Date().getTime()
var CZ3=(cz3/60000).toFixed(0)



tz+=
'【用户信息】:'+info.user.name+'\n'+
'【签到天数】:'+info.user.sex+'\n'+
'【账户现金】:'+info.user.cash/100+'元'+'\n'+
'【总共提现】:'+info.user.totalWithdraw/100+'元'+'\n'+
'【剩余能量】:'+info.user.digiccy+'\n'+
'【剩余加速卡】:'+info.user.speedcard+'\n'+
'【喷壶等级】:'+info.user.electricList['1'].level+'\n'+
'【喷壶升级还需】:'+CZ1+'分钟'+'\n'+
'【洒水车等级】:'+info.user.electricList['2'].level+'\n'+
'【洒水车升级还需】:'+CZ2+'分钟'+'\n'+
'【自动灌溉等级】:'+info.user.electricList['3'].level+'\n'+
'【自动灌溉升级还需】:'+CZ3+'分钟'+'\n'




}


    



else if (info.user.electricList['2'])
 {

var t=[info.user.electricList['1'].expireTime,info.user.electricList['2'].expireTime]


var cz1=t[0]-new Date().getTime()
var CZ1=(cz1/60000).toFixed(0)

var cz2=t[1]-new Date().getTime()
var CZ2=(cz2/60000).toFixed(0)



tz+=
'【用户信息】:'+info.user.name+'\n'+
'【签到天数】:'+info.user.sex+'\n'+
'【账户现金】:'+info.user.cash/100+'元'+'\n'+
'【总共提现】:'+info.user.totalWithdraw/100+'元'+'\n'+
'【剩余能量】:'+info.user.digiccy+'\n'+
'【剩余加速卡】:'+info.user.speedcard+'\n'+
'【喷壶等级】:'+info.user.electricList['1'].level+'\n'+
'【喷壶升级还需】:'+CZ1+'分钟'+'\n'+
'【洒水车等级】:'+info.user.electricList['2'].level+'\n'+
'【洒水车升级还需】:'+CZ2+'分钟'+'\n'



}





else if (info.user.electricList['1'])
 {

var t=[info.user.electricList['1'].expireTime]



var cz1=t[0]-new Date().getTime()
var CZ1=(cz1/60000).toFixed(0)





tz+=
'【用户信息】:'+info.user.name+'\n'+
'【签到天数】:'+info.user.sex+'\n'+
'【账户现金】:'+info.user.cash/100+'元'+'\n'+
'【总共提现】:'+info.user.totalWithdraw/100+'元'+'\n'+
'【剩余能量】:'+info.user.digiccy+'\n'+
'【剩余加速卡】:'+info.user.speedcard+'\n'+
'【喷壶等级】:'+info.user.electricList['1'].level+'\n'+
'【喷壶升级还需】:'+CZ1+'分钟'+'\n'



}







resolve()
    })
   })
  }  








      

function showmsg() {

if (notifyInterval==1)
$.msg(jsname,'',tz)
}


// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

