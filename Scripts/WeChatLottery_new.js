const notifyInterval= 0
const exchangeMoney = 50 //5, 20, 0
const mainURL = 'https://api-hdcj.9w9.com/v2/'
const CheckinURL = mainURL + 'sign/sign'
const CheckindataURL = mainURL + 'sign'
const DataURL = mainURL + 'index/informations'
const IndexURL = mainURL + 'index?type=0&gzh_number='
const Index2URL = mainURL + 'index?type=1'
const LotteryURL = mainURL + 'lotteries/'
const CouponURL = mainURL + 'coupons/'
const ExchangeURL = mainURL + 'limit_red_envelopes/'
const GetTaskURL = mainURL + 'task'
const TaskURL = mainURL + 'tasks/'
const WinURL = mainURL + 'users/list/2'
const ShareURL = mainURL + 'share_lucky_get'
const LuckyGiftURL = mainURL + 'lucky_gift'
const TokenName = '活动抽奖'
const TokenKey = 'wclotterynew'
const UidKey = 'wcluid'
const datainfo = {}
let ValidToken = true
const $cmp = compatibility()

async function Sign() {
    await Valid()
    if (ValidToken) {
        await Checkin()
        await Join()
        await Exchangerandom()
        await Task()
        await Win()
        await Share()
        await GetData()
        if (exchangeMoney) {
            await Exchange()
        }
        await notify()
    } else {
        $cmp.notify('活动抽奖 - Token 失效❗️', '', '脚本终止，请重新获取 Token')
    }

}

if ($cmp.isRequest) {
    GetToken()
    $cmp.done()
} else {
    Sign()
    $cmp.done()
}

function GetToken() {
    if ($request && $request.method == 'GET') {
        var TokenKeyValue = $request.headers['token']
        var UIDValue = $request.headers['uid']
        $cmp.write(UIDValue, UidKey)
        if ($cmp.read(TokenKey) != (undefined || null)) {
            if ($cmp.read(TokenKey) != TokenKeyValue) {
                var token = $cmp.write(TokenKeyValue, TokenKey)
                if (!token) {
                    $cmp.notify("更新" + TokenName + " Token 失败‼️", "", "")
                } else {
                    $cmp.notify("更新" + TokenName + " Token 成功 🎉", "", "")
                }
            }else{
                $cmp.notify(TokenName, "已存在相同cookie，未更新", "")
            }
        } else {
            var token = $cmp.write(TokenKeyValue, TokenKey);
            if (!token) {
                $cmp.notify("首次写入" + TokenName + " Token 失败‼️", "", "")
            } else {
                $cmp.notify("首次写入" + TokenName + " Token 成功 🎉", "", "")
            }
        }
    } else {
        $cmp.notify("写入" + TokenName + " Token 失败‼️", "", "配置错误, 无法读取请求头。")
    }
}

