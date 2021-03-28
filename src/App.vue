<template>
  <div class="container min-h-full">
    <div class="flex flex-col bg-blue-100 w-full h-full">
      <div class="flex bg-blue-100 items-center p-1">
        <div class="text-5xl font-bold text-yellow-500 mr-16 p-1">animeDb</div>
        <Search @searchEvent="onEvent" />
      </div>
      <div v-if="type === 'anime'" class="flex flex-col">
        <Animeinfo
          v-for="(results, index) in data"
          :key="index"
          :data="data[index]"
        />
      </div>
      <div v-else-if="type === 'character'">
        <CharInfo
          v-for="(results, index) in data"
          :key="index"
          :data="data[index]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CharInfo from "./components/CharInfo.vue";
import Animeinfo from "./components/AnimeInfo.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  data() {
    return {
      data: [],
      type: "",
    };
  },
  components: {
    Search,
    Animeinfo,
    CharInfo,
  },
  methods: {
    onEvent(data, type) {
      this.data = data;
      this.type = type;
    },
  },
};
</script>

<style>
</style>
