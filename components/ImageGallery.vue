<template>
  <div class="flex gap-3 overflow-auto flex-wrap justify-center">
    <div v-for="i, index in section.images" :key="index">
      <img class="object-cover w-full aspect-square sm:w-1/4 max-h-52 lg:max-h-80" :src="i.image" />
      <p>{{ i.caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

interface ImageBlock {
  type: string,
  images: [{
    image: string,
    caption: string
  }],
}

const props = defineProps<{
  section: ImageBlock
}>()
</script>