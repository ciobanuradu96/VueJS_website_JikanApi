<template>
  <div
    class="flex items-center px-1 cursor-pointer"
    @click="clickEvent(type, id)"
  >
    <div
      class="w-20 h-14 bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url(${img})`,
      }"
    ></div>
    <div class="ml-2 w-24">
      <p class="text-blue-50 text-sm">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: null,
    name: null,
    type: null,
    id: null,
  },
  methods: {
    clickEvent(type, id) {
      this.$emit("goTo", type, id);
    },
  },
};
</script>

<style>
</style>