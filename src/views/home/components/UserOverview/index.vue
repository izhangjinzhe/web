<template>
  <div class="card text-center p-2 overflow-hidden" v-login>
    <img width="70px" height="70px" class="rounded mx-auto d-block" :src="userInfo.pic" alt="图片" />
    <div class="fs-5 my-2">{{ userInfo.nickname }}</div>
    <div class="fs-7 my-1 text-info">{{ userInfo.gender }}</div>
    <div class="fs-7 my-1 text-info">{{ userInfo.location }}</div>
    <div class="mw-25 fs-6">{{ userInfo.remark }}</div>
  </div>
</template>
<script>
import { getStorage } from 'wanado/src/sources/getStorage'

export default {
  name: 'UserOverview',
  data () {
    return {
      userInfo: getStorage('userInfo')
    }
  },
  created () {
    console.log(getStorage('userInfo'))
  }
}
</script>
