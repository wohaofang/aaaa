import * as url from './urlConfig'
import axios from 'axios'
import qs from 'qs'

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
        return axios.post(url.hookPieceUpdata,qs.stringify(params)).then((res)=>{
            return res.data
        })
    }
}
//topic
export const readTopicGetApi = {
    list (params) {
        return axios.post(url.readTopicGet,qs.stringify(params)).then((res)=>{
            return res.data
        })
    }
}

export const readPieceListnewApi = {
    list (params) {
        return axios.post(url.readPieceListnew,qs.stringify(params)).then((res)=>{
            return res.data
        })
    }
}