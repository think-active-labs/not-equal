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

  const homeQuery = queryContent().where({ _file: { $eq: 'index.md' } }).findOne()

  let [themes, home] = await Promise.all([themesQuery, homeQuery])

  // loop over the themes and add the oder from the "theme_order" key in the index.md page
  // then sort the themes so they display in the correct order
  themes = themes.map((theme) => {
    return {
      ...theme,
      order: home['theme_order'].findIndex((order: { slug: string }) => { return order.slug == theme.slug })
    }
  }).sort((a, b) => {
    return a.order > b.order ? 1 : -1
  })

  return {
    home,
    themes
  }
})

const activeTab = ref('home')

</script>

<style scoped>

</style>