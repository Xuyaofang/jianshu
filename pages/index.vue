<template>
  <div style="...">
    <my-header></my-header>
    <div class="container index">
      <div class="row">
        <div class="col-xs-16 main">
          <!-- 热门专题 -->
          <div class="recommend-collection">
            <nuxt-link class="collection" to="/collection/123">
              <img src="~assets/img/c_1.jpg" alt="">
              <span name="name">故事</span>
            </nuxt-link>
            <nuxt-link class="collection" to="/collection/123">
              <img src="~assets/img/c_2.jpg" alt="">
              <span name="name">手绘</span>
            </nuxt-link>
            <nuxt-link class="collection" to="/collection/123">
              <img src="~assets/img/c_3.png" alt="">
              <span name="name">读书</span>
            </nuxt-link>
            <nuxt-link class="collection" to="/collection/123">
              <img src="~assets/img/c_2.jpg" alt="">
              <span name="name">社会热点社会热点社会热点</span>
            </nuxt-link>
            <nuxt-link class="collection" to="/collection/123">
              <img src="~assets/img/c_1.jpg" alt="">
              <span name="name">历史</span>
            </nuxt-link>
            <nuxt-link class="more-collection" to="/collection/123">
              更多热门专题
              <i class="fa fa-angle-right"></i>
            </nuxt-link>
            </div>
          <!-- div. -->
          <div class="split-line"></div>
          <!-- 文章列表 -->
          <div class="list-container">
            <ul class="note-list">
              <li class="have-img">
                <nuxt-link to="/p/123" class="wrap-img">
                  <img src="~assets/img/note.jpg" alt="">
                </nuxt-link>
                <div class="content">
                  <div class="author">
                    <nuxt-link to="/p/123" class="avatar">
                      <img src="~assets/img/default-header.jpg" alt="">
                    </nuxt-link>
                    <div class="info">
                      <nuxt-link to="/u/123" class="nickname">测试用户</nuxt-link>
                      <span class="time">04.12 10:18</span>
                    </div>
                  </div>
                  <nuxt-link to="/p/123" class="title">女孩子悄悄变美的10个小习惯</nuxt-link>
                  <div class="abstruct">文|娴线 花很少很少的钱，拥有很多很多的美，并且这份美健康无敌。让我悄悄变美的10个日常小习惯，分享给渴望变得更美丽的你。 ①爽肤水拍一拍 脖子是个神奇的地方，几乎所有女生都...</div>
                  <div class="meta">
                    <nuxt-link to="/p/123" class="collection-tag">社会与法</nuxt-link>
                    <nuxt-link to="/p/123">
                      <i class="fa fa-eye"></i>
                      1500
                    </nuxt-link>
                    <nuxt-link to="/p/123">
                      <i class="fa fa-comment"></i>
                      100
                    </nuxt-link>
                    <span>
                      <i class="fa fa-star"></i>
                      20
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="author">
                    <nuxt-link to="/p/123" class="avatar">
                      <img src="~assets/img/default-header.jpg" alt="">
                    </nuxt-link>
                    <div class="info">
                      <nuxt-link to="/u/123" class="nickname">测试用户</nuxt-link>
                      <span class="time">04.12 10:18</span>
                    </div>
                  </div>
                  <nuxt-link to="/p/123" class="title">女孩子悄悄变美的10个小习惯</nuxt-link>
                  <div class="abstruct">
                    文|娴线 花很少很少的钱，拥有很多很多的美，并且这份美健康无敌。让我悄悄变美的10个日常小习惯，分享给渴望变得更美丽的你。 ①爽肤水拍一拍 脖子是个神奇的地方，几乎所有女生都...</div>
                  <div class="meta">
                    <nuxt-link to="/p/123">
                      <i class="fa fa-eye"></i>
                      1500
                    </nuxt-link>
                    <nuxt-link to="/p/123">
                      <i class="fa fa-comment"></i>
                      100
                    </nuxt-link>
                    <span>
                      <i class="fa fa-star"></i>
                      20
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a href="#" class="load-more">阅读更多</a>
        </div>
        <div class="col-xs-offset-1 col-xs-7 aside">
          <div class="row">
            <!-- 广告 -->
            <div class="board">
              <nuxt-link to="/">
                <img src="~/assets/img/ad1.png" alt="">
              </nuxt-link>
              <nuxt-link to="/">
                <img src="~/assets/img/ad2.png" alt="">
              </nuxt-link>
              <nuxt-link to="/">
                <img src="~/assets/img/ad3.png" alt="">
              </nuxt-link>
              <nuxt-link to="/">
                <img src="~/assets/img/ad4.png" alt="">
              </nuxt-link>
            </div>
            <!-- 推荐作者 -->
            <div class="recommended-author">
              <div class="title">
                <span>推荐作者</span>
                <a class="page-change" @click="refreshHandle()">
                  <transition name="rotate">
                    <i class="fa fa-refresh"></i>
                  </transition>
                  换一批
                </a>
                <!-- <nuxt-link class="page-change" to="" >
                  <i class="fa fa-refresh"></i>
                  换一批
                </nuxt-link> -->
              </div>
              <ul class="recommended-list">
                <!-- <li v-for="item in items" :key="item.id">
                  <nuxt-link class="avatar" to="/u/123">
                    <img src="~assets/img/default-header.jpg" alt="">
                  </nuxt-link>
                  <a class="follow" :class="{itemHover:itemHoverIndex==1}" @mouseenter="enterFollow(1)" @mouseleave="leaveFollow()" @click="followHandle($event)">
                    <i class="fa fa-plus"></i>
                    关注
                  </a>
                  <nuxt-link class="name" to='/u/123'>
                    简书用户
                  </nuxt-link>
                  <p>写了1985k字，1.9k喜欢。。。</p>
                </li> -->
                <li>
                  <nuxt-link class="avatar" to="/u/123">
                    <img src="~assets/img/default-header.jpg" alt="">
                  </nuxt-link>
                  <a class="follow" :class="{following:itemClickIndex==1,unfollow:itemHoverIndex==1}" @mouseenter="enterFollow(1)" @mouseleave="leaveFollow()" @click="followHandle($event)">
                    <i class="fa fa-plus"></i>
                    关注
                  </a>
                  <nuxt-link class="name" to='/u/123'>
                    简书用户
                  </nuxt-link>
                  <p>写了1985k字，1.9k喜欢。。。</p>
                </li>
                <li>ffffff点击事件
                  <nuxt-link class="avatar" to="/u/123">
                    <img src="~assets/img/default-header.jpg" alt="">
                  </nuxt-link>
                  <a :class="follow"  @click="followHandle($event)">
                    <i class="fa fa-plus"></i>
                    关注
                  </a>
                  <nuxt-link class="name" to='/u/123'>
                    简书用户
                  </nuxt-link>
                  <p>写了1985k字，1.9k喜欢。。。</p>
                </li>
                <li>ffffff点击事件
                  <nuxt-link class="avatar" to="/u/123">
                    <img src="~assets/img/default-header.jpg" alt="">
                  </nuxt-link>
                  <a class="follow"  @click="followHandle($event)">
                    <i class="fa fa-plus"></i>
                    关注
                  </a>
                  <nuxt-link class="name" to='/u/123'>
                    简书用户
                  </nuxt-link>
                  <p>写了1985k字，1.9k喜欢。。。</p>
                </li>
                <li>
                  <nuxt-link class="avatar" to="/u/123">
                    <img src="~assets/img/default-header.jpg" alt="">
                  </nuxt-link>
                  <a href="#" class="follow" v-html="isFollow?follow:following?following:unfollow">
                  </a>
                  <a href="#" class="followed" @mouseover="followed=false" v-show="follow&followed">
                    <i class="fa fa-check"></i>
                    已关注
                  </a>
                  <a href="#" class="unfollow" @mouseleave="followed=true" v-show="follow&!followed" @click="follow=false">
                    <i class="fa fa-times"></i>
                    取消关注
                  </a>
                  <nuxt-link class="name" to='/u/123'>
                    简书用户
                  </nuxt-link>
                  <p>写了1985k字，1.9k喜欢。。。</p>
                </li>
                <!-- <li>
                  <nuxt-link class="avatar" to="/u/123">
                    <img src="~assets/img/default-header.jpg" alt="">
                  </nuxt-link>
                  <a href="#" class="follow" @click="follow=!follow" v-show="!follow">
                    <i class="fa fa-plus"></i>
                    关注
                  </a>
                  <a href="#" class="followed" @mouseover="followed=false" v-show="follow&followed">
                    <i class="fa fa-check"></i>
                    已关注
                  </a>
                  <a href="#" class="unfollow" @mouseleave="followed=true" v-show="follow&!followed" @click="follow=false">
                    <i class="fa fa-times"></i>
                    取消关注
                  </a>
                  <nuxt-link class="name" to='/u/123'>
                    简书用户
                  </nuxt-link>
                  <p>写了1985k字，1.9k喜欢。。。</p>
                </li> -->
              </ul>
              <nuxt-link to="/u/123" class="find-more">
                查看更多
                <i class="fa fa-angle-right"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from "../components/myHeader";
