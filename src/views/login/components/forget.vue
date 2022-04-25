<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(updatePwd)">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <button class="btn btn-primary" v-if="show" type="submit" @click="back">返回</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="user">邮箱</label>
            <validation-provider v-slot="{ errors }" name="邮箱" rules="required|email">
              <input :disabled="show" id="user" v-model="email" class="form-control" placeholder="请输入邮箱" type="text"/>
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div v-if="show" class="row" >
        <div class="col-sm-4">
          <div class="form-group">
            <label for="code">验证码</label>
            <validation-provider v-slot="{ errors }" name="验证码" rules="required|length:6">
              <input id="code" v-model="form.code" class="form-control" maxlength="6" placeholder="请输入验证码"
                     type="text">
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
      </div>
      <div v-if="show" class="row">
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
      <div v-if="show" class="row">
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
            <button class="btn btn-primary" v-if="!show" type="button" @click="sendMail">发送验证邮件</button>
            <button class="btn btn-primary" v-else type="submit">提交</button>
          </div>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import md5 from 'js-md5'

export default {
  name: 'Forget',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      show: false,
      email: '',
      // eslint-disable-next-line vue/no-reserved-keys
      _password: '',
      form: {
        code: '',
        password: ''
      }
    }
  },
  methods: {
    back () {
      this.show = false
      this.$forceUpdate()
    },
    goForget () {
      this.$router.push('/home/forget')
    },
    async updatePwd () {
      const { data } = await this.$fetch.post('/updatePwd', {
        ...this.form,
        password: md5(this.form.password),
        email: this.email
      }, { toast: true })
      if (data.code === 200) {
        this.$router.push('/home/login')
      }
    },
    async sendMail () {
      const { data } = await this.$fetch.get('/sendMail', { email: this.email }, { toast: true })
      if (data.code === 200) {
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
}
</style>
