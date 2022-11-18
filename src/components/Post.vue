<template>
  <article>
    <div class="header">
      <img class="avatar" src="https://i.ibb.co/8DY3YCm/user-avatar.png" alt="User avatar"/>
      <p>Date</p>
    </div>
    <div class="body">
      <img class="image" src="https://pbs.twimg.com/media/EbqR7PPWoAUzh4Y?format=jpg&name=large" alt="Post picture"/>
      <p>Post body</p>
    </div>
    <div class="footer">
      <input type="image" :src="require('@/res/like.png')" alt="Like button"/>
      <p>0 likes</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Post"
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