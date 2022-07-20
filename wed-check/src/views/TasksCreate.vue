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
  },
  data() {
    return {
      taskName: '', // resetting taskName so input is empty
    }
  },
}
</script>

<style lang="css" scoped>
#full-tasks-list {
  width: 60%;
  background-color: rgb(247, 249, 250, 0.7);
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
}
</style>
