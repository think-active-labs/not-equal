<script setup>
const route = useRoute()
const projects = await queryContent().where({ themes: { $contains: route.params.theme } }).only(['title', 'description']).find()
</script>

<template>
  <div>
    <div class="flex flex-wrap h-full">
      <ContentDoc v-slot="{ doc }">
        <div class="w-1/4 flex flex-col p-6">
          <h1 class="font-header text-4xl">{{ doc.title }}</h1>
          <h3 class="font-subtitle">{{ doc.description }}</h3>
        </div>
      </ContentDoc>
      <div v-for="p in projects" class="w-1/4 h-1/3 bg-white p-6">
        <h1>{{ p.title }}</h1>
        <h2>{{ p.description }}</h2>
      </div>
    </div>
  </div>
</template>