<template>
  <div>
    <ContentDoc />
  </div>
</template>

<script setup lang="ts">
// const { data } = await useAsyncData('themes', () => {
//   return queryContent().where({ _file: 'themes.json' }).findOne()
// })
const route = useRoute()

console.log(route.params.slug)
</script>

<style scoped>

</style>