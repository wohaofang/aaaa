<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
// 引入 bootstrap
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'app'

}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
}
</style>
