<template>
  <div class="hello">
    <navs></navs>
    hello

    

    <router-link to="./Header">go to header</router-link>
    <router-link to="./Footer">go to footer</router-link>
    <router-link class="color" to="./hooked">go to hooked</router-link>
    <Headers></Headers>
    <!-- <Footers></Footers> -->
  </div>
</template>

<script>
import navs from './nav/nav'
import Headers from './Header'
import Footers from './Footer'
import hooked from './hooked'
export default {
  components: {
    Headers,
    Footers,
    navs,
    hooked
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
