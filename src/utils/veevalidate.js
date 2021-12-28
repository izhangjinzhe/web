import {extend, localize} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN.json'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

extend('copy', {
  params: ['a'],
  message: '密码输入不一致',
  validate(value, {
    a
  }) {
    console.log(a)
    return value === a
  }
})

localize('zh', zh)
