<template>
  <div class="form-background">
    <form @submit.prevent="login">
      <div class="row">
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="Email" v-model="email" required>
      </div>
      <div class="row">
        <label for="password">Password</label>
        <input type="text" name="password" placeholder="Password" v-model="password" required>
      </div>
      <div class="row">
        <button type="submit">Login</button>
        <p>Or</p>
        <button type="button" @click="this.$router.push('/signup')">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data: () => {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password
      };

      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)
      })
          .then(response => response.json)
          .then(data => {
            console.log(data);
            this.$router.push("/");
          })
          .catch(e => {
            console.log(e);
            console.log("error with login")
          })
    }
  }
}
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
  text-align: right;
}

input, button, label, p {
  font-size: larger;
  margin: 0;
}
</style>