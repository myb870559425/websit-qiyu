<template>
  <div>
    <btm-entry></btm-entry>
    <footer class="location">
      <!-- <em class="center__sign"></em> -->
      <div class="location__inner">
        <div class="location__left">
          <div class="way" v-show="footerStyle === 'more'">
            <!-- <img src="../assets/img/sinline.png"
                 alt="新浪" />
            <img src="../assets/img/friend__share.png"
                 alt="朋友圈" />
            <img src="../assets/img/wei__chart.png"
                 alt="微信" /> -->
          </div>
          <div class="location__map" v-if="footerStyle === 'more'">
            <div id="location__pic"></div>
            <!-- <img class="location__pic"
                 src="../assets/img/location.png"
                 alt="地图" /> -->
          </div>
          <div
            class="location__so_on"
            :class="{ location__so_less: footerStyle !== 'more' }"
          >
            <div class="location__common">
              <img src="../assets/img/location__sign.png" alt />
              <p>
                总部办公地址：广州市海珠区江南大道中82号802房(仅限办公用途)
              </p>
            </div>
            <!-- <div class="location__common">
              <img src="../assets/img/location__sign.png" alt />
              <p>研发中心地址：</p>
            </div> -->
            <div class="location__common">
              <img src="../assets/img/email__sign.png" alt />
              <p>邮箱：fuwei_yx@163.com</p>
            </div>
            <div class="location__common">
              <img src="../assets/img/phone__sign.png" alt />
              <p>服务热线：18530808342</p>
            </div>
            <div class="location__common">
              <img src="../assets/img/banquan__sign.png" alt />
              <p>
                <a href="https://beian.miit.gov.cn">
                  版权所有：广州馥薇生物科技有限公司
                </a>
              </p>
            </div>
          </div>
          <div class="location__QRcode" v-show="footerStyle === 'more'">
            <!-- <img
              class="QRcode__pic"
              src="../assets/img/QR_code.png"
              alt="二维码"
            />
            <p>扫一扫 关注馥薇馥薇</p> -->
          </div>
        </div>
        <!-- <div class="location__QRcode_less" v-show="footerStyle !== 'more'">
          <img
            class="QRcode__pic"
            src="../assets/img/QR_code.png"
            alt="二维码"
          />
          <p>扫一扫 关注馥薇馥薇</p>
        </div> -->
        <!-- <div class="location__right" v-show="footerStyle === 'more'">
          <p class="suggest">
            <img src="../assets/img/suggess__sign.png" alt />
            投诉建议
          </p>
          <p class="suggest__text">
            感谢您对馥薇馥薇的关注，您可以填写下表，反馈问题或意见。
          </p>
          <p class="suggest__text">
            我们在收到您的留言后，会第一时间和您联系。
          </p>
          <div
            class="suggest__type"
            @click="suggestTypeflag = !suggestTypeflag"
            @mouseleave="suggestTypeflag = fase"
          >
            <img src="../assets/img/btm__sign.png" alt />
            <p class="suggest__left">留言类型</p>
            <input
              v-model="suggestType"
              type="text"
              style="cursor:pointer;"
              readonly
            />
            <div class="suggest__type_list" v-show="suggestTypeflag">
              <p @click="suggestType = '建议'">建议</p>
              <p @click="suggestType = '投诉'">投诉</p>
            </div>
          </div>
          <div class="suggest__name">
            <p class="suggest__left">姓名</p>
            <input type="text" />
          </div>
          <div class="suggest__phone">
            <p class="suggest__left">联系方式</p>
            <input type="text" />
          </div>
          <div class="suggest__emal">
            <p class="suggest__left">邮箱</p>
            <input type="text" />
          </div>
          <div class="suggest__area">
            <img class="area__one" src="../assets/img/btm__sign.png" alt />
            <img class="area__two" src="../assets/img/btm__sign.png" alt />
            <p class="suggest__left">所属地区</p>
            <input type="text" style="cursor:pointer;" readonly />
            <em style="flex:1;"></em>
            <input type="text" style="cursor:pointer;" readonly />
          </div>
          <div class="suggest__address">
            <p class="suggest__left">地址</p>
            <input type="text" />
          </div>
          <div class="suggest__content">
            <p style="align-self:flex-start;" class="suggest__left">留言</p>
            <textarea name id cols="30" rows="10"></textarea>
          </div>
          <div class="news__more">
            提交信息
            <img src="../assets/img/more__sign.png" alt="更多" />
          </div>
        </div> -->
        <!-- <div class="float__sign">
          <img src="../assets/img/float__share.png"
               alt />
          <img src="../assets/img/float__call.png"
               alt />
          <img src="../assets/img/float__back.png"
               @click="backTop()"
               alt />
        </div> -->
      </div>
      <p class="copyright">
        Copyright © 2021 qiyufuwei.com, All Rights Reserved
      </p>
      <p class="keepon-record">
        <span
          class="certificates"
          @click="$router.push('Certificates/Certificates')"
          >生产许可证</span
        >
        &nbsp;|&nbsp;
        <a target="_blank" href="https://beian.miit.gov.cn">
          备案号： 粤ICP备2021008787号
        </a>
      </p>
      <div class="keepon-record">
        <div class="police-keepon">
          <img class="police-img" src="../assets/img/police.png" alt="" />
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010502001850"
          >
            粤公网安备 44010502001850号
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
// import BMap from "BMap";
import BtmEntry from "@/components/BtmEntry";

