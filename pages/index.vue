<template>
  <div class="flex h-screen min-h-screen">
    <!-- navbar -->
    <slot name="side-nav">
      <SideNavigation v-on:click="activeTab = 'index'" class="cursor-pointer" />
    </slot>

    <!-- page items -->
    <div class="mt-[90px] sm:mt-0 sm:ml-[96px] flex flex-col sm:flex-row w-full">
      <!-- home page -->
      <div class="flex flex-col sm:flex-row" :class="activeTab == 'home' ? 'sm:grow' : ''"
        v-on:click="activeTab = 'home'">
        <!-- page vertical title bar -->
        <div
          class="p-4 sm:w-24 sm:h-full flex flex-row sm:flex-col sm:text-center items-center justify-between cursor-pointer shrink-0 border-b-slate-800 border-b-2 sm:border-b-0 sm:border-r-slate-800 sm:border-r-4">
          <h2 class="rotated-header text-3xl sm:pt-24 font-link">Home</h2>
          <a href="/about" class="mb-4 text-4xl">→</a>
        </div>

        <!-- page content -->
        <div
          class="flex flex-col justify-start border-b-slate-800 border-b-2 sm:border-b-0 sm:border-r-slate-800 sm:border-r-4 overflow-auto"
          :class="activeTab == 'home' ? 'w-full' : 'hidden'">
          <img :src="data?.home.image" class="object-contain w-full max-h-[30%] sm:max-h-[50%] pt-2 sm:pt-6" />
          <div class="prose md:prose-2xl p-3 sm:p-12">
            <h1 class="font-normal font-title leading-tight antialiased">{{ data?.home.title }}
            </h1>
            <p class="text-4xl font-normal font-subtitle">{{ data?.home.description }}</p>
            <NuxtLink :to="`about`" class="font-subtitle text-2xl underline justify-end">View More
            </NuxtLink> <span>→</span>
          </div>
        </div>
      </div>

      <!-- dynamic tabs -->
      <div class="flex flex-col sm:flex-row" :class="activeTab == item.slug ? 'sm:grow' : ''"
        v-for="item in data?.themes" v-on:click="activeTab = item.slug">

        <!-- page vertical title bar -->
        <div v-if="item.order != -1"
          class="p-3 sm:w-24 sm:h-full flex flex-row sm:flex-col sm:text-center items-center justify-between cursor-pointer shrink-0 border-b-slate-800 border-b-2 sm:border-b-0 sm:border-r-slate-800 sm:border-r-4">
          <h2 class="rotated-header text-3xl sm:pt-24 font-link">{{ item.title }}</h2>
          <a href="#" class="mb-4 text-4xl">→</a>
        </div>

        <!-- page content -->
        <div
          class="flex flex-col justify-start border-b-slate-800 border-b-2 sm:border-b-0 sm:border-r-slate-800 sm:border-r-4 overflow-auto"
          :class="activeTab == item.slug ? 'w-full' : 'hidden'">
          <img :src="`${item.image}`" class="object-contain w-full max-h-[30%] sm:max-h-[50%] pt-2 sm:pt-6" />
          <div class="prose md:prose-2xl p-3 sm:p-12">
            <h1 class="text-4xl sm:text-8xl font-normal font-title leading-tight antialiased">{{ item.title }}</h1>
            <p class="text-4xl font-normal font-subtitle">{{ item.description }}</p>
            <NuxtLink :to="`/${item.slug}`" class="font-subtitle text-2xl underline justify-end">View More
            </NuxtLink> <span>→</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute()

definePageMeta({ layout: "home" })

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