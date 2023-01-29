<template>
  <div class="flex gap-3 overflow-auto flex-wrap justify-center">
    <img v-for="i, index in images" :key="index" class="object-cover w-full aspect-square sm:w-1/4 max-h-52 lg:max-h-80"
      :src="i" />
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['images'],
  mounted() {
  }
};
</script>