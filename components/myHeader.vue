<template>
  <div>
      <nav class="navbar navbar-fixed-top">
          <div class="width-limit">
              <!-- logo -->
              <nuxt-link class="logo" to="/">
                <img src="../assets/img/nav-logo.png" alt="">
              </nuxt-link>
              <!-- 右上角 写文章 -->
              <nuxt-link to="/write" class="write-btn">
                <i class="fa fa-edit">
                    写文章
                </i>
              </nuxt-link>
              <div class="user" @mouseover="userShow=true"  @mouseleave="userShow=false">
                  <div class="drop-down">
                      <nuxt-link to="/u/123" class="avatar">
                          <img src="~assets/img/default-header.jpg" alt="">
                      </nuxt-link>
                  </div>
                  <ul class="drop-menu" v-show="userShow">
                      <li>
                          <nuxt-link to="/u/123">
                            <i class="fa fa-home"> </i>我的主页
                          </nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/user/123/">
                          <i class="fa fa-bookmark"> </i>收藏的文章
                          </nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/user/123/like">
                            <i class="fa fa-heart"> </i>喜欢的文章
                          </nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/settings/basic">
                            <i class="fa fa-cog"> </i>设置
                          </nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/logoout">
                            <i class="fa fa-sign-out"></i>退出
                          </nuxt-link>
                      </li>
                  </ul>
              </div><!-- 右上角  登录和注册 -->
              <!-- 导航部分 -->
              <div class="top-container">
                <div class="navbar-menu">
                  <button type="button" @click="menuShowHandle()">
                    <i class="fa fa-bars"></i>                   
                  </button>
                </div>
                <!-- <div class="container"> -->
                  <!-- <div class="row"> -->
                  <ul class="nav-list">
                    <li>
                      <nuxt-link to="/" class="active">
                        <i class="fa fa-compass"></i>
                        <span>发现</span>
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">
                        <i class="fa fa-book"></i>
                        <span>关注</span>
                      </nuxt-link>
                    </li>
                    <li class="user" @mouseover="notifyShow=true" @mouseleave="notifyShow=false">
                      <nuxt-link to="/follow">
                        <i class="fa fa-bell-o"></i>
                        <span>消息</span>
                      </nuxt-link>
                      <ul class="drop-menu" v-show="notifyShow">
                        <li>
                          <nuxt-link to="/notify"><i class="fa fa-comment-o"></i>评论</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/"><i class="fa fa-envelope-o"></i>简信</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/"><i class="fa fa-plus-square-o"></i>关注</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/"><i class="fa fa-heart-o"></i>喜欢和赞</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li class="search">
                      <form action="" method="post">
                        <input type="text" placeholder="搜索" class="search-input">
                        <a href="#" class="search-btn">
                          <i class="fa fa-search"></i>
                        </a>
                      </form>
                    </li>
                  </ul>

                  <!-- </div> -->
                <!-- </div>               -->
                <!-- <transition name="menu-transition" enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp"> -->
                  
                <!-- </transition> -->
              </div> 
          </div>
      </nav>
  </div>
