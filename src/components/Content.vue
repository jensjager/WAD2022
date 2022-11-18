<template>
  <div>
    <Post/>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Content",
  components: {Post}

}
</script>

<style scoped>
div {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

@media (max-width: 600px) {
  div {
    width: 95%;
  }
}
</style>