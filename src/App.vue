<template>
  <div id="app">
    <transition
      enter-active-class="zoomInLeft"
      leave-active-class="zoomOutRight"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<script></script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.container,
.page-container {
  margin-top: 70px;
  background: url("./assets/img/bg-dark.jpg") repeat #213429;
}
</style>
<style lang="scss" src="./assets/style/base.scss"></style>
<style lang="scss" src="./assets/style/common.scss"></style>
<style lang="scss" src="./assets/style/reset.scss"></style>
