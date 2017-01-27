import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'

import user from './modules/user'
import classroom from './modules/classroom'
import chat from './modules/chat'

Vue.use(Vuex)

const store = new Vuex.Store({
    // if strict mode is true, then all state change must be triigered by mutations, otherwise compiler will throw error
    strict: false,
    plugins: [PersistedState()],
    // state,
    // mutations,
    // actions
    modules: {
        user,
        classroom,
        chat
    }
})
export default store
