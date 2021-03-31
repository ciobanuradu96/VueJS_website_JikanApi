<template>
  <div class="flex w-screen h-screen ">
      <div class="flex flex-col my-auto items-center m-5"> 
        <div class="flex flex-col "> 
            <div class="w-screen">
                <iframe :src="animeData.trailer_url+'&mute=1'" class=" w-2/4"></iframe>
            </div>
            <div class=""> 
                <img :src="animeData.image_url" alt="" class="" />
            </div>
            <div class="flex flex-col"> 
                <div class="font-bold text-5xl text-blue-50 m-2"> 
                    {{animeData.title}}
                </div>
                <div class="w-4/5 border-2 p-2 text-justify text-blue-100 border-blue-300"> 
                    {{animeData.title_japanese}}
                    {{animeData.synopsis}}
                </div>
            </div>  
        </div>  
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            animeId:null,
            animeData:null
        }
    },
    created(){
         
        this.animeId=this.$route.params.animeId

       
        axios.get(`https://api.jikan.moe/v3/anime/${this.animeId}`).then((response) => {
        this.animeData = response.data;
      });
    }
}
</script>

<style>

</style>