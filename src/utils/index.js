import fetch from '@/utils/fetch'
import toast from '@/components/Toast/index'
import Vue from 'vue'

const fetchAxios = {}
const toastComponent = {}

fetchAxios.install = (Vue) => {
  Vue.prototype.$fetch = new fetch()
}

toastComponent.instance = () => {
  const instance = Vue.extend(toast)
  const component = new instance()
  component.$mount(document.createElement('div'))
  document.body.append(component.$el)
  return component
}
toastComponent.$alert = (type, msg, time) => {
  const component = toastComponent.instance()
  component.type = type
  component.msg = msg
  component.time = time
  component.show = true
}
toastComponent.install = (Vue) => {
  const component = toastComponent.instance()
  Vue.prototype.$alert = (type, msg, time) => {
    component.type = type
    component.msg = msg
    component.time = time
    component.show = true
  }
}

export {
  fetchAxios,
  toastComponent
}
