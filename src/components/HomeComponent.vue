<template>
  <div class="home">
    <div class="post-buttons">
      <button @click="logout">Logout</button>
    </div>
    <div class="posts">
      <article class="post" v-for="post in posts" :key="post.post_id" @click="goToPost(post)">
        <div class="header">
          <p> {{ new Date(post.post_date).toLocaleDateString() }} </p>
        </div>
        <p class="body"> {{ post.body }} </p>
      </article>
    </div>
    <div class="post-buttons">
      <button @click="addPost">Add post</button>
      <button @click="deletePosts">Delete all</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts`)
          .then(response => response.json())
          .then(data => this.posts = data)
          .catch(error => console.log(error.message));
    },
    logout() {
      fetch('http://localhost:3000/auth/logout', {
        credentials: "include"
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.$router.push('/login')
          })
          .catch(e => {
            console.log(e);
          })
    },
    goToPost(post) {
      this.$router.push('/posts/' + post.post_id)
    },
    addPost() {
      this.$router.push('/addPost')
    },
    deletePosts() {
      fetch(`http://localhost:3000/api/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.fetchPosts();
          })
          .catch(error => {
            console.log(error);
          });
    }
  },
  mounted() {
    this.fetchPosts();
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

.posts {
  display: flex;
  flex-direction: column;
  gap: 1vh
}

article {
  box-sizing: border-box;
  padding: 5%;
  border-radius: 15px;
  background-color: gainsboro;
  text-align: start;
  font-size: larger;
}

.header {
  display: flex;
  justify-content: flex-end;
}

p {
  margin: 0;
}

.post:hover {
  cursor: pointer;
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