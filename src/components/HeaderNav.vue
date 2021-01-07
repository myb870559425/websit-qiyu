<template>
  <div>
    <nav>
      <div class="logo"
           @click="$router.push('/')">
        <img v-if="navBg === 'default'"
             src="../assets/img/logo.png"
             alt="logo" />
        <img v-else
             src="../assets/img/logo__other.png"
             alt="logo" />
      </div>
      <div class="navtab">
        <!-- @mouseleave="navbghide(item)" -->
        <div class="navtb__nomal"
             v-for="(item, index) in navList"
             :key="index"
             :class="{
            navtabbg: item.navtabFlag == true,
            dotFlag: item.dotFlag == true,
            color__bg: navBg !== 'default',
            color__bg_default: navBg === 'default'
          }"
             @mouseover="navTabbgchange(item, index)"
             @click.stop="goMainpage(item, index)">
          {{ item.nav }}
          <div class="navtb__pulldown"
               v-show="item.subList">
            <p v-show="item.navtabFlag == true"
               v-for="(subItem, index) in item.subList"
               :key="index"
               :class="{
                navtabbg__sub: subItem.navtabFlag == true,
                color__sub: navBg !== 'default',
                color__sub_default: navBg === 'default'
              }"
               @mouseover="navSubbgchange(subItem, index)"
               @mouseleave="navSubbghide(subItem)"
               @click.stop.prevent="goSubpage(subItem)">
              {{ subItem.aboutCompany }}
            </p>
          </div>
          <!-- @mouseleave="navSubbghide(subItem)" -->
        </div>
      </div>
      <div class="empty">
        <img src="../assets/img/search__pic.png"
             alt="搜索" />
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    // navList: {
    //   type: Array,
    //   default: []
    // }
  },
  data () {
    return {
      navBg: "default",
      navList: [
        {
          nav: "首页",
          navtabFlag: false,
          dotFlag: false
        },
        {
          nav: "关于启誉",
          navtabFlag: false,
          dotFlag: false,
          subList: [
            {
              aboutCompany: "公司简介"
            },
            {
              aboutCompany: "发展战略"
            },
            {
              aboutCompany: "发展历程"
            },
            {
              aboutCompany: "组织架构"
            },
            {
              aboutCompany: "企业文化"
            },
            {
              aboutCompany: "资质荣誉"
            }
          ]
        },
        {
          nav: "项目服务",
          navtabFlag: false,
          dotFlag: false,
          subList: [
            {
              aboutCompany: "生殖服务"
            },
            {
              aboutCompany: "专家分析"
            },

            {
              aboutCompany: "养生服务"
            },
            {
              aboutCompany: "面霜服务"
            },
            {
              aboutCompany: "活动合作"
            }
          ]
        },
        {
          nav: "新闻中心",
          navtabFlag: false,
          dotFlag: false,
          subList: [
            {
              aboutCompany: "公司要闻"
            },
            {
              aboutCompany: "产业新闻"
            },
            {
              aboutCompany: "媒体关注"
            }
          ]
        },
        {
          nav: "人才战略",
          navtabFlag: false,
          dotFlag: false,
          subList: [
            {
              aboutCompany: "人才理念"
            },
            {
              aboutCompany: "人才招聘"
            }
          ]
        },
        {
          nav: "联络启誉",
          navtabFlag: false,
          dotFlag: false
        }
      ]
    };
  },
  beforeCreate () { },
  created () { },
  mounted () {
    const navName = this.$router.history.current.meta.navName;
    this.$nextTick(() => {
      this.navList.forEach((item, index) => {
        if (item.nav === navName) {
          this.$set(item, "dotFlag", true);
        } else {
          this.$set(item, "dotFlag", false);
        }
        return item;
      });
    });
    this.navBg = this.$router.history.current.meta.navBg;
  },
  destroyed () { },
  methods: {
    navTabbgchange (_itemData, _index) {
      _itemData.navtabFlag = true;
      this.navList.forEach((item, index) => {
        if (_index == index) {
          item.navtabFlag = true;
        } else {
          item.navtabFlag = false;
        }
        return item;
      });
    },
    navbghide (_itemData) {
      this.navList.forEach((item, index) => {
        item.navtabFlag = false;
        return item;
      });
    },
    navSubbgchange (_itemData, _index) {
      _itemData.navtabFlag = true;
      this.navList.forEach((item, index) => {
        if (item.subList) {
          item.subList.forEach((itemSub, indexSub) => {
            if (_itemData == itemSub) {
              this.$set(itemSub, "navtabFlag", true);
              // itemSub.navtabFlag = true;
            } else {
              // itemSub.navtabFlag = false;
              this.$set(itemSub, "navtabFlag", false);
            }
            return itemSub;
          });
        }
        return item;
      });
      this.$nextTick(() => {
        this.navList;
      });
    },
    goSubpage (_itemData) {
      // let dotIndex
      // this.navList.forEach((item, index) => {
      //   if (item.subList) {
      //     item.subList.forEach((subItem, subIndex) => {
      //       if (_itemData.aboutCompany === subItem.aboutCompany) {
      //         dotIndex = index
      //       }
      //     })
      //   }
      //   if (index === dotIndex) {
      //     this.$set(item, 'dotFlag', true)
      //   } else {
      //     this.$set(item, 'dotFlag', false)
      //   }
      //   return item
      // })
      // localStorage.setItem('nav-list-state', JSON.stringify(this.navList))
      switch (_itemData.aboutCompany) {
        case "公司简介":
          this.gotoPage("/about/AboutContent", "2");
          break;
        case "发展战略":
          this.gotoPage("/about/AboutContent", "3");
          break;
        case "发展历程":
          this.gotoPage("/about/AboutContent", "4");
          break;
        case "组织架构":
          this.gotoPage("/about/AboutContent", "5");
          break;
        case "企业文化":
          this.gotoPage("/about/AboutContent", "6");
          break;
        case "资质荣誉":
          this.gotoPage("/about/AboutContent", "7");
          break;

        case "生殖服务":
          this.gotoPage("/ProductService/ProductServiceMain", "1");
          break;
        case "专家分析":
          this.gotoPage("/ProductService/ProductServiceMain", "2");
          break;
        case "养生服务":
          this.gotoPage("/ProductService/ProductServiceMain", "3");
          break;
        case "面霜服务":
          this.gotoPage("/ProductService/ProductServiceMain", "4");
          break;
        case "活动合作":
          this.gotoPage("/ProductService/ProductServiceMain", "5");
          break;

        case "公司要闻":
          this.gotoPage("/NewsCenter/NewsCenterMain", "1");
          break;
        case "产业新闻":
          this.gotoPage("/NewsCenter/NewsCenterMain", "2");
          break;
        case "媒体关注":
          this.gotoPage("/NewsCenter/NewsCenterMain", "3");
          break;
        case "人才理念":
          this.gotoPage("/TalentsPlan/TalentsPlanmind", "1");
          break;
        case "人才招聘":
          this.gotoPage("/TalentsPlan/TalentsPlanmind", "2");
          break;
      }
      return false;
    },
    gotoPage (path, index = 1) {
      if (this.$router.currentRoute.path == path) {
        this.$emit("deputyCall", index);
      } else {
        this.$router.push({
          path,
          query: {
            tabNumber: index
          }
        });
      }
    },
    goMainpage (_itemData, _index) {
      // this.$set(_itemData, 'dotFlag', true)
      // this.navList.forEach((item, index) => {
      //   if (_index === index) {
      //     this.$set(item, 'dotFlag', true)
      //   } else {
      //     this.$set(item, 'dotFlag', false)
      //   }
      //   return item
      // })
      // localStorage.setItem('nav-list-state', JSON.stringify(this.navList))
      switch (_itemData.nav) {
        case "首页":
          this.$router.push({
            path: "/"
          });
          break;
        case "新闻中心":
          this.$router.push({
            path: "/NewsCenter/NewsCenterMain"
          });
          break;
        case "产品服务":
          this.$router.push({
            path: "/ProductService/ProductServiceMain"
          });
          break;
        case "人才战略":
          this.$router.push({
            path: "/TalentsPlan/TalentsPlanMain"
          });
          break;
        case "联络启誉":
          this.$router.push({
            path: "/ContactCompany/ContactCompanyMain"
          });
          break;
        case "关于启誉":
          this.$router.push({
            path: "/about"
          });
          break;
      }
    },
    navSubbghide (_itemData) {
      this.navList.forEach((item, index) => {
        item.navtabFlag = false;
        return item;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  z-index: 99;
  height: 70px;
  font-size: 16px;
  border-bottom: 1px solid rgb(109, 93, 103);
  // background-color: rgb(121, 66, 19);
  .logo {
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    text-align: center;
    img {
      height: 35px;
      display: inline-block;
      margin-left: 35px;
    }
  }
  .color__bg {
    color: #333;
  }
  .color__bg_default {
    color: #fff;
  }

  .navtab {
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    .navtb__nomal {
      position: relative;
      flex: 1;
      height: 100%;
      line-height: 75px;
      cursor: pointer;
      .navtb__pulldown {
        width: 100%;
        position: absolute;
        top: 75px;
        z-index: 99;
        color: #333;
        background-color: #fff;
        border-radius: 4px;
        p {
          font-size: 16px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .dotFlag.color__bg {
      // background-color: #666;
      color: #999;
      &:after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        margin: 0 auto;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #333;
      }
    }
    .dotFlag.color__bg_default {
      // background-color: #666;
      color: #999;
      &:after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        margin: 0 auto;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
      }
    }
    .navtabbg.color__bg {
      // background-color: #666;
      color: #999;
      &:after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        margin: 0 auto;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #333;
      }
    }
    .navtabbg.color__bg_default {
      // background-color: #666;
      color: #999;
      &:after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        margin: 0 auto;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
      }
    }
  }
  .empty {
    width: 10%;
    display: flex;
    align-items: center;
    img {
      height: 20px;
      margin-left: 30px;
    }
  }
}
.navtab {
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  .navtb__nomal {
    flex: 1;
    height: 100%;
    line-height: 75px;
    cursor: pointer;
  }
  .navtabbg__sub {
    color: #999;
  }
}
</style>