export default {
  data() {
    return {
      footerStyle: "more",
      suggestTypeflag: false,
      suggestType: "建议"
    };
  },
  props: {},
  components: {
    BtmEntry
  },
  created() {
    // this.footerStyle = this.$router.history.current.meta.footerStyle;
  },
  mounted() {
    var map = new BMap.Map("location__pic"); // 创建地图实例
    console.log("!!!!!!!!!!", map);
    var point = new BMap.Point(114.064328, 22.735422); // 创建点坐标
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  },
  methods: {
    backTop() {
      window.document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss">
.location {
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 30px 3% 40px;
  background-color: #322c27;
  color: #999;
  .center__sign {
    width: 30px;
    height: 45px;
    position: absolute;
    top: -22.5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("../assets/img/center__sign.png") no-repeat center;
    background-size: 100%;
    z-index: 100;
  }
  .location__inner {
    display: flex;
    width: 1190px;
    margin: 0 auto;
    .location__left {
      display: flex;
      flex-direction: column;
      flex: 0 0 50%;
      .way {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        img {
          width: 30px;
          margin-right: 10px;
        }
      }
      // .location__map {
      //   display: flex;
      //   justify-content: space-between;
      //   align-items: center;
      //   #location__pic {
      //     width: 450px;
      //     height: 175px;
      //   }
      // }
      .location__so_less {
        margin-top: 0 !important;
      }
      .location__so_on {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        .location__common {
          display: flex;
          align-items: center;
          line-height: 30px;
          img {
            margin-right: 10px;
            width: 15px;
          }
          a {
            color: #999;
          }
        }
      }

      .location__QRcode {
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        align-items: left;
        .QRcode__pic {
          width: 120px;
        }
        p {
          margin-top: 5px;
          padding-left: 5px;
        }
      }
    }
    .location__QRcode_less {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-end;
      .QRcode__pic {
        width: 120px;
      }
      p {
        margin-top: 5px;
        padding-left: 5px;
      }
    }
    .location__right {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
      .suggest {
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 34px;
        img {
          height: 20px;
          margin-right: 15px;
        }
      }
      .suggest__text {
        line-height: 24px;
      }
      .suggest__type {
        height: 32px;
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 14px;
        img {
          width: 10px;
          position: absolute;
          right: 10px;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
        .suggest__left {
          margin-right: 18px;
          width: 49px;
          text-align: justify;
          text-align-last: justify;
        }
        input {
          height: 100%;
          flex: 1;
          color: #999;
          padding-left: 10px;
          background-color: rgb(51, 51, 51);
        }
        .suggest__type_list {
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 528px;
          top: 32px;
          right: 0;
          background: #fff;
          border-radius: 0 0 4px 4px;
          p {
            width: 100%;
            text-align: right;
            padding-right: 10px;
            line-height: 30px;
            &:hover {
              background: #999;
              color: #fff;
            }
          }
        }
      }
      .suggest__name {
        height: 32px;
        margin-top: 14px;
        display: flex;
        align-items: center;
        p {
          margin-right: 18px;
          width: 49px;
          text-align: justify;
          text-align-last: justify;
        }
        input {
          height: 100%;
          flex: 1;
          color: #999;
          padding-left: 10px;
          background-color: rgb(51, 51, 51);
        }
      }
      .suggest__phone {
        height: 32px;
        margin-top: 14px;
        display: flex;
        align-items: center;
        p {
          margin-right: 18px;
          width: 49px;
          text-align: justify;
          text-align-last: justify;
        }
        input {
          height: 100%;
          flex: 1;
          color: #999;
          padding-left: 10px;
          background-color: rgb(51, 51, 51);
        }
      }
      .suggest__emal {
        height: 32px;
        margin-top: 14px;
        display: flex;
        align-items: center;
        p {
          margin-right: 18px;
          width: 49px;
          text-align: justify;
          text-align-last: justify;
        }
        input {
          height: 100%;
          flex: 1;
          color: #999;
          padding-left: 10px;
          background-color: rgb(51, 51, 51);
        }
      }
      .suggest__area {
        position: relative;
        height: 32px;
        margin-top: 14px;
        display: flex;
        align-items: center;
        .area__one {
          width: 10px;
          position: absolute;
          left: 302px;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
        .area__two {
          width: 10px;
          position: absolute;
          right: 11px;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
        p {
          margin-right: 18px;
          width: 49px;
          text-align: justify;
          text-align-last: justify;
        }
        input {
          height: 100%;
          flex: 0 0 43%;
          color: #999;
          padding-left: 10px;
          background-color: rgb(51, 51, 51);
        }
      }
      .suggest__address {
        height: 32px;
        margin-top: 14px;
        display: flex;
        align-items: center;
        p {
          margin-right: 18px;
          width: 49px;
          text-align: justify;
          text-align-last: justify;
        }
        input {
          height: 100%;
          flex: 1;
          color: #999;
          padding-left: 10px;
          background-color: rgb(51, 51, 51);
        }
      }
      .suggest__content {
        position: relative;
        margin-top: 14px;
        display: flex;
        align-items: center;
        p {
          margin-right: 18px;
          width: 49px;
          text-align: justify;
          text-align-last: justify;
        }
        textarea {
          height: 110px;
          flex: 1;
          color: #999;
          padding-left: 10px;
          background-color: rgb(51, 51, 51);
        }
      }
      .news__more {
        display: flex;
        align-items: center;
        width: 140px;
        height: 42px;
        line-height: 42px;
        border: 1px solid rgb(140, 142, 153);
        font-size: 14px;
        padding-left: 30px;
        border-radius: 4px;
        margin-top: 10px;
        margin: 24px 0 0 65px;
        cursor: pointer;
        img {
          width: 28px;
          height: 14px;
          margin-left: 15px;
        }
      }
    }
    .float__sign {
      position: absolute;
      bottom: 30px;
      right: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      z-index: 99;
      img {
        display: inline-block;
        width: 60px;
        margin-top: 5px;
        cursor: pointer;
      }
    }
  }
  .copyright {
    text-align: center;
  }
  .certificates {
    cursor: pointer;
  }
  .keepon-record {
    margin-top: 15px;
    text-align: center;
    a {
      color: #999;
    }
    .police-keepon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .police-img {
      margin-right: 5px;
    }
  }
}
</style>
