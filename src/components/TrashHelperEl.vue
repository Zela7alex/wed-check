<template>
  <div>
    <button
      type="submit"
      @mouseover="hoverDelete = true"
      @mouseleave="hoverDelete = false"
      @click="helperDelete"
    >
      <i class="fa-regular fa-trash-can" id="trash-can"></i>
    </button>
    <BaseHoverInfo id="delete-hover" v-if="hoverDelete">Delete</BaseHoverInfo>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      hoverDelete: false,
    }
  },
  props: ['personID', 'taskID'],
  methods: {
    ...mapActions(['deleteHelper']),
    helperDelete() {
      this.deleteHelper(this.personID)
    },
  },
}
</script>

<style lang="css" scoped>
button {
  padding: 3px;
  border: none;
  cursor: pointer;
}
button:hover {
  padding: 3px;
  border: rgb(114, 215, 240) solid 1px;
  border-radius: 3px;
  background-color: rgb(255, 255, 255, 4);
}
#trash-can {
  font-size: 13px;
  cursor: pointer;
  line-height: 3px;
  color: rgba(60, 100, 105, 0.9);
}
#delete-hover {
  position: absolute;
  top: 11px;
  right: 20px;
  z-index: 1;
  display: block;
}
</style>
