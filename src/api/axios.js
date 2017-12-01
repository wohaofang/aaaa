import axios from 'axios'
import qs from 'qs'

const api = 'http://cms.xintiaotime.com'

function getUrl(url,params){
    for (key in params){
        url = `${url}?${key}=${params[key]}&`
    }
    return url.substring(0,url.length-1)
}

const axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }

const handleBase = (type,target,params,callback) => {
    let url = api + target
    if(type == 'get'){
        url = getUrl(url,params)
        params = null
    }else{
        params = qs.stringify(params)
    }
    axios[type](url,params,axiosConfig).then((res)=>{
        if (res.status === config.status && res.statusText === config.statusText) {
            let otherRes = res 
            res = res.data
            if (res.msg === config.SUCCESS_MSG && res.result === config.SUCCESS_CODE) {
                callback(res.data, otherRes)
            } else {
                console.error(`请求${url}成功, 返回数据有误. 具体错误为:${res.msg}, 错误代码:${res.result}`)
            }
        }
    }).catch((err)=>{
        console.warn('在请求: ' + url + '报错. ' + '错误信息为: ' + err)
    })
}

export default handleBase