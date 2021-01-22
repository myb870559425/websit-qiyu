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
                隐私声明
              </div>
            </li>
            <li :class="{ on: tabNub == '2' }" @click="trggerTab('2')">
              <div class="tab_name">退换货政策</div>
            </li>
            <li :class="{ on: tabNub == '3' }" @click="trggerTab('3')">
              <div class="tab_name">常见问题</div>
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
                    隐私声明
                  </div>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <p>
              "馥薇"承诺尊重您的隐私和您的个人信息安全。"馥薇"并且承诺尽可能地为您提供最佳的服务。比如，"馥薇"会利用通过网站运作而收集到的这些信息，来制定您的个性化沟通方式和购物经历、也可以更好地对您的客户服务调查做出反应、对您的订单和帐户信息及客户服务需求与您进行沟通、就"馥薇"网站中的商品和活动与您进行沟通以及为了其他推广宣传目的、优化管理、促销、调查等其他本网站的特别项目使用这些信息。"馥薇"也可以用这样的信息来阻止可能的被禁止项目和非法活动，用以加强使用规则和条款的实施，并用以解决争议和保护其合法的私有财产权益及解决涉及"馥薇"的交易活动而产生的问题
              。
            </p>
            <p class="title">隐私申明</p>
            <p>
              欢迎访问本站。以下文字公开我公司旗下所有网站对信息收集和使用的情况，我们制定了隐私保护制度以保护您的隐私，在您使用我公司网站提供的服务前，请您仔细阅读以下声明
              。
            </p>

            <p class="title">保护隐私原则</p>
            <p>
              本站将对用户所提供的资料进行严格的管理及保护，本站将使用相应的技术，防止您的个人资料丢失、被盗用或遭篡改。但请注意在因特网上不存在“完善的安全措施”，因此我们不承诺上述资料绝对安全。我们不会向任何第三方提供，出售，出租，分享和交易用户的个人信息。当我们被法律强制或依照政府要求提供您的信息时，例如，政府机构请求、法院调查令等法律规定，我们将善意地披露您的资料
              。
            </p>
            <p class="title">免责条款</p>
            <p>
              在如下情况下，本站将不对您的隐私泄露承担责任：
              您同意让第三方共享资料；
              您同意公开你的个人资料，享受为您提供的产品和服务；
              本站需要听从法庭传票、法律命令或遵循法律程序；
              因黑客行为或用户的保管疏忽导致帐号、密码遭他人非法使用。
              修改您的资料
              您可以随时在成功登录本网站后修改或者更新您的个人信息和密码。
            </p>
            <p class="title">联系我们</p>
            <p>
              如果您对本隐私声明、隐私保护措施以及您在使用中的问题有任何意见和建议，请及时和我们联系：www.qiyufuwei.com
            </p>
          </div>
        </div>
        <div class="content1" v-if="tabNub == '2'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    退换货政策
                  </div>
                  <span class="time_info"></span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <p class="title">补发</p>

            客户在签收产品后，有发现漏发、错发现象时，须在第一时间联系业务员或客服，时间为3天（包含签收当天）之内。

            <p class="title">退 / 换货（过敏问题）</p>

            客户在使用我们产品后有过敏现象，在签收15天（包含签收当天）之内可申请退货（须附上过敏照片，医院的皮肤诊断证明），签收使用产品15天后对过敏性问题不再负责。

            <p class="title">退 / 换货（产品质量）</p>

            客户在收到产品3天（包含签收当天）之内发现有明显的质量问题，我们会予以安排退
            / 换货，超过3天则不受理。客户退 /
            换货，需要登陆商城，进入会员中心进行退 /
            换货申请，提交申请后，我们的客服会在第一时间跟您进行联系，给予及时处理（产品包材问题需附上照片），申请成功后，我们将安排产品的更换配送。

            <p class="title">非质量问题</p>

            7天内无理由退换：伊的家支持签收7天内产品完好不影响二次销售情况下，无理由退换货，邮费买家承担，已拆封不支持退换，超过7天不允许退换
            如发生退货，请于每天8：30-21：30致电客服，我们会妥善为您受理。
            本公司保留最终解释权
          </div>
        </div>
        <div class="content1" v-if="tabNub == '3'">
          <div class="news_main">
            <ul>
              <li>
                <h6>
                  <div class="value first">
                    常见问题
                  </div>
                  <span class="time_info"></span>
                </h6>
              </li>
            </ul>
          </div>
          <div class="product-item">
            <p class="title">Q：拍付了什么时候发货呢？</p>
            <p>
              "小薇"为您解答：您好，订单非活动期间会在您拍付的24小时内发出。
            </p>
            <p class="title">Q：刚刚申请了退款什么时候可以处理呢？</p>
            <p>
              "小薇"为您解答：咱们会在您申请后第一时间联系您确认
              确认后联系财务处理退款，退款方式与您的支付方式一致（银行卡退款将在7个工作日生效）；支付宝/微信等快捷支付会更快哦
              (*^__^*) 嘻嘻……
            </p>
            <p class="title">Q：退款到账时间多久？</p>
            <p>
              "小薇"为您解答：咱们退款一般为联系财务的2个工作日内处理；退款方式与您的支付方式一致（银行卡退款将在7个工作日生效）；支付宝/微信等快捷支付会更快哦
              (*^__^*) 嘻嘻……
            </p>
            <p class="title">Q：发了好多天了怎么一直收到不到呢？</p>
            <p>
              "小薇"为您解答：麻烦您提供下您的订单联系咱们在线客服或者您的老师，咱们为您联系快递核实查询，核实后第一时间联系您，如出现物流问题咱们会催促快递给您优先安排处理！
            </p>
            <p class="title">Q：为什么一直联系不到客服？</p>
            <p>咱们的客服上班时间为：早上8点30分--晚上21点30分；</p>
            <p class="title">Q：收到货物漏发/错发了怎么办？</p>
            <p>
              "小薇"为您解答：对于您遇到这个事情十分抱歉，麻烦您提供下收到产品照片+漏发/多发产品名字告诉咱们，咱们会为您联系配送中心核查，
              核查后多发会为您安排退回更换/漏发会为您安排补发！
            </p>
            <p class="title">Q：使用过敏了怎么办呢？</p>
            <p>
              "小薇"为您解答：亲爱的您先别着急，因为每个人的肌肤不一样咱们无法给您保证咱们产品会适用于所有人员，如果出现不适您需要第一时间暂停使用清洗脸部，如出现轻微红肿使用冰镇的蒸馏水敷于脸部舒缓敏感；在您按照以上方法处理后，请于签收使用的15天内附上过敏照片，医院的皮肤诊断证明
              联系咱们为您办理退货，如超过15天咱们将不在负责。
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
                  background-repeat: no-repeat;
                  background-size: contain;
                  margin-left: 20px;
                }
              }
            }
            &:hover {
              .tab_name {
                color: #fff;
                font-size: 18px;
              }
              background-size: 16px 16px;
              margin-left: -8px;
            }
            &.on {
              .tab_name {
                color: #fff;
                font-size: 18px;
              }
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
          .title {
            margin-top: 20px;
            font-size: 18px;
          }
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
