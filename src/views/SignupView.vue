<template>
  <div class="sign-up">
    <SignupContent/>
  </div>
</template>

<style scoped>
.sign-up {
  padding-top: 11vh;
  padding-bottom: 1vh;
  height: 78vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import SignupContent from "@/components/SignupContent";

export default {
  name: 'SignupView',
  components: {
    SignupContent
  }
}
</script>
