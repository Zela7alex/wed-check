<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <form>
      <input type="text" class="search" placeholder="Add Tasks" />
      <button type="submit"><i class="fa fa-plus btn"></i></button>
      <button type="submit"><i class="fa fa-search btn"></i></button>
    </form>
    <BaseCountItems> Task Count: </BaseCountItems>
    <div id="full-tasks-list">
      <!-- <TaskEl :id="t.id" :tasks="t.taskitems" /> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import TaskEl from '@/components/TaskEl.vue'
export default {
  computed: {
    ...mapGetters(['people']),
    // ...mapGetters(['getTaskById']),
  },
  components: {
    // TaskEl,
  },
  data() {
    return {}
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
