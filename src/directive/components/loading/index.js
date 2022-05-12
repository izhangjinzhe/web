import Vue from 'vue'
import loading from './loading'

const instance = Vue.extend(loading)
const component = new instance()
component.$mount(document.createElement('div'))

export default {
  bind: function (el, binding, vnode) {
    el.append(component.$el)
    component.show(binding.value)
  },
  update: function (el, binding, vnode) {
    component.show(binding.value)
  }
}
