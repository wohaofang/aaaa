<template>
  <div class="topic">
    <vue-super-scroller :load-disabled="!hasNext" :on-load='loadMore'>
        <div class="top">
            <div class="left">
                <img src="//hbpic-10057247.file.myqcloud.com/cover/a81a9c2ba522bad276445058cdedab27.png">
            </div>
            <div class="right">
                <img src="//hbpic-10057247.file.myqcloud.com/cover/65c0d10ab77d0ff12f265c0640643edf.png">
            </div>
        </div>
        <div class="header">
            <div class="bg" :style="backgroundImage"></div>
            <div class="name relative">{{topicList.name}}</div>
            <div class="participate relative">{{topicList.participate}}人在玩</div>
            <div class="desc relative">{{topicList.desc}}</div>
        </div>
        <button style="font-size:20px">{{num}}</button>
        <button @click="num++">++</button>
        <topicContent :topicId="topic_id"></topicContent>
    </vue-super-scroller>
  </div>
</template>

<script>
import Vue from "vue";
import { readTopicGetApi } from "../api/index";
import topicContent from "./hooked-topic/content";
import VueSuperScroller from "../../node_modules/vue-super-scroller";
Vue.use(VueSuperScroller);
export default {
  components: {
    topicContent: topicContent
  },
  name: "topic",
  data() {
    return {
      topic_id: 520,
      topicList: "",
      backgroundImage: {
        backgroundImage: ""
      },
      hasNext: true,
      num: 0,
      scrollTop:0,
    };
  },
  methods: {
    loadMore() {
      let _this = this;
    //   if (_this.listHot.length % 10 == 0) {
    //     _this.getListNew(_this.num);
    //     _this.getListHot(_this.num);
    //     _this.num += 1;
    //     return;
    //   } else {
    //     _this.hasNext = false;
    //   }
      setTimeout(function() {
        _this.hasNext = false;
      }, 5000);
    },
    getTopic() {
      let _this = this;
      let params = {};
      params.count = 1;
      params.start = 1;
      params.type = 1;
      params.topic_id = _this.topic_id;
      readTopicGetApi.list(params).then(res => {
        _this.topicList = res.data[0];
        console.log(_this.topicList);
        _this.backgroundImage.backgroundImage = `url(${_this.topicList.image})`;
      })
    },
    handleScroll () {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(this.scrollTop)
    },
  },
  watch: {
    num(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
    scrollTop(newVal){
        this.handleScroll()
        console.log(newVal)
    }
  },
  created() {
    let _this = this;
    _this.getTopic();
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll)
  }
};
</script>

<style lang="scss" scope>
.topic {
  width: 100%;
  height: 100%;
  background: #ccc;
  .top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      margin: 10px;
    }
  }
  .header {
    overflow: hidden;
    position: relative;
    text-align: center;
    color: #fff;
    .relative {
      position: relative;
      z-index: 1;
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      background-color: rgba(22, 24, 35, 0.75);
      filter: blur(3px);
    }
    .bg::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(22, 24, 35, 0.6);
    }
    .name,
    .participate,
    .desc {
      padding: 20px;
    }
    .name {
      padding-top: 80px;
    }
  }
}
</style>
