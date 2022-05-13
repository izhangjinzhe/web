<template>
  <form class="col-sm-12 col-md-4" @submit="submit">
    <div class="mb-2">
      <label for="username" class="form-label">邮箱</label>
      <input type="email" v-model="form.username" class="form-control" id="username" required>
      <div class="form-text">您的邮箱将作为您的唯一用户名</div>
    </div>
    <div class="mb-2">
      <label for="password" class="form-label">密码</label>
      <input type="password" v-model="form.password" class="form-control" id="password" minlength="8" maxlength="16" required>
    </div>
    <div class="mb-2">
      <label for="code" class="form-label">验证码</label>
      <input class="form-control" v-model="form.code" maxlength="6" minlength="6" id="code" required>
    </div>
    <div class="mb-2">
      <div class="captcha" @click="getCaptcha" v-html="captchaImg"></div>
    </div>
    <div>
      <button class="btn btn-primary me-2" type="submit">登录</button>
      <router-link tag="button" class="btn btn-link" type="submit" to="/login/forget">忘记密码</router-link>
    </div>
  </form>

</template>

<script>
import { v4 } from 'uuid'
import md5 from 'js-md5'
import { setStorage } from 'wanado/src/sources/setStorage'

export default {
  name: 'Login',
  data () {
    return {
      captchaImg: '',
      form: {
        username: '',
        password: '',
        code: ''
      }
    }
  },
  created () {
    if (!localStorage.getItem('uuid')) {
      localStorage.setItem('uuid', v4())
    }
    this.getCaptcha()
  },
  methods: {
    goForget () {
      this.$router.push({ name: 'ForgetModule' })
    },
    async getCaptcha () {
      const { data } = await this.$fetch.get('/public/getCaptcha', {
        uuid: localStorage.getItem('uuid')
      })
      console.log(data)
      this.captchaImg = data.data
    },
    async submit () {
      const { data } = await this.$fetch.post('/public/login', {
        ...this.form,
        password: md5(this.form.password),
        uuid: localStorage.getItem('uuid')
      }, {
        toast: true
      })
      setStorage('userInfo', data.data)
      await this.$router.push({ path: this.$route.query.refresh || '/home/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
  .captcha{
    margin: 10px 0 0;
  }
}
</style>
