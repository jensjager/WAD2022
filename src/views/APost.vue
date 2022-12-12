<template>
  <main>
    <APostComponent/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 0 7vh 0;
  width: 100%;
  min-height: 78vh;
}
</style>

<script>
import APostComponent from "@/components/APostComponent.vue";

export default {
  name: "APost",
  components: {APostComponent}
}
</script>