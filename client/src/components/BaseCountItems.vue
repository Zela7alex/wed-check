<template>
  <div>
    <h4 id="count"><slot></slot><span id="num"></span></h4>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#count {
  background-color: rgba(127, 184, 196, 0.5);
  width: 43%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 3px;
  padding: 0.2em;
  margin: 0 auto;
  margin-top: 5%;
  color: rgb(255, 255, 255, 0.9);
}
</style>
