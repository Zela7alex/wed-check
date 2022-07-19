import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    people: [
      {
        name: 'Bob',
        id: 777,
        taskitems: [
          { task: 'set up centerpieces', id: 1, isCompleted: false },
          { task: 'candles on piano', id: 2, isCompleted: false },
          { task: 'give usb to DJ', id: 3, isCompleted: false },
        ],
      },
      {
        name: 'Mary',
        id: 2,
        taskitems: [
          { task: 'set up pastry table', id: 4, isCompleted: false },
          { task: 'pick up speakers', id: 5, isCompleted: false },
          { task: 'Flower girls hair', id: 6, isCompleted: false },
        ],
      },
      {
        name: 'Kim',
        id: 3,
        taskitems: [
          { task: 'Set up table settings', id: 7 },
          { task: 'set up glowsticks/bubbles', id: 8 },
          { task: 'give usb to DJ', id: 9 },
        ],
      },
      {
        name: 'Tom',
        id: 4,
        taskitems: [
          { task: 'set up centerpieces', id: 10 },
          { task: 'candles on piano', id: 11 },
          { task: 'give usb to DJ', id: 12 },
        ],
      },
      {
        name: 'Lisa',
        id: 5,
        taskitems: [
          { task: 'set up centerpieces', id: 14 },
          { task: 'candles on piano', id: 15 },
          { task: 'give usb to DJ', id: 16 },
        ],
      },
      {
        name: 'Angie',
        id: 6,
        taskitems: [
          { task: 'set up centerpieces', id: 17 },
          { task: 'candles on piano', id: 18 },
          { task: 'give usb to DJ', id: 19 },
        ],
      },
      {
        name: 'Janette',
        id: 7,
        taskitems: [
          { task: 'set up centerpieces', id: 20 },
          { task: 'candles on piano', id: 21 },
          { task: 'give usb to DJ', id: 22 },
        ],
      },
      {
        name: 'Sally',
        id: 8,
        taskitems: [
          { task: 'set up centerpieces', id: 23 },
          { task: 'candles on piano', id: 24 },
          { task: 'give usb to DJ', id: 25 },
        ],
      },
    ],
  },
  getters: {
    people: (state) => (name) => {
      if (name === '') {
        return state.people
      }
      return state.people.filter((p) => p.name.toLowerCase().includes(name))
    },
    tasksList: (state) => {
      return state.tasks
    },
    getTaskInPersonById: (state) => (id) => {
      state.people.forEach((person) => {
        person.taskitems.forEach((task) => {
          if (task.id === id) {
            return task
          }
        })
      })
    },
    getTaskInTasksById: (state) => (id) => {
      state.tasks.forEach((task) => {
        if (task.id === id) {
          return task
        }
      })
    },
  },
  mutations: {
    solidifyTask(state, payload) {
      state.tasks = payload
    },
  },
  actions: {
    createNewTask(context, payload) {
      const currentTasks = context.state.tasks
      currentTasks.push(payload)
      context.commit('solidifyTask', currentTasks)
    },
  },
  modules: {},
})
