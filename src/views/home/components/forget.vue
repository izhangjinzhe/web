<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="user">邮箱</label>
            <validation-provider v-slot="{ errors }" name="用户名" rules="required|email">
              <input id="user" v-model="form.username" class="form-control" placeholder="请输入邮箱" type="text"/>
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
            <button class="btn btn-primary" type="submit">提交</button>
          </div>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import uuid from 'uuid/v4'

export default {
  name: 'Forget',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      captchaImg: '',
      form: {
        username: '',
        code: ''
      }
    }
  },
  created() {
    if (!localStorage.getItem('uuid')) {
      localStorage.setItem('uuid', uuid())
    }
    this.getCaptcha()
  },
  methods: {
    goForget() {
      this.$router.push('/home/forget')
    },
    async getCaptcha() {
      const {data} = await this.$fetch.get('/getCaptcha', {
        uuid: localStorage.getItem('uuid')
      })
      this.captchaImg = data.data
    },
    async submit() {
      const {data} = await this.$fetch.post('/forget111', this.form)
      alert(`邮箱${data.data.accepted}已发送，请注意查收！`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
}
</style>
