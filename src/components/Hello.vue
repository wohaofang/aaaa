<template>
  <div class="hello">
    <navs></navs>
    hello

    

    <router-link to="./Header">go to header</router-link>
    <router-link to="./Footer">go to footer</router-link>
    <router-link class="color" to="./hooked">go to hooked</router-link>
    <router-link class="color" to="./hookedTopic">go to hookedTopic</router-link>
    <router-link class="color" to="./vueAPI/watch">go to vueWatch</router-link>
    <Headers></Headers>
    <!-- <vue-watch></vue-watch> -->
    <!-- <Footers></Footers> -->

    <br/>
    <a href="javascript:;" @click="$store.commit('switch_dialog')">mutations,使用commit触发</a>
    <a href="javascript:;" @click="$store.dispatch('switch_dialog')">actions,使用dispatch触发</a>
    <a href="javascript:;" @click="switch_dialog">通过mapMutations进行触发</a>
    <a href="javascript:;" @click="switch_dialog">通过mapMutations进行触发</a>
    <div>{{$store.state.show}}</div>
    <div>{{$store.getters.not_show}}</div>
    <div>{{show}}</div>
  </div>
</template>

<script>
import navs from './nav/nav'
import Headers from './Header'
import Footers from './Footer'
import hooked from './hooked'
import hookedTopic from './hooked-topic'
import vueWatch from './vueAPI/watch'
import {mapState, mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  components: {
    Headers,
    Footers,
    navs,
    hooked,
    hookedTopic,
    vueWatch
  },
  name: 'hello',
  data() {
    return {

    }
  },
  computed:{
    // show(){
    //   return this.$store.state.show
    // }
    ...mapState({
      show: state => state.show
    }),
  
    
  },
  methods:{
   ...mapMutations([
     'switch_dialog'
   ]),
    ...mapActions([
      'switch_dialog'
    ])
   
  },
  mounted(){
    // console.log($store.state.show)

  }
}
</script>

<style>
header{
  height: 200px;
  width: 200px;
  background: #ccc;
}
.color{
  font-size: 20px;
}
</style>
