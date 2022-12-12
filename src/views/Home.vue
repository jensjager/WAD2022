<template>
  <main>
    <div class='sidebar'/>
    <HomeComponent/>
    <div class='sidebar'/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  padding: 11vh 0 1vh 0;
  min-height: 78vh;
  width: 100%;
  gap: 5vw;
  justify-content: space-around;
}

.sidebar {
  flex: 1;
  background-color: gray;
  border-radius: 15px;
}

@media (max-width: 600px) {
  .sidebar {
    display: none;
  }
}
</style>

<script>
import HomeComponent from '@/components/HomeComponent.vue';

export default {
  name: 'Home',
  components: {
    HomeComponent
  }
}
</script>