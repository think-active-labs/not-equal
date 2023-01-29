<template>
  <div>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ error: Object })
const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>