<template>
  <div>
    <nav class="nav nav-pills mb-2">
      <router-link to="/center/setting/info" class="nav-link py-1 px-2 finger" tag="a">基本资料</router-link>
      <router-link to="/center/setting/pic" class="nav-link py-1 px-2 finger" tag="a">头像</router-link>
      <router-link to="/center/setting/pwd" class="nav-link py-1 px-2 finger" tag="a">密码</router-link>
      <router-link to="/center/setting/bind" class="nav-link py-1 px-2 finger" tag="a">账号绑定</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'userCenter'
}
</script>

<style></style>