export default {
  //   name: "Index",
  head: {
    title: "简书-创作你的创作",
    meta: [
      { charset: "utf-8" },
      { name: "keywords", content: "简书首页" },
      { name: "description", content: "简书首页" },
      { name: "author", content: "徐要芳" }
    ]
  },
  components: {
    myHeader
  },
  data() {
    return {
      name: "首页",
      items:[
        {class:'fa fa-plus',name:'关注'},
        {class:'fa fa-plus',name:'关注'},
        {class:'fa fa-plus',name:'关注'}
      ],
      isFollow:false,
      isFollowing:true,
      // followed: true,
      // follow:'follow',
      itemHoverIndex:null,
      itemHover:'unfollow',
      itemClickIndex:0,
      itemClick:'',
      follow:'<i class="fa fa-plus"></i> 关注',
      following:'<i class="fa fa-check"></i> 已关注',
      unfollow:'<i class="fa fa-times"></i> 取消关注'
    };
  },
  methods: {
    refreshHandle() {
      var refresh = document.querySelector(
        ".index .aside .recommended-author .title .page-change>i"
      );
      refresh.style.transform = "rotate(360deg)";
      refresh.style.transition = "all .5s";
    },
    // followHandle(event){
    //   this.isFollow =! this.isFollow;
    //   if (this.isFollow == true) {
    //     event.currentTarget.className = 'following';
    //     event.currentTarget.innerHTML = '<i class="fa fa-check"></i> 已关注';
    //   } else {
    //     event.currentTarget.innerHTML = '<i class="fa fa-plus"></i> 关注';
    //     event.currentTarget.className = 'follow';
    //   }
    // },
    followHandle(event){
      console.log(event.currentTarget.className);
      // var className = event.currentTarget.className.toString();
      // this.itemClickIndex = i;
      if (event.currentTarget.className.indexOf('follow')) {
        console.log('baohan')
        
      } else {
        console.log('不包含')
        
      }
       
      if (this.isFollow == true) {
        event.currentTarget.className = 'following';
        event.currentTarget.innerHTML = '<i class="fa fa-check"></i> 已关注';
      } else {
        event.currentTarget.innerHTML = '<i class="fa fa-plus"></i> 关注';
        event.currentTarget.className = 'follow';
      }
    },
    enterFollow(i){
      this.itemHoverIndex = i;
      this.itemHover = 'unfollow';
      console.log(i)
      // this.followed = false;
      // console.log(this.followed)
      document.querySelector('.unfollow').innerHTML = '<i class="fa fa-times"></i> 取消关注';
      // document.querySelector('.following').innerHTML ='<i class="fa fa-check"></i> 已关注';
    },
    leaveFollow(){
      this.itemHoverIndex = null;
      this.itemHover = 'following';
      // this.followed = true;
      // console.log(this.followed)
      document.querySelector('.following').innerHTML ='<i class="fa fa-check"></i> 已关注'
      // document.querySelector('.unfollow').innerHTML = '<i class="fa fa-times"></i> 取消关注';
    }
    // followHandle(i){
    //   var guanzhu = document.querySelector('.recommended-list li:nth-of-type('+i+') .follow');
    //   this.isFollow=!this.isFollow;
    //   if (this.isFollow == true) {
    //     guanzhu.className = this.following;
    //   }
    // },
    // followHandle(i) {
    //   this.follow = !this.follow;
    //   var followed = document.querySelector(
    //     ".index .aside .recommended-author .recommended-list li .follow"
    //   );
    //   if (this.follow == true) {
    //     if (this.followed == true) {
    //       followed.innerHTML =
    //         '<i class="fa fa-check"></i>已关注';
    //     } else {
    //       followed.innerHTML =
    //         '<i class="fa fa-times"></i>取消关注';
    //     }
    //   } else {
    //     followed.innerHTML = '<i class="fa fa-plus"></i>关注';
    //   }
    // }
  }
};
</script>
<style scoped>
/* .rotate-enter-active {
  transition: all 0.5s ease;
}
.rotate-leave-active {
  transition: all 0.5s;
}
.rotate-enter,
.rotate-leave-to {
  transform: rotate(360deg);
} */
</style>
