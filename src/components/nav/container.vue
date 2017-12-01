<template>
  <div class="container fixclear">
      <div class="collapse">
          <ul class="nav fixclear">
              <li>发现</li>
              <li>关注</li>
              <li>消息</li>
              <li class="search" :class="{long : widthLong}">
                  <input type="text" placeholder="搜索" @click="longInput()" :class="{long : widthLong}"/>
                  <div class="btn">||</div>
                  <div class="cover"></div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          widthLong : false
      }
  },
  methods:{
      longInput(){
          this.widthLong = true
      }
  }
}
</script>
<style>
.container{
    width: 960px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.fixclear::after{
    content:'';
    clear: both;
    display: table;
}
.nav{
    float: left;
    list-style: none;
    display:inline-block;
    
}
.nav li{
    display: block;
    float: left;
    margin-right: 10px;
    /* height: 56px; */
    line-height: 26px;
    color: rgb(51, 51, 51);
    padding: 15px;
    font-weight: 400;
}
.nav .search{
    position: relative;
    padding: 0;
    margin-right: 10px;
    margin-top: 12px;
    /* width: 160px;
    height: 36px;
    border-radius: 36px;
    background: #ccc; */
}
.search input{
    border: 0;
    outline-style: none;
    font-size: 14px;
    background: #f1f1f1;
    width: 98px;
    height: 36px;
    padding: 0 43px 0 20px;
    border-radius: 36px;
    transition: width 0.5s 0.1s;
}
.search .btn{
    position: absolute;
    right: 2px;
    top: 3px;
}
.search .long{
    width: 197px;
}
</style>
