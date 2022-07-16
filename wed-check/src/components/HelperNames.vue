<template>
  <div>
    <form>
      <input
        v-model="name"
        type="text"
        class="search"
        placeholder="Search Helper Name"
      />
      <button type="submit"><i class="fa fa-heart btn"></i></button>
    </form>
    <ul>
      <li
        id="names"
        v-for="p in people(name)"
        v-on:click="showTasks"
        :key="p.id"
        :value="p.id"
      >
        {{ p.name }}
        <div id="drop-down-arrow" type="submit">
          <i class="fa fa-caret-down btn"></i>
        </div>
        <TaskCards class="makeVisible" :id="p.id" :tasks="p.taskitems" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskCards from '@/components/TaskCards.vue'
export default {
  computed: {
    ...mapGetters(['people']),
  },
  components: {
    TaskCards,
  },
  data() {
    return { name: '' }
  },
  methods: {
    showTasks: function (e) {
      this.classToggle(e.target.value)
    },
    classToggle(value) {
      let toToggle = document.getElementById(`${value}`)
      toToggle.classList.toggle('makeVisible')
    },
  },
}
</script>

<style lang="css" scoped>
.makeVisible {
  display: none;
}
#names {
  width: 100%;
  max-width: 45%;
  box-shadow: 3px 0 20px rgb(91, 130, 150);
  background: rgba(45, 196, 201, 0.4);
  margin-top: 2em;
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
</style>
