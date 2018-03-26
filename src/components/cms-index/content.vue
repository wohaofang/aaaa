<template>
    <div class="content">
        <happy-scroll>
        <!-- 子组件的方法 -->
        <button @click="chuandi()">111</button>
        <button @click="shishi()">试试</button>
        <button @click="cccc()">试试</button>
        <button @click="submit()">callback</button>
        <!-- <iframe src="http://www.baidu.com" width="900px" height="900px" frameborder="1"></iframe> -->
        <table id="tableList" class="table  table-bordered table-hover table-list">
            <tbody>
                <tr>
                    <th class="index remove-on-mobile">序号</th>
                    <th class="remove-on-mobile">ID</th>
                    <th>故事名</th>
                    <th class="remove-on-mobile">标题</th>
                    <th class="remove-on-mobile">封面</th>
                    <th class="remove-on-mobile" style="width: 8%">作者</th>
                    <th class="up-time remove-on-mobile">发布时间</th>
                    <th class="up-time remove-on-mobile">更新时间</th>
                    <th class="remark remove-on-mobile">备注</th>
                    <th class="remark remove-on-mobile">手机号</th>
                    <th class="remove-on-mobile">点击数</th>
                    <th class="remove-on-mobile">评论数</th>
                    <th>标签</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(p,index) in hookList" :key="p.id">
                    <th>{{index+1}}</th>
                    <th>{{p.id}}</th>
                    <th>{{p.name}}</th>
                    <th>{{p.title}}</th>
                    <th>
                        <img class="hookedImg" :src="p.image">
                    </th>
                    <th>{{p.author}}</th>
                    <th>
                        <p>{{aa(p.create_time * 1000)}}</p>
                    </th>
                    <th>
                        <p>{{aa(p.update_time * 1000)}}</p>
                    </th>
                    <!-- <th>{{p.update_time}}</th> -->
                    <th>{{p.remark}}</th>
                    <th>{{p.outer_author}}</th>
                    <th>{{p.read_count?p.read_count:0}}</th>
                    <th>{{p.comment_count?p.comment_count:0}}</th>
                    <!-- <th>{{p.tag_names_list}}</th> -->
                    <th><span class="tags" v-for="t in p.tag_names_list" :key="t.id">{{t}}</span></th>
                    <th>
                        <button class="btn btn-info btn-xs" @click="update(p)">配置</button>
                    </th>
                </tr>
            </tbody>
        </table>
        <model :pieceObj ="piece"></model>
        </happy-scroll>
    </div>
</template>

<script>
import {hookPieceListApi} from '../../api/index'
import model from './model'
 import { HappyScroll } from 'vue-happy-scroll'
  // 引入css，推荐将css放入main入口中引入一次即可。
  import 'vue-happy-scroll/docs/happy-scroll.css'

export default {
    name:'content',
    data(){
        return{
            hookList:'',
            start:0,
            piece:{},
        }
    },
    components:{
        model:model,
        HappyScroll:HappyScroll
    },
    props:{
       myNum: { // 夫级传递的方法
           type: Number,
           default: 0
       } ,
       condition: {
           type: Object,
           default:{}
       },
       callback2:{
           type:Function,
           default:null
       }
    },
    methods:{
        submit(){
            if(this.callback2){
                this.callback2()
            }
        },
        cccc(){
            this.$emit('acc','nice')
        },
        shishi(){
            this.$parent.callback1()
        },
        getHookList(start,key,tagId){
            // console.log(start)
            let _this = this
            let params = {}
            params.start = 10 * (start-1)
            params.count = 10
            params.key = key
            if(!key){
                params.tag = tagId
            }
            hookPieceListApi.list(params).then((res)=>{
                _this.hookList = res.data
                // console.log(_this.hookList)
            })
            this.$emit('haha','$emit暴露的方法')
        },
        aa(a){
            return (new Date(a)).toLocaleDateString()
        },
        aaa(){
            console.log('很强大,父组件调用子集方法')
        },
        chuandi(){  // 子组件的执行，父组件监听到了 子组件的 执行，也相应的执行了
            this.start ++
            // console.log(this.start)
            this.$emit('chuandi',this.start)
        },
        update(p){
            $('.model').show()
            this.piece = p
            console.log(this.piece)
        }
    },
    watch:{
        // myNum:function aaa(val){
        //     console.log(val)
        //     this.getHookList(val)
        // },
        condition:{
            handler(newVal){
                console.log(newVal)
                this.getHookList(newVal.num,newVal.searchContent,newVal.tagId)
            },
            deep:true
        }
    },
    created(){
        // console.log(this.condition)
        this.getHookList(1)
    },
    mounted(){},
}
</script>

<style>
.content{
    height: 500px;
}
.hookedImg{
    width: 80px;
}
.tags{
    display: block;
    padding: 5px;
    margin: 3px;
    border-radius: 10px;
    background: #f0f0f0;
    border: 1px solid #ccc;
}

</style>
