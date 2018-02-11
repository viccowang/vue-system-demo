import axios from 'axios'
import { Message } from 'element-ui'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// demo api
const basePerfix = 'https://easy-mock.com/mock/5a7bc4b13ccdb014fb81b49e/resume'

// request interceptors
axios.interceptors.request.use(config => {
  // dosth before request

  return config
}, error => Promise.reject(error))

// response interceptors
axios.interceptors.response.use(response => {
  // do sth befor response

  return response
}, error => Promise.reject(error.response))

// check response code
function checkResponseStatus (response) {
  if (response.status === 200 || response.status === 304) {
    return response.data
  }
  return response
}

function checkResponseCode (response) {
  const code = response.data.code
  if (code) {
    if (code === 200 || code === '200') {
      return response.data
    }
  } else {
    return Message({
      message: response.msg,
      type: 'error',
      duration: 2000
    })
  }
}

export default {
  get (url, params) {
    if (!url) return
    return axios.get(basePerfix + url, {
      params: params
    }).then(checkResponseStatus).then(checkResponseCode)
  },

  post (url, data) {
    if (!url) return
    return axios.post(basePerfix + url, {
      params: data
    }).then(checkResponseStatus).then(checkResponseCode)
  }

}
