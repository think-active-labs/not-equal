<template>
  <div class="xl:w-1/2 prose-xl m-auto">
    <h2>{{ section.title }}</h2>
    <div v-html="section.video_embed_code"></div>
    <div class="video-container">
      <iframe class="video" :src="section.src" :title="section.title" frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="text-lg">{{ section.caption }}</p>
  </div>
</template>

<script>
export default {
  props: ['section'],
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