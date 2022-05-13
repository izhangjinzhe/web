import Vue from 'vue'
import loading from './Loading'

const obj = {}
let component = ''
const instance = Vue.extend(loading)

export default {
  bind (el, binding, vnode) {
    el.style.position = 'relative'
    component = new instance()
    const key = binding.expression
    obj[key] = obj[key] ? [...obj[key], component] : [component]
    component.$mount(document.createElement('div'))
    el.append(component.$el)
    component.show(binding.value)
  },
  update (el, binding, vnode) {
    const key = binding.expression
    obj[key].forEach((n) => {
      n.show(binding.value)
    })
  }
}
