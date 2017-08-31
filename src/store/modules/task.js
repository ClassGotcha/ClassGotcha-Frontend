import taskApi from '../../api/task-api'
import * as types from '../mutation-types'

const actions = {
  updateTask ({commit, dispatch}, data) {
    return taskApi.updateTask(data.pk, data)
      .then((response) => {
        commit(types.UPDATE_TASK, response)
        dispatch('getClassroomMoments')
        dispatch('getClassroomTasks')
        dispatch('getTasks')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  deleteTask ({commit, dispatch}, pk) {
    return taskApi.deleteTask(pk)
      .then((response) => {
        commit(types.DELETE_TASK, response)
        dispatch('getClassroomTasks')
        dispatch('getTasks')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  removeTask ({commit, dispatch}, pk) {
    return taskApi.removeTask(pk)
      .then((response) => {
        commit(types.REMOVE_TASK, response)
        dispatch('getClassroomTasks')
        dispatch('getTasks')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
  addTask ({commit, dispatch}, id) {
    return taskApi.addTask(id)
      .then((response) => {
        commit(types.UPDATE_TASK, response)
        dispatch('getTasks')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
}

const mutations = {
  [types.ADD_TASK] (state, response) {},

  [types.UPDATE_TASK] (state, response) {},
  [types.DELETE_TASK] (state, response) {},
  [types.REMOVE_TASK] (state, response) {},
}

export default {
  actions,
  mutations
}
