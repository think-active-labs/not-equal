<template>
  <div v-if="config">
    <div class="bg-zinc-800 py-4 px-3 sm:py-8 sm:px-12">
      <div class="flex gap-1">
        <img :src="i.image" class="w-1/2 sm:w-1/5" v-for="i in config['footer-images'].images" />
      </div>
    </div>
    <div class="bg-zinc-900 py-4 px-3 sm:py-3 sm:px-12 text-center sm:text-left">
      <p class="text-white text-sm">© Not-Equal.tech {{ today }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SiteConfig from "~/content/site-settings.json"
const today = new Date().getFullYear()
const config = SiteConfig
</script>

<style scoped>

</style>