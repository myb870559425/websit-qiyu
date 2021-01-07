<template>
  <div>
    <header-nav></header-nav>
    <section class="swiperwrap">
      <!-- <div>
        <img src="./assets/img/swiper.png"
             alt="介绍" />
      </div>-->
      <swiper :options="swiperOption"
              ref="mySwiper">
        <!-- <swiper-slide v-for="(item, index) in swiperList"
                      :key="index">
          <img :src=item.imgUrl
               alt="介绍" />
        </swiper-slide>-->
        <swiper-slide>
          <img src="./assets/img/swiper.png"
               alt="介绍" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/img/swiper1.png"
               alt="介绍" />
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
        <div class="swiper-button-prev pre__btn"
             slot="button-prev"></div>
        <div class="swiper-button-next next__btn"
             slot="button-next"></div>
      </swiper>
    </section>
    <section class="aboutcompany">
      <em class="center__sign"></em>
      <div class="aboutcompany__inner">
        <div class="company__describe animated"
             @mouseover="titleAnimate(0)"
             @mouseleave="titleAnimateremove(0)">
          <em class="company__sign animated"></em>
          <div class="company__title">
            <span class="english__about">ABOUT&nbsp;&nbsp;qiyu</span>
            <p>关于启誉</p>
          </div>
          <div class="company__content_text">
            <p>
              <img class="company__content_title"
                   src="./assets/img/company__title.png"
                   alt="口号" />
            </p>
            <div class="company__content_english animated">
              <p>启誉者</p>
              <p>众人合力，同心同德；</p>
              <p>千人一口，同气相求；</p>
              <p>细雨浥尘，滋养民生；</p>
              <p>路遥而至，山高而即。</p>
              <p>雄关漫道，携手同跃！</p>
            </div>
            <p class="company__content_describe animated">
              启誉自创立以来，始终坚持民生为本的发展理念，始终保持美容服务引领的发展战略，始终抱持回报社会的发展愿景，始终秉持匠人匠艺的发展品质，
              为改善老百姓的生活方式不懈努力。
            </p>
            <div class="news__more"
                 @click="$router.push('/about')">
              了解更多
              <img src="./assets/img/more__sign.png"
                   alt="更多" />
            </div>
          </div>
        </div>
        <div class="company__video">
          <div class="video__bg"></div>
          <video src></video>
        </div>
      </div>
    </section>
    <section class="productservice"
             @mouseover="titleAnimate(1)"
             @mouseleave="titleAnimateremove(1)">
      <em class="center__sign"></em>
      <em class="company__sign animated"></em>
      <p class="english__intro">PROJECT SERVICE</p>
      <p class="china__intro">项目服务</p>
      <em class="black__line"></em>
      <div class="productservice__item">
        <div class="productservice__sub"
             @mousemove="serviceShow(item, index)"
             v-for="(item, index) in serviceList"
             :key="index">
          <img v-show="item.serviceActiveFlag"
               class="proproductservice__pic animated"
               :src="serviceImgurl(item)"
               alt="置业" />
          <img v-show="!item.serviceActiveFlag"
               class="proproductservice__pic_active "
               :src="serviceImgurl(item)"
               alt="置业" />
          <img class="puctservice__sign"
               src="./assets/img/triangle_sign.png"
               alt="三角符号" />
          <p class="productservice__title">{{ item.serviceType }}</p>
          <p class="productservice__content">
            <span>{{ item.serviceExplain1 }}</span>
            <span>{{ item.serviceExplain2 }}</span>
          </p>
        </div>
      </div>
    </section>
    <!-- <section class="companynews"
             @mouseover="titleAnimate(2)"
             @mouseleave="titleAnimateremove(2)">
      <em class="center__sign"></em>
      <em class="company__sign animated"></em>
      <p class="english__intro">NEWS CENTER</p>
      <p class="china__intro">新闻中心</p>
      <div class="companynews__tab"> -->
    <!-- color:#0073e5; -->
    <!-- <p class="companynews__tab_item"
           :class="{
            companynews__tab_active: item.titeShowflag === true,
            companynews__hover_active: item.titehoverflag === true
          }"
           @click="newsTitle(item, index)"
           @mousemove="newsTitlehover(item, index)"
           v-for="(item, index) in newsTitleList"
           :key="index">
          {{ item.newsTitleName }}
        </p>
      </div>
      <div v-show="newTypeshow == '1'"
           @click="goPage('1')"
           class="company__news_content">
        <em class="news__center_line"></em>
        <em class="news__dot_one"></em>
        <em class="news__dot_two"></em>
        <em class="news__dot_three"></em>
        <em class="news__dot_four"></em>
        <div class="company__news_inner">
          <div class="company__news_one">
            <div class="company__news_wraper">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  让生活方式因美容服务而变得更加美好
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
            <div class="company__news_wraper"
                 style="margin-top:0.2px;">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  让生活方式因美容服务而变得更加美好
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
          </div>
          <div class="company__news_two">
            <div class="company__news_wraper">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  让生活方式因美容服务而变得更加美好
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
            <div class="company__news_wraper"
                 style="margin-top:0.2px;">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  让生活方式因美容服务而变得更加美好
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="newTypeshow == '2'"
           @click="goPage('2')"
           class="company__news_content">
        <em class="news__center_line"></em>
        <em class="news__dot_one"></em>
        <em class="news__dot_two"></em>
        <em class="news__dot_three"></em>
        <em class="news__dot_four"></em>
        <div class="company__news_inner">
          <div class="company__news_one">
            <div class="company__news_wraper">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  商户/微信选房系统得到行业一致好评
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
            <div class="company__news_wraper"
                 style="margin-top:0.2px;">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  商户/微信选房系统得到行业一致好评
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
          </div>
          <div class="company__news_two">
            <div class="company__news_wraper">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  商户/微信选房系统得到行业一致好评
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
            <div class="company__news_wraper"
                 style="margin-top:0.2px;">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">
                  商户/微信选房系统得到行业一致好评
                </p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="newTypeshow == '3'"
           @click="goPage('3')"
           class="company__news_content">
        <em class="news__center_line"></em>
        <em class="news__dot_one"></em>
        <em class="news__dot_two"></em>
        <em class="news__dot_three"></em>
        <em class="news__dot_four"></em>
        <div class="company__news_inner">
          <div class="company__news_one">
            <div class="company__news_wraper">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">网易与启誉公司最新合作动向</p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
            <div class="company__news_wraper"
                 style="margin-top:0.2px;">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">网易与启誉公司最新合作动向</p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm"> -->
    <!-- <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p> -->
    <!-- </div>
              </div>
            </div>
          </div>
          <div class="company__news_two">
            <div class="company__news_wraper">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">网易与启誉公司最新合作动向</p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm">
                  <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p>
                </div>
              </div>
            </div>
            <div class="company__news_wraper"
                 style="margin-top:0.2px;">
              <div class="news__things_wraper">
                <p class="news__things_num"></p>
                <p class="news__things_text">网易与启誉公司最新合作动向</p>
              </div>
              <div class="news__things_content">
                <div class="news__things_top">
                  <img src="./assets/img/new__title_img.png"
                       alt="新闻小图标" />
                  <p>
                    2013年12月10日。公司在南宁召开了第一次全体员工大会，确定了“让生活方式因美容服务而变得更加美好”的启誉宗百,“拥抱变化、取
                  </p>
                </div>
                <div class="news__things_btm">
                  <p class="news__things_time">
                    <span>发布时间：</span>
                    <span>2017-02-22 14：42:00</span>
                    <span>&nbsp;|&nbsp;点击数：</span>
                    <span>&nbsp;380</span>
                  </p>
                  <p class="news__things_share">分享</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news__more"
           @click="$router.push('/NewsCenter/NewsCenterMain')">
        了解更多
        <img src="./assets/img/more__sign.png"
             alt="更多" />
      </div>
    </section> -->
    <section class="cooperate">
      <em class="center__sign"></em>
      <em class="company__sign animated"
          @mouseover="titleAnimate(3)"
          @mouseleave="titleAnimateremove(3)"></em>
      <p class="english__intro">COOPERATION CASE</p>
      <p class="china__intro">合作案例</p>
      <div class="cooperate__partner">
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(0)"
             @mouseleave="cooperateAnimateremove(0)"
             src="./assets/img/cooperate__partner1.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(1)"
             @mouseleave="cooperateAnimateremove(1)"
             src="./assets/img/cooperate__partner2.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(2)"
             @mouseleave="cooperateAnimateremove(2)"
             src="./assets/img/cooperate__partner3.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(3)"
             @mouseleave="cooperateAnimateremove(3)"
             src="./assets/img/cooperate__partner4.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(4)"
             @mouseleave="cooperateAnimateremove(4)"
             src="./assets/img/cooperate__partner5.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(5)"
             @mouseleave="cooperateAnimateremove(5)"
             src="./assets/img/cooperate__partner6.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(6)"
             @mouseleave="cooperateAnimateremove(6)"
             src="./assets/img/cooperate__partner7.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
        <img class="cooperate__img animated"
             @mouseover="cooperateAnimate(7)"
             @mouseleave="cooperateAnimateremove(7)"
             src="./assets/img/cooperate__partner8.png"
             alt="合作伙伴"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')" />
      </div>
      <div class="morewrpa">
        <div class="news__more"
             @click="gotoPage('/CooperationCase/CooperationCaseMain')">
          了解更多
          <img src="./assets/img/more__sign.png"
               alt="更多" />
        </div>
      </div>
    </section>
    <section class="talent">
      <em class="center__sign"></em>
      <div class="talent__inner">
        <div class="company__describe"
             @mouseover="titleAnimate(4)"
             @mouseleave="titleAnimateremove(4)">
          <em class="company__sign animated"></em>
          <div class="company__title">
            <span class="english__about">TALENT&nbsp;&nbsp;STRATEGY</span>
            <p>人才战略</p>
          </div>
          <div class="company__content_text">
            <div class="talent__content animated">
              <p class="talent__content_title">国以才立，业以才兴</p>
              <p class="talent__content_text">
                人才是企业发展的根本，是推动企业越式发展的第一生产力。
              </p>
              <p class="talent__content_text">
                启誉重视团队建设，多渠道引进入才、高效机制培养人才、广活平台置升人才，为企业在激烈竞争中立于不败之地提供强有力的保障。
              </p>
            </div>
            <div class="news__more"
                 @click="$router.push('/TalentsPlan/TalentsPlanMain')">
              加入启誉
              <img src="./assets/img/more__sign.png"
                   alt="更多" />
            </div>
          </div>
        </div>
        <div class="company__video">
          <div class="video__bg"></div>
          <video src></video>
        </div>
      </div>
    </section>

    <!-- <section class="honour">
      <div class="company__news_title">
        <p class="news__english_title">QUALIFICATION&nbsp;&nbsp;HONOUR</p>
        <p class="news__china_title">资质与荣誉</p>
        <em class="news__china_btmline"></em>
      </div>
      <p>新宇十载有余，孜孜不倦，硕果累累。</p>
      <p>一切的努力，一切的成就，都源于一位新宇人的恪守己任，精益求精</p>
      <div class="honour__btnwrap">
        <button class="btn__intelligent">新宇资质</button>
        <button class="btn__honour">公司荣誉</button>
      </div>
      <div class="honour__swiper">
        <img src="./assets/img/swiper__honour.png"
             alt="荣誉奖状" />
      </div>
      <div class="news__more">查看更多 </div>
    </section>-->
    <!-- <section class="RDcenter">
      <div class="company__news_title">
        <p class="news__english_title">R&D&nbsp;&nbsp;CENTER</p>
        <p class="news__china_title">研发中心</p>
        <em class="news__china_btmline"></em>
      </div>
      <div class="RDcenter__contentwrap">
        <div class="RDcenter__picswiper">
          <img src="./assets/img/RD__swiper.png"
               alt="研发图片" />
        </div>
        <div class="RDcenter__describe">
          <div class="RDcenter__bgwhite"></div>
          <div class="RDcenter__textwrap">
            <p class="RDcenter__title">潜心研发&nbsp;&nbsp;距离生产</p>
            <p class="RDcenter__tit_english">
              Concentrated&nbsp;Rserch&nbsp;To&nbsp;Production
            </p>
            <em class="RDcenter__blue_sign"></em>
            <p class="RDcenter__describe_one">
              河南新宇建筑集团有限公司河南新宇建筑集团有限公司河南新宇建筑集团有限公司河南新宇建筑集团有限公司河南新宇建筑集团有限公司
            </p>
            <p class="RDcenter__describe_two">
              河南新宇建筑集团有限公司河南新宇建筑集团建筑集团有限公司河南新宇建筑集团建筑集团有限公司河南新宇建筑集团有限公司河南新宇建筑集团有限公司河南新宇建筑集团有限公司河南新宇建筑集团有限公司
            </p>
            <div class="news__more">了解更多 <img src="./assets/img/more__sign.png"
                   alt="更多" /></div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- <section class="factory">
      <div class="company__news_title">
        <p class="news__english_title">XINYU&nbsp;&nbsp;FACTORY</p>
        <p class="news__china_title">新宇工厂</p>
        <em class="news__china_btmline"></em>
      </div>
      <p class="factory__title_china">倾心打造产研销一体全链条</p>
      <p class="factory__tite_english">
        TO Build Reserch-production-marketing integration
      </p>
      <div class="factory__intro">
        <div class="faction__intro_text">
          <img src="./assets/img/factory__intro_text.png"
               alt="工厂介绍" />
        </div>
        <div class="faction__intro_pic">
          <em style="flex:1;"></em>
          <div class="faction__intro_pic01">
            <img src="./assets/img/factory__intro_pic01.png"
                 alt="工厂介绍" />
            <em style="flex:1;"></em>
            <img src="./assets/img/factory__intro_pic01.png"
                 alt="工厂介绍" />
          </div>
          <em style="flex:1;"></em>
          <div class="faction__intro_pic02">
            <img src="./assets/img/factory__intro_pic02.png"
                 alt="工厂介绍" />
            <em style="flex:1;"></em>
            <img src="./assets/img/factory__intro_pic02.png"
                 alt="工厂介绍" />
          </div>
        </div>
      </div>
    </section>
    <section class="productioncenter">
      <div class="company__news_title">
        <p class="news__english_title">PRODUCTION&nbsp;&nbsp;CENTER</p>
        <p class="news__china_title">产品中心</p>
        <em class="news__china_btmline"></em>
      </div>
      <p class="factory__title_china">业精于专 专精于一</p>
      <p class="factory__tite_english">
        Industry Professionals To Excel In Significantyl Superior
      </p>
      <div class="product__show">
        <div class="product__showwrap">
          <img class="product__showw_pic"
               src="./assets/img/factory__intro_pic02.png"
               alt="产品" />
          <p class="product__name">镀锌钢网</p>
          <em class="product__sign"></em>
          <p class="product__intro">
            产品由产品由产品由产品由产品由品由产产品由产产品由产品由产品由产品由产品由产品由产品由产品由产
          </p>
          <div class="news__more">了解更多 <img src="./assets/img/more__sign.png"
                 alt="更多" /></div>
        </div>
        <div class="product__showwrap">
          <img class="product__showw_pic"
               src="./assets/img/factory__intro_pic02.png"
               alt="产品" />
          <p class="product__name">镀锌钢网</p>
          <em class="product__sign"></em>
          <p class="product__intro">
            产品由产品由产品由产品由产品由品由产产品由产产品由产品由产品由产品由产品由产品由产品由产品由产
          </p>
          <div class="news__more">了解更多 <img src="./assets/img/more__sign.png"
                 alt="更多" /></div>
        </div>
        <div class="product__showwrap">
          <img class="product__showw_pic"
               src="./assets/img/factory__intro_pic02.png"
               alt="产品" />
          <p class="product__name">镀锌钢网</p>
          <em class="product__sign"></em>
          <p class="product__intro">
            产品由产品由产品由产品由产品由品由产产品由产产品由产品由产品由产品由产品由产品由产品由产品由产
          </p>
          <div class="news__more">了解更多 <img src="./assets/img/more__sign.png"
                 alt="更多" /></div>
        </div>
      </div>
    </section>

    <section class="culture">
      <div class="company__news_title">
        <p class="news__english_title">CORPORATE&nbsp;&nbsp;CULTURE</p>
        <p class="news__china_title">企业文化</p>
        <em class="news__china_btmline"></em>
      </div>
      <p>新宇十载有余，孜孜不倦，硕果累累。</p>
      <p>一切的努力，一切的成就，都源于一位新宇人的恪守己任，精益求精</p>
      <div class="honour__btnwrap">
        <button class="btn__intelligent">办公环境</button>
        <button class="btn__honour">员工风采</button>
      </div>
      <div class="culture__even">
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
        <img src="./assets/img/culture__even.png"
             alt="办公环境" />
      </div>
      <div class="morewrpa">
        <div class="news__more">了解更多 <img src="./assets/img/more__sign.png"
               alt="更多" /></div>
      </div>
    </section>-->
    <footer-router></footer-router>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import footerRouter from "@/components/FooterContent";
