<template>
  <div class="card p-2">
    <div>
      <div class="d-flex align-items-center mb-1">
        <span class="badge rounded-pill me-2 fs-7 finger tag" :class="[`${data.tag === 'index' ? 'bg-primary' : data.tag === 'share'  ? 'bg-success' : data.tag === 'ask'  ? 'bg-info' : data.tag === 'advice'  ? 'bg-danger' : '' }`]">{{ data.tag | tagFilter}}</span>
        <span class="fs-6 fw-bold finger">{{ data.title }}</span>
      </div>
      <div class="d-flex align-items-end" v-if="type === 'list'">
        <img  class="me-2 rounded-circle finger" width="20px" height="20px" :src="data.pic" alt="图片" />
        <span class="fw-bold fs-7 me-2 finger">{{ data.userInfo.username }}</span>
        <span class="me-2 fs-7 finger">Lv <span class="fw-bold">{{ data.level }}</span></span>
        <span class="ms-auto finger">
          <span class="fs-7 fw-bold me-1">{{ data.answer }}</span>
          <i class="bi bi-chat-left-dots fs-7"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    data: {
      required: true,
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: 'list'
    }
  },
  filters: {
    tagFilter (val) {
      console.log(val)
      switch (val) {
        case 'index':
          return '综合'
        case 'ask':
          return '提问'
        case 'share':
          return '分享'
        case 'advice':
          return '建议'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//@import "../../../../../node_modules/bootstrap/scss/variables";
.tag{
  &.index{
    background: var(--bs-blue);
  }
}
</style>
