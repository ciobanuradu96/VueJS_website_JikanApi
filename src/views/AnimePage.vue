<template>
  <div class="flex w-screen h-screen ">
    <div class="flex flex-col my-auto items-center p-5  bg-blue-500 ">
      <div class="flex flex-col items-center ">

        <div class="w-60 h-60 rounded-3xl  bg-center bg-content border-2 shadow-md" :style="{backgroundImage:`url(${animeData.image_url})`}">
        </div>
        <div class="font-bold text-5xl text-blue-50 m-2 text-center">
          {{ animeData.title }}
        </div>
        <div class="space-x-4 text-center text-blue-100">
            <div class="inline-block p-2 border-2 rounded-3xl shadow-md">Score: {{ animeData.score }}</div>
            <div class="inline-block p-2 border-2 rounded-3xl shadow-md">Popularity: #{{ animeData.popularity }}</div>
            <div class="inline-block p-2 border-2 rounded-3xl shadow-md">{{ animeData.status }}</div>
        
        <!-- {{ animeData.title_japanese }}
        {{ animeData.title_synonyms }}
        {{ animeData.status }}
        {{ animeData.premiered }}
        {{ animeData.type }} -->

        </div>
        
        <div class="border-2 p-2 text-justify text-blue-100 border-blue-300 w-full my-4 shadow-md rounded-3xl">
          <p class="p-2  overflow-clip overflow-hidden ..." :class="this.show ?'h-auto':'h-32'">  {{ animeData.synopsis }}</p>
          <p class="text-right font-light text-sm text-blue-100 px-2 cursor-pointer" :class="this.show ? 'hidden':'' " @click="show=true">show more</p>
          <p class="text-right font-light text-sm text-blue-100 px-2 cursor-pointer" :class="this.show ? '':'hidden' " @click="show=false">show less</p>
        </div>
        <div class="w-full">
            <iframe :src="animeData.trailer_url+'&mute=1'" class=" mx-auto"></iframe>
        </div>
        <div class="flex flex-col items-center"> 
            <div>Characthers</div>
            <div class="flex"> 
                <div class="w-24 h-36 m-2 border-2 bg-center rounded-3xl bg-contain bg-no-repeat" v-for="(n,index) in 2" :key="index" :style="{backgroundImage:`url(${animeCharData[n].image_url})`}">
            </div>        
            </div>
        </div>    
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      animeId: null,
      animeData: null,
      animeCharData: null,
      show:false
    };
  },
  created() {
    this.animeId = this.$route.params.animeId;

    axios
      .get(`https://api.jikan.moe/v3/anime/${this.animeId}`)
      .then((response) => {
        this.animeData = response.data;
      });
      axios
      .get(`https://api.jikan.moe/v3/anime/${this.animeId}/characters_staff`)
      .then((response) => {
        this.animeCharData = response.data.characters;
      });  

  },
};
</script>

<style>
</style>