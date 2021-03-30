<template>
  <div class="flex flex-row my-3 w-90 mx-1 bg-transparent border-2 border-blue-200 border-opacity-75 items-center shadow-md transform hover:scale-105 cursor-pointer">
    <div
      class="flex w-48  cursor-pointer  p-2 " 
    >
      <img :src="data.image_url" alt="" class="w-full " />
    </div>

    <div
      class="w-48 p-1 flex flex-col bg-transparent h-60 items-center  text-white"
    >
      <div class="absolute text-right font-bold text-md top-1 right-1">
        <a
          class="py-1 px-2 text-white hover:bg-blue-50 hover:text-blue-500"
          :href="data.url"
          target="_blank"
          :class="
            data.score > 8
              ? 'bg-green-500'
              : data.score < 8 && data.score > 5
              ? 'bg-yellow-500'
              : 'bg-red-500'
          "
        >
          {{ data.score }}
        </a>
      </div>

      <div class="flextext-center h-2/6 ">
        <p class=" mt-5 font-bold text-xl  h-3/6 w-48 truncate ...">
          {{ data.title }}
        </p>
        <p class="text-xs mb-2 ">
          {{ data.type }} ({{ data.episodes }} episodes)</p> <p class="text-xs mb-2 "> ({{ data.rated }})</p>
        
      </div>
      <div class="text-sm w-48 h-4/6 my-2 pr-1">
        <p class="w-full h-full overflow-clip overflow-hidden ...">
          {{ data.synopsis }}
        </p>
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