import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

export default {
  getProfessor (pk) {
    return Vue.http.get(API_ROOT + 'account/professor/' + pk + '/', {headers: {Authorization: 'JWT ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getProfessorComments (pk) {
    return Vue.http.get(API_ROOT + 'account/professor/' + pk + '/comment/', {headers: {Authorization: 'JWT ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  // updateProfessor
  updateProfessor (formData) {
    return Vue.http.post(API_ROOT + 'account/professor/' + formData.id + '/', formData, {headers: {Authorization: 'JWT ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  postProfessorComment (formData) {
    return Vue.http.post(API_ROOT + 'account/professor/' + formData.id + '/comment/', formData, {headers: {Authorization: 'JWT ' + getCookie('token')}})
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

}
