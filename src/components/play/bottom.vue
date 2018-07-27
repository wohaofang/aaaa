<template>
    <div class="bottom">
        <div>{{haha}}</div>
        bottom : 
        <button @click="jiajia">加一</button>
        <button @click="jianjian">减一</button>
        <br/>
        <br/>
        actions :
        <button @click="$store.dispatch('numJia')">加一</button>
        <button @click="$store.dispatch('numJian')">减一</button>
        <button @click="jiajia">加二</button>
        <div>{{num}}</div>
        <div>{{doneTodos}}</div>
    </div>
</template>

<script>
import {mapState, mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    name: "bottom",
    data(){
        return{
            haha:'哈哈'
        }
    },
    components:{
    },
    computed:{
        ...mapState({
            num:state=>state.num,
        }),
        doneTodos () {
            return this.$store.getters.doneTodos
        },
        // haha () {
        //     return this.$store.getters.haha
        // },
    },
    methods:{
        jiajia(){
            this.$store.commit('numJia')
        },
        jianjian(){
            this.$store.commit('numJian')
        },
    },
    created(){},
    mounted(){}
}
</script>

<style>

</style>