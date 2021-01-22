<template>
  <div class="page-container container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <section class="us"></section>
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
  .us {
    width: 1190px;
    margin: 0 auto;
    padding: 15px;
    margin-bottom: 20px;
    .us-pic {
      height: 500px;
    }
  }
}
</style>
