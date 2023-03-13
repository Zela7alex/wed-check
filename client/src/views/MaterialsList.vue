<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <form>
      <input
        v-model="materialName"
        type="text"
        class="search"
        placeholder="Add Materials"
      />
      <select
        name=""
        @change="onChange($event)"
        @mouseover="hoverSelectEvent = true"
        @mouseleave="hoverSelectEvent = false"
      >
        <option>Ceremony</option>
        <option>Reception</option>
      </select>
      <BaseHoverInfo id="select-hover" v-if="hoverSelectEvent"
        >Select Event</BaseHoverInfo
      >
      <button
        @click.prevent="createNewMaterial()"
        type="submit"
        @mouseover="hoverAddMaterial = true"
        @mouseleave="hoverAddMaterial = false"
      >
        <i class="fa fa-plus btn"></i>
      </button>
      <BaseHoverInfo id="add-hover" v-if="hoverAddMaterial"
        >Add Material</BaseHoverInfo
      >
    </form>
    <BaseCountItems :materials="getMaterials.length">
      Materials : {{ getMaterials.length }}
    </BaseCountItems>
    <!--------------------------------------->
    <h2>Ceremony</h2>
    <div id="ceremony-materials">
      <MaterialsEl
        :materials="getMaterials.filter((m) => m.place == 'Ceremony')"
      />
    </div>
    <!------------------------------------------>
    <h2>Reception</h2>
    <div id="reception-materials">
      <MaterialsEl
        :materials="getMaterials.filter((m) => m.place == 'Reception')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import MaterialsEl from '@/components/MaterialsEl.vue'
import BaseHoverInfo from '@/components/BaseHoverInfo.vue'
export default {
  computed: {
    ...mapGetters(['getMaterials']),
  },
  components: {
    MaterialsEl,
    BaseHoverInfo,
  },
  methods: {
    // creates the material object that will be pushed to store through payload
    ...mapActions(['createMaterial']),
    async createNewMaterial() {
      const material = {
        name: this.materialName,
        id: uuidv4(),
        place: this.placeSelected,
        hasMaterial: false,
      }
      console.log(material)
      await this.createMaterial(material)
      this.materialName = '' // resets material input to ''
    },
    onChange(e) {
      // targets event with option selected
      var name = e.target.options[e.target.selectedIndex].text
      this.placeSelected = name // makes placeSelected in data equal value of option selected by user
      console.log(this.placeSelected)
    },
  },
  data() {
    return {
      materialName: '',
      placeSelected: '',
      hoverAddMaterial: false,
      hoverSelectEvent: false,
    }
  },
}
</script>

<style lang="css" scoped>
#ceremony-materials {
  width: 85%;
  background-color: rgba(229, 246, 250, 0.7);
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  max-height: 15em;
  overflow-y: auto;
}
#reception-materials {
  width: 85%;
  background-color: rgba(209, 246, 246, 0.7);
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  max-height: 15em;
  overflow-y: auto;
}
h2 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgb(114, 146, 150);
}

button {
  border: 0.7px solid rgb(211, 208, 208);
  border-radius: 4px;
  border-bottom: none;
  height: 3.6vh;
  background: rgba(244, 247, 248, 0.7);
  color: rgb(150, 162, 163);
}
button:hover {
  color: rgb(239, 237, 232);
  background: rgb(183, 219, 225);
  border-bottom: 0.8px solid rgb(89, 105, 107);
}

input {
  border: none;
  background: rgba(246, 246, 244, 0.5);
  height: 3vh;
  cursor: pointer;
}
input::placeholder {
  color: rgb(133, 131, 125);
}
input:focus {
  outline: none;
  box-shadow: 0px 0px 0px 2px rgb(247, 243, 231) inset;
}

select {
  cursor: pointer;
  border: 1px solid rgb(207, 205, 202);
  background: rgba(247, 244, 244, 0.6);
  height: 3.6vh;
}
select:focus {
  outline: none;
  box-shadow: 0px 0px 0px 2px rgb(247, 243, 231) inset;
}
select,
option {
  color: rgb(122, 120, 117);
}
form {
  position: relative;
}
#add-hover {
  position: absolute;
  top: 25px;
  right: 55px;
  display: block;
}
#select-hover {
  position: absolute;
  top: 25px;
  right: 100px;
  display: block;
}
</style>
