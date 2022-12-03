<template>
  <div class="home">
    <div class="post-buttons">
      <button @click="logout">Logout</button>
    </div>
    <Post/>
    <Post/>
    <div class="post-buttons">
      <button>Add post</button>
      <button>Delete all</button>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'Content',
  components: {
    Post
  }
}
</script>

<style scoped>
.home {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

button {
  width: 30%;
  max-width: 300px;
  height: 4vh;
  border-radius: 15px;
  background-color: #8badda;
  border: 0;
  cursor: pointer;
  font-size: medium;
}

.post-buttons {
  display: flex;
  justify-content: space-evenly;
}

@media (max-width: 600px) {
  .home {
    width: 90%;
  }
}
</style>