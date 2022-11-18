<template>
  <div>
    <Post v-for="post in $store.state.posts" :post="post"/>
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
  gap: 3vh;
}

@media (max-width: 600px) {
  div {
    width: 95%;
  }
}
</style>