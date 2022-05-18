<template>
  <div class="col-md-12 col-lg-6 col-xl-4">
    <div class="mb-2 gap-2 hstack">
      <form class="col-7" ref="sendMail" name="email">
          <div class="form-floating">
            <input autocomplete="off" type="email" class="form-control" v-model="username" id="username" placeholder="" required>
            <label for="username" class="form-label">邮箱</label>
          </div>
      </form>
      <button class="btn btn-primary col-4" @click="sendMail" :disabled="count > 0">{{this.count || '发送验证邮件'}}</button>
    </div>
    <form ref="forget" name="forget">
      <div>
        <div class="form-floating mb-2">
          <input autocomplete="off" type="text" class="form-control" minlength="6" maxlength="6" v-model="form.code" id="code" placeholder="" required>
          <label for="code" class="form-label">邮箱验证码</label>
        </div>
        <div class="form-floating mb-2">
          <input type="password" v-model="form.password" class="form-control" id="password" minlength="6" maxlength="18" pattern="^[a-zA-Z]\w{5,17}$" placeholder="" required>
          <label for="password">密码</label>
          <div class="form-text">字母开头，长度在6~18之间，只能包含字母、数字和下划线</div>
        </div>
        <div class="form-floating mb-2">
          <input type="password" v-model="i_password" class="form-control" id="_password" pattern="^[a-zA-Z]\w{5,17}$" minlength="6" maxlength="18" placeholder="" required>
          <label for="_password">确认密码</label>
          <div v-show="form.password && i_password && form.password !== i_password" class="text-danger fs-7 mt-1">两次输入密码不一致</div>
        </div>
      </div>
      <div>
      </div>
    </form>
        <button class="btn btn-primary btn-" @click="submit">提交</button>
  </div>
</template>

<script>
import md5 from 'js-md5'

export default {
  name: 'Forget',
  components: {
  },
  data () {
    return {
      required: false,
      count: 0,
      username: '123@123.com',
      // eslint-disable-next-line vue/no-reserved-keys
      i_password: '',
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
    submit () {
      console.log(this.$refs.sendMail)
      if (!this.$refs.sendMail.checkValidity()) {
        this.$refs.sendMail.reportValidity()
      } else if (!this.$refs.forget.checkValidity()) {
        this.$refs.forget.reportValidity()
      } else {
        this.updatePwd()
      }
    },
    async updatePwd () {
      const { data } = await this.$fetch.post('/public/update_pwd', {
        ...this.form,
        password: md5(this.form.password),
        username: this.username
      }, { toast: true })
      if (data.code === 200) {
        this.$router.push('/login/index')
      }
    },
    async sendMail () {
      if (!this.$refs.sendMail.checkValidity()) {
        this.$refs.sendMail.reportValidity()
        return
      }
      const { data } = await this.$fetch.get('/public/send_mail', { email: this.username }, { toast: true })
      if (data.code === 200) {
        this.countdown()
      }
    },
    countdown () {
      this.count = 60
      const timer = setInterval(() => {
        if (this.count < 1) {
          this.count = 0
          clearInterval(timer)
        } else {
          this.count -= 1
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
}
</style>
