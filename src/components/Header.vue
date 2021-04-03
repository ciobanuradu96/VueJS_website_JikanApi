<template>
  <div class="flex flex-col">
    <div class="flex bg-blue-500 items-center p-1">
      <!-- Logo -->
      <div class="text-5xl font-bold text-blue-100 mr-16 p-1">
        <router-link :to="'/'"> animeDb </router-link>
      </div>
      <!-- Div containing all the search items -->
      <div
        class="flex relative flex-row items-center shadow-md text-xl h-10 w-44 bg-blue-400 text-white p-2 border-2 border-white border-opacity-50 rounded-md"
      >
        <!-- Input field for search -->
        <input
          class="focus:outline-none w-full h-full bg-transparent"
          type="text"
          v-model="searchValue"
        />

        <!-- Search Button -->
        <!-- Need Search all Page -->
        <i
          class="fas py-3 fa-search h-10 focus:outline-none font-bold transform"
        ></i>

        <!-- Search dropdown box -->
        <div
          v-if="animeData != null"
          class="ml-48 absolute top-12 right-0 border-2"
        >
          <!-- Anime results -->
          <p>Animes:</p>
          <SearchDropDown
            v-for="(results, index) in 3"
            :key="index"
            :img="animeData[index].image_url"
            :name="animeData[index].title"
            :type="'anime'"
            :id="animeData[index].mal_id"
            @goTo="click"
          />
          <!-- Char results -->
          <p>Characthers:</p>
          <SearchDropDown
            v-for="(results, index) in 3"
            :key="index"
            :img="charData[index].image_url"
            :name="charData[index].name"
            :type="'characther'"
            :id="charData[index].mal_id"
            @goTo="click"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchDropDown from "./SearchDropDown.vue";

export default {
  watch: {
    searchValue: function () {
      axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${this.searchValue}**`)
        .then(
          (response) => {
            this.animeData = response.data.results;
          },
          (error) => {
            console.log(error);
            this.animeData = null;
          }
        );

      axios
        .get(
          `https://api.jikan.moe/v3/search/character?q=${this.searchValue}**`
        )
        .then(
          (response) => {
            this.charData = response.data.results;
          },
          (error) => {
            console.log(error);
            this.charData = null;
          }
        );
    },
  },
  components: {
    SearchDropDown,
  },
  data() {
    return {
      animeData: null,
      charData: null,
      searchValue: "",
      type: "anime",
    };
  },
  methods: {
    click(type, id) {
      this.$router.push(`/${type}/${id}`);
      this.animeData = null;
      this.charData = null;
      this.searchValue = "";
    },
  },
};
</script>

