<template>
  <div ref="bodyContainer">
    <!-- 导航 -->
    <!-- <nav-router></nav-router> -->
    <!-- 导航 -->
    <transition
      mode="out-in"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <content-router class="animated "></content-router>
    </transition>

    <!-- 导航 -->
    <!-- <footer-router></footer-router> -->
    <div class="float__sign">
      <img src="../assets/img/float__share.png" alt />
      <img src="../assets/img/float__call.png" alt />
      <img
        v-show="backFlag"
        src="../assets/img/float__back.png"
        @click="backTop()"
        alt
      />
    </div>
  </div>
</template>

<script>
import contentRouter from "@/views/MainContent/MainContent";
export default {
  data() {
    return {
      backFlag: false
    };
  },
  components: {
    contentRouter
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const companyAnimate1 = document.getElementsByClassName(
        "company__content_english"
      )[0];
      const companyAnimate2 = document.getElementsByClassName(
        "company__content_describe"
      )[0];
      const talentAnimate = document.getElementsByClassName(
        "talent__content"
      )[0];
      var scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 300) {
        this.backFlag = true;
      } else {
        this.backFlag = false;
      }
      if (scrollTop > 600 && scrollTop < 1300) {
        companyAnimate1.classList.add("lightSpeedIn");
        companyAnimate2.classList.add("lightSpeedIn");
      } else {
        companyAnimate1.classList.remove("lightSpeedIn");
        companyAnimate2.classList.remove("lightSpeedIn");
      }
      if (scrollTop > 3000 && scrollTop < 4500) {
        talentAnimate.classList.add("rollIn");
      } else {
        talentAnimate.classList.remove("rollIn");
      }
    },
    backTop() {
      // window.document.documentElement.scrollTop = 0;
      let l = document.documentElement.scrollTop;
      let s = (l / 600) * 25; //路程/时间=s *25每隔25ms秒 动的路程
      let st = setInterval(function() {
        l -= s;
        if (l <= 0) {
          l = 0; //当l<=0时，设置l=0
          clearInterval(st);
        }
        document.documentElement.scrollTop = l;
      }, 25);
      // document.getElementsByTagName('body')[0].animate({ scrollTop: '0px' }, 'slow')
    }
  }
};
</script>

<style lang="scss" scoped>
.float__sign {
  position: fixed;
  bottom: 30px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 99;
  img {
    display: inline-block;
    width: 60px;
    margin-top: 5px;
    cursor: pointer;
  }
}
</style>
