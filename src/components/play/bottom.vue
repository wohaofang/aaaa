<template>
    <div class="bottom">
        bottom : 
        <button @click="$store.commit('numJia')">加一</button>
        <button @click="$store.commit('numJian')">减一</button>
    </div>
</template>

<script>
import {mapState, mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    name: "bottom",
    data(){
        return{

        }
    },
    components:{
    },
    methods:{},
    created(){},
    mounted(){}
}
</script>

<style>

</style>