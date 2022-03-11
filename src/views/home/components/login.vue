<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="user">用户名</label>
            <validation-provider v-slot="{ errors }" name="用户名" rules="required|min:6">
              <input id="user" v-model="form.username" class="form-control" placeholder="请输入用户名" type="text"/>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
<!--      <span id="helpBlock" class="help-block">使用手机或者邮箱中的任意一个均可（若采用手机，请确保你的账号已绑定过该手机）</span>-->
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <validation-provider v-slot="{ errors }" name="密码" rules="required|min:6|max:12">
              <label for="password">密码</label>
              <input id="password" v-model="form.password" class="form-control" placeholder="请输入密码"
                     type="password">
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="code">验证码</label>
            <validation-provider v-slot="{ errors }" name="验证码" rules="required|length:6">
              <input id="code" v-model="form.code" class="form-control" maxlength="6" placeholder="请输入验证码"
                     type="text">
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
            <div class="captcha" @click="getCaptcha" v-html="captchaImg">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <button class="btn btn-primary" type="submit">立即登录</button>
            <button class="btn btn-link" type="button" @click="goForget">忘记密码？</button>
          </div>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import uuid from 'uuid/v4'
import md5 from 'js-md5'

export default {
  name: 'Login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
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
      localStorage.setItem('uuid', uuid())
    }
    this.getCaptcha()
  },
  methods: {
    goForget () {
      this.$router.push('/home/forget')
    },
    async getCaptcha () {
      const { data } = await this.$fetch.get('/getCaptcha', {
        uuid: localStorage.getItem('uuid')
      })
      this.captchaImg = data.data
    },
    async submit () {
      await this.$fetch.post('/login', {
        ...this.form,
        password: md5(this.form.password),
        uuid: localStorage.getItem('uuid')
      }, {
        toast: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
}
</style>
