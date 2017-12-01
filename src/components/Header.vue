<template>
  <div class="header">
      header
    <router-link to="./">go to Hello</router-link>
    <router-link to="./Footer">go to footer</router-link>

    <left></left>
  </div>
</template>

<script>
import left from './Left/left'
export default {
    components: {
        left
    },
    name:'header',
    data(){
        return{

        }
    }
}
</script>

<style>

</style>
