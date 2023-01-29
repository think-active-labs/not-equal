<template>
  <div class="flex h-screen min-h-screen">
    <p>Main page</p>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute()

interface Config {
  title: string
  slug: string
  page: string
}

const { data } = await useAsyncData(`home`, async () => {
  const themesQuery = queryContent('themes/').only(['title', 'description', 'slug', 'image']).find()

  const themeConfigQuery = queryContent().where({ _file: { $eq: 'themes.json' } }).findOne()

  let [themes, themeConfig] = await Promise.all([themesQuery, themeConfigQuery])

  let themeConfigLookup = new Map<string, string>()

  themeConfig['themes'].forEach((config: { title: string, slug: string, page: string }) => {
    themeConfigLookup.set(config.page, config.slug)
  })

  console.log(themeConfigLookup, 'themeConfigLookup')

  let themesWithSlugs = themes.map((t) => {
    themeConfigLookup.get(t.page)
    return t
  })

  return themesWithSlugs
})

const activeTab = ref('home')

</script>

<style scoped>

</style>