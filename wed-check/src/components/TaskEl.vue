<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <div id="task" v-for="task in tasksList" :key="task.id">
      <p>{{ task.name }}</p>
      <BaseTrashCan class="trash-can-btn" />
      <BaseEdit class="edit-btn" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['tasksList']),
  },
  props: {},
  methods: {},
}
</script>

<style lang="css" scoped>
#task {
  width: 100%;
  color: black;
  border-bottom: 1px solid black;
  border-bottom-width: 1.5px;
  padding: 0.6em;
  padding-left: 2em;
  padding-right: 3.39em;
  position: relative;
}
p {
  width: 8em;
  overflow-wrap: break-word;
  text-align: left;
}

.trash-can-btn {
  position: absolute;
  right: 60px;
  top: 8px;
}
.edit-btn {
  position: absolute;
  right: 30px;
  top: 8px;
}
</style>
