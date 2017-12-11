<template>
  <div class="content">
      <div class="nav">
          最热 &#8195;&#8195; || &#8195;&#8195; 最新
      </div>
      <div class="list" v-for="p in hotList" :key='p.id'>
          <div class="img">
              <img :src="p.image">
          </div>
      </div>
  </div>
</template>

<script>
import {readPieceListnewApi} from '../../api/index'
export default {
    name:'content',
    components:{},
    props:{
        topicId :{
            type : Number,
            default : 0 
        },
        hasNext :{
            type : Boolean,
            default :true
        }
    },
    data() {
        return{
            start : 0,
            hotList: [],
        }
    },
    methods:{
        getListHot(start){
            let _this = this 
            let params = {}
            params.start = start*10
            params.count = 10
            params.topic_id = _this.topicId
            params.sorttype = 7
            params.piecetype = 0
            params.recommend_flag = 0
            readPieceListnewApi.list(params).then((res)=>{
                let arr = res.data
                arr.forEach(v=>{
                    // console.log(v)
                    _this.hotList.push(v)
                })
                let length = _this.hotList.length
                _this.$emit('hotListLength',length)

                if(arr.length%10 != 0){
                    // _this.$emit('hotListLength',length)
                }
                // console.log(_this.hotList)
            })
        },
    },
    created(){
        let _this = this
        _this.getListHot(_this.start)
    },
    mounted(){}

}
</script>

<style lang="scss" scope>
.content{
    .nav{
        width: 100%;
        height: 60px;
        background: aqua;
        font-size: 20px;
        text-align: center;
        line-height: 60px;
    }
    .list{
        background: red;
        float: left;
        width: 175px;
        height: 361px;
        margin-left: 8px;
        .img{
            width: 174px;
            height: 232px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
.content::after{
    content:'';
    display: table;
    overflow: hidden;
    clear: both;
}
</style>
