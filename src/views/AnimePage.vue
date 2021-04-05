<template>
  <div
    class="flex flex-col w-screen h-full"
    v-if="animeData != null"
  >
    <div class="flex flex-col my-auto items-center p-5 bg-blue-500 h-screen w-screen">
      <div class="flex flex-col items-center my-auto">
        <!-- Anime picture -->
        <div
          class="w-60 h-60 rounded-full bg-center bg-cover bg-no-repeat border-2 shadow-md my-2"
          :style="{ backgroundImage: `url(${animeData.image_url})` }"
        ></div>
        <!-- Anime title -->
        <div class="font-bold text-5xl text-blue-50 m-2 text-center mb-5">
          {{ animeData.title }}
        </div>
        <!-- Anime details boxes -->
        <div class="space-x-4 text-center text-blue-100">
          <div class="inline-block p-2 m-2 border-2 rounded-3xl shadow-md">
            Score: {{ animeData.score }}
          </div>
          <div class="inline-block p-2 m-2 border-2 rounded-3xl shadow-md">
            {{ animeData.status }}
          </div>
          <div class="inline-block p-2 m-2 border-2 rounded-3xl shadow-md">
            Popularity: #{{ animeData.popularity }}
          </div>
          

          <!-- {{ animeData.title_japanese }}
        {{ animeData.title_synonyms }}
        {{ animeData.status }}
        {{ animeData.premiered }}
        {{ animeData.type }} -->
        </div>
          <!-- Anime description -->
        <div
          class="border-2 p-2 text-justify text-blue-100 border-blue-300 w-full my-4 shadow-md rounded-3xl"
        >
          <p
            class="p-2 overflow-clip overflow-hidden ..."
            :class="this.show ? 'h-auto' : 'h-32'"
          >
            {{ animeData.synopsis }}
          </p>
          <p
            class="text-right font-light text-sm text-blue-100 px-2 cursor-pointer"
            :class="this.show ? 'hidden' : ''"
            @click="show = true"
          >
            show more
          </p>
          <p
            class="text-right font-light text-sm text-blue-100 px-2 cursor-pointer"
            :class="this.show ? '' : 'hidden'"
            @click="show = false"
          >
            show less
          </p>
        </div>
      </div>
    </div>
    <!-- Second Part of the Anime Page -->
    <div class="flex flex-col my-auto items-center p-5 bg-blue-400 h-full">
      <div class="flex flex-col items-center my-auto">
        <!-- Anime trailer -->
        <div class="w-full">
          <iframe
            v-if="animeData.trailer_url != null"
            :src="animeData.trailer_url + '&mute=1'"
            class="mx-auto"
          ></iframe>
        </div>
        <!-- Characthers area -->
        <div class="flex flex-col items-center">
          <div class="m-2 font-bold text-3xl text-blue-100">Characthers:</div>
          <!-- Characthers avatars -->
          <div class="flex items-center h-full">
            <div v-for="(n, index) in 2" :key="index">
              <router-link :to="`/characther/${animeCharData[index].mal_id}`">
                <div
                  class="w-24 h-36 m-2 border-2 bg-center rounded-3xl bg-contain bg-no-repeat relative transform hover:scale-110 cursor-pointer"
                  :style="{
                    backgroundImage: `url(${animeCharData[index].image_url})`,
                  }"
                >
                  <div
                    class="absolute bottom-0 left-0 right-0 text-white pb-2 mx-3"
                  >
                    <p
                      class="truncate ... w-full text-center border-2 rounded-md bg-blue-400 px-1 text-sm"
                    >
                      {{ animeCharData[index].name }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
            <!-- VIEW MORE -->
            <div
              class="flex w-24 h-16 m-2 border-2 rounded-3xl items-center transform hover:scale-110 cursor-pointer"
            >
              <p
                class="text-center mx-auto font-bold text-xl text-blue-100"
                :class="this.viewAll ? 'hidden' : ''"
                @click="viewAll = true"
              >
                View all
              </p>
              <p
                class="text-center mx-auto font-bold text-xl text-blue-100"
                :class="this.viewAll ? '' : 'hidden'"
                @click="viewAll = false"
              >
                Hide
              </p>
            </div>
          </div>
          <!-- Hidden view more av atars -->
          <div
            class="grid grid-flow-cols grid-cols-3 auto-rows-max bg-blue-400"
            :class="this.viewAll ? '' : 'hidden'"
          >
            <div
              class="relative flex items-center m-1 bg-blue-400 pb-7 px-3 mx-auto "
              v-for="(n, index) in animeCharData"
              :key="index"
            >
              <router-link :to="`/characther/${animeCharData[index].mal_id}`">
                <div
                  class=" w-16 h-24 bg-contain bg-no-repeat border-2  "
                  :style="{
                    backgroundImage: `url(${animeCharData[index].image_url})`,
                  }"
                ></div>
              </router-link>
              <div class="w-20 absolute bottom-2 left-1 bg-blue-400  border-2 ">
                <p
                  class="text-center text-blue-50 text-sm overflow-ellipsis overflow-hidden ..."
                >
                  {{ animeCharData[index].name }}
                </p>
              </div>
            </div>
            <div
              class="flex items-center cursor-pointer w-18 h-14 my-auto rounded-3xl border-2 m-2"
            >
              <p
                class="text-center mx-auto font-bold text-2xl text-blue-100"
                :class="this.viewAll ? '' : 'hidden'"
                @click="viewAll = false"
              >
                Hide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  watch: {
    $route() {
  
         axios
      .get(`https://api.jikan.moe/v3/anime/${this.$route.params.animeId}`)
      .then((response) => {
        this.animeData = response.data;
      });
    axios
      .get(`https://api.jikan.moe/v3/anime/${this.$route.params.animeId}/characters_staff`)
      .then((response) => {
        this.animeCharData = response.data.characters;
      });
      
      
    },
  },
  data() {
    return {
      animeId: null,
      animeData: null,
      animeCharData: null,
      show: false,
      viewAll: false,
    };
  },
  created() {
    // this.animeId = this.$route.params.animeId;

    // axios
    //   .get(`https://api.jikan.moe/v3/anime/${this.animeId}`)
    //   .then((response) => {
    //     this.animeData = response.data;
    //   });
    // axios
    //   .get(`https://api.jikan.moe/v3/anime/${this.animeId}/characters_staff`)
    //   .then((response) => {
    //     this.animeCharData = response.data.characters;
    //   });
  },
};
</script>

<style>
</style>