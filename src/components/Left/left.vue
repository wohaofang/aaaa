<template>
  <div>
      {{msg}}
      {{myName}}
      <listener></listener>
    <toggle-btn></toggle-btn>
  </div>
</template>
<script>
import Vue from 'vue'

// Vue.component('toggle-btn',{
//     template:'<button >Toggle box</button>'
// })
var bus = new Vue()
Vue.component('toggle-btn', {
    template: '\
        <button \
            class="btn btn-info" \
            v-on:click="emmitToggle">Toggle Box</button>\
    ',
    methods: {
        emmitToggle: function() {
            // 注意这里使用的是bus，不是this
            bus.$emit('toggle-box')
        }
    }
})
Vue.component('listener', {
    template: '<h5>sibling component</h5>',
    mounted: function () {
        bus.$on('toggle-box', function () {
            alert('已经接收到toggle-box信号！')
        })
    }
})

export default {
  data(){
      return{
          msg: 'hello'
      }
  },
  props:{
      myName: {
          type: String,
          default:'ming'
      }
  }
}
</script>
<style>

</style>
