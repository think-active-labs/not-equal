<template>
  <div>
    <div v-html="parseMarkdown(section.text)" />
  </div>
</template>

<script setup lang="ts">
import { micromark } from 'micromark'

interface TextBlock {
  type: string,
  text: string
}

const props = defineProps<{
  section: TextBlock
}>()

const parseMarkdown = (s: string) => {
  return micromark(s)
}

</script>

<style scoped lang="scss">
.text-block p img {
  margin: auto;
}
</style>