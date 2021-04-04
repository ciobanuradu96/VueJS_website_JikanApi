<template>
  <div>
    <div class="ml-5">
      <p class="text-3xl text-blue-50 m-3">Top 50 {{ title }}</p>
    </div>
    <!-- Carousel -->
    <carousel
      class="flex flex-row items-center w-64 mx-auto  bg-transparent h-80"
      :loop="true"
      :autoplay="true"
      :autoplayTimeout="4000"
      :autoplayHoverPause="true"
      :perPage="1"
      :navigationEnabled="true"
      :paginationEnabled="false"
    >
    <!-- Slide -->
      <slide v-for="(results, index) in data" :key="index" class="bg-transparent h-80 w-20">
        <!-- Content inside the Slide -->
        <router-link :to="`/anime/${data[index].mal_id}`">
        <!-- IMG -->
          <div
            class="mx-auto mt-5  relative bg-no-repeat bg-center bg-cover h-72 w-48 m-1 border-2 transform hover:scale-105"
            :style="{ backgroundImage: `url(${data[index].image_url})` }"
          >
          <!-- SCORE -->
            <div class="absolute top-0 right-0">
              <a
                class="py-1 px-2 text-white hover:bg-blue-50 hover:text-blue-500"
                :href="data.url"
                target="_blank"
                :class="
                  data[index].score > 8
                    ? 'bg-green-500'
                    : data[index].score < 8 && data[index].score > 5
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                "
              >
                {{ data[index].score }}
              </a>
            </div>
            <!-- RANK -->
            <div class="absolute top-0 left-0 bg-blue-400 p-1">
              <p class="text-blue-50 font-bold text-lg">
                #{{ data[index].rank }}
              </p>
            </div>
            <!-- Tittle -->
            <div class="absolute bottom-0 left-0 right-0">
              <p
                class="w-full font-bold text-xl text-center text-blue-50 bg-blue-400 h-7 truncate ..."
              >
                {{ data[index].title }}
              </p>
            </div>
          </div>
        </router-link>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    data: null,
    title: null,
  },
};
</script>

