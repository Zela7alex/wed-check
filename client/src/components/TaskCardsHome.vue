<template>
  <div>
    <div id="task" v-for="t in tasks" :key="t.id">
      <div id="task-items">
        <input
          v-model="t.isCompleted"
          type="checkbox"
          @click="toggleCompleted(t)"
        />
        <p :class="{ completed: t.isCompleted }">{{ t.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  props: {
    tasks: Array,
  },
  data() {
    return {}
  },
  methods: {
    toggleCompleted(t) {
      t.isCompleted = !t.isCompleted
    },
  },
}
</script>

<style lang="css" scoped>
#task {
  border: 2px solid white;
  padding: 0.2em;
  margin: 0.4em;
  color: rgb(53, 92, 98);
  font-weight: normal;
  background: rgba(45, 196, 201, 0.4);
}
p {
  width: 30%;
  margin-left: 30px;
}
input {
  cursor: pointer;
  position: absolute;
  margin-top: 5px;
  left: 22px;
  width: 17px;
  height: 17px;
  cursor: pointer;
  background-color: rgb(167, 173, 173);
  accent-color: rgb(211, 208, 200);
  color: white;
}
.task-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: none;
  margin-left: 0;
  padding-left: 0;
  position: relative;
}
.completed {
  text-decoration: line-through;
}
</style>
