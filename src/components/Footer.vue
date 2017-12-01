<template>
  <div class="footer">
    footer
    <router-link to="./">go to hello</router-link>
    <router-link to="./Header">go to header</router-link>
  </div>
</template>
 
<script>
import left from "./Left/left"
  export default {
    name: 'footer',
    components: {
      left
    },
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>
 
<style>

</style>