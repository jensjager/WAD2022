<template>
  <div class="column"></div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
@media (max-width: 600px) {
  .column {
    display: none;
  }
}

.column {
  top: 0;
  height: calc(100% - 24vh);
  width: 100px;
  position: absolute;
  margin: 13vh 1vw;
  background-color: gray;
  border-radius: 15px;
  z-index: -1;
  min-height: calc(100vh - 24vh);
}

.right {
  right: 0;
}

.left {
  left: 0;
}
</style>