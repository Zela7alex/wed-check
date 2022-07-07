<template>
  <div>
    <div v-for="p in people" :key="p">{{ p }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      quote: "I want a dog",
    };
  },
  computed: {
    ...mapGetters(["people"]),
  },
};
</script>
