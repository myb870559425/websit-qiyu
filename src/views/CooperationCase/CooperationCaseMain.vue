<template>
  <div class="page-container">
    <header-nav></header-nav>
    <div class="section clearfix">
      <div class="about_describe">
        <div class="company__sign"></div>
        <div class="nav_Main">
          <ul>
            <li :class="{'on':tabNub=='1'}" @click="trggerTab('1')">置业服务</li>
            <li :class="{'on':tabNub=='2'}" @click="trggerTab('2')">定制服务</li>
            <li :class="{'on':tabNub=='3'}" @click="trggerTab('3')">智慧园区</li>
            <li :class="{'on':tabNub=='4'}" @click="trggerTab('4')">灵活用工</li>
          </ul>
        </div>
      </div>
      <div class="about_value">
        <h4>首页 > 合作案例 > {{navTabData[tabNub]}}</h4>
        <div class="content1" v-if="tabNub=='1'">
          <div class="img_box">
            <ul class="clearfix">
              <li>
                <img src="./assets/img/case_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img2.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img3.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img4.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img5.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img6.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img7.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img8.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img2.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img3.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img1.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img2.png" alt />
              </li>
              <li>
                <img src="./assets/img/case_img3.png" alt />
              </li>
            </ul>
          </div>
          <div class="page_tab_box">
            <i class="before"><</i>
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
  data() {
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
      .content1 {
        padding-top: 30px;

        .img_box {
          width: 100%;
          ul {
            width: 100%;
            li {
              width: 33.3333%;
              float: left;
              img {
                width: 100%;
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
 