<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <form>
      <input
        v-model="taskName"
        type="text"
        class="search"
        placeholder="Add Tasks"
        required=" "
      />
      <!------------------------------->
      <div
        id="dropdown-names"
        @mouseover="hoverSelectHelper = true"
        @mouseleave="hoverSelectHelper = false"
        :class="{ activeHover: hoverSelectHelper }"
      >
        <NamesDropDown @change="getName" v-model="nameObject" />
      </div>
      <BaseHoverInfo id="helper-hover" v-if="hoverSelectHelper">
        Assign Helper</BaseHoverInfo
      >
      <!------------------------------>
      <button
        @click.prevent="createNewTaskStart()"
        type="submit"
        @mouseover="hoverAddTask = true"
        @mouseleave="hoverAddTask = false"
      >
        <i class="fa fa-plus btn"></i>
      </button>
      <BaseHoverInfo id="add-hover" v-if="hoverAddTask">
        Add Task</BaseHoverInfo
      >
      <!--------------------------------->
      <button
        type=""
        @mouseover="hoverSearchTask = true"
        @mouseleave="hoverSearchTask = false"
        :class="{ activeHover: hoverSearchTask }"
      >
        <i class="fa fa-search btn"></i>
      </button>
      <BaseHoverInfo id="search-hover" v-if="hoverSearchTask">
        Search Task</BaseHoverInfo
      >
    </form>
    <!-------------------------------->
    <BaseCountItems :tasks="tasks().length">
      Task Count: {{ tasks().length }}
    </BaseCountItems>
    <p id="incompleteTasks">Incomplete : {{ tasks().length }}</p>
    <div id="full-tasks-list">
      <TaskEl />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import TaskEl from '@/components/TaskEl.vue'
import NamesDropDown from '@/components/NamesDropDown.vue'
export default {
  computed: {
    ...mapGetters(['people', 'tasks']), // mapgetter pulls the people objects added by user
  },
  components: {
    TaskEl,
    NamesDropDown,
  },
  methods: {
    ...mapActions(['createNewTask', 'changeHelper']),
    async createNewTaskStart() {
      //This function adds user-input into action that will be added to .store
      const task = {
        name: this.taskName, // "name" & "id" is what is added into tasksList Array
        id: uuidv4(),
        isCompleted: false,
        selectedPerson: this.nameObject,
        isEditing: false,
        showTasks: false,
      }
      await this.createNewTask(task) // This payload is brought back to the action from component to .store(vuex)
      this.taskName = '' // resets input to empty
    },
    getName(event) {
      //method with $emit value fnamesDropDown.vue
      this.nameObject = event
      this.nameSelected = event.name
    },
  },
  data() {
    return {
      taskName: '', // resetting taskName so input is empty
      hoverSelectHelper: false, // when hover on buttons these all turn true
      hoverAddTask: false,
      hoverSearchTask: false,
      nameSelected: '',
      nameObject: '',
    }
  },
}
</script>

<style lang="css" scoped>
#full-tasks-list {
  width: 90%;
  background-color: rgba(229, 246, 250, 0.7);
  margin: 0 auto;
  margin-top: 1em;
  display: flex;
  max-height: 40em;
  overflow-y: auto;
}
form {
  position: relative;
}
#helper-hover {
  position: absolute;
  top: 25px;
  right: 125px;
  display: block;
}
#add-hover {
  position: absolute;
  top: 25px;
  right: 125px;
  display: block;
}
#search-hover {
  position: absolute;
  top: 25px;
  right: 80px;
  display: block;
}

.display-info {
  display: block;
}
button {
  border: 0.7px solid rgb(211, 208, 208);
  border-radius: 4px;
  border-bottom: none;
  height: 3.6vh;
  background: rgba(244, 247, 248, 0.7);
  color: rgb(150, 162, 163);
}
button:hover {
  color: rgb(239, 237, 232);
  border-bottom: 0.8px solid rgb(89, 105, 107);
  background: rgb(183, 219, 225);
}
#dropdown-names {
  display: inline-block;
}
input {
  border: 1px solid rgb(191, 214, 214);
  background: rgba(246, 246, 244, 0.5);
  height: 3vh;
  cursor: pointer;
}
input::placeholder {
  color: rgb(133, 131, 125);
}
input:focus {
  outline: none;
  box-shadow: 0px 0px 0px 2px rgb(247, 243, 231) inset;
}

#incompleteTasks {
  font-size: 12px;
  font-style: italic;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(251, 251, 251);
  background: rgba(175, 188, 189, 0.3);
  border-radius: 12px;
  width: 80px;
  margin: 1em 0em 0em 18.5em;
}
</style>
