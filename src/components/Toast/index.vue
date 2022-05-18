<template>
  <transition name="alert">
    <div v-if="curShow" id="toast" :class="{[`alert-${type}`]: true}" class="alert py-2 px-3">
      <div>{{ msg }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    msg: {
      type: String,
      default: () => {
        return ''
      }
    },
    type: {
      type: String,
      default: () => {
        return 'success'
      }
    },
    show: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    time: {
      type: Number,
      default: () => {
        return 2000
      }
    }
  },
  data () {
    return {
      curShow: false
    }
  },
  watch: {
    show (val) {
      console.log(val)
      if (val) this.curShow = val
      setTimeout(() => {
        this.curShow = false
      }, this.time || 3000)
    }
  },
  methods: {
    close () {
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-enter-to, .alert-leave-to {
  opacity: 1;
  transform: translateY(50%);
}

.alert-enter-active, .alert-leave-active {
  transition: .4s;
}

.alert-enter, .alert-leave-to {
  opacity: 0;
  transform: translateY(48%);
}

#toast {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(-48%);
  //min-width: 200px;
  //min-height: 50px;
  //padding: 10px;
  //border-radius: 6px;
  //box-shadow: 2px 2px 5px 2px #cccccc;
  //background: #ffffff;
}
</style>