</template>
<script>
export default {
  name: "myHeader",
  data() {
    return {
      userShow: false,
      notifyShow: false,
      // menuShow: false,
      count:0

    };
  },
  methods: {
    userShowHandle() {
      this.userShow = true;
    },
    userHideHandle() {
      this.userShow = false;
    },
    menuShowHandle(){
      this.count=this.count+1;
      var menuShow = document.querySelector('ul.nav-list');
      if (this.count%2==0) {
        menuShow.style.height = '0'
      } else {
        menuShow.style.height = '230px';
      }
    }

  }
};
</script>
<style scoped>
nav {
  width: 100%;
  height: 56px;
  background-color: #fff;
}
.navbar {
  margin-bottom: 20px;
  border-width: 0 0 1px;
  border-color: #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}
.navbar::before {
  content: "";
  display: table;
}
.navbar-fixed-top {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
}
nav .width-limit {
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 56px; /*测试样式*/
}
nav .logo {
  float: left;
  height: 56px;
}
nav .logo img {
  height: 100%;
}
nav .write-btn {
  float: right;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 8px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background: #ea6f5a;
  text-align: center;
}
nav .write-btn:hover {
  background: #ec6149;
  cursor: pointer;
}
nav .user {
  float: right;
  position: relative;
}
nav .user .avatar {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  margin: 8px 10px 8px 25px;
  display: inline-block;
}

nav .user .drop-down:hover {
  background-color: #f5f5f5;
}
nav .user .drop-menu li a:hover {
  background-color: #f5f5f5;
}
nav .user .avatar::before {
  content: "";
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #999;
  top: 18px;
  right: -14px;
}
nav .user .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #eee;
}
nav .user .drop-menu {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  min-width: 180px;
  z-index: 555;
  margin: 0;
  background: #fff;
  padding: 10px 0;
  font-size: 15px;
}
nav .user .drop-menu li a {
  padding: 10px 20px;
  display: block;
  line-height: 30px;
}
nav .user .drop-menu li a i {
  margin-right: 15px;
  color: #ea6f5a;
  font-size: 18px;
  display: inline-block;
}
nav .nav-list {
  margin: 0;
}
nav .nav-list::after {
  /* 清除浮动全部代码 */
  content: "";
  height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
nav .nav-list > li {
  float: left;
  margin-right: 5px;
}
nav .nav-list > li a {
  display: block;
  height: 56px;
  line-height: 26px;
  padding: 15px;
}
nav .nav-list > li a.active {
  color: #ea6f5a;
  background-color: none !important;
}
nav .nav-list > li a:hover {
  background-color: #f5f5f5;
}
nav .nav-list > li a i {
  margin-right: 5px;
  font-size: 20px;
}
nav .nav-list .drop-menu li i {
  color: #ea6f5a;
}
nav .nav-list .search {
  padding-left: 15px;
  margin-right: 10px;
}
nav .nav-list .search form {
  margin-bottom: 20px;
  position: relative;
  top: 9px;
}
nav .nav-list .search form .search-input {
  width: 240px;
  height: 38px;
  font-size: 14px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  background-color: #eee;
  border-radius: 40px;
  transition: width 0.5s;
}
nav .nav-list .search form .search-input:focus {
  width: 320px;
}
nav .nav-list .search form .search-btn {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 4px;
  right: 5px;
  color: #969696;
  text-align: center;
  padding: 0;
}
nav .nav-list .search form .search-btn:hover {
  background: none;
}
nav .nav-list .search form .search-input:focus ~ .search-btn {
  color: white;
  background: #969696;
  border-radius: 50%;
}
nav .nav-list .search form .search-btn i {
  display: inline-block !important;
  margin: 0;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  /* -webkit-text-stroke: 1px gray; */
}

nav .navbar-menu {
  display: none;
}
nav .navbar-menu button {
  color: #888;
  font-size: 25px;
  padding: 4px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  -webkit-text-stroke: 1px white;
}
nav .navbar-menu button:hover {
  background: #ddd;
}
@media (max-width: 1440px) {
  nav .nav-list > li a i {
    display: none;
  }
  nav .nav-list .search form .search-input {
    width: 160px;
  }
  nav .nav-list .search form .search-input:focus {
    width: 240px;
  }
}

@media (max-width: 1080px) {
  nav .nav-list li span {
    display: none;
  }
  nav .nav-list > li a i {
    display: block;
  }
}
@media (max-width: 768px) {
  nav {
    background-color: white;
  }
  nav .navbar-menu {
    display: block;
    line-height: 56px;
    border-bottom: 1px solid #f0f0f0;
  }
  nav .container {
    background: white;
  }
  nav .nav-list {
    height: 0;
    display: none;
    transition: height 0.4s;
    background-color: FFFFFF;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  nav .nav-list > li {
    width: 95vw;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
  }
  nav .nav-list > li a i {
    display: none;
  }
  nav .nav-list > li a span {
    display: block;
  }
  nav .nav-list > li .drop-menu {
    display: none;
  }
  nav .nav-list > li.search form .search-input {
    width: 100%;
  }
  nav .nav-list > li.search form .search-input:focus {
    width: 100%;
  }
}
@media (min-width: 768px) {
  nav .nav-list {
    display: inline-block !important;
  }
}
/* .menu-transition-enter-active, .menu-transition-leave-active {
  transition: all 3s ease;
}
.menu-transition-enter, {
 
  height: 0;
  opacity: 0;
}
.menu-transition-leave-to {
  height: 100%;
  opacity: 1;

} */
</style>