<template>
  <div class="column"></div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
.column {
  flex: 1;
  background-color: gray;
  border-radius: 15px;
}

@media (max-width: 600px) {
  .column {
    display: none;
  }
}
</style>