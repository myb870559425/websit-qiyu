<template>
  <div class="">
    <section class="illustrate">
      <div
        class="delivery"
        @click="$router.push('/ProductService/ProductServiceMain')"
      >
        <p class="small-title">配送服务<br />DELIVERY</p>
        <p class="text">专业的、贴心的、隐私的</p>
      </div>
      <div class="about_fuwei" @click="$router.push('/Fuwei/FufeiMain')">
        <p class="small-title">关于馥薇<br />ABOUT US</p>
        <p class="text">服务、共赢、勇往直前</p>
      </div>
      <div
        class="service"
        @click="$router.push('/HelpQuestion/HelpQuestionMain')"
      >
        <p class="small-title">帮助中心<br />HELP CENTER</p>
        <p class="text">您的疑问，我来解答</p>
      </div>
    </section>
    <section class="btm-sign"></section>
  </div>
</template>
<style scoped lang="scss">
.illustrate {
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
  text-align: center;
  color: #fff;
  padding: 120px 30px 0;
  cursor: pointer;
  div {
    flex: 1;
  }
  .small-title {
    font-size: 18px;
  }
  .text {
    font-size: 16px;
    margin-top: 15px;
    opacity: 0.8;
  }
}

.btm-sign {
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  background: #f0d8c0;
}
</style>
