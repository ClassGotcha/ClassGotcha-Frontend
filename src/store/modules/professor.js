import professorApi from '../../api/professor-api'
import * as types from '../mutation-types'

const state = {
  professor: {},
  comments: []
}

const getters = {
  professor_detail: state => {
    return state.professor
  },
  professor_comments: state => {
    return state.comments
  },
}

const actions = {
  getProfessor ({commit}, pk) {
    return professorApi.getProfessor(pk)
      .then((response) => {
        commit(types.LOAD_PROFESSOR, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        commit(types.LOG_ERROR, error)
        return Promise.reject()
      })
  },

  updateProfessor ({commit, dispatch}, formData) {
    return professorApi.updateProfessor(formData)
      .then((response) => {
        commit(types.UPDATE_PROFESSOR, response)
        dispatch('getProfessor', formData.id)
        return Promise.resolve(response)
      })
      .catch((error) => {
        commit(types.LOG_ERROR, error)
        return Promise.reject()
      })
  },
  getProfessorComments ({commit}, pk) {
    return professorApi.getProfessorComments(pk)
      .then((response) => {
        commit(types.LOAD_PROFESSOR_COMMENTS, response)
        return Promise.resolve(response)
      })
      .catch((error) => {
        commit(types.LOG_ERROR, error)
        return Promise.reject()
      })
  },
  postProfessorComment ({commit, dispatch}, formData) {
    return professorApi.postProfessorComment(formData)
      .then((response) => {
        commit(types.POST_PROFESSOR_COMMENTS, response)
        dispatch('getProfessorComments', formData.id)
        return Promise.resolve(response)
      })
      .catch((error) => {
        commit(types.LOG_ERROR, error)
        return Promise.reject()
      })
  }
}

// mutations
const mutations = {
  [types.LOAD_PROFESSOR] (state, response) {
    state.professor = response
  },
  [types.LOAD_PROFESSOR_COMMENTS] (state, response) {
    state.comments = response
  },
  [types.POST_PROFESSOR_COMMENTS] (state, response) {},
  [types.UPDATE_PROFESSOR] (state, response) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
