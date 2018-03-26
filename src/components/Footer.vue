<template>
  <div class="footer">
    <router-link to="./">go to hello</router-link>
    <router-link to="./Header">go to Header</router-link>
    <my-component></my-component>
    <!-- <my-child></my-child> -->
    <my-all></my-all>

    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

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
      checkedNames: []
    }
  },

}
</script>
 
<style>

</style>