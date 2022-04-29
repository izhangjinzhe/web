<template>
  <div class="card p-2">
    <article-item class="mb-2" v-for="item in list" :key="item.id" :data="item"></article-item>
    <div class="mt-2 text-center">
      <button type="button" class="btn btn-outline-primary btn-sm me-2">上一页</button>
      <button type="button" class="btn btn-outline-primary btn-sm">下一页</button>
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
    async getList (type) {
      const { data } = await this.$fetch.get('/public/article_list', { type })
      this.list = data.data.list
    }
  }
}
</script>
