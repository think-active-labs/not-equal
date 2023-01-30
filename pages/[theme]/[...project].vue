<template>
  <div class="">
    <img v-if="data?.image" :src="data?.image" class="object-contain m-auto max-h-[10%]" :alt="data?.description" />

    <div class="flex flex-col sm:flex-row">
      <!-- Mobile back button -->
      <NuxtLink :to="`/${route.params.theme} `" class="sm:hidden p-4 text-2xl font-semibold">← <span
          class="hover:underline">Back</span>
      </NuxtLink>
      <a @click="$router.back()" class="sm:hidden p-4 text-2xl font-semibold">← <span
          class="hover:underline">Back</span></a>

      <!-- Back and partners box -->
      <div class="p-2 sm:text-center order-last sm:-order-1 sm:w-1/5">
        <a @click="$router.back()" class="text-2xl font-semibold cursor-pointer">← <span
            class="hover:underline">Back</span></a>

        <!-- Partners box -->
        <div class="p-2 sm:p-8 text-left prose-xl">
          <h2 class="text-4xl font-light text-gray-600 my-6">Partners</h2>
          <div v-for="partner in data?.partners" class="flex flex-col gap-12">
            <a :href="partner.link" target="_blank">
              <img v-if="partner.image" :src="partner.image" :alt="partner.name" />
              <h3 v-else>{{ partner.name }}</h3>
            </a>
          </div>
        </div>
      </div>

      <!-- Page content -->
      <div class="flex flex-col p-3 sm:p-6 pb-10">
        <div class="m-auto xl:w-1/2">

          <h1 class="font-title text-6xl">{{ data?.title }}</h1>

          <!-- Investigators -->
          <div class="flex flex-col sm:flex-row prose-xl">
            <div class="w-1/2">
              <h2>Project Lead</h2>
              <p v-for="project_lead in data?.project_lead">
                <a :href="`mailto:${project_lead?.email} `" v-if="project_lead.email">{{ project_lead.name }}</a>
              <p v-else>{{ project_lead.name }}</p>
              </p>
            </div>
            <div class="w-1/2">
              <h2>Co-investigators</h2>
              <p v-for="investigator in data?.investigators">
                <a :href="`mailto:${investigator?.email}`" v-if="investigator.email">{{
                  investigator.name
                }}</a>
              <p v-else>{{ investigator.name }}</p>
              </p>
            </div>
          </div>

          <!-- Page content -->
          <ContentRenderer :value="data" v-if="data" class="prose-xl" />
        </div>

        <!-- Page sections -->
        <div class="flex flex-col gap-8 mt-8">
          <div class="xl:w-1/2">
            <div v-for="section in data?.page_sections">
              <!-- Text Block -->
              <template v-if="section.type == 'text-block'" :v-html="section.text">
                <text-block :section="section" />
              </template>

              <!-- Image Gallery Block -->
              <template v-if="section.type == 'image-gallery-block'">
                <image-gallery :images="section.images" />
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