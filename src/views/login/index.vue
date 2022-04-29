<template>
  <div class="container ">
    <div class="card p-2">
      <ul class="nav nav-pills mb-2">
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/login/index">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="a" class="nav-link" to="/login/register">注册</router-link>
        </li>
      </ul>
      <div class="dropdown-divider"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
