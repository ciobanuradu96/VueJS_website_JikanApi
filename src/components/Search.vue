<template>
  <div class="flex flex-row items-center">
    <select v-model="type" class="w-20 h-8 shadow m-1 text-md">
      <option value="">All</option>
      <option value="anime">Anime</option>
      <option value="manga">Manga</option>
      <option value="character">Character</option>
    </select>
    <input
      class="shadow-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-xl h-8"
      type="text"
      v-model="searchValue"
    />
    <button
      class="h-8 bg-yellow-500 p-2 ml-1 font-bold text-white shadow-md hover:bg-white hover:text-yellow-500 transform hover:scale-110"
      @click="searchAnime(searchValue, type)"
    >
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      searchValue: "",
      type: "anime",
    };
  },
  methods: {
    searchAnime(searchValue, type) {
      axios
        .get(`https://api.jikan.moe/v3/search/${type}?q=${searchValue}`)
        .then((response) => {
          this.$emit("searchEvent", response.data.results, type);
        });
    },
  },
};
</script>

