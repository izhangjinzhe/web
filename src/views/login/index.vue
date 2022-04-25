<template>
  <div class="page">
    <div class="container main">
      <ul class="nav nav-tabs">
        <li :class="{active: $route.path.indexOf('login/index') > -1 }" role="presentation">
          <router-link to="/login/index">登录</router-link>
        </li>
        <li v-if=" $route.path.indexOf('login/forget') > -1" :class="{active: $route.path.indexOf('login/forget') > -1 }"
            role="presentation">
          <router-link to="/login/forget">找回密码</router-link>
        </li>
        <li v-else :class="{active: $route.path.indexOf('login/register') > -1 }" role="presentation">
          <router-link to="/login/register">注册</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.main {
  padding: 10px;
  background: #ffffff;

  .nav {
    margin: 0 0 10px;
  }
}
</style>
