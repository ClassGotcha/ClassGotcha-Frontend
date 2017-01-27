import Vue from 'vue'
import Resource from 'vue-resource'

import { API_ROOT } from '../config.js'
import { getCookie } from '../utils/cookie'

Vue.use(Resource)

// Vue.http.interceptors.push((request, next) => {
//     // Pre process to the requests
//     request.headers = request.headers || {}
//     if (getCookie('token')) {
//         request.headers.Authorization = 'JWT ' + getCookie('token')
//     }
//     next()
// })

Vue.http.headers.common['X-CSRFToken'] = getCookie('csrftoken')

export default {
    // fatch data
    getClassroom(pk) {
        return Vue.http.get(API_ROOT + 'classroom/+' + pk + '/', { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    getNotes(pk) {
        return Vue.http.get(API_ROOT + 'classroom/+' + pk + '/notes/', { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    getTasks(pk) {
        return Vue.http.get(API_ROOT + 'classroom/+' + pk + '/tasks/', { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    getStudents(pk) {
        return Vue.http.get(API_ROOT + 'classroom/+' + pk + '/students/', { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    getMoments(pk) {
        return Vue.http.get(API_ROOT + 'classroom/+' + pk + '/moments/', { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    validate(pk) {
        return Vue.http.get(API_ROOT + 'classroom/+' + pk + '/validate/', { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    // search
    search(formData) {
        return Vue.http.post(API_ROOT + 'classroom/search/', formData, { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    // post changes
    addNotes(pk, formData) {
        return Vue.http.post(API_ROOT + 'classroom/' + pk + '/notes/', formData, { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    addTasks(pk, formData) {
        return Vue.http.post(API_ROOT + 'classroom/' + pk + '/tasks/', formData, { headers: { Authorization: 'JWT ' + getCookie('token') } })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    }
}
