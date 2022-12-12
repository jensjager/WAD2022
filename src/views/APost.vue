<template>
  <main>
    <PostComponent/>
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
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "APost",
  components: {PostComponent}
}
</script>