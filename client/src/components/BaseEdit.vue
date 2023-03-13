<template>
  <div>
    <button
      type="submit"
      @mouseover="hoverEdit = true"
      @mouseleave="hoverEdit = false"
    >
      <i class="fa fa-edit" id="edit"></i>
    </button>
    <BaseHoverInfo id="edit-hover" v-if="hoverEdit">Edit</BaseHoverInfo>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverEdit: false,
    }
  },
}
</script>

<style lang="css" scoped>
button {
  width: 100%;
  padding: 3px;
  border: none;
  cursor: pointer;
}
button:hover {
  width: 100%;
  padding: 3px;
  border: rgb(114, 215, 240) solid 1px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255, 0.4);
}
#edit {
  font-size: 13px;
  cursor: pointer;
  line-height: 3px;
  color: rgba(60, 100, 105, 0.9);
}
#edit-hover {
  position: absolute;
  top: 12px;
  right: 20px;
  z-index: 1;
  display: block;
}
</style>
