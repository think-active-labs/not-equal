<template>
  <div class="flex h-full min-h-screen">
    <SideNavigation />
    <div class="mt-[90px] sm:mt-0 sm:ml-[96px] flex w-full">
      <NuxtPage />
      <search-overlay :show="true" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>