<template>
  <div class="flex flex-col w-screen h-full bg-blue-400 items-center mx-auto">
    <div
      class="flex flex-col my-auto items-center bg-blue-500 w-screen h-screen"
    >
      <div class="flex flex-col items-center my-auto">
        <div
          class="w-60 h-80 rounded-3xl bg-center bg-cover bg-no-repeat border-2 shadow-md"
          :style="{ backgroundImage: `url(${charData.image_url})` }"
        ></div>
        <div>
          <p
            class="text-blue-100 font-extrabold text-3xl"
            v-html="charData.name"
          ></p>
        </div>
        <div
          class="border-2 p-2 text-justify text-blue-100 border-blue-300 m-2 w-4/5 shadow-md rounded-3xl"
        >
          <p
            class="p-2 overflow-clip overflow-hidden ..."
            :class="this.show ? 'h-auto' : 'h-32'"
          >
            {{ charData.about }}
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      charactherId: null,
      charData: null,
      show: false,
    };
  },
  created() {
    this.charactherId = this.$route.params.charactherId;

    axios
      .get(`https://api.jikan.moe/v3/character/${this.charactherId}`)
      .then((response) => {
        this.charData = response.data;
      });
  },
};
</script>

<style>
</style>