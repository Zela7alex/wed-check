import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [
      {
        name: { helper: 'Bob', id: 1 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'set up centerpieces', id: 1 },
              { task: 'candles on piano', id: 2 },
              { task: 'give usb to DJ', id: 3 },
            ],
          },
        ],
      },
      {
        name: { helper: 'Mary', id: 2 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'set up pastry table', id: 4 },
              { task: 'pick up speakers', id: 5 },
              { task: 'Flower girls hair', id: 6 },
            ],
          },
        ],
      },
      {
        name: { helper: 'Kim', id: 3 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'Set up table settings', id: 7 },
              { task: 'set up glowsticks/bubbles', id: 8 },
              { task: 'give usb to DJ', id: 9 },
            ],
          },
        ],
      },
      {
        name: { helper: 'Tom', id: 4 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'set up centerpieces', id: 10 },
              { task: 'candles on piano', id: 11 },
              { task: 'give usb to DJ', id: 12 },
            ],
          },
        ],
      },
      {
        name: { helper: 'Lisa', id: 5 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'set up centerpieces', id: 14 },
              { task: 'candles on piano', id: 15 },
              { task: 'give usb to DJ', id: 16 },
            ],
          },
        ],
      },
      {
        name: { helper: 'Angie', id: 6 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'set up centerpieces', id: 17 },
              { task: 'candles on piano', id: 18 },
              { task: 'give usb to DJ', id: 19 },
            ],
          },
        ],
      },
      {
        name: { helper: 'Janette', id: 7 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'set up centerpieces', id: 20 },
              { task: 'candles on piano', id: 21 },
              { task: 'give usb to DJ', id: 22 },
            ],
          },
        ],
      },
      {
        name: { helper: 'Sally', id: 8 },
        open: true,
        sublist: [
          {
            open: false,
            taskitems: [
              { task: 'set up centerpieces', id: 23 },
              { task: 'candles on piano', id: 24 },
              { task: 'give usb to DJ', id: 25 },
            ],
          },
        ],
      },
    ],
  },
  getters: {
    people(state) {
      return state.people
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
