import axios from 'axios'
import { toastComponent } from '@/utils/index'

class fetch {
  constructor (url) {
    this.baseUrl = url
  }

  // 获取配置
  getBaseConfig () {
    return {
      baseURL: '/',
      timeout: 10000,
      // withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
  }

  // 设定拦截器
  interceptors (instance) {
    instance.interceptors.request.use((conf) => {
      return conf
    }, (err) => {
      errorHandler(err)
    })
    instance.interceptors.response.use((res) => {
      if (res.status === 200 && res.data.code === 200) {
        if (res.config.toast) {
          toastComponent.$alert('success', res.data.msg)
        }
        return Promise.resolve(res)
      } else {
        errorHandler(res)
        return Promise.reject(res)
      }
    }, (err) => {
      errorHandler(err)
    })
  }

  // 创建实例
  request (config) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getBaseConfig(), config)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get (url, params, config) {
    return this.request({
      ...config,
      method: 'get',
      url,
      params
    })
  }

  post (url, data, config) {
    return this.request({
      ...config,
      method: 'post',
      url,
      data
    })
  }
}

const errorHandler = (err) => {
  toastComponent.$alert('danger', err.data.msg)
}

export default fetch
