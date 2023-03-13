<template>
  <div>
    <div id="info-modal">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#info-modal {
  width: 100%;
  background: rgb(205, 231, 238);
  border-radius: 4px;
  border: 0.1px solid rgb(149, 197, 205);
  padding: none;
}
p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
  font-weight: bold;
  font-size: 8px;
  padding: 1px 4px;
  margin: 0;
  word-spacing: 1px;
  letter-spacing: 1px;
  color: grey;
}
</style>
