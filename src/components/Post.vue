<template>
  <article>
    <div class="header">
      <img :src="post.userAvatar" alt="User avatar"/>
      <p>{{ post.date }}</p>
    </div>
    <div class="body">
      <img v-if="post.image !== '#'" :src="post.image" alt="Post picture"/>
      <p>{{ post.body }}</p>
    </div>
    <div class="footer">
      <input v-on:click="likePost(post.id)" type="image" src="/res/images/like.png" alt="Like button"/>
      <p v-if="post.likes === 1">{{ post.likes }} like</p>
      <p v-else>{{ post.likes }} likes</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: ['post'],
  methods: {
    likePost(postId) {
      this.$store.dispatch("increaseLikeAction", postId)
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
  border-radius: 15px;
  gap: 1vh;
  padding: 2%;
}

.header, .footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header img {
  width: 3rem;
  height: auto;
  border-radius: 1rem;
}

.body img {
  width: 100%;
  object-fit: contain;
}

.body p {
  text-align: left;
}

p {
  font-size: large;
}

input {
  width: 2rem;
  height: auto;
}
</style>