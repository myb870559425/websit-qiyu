<template>
  <div class="main">
    <div class="main__content">
      <keep-alive>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>