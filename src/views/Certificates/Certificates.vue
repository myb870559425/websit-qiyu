<template>
  <div class="page-container container">
    <div class="detail-wrap">
      <img src="../../../static/img/scxkz.png" alt="" />
    </div>
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
    return {
      prodDetail: "",
      qureyParams: ""
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.container,
.page-container {
  margin-top: 0;
  .detail-wrap {
    padding-top: 50px;
    margin: 0 3%;
    text-align: center;
    align-items: center;
  }
}
</style>
