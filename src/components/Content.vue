<template>
  <div>
    <Post v-for="post in postList" :post="post"/>
    <button @click="removeLikes">Reset likes</button>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Content",
  components: {Post},
  computed: {
    postList() {
      return this.$store.getters.getPosts
    }
  },
  methods: {
    removeLikes() {
      this.$store.dispatch("removeLikesAction")
    }
  },
  mounted() {
    this.$store.dispatch("fetchPostsAction")
  }
}
</script>

<style scoped>
div {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

button {
  margin-left: 35%;
  margin-right: 35%;
  width: 30%;
  height: 4vh;
  background-color: #8badda;
  border-radius: 15px;
  border: none;
  font-size: large;
}

@media (max-width: 600px) {
  div {
    width: 95%;
  }
}
</style>