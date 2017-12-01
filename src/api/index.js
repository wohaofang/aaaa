import * as url from './urlConfig'
import axios from 'axios'

export const hookPieceListApi = {
    list (params) {
        return axios.get(url.hookPieceList,{params:params}).then((res)=>{
            return res.data
        })
    }
}

export const hookTagListApi = {
    list () {
        return axios.get(url.hookTagList).then((res)=>{
            return res.data
        })
    }
}
export const hookPieceUpdataApi = {
    list (params) {
        return axios.get(url.hookPieceUpdata,{params:params}).then((res)=>{
            return res.data
        })
    }
}