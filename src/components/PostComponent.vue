<template>
    <div class="form-background">
      <form>
      <h3>Add Post</h3>
      <div class="row">
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
      </div>
      <div class="row">
      <button type="button" @click="eee()">test Post</button>
      <button type="button" @click="updatePost()">Update Post</button>
      <button type="button" @click="deletePost()">Delete Post</button>
    </div>
  
    </form>
  
    </div>
</template>
  
  <script>
  import store from '@/store';
  import login from "@/views/Login";

  export default  {
    name: "Post",
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
      eee() {
        console.log(this.post)
      },
      fetchAPost(id) {
        // fetch one post with the specied id (id)
        fetch(`http://localhost:3000/api/posts/${id}`)
            .then((response) => response.json())
            .then((data) => (this.post = data))
            .catch((err) => console.log(err.message));
      },
      updatePost() {
        // using Fetch - put method - updates a specific post based on the passed id and the specified body
        fetch(`http://localhost:3000/api/posts/${this.post.post_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.post),
        })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/api/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
      },
      deletePost() {
        // using Fetch - delete method - delets a specific post based on the passed id
        fetch(`http://localhost:3000/api/posts/${this.post.post_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
              console.log(response.data);
              // We are using the router instance of this element to navigate to a different URL location
              this.$router.push("/api/allposts");
            })
            .catch((e) => {
              console.log(e);
            });
      },
    },
    mounted() {
      this.fetchAPost(this.$route.params.id);
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
    font-size: larger;
    margin: 0;
  }
  </style>