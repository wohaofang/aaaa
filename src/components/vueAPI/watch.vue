<template>
  <div class="haha">
      <!-- {{message}}
      {{MessgaeA}}
      {{bb()}}
      {{now}}
     <slot>安返</slot>
     <p></p> -->
     <scroller :on-infinite="infinite" ref="myscroller">
        <div class="shop-box">
            <ul>
                <li v-for="m in moveList">
                    <h4>{{m}}</h4>
                </li>
            </ul>
        </div>
    </scroller>


  </div>
</template>

<script>
import Vue from "vue";
import VueScroller from "vue-scroller";
import VueAwesomeSwiper from "vue-awesome-swiper";
console.log(VueAwesomeSwiper);
Vue.use(VueScroller);
console.log(VueScroller);
// export default {
//     name:'haha',
//     data(){
//         return{
//             message:'hello',
//             a: 1,
//         }
//     },
//     computed:{
//         MessgaeA(){
//             return this.message.split('').reverse().join('')
//         },
//         now: function () {
//             return Date.now()
//         }
//     },
//     methods:{
//         aa(){
//             this.a+=1
//         },
//         bb(){
//             return 20
//         }
//     },
//     watch:{
//         a(val,oldVal){
//             console.log(val,oldVal)
//         }
//     },
//     created(){
//         this.aa()
//     }
// }
export default {
  data() {
    return {
      noData: "",
      moveList: [1]
    };
  },
  methods: {
    infinite(done) {
      console.log(this.noData);
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2);
        });
        return;
      }
      let self = this;
      let start = this.moveList.length;

      setTimeout(() => {
        for (let i = start + 1; i < start + 10; i++) {
          self.moveList.push(i);
        }
        if (start > 30) {
          self.noData = "没有更多数据";
        }
        self.$refs.myscroller.resize();
        done();
      }, 1500);
    },
    refresh() {
      console.log("refresh");
    }
  }
};
</script>

<style>

</style>
