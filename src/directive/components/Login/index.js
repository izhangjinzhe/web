import Vue from 'vue'
import Login from './Login'
import { getStorage } from 'wanado/src/sources/getStorage'

const obj = {}
let component = ''
const instance = Vue.extend(Login)

export default {
  bind (el, binding, vnode) {
    const info = getStorage('userInfo')
    if (!info) {
      el.style.position = 'relative'
      component = new instance()
      const key = binding.expression
      obj[key] = obj[key] ? [...obj[key], component] : [component]
      component.$mount(document.createElement('div'))
      el.append(component.$el)
    }
  }
}
