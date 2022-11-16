<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/signup">Sign up</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 94vw;
  height: 10vh;
  background-color: gray;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  padding: 0 3vw 0 3vw;
  font-size: x-large;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>