<template>
  <div class="page-container">
    <header-nav></header-nav>
    <section class="talents">
      <div class="talents__title">
        <div class="company__sign"></div>
      </div>
      <div class="talents__content">
        <div class="talents__content_left"
             @click="toPage('1')">
          <img src="./assets/img/talent__concept.png"
               alt />
          <div class="talents__left_wraper_1">
            <p class="talents__left_text">
              国以才立，业以才兴。人才是企业发展的根本，是推动企业跨越式发展的第一生产力。
            </p>
            <p class="talents__left_text">
              启誉重视团队建设，多渠道引进人才、高效机制培养人才、广阔平台晋升人才，为企业在激烈竞争中立于不败之地提供强有力的保障。
            </p>
          </div>
          <div class="talents__left_wraper_2">
            <p class="talents__left_text">人才理念</p>
            <p class="talents__left_text">TALENT CONCEPT</p>
          </div>
        </div>
        <div class="talents__content_right"
             @click="toPage('2')">
          <img src="./assets/img/talent__recruitment.png"
               alt />
          <div class="talents__left_wraper_1">
            <p class="talents__left_text">加入启誉，一起做一些有意思的事情！</p>
          </div>
          <div class="talents__left_wraper_2">
            <p class="talents__left_text">人才招聘</p>
            <p class="talents__left_text">TALENT RECRUITMENT</p>
          </div>
        </div>
      </div>
    </section>
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
  data () {
    return {
      tabNub: "1",
      navTabData: {
        "1": "置业服务",
        "2": "定制服务",
        "3": "智慧园区",
        "4": "灵活用工"
      }
    };
  },
  methods: {
    gotoDetails (index) {
      this.$router.push({
        path: "/about/AboutContent"
      });
    },
    trggerTab (type) {
      this.tabNub = type;
    },
    toPage (paramsData) {
      this.$router.push({
        name: "TalentsPlanmind",
        query: { tabNumber: paramsData }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.page-container {
  width: 100%;
  margin-top: 100px;
  .talents {
    width: 1190px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: rgba(237, 237, 237, 0.34);
    padding: 15px;
    margin-bottom: 20px;
    .talents__title {
      position: relative;
      width: 30%;
      .company__sign {
        width: 250px;
        height: 100px;
        background: url("./assets/img/tit_3.png") no-repeat;
        background-size: contain;
        margin-bottom: 30px;
        margin-top: 15px;
      }
    }
    .talents__content {
      display: flex;
      align-items: center;
      padding: 0 40px 40px;
      justify-content: space-between;
      color: #fff;
      img {
        width: 520px;
      }
      .talents__content_left {
        position: relative;
        cursor: pointer;
        .talents__left_wraper_1 {
          position: absolute;
          width: 440px;
          line-height: 35px;
          top: 28px;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: left;
          p {
            text-indent: 30px;
          }
        }
        .talents__left_wraper_2 {
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
        cursor: pointer;
        .talents__left_wraper_1 {
          position: absolute;
          width: 440px;
          line-height: 24px;
          top: 28px;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: left;
          p {
            text-indent: 30px;
          }
        }
        .talents__left_wraper_2 {
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