import FooterContent from "@/components/FooterContent";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "IndexMain",
  data () {
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
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false
        // },
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
    FooterContent,
    footerRouter
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    titleAnimate (_index) {
      const titleDom = document.getElementsByClassName("company__sign")[_index];
      titleDom.classList.add("rubberBand");
    },
    titleAnimateremove (_index) {
      const titleDom = document.getElementsByClassName("company__sign")[_index];
      titleDom.classList.remove("rubberBand");
    },
    cooperateAnimate (_index) {
      // tada
      const cooperateDom = document.getElementsByClassName("cooperate__img")[
        _index
      ];
      cooperateDom.classList.add("tada");
    },
    cooperateAnimateremove (_index) {
      const cooperateDom = document.getElementsByClassName("cooperate__img")[
        _index
      ];
      cooperateDom.classList.remove("tada");
    },
    goPage (type) {
      this.$router.push({ name: "NewsCenterMain", query: { newType: type } });
    },
    serviceShow (itemData, _index) {
      const servicePrdDom = document.getElementsByClassName(
        "proproductservice__pic"
      )[_index];
      servicePrdDom.classList.add("flip");
      itemData.serviceActiveFlag = true;
      this.serviceList.forEach((item, index) => {
        if (_index == index) {
          this.$set(item, "serviceActiveFlag", true);
        } else {
          this.$set(item, "serviceActiveFlag", false);
        }
        return item;
      });
    },
    serviceImgurl (itemData) {
      let img = "";
      if (!itemData.serviceActiveFlag) {
        img = require(`./assets/img/${itemData.serviceUrl}`);
      } else {
        img = require(`./assets/img/${itemData.serviceUrlactive}`);
      }
      return img;
    },
    newsTitle (itemData, _index) {
      this.newTypeshow = itemData.newTypeshow;
      itemData.titeShowflag = false;
      this.newsTitleList.forEach((item, index) => {
        if (_index == index) {
          this.$set(item, "titeShowflag", true);
        } else {
          this.$set(item, "titeShowflag", false);
        }
        return item;
      });
    },
    newsTitlehover (itemData, _index) {
      this.newTypeshow = itemData.newTypeshow;
      itemData.titehoverflag = false;
      this.newsTitleList.forEach((item, index) => {
        if (_index == index) {
          this.$set(item, "titehoverflag", true);
        } else {
          this.$set(item, "titehoverflag", false);
        }
        return item;
      });
    },
    gotoPage (path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html {
  font-family: "黑体";
}
.swiperwrap {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  // height: 680px;
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
.aboutcompany {
  margin-top: 318px;
  height: 640px;
  display: flex;
  line-height: 1;
  position: relative;
  .center__sign {
    width: 30px;
    height: 45px;
    position: absolute;
    top: -22.5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("./assets/img/center__sign.png") no-repeat center;
    background-size: 100%;
    z-index: 100;
  }
  .aboutcompany__inner {
    display: flex;
    position: relative;
    width: 1190px;
    margin: 0 auto;
    .company__describe {
      position: relative;
      line-height: 1;
      font-size: 30px;
      flex: 0 0 50%;
      padding: 56px 64px 64px 35px;
      .company__sign {
        position: absolute;
        top: 56px;
        width: 300px;
        height: 56px;
        background: url("./assets/img/company__sign.png") no-repeat left;
        // background-size: 100%;
        z-index: -1;
      }
      .company__title {
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #333;
        padding-left: 20px;
        .english__about {
          font-size: 22px;
          margin-top: 35px;
          text-align: left;
        }
        p {
          font-size: 26px;
          margin: 14px 50px 30px 0;
        }
      }
    }
    .company__video {
      position: relative;
      flex: 0 0 50%;
      .video__bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 412px;
        height: 406px;
        background-color: rgb(245, 245, 245);
      }
      video {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 490px;
        height: 330px;
        background: url("./assets/img/about__my.png") no-repeat center;
        background-size: 100% 100%;
        border: 1px solid #e6e6e6;
      }
    }
  }
  .company__content_text {
    font-family: "黑体";
    line-height: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 20px;
    .company__content_title {
      width: 230px;
      height: 65px;
    }
    .company__content_english {
      font-size: 16px;
      margin-top: 42px;
      line-height: 24px;
      color: #333;
    }
    .company__content_describe {
      font-size: 14px;
      margin-top: 14px;
      line-height: 24px;
      text-justify: auto;
      text-align: justify;
      text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
      color: #333;
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
      margin-top: 30px;
      cursor: pointer;
      img {
        width: 28px;
        height: 14px;
        margin-left: 15px;
      }
    }
  }
}
.productservice {
  width: 100%;
  position: relative;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  padding: 60px 0 0;
  text-align: center;
  line-height: 1;
  color: #333;
  background: rgba(244, 244, 245, 0.6);
  .center__sign {
    width: 30px;
    height: 45px;
    position: absolute;
    top: -22.5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("./assets/img/center__sign.png") no-repeat center;
    background-size: 100%;
    z-index: 100;
  }
  .company__sign {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
    height: 56px;
    background: url("./assets/img/company__sign.png") no-repeat center;
    // background-size: 100%;
    z-index: -1;
  }
  .english__intro {
    margin-top: 30px;
    font-size: 22px;
  }
  .china__intro {
    margin-top: 14px;
    font-size: 26px;
    font-weight: bold;
  }
  .black__line {
    display: inline-block;
    position: absolute;
    top: 402px;
    width: 100%;
    height: 2px;
    background-color: #333;
  }
  .productservice__item {
    width: 1190px;
    margin: 0 auto;
    padding: 35px 0 100px;
    display: flex;
    color: #333;
    justify-content: space-between;
    .productservice__sub {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .proproductservice__pic,
    .proproductservice__pic_active {
      width: 140px;
    }
    .puctservice__sign {
      margin-top: 35px;
      width: 30px;
      height: 20px;
    }
    .productservice__title {
      font-size: 28px;
      margin-top: 35px;
      font-weight: bold;
    }
    .productservice__content {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      margin-top: 21px;
      line-height: 25px;
      padding: 0 15px;
    }
  }
}
.companynews {
  width: 100%;
  position: relative;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  padding: 60px 0 0;
  text-align: center;
  line-height: 1;
  color: #333;
  .center__sign {
    width: 30px;
    height: 45px;
    position: absolute;
    top: -22.5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("./assets/img/center__sign.png") no-repeat center;
    background-size: 100%;
    z-index: 100;
  }
  .company__sign {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
    height: 56px;
    background: url("./assets/img/company__sign.png") no-repeat center;
    // background-size: 100%;
    z-index: -1;
  }
  .english__intro {
    margin-top: 30px;
    font-size: 22px;
  }
  .china__intro {
    margin-top: 14px;
    font-size: 26px;
    font-weight: bold;
  }
  .companynews__tab {
    display: flex;
    font-size: 16px;
    padding: 40px 500px;
    .companynews__tab_item {
      font-weight: bold;
      cursor: pointer;
    }
    .companynews__tab_active {
      color: rgb(0, 115, 229);
      &:after {
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        content: "";
        width: 24px;
        height: 4px;
        background-color: rgb(0, 115, 229);
      }
    }
    .companynews__hover_active {
      color: rgb(0, 115, 229);
      &:after {
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        content: "";
        width: 24px;
        height: 4px;
        background-color: rgb(0, 115, 229);
      }
    }
    p {
      flex: 1;
      position: relative;
    }
  }
  .company__news_content {
    position: relative;
    font-size: 14px;
    display: flex;
    height: 100%;
    line-height: 1;
    .news__center_line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 2px;
      height: 420px;
      background: url("./assets/img/news__center_line.png") no-repeat top;
      background-size: 100% 100%;
    }
    .news__dot_one {
      position: absolute;
      top: 82px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background: url("./assets/img/news__dot.png") no-repeat center;
      background-size: 100% 100%;
    }
    .news__dot_two {
      position: absolute;
      top: 130px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background: url("./assets/img/news__dot.png") no-repeat center;
      background-size: 100% 100%;
    }
    .news__dot_three {
      position: absolute;
      top: 275px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background: url("./assets/img/news__dot.png") no-repeat center;
      background-size: 100% 100%;
    }
    .news__dot_four {
      position: absolute;
      top: 330px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background: url("./assets/img/news__dot.png") no-repeat center;
      background-size: 100% 100%;
    }
    .company__news_inner {
      display: flex;
      width: 1190px;
      margin: 0 auto;
      .company__news_one {
        padding: 45px 42px 40px 40px;
        flex: 0 0 50%;
        .company__news_wraper {
          background: url("./assets/img/news__leftbg.png") no-repeat top;
          background-size: 100% 100%;
          padding: 21px 40px 12px 30px;
          cursor: pointer;
          .news__things_wraper {
            // height: 1.96px;
            display: flex;
            align-items: center;
            .news__things_num {
              width: 26px;
              height: 30px;
              background: url("./assets/img/one.png") no-repeat center;
              background-size: 100% 100%;
            }
            .news__things_text {
              padding-top: 10px;
              padding-left: 14px;
              font-size: 16px;
              font-weight: bold;
            }
          }
          .news__things_content {
            margin-top: 14px;
            margin-bottom: 14px;
            display: flex;
            padding: 0 20px 0 0;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            .news__things_top {
              display: flex;
              align-items: center;
              img {
                // width: 63px !important;
                height: 63px;
              }
              p {
                font-size: 12px;
                text-justify: auto;
                text-align: justify;
                margin-left: 20px;
                line-height: 20px;
              }
            }
            .news__things_btm {
              display: flex;
              margin-top: 14px;
              color: #999;
              .news__things_time {
                text-align: left;
                flex: 1;
                justify-self: flex-start;
                font-size: 12px;
              }
              .news__things_share {
                height: 30px;
                line-height: 30px;
                padding-left: 25px;
                background: url("./assets/img/friend__share.png") no-repeat left;
                background-size: 35%;
              }
            }
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
          cursor: pointer;
          img {
            width: 28px;
            height: 14px;
            margin-left: 15px;
          }
        }
      }
      .company__news_two {
        padding: 90px 40px 40px 42px;
        flex: 0 0 50%;
        .company__news_wraper {
          background: url("./assets/img/news__rightbg.png") no-repeat top;
          background-size: 100% 100%;
          padding: 21px 40px 12px 55px;
          cursor: pointer;
          .news__things_wraper {
            display: flex;
            align-items: center;
            .news__things_num {
              width: 26px;
              height: 30px;
              background: url("./assets/img/one.png") no-repeat center;
              background-size: 100% 100%;
            }
            .news__things_text {
              padding-top: 10px;
              padding-left: 14px;
              font-size: 16px;
              font-weight: bold;
            }
          }
          .news__things_content {
            margin-top: 14px;
            margin-bottom: 14px;
            display: flex;
            padding: 0 20px 0 0;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            .news__things_top {
              display: flex;
              align-items: center;
              img {
                // width: 64px;
                height: 64px;
              }
              p {
                font-size: 12px;
                text-justify: auto;
                text-align: justify;
                margin-left: 20px;
                line-height: 20px;
              }
            }
            .news__things_btm {
              display: flex;
              margin-top: 14px;
              color: #999;
              .news__things_time {
                text-align: left;
                flex: 1;
                justify-self: flex-start;
                font-size: 12px;
              }
              .news__things_share {
                height: 30px;
                line-height: 30px;
                padding-left: 25px;
                background: url("./assets/img/friend__share.png") no-repeat left;
                background-size: 35%;
              }
            }
          }
        }
      }
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
    margin: 0 auto 42px;
    cursor: pointer;
    img {
      width: 28px;
      height: 14px;
      margin-left: 15px;
    }
  }
}
// .honour {
//   font-size: 14px;
//   text-align: center;
//   .company__news_title {
//     width: 100%;
//     text-align: center;
//     font-size: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     .news__english_title {
//       width: 350px;
//       height: 35px;
//       line-height: 35px;
//       font-size: 22px;
//       margin-top: 52px;
//       background: #333;
//       color: #fff;
//     }
//     .news__china_title {
//       margin-top: 16px;
//     }
//     .news__china_btmline {
//       width: 25px;
//       height: 4px;
//       margin-top: 20px;
//       margin-bottom: 18px;
//       background-color: rgb(0, 115, 235);
//     }
//   }
//   p {
//     line-height: 30px;
//   }
//   .honour__btnwrap {
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 15px 40px;
//     .btn__intelligent {
//       width: 115px;
//       height: 40px;
//       background-color: #333;
//       color: #fff;
//       border: 1px solid #333;
//     }
//     .btn__honour {
//       width: 115px;
//       height: 40px;
//       border: 1px solid #333;
//       background-color: #fff;
//       color: #333;
//     }
//   }
//   .honour__swiper {
//     width: 100%;
//     display: inline-block;
//     img {
//       width: 100%;
//     }
//   }
//   .news__more {
//     display: flex;
//     align-items: center;
//     width: 140px;
//     height: 42px;
//     line-height: 42px;
//     border: 1px solid rgb(140, 142, 153);
//     font-size: 14px;
//     padding-left: 30px;
//     border-radius: 4px;
//     margin-top: 10px;
//     img {
//       width: 28px;
//       height: 14px;
//       margin-left: 15px;
//     }
//   }
// }
.cooperate {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  font-size: 14px;
  text-align: center;
  background: url("./assets/img/cooprate__bg.png") no-repeat top;
  background-size: 100% 100%;
  color: #fff;
  .center__sign {
    width: 30px;
    height: 45px;
    position: absolute;
    top: -22.5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("./assets/img/center__sign.png") no-repeat center;
    background-size: 100%;
    z-index: 100;
  }
  .company__sign {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
    height: 56px;
    background: url("./assets/img/company__sign.png") no-repeat center;
    // background-size: 100%;
    z-index: 1;
    opacity: 0.3;
  }
  .english__intro {
    margin-top: 30px;
    font-size: 22px;
  }
  .china__intro {
    margin-top: 14px;
    font-size: 26px;
    font-weight: bold;
  }
  .black__line {
    display: inline-block;
    position: absolute;
    top: 400px;
    width: 100%;
    height: 2px;
    background-color: #333;
  }
  .cooperate__partner {
    display: flex;
    width: 1190px;
    margin: 0 auto;
    height: 260px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0 20px;
    img {
      cursor: pointer;
      width: 240px;
    }
  }
  .morewrpa {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 28px 0 45px;
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
      cursor: pointer;
      img {
        width: 28px;
        height: 14px;
        margin-left: 15px;
      }
    }
  }
}
.talent {
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  .center__sign {
    width: 30px;
    height: 45px;
    position: absolute;
    top: -22.5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: url("./assets/img/center__sign.png") no-repeat center;
    background-size: 100%;
    z-index: 100;
  }
  .talent__inner {
    display: flex;
    position: relative;
    width: 1190px;
    margin: 0 auto;
    .company__describe {
      position: relative;
      line-height: 1;
      font-size: 30px;
      flex: 0 0 50%;
      padding: 56px 0 64px 35px;
      .company__sign {
        position: absolute;
        top: 56px;
        left: 42px;
        width: 300px;
        height: 56px;
        background: url("./assets/img/company__sign.png") no-repeat center;
        // background-size: 100%;
        z-index: -1;
      }
      .company__title {
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #333;
        padding-left: 20px;
        .english__about {
          font-size: 22px;
          margin-top: 35px;
          text-align: left;
        }
        p {
          font-size: 26px;
          margin: 14px 50px 30px 0;
        }
      }
      .company__content_text {
        font-family: "黑体";
        line-height: 1;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px;
        color: #fff;
        .talent__content {
          font-size: 14px;
          margin-top: 40px;
          width: 540px;
          align-self: flex-end;
          padding: 20px 35px 32px 28px;
          background-color: #666;
          .talent__content_title {
            font-size: 22px;
            font-family: PangMenZhengDao;
            font-weight: bold;
            line-height: 35px;
          }
          .talent__content_text {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
    .company__video {
      position: relative;
      flex: 0 0 50%;
      .video__bg {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 412px;
        height: 406px;
        background-color: rgb(245, 245, 245);
      }
      video {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 490px;
        height: 330px;
        background: url("./assets/img/talents.png") no-repeat center;
        background-size: 100% 100%;
        border: 1px solid #e6e6e6;
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
      margin-top: 30px;
      color: #999;
      cursor: pointer;
      img {
        width: 28px;
        height: 14px;
        margin-left: 15px;
      }
    }
  }
}
// .RDcenter {
//   font-size: 14px;
//   text-align: center;
//   background-color: rgb(229, 229, 229);
//   padding-bottom: 56px;
//   .company__news_title {
//     width: 100%;
//     text-align: center;
//     font-size: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     .news__english_title {
//       width: 250px;
//       height: 35px;
//       line-height: 35px;
//       font-size: 22px;
//       margin-top: 52px;
//       background: #333;
//       color: #fff;
//     }
//     .news__china_title {
//       margin-top: 16px;
//     }
//     .news__china_btmline {
//       width: 25px;
//       height: 4px;
//       margin-top: 20px;
//       margin-bottom: 18px;
//       background-color: rgb(0, 115, 235);
//     }
//   }
//   .RDcenter__contentwrap {
//     display: flex;
//     .RDcenter__picswiper {
//       flex: 0 0 50%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
//       img {
//         width: 300px;
//         height: 340px;
//       }
//     }
//     .RDcenter__describe {
//       position: relative;
//       display: flex;
//       flex: 0 0 50%;
//       flex-direction: column;
//       .RDcenter__bgwhite {
//         position: absolute;
//         left: 0;
//         top: 0;
//         width: 270px;
//         height: 100%;
//         background: #fff;
//         z-index: 1;
//       }
//       .RDcenter__textwrap {
//         position: absolute;
//         flex-direction: column;
//         display: flex;
//         height: 100%;
//         width: 440px;
//         right: 180px;
//         z-index: 1;
//         .RDcenter__title {
//           font-size: 35px;
//           font-weight: bold;
//           align-self: flex-end;
//           margin-top: 20px;
//         }
//         .RDcenter__tit_english {
//           font-size: 20px;
//           align-self: flex-end;
//           color: #999;
//           margin-top: 10px;
//         }
//         .RDcenter__blue_sign {
//           width: 180px;
//           height: 3px;
//           background-color: rgb(0, 115, 235);
//           margin-top: 10px;
//           margin-bottom: 5px;
//           align-self: flex-end;
//         }
//         .RDcenter__describe_one {
//           font-size: 12px;
//           line-height: 30px;
//           text-align: left;
//           text-indent: 28px;
//           color: #999;
//         }
//         .RDcenter__describe_two {
//           font-size: 12px;
//           line-height: 30px;
//           text-align: left;
//           text-indent: 28px;
//           color: #999;
//         }
//         .news__more {
//           display: flex;
//           align-items: center;
//           width: 140px;
//           height: 42px;
//           line-height: 42px;
//           border: 1px solid rgb(140, 142, 153);
//           font-size: 14px;
//           padding-left: 30px;
//           border-radius: 4px;
//           margin-top: 10px;
//           img {
//             width: 28px;
//             height: 14px;
//             margin-left: 15px;
//           }
//         }
//       }
//     }
//   }
// }
// .factory {
//   font-size: 14px;
//   text-align: center;
//   .company__news_title {
//     width: 100%;
//     text-align: center;
//     font-size: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     .news__english_title {
//       width: 250px;
//       height: 35px;
//       line-height: 35px;
//       font-size: 22px;
//       margin-top: 52px;
//       background: #333;
//       color: #fff;
//     }
//     .news__china_title {
//       margin-top: 16px;
//     }
//     .news__china_btmline {
//       width: 25px;
//       height: 4px;
//       margin-top: 20px;
//       margin-bottom: 18px;
//       background-color: rgb(0, 115, 235);
//     }
//   }
//   .factory__title_china {
//     font-size: 20px;
//     font-weight: bold;
//     margin-top: 10px;
//   }
//   .factory__tite_english {
//     font-size: 16px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     color: #666;
//   }
//   .factory__intro {
//     display: flex;
//     .faction__intro_text {
//       flex: 0 0 50%;
//       img {
//         width: 100%;
//         height: 480px;
//       }
//     }
//     .faction__intro_pic {
//       flex: 0 0 50%;
//       display: flex;
//       .faction__intro_pic01 {
//         display: flex;
//         flex-direction: column;
//         img {
//           width: 350px;
//           height: 230px;
//         }
//       }
//       .faction__intro_pic02 {
//         display: flex;
//         flex-direction: column;
//         text-align: right;
//         img {
//           width: 260px;
//           height: 230px;
//         }
//       }
//     }
//   }
// }
// .productioncenter {
//   font-size: 14px;
//   text-align: center;
//   .company__news_title {
//     width: 100%;
//     text-align: center;
//     font-size: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     .news__english_title {
//       width: 280px;
//       height: 30px;
//       line-height: 35px;
//       font-size: 22px;
//       margin-top: 52px;
//       background: #333;
//       color: #fff;
//     }
//     .news__china_title {
//       margin-top: 16px;
//     }
//     .news__china_btmline {
//       width: 25px;
//       height: 4px;
//       margin-top: 20px;
//       margin-bottom: 18px;
//       background-color: rgb(0, 115, 235);
//     }
//   }
//   .factory__title_china {
//     font-size: 20px;
//     font-weight: bold;
//     margin-top: 10px;
//   }
//   .factory__tite_english {
//     font-size: 16px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     color: #666;
//   }
//   .product__show {
//     padding-top: 10px;
//     padding: 10px 160px 30px;
//     display: flex;
//     justify-content: space-between;
//     .product__showwrap {
//       width: 300px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       border: 1px solid rgb(180, 181, 187);
//       .product__showw_pic {
//         width: 100%;
//       }
//       .product__name {
//         width: 100%;
//         font-size: 16px;
//         font-weight: bold;
//         text-align: left;
//         padding: 12px 0 5px 18px;
//       }
//       .product__sign {
//         align-self: flex-start;
//         width: 28px;
//         height: 3px;
//         background-color: rgb(0, 115, 235);
//         margin-left: 18px;
//       }
//       .product__intro {
//         padding: 12px 14px 35px;
//         line-height: 22px;
//         text-align: left;
//         text-align: justify;
//         font-size: 12px;
//       }
//       .news__more {
//         display: flex;
//         align-items: center;
//         width: 140px;
//         height: 42px;
//         line-height: 42px;
//         border: 1px solid rgb(140, 142, 153);
//         font-size: 14px;
//         padding-left: 30px;
//         border-radius: 4px;
//         margin-top: 10px;
//         img {
//           width: 28px;
//           height: 14px;
//           margin-left: 15px;
//         }
//       }
//     }
//   }
// }

// .culture {
//   font-size: 14px;
//   text-align: center;
//   .company__news_title {
//     width: 100%;
//     text-align: center;
//     font-size: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     .news__english_title {
//       width: 350px;
//       height: 35px;
//       line-height: 35px;
//       font-size: 22px;
//       margin-top: 52px;
//       background: #333;
//       color: #fff;
//     }
//     .news__china_title {
//       margin-top: 16px;
//     }
//     .news__china_btmline {
//       width: 25px;
//       height: 4px;
//       margin-top: 20px;
//       margin-bottom: 18px;
//       background-color: rgb(0, 115, 235);
//     }
//   }
//   p {
//     line-height: 30px;
//   }
//   .honour__btnwrap {
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 15px 40px;
//     .btn__intelligent {
//       width: 115px;
//       height: 40px;
//       background-color: #333;
//       color: #fff;
//       border: 1px solid #333;
//     }
//     .btn__honour {
//       width: 115px;
//       height: 40px;
//       border: 1px solid #333;
//       background-color: #fff;
//       color: #333;
//     }
//   }
//   .culture__even {
//     display: flex;
//     height: 460px;
//     flex-wrap: wrap;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     padding: 20px 120px 20px;
//     img {
//       width: 260px;
//     }
//   }
//   .morewrpa {
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     .news__more {
//       display: flex;
//       align-items: center;
//       width: 140px;
//       height: 42px;
//       line-height: 42px;
//       border: 1px solid rgb(140, 142, 153);
//       font-size: 14px;
//       padding-left: 30px;
//       border-radius: 4px;
//       margin-top: 10px;
//       img {
//         width: 28px;
//         height: 14px;
//         margin-left: 15px;
//       }
//     }
//   }
// }
</style>
