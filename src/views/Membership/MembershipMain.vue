<template>
  <div class="page-container">
    <header-nav></header-nav>
    <section class="contactcompany"></section>
    <footer-content></footer-content>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import FooterContent from "@/components/FooterContent";
export default {
  components: {
    HeaderNav,
    FooterContent
  },
  data() {
    return {
      tabNub: "1",
      navTabData: {}
    };
  },
  methods: {
    gotoDetails(index) {
      this.$router.push({
        path: "/about/AboutContent"
      });
    },
    trggerTab(type) {
      this.tabNub = type;
    }
  }
};
</script>

<style scoped lang="scss">
.page-container {
  width: 100%;
  // margin-top: 100px;
  .contactcompany {
    width: 1190px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: rgba(237, 237, 237, 0.34);
    padding: 15px;
    margin-bottom: 20px;
    .contactcompany__title {
      position: relative;
      display: flex;
      line-height: 1;
      font-size: 30px;
      padding: 28px 40px 35px 0;
      .contactcompany__title_left {
        flex: 0 0 50%;
        .company__sign {
          position: absolute;
          top: 16px;
          width: 250px;
          height: 48px;
          // background: url("./assets/img/company__sign.png") no-repeat left;
          background-size: 70%;
          z-index: -1;
        }
        .company__title {
          display: flex;
          flex-direction: column;
          text-align: left;
          color: #333;
          padding-left: 20px;
          .english__about {
            display: inline-block;
            font-size: 20px;
            margin-top: 14px;
            margin-left: -6px;
            text-align: left;
          }
          p {
            font-size: 26px;
            margin: 20px 50px 2px -6px;
          }
        }
      }
      .contactcompany__title_right {
        font-size: 20px;
        flex: 0 0 50%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: right;
        text-align: right;
        line-height: 30px;
        div {
          margin: auto 0;
        }
        p {
          padding-right: 15px;
        }
        &:after {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto 0;
          content: "";
          width: 4px;
          height: 50px;
          background-color: #0073e5;
        }
      }
    }
    .contactcompany__content {
      display: flex;
      align-items: center;
      padding: 0 40px 40px;
      justify-content: space-between;
      color: #fff;
      img {
        width: 520px;
      }
      .contactcompany__content_left {
        position: relative;
        .contactcompany__left_wraper_1 {
          position: absolute;
          width: 440px;
          line-height: 35px;
          top: 28px;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: left;
          .phone {
            display: inline-block;
            text-indent: 30px;
            font-size: 26px;
          }
        }
        .contactcompany__left_wraper_2 {
          position: absolute;
          width: 440px;
          bottom: 28px;
          right: 38px;
          text-align: right;
          line-height: 1;
          p:nth-child(1) {
            font-size: 24px;
          }
          p:nth-child(2) {
            display: inline-block;
            padding: 4px 6px;
            font-size: 16px;
            margin-top: 15px;
            color: #333;
            background: #fff;
          }
        }
      }
      .talents__content_right {
        position: relative;
        .contactcompany__left_wraper_2 {
          position: absolute;
          width: 440px;
          bottom: 28px;
          right: 38px;
          text-align: left;
          line-height: 1;
          p:nth-child(1) {
            font-size: 24px;
          }
          p:nth-child(2) {
            display: inline-block;
            padding: 4px 6px;
            font-size: 16px;
            margin-top: 15px;
            color: #333;
            background: #fff;
          }
        }
      }
    }
  }
}
</style>
