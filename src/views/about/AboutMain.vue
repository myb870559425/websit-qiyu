<template>
  <div class="page-container container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <div class="section clearfix">
      <div class="about_describe">
        <div class="company__sign"></div>
        <div class="nav_Main">
          <ul>
            <li :class="{ on: tabNub == '1' }" @click="trggerTab('1')">
              水系列
            </li>
            <li :class="{ on: tabNub == '2' }" @click="trggerTab('2')">
              霜系列
            </li>
            <li :class="{ on: tabNub == '3' }" @click="trggerTab('3')">
              乳系列
            </li>
            <li :class="{ on: tabNub == '4' }" @click="trggerTab('4')">
              液系列
            </li>
          </ul>
        </div>
      </div>
      <div class="about_value">
        <div class="content1" v-if="tabNub == '1'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    水系列
                  </div>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <div
              @click="
                $router.push(`./about/ProductDetail?type=water&id=${index + 1}`)
              "
              class="item-wrap"
              v-for="(item, index) in waterSeriesList"
              :key="index"
            >
              <p class="sign">{{ item.prodSign }}</p>
              <img
                v-show="item.prodImg"
                :src="item.prodImg"
                alt="EV-01 卸洗露 100ml"
              />
              <p class="title">
                {{ item.prodTitle }}
              </p>
              <p v-show="item.prodImg" class="content">MORE</p>
            </div>
          </div>
        </div>
        <div class="content1" v-if="tabNub == '2'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    霜系列
                  </div>
                  <span class="time_info"></span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <div
              @click="
                $router.push(
                  `./about/ProductDetail?type=shuang&id=${index + 1}`
                )
              "
              class="item-wrap"
              v-for="(item, index) in shuangSeriesList"
              :key="index"
            >
              <p class="sign">{{ item.prodSign }}</p>
              <img
                v-show="item.prodImg"
                :src="item.prodImg"
                alt="EV-01 卸洗露 100ml"
              />
              <p class="title">
                {{ item.prodTitle }}
              </p>
              <p v-show="item.prodImg" class="content">MORE</p>
            </div>
          </div>
        </div>
        <div class="content1" v-if="tabNub == '3'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    乳系列
                  </div>
                  <span class="time_info"></span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <div
              @click="
                $router.push(`./about/ProductDetail?type=ru&id=${index + 1}`)
              "
              class="item-wrap"
              v-for="(item, index) in ruSeriesList"
              :key="index"
            >
              <p class="sign">{{ item.prodSign }}</p>
              <img
                v-show="item.prodImg"
                :src="item.prodImg"
                alt="EV-01 卸洗露 100ml"
              />
              <p class="title">
                {{ item.prodTitle }}
              </p>
              <p v-show="item.prodImg" class="content">MORE</p>
            </div>
          </div>
        </div>
        <div class="content1" v-if="tabNub == '4'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    液系列
                  </div>
                  <span class="time_info"></span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <div
              @click="
                $router.push(`./about/ProductDetail?type=ye&id=${index + 1}`)
              "
              class="item-wrap"
              v-for="(item, index) in yeSeriesList"
              :key="index"
            >
              <p class="sign">{{ item.prodSign }}</p>
              <img
                v-show="item.prodImg"
                :src="item.prodImg"
                alt="EV-01 卸洗露 100ml"
              />
              <p class="title">
                {{ item.prodTitle }}
              </p>
              <p v-show="item.prodImg" class="content">MORE</p>
            </div>
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
  data() {
    return {
      tabNub: "1",
      navTabData: {
        "1": "水系列°",
        "2": "霜系列°",
        "3": "乳系列°"
      },
      waterSeriesList: [
        {
          id: "1",
          type: "water",
          prodSign: "EV-01",
          prodTitle: "卸洗露100ml",
          prodImg: "../../../static/img/s-1.png"
        },
        {
          id: "2",
          type: "water",
          prodSign: "EV-03",
          prodTitle: "玫瑰保湿平衡水120ML",
          prodImg: "../../../static/img/s-2.png"
        },
        {
          id: "3",
          type: "water",
          prodSign: "EV-04",
          prodTitle: "甘菊舒缓平衡水120ML",
          prodImg: "../../../static/img/s-3.png"
        },
        {
          id: "4",
          type: "water",
          prodSign: "EV-05",
          prodTitle: "胶原润肤调理露120ML",
          prodImg: "../../../static/img/s-4.png"
        },
        {
          id: "5",
          type: "water",
          prodSign: "EV-06",
          prodTitle: "纯养离子拍拍水120ML",
          prodImg: "../../../static/img/s-5.png"
        },
        {
          id: "6",
          type: "water",
          prodSign: "EV-07",
          prodTitle: "瓷肌焕彩精华40ml",
          prodImg: "../../../static/img/s-6.png"
        },
        {
          id: "7",
          type: "water",
          prodSign: "EV-08",
          prodTitle: "柔皙静肤修护精华40ml",
          prodImg: "../../../static/img/s-7.png"
        },
        {
          id: "8",
          type: "water",
          prodSign: "EV-09",
          prodTitle: "净颜细致精华40ml",
          prodImg: "../../../static/img/s-8.png"
        },
        {
          id: "9",
          type: "water",
          prodSign: "EV-10",
          prodTitle: "多肽平抚紧致精华40ml",
          prodImg: "../../../static/img/s-9.png"
        },
        {
          id: "10",
          type: "water",
          prodSign: "EV-11",
          prodTitle: "辅酶眼精华40ml",
          prodImg: "../../../static/img/s-10.png"
        },
        {
          id: "11",
          type: "water",
          prodSign: "EV-13",
          prodTitle: "甘菊静肤啫喱100ml",
          prodImg: "../../../static/img/s-11.png"
        },
        { prodSign: "", prodTitle: "", prodImg: "" }
        // {
        //   id: "12",
        //   type: "water",
        //   prodSign: "",
        //   prodTitle: "水光焕颜净化水120ML",
        //   prodImg: "../../../static/img/s-12.png"
        // }
      ],
      shuangSeriesList: [
        {
          id: "1",
          type: "shuang",
          prodSign: "EV-14",
          prodTitle: "辅酶眼霜35g",
          prodImg: "../../../static/img/m-1.png"
        },
        {
          id: "2",
          type: "shuang",
          prodSign: "EV-15",
          prodTitle: "美雕赋活紧致霜55g",
          prodImg: "../../../static/img/m-2.png"
        },
        {
          id: "3",
          type: "shuang",
          prodSign: "EV-16",
          prodTitle: "柔皙静肤改良霜35g",
          prodImg: "../../../static/img/m-3.png"
        },
        {
          id: "4",
          type: "shuang",
          prodSign: "EV-08",
          prodTitle: "美雕赋活精华霜55g",
          prodImg: "../../../static/img/m-4.png"
        },
        // {
        //   id: "5",
        //   type: "shuang",
        //   prodSign: "",
        //   prodTitle: "多肽沁润精华霜35g",
        //   prodImg: "../../../static/img/m-5.png"
        // },
        // {
        //   id: "6",
        //   type: "shuang",
        //   prodSign: "",
        //   prodTitle: "净化舒活霜55g",
        //   prodImg: "../../../static/img/m-6.png"
        // },
        // {
        //   id: "7",
        //   type: "shuang",
        //   prodSign: "",
        //   prodTitle: "沁润净化均衡霜35g",
        //   prodImg: "../../../static/img/m-7.png"
        // },
        // {
        //   id: "8",
        //   type: "shuang",
        //   prodSign: "",
        //   prodTitle: "修护霜35g",
        //   prodImg: "../../../static/img/m-8.png"
        // },
        { prodSign: "", prodTitle: "", prodImg: "" }
      ],
      ruSeriesList: [
        {
          id: "1",
          type: "ru",
          prodSign: "EV-12",
          prodTitle: "胶原动力精华乳100ml",
          prodImg: "../../../static/img/r-1.png"
        },
        {
          id: "2",
          type: "ru",
          prodSign: "EV-17",
          prodTitle: "修颜隔离乳40ml",
          prodImg: "../../../static/img/r-2.png"
        },
        // {
        //   id: "3",
        //   type: "ru",
        //   prodSign: "",
        //   prodTitle: "瓷肌亮彩修护精乳100ml",
        //   prodImg: "../../../static/img/r-3.png"
        // },
        // {
        //   id: "4",
        //   type: "ru",
        //   prodSign: "",
        //   prodTitle: "多肽平抚精华乳100ML",
        //   prodImg: "../../../static/img/r-4.png"
        // },
        // {
        //   id: "5",
        //   type: "ru",
        //   prodSign: "",
        //   prodTitle: "醒肤修颜精乳100ml",
        //   prodImg: "../../../static/img/r-5.png"
        // },
        { prodSign: "", prodTitle: "", prodImg: "" }
      ],
      yeSeriesList: [
        {
          id: "1",
          type: "ye",
          prodSign: "FV-02",
          prodTitle: "多肽沁润修复肌底液35ml",
          prodImg: "../../../static/img/y-1.png"
        },
        {
          id: "2",
          type: "ye",
          prodSign: "FV-03",
          prodTitle: "旱金莲多肽原液35ml",
          prodImg: "../../../static/img/y-3.png"
        },
        {
          id: "3",
          type: "ye",
          prodSign: "FV-04",
          prodTitle: "水飞蓟多肽原液35ml",
          prodImg: "../../../static/img/y-4.png"
        },
        {
          id: "4",
          type: "ye",
          prodSign: "FV-05",
          prodTitle: "洋甘菊多肽原液35ml",
          prodImg: "../../../static/img/y-5.png"
        },
        {
          id: "5",
          type: "ye",
          prodSign: "FV-06",
          prodTitle: "百合花多肽原液35ml",
          prodImg: "../../../static/img/y-6.png"
        },
        // {
        //   id: "6",
        //   type: "ye",
        //   prodSign: "",
        //   prodTitle: "瓷肌亮彩肌底液35ml",
        //   prodImg: "../../../static/img/y-7.png"
        // },
        // {
        //   id: "7",
        //   type: "ye",
        //   prodSign: "",
        //   prodTitle: "寡肽修护原液40ml",
        //   prodImg: "../../../static/img/y-8.png"
        // },
        { prodSign: "", prodTitle: "", prodImg: "" }
      ]
    };
  },
  created() {
    if (this.$route.query && this.$route.query.newType) {
      this.tabNub = this.$route.query.newType;
    }
  },
  methods: {
    gotoDetails(index) {
      this.$router.push({
        path: "/about/AboutContent"
      });
    },
    navCallBack(index = "1") {
      this.tabNub = index;
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
  // margin-top: 20px;
  .section {
    width: 1190px;
    margin: 0 auto;
    // background: rgba(237, 237, 237, 0.34);
    padding: 15px;
    margin-bottom: 20px;
    // margin-top: 100px;
    .about_describe {
      position: relative;
      float: left;
      width: 30%;
      .company__sign {
        width: 250px;
        height: 100px;
        // background: url("./assets/img/tit_2.png") no-repeat;
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
          height: 180px;
          position: absolute;
          left: -1px;
          top: -30px;
          z-index: -1;
        }
        ul {
          li {
            padding: 0 30px;
            font-size: 16px;
            color: #999;
            cursor: pointer;
            height: 54px;
            line-height: 54px;
            // background-image: url("./assets/img/list_foo.png");
            background-repeat: no-repeat;
            background-size: 8px 8px;
            background-position: 0px 45%;
            margin-left: -4px;
            &:hover {
              color: #fff;
              font-size: 18px;
              // background-image: url("./assets/img/list_on.png");
              background-size: 16px 16px;
              margin-left: -8px;
            }
          }
          .on {
            color: #fff;
            font-size: 18px;
            // background-image: url("./assets/img/list_on.png");
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

        width: 100%;
        .news_main {
          padding-top: 20px;
          width: 100%;
          background: #fff;
          ul {
            width: 100%;
            // padding-bottom: 20px;
            li {
              width: 100%;
              margin-bottom: 15px;
              h6 {
                width: 100%;
                border-bottom: 1px solid #e6e6e6;
                display: flex;
                align-items: center;
                padding-bottom: 10px;
                .value {
                  color: #333;
                  font-size: 16px;
                  margin-left: 30px;
                  flex: 1;
                  &.first {
                    border-bottom: 1px solid #e6e6e6;
                    padding-bottom: 10px;
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
        .product-item {
          display: flex;
          background: #fff;
          flex-wrap: wrap;
          justify-content: space-between;
          .item-wrap {
            position: relative;
            .sign {
              position: absolute;
              top: 15px;
              left: 15px;
            }
          }
          div {
            width: 33%;
            height: 330px;
            text-align: center;
            overflow: hidden;
            border-right: 1px solid #213429;
            border-bottom: 1px solid #213429;
            .content {
              margin-top: 10px;
              color: #999;
            }
            .content:hover {
              color: #333;
            }
          }
          img {
            padding-top: 30px;
            width: 100%;
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
