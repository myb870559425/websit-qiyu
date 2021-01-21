<template>
  <div class="page-container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <footer-content></footer-content>
  </div>
</template>

<script>
import FooterContent from "@/components/FooterContent";
import HeaderNav from "@/components/HeaderNav";
export default {
  components: {
    HeaderNav,
    FooterContent
  },
  props: ["items"],
  data() {
    return {
      tabNub: "1"
    };
  },
  created() {
    this.tabNub = this.$route.query.tabNumber;
  },
  methods: {
    bestLaCroixFlavor() {
      return "test success";
    },
    gotoDetails(index) {
      this.$router.push({
        path: "/about/AboutContent"
      });
    },
    trggerTab(type) {
      this.tabNub = type;
    },
    navCallBack(index = "1") {
      this.tabNub = index;
    },
    changeActType(type) {
      this.actType = type;
    },
    changeTimeType(index) {
      this.timeType = index;
    },
    clickTimeType(num) {
      this.timeType = parseInt(this.timeType) + parseInt(num);
      if (this.timeType == 4) {
        this.timeType = 1;
      } else if (this.timeType == 0) {
        this.timeType = 3;
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
