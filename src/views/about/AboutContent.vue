<template>
  <div class="page-container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <div class="section clearfix">
      <div class="about_describe">
        <div class="company__sign"></div>

        <div class="nav_Main">
          <ul>
            <li :class="{ on: tabNub == '1' }" @click="trggerTab('1')">
              董事长致辞
            </li>
            <li :class="{ on: tabNub == '2' }" @click="trggerTab('2')">
              公司简介
            </li>
            <li :class="{ on: tabNub == '3' }" @click="trggerTab('3')">
              发展战略
            </li>
            <li :class="{ on: tabNub == '4' }" @click="trggerTab('4')">
              发展历程
            </li>
            <li :class="{ on: tabNub == '5' }" @click="trggerTab('5')">
              组织架构
            </li>
            <li :class="{ on: tabNub == '6' }" @click="trggerTab('6')">
              企业文化
            </li>
            <li :class="{ on: tabNub == '7' }" @click="trggerTab('7')">
              资质荣誉
            </li>
          </ul>
        </div>
      </div>
      <div class="about_value">
        <h4>首页 > 关于启誉 > {{ navTabData[tabNub] }}</h4>
        <div class="content clearfix" v-if="tabNub == '1'">
          <div class="img_box">
            <!-- <img src="./assets/img/character.png" /> -->
          </div>
          <div class="article">
            <h5>大国崛起，华夏生辉，启誉欣逢盛世</h5>
            <!-- <div class="title_bar">
              <span>发布时间：</span>
              <span>2019-02-22 12:22:00</span> |
              <span>点击数：</span>
              <span>380</span>
              <i class="icon_share"></i>
              <span class="text-blue">分享</span>
            </div> -->
            <ul class="article_content">
              <li>
                启誉者，众人合力，同心同德；千人一口，同气相求；细雨浥尘，滋养民生；路遥而至，山高而即。启誉自创立以来，始终坚持民生为本的发展理念，始终保持美容服务引领的发展战略，始终抱持回报社会的发展愿景，始终秉持匠人匠艺的发展品质。
              </li>
              <li>
                公司始终秉持“让生活方式因美容服务而变得更加美好”的企业宗旨，不断坚持“拥抱变化、敢为人先、永不言弃”的企业精神，一直保持“知行合一、精心专注、兑现承诺、开放尊重、追求卓越”的企业作风。形成了科学、前瞻、有效的发展模式，不断创造跨越式发展奇迹。
              </li>
              <li>
                每一步都是进步！这是启誉不忘初心的外在表现，是启誉牢记使命的内在要求。在实现中华民族伟大复兴的光明征途上，全体启誉人定当坚持不懈，勇往无前！
              </li>
            </ul>
          </div>
        </div>
        <div class="article_main" v-if="tabNub == '2'">
          <!-- <div class="title_bar">
            <span>发布时间：</span>
            <span>2019-02-22 12:22:00</span> |
            <span>点击数：</span>
            <span>380</span>
            <i class="icon_share"></i>
            <span class="text-blue">分享</span>
          </div> -->
          <div class="article_content2">
            <p>
              南宁市启誉美容咨询服务有限责任公司成立于2006年3月，公司主要以代理国内外中高档、高档产品为经营方向。
            </p>
            <p>
              目前，启誉员工150余人，2012年2月桂林分公司成立;在迎来公司十周年之际，公司势如破竹，2015年11月成立广州馥薇生物科技有限公司,且研发生产了自己的品牌“馥薇”，并于2016年7月成立湖南长沙馥薇公司。其中产品团队、技术团队、设计团队及管理人员中80%以上为大学本科及以上学历，技术团队平均科研项目经验5年以上的40人。
            </p>
            <p>
              目前代理品牌有面部：爱奴雅、玛玳、诺缇娜、养生：中里巴人、灸安康、石室翁。营养美容：元正灵芝破壁孢子粉。项目：苹果干细胞、V雕！目前在广西全区拥有加盟合作店800多家，公司本着“平等、快乐、合作、共赢”的经营方针，本着诚信合作、共同发展原则经营公司的品牌及公司合作客户，以“顾客至上、员工至上”的经营宗旨，先考虑顾客及公司员工的利益为先。以专业、专注、共享精神为广西美容院提供优质产品、优良服务。
            </p>
            <p>
              公司目前设立销售部、客服部、品牌部、教育培训部及设计部5大部门全心全意为客户服务员工福利·享受所有法定节假日·医疗保险·提供交通费·提供住宿·公司产品福利·岗前培训·养老保险·带薪年假·年终全公司国外旅游福利。
            </p>
          </div>
        </div>
        <div class="article_main" v-if="tabNub == '3'">
          <!-- <div class="title_bar">
            <span>发布时间：</span>
            <span>2019-02-22 12:22:00</span> |
            <span>点击数：</span>
            <span>380</span>
            <i class="icon_share"></i>
            <span class="text-blue">分享</span>
          </div> -->
          <div class="article_content">
            <p>
              启誉自2006年成立以来历经3次重大战略决策，形成了科学、前瞻、有效的发展模式，不断创造跨越式发展奇迹，为服务美业和‘健康你我他’做出了贡献。
            </p>
            <h6>第一次重大战略决策</h6>
            <p>
              2010年12月10日，公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗旨，“拥抱变化、敢为人先、永不言弃”的启誉精神和“知行合一、精心专注、兑现承诺、开放尊重、追求卓越”的启誉作风，形成了启誉独特的企业文化，成为公司快速健康发展的法宝。
            </p>
            <h6>第二次重大战略决策</h6>
            <p>
              为满足市场服务需求，2012年2月桂林分公司成立。
            </p>
            <h6>第三次重大战略决策</h6>
            <p>
              2015年11月成立广州馥薇生物科技有限公司,且研发生产了自己的品牌“馥薇”，并于2016年7月成立湖南长沙馥薇公司
            </p>
          </div>
        </div>
        <div class="article_main" v-if="tabNub == '4'">
          <!-- <div class="title_bar">
            <span>发布时间：</span>
            <span>2019-02-22 12:22:00</span> |
            <span>点击数：</span>
            <span>380</span>
            <i class="icon_share"></i>
            <span class="text-blue">分享</span>
          </div> -->
          <div class="article_content">
            <p>
              公司始终秉持“让生活方式因美容服务而变得更加智能”的企业宗旨，不断坚持“拥抱变化、敢为人先、永不言弃”的企业精神，一直保持“知行合一、精心专注、兑现承诺、开放尊重、追求卓越”的企业作风。通过科学前瞻的战略规划，以及围绕战略的高效执行，确保公司创造出中国企业界独树一帜的辉煌成就。
            </p>
            <div class="article_tab_main">
              <div class="top" v-show="timeType == '1'">
                <h6>苦练内功 夯实基础</h6>
                <p>
                  2006年3月，成立南宁市蓝宇德科电子有限公司。公司核心成员主要来自科研院所，与部分高校建立良好的合作关系。期间合作研发机器人视觉伺服系统软件、基于大数据和云计算的云需求预测软件系统、基于arcgis的水文监测系统等。
                </p>
              </div>
              <div class="top" v-show="timeType == '2'">
                <h6>提质增效 成立桂林分公司</h6>
                <p>
                  2012年2月，桂林分公司成立，着力于整合资源、规范流程、提升管理。加盟店家数量剧增，企业品牌和实力突飞猛进。
                </p>
              </div>
              <div class="top" v-show="timeType == '3'">
                <h6>立资立本 深化转型</h6>
                <p>
                  在迎来公司十周年之际，公司势如破竹，2015年11月成立广州馥薇生物科技有限公司，且研发生产了自己的品牌“馥薇”，并于2016年7月成立湖南长沙馥薇公司。
                </p>
              </div>
              <div class="time_bar">
                <div class="time_bar_main clearfix">
                  <i class="before" @click="clickTimeType('-1')"> <</i>
                  <ul>
                    <li
                      :class="{ on: timeType == '1' }"
                      @click="changeTimeType('1')"
                    >
                      2006 ~ 2012
                    </li>
                    <li
                      :class="{ on: timeType == '2' }"
                      @click="changeTimeType('2')"
                    >
                      2012 ~ 2015
                    </li>
                    <li
                      :class="{ on: timeType == '3' }"
                      @click="changeTimeType('3')"
                    >
                      2015~ 2021
                    </li>
                  </ul>
                  <i class="after" @click="clickTimeType('1')">></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="article_main" v-if="tabNub == '5'">
          <!-- <div class="title_bar">
            <span>发布时间：</span>
            <span>2019-02-22 12:22:00</span> |
            <span>点击数：</span>
            <span>380</span>
            <i class="icon_share"></i>
            <span class="text-blue">分享</span>
          </div> -->
          <div class="article_content5">
            <div class="img_box">
              <img src="./assets/img/c5_big.png" alt />
            </div>
          </div>
        </div>
        <div class="article_main" v-if="tabNub == '6'">
          <!-- <div class="title_bar">
            <span>发布时间：</span>
            <span>2019-02-22 12:22:00</span> |
            <span>点击数：</span>
            <span>380</span>
            <i class="icon_share"></i>
            <span class="text-blue">分享</span>
          </div> -->
          <div class="article_content6">
            <ul class="tab_box">
              <li
                :class="{ on: actType == '企业宗旨' }"
                @click="changeActType('企业宗旨')"
              >
                企业宗旨
              </li>
              <li
                :class="{ on: actType == '企业精神' }"
                @click="changeActType('企业精神')"
              >
                企业精神
              </li>
              <li
                :class="{ on: actType == '企业作风' }"
                @click="changeActType('企业作风')"
              >
                企业作风
              </li>
            </ul>
            <div class="content_main" v-show="actType == '企业宗旨'">
              <h5>
                <img src="./assets/img/tit_5.png" alt />
              </h5>
              <p>
                改善客户生活方式，是客户至上的经营理念的具体体现，是不忘初心的内在驱动。美容服务发展是企业保持竞争力的基石，是不断提升服务能力的重要抓手，是践行民生为本发展理念的有力支撑。
              </p>
              <p>
                启誉以回报社会为核心动力，立足服务民生、改善老百姓的生活方式，将美容服务贯穿于经营管理、客户服务、沟通合作、发展共赢等每一个环节。
              </p>
              <div class="con6_img_box">
                <img src="./assets/img/con6_img.png" alt />
              </div>
            </div>
            <div class="content_main" v-show="actType == '企业精神'">
              <h5>
                <img src="./assets/img/con6_t.png" alt />
              </h5>
              <p>
                启誉精神是全体启誉人的思想成果和精神力量，并在企业发展过程中不断完善和升华，有助于员工最大限度地挖掘自身潜力、最大程度地释放自身创造力，与企业同呼吸共命运，从而使企业产生巨大的凝聚力和竞争力。
              </p>
              <h6>拥抱变化</h6>
              <p>
                集中体现为员工与时俱进，敢于打破常规的创新思维，锐意进取，积极主动勇于担当的主人翁意识，是启誉人的精神写照。
              </p>
              <h6>敢为人先</h6>
              <p>
                集中体现为员工积极的心态、宽广的心胸，面对一切变数荣辱不惊，从变数中寻找提升点并加以利用，是启誉人的优良传统。
              </p>
              <h6>永不言弃</h6>
              <p>
                集中体现为员工面对工作不惧困难、敢于挑战、拼搏向上，团队内部成员不抛弃、不放弃的坚守，是启誉人的价值取向。
              </p>
              <div class="con6_img_box">
                <img src="./assets/img/con6_img.png" alt />
              </div>
            </div>
            <div class="content_main" v-show="actType == '企业作风'">
              <h5>
                <img src="./assets/img/tit_6.png" alt />
              </h5>
              <p>
                启誉作风是公司高速发展的秘诀所在，一流的企业作风锻造了一支敢于拼搏、善打硬仗的“启誉铁军”。
              </p>
              <h6>知行合一</h6>
              <p>
                把自己摆进去、把职责摆进去、把工作摆进去，做到学、思、用贯通，知、信、行统一。
              </p>
              <h6>精心专注</h6>
              <p>专业领域精进不休，产品服务精益求精。</p>
              <h6>兑现承诺</h6>
              <p>
                诚信是企业发展的保证，是个人立足之本。待人真诚、表里如一、真抓实干。
              </p>
              <h6>开放尊重</h6>
              <p>充分信任、尊重事实、平等相待、互学互鉴、美美与共。</p>
              <h6>追求卓越</h6>
              <p>充满激情、精雕细琢、快速响应、办事高效、注重细节。</p>
              <div class="con6_img_box">
                <img src="./assets/img/con6_img.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="article_main" v-if="tabNub == '7'">
          <!-- <div class="title_bar">
            <span>发布时间：</span>
            <span>2019-02-22 12:22:00</span> |
            <span>点击数：</span>
            <span>380</span>
            <i class="icon_share"></i>
            <span class="text-blue">分享</span>
          </div> -->
          <div class="article_content7">
            <ul class="img_box clearfix">
              <!-- <li>
                <img src="./assets/img/con7_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/con7_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/con7_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/con7_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/con7_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/con7_img1.png" alt />
              </li> -->
            </ul>

            <!-- <div class="page_tab_box">
              <i class="before"> <</i>
              <ul>
                <li class="on">1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <i class="after">></i>
            </div> -->
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
  props: ["items"],
  data() {
    return {
      tabNub: "1",
      timeType: "1",
      actType: "企业精神",
      navTabData: {
        "1": "董事长致辞",
        "2": "公司简介",
        "3": "发展战略",
        "4": "发展历程",
        "5": "组织架构",
        "6": "企业文化",
        "7": "资质荣誉"
      }
    };
  },
  created() {
    this.tabNub = this.$route.query.tabNumber;
  },
  methods: {
    bestLaCroixFlavor() {
      return "test success";
    },
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
    },
    changeActType(type) {
      this.actType = type;
    },
    changeTimeType(index) {
      this.timeType = index;
    },
    clickTimeType(num) {
      this.timeType = parseInt(this.timeType) + parseInt(num);
      if (this.timeType == 4) {
        this.timeType = 1;
      } else if (this.timeType == 0) {
        this.timeType = 3;
      }
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
        background: url("./assets/img/tit_1.png") no-repeat;
        background-size: contain;
        margin-bottom: 30px;
        margin-top: 15px;
      }
      .nav_Main {
        border-left: 1px solid #999;
        margin-left: 20px;
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
        color: #333;
        border-bottom: 1px solid #d2d2d2;
        padding: 15px;
        margin-top: 10px;
        font-size: 16px;
      }
      .content {
        padding-top: 30px;
        .img_box {
          width: 25%;
          float: left;
          img {
            width: 100%;
          }
        }
        .article {
          width: 70%;
          float: left;
          padding-left: 30px;
          h5 {
            font-size: 22px;
            color: #333;
            font-weight: bold;
          }
          .title_bar {
            color: #999;
            margin: 15px 0;
            font-size: 12px;
            .icon_share {
              display: inline-block;
              width: 14px;
              height: 14px;
              background: #ccc url("./assets/img/icon_share.png") no-repeat;
              background-size: cover;
              cursor: pointer;
              margin: 0 5px;
            }
            .text-blue {
              cursor: pointer;
            }
          }
          .article_content {
            li {
              line-height: 26px;
              color: #333;
              text-indent: 2em;
            }
          }
        }
      }
      .article_main {
        .title_bar {
          color: #999;
          margin: 15px 0;
          font-size: 12px;
          .icon_share {
            display: inline-block;
            width: 14px;
            height: 14px;
            background: #ccc url("./assets/img/icon_share.png") no-repeat;
            background-size: cover;
            cursor: pointer;
            margin: 0 5px;
          }
          .text-blue {
            cursor: pointer;
          }
        }
        .article_content {
          color: #333;
          p {
            line-height: 26px;
            text-indent: 2em;
          }
          h6 {
            font-size: 16px;
            font-weight: bold;
            margin: 15px 0;
          }
        }
      }
      .article_tab_main {
        width: 100%;
        margin-top: 25px;
        background: #fff;
        padding: 15px 0;
        .top {
          padding: 0 20px;
        }
        .time_bar {
          width: 100%;
          border-top: 1px solid #d2d2d2;
          padding-bottom: 20px;
          margin-top: 60px;
          .time_bar_main {
            padding: 15px;
            padding-top: 25px;
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
              margin-top: -25px;

              li {
                float: left;
                margin: 0 30px;
                font-size: 20px;
                color: #999;
                font-weight: bold;
                cursor: pointer;
                padding-top: 25px;
                &:hover {
                  background-image: url("./assets/img/icon_current.png");
                  background-size: 18px 16px;
                  background-position: 48% 0;
                  background-repeat: no-repeat;
                  color: #0073e5;
                }
                &.on {
                  background-image: url("./assets/img/icon_current.png");
                  background-size: 18px 16px;
                  background-position: 48% 0;
                  background-repeat: no-repeat;
                  color: #0073e5;
                }
              }
            }
          }
        }
      }
      .article_content2 {
        p {
          text-indent: 2em;
          font-size: 14px;
          color: #666;
          line-height: 26px;
          margin-top: 10px;
        }
      }
      .article_content5 {
        padding: 30px 0;
        text-align: center;
        width: 100%;
        .img_box {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
      .article_content6 {
        .tab_box {
          display: flex;
          margin: 15px auto;
          align-items: center;
          justify-content: center;
          li {
            color: #333;
            padding: 5px 15px;
            border: 1px solid #333;
            border-right: none;
            cursor: pointer;
            &:last-child {
              border-right: 1px solid #333;
            }
            &:hover {
              background: #333;
              color: #fff;
            }
            &.on {
              background: #333;
              color: #fff;
            }
          }
        }
        .content_main {
          background: #fff;
          padding: 20px;
          h5 {
            padding-top: 10px;
            display: block;
            img {
              transform: scale(0.6, 0.6);
              transform-origin: 0 0;
            }
          }
          p {
            color: #333;
            line-height: 26px;
            text-indent: 2em;
          }
          h6 {
            font-size: 16px;
            font-weight: bold;
            margin: 15px 0;
          }
          .con6_img_box {
            margin-top: 15px;
            img {
              width: 100%;
            }
          }
        }
      }
      .article_content7 {
        .img_box {
          width: 100%;
          padding: 20px 0;
          li {
            width: 33.33333%;
            float: left;
            padding: 0 10px;
            margin-bottom: 20px;
            img {
              width: 100%;
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
