<template>
  <main>
    <div>
      <h2>WAD 2022 - Homework 4</h2>
      <h3>Team AA</h3>
      <p>Jens Jäger</p>
      <p>Taavi Eistre</p>
      <p>Jan Markus Rokka</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 0 7vh 0;
  width: 100%;
  min-height: 78vh;
  font-size: larger;
}

div {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5% 3% 3% 3%;
  border-radius: 20px;
  width: 80%;
  height: 40vh;
  gap: 7.5%;
  background-color: gainsboro;
}

h2, h3, p {
  margin: 0;
}
</style>

<script>
export default {
  name: 'Contacts'
}
</script>