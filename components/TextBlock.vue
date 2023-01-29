<template>
  <div class="xl:w-1/2 prose-xl m-auto">
    <div v-html="$md.render(section.text)" class="text-block"></div>
  </div>
</template>

<script>
export default {
  props: ['section'],
}
</script>

<style scoped lang="scss">
.text-block p img {
  margin: auto;
}
</style>