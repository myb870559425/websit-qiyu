import Vue from "vue";
import Router from "vue-router";
import IndexMain from "@/views/index/IndexMain";
import homePage from "@/views/Home";
import About from "@/views/about/AboutMain";
import AboutContent from "@/views/about/AboutContent";
import CooperationCaseMain from "@/views/CooperationCase/CooperationCaseMain";
import ContactCompanyMain from "@/views/ContactCompany/ContactCompanyMain";
import TalentsPlanMain from "@/views/TalentsPlan/TalentsPlanMain";
import TalentsPlanmind from "@/views/TalentsPlan/TalentsPlanmind";
import NewsCenterMain from "@/views/NewsCenter/NewsCenterMain";
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
          path: "/about",
          name: "about",
          component: About,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "关于启誉"
          }
        },
        {
          path: "/about/AboutContent",
          name: "AboutContent",
          component: AboutContent,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "关于启誉"
          }
        },
        {
          path: "/CooperationCase/CooperationCaseMain",
          name: "CooperationCaseMain",
          component: CooperationCaseMain,
          meta: {
            navBg: "white",
            footerStyle: "less"
          }
        },
        {
          path: "/ContactCompany/ContactCompanyMain",
          name: "ContactCompanyMain",
          component: ContactCompanyMain,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "联络启誉"
          }
        },
        {
          path: "/TalentsPlan/TalentsPlanMain",
          name: "TalentsPlanMain",
          component: TalentsPlanMain,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "人才战略"
          }
        },
        {
          path: "/TalentsPlan/TalentsPlanmind",
          name: "TalentsPlanmind",
          component: TalentsPlanmind,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "人才战略"
          }
        },
        {
          path: "/NewsCenter/NewsCenterMain",
          name: "NewsCenterMain",
          component: NewsCenterMain,
          meta: {
            navBg: "white",
            footerStyle: "less",
            navName: "新闻中心"
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
