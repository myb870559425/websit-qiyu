<template>
  <div class="page-container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <div class="section clearfix">
      <div class="about_describe">
        <em class="company__sign"></em>
        <div class="company__title">
          <span class="english__about">TALENT&nbsp;&nbsp;STRATEGY</span>
          <p>人才战略</p>
        </div>
        <div class="nav_Main">
          <img class="left__line"
               src="./assets/img/news__center_line.png"
               alt="" />
          <ul>
            <li :class="{ on: tabNub == '1' }"
                @click="trggerTab('1')">
              人才理念
            </li>
            <li :class="{ on: tabNub == '2' }"
                @click="trggerTab('2')">
              人才招聘
            </li>
            <!-- <li :class="{'on':tabNub=='3'}"
                @click="trggerTab('3')">媒体关注</li> -->
          </ul>
        </div>
      </div>
      <div class="about_value">
        <h4>首页 > 人才战略 > {{ navTabData[tabNub] }}</h4>
        <div class="content1"
             v-if="tabNub == '1'">
          <div class="talents__mind_inner">
            <p class="talents__mind_title">国以才立，业以才兴</p>
            <p class="talents__mind_text">
              人才是企业发展的根本，是推动企业跨越式发展的第一生产。启誉重视团队建设，多渠道引进人才、高效机制培养人才、广阔平台晋升人才，为企业在激烈竞争中立于不败之地提供强有力的保障。
            </p>
            <h3 class="talents__mind_top">引进人才</h3>
            <p class="talents__mind_text">
              启誉不拘一格，注重品行、态度，开辟了各种招聘渠道，广纳贤才，严格筛选，大浪淘金。
            </p>
            <h3 class="talents__mind_top">培训人才</h3>
            <p class="talents__mind_text">
              启誉建立了全方位、系统化的培训体系，以文化融入为关键，以计划管理为核心，以在实战中提升员工能力水平为落脚点，培养了一批又一批努力拼搏、开拓进取的启誉人。
            </p>
            <h3 class="talents__mind_top">晋升人才</h3>
            <p class="talents__mind_text">
              启誉的高速、多元化发展，为每一个启誉人提供了广阔的发展空间和晋升平台。员工的主观能动性得到了最大限度地发挥，内在潜力得到了最大程度地挖掘，公司内部也因此形成了良好的激励氛围。
            </p>
            <p class="talents__mind_text"
               style="margin-top: 15px;">
              养士尊贤，俊杰在位，则有庆。远大的企业目标、先进的管理体系、科学的激励机制，铸就了一支高学历、高素质的启誉铁军。启誉目前拥有员工120余人，产品团队、技术团队、设计团队及管理人员中80%以上为大学本科及以上学历，技术团队平均科研项目经验5年以上的17人。启誉人崇高的理想、坚定的价值观和一往无前的执行力，形成了求真务实的企业文化、戮力同心的工作氛围、追求卓越的价值体系，成为公司屡创奇迹的强大推动力。
            </p>
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
        <div class="content2"
             v-if="tabNub == '2'">
          <div class="news_main">
            <div class="employ__title">
              <span>职位类型</span>
              <span>招聘人数</span>
              <span>工作地点</span>
              <span>操作</span>
            </div>
            <div class="employ__content"
                 :class="{ item__bg: index % 2 === 1 }"
                 v-for="(item, index) in employList"
                 :key="index">
              <p>{{ item.employName }}</p>
              <p>{{ item.employNum }}</p>
              <p>{{ item.area }}</p>
              <p class="employ__detial">
                <span>查看详情</span>
              </p>
            </div>
          </div>
          <div class="page_tab_box">
            <i class="before">
              < </i>
                <ul>
                <li class="on">1</li>
                <li>2</li>
                <li>3</li>
                </ul>
                <i class="after">></i>
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
    return {
      tabNub: "1",
      navTabData: {
        "1": "人才理念",
        "2": "人才招聘"
      },
      employList: [
        {
          employName: "美容导师",
          employNum: "30",
          area: "南宁"
        },
        {
          employName: "美容销售",
          employNum: "20",
          area: "南宁"
        },
        {
          employName: "美容培训师",
          employNum: "10",
          area: "南宁"
        },
        {
          employName: "仓库管理",
          employNum: "5",
          area: "南宁"
        },
        // {
        //   employName: "运维开发工程师",
        //   employNum: "20",
        //   area: "南宁"
        // }
      ]
    };
  },
  created () {
    this.tabNub = this.$route.query.tabNumber;
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
    navCallBack (index = "1") {
      this.tabNub = index;
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
        position: absolute;
        top: 16px;
        width: 250px;
        height: 48px;
        background: url("./assets/img/company__sign.png") no-repeat left;
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
          font-size: 20px;
          margin-top: 36px;
          text-align: left;
        }
        p {
          font-size: 26px;
          margin: 5px 50px 34px -6px;
        }
      }
      .nav_Main {
        // border-left: 1px solid #999;
        position: relative;
        .left__line {
          display: inline-block;
          width: 2px;
          height: 300px;
          position: absolute;
          left: -1px;
          top: -30px;
          z-index: -1;
        }
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
        position: relative;
        padding: 15px;
        margin-top: 10px;
        font-size: 16px;
        color: #333;
        border-bottom: 1px solid #d2d2d2;
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
        width: 100%;
        margin-top: 20px;
        line-height: 1;
        .talents__mind_inner {
          display: flex;
          flex-direction: column;
          font-family: "PangMenZhengDao";
          width: 100%;
          .talents__mind_title {
            font-weight: bold;
            line-height: 30px;
            font-size: 22px;
          }
          .talents__mind_top {
            font-size: 16px;
            font-weight: bold;
            margin: 15px 0;
          }
          .talents__mind_text {
            color: #333;
            line-height: 26px;
            text-indent: 2em;
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
      .content2 {
        width: 100%;
        margin-top: 20px;
        line-height: 1;
        .news_main {
          width: 100%;
          .employ__title {
            width: 100%;
            display: flex;
            font-size: 18px;
            text-align: center;
            padding: 14px 14px;
            background: rgba(106, 174, 242, 0.1);
            color: #333;
            span {
              flex: 1;
            }
          }
          .item__bg {
            background-color: rgba(128, 128, 128, 0.04);
          }
          .employ__content {
            display: flex;
            padding: 14px 14px;
            text-align: center;
            align-items: center;
            p {
              flex: 1;
            }
            .employ__detial {
              display: flex;
              justify-content: center;
              span {
                padding: 11px 15px;
                border-radius: 4px;
                background-color: rgba(0, 115, 229, 0.8);
                color: #fff;
                cursor: pointer;
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
