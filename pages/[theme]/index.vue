<template>
  <div class="w-full">
    <div class="h-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4" v-if="data?.theme">
      <div class="p-3 sm:p-6 border-r-2 border-b-2 border-black">
        <h1 class="font-title text-4xl mb-4 antialiased leading-9">{{ data?.theme.title }}</h1>
        <p class="font-subtitle text-lg sm:text-2xl">{{ data?.theme.description }}</p>
      </div>
      <div v-for="p, index in data?.projects"
        class="flex flex-col gap-2 border-r-2 border-b-2 border-black justify-start relative">
        <nuxt-link :to="`${theme}/${p._path!.replace('/projects/', '')}`">
          <nuxt-img class="object-center object-cover w-full h-48" format="webp" sizes="sm:100vw md:50vw lg:400px"
            quality="60" :src="p.image" />
        </nuxt-link>
        <div class="flex flex-col gap-4 mb-8 p-2 sm:p-4">
          <h1 class="font-title text-2xl antialiased leading-6">{{ p.title }}</h1>
          <p class="font-subtitle text-base md:text-xl text-clip">{{ p.description }}</p>
          <span v-if="p?.project_types && p.project_types.length > 0">
            <span v-for="projectType, index in p.project_types" class="p-1">
              <span class="items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">{{
                projectType
              }} </span>
            </span>
          </span>
        </div>
        <nuxt-link :to="`${theme}/${p._path!.replace('/projects/', '')}`"
          class="text-xl sm:text-2xl absolute bottom-3 right-3 hover:underline">Read →</nuxt-link>
      </div>
      <div class="border-r-2 border-b-2 border-black relative">
        <nuxt-link :to="`${data.nextChapter.slug}`">
          <nuxt-img class="object-cover w-full max-h-40" :src="data.nextChapter.image" />
          <div class="p-2 sm:p-4 mb-10 flex gap-4 flex-col">
            <h2 class="font-title text-2xl antialiased leading-6">{{ data.nextChapter.title }}</h2>
            <p>{{ data.nextChapter.description }}</p>
          </div>
          <h1 class="font-subtitle text-2xl text-center sm:text-left hover:underline absolute bottom-3 right-3">
            Next Chapter →
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

  const allThemesQuery = queryContent('themes').only(['title', 'description', 'slug', 'image']).find()

  const projectsQuery = queryContent('projects')
    .where({ 'themes': { $contains: route.params.theme } })
    .only(['title', 'description', 'image', 'themes', '_path', 'project_types'])
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

<style scoped></style>