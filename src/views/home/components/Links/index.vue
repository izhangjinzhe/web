<template>
  <div class="card p-2" v-loading="loading">
    <div class="fw-bold mb-1">友情链接</div>
    <div class="d-flex flex-wrap">
      <a class="text-primary me-2 finger text-decoration-underline" v-for="(item, index) in list" :key="index" :href="`http://${item.href}`" target="_blank">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links',
  data () {
    return {
      loading: true,
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.loading = true
      const { data } = await this.$fetch.get('/public/links')
      this.list = data.data
      this.loading = false
    }
  }
}
</script>
