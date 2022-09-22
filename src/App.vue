<template>
  <div id="app" class="h-100">
    <top-bar style="z-index: 2"></top-bar>
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
