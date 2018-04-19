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
              <div class="user" @mouseover="isShowHandle()"  @mouseleave="isHidden()">
                  <div class="drop-down">
                      <nuxt-link to="/u/123" class="avatar">
                          <img src="~assets/img/default-header.jpg" alt="">
                      </nuxt-link>
                  </div>
                  <ul class="drop-menu" v-show="isShow">
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
      isShow: false
    };
  },
  methods: {
    isShowHandle() {
      this.isShow = true;
    },
    isHidden() {
      this.isShow = false;
    }
  }
};
</script>
<style scoped>
nav {
  width: 100%;
  height: 56px;
}
.navbar {
  margin-bottom: 20px;
  border-width: 0 0 1px;
  border-color: #f0f0f0;
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
}
</style>




