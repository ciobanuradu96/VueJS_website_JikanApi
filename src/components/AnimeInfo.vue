<template>
  <div class="flex flex-row p-3 text-center bg-blue-100 m-3 shadow-md">
      <div class="w-2/5"> 
      <img :src=Data.image_url alt="">
     </div>
     <div class="m-3 w-3/5"> 
         {{Data.title}}
     <p> Total Episode {{Data.episodes}}</p>
        {{Data.rated}} <br>
        {{Data.start_date}} <br>
        {{Data.end_date}}
     </div>
  </div>
</template>

<script>
export default {
    props:{
        Data:Object
        }

}
</script>

<style>

</style>