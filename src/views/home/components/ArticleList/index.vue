<template>
  <div class="card">
    <article-item></article-item>
    <nav aria-label="...">
      <ul class="pager">
        <li class="previous"><a href="#"><span aria-hidden="true">&larr;</span> 上一页</a></li>
        <li class="next"><a href="#">下一页 <span aria-hidden="true">&rarr;</span></a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ArticleItem from '@/views/home/components/ArticleList/Item'
export default {
  name: 'ArticleList',
  components: { ArticleItem }
}
</script>
