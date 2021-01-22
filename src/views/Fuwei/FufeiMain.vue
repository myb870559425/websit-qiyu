<template>
  <div class="page-container container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <div class="fuwei_intro ">
      <div class="about_value">
        <img src="./assets/img/fuwei_intr.jpg" alt="" class="fuwei_bg" />
        <div class="content1">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    馥薇品牌
                  </div>
                  <span class="time_info"></span>
                </h6>
                <p>
                  馥薇是由法国ACTIVEN生物药理实验室与瑞士REMORA美容健康中心，
                  共同创建于2009年的新型生物科技研发机构，
                  该生物药理研发中心专攻于生物技术与毒素药理的运用，
                  在生物智能化、肽工程、毒素临床研发等领域处于全球领导地位。
                  基于长期合作关系，
                  2013年广州馥薇生物科技公司与法国ACTIVEN生物药理研发中心达成战略伙伴关系，
                  2015年共同成立广州馥薇生物科技有限公司共同开发中国大陆市场，
                  全权授权广州盛立生物科技有限公司生产【馥薇】专业美容品牌。
                  2016年8月湖南运营管理中心正式成立。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="grow__wrap">
      <p class="grow_title">成长见证</p>
      <p class="grow_en">GROWTH PROCESS</p>
      <div class="grow__line">
        <div class="line">
          <p class="stemp-6">
            2013年广州馥薇生物科技公司与法国ACTIVEN生物药理研发中心达成战略伙伴关系
          </p>
          <p class="stemp-5">
            2015年与法国ACTIVEN生物药理研发中心共同成立广州馥薇生物科技有限公司共同开发中国大陆市场
          </p>
          <p class="stemp-4">
            2015年共同成立广州馥薇生物科技有限公司共同开发中国大陆市场，
            全权授权广州盛立生物科技有限公司生产【馥薇】专业美容品牌。
          </p>
          <p class="stemp-3">
            2016年8月湖南运营管理中心正式成立。
          </p>
          <p class="stemp-2">
            2021年2月【馥薇】专业美容品牌线上小程序开启。
          </p>
          <p class="stemp-1">
            时间会见证我们的成长...
          </p>
          <img class="dot-1" src="./assets/img/list_on.png" alt="" />
          <img class="dot-2" src="./assets/img/list_on.png" alt="" />
          <img class="dot-3" src="./assets/img/list_on.png" alt="" />
          <img class="dot-4 " src="./assets/img/list_on.png" alt="" />
          <img class="dot-5 " src="./assets/img/list_on.png" alt="" />
          <img class="dot-6 " src="./assets/img/list_on.png" alt="" />
        </div>
      </div>
    </div>
    <div class="our__story">
      <p class="story-title">这有故事</p>
      <p class="story-en">HERE HAS STORY</p>
      <div class="story__wrap">
        <img src="./assets/img/qiangwei.jpg" alt="" class="qiangwei" />
        <div class="story_content">
          <p class="">
            "蔷薇"，在阵风抚过后，远处的你闭上双眼，轻吸于心，微笑绽放...
          </p>
          <p>
            "馥薇"，于心中绽放的蔷薇，花藤蔓延至远方，花蓬层层拨开，甜沁于眼中。
          </p>
          <p>
            她，会给你带来如蔷薇的香，淡而久长
          </p>
          <p>
            她，会给你带来如蔷薇的蔓延，交织于心的成长
          </p>
          <p>
            深呼吸...
          </p>
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
  .fuwei_intro {
    width: 100%;
    margin: 0 auto;
    background: rgba(237, 237, 237, 0.1);
    padding-top: 80px;
    // padding: 15px;
    // margin-bottom: 20px;
    height: 420px;
    .about_value {
      .fuwei_bg {
        height: 380px;
        position: absolute;
        left: 3%;
        z-index: 1;
      }
      width: 70%;
      h4 {
        position: relative;
        color: #333;
        border-bottom: 1px solid #d2d2d2;
        padding: 15px;
        margin-top: 10px;
        font-size: 16px;
        &:after {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto 0;
          content: "";
          height: 20px;
          width: 4px;
          background-color: #333;
        }
      }
      .content1 {
        position: absolute;
        width: 70%;
        padding: 20px;
        margin-top: 20px;
        right: 3%;
        background: #fff;
        z-index: 2;
        .news_main {
          width: 100%;
          ul {
            width: 100%;
            padding-bottom: 20px;
            li {
              width: 100%;
              margin-bottom: 15px;
              h6 {
                width: 100%;
                display: flex;
                align-items: center;
                .icon_index {
                  width: 22px;
                  height: 22px;
                  background-size: contain;
                }
                .value {
                  color: #333;
                  font-size: 16px;
                  margin-left: 10px;
                  flex: 1;
                  &.first {
                    font-size: 20px;
                  }
                }
                .time_info {
                  color: #999;
                  font-size: 12px;
                }
              }
              p {
                border-top: 1px solid #d6d6d6;
                text-indent: 2em;
                color: #666;
                padding: 15px;
                font-size: 16px;
                line-height: 28px;
                padding-left: 34px;
                margin-top: 15px;
              }
            }
          }
        }
        .page_tab_box {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 10px;
          .before,
          .after {
            display: block;
            float: left;
            text-align: center;
            width: 30px;
            height: 27px;
            line-height: 27px;
            border: 1px solid #999;
            color: #999;
            background: #fff;
            &:hover {
              background: #333;
              color: #fff;
            }
            &.on {
              background: #333;
              color: #fff;
            }
          }
          .after {
            float: right;
          }
          ul {
            float: left;
            li {
              float: left;
              color: #999;
              margin: 0 10px;
              cursor: pointer;
              &.on {
                color: #666;
              }
              &:hover {
                color: #666;
              }
            }
          }
        }
      }
    }
  }
  .grow__wrap {
    padding: 0 3%;
    margin-top: 200px;
    text-align: center;
    color: #fff;
    .grow_title,
    .grow_en {
      font-size: 28px;
    }
    .grow__line {
      height: 600px;
      padding-top: 30px;
      padding-bottom: 50px;
      .line {
        position: relative;
        height: 100%;
        width: 1px;
        background: #fff;
        margin: 0 auto;
        img {
          position: absolute;
          width: 15px;
          left: -7.5px;
        }
        .dot-1,
        .stemp-1 {
          top: 15%;
        }
        .dot-2,
        .stemp-2 {
          top: 28%;
        }
        .dot-3,
        .stemp-3 {
          top: 42%;
        }
        .dot-4,
        .stemp-4 {
          top: 55%;
        }
        .dot-5,
        .stemp-5 {
          top: 72%;
        }
        .dot-6,
        .stemp-6 {
          top: 90%;
        }
        .stemp-1 {
          right: 30px;
        }
        .stemp-2 {
          left: 30px;
        }
        .stemp-3 {
          right: 30px;
        }
        .stemp-4 {
          left: 30px;
        }
        .stemp-5 {
          right: 30px;
        }
        .stemp-6 {
          left: 30px;
        }
        p {
          position: absolute;
          width: 200px;
          font-size: 16px;
          opacity: 0.8;
        }
      }
    }
  }
}

.our__story {
  padding-top: 80px;
  margin: 0 3%;
  color: #fff;
  text-align: center;
  .story-title {
    font-size: 28px;
  }
  .story-en {
    font-size: 28px;
  }
  .story__wrap {
    position: relative;
    margin-top: 80px;
    display: flex;
    .qiangwei {
      position: relative;
      margin-left: 50px;
      height: 800px;
      transform: rotate(80deg);
      z-index: 1;
    }
    .story_content {
      position: absolute;
      top: 150px;
      right: 0;
      width: 65%;
      height: 300px;
      padding-top: 80px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      z-index: 2;
      p {
        font-size: 18px;
        line-height: 30px;
        color: rgb(0, 0, 0);
      }
    }
  }
}
.industry_wraper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .product_industry {
    margin-top: 20px;
    width: 80%;
  }
}
</style>
