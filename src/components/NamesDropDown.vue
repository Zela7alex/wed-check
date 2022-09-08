<template>
  <div>
    <select @change="onChange($event)">
      <!--event on option change -->
      <option id="names" v-for="p in people(name)" :key="p.id" :value="p.id">
        {{ p.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['people']),
  },
  data() {
    return {
      name: '',
    }
  },
  methods: {
    onChange(e) {
      // This event is selecting the "helper"
      var name = e.target.options[e.target.options.selectedIndex].text
      var personId = e.target.value
      // console.log(name)
      // console.log(personId)
      this.$emit('change', { name, personId })
    },
  },
}
</script>

<style lang="css" scoped>
#names {
  color: black;
  padding: 12px 16px;
  display: block;
  background: rgba(247, 244, 244, 0.3);
}
select {
  cursor: pointer;
  border: rgb(216, 200, 162);
  background: rgba(247, 244, 244, 0.6);
  height: 3vh;
}
select:focus {
  outline: none;
  box-shadow: 0px 0px 0px 2px rgb(247, 243, 231) inset;
}
select,
option {
  color: rgb(122, 120, 117);
}
</style>
