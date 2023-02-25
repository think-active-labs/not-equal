<template>
  <div class="w-full">
    <div class="h-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4" v-if="data?.theme">
      <div class="p-3 sm:p-6 border-r-2 border-b-2 border-black">
        <h1 class="font-title text-4xl mb-4 antialiased leading-9">{{ data?.theme.title }}</h1>
        <p class="font-subtitle text-lg sm:text-2xl">{{ data?.theme.description }}</p>
      </div>
      <div v-for="p, index in data?.projects"
        class="flex flex-col gap-2 p-3 sm:p-6 border-r-2 border-b-2 border-black justify-start">
        <nuxt-link :to="`${theme}/${p._path!.replace('/projects/', '')}`">
          <nuxt-img class="object-cover w-full" :src="p.image" />
        </nuxt-link>
        <div class="flex flex-col gap-4">
          <h1 class="font-title text-2xl antialiased leading-6">{{ p.title }}</h1>
          <p class="font-subtitle text-base md:text-xl text-clip">{{ p.description }}</p>
        </div>
        <nuxt-link :to="`${theme}/${p._path!.replace('/projects/', '')}`"
          class="text-xl sm:text-2xl self-end hover:underline">Read →</nuxt-link>
      </div>
      <div class="p-3 sm:p-6 border-r-2 border-b-2 border-black">
        <nuxt-link :to="`${data.nextChapter.slug}`">
          <nuxt-img class="object-cover w-full" :src="data.nextChapter.image" />
          <h2 class="font-title text-3xl mb-4 antialiased hover:underline">{{ data.nextChapter.title }}</h2>
          <h1 class="font-subtitle text-4xl md:text-5xl py-10 text-center sm:text-left hover:underline">
            Next Chapter
          </h1>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`theme-${route.params.theme}`, async () => {
  const themeQuery = queryContent('themes').where({ 'slug': route.params.theme }).only(['title', 'slug', 'description', 'image']).findOne()

  const allThemesQuery = queryContent('themes').only(['title', 'slug', 'image']).find()

  const projectsQuery = queryContent('projects')
    .where({ 'themes': { $contains: route.params.theme } })
    .only(['title', 'description', 'image', 'themes', '_path'])
    .find()

  const [theme, themeList, projects] = await Promise.all([themeQuery, allThemesQuery, projectsQuery])

  const currentThemeIndex = themeList.findIndex(t => t.slug == route.params.theme)

  let nextChapterIndex = themeList[currentThemeIndex + 1] ? currentThemeIndex + 1 : 0

  const nextChapter = themeList[nextChapterIndex]

  return { theme, projects, nextChapter }

})

const theme = ref(route.params.theme)

if (!data.value) { throw createError({ statusCode: 404, statusMessage: 'Page Not Found' }) }

</script>

<style scoped>

</style>