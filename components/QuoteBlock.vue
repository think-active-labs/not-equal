<template>
  <div class="xl:w-1/2 prose-xl m-auto">
    <blockquote :class="`text-${section.alignment}`">
      <p class="text-4xl italic"><span class="text-4xl text-gray-800 font-serif">"</span>{{ section.quote }}<span
          class="text-4xl">"</span></p>
      <cite :class="`text-${section.alignment}`">
        {{ section.attribution }}
      </cite>
    </blockquote>
  </div>
</template>

<script setup lang="ts">
interface QuoteBlock {
  type: string,
  quote: string,
  attribution: string,
  alignment: string
}

const props = defineProps<{
  section: QuoteBlock
}>()

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