function Valid() {
    return new Promise(resolve => {
        let LotteryData = {
            url: DataURL,
            headers: {
                "token" : $cmp.read('wclotterynew'),
            }
        }
        $cmp.get(LotteryData, function (error, response, data) {
            try {
                if (response.status == 200) {
                    const obj = JSON.parse(data)
                    datainfo.exchangeId = 52
                    datainfo.exchangeStatus = obj.data.user_info.lucky_count >= 12000 ? true : false
                    if (exchangeMoney == 5) {
                        datainfo.exchangeId = 454
                        datainfo.exchangeStatus = obj.data.user_info.lucky_count >= 2500 ? true : false
                    } else if (exchangeMoney == 20) {
                        datainfo.exchangeId = 455
                        datainfo.exchangeStatus = obj.data.user_info.lucky_count >= 8000 ? true : false
                    }
                } else {
                    ValidToken = false
                }
                resolve ('done')
            } catch (e) {
                $cmp.notify("活动抽奖有效期" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
    })
}

function Checkin() {
    return new Promise(resolve => {
        const LotteryCheckin = {
            url: CheckinURL,
            headers: {
                "token" : $cmp.read('wclotterynew'),
                "uid" : $cmp.read('wcluid'),
            }
        }
        $cmp.get(LotteryCheckin, function(error, response, data) {
            try{
                if (error) {
                    datainfo.error = 1
                    datainfo.errormessage = error
                } else {
                    datainfo.checkin = JSON.parse(data)
                    let LotteryCheckindata = {
                        url: CheckindataURL,
                        headers: {
                            "token" : $cmp.read('wclotterynew'),
                            "uid" : $cmp.read('wcluid'),
                        }
                    }
                    $cmp.get(LotteryCheckindata, function(error, response, data) {
                        try{
                            const checkindata = JSON.parse(data)
                            let day = checkindata.data.cycle
                            datainfo.luckcoin = checkindata.data.sign_lucky[day - 1]
                            resolve('done')
                        } catch (e) {
                            $cmp.notify("活动抽奖签到结果" + e.name + "‼️", JSON.stringify(e), e.message)
                            resolve('done')
                        }
                    })
                }
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
    })
}

function Join() {
    return new Promise(resolve => {
        const commonheaders = {
            "token" : $cmp.read('wclotterynew'),
            "uid" : $cmp.read('wcluid'),
        }
        const LotteryIndex = {
            url: IndexURL,
            headers: commonheaders
        }
        const LotteryIndex2 = {
            url: Index2URL,
            headers: commonheaders
        }
        const LotteryLuckGift = {
            url: LuckyGiftURL,
            headers: commonheaders
        }
        datainfo.joinCnt = 0
        datainfo.skipedCnt = 0
        datainfo.failCnt = 0
        $cmp.get(LotteryIndex, function(error, response, data) {
            try{
                const index = JSON.parse(data)
                let list = index.data.mr_data
                for (var l of list) {
                    let lname = l.sponsor_name
                    if (l.join_status == true) {
                        datainfo.skipedCnt += 1
                    } else {
                        const LotteryJoin = {
                            url: LotteryURL + l.id + '/join',
                            headers:  commonheaders,
                            body: { "template": "" }
                        }
                        $cmp.post(LotteryJoin, function (error, response, data) {
                            try{
                                const joindata = JSON.parse(data)
                                if (joindata.success == true) {
                                    datainfo.joinCnt += 1
                                } else {
                                    datainfo.failCnt += 1
                                    $cmp.log('\n' + lname + '：' + joindata.message.error)
                                }
                                resolve('done')
                            } catch (e) {
                                $cmp.notify("活动抽奖参与" + lname + "抽奖" + e.name + "‼️", JSON.stringify(e), e.message)
                                resolve('done')
                            }
                        })
                    }
                }
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖获取抽奖列表" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
        $cmp.get(LotteryLuckGift, function(error, response, data) {
            try{
                const luckgiftindex = JSON.parse(data)
                let newlg = luckgiftindex.data.hb_data[0]
                datainfo.winluckgift = luckgiftindex.data.hb_data[1].id
                const LotteryJoin = {
                    url: LotteryURL + newlg.id + '/join',
                    headers:  commonheaders,
                    body: { "template": "" }
                }
                $cmp.post(LotteryJoin, function (error, response, data) {
                    try{
                        const joindata = JSON.parse(data)
                        if (joindata.success == true) {
                            datainfo.joinCnt += 1
                        }
                        resolve('done')
                    } catch (e) {
                        $cmp.notify("活动抽奖幸运大礼" + e.name + "‼️", JSON.stringify(e), e.message)
                        resolve('done')
                    }
                })
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖获取抽奖列表" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
        $cmp.get(LotteryIndex2, function(error, response, data) {
            try{
                const index = JSON.parse(data)
                let list = index.data.tj_data
                for (var l of list) {
                    let lname = l.sponsor_name
                    if (l.join_status == true) {
                        datainfo.skipedCnt += 1
                    } else {
                        const LotteryJoin = {
                            url: LotteryURL + l.id + '/join',
                            headers:  commonheaders,
                            body: { "template": "" }
                        }
                        $cmp.post(LotteryJoin, function (error, response, data) {
                            try{
                                const joindata = JSON.parse(data)
                                if (joindata.success == true) {
                                    datainfo.joinCnt += 1
                                } else {
                                    datainfo.failCnt += 1
                                    $cmp.log('\n' + lname + '：' + joindata.message.error)
                                }
                                resolve('done')
                            } catch (e) {
                                $cmp.notify("活动抽奖参与" + lname + "抽奖" + e.name + "‼️", JSON.stringify(e), e.message)
                                resolve('done')
                            }
                        })
                    }
                }
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖获取抽奖列表" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
    })
}

function Exchangerandom() {
    return new Promise(resolve => {
        const LotteryExchangerandom = {
            url: ExchangeURL + '453',
            headers: {
                "token" : $cmp.read('wclotterynew'),
                "uid" : $cmp.read('wcluid'),
            }
        }
        $cmp.post(LotteryExchangerandom, function(error, response, data) {
            try{
                datainfo.exchangerandomerrormessage = ''
                if (error) {
                    datainfo.exchangerandomerror = 1
                    datainfo.exchangerandomerrormessage = error
                } else {
                    datainfo.exchangerandom = JSON.parse(data)
                }
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖随机兑换结果" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
    })
}

function Task() {
    return new Promise(resolve => {
        const commonheaders = {
            "token" : $cmp.read('wclotterynew'),
            "uid" : $cmp.read('wcluid'),
        }
        const LotteryGetTask = {
            url: GetTaskURL,
            headers: commonheaders
        }
        $cmp.get(LotteryGetTask, function(error, response, data) {
            try{
                const gettask = JSON.parse(data)
                datainfo.taskcoin = 0
                datainfo.taskCnt = 0
                datainfo.taskfailCnt = 0
                let welfarelist = gettask.data.task_welfare.list
                let daylist = gettask.data.task_day.list
                for (var welfarel of welfarelist) {
                    const LotteryTask = {
                        url: TaskURL + welfarel.id,
                        headers:  commonheaders
                    }
                    let ename = welfarel.name
                    $cmp.post(LotteryTask, function (error, response, data) {
                        try{
                            const task = JSON.parse(data)
                            if (task.success == true && task.data) {
                                datainfo.taskCnt += 1
                                datainfo.taskcoin += Number(task.data.lucky_count)
                            } else if (task.success == false) {
                                datainfo.taskfailCnt += 1
                                $cmp.log('\n' + ename + '：' + task.message.error)
                            }
                            resolve('done')
                        } catch (e) {
                            $cmp.notify("活动抽奖" + ename + "任务" + e.name + "‼️", JSON.stringify(e), e.message)
                            resolve('done')
                        }
                    })
                }
                for (var dayl of daylist) {
                    const LotteryTask = {
                        url: TaskURL + dayl.id,
                        headers:  commonheaders
                    }
                    let ename = dayl.name
                    $cmp.post(LotteryTask, function (error, response, data) {
                        try{
                            const task = JSON.parse(data)
                            if (task.success == true && task.data) {
                                datainfo.taskCnt += 1
                                datainfo.taskcoin += Number(task.data.lucky_count)
                            } else if (task.success == false) {
                                datainfo.taskfailCnt += 1
                                $cmp.log('\n' + ename + '：' + task.message.error)
                            }
                            resolve('done')
                        } catch (e) {
                            $cmp.notify("活动抽奖" + ename + "任务" + e.name + "‼️", JSON.stringify(e), e.message)
                            resolve('done')
                        }
                    })
                }
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖任务列表" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
    })
}

function Win() {
    return new Promise(resolve => {
        const commonheaders = {
            "token" : $cmp.read('wclotterynew'),
            "uid" : $cmp.read('wcluid'),
        }
        const LotteryWin = {
            url: WinURL,
            headers: commonheaders
        }
        datainfo.winCnt = 0
        datainfo.winmoney = 0
        datainfo.wincoin = 0
        datainfo.couponCnt = 0
        $cmp.get(LotteryWin, function(error, response, data) {
            try{
                const win = JSON.parse(data)
                let winlist = win.data.data
                for (var winl of winlist) {
                    if (winl.sponsor_name == '活动抽奖福利君') {
                        const LotteryWin = {
                            url: LotteryURL + winl.id + '/split',
                            headers:  commonheaders
                        }
                        $cmp.post(LotteryWin, function (error, response, data) {
                            try{
                                const winmoney = JSON.parse(data)
                                if (winmoney.success == true) {
                                    datainfo.winCnt += 1
                                    datainfo.winmoney += Number(winmoney.data.money)
                                }
                                resolve('done')
                            } catch (e) {
                                $cmp.notify("活动抽奖" + winl.sponsor_name + "开奖" + e.name + "‼️", JSON.stringify(e), e.message)
                                resolve('done')
                            }
                        })
                    } else if (winl.brand_name == '活动抽奖') {

                    } else {
                        const LotteryInfo = {
                            url: LotteryURL + winl.id + '?qrcode_id=',
                            headers: commonheaders
                        }
                        $cmp.get(LotteryInfo, function (error, response, data) {
                            const linfo = JSON.parse(data)
                            if (linfo.data.bags_info.id) {
                                const LotteryWin = {
                                    url: CouponURL + linfo.data.bags_info.id,
                                    headers:  commonheaders
                                }
                                $cmp.post(LotteryWin, function (error, response, data) {
                                    try{
                                        const wincoupon = JSON.parse(data)
                                        if (wincoupon.success == true && wincoupon.data.data.mark == true) {
                                            datainfo.winCnt += 1
                                            datainfo.couponCnt += 1
                                        }
                                        resolve('done')
                                    } catch (e) {
                                        $cmp.notify("活动抽奖" + winl.sponsor_name + "开奖" + e.name + "‼️", JSON.stringify(e), e.message)
                                        resolve('done')
                                    }
                                })
                            }
                        })
                    }
                }
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖任务列表" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
        const Luckgift = {
            url: LotteryURL + datainfo.winluckgift + '?qrcode_id=',
            headers: commonheaders
        }
        $cmp.get(Luckgift, function (error, response, data) {
            const lg = JSON.parse(data)
            if (lg.data.situation == '已开奖，用户已参与已中奖') {
                const LotteryWinLuck = {
                    url: LotteryURL + datainfo.winluckgift + '/lucky',
                    headers:  commonheaders
                }
                $cmp.post(LotteryWinLuck, function (error, response, data) {
                    try{
                        const wincoin = JSON.parse(data)
                        if (wincoin.success == true) {
                            datainfo.winCnt += 1
                            datainfo.wincoin += 100
                        }
                        resolve('done')
                    } catch (e) {
                        $cmp.notify("活动抽奖幸运大礼开奖" + e.name + "‼️", JSON.stringify(e), e.message)
                        resolve('done')
                    }
                })
            }
        })
    })
}

function Share() {
    return new Promise(resolve => {
        const LotteryShare = {
            url: ShareURL,
            headers: {
                "token" : $cmp.read('wclotterynew'),
                "uid" : $cmp.read('wcluid'),
            }
        }
        $cmp.get(LotteryShare, function(error, response, data) {
            try{
                if (error) {
                    datainfo.shareerror = 1
                    datainfo.shareerrormessage = error
                } else {
                    datainfo.share = JSON.parse(data)
                }
                resolve('done')
            } catch (e) {
                $cmp.notify("活动抽奖分享" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
    })
}

function GetData() {
    return new Promise(resolve => {
        let LotteryData = {
            url: DataURL,
            headers: {
                "token" : $cmp.read('wclotterynew'),
            }
        }
        $cmp.get(LotteryData, function (error, response, data) {
            try {
                const obj = JSON.parse(data)
                datainfo.allluckcoin = obj.data.user_info.lucky_count;
                datainfo.luckmoney = obj.data.user_info.money;
                resolve ('done')
            } catch (e) {
                $cmp.notify("活动抽奖结果" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve('done')
            }
        })
    })
}

function Exchange() {
    return new Promise(resolve => {
        if (datainfo.exchangeStatus) {
            const LotteryExchange = {
                url: ExchangeURL + datainfo.exchangeId,
                headers: {
                    "token" : $cmp.read('wclotterynew'),
                    "uid" : $cmp.read('wcluid'),
                }
            }
            $cmp.post(LotteryExchange, function(error, response, data) {
                try{
                    datainfo.exchangeerrormessage = ''
                    if (error) {
                        datainfo.exchangeerror = 1
                        datainfo.exchangeerrormessage = error
                    } else {
                        datainfo.exchange = JSON.parse(data)
                    }
                    resolve('done')
                } catch (e) {
                    $cmp.notify("活动抽奖兑换结果" + e.name + "‼️", JSON.stringify(e), e.message)
                    resolve('done')
                }
            })
        }
        resolve('done')
    })
}

function notify() {
    return new Promise(resolve => {
        try {
            let Title = '活动抽奖 - '
            let subTitle = ''
            let detail = ''
            let coupon = ''
            let em = ''
            let exmoney = 0
            if (datainfo.error == 1) {
                $cmp.log("wclcheckin failed response: \n" + datainfo.errormessage)
                Title += '签到接口请求失败️'
                em += '\n签到接口请求失败,详情请看日志。'
            } else if (datainfo.checkin) {
                if (datainfo.checkin.success == true) {
                    Title += '签到成功！🎉'
                    detail += '签到获得 ' + datainfo.luckcoin + ' 币，'
                } else if (datainfo.checkin.message.code == 1) {
                    Title += '重复签到！😊'
                } else {
                    $cmp.log("wclcheckin failed response: \n" + JSON.stringify(datainfo.checkin))
                    Title += '签到失败‼️'
                    em += '\n签到失败：' + datainfo.checkin.message.error + '，详情请看日志。'
                }
            }
            if (datainfo.shareerror == 1) {
                $cmp.log("wclshare failed response: \n", datainfo.shareerrormessage)
                subTitle += '分享失败 '
                em += '\n分享接口请求失败，详情请看日志。'
            } else if (datainfo.share) {
                if (datainfo.share.success == true) {
                    subTitle += '分享成功 '
                    detail += '分享获得 ' + datainfo.share.data.count + ' 币，'
                } else if (datainfo.share.message.code == 1) {
                    subTitle += '分享重复 '
                } else {
                    $cmp.log("wclshare failed response: \n" + JSON.stringify(datainfo.share))
                    subTitle += '分享失败 '
                    em += '\n分享失败：' + datainfo.share.message.error + '，详情请看日志。'
                }
            }
            if (datainfo.taskCnt > 0) {
                subTitle += '任务 ' + datainfo.taskCnt + ' 个 '
                detail += '任务获得 ' + datainfo.taskcoin + ' 币，'
            }
            if (datainfo.taskfailCnt > 0) {
                em += '\n任务失败共' + datainfo.taskfailCnt + ' 个，详情请看日志。'
            }
            if (datainfo.exchangerandomerror == 1 || datainfo.exchangeerror == 1) {
                $cmp.log("wclexchange failed response: \n", datainfo.exchangerandomerrormessage + datainfo.exchangeerrormessage)
                subTitle += '兑换失败 '
                em += '\n兑换接口请求失败，详情请看日志。'
            } else {
                if (datainfo.exchangerandom) {
                    if (datainfo.exchangerandom.success == true) {
                        subTitle += '兑换成功 '
                        exmoney += Number(datainfo.exchangerandom.data.money)
                    } else if (datainfo.exchangerandom.message.code == 1) {
                        subTitle += '兑换重复 '
                    } else {
                        $cmp.log("wclexchange failed response: \n" + JSON.stringify(datainfo.exchangerandom))
                        subTitle += '兑换失败 '
                        em += '\n兑换失败：' + datainfo.exchangerandom.message.error + '，详情请看日志。'
                    }
                }
                if (datainfo.exchange) {
                    if (datainfo.exchange.success == true) {
                        exmoney += Number(datainfo.exchange.data.money)
                    } else {
                        $cmp.log("wclexchange failed response: \n" + JSON.stringify(datainfo.exchange))
                        subTitle += '兑换 ' + exchangeMoney + ' 元失败 '
                        em += '\n兑换 ' + exchangeMoney + ' 元失败：' + datainfo.exchange.message.error + '，详情请看日志。'
                    }
                }
            }
            if (exmoney > 0) {
                detail += '兑换获得 ' + exmoney.toFixed(2) + ' 元，'
            }
            if (datainfo.winCnt > 0) {
                subTitle += '中奖 ' + datainfo.winCnt + ' 个 '
                if (datainfo.winmoney > 0) {
                    detail += '中奖获得 ' + datainfo.winmoney.toFixed(2) + ' 元，'
                }
                if (datainfo.wincoin > 0) {
                    detail += '中奖获得 ' + datainfo.wincoin + ' 币，'
                }
                if (datainfo.couponCnt > 0) {
                    coupon += '\n中奖获得 ' + datainfo.couponCnt + ' 张券，详情请进入小程序查看（大概率无用）'
                }
            }
            detail += '账户共有 ' + datainfo.allluckcoin + " 币及 " + datainfo.luckmoney + " 元。💰"
            if (datainfo.joinCnt > 0) {
                subTitle += '参与抽奖 ' + datainfo.joinCnt + ' 个 '
            }
            if (datainfo.failCnt > 0 ) {
                em += '\n抽奖失败共' + datainfo.failCnt + ' 个，详情请看日志。'
            }
            if (datainfo.skipedCnt > 0) {
                detail += '\n跳过 ' + datainfo.skipedCnt +' 个已参与的抽奖。'
            }
            $cmp.notify(Title, subTitle, detail + coupon + em)
            resolve('done')
        } catch (e) {
            $cmp.notify("通知模块 " + e.name + "‼️", JSON.stringify(e), e.message)
            resolve('done')
        }
    })
}

function compatibility() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const isJSBox = typeof $app != "undefined" && typeof $http != "undefined"
    const isNode = typeof require == "function" && !isJSBox;
    const node = (() => {
        if (isNode) {
            const request = require('request');
            return ({request})
        } else {
            return (null)
        }
    })()
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
        if (isNode) log(title+subtitle+message)
        if (isJSBox) $push.schedule({title: title, body: subtitle?subtitle+"\n"+message:message})
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const adapterStatus = (response) => {
        if (response) {
            if (response.status) {
                response["statusCode"] = response.status
            } else if (response.statusCode) {
                response["status"] = response.statusCode
            }
        }
        return response
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                callback(null, adapterStatus(response), response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, (error, response, body) => {
            callback(error, adapterStatus(response), body)
        })
        if (isNode) {
            node.request(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isJSBox) {
            if (typeof options == "string") options = {url: options}
            options["header"] = options["headers"]
            options["handler"] = function (resp) {
                let error = resp.error;
                if (error) error = JSON.stringify(resp.error)
                let body = resp.data;
                if (typeof body == "object") body = JSON.stringify(resp.data);
                callback(error, adapterStatus(resp.response), body)
            };
            $http.get(options);
        }
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                callback(null, adapterStatus(response), response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) {
            $httpClient.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isNode) {
            node.request.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isJSBox) {
            if (typeof options == "string") options = {url: options}
            options["header"] = options["headers"]
            options["handler"] = function (resp) {
                let error = resp.error;
                if (error) error = JSON.stringify(resp.error)
                let body = resp.data;
                if (typeof body == "object") body = JSON.stringify(resp.data)
                callback(error, adapterStatus(resp.response), body)
            }
            $http.post(options);
        }
    }
    const log = (message) => console.log(message)
    const done = (value = {}) => {
        if (isQuanX) isRequest ? $done(value) : null
        if (isSurge) isRequest ? $done(value) : $done()
    }
    return { isQuanX, isSurge, isJSBox, isRequest, notify, write, read, get, post, log, done }
}
