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
  postProfessorComments ({commit}, pk) {

  }
}

// mutations
const mutations = {
  [types.LOAD_PROFESSOR] (state, response) {
    state.professor = response
  },
  [types.LOAD_PROFESSOR_COMMENTS] (state, response) {
    state.comments = response
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
