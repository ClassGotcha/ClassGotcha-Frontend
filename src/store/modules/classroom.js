import classApi from '../../api/classroom'
// import router from '../../router'
// import * as cookie from '../../utils/cookie'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
    search_results: [],
    classroom: {},
    is_in_class: false,
    notes: [],
    students: [],
    error_msg: ''
}

// getters
const getters = {
    classSearchResults: (state) => {
        return state.search_results
    },
    currentClassroom: (state) => {
        return state.classroom
    },
    userInClassroom: (state) => {
        return state.is_in_class
    }
}

// actions
const actions = {
    classroomSearch({ commit, dispatch }, formData) {
        classApi.search(formData)
            .then((response) => {
                commit(types.SEARCH_CLASSROOMS, response)
            })
            .catch((error) => {
                commit(types.LOG_ERROR, error)
            })
    },
    getClassroom({ commit, dispatch }, pk) {
        classApi.getClassroom(pk)
            .then((response) => {
                commit(types.GET_CLASSROOM, response)
            })
            .catch((error) => {
                commit(types.LOG_ERROR, error)
            })
    },
    validateClassroom({ commit, dispatch }, pk) {
        classApi.validate(pk)
            .then((response) => {
                commit(types.USER_IN_CLASSROOM, response)
            })
            .catch((error) => {
                commit(types.USER_NOT_IN_CLASSROOM, error)
            })
    },
}

// mutations
const mutations = {
    [types.SEARCH_CLASSROOMS](state, response) {
        state.search_results = response
    },
    [types.GET_CLASSROOM](state, response) {
        state.classroom = response
    },
    [types.USER_IN_CLASSROOM](state, response) {
        state.is_in_class = true
    },
    [types.USER_NOT_IN_CLASSROOM](state, response) {
        state.is_in_class = false
    },
    [types.LOG_ERROR](state, error) {
        state.error_msg = error
        // TODO, need to handle errors
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
