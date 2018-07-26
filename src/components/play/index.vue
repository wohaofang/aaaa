<template>
    <div class="play">
        <div class="header">
            This is header : {{$store.state.num}}
        </div>
        <router-link  to="./playIndex/top">去top 页面</router-link>
        <router-view></router-view>
        <playBottom></playBottom>
    </div>
</template>

<script>
import {mapState, mapActions,mapGetters,mapMutations} from 'vuex'
import playBottom from './bottom'
export default {
    name: "playIndex",
    data(){
        return{

        }
    },
    components:{
        playBottom
    },
    methods:{},
    created(){},
    mounted(){}
}
</script>

<style>
.play{
    font-size: 20px;
    font-weight: 600;
}
</style>
