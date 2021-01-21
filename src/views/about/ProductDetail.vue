<template>
  <div class="page-container container">
    <header-nav @deputyCall="navCallBack"></header-nav>
    <div class="detail-wrap" v-show="prodDetail.prodImg">
      <div class="bigger-detail">
        <img :src="prodDetail.prodImg" alt="" />
      </div>
      <div class="detail-text">
        <p class="prod-type">{{ prodDetail.prodType }}</p>
        <p class="prod-name">{{ prodDetail.prodTitle }}</p>
        <p class="prod-en">{{ prodDetail.prodEn }}</p>
        <p class="prod-feature">产品特点</p>
        <div class="prod-intro">
          <p v-for="(item, index) in prodDetail.prodFeature" :key="index">
            {{ item.feature }}
          </p>
        </div>
        <p class="prod-feature">主要成分</p>
        <div class="prod-intro">
          <p>
            {{ prodDetail.prodComponent }}
          </p>
        </div>
        <p class="standards">规格: {{ prodDetail.prodStandards }}</p>
      </div>
    </div>
    <footer-content></footer-content>
  </div>
</template>

<script>
import FooterContent from "@/components/FooterContent";
import HeaderNav from "@/components/HeaderNav";
import { detailData } from "./assets/data";
export default {
  components: {
    HeaderNav,
    FooterContent
  },
  data() {
    return {
      prodDetail: "",
      qureyParams: ""
    };
  },
  created() {
    this.prodDetail = detailData;
    this.qureyParams = this.$route.query;
    this.prodDetail = this.prodDetail.filter(item => {
      let filterCondition =
        Number(item.id) === Number(this.qureyParams.id) &&
        item.type === this.qureyParams.type;
      return filterCondition === true;
    });
    this.prodDetail = this.prodDetail.length > 0 ? this.prodDetail[0] : {};
    console.log(JSON.stringify(this.prodDetail));
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.detail-wrap {
  display: flex;
  margin: 0 3%;
  .bigger-detail {
    position: relative;
    margin-top: 50px;
    flex: 0 0 35%;
    height: 400px;
    border: 1px solid #fff;
    background: #fff;
    img {
      position: absolute;
      width: 350px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .detail-text {
    position: relative;
    flex: 0 0 65%;
    padding: 50px 5% 0 10%;
    color: #fff;
    .prod-type {
      font-size: 22px;
      opacity: 0.2;
    }
    .prod-en {
      font-size: 20px;
      opacity: 0.3;
    }
    .prod-name {
      margin-top: 10px;
      font-size: 24px;
    }
    .prod-feature {
      margin-top: 30px;
      font-size: 18px;
      opacity: 0.8;
    }
    .prod-intro {
      margin-top: 10px;
      p {
        line-height: 30px;
        font-size: 16px;
        word-break: break-all;
      }
    }
    .standards {
      position: absolute;
      top: 50px;
      right: 10%;
      opacity: 0.5;
    }
  }
}
</style>
