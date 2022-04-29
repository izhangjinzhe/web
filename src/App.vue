<template>
  <div id="app">
    <top-bar class="mb-2 position-sticky top-0" style="z-index: 1"></top-bar>
    <router-view class="mb-2"></router-view>
    <z-footer></z-footer>
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

</style>
