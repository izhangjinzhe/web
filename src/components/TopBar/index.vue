<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2 position-sticky top-0">
  <div class="container">
    <router-link tag="span" class=" fs-6 btn btn-sm" to="/home/index">首页</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <div class="ms-auto d-flex align-items-center">
        <input class="form-control me-2" type="search" placeholder="搜索">
        <div class="dropdown" v-if="user">
          <button class="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-person-circle me-1"></i>
          </button>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">个人中心</a></li>
            <li><a class="dropdown-item text-danger" @click="quit">退出</a></li>
          </ul>
        </div>
        <button v-else-if="!$route.path.includes('login')" class="btn btn-link btn-sm w-50" @click="login">登录</button>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { setStorage } from 'wanado/src/sources/setStorage'
import { getStorage } from 'wanado/src/sources/getStorage'

export default {
  name: 'TopBar',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    login () {
      this.$router.replace({
        name: 'LoginModule',
        query: {
          refresh: this.$route.path
        }
      })
    },
    quit () {
      setStorage('userInfo', null)
      this.$router.replace({ name: 'LoginModule' })
      this.$alert('success', '退出成功')
    }
  },
  watch: {
    $route: function () {
      this.user = getStorage('userInfo')
    }
  }
}
</script>
