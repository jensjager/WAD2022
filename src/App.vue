<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Header, Footer}
}
</script>