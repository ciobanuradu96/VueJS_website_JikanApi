<template>
  <div class="flex flex-row my-3 w-9/12 mx-1 items-center">
    <div
      class="relative w-2/5 transform hover:scale-105 cursor-pointer shadow-md"
    >
      <img :src="data.image_url" alt="" class="w-full shadow-md" />
    </div>

    <div
      class="w-3/5 ml-3 flex flex-col bg-blue-50 shadow-md h-44 items-center transform hover:scale-105 cursor-pointer"
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

      <div class="text-center h-3/6">
        <p class="p-2 font-bold text-2xl text-gray-600 h-3/6 w-48 truncate ...">
          {{ data.title }}
        </p>
        <p class="text-sm text-gray-600">
          {{ data.type }} ({{ data.episodes }} episodes) ({{ data.rated }})
        </p>
      </div>
      <div class="text-md w-full h-3/6 p-2 text-justify">
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