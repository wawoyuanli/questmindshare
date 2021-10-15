import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    debug: true,
    state: {
        langState:'en'
    },
    mutations: {
        changeLanguage(state, lang) { 
            state.langState = lang
        }
    }
  })

 export default store