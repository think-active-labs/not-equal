<template>
  <div>
    <pre>
    {{ projects }}
  </pre>
  </div>
</template>

<script setup lang="ts">
// const { data } = await useAsyncData('themes', () => {
//   return queryContent().where({ _file: 'themes.json' }).findOne()
// })
const route = useRoute()

const data = await queryContent().where({ _file: 'themes.json' }).findOne()

const projects = await queryContent().where({ _dir: route.params.theme }).only(['title', 'description']).find()

console.log(route.params.theme)
</script>

<style scoped>

</style>