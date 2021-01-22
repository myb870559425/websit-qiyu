import Vue from "vue";
import Router from "vue-router";
import IndexMain from "@/views/index/IndexMain";
import FufeiMain from "@/views/Fuwei/FufeiMain";
import Certificates from "@/views/Certificates/Certificates";
import homePage from "@/views/Home";
import About from "@/views/about/AboutMain";
import AboutContent from "@/views/about/AboutContent";
import ProductDetail from "@/views/about/ProductDetail";
import HelpQuestion from "@/views/HelpQuestion/HelpQuestionMain";
import MembershipMain from "@/views/Membership/MembershipMain";
import FriendsMain from "@/views/Friends/FriendsMain";
import ProductServiceMain from "@/views/ProductService/ProductServiceMain";
Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage,
      children: [
        {
          path: "",
          name: "IndexMain",
          component: IndexMain,
          meta: {
            navBg: "default",
            footerStyle: "more",
            navName: "首页"
          }
        },
        {
          path: "Fuwei/FufeiMain",
          name: "FufeiMain",
          component: FufeiMain,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "馥薇品牌"
          }
        },
        {
          path: "Certificates/Certificates",
          name: "Certificates",
          component: Certificates,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "生产许可证"
          }
        },
        {
          path: "/about",
          name: "about",
          component: About,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "关于馥薇"
          }
        },
        {
          path: "/about/AboutContent",
          name: "AboutContent",
          component: AboutContent,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "护肤产品"
          }
        },

        {
          path: "/about/ProductDetail",
          name: "ProductDetail",
          component: ProductDetail,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "产品详情"
          }
        },
        {
          path: "/HelpQuestion/HelpQuestionMain",
          name: "HelpQuestion",
          component: HelpQuestion,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "帮助中心"
          }
        },
        {
          path: "/Membership/MembershipMain",
          name: "MembershipMain",
          component: MembershipMain,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "会员权益"
          }
        },
        {
          path: "/Friends/FriendsMain",
          name: "FriendsMain",
          component: FriendsMain,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "员工"
          }
        },

        {
          path: "/ProductService/ProductServiceMain",
          name: "ProductServiceMain",
          component: ProductServiceMain,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "产品服务"
          }
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  window.document.documentElement.scrollTop = 0;
  console.log(to);
  next();
});
export default router;
