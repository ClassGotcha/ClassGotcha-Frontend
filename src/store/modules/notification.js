import taskApi from '../../api/notification-api'
import * as types from '../mutation-types'

const state = {
  notifications: [],
}

const getters = {
  notifications: state => {
    return state.notifications
  },

}

const actions = {
  getNotifications ({commit, dispatch}) {
    return taskApi.getNotifications()
      .then((response) => {
        commit(types.LOAD_NOTIFICATIONS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  readNotification ({commit, dispatch}, pk) {
    return taskApi.readNotification(pk)
      .then((response) => {
        commit(types.READ_NOTIFICATION, response)
        dispatch('getNotifications')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },

}

const mutations = {
  [types.LOAD_NOTIFICATIONS] (state, response) {
    state.notifications = response
  },
  [types.READ_NOTIFICATION] (state, response) {},
}

export default {
  state,
  getters,
  actions,
  mutations
}
