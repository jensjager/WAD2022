<template>
  <div class="home">
    <div class="post-buttons">
      <button @click="logout">Logout</button>
    </div>
    <AllPostsComponent/>
    <div class="post-buttons">
      <button @click="addPost">Add post</button>
      <button @click="deletePosts">Delete all</button>
    </div>
  </div>
</template>

<script>
import AllPostsComponent from '@/components/AllPostsComponent.vue';
import store from '@/store';

export default {
  name: 'HomeComponent',
  components: {
    AllPostsComponent
  },
  methods: {
    logout() {
      fetch('http://localhost:3000/auth/logout', {
        credentials: "include"
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            store.commit('setUserId', '')
            console.log('jwt removed');
            this.$router.push('/login')
          })
          .catch(e => {
            console.log(e);
            console.log('error with logout')
          })
    },
    addPost() {
      fetch('http://localhost:3000/auth/authenticate', {
        credentials: "include"
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            console.log('passed authentication');
            this.$router.push('/addPost')
          })
          .catch(e => {
            console.log(e);
            console.log('error with authentication')
          })
    },
    deletePosts() {
      console.log(store.getters.getUserId)
    }
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