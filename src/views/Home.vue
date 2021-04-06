<template>
<div class="flex flex-col items-center "> 
  <div class="flex flex-col   md:mx-auto h-screen ">
    <!-- Welcome section -->
    <div class="flex flex-col items-center  my-auto   "> 
      <div class="rounded-full w-44 h-44 md:w-60 md:h-60 border-2 border-white shadow-md bg-cover bg-center" :style="{backgroundImage:'url(https://pbs.twimg.com/media/BFKtmT2CMAAoSbE?format=jpg&name=900x900)'}"> </div>
  
      <div class="m-4 text-center"> 
        <p class="text-4xl text-blue-50 font-bold md:text-6xl">Welcome to animeDb</p>
        <p class="text-sm text-center text-blue-300"> this site is powered by Jikan API<i class="fab fa-github text-xl p-1"></i>&<i class="fab fa-vuejs text-xl p-1"></i></p>
      </div>
      
      <div class="w-68 text-center text-md p-3 text-blue-100 max-w-md md:text-xl"> 
        <p>    
          Jikan (時間) is an open-source PHP & REST API for the “most active online anime + 
          manga community and database” — MyAnimeList.net. It parses the website to satisfy 
          the need for an API.
          </p>
      </div>
   </div>
  </div>  
  <div class="flex flex-col  bg-blue-400 w-screen h-screen mx-auto"> 
    <div class="flex flex-col  my-auto"> 
    <CarouselTop :data="dataPopular" :title="'Most popular '"/>
    <CarouselTop :data="dataTv" :title="'Best rated anime'"/>
    </div>
  </div>  
</div>  
</template>

<script>

import axios from "axios";
import CarouselTop from "../components/CarrouselTop.vue"

export default {
  components: {
    CarouselTop,

    },
  data() {
    return {
      dataPopular: null,
      dataTv:null,
    
    };
  },
  created() {
    axios
      .get("https://api.jikan.moe/v3/top/anime/1/bypopularity")
      .then((response) => {
        this.dataPopular = response.data.top;
      });

    axios
      .get("https://api.jikan.moe/v3/top/anime/1/tv")
      .then((response) => {
        this.dataTv = response.data.top;
      });
    
  },
};
</script>
