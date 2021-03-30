<template>
  <div class="flex flex-col items-center my-auto ">

      <div class="mx-4 mt-60">  
      <img src="https://pbs.twimg.com/media/BFKtmT2CMAAoSbE?format=jpg&name=900x900" 
      class="rounded-full w-44 h-44 border-2 border-white shadow-md">
      </div>
      <div class="m-4"> 
    <p class="text-4xl text-blue-50 font-bold">Welcome to animeDb</p>
    <p class="text-sm text-center text-blue-300"> this site is powered by Jikan API<i class="fab fa-github text-xl p-1"></i>&<i class="fab fa-vuejs text-xl p-1"></i></p>
    </div>
   
   <div class="text-center text-lg p-3 text-blue-100"> 
    <p>    
    Jikan (時間) is an open-source PHP & REST API for the “most active online anime + 
    manga community and database” — MyAnimeList.net. It parses the website to satisfy 
    the need for an API.
    </p>
   </div>
      <p class="mt-60 text-3xl text-blue-50">Most puplar anime</p>
    <carousel class=" w-96 mb-60  bg-blue-500 border-2  "  :perPage="2" :navigationEnabled="true" :paginationEnabled="false">

      <slide v-for="(results, index) in data"
        :key="index" class=""
       >
       <div class="flex flex-col items-center p-4"> 
       <img :src="data[index].image_url" alt="" class="" />
        <p class="text-xl text-center text-white"> {{data[index].title}}</p>
        </div>
      </slide>
      </carousel>

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import axios from "axios";

export default {
  components: {
    Carousel,
    Slide
    },
  data() {
    return {
      data: null,
    };
  },
  created() {
    axios
      .get("https://api.jikan.moe/v3/top/anime/1/bypopularity")
      .then((response) => {
        this.data = response.data.top;
      });
  },
};
</script>
