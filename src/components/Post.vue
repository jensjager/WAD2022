<template>
  <article>
    <div class="header">
      <p>Dec 2, 2022</p>
    </div>
    <p>Homework 4 is too much work</p>
  </article>
</template>

<script>
export default {
  name: 'Post',
}
</script>

<style scoped>
article {
  box-sizing: border-box;
  padding: 0 5% 0 5%;
  border-radius: 15px;
  background-color: gainsboro;
  text-align: start;
  font-size: larger;
}

.header {
  display: flex;
  justify-content: end;
}
</style>