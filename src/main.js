import Vue from "vue";
import App from "./App";
import router from "./router";
import vueAwesomeswiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import ViewUI from "view-design";
import animate from "animate.css";
import "view-design/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(vueAwesomeswiper);
Vue.use(animate);
Vue.use(ViewUI);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
