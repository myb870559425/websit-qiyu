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
                生殖服务
                <i class="icon_multiple show"></i>
              </div>
              <div class="tab_list">
                <span class="tab_list_item on">灸安康</span>
                <span class="tab_list_item">阿曼尼</span>
              </div>
            </li>
            <li :class="{ on: tabNub == '2' }" @click="trggerTab('2')">
              <div class="tab_name">专家分析</div>
            </li>
            <li :class="{ on: tabNub == '3' }" @click="trggerTab('3')">
              <div class="tab_name">养生服务</div>
            </li>
            <li :class="{ on: tabNub == '4' }" @click="trggerTab('4')">
              <div class="tab_name">面霜服务</div>
            </li>
            <li :class="{ on: tabNub == '5' }" @click="trggerTab('5')">
              <div class="tab_name">活动合作</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="about_value">
        <h4>首页 > 合作案例 > {{ navTabData[tabNub] }}</h4>
        <!-- <div class="content1"
             v-if="tabNub=='1'">
          <div class="section1">
            <div class="tet_header">
              <em style="flex:1;"></em>
              <i>
                <img src="./assets/img/tit_icon_left.png"
                     alt />
              </i>
              <span>
                <img src="./assets/img/con_tit1.png"
                     alt />
              </span>
              <i>
                <img src="./assets/img/tit_icon_right.png"
                     alt />
              </i>
              <em style="flex:1;"></em>
            </div>
            <div class="content_main">
              <ul>
                <li class="mar_t_30">
                  <div class="item_top">
                    <img src="./assets/img/con1_img1.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <p class="text_title">0.1秒急速选房</p>
                    <div class="text_box">
                      <p>购房者0.1秒完成选房</p>
                      <p>省时 省力 省心</p>
                    </div>
                  </div>
                  <div class="icon_on_box">
                    <i class="icon_on"></i>
                  </div>
                </li>
                <li class="mar_b_30">
                  <div class="item_top">
                    <img src="./assets/img/con1_img2.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <p class="text_title">1小时配置房源</p>
                    <div class="text_box">
                      <p>开发商1小时完成配置</p>
                      <p>省时 省力 省心</p>
                    </div>
                  </div>
                  <div class="icon_on_box">
                    <i class="icon_on"></i>
                  </div>
                </li>
                <li class="mar_b_30">
                  <div class="item_top">
                    <img src="./assets/img/con1_img3.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <p class="text_title">10000人在线选房</p>
                    <div class="text_box">
                      <p>万人同时选房毫无压力</p>
                      <p>省时 省力 省心</p>
                    </div>
                  </div>
                  <div class="icon_on_box">
                    <i class="icon_on"></i>
                  </div>
                </li>
                <li class="mar_t_30">
                  <div class="item_top">
                    <img src="./assets/img/con1_img4.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <p class="text_title">100分完美体验</p>
                    <div class="text_box">
                      <p>百分百完美开盘成功率</p>
                      <p>省时 省力 省心</p>
                    </div>
                  </div>
                  <div class="icon_on_box">
                    <i class="icon_on"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="section2">
            <div class="tet_header">
              <em style="flex:1;"></em>
              <i>
                <img src="./assets/img/tit_icon_left.png"
                     alt />
              </i>
              <span>
                <img src="./assets/img/con_tit2.png"
                     alt />
              </span>
              <i>
                <img src="./assets/img/tit_icon_right.png"
                     alt />
              </i>
              <em style="flex:1;"></em>
            </div>
            <div class="content_main">
              <ul>
                <li>
                  <div class="img_box">
                    <img src="./assets/img/con2_img1.png"
                         alt />
                    <p class="mar_t_10">担心前期投入成本</p>
                    <div class="mar_t_10 con2_tit">
                      <img src="./assets/img/con2_tit1.png"
                           alt />
                    </div>
                  </div>
                  <div class="icon_on_box">
                    <i class="icon_on"></i>
                  </div>
                </li>
                <li>
                  <div class="img_box">
                    <img src="./assets/img/con2_img2.png"
                         alt />
                    <p class="mar_t_10">担心前期投入成本</p>
                    <div class="mar_t_10 con2_tit">
                      <img src="./assets/img/con2_tit2.png"
                           alt />
                    </div>
                  </div>
                  <div class="icon_on_box">
                    <i class="icon_on"></i>
                  </div>
                </li>
                <li>
                  <div class="img_box">
                    <img src="./assets/img/con2_img3.png"
                         alt />
                    <p class="mar_t_10">担心前期投入成本</p>
                    <div class="mar_t_10 con2_tit">
                      <img src="./assets/img/con2_tit3.png"
                           alt />
                    </div>
                  </div>
                  <div class="icon_on_box">
                    <i class="icon_on"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="section3">
            <div class="tet_header">
              <em style="flex:1;"></em>
              <i>
                <img src="./assets/img/tit_icon_left.png"
                     alt />
              </i>
              <span>
                <img src="./assets/img/con_tit3.png"
                     alt />
              </span>
              <i>
                <img src="./assets/img/tit_icon_right.png"
                     alt />
              </i>
              <em style="flex:1;"></em>
            </div>
            <div class="content_main">
              <ul>
                <li>
                  <div class="item_top">
                    <img class="foo"
                         src="./assets/img/con4_img1.png"
                         alt />
                    <img class="on"
                         src="./assets/img/con4_img1_on.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <img src="./assets/img/con4_tit1.png"
                         alt />
                  </div>
                  <div class="item_bottom">
                    <p>
                      微信在手简单操作
                      <br />足不出户锁定意向
                    </p>
                  </div>
                </li>
                <li>
                  <div class="item_top">
                    <img class="foo"
                         src="./assets/img/con4_img2.png"
                         alt />
                    <img class="on"
                         src="./assets/img/con4_img2_on.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <img src="./assets/img/con4_tit2.png"
                         alt />
                  </div>
                  <div class="item_bottom">
                    <p>
                      拓客逼定营造氛围
                      <br />去化执行转化提升
                    </p>
                  </div>
                </li>
                <li>
                  <div class="item_top">
                    <img class="foo"
                         src="./assets/img/con4_img3.png"
                         alt />
                    <img class="on"
                         src="./assets/img/con4_img3_on.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <img src="./assets/img/con4_tit3.png"
                         alt />
                  </div>
                  <div class="item_bottom">
                    <p>
                      能想到的经营策略
                      <br />全部支持包您满意
                    </p>
                  </div>
                </li>
                <li>
                  <div class="item_top">
                    <img class="foo"
                         src="./assets/img/con4_img4.png"
                         alt />
                    <img class="on"
                         src="./assets/img/con4_img4_on.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <img src="./assets/img/con4_tit4.png"
                         alt />
                  </div>
                  <div class="item_bottom">
                    <p>
                      阿里云盾安全防护
                      <br />腾讯平台隐私保障
                    </p>
                  </div>
                </li>
                <li>
                  <div class="item_top">
                    <img class="foo"
                         src="./assets/img/con4_img5.png"
                         alt />
                    <img class="on"
                         src="./assets/img/con4_img5_on.png"
                         alt />
                  </div>
                  <div class="item_center">
                    <img src="./assets/img/con4_tit5.png"
                         alt />
                  </div>
                  <div class="item_bottom">
                    <p>
                      深耕行业二十余年
                      <br />服务地产培育同行
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="section5">
            <div class="tet_header">
              <em style="flex:1;"></em>
              <i>
                <img src="./assets/img/tit_icon_left.png"
                     alt />
              </i>
              <span>
                <img src="./assets/img/con_tit5.png"
                     alt />
              </span>
              <i>
                <img src="./assets/img/tit_icon_right.png"
                     alt />
              </i>
              <em style="flex:1;"></em>
            </div>
            <div class="content_main">
              <div class="main">
                <div class="con5_bg">
                  <img src="./assets/img/con5_0.png" />
                  <span class="text1 hiding">评价</span>
                  <span class="text2 hiding">要素</span>
                  <span class="img1 hiding">
                    <img src="./assets/img/con5_1.png" />
                  </span>
                  <span class="img2 hiding">
                    <img src="./assets/img/con5_2.png" />
                  </span>
                  <div class="newMain">
                    <ul>
                      <li class="hiding">
                        <div class="totip">
                          一小时不能再多
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          不足传统费用的1/10
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          线上自动统计
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          一键上传图片
                          <br />高清呈现
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          人工操作
                          <br />系统计数
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          足不出户
                          <br />在线选房
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          每秒钟约1000套
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          井然有序
                          <br />运筹帷幄
                          <i class="con5_o"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                    </ul>
                    <div class="or_line">
                      <img src="./assets/img/con5_3.png"
                           alt />
                    </div>
                  </div>
                  <div class="oldMain">
                    <ul>
                      <li class="hiding">
                        <div class="totip">
                          多则一月
                          <br />少则两周
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          大盘几十万
                          <br />小盘十几万
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          线下收集问卷
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          印刷海报展板
                          <br />现场张贴
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          专人负责
                          <br />人工签到
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          精心布置
                          <br />专用场地
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          每小时约200套
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                      <li class="hiding">
                        <div class="totip">
                          变化无常
                          <br />世事难料
                          <i class="con5_b"></i>
                        </div>
                        <img src="./assets/img/dot.png"
                             alt />
                      </li>
                    </ul>
                    <div class="or_line">
                      <img src="./assets/img/con5_4.png" />
                    </div>
                  </div>
                  <div class="textMain">
                    <ul>
                      <li class="hiding">筹备时间</li>
                      <li class="hiding">筹备耗资</li>
                      <li class="hiding">客户意向</li>
                      <li class="hiding">房源展示</li>
                      <li class="hiding">开盘签到</li>
                      <li class="hiding">选房地点</li>
                      <li class="hiding">选房速度</li>
                      <li class="hiding">现场管理</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
  data() {
    return {
      tabNub: "1",
      navTabData: {
        "1": "生殖服务",
        "2": "专家分析",
        "3": "养生服务",
        "4": "面霜服务",
        "5": "活动合作"
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
        background: url("./assets/img/tit_3.png") no-repeat;
        background-size: contain;
        margin-bottom: 30px;
        margin-top: 15px;
      }
      .nav_Main {
        border-left: 1px solid #999;
        margin-left: 20px;
        ul {
          li {
            background-image: url("./assets/img/list_foo.png");
            background-repeat: no-repeat;
            background-size: 8px 8px;
            background-position: 0px 19px;
            margin-left: -4px;
            .tab_name {
              color: #333;
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
                  background-image: url("./assets/img/list_show.png");
                  background-repeat: no-repeat;
                  background-size: contain;
                  margin-left: 20px;
                }
              }
            }
            .tab_list {
              font-size: 14px;
              .tab_list_item {
                cursor: pointer;
                display: block;
                margin-top: 20px;
                margin-left: 8px;
                background-image: url("./assets/img/children_list_foo.png");
                background-repeat: no-repeat;
                background-size: 45px 5px;
                background-position: 0px 10px;
                padding-left: 50px;
                &:first-child {
                  margin-top: 0px;
                }
                &:hover {
                  color: #0073e5;
                  background-image: url("./assets/img/children_list_on.png");
                  background-repeat: no-repeat;
                  background-size: 45px 5px;
                }
                &.on {
                  color: #0073e5;
                  background-image: url("./assets/img/children_list_on.png");
                  background-repeat: no-repeat;
                  background-size: 45px 5px;
                }
              }
            }
            &:hover {
              .tab_name {
                color: #0073e5;
                font-size: 18px;
              }
              background-image: url("./assets/img/list_on.png");
              background-size: 16px 16px;
              margin-left: -8px;
            }
            &.on {
              .tab_name {
                color: #0073e5;
                font-size: 18px;
              }
              background-image: url("./assets/img/list_on.png");
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
        color: #333;
        border-bottom: 1px solid #d2d2d2;
        padding: 15px;
        margin-top: 10px;
        font-size: 16px;
      }
      .tet_header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-items: center;
        i {
          transform: scale(0.7, 0.7);
        }
        span {
          transform: scale(0.7, 0.7);
        }
      }
      .content1 {
        padding-top: 30px;

        .section1 {
          width: 100%;
          background: #fff;
          padding-top: 20px;
          .content_main {
            width: 100%;
            background: url("./assets/img/con1_bg.png") no-repeat;
            background-size: contain;
            height: 278px;
            ul {
              width: 100%;
              padding: 20px;
              display: flex;
              align-items: center;
              justify-items: center;
              height: 100%;
              li {
                width: 25%;
                padding: 0 14px;
                text-align: center;
                .item_top {
                  margin: 0 auto;
                  text-align: center;
                  img {
                    transform: scale(0.6, 0.6);
                  }
                }
                .item_center {
                  font-size: 16px;
                  color: #333;
                  text-align: center;
                  .text_box {
                    width: 100%;
                    background: url("./assets/img/con1_tit_bg.png") no-repeat;
                    background-size: contain;
                    text-align: center;
                    font-size: 12px;
                    color: #333;
                    margin-top: 10px;
                    padding-top: 5px;
                  }
                }
                .icon_on_box {
                  margin-top: 20px;
                  text-align: center;
                  .icon_on {
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                    background: url("./assets/img/icon_on.png") no-repeat;
                    background-size: contain;
                  }
                }
              }
            }
          }
        }
        .section2 {
          width: 100%;
          background: #fff;
          padding-top: 20px;
          .content_main {
            width: 100%;
            background: url("./assets/img/con2_bg.png") no-repeat;
            background-size: cover;
            ul {
              width: 100%;
              padding: 20px;
              display: flex;
              align-items: center;
              justify-items: center;
              li {
                width: 33.33333%;
                text-align: center;
                .img_box {
                  background: url("./assets/img/img_totip.png") no-repeat;
                  background-size: 100%;
                  padding-bottom: 33px;
                  > img {
                    width: 67%;
                    margin-top: 35px;
                  }
                  .con2_tit {
                    transform: scale(0.8, 0.8);
                  }
                }
                .icon_on_box {
                  margin-top: 20px;
                  text-align: center;
                  .icon_on {
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                    background: url("./assets/img/icon_on.png") no-repeat;
                    background-size: contain;
                  }
                }
              }
            }
          }
        }
        .section3 {
          width: 100%;
          background: #fff;
          padding-top: 20px;
          .content_main {
            width: 100%;
            padding: 20px 0;
            ul {
              width: 100%;
              display: flex;
              align-items: center;
              justify-items: center;
              padding: 20px 0;
              li {
                width: 20%;
                .item_top {
                  margin-bottom: 10px;
                  padding: 0 20px;
                  &:hover {
                    img {
                      width: 100%;
                      &.foo {
                        display: none;
                      }
                      &.on {
                        display: inline-block;
                      }
                    }
                  }
                  img {
                    width: 100%;
                    &.foo {
                      display: inline-block;
                    }
                    &.on {
                      display: none;
                    }
                  }
                }
                .item_center {
                  margin-bottom: 10px;
                  padding: 0 40px;
                  img {
                    width: 100%;
                  }
                }
                .item_bottom {
                  font-size: 12px;
                  color: #333;
                  padding: 0 10px;
                  p {
                    border: 1px solid #808080;
                    padding: 5px 10px;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        .section5 {
          width: 100%;
          padding: 20px 0;
          background: url("./assets/img/con_Bg5.png") no-repeat;
          background-size: 100%;
          .main {
            width: 100%;
            position: relative;
            .con5_bg {
              width: 100%;
              display: inline-block;
              margin: 0 auto;
              position: relative;
              padding-top: 60px;
              padding-left: 90px;
              padding-right: 70px;
              padding-bottom: 30px;
              > img {
                width: 100%;
              }
              .text1 {
                display: block;
                position: absolute;
                color: #fff;
                font-size: 16px;
                width: 20px;
                top: 20px;
                left: 87px;
              }
              .text2 {
                display: block;
                position: absolute;
                color: #fff;
                font-size: 16px;
                right: 20px;
                top: 322px;
              }
              .img1 {
                position: absolute;
                left: 19px;
                top: 250px;
                width: 60px;
                img {
                  width: 100%;
                }
              }
              .img2 {
                position: absolute;
                left: 19px;
                top: 128px;
                width: 60px;
                img {
                  width: 100%;
                }
              }
              .newMain {
                position: absolute;
                left: 95px;
                top: 94px;
                ul {
                  display: flex;
                  li {
                    height: 100px;
                    position: relative;
                    .totip {
                      padding: 6px 4px;
                      color: #fff;
                      text-align: center;
                      background: linear-gradient(
                        -63deg,
                        rgba(195, 169, 112, 1),
                        rgba(252, 134, 63, 1)
                      );
                      border-radius: 6px;
                      display: inline-block;
                      font-size: 12px;
                      position: absolute;
                      white-space: nowrap;
                      z-index: 2;
                      .con5_o {
                        width: 12px;
                        height: 5px;
                        position: absolute;
                        bottom: -5px;
                        left: 43%;
                        background: url("./assets/img/con5_o.png") no-repeat;
                        background-size: 12px 5px;
                      }
                    }
                    img {
                      position: absolute;
                      z-index: 1;
                    }
                    &:nth-child(1) {
                      width: 57px;
                      .totip {
                        right: -45px;
                        top: 25px;
                      }
                      img {
                        right: -11px;
                        bottom: -11px;
                      }
                    }
                    &:nth-child(2) {
                      width: 76px;
                      .totip {
                        right: -58px;
                        top: -33px;
                      }
                      img {
                        right: -11px;
                        bottom: 55px;
                      }
                    }
                    &:nth-child(3) {
                      width: 78px;
                      .totip {
                        right: -38px;
                        top: 4px;
                      }
                      img {
                        right: -11px;
                        bottom: 24px;
                      }
                    }
                    &:nth-child(4) {
                      width: 77px;
                      .totip {
                        right: -37px;
                        bottom: 24px;
                      }
                      img {
                        right: -11px;
                        bottom: -7px;
                      }
                    }
                    &:nth-child(5) {
                      width: 78px;
                      .totip {
                        right: -24px;
                        top: -24px;
                      }
                      img {
                        right: -11px;
                        bottom: 39px;
                      }
                    }
                    &:nth-child(6) {
                      width: 74px;
                      .totip {
                        right: -24px;
                        top: -10px;
                      }
                      img {
                        right: -11px;
                        bottom: 16px;
                      }
                    }
                    &:nth-child(7) {
                      width: 79px;
                      .totip {
                        right: -46px;
                        top: -25px;
                      }
                      img {
                        right: -11px;
                        bottom: 44px;
                      }
                    }
                    &:nth-child(8) {
                      width: 76px;
                      .totip {
                        right: -25px;
                        top: -68px;
                      }
                      img {
                        right: -11px;
                        bottom: 51px;
                      }
                    }
                  }
                }
                .or_line {
                  position: absolute;
                  left: 54px;
                  bottom: -4px;
                  overflow: hidden;
                  width: 546px;
                  img {
                    width: 100%;
                  }
                }
              }
              .oldMain {
                position: absolute;
                bottom: 57px;
                left: 95px;
                ul {
                  display: flex;
                  li {
                    height: 100px;
                    position: relative;
                    .totip {
                      padding: 6px 4px;
                      color: #fff;
                      text-align: center;
                      background: linear-gradient(
                        -63deg,
                        rgba(0, 72, 250, 1),
                        rgba(51, 137, 243, 1)
                      );
                      border-radius: 6px;
                      display: inline-block;
                      font-size: 12px;
                      position: absolute;
                      white-space: nowrap;
                      z-index: 2;
                      .con5_b {
                        width: 12px;
                        height: 5px;
                        position: absolute;
                        bottom: -5px;
                        left: 43%;
                        background: url("./assets/img/con5_b.png") no-repeat;
                        background-size: 12px 5px;
                      }
                    }
                    img {
                      position: absolute;
                      z-index: 1;
                    }
                    &:nth-child(1) {
                      width: 57px;
                      .totip {
                        right: -27px;
                        top: 11px;
                      }
                      img {
                        right: -11px;
                        bottom: 5px;
                      }
                    }
                    &:nth-child(2) {
                      width: 76px;
                      .totip {
                        right: -33px;
                        top: -6px;
                      }
                      img {
                        right: -11px;
                        bottom: 3px;
                      }
                    }
                    &:nth-child(3) {
                      width: 78px;
                      .totip {
                        right: -41px;
                        top: 33px;
                      }
                      img {
                        right: -11px;
                        bottom: 2px;
                      }
                    }
                    &:nth-child(4) {
                      width: 77px;
                      .totip {
                        right: -40px;
                        top: -1px;
                      }
                      img {
                        right: -11px;
                        bottom: -9px;
                      }
                    }
                    &:nth-child(5) {
                      width: 78px;
                      .totip {
                        right: -26px;
                        top: -15px;
                      }
                      img {
                        right: -11px;
                        bottom: 7px;
                      }
                    }
                    &:nth-child(6) {
                      width: 74px;
                      .totip {
                        right: -26px;
                        top: -19px;
                      }
                      img {
                        right: -11px;
                        bottom: 22px;
                      }
                    }
                    &:nth-child(7) {
                      width: 79px;
                      .totip {
                        right: -44px;
                        top: 18px;
                      }
                      img {
                        right: -11px;
                        bottom: 8px;
                      }
                    }
                    &:nth-child(8) {
                      width: 76px;
                      .totip {
                        right: -27px;
                        top: 12px;
                      }
                      img {
                        right: -11px;
                        bottom: -3px;
                      }
                    }
                  }
                }
                .or_line {
                  position: absolute;
                  left: 54px;
                  bottom: -4px;
                  overflow: hidden;
                  width: 546px;
                  img {
                    width: 100%;
                  }
                }
              }
              .textMain {
                position: absolute;
                left: 8px;
                bottom: 6px;
                ul {
                  display: flex;
                  margin-left: 105px;
                  li {
                    color: #f6f9ff;
                    font-size: 12px;
                    padding: 0 12px;
                    &:nth-child(2) {
                      margin-right: 10px;
                    }
                    &:nth-child(3) {
                      margin-right: 10px;
                    }
                    &:nth-child(4) {
                      margin-right: 10px;
                    }
                    &:nth-child(6) {
                      margin-right: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
