<template>
  <div class="card p-2">
    <div v-loading="loading" style="min-height: 200px" class="position-relative">
      <article-item class="mb-2" v-for="item in list" :key="item.id" :data="item"></article-item>
    </div>
    <div class="mt-2 text-center">
      <button type="button" class="btn btn-outline-primary btn-sm me-2" @click="prev" :disabled="page === 1">上一页</button>
      <span class="me-2 fs-7">当前页: {{page}}</span>
      <button type="button" class="btn btn-outline-primary btn-sm" @click="next">下一页</button>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/views/home/components/ArticleList/Item'
export default {
  name: 'ArticleList',
  components: { ArticleItem },
  data () {
    return {
      loading: true,
      page: 1,
      list: []
    }
  },
  props: {
    type: {
      type: String,
      default: 'index'
    }
  },
  created () {
    this.getList(this.type)
  },
  watch: {
    type (val) {
      this.getList(val)
    }
  },
  methods: {
    prev () {
      this.page--
      this.getList(this.type)
    },
    next () {
      this.page++
      this.getList(this.type)
    },
    async getList (type) {
      this.loading = true
      const { data } = await this.$fetch.get('/public/article_list', { type, page: this.page })
      this.list = data.data.list
      this.loading = false
    }
  }
}
</script>
