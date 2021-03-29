<template>
 <div class="container min-h-full">

   <div v-if="type === 'anime'" class="flex flex-col items-center">
        <Animeinfo
          v-for="(results, index) in data"
          :key="index"
          :data="data[index]"
        />
      </div>
      <div v-else-if="type === 'character'">
        <CharInfo
          v-for="(results, index) in data"
          :key="index"
          :data="data[index]"
        />
      </div>
          </div>
  
</template>

<script>
import CharInfo from "../components/CharInfo.vue";
import Animeinfo from "../components/AnimeInfo.vue";
import { EventBus } from '../event-bus';

export default {

  components: {
    Animeinfo,
    CharInfo,

  },
 data() {
    return {
      data: [],
      type: "",
    } },
created(){
EventBus.$on('searchEvent',this.onEvent)
},
  methods: {
    onEvent(data, type) {
      this.data = data;
      this.type = type;
    },
  },
}

</script>

<style>

</style>