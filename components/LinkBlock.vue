<template>
  <div class="xl:w-1/2 prose-xl m-auto">
    <h2>{{ section.title }}</h2>
    <div v-for="link in section.links" class="py-1">
      <div v-html="$md.render(link.content)"></div>
      <div class="flex flex-col sm:flex-row gap-4">
        <a v-for="button in link.buttons" :href="button.url" target="_blank"
          class="py-2 px-4 border-solid border-4 border-gray-600 text-2xl font-semibold hover:bg-gray-600 hover:text-white">{{
              button.text
          }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section'],
}
</script>