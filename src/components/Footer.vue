<template>
  <footer>
    <p>Bossid © 2022</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  height: 10vh;
  background-color: gray;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 0 3% 0 3%;
}

p {
  font-size: large;
}
</style>