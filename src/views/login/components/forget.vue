<template>
  <form class="col-md-12 col-lg-5 col-md-4" name="forget" @submit="submit">
    <div class="hstack gap-3 mb-2">
      <div class="form-floating col-7">
        <input type="email" class="form-control" v-model="username" id="username" placeholder="" required>
        <label for="username" class="form-label">邮箱</label>
      </div>
      <button class="btn btn-primary col-4" type="button" :disabled="count > 0" @click="sendMail">发送验证邮件 {{this.count || ''}}</button>
    </div>
    <div>
      <div class="form-floating mb-2">
        <input class="form-control" minlength="6" maxlength="6" v-model="form.code" id="code" placeholder="" required>
        <label for="code" class="form-label">邮箱验证码</label>
      </div>
      <div class="form-floating mb-2">
        <input type="password" v-model="form.password" class="form-control" id="password" minlength="8" maxlength="16" pattern="^[a-zA-Z]\w{5,17}$" placeholder="" required>
        <label for="password">密码</label>
        <div class="form-text">字母开头，长度在6~18之间，只能包含字母、数字和下划线</div>
      </div>
      <div class="form-floating mb-2">
        <input type="password" v-model="i_password" class="form-control" id="_password" pattern="^[a-zA-Z]\w{5,17}$" minlength="8" maxlength="16" placeholder="" required>
        <label for="_password">确认密码</label>
        <div v-show="form.password && i_password && form.password !== i_password" class="text-danger fs-7 mt-1">两次输入密码不一致</div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary btn-" type="submit">提交</button>
    </div>
  </form>
<!--  <validation-observer v-slot="{ handleSubmit }">-->
<!--    <form @submit.prevent="handleSubmit(updatePwd)">-->
<!--      <div class="row">-->
<!--        <div class="col-sm-4">-->
<!--          <div class="form-group">-->
<!--            <button class="btn btn-primary" v-if="show" type="submit" @click="back">返回</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col-sm-4">-->
<!--          <div class="form-group">-->
<!--            <label for="user">邮箱</label>-->
<!--            <validation-provider v-slot="{ errors }" name="邮箱" rules="required|email">-->
<!--              <input :disabled="show" id="user" v-model="username" class="form-control" placeholder="请输入邮箱" type="text"/>-->
<!--              <span class="text-danger">{{ errors[0] }}</span>-->
<!--            </validation-provider>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="show" class="row" >-->
<!--        <div class="col-sm-4">-->
<!--          <div class="form-group">-->
<!--            <label for="code">验证码</label>-->
<!--            <validation-provider v-slot="{ errors }" name="验证码" rules="required|length:6">-->
<!--              <input id="code" v-model="form.code" class="form-control" maxlength="6" placeholder="请输入验证码"-->
<!--                     type="text">-->
<!--              <span class="text-danger">{{ errors[0] }}</span>-->
<!--            </validation-provider>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="show" class="row">-->
<!--        <div class="col-sm-4">-->
<!--          <div class="form-group">-->
<!--            <label for="password">密码</label>-->
<!--            <validation-provider v-slot="{ errors }" name="密码" rules="required|min:6|max:12">-->
<!--              <input id="password" v-model="form.password" class="form-control" placeholder="请输入密码"-->
<!--                     type="password">-->
<!--              <span class="text-danger">{{ errors[0] }}</span>-->
<!--            </validation-provider>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="show" class="row">-->
<!--        <div class="col-sm-4">-->
<!--          <div class="form-group">-->
<!--            <label for="conPassword">确认密码</label>-->
<!--            <validation-provider v-slot="{ errors }" :rules="`required|min:6|max:12|copy:${form.password}`" name="确认密码">-->
<!--              <input id="conPassword" v-model="_password" class="form-control" placeholder="请输入密码"-->
<!--                     type="password">-->
<!--              <span class="text-danger">{{ errors[0] }}</span>-->
<!--            </validation-provider>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col-sm-4">-->
<!--          <div class="form-group">-->
<!--            <button class="btn btn-primary" v-if="!show" type="button" @click="sendMail">发送验证邮件</button>-->
<!--            <button class="btn btn-primary" v-else type="submit">提交</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </form>-->
<!--  </validation-observer>-->
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import md5 from 'js-md5'

export default {
  name: 'Forget',
  components: {
  },
  data () {
    return {
      count: 0,
      username: '',
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
      if (this.show) {
        this.updatePwd()
      } else {
        this.sendMail()
      }
    },
    async updatePwd () {
      const { data } = await this.$fetch.post('/public/update_pwd', {
        ...this.form,
        password: md5(this.form.password),
        username: this.username
      }, { toast: true })
      if (data.code === 200) {
        this.$router.push('/home/login')
      }
    },
    async sendMail () {
      if (!this.username) return this.$alert('danger', '请输入邮箱')
      const { data } = await this.$fetch.get('/public/send_mail', { email: this.username }, { toast: true })
      if (data.code === 200) {
        this.countdown()
      }
    },
    countdown () {
      this.count = 60
      const timer = setInterval(() => {
        if (this.count === 1) {
          clearInterval(timer)
        }
        this.count -= 1
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
