<template>
  <div class="form-background">
    <form>
      <h3>Add Post</h3>
      <div class="row">
        <label for="body">Body:</label>
        <input name="body" type="text" id="body" required v-model="post.body"/>
      </div>
      <div class="row">
        <button type="button" @click="updatePost()">Update Post</button>
        <button type="button" @click="deletePost()">Delete Post</button>
      </div>
      <p v-if="validUser">{{ validUser }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "APostComponent",
  data() {
    return {
      post: {
        body: "",
        post_date: "",
      },
      validUser: ""
    };
  },
  methods: {
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.post_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(this.post),
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if (data.error) {
              this.validUser = data.error
            } else {
              this.$router.push("/");
            }
          })
          .catch(error => {
            console.log(error);
          });
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.post_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if (data.error) {
              this.validUser = data.error
            } else {
              this.$router.push("/");
            }
          })
          .catch(error => {
            console.log(error);
          });
    },
  },
  mounted() {
    fetch(`http://localhost:3000/api/posts/${this.$route.params.id}`)
        .then(response => response.json())
        .then(data => this.post = data)
        .catch(error => console.log(error.message));
  }
};
</script>

<style scoped>
.form-background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50vh;
  border-radius: 15px;
  background-color: gainsboro;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EBF1DF;
  border-radius: 15px;
  width: 80%;
  height: 70%;
  gap: 3vh;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  width: 90%;
}

input {
  padding: 1rem;
  border-radius: 15px;
  border: 0;
  width: 50%;
}

button {
  width: 50%;
  max-width: 300px;
  height: 4vh;
  border-radius: 15px;
  background-color: #8badda;
  border: 0;
  cursor: pointer;
}

label {
  width: 30%;
  text-align: center;
}

input, button, label, p {
  font-size: large;
  margin: 0;
}
</style>