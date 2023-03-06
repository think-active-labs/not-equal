<template>
  <div class="w-full">

    <div class="w-full sm:border-b-4 border-b-slate-800">
      <nuxt-img v-if="data?.image" :src="data?.image" class="object-contain m-auto max-h-[70vh]"
        :alt="data?.description" />
    </div>

    <div class="flex flex-col sm:flex-row">
      <!-- Mobile back button -->
      <NuxtLink :to="`/${route.params.theme}`" class="sm:hidden p-4 text-2xl font-semibold">← <span
          class="hover:underline">Back</span>
      </NuxtLink>
    </div>

    <NuxtLink :to="`/${route.params.theme}`"
      class="absolute ml-5 mt-5 invisible sm:visible text-2xl font-semibold cursor-pointer">←
      <span class="hover:underline">Back</span>
    </NuxtLink>

    <div class="sm:w-2/3 border-b-2 sm:border-b-4 border-b-slate-800 py-10 sm:py-20 m-auto px-3 sm:px-0 sm:text-center">
      <h1 class="text-4xl sm:text-7xl font-normal font-title leading-tight antialiased">{{ data?.title }}</h1>
      <h3 class="text-2xl sm:text-4xl mt-8" v-if="data?.description">{{ data?.description }}</h3>
      <!-- Project Tags -->
      <div v-if="data?.project_tags && data.project_tags.length > 0" class="mt-8">
        <span v-for="projectTag, index in data.project_tags" class="p-1">
          <span class="items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">{{
            projectTag
          }} </span>
        </span>
      </div>
    </div>
    <!-- Page content -->
    <div class="flex flex-col p-3 sm:p-6 prose sm:prose-lg m-auto sm:mb-40 prose-li:marker:text-gray-800">

      <!-- Partners box -->
      <div class="prose sm:prose-lg" v-if="data?.partners && data.partners.length > 0">
        <h2>Partners</h2>
        <div v-for="partner in data?.partners">
          <a :href="partner.link" target="_blank">
            <nuxt-img v-if="partner.partner_image" :src="partner.partner_image" :alt="partner.name"
              class="w-40 inline-block" />
            <h3 v-else>{{ partner.name }}</h3>
          </a>
        </div>
      </div>

      <!-- Investigators -->
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-1/2" v-if="data?.project_lead && data.project_lead.length > 0">
          <h2>Project Lead</h2>
          <a v-for="project_lead in data?.project_lead" :href="`mailto:${project_lead?.email ? project_lead?.email : ''}`"
            class="block no-underline hover:underline">{{
              project_lead.name
            }}</a>
        </div>
        <div class="sm:w-1/2" v-if="data?.investigators && data.investigators.length > 0">
          <h2>Co-investigators</h2>
          <a v-for="investigator in data?.investigators" :href="`mailto:${investigator?.email ? investigator.email : ''}`"
            class="block no-underline hover:underline">{{
              investigator.name
            }}</a>
        </div>
      </div>

      <!-- Project Type -->
      <div v-if="data?.project_types && data.project_types.length > 0">
        <h2>Project Type</h2>
        <span v-for="projectType in data.project_types">
          {{ projectType }}
        </span>
      </div>

      <!-- Page content -->
      <ContentRenderer :value="data" v-if="data" />
      <!-- Page sections -->
      <div class="flex flex-col">
        <div>
          <div v-for="section in data?.page_sections">
            <!-- Text Block -->
            <template v-if="section.type == 'text-block'" :v-html="section.text">
              <text-block :section="section" />
            </template>

            <!-- Image Gallery Block -->
            <template v-if="section.type == 'image-gallery-block'">
              <image-gallery :section="section" />
            </template>

            <!-- Link Block -->
            <template v-if="section.type == 'link-block'">
              <link-block :section="section" />
            </template>

            <!-- Video Block -->
            <template v-if="section.type == 'video-block'">
              <video-block :section="section" />
            </template>

            <!-- Quote Block -->
            <template v-if="section.type == 'quote-block'">
              <quote-block :section="section" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`project-${route.params.slug}`, () => {
  return queryContent('projects').where({ _path: { $eq: `/projects/${route.params.project[0]}` } }).findOne()
})

// if (!data.value) { throw createError({ statusCode: 404, statusMessage: 'Page Not Found' }) }
</script>

<style scoped></style>