<template>
<div class="flex flex-col bg-blue-100 w-full h-full">
      <div class="flex bg-blue-100 items-center p-1">
        <div class="text-5xl font-bold text-yellow-500 mr-16 p-1">animeDb</div>
        <div class="flex flex-row items-center">
    <select v-model="type" class="w-20 h-8 shadow m-1 text-md">
      <option value="">All</option>
      <option value="anime">Anime</option>
      <option value="manga">Manga</option>
      <option value="character">Character</option>
    </select>
    <input
      class="shadow-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-xl h-8 w-16"
      type="text"
      v-model="searchValue"
    />
  <router-link :to="'/SearchResult'">
    <button
      class="h-8 bg-yellow-500 p-2 ml-1 font-bold text-white shadow-md hover:bg-white hover:text-yellow-500 transform hover:scale-110"
      @click="searchAnime(searchValue, type)"
    >
      <i class="fas fa-search"></i>
    </button>
  </router-link>
  </div>
      </div>
      </div>

  
</template>

<script>
import axios from "axios";
import { EventBus } from '@/event-bus';

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
          EventBus.$emit("searchEvent", response.data.results, type);
        });
    },
  },
};
</script>

