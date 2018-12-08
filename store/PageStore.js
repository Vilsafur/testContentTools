import Vue from 'vue'
const Vuex = require('vuex')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pages: {
      1: {
        body: `<p>Hello are you waiting for? Start writing!</p>`
      },
      2: {
        body: `<p>What are you waiting for? Start writing!</p>`
      }
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
