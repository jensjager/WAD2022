<template>
  <div class="home">
    <button>Logout</button>
    <Post/>
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

@media (max-width: 600px) {
  .home {
    width: 90%;
  }
}
</style>