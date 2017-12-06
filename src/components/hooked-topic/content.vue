<template>
  <div class="content">
      <div class="list"></div>
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
        }
    },
    data() {
        return{
            start : 0,
            hotList: [],
            newList: [],
            aaaList: [],
            bbbList: [],
            cccList: [],
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
                console.log(_this.hotList)
            })
        }
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
    .list{
        width: 
    }
}
</style>
