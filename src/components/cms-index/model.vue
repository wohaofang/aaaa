<template>
    <div class="model">
        <div class="model-content">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" @click="close" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">新建</h4>
                </div>
                <div class="modal-body row">
                    <div class="col-xs-12" >
                        <div class="col-xs-3">
                            内部标题
                        </div>
                        <div class="col-xs-9">
                            <input type="text" v-model="pieceObj.name" placeholder="可留空" name="">
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="col-xs-3">
                            快爽标题
                        </div>
                        <div class="col-xs-9">
                            <input type="text" v-model="pieceObj.title" placeholder="长度最多为20个汉字（含标点符号）" name="">
                        </div>
                    </div>

                    <div class="col-xs-12" >
                        <div class="col-xs-3">
                            主播名
                        </div>
                        <div class="col-xs-9">
                            <input type="text" v-model="pieceObj.author" name="">
                        </div>
                    </div>
                    <div class="col-xs-12" >
                        <div class="col-xs-3">
                            主播留言
                        </div>
                        <div class="col-xs-9">
                            <input type="text" v-model="pieceObj.desc"  placeholder="结尾处的留言" name="">
                        </div>
                    </div>
                    <div class="col-xs-12" >
                        <div class="col-xs-3">
                            备注
                        </div>
                        <div class="col-xs-9">
                            <input type="text" v-model="pieceObj.remark" name="">
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="col-xs-3">
                            封面图
                        </div>
                        <div class="col-xs-9">
                            <button class="btn btn-info btn-xs" >添加封面图</button>
                            <img style="width:150px;height:200px" :src="pieceObj.image">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" @click="close">关闭</button>
                    <button type="button" class="btn btn-primary" @click="confirmRelease()">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import {hookPieceUpdataApi} from '../../api/index'
export default {
    name: 'model',
    data(){
        return{

        }
    },
    props:{
        pieceObj :{
            type: Object,
            default:{}
        }
    },
    methods:{
        close(){
            $('.model').hide()
        },
        confirmRelease(){
            let _this = this 
            let params = {}
            params.id = _this.pieceObj.id
            params.desc = _this.pieceObj.desc
            params.tail = _this.pieceObj.tail
            params.name = _this.pieceObj.name
            params.title = _this.pieceObj.title
            params.author = _this.pieceObj.author
            params.image = _this.pieceObj.image
            params.remark = _this.pieceObj.remark
            hookPieceUpdataApi.list(params).then((res)=>{
                console.log(res)
                if(res.result == 0 ){
                    _this.close()
                }else{
                    alert(res.msg)
                }
            })
        },
        // axios.post('/hook/piece/update',qs.stringify(params)).then((res)=>{
        //     console.log(res.data)
        //     if(res.data.result == 0 ){
        //         _this.close()
        //     }else{
        //         alert(res.data.msg)
        //     }
        // })
        aa(){
            axios.get('/hook/piece/list').then((res)=>{
                console.log(res)
            })
        }
    },
    created(){
        this.aa()
    }
}
</script>

<style>
.model{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(202, 197, 197, 0.62);
}
.model-content{
    background: #fff;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 1;
    width: 600px;
}
.modal-content input{
    width: 100%;
    height: 30px;
}
.modal-body .col-xs-12 {
    margin-top: 10px;
}
.col-xs-12 .col-xs-3{
    line-height: 30px;
}
</style>
