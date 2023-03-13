import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'http://localhost:3000'

const helpersUrl = `${baseUrl}/helpers`
const materialsUrl = `${baseUrl}/materials`
const tasksUrl = `${baseUrl}/tasks`

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
    solidifyPerson(state, helper) {
      state.people = helper
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
    //^ Loading helper data from local storage
    setHelperData(state, data) {
      state.people = data
    },
    //^ Loading task data from local storage
    setTaskData(state, data) {
      state.tasks = data
    },
    //^ Loading material data from local storage
    setMaterialData(state, data) {
      state.materials = data
    },
  },
  actions: {
    async createNewTask(context, task) {
      const currentTasks = context.state.tasks
      currentTasks.push(task)
      context.commit('solidifyTask', currentTasks)
      return (await Axios.post(tasksUrl, task)).data.id
    },
    async createNewPerson(context, helper) {
      const currentPeople = context.state.people
      currentPeople.showTasks = false
      currentPeople.push(helper)
      context.commit('solidifyPerson', currentPeople)
      return (await Axios.post(helpersUrl, helper)).data.id
    },

    async createMaterial(context, material) {
      const currentMaterials = context.state.materials
      currentMaterials.push(material)
      context.commit('solidifyMaterial', currentMaterials)
      return (await Axios.post(materialsUrl, material)).data.id
    },
    async deleteHelper(context, helper) {
      const currentPeople = context.state.people
      const newPeople = currentPeople.filter((p) => {
        if (p.id !== helper) {
          return p
        }
      })
      context.commit('solidifyPeopleDeleted', newPeople)
    },
    async deleteTask(context, task) {
      const currentTasks = context.state.tasks
      const newTasks = currentTasks.filter((t) => {
        if (t.id !== task) {
          return t
        }
      })
      context.commit('solidifyTasksDeleted', newTasks)
    },
    async deleteMaterial(context, material) {
      const currentMaterials = context.state.materials
      const newMaterials = currentMaterials.filter((m) => {
        if (m.id !== material) {
          return m
        }
      })
      context.commit('solidifyMatsDeleted', newMaterials)
    },
    async updateTask(context, task) {
      var findTaskIndex = context.state.tasks
        .map((t) => {
          return t.id
        })
        .indexOf(task.id)
      var findTasks = context.state.tasks
      findTasks.splice(findTaskIndex, 1)
      findTasks.push(task)
      context.commit('solidifyTask', findTasks)
    },
    // ----------------------------------------------------------------
    //^ Retrieving helper data from localStorage
    loadHelperData(context) {
      const data = localStorage.getItem('helpers')
      if (data != null) {
        context.commit('setHelperData', JSON.parse(data))
      }
    },
    //^ Storing loaded helper data into cart
    storeHelperData(context) {
      localStorage.setItem('helpers', JSON.stringify(context.state.people))
    },
    //^ Getting helper content when application starts
    initializeHelpers(context, store) {
      context.dispatch('loadHelperData')
      store.watch(
        (state) => state.people,
        () => context.dispatch('storeHelperData'),
        { deep: true }
      )
    },
    //-------------------------------------------------------------------
    //^ Retrieving task data from localStorage
    loadTaskData(context) {
      const data = localStorage.getItem('tasks')
      if (data != null) {
        context.commit('setTaskData', JSON.parse(data))
      }
    },
    //^ Storing loaded task data into cart
    storeTaskData(context) {
      localStorage.setItem('tasks', JSON.stringify(context.state.tasks))
    },
    //^ Getting task content when application starts
    initializeTasks(context, store) {
      context.dispatch('loadTaskData')
      store.watch(
        (state) => state.tasks,
        () => context.dispatch('storeTaskData'),
        { deep: true }
      )
    },
    //-------------------------------------------------------------------
    //^ Retrieving task data from localStorage
    loadMaterialData(context) {
      const data = localStorage.getItem('materials')
      if (data != null) {
        context.commit('setMaterialData', JSON.parse(data))
      }
    },
    //^ Storing loaded task data into cart
    storeMaterialData(context) {
      localStorage.setItem('materials', JSON.stringify(context.state.materials))
    },
    //^ Getting task content when application starts
    initializeMaterials(context, store) {
      context.dispatch('loadMaterialData')
      store.watch(
        (state) => state.materials,
        () => context.dispatch('storeMaterialData'),
        { deep: true }
      )
    },
  },
  modules: {},
})
