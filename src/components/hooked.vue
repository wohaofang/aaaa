<template>
    <div class="hooked">
        <div class="top-btn">
            <button @click="clickNum(-1)">上一页</button>
            {{condition.num}}
            <button @click="clickNum(1)">下一页</button>
        </div>
        <button @click="hahaha()">hahaahahh</button>


        <div class="option">
            <h5>过滤分类列表</h5>
            <select class="form-control" v-model='condition.tagId' v-on:change="selectTagList(condition.tagId)">
                <option v-for="t in tagList" v-bind:value='t.id'>{{t.name}}</option>
            </select>
        </div>

        <div class="input-group search">
            <input type="text" class="form-control" v-model="condition.searchContent" placeholder="输入关键字">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="clearSearch()">
                    清除
                </button>
                <button class="btn btn-info" type="button" @click="search">
                    关键字搜索
                </button>
            </span>
        </div>



        <hookContent @chuandi="jieshou" @haha="xixi" :condition='condition' ref="hookedContent"></hookContent>
    </div>
</template>

<script>
import {hookTagListApi} from '../api/index'
import hookContent from './cms-index/content'
// import '../common/login'

export default {
    name:'hooked',
    data(){
        return{
            condition:{
                num:1,
                searchContent:'',
                tagId:'',
            },
            tagList:'',
            
        }
    },
    components:{
        hookContent
    },
    methods:{
        selectTagList(id){
            console.log(id)
        },
        jieshou(num){
            // this.num = num
            // console.log(num)
            console.log('你好，我是丁铭')
        },
        // getHook(){
        //     // var params = new URLSearchParams();
        //     // params.append('start',0)
        //     // params.append('count',10)
        // },
        clickNum(num){
            let _this = this
            if(num==1){
                _this.condition.num++
            }
            if(num == -1){
                if(_this.condition.num<=1){}
                else{
                    _this.condition.num--
                }
            }
            // console.log(_this.condition.num)
        },
        xixi(num){
            console.log(num)
        },
        hahaha(){
            this.$refs.hookedContent.aaa()
        },
        clearSearch(){
            this.condition.searchContent = ''
            this.condition.num=1
            this.condition.tagId=''
            this.$refs.hookedContent.getHookList(this.condition.num)
        },
        search(){},
        getTagList(){
            let _this = this
            hookTagListApi.list().then((res)=>{
                _this.tagList = res.data
                // console.log(_this.tagList)
            })
        }
    },
    created(){
        let _this = this
        _this.getTagList()
    }
}
</script>

<style>
.hooked{
    width: 90%;
    margin: 0 auto;
}
.top-btn{
    margin: 15px auto;
}
button{
    /* width: 20px;
    height: 10px; */
}
.search{
    margin: 15px 0;
}
</style>
