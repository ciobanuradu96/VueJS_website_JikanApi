<template>
  <div class="container flex flex-col bg-blue-500 w-full h-full items-center">
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
