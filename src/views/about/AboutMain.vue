<template>
  <div class="page-container">
    <header-nav></header-nav>
    <div class="section clearfix">
      <div class="about_describe">
        <div class="company__sign"></div>
        <div class="company__content_text">
          <p>
            <img class="company__content_title"
                 src="../../assets/img/company__title.png"
                 alt="口号" />
          </p>
          <div class="company__content_english"
               @click="gotoDetails('1')">
            <p>启誉者</p>
            <p>众人合力，同心同德；</p>
            <p>千人一口，同气相求；</p>
            <p>细雨浥尘，滋养民生；</p>
            <p>路遥而至，山高而即。</p>
            <p>雄关漫道，携手同跃！</p>
          </div>
          <p class="company__content_describe">
            启誉自创立以来，始终坚持民生为本的发展理念，始终保持美容服务引领的发展战略，始终抱持回报社会的发展愿景，始终秉持匠人匠艺的发展品质，
            为改善老百姓的生活方式不懈努力。
          </p>
        </div>
        <div class="t2_Box">
          <img class="t2_img"
               src="./assets/img/t2.png"
               alt />
        </div>
      </div>
      <div class="about_img clearfix">
        <div class="left">
          <div class="img_box"
               @click="gotoDetails('2')">
            <div class="img_t">
              <p>Company profile</p>
              <p>公司简介</p>
            </div>
            <img src="./assets/img/img_1.png"
                 alt />
          </div>
          <div class="img_box"
               @click="gotoDetails('3')">
            <div class="img_t">
              <p>Development strategy</p>
              <p>发展战略</p>
            </div>
            <img src="./assets/img/img_2.png"
                 alt />
          </div>
        </div>
        <div class="right">
          <div class="img_box"
               @click="gotoDetails('4')">
            <div class="img_t">
              <p>Milestone</p>
              <p>发展历程</p>
            </div>
            <img src="./assets/img/img_3.png"
                 alt />
          </div>
          <div class="img_box"
               @click="gotoDetails('5')">
            <div class="img_t">
              <p>Organization chart</p>
              <p>组织架构</p>
            </div>
            <img src="./assets/img/img_4.png"
                 alt />
          </div>
          <div class="img_box"
               @click="gotoDetails('6')">
            <div class="img_t">
              <p>Corporate culture</p>
              <p>企业文化</p>
            </div>
            <img src="./assets/img/img_5.png"
                 alt />
          </div>
        </div>
      </div>
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
  data () {
    return {};
  },
  methods: {
    gotoDetails (index) {
      this.$router.push({
        path: "/about/AboutContent",
        query: {
          tabNumber: index
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.page-container {
  width: 100%;
  margin-top: 20px;
  .section {
    width: 1190px;
    margin: 0 auto;
    background: rgba(237, 237, 237, 0.34);
    padding: 15px;
    margin-top: 100px;
    .about_describe {
      position: relative;
      float: left;
      width: 35%;
      padding-right: 15px;
      .company__sign {
        width: 310px;
        height: 120px;
        background: url("./assets/img/tit_1.png") no-repeat;
        background-size: cover;
        margin-bottom: 30px;
        margin-top: 15px;
      }
      .company__content_text {
        font-family: "黑体";
        line-height: 1;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px;
        .company__content_title {
          width: 230px;
          height: 65px;
        }
        .company__content_english {
          font-size: 16px;
          margin-top: 42px;
          line-height: 24px;
          color: #333;
          cursor: pointer;
        }
        .company__content_describe {
          font-size: 14px;
          margin-top: 14px;
          line-height: 24px;
          text-justify: auto;
          text-align: justify;
          text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
          color: #333;
        }
      }
      .t2_Box {
        margin-top: 15px;
        margin-left: 20px;
        .t2_img {
          width: 270px;
        }
      }
    }
    .about_img {
      float: left;
      width: 65%;
      padding: 20px 15px;
      .left {
        float: left;
        width: 50%;

        .img_box {
          position: relative;
          padding: 10px;
          cursor: pointer;
          .img_t {
            position: absolute;
            color: #333;
            top: 35px;
            left: 35px;
            font-size: 22px;
          }
          img {
            width: 100%;
          }
        }
      }
      .right {
        float: left;
        width: 50%;
        .img_box {
          padding: 10px;
          position: relative;
          cursor: pointer;
          .img_t {
            position: absolute;
            color: #333;
            top: 30px;
            left: 30px;
            font-size: 22px;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
