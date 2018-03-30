<template>
  <div class="header">
      header
    <router-link to="/Header/haha">haha</router-link>
    <router-link to="/">go to Hello</router-link>
    <router-link to="/Footer">go to footer</router-link>

    <left :myName="name"></left>
    <my-name name="丁铭" birth-time='1994 - 04 -14'></my-name>
    <div>
        <button>{{ totalCounter }}</button>
        </br>
        <button-counter v-on:increment-event="total_increment"></button-counter>
        <button-counter v-on:increment-event="total_increment"></button-counter>

        <hr>
        <button-a v-on:haha="ahah"></button-a>
        +
        <button-a v-on:haha="ahah"></button-a>
        =
        {{bb}}
    </div>
    <p>这是slot的内容</p>
    <son-component>
        <p>asfshfk</p>
        <p>asdfasgdfhsdh</p>
    </son-component>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import left from './Left/left'

Vue.component('my-name',{
    props: ['name','birthTime'],
    template: '<p>我叫：{{name}}我出生于：{{birthTime}}</p>',
    created: function() {
        // console.log('在created钩子函数中被调用')
        // console.log('我叫：',this.name)
        // console.log('我出生于：',this.birthTime)
    }
})
// vue的自定义事件
Vue.component('button-counter',{
    template: '<button v-on:click="increment">{{counter}}</button>',
    data(){
        return{
            counter:0
        }
    },
    methods:{
        increment (){
            this.counter +=1
            this.$emit('increment-event')
        }
    }
})
// 感觉很强大
Vue.component("button-a",{
    template : '<button @click="add">{{num}}*2</button>',
    data(){
        return{
            num:0
        }
    },
    methods: {
        add(){
            this.num++
            this.$emit('haha',2)
        }
    }
})
Vue.component('son-component',{
    template:'<div><slot></slot></div>'
})

export default {
    components: {
        left
    },
    name:'header',
    data(){
        return{
            totalCounter : 0,
            bb:0,
            name:'ding'
        }
    },

    methods: {
        total_increment: function (){
            this.totalCounter += 1
        },
        ahah(a){
            this.bb += a
        }
    },
    mounted(){
        // console.log($route)
    }
}
</script>

<style>

</style>
