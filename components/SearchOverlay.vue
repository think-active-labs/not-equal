<template>
  <div
    class="mt-[90px] sm:mt-0 sm:ml-[96px] fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity min-h-full overflow-y-auto overflow-x-auto">
    <div class="bg-white">
      <ais-instant-search index-name="projects" :search-client="algolia">
        <input type="search" v-model="searchQuery" />
        <div v-if="result" class="flex flex-col">
          <div v-for="hit in result.hits">
            <pre>{{ hit }}</pre>
            <p><ais-highlight attribute="title" :hit="hit" /></p>
            <p><ais-highlight attribute="description" :hit="hit" /></p>
          </div>
          <p>{{ result.hits.length }} results</p>
        </div>
        <pre>
          {{ result }}
        </pre>
        <!-- <ais-configure :attributesToSnippet="['title', 'description']" />
        <div slot-scope="{ refine }">
          <input type="search" v-model="searchQuery" />
        </div>
        <ais-hits>
          <template v-slot="{ items }">
            <ul>
              <li v-for="item in items" :key="item.objectID">
                <ais-highlight attribute="title" :hit="item" />
              </li>
            </ul>
          </template>
        </ais-hits> -->
      </ais-instant-search>
    </div>
  </div>
</template>

<script setup lang="ts">
import debounce from 'lodash.debounce'
import { AisInstantSearch, AisSearchBox, AisHits, AisHighlight, AisConfigure } from 'vue-instantsearch/vue3/es'

const algolia = useAlgoliaRef()

const props = defineProps<{
  show: boolean
}>()

const { result, search } = useAlgoliaSearch('projects')

const searchQuery = ref('')

const update = debounce(async () => {
  console.log('Send API request')
  if (searchQuery.value && searchQuery.value.length > 3) {
    await search({ indexName: 'projects', query: searchQuery.value })
  }
}, 500)


watch(searchQuery, () => {
  update()
})

onMounted(async () => {
  console.log(process.env)
})

</script>

<style scoped>

</style>