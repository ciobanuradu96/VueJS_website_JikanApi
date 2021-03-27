<template>
  <div
    class="flex flex-row m-3 w-11/12 transform hover:scale-105 cursor-pointer bg-blue-50 rounded-3xl"
  >
    <div class="">
      <img :src="data.image_url" alt="" class="rounded-full" />
    </div>
    Name:{{ data.name }} <br />
    {{ data.alternative_names }} <br />
    Anime:{{ data.anime[0].name }} <br />
    Manga:{{ data.manga[0].name }}
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