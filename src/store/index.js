import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'

import user from './modules/user'
import classroom from './modules/classroom'
import chat from './modules/chat'
import router from '../router'
import * as types from './mutation-types'
import * as cookie from '../utils/cookie'

Vue.use(Vuex)
const mutations = {
    [types.LOGOUT](state) {
        cookie.delCookie('token')
        state.user.classrooms = []
        state.user.chatrooms = []
        state.user.friends = []
        state.user.tasks = []
        state.user.login_status = false
        state.user.token = null
        state.chat.chatrooms = {}
        state.chat.valid = false
        state.chat.current_chatroom_pk = null
        state.chat.error_msg = null
        state.classroom.search_results = []
        state.classroom.classroom = {}
        state.classroom.is_in_class = false
        state.classroom.notes = []
        state.classroom.students = []
        state.classroom.error_msg = ''
        router.push('/')
    }
}
const store = new Vuex.Store({
    // if strict mode is true, then all state change must be triigered by mutations, otherwise compiler will throw error
    strict: false,
    plugins: [PersistedState()],
    // state,
    mutations,
    // actions
    modules: {
        user,
        classroom,
        chat
    }
})
export default store
