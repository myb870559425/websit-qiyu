<template>
  <div class="page-container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <div class="section clearfix">
      <div class="about_describe">
        <div class="company__sign"></div>
        <div class="nav_Main">
          <ul>
            <li :class="{ on: tabNub == '1' }" @click="trggerTab('1')">
              <div class="tab_name multiple">
                配送范围
              </div>
            </li>
            <li :class="{ on: tabNub == '2' }" @click="trggerTab('2')">
              <div class="tab_name">发货流程</div>
            </li>
            <li :class="{ on: tabNub == '3' }" @click="trggerTab('3')">
              <div class="tab_name">快递查询</div>
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
                    配送范围
                  </div>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <p>
              全国配送点及配送范围 沈阳：黑龙江、吉林、辽宁、内蒙古
              天津：天津、北京、山西、河北、内蒙古
              郑州：河南、山西、陕西、内蒙古
              济南：山东、北京、山西、内蒙古、江苏
              杭州：浙江、上海、江苏、福建、安徽
              成都：四川、青海、云南、甘肃、西藏、新疆、宁夏、重庆
              长沙：湖南、湖北、江西、浙江、福建、安徽
              广州：广东、广西、湖南、贵州、福建、海南
              全民体验“T+1”快速物流配送服务！
              当您成功提交订单后（以订单进入出库时间开始计算），我们会根据您所在的区域，为您选择离您最近的配送中心为您发货。在国内，90%在商城购物的客户，可以享受当天购物次日到达的快速物流配送服务。注：如遇交通管制、雷雨天气、洪涝、地震、水灾、停电、节假日等特殊情况，配送会稍有延误，如引起不便，敬请见谅
              。
            </p>
          </div>
        </div>
        <div class="content1" v-if="tabNub == '2'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    发货流程
                  </div>
                  <span class="time_info"></span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <p>我们提供提供专业配送与服务，目的是给到大家更优质的体验感受</p>
            <p class="delivery-process">
              <span>核实订单</span>—— <span>配货</span>——
              <span>验清货物</span>—— <span>打包货物</span>——
              <span>货物发出</span>
            </p>
          </div>
        </div>
        <div class="content1" v-if="tabNub == '3'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    快递查询
                  </div>
                  <span class="time_info"></span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <p>
              可以通过以下了链接查询快递信息
            </p>
            <p>【中通快递查询】 查询网址：http://www.zto.cn 服务热线：95311</p>
            <p>【圆通快递查询】 查询网址：http://www.sto.cn 服务热线：95554</p>
            <p>
              【EMS/E邮宝查询】 查询网址：http://www.ems.com.cn 服务热线：11183
            </p>
            <p>
              【韵达快递】 查询网址： http://www.yundaex.com/ 服务热线：95546
            </p>
            <p>
              【顺丰快递】 查询网址：http://www.sf-express.com/cn/sc/
              服务热线：95338
            </p>
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
        "1": "配送范围",
        "2": "发货流程",
        "3": "快递查询"
      }
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
    },
    navCallBack(index = "1") {
      this.tabNub = index;
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
        background-size: contain;
        margin-bottom: 30px;
        margin-top: 15px;
      }
      .nav_Main {
        // border-left: 1px solid #999;
        margin-left: 20px;
        ul {
          li {
            // background-image: url("./assets/img/list_foo.png");
            background-repeat: no-repeat;
            background-size: 8px 8px;
            background-position: 0px 19px;
            margin-left: -4px;
            .tab_name {
              color: #999;
              cursor: pointer;
              display: inline-block;
              height: 54px;
              line-height: 54px;
              padding-left: 30px;

              &.multiple {
                display: flex;
                align-items: center;
                .icon_multiple {
                  width: 12px;
                  height: 7px;
                  // background-image: url("./assets/img/list_show.png");
                  background-repeat: no-repeat;
                  background-size: contain;
                  margin-left: 20px;
                }
              }
            }
            // .tab_list {
            //   font-size: 14px;
            //   .tab_list_item {
            //     cursor: pointer;
            //     display: block;
            //     margin-top: 20px;
            //     margin-left: 8px;
            //     background-image: url("./assets/img/children_list_foo.png");
            //     background-repeat: no-repeat;
            //     background-size: 45px 5px;
            //     background-position: 0px 10px;
            //     padding-left: 50px;
            //     &:first-child {
            //       margin-top: 0px;
            //     }
            //     &:hover {
            //       color: #fff;
            //       background-image: url("./assets/img/children_list_on.png");
            //       background-repeat: no-repeat;
            //       background-size: 45px 5px;
            //     }
            //     &.on {
            //       color: #fff;
            //       background-image: url("./assets/img/children_list_on.png");
            //       background-repeat: no-repeat;
            //       background-size: 45px 5px;
            //     }
            //   }
            // }
            &:hover {
              .tab_name {
                color: #fff;
                font-size: 18px;
              }
              // background-image: url("./assets/img/list_on.png");
              background-size: 16px 16px;
              margin-left: -8px;
            }
            &.on {
              .tab_name {
                color: #fff;
                font-size: 18px;
              }
              // background-image: url("./assets/img/list_on.png");
              background-size: 16px 16px;
              margin-left: -8px;
            }
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
          flex-direction: column;
          background: #fff;
          padding: 30px;
          font-size: 16px;
          line-height: 30px;
          .delivery-process {
            margin-top: 50px;
            span {
              padding: 5px 10px;
              border: 1px solid #999;
              margin-right: 20px;
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
