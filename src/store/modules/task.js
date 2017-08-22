import taskApi from '../../api/task-api'
import * as types from '../mutation-types'

const actions = {
  updateTask ({commit, dispatch}, data) {
    return taskApi.updateTask(data.id, data)
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
        // dispatch('getTasks')
        return Promise.resolve()
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
  },
}

const mutations = {
  [types.UPDATE_TASK] (state, response) {},
  [types.DELETE_TASK] (state, response) {},
}

export default {
  actions,
  mutations
}
