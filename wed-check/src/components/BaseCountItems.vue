<template>
  <div>
    <h4 id="count"><slot></slot><span id="num">8</span></h4>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#num {
  color: rgb(0, 128, 117);
}
#count {
  background-color: rgb(79, 194, 217, 0.5);
  width: 30%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 3px;
  padding: 0.2em;
  margin: 0 auto;
  margin-top: 5%;
  color: white;
}
</style>
