<template>
  <div>
    <ContentRenderer :value="data" v-if="data" />
    <pre>{{ data }}</pre>
    {{ route.params }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`project-${route.params.slug}`, () => {
  return queryContent('projects').where({ _path: { $eq: `/projects/${route.params.project[0]}` } }).findOne()
})
</script>

<style scoped>

</style>