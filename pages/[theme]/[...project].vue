<template>
  <div class="w-full">

    <div class="w-full border-b-4 border-black">
      <img v-if="data?.image" :src="data?.image" class="object-contain m-auto max-h-[30%]" :alt="data?.description" />
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


    <!-- Page content -->
    <div class="flex flex-col p-3 sm:p-6 prose prose-xl m-auto sm:mb-40">
      <div class="prose prose-2xl">
        <h1 class="font-title text-6xl">{{ data?.title }}</h1>
        <h3 v-if="data?.description">{{ data?.description }}</h3>
      </div>

      <!-- Partners box -->
      <div class="prose-xl" v-if="data?.partners">
        <h2 class="text-4xl font-light text-gray-600 my-6">Partners</h2>
        <div v-for="partner in data?.partners" class="flex flex-col gap-12">
          <a :href="partner.link" target="_blank">
            <img v-if="partner.image" :src="partner.image" :alt="partner.name" />
            <h3 v-else>{{ partner.name }}</h3>
          </a>
        </div>
      </div>

      <!-- Investigators -->
      <div class="flex flex-col sm:flex-row">
        <div class="w-1/2" v-if="data?.project_lead">
          <h2>Project Lead</h2>
          <p v-for="project_lead in data?.project_lead">
            <a :href="`mailto:${project_lead?.email ? project_lead?.email : ''}`"
              class="no-underline hover:underline">{{
                project_lead.name
              }}</a>
          </p>
        </div>
        <div class="w-1/2" v-if="data?.investigators && data.investigators.length > 0">
          <h2>Co-investigators</h2>
          <p v-for="investigator in data?.investigators">
            <a :href="`mailto:${investigator?.email ? investigator.email : ''}`" class="no-underline hover:underline">{{
              investigator.name
            }}</a>
          </p>
        </div>
      </div>

      <!-- Project Type -->
      <div v-if="data?.project_types">
        <h2>Project Type</h2>
        <span v-for="projectType in data.project_types">
          {{ projectType }}
        </span>
      </div>

      <!-- Project Tags -->
      <div v-if="data?.project_tags">
        <h2>Project Tags</h2>
        <span v-for="projectTag, index in data.project_tags">
          <span>{{ projectTag }}</span><span v-if="index + 1 < data.project_tags.length">, </span>
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
</script>

<style scoped>

</style>