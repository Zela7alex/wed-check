<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <slot>
      <div id="names" v-for="p in people" :key="p.id" :value="p.id">
        <div class="name-box">
          <p :id="p.id" v-if="!p.isEditing">
            {{ p.name }}
          </p>
          <input
            v-else
            type="text"
            v-model="p.name"
            @blur="doneEdit(p)"
            @keyup.enter="doneEdit(p)"
          />
        </div>

        <TrashHelperEl class="trash-can-btn" :personID="p.id" />
        <EditHelperEl class="edit-btn" @edit-name="editHelperName(p)" />
      </div>
    </slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TrashHelperEl from '@/components/TrashHelperEl.vue'
import EditHelperEl from '@/components/EditHelperEl.vue'
export default {
  computed: {
    ...mapState(['people']),
    //     return p.name.match(this.n/   })
  },
  data() {
    return {
      name: '',
    }
  },
  components: {
    TrashHelperEl,
    EditHelperEl,
  },
  methods: {
    editHelperName(p) {
      p.isEditing = !p.isEditing
    },
    doneEdit(p) {
      p.isEditing = false
    },
  },
  props: {
    // name: {
    //   type: string,
    // },
  },
}
</script>

<style lang="css" scoped>
.display-none {
  display: none;
}
#names {
  width: 256px;
  max-width: 256px;
  height: 80px;
  display: inline-block;
  box-sizing: border-box;
  color: rgb(49, 103, 121);
  border-bottom: 1px solid rgb(198, 225, 232);
  border-bottom-width: 1.5px;
  padding: 0.6em 4.42em;
  position: relative;
}

#names:nth-of-type(2n) {
  background: rgba(192, 212, 212, 0.5);
}
.trash-can-btn {
  position: absolute;
  right: 45px;
  top: 8px;
}
.edit-btn {
  position: absolute;
  right: 15px;
  top: 8px;
}
input {
  width: 7vw;
  height: 20px;
  position: absolute;
  top: 24px;
  right: 100px;
  padding: 0;
}
</style>
