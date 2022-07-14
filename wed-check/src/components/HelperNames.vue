<template>
  <div>
    <div id="names" v-for="p in people" :key="p">{{ p }}</div>
    <TaskCards />
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
}
</script>

<style lang="css" scoped>
#names {
  max-width: 40%;
  box-shadow: 3px 0 20px rgb(91, 130, 150);
  background: rgba(45, 196, 201, 0.2);
  text-align: center;
  margin: 0 auto;
  margin-top: 2em;
}
</style>
