<template>
  <main>
    <LoginComponent/>
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
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "Login",
  components: {LoginComponent}
}
</script>