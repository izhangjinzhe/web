<template>
  <div class="card p-2">
    <div>
      <div class="d-flex align-items-center mb-1">
        <span class="badge bg-primary rounded-pill me-2 fs-7">{{ data.type }}</span>
        <span class="fs-6 fw-bold">{{ data.title }}</span>
      </div>
      <div class="d-flex align-items-end">
        <img  class="me-2 rounded-circle" width="20px" height="20px" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEar?ver=c556" alt="图片" />
        <span class="fw-bold fs-7 me-2">{{ data.user.name }}</span>
        <span class="me-2 fs-7">{{ data.user.level }}</span>
        <span class="ms-auto">
          <span class="fs-7 fw-bold me-1">{{ data.commit }}</span>
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
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
