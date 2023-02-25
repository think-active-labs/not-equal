<template>
  <div class="w-full mb-20">
    <NuxtLink :to="`/`" class="absolute ml-5 mt-5 text-2xl font-semibold cursor-pointer">←
      <span class="hover:underline">Back</span>
    </NuxtLink>
    <h1 class="font-title text-8xl pt-24 pb-12 text-center">Not-Equal</h1>
    <div class="w-full border-b-2 sm:border-b-4 border-slate-800 p-12">
      <nuxt-img v-if="data?.image" :src="data?.image" class="object-contain m-auto m-w-full" :alt="data?.description" />
    </div>
    <ContentDoc class="prose sm:px-6 px-3 sm:prose-xl m-auto pt-20 py-3" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`aboug`, () => {
  return queryContent('about').findOne()
})
</script>

<style scoped>

</style>