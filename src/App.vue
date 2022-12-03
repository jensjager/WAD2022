<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <router-view/>
  <footer>Bossid © 2022</footer>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: fixed;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 10vh;
  background-color: gray;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: x-large;
  gap: 5vw;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

a.router-link-exact-active, a:hover {
  color: #42b983;
}

footer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background-color: gray;
  border-radius: 15px;
}
</style>