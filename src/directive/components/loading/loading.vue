<template>
  <transition name="fade">
    <div v-show="s" class="position-absolute top-0 start-0 end-0 bottom-0" style="z-index: 1;background: rgba(255,255,255,.8)">
      <div class="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center">
        <div class="m-auto spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Vloading',
  data () {
    return {
      s: false,
      display: 'flex'
    }
  },
  methods: {
    show (value) {
      this.s = value
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
