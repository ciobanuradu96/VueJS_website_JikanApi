<template>
  <div>
    <img :src="data[0].image_url" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    axios
      .get("https://api.jikan.moe/v3/top/anime/1/bypopularity")
      .then((response) => {
        this.data = response.data.top;
      });
  },
};
</script>
