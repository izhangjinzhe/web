<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-12 mb-4">
        <article-list :type="$route.params.type"></article-list>
      </div>
      <div class="col-lg-3 col-md-12">
        <user-overview class="mb-4"></user-overview>
        <links></links>
      </div>
    </div>
  </div>
</template>
<script>
import ArticleList from '@/views/home/components/ArticleList'
import UserOverview from '@/views/home/components/UserOverview'
import Links from '@/views/home/components/Links'
export default {
  components: { Links, UserOverview, ArticleList },
  data () {
    return {
      data: []
    }
  },
  created () {
  }
}
</script>
