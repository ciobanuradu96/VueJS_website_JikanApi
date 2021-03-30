<template>
<div class="flex bg-blue-500 items-center p-1">

    <div class="text-5xl font-bold text-blue-100 mr-16 p-1">
      <router-link :to="'/'"> animeDb </router-link>
    </div>
    <div class="flex flex-row items-center  shadow-md text-xl h-10 w-44 bg-blue-400 text-white p-2 border-2 border-white border-opacity-50 rounded-md">
       <input
        class=" focus:outline-none  w-full h-full bg-transparent "
        type="text"
        v-model="searchValue"
      />
      <select v-model="type" class="w-12 h-10  bg-transparent border-0 focus:outline-none text-white m-1 text-sm">
        <option value="anime" class="bg-blue-400 ">Anime</option>
        <option value="character" class="bg-blue-400">Character</option>
      </select>
     
     
      <router-link :to="'/SearchResult'" >
        <button
          class="h-2  p-1 focus:outline-none font-bold transform hover:scale-105"
          @click="searchAnime(searchValue, type)"
        >
          <i class="fas fa-search "></i>
        </button>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { EventBus } from "@/event-bus";

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

