<template>
  <div class="xl:w-1/2 prose-xl">
    <h2>{{ section.title }}</h2>
    <div v-if="section.video_embed_code" v-html="section.video_embed_code"></div>
    <div class="video-container" v-if="section.youtube_video_id">
      <iframe class="video" :src="`https://www.youtube.com/embed/${section.youtube_video_id}`" :title="section.title"
        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <div class="text-lg" v-html="parseMarkdown(section.caption)" />
  </div>
</template>

<script setup lang="ts">
import { micromark } from 'micromark'

interface VideoBlock {
  type: string,
  title: string,
  caption: string,
  video_embed_code: string,
  youtube_video_id: string
}

const props = defineProps<{
  section: VideoBlock
}>()

const parseMarkdown = (s: string) => {
  return micromark(s)
}

</script>

<style scoped lang="scss">
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>