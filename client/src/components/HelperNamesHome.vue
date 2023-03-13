<template>
  <div>
    <div id="home" :class="{ 'height-modal': showModal }">
      <form>
        <input
          v-model="name"
          type="text"
          class="search"
          placeholder="Search Helper Name"
        />
        <button
          type="submit"
          @mouseover="hoverSearchHelper = true"
          @mouseleave="hoverSearchHelper = false"
        >
          <i class="fa fa-heart btn"></i>
        </button>
        <BaseHoverInfo id="search-hover" v-if="hoverSearchHelper"
          >Search Your Name</BaseHoverInfo
        >
      </form>
      <button
        id="schedule-btn"
        v-if="showScheduleButton"
        @click="
          ;(showModal = true),
            (showScheduleButton = false),
            (showHelperNames = false)
        "
      >
        Schedule
      </button>
      <collapse-transition name="fade">
        <ScheduleModal
          id="schedule"
          v-if="showModal"
          @close="
            ;(showModal = false),
              (showScheduleButton = true),
              (showHelperNames = true)
          "
        />
      </collapse-transition>
      <ul v-if="showHelperNames">
        <li id="names" v-for="p in searchPeople" :key="p.id" :value="p.id">
          <p @click="p.showTasks = !p.showTasks">{{ p.name }}</p>
          <div id="drop-down-arrow" type="submit">
            <i class="fa fa-caret-down btn"></i>
          </div>
          <TaskCardsHome
            :class="{ makeVisible: !p.showTasks }"
            :id="p.id"
            :tasks="p.tasks"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import TaskCardsHome from '@/components/TaskCardsHome.vue'
import ScheduleModal from '@/components/ScheduleModal.vue'
export default {
  computed: {
    ...mapGetters(['people', 'tasks']),
    searchPeople() {
      let filterPeople = this.people(this.name)
      filterPeople.forEach((p) => {
        p.tasks = this.tasks(p.name)
        Vue.set(p, 'showTasks', false)
      })

      return filterPeople
    },
  },
  components: {
    TaskCardsHome,
    ScheduleModal,
  },
  data() {
    return {
      name: '',
      hoverSearchHelper: false,
      showModal: false,
      showScheduleButton: true,
      showHelperNames: true,
    }
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
.makeVisible {
  display: none;
}
#home {
  position: relative;
}
.height-modal {
  height: 80vh;
}
#names {
  width: 100%;
  max-width: 60%;
  box-shadow: 2px 0 12px rgb(91, 130, 150);
  background: rgba(45, 196, 201, 0.37);
  margin-top: 1em;
  padding: 2%;
  position: relative;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
ul {
  width: 100%;
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 0;
}
#drop-down-arrow {
  position: absolute;
  right: 10%;
  top: 3%;
  font-size: 20px;
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
button {
  border: 0.7px solid rgb(211, 208, 208);
  border-radius: 4px;
  border-bottom: 0px;
  height: 3.6vh;
  background: rgba(244, 247, 248, 0.7);
  color: rgb(150, 162, 163);
}
button:hover {
  color: rgb(239, 237, 232);
  border-bottom: 0.8px solid rgb(89, 105, 107);
  background: rgb(183, 219, 225);
}
#schedule-btn {
  width: 30%;
  margin-top: 8%;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
  border-bottom: 0px;
}
#schedule-btn:hover {
  color: rgb(104, 159, 169);
  background: rgb(235, 244, 245);
  border-bottom: 0.5px solid rgb(124, 169, 169);
}
#schedule {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2em;
  left: 15px;
}
form {
  position: relative;
}
#search-hover {
  position: absolute;
  top: 35px;
  right: 70px;
  display: block;
}
</style>
