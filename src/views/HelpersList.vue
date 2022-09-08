<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <form>
      <input
        v-model="name"
        :name="name"
        type="text"
        class="search"
        placeholder="Add Helpers"
        required
      />
      <!------------------------------------->
      <button
        @click.prevent="createNewPersonStart()"
        type="submit"
        @mouseover="hoverAddHelper = true"
        @mouseleave="hoverAddHelper = false"
      >
        <i class="fa fa-plus btn"></i>
      </button>
      <BaseHoverInfo v-if="hoverAddHelper" id="add-hover"
        >Add Helper</BaseHoverInfo
      >
      <!-------------------------------------->
      <button
        type="submit"
        @mouseover="hoverSearchHelper = true"
        @mouseleave="hoverSearchHelper = false"
        :class="{ activeHover: hoverSearchHelper }"
        @click="searchPeople()"
      >
        <i class="fa fa-search btn"></i>
      </button>
      <BaseHoverInfo v-if="hoverSearchHelper" id="search-hover"
        >Search Helper Added</BaseHoverInfo
      >
    </form>
    <!---------------------------------------->
    <BaseCountItems :people="people.length">
      Helper Count: {{ people.length }}</BaseCountItems
    >
    <div id="full-names-list">
      <HelperEl />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import HelperEl from '@/components/HelperEl.vue'
export default {
  computed: {
    ...mapState(['people']),
  },
  components: {
    HelperEl,
  },
  methods: {
    ...mapActions(['createNewPerson']),
    createNewPersonStart: function () {
      let uuidd = uuidv4()
      let payload = {
        name: this.name,
        id: uuidd,
        isEditing: false,
        showTasks: false,
      }
      this.createNewPerson(payload)
      this.name = ''
    },
  },
  data() {
    return {
      name: '',
      hoverAddHelper: false,
      hoverSearchHelper: false,
    }
  },
}
</script>

<style lang="css" scoped>
#full-names-list {
  width: 80%;
  background: rgb(247, 249, 250, 0.6);
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
  max-height: 40em;
  overflow-y: auto;
}
form {
  position: relative;
}
button {
  border: 0.4px solid rgb(211, 208, 208);
  border-radius: 4px;
  border-bottom: 0.1px solid rgb(184, 191, 192);
  height: 3.6vh;
  background: rgba(252, 255, 255, 0.7);
  color: rgb(180, 185, 184);
}
button:hover {
  color: rgb(239, 237, 232);
  border-bottom: 0.8px solid rgb(89, 105, 107);
  background: rgb(183, 219, 225);
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
#add-hover {
  position: absolute;
  top: 25px;
  right: 110px;
  display: block;
}
#search-hover {
  position: absolute;
  top: 25px;
  right: 80px;
  display: block;
}
</style>
