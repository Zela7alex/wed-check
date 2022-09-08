<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <div
      id="materialObj"
      v-for="material in materials"
      :key="material.id"
      :value="material.id"
    >
      <p class="materialEl" :class="{ completed: material.hasMaterial }">
        {{ material.name }}
      </p>
      <input
        type="checkbox"
        name="checkedBox"
        @click="toggleMaterial(material)"
      />
      <TrashMaterialEl class="trash-can-btn" :materialID="material.id" />
    </div>
  </div>
</template>

<script>
import TrashMaterialEl from '@/components/TrashMaterialEl.vue'

export default {
  computed: {},
  data() {
    return {}
  },
  components: {
    TrashMaterialEl,
  },
  props: {
    materials: Array,
  },
  methods: {
    toggleMaterial(material) {
      material.hasMaterial = !material.hasMaterial
    },
  },
}
</script>

<style lang="css" scoped>
#materialObj {
  width: 185px;
  max-width: 185px;
  display: inline-block;
  color: black;
  border-bottom: 1px solid rgb(255, 255, 255);
  border-bottom-width: 1.5px;
  padding-left: 2em;
  padding-right: 3.39em;
  position: relative;
}
p {
  width: 8em;
  overflow-wrap: break-word;
  text-align: left;
  color: rgb(49, 103, 121);
}

.trash-can-btn {
  position: absolute;
  right: 30px;
  top: 15px;
  width: 20px;
}
input {
  position: absolute;
  right: 70px;
  top: 16px;
  width: 17px;
  height: 17px;
  cursor: pointer;
  background-color: rgb(167, 173, 173);
  accent-color: rgb(211, 208, 200);
}

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
