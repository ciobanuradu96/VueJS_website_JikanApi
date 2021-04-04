<template>
  <div class="container min-h-full">
    <div v-if="type === 'anime'" class="flex flex-col items-center">
      <Animeinfo
        v-for="(results, index) in data"
        :key="index"
        :data="data[index]"
      />
    </div>
    <div v-else-if="type === 'character'">
     
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Animeinfo from "../components/AnimeInfo.vue";

export default {
  components: {
    Animeinfo,
  
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.searchValue = this.$route.params.searchValue;
    this.type = this.$route.params.type;
    axios
      .get(
        `https://api.jikan.moe/v3/search/${this.type}?q=${this.searchValue}**`
      )
      .then(
        (response) => {
          this.data = response.data.results;
        },
        (error) => {
          console.log(error);
        }
      );
  },
  methods: {

  },
};
</script>

<style>
</style>