<template>
  <article>
    <div class="header">
      <img class="avatar" v-bind:src="post.userAvatar" alt="User avatar"/>
      <p>{{ post.date }}</p>
    </div>
    <div class="body">
      <img class="image" v-if="post.image !== '#'" v-bind:src="post.image" alt="Post picture"/>
      <p>{{ post.body }}</p>
    </div>
    <div class="footer">
      <input type="image" :src="require('@/res/like.png')" alt="Like button"/>
      <p>0 likes</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: ['post']
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

.avatar {
  width: 3rem;
  height: auto;
  border-radius: 1rem;
}

.image {
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