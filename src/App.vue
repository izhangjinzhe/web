<template>
  <div id="app">
    <top-bar id="header"></top-bar>
    <router-view id="main"></router-view>
    <z-footer id="footer"></z-footer>
  </div>
</template>

<script>

import TopBar from '@/components/TopBar'
import ZFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    ZFooter,
    TopBar
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;

  #main {
    flex: 1;
  }
}
</style>
