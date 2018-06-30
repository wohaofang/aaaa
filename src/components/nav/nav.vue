<template>
  <nav>
      <div class="logo">
          <img src="" alt="logo">
      </div>
      <div class="btn write-btn">写文章</div>
      <div class="user"  v-on:mouseover='test()' v-on:mouseout='test2()'>
          <div class="avatar">
              <img src="//upload.jianshu.io/users/upload_avatars/4832967/b10718b32c8b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt="120">
          </div>
          <ul class="dropdown-menu none" v-bind:class="{block : block}">
              <li>我的主页</li>
              <li>我的主页</li>
              <li>我的主页</li>
              <li>我的主页</li>
              <li>我的主页</li>
          </ul>
      </div>
      <div class="style-mode"></div>
      <containers></containers>
  </nav>
</template>
<script>
import containers from './container'
export default {
    components: {
        containers
    },
    name:'nav1',
    data(){
      return{
          block: false
        }
    },
    methods:{
        test(){
            this.block = true
            console.log(this.block)
        },
        test2(){
            this.block = false
            console.log(this.block)
        }
    },

}
</script>
<style>
a {
    cursor: pointer;
}
img {
    vertical-align: middle;
}

.btn{
    display: inline-block;
    margin-bottom: 0px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.42857;
    user-select: none;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    padding: 6px 12px;
    border-radius: 4px;
}
nav{
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #ccc;
}
nav .logo{
    float: left;
    height: 56px;
    padding: 14px 25px 15px 20px;
}
nav .logo img{
    width: 55px;
    height:26px;
}
nav .write-btn{
    float: right;
    width: 100px;
    height: 26px;
    line-height: 24px;
    font-size: 15px;
    color: rgb(255, 255, 255);
    background-color: rgb(234, 111, 90);
    margin: 8px 15px 0px;
    border-radius: 20px;
}
nav .user{
    float: right;
    height:100%;
}
.user .avatar{
    position: relative;
    width: 40px;
    height: 40px;
    margin: 8px 28px 8px 20px;
    cursor: pointer;
}
.avatar img {
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    border-radius: 50%;
}
.avatar::before {
    content:'';
    position: absolute;
    top:18px;
    right: -14px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid rgb(153, 153, 153);
}
.dropdown-menu{
    left: auto;
    border-radius: 0px 0px 4px 4px;
}
.user .none{
    display: none;
}
.user .block{
    display: block;
}
</style>
