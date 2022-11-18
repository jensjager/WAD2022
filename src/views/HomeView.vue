<template>
  <div class="home">
    <Sidebar/>
    <Content/>
    <Sidebar/>
  </div>
</template>

<style scoped>
.home {
  padding-top: 11vh;
  padding-bottom: 1vh;
  min-height: 78vh;
  width: 100%;
  display: flex;
  gap: 5vw;
  justify-content: space-around;
}
</style>

<script>
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default {
  name: 'HomeView',
  components: {
    Content,
    Sidebar
  }
}
</script>
