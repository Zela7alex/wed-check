<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <form>
      <input type="text" class="search" placeholder="Add Helpers" />
      <button type="submit"><i class="fa fa-plus btn"></i></button>
      <button type="submit"><i class="fa fa-search btn"></i></button>
    </form>
    <BaseCountItems> Helper Count: </BaseCountItems>
    <div id="full-names-list">
      <HelperEl />
    </div>
  </div>
</template>

<script>
import HelperEl from '@/components/HelperEl.vue'
export default {
  data() {
    return {}
  },
  computed: {},
  components: {
    HelperEl,
  },
}
</script>

<style lang="css" scoped>
#full-names-list {
  width: 60%;
  background-color: rgb(247, 249, 250, 0.7);
  margin: 0 auto;
  margin-top: 2em;
  display: flex;
}
button {
  border: 0.7px solid rgb(211, 208, 208);
  border-radius: 4px;
  border-bottom: 0.8px solid rgb(89, 105, 107);
}
</style>
