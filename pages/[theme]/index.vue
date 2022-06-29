<script setup>
const route = useRoute()
const projects = await queryContent().where({ themes: { $contains: route.params.theme } }).only(['title', 'description']).find()
</script>

<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
      <ContentDoc v-slot="{ doc }">
        <div class="sm:h-80 flex flex-col p-6 border-r-2 border-b-2 border-black flex-1">
          <h1 class="font-header text-4xl mb-4">{{ doc.title }}</h1>
          <p class="font-subtitle">{{ doc.description }}</p>
        </div>
      </ContentDoc>
      <div v-for="p in projects" class="sm:h-80 p-6 border-r-2 border-b-2 border-black flex-1">
        <h1>{{ p.title }}</h1>
        <h2>{{ p.description }}</h2>
      </div>
    </div>
  </div>
</template>