<template>
  <div>
    <!-- {{ theme }} -->
    <h1>Theme page</h1>
    <pre>
      {{ data.projects }}
    </pre>
    <ContentRenderer :value="data.theme" v-if="data" />

  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`theme-${route.params.theme}`, async () => {
  const themeQuery = queryContent('themes').where({ 'slug': route.params.theme }).findOne()

  const projectsQuery = queryContent('projects')
    .where({ 'page': { $contains: route.params.theme } })
    .only(['title', 'description', 'header_image', 'page', '_path'])
    .find()

  const [theme, projects] = await Promise.all([themeQuery, projectsQuery])
  console.log('projects', projects)
  // console.log(theme, 'theme')
  // if (!theme) {
  //   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  //   console.log('theme not found')
  // }
  return { theme, projects }

})

// const theme = ref(route.params.theme)

// const data = await queryContent().where({ _file: 'themes.json' }).findOne()

// const projects = await queryContent().where({ _dir: route.params.theme }).only(['title', 'description']).find()

// console.log(route.params.theme)
</script>

<style scoped>

</style>