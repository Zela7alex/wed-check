<template>
  <div>
    <div id="task" v-for="t in tasks" :key="t.id">
      <input v-model="t.isCompleted" type="checkbox" />
      {{ t.task }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  props: {
    tasks: Array,
  },
  methods: {},
}
</script>

<style lang="css" scoped>
#task {
  border: 2px solid white;
  padding: 0.2em;
  margin: 0.4em;
  color: black;
  font-weight: normal;
  background: rgba(45, 196, 201, 0.4);
}
input {
  cursor: pointer;
}
</style>
