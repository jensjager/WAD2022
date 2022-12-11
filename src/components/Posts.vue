<template>
    <div class="Posts">
        <div v-for="(post, index) in posts" :key="post.post_id" @click="goToPost(index)">
          <article>
            <div class="header">
              <p> {{ new Date(post.post_date).toLocaleDateString() }} </p>
            </div>
            <p class="body"> {{ post.body }} </p>
          </article>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "Posts",
    data() {
      return {
        posts: [],
      };
    },
    methods: {
      fetchPosts() {
        fetch(`http://localhost:3000/api/posts`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
      },
      goToPost(id) {
        this.$router.push('/posts/'+id)
      }
    },
    mounted() {
      this.fetchPosts();
      console.log("mounted");
    },
  };
  </script>


<style scoped>
article {
  box-sizing: border-box;
  padding: 0 5% 0 5%;
  border-radius: 15px;
  background-color: gainsboro;
  text-align: end;
  font-size: larger;
}

.body {
  padding-bottom: 1%;
}

.header {
  display: flex;
}
</style>