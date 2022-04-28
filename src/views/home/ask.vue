<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-xs-12 mt10">
        <article-list :data="data"></article-list>
      </div>
      <div class="col-sm-4 col-xs-12 mt10">
        <user-overview class="mb20"></user-overview>
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
  }
}
</script>
