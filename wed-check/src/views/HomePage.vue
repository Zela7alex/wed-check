<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <form>
      <input type="text" class="search" placeholder="Search Helper Name" />
      <button type="submit"><i class="fa fa-heart btn"></i></button>
    </form>
    <HelperNames />
  </div>
</template>
<script>
import HelperNames from '@/components/HelperNames.vue'
export default {
  data() {
    return {}
  },
  computed: {},
  components: {
    HelperNames,
  },
}
</script>
<style></style>
