<template>
  <div class="page-container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <div class="section clearfix">
      <div class="about_describe">
        <div class="company__sign"></div>
        <div class="nav_Main">
          <img class="left__line"
               src="./assets/img/news__center_line.png"
               alt />
          <ul>
            <li :class="{ on: tabNub == '1' }"
                @click="trggerTab('1')">
              公司要闻
            </li>
            <li :class="{ on: tabNub == '2' }"
                @click="trggerTab('2')">
              产业新闻
            </li>
            <li :class="{ on: tabNub == '3' }"
                @click="trggerTab('3')">
              媒体关注
            </li>
          </ul>
        </div>
      </div>
      <div class="about_value">
        <h4>首页 > 新闻中心 > {{ navTabData[tabNub] }}</h4>
        <!-- <div class="content1"
             v-if="tabNub == '1'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <i class="icon_index index1"></i>
                  <div class="value first">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
                <p>
                  造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”着重打造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”着重打造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”
                </p>
              </li>
              <li>
                <h6>
                  <i class="icon_index index2"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index3"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index4"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="page_tab_box">
            <i class="before">
              <</i> <ul>
                <li class="on">1</li>
                <li>2</li>
                <li>3</li>
                </ul>
                <i class="after">></i>
          </div>
        </div>
        <div class="content1"
             v-if="tabNub == '2'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <i class="icon_index index1"></i>
                  <div class="value first">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
                <p>
                  造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”着重打造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”着重打造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”
                </p>
              </li>
              <li>
                <h6>
                  <i class="icon_index index2"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index3"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index4"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="page_tab_box">
            <i class="before">
              <</i> <ul>
                <li class="on">1</li>
                <li>2</li>
                <li>3</li>
                </ul>
                <i class="after">></i>
          </div>
        </div>
        <div class="content1"
             v-if="tabNub == '3'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <i class="icon_index index1"></i>
                  <div class="value first">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
                <p>
                  造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”着重打造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”着重打造填补行业空白的两大解决方案，即拳头产品“启誉智慧社区”和“启誉智慧校园”
                </p>
              </li>
              <li>
                <h6>
                  <i class="icon_index index2"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index3"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index4"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
              <li>
                <h6>
                  <i class="icon_index index_com"></i>
                  <div class="value">
                    启誉置业服务走进信阳，服务当地本土开发商好山水置业
                  </div>
                  <span class="time_info">2019.11.11</span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="page_tab_box">
            <i class="before">
              <</i> <ul>
                <li class="on">1</li>
                <li>2</li>
                <li>3</li>
                </ul>
                <i class="after">></i>
          </div>
        </div> -->
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
    return {
      tabNub: "1",
      navTabData: {
        "1": "公司要闻",
        "2": "产业新闻",
        "3": "媒体关注"
      }
    };
  },
  created () {
    if (this.$route.query && this.$route.query.newType) {
      this.tabNub = this.$route.query.newType;
    }
  },
  methods: {
    gotoDetails (index) {
      this.$router.push({
        path: "/about/AboutContent"
      });
    },
    navCallBack (index = "1") {
      this.tabNub = index;
    },
    trggerTab (type) {
      this.tabNub = type;
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
    margin-bottom: 20px;
    margin-top: 100px;
    .about_describe {
      position: relative;
      float: left;
      width: 30%;
      .company__sign {
        width: 250px;
        height: 100px;
        background: url("./assets/img/tit_2.png") no-repeat;
        background-size: contain;
        margin-bottom: 30px;
        margin-top: 15px;
      }
      .nav_Main {
        // border-left: 1px solid #999;
        position: relative;
        margin-left: 20px;
        .left__line {
          display: inline-block;
          width: 2px;
          height: 300px;
          position: absolute;
          left: -1px;
          top: -30px;
          z-index: -1;
        }
        ul {
          li {
            padding: 0 30px;
            font-size: 16px;
            color: #333;
            cursor: pointer;
            height: 54px;
            line-height: 54px;
            background-image: url("./assets/img/list_foo.png");
            background-repeat: no-repeat;
            background-size: 8px 8px;
            background-position: 0px 45%;
            margin-left: -4px;
            &:hover {
              color: #0073e5;
              font-size: 18px;
              background-image: url("./assets/img/list_on.png");
              background-size: 16px 16px;
              margin-left: -8px;
            }
          }
          .on {
            color: #0073e5;
            font-size: 18px;
            background-image: url("./assets/img/list_on.png");
            background-size: 16px 16px;
            margin-left: -8px;
          }
        }
      }
    }
    .about_value {
      float: left;
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
        padding: 20px;
        margin-top: 20px;
        width: 100%;
        background: #fff;

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
                  &.index1 {
                    background: url("./assets/img/news_img1.png") no-repeat;
                    background-size: contain;
                  }
                  &.index2 {
                    background: url("./assets/img/news_img2.png") no-repeat;
                    background-size: contain;
                  }
                  &.index3 {
                    background: url("./assets/img/news_img3.png") no-repeat;
                    background-size: contain;
                  }
                  &.index4 {
                    background: url("./assets/img/news_img4.png") no-repeat;
                    background-size: contain;
                  }
                  &.index_com {
                    width: 16px;
                    height: 16px;
                    background: url("./assets/img/list_foo.png") no-repeat;
                    background-size: contain;
                  }
                }
                .value {
                  color: #333;
                  font-size: 16px;
                  padding-left: 10px;
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
                color: #999;
                padding: 15px;
                line-height: 26px;
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
}
</style>
