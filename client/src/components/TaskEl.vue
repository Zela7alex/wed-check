<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <zoom-center-transition group>
      <div id="task" v-for="task in tasks()" :key="task.id" :value="task.id">
        <p v-if="!task.isEditing" :class="{ completed: task.isCompleted }">
          {{ task.name }}
        </p>
        <input
          v-else
          type="text"
          v-model="task.name"
          @blur="doneEdit(task)"
          @keyup.enter="doneEdit(task)"
        />
        <PeopleIcon class="people-btn" />
        <NamesDropDown
          v-if="task.isEditing"
          class="names-drop-down"
          @change="getName($event, task)"
        />
        <p class="person-assigned" v-else>
          {{ task.selectedPerson.name }}
        </p>
        <!------------------------------------>
        <TrashTaskEl class="trash-can-btn" :taskID="task.id" />
        <!------------------------------------>
        <EditTaskEl class="edit-btn" @edit-task="editTaskName(task)" />
      </div>
    </zoom-center-transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import NamesDropDown from '@/components/NamesDropDown.vue'
import PeopleIcon from '@/components/PeopleIcon.vue'
import TrashTaskEl from '@/components/TrashTaskEl.vue'
import EditTaskEl from '@/components/EditTaskEl.vue'
export default {
  computed: {
    ...mapGetters(['tasks']),
  },
  data() {
    return {
      nameSelected: '',
      nameObject: '',
      // newSelectedPerson: this.task.selectedPerson.name,
    }
  },
  components: {
    TrashTaskEl,
    EditTaskEl,
    NamesDropDown,
    PeopleIcon,
  },
  methods: {
    editTaskName(task) {
      task.isEditing = !task.isEditing
    },
    doneEdit(task) {
      task.isEditing = false
    },
    changeHelper(task) {
      task.isEditing = !task.isEditing
    },
    getName(event, task) {
      //method with $emit vasDropDown.vue
      task.selectPerson = event
      this.updateTask(task)
    },
    ...mapActions(['updateTask']),
  },
  props: {
    duration: {
      type: [Number, Object],
      default: 300,
    },
    group: Boolean,
    tag: {
      type: String,
      default: 'span',
    },
    origin: {
      type: String,
      default: '',
    },
    styles: {
      type: Object,
      default: () => {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out',
        }
      },
    },
  },
}
</script>

<style lang="css" scoped>
#task {
  width: 200px;
  max-width: 200px;
  height: 65px;
  display: inline-block;
  color: black;
  border-bottom: 1px solid rgb(255, 255, 255);
  border-bottom-width: 1.5px;
  padding: 0.2em;
  padding-left: 2em;
  padding-right: 3.39em;
  position: relative;
}
#task:nth-of-type(2n) {
  background: rgba(192, 212, 212, 0.5);
}
p {
  width: 9em;
  font-size: 15px;
  overflow-wrap: break-word;
  text-align: left;
  color: rgb(49, 103, 121);
}

.trash-can-btn {
  position: absolute;
  right: 32px;
  top: 36.2px;
}
.edit-btn {
  position: absolute;
  right: 4px;
  top: 36px;
}
.people-btn {
  position: absolute;
  right: 6px;
  top: 7px;
}
.person-assigned {
  position: absolute;
  right: 3em;
  top: 1px;
  font-size: 12px;
  width: 46px;
  color: grey;
  text-align: right;
}
input {
  width: 12vw;
  height: 20px;
  position: absolute;
  top: 24px;
  left: 20px;
  padding: 0;
}
.completed {
  text-decoration: line-through;
  color: rgb(207, 200, 189);
}
.names-drop-down {
  position: absolute;
  right: 25px;
  top: 10px;
}
</style>
