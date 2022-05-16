import Vue from 'vue'
import loading from './Loading'

const obj = {}
let component = ''
const instance = Vue.extend(loading)

export default {
  inserted (el, binding, vnode) {
    const key = vnode.context._uid
    el.style.position = 'relative'
    component = new instance()
    obj[key] = component
    component.$mount(document.createElement('div'))
    el.append(component.$el)
    component.show(binding.value)
  },
  update (el, binding, vnode) {
    const key = vnode.context._uid
    obj[key].show(binding.value)
  }
}
