<template>
  <div class="flex bg-blue-500 items-center mx-auto p-1 w-screen">
    <!-- Logo -->
    <div class="text-5xl font-bold text-blue-100 mr-16 p-1 mx-auto">
      <router-link :to="'/'"> animeDb </router-link>
    </div>
    <!-- Div containing all the search items -->
    <div
      class="flex relative flex-row items-center shadow-md text-xl h-10 w-44 bg-blue-400 text-white p-2 border-2 border-white border-opacity-50 rounded-md mx-auto" 
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
        v-if="animeData != null && charData != null "
        class="ml-48 absolute top-12 right-0 border-2 bg-blue-400 border-t-0"
       
      >
        <!-- Anime results -->
        <div class="bg-blue-50 mb-1">
          <p class="text-blue-400 font-bold">Animes:</p>
        </div>

        <SearchDropDown
          v-for="(results, index) in 3"
          :key="'anime' + index"
          :img="animeData[index].image_url"
          :name="animeData[index].title"
          :type="'anime'"
          :id="animeData[index].mal_id"
          @goTo="click"
        />
        <!-- Char results -->
        <div class="bg-blue-50 my-1">
          <p class="text-blue-400 font-bold">Characthers:</p>
        </div>
        <SearchDropDown
          v-for="(results, index) in 3"
          :key="'char' + index"
          :img="charData[index].image_url"
          :name="charData[index].name"
          :type="'characther'"
          :id="charData[index].mal_id"
          @goTo="click"
        />
        <div class="bg-blue-400 mt-1">
          <p class="text-blue-50 text-center font-bold">View All results</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";

import SearchDropDown from "./SearchDropDown.vue";

export default {
  watch: {
    searchValue: debounce(async function () {
      if (this.searchValue != "") {
        let a = await axios.get(
          `https://api.jikan.moe/v3/search/anime?q=${this.searchValue}**`
        );
        this.animeData = a.data.results;

        let b = await axios.get(
          `https://api.jikan.moe/v3/search/character?q=${this.searchValue}**`
        );
        this.charData = b.data.results;
      } else {
        this.animeData = null;
        this.charData = null;
      }
    }, 500),
  },
  components: {
    SearchDropDown,
  },
  data() {
    return {
      animeData: null,
      charData: null,
      searchValue: "",
  
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

