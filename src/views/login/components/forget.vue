<template>
  <form class="col-sm-12 col-md-4" name="forget" @submit="submit">
    <button class="btn btn-sm btn-outline-primary" v-if="show" type="submit" @click="back">返回</button>
    <div class="mb-2" v-if="!show">
      <label for="username" class="form-label">邮箱</label>
      <input type="email" class="form-control" v-model="username" id="username" required>
    </div>
    <div v-else>
      <div class="mb-2">
        <label for="code" class="form-label">邮箱验证码</label>
        <input class="form-control" minlength="6" maxlength="6" v-model="form.code" id="code" required>
      </div>
      <div class="mb-2">
        <label for="password" class="form-label">密码</label>
        <input type="password" v-model="form.password" class="form-control" id="password" minlength="8" maxlength="16" pattern="^[a-zA-Z]\w{5,17}$" required>
        <div class="form-text">字母开头，长度在6~18之间，只能包含字母、数字和下划线</div>
      </div>
      <div class="mb-2">
        <label for="_password" class="form-label">确认密码</label>
        <input type="password" v-model="i_password" class="form-control" id="_password" pattern="^[a-zA-Z]\w{5,17}$" minlength="8" maxlength="16" required>
        <div v-show="form.password && i_password && form.password !== i_password" class="text-danger fs-7 mt-1">两次输入密码不一致</div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary" v-if="!show" type="submit">发送验证邮件</button>
      <button class="btn btn-primary" v-else type="submit">提交</button>
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
      show: false,
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
      const { data } = await this.$fetch.get('/public/send_mail', { email: this.username }, { toast: true })
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
