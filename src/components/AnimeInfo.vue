<template>
  <div
    class="flex flex-row m-3 w-11/12 transform hover:scale-105 cursor-pointer bg-blue-50 rounded-3xl"
  >
    <div class="w-2/5">
      <img :src="Data.image_url" alt="" class="rounded-3xl" />
    </div>
    <div class="mx-1 mb-5 mt-2 w-3/5 flex flex-col">
      <div class="text-right font-bold text-lg">
        <a
          class="m-1 ml-48 py-1 px-2 text-white bg-blue-500 rounded-xl hover:bg-blue-50 hover:text-blue-500"
          :href="Data.url"
          target="_blank"
        >
          {{ Data.score }} on MAL
        </a>
      </div>
      <div class="text-center p-2 font-bold text-4xl mt-1 mb-4 text-yellow-500">
        {{ Data.title }}
      </div>
      <div class="text-lg m-2">
        <p>{{ Data.type }} ({{ Data.episodes }} episodes)</p>
        <p>Rated: {{ Data.rated }}</p>
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
    Data: Object,
  },
};
</script>

<style>
</style>