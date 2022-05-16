<template>
  <form class="col-sm-12 col-md-4" @submit="submit">
    <div class="form-floating mb-2">
      <input type="email" v-model="form.username" class="form-control" id="username" required placeholder="">
      <label for="username">邮箱</label>
      <div class="form-text">您的邮箱将作为您的唯一用户名</div>
    </div>
    <div class="form-floating mb-2">
      <input type="password" v-model="form.password" class="form-control" id="password" minlength="8" maxlength="16" placeholder="" pattern="^[a-zA-Z]\w{5,17}$" required>
      <label for="password">密码</label>
      <div class="form-text">字母开头，长度在6~18之间，只能包含字母、数字和下划线</div>
    </div>
    <div class="form-floating mb-2">
      <input type="password" v-model="i_password" class="form-control" id="_password" minlength="8" maxlength="16" placeholder="" pattern="^[a-zA-Z]\w{5,17}$" required>
      <label for="_password">确认密码</label>
      <div v-show="form.password && i_password && form.password !== i_password" class="text-danger fs-7 mt-1">两次输入密码不一致</div>
    </div>
    <div class="form-floating mb-2">
      <input class="form-control" v-model="form.code" maxlength="6" minlength="6" id="code" placeholder="" required>
      <label for="code">验证码</label>
    </div>
    <div class="mb-2">
      <div class="captcha" @click="getCaptcha" v-html="captchaImg"></div>
    </div>
    <div>
      <button class="btn btn-primary" type="submit">登录</button>
    </div>
  </form>
</template>

<script>
import { v4 } from 'uuid'
import md5 from 'js-md5'
import { getStorage } from 'wanado/src/sources/getStorage'
import { setStorage } from 'wanado/src/sources/setStorage'

export default {
  name: 'Register',
  components: {
  },
  data () {
    return {
      captchaImg: '',
      i_password: '',
      form: {
        username: '123@123.com',
        name: '',
        password: '',
        code: ''
      }
    }
  },
  created () {
    if (!getStorage('uuid')) {
      setStorage('uuid', v4())
    }
    this.getCaptcha()
  },
  methods: {
    async getCaptcha () {
      const { data } = await this.$fetch.get('/public/get_captcha', {
        uuid: getStorage('uuid')
      })
      this.captchaImg = data.data
    },
    async submit () {
      if (this.i_password !== this.form.password) return
      await this.$fetch.post('/public/register', {
        ...this.form,
        password: md5(this.form.password),
        uuid: getStorage('uuid')
      }, {
        toast: true
      })
      await this.$router.push({ name: 'LoginModule' })
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
