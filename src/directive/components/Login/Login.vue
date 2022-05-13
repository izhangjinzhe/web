<template>
  <transition name="fade">
    <div class="position-absolute top-0 start-0 end-0 bottom-0" style="z-index: 1;background: rgba(255,255,255,.8)">
      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
        <button class="btn btn-primary btn-sm" @click="login">登录</button>
      </div>
    </div>
  </transition>
</template>

<script>
import router from '@/router'

export default {
  name: 'VLogin',
  methods: {
    login () {
      console.log(location)
      router.replace({
        name: 'LoginPage',
        query: {
          refresh: location.toString().split('#')[1]
        }
      })
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
