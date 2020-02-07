import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    list: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: false },
      { id: 3, name: "打豆豆", done: false }
    ]
  }
const mutations = {
  addTodo(state, payload) {
    const id = state.list.length === 0 ? 1 : state.list.length + 1
    state.list.push({
      id,
      name: payload.name,
      done: false
    })
  },
  delTodo(state, payload) {
    state.list = state.list.filter(item => item.id !== payload.id)
  },
  changeState(state, payload) {
    let todo = state.list.find(item => item.id === payload.id)
    todo.done = !todo.done
  },
  updateTodo(state, payload) {
    let todo = state.list.find(item => item.id === payload.id)
    todo.name = payload.name
  },
  clearCompleted(state) {
    state.list = state.list.filter(item => !item.done)
  }
}  
const getters = {
  isFooterShow(state) {
    return state.list.length > 0
  },
  itemLeftCount(state) {
    return state.list.filter(item => !item.done).length
  },
  isClearCompletedShow(state) {
    return state.list.some(item => item.done)
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters
});

export default store;
