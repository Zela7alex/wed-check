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
      />
      <button
        type="submit"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <i class="fa fa-user-plus"></i>
      </button>
      <BaseHoverInfo id="helper-hover" v-if="hover">
        >Select Helper</BaseHoverInfo
      >
      <button @click.prevent="createNewTaskStart()" type="submit">
        <i class="fa fa-plus btn"></i>
      </button>
      <button type="submit"><i class="fa fa-search btn"></i></button>
    </form>
    <BaseCountItems> Task Count: </BaseCountItems>
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
export default {
  computed: {
    ...mapGetters(['people']), // mapgetter pulls the people objects added by user
  },
  components: {
    TaskEl,
  },
  methods: {
    ...mapActions(['createNewTask']),
    createNewTaskStart: function () {
      //This function adds user-input into action that will be added to .store
      let uuidd = uuidv4()
      console.log(uuidd)
      let payload = {
        name: this.taskName, // "name" & "id" is what is added into tasksList Array
        id: uuidd,
        isCompleted: true,
      }
      this.createNewTask(payload) // This payload is brought back to the action from component to .store(vuex)
      this.taskName = ''
    },
    selectHelperModal: function () {},
  },
  data() {
    return {
      taskName: '', // resetting taskName so input is empty
      hover: false,
    }
  },
}
</script>

<style lang="css" scoped>
#full-tasks-list {
  width: 60%;
  background-color: rgba(229, 246, 250, 0.7);
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
}
form {
  position: relative;
}
#helper-hover {
  position: absolute;
  top: 25px;
  right: 125px;
  display: none;
}
.display-info {
  display: block;
}
button {
  border: 0.7px solid rgb(211, 208, 208);
  border-radius: 4px;
}
</style>
