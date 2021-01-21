<template>
  <div class="page-container container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <section class="us">
      <!-- <img class="us-pic" src="./assets/img/us-1.png" alt="我们" /> -->
    </section>
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
  data() {
    return {};
  },
  created() {
    if (this.$route.query && this.$route.query.newType) {
      this.tabNub = this.$route.query.newType;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.page-container {
  width: 100%;
  // margin-top: 20px;
  .us {
    width: 1190px;
    margin: 0 auto;
    // background: rgba(237, 237, 237, 0.34);
    padding: 15px;
    margin-bottom: 20px;
    .us-pic {
      height: 500px;
    }
  }
}
</style>
