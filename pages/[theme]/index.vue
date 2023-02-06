<template>
  <div>
    <div class="h-full w-full flex flex-wrap">
      <div class="w-full sm:h-1/2 sm:w-1/3 lg:w-1/4 p-6 border-r-2 border-b-2 border-black">
        <h1 class="font-title text-5xl mb-4">{{ data?.theme.title }}</h1>
        <p class="font-subtitle text-lg sm:text-xl md:text-3xl">{{ data?.theme.description }}</p>
      </div>
      <!-- Project blocks -->
      <div v-for="p, index in data?.projects"
        class="w-full sm:h-1/2 sm:w-1/3 lg:w-1/4 flex flex-col gap-2 p-6 border-r-2 border-b-2 border-black justify-between overflow-hidden">
        <img class="object-contain" :src="p.image" />
        <h1 class="font-title text-4xl">{{ p.title }}</h1>
        <p class="font-subtitle text-base md:text-xl text-clip">{{ p.description }}</p>
        <nuxt-link :to="`${theme}/${p._path.replace('/projects/', '')}`" class="text-xl sm:text-4xl">→</nuxt-link>
      </div>
      <div class="sm:h-1/2 sm:w-1/3 lg:w-1/4 p-6 border-r-2 border-b-2 border-black">
        <h1 class="font-subtitle sm:text-4xl md:text-7xl mb-4">Next Chapter</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`theme-${route.params.theme}`, async () => {
  const themeQuery = queryContent('themes').where({ 'slug': route.params.theme }).findOne()

  const projectsQuery = queryContent('projects')
    .where({ 'themes': { $contains: route.params.theme } })
    .only(['title', 'description', 'image', 'themes', '_path'])
    .find()

  const [theme, projects] = await Promise.all([themeQuery, projectsQuery])

  return { theme, projects }

})

const theme = ref(route.params.theme)

// const data = await queryContent().where({ _file: 'themes.json' }).findOne()

// const projects = await queryContent().where({ _dir: route.params.theme }).only(['title', 'description']).find()

// console.log(route.params.theme)
</script>

<style scoped>

</style>