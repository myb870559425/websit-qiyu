<template>
  <div class="container">
    <header-nav></header-nav>
    <section class="swiperwrap">
      <!-- <div>
        <img src="./assets/img/swiper.png"
             alt="介绍" />
      </div>-->
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- <swiper-slide v-for="(item, index) in swiperList"
                      :key="index">
          <img :src=item.imgUrl
               alt="介绍" />
        </swiper-slide>-->
        <swiper-slide>
          <img
            @click="$router.push('/Fuwei/FufeiMain')"
            src="./assets/img/swiper.png"
            alt="介绍"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            @click="$router.push('/Fuwei/FufeiMain')"
            src="./assets/img/swiper1.png"
            alt="介绍"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            @click="$router.push('/Fuwei/FufeiMain')"
            src="./assets/img/swiper2.png"
            alt="介绍"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <section class="main_inner bg_dark">
      <div class="main_inner_bg">
        <img src="./assets/img/organic-bg.jpg" alt="" />
      </div>
    </section>
    <section
      class="skin__mask"
      @click="$router.push(`/about/ProductDetail?type=mianmo&id=1`)"
    >
      <p class="skin__mask-title">修颜冰膜</p>
      <p class="skin__mask-title">
        LUSTROUS ICE MASK
      </p>
      <p class="mask-say">答应我，试一次好麽</p>
      <div class="skin__mask-descript">
        <div class="mask_pic_wrap">
          <p class="mask-sale">
            线上小程序售卖
          </p>
          <img src="./assets/img/mask-1.jpg" alt="" class="mask_pic" />
        </div>
        <div class="mask_say">
          <p class="question-1">她不是一个普通的面膜</p>
          <p class="answer-1">
            当你把她轻敷在脸上时，感觉有种丝丝的清爽感!
            她为你补充肌肤所需的多种蛋白及营养元素，莹润滋养修护肌肤；帮你改善暗哑及肤色不均，令肌肤晶莹剔透、水嫩细腻。
          </p>
          <i class="more-btn">
            <img src="./assets/img/more.png" alt="" />
          </i>
        </div>
      </div>
    </section>
    <section class="fuwei__intr">
      <p class="fuwei__title">
        馥薇 FUiVia
      </p>
      <p class="fuwei__text">
        I'll take care of your skin
      </p>
      <p class="fuwei__text">
        Heart to heart communication
      </p>
      <p class="fuwei__text">
        Let me help you make this decision
      </p>

      <ul class="product__content">
        <li
          class="product_content-item "
          @click="$router.push(`./about/ProductDetail?type=shuang&id=1`)"
        >
          <div class="sign__wrap">
            <!-- <span class="sign_new">新品</span> -->
            <span class="sign_sale">畅销</span>
          </div>
          <div class="main_item_pic-wrap changebg-1">
            <img src="./assets/img/p-1.png" alt="" class="prod-img" />
            <div class="descript">
              <p class="">Ev-14</p>
            </div>
            <div class="content_text">
              <!-- EYE CREAM -->
              <p class="title">辅酶眼霜</p>
              <p class="short-say">
                柔嫩丰润赋活乳霜配方，极好的滋润性和保护力
              </p>
              <p class="short-say">有效对抗眼部倦容、暗沉</p>
            </div>
          </div>
        </li>
        <li
          class="product_content-item special-1 "
          @click="$router.push(`./about/ProductDetail?type=ye&id=3`)"
        >
          <div class="sign__wrap">
            <span class="sign_new">新品</span>
            <span class="sign_sale">畅销</span>
            <span class="sign_best">爆款</span>
          </div>
          <div class="main_item_pic-wrap changebg-2">
            <img src="./assets/img/p-2.png" alt="" class="prod-img" />
            <div class="descript">
              <p class="">FV-O4</p>
            </div>
            <div class="content_text">
              <!-- SILY BUM MARIANUM POLYPEPTIDE EXTRACT -->
              <p class="title">
                水飞蓟多肽原液
              </p>
              <p class="short-say">
                抗氧化、抗辐射，疏导肌肤保湿循环系统
              </p>
              <p class="short-say">
                舒展眼周细小皱纹，改 善眼部黑眼圈、眼袋、眼部浮肿
              </p>
            </div>
          </div>
        </li>
        <li
          class="product_content-item "
          @click="$router.push(`./about/ProductDetail?type=ru&id=2`)"
        >
          <div class="sign__wrap">
            <!-- <span class="sign_new">新品</span> -->
            <!-- <span class="sign_sale">畅销</span> -->
            <span class="sign_best">爆款</span>
          </div>
          <div class="main_item_pic-wrap changebg-3">
            <img src="./assets/img/p-3.png" alt="" class="prod-img" />
            <div class="descript">
              <p class="">Ev-17</p>
            </div>
            <div class="content_text">
              <!-- LUSTROUS MAKE UP BASE -->
              <p class="title">修颜隔离乳</p>
              <p class="short-say">
                保持多小时不脱妆，令肌肤亮彩通透，绚丽迷人
              </p>
              <p class="short-say">修颜、保湿、隔离、防水、防汗</p>
            </div>
          </div>
        </li>
        <li
          class="product_content-item "
          @click="$router.push(`./about/ProductDetail?type=ye&id=1`)"
        >
          <div class="sign__wrap">
            <span class="sign_new">新品</span>
            <!-- <span class="sign_sale">畅销</span> -->
          </div>
          <div class="main_item_pic-wrap changebg-4">
            <img src="./assets/img/p-4.png" alt="" class="prod-img" />
            <div class="descript">
              <p class="">FV-O2</p>
            </div>
            <div class="content_text">
              <!-- POLYPEPTIDE REPAIR BASE SOLUTION -->
              <p class="title">
                多肽沁润修复肌底液
              </p>
              <p class="short-say">
                抹即融质地。毫无粘腻，修护肌底
              </p>
              <p class="short-say">有效推进后续产品吸收的同事水润净澈肌肤</p>
            </div>
          </div>
        </li>
        <li
          class="product_content-item special-2 "
          @click="$router.push(`./about/ProductDetail?type=ye&id=5`)"
        >
          <div class="sign__wrap">
            <!-- <span class="sign_new">新品</span> -->
            <span class="sign_sale">畅销</span>
          </div>
          <div class="main_item_pic-wrap changebg-5">
            <img src="./assets/img/p-5.png" alt="" class="prod-img" />
            <div class="descript">
              <p class="">FV-O6</p>
            </div>
            <div class="content_text">
              <!-- LILY POLYPEPTIDE EXTRACT -->
              <p class="title">百合花多肽原液</p>
              <p class="short-say">
                60秒SOS渴水肌肤表层补水、深层储水持续供水同步进行
              </p>
              <p class="short-say">深入真皮层，建立皮肤生理水库</p>
            </div>
          </div>
        </li>
        <li
          class="product_content-item "
          @click="$router.push(`./about/ProductDetail?type=shuang&id=3`)"
        >
          <div class="sign__wrap">
            <!-- <span class="sign_new">新品</span> -->
            <!-- <span class="sign_sale">畅销</span> -->
            <span class="sign_best">爆款</span>
          </div>
          <div class="main_item_pic-wrap changebg-6">
            <img src="./assets/img/p-6.png" alt="" class="prod-img" />
            <div class="descript">
              <p class="">Ev-16</p>
            </div>
            <div class="content_text">
              <!-- ROUXI STATIC CREAM -->
              <p class="title">柔皙静肤改良霜</p>
              <p class="short-say">
                卵磷脂有效而持久地修护肌肤天然屏障
              </p>
              <p class="short-say">
                槲皮素深度清除来自肌肤内部的致敏因子，有效对抗外界过敏源的刺激
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- <btm-entry></btm-entry> -->
    <footer-content></footer-content>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import FooterContent from "@/components/FooterContent";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "IndexMain",
  data() {
    return {
      swiperList: [
        {
          imgUrl: "./assets/img/swiper.png"
        },
        {
          imgUrl: "./assets/img/swiper.png"
        },
        {
          imgUrl: "./assets/img/swiper.png"
        }
      ],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        speed: 1000,
        // pagination: {
        //   el: ".swiper-pagination"
        // },
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      serviceList: [
        {
          serviceUrl: "house.png",
          serviceUrlactive: "house__active.png",
          serviceType: "生殖服务",
          serviceExplain1: "虽不愿启齿，但不容忽视，",
          serviceExplain2: "'内'在美才更美",
          serviceActiveFlag: false
        },
        {
          serviceUrl: "vip.png",
          serviceUrlactive: "vip__active.png",
          serviceType: "专家分析",
          serviceExplain1: "真专业，并非'砖家'",
          serviceExplain2: "'真金不怕火炼'，经得起考验",
          serviceActiveFlag: false
        },
        {
          serviceUrl: "flex.png",
          serviceUrlactive: "flex__active.png",
          serviceType: "养生服务",
          serviceExplain1: "不在于一时想起，在于点滴坚持",
          serviceExplain2: "您的健康，我们来承接",
          serviceActiveFlag: false
        },
        {
          serviceUrl: "family.png",
          serviceUrlactive: "family__active.png",
          serviceType: "面霜服务",
          serviceExplain1: "不要吝啬自己的魅力",
          serviceExplain2: "我们会让她绽放的自然、健康、洒脱",
          serviceActiveFlag: false
        },
        {
          serviceUrl: "made.png",
          serviceUrlactive: "made__active.png",
          serviceType: "活动合作",
          serviceExplain1: "信誉为本，共赢为先",
          serviceExplain2: "互利共赢才会走得更远",
          serviceActiveFlag: false
        }
      ],
      newTypeshow: "1",
      newsTitleList: [
        {
          newsTitleName: "公司要闻",
          titeShowflag: true,
          titehoverflag: false,
          newTypeshow: "1"
        },
        {
          newsTitleName: "产业新闻",
          titeShowflag: false,
          titehoverflag: false,
          newTypeshow: "2"
        },
        {
          newsTitleName: "媒体关注",
          titeShowflag: false,
          titehoverflag: false,
          newTypeshow: "3"
        }
      ],
      serviceFlag: false
    };
  },
  components: {
    HeaderNav,
    swiper,
    swiperSlide,
    FooterContent
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html {
  font-family: "黑体";
}
.swiperwrap {
  width: 108%;
  // position: absolute;
  // top: 0;
  // left: 0;
  display: flex;
  z-index: 999;
  // height: 680px;
  background: #fff;
  img {
    width: 100%;
  }
  .pre__btn {
    height: 50px;
    background: url("./assets/img/pre__btn.png") no-repeat center;
  }
  .next__btn {
    height: 50px;
    background: url("./assets/img/nex__btn.png") no-repeat center;
  }
}
.main_inner {
  &_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background: url("./assets/img/bg-dark.jpg") repeat #213429;
  }
}
.fuwei__intr {
  position: relative;
  display: flex;
  margin: auto 3%;
  font-size: 16px;
  flex-direction: column;
  text-align: center;
  line-height: 1;
  color: #fff;
  .fuwei__title {
    font-size: 35px;
    font-weight: bold;
    text-align: left;
    padding: 50px 0 20px;
  }

  .fuwei__text {
    font-size: 25px;
    text-align: left;
    line-height: 34px;
  }
  .product__content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 275px;
    .product_content-item {
      position: relative;
      padding-top: 45%;
      width: calc(33% - 7px);
      // margin-left: 10px;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;
      background: #fff;
      .sign__wrap {
        position: absolute;
        display: flex;
        flex-direction: column;
        transform: scale(0.8);
        right: 0;
        top: 0;
        color: #fff;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
        z-index: 99;
        .sign_new {
         
          display: inline-block;
          padding: 5px 14px 7px 15px;
          background: #103821;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
          text-align: center;
          border-radius: 2px;
          border-radius: 50%;
        }
        .sign_sale {
          display: inline-block;
          padding: 5px 14px 7px 15px;
          background: #731d08;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
          text-align: center;
          border-radius: 2px;
          border-radius: 50%;
        }
        .sign_best {
          display: inline-block;
          padding: 5px 14px 7px 15px;
          background: #cfa380;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
          text-align: center;
          border-radius: 2px;
          border-radius: 50%;
        }
      }
      .main_item_pic-wrap {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        img {
          position: absolute;
          left: 0;
          top: -44px;
          width: 100%;
        }
        .descript {
          color: #213429;
          text-align: left;
          padding: 15px;
        }
        .content_text {
          position: absolute;
          width: 100%;
          color: #213429;
          text-align: center;
          bottom: 40px;
          .title {
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
            padding: 0 15px;
          }
          .short-say {
            padding: 0 15px;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      .prod-img:hover {
        transition: 2s;
        transform: rotate(20deg);
        // background: url("./assets/img/bg-1.jpg") repeat;
      }
      .changebg-1:hover {
        background: url("./assets/img/bg-1.jpg") repeat;
      }
      .changebg-2:hover {
        background: url("./assets/img/bg-2.jpg") repeat;
      }
      .changebg-3:hover {
        background: url("./assets/img/bg-3.jpg") repeat;
      }
      .changebg-4:hover {
        background: url("./assets/img/bg-4.jpg") repeat;
      }
      .changebg-5:hover {
        background: url("./assets/img/bg-5.jpg") repeat;
      }
      .changebg-6:hover {
        background: url("./assets/img/bg-6.jpg") repeat;
      }
      .main_item_pic-wrap-1 {
        display: none;
      }
    }
    .special-1 {
      margin: -109px 0 109px;
    }
    .special-2 {
      margin: -99px 0 109px;
    }
  }
}

.product__wrap {
  position: relative;
  display: flex;
  margin: auto 3%;
  font-size: 16px;
  flex-direction: column;
  text-align: center;
  line-height: 1;
  color: #fff;
}

.skin__mask {
  position: relative;
  margin: auto 3%;
  color: #fff;
  text-align: center;
  padding-top: 48px;
  .skin__mask-title {
    font-size: 28px;
  }
  .mask-say {
    // font-family: "NotoSansKR", "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
    font-size: 16px;
  }
  .skin__mask-descript {
    position: relative;
    display: flex;
    margin-top: 100px;
    .mask_pic_wrap {
      background: #fff;
      .mask-sale {
        position: absolute;
        top: -34px;
        padding: 5px 14px 7px 15px;
        background: #731d08;
        letter-spacing: 0.1em;
        margin-bottom: 6px;
        text-align: center;
        border-radius: 2px;
      }
    }
    div {
      flex: 1;
    }

    img {
      height: 100%;
    }
    .mask_say {
      cursor: pointer;
      padding: 15px;
      background: #d7d5bc;
      color: #333;
      .question-1 {
        padding-top: 120px;
        padding-left: 50px;
        font-size: 24px;
      }
      .answer-1 {
        padding-left: 50px;
        margin-top: 15px;
        font-size: 18px;
      }
      .more-btn {
        display: none;
        display: inline-block;
        margin-top: 80px;
        width: 80px;
        img {
          width: 80px;
        }
      }
    }
  }
}
</style>
