<template>
  <div class="flex flex-col bg-blue-100 w-full h-screen">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>
