<template>
  <div class="card p-2">
    <div>
      <div class="d-flex align-items-center mb-1">
        <span class="badge bg-primary rounded-pill me-2 fs-7 finger">{{ data.tag }}</span>
        <span class="fs-6 fw-bold finger">{{ data.title }}</span>
      </div>
      <div class="d-flex align-items-end" v-if="type === 'list'">
        <img  class="me-2 rounded-circle finger" width="20px" height="20px" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEar?ver=c556" alt="图片" />
        <span class="fw-bold fs-7 me-2 finger">{{ data.userInfo.username }}</span>
        <span class="me-2 fs-7 finger">{{ data.level }}</span>
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
  }
}
</script>

<style lang="scss" scoped>
</style>
