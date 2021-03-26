<template>
<div> 
  <div class="bg-red-100 p-5">
      <form action="" v-on:submit.prevent>
          <input type="text" v-model="searchValue">
          <button class="bg-red-300" @click="searchAnime(searchValue)">Search</button>
      </form>
     </div>  
    <Animeinfo v-for="(results,index) in Data" :key="index" :Data="Data[index]"/>
    
 </div>
</template>

<script>
import axios from 'axios';
import Animeinfo from './AnimeInfo.vue'
export default {
    components:{
        Animeinfo
    },
    data(){
        return{
            searchValue:"",
            Data:[]
        }
    },
    methods:{
        searchAnime(searchValue){
            axios.get("https://api.jikan.moe/v3/search/anime?q="+searchValue+"&type=TV&limit=5&order_by=title").then(
                response=>{
                    this.Data=response.data.results;
                })
        },
        }
    }

</script>

