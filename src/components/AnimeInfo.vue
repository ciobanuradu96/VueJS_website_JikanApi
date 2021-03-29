<template>
  <div
    class="flex flex-row m-3 w-9/12 items-center transform hover:scale-105 cursor-pointer"
  >
    <div class="relative w-2/5">
      <img :src="data.image_url" alt="" class="w-32 shadow-md" />
         <div class="absolute text-right font-bold text-md top-0 right-2" >
        <a
          class="m-1 ml-48 py-1 px-2 text-white   hover:bg-blue-50 hover:text-blue-500"
          :href="data.url"
          target="_blank"
          :class="data.score>8 ? 'bg-green-500': data.score<8 && data.score>5 ? 'bg-yellow-500':'bg-red-500'"
        >
          {{ data.score }}
        </a>
      </div>
    </div>
 
    <div class="mx-1 w-3/5 flex flex-col bg-blue-50 shadow-md max-h-40 items-center">
      
      <div class="text-center p-2 font-bold text-2xl mt-1 mb-4 text-yellow-500">
        {{ data.title }}
      </div>
      <div class="text-md m-2">
        <p>{{ data.type }} ({{ data.episodes }} episodes)</p>
        <p>Rated: {{ data.rated }}</p>
        <br />
        <!-- {{ Data.start_date }} <br />
        {{ Data.end_date }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style>
</style>