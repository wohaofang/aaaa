<template>
  <div class="footer">
    <router-link to="./">go to hello</router-link>
    <router-link to="./Header">go to Header</router-link>
    <my-component></my-component>
    <!-- <my-child></my-child> -->
    <my-all></my-all>
  </div>
</template>
 
<script>
const child = {
  template:"<p>你好 我是儿子组件</p>"
}
const father = {
  template:'<p>你好，我是父亲组件<my-child></my-child></p>',
  components:{
    "my-child": child
  }
}
const grandFather = {
  template :"<p>你好，我是爷爷组件<my-father></my-father><my-child></my-child></p>",
  components:{
    "my-father":father,
    "my-child":child
  }
}

import Vue from 'vue'
Vue.component('my-all',{
  template:'<p>我是全局组件</p>'
})

export default{
  template:"<my-components></my-components>",
  components:{
    "my-component":grandFather
  },
  name:'footer',
  data(){
    return{
      
    }
  },

}
</script>
 
<style>

</style>