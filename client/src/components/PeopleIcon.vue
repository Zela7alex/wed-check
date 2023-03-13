<template>
  <div>
    <button
      type="submit"
      @mouseover="hoverChangePeople = true"
      @mouseleave="hoverChangePeople = false"
      @click="$emit('openDropDown')"
    >
      <i class="fa fa-user" id="edit"></i>
    </button>
    <BaseHoverInfo id="change-people-hover" v-if="hoverChangePeople">
      Helper Assigned</BaseHoverInfo
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverChangePeople: false,
    }
  },
}
</script>

<style lang="css" scoped>
button {
  width: 100%;
  padding: 3px;
  border: none;
}

#edit {
  font-size: 12px;
  line-height: 3px;
}
#change-people-hover {
  position: absolute;
  top: 20px;
  right: 11px;
  z-index: 1;
}
</style>
