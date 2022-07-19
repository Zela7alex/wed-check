<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <slot>
      <div id="names" v-for="p in people(name)" :key="p.id" :value="p.id">
        {{ p.name }}
        <BaseTrashCan class="trash-can-btn" />
        <BaseEdit class="edit-btn" />
      </div>
    </slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['people']),
  },
  data() {
    return { name: '' }
  },
}
</script>

<style lang="css" scoped>
#names {
  width: 100%;
  color: black;
  border-bottom: 1px solid black;
  border-bottom-width: 1.5px;
  padding: 0.6em 3.87em;
  position: relative;
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
