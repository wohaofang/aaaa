<template>
  <div  class="header">
      header
      <button @click="goback">后退</button>
    <button @click="goHome">回到首页</button>
    <router-link :to="{ path: '/header/198/jspang website is very good',params:{username:'jspang'}}">引入 footer</router-link>
    <!-- :to="{ name:'haha'}"可行   :to="{ path: '/header/haha'}" 也行 -->
    <router-link to="/">go to Hello</router-link>
    <router-link to="/Footer">go to footer</router-link>

    <left :myName="name"></left>
    <my-name name="丁铭" birth-time='1994 - 04 -14'></my-name>
    <div>
        <button>{{ totalCounter }}</button>
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
    <!-- <router-view></router-view> -->
    <transition name="fade">
        <router-view>
        </router-view>
    </transition>
    <input v-model.trim="msg">



       <el-button @click.native="startHacking">Let's do it</el-button>
    <div class="block">
    <div class="element-ui">
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
        </el-row>
            <span class="demonstration">显示默认颜色</span>
            <span class="wrapper">
                <el-button type="success" @click="dingming">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info"><router-link tag="a" :to="{path:'/header'}" target="_blank">hahah</router-link></el-button>
            </span>
    </div>

    </div>
  </div>
  
</template>

<script>
  import Vue from 'vue';

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
        },
       
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
    name:'header1',
    data(){
        return{
            totalCounter : 0,
            bb:0,
            name:'ding',
            msg:'asd'
        }
    },

    methods: {
        total_increment: function (){
            this.totalCounter += 1
        },
        ahah(a){
            this.bb += a
        },
        goback(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
        dingming(){

            const {href} = this.$router.resolve({
                name: 'foo',
                query: {
                    
                }
            })
            console.log(href)
        //     console.log(window.location.origin)
        //    window.open(window.location.origin+'header','_blank')
        }
    },
    mounted(){
        // console.log($route)
    },
    beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
    },
    beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    // alert('nininin')
    next();
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
