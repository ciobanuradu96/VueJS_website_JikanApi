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
      <CharInfo
        v-for="(results, index) in data"
        :key="index"
        :data="data[index]"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CharInfo from "../components/CharInfo.vue";
import Animeinfo from "../components/AnimeInfo.vue";

export default {
  components: {
    Animeinfo,
    CharInfo,
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    // EventBus.$on("searchEvent", this.onEvent);
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
    // onEvent(data, type) {
    //   this.data = data;
    //   this.type = type;
    // },
  },
};
</script>

<style>
</style>