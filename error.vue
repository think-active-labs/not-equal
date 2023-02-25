<template>
  <div class="flex h-full min-h-screen">
    <div class="flex flex-col w-full m-auto text-center">
      <p class="text-8xl antialiased leading-10">{{ props.error?.statusCode }}</p>
      <p class="text-3xl">{{ props.error?.statusMessage }}</p>
      <NuxtLink to="/" class="hover:underline">Go home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ error: Object })
</script>

<style scoped>

</style>