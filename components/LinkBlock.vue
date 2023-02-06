<template>
  <div class="prose-xl m-auto">
    <h2>{{ section.title }}</h2>
    <div v-for="button in section.buttons" class="py-1">
      <div v-html="parseMarkdown(button.content)" />
      <div class="flex flex-col sm:flex-row gap-4">
        <a :href="button.url" target="_blank"
          class="py-2 px-4 border-solid border-4 border-gray-600 text-2xl font-semibold hover:bg-gray-600 hover:text-white">
          {{ button.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { micromark } from 'micromark'

interface LinkBlock {
  type: string,
  title: string,
  content: string,
  buttons: [{ text: string, url: string, content: string }],
}

const props = defineProps<{
  section: LinkBlock
}>()

const parseMarkdown = (s: string) => {
  return micromark(s)
}
</script>