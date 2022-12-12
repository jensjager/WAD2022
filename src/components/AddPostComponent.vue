<template>
    <div class="form-background">
      <form>
      <h3>Add Post</h3>
      <div class="row">
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
      </div>
      <div class="row">
      <button type="button" @click="addPost">Add Post</button>
    </div>
  
    </form>
  
    </div>
</template>
  
  <script>
  import store from '@/store';
  
  export default {
    name: "AddPostComponent",
    data() {
      return {
        post: {
          user_id: "",
          body: "",
          post_date: "",
        },
      };
    },
    methods: {
      addPost() {
        let user_id = this.$store.getters['getUserId'];
        var data = {
          user_id: user_id,
          body: this.post.body,
          post_date: new Date(),
        };
        fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error with adding a post");
        });
      },
    },
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
    font-size: larger;
    margin: 0;
  }
  </style>