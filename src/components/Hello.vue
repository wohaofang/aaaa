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
  </div>
</template>

<script>
import navs from './nav/nav'
import Headers from './Header'
import Footers from './Footer'
import hooked from './hooked'
import hookedTopic from './hooked-topic'
import vueWatch from './vueAPI/watch'
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
