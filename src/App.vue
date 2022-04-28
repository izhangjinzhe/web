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
  position: relative;
  z-index: 0;
  #header{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  #main {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 60px;
    flex: 1;
    z-index: 1;
  }
  #footer{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
}
</style>
