
`
🤖 本脚本转换自：https://greasyfork.org/scripts/373563-bilibili-evolved/code/Bilibili Evolved.user.js。
😎 转换器 by Peng-YM。TG频道: https://t.me/cool_scripts

🔘 [功能]
强大的哔哩哔哩增强脚本: 下载视频, 音乐, 封面, 弹幕 / 简化直播间, 评论区, 首页 / 自定义顶栏, 删除广告, 夜间模式 / 触屏设备支持

🛠 [配置]
请根据下方描述设置MITM域名和重写。❗️由于脚本是自动生成，可能需要手动调整设置。


[MITM]
hostname=.*\.bilibili\.com/.*, 

🔘 Quantumult X
[rewrite_local]
.*\.bilibili\.com/.* url script-response-body Bilibili Evolved.user.js


🔘 Loon
[Script]
http-response .*\.bilibili\.com/.* script-path=Bilibili Evolved.user.js, requires-body=true, tag=Bilibili Evolved.user.js


🔘 Surge
[Script]
Bilibili Evolved.user.js=type=http-response, pattern=.*\.bilibili\.com/.*, script-path=Bilibili Evolved.user.js, requires-body=true, max-size=1310720


`
try {
    let body = $response.body;
    if (/<\/html>|<\/body>/.test(body)) {
        body = body.replace('</body>', `<script src=https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js></script>

<script>
 const result=function(){
function GM_deleteValue(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({key:e,name:"ApiDeleteValue",uuid:_uuid},e=>e?t():n())})}function GM_getValue(e,t){return new Promise(n=>{chrome.runtime.sendMessage({key:e,name:"ApiGetValue",uuid:_uuid},e=>{n(void 0!==e?e:t)})})}function GM_listValues(){return new Promise(e=>{chrome.runtime.sendMessage({name:"ApiListValues",uuid:_uuid},t=>e(t))})}function GM_setValue(e,t){return new Promise((n,r)=>{chrome.runtime.sendMessage({key:e,name:"ApiSetValue",uuid:_uuid,value:t},e=>{void 0!==e?n(e):(console.warn("set value failed:",chrome.runtime.lastError),r())})})}function GM_getResourceUrl(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({name:"ApiGetResourceBlob",resourceName:e,uuid:_uuid},r=>{r?t(URL.createObjectURL(r.blob)):n("No resource named "+e)})})}function GM_notification(e,t,n,r){let o;if("object"==typeof e?(o=e,"function"==typeof t&&(o.ondone=t)):o={title:t,text:e,image:n,onclick:r},"string"!=typeof o.text)throw new Error(_("gm_notif_text_must_be_string"));"string"!=typeof o.title&&(o.title=_("extName")),"string"!=typeof o.image&&(o.image="skin/icon.svg");let i=chrome.runtime.connect({name:"UserScriptNotification"});i.onMessage.addListener(e=>{const t=e.type;"function"==typeof o[t]&&o[t]()}),i.postMessage({details:{title:o.title,text:o.text,image:o.image},name:"create",uuid:_uuid})}function GM_openInTab(e,t){let n;try{n=new URL(e,location.href)}catch(t){throw new Error(_("gm_opentab_bad_URL",e))}chrome.runtime.sendMessage({active:!1===t,name:"ApiOpenInTab",url:n.href,uuid:_uuid})}function GM_setClipboard(e){document.addEventListener("copy",function t(n){document.removeEventListener("copy",t,!0),n.stopImmediatePropagation(),n.preventDefault(),n.clipboardData.setData("text/plain",e)},!0),document.execCommand("copy")}function GM_xmlHttpRequest(e){if(!e)throw new Error(_("xhr_no_details"));if(!e.url)throw new Error(_("xhr_no_url"));let t;try{t=new URL(e.url,location.href)}catch(t){throw new Error(_("xhr_bad_url",e.url,t))}if("http:"!=t.protocol&&"https:"!=t.protocol&&"ftp:"!=t.protocol)throw new Error(_("xhr_bad_url_scheme",e.url));let n=chrome.runtime.connect({name:"UserScriptXhr"});n.onMessage.addListener(function(t){if(t.responseState.responseXML)try{t.responseState.responseXML=(new DOMParser).parseFromString(t.responseState.responseText,"application/xml")}catch(e){console.warn("GM_xhr could not parse XML:",e),t.responseState.responseXML=null}let n=("up"==t.src?e.upload:e)["on"+t.type];n&&n(t.responseState)});let r={};Object.keys(e).forEach(t=>{let n=e[t];r[t]=n,"function"==typeof n&&(r[t]=!0)}),r.upload={},e.upload&&Object.keys(e=>r.upload[e]=!0),r.url=t.href,n.postMessage({details:r,name:"open",uuid:_uuid})}
// ==UserScript==
// @name         Bilibili Evolved
// @version      1.10.12
// @description  强大的哔哩哔哩增强脚本: 下载视频, 音乐, 封面, 弹幕 / 简化直播间, 评论区, 首页 / 自定义顶栏, 删除广告, 夜间模式 / 触屏设备支持
// @author       Grant Howard, Coulomb-G
// @copyright    2020, Grant Howard (https://github.com/the1812) & Coulomb-G (https://github.com/Coulomb-G)
// @license      MIT
// @match        *://*.bilibili.com/*
// @exclude      *://api.bilibili.com/*
// @exclude      *://api.*.bilibili.com/*
// @exclude      *://*.bilibili.com/api/*
// @exclude      *://member.bilibili.com/studio/bs-editor/*
// @run-at       document-start
// @supportURL   https://github.com/the1812/Bilibili-Evolved/issues
// @homepage     https://github.com/the1812/Bilibili-Evolved
// @grant        unsafeWindow
// @connect      raw.githubusercontent.com
// @connect      cdn.jsdelivr.net
// @require      https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js
// @icon         https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/images/logo-small.png
// @icon64       https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/images/logo.png
// @namespace https://greasyfork.org/users/221184
// ==/UserScript==

// GreasyFork 特供版, 只能提示更新到最新版, 没有实际功能
const ToastModule = (()=>{return(t,a)=>{var s;(function(t){t["Default"]="default";t["Info"]="info";t["Success"]="success";t["Error"]="error"})(s||(s={}));let e;class r{constructor(t="",a="",e=s.Default){this.creationTime=new Date;this.type=e;this.message=t;this.title=a;this.duration=3e3;this.randomKey=Math.floor(Math.random()*(Number.MAX_SAFE_INTEGER+1))}show(){r.containerVM.cards.splice(0,0,this);if(this.duration!==undefined){setTimeout(()=>this.dismiss(),this.duration)}}dismiss(){if(r.containerVM.cards.includes(this)){r.containerVM.cards.splice(r.containerVM.cards.indexOf(this),1)}}get element(){return dq(\`.toast-card[data-key='\${this.key}']\`)}get key(){return this.creationTime.toISOString()+\`[\${this.randomKey}]\`}static get containerVM(){if(!e){r.createToastContainer()}return e}static createToastContainer(){if(!document.querySelector(".toast-card-container")){document.body.insertAdjacentHTML("beforeend",\`\n<transition-group class="toast-card-container" name="toast-card-container" tag="div">\n<toast-card v-for="card of cards" :data-key="card.key" :key="card.key" :card="card"></toast-card>\n</transition-group>\`);e=new Vue({el:".toast-card-container",components:{"toast-card":{props:["card"],template:\`\n<div class="toast-card icons-enabled visible" :class="'toast-' + card.type">\n<div class="toast-card-border"></div>\n<div class="toast-card-header">\n<h1 class="toast-card-title">{{card.title}}</h1>\n<div class="toast-card-dismiss" @click="card.dismiss()">\n<svg style="width:22px;height:22px" viewBox="0 0 24 24">\n<path\n d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />\n</svg>\n</div>\n</div>\n<div class="toast-card-message" v-html="card.message"></div>\n</div>\n\`}},data:{cards:[]}})}}static internalShow(t,a,s,e){const n=new r(t,a,e);n.duration=s;n.show();return n}static show(t,a,e){return this.internalShow(t,a,e,s.Default)}static info(t,a,e){return this.internalShow(t,a,e,s.Info)}static success(t,a,e){return this.internalShow(t,a,e,s.Success)}static error(t,a,e){return this.internalShow(t,a,e,s.Error)}}a.applyStyle("toastStyle");return{export:r}}})()
const ToastStyle = \`.toast-card-container{--corner-radius:4px;--card-min-width:240px;--card-min-width-negative:-240px;position:fixed;left:0;bottom:0;display:flex;flex-direction:column-reverse;align-items:start;padding-left:16px;z-index:100001;pointer-events:none;overflow:hidden;width:100%;height:100%;transition:.2s ease-out}.toast-card-container *{pointer-events:initial;transition:.2s ease-out}.toast-card.toast-card-container-enter,.toast-card.toast-card-container-leave-to{opacity:0;transform:translateX(var(--card-min-width-negative))}.toast-card{background:#fff;min-width:var(--card-min-width);max-width:60vw;min-height:96px;margin:8px 0;box-shadow:rgba(0,0,0,.2) 0 4px 8px 0;transform-origin:left;overflow:hidden;display:flex;flex-direction:column;border-left-style:solid;transition:.3s cubic-bezier(.18,.89,.32,1.28);position:relative;border-left-width:0;padding-left:var(--corner-radius);border-radius:var(--corner-radius)}.toast-card.toast-card-container-leave-active{position:absolute;transition:.3s cubic-bezier(.6,-.28,.74,.05)}.toast-card-header{display:flex;align-items:center}.toast-card-title{font-size:18px;color:#000;opacity:.5;margin:16px;font-weight:700;flex:1 1 auto}.toast-card-dismiss{height:24px;width:24px;flex:0 0 auto;padding:16px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:.2s ease-out;transform-origin:center;opacity:.5;box-sizing:content-box}.toast-card-dismiss:hover{transform:scale(1.2)}.toast-card-dismiss:active{transform:scale(1.1)}.toast-card-message{color:#000;font-size:14px;margin:0 16px 16px;white-space:pre-wrap;display:flex;align-items:center;line-height:1.5;flex-wrap:wrap;word-break:break-all;max-height:200px;overflow:auto}.toast-card.toast-default{border-left-color:#444}.toast-card.toast-error{border-left-color:#f44336}.toast-card.toast-info{border-left-color:#2196f3}.toast-card.toast-success{border-left-color:#8bc34a}.toast-card .toast-card-border{position:absolute;height:100%;width:4px;border-radius:var(--corner-radius);height:calc(100% - 10px);width:var(--corner-radius);top:5px;left:0}.toast-card.toast-default .toast-card-border{background-color:#444}.toast-card.toast-error .toast-card-border{background-color:#f44336}.toast-card.toast-info .toast-card-border{background-color:#2196f3}.toast-card.toast-success .toast-card-border{background-color:#8bc34a}.toast-card .link,.toast-card span{display:inline-block;padding:4px 6px;margin:0 2px;background-color:#8882;text-decoration:none;color:#000;transition:.2s ease-out;border-radius:var(--corner-radius)}.toast-card .link:hover{background-color:#8883}.toast-card .link:active{background-color:#8884}.toast-card .download-link,.toast-card .download-link:hover{color:inherit!important;text-decoration:underline;word-break:break-all}@keyframes loading{0%,100\%{top:0;left:50%}25\%{top:50%;left:100%}50\%{top:100%;left:50%}75\%{top:50%;left:0}}.toast-card .loading{width:14px;height:14px;display:inline-block;margin-right:14px;position:relative}.toast-card .loading::after{content:"";width:10px;height:10px;background-color:#8884;border-radius:50%;display:block;transform:translateX(-50%) translateY(-50%);position:absolute;top:0;left:50%;animation:1s cubic-bezier(.22,.61,.36,1) infinite loading}\`
const manager = [undefined, {
  applyStyle: () => {
    if (document.querySelector('#toast-style')) {
      return
    }
    document.head.insertAdjacentHTML('beforeend', \`<style id="toast-style">\${ToastStyle}</style>\`)
  }
}]
document.addEventListener('DOMContentLoaded', () => {
  const { export: Toast } = ToastModule(...manager)
  Toast.info(\`当前安装版本过低, 请更新后使用. <a class="link" href="https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/bilibili-evolved.user.js">更新</a>\`, 'Bilibili Evolved')
})
}()
</script></body>`);
        console.log("[油猴脚本] Bilibili Evolved.user.js 注入成功!");
    }
    $done({body});
} catch (err) {
    console.log("[油猴脚本] Bilibili Evolved.user.js 执行失败!\n" + err);
    $done({});
}
