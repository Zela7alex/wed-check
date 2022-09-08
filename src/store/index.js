import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    people: [],
    materials: [],
  },
  getters: {
    people: (state) => (name) => {
      if (name === '') {
        return state.people
      }
      return state.people.filter((p) => p.name.toLowerCase().includes(name))
    },
    tasks: (state) => (personName) => {
      if (!personName) {
        return state.tasks
      }
      return state.tasks.filter((t) =>
        t.selectedPerson.name.toLowerCase().includes(personName)
      )
    },
    getMaterials: (state) => {
      return state.materials
    },
  },
  mutations: {
    solidifyTask(state, payload) {
      state.tasks = payload
    },
    solidifyPerson(state, payload) {
      state.people = payload
    },
    solidifyMaterial(state, payload) {
      state.materials = payload
    },
    solidifyPeopleDeleted(state, payload) {
      state.people = payload
    },
    solidifyTasksDeleted(state, payload) {
      state.tasks = payload
    },
    solidifyMatsDeleted(state, payload) {
      state.materials = payload
    },
    solidifyNewName(state, payload) {
      state.people = payload
    },
  },
  actions: {
    createNewTask(context, payload) {
      const currentTasks = context.state.tasks
      currentTasks.push(payload)
      context.commit('solidifyTask', currentTasks)
    },
    createNewPerson(context, payload) {
      const currentPeople = context.state.people
      currentPeople.showTasks = false
      currentPeople.push(payload)
      context.commit('solidifyPerson', currentPeople)
    },
    createMaterial(context, payload) {
      const currentMaterials = context.state.materials
      currentMaterials.push(payload)
      context.commit('solidifyMaterial', currentMaterials)
    },
    deleteHelper(context, payload) {
      const currentPeople = context.state.people
      const newPeople = currentPeople.filter((p) => {
        if (p.id !== payload) {
          return p
        }
      })
      context.commit('solidifyPeopleDeleted', newPeople)
    },
    deleteTask(context, payload) {
      const currentTasks = context.state.tasks
      const newTasks = currentTasks.filter((t) => {
        if (t.id !== payload) {
          return t
        }
      })
      context.commit('solidifyTasksDeleted', newTasks)
    },
    deleteMaterial(context, payload) {
      const currentMaterials = context.state.materials
      const newMaterials = currentMaterials.filter((m) => {
        if (m.id !== payload) {
          return m
        }
      })
      context.commit('solidifyMatsDeleted', newMaterials)
    },
    updateTask(context, payload) {
      var findTaskIndex = context.state.tasks
        .map((task) => {
          return task.id
        })
        .indexOf(payload.id)
      var findTasks = context.state.tasks
      findTasks.splice(findTaskIndex, 1)
      findTasks.push(payload)
      context.commit('solidifyTask', findTasks)
    },
  },
  modules: {},
})
