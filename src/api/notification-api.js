import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config.js'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

export default {
  getNotifications () {
    return Vue.http.get(API_ROOT + 'notification/fetch/', {headers: {Authorization: 'JWT ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  readNotification (pk) {
    return Vue.http.post(API_ROOT + 'notification/read/' + pk + '/', {}, {headers: {Authorization: 'JWT ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}
