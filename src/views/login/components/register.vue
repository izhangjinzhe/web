<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <validation-provider v-slot="{ errors }" name="用户名" rules="required|min:6">
              <label for="username">用户名</label>
              <input id="username" v-model="form.username" class="form-control" placeholder="请输入邮箱" type="text"/>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <validation-provider v-slot="{ errors }" name="用户名" rules="required|email">
              <label for="email">邮箱</label>
              <input id="email" v-model="form.email" class="form-control" placeholder="请输入邮箱" type="text"/>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
<!--      <span id="helpBlock" class="help-block">将会成为您唯一的用户名</span>-->
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <validation-provider v-slot="{ errors }" name="昵称" rules="required|min:4">
              <label for="name">昵称</label>
              <input id="name" v-model="form.name" class="form-control" placeholder="请输入昵称"
                     type="text">
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="password">密码</label>
            <validation-provider v-slot="{ errors }" name="密码" rules="required|min:6|max:12">
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
            <label for="conPassword">确认密码</label>
            <validation-provider v-slot="{ errors }" :rules="`required|min:6|max:12|copy:${form.password}`" name="确认密码">
              <input id="conPassword" v-model="_password" class="form-control" placeholder="请输入密码"
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
            <button class="btn btn-primary" type="submit">立即注册</button>
            <!--              <button class="btn btn-link" type="button">忘记密码？</button>-->
          </div>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { v4 } from 'uuid'
import md5 from 'js-md5'

export default {
  name: 'Register',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      captchaImg: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _password: '',
      form: {
        username: '',
        email: '',
        name: '',
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
    async getCaptcha () {
      const { data } = await this.$fetch.get('/getCaptcha', {
        uuid: localStorage.getItem('uuid')
      })
      this.captchaImg = data.data
    },
    async submit () {
      await this.$fetch.post('/register', {
        ...this.form,
        password: md5(this.form.password),
        uuid: localStorage.getItem('uuid')
      }, {
        toast: true
      })
      await this.$router.push('/home/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
}
</style>
