<template>
  <div class="flex flex-col">
    <div class="p-1 text-center">
      <form action="" v-on:submit.prevent>
        <input
          class="p-2 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 mx-1 text-xl"
          type="text"
          v-model="searchValue"
        />
        <button
          class="bg-yellow-500 p-2 m-2 rounded-xl font-bold text-white shadow-md hover:bg-white hover:text-yellow-500 transform hover:scale-110"
          @click="searchAnime(searchValue)"
        >
          Search
        </button>
      </form>
    </div>
    <Animeinfo
      v-for="(results, index) in Data"
      :key="index"
      :Data="Data[index]"
    />
  </div>
</template>

<script>
import axios from "axios";
import Animeinfo from "./AnimeInfo.vue";
export default {
  components: {
    Animeinfo,
  },
  data() {
    return {
      searchValue: "",
      Data: [],
    };
  },
  methods: {
    searchAnime(searchValue) {
      axios
        .get(
          "https://api.jikan.moe/v3/search/anime?q=" +
            searchValue +
            "&limit=5&order_by=title"
        )
        .then((response) => {
          this.Data = response.data.results;
        });
    },
  },
};
</script>